import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import video from "../assets/optimal.mp4";
import Footer from './Footer';
import { Link } from "react-router-dom";
import { Zap, Thermometer, Droplet, Factory, Wrench, Satellite } from "lucide-react";

const css = `
  .pla-trusted {

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
    background: var(--surface); 
    border-radius: 12px; padding: 12px 22px;
    white-space: nowrap; transition: border-color .22s; cursor: default;
  }
  .pla-logo-pill:hover { border-color: var(--blue-bdr); }
  .pla-logo-icon {
    width: 32px; height: 32px; border-radius: 8px;
    background: var(--blue-dim); border: 1px solid var(--blue-bdr);
    display: flex; align-items: center; justify-content: center; font-size: 15px;
  }
  .pla-logo-name { font-size: 13px; font-weight: 600; color: var(--text-2); }

  .opa-root {
    --blue:      oklch(62% 0.22 240);
    --blue-dim:  oklch(62% 0.22 240 / 0.12);
    --blue-bdr:  oklch(62% 0.22 240 / 0.30);
    --blue-glow: oklch(62% 0.22 240 / 0.24);
    --blue-hi:   oklch(74% 0.16 240);
    --cyan:      oklch(74% 0.18 200);
    --bg:          var(--bg-base,    #080c14);
    --surface:     var(--bg-surface, #0e1420);
    --raised:      var(--bg-raised,  #141c2c);
    --border:      var(--bg-border,  rgba(255,255,255,.07));
    --text:        var(--text-primary,   #eef2fa);
    --text-2:      var(--text-secondary, #8fa3c0);
    --text-3:      var(--text-muted,     #4a5e78);
    --radius: 14px;
    --shadow: 0 10px 32px rgba(0,0,0,.45);
    font-family: 'DM Sans', sans-serif;
    color: var(--text);
    background: var(--bg);
  }
  .opa-root *, .opa-root *::before, .opa-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .opa-root h1,.opa-root h2,.opa-root h3,.opa-root h4 { font-family: 'Syne', sans-serif; }

  .opa-hero {
    position: relative;
    height: 100vh; min-height: 620px;
    display: flex; align-items: center; justify-content: center;
    overflow: hidden; text-align: center;
  }
  .opa-hero-video {
    margin-top: 70px;
    position: absolute; inset: 0;
    width: 100%; height: 80%; object-fit: cover; z-index: 0;
  }
  .opa-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(160deg, rgba(8,12,20,.92) 0%, oklch(16% 0.14 240 / 0.65) 100%);
    z-index: 1;
    width: 100%; height: 80%; object-fit: cover;margin-top: 70px;

  }
  .opa-hero-content {
    position: relative; z-index: 2;
    color: white; padding: 0 20px; max-width: 820px;
  }
  .opa-hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--blue-dim); border: 1px solid var(--blue-bdr);
    color: var(--blue-hi);
    font-size: 11px; font-weight: 600; letter-spacing: .13em; text-transform: uppercase;
    padding: 6px 18px; border-radius: 999px; margin-bottom: 26px;
    backdrop-filter: blur(8px);
  }
  .opa-badge-dot {
    width: 6px; height: 6px; border-radius: 50%; background: var(--blue);
    animation: badgePulse 2s ease-in-out infinite;
  }
  @keyframes badgePulse { 0%,100%{opacity:1;transform:scale(1);} 50%{opacity:.5;transform:scale(1.5);} }
  .opa-hero-title {
    font-size: clamp(42px, 6.5vw, 78px);
    font-weight: 800; line-height: 1.05; margin-bottom: 22px; letter-spacing: -0.025em;
  }
  .opa-hero-title .opa-accent {
    background: linear-gradient(135deg, var(--blue-hi), var(--cyan));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .opa-hero-sub {
    font-size: 18px; opacity: .72; max-width: 560px; margin: 0 auto 38px;
    line-height: 1.75; font-weight: 300;
  }

  .opa-page { max-width: 1100px; margin: 0 auto; padding: 80px 32px; }

  .opa-head { margin-bottom: 48px; }
  .opa-head h2 { font-size: clamp(28px, 4vw, 44px); font-weight: 800; letter-spacing: -0.025em; }
  .opa-head h2 .opa-accent { color: var(--blue-hi); }
  .opa-bar {
    width: 100px; height: 4px; margin-top: 14px; border-radius: 99px;
    background: linear-gradient(90deg, var(--blue), oklch(62% 0.22 240 / 0.30));
    animation: barPulse 2.5s ease-in-out infinite;
  }
  @keyframes barPulse { 0%,100% { opacity:1; } 50% { opacity:.28; } }

  .opa-divider {
    border: none; height: 1px; margin: 0 32px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
  }

  .opa-stats { display: flex; gap: 18px; margin-bottom: 64px; flex-wrap: wrap; }
  .opa-stat {
    width: 300px; height: 200px; background: var(--surface); border: 1px solid var(--border);
    border-radius: 20px; box-shadow: var(--shadow);
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    transition: .28s; cursor: default;
  }
  .opa-stat:hover { transform: translateY(-5px); border-color: var(--blue-bdr); box-shadow: 0 18px 40px rgba(0,0,0,.55); }
  .opa-stat-val { font-size: 30px; font-weight: 800; font-family: 'Syne', sans-serif; color: var(--blue-hi); }
  .opa-stat-lbl { color: var(--text-3); margin-top: 6px; font-size: 13px; text-align: center; padding: 0 8px; }

  .opa-perchi { display: flex; gap: 60px; margin-top: 32px; flex-wrap: wrap; }
  .opa-perchi-text { max-width: 420px; color: var(--text-2); line-height: 1.8; font-size: 15px; }
  .opa-checks { display: flex; flex-direction: column; gap: 14px; }
  .opa-check { display: flex; align-items: center; gap: 10px; font-weight: 500; color: var(--text); }
  .opa-check-ico {
    width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0;
    background: var(--blue-dim); border: 1px solid var(--blue-bdr);
    color: var(--blue-hi); display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 700;
  }

  .opa-pills { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 44px; }
  .opa-pill {
    background: var(--blue-dim); border: 1px solid var(--blue-bdr);
    color: var(--blue-hi); padding: 9px 18px; border-radius: 10px;
    font-weight: 500; font-size: 13px; opacity: 0;
    animation: fadeUpLoop 4s ease infinite;
  }
  @keyframes fadeUpLoop {
    0%   { opacity:0; transform:translateY(22px); }
    20%  { opacity:1; transform:translateY(0); }
    80%  { opacity:1; transform:translateY(0); }
    100% { opacity:0; transform:translateY(-18px); }
  }
  .opa-d1{animation-delay:0s;} .opa-d2{animation-delay:.5s;} .opa-d3{animation-delay:1s;}
  .opa-d4{animation-delay:1.5s;} .opa-d5{animation-delay:2s;}

  .opa-steps { display: flex; align-items: center; gap: 28px; margin-top: 40px; flex-wrap: wrap; }
  .opa-step-card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 22px; padding: 40px; width: 450px; min-width: 300px;
    box-shadow: var(--shadow); transition: .38s;
  }
  .opa-step-card:hover { border-color: var(--blue-bdr); }
  .opa-step-num { font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color: var(--blue-hi); margin-bottom: 10px; }
  .opa-step-title { font-size: 24px; font-weight: 800; margin-bottom: 14px; color: var(--text); }
  .opa-step-desc { color: var(--text-2); line-height: 1.75; font-size: 15px; }
  .opa-dots { display: flex; gap: 8px; margin-top: 28px; }
  .opa-dot {
    width: 8px; height: 8px; border-radius: 50%; cursor: pointer; transition: .28s;
    background: var(--raised); border: 1px solid var(--border);
  }
  .opa-dot.active { background: var(--blue); border-color: var(--blue); transform: scale(1.35); }
  .opa-next-btn {
    background: var(--blue); color: #080c14;
    border: none; padding: 14px 22px; border-radius: var(--radius);
    font-size: 15px; font-weight: 700; cursor: pointer; transition: .22s;
    font-family: 'DM Sans', sans-serif; white-space: nowrap;
  }
  .opa-next-btn:hover { filter: brightness(1.12); transform: translateX(3px); }

  .opa-benefits {
    list-style: none; display: flex; flex-direction: column; gap: 0; width: 460px;
  }
  .opa-benefits li {
    background: var(--surface); border: 1px solid var(--border);
    padding: 22px 24px; border-radius: var(--radius);
    position: relative; cursor: pointer; transition: .22s;
  }
  .opa-benefits li h3 { font-size: 15px; font-weight: 700; margin-bottom: 4px; color: var(--text); }
  .opa-benefits li p  { font-size: 13px; color: var(--text-3); }
  .opa-benefits li:hover { border-color: oklch(62% 0.22 240 / 0.40); background: oklch(62% 0.22 240 / 0.08); }
  .opa-benefit-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
  .opa-benefit-arrow { color: var(--text-3); font-size: 11px; flex-shrink: 0; margin-top: 2px; }
  .opa-benefit-detail {
    font-size: 13px; color: var(--text-2); line-height: 1.7;
    margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--border);
    animation: fadeInDetail .2s ease;
  }
  @keyframes fadeInDetail { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }

  .opa-benefits li .opa-bubble {
    position: absolute; left: calc(100% + 18px); top: 50%; transform: translateY(-50%) scale(0.85);
    width: 260px; background: oklch(62% 0.22 240 / 0.13);
    border: 1px solid oklch(62% 0.22 240 / 0.40); border-radius: 16px;
    padding: 20px 22px; pointer-events: none;
    opacity: 0; transition: opacity .22s, transform .28s cubic-bezier(.34,1.56,.64,1); z-index: 10;
  }
  .opa-benefits li:hover .opa-bubble { opacity: 1; transform: translateY(-50%) scale(1); }
  .opa-bubble::before {
    content: ""; position: absolute; right: 100%; top: 50%; transform: translateY(-50%);
    border: 8px solid transparent; border-right-color: oklch(62% 0.22 240 / 0.40);
  }
  .opa-bubble h4 { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 800; color: var(--blue-hi); margin-bottom: 8px; }
  .opa-bubble p  { font-size: 13px; color: #8fa3c0; line-height: 1.7; }

  .opa-cases { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 18px; }
  .opa-case {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 18px; padding: 28px 24px; transition: .28s;
  }
  .opa-case:hover { border-color: var(--blue-bdr); transform: translateY(-4px); box-shadow: 0 16px 36px rgba(0,0,0,.45); }
  .opa-case-icon {
    width: 40px; height: 40px; border-radius: 12px;
    background: var(--blue-dim); border: 1px solid var(--blue-bdr);
    display: flex; align-items: center; justify-content: center;
    font-size: 18px; margin-bottom: 14px;
  }
  .opa-case h3 { font-size: 15px; font-weight: 700; margin-bottom: 8px; color: var(--text); }
  .opa-case p  { font-size: 13px; color: var(--text-3); line-height: 1.65; }

  .opa-specs { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .opa-spec-card {
    background: var(--surface); border: 1px solid var(--border);
    padding: 24px; border-radius: 20px; box-shadow: var(--shadow); transition: .32s;
  }
  .opa-spec-card:hover { border-color: var(--blue-bdr); }
  .opa-spec-btn {
    background: var(--blue-dim); border: 1px solid var(--blue-bdr);
    color: var(--blue-hi); padding: 10px 16px; border-radius: 10px;
    font-weight: 700; font-size: 13px; cursor: pointer; width: 100%; text-align: left;
    font-family: 'DM Sans', sans-serif;
  }
  .opa-spec-tree {
    position: relative; margin-top: 18px; padding-left: 26px;
    display: flex; flex-direction: column; gap: 10px;
  }
  .opa-spec-tree::before {
    content: ""; position: absolute; left: 8px; top: 0; bottom: 0;
    width: 2px; background: var(--border);
  }
  .opa-spec-item {
    position: relative; background: var(--raised); border: 1px solid var(--border);
    padding: 10px 14px; border-radius: 10px; font-size: 13px; color: var(--text-2);
    opacity: 1; transform: translateX(-28px); transition: .42s;
  }
  .opa-spec-item::before {
    content: ""; position: absolute; left: -20px; top: 50%; transform: translateY(-50%);
    width: 7px; height: 7px; border-radius: 50%; background: var(--blue);
  }
  .opa-spec-card:hover .opa-spec-item { opacity: 1; transform: translateX(0); }
  .opa-spec-card:hover .opa-spec-item:nth-child(1) { transition-delay: .07s; }
  .opa-spec-card:hover .opa-spec-item:nth-child(2) { transition-delay: .2s; }
  .opa-spec-card:hover .opa-spec-item:nth-child(3) { transition-delay: .34s; }

  .opa-faq { display: flex; flex-direction: column; gap: 12px; }
  .opa-faq-item {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: var(--radius); overflow: hidden; transition: .22s;
  }
  .opa-faq-item:hover { border-color: var(--blue-bdr); }
  .opa-faq-q {
    width: 100%; background: none; border: none; color: var(--text);
    padding: 20px 24px; text-align: left; font-family: 'DM Sans', sans-serif;
    font-size: 15px; font-weight: 600; cursor: pointer;
    display: flex; justify-content: space-between; align-items: center; gap: 12px;
  }
  .opa-faq-arrow { color: var(--blue-hi); font-size: 18px; transition: .28s; flex-shrink: 0; }
  .opa-faq-item.open .opa-faq-arrow { transform: rotate(180deg); }
  .opa-faq-a {
    max-height: 0; overflow: hidden; transition: max-height .35s ease, padding .25s;
    padding: 0 24px; color: var(--text-2); font-size: 14px; line-height: 1.75;
  }
  .opa-faq-item.open .opa-faq-a { max-height: 200px; padding: 0 24px 20px; }

  .opa-cta {
    background: linear-gradient(135deg, #060910 0%, oklch(14% 0.12 240) 100%);
    border-top: 1px solid var(--border);
    color: white; padding: 100px 20px; margin-top: 80px;
  }
  .opa-cta-inner { max-width: 780px; margin: 0 auto; text-align: center; }
  .opa-cta-title { font-size: clamp(26px, 4vw, 42px); font-weight: 800; margin-bottom: 18px; letter-spacing: -0.02em; }
  .opa-cta-title .opa-accent { color: var(--blue-hi); }
  .opa-cta-sub { opacity: .72; margin-bottom: 38px; line-height: 1.75; font-size: 15px; }
  .opa-cta-btns { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
  .opa-cta-primary {
    background: var(--blue); color: #080c14;
    padding: 14px 28px; border-radius: var(--radius); font-weight: 700;
    border: none; cursor: pointer; transition: .22s;
    font-family: 'DM Sans', sans-serif; font-size: 15px;
  }
  .opa-cta-primary:hover { filter: brightness(1.12); transform: translateY(-2px); box-shadow: 0 8px 24px var(--blue-glow); }
  .opa-cta-secondary {
    background: transparent; color: white;
    padding: 14px 28px; border-radius: var(--radius); font-weight: 500;
    border: 2px solid rgba(255,255,255,.22); cursor: pointer; transition: .22s;
    font-family: 'DM Sans', sans-serif; font-size: 15px; text-decoration: none;
    display: inline-flex; align-items: center;
  }
  .opa-cta-secondary:hover { background: rgba(255,255,255,.07); border-color: rgba(255,255,255,.5); }

  .opa-footer {
    background: #040608; border-top: 1px solid rgba(255,255,255,.05);
    padding: 60px 32px 36px; color: var(--text-3);
  }
  .opa-footer-inner {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr auto; gap: 48px; align-items: start;
  }
  .opa-footer-brand h3 { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; color: var(--text); margin-bottom: 6px; }
  .opa-footer-brand p { font-size: 13px; line-height: 1.65; max-width: 300px; }
  .opa-footer-tag {
    display: inline-block; margin-top: 14px;
    background: var(--blue-dim); border: 1px solid var(--blue-bdr);
    color: var(--blue-hi); font-size: 11px; font-weight: 600;
    letter-spacing: .1em; text-transform: uppercase; padding: 4px 12px; border-radius: 999px;
  }
  .opa-footer-links { display: flex; flex-direction: column; gap: 10px; align-items: flex-end; }
  .opa-footer-links a { color: var(--text-3); text-decoration: none; font-size: 14px; font-weight: 500; transition: .2s; }
  .opa-footer-links a:hover { color: var(--blue-hi); }
  .opa-footer-bottom {
    max-width: 1100px; margin: 32px auto 0; padding-top: 22px;
    border-top: 1px solid rgba(255,255,255,.05);
    display: flex; gap: 12px; justify-content: space-between;
    flex-wrap: wrap; font-size: 12px; opacity: .4;
  }

  @media (max-width: 900px) { .opa-cases { grid-template-columns: 1fr 1fr; } }
  @media (max-width: 700px) {
    .opa-step-title{ font-size:1.1rem}
    .opa-hero { min-height: 100svh; }
    .opa-hero-sub { font-size: 15px; }
    .opa-stats { flex-direction: column; gap: 10px; }
    .opa-stat { width: 100%; height: auto; padding: 20px; flex-direction: row; justify-content: flex-start; gap: 16px; }
    .opa-stat-val { font-size: 24px; }
    .opa-steps { flex-direction: column; align-items: stretch; gap: 16px; }
    .opa-step-card { width: 100%; min-width: unset; padding: 24px 20px; }
    .opa-next-btn { width: 100%; text-align: center; }
    .opa-benefits { width: 100%; }
    .opa-benefits li .opa-bubble { display: none; }
    .opa-specs { grid-template-columns: 1fr; }
    .opa-cases { grid-template-columns: 1fr; }
    .opa-perchi { flex-direction: column; }
    .opa-page { padding: 60px 20px; }
    .opa-faq-q { font-size: 14px; padding: 16px 18px; }
    .opa-faq-a { padding: 0 18px; }
    .opa-faq-item.open .opa-faq-a { padding: 0 18px 16px; }
    .opa-cta { padding: 64px 20px; }
    .opa-cta-btns { flex-direction: column; align-items: center; }
    .opa-cta-primary, .opa-cta-secondary { width: 100%; text-align: center; justify-content: center; }
    .opa-footer-inner { grid-template-columns: 1fr; }
    .opa-footer-links { align-items: flex-start; }
    .opa-footer-bottom { flex-direction: column; gap: 4px; }
  }
`;

const LOGOS = [{ icon: "🏭", name: "Barbieri Group" }];

const CASE_ICONS = [
  <Zap color="#F59E0B" size={24} />,
  <Thermometer color="#3B82F6" size={24} />,
  <Droplet color="#F97316" size={24} />,
  <Factory color="#6B7280" size={24} />,
  <Wrench color="#2563EB" size={24} />,
  <Satellite color="#22C55E" size={24} />,
];

export default function Optimai() {
  const { t } = useTranslation();
  const [step, setStep]               = useState(0);
  const [openFaq, setOpenFaq]         = useState(null);
  const [openBenefit, setOpenBenefit] = useState(null);
  const [isMobile, setIsMobile]       = useState(window.innerWidth <= 768);

  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  // Array tradotti
  const steps    = t("optimai.steps",    { returnObjects: true });
  const benefits = t("optimai.benefits", { returnObjects: true });
  const checks   = t("optimai.checks",   { returnObjects: true });
  const pills    = t("optimai.pills",    { returnObjects: true });
  const specs    = t("optimai.specs",    { returnObjects: true });
  const cases    = t("optimai.cases",    { returnObjects: true });
  const faqs     = t("optimai.faqs",     { returnObjects: true });

  const heroStats = [
    { val: "100%",      lbl: t("optimai.heroStats.local") },
    { val: "Real-time", lbl: t("optimai.heroStats.realtime") },
    { val: "50+",       lbl: t("optimai.heroStats.variables") },
  ];

  return (
    <div className="opa-root">
      <style>{css}</style>

      {/* ── HERO ── */}
      <section className="opa-hero">
        <video className="opa-hero-video" src={video} autoPlay muted loop playsInline />
        <div className="opa-hero-overlay" />
        <div className="opa-hero-content">
          <div className="opa-hero-badge">
            <span className="opa-badge-dot" />
            {t("optimai.badge")}
          </div>
          <h1 className="opa-hero-title">
            {t("optimai.heroLine1")}<br />
            <span className="opa-accent">{t("optimai.heroAccent")}</span>
          </h1>
          <p className="opa-hero-sub">{t("optimai.heroSub")}</p>
        </div>
      </section>

      

      {/* ── STATS + PER CHI ── */}
      <div className="opa-page">
        <div className="opa-stats">
          {heroStats.map((s) => (
            <div className="opa-stat" key={s.lbl}>
              <span className="opa-stat-val">{s.val}</span>
              <span className="opa-stat-lbl">{s.lbl}</span>
            </div>
          ))}
        </div>

        <div className="opa-head">
          <h2>
            {t("optimai.perchiTitle.0")}
            <span className="opa-accent">{t("optimai.perchiTitle.1")}</span>
            {t("optimai.perchiTitle.2")}
          </h2>
          <div className="opa-bar" />
        </div>
        <div className="opa-perchi">
          <p className="opa-perchi-text">{t("optimai.perchiText")}</p>
          <div className="opa-checks">
            {Array.isArray(checks) && checks.map((f, i) => (
              <div className="opa-check" key={i}>
                <span className="opa-check-ico">✓</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="opa-pills">
          {Array.isArray(pills) && pills.map((label, i) => (
            <div className={`opa-pill opa-d${i + 1}`} key={i}>{label}</div>
          ))}
        </div>
      </div>

      <hr className="opa-divider" />

      {/* ── COME FUNZIONA ── */}
      <div className="opa-page">
        <div className="opa-head">
          <h2>
            {t("optimai.comeTitle.0")}
            <span className="opa-accent">{t("optimai.comeTitle.1")}</span>
          </h2>
        </div>
        <div className="opa-steps">
          {Array.isArray(steps) && (
            <div className="opa-step-card">
              <div className="opa-step-num">{steps[step]?.label}</div>
              <h3 className="opa-step-title">{steps[step]?.title}</h3>
              <p className="opa-step-desc">{steps[step]?.desc}</p>
              <div className="opa-dots">
                {steps.map((_, i) => (
                  <div key={i} className={`opa-dot${i === step ? " active" : ""}`} onClick={() => setStep(i)} />
                ))}
              </div>
            </div>
          )}
          <button className="opa-next-btn" onClick={() => setStep((s) => (s + 1) % (Array.isArray(steps) ? steps.length : 4))}>
            {t("optimai.next")}
          </button>
        </div>
      </div>

      <hr className="opa-divider" />

      {/* ── BENEFICI ── */}
      <div className="opa-page">
        <div className="opa-head">
          <h2>
            {t("optimai.beneficiTitle.0")}
            <span className="opa-accent">{t("optimai.beneficiTitle.1")}</span>
          </h2>
        </div>
        <ul className="opa-benefits">
          {Array.isArray(benefits) && benefits.map((b, i) => (
            <li key={i} onClick={() => setOpenBenefit(openBenefit === i ? null : i)}>
              <div className="opa-benefit-header">
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
                {isMobile && (
                  <span className="opa-benefit-arrow">{openBenefit === i ? "▲" : "▼"}</span>
                )}
              </div>
              <div className="opa-bubble">
                <h4>{b.title}</h4>
                <p>{b.detail}</p>
              </div>
              {openBenefit === i && (
                <div className="opa-benefit-detail">{b.detail}</div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <hr className="opa-divider" />

      {/* ── CASI D'USO ── */}
      <div className="opa-page">
        <div className="opa-head">
          <h2>
            {t("optimai.casiTitle.0")}
            <span className="opa-accent">{t("optimai.casiTitle.1")}</span>
          </h2>
        </div>
        <div className="opa-cases">
          {Array.isArray(cases) && cases.map((c, i) => (
            <div className="opa-case" key={i}>
              <div className="opa-case-icon">{CASE_ICONS[i]}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="opa-divider" />

      {/* ── SPECIFICHE ── */}
      <div className="opa-page">
        <div className="opa-head">
          <h2>
            {t("optimai.specTitle.0")}
            <span className="opa-accent">{t("optimai.specTitle.1")}</span>
          </h2>
        </div>
        <div className="opa-specs">
          {Array.isArray(specs) && specs.map((card, i) => (
            <div className="opa-spec-card" key={i}>
              <button className="opa-spec-btn">{card.title}</button>
              <ul className="opa-spec-tree">
                {card.items.map((item, j) => (
                  <li className="opa-spec-item" key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <hr className="opa-divider" />

      {/* ── FAQ ── */}
      <div className="opa-page">
        <div className="opa-head">
          <h2>
            {t("optimai.faqTitle.0")}
            <span className="opa-accent">{t("optimai.faqTitle.1")}</span>
          </h2>
        </div>
        <div className="opa-faq">
          {Array.isArray(faqs) && faqs.map((f, i) => (
            <div className={`opa-faq-item${openFaq === i ? " open" : ""}`} key={i}>
              <button className="opa-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{f.q}</span>
                <span className="opa-faq-arrow">▾</span>
              </button>
              <div className="opa-faq-a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
          {/* ── TRUSTED BY ── */}
      <div className="pla-trusted">
        <div className="pla-trusted-label">{t("optimai.trustedLabel")}</div>
        <div className="pla-trusted-track">
          {LOGOS.map((l, i) => (
            <div className="pla-logo-pill" key={i}>
              <div className="pla-logo-icon">{l.icon}</div>
              <span className="pla-logo-name">{l.name}</span>
            </div>
          ))}
        </div>
      </div>
      {/* ── CTA ── */}
      <section className="opa-cta">
        <div className="opa-cta-inner">
          <h2 className="opa-cta-title">
            {t("optimai.ctaTitle.0")}<br />
            <span className="opa-accent">{t("optimai.ctaTitle.1")}</span>
          </h2>
          <p className="opa-cta-sub">{t("optimai.ctaSub")}</p>
          <div className="opa-cta-btns">
            <button className="opa-cta-primary">{t("optimai.ctaPrimary")}</button>
            <Link to="/contatti" className="opa-cta-secondary">{t("optimai.ctaSecondary")}</Link>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="opa-footer">
        <div className="opa-footer-inner">
          <div className="opa-footer-brand">
            <h3>OptimAI</h3>
            <p>{t("optimai.footerDesc")}</p>
            <span className="opa-footer-tag">{t("optimai.footerTag")}</span>
          </div>
          <div className="opa-footer-links">
            <a href="#">{t("optimai.footerBrochure")}</a>
            <Link to="/privacy">{t("footer.policy.privacy")}</Link>
            <Link to="/contatti">{t("nav.contatti")}</Link>
          </div>
        </div>
        <div className="opa-footer-bottom">
          <span>© {new Date().getFullYear()} OptimAI · BluMentis. {t("footer.legal.rights")}</span>
          <span>{t("optimai.madeIn")}</span>
        </div>
      </footer>
      <Footer />
    </div>
  );
}