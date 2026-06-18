import { captureUTMs, getUTMs } from './utm.js'

// Cattura UTM immediatamente al primo import del modulo
captureUTMs()

const GA_ID = import.meta.env.VITE_GA_ID

function gtag(...args) {
  if (GA_ID && typeof window.gtag === 'function') window.gtag(...args)
}

// Session ID persistente per tutta la visita
function getSessionId() {
  let id = sessionStorage.getItem('bm_sid')
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36)
    sessionStorage.setItem('bm_sid', id)
  }
  return id
}

// Salva evento nel DB — fire-and-forget, non blocca mai la UI
async function saveEvent(event_name, { page, label, metadata } = {}) {
  if (import.meta.env.DEV) return // le API Vercel non girano in locale
  try {
    const utms = getUTMs()
    await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_name,
        page: page || window.location.pathname,
        label,
        metadata,
        referrer: document.referrer || null,
        session_id: getSessionId(),
        // UTM params — sovrascrivono document.referrer per le campagne tracciate
        ...utms,
      }),
    })
  } catch {
    // silenzioso — il tracking non deve mai rompere la UX
  }
}

function trackBoth(event_name, params = {}) {
  gtag('event', event_name, params)
  saveEvent(event_name, { page: params.page, label: params.label, metadata: params })
}

export const track = {
  formSubmit:    (tipo)        => trackBoth('form_submit',  { label: tipo }),
  emailClick:    (email)       => trackBoth('email_click',  { label: email }),
  phoneClick:    ()            => trackBoth('phone_click',  {}),
  pdfDownload:   (lang)        => trackBoth('pdf_download', { label: lang }),
  ctaClick:      (label, page) => trackBoth('cta_click',    { label, page }),
  linkedinClick: ()            => trackBoth('linkedin_click', {}),
  homeView:      ()            => saveEvent('home_view'),
  formOpen:      ()            => saveEvent('form_open'),
  servicePageView: (service)   => trackBoth('service_page_view', { label: service }),
  contactPageView: ()          => gtag('event', 'contact_page_view'),
}

// Page view GA4
export function trackPageView(pathname) {
  if (GA_ID) {
    gtag('event', 'page_view', { page_path: pathname, page_title: document.title })
  }
}

// ── Scroll depth tracking ─────────────────────────────────
// Chiama questa funzione in un useEffect e usa il cleanup che restituisce
export function initScrollTracking() {
  let fired = false
  const handler = () => {
    if (fired) return
    const ratio = window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight)
    if (ratio >= 0.5) {
      fired = true
      saveEvent('scroll_50', { page: window.location.pathname })
      window.removeEventListener('scroll', handler)
    }
  }
  window.addEventListener('scroll', handler, { passive: true })
  return () => window.removeEventListener('scroll', handler)
}

// ── Heartbeat real-time (visitatori online) ───────────────
let _heartbeatTimer = null

export function startHeartbeat() {
  if (_heartbeatTimer) return
  if (import.meta.env.DEV) return // le API Vercel non girano in locale
  const sid = getSessionId()
  const beat = () => {
    fetch('/api/realtime', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId: sid }),
    }).catch(() => {})
  }
  beat()
  _heartbeatTimer = setInterval(beat, 20_000) // ogni 20 secondi
}

export function stopHeartbeat() {
  if (_heartbeatTimer) { clearInterval(_heartbeatTimer); _heartbeatTimer = null }
}
