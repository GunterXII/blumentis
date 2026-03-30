// src/pages/ChiSiamo.jsx
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Globe, Building, Telescope,
  Star, ShieldCheck, Users, Scale,
  Lightbulb, Eye, Handshake, Leaf,
  Zap, Sparkles,
} from "lucide-react";
import Footer from "./Footer";

// ─── Icone fisse per ogni sezione (non traducibili, rimangono costanti) ────────
const SECTION_ICONS = {
  chi_siamo:          <Building />,
  visione:            <Telescope />,
  missione:           <Lightbulb />,
  rete_internazionale:<Globe />,
};

// Icone fisse per i valori (ordine coerente con il JSON)
const VALUE_ICONS = [
  <Star size={18} />,
  <ShieldCheck size={18} />,
  <Users size={18} />,
  <Scale size={18} />,
  <Lightbulb size={18} />,
  <Eye size={18} />,
  <Handshake size={18} />,
  <Leaf size={18} />,
];

// Chiavi dei valori — ordine fisso, corrisponde all'ordine nel JSON
const VALUE_KEYS = [
  "qualita", "sicurezza", "inclusivita", "etica",
  "innovazione", "trasparenza", "collaborazione", "sostenibilita",
];

// Layout e accenti per ogni sezione — metadati fissi, non traducibili
const SECTION_META = {
  chi_siamo:           { accent: "orange", layout: "text-left",  index: 1 },
  visione:             { accent: "blue",   layout: "text-right", index: 2 },
  missione:            { accent: "orange", layout: "text-left",  index: 3 },
  valori:              { accent: "blue",   layout: "values-grid",index: 4 },
  rete_internazionale: { accent: "orange", layout: "text-right", index: 5 },
};

const COUNTRIES = ["🇮🇹 Italia", "🇨🇳 Cina"];

/* ─────────────────────────────────────────────────────────────────────────────
   CSS (identico all'originale)
───────────────────────────────────────────────────────────────────────────── */
const css = `
  .cs-section-anchor { scroll-margin-top: 80px; }
  .cs-page { padding-top: 64px; background: var(--bg-base); min-height: 100vh; }

  .cs-hero {
    position: relative; padding: 5rem 1.5rem 4rem;
    overflow: hidden; border-bottom: 1px solid var(--bg-border);
  }
  .cs-hero-waves {
    position: absolute; inset: 0; pointer-events: none; overflow: hidden;
    mask-image: linear-gradient(180deg, transparent 0%, black 20%, black 80%, transparent 100%),
                linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
    mask-composite: intersect;
    -webkit-mask-image: linear-gradient(180deg, transparent 0%, black 20%, black 80%, transparent 100%),
                        linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%);
    -webkit-mask-composite: source-in;
  }
  .cs-wave-track {
    position: absolute; top: 0; left: 0; height: 100%;
    display: flex; will-change: transform;
  }
  .cs-wave-track svg { flex-shrink: 0; height: 100%; width: auto; display: block; }
  .cs-wave-track.t1 { animation: wave-scroll 32s linear infinite;         opacity: 0.13; top:  0%; }
  .cs-wave-track.t2 { animation: wave-scroll 50s linear infinite reverse; opacity: 0.09; top:  8%; }
  .cs-wave-track.t3 { animation: wave-scroll 22s linear infinite;         opacity: 0.07; top: -6%; }
  @keyframes wave-scroll {
    0%   { transform: translate3d(0,    0, 0); }
    100% { transform: translate3d(-50%, 0, 0); }
  }
  .cs-hero-inner { position: relative; z-index: 1; max-width: 800px; margin: 0 auto; text-align: center; }
  .cs-hero-title {
    font-size: clamp(2.5rem, 3vw, 4rem); font-weight: 800; line-height: 1.05;
    letter-spacing: -0.035em; margin-bottom: 1.25rem;
  }
  .cs-hero-sub { font-size: 1.125rem; line-height: 1.75; color: var(--text-secondary); max-width: 520px; margin: 0 auto; }

  .cs-content { max-width: 1100px; margin: 0 auto; padding: 0 1.5rem 6rem; }
  .cs-section {
    padding: 5rem 0; border-bottom: 1px solid var(--bg-border);
    display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center;
  }
  .cs-section:last-child { border-bottom: none; }
  .cs-section.reverse { direction: rtl; }
  .cs-section.reverse > * { direction: ltr; }
  @media (max-width: 768px) {
    .cs-section, .cs-section.reverse { grid-template-columns: 1fr; direction: ltr; gap: 2.5rem; padding: 3.5rem 0; }
  }
  .cs-section.values-layout { grid-template-columns: 1fr; gap: 3rem; }

  .cs-eyebrow { font-size: 0.6875rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 1rem; }
  .cs-eyebrow.orange { color: oklch(78% 0.18 50); }
  .cs-eyebrow.blue   { color: oklch(75% 0.18 240); }
  .cs-title { font-family: 'Syne', sans-serif; font-size: clamp(1.75rem, 3.5vw, 2.5rem); font-weight: 700; line-height: 1.15; letter-spacing: -0.025em; margin-bottom: 1.25rem; }
  .cs-body { font-size: 1.2rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 1.5rem; }
  .cs-highlight { display: flex; align-items: flex-start; gap: 0.75rem; padding: 1rem 1.25rem; border-radius: 0.75rem; font-size: 0.9375rem; font-weight: 500; line-height: 1.5; }
  .cs-highlight.orange { background: oklch(68% 0.26 50 / 0.08); border: 1px solid oklch(68% 0.26 50 / 0.20); color: oklch(82% 0.14 50); }
  .cs-highlight.blue   { background: oklch(63% 0.24 240 / 0.08); border: 1px solid oklch(63% 0.24 240 / 0.20); color: oklch(80% 0.14 240); }

  .cs-visual { display: flex; align-items: center; justify-content: center; }
  .cs-visual-box { width: 100%; max-width: 380px; background: var(--bg-surface); border: 1px solid var(--bg-border); border-radius: 1.25rem; padding: 2rem; box-shadow: 0 12px 40px oklch(0% 0 0 / 0.4); position: relative; overflow: hidden; }
  .cs-visual-box::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; }
  .cs-visual-box.orange::before { background: linear-gradient(90deg, transparent, oklch(68% 0.26 50), transparent); }
  .cs-visual-box.blue::before   { background: linear-gradient(90deg, transparent, oklch(63% 0.24 240), transparent); }
  .cs-visual-icon { margin-bottom: 1.25rem; display: block; color: var(--text-muted); }
  .cs-visual-stat { font-family: 'Syne', sans-serif; font-size: 3rem; font-weight: 800; line-height: 1; margin-bottom: 0.375rem; }
  .cs-visual-stat.orange { color: oklch(68% 0.26 50); }
  .cs-visual-stat.blue   { color: oklch(63% 0.24 240); }
  .cs-visual-desc { font-size: 1.3rem; color: #999999; line-height: 1.5; }
  .section-number { font-family: 'Syne', sans-serif; font-size: 5rem; font-weight: 800; color: oklch(22% 0.010 30); position: absolute; top: 1rem; right: 1rem; pointer-events: none; user-select: none; line-height: 1; }

  .values-header { max-width: 560px; }
  .values-supertitle { font-size: 0.6875rem; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-muted); margin-top: 0.5rem; margin-bottom: 2.5rem; }
  .values-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
  @media (max-width: 640px) { .values-grid { grid-template-columns: 1fr; } }
  .value-card { background: var(--bg-surface); border: 1px solid var(--bg-border); border-radius: 0.875rem; padding: 1.5rem; transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s; }
  .value-card:hover { border-color: oklch(42% 0.008 30); transform: translateY(-2px); box-shadow: 0 8px 24px oklch(0% 0 0 / 0.3); }
  .value-icon { width: 40px; height: 40px; border-radius: 10px; background: oklch(68% 0.26 50 / 0.10); border: 1px solid oklch(68% 0.26 50 / 0.20); display: flex; align-items: center; justify-content: center; color: oklch(78% 0.18 50); margin-bottom: 1rem; }
  .value-label { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem; }
  .value-desc  { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.65; }

  .countries-grid { display: flex; flex-wrap: wrap; gap: 0.625rem; margin-top: 1.25rem; }
  .country-chip { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0.4rem 0.875rem; background: var(--bg-raised); border: 1px solid var(--bg-border); border-radius: 999px; font-size: 0.875rem; color: var(--text-secondary); transition: all 0.15s; }
  .country-chip:hover { border-color: oklch(68% 0.26 50 / 0.4); color: var(--text-primary); }

  @media (max-width: 640px) {
    .cs-hero { padding: 3.5rem 1.25rem 2.5rem; }
    .cs-hero-title { font-size: 1.75rem; letter-spacing: -0.02em; }
    .cs-hero-sub { font-size: 1rem; }
    .cs-content { padding: 0 1.25rem 4rem; }
    .cs-section { grid-template-columns: 1fr; gap: 2rem; padding: 3rem 0; }
    .cs-section.reverse { direction: ltr; }
    .cs-visual-box { max-width: 100%; padding: 1.5rem; }
    .cs-visual-stat { font-size: 2.25rem; }
    .section-number { font-size: 3.5rem; }
    .cs-title { font-size: 1.5rem; }
    .cs-body { font-size: 1rem; }
    .values-grid { grid-template-columns: 1fr; }
    .value-card { padding: 1.25rem; }
    .countries-grid { gap: 0.5rem; }
    .country-chip { font-size: 0.8125rem; }
  }
  @media (min-width: 641px) and (max-width: 900px) {
    .cs-section { grid-template-columns: 1fr; gap: 2.5rem; }
    .cs-visual-box { max-width: 320px; }
    .values-grid { grid-template-columns: repeat(2, 1fr); }
  }
`;

/* ─────────────────────────────────────────────────────────────────────────────
   WAVE TRACK (invariato)
───────────────────────────────────────────────────────────────────────────── */
const WaveTrack = ({ className, count, spacing, amplitude, period, strokeWidth, reverse = false }) => {
  const height = count * spacing + amplitude * 2 + 20;
  const width  = 2880;

  const generatePath = (yCenter, phaseOffset = 0) => {
    const numCycles = Math.ceil(width / period) + 2;
    const cp = period * 0.33;
    const pts = [];
    for (let c = -1; c <= numCycles; c++) {
      const x0 = c * period + phaseOffset;
      const x1 = x0 + period / 2;
      const x2 = x0 + period;
      if (c === -1) pts.push(`M ${x0},${yCenter}`);
      pts.push(`C ${x0 + cp},${yCenter - amplitude} ${x1 - cp},${yCenter - amplitude} ${x1},${yCenter}`);
      pts.push(`C ${x1 + cp},${yCenter + amplitude} ${x2 - cp},${yCenter + amplitude} ${x2},${yCenter}`);
    }
    return pts.join(' ');
  };

  const paths = Array.from({ length: count }, (_, i) => {
    const yCenter     = amplitude + 10 + i * spacing;
    const phaseOffset = (i / count) * period * -0.5;
    return (
      <path key={i} d={generatePath(yCenter, phaseOffset)}
        stroke="oklch(72% 0 0)" strokeWidth={strokeWidth} fill="none" strokeLinecap="round" />
    );
  });

  const svg = (
    <svg key="s" viewBox={`0 0 ${width} ${height}`} height={height} width={width}
      xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      {paths}
    </svg>
  );

  return (
    <div className={`cs-wave-track ${className}`} style={reverse ? { animationDirection: "reverse" } : {}}>
      {svg}{svg}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────────────────────
   COMPONENTE PRINCIPALE
───────────────────────────────────────────────────────────────────────────── */
const ChiSiamo = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 60 });
  }, []);

  // Ordine fisso delle sezioni
  const SECTION_ORDER = ["chi_siamo", "visione", "missione", "valori", "rete_internazionale"];

  return (
    <>
      <style>{css}</style>

      <div className="cs-page">

        {/* ── HERO ── */}
        <div className="cs-hero">
          <div className="cs-hero-waves">
            <WaveTrack className="t1" count={4} spacing={38} amplitude={10} period={700}  strokeWidth={0.6} />
            <WaveTrack className="t2" count={3} spacing={52} amplitude={14} period={1100} strokeWidth={0.7} reverse />
            <WaveTrack className="t3" count={3} spacing={45} amplitude={7}  period={500}  strokeWidth={0.5} />
          </div>
          <div className="cs-hero-inner">
            <h1 className="cs-hero-title" data-aos="fade-up" data-aos-delay="100">
              {t("chi_siamo.hero.title")}
            </h1>
            <p className="cs-hero-sub" data-aos="fade-up" data-aos-delay="200">
              {/* Il \n nel JSON viene convertito in <br /> */}
              {t("chi_siamo.hero.subtitle").split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </p>
          </div>
        </div>

        {/* ── SEZIONI ── */}
        <div className="cs-content">
          {SECTION_ORDER.map((secKey) => {
            const meta = SECTION_META[secKey];
            const { accent, layout, index } = meta;

            /* ── VALORI ── */
            if (layout === "values-grid") return (
              <div key={secKey} id={secKey.replace("_", "-")} className="cs-section values-layout cs-section-anchor">
                <div className="values-header" data-aos="fade-up">
                  <div className={`cs-eyebrow ${accent}`}>
                    {t(`chi_siamo.sections.${secKey}.eyebrow`)}
                  </div>
                  <h2 className="cs-title">{t(`chi_siamo.sections.${secKey}.title`)}</h2>
                  <p className="values-supertitle">{t(`chi_siamo.sections.${secKey}.supertitle`)}</p>
                </div>
                <div className="values-grid">
                  {VALUE_KEYS.map((vk, vi) => (
                    <div key={vk} className="value-card" data-aos="fade-up" data-aos-delay={(vi % 4) * 80}>
                      <div className="flex items-center gap-3" style={{ marginBottom: "0.75rem" }}>
                        <div className="value-icon">{VALUE_ICONS[vi]}</div>
                        <div className="value-label">{t(`chi_siamo.sections.valori.items.${vk}.label`)}</div>
                      </div>
                      <p className="value-desc">{t(`chi_siamo.sections.valori.items.${vk}.desc`)}</p>
                    </div>
                  ))}
                </div>
              </div>
            );

            /* ── LAYOUT ALTERNATO ── */
            const isReverse = layout === "text-right";
            const aosTxt    = isReverse ? "fade-right" : "fade-left";
            const aosVis    = isReverse ? "fade-left"  : "fade-right";
            const hasHighlight = secKey !== "rete_internazionale";
            const hasCountries = secKey === "rete_internazionale";

            const TextCol = (
              <div data-aos={aosTxt} data-aos-delay="100">
                <div className={`cs-eyebrow ${accent}`}>
                  {t(`chi_siamo.sections.${secKey}.eyebrow`)}
                </div>
                <h2 className="cs-title">{t(`chi_siamo.sections.${secKey}.title`)}</h2>
                <p className="cs-body">{t(`chi_siamo.sections.${secKey}.body`)}</p>

                {hasHighlight && (
                  <div className={`cs-highlight ${accent}`}>
                    <span style={{ flexShrink: 0 }}>
                      {accent === "orange" ? <Zap size={20} /> : <Sparkles size={20} />}
                    </span>
                    {t(`chi_siamo.sections.${secKey}.highlight`)}
                  </div>
                )}

                {hasCountries && (
                  <div className="countries-grid">
                    {COUNTRIES.map((c) => (
                      <span key={c} className="country-chip">{c}</span>
                    ))}
                  </div>
                )}
              </div>
            );

            const VisualCol = (
              <div className="cs-visual" data-aos={aosVis} data-aos-delay="200">
                <div className={`cs-visual-box ${accent}`}>
                  <span className="cs-visual-icon">{SECTION_ICONS[secKey]}</span>
                  <div className={`cs-visual-stat ${accent}`}>
                    {t(`chi_siamo.sections.${secKey}.stat`)}
                  </div>
                  <p className="cs-visual-desc">
                    {t(`chi_siamo.sections.${secKey}.stat_desc`)}
                  </p>
                  <div className="section-number">0{index}</div>
                </div>
              </div>
            );

            return (
              <div
                key={secKey}
                id={secKey.replace(/_/g, "-")}
                className={`cs-section cs-section-anchor${isReverse ? " reverse" : ""}`}
              >
                {isReverse ? <>{VisualCol}{TextCol}</> : <>{TextCol}{VisualCol}</>}
              </div>
            );
          })}
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ChiSiamo;