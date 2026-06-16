// Rate limiting via Upstash Redis REST API (nessun SDK, solo fetch)
// Setup gratuito su upstash.com → crea database Redis → copia REST URL e token
// Se non configurato: warning in log, nessun blocco (fail-open)

const MAX_ATTEMPTS = 5
const WINDOW_SEC = 15 * 60 // 15 minuti

export async function checkRateLimit(identifier) {
  const redisUrl = process.env.UPSTASH_REDIS_REST_URL
  const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN

  if (!redisUrl || !redisToken) {
    console.warn('[RateLimit] Upstash non configurato — rate limiting disabilitato.')
    return { allowed: true, remaining: MAX_ATTEMPTS, retryAfterSeconds: 0 }
  }

  const key = `rl:admin:${identifier}`
  const headers = { Authorization: `Bearer ${redisToken}` }

  try {
    // INCR atomico
    const incrRes = await fetch(`${redisUrl}/incr/${encodeURIComponent(key)}`, { headers })
    const { result: count } = await incrRes.json()

    // Imposta TTL solo al primo tentativo
    if (count === 1) {
      fetch(`${redisUrl}/expire/${encodeURIComponent(key)}/${WINDOW_SEC}`, { headers }).catch(() => {})
    }

    if (count > MAX_ATTEMPTS) {
      const ttlRes = await fetch(`${redisUrl}/ttl/${encodeURIComponent(key)}`, { headers })
      const { result: ttl } = await ttlRes.json()
      return { allowed: false, remaining: 0, retryAfterSeconds: ttl > 0 ? ttl : WINDOW_SEC }
    }

    return { allowed: true, remaining: MAX_ATTEMPTS - count, retryAfterSeconds: 0 }
  } catch (err) {
    console.error('[RateLimit] Errore Upstash:', err.message)
    return { allowed: true, remaining: MAX_ATTEMPTS, retryAfterSeconds: 0 } // fail-open
  }
}
