import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'
import { getAdminToken, clearAdminToken } from '../lib/adminAuth'

const COLORS = ['#E63946', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#F8A5C2']
const EVENT_LABELS = {
  form_submit:       'Form contatti inviato',
  email_click:       'Clic su email',
  phone_click:       'Clic su telefono',
  pdf_download:      'Download brochure PDF',
  cta_click:         'Clic su pulsante CTA',
  linkedin_click:    'Clic su LinkedIn',
  contact_page_view: 'Visita pagina Contatti',
  service_page_view: 'Visita pagina Servizi',
  home_view:         'Visita homepage',
  scroll_50:         'Scroll 50% pagina',
  form_open:         'Form aperto (focus)',
}

const EVENT_DESCRIPTIONS = {
  form_submit:       'L\'utente ha compilato e inviato il form in /contatti — è un lead diretto',
  email_click:       'Click su un indirizzo email (info@blumentis.ai o PEC) — intento di contatto',
  phone_click:       'Click sul numero di telefono — indica interesse immediato all\'acquisto',
  pdf_download:      'Download di una brochure prodotto (SonIA/OlivIA, OptimaL, ProLine) — il campo "Dettaglio" mostra lingua e prodotto',
  cta_click:         'Click su un pulsante di call-to-action ("Scopri di più", "Contattaci", ecc.) — il campo "Dettaglio" mostra quale pulsante e in quale pagina',
  linkedin_click:    'Click sull\'icona LinkedIn nel footer — interesse al profilo aziendale',
  contact_page_view: 'L\'utente ha aperto la pagina /contatti',
  service_page_view: 'L\'utente ha aperto una pagina di servizio (SonIA, OptimaL, ProLine)',
  home_view:         'L\'utente ha caricato la homepage — è il primo step del funnel di conversione',
  scroll_50:         'L\'utente ha scrollato oltre il 50% della pagina — indica engagement con il contenuto',
  form_open:         'L\'utente ha cliccato sul form (focus) ma non lo ha ancora inviato — utile per misurare l\'abbandono',
}
const RANGES = [
  { key: '1d',  label: 'Oggi' },
  { key: '7d',  label: '7 giorni' },
  { key: '30d', label: '30 giorni' },
]
const COUNTRY_NAMES = {
  IT:'🇮🇹 Italia', US:'🇺🇸 USA', DE:'🇩🇪 Germania', FR:'🇫🇷 Francia',
  GB:'🇬🇧 UK', CH:'🇨🇭 Svizzera', ES:'🇪🇸 Spagna', NL:'🇳🇱 Olanda',
  CN:'🇨🇳 Cina', JP:'🇯🇵 Giappone', BR:'🇧🇷 Brasile',
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

  .ad-root { min-height:100vh; background:#080808; font-family:'DM Sans',sans-serif; color:#F0EDE8; }

  .ad-topbar {
    background:#0A0A0A; border-bottom:1px solid #141414;
    padding:0 32px; height:56px;
    display:flex; align-items:center; justify-content:space-between;
    position:sticky; top:0; z-index:100;
  }
  .ad-topbar-logo { font-family:'Bebas Neue',sans-serif; font-size:20px; letter-spacing:3px; }
  .ad-topbar-logo span { color:#3984e6; }
  .ad-topbar-right { display:flex; align-items:center; gap:12px; }
  .ad-badge { font-size:10px; letter-spacing:2px; text-transform:uppercase; padding:4px 10px; border:1px solid #2A2A2A; border-radius:100px; color:#888; }
  .ad-btn-sm { background:none; border:1px solid #2A2A2A; border-radius:8px; color:#888; padding:6px 14px; cursor:pointer; font-family:'DM Sans',sans-serif; font-size:12px; letter-spacing:1px; transition:all 0.2s; }
  .ad-btn-sm:hover { border-color:#E63946; color:#E63946; }
  .ad-btn-sm.green:hover { border-color:#4ECDC4; color:#4ECDC4; }

  .ad-main { padding:28px 32px; max-width:1400px; margin:0 auto; }

  .ad-header { margin-bottom:24px; }
  .ad-title { font-family:'Bebas Neue',sans-serif; font-size:clamp(26px,3.5vw,40px); letter-spacing:1px; line-height:1; margin-bottom:6px; }
  .ad-subtitle { font-size:12px; color:#777; font-weight:300; }

  .ad-toolbar { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; margin-bottom:24px; }
  .ad-range-tabs { display:flex; gap:4px; }
  .ad-range-tab { background:none; border:1px solid #2A2A2A; border-radius:8px; color:#888; padding:7px 16px; cursor:pointer; font-family:'DM Sans',sans-serif; font-size:12px; letter-spacing:1px; transition:all 0.2s; }
  .ad-range-tab:hover { border-color:#444; color:#bbb; }
  .ad-range-tab.active { background:#E63946; border-color:#E63946; color:#0D0D0D; font-weight:500; }
  .ad-toolbar-right { display:flex; align-items:center; gap:8px; flex-wrap:wrap; }

  .ad-kpi-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:12px; margin-bottom:20px; }
  .ad-kpi { background:#0D0D0D; border:1px solid #141414; border-radius:12px; padding:20px; }
  .ad-kpi-label { font-size:10px; letter-spacing:3px; text-transform:uppercase; color:#888; margin-bottom:10px; }
  .ad-kpi-val { font-family:'Bebas Neue',sans-serif; font-size:38px; line-height:1; color:#F0EDE8; }
  .ad-kpi-val.red { color:#E63946; }
  .ad-kpi-sub { font-size:11px; color:#666; margin-top:4px; }
  .ad-kpi-desc { font-size:10px; color:#444; margin-top:6px; line-height:1.4; }

  .ad-grid-2 { display:grid; grid-template-columns:2fr 1fr; gap:12px; margin-bottom:12px; }
  .ad-grid-3 { display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px; margin-bottom:12px; }
  .ad-grid-equal { display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:12px; }
  @media(max-width:1000px) { .ad-grid-2,.ad-grid-3,.ad-grid-equal { grid-template-columns:1fr; } }

  .ad-card { background:#0D0D0D; border:1px solid #141414; border-radius:12px; padding:22px; margin-bottom:0; }
  .ad-card-title { font-size:10px; letter-spacing:3px; text-transform:uppercase; color:#888; margin-bottom:4px; display:flex; align-items:center; justify-content:space-between; }
  .ad-card-desc { font-size:11px; color:#555; font-weight:300; margin-bottom:16px; padding-bottom:12px; border-bottom:1px solid #1A1A1A; line-height:1.5; }
  .ad-card-badge { font-size:9px; letter-spacing:1px; padding:3px 8px; border-radius:100px; background:#E6394611; color:#E63946; border:1px solid #E6394633; }
  .ad-card-badge.green { background:#4ECDC411; color:#4ECDC4; border-color:#4ECDC433; }

  /* GSC */
  .ad-gsc-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; margin-bottom:16px; }
  @media(max-width:700px) { .ad-gsc-grid { grid-template-columns:1fr 1fr; } }
  .ad-gsc-kpi { background:#080808; border:1px solid #0F0F0F; border-radius:8px; padding:14px; text-align:center; }
  .ad-gsc-kpi-val { font-family:'Bebas Neue',sans-serif; font-size:28px; color:#4ECDC4; line-height:1; }
  .ad-gsc-kpi-label { font-size:10px; letter-spacing:2px; text-transform:uppercase; color:#777; margin-top:4px; }

  /* Tables */
  .ad-table { width:100%; border-collapse:collapse; }
  .ad-table th { font-size:9px; letter-spacing:3px; text-transform:uppercase; color:#777; text-align:left; padding:0 0 10px; border-bottom:1px solid #222; }
  .ad-table td { font-size:13px; color:#bbb; font-weight:300; padding:9px 0; border-bottom:1px solid #141414; }
  .ad-table td:first-child { color:#F0EDE8; }
  .ad-table .num { text-align:right; color:#F0EDE8; font-weight:400; }
  .ad-event-tag { display:inline-block; padding:2px 9px; border-radius:100px; font-size:10px; letter-spacing:1px; text-transform:uppercase; background:#E6394611; color:#E63946; border:1px solid #E6394633; }
  .ad-pct-bar { display:inline-block; height:4px; background:#E63946; border-radius:2px; margin-left:8px; vertical-align:middle; }

  .ad-empty { text-align:center; padding:40px 0; font-size:12px; color:#666; font-weight:300; }
  .ad-loading { display:flex; align-items:center; justify-content:center; height:160px; font-size:11px; color:#666; letter-spacing:3px; text-transform:uppercase; }
  .ad-error { background:#E6394611; border:1px solid #E6394633; border-radius:8px; padding:12px 16px; font-size:13px; color:#E63946; margin-bottom:20px; }
  .ad-error a { color:#E63946; cursor:pointer; text-decoration:underline; }

  .ad-setup-box { border:1px dashed #1A1A1A; border-radius:12px; padding:24px; text-align:center; }
  .ad-setup-title { font-family:'Bebas Neue',sans-serif; font-size:20px; letter-spacing:1px; color:#aaa; margin-bottom:8px; }
  .ad-setup-text { font-size:12px; color:#777; font-weight:300; line-height:1.8; }
  .ad-setup-code { display:inline-block; background:#0A0A0A; border:1px solid #222; border-radius:6px; padding:4px 10px; font-size:11px; font-family:monospace; color:#aaa; margin:2px; }

  /* Real-time counter */
  .ad-realtime { display:flex; align-items:center; gap:7px; font-size:12px; color:#888; }
  .ad-realtime-dot { width:7px; height:7px; border-radius:50%; background:#4ECDC4; flex-shrink:0; animation:rtPulse 2s ease infinite; }
  @keyframes rtPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.3)} }

  /* Funnel */
  .ad-funnel { display:flex; flex-direction:column; gap:10px; }
  .ad-funnel-step { display:grid; grid-template-columns:160px 64px 1fr 64px; align-items:center; gap:12px; }
  .ad-funnel-label { font-size:12px; color:#bbb; font-weight:300; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
  .ad-funnel-count { font-family:'Bebas Neue',sans-serif; font-size:22px; color:#F0EDE8; text-align:right; line-height:1; }
  .ad-funnel-bar-wrap { background:#0A0A0A; border-radius:4px; height:8px; overflow:hidden; }
  .ad-funnel-bar { height:8px; border-radius:4px; transition:width 0.6s ease; }
  .ad-funnel-pct { font-size:11px; color:#777; text-align:right; white-space:nowrap; }
  .ad-funnel-pct.drop { color:#E63946; }

  /* UTM */
  .ad-utm-chips { display:flex; flex-wrap:wrap; gap:6px; }
  .ad-utm-chip { display:inline-flex; align-items:center; gap:6px; padding:4px 10px; border:1px solid #1A1A1A; border-radius:100px; font-size:11px; color:#888; }
  .ad-utm-chip-val { color:#F0EDE8; }
  @media(max-width:640px) { .ad-funnel-step { grid-template-columns:120px 48px 1fr; } .ad-funnel-pct { display:none; } }
`

// Tooltip riutilizzabile
const DarkTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background:'#0D0D0D', border:'1px solid #1A1A1A', borderRadius:8, padding:'10px 14px', fontFamily:"'DM Sans',sans-serif" }}>
      <div style={{ fontSize:11, color:'#555', marginBottom:4 }}>{label}</div>
      {payload.map((p, i) => (
        <div key={i} style={{ fontSize:14, color: p.color || '#E63946' }}>{p.value}</div>
      ))}
    </div>
  )
}

// Esporta eventi come CSV
function exportCSV(data) {
  const headers = ['Evento', 'Pagina', 'Label', 'Paese', 'Referrer', 'Data']
  const rows = data.recent.map(ev => [
    EVENT_LABELS[ev.event_name] || ev.event_name,
    ev.page || '',
    ev.label || '',
    ev.country || '',
    ev.referrer || '',
    new Date(ev.created_at).toLocaleString('it-IT'),
  ])
  const csv = [headers, ...rows]
    .map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(','))
    .join('\n')
  const blob = new Blob(['﻿' + csv], { type: 'text/csv;charset=utf-8;' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `blumentis-events-${new Date().toISOString().slice(0, 10)}.csv`
  a.click()
  URL.revokeObjectURL(url)
}

export default function AdminDashboard() {
  const [range, setRange]       = useState('7d')
  const [data, setData]         = useState(null)
  const [gsc, setGsc]           = useState(null)
  const [funnel, setFunnel]     = useState(null)
  const [realtime, setRealtime] = useState(null)
  const [loading, setLoading]   = useState(true)
  const [error, setError]       = useState('')
  const navigate = useNavigate()

  const authHeaders = useCallback(() => ({}), [])

  const fetchData = useCallback(async () => {
    setLoading(true); setError('')
    try {
      const res = await fetch(`/api/admin/events?range=${range}`, authHeaders())
      if (res.status === 401) { navigate('/admin', { replace: true }); return }
      if (!res.ok) throw new Error('Errore server')
      setData(await res.json())
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [range, navigate, authHeaders])

  const fetchGSC = useCallback(async () => {
    try {
      const days = range === '30d' ? 28 : range === '7d' ? 7 : 1
      const res = await fetch(`/api/admin/search-console?days=${days}`, authHeaders())
      if (res.ok) setGsc(await res.json())
    } catch {}
  }, [range, authHeaders])

  const fetchFunnel = useCallback(async () => {
    try {
      const res = await fetch(`/api/admin/funnel?range=${range}`, authHeaders())
      if (res.ok) setFunnel(await res.json())
    } catch {}
  }, [range, authHeaders])

  // Real-time counter — polling ogni 15 secondi
  useEffect(() => {
    const poll = async () => {
      try {
        const res = await fetch('/api/realtime')
        if (res.ok) setRealtime(await res.json())
      } catch {}
    }
    poll()
    const t = setInterval(poll, 15_000)
    return () => clearInterval(t)
  }, [])

  useEffect(() => { fetchData(); fetchGSC(); fetchFunnel() }, [fetchData, fetchGSC, fetchFunnel])

  const ga4Url = import.meta.env.VITE_GA4_URL || 'https://analytics.google.com'
  const maxCountry = data?.byCountry?.[0]?.value || 1
  const maxReferrer = data?.byReferrer?.[0]?.value || 1

  return (
    <>
      <style>{css}</style>
      <div className="ad-root">

        {/* TOPBAR */}
        <div className="ad-topbar">
          <div className="ad-topbar-logo">Blu<span>Mentis</span></div>
          <div className="ad-topbar-right">
            {realtime?.available && (
              <div className="ad-realtime">
                <div className="ad-realtime-dot" />
                <span>{realtime.count} online</span>
              </div>
            )}
            <span className="ad-badge">Admin</span>
            {data && <button className="ad-btn-sm green" onClick={() => exportCSV(data)}>↓ CSV</button>}
            <a href={ga4Url} target="_blank" rel="noreferrer" className="ad-btn-sm">GA4 ↗</a>
            <a href="/" className="ad-btn-sm">← Sito</a>
          </div>
        </div>

        <div className="ad-main">

          <div className="ad-header">
            <h1 className="ad-title">Analytics Dashboard</h1>
            <p className="ad-subtitle">Tracking eventi proprietario + Google Search Console</p>
          </div>

          {/* RANGE FILTER */}
          <div className="ad-toolbar">
            <div className="ad-range-tabs">
              {RANGES.map(r => (
                <button key={r.key} className={`ad-range-tab${range === r.key ? ' active' : ''}`} onClick={() => setRange(r.key)}>{r.label}</button>
              ))}
            </div>
          </div>

          {error && <div className="ad-error">{error} — <a onClick={fetchData}>riprova</a></div>}

          {loading ? (
            <div className="ad-loading">Caricamento...</div>
          ) : data ? (
            <>
              {/* KPI */}
              <div className="ad-kpi-grid">
                <div className="ad-kpi">
                  <div className="ad-kpi-label">Totale eventi</div>
                  <div className="ad-kpi-val red">{data.totals.all}</div>
                  <div className="ad-kpi-desc">Tutte le azioni tracciate sul sito: click, form, download, visite</div>
                </div>
                <div className="ad-kpi">
                  <div className="ad-kpi-label">Form inviati</div>
                  <div className="ad-kpi-val">{data.totals.form_submit}</div>
                  <div className="ad-kpi-desc">Compilazioni del form in /contatti — ogni invio è un lead diretto</div>
                </div>
                <div className="ad-kpi">
                  <div className="ad-kpi-label">Click email</div>
                  <div className="ad-kpi-val">{data.totals.email_click}</div>
                  <div className="ad-kpi-desc">Clic su info@blumentis.ai o blumentis@pec.it — intento di contatto</div>
                </div>
                <div className="ad-kpi">
                  <div className="ad-kpi-label">Click telefono</div>
                  <div className="ad-kpi-val">{data.totals.phone_click}</div>
                  <div className="ad-kpi-desc">Clic sul numero di telefono — indica interesse immediato</div>
                </div>
                <div className="ad-kpi">
                  <div className="ad-kpi-label">Download PDF</div>
                  <div className="ad-kpi-val">{data.totals.pdf_download}</div>
                  <div className="ad-kpi-desc">Download brochure prodotto (SonIA, OptimaL, ProLine) in IT/EN/ZH</div>
                </div>
                <div className="ad-kpi">
                  <div className="ad-kpi-label">Click CTA</div>
                  <div className="ad-kpi-val">{data.totals.cta_click}</div>
                  <div className="ad-kpi-desc">Clic sui pulsanti "Scopri di più", "Contattaci", "Richiedi demo"</div>
                </div>
                <div className="ad-kpi">
                  <div className="ad-kpi-label">LinkedIn</div>
                  <div className="ad-kpi-val">{data.totals.linkedin_click}</div>
                  <div className="ad-kpi-desc">Clic sull'icona LinkedIn nel footer del sito</div>
                </div>
              </div>

              {/* LINE CHART + PIE */}
              <div className="ad-grid-2">
                <div className="ad-card">
                  <div className="ad-card-title">Andamento eventi</div>
                  <div className="ad-card-desc">Numero totale di eventi tracciati per giorno nel periodo selezionato — utile per identificare picchi di traffico o campagne</div>
                  {data.timeline.length > 0 ? (
                    <ResponsiveContainer width="100%" height={220}>
                      <LineChart data={data.timeline} margin={{ top:4, right:4, bottom:0, left:-20 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1A1A1A" />
                        <XAxis dataKey="date" tickFormatter={d => d.slice(5)} tick={{ fill:'#777', fontSize:11 }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fill:'#777', fontSize:11 }} axisLine={false} tickLine={false} allowDecimals={false} />
                        <Tooltip content={<DarkTooltip />} />
                        <Line type="monotone" dataKey="count" stroke="#E63946" strokeWidth={2} dot={false} activeDot={{ r:4, fill:'#E63946' }} />
                      </LineChart>
                    </ResponsiveContainer>
                  ) : <div className="ad-empty">Nessun dato</div>}
                </div>

                <div className="ad-card">
                  <div className="ad-card-title">Distribuzione</div>
                  <div className="ad-card-desc">Proporzione di ogni tipo di azione rispetto al totale — mostra quali interazioni sono più frequenti</div>
                  {data.byType.length > 0 ? (
                    <>
                      <ResponsiveContainer width="100%" height={160}>
                        <PieChart>
                          <Pie data={data.byType} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={45} outerRadius={72} paddingAngle={3}>
                            {data.byType.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
                          </Pie>
                          <Tooltip formatter={(v, n) => [v, EVENT_LABELS[n] || n]} contentStyle={{ background:'#0D0D0D', border:'1px solid #1A1A1A', borderRadius:8, fontFamily:"'DM Sans',sans-serif" }} />
                        </PieChart>
                      </ResponsiveContainer>
                      <div style={{ display:'flex', flexDirection:'column', gap:5, marginTop:8 }}>
                        {data.byType.map((item, i) => (
                          <div key={i} style={{ display:'flex', alignItems:'center', gap:8, fontSize:12, color:'#aaa' }}>
                            <div style={{ width:7, height:7, borderRadius:'50%', background:COLORS[i % COLORS.length], flexShrink:0 }} />
                            <span style={{ flex:1 }}>{EVENT_LABELS[item.name] || item.name}</span>
                            <span style={{ color:'#888' }}>{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : <div className="ad-empty">Nessun dato</div>}
                </div>
              </div>

              {/* COUNTRY + REFERRAL */}
              <div className="ad-grid-equal">
                <div className="ad-card">
                  <div className="ad-card-title">Paesi visitatori</div>
                  <div className="ad-card-desc">Paese rilevato automaticamente dal server Vercel — nessuna API esterna, zero costo</div>
                  {data.byCountry.length > 0 ? (
                    <table className="ad-table">
                      <thead><tr><th>Paese</th><th className="num">Eventi</th><th style={{ width:100 }}></th></tr></thead>
                      <tbody>
                        {data.byCountry.map((c, i) => (
                          <tr key={i}>
                            <td>{COUNTRY_NAMES[c.name] || c.name}</td>
                            <td className="num">{c.value}</td>
                            <td>
                              <div style={{ height:4, background:'#111', borderRadius:2 }}>
                                <div style={{ height:4, background:COLORS[i % COLORS.length], borderRadius:2, width:`${Math.round(c.value / maxCountry * 100)}%` }} />
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="ad-empty">
                      Nessun dato paese.<br />
                      <span style={{ fontSize:11 }}>Disponibile su Vercel (header x-vercel-ip-country)</span>
                    </div>
                  )}
                </div>

                <div className="ad-card">
                  <div className="ad-card-title">Top sorgenti traffico</div>
                  <div className="ad-card-desc">Sito web di provenienza prima di arrivare su blumentis.ai — "Direct" significa link diretto, email o app mobile</div>
                  {data.byReferrer.length > 0 ? (
                    <table className="ad-table">
                      <thead><tr><th>Sorgente</th><th className="num">Click</th><th style={{ width:100 }}></th></tr></thead>
                      <tbody>
                        {data.byReferrer.map((r, i) => (
                          <tr key={i}>
                            <td>{r.name}</td>
                            <td className="num">{r.value}</td>
                            <td>
                              <div style={{ height:4, background:'#111', borderRadius:2 }}>
                                <div style={{ height:4, background:COLORS[i % COLORS.length], borderRadius:2, width:`${Math.round(r.value / maxReferrer * 100)}%` }} />
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : <div className="ad-empty">Nessuna sorgente registrata</div>}
                </div>
              </div>

              {/* GOOGLE SEARCH CONSOLE */}
              <div className="ad-card" style={{ marginBottom:12 }}>
                <div className="ad-card-title">
                  Google Search Console
                  {gsc?.available
                    ? <span className="ad-card-badge green">Connesso</span>
                    : <span className="ad-card-badge">Non configurato</span>
                  }
                </div>

                {gsc?.available ? (
                  <>
                    <div className="ad-gsc-grid">
                      <div className="ad-gsc-kpi">
                        <div className="ad-gsc-kpi-val">{gsc.totals.impressions.toLocaleString('it-IT')}</div>
                        <div className="ad-gsc-kpi-label">Impression</div>
                      </div>
                      <div className="ad-gsc-kpi">
                        <div className="ad-gsc-kpi-val">{gsc.totals.clicks.toLocaleString('it-IT')}</div>
                        <div className="ad-gsc-kpi-label">Click</div>
                      </div>
                      <div className="ad-gsc-kpi">
                        <div className="ad-gsc-kpi-val">{(gsc.totals.ctr * 100).toFixed(1)}%</div>
                        <div className="ad-gsc-kpi-label">CTR</div>
                      </div>
                      <div className="ad-gsc-kpi">
                        <div className="ad-gsc-kpi-val">{gsc.totals.position.toFixed(1)}</div>
                        <div className="ad-gsc-kpi-label">Posizione media</div>
                      </div>
                    </div>

                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
                      <div>
                        <div style={{ fontSize:10, letterSpacing:'2px', textTransform:'uppercase', color:'#333', marginBottom:12 }}>Top keyword</div>
                        <table className="ad-table">
                          <thead><tr><th>Query</th><th className="num">Imp.</th><th className="num">Click</th></tr></thead>
                          <tbody>
                            {gsc.topQueries.map((q, i) => (
                              <tr key={i}>
                                <td style={{ maxWidth:200, overflow:'hidden', textOverflow:'ellipsis', whiteSpace:'nowrap' }}>{q.query}</td>
                                <td className="num">{q.impressions}</td>
                                <td className="num">{q.clicks}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      <div>
                        <div style={{ fontSize:10, letterSpacing:'2px', textTransform:'uppercase', color:'#333', marginBottom:12 }}>Top pagine</div>
                        <table className="ad-table">
                          <thead><tr><th>Pagina</th><th className="num">Imp.</th><th className="num">CTR</th></tr></thead>
                          <tbody>
                            {gsc.topPages.map((p, i) => (
                              <tr key={i}>
                                <td>{p.page || '/'}</td>
                                <td className="num">{p.impressions}</td>
                                <td className="num">{(p.ctr * 100).toFixed(1)}%</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="ad-setup-box">
                    <div className="ad-setup-title">Configura Search Console</div>
                    <div className="ad-setup-text">
                      Aggiungi queste variabili in Vercel → Settings → Environment Variables:<br />
                      <code className="ad-setup-code">GSC_SERVICE_ACCOUNT_EMAIL</code>
                      <code className="ad-setup-code">GSC_PRIVATE_KEY</code>
                      <code className="ad-setup-code">GSC_SITE_URL</code>
                      <br /><br />
                      {gsc?.reason && <span style={{ color:'#333', fontSize:11 }}>Motivo: {gsc.reason}</span>}
                    </div>
                  </div>
                )}
              </div>

              {/* FUNNEL CONVERSIONI */}
              {funnel?.steps && (
                <div className="ad-card" style={{ marginBottom:12 }}>
                  <div className="ad-card-title">Funnel di conversione</div>
                  <div className="ad-card-desc">Percentuale di utenti che completano ogni step — dalla visita homepage all'invio del form contatti. Il drop-off in rosso indica dove si perdono i visitatori</div>
                  <div className="ad-funnel">
                    {funnel.steps.map((step, i) => {
                      const barColors = ['#E63946','#E87B43','#E6C229','#4ECDC4','#45B7D1']
                      return (
                        <div key={step.key} className="ad-funnel-step">
                          <div className="ad-funnel-label">{step.label}</div>
                          <div className="ad-funnel-count">{step.count.toLocaleString('it-IT')}</div>
                          <div className="ad-funnel-bar-wrap">
                            <div className="ad-funnel-bar" style={{ width:`${step.pct}%`, background: barColors[i] }} />
                          </div>
                          <div className={`ad-funnel-pct${i > 0 && step.dropOff > 0 ? ' drop' : ''}`}>
                            {i === 0 ? '100%' : step.pct > 0 ? `${step.pct}%` : '—'}
                            {i > 0 && step.dropOff > 0 && ` (-${step.dropOff}%)`}
                          </div>
                        </div>
                      )
                    })}
                    {funnel.steps[0]?.count === 0 && (
                      <div className="ad-empty" style={{ padding:'20px 0' }}>
                        Nessun dato funnel — inizia a ricevere visite per vedere il funnel
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* UTM BREAKDOWN */}
              {data.recent.some(e => e.utm_source) && (
                <div className="ad-card" style={{ marginBottom:12 }}>
                  <div className="ad-card-title">Campagne marketing (UTM)</div>
                  <div style={{ overflowX:'auto' }}>
                    <table className="ad-table">
                      <thead>
                        <tr><th>Source</th><th>Medium</th><th>Campaign</th><th className="num">Eventi</th></tr>
                      </thead>
                      <tbody>
                        {Object.entries(
                          data.recent
                            .filter(e => e.utm_source)
                            .reduce((acc, e) => {
                              const k = `${e.utm_source}|${e.utm_medium||'—'}|${e.utm_campaign||'—'}`
                              acc[k] = (acc[k] || 0) + 1
                              return acc
                            }, {})
                        )
                        .sort((a, b) => b[1] - a[1])
                        .slice(0, 10)
                        .map(([key, count]) => {
                          const [source, medium, campaign] = key.split('|')
                          return (
                            <tr key={key}>
                              <td>{source}</td>
                              <td style={{ color:'#555' }}>{medium}</td>
                              <td style={{ color:'#555' }}>{campaign}</td>
                              <td className="num">{count}</td>
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* RECENT EVENTS TABLE */}
              <div className="ad-card" style={{ marginBottom:12 }}>
                <div className="ad-card-title">
                  Ultimi eventi
                  {data.recent.length > 0 && (
                    <button className="ad-btn-sm green" onClick={() => exportCSV(data)} style={{ fontSize:10, padding:'3px 10px' }}>↓ Esporta CSV</button>
                  )}
                </div>
                <div className="ad-card-desc">Log cronologico delle ultime 50 azioni tracciate — "Dettaglio" mostra quale PDF è stato scaricato, quale CTA è stato cliccato, quale email</div>
                {data.recent.length > 0 ? (
                  <div style={{ overflowX:'auto' }}>
                    <table className="ad-table">
                      <thead>
                        <tr>
                          <th>Evento</th><th>Dettaglio</th><th>Pagina</th><th>Paese</th><th>Sorgente</th><th>Data</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.recent.map(ev => (
                          <tr key={ev.id}>
                            <td><span className="ad-event-tag">{EVENT_LABELS[ev.event_name] || ev.event_name}</span></td>
                            <td style={{ color:'#F0EDE8', fontSize:12 }}>{ev.label || '—'}</td>
                            <td style={{ color:'#777', fontSize:12 }}>{ev.page || '—'}</td>
                            <td style={{ color:'#bbb' }}>{ev.country ? (COUNTRY_NAMES[ev.country] || ev.country) : '—'}</td>
                            <td style={{ color:'#777', fontSize:12 }}>{ev.referrer ? ev.referrer.slice(0, 35) : 'Direct'}</td>
                            <td style={{ fontSize:11, color:'#666' }}>
                              {new Date(ev.created_at).toLocaleString('it-IT', { day:'2-digit', month:'2-digit', hour:'2-digit', minute:'2-digit' })}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="ad-empty">
                    Nessun evento tracciato ancora.<br />
                    <span style={{ fontSize:11, marginTop:8, display:'block' }}>
                      Il tracking si attiva automaticamente con i click su email, telefono, form e CTA.
                    </span>
                  </div>
                )}
              </div>

              {/* GLOSSARIO EVENTI */}
              <div className="ad-card">
                <div className="ad-card-title">Glossario eventi tracciati</div>
                <div className="ad-card-desc">Cosa significa ogni evento registrato nel sistema — utile per interpretare i dati sopra</div>
                <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(340px,1fr))', gap:'12px 24px' }}>
                  {Object.entries(EVENT_DESCRIPTIONS).map(([key, desc]) => (
                    <div key={key} style={{ borderLeft:'2px solid #1A1A1A', paddingLeft:12 }}>
                      <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:4 }}>
                        <span className="ad-event-tag" style={{ fontSize:9 }}>{EVENT_LABELS[key] || key}</span>
                      </div>
                      <div style={{ fontSize:11, color:'#666', lineHeight:1.6 }}>{desc}</div>
                    </div>
                  ))}
                </div>
              </div>

            </>
          ) : null}
        </div>
      </div>
    </>
  )
}
