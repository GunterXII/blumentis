export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  // Test connessione Supabase
  let supabaseStatus = 'not_tested'
  let supabaseError = null
  const url = process.env.SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (url && key) {
    try {
      const { createClient } = await import('@supabase/supabase-js')
      const sb = createClient(url, key)
      const { error } = await sb.from('events').select('id').limit(1)
      supabaseStatus = error ? 'error' : 'ok'
      supabaseError = error?.message || null
    } catch (e) {
      supabaseStatus = 'exception'
      supabaseError = e.message
    }
  }

  return res.status(200).json({
    env: {
      SUPABASE_URL:              url ? url.slice(0, 30) + '…' : 'MISSING',
      SUPABASE_SERVICE_ROLE_KEY: key ? key.slice(0, 20) + '…' : 'MISSING',
      ADMIN_SECRET:              process.env.ADMIN_SECRET ? 'SET' : 'MISSING',
    },
    supabase: { status: supabaseStatus, error: supabaseError },
    node: process.version,
  })
}
