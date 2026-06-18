import { createClient } from '@supabase/supabase-js'
import { requireAdmin } from './verify.js'

// Passi del funnel di conversione — in ordine
const STEPS = [
  { key: 'home_view',   label: 'Visite homepage' },
  { key: 'scroll_50',  label: 'Scroll 50%' },
  { key: 'cta_click',  label: 'Click CTA' },
  { key: 'form_open',  label: 'Form aperto' },
  { key: 'form_submit', label: 'Form inviato' },
]

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.SITE_URL || 'https://www.blumentis.ai')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'GET') return res.status(405).end()
  if (!requireAdmin(req, res)) return

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const range = req.query.range || '30d'
  const since = new Date()
  if (range === '1d')   since.setDate(since.getDate() - 1)
  else if (range === '7d')  since.setDate(since.getDate() - 7)
  else since.setDate(since.getDate() - 30)

  // Una query per contare tutti i passi del funnel
  const { data, error } = await supabase
    .from('events')
    .select('event_name')
    .in('event_name', STEPS.map(s => s.key))
    .gte('created_at', since.toISOString())

  if (error) return res.status(500).json({ error: 'DB error' })

  const counts = {}
  for (const { event_name } of data) {
    counts[event_name] = (counts[event_name] || 0) + 1
  }

  const steps = STEPS.map((step, i) => {
    const count = counts[step.key] || 0
    const prev  = i === 0 ? count : (counts[STEPS[i - 1].key] || 0)
    const fromFirst = counts[STEPS[0].key] || 1
    return {
      key:        step.key,
      label:      step.label,
      count,
      pct:        fromFirst > 0 ? Math.round((count / fromFirst) * 100) : 0,
      dropOff:    i === 0 ? 0 : Math.round(((prev - count) / Math.max(1, prev)) * 100),
    }
  })

  return res.status(200).json({ steps })
}
