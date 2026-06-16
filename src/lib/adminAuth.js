const TOKEN_KEY = 'bm_admin_token'

export function saveAdminToken(token) {
  sessionStorage.setItem(TOKEN_KEY, token)
}

export function getAdminToken() {
  return sessionStorage.getItem(TOKEN_KEY)
}

export function clearAdminToken() {
  sessionStorage.removeItem(TOKEN_KEY)
}

// Verifica lato client: controlla che il token esista e non sia scaduto
// (la verifica crittografica reale avviene sempre server-side)
export function verifyAdminToken() {
  const token = getAdminToken()
  if (!token) return false
  try {
    const dot = token.indexOf('.')
    if (dot === -1) return false
    const payloadB64 = token.slice(dot + 1)
    const payload = JSON.parse(atob(payloadB64.replace(/-/g, '+').replace(/_/g, '/')))
    return Date.now() < payload.exp
  } catch {
    return false
  }
}
