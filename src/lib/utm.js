// Cattura i parametri UTM dall'URL e li salva in sessionStorage
// Così sopravvivono ai cambi di pagina ma non alla chiusura del tab
const KEY = 'bm_utms'
const PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']

export function captureUTMs() {
  const params = new URLSearchParams(window.location.search)
  const found = {}
  for (const p of PARAMS) {
    const v = params.get(p)
    if (v) found[p] = v
  }
  // Salva solo se ci sono UTM nell'URL (non sovrascrivere quelli già salvati)
  if (Object.keys(found).length > 0) {
    sessionStorage.setItem(KEY, JSON.stringify(found))
  }
}

export function getUTMs() {
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || '{}')
  } catch {
    return {}
  }
}

// Restituisce la sorgente più specifica disponibile:
// UTM > referrer > direct
export function getBestSource() {
  const utms = getUTMs()
  if (utms.utm_source) return utms.utm_source
  if (document.referrer) {
    try {
      return new URL(document.referrer).hostname.replace('www.', '')
    } catch {}
  }
  return 'direct'
}
