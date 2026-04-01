import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Footer from './Footer';
import { Users, CheckCircle, ArrowUpRight, Globe, Link as LinkIcon, Lock } from "lucide-react";
import pdfIT from "../assets/BluMentis - ProLine Analytics - Brochure IT.pdf?url";
import pdfEN from "../assets/BluMentis - ProLine Analytics - Brochure EN.pdf?url";
import pdfZH from "../assets/BluMentis - ProLine Analytics - Brochure ZH.pdf?url";
const css = `
  .aga-root {
    --teal:      oklch(66% 0.18 185);
    --teal-dim:  oklch(66% 0.18 185 / 0.12);
    --teal-bdr:  oklch(66% 0.18 185 / 0.30);
    --teal-glow: oklch(66% 0.18 185 / 0.24);
    --teal-hi:   oklch(78% 0.14 185);
    --violet:    oklch(65% 0.20 290);
    --bg:        #080b10;
    --surface:   #0d1118;
    --raised:    #121820;
    --border:    rgba(255,255,255,.07);
    --text:      #edf2f7;
    --text-2:    #8ba0b8;
    --text-3:    #475a70;
    --radius: 14px;
    --shadow: 0 10px 32px rgba(0,0,0,.42);
    font-family: 'DM Sans', sans-serif;
    color: var(--text);
    background: var(--bg);
  }
  .aga-root *, .aga-root *::before, .aga-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .aga-root h1,.aga-root h2,.aga-root h3,.aga-root h4 { font-family: 'Syne', sans-serif; }

  /* ── HERO ── */
  .aga-hero {
    padding: 120px 32px 90px;
    text-align: center; position: relative; overflow: hidden;
  }
  .aga-hero::before {
    content: ""; position: absolute; inset: 0;
    background: radial-gradient(ellipse 65% 50% at 50% 0%, oklch(66% 0.18 185 / 0.09) 0%, transparent 68%);
    pointer-events: none;
  }
  .aga-hero-content {
    position: relative; z-index: 2;
    color: white; padding: 0 20px; max-width: 860px;
    margin: 0 auto;
    display: flex; flex-direction: column; align-items: center;
  }
  .aga-hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--teal-dim); border: 1px solid var(--teal-bdr);
    color: var(--teal-hi);
    font-size: 11px; font-weight: 600; letter-spacing: .13em; text-transform: uppercase;
    padding: 6px 18px; border-radius: 999px; margin-bottom: 28px;
    backdrop-filter: blur(8px);
  }
  .aga-badge-dot {
    width: 6px; height: 6px; border-radius: 50%; background: var(--teal);
    animation: dotPulse 2s ease-in-out infinite;
  }
  @keyframes dotPulse { 0%,100%{opacity:1;} 50%{opacity:.25;} }
  .aga-hero-title {
    font-size: clamp(38px, 6vw, 72px);
    font-weight: 800; line-height: 1.06; margin-bottom: 10px; letter-spacing: -0.025em;
  }
  .aga-hero-subtitle {
    font-size: clamp(18px, 2.6vw, 28px);
    font-weight: 700; letter-spacing: -0.01em; margin-bottom: 22px;
    font-family: 'Syne', sans-serif;
  }
  .aga-accent {
    background: linear-gradient(135deg, var(--teal-hi), var(--violet));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .aga-hero-sub {
    font-size: 16px; opacity: .70; max-width: 600px; margin: 0 auto 36px;
    line-height: 1.8; font-weight: 300;
  }
  .aga-hero-stats {
    position: relative; z-index: 2;
    display: flex; gap: 16px; margin-top: 52px; flex-wrap: wrap; justify-content: center;
  }
  .aga-hero-stat {
    background: rgba(8,11,16,.65); border: 1px solid rgba(255,255,255,.11);
    backdrop-filter: blur(14px); border-radius: 18px;
    padding: 20px 32px; text-align: center; min-width: 136px; transition: .28s;
  }
  .aga-hero-stat:hover { border-color: var(--teal-bdr); background: rgba(8,11,16,.82); transform: translateY(-3px); }
  .aga-hero-stat-val {
    display: block; font-size: 30px; font-weight: 800;
    font-family: 'Syne', sans-serif; color: var(--teal); line-height: 1;
  }
  .aga-hero-stat-lbl {
    display: block; font-size: 12px; color: rgba(255,255,255,.46); margin-top: 6px; letter-spacing: .04em;
  }

  /* ── PAGE ── */
  .aga-page { max-width: 1100px; margin: 0 auto; padding: 80px 32px; }

  /* ── SECTION HEAD ── */
  .aga-head { margin-bottom: 48px; }
  .aga-head h2 { font-size: clamp(28px, 4vw, 44px); font-weight: 800; letter-spacing: -0.025em; }
  .aga-head h2 .aga-accent { -webkit-text-fill-color: unset; background: none; color: var(--teal-hi); }
  .aga-bar {
    width: 100px; height: 4px; margin-top: 14px; border-radius: 99px;
    background: linear-gradient(90deg, var(--teal), oklch(66% 0.18 185 / 0.25));
    animation: barPulse 2.5s ease-in-out infinite;
  }
  @keyframes barPulse { 0%,100%{opacity:1;} 50%{opacity:.28;} }

  /* ── DIVIDER ── */
  .aga-divider {
    border: none; height: 1px; margin: 0 32px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
  }

  /* ── STEPS ── */
  .aga-steps-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 8px;
  }
  .aga-step {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 20px; padding: 32px 28px; transition: .28s; position: relative; overflow: hidden;
  }
  .aga-step::before {
    content: ""; position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, var(--teal), var(--violet));
    opacity: 0; transition: .28s;
  }
  .aga-step:hover { border-color: var(--teal-bdr); transform: translateY(-3px); box-shadow: var(--shadow); }
  .aga-step:hover::before { opacity: 1; }
  .aga-step-num {
    font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase;
    color: var(--teal); margin-bottom: 12px; display: block;
  }
  .aga-step h3 { font-size: 18px; font-weight: 800; margin-bottom: 10px; color: var(--text); }
  .aga-step p  { font-size: 14px; color: var(--text-2); line-height: 1.75; }
  .aga-step-tag {
    display: inline-block; margin-top: 14px;
    background: var(--teal-dim); border: 1px solid var(--teal-bdr);
    color: var(--teal-hi); font-size: 11px; font-weight: 600;
    letter-spacing: .08em; text-transform: uppercase; padding: 4px 10px; border-radius: 999px;
  }

  /* ── FEATURES GRID ── */
  .aga-features { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 18px; }
  .aga-feature {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 18px; padding: 28px 24px; transition: .28s; position: relative; overflow: hidden;
  }
  .aga-feature:hover { border-color: var(--teal-bdr); transform: translateY(-4px); box-shadow: var(--shadow); }
  .aga-feature-icon {
    width: 42px; height: 42px; border-radius: 12px;
    background: var(--teal-dim); border: 1px solid var(--teal-bdr);
    display: flex; align-items: center; justify-content: center;
    font-size: 19px; margin-bottom: 16px;
  }
  .aga-feature h3 { font-size: 15px; font-weight: 700; margin-bottom: 8px; color: var(--text); }
  .aga-feature p  { font-size: 13px; color: var(--text-3); line-height: 1.7; }
  .aga-feature-tag {
    display: inline-block; margin-top: 12px;
    background: var(--teal-dim); border: 1px solid var(--teal-bdr);
    color: var(--teal-hi); font-size: 11px; padding: 3px 10px; border-radius: 999px;
  }

  /* ── SOLUTIONS ── */
  .aga-solutions { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .aga-solution {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 22px; padding: 36px 32px; transition: .32s; position: relative; overflow: hidden;
  }
  .aga-solution::after {
    content: ""; position: absolute; inset: 0; border-radius: 22px;
    background: linear-gradient(135deg, oklch(66% 0.18 185 / 0.06) 0%, oklch(65% 0.20 290 / 0.06) 100%);
    opacity: 0; transition: .32s;
  }
  .aga-solution:hover { border-color: var(--teal-bdr); transform: translateY(-4px); box-shadow: 0 20px 48px rgba(0,0,0,.5); }
  .aga-solution:hover::after { opacity: 1; }
  .aga-solution-name {
    font-family: 'Syne', sans-serif; font-size: 32px; font-weight: 800;
    margin-bottom: 4px; letter-spacing: -0.02em;
  }
  .aga-solution-name .aga-accent { -webkit-text-fill-color: unset; background: none; color: var(--teal-hi); }
  .aga-solution-role {
    font-size: 13px; font-weight: 600; color: var(--teal); text-transform: uppercase;
    letter-spacing: .1em; margin-bottom: 16px; display: block;
  }
  .aga-solution p { font-size: 14px; color: var(--text-2); line-height: 1.75; margin-bottom: 20px; }
  .aga-solution-checks { display: flex; flex-direction: column; gap: 10px; }
  .aga-sol-check { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--text); }
  .aga-sol-check-ico {
    width: 18px; height: 18px; border-radius: 50%; flex-shrink: 0; margin-top: 1px;
    background: var(--teal-dim); border: 1px solid var(--teal-bdr);
    color: var(--teal); display: flex; align-items: center; justify-content: center;
    font-size: 10px; font-weight: 700;
  }
  .aga-cta-secondary {
    background: transparent; color: white;
    padding: 14px 28px; border-radius: var(--radius); font-weight: 500;
    border: 2px solid rgba(255,255,255,.22); cursor: pointer; transition: .22s;
    font-family: 'DM Sans', sans-serif; font-size: 15px; text-decoration: none;
    display: inline-flex; align-items: center;
  }
  .aga-cta-secondary:hover { background: rgba(255,255,255,.07); border-color: rgba(255,255,255,.5); }
  /* ── BENEFITS ── */
  .aga-benefits {
    list-style: none; display: flex; flex-direction: column; gap: 0; width: 460px;
  }
  .aga-benefits li {
    background: var(--surface); border: 1px solid var(--border);
    padding: 22px 24px; border-radius: var(--radius);
    position: relative; cursor: pointer; transition: .22s;
  }
  .aga-benefits li h3 { font-size: 15px; font-weight: 700; margin-bottom: 4px; color: var(--text); }
  .aga-benefits li p  { font-size: 13px; color: var(--text-3); }
  .aga-benefits li:hover { border-color: oklch(66% 0.18 185 / 0.40); background: oklch(66% 0.18 185 / 0.07); }
  .aga-benefit-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
  .aga-benefit-arrow { color: var(--text-3); font-size: 11px; flex-shrink: 0; margin-top: 2px; }
  .aga-benefit-detail {
    font-size: 13px; color: var(--text-2); line-height: 1.7;
    margin-top: 10px; padding-top: 10px;
    border-top: 1px solid var(--border);
    animation: fadeInDetail .2s ease;
  }
  @keyframes fadeInDetail { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }

  /* Bolla desktop */
  .aga-benefits li .aga-bubble {
    position: absolute; left: calc(100% + 18px); top: 50%; transform: translateY(-50%) scale(0.85);
    width: 260px; background: oklch(66% 0.18 185 / 0.12);
    border: 1px solid oklch(66% 0.18 185 / 0.38); border-radius: 16px;
    padding: 20px 22px; pointer-events: none;
    opacity: 0; transition: opacity .22s, transform .28s cubic-bezier(.34,1.56,.64,1); z-index: 10;
  }
  .aga-benefits li:hover .aga-bubble { opacity: 1; transform: translateY(-50%) scale(1); }
  .aga-bubble::before {
    content: ""; position: absolute; right: 100%; top: 50%; transform: translateY(-50%);
    border: 8px solid transparent; border-right-color: oklch(66% 0.18 185 / 0.38);
  }
  .aga-bubble h4 { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 800; color: var(--teal-hi); margin-bottom: 8px; }
  .aga-bubble p  { font-size: 13px; color: #8ba0b8; line-height: 1.7; }

  /* ── SPEC TABLE ── */
  .aga-spec-table { width: 100%; border-collapse: collapse; }
  .aga-spec-table tr { border-bottom: 1px solid var(--border); transition: .18s; }
  .aga-spec-table tr:last-child { border-bottom: none; }
  .aga-spec-table tr:hover { background: oklch(66% 0.18 185 / 0.05); }
  .aga-spec-table td { padding: 18px 20px; font-size: 14px; }
  .aga-spec-table td:first-child { color: var(--text-3); font-weight: 600; width: 220px; text-transform: uppercase; font-size: 12px; letter-spacing: .06em; }
  .aga-spec-table td:last-child { color: var(--text); }
  .aga-spec-wrap {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 20px; overflow: hidden; box-shadow: var(--shadow);
  }

  /* ── CTA ── */
  .aga-cta {
    background: linear-gradient(135deg, #050709 0%, oklch(14% 0.12 185) 100%);
    border-top: 1px solid var(--border);
    color: white; padding: 100px 20px; margin-top: 80px;
  }
  .aga-cta-inner { max-width: 780px; margin: 0 auto; text-align: center; }
  .aga-cta-title { font-size: clamp(26px, 4vw, 42px); font-weight: 800; margin-bottom: 18px; letter-spacing: -0.02em; }
  .aga-cta-title .aga-accent { -webkit-text-fill-color: unset; background: none; color: var(--teal-hi); }
  .aga-cta-sub { opacity: .70; margin-bottom: 38px; line-height: 1.8; font-size: 15px; }
  .aga-cta-btns { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
  .aga-cta-primary {
    background: var(--teal); color: #080b10;
    padding: 14px 28px; border-radius: var(--radius); font-weight: 700;
    border: none; cursor: pointer; transition: .22s; font-family: 'DM Sans', sans-serif; font-size: 15px;
  }
  .aga-cta-primary:hover { filter: brightness(1.12); transform: translateY(-2px); box-shadow: 0 8px 24px var(--teal-glow); }

  /* ── PILLS ── */
  .aga-pills { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 44px; }
  .aga-pill {
    background: var(--teal-dim); border: 1px solid var(--teal-bdr);
    color: var(--teal-hi); padding: 9px 18px; border-radius: 10px;
    font-weight: 500; font-size: 13px; opacity: 0;
    animation: fadeUpLoop 4s ease infinite;
  }
  @keyframes fadeUpLoop {
    0%   { opacity:0; transform:translateY(22px); }
    20%  { opacity:1; transform:translateY(0); }
    80%  { opacity:1; transform:translateY(0); }
    100% { opacity:0; transform:translateY(-18px); }
  }
  .aga-d1{animation-delay:0s;} .aga-d2{animation-delay:.5s;} .aga-d3{animation-delay:1s;}
  .aga-d4{animation-delay:1.5s;} .aga-d5{animation-delay:2s;}

  /* ── FOOTER ── */
  .aga-footer {
    background: #03050a; border-top: 1px solid rgba(255,255,255,.05);
    padding: 60px 32px 36px; color: var(--text-3);
  }
  .aga-footer-inner {
    max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr auto; gap: 48px; align-items: start;
  }
  .aga-footer-brand h3 { font-family: 'Syne', sans-serif; font-size: 20px; font-weight: 800; color: var(--text); margin-bottom: 6px; }
  .aga-footer-brand p { font-size: 13px; line-height: 1.65; max-width: 300px; }
  .aga-footer-tag {
    display: inline-block; margin-top: 14px;
    background: var(--teal-dim); border: 1px solid var(--teal-bdr);
    color: var(--teal-hi); font-size: 11px; font-weight: 600;
    letter-spacing: .1em; text-transform: uppercase; padding: 4px 12px; border-radius: 999px;
  }
  .aga-footer-links { display: flex; flex-direction: column; gap: 10px; align-items: flex-end; }
  .aga-footer-links a { color: var(--text-3); text-decoration: none; font-size: 14px; font-weight: 500; transition: .2s; }
  .aga-footer-links a:hover { color: var(--teal-hi); }
  .aga-footer-bottom {
    max-width: 1100px; margin: 32px auto 0; padding-top: 22px;
    border-top: 1px solid rgba(255,255,255,.05);
    display: flex; gap: 12px; justify-content: space-between;
    flex-wrap: wrap; font-size: 12px; opacity: .4;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 900px) {
    .aga-features { grid-template-columns: 1fr 1fr; }
    .aga-solutions { grid-template-columns: 1fr; }
  }
  @media (max-width: 700px) {
    .aga-hero { padding: 80px 20px 60px; }
    .aga-hero-stats { margin-top: 32px; gap: 10px; }
    .aga-hero-stat { padding: 12px 16px; min-width: 90px; }
    .aga-hero-stat-val { font-size: 20px; }

    .aga-steps-grid { grid-template-columns: 1fr; }
    .aga-features { grid-template-columns: 1fr; }

    .aga-benefits { width: 100%; }
    .aga-benefits li .aga-bubble { display: none; }

    .aga-solutions { grid-template-columns: 1fr; }
    .aga-solution { padding: 24px 20px; }
    .aga-solution-name { font-size: 24px; }

    .aga-spec-table td { padding: 14px 12px; font-size: 13px; }
    .aga-spec-table td:first-child { width: 110px; font-size: 11px; }

    .aga-page { padding: 60px 20px; }

    .aga-cta { padding: 64px 20px; }
    .aga-cta-btns { flex-direction: column; align-items: center; }
    .aga-cta-primary { width: 100%; }

    .aga-footer-inner { grid-template-columns: 1fr; }
    .aga-footer-links { align-items: flex-start; }
    .aga-footer-bottom { flex-direction: column; gap: 4px; }
  }
`;

export default function PiattaformeAgentiche() {
  const { t,i18n } = useTranslation();
  const [openBenefit, setOpenBenefit] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
 const getBrochure = () => {
    const lang = i18n.language;
  
    if (lang.startsWith("it")) return pdfIT;
    if (lang.startsWith("zh")) return pdfZH;
    return pdfEN; // fallback
  };
const handleDownload = () => {

  const file = getBrochure();

  const link = document.createElement("a");
  link.href = file;
  link.setAttribute("download", `BluMentis - ProLine Analytics - Brochure ${i18n.language.toUpperCase()}.pdf`);
  link.setAttribute("target", "_blank");        // fallback se il download viene bloccato
  document.body.appendChild(link);              // necessario su Firefox
  link.click();
  document.body.removeChild(link);
};
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dati tradotti con returnObjects (array)
  const heroStats = t('agentiche.hero.stats', { returnObjects: true });
  const steps = t('agentiche.steps', { returnObjects: true });
  const features = t('agentiche.features', { returnObjects: true });
  const solutions = t('agentiche.solutions', { returnObjects: true });
  const benefits = t('agentiche.benefits', { returnObjects: true });
  const specs = t('agentiche.specs', { returnObjects: true });
  const pills = t('agentiche.pills', { returnObjects: true });

  // Mappa icone
  const iconMap = {
    Users: Users,
    CheckCircle: CheckCircle,
    ArrowUpRight: ArrowUpRight,
    Globe: Globe,
    Link: LinkIcon,
    Lock: Lock,
  };

  return (
    <div className="aga-root">
      <style>{css}</style>

      {/* ── HERO ── */}
      <section className="aga-hero">
        <div className="aga-hero-content">
          <div className="aga-hero-badge">
            <span className="aga-badge-dot" />
            {t('agentiche.hero.badge')}
          </div>
          <h1 className="aga-hero-title">{t('agentiche.hero.title')}</h1>
          <p className="aga-hero-subtitle"
             dangerouslySetInnerHTML={{ __html: t('agentiche.hero.subtitle') }} />
          <p className="aga-hero-sub">{t('agentiche.hero.sub')}</p>
        </div>
        <div className="aga-hero-stats">
          {heroStats && heroStats.map((s) => (
            <div className="aga-hero-stat" key={s.label}>
              <span className="aga-hero-stat-val">{s.value}</span>
              <span className="aga-hero-stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── COME FUNZIONA ── */}
      <div className="aga-page">
        <div className="aga-head">
          <h2 dangerouslySetInnerHTML={{ __html: t('agentiche.stepsTitle') }} />
          <div className="aga-bar" />
        </div>
        <div className="aga-steps-grid">
          {steps && steps.map((s) => (
            <div className="aga-step" key={s.num}>
              <span className="aga-step-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {s.tag && <span className="aga-step-tag">{s.tag}</span>}
            </div>
          ))}
        </div>
      </div>

      <hr className="aga-divider" />

      {/* ── FUNZIONALITÀ ── */}
      <div className="aga-page">
        <div className="aga-head">
          <h2 dangerouslySetInnerHTML={{ __html: t('agentiche.featuresTitle') }} />
        </div>
        <div className="aga-features">
          {features && features.map((f) => {
            const IconComponent = iconMap[f.icon];
            return (
              <div className="aga-feature" key={f.title}>
                <div className="aga-feature-icon">
                  {IconComponent && <IconComponent size={24} />}
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                {f.tag && <span className="aga-feature-tag">{f.tag}</span>}
              </div>
            );
          })}
        </div>
        <div className="aga-pills">
          {pills && pills.map((pill, idx) => (
            <div className={`aga-pill aga-d${idx + 1}`} key={pill}>
              {pill}
            </div>
          ))}
        </div>
      </div>

      <hr className="aga-divider" />

      {/* ── SOLUZIONI ── */}
      <div className="aga-page">
        <div className="aga-head">
          <h2 dangerouslySetInnerHTML={{ __html: t('agentiche.solutionsTitle') }} />
        </div>
        <div className="aga-solutions">
          {solutions && solutions.map((sol) => (
            <div className="aga-solution" key={sol.name}>
              <div className="aga-solution-name">
                {sol.name}<span className="aga-accent">{sol.accent}</span>
              </div>
              <span className="aga-solution-role">{sol.role}</span>
              <p>{sol.desc}</p>
              <div className="aga-solution-checks">
                {sol.checks.map((c) => (
                  <div className="aga-sol-check" key={c}>
                    <span className="aga-sol-check-ico">✓</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="aga-divider" />

      {/* ── BENEFICI ── */}
      <div className="aga-page">
        <div className="aga-head">
          <h2 dangerouslySetInnerHTML={{ __html: t('agentiche.benefitsTitle') }} />
        </div>
        <ul className="aga-benefits">
          {benefits && benefits.map((b, i) => (
            <li key={b.title} onClick={() => setOpenBenefit(openBenefit === i ? null : i)}>
              <div className="aga-benefit-header">
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
                {isMobile && (
                  <span className="aga-benefit-arrow">
                    {openBenefit === i ? "▲" : "▼"}
                  </span>
                )}
              </div>
              <div className="aga-bubble">
                <h4>{b.title}</h4>
                <p>{b.detail}</p>
              </div>
              {openBenefit === i && (
                <div className="aga-benefit-detail">{b.detail}</div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <hr className="aga-divider" />

      {/* ── SPECIFICHE ── */}
      <div className="aga-page">
        <div className="aga-head">
          <h2 dangerouslySetInnerHTML={{ __html: t('agentiche.specsTitle') }} />
        </div>
        <div className="aga-spec-wrap">
          <table className="aga-spec-table">
            <tbody>
              {specs && specs.map(([key, value]) => (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="aga-cta">
        <div className="aga-cta-inner">
          <h2 className="aga-cta-title"
              dangerouslySetInnerHTML={{ __html: t('agentiche.cta.title') }} />
          <p className="aga-cta-sub">{t('agentiche.cta.sub')}</p>
          <div className="aga-cta-btns">
            <button className="aga-cta-primary">{t('agentiche.cta.button')}</button>
            <button className="aga-cta-secondary" onClick={handleDownload}>
  {t("proline.footerBrochure")}
</button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="aga-footer">
        <div className="aga-footer-inner">
          <div className="aga-footer-brand">
            <h3>{t('agentiche.footer.brand')}</h3>
            <p>{t('agentiche.footer.desc')}</p>
            <span className="aga-footer-tag">{t('agentiche.footer.tag')}</span>
          </div>
          <div className="aga-footer-links">
            <a href="#">{t('agentiche.footer.brochure')}</a>
            <Link to="/privacy">{t('agentiche.footer.privacy')}</Link>
            <Link to="/contatti">{t('agentiche.footer.contact')}</Link>
          </div>
        </div>
        <div className="aga-footer-bottom">
          <span>{t('agentiche.footer.copyright', { year: new Date().getFullYear() })}</span>
          <span>{t('agentiche.footer.madeIn')}</span>
        </div>
      </footer>
      <Footer />
    </div>
  );
}