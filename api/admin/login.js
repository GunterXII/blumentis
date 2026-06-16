import { createHmac } from 'crypto'
import { checkRateLimit } from '../lib/rateLimit.js'
import { verifyPassword } from '../lib/password.js'

function createToken(secret) {
  const payload = JSON.stringify({
    role: 'admin',
    exp: Date.now() + 8 * 60 * 60 * 1000, // 8 ore
  })
  const payloadB64 = Buffer.from(payload).toString('base64url')
  const sig = createHmac('sha256', secret).update(payloadB64).digest('base64url')
  return `${sig}.${payloadB64}`
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.SITE_URL || 'https://www.blumentis.ai')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  // ── Rate limiting per IP ─────────────────────────────────
  const ip = req.headers['x-forwarded-for']?.split(',')[0].trim() || req.socket?.remoteAddress || 'unknown'
  const { allowed, remaining, retryAfterSeconds } = await checkRateLimit(ip)

  if (!allowed) {
    const minutes = Math.ceil(retryAfterSeconds / 60)
    res.setHeader('Retry-After', String(retryAfterSeconds))
    return res.status(429).json({
      error: `Troppi tentativi falliti. Attendi ${minutes} minut${minutes === 1 ? 'o' : 'i'}.`,
    })
  }

  const { password } = req.body || {}
  const passwordHash = process.env.ADMIN_PASSWORD_HASH
  const secret = process.env.ADMIN_SECRET

  if (!passwordHash || !secret) {
    console.error('[Admin] Missing ADMIN_PASSWORD_HASH or ADMIN_SECRET env vars')
    return res.status(500).json({ error: 'Server misconfigured' })
  }

  if (!password || typeof password !== 'string') {
    return res.status(400).json({ error: 'Password required' })
  }

  // ── Verifica password con scrypt (timing-safe) ──────────
  const isValid = await verifyPassword(password, passwordHash)

  if (!isValid) {
    // Delay casuale per scoraggiare enumerazione
    await new Promise(r => setTimeout(r, 250 + Math.random() * 250))
    return res.status(401).json({
      error: 'Password non valida',
      remainingAttempts: Math.max(0, remaining - 1),
    })
  }

  const token = createToken(secret)

  // ── Cookie HttpOnly + Secure + SameSite=Strict ──────────
  res.setHeader(
    'Set-Cookie',
    [
      `admin_token=${token}`,
      'HttpOnly',
      'Secure',
      'SameSite=Strict',
      'Path=/api/admin',
      'Max-Age=28800', // 8 ore
    ].join('; ')
  )

  return res.status(200).json({ token, ok: true })
}
