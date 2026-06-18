import { captureUTMs } from './utm.js'

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

const PRODUCT_NAMES = {
  proline:   'proline_analytics',
  optimai:   'optimal',
  agentiche: 'piattaforme_agentiche',
  custom:    'sviluppi_custom',
  hardware:  'hardware',
}

export const track = {
  formSubmit:    (tipo)  => gtag('event', 'form_submit',    { label: tipo }),
  emailClick:    (email) => gtag('event', 'email_click',    { label: email }),
  phoneClick:    ()      => gtag('event', 'phone_click'),
  linkedinClick: ()      => gtag('event', 'linkedin_click'),
  formOpen:      ()      => gtag('event', 'form_open'),
  homeView:      ()      => gtag('event', 'home_view'),

  servicePageView:  (service)      => gtag('event', 'service_page_view', { label: service }),
  contactPageView:  ()             => gtag('event', 'contacts_page_view'),
  productMenuClick: (product_name) => gtag('event', 'product_click', { product_name }),
  marketClick:      (market_name)  => gtag('event', 'market_click', { market_name }),
  careersMenuClick: ()             => gtag('event', 'careers_menu_click'),

  discoverMoreClick: (product_id, page) => {
    const product_name = PRODUCT_NAMES[product_id] || product_id
    gtag('event', 'discover_more_click', { product_name, page })
  },

  brochureDownloadClick: (product_id, lang) => {
    const product_name = PRODUCT_NAMES[product_id] || product_id
    gtag('event', 'brochure_download_click', {
      product_name,
      file_name: `${product_name}_${lang}`,
      page: window.location.pathname,
    })
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
      gtag('event', 'scroll_50', { page: window.location.pathname })
      window.removeEventListener('scroll', handler)
    }
  }
  window.addEventListener('scroll', handler, { passive: true })
  return () => window.removeEventListener('scroll', handler)
}

export function startHeartbeat() {}
export function stopHeartbeat() {}
