import { createClient } from '@supabase/supabase-js'

const ALLOWED_EVENTS = [
  'form_submit', 'email_click', 'phone_click', 'pdf_download',
  'cta_click', 'linkedin_click', 'contact_page_view', 'service_page_view',
  'home_view', 'scroll_50', 'form_open',
]

async function notifyNewLead({ page, label }) {
  const apiKey = process.env.RESEND_API_KEY
  const to     = process.env.NOTIFY_EMAIL
  if (!apiKey || !to) return

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'notify@blumentis.ai',
      to,
      subject: '🔔 Nuovo contatto su BluMentis',
      html: `
        <div style="font-family:sans-serif;max-width:480px;padding:32px">
          <h2 style="color:#E63946;margin:0 0 16px">Nuovo form inviato</h2>
          <p><b>Pagina:</b> ${page || '/'}</p>
          <p><b>Tipo:</b> ${label || 'Non specificato'}</p>
          <p><b>Ora:</b> ${new Date().toLocaleString('it-IT')}</p>
          <a href="https://www.blumentis.ai/admin" style="display:inline-block;margin-top:16px;background:#E63946;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none">
            Apri dashboard →
          </a>
        </div>
      `,
    }),
  })
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'POST') return res.status(405).end()

  const {
    event_name, page, label, metadata, referrer, session_id,
    // UTM params
    utm_source, utm_medium, utm_campaign, utm_term, utm_content,
  } = req.body || {}

  if (!event_name || !ALLOWED_EVENTS.includes(event_name)) {
    return res.status(400).json({ error: 'Invalid event' })
  }

  // Paese dal header Vercel (automatico, zero costo, zero API esterne)
  const country = req.headers['x-vercel-ip-country'] || null

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const { error } = await supabase.from('events').insert({
    event_name,
    page:         page?.slice(0, 200)       || null,
    label:        label?.slice(0, 200)      || null,
    metadata:     metadata                  || {},
    country,
    referrer:     referrer?.slice(0, 500)   || null,
    session_id:   session_id?.slice(0, 64)  || null,
    utm_source:   utm_source?.slice(0, 100) || null,
    utm_medium:   utm_medium?.slice(0, 100) || null,
    utm_campaign: utm_campaign?.slice(0, 100) || null,
    utm_term:     utm_term?.slice(0, 100)   || null,
    utm_content:  utm_content?.slice(0, 100) || null,
  })

  if (error) {
    console.error('[Track]', error)
    return res.status(500).json({ error: 'DB error' })
  }

  if (event_name === 'form_submit') {
    notifyNewLead({ page, label }).catch(e => console.error('[Notify]', e.message))
  }

  return res.status(200).json({ ok: true })
}
