import { useState,useEffect } from "react";
import video from "../assets/proline.mp4";
import Footer from './Footer';

const css = `
  .pla-root {
    --orange:      oklch(68% 0.26 50);
    --orange-dim:  oklch(68% 0.26 50 / 0.12);
    --orange-bdr:  oklch(68% 0.26 50 / 0.28);
    --orange-glow: oklch(68% 0.26 50 / 0.22);
    --orange-hi:   oklch(78% 0.18 50);
    --bg:          var(--bg-base,    #0d0f14);
    --surface:     var(--bg-surface, #13161e);
    --raised:      var(--bg-raised,  #1a1e28);
    --border:      var(--bg-border,  rgba(255,255,255,.07));
    --text:        var(--text-primary,   #f0f2f7);
    --text-2:      var(--text-secondary, #9aa3b8);
    --text-3:      var(--text-muted,     #5c6478);
    --radius: 14px;
    --shadow: 0 10px 32px rgba(0,0,0,.38);
    font-family: 'DM Sans', sans-serif;
    color: var(--text);
    background: var(--bg);
  }
  .pla-root *, .pla-root *::before, .pla-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .pla-root h1,.pla-root h2,.pla-root h3,.pla-root h4 { font-family: 'Syne', sans-serif; }

  /* ── TRUSTED BY ── */
  .pla-trusted {
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    padding: 32px 20px;
  }
  .pla-trusted-label {
    text-align: center; font-size: 11px; font-weight: 600;
    letter-spacing: .14em; text-transform: uppercase;
    color: var(--text-3); margin-bottom: 20px;
  }
  .pla-trusted-track {
    display: flex; gap: 24px;
    justify-content: center; align-items: center;
    flex-wrap: wrap;
  }
  .pla-logo-pill {
    display: flex; align-items: center; gap: 10px;
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 12px; padding: 12px 22px;
    white-space: nowrap; transition: border-color .22s;
    cursor: default;
  }
  .pla-logo-pill:hover { border-color: var(--orange-bdr); }
  .pla-logo-icon {
    width: 32px; height: 32px; border-radius: 8px;
    background: var(--orange-dim); border: 1px solid var(--orange-bdr);
    display: flex; align-items: center; justify-content: center;
    font-size: 15px;
  }
  .pla-logo-name { font-size: 13px; font-weight: 600; color: var(--text-2); }

  /* ── HERO ── */
  .pla-hero {
    position: relative;
    height: 100vh; min-height: 680px;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    overflow: hidden; text-align: center;
  }
  .pla-hero-video {
    position: absolute; inset: 0;
    width: 100%; height: 100%; object-fit: cover; z-index: 0;
    margin-top: 70px;
  }
  .pla-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(160deg, rgba(13,15,20,.88) 0%, oklch(18% 0.12 50 / 0.72) 60%, rgba(13,15,20,.92) 100%);
    z-index: 1;
  }
  .pla-hero-overlay::after {
    content: "";
    position: absolute; bottom: 0; left: 0; right: 0; height: 220px;
    background: linear-gradient(to bottom, transparent, rgba(13,15,20,.95));
  }
  .pla-hero-content {
    position: relative; z-index: 2;
    color: white; padding: 0 20px; max-width: 820px;
    display: flex; flex-direction: column; align-items: center;
  }
  .pla-hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--orange-dim); border: 1px solid var(--orange-bdr);
    color: var(--orange-hi);
    font-size: 11px; font-weight: 600; letter-spacing: .13em; text-transform: uppercase;
    padding: 6px 18px; border-radius: 999px; margin-bottom: 28px;
    backdrop-filter: blur(8px);
  }
  .pla-badge-dot {
    width: 6px; height: 6px; border-radius: 50%; background: var(--orange);
    animation: dotPulse 2s ease-in-out infinite;
  }
  @keyframes dotPulse { 0%,100%{opacity:1;} 50%{opacity:.3;} }
  .pla-hero-title {
    font-size: clamp(40px, 6.5vw, 76px);
    font-weight: 800; line-height: 1.06; margin-bottom: 10px; letter-spacing: -0.025em;
  }
  .pla-hero-subtitle {
    font-size: clamp(20px, 2.8vw, 30px);
    font-weight: 700; letter-spacing: -0.01em; margin-bottom: 22px;
    font-family: 'Syne', sans-serif;
  }
  .pla-hero-title .pla-accent, .pla-hero-subtitle .pla-accent {
    background: linear-gradient(135deg, var(--orange-hi), oklch(62% 0.24 50));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .pla-hero-sub {
    font-size: 17px; opacity: .72; max-width: 540px; margin: 0 auto 36px;
    line-height: 1.75; font-weight: 300;
  }
  .pla-hero-stats {
    position: relative; z-index: 2;
    display: flex; gap: 16px; margin-top: 52px; flex-wrap: wrap; justify-content: center;
  }
  .pla-hero-stat {
    background: rgba(13,15,20,.65);
    border: 1px solid rgba(255,255,255,.11);
    backdrop-filter: blur(14px);
    border-radius: 18px; padding: 20px 32px;
    text-align: center; min-width: 136px; transition: .28s;
  }
  .pla-hero-stat:hover { border-color: var(--orange-bdr); background: rgba(13,15,20,.80); transform: translateY(-3px); }
  .pla-hero-stat-val {
    display: block;
    font-size: 30px; font-weight: 800; font-family: 'Syne', sans-serif;
    color: var(--orange); line-height: 1;
  }
  .pla-hero-stat-lbl {
    display: block;
    font-size: 12px; color: rgba(255,255,255,.48);
    margin-top: 6px; letter-spacing: .04em;
  }

  /* ── PAGE ── */
  .pla-page { max-width: 1100px; margin: 0 auto; padding: 80px 32px; }

  /* ── SECTION HEAD ── */
  .pla-head { margin-bottom: 48px; }
  .pla-head h2 { font-size: clamp(28px, 4vw, 44px); font-weight: 800; letter-spacing: -0.025em; }
  .pla-head h2 .pla-accent { color: var(--orange); }
  .pla-bar {
    width: 100px; height: 4px; margin-top: 14px; border-radius: 99px;
    background: linear-gradient(90deg, var(--orange), oklch(62% 0.24 50 / 0.35));
    animation: barPulse 2.5s ease-in-out infinite;
  }
  @keyframes barPulse { 0%,100% { opacity:1; } 50% { opacity:.32; } }

  /* ── DIVIDER ── */
  .pla-divider {
    border: none; height: 1px; margin: 0 32px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
  }

  /* ── STATS ── */
  .pla-stats { display: flex; gap: 18px; margin-bottom: 64px; flex-wrap: wrap; }
  .pla-stat {
    width: 170px; height: 140px;
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 20px; box-shadow: var(--shadow);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    transition: .28s; cursor: default;
  }
  .pla-stat:hover { transform: translateY(-5px); border-color: var(--orange-bdr); box-shadow: 0 18px 40px rgba(0,0,0,.5); }
  .pla-stat-val { font-size: 34px; font-weight: 800; font-family: 'Syne', sans-serif; color: var(--orange); }
  .pla-stat-lbl { color: var(--text-3); margin-top: 6px; font-size: 13px; }

  /* ── PER CHI ── */
  .pla-perchi { display: flex; gap: 60px; margin-top: 32px; flex-wrap: wrap; }
  .pla-perchi-text { max-width: 420px; color: var(--text-2); line-height: 1.8; font-size: 15px; }
  .pla-checks { display: flex; flex-direction: column; gap: 14px; }
  .pla-check { display: flex; align-items: center; gap: 10px; font-weight: 500; color: var(--text); }
  .pla-check-ico {
    width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0;
    background: var(--orange-dim); border: 1px solid var(--orange-bdr);
    color: var(--orange); display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 700;
  }

  /* ── PILLS ── */
  .pla-pills { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 44px; }
  .pla-pill {
    background: var(--orange-dim); border: 1px solid var(--orange-bdr);
    color: var(--orange-hi); padding: 9px 18px; border-radius: 10px;
    font-weight: 500; font-size: 13px; opacity: 0;
    animation: fadeUpLoop 4s ease infinite;
  }
  @keyframes fadeUpLoop {
    0%   { opacity:0; transform:translateY(22px); }
    20%  { opacity:1; transform:translateY(0); }
    80%  { opacity:1; transform:translateY(0); }
    100% { opacity:0; transform:translateY(-18px); }
  }
  .pla-d1{animation-delay:0s;} .pla-d2{animation-delay:.5s;} .pla-d3{animation-delay:1s;}
  .pla-d4{animation-delay:1.5s;} .pla-d5{animation-delay:2s;}

  /* ── STEPS ── */
  .pla-steps { display: flex; align-items: center; gap: 28px; margin-top: 40px; flex-wrap: wrap; }
  .pla-step-card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 22px; padding: 40px; width: 450px; min-width: 300px;
    box-shadow: var(--shadow); transition: .38s;
  }
  .pla-step-card:hover { border-color: var(--orange-bdr); }
  .pla-step-num { font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: var(--orange); margin-bottom: 10px; }
  .pla-step-title { font-size: 24px; font-weight: 800; margin-bottom: 14px; color: var(--text); }
  .pla-step-desc { color: var(--text-2); line-height: 1.75; font-size: 15px; }
  .pla-dots { display: flex; gap: 8px; margin-top: 28px; }
  .pla-dot {
    width: 8px; height: 8px; border-radius: 50%; cursor: pointer; transition: .28s;
    background: var(--raised); border: 1px solid var(--border);
  }
  .pla-dot.active { background: var(--orange); border-color: var(--orange); transform: scale(1.35); }
  .pla-next-btn {
    background: var(--orange); color: #0d0f14;
    border: none; padding: 14px 22px; border-radius: var(--radius);
    font-size: 15px; font-weight: 700; cursor: pointer; transition: .22s;
    font-family: 'DM Sans', sans-serif; white-space: nowrap;
  }
  .pla-next-btn:hover { filter: brightness(1.1); transform: translateX(3px); }

  /* ── BENEFITS ── */
  .pla-benefits {
    list-style: none; display: flex; flex-direction: column; gap: 0;
    width: 460px;
  }
  .pla-benefits li {
    background: var(--surface); border: 1px solid var(--border);
    padding: 22px 24px; border-radius: var(--radius);
    position: relative; cursor: pointer; transition: .22s;
  }
  .pla-benefits li h3 { font-size: 15px; font-weight: 700; margin-bottom: 4px; color: var(--text); }
  .pla-benefits li p  { font-size: 13px; color: var(--text-3); }
  .pla-benefits li:hover { border-color: oklch(68% 0.26 50 / 0.40); background: oklch(68% 0.26 50 / 0.08); }
  .pla-benefit-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
  .pla-benefit-arrow { color: var(--text-3); font-size: 11px; flex-shrink: 0; margin-top: 2px; transition: .2s; }
  .pla-benefit-detail {
    font-size: 13px; color: var(--text-2); line-height: 1.7;
    margin-top: 10px; padding-top: 10px;
    border-top: 1px solid var(--border);
    animation: fadeInDetail .2s ease;
  }
  @keyframes fadeInDetail { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }

  /* Bolla desktop */
  .pla-benefits li .pla-bubble {
    position: absolute; left: calc(100% + 18px); top: 50%; transform: translateY(-50%) scale(0.85);
    width: 260px; background: oklch(68% 0.26 50 / 0.13);
    border: 1px solid oklch(68% 0.26 50 / 0.40); border-radius: 16px;
    padding: 20px 22px; pointer-events: none;
    opacity: 0; transition: opacity .22s, transform .28s cubic-bezier(.34,1.56,.64,1);
    z-index: 10;
  }
  .pla-benefits li:hover .pla-bubble { opacity: 1; transform: translateY(-50%) scale(1); }
  .pla-bubble::before {
    content: ""; position: absolute; right: 100%; top: 50%; transform: translateY(-50%);
    border: 8px solid transparent; border-right-color: oklch(68% 0.26 50 / 0.40);
  }
  .pla-bubble h4 { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 800; color: oklch(78% 0.18 50); margin-bottom: 8px; }
  .pla-bubble p  { font-size: 13px; color: #9aa3b8; line-height: 1.7; }

  /* ── SPEC CARDS ── */
  .pla-specs { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .pla-spec-card {
    background: var(--surface); border: 1px solid var(--border);
    padding: 24px; border-radius: 20px; box-shadow: var(--shadow); transition: .32s;
  }
  .pla-spec-card:hover { border-color: var(--orange-bdr); }
  .pla-spec-btn {
    background: var(--orange-dim); border: 1px solid var(--orange-bdr);
    color: var(--orange-hi); padding: 10px 16px; border-radius: 10px;
    font-weight: 700; font-size: 13px; cursor: pointer; width: 100%; text-align: left;
    font-family: 'DM Sans', sans-serif;
  }
  .pla-spec-tree {
    position: relative; margin-top: 18px; padding-left: 26px;
    display: flex; flex-direction: column; gap: 10px;
  }
  .pla-spec-tree::before {
    content: ""; position: absolute; left: 8px; top: 0; bottom: 0;
    width: 2px; background: var(--border);
  }
  .pla-spec-item {
    position: relative; background: var(--raised); border: 1px solid var(--border);
    padding: 10px 14px; border-radius: 10px; font-size: 13px; color: var(--text-2);
    opacity: 1; transform: translateX(-28px); transition: .42s;
  }
  .pla-spec-item::before {
    content: ""; position: absolute; left: -20px; top: 50%; transform: translateY(-50%);
    width: 7px; height: 7px; border-radius: 50%; background: var(--orange);
  }
  .pla-spec-card:hover .pla-spec-item { opacity: 1; transform: translateX(0); }
  .pla-spec-card:hover .pla-spec-item:nth-child(1) { transition-delay: .07s; }
  .pla-spec-card:hover .pla-spec-item:nth-child(2) { transition-delay: .2s; }
  .pla-spec-card:hover .pla-spec-item:nth-child(3) { transition-delay: .34s; }

  /* ── CTA ── */
  .pla-cta {
    background: linear-gradient(135deg, #0a0c12 0%, oklch(16% 0.1 50) 100%);
    border-top: 1px solid var(--border);
    color: white; padding: 100px 20px; margin-top: 80px;
  }
  .pla-cta-inner { max-width: 780px; margin: 0 auto; text-align: center; }
  .pla-cta-title { font-size: clamp(26px, 4vw, 42px); font-weight: 800; margin-bottom: 18px; letter-spacing: -0.02em; }
  .pla-cta-title .pla-accent { color: var(--orange); }
  .pla-cta-sub { opacity: .72; margin-bottom: 38px; line-height: 1.75; font-size: 15px; }
  .pla-cta-btns { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
  .pla-cta-primary {
    background: var(--orange); color: #0d0f14;
    padding: 14px 28px; border-radius: var(--radius); font-weight: 700;
    border: none; cursor: pointer; transition: .22s;
    font-family: 'DM Sans', sans-serif; font-size: 15px;
  }
  .pla-cta-primary:hover { filter: brightness(1.1); transform: translateY(-2px); box-shadow: 0 8px 24px var(--orange-glow); }
  .pla-cta-secondary {
    background: transparent; color: white;
    padding: 14px 28px; border-radius: var(--radius); font-weight: 500;
    border: 2px solid rgba(255,255,255,.22); cursor: pointer; transition: .22s;
    font-family: 'DM Sans', sans-serif; font-size: 15px;
  }
  .pla-cta-secondary:hover { background: rgba(255,255,255,.07); border-color: rgba(255,255,255,.5); }

  /* ── FOOTER ── */
  .pla-footer {
    background: #07080d; border-top: 1px solid rgba(255,255,255,.05);
    padding: 60px 32px 36px; color: var(--text-3);
  }
  .pla-footer-inner {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr auto; gap: 48px; align-items: start;
  }
  .pla-footer-brand h3 { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; color: var(--text); margin-bottom: 6px; }
  .pla-footer-brand p { font-size: 13px; line-height: 1.65; max-width: 300px; }
  .pla-footer-tag {
    display: inline-block; margin-top: 14px;
    background: var(--orange-dim); border: 1px solid var(--orange-bdr);
    color: var(--orange-hi); font-size: 11px; font-weight: 600;
    letter-spacing: .1em; text-transform: uppercase;
    padding: 4px 12px; border-radius: 999px;
  }
  .pla-footer-links { display: flex; flex-direction: column; gap: 10px; align-items: flex-end; }
  .pla-footer-links a { color: var(--text-3); text-decoration: none; font-size: 14px; font-weight: 500; transition: .2s; }
  .pla-footer-links a:hover { color: var(--orange-hi); }
  .pla-footer-bottom {
    max-width: 1100px; margin: 32px auto 0; padding-top: 22px;
    border-top: 1px solid rgba(255,255,255,.05);
    display: flex; gap: 12px; justify-content: space-between;
    flex-wrap: wrap; font-size: 12px; opacity: .4;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 700px) {
    .pla-hero { min-height: 100svh; }
    .pla-hero-stats { gap: 10px; margin-top: 32px; }
    .pla-hero-stat { padding: 12px 16px; min-width: 90px; }
    .pla-hero-stat-val { font-size: 20px; }

    .pla-steps { flex-direction: column; align-items: stretch; gap: 16px; }
    .pla-step-card { width: 100%; min-width: unset; padding: 24px 20px; }
    .pla-next-btn { width: 100%; text-align: center; }

    .pla-benefits { width: 100%; }
    .pla-benefits li .pla-bubble { display: none; }

    .pla-specs { grid-template-columns: 1fr; }
    .pla-perchi { flex-direction: column; }
    .pla-stats { justify-content: center; }
    .pla-stat { width: calc(50% - 9px); height: 110px; }
    .pla-stat-val { font-size: 26px; }

    .pla-page { padding: 60px 20px; }

    .pla-cta { padding: 64px 20px; }
    .pla-cta-btns { flex-direction: column; align-items: center; }
    .pla-cta-primary, .pla-cta-secondary { width: 100%; text-align: center; }

    .pla-footer-inner { grid-template-columns: 1fr; }
    .pla-footer-links { align-items: flex-start; }
    .pla-footer-bottom { flex-direction: column; gap: 4px; }
    .pla-trusted-track { gap: 12px; }
  }
`;

const STEPS = [
  { label: "STEP 1", title: "CONFIGURAZIONE", desc: "Crei la rappresentazione digitale del tuo processo produttivo (Digital Twin)." },
  { label: "STEP 2", title: "CONNESSIONE",    desc: "Colleghi le sorgenti dati: MES, Excel, CSV, MDF e altri. Nessun dato esce dall'impianto." },
  { label: "STEP 3", title: "MONITORAGGIO",   desc: "Il sistema calcola in tempo reale Cp/Cpk e altri indicatori chiave, rileva anomalie e attiva gli alert configurati." },
  { label: "STEP 4", title: "OTTIMIZZAZIONE", desc: "Analizza i trend, monitora processi presso i fornitori. Riduce fermi, rilavorazioni e scarti." },
];

const BENEFITS = [
  { title: "Maggiore consapevolezza", desc: "Analisi avanzata dei dati",         detail: "Dashboard intuitive ti danno una visione completa e immediata della qualità produttiva." },
  { title: "Qualità predittiva",      desc: "Previeni le non conformità",         detail: "Rileva le derive di processo prima che diventino difetti. Mantieni Cp/Cpk e altri indicatori sempre nei target." },
  { title: "Riduzione costi",         desc: "Meno fermi e rilavorazioni",         detail: "Meno scarti, meno rilavorazioni, meno fermi macchina. ROI misurabile già nei primi mesi." },
  { title: "Resi ridotti al minimo",  desc: "Prodotti centrati sui target",       detail: "Prodotti più stabili significano meno resi e reclami post-vendita." },
  { title: "Stabilità processo",      desc: "Monitoraggio continuo",              detail: "Controllo 24/7 con alert configurabili. Ogni anomalia notificata in tempo reale." },
  { title: "Flessibilità",            desc: "Adattamento immediato",              detail: "Nuovi prodotti, nuove linee, nuovi fornitori: pronto in pochi minuti senza riconfigurazioni." },
];

export default function ProLineAnalytics() {
  const [step, setStep] = useState(0);
  const [openBenefit, setOpenBenefit] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
   useEffect(() => {
      function handleResize() {
        setIsMobile(window.innerWidth <= 768);
      }
  
      window.addEventListener("resize", handleResize);
  
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  return (
    <div className="pla-root">
      <style>{css}</style>

      {/* ── HERO ── */}
      <section className="pla-hero">
        <video className="pla-hero-video" src={video} autoPlay muted loop playsInline />
        <div className="pla-hero-overlay" />
        <div className="pla-hero-content">
          <div className="pla-hero-badge">
            <span className="pla-badge-dot" />
            Quality Intelligence Platform
          </div>
          <h1 className="pla-hero-title">ProLine Analytics</h1>
          <p className="pla-hero-subtitle">
            Controllo totale. <span className="pla-accent">Qualità garantita.</span>
          </p>
          <p className="pla-hero-sub">
            La soluzione software specialistica per il controllo accurato del processo produttivo.
            Monitora, previene, traccia.
          </p>
        </div>
        <div className="pla-hero-stats">
          {[
            { val: "< 30s", lbl: "Latenza rilevamento" },
            { val: "100%",  lbl: "Tracciabilità" },
            { val: "24/7",  lbl: "Monitoraggio" },
          ].map((s) => (
            <div className="pla-hero-stat" key={s.lbl}>
              <span className="pla-hero-stat-val">{s.val}</span>
              <span className="pla-hero-stat-lbl">{s.lbl}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRUSTED BY ── */}
      {(() => {
        const logos = [
          { icon: "🏭", name: "PLB" },
          { icon: "⚙️", name: "CSMIC" },
        ];
        return (
          <div className="pla-trusted">
            <div className="pla-trusted-label">Già scelto da</div>
            <div className="pla-trusted-track">
              {logos.map((l, i) => (
                <div className="pla-logo-pill" key={i}>
                  <div className="pla-logo-icon">{l.icon}</div>
                  <span className="pla-logo-name">{l.name}</span>
                </div>
              ))}
            </div>
          </div>
        );
      })()}

      {/* ── PER CHI ── */}
      <div className="pla-page">
        <div className="pla-head">
          <h2>Per chi è <span className="pla-accent">ProLine Analytics</span>?</h2>
          <div className="pla-bar" />
        </div>
        <div className="pla-perchi">
          <p className="pla-perchi-text">
            Progettato per ambienti produttivi dove la qualità non ammette compromessi.
            Ideale per settori automotive, elettronica, industriale e altri.
          </p>
          <div className="pla-checks">
            {["On-premise","Dashboard real-time","Multi-utente","Multi-dispositivo","Alert intelligenti e personalizzabili"].map((f) => (
              <div className="pla-check" key={f}>
                <span className="pla-check-ico">✓</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="pla-pills">
          {[
            ["Monitoraggio Real-time","pla-d1"],
            ["Controllo Qualità","pla-d2"],
            ["100% Tracciabilità","pla-d3"],
            ["Alert & Notifiche personalizzabili","pla-d4"],
            ["Configurazione su misura","pla-d5"],
          ].map(([label, d]) => (
            <div className={`pla-pill ${d}`} key={label}>{label}</div>
          ))}
        </div>
      </div>

      <hr className="pla-divider" />

      {/* ── COME FUNZIONA ── */}
      <div className="pla-page">
        <div className="pla-head">
          <h2>Come <span className="pla-accent">funziona?</span></h2>
        </div>
        <div className="pla-steps">
          <div className="pla-step-card">
            <div className="pla-step-num">{STEPS[step].label}</div>
            <h3 className="pla-step-title">{STEPS[step].title}</h3>
            <p className="pla-step-desc">{STEPS[step].desc}</p>
            <div className="pla-dots">
              {STEPS.map((_, i) => (
                <div key={i} className={`pla-dot${i === step ? " active" : ""}`} onClick={() => setStep(i)} />
              ))}
            </div>
          </div>
          <button className="pla-next-btn" onClick={() => setStep((s) => (s + 1) % STEPS.length)}>
            Prossimo →
          </button>
        </div>
      </div>

      <hr className="pla-divider" />

      {/* ── BENEFICI ── */}
      <div className="pla-page">
        <div className="pla-head">
          <h2>Benefici <span className="pla-accent">Concreti</span></h2>
        </div>
        <ul className="pla-benefits">
          {BENEFITS.map((b, i) => (
            <li key={b.title} onClick={() => setOpenBenefit(openBenefit === i ? null : i)}>
              <div className="pla-benefit-header">
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
                {isMobile&&
                <span className="pla-benefit-arrow">{openBenefit === i ? "▲" : "▼"}</span>}
              </div>
              {/* Bolla desktop */}
              <div className="pla-bubble">
                <h4>{b.title}</h4>
                <p>{b.detail}</p>
              </div>
              {/* Accordion mobile */}
              {openBenefit === i && (
                <div className="pla-benefit-detail">{b.detail}</div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <hr className="pla-divider" />

      {/* ── SPECIFICHE ── */}
      <div className="pla-page">
        <div className="pla-head">
          <h2>Specifiche <span className="pla-accent">Tecniche</span></h2>
        </div>
        <div className="pla-specs">
          {[
            { title: "Monitoraggio in tempo reale ▼", items: ["Calcolo giornaliero indici Cp/Cpk","Indice qualità, Nelson Rules live","Rilevamento anomalie automatico"] },
            { title: "Controllo qualità avanzato ▼",  items: ["Identificazione componenti non conformi","Analisi completa dati EOL","Verifica conformità fornitori"] },
            { title: "Tracciabilità completa ▼",      items: ["Ogni seriale tracciato","Confronto con 500 unità precedenti e successive","Storia completa componenti"] },
            { title: "Alert e notifiche ▼",           items: ["Metriche personalizzate","Livelli gravità allarme / warning","Registrazione interventi per storico completo"] },
            { title: "Integrazione ▼",                items: ["Connessione MES locale (read-only)","Importazione CSV, Excel, MDF","Modalità ibrida disponibile"] },
            { title: "Sicurezza ▼",                   items: ["Dati on-premise","Nessun accesso esterno","Conformità normative"] },
          ].map((card) => (
            <div className="pla-spec-card" key={card.title}>
              <button className="pla-spec-btn">{card.title}</button>
              <ul className="pla-spec-tree">
                {card.items.map((item) => (
                  <li className="pla-spec-item" key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="pla-cta">
        <div className="pla-cta-inner">
          <h2 className="pla-cta-title">
            Pronto a trasformare il tuo<br />
            <span className="pla-accent">processo produttivo?</span>
          </h2>
          <p className="pla-cta-sub">
            Richiedi una demo personalizzata e scopri come{" "}
            <strong>ProLine Analytics</strong> può migliorare la qualità
            e ridurre i costi della tua produzione.
          </p>
          <div className="pla-cta-btns">
            <button className="pla-cta-primary">Richiedi Demo</button>
            <button className="pla-cta-secondary">Scarica Brochure</button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="pla-footer">
        <div className="pla-footer-inner">
          <div className="pla-footer-brand">
            <h3>ProLine Analytics</h3>
            <p>Quality Intelligence Platform per ambienti produttivi che non accettano compromessi sulla qualità dei propri processi.</p>
            <span className="pla-footer-tag">On-premise · 24/7 · Made in Italy</span>
          </div>
          <div className="pla-footer-links">
            <a href="#">↓ Scarica Brochure PDF</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contatti</a>
          </div>
        </div>
        <div className="pla-footer-bottom">
          <span>© {new Date().getFullYear()} ProLine Analytics. Tutti i diritti riservati.</span>
          <span>Made in Italy 🇮🇹</span>
        </div>
      </footer>
      <Footer />
    </div>
  );
}