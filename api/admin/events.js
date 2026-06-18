import { createClient } from '@supabase/supabase-js'
import { requireAdmin } from './verify.js'

function parseReferrer(raw) {
  if (!raw) return 'Direct'
  try {
    const url = new URL(raw)
    const h = url.hostname.replace('www.', '')
    if (h.includes('google'))    return 'Google'
    if (h.includes('linkedin'))  return 'LinkedIn'
    if (h.includes('instagram')) return 'Instagram'
    if (h.includes('facebook'))  return 'Facebook'
    if (h.includes('twitter') || h.includes('x.com')) return 'Twitter/X'
    if (h.includes('bing'))      return 'Bing'
    if (h.includes('blumentis')) return 'Internal'
    return h
  } catch {
    return 'Other'
  }
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.SITE_URL || 'https://www.blumentis.ai')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

  if (req.method === 'OPTIONS') return res.status(200).end()
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' })
  // if (!requireAdmin(req, res)) return  // auth disabilitata temporaneamente

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )

  const range = req.query.range || '7d'
  const since = new Date()
  if (range === '1d')  since.setDate(since.getDate() - 1)
  else if (range === '7d')  since.setDate(since.getDate() - 7)
  else if (range === '30d') since.setDate(since.getDate() - 30)
  else since.setDate(since.getDate() - 7)

  const { data: events, error } = await supabase
    .from('events')
    .select('id, event_name, page, label, metadata, country, referrer, created_at')
    .gte('created_at', since.toISOString())
    .order('created_at', { ascending: false })
    .limit(5000)

  if (error) {
    console.error('[Events API]', error)
    return res.status(500).json({ error: 'Database error' })
  }

  // Aggregazioni
  const byType = {}
  const byDay = {}
  const byCountry = {}
  const byReferrer = {}
  const pdfByProduct = {}
  const pageByProduct = {}
  const ctaByProduct = {}

  for (const ev of events) {
    byType[ev.event_name] = (byType[ev.event_name] || 0) + 1

    const day = ev.created_at.slice(0, 10)
    byDay[day] = (byDay[day] || 0) + 1

    if (ev.country) {
      byCountry[ev.country] = (byCountry[ev.country] || 0) + 1
    }

    const ref = parseReferrer(ev.referrer)
    byReferrer[ref] = (byReferrer[ref] || 0) + 1

    if (ev.label) {
      if (ev.event_name === 'pdf_download') {
        pdfByProduct[ev.label] = (pdfByProduct[ev.label] || 0) + 1
      }
      if (ev.event_name === 'service_page_view') {
        pageByProduct[ev.label] = (pageByProduct[ev.label] || 0) + 1
      }
      if (ev.event_name === 'cta_click') {
        ctaByProduct[ev.label] = (ctaByProduct[ev.label] || 0) + 1
      }
    }
  }

  // Timeline: riempie i giorni senza eventi con 0
  const timeline = []
  const cursor = new Date(since)
  const today = new Date()
  while (cursor <= today) {
    const d = cursor.toISOString().slice(0, 10)
    timeline.push({ date: d, count: byDay[d] || 0 })
    cursor.setDate(cursor.getDate() + 1)
  }

  const totals = {
    all:            events.length,
    form_submit:    byType['form_submit']    || 0,
    email_click:    byType['email_click']    || 0,
    phone_click:    byType['phone_click']    || 0,
    pdf_download:   byType['pdf_download']   || 0,
    cta_click:      byType['cta_click']      || 0,
    linkedin_click: byType['linkedin_click'] || 0,
  }

  const toSorted = obj => Object.entries(obj).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value)

  return res.status(200).json({
    totals,
    byType:       toSorted(byType),
    byCountry:    toSorted(byCountry).slice(0, 10),
    byReferrer:   toSorted(byReferrer).slice(0, 10),
    pdfByProduct: toSorted(pdfByProduct),
    pageByProduct: toSorted(pageByProduct),
    ctaByProduct: toSorted(ctaByProduct),
    timeline,
    recent: events.slice(0, 50),
  })
}
