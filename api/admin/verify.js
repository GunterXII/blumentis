import { createHmac } from 'crypto'

export function verifyToken(token, secret) {
  if (!token || !secret) return null
  try {
    const dot = token.indexOf('.')
    if (dot === -1) return null
    const sig = token.slice(0, dot)
    const payloadB64 = token.slice(dot + 1)
    const expected = createHmac('sha256', secret).update(payloadB64).digest('base64url')
    if (sig !== expected) return null
    const payload = JSON.parse(Buffer.from(payloadB64, 'base64url').toString())
    if (Date.now() > payload.exp) return null
    return payload
  } catch {
    return null
  }
}

export function getTokenFromRequest(req) {
  // Prova Authorization header
  const header = req.headers.authorization
  if (header?.startsWith('Bearer ')) return header.slice(7)
  // Prova cookie
  const cookies = req.headers.cookie || ''
  const match = cookies.match(/admin_token=([^;]+)/)
  return match ? match[1] : null
}

export function requireAdmin(req, res) {
  const token = getTokenFromRequest(req)
  const payload = verifyToken(token, process.env.ADMIN_SECRET)
  if (!payload) {
    res.status(401).json({ error: 'Non autorizzato' })
    return false
  }
  return true
}
