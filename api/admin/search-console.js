import { createSign } from 'crypto'
import { requireAdmin } from './verify.js'

// Genera JWT per il service account Google
async function getAccessToken(email, privateKey) {
  const now = Math.floor(Date.now() / 1000)
  const header  = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url')
  const payload = Buffer.from(JSON.stringify({
    iss: email,
    scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  })).toString('base64url')

  const sign = createSign('RSA-SHA256')
  sign.update(`${header}.${payload}`)
  const signature = sign.sign(privateKey, 'base64url')
  const jwt = `${header}.${payload}.${signature}`

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  })
  const data = await res.json()
  if (!data.access_token) throw new Error(data.error_description || 'Token GSC fallito')
  return data.access_token
}

async function queryGSC(token, siteUrl, body) {
  const endpoint = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  return res.json()
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.SITE_URL || 'https://www.blumentis.ai')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'GET')    return res.status(405).end()
  // if (!requireAdmin(req, res)) return  // auth disabilitata temporaneamente

  const email     = process.env.GSC_SERVICE_ACCOUNT_EMAIL
  const privateKey = process.env.GSC_PRIVATE_KEY?.replace(/\\n/g, '\n')
  const siteUrl   = process.env.GSC_SITE_URL || 'https://www.blumentis.ai/'

  // Graceful fallback — GSC è opzionale
  if (!email || !privateKey) {
    return res.status(200).json({ available: false, reason: 'GSC non configurato' })
  }

  const days = parseInt(req.query.days || '28')
  const endDate   = new Date().toISOString().slice(0, 10)
  const startDate = new Date(Date.now() - days * 86400_000).toISOString().slice(0, 10)

  try {
    const token = await getAccessToken(email, privateKey)

    // Query 1: metriche aggregate (nessuna dimensione)
    const [overall, topQueries, topPages] = await Promise.all([
      queryGSC(token, siteUrl, { startDate, endDate, rowLimit: 1 }),
      queryGSC(token, siteUrl, { startDate, endDate, dimensions: ['query'], rowLimit: 10 }),
      queryGSC(token, siteUrl, { startDate, endDate, dimensions: ['page'],  rowLimit: 10 }),
    ])

    const row = overall.rows?.[0] || {}

    return res.status(200).json({
      available: true,
      totals: {
        impressions: row.impressions || 0,
        clicks:      row.clicks      || 0,
        ctr:         row.ctr         || 0,
        position:    row.position    || 0,
      },
      topQueries: (topQueries.rows || []).map(r => ({
        query:       r.keys[0],
        impressions: r.impressions,
        clicks:      r.clicks,
        ctr:         r.ctr,
        position:    r.position,
      })),
      topPages: (topPages.rows || []).map(r => ({
        page:        r.keys[0].replace(siteUrl.replace(/\/$/, ''), '') || '/',
        impressions: r.impressions,
        clicks:      r.clicks,
        ctr:         r.ctr,
      })),
    })
  } catch (e) {
    console.error('[GSC]', e.message)
    return res.status(200).json({ available: false, reason: e.message })
  }
}
