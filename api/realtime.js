// Contatore visitatori in tempo reale via Upstash Redis (sorted set con TTL)
// GET  /api/realtime  → { count: N, available: bool }
// POST /api/realtime  → { ok: true }  (heartbeat dal browser)

const REDIS_URL   = process.env.UPSTASH_REDIS_REST_URL
const REDIS_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN
const SET_KEY     = 'bm:visitors'
const TTL_MS      = 30_000 // 30 secondi di inattività = offline

async function redis(path) {
  const res = await fetch(`${REDIS_URL}/${path}`, {
    headers: { Authorization: `Bearer ${REDIS_TOKEN}` },
  })
  return res.json()
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(200).end()

  if (!REDIS_URL || !REDIS_TOKEN) {
    return res.status(200).json({ count: null, available: false })
  }

  const now = Date.now()

  // ── POST: heartbeat dal visitatore ────────────────────────
  if (req.method === 'POST') {
    const { sessionId } = req.body || {}
    if (!sessionId || typeof sessionId !== 'string' || sessionId.length > 64) {
      return res.status(400).end()
    }
    // Scored set: score = timestamp, member = sessionId
    await redis(`zadd/${encodeURIComponent(SET_KEY)}/${now}/${encodeURIComponent(sessionId)}`)
    return res.status(200).json({ ok: true })
  }

  // ── GET: conta i visitatori attivi ────────────────────────
  if (req.method === 'GET') {
    const stale = now - TTL_MS
    // Rimuovi sessioni scadute
    await redis(`zremrangebyscore/${encodeURIComponent(SET_KEY)}/0/${stale}`)
    // Conta rimanenti
    const { result: count } = await redis(`zcard/${encodeURIComponent(SET_KEY)}`)
    return res.status(200).json({ count: count || 0, available: true })
  }

  return res.status(405).end()
}
