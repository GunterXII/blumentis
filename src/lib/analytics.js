import { captureUTMs, getUTMs } from './utm.js'

captureUTMs()

const GA_ID = import.meta.env.VITE_GA_ID

;(function initGA4() {
  if (!GA_ID || document.getElementById('bm-ga4')) return
  const s = document.createElement('script')
  s.id = 'bm-ga4'; s.async = true
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  document.head.appendChild(s)
  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', GA_ID, { send_page_view: false })
})()

function gtag(...args) {
  if (GA_ID && typeof window.gtag === 'function') window.gtag(...args)
}

function getSessionId() {
  let id = sessionStorage.getItem('bm_sid')
  if (!id) {
    id = Math.random().toString(36).slice(2) + Date.now().toString(36)
    sessionStorage.setItem('bm_sid', id)
  }
  return id
}

const PRODUCT_NAMES = {
  proline:   'proline_analytics',
  optimai:   'optimal',
  agentiche: 'piattaforme_agentiche',
  custom:    'sviluppi_custom',
  hardware:  'hardware',
}

async function saveEvent(event_name, { page, label, metadata } = {}) {
  if (import.meta.env.DEV) return
  try {
    const utms = getUTMs()
    await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event_name,
        page:       page || window.location.pathname,
        label,
        metadata,
        referrer:   document.referrer || null,
        session_id: getSessionId(),
        ...utms,
      }),
    })
  } catch {}
}

function trackBoth(event_name, params = {}) {
  gtag('event', event_name, params)
  saveEvent(event_name, { page: params.page, label: params.label, metadata: params })
}

export const track = {
  formSubmit:    (tipo)  => trackBoth('form_submit',    { label: tipo }),
  emailClick:    (email) => trackBoth('email_click',    { label: email }),
  phoneClick:    ()      => trackBoth('phone_click',    {}),
  linkedinClick: ()      => trackBoth('linkedin_click', {}),
  formOpen:      ()      => saveEvent('form_open'),
  homeView:      ()      => { gtag('event', 'home_view'); saveEvent('home_view') },

  servicePageView:  (service)      => trackBoth('service_page_view', { label: service }),
  contactPageView:  ()             => gtag('event', 'contacts_page_view'),
  productMenuClick: (product_name) => gtag('event', 'product_click', { product_name }),
  marketClick:      (market_name)  => gtag('event', 'market_click', { market_name }),
  careersMenuClick: ()             => gtag('event', 'careers_menu_click'),

  discoverMoreClick: (product_id, page) => {
    const product_name = PRODUCT_NAMES[product_id] || product_id
    gtag('event', 'discover_more_click', { product_name, page })
    saveEvent('cta_click', { label: `Scopri ${product_name}`, page })
  },

  brochureDownloadClick: (product_id, lang) => {
    const product_name = PRODUCT_NAMES[product_id] || product_id
    const page = window.location.pathname
    gtag('event', 'brochure_download_click', {
      product_name,
      file_name: `${product_name}_${lang}`,
      page,
    })
    saveEvent('pdf_download', { label: `${product_name} · ${lang}`, page })
  },
}

export function trackPageView(pathname) {
  gtag('event', 'page_view', { page_path: pathname, page_title: document.title })
}

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

let _heartbeatTimer = null

export function startHeartbeat() {
  if (_heartbeatTimer) return
  if (import.meta.env.DEV) return
  const sid = getSessionId()
  const beat = () => {
    fetch('/api/realtime', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId: sid }),
    }).catch(() => {})
  }
  beat()
  _heartbeatTimer = setInterval(beat, 20_000)
}

export function stopHeartbeat() {
  if (_heartbeatTimer) { clearInterval(_heartbeatTimer); _heartbeatTimer = null }
}
