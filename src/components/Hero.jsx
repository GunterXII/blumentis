import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Globe, Building, Telescope,
  Star, ShieldCheck, Users, Scale,
  Lightbulb, Eye, Handshake, Leaf
} from "lucide-react";
import Footer from "./Footer";

const SECTIONS = [
  {
    id: "chi-siamo",
    eyebrow: "Chi siamo",
    title: "Imprenditori dietro alle soluzioni",
    accent: "orange",
    body: "Imprenditori con una lunga storia nel panorama industriale italiano e una rete internazionale consolidata, uniti alla energia e alla visione di una nuova generazione. Questa è la nostra formula: esperienza che guida, gioventù che innova. Un equilibrio raro, che ci permette di muoverci veloci senza perdere solidità.",
    highlight: "Radici solide. Visione nel futuro.",
    icon: <Building />,
    layout: "text-left",
    visual: { stat: "5+", desc: "Settori industriali in cui abbiamo operato" },
  },
  {
    id: "visione",
    eyebrow: "Il nostro orizzonte",
    title: "Visione",
    accent: "blue",
    body: "L'Intelligenza Artificiale non è il futuro — è il presente. Crediamo che ogni azienda, grande o piccola, possa trasformare il proprio modo di lavorare grazie a questa innovazione. Costruiamo tecnologie che non complicano, ma semplificano — dando alle imprese gli strumenti per crescere più velocemente, decidere meglio e competere ad armi pari con i grandi player del mercato.",
    highlight: "La tecnologia che lavora per te, non al posto tuo.",
    icon: <Telescope />,
    layout: "text-right",
    visual: { stat: "3×", desc: "Aumento della velocità di crescita delle aziende che scelgono l'AI oggi" },
  },
  {
    id: "missione",
    eyebrow: "Cosa facciamo ogni giorno",
    title: "Missione",
    accent: "orange",
    body: "Diffondiamo soluzioni innovative e sostenibili all'interno delle aziende che vogliono cavalcare il progresso tecnologico e restare competitive in un mercato in continua evoluzione.",
    highlight: "Dall'idea al mercato.",
    icon: <Lightbulb />,
    layout: "text-left",
    visual: { stat: "70%", desc: "Dei task a basso valore aggiunto può essere automatizzato" },
  },
  {
    id: "valori",
    eyebrow: "I principi che ci guidano",
    title: "Valori",
    accent: "blue",
    layout: "values-grid",
    values: [
      { icon: <Star size={18} />,       label: "Qualità",        desc: "Impegno per standard elevati in ogni fase dello sviluppo, dal codice al prodotto finale." },
      { icon: <ShieldCheck size={18} />, label: "Sicurezza",      desc: "Garantiamo affidabilità e protezione dei dati, prevenendo vulnerabilità e operando in piena conformità con le normative europee sull'AI." },
      { icon: <Users size={18} />,       label: "Inclusività",    desc: "Progettare soluzioni AI accessibili e fruibili da tutti, indipendentemente da background o abilità." },
      { icon: <Scale size={18} />,       label: "Etica",          desc: "Sviluppiamo e implementiamo l'AI in modo responsabile, rispettando i diritti umani e minimizzando l'impatto negativo sulla società e sull'ambiente." },
      { icon: <Lightbulb size={18} />,   label: "Innovazione",    desc: "Ricerchiamo costantemente soluzioni all'avanguardia per superare le sfide attuali e migliorare le performance delle tecnologie che sviluppiamo." },
      { icon: <Eye size={18} />,         label: "Trasparenza",    desc: "Garantiamo che clienti e utenti comprendano come le nostre tecnologie funzionano e quali implicazioni hanno per loro." },
      { icon: <Handshake size={18} />,   label: "Collaborazione", desc: "Lavoriamo con aziende, istituzioni accademiche e organizzazioni per condividere conoscenze e best practice, costruendo soluzioni più robuste insieme." },
      { icon: <Leaf size={18} />,        label: "Sostenibilità",  desc: "Riduciamo l'impatto ambientale delle nostre tecnologie, ottimizzando l'uso delle risorse e contribuendo al benessere collettivo." },
    ],
  },
  {
    id: "rete-internazionale",
    eyebrow: "La nostra presenza",
    title: "Rete internazionale",
    accent: "orange",
    body: "Operiamo su scala internazionale con una presenza consolidata in Asia, dove collaboriamo con partner strategici in Cina — mercato in cui siamo già fornitori attivi per player di primo livello nel settore automotive. Una rete commerciale e tecnologica costruita nel tempo, che ci permette di muoverci dove il futuro dell'industria si sta già scrivendo.",
    icon: <Globe />,
    layout: "text-right",
    visual: { stat: "20+", desc: "Anni di presenza dei nostri founder in Asia" },
    countries: ["🇮🇹 Italia", "🇨🇳 Cina"],
  },
];

const css = `
  .cs-section-anchor { scroll-margin-top: 80px; }

  .cs-page {
    padding-top: 64px;
    background: var(--bg-base);
    min-height: 100vh;
  }

  /* ── HERO ── */
  .cs-hero {
    position: relative;
    padding: 5rem 1.5rem 4rem;
    overflow: hidden;
    border-bottom: 1px solid var(--bg-border);
  }

  .cs-hero-waves {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    mask-image:
      linear-gradient(180deg, transparent 0%, black 20%, black 80%, transparent 100%),
      linear-gradient(90deg,  transparent 0%, black 8%,  black 92%, transparent 100%);
    mask-composite: intersect;
    -webkit-mask-image:
      linear-gradient(180deg, transparent 0%, black 20%, black 80%, transparent 100%),
      linear-gradient(90deg,  transparent 0%, black 8%,  black 92%, transparent 100%);
    -webkit-mask-composite: source-in;
  }

  .cs-wave-track {
    position: absolute;
    top: 0; left: 0;
    height: 100%;
    display: flex;
    will-change: transform;
  }

  .cs-wave-track svg {
    flex-shrink: 0;
    height: 100%;
    width: auto;
    display: block;
  }

  .cs-wave-track.t1 { animation: wave-scroll 32s linear infinite;         opacity: 0.13; top:  0%;  }
  .cs-wave-track.t2 { animation: wave-scroll 50s linear infinite reverse; opacity: 0.09; top:  8%;  }
  .cs-wave-track.t3 { animation: wave-scroll 22s linear infinite;         opacity: 0.07; top: -6%;  }

  @keyframes wave-scroll {
    0%   { transform: translate3d(0,    0, 0); }
    100% { transform: translate3d(-50%, 0, 0); }
  }

  .cs-hero-inner {
    position: relative; z-index: 1;
    max-width: 800px; margin: 0 auto; text-align: center;
  }
  .cs-hero-title {
    font-size: clamp(2.5rem, 3vw, 4rem);
    font-weight: 800; line-height: 1.05;
    letter-spacing: -0.035em;
    margin-bottom: 1.25rem;
  }
  .cs-hero-sub {
    font-size: 1.125rem; line-height: 1.75;
    color: var(--text-secondary);
    max-width: 520px; margin: 0 auto;
  }

  /* ── CONTENT ── */
  .cs-content {
    max-width: 1100px; margin: 0 auto;
    padding: 0 1.5rem 6rem;
  }

  /* ── SEZIONE ── */
  .cs-section {
    padding: 5rem 0;
    border-bottom: 1px solid var(--bg-border);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
    align-items: center;
  }
  .cs-section:last-child { border-bottom: none; }
  .cs-section.reverse { direction: rtl; }
  .cs-section.reverse > * { direction: ltr; }
  @media (max-width: 768px) {
    .cs-section, .cs-section.reverse {
      grid-template-columns: 1fr;
      direction: ltr;
      gap: 2.5rem;
      padding: 3.5rem 0;
    }
  }
  .cs-section.values-layout { grid-template-columns: 1fr; gap: 3rem; }

  /* ── TESTO ── */
  .cs-eyebrow {
    font-size: 0.6875rem; font-weight: 600;
    letter-spacing: 0.12em; text-transform: uppercase;
    margin-bottom: 1rem;
  }
  .cs-eyebrow.orange { color: oklch(78% 0.18 50); }
  .cs-eyebrow.blue   { color: oklch(75% 0.18 240); }

  .cs-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(1.75rem, 3.5vw, 2.5rem);
    font-weight: 700; line-height: 1.15;
    letter-spacing: -0.025em;
    margin-bottom: 1.25rem;
  }
  .cs-body {
    font-size: 1.2rem; line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
  }
  .cs-highlight {
    display: flex; align-items: flex-start; gap: 0.75rem;
    padding: 1rem 1.25rem;
    border-radius: 0.75rem;
    font-size: 0.9375rem; font-weight: 500; line-height: 1.5;
  }
  .cs-highlight.orange {
    background: oklch(68% 0.26 50 / 0.08);
    border: 1px solid oklch(68% 0.26 50 / 0.20);
    color: oklch(82% 0.14 50);
  }
  .cs-highlight.blue {
    background: oklch(63% 0.24 240 / 0.08);
    border: 1px solid oklch(63% 0.24 240 / 0.20);
    color: oklch(80% 0.14 240);
  }

  /* ── VISUAL BOX ── */
  .cs-visual { display: flex; align-items: center; justify-content: center; }
  .cs-visual-box {
    width: 100%; max-width: 380px;
    background: var(--bg-surface);
    border: 1px solid var(--bg-border);
    border-radius: 1.25rem;
    padding: 2rem;
    box-shadow: 0 12px 40px oklch(0% 0 0 / 0.4);
    position: relative; overflow: hidden;
  }
  .cs-visual-box::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
  }
  .cs-visual-box.orange::before { background: linear-gradient(90deg, transparent, oklch(68% 0.26 50), transparent); }
  .cs-visual-box.blue::before   { background: linear-gradient(90deg, transparent, oklch(63% 0.24 240), transparent); }

  .cs-visual-icon  { margin-bottom: 1.25rem; display: block; color: var(--text-muted); }
  .cs-visual-stat  { font-family: 'Syne', sans-serif; font-size: 3rem; font-weight: 800; line-height: 1; margin-bottom: 0.375rem; }
  .cs-visual-stat.orange { color: oklch(68% 0.26 50); }
  .cs-visual-stat.blue   { color: oklch(63% 0.24 240); }
  .cs-visual-desc  { font-size: 0.875rem; color: var(--text-muted); line-height: 1.5; }
  .section-number  {
    font-family: 'Syne', sans-serif; font-size: 5rem; font-weight: 800;
    color: oklch(22% 0.010 30);
    position: absolute; top: 1rem; right: 1rem;
    pointer-events: none; user-select: none; line-height: 1;
  }

  /* ── VALORI ── */
  .values-header { max-width: 560px; }
  .values-supertitle {
    font-size: 0.6875rem; font-weight: 600;
    letter-spacing: 0.14em; text-transform: uppercase;
    color: var(--text-muted);
    margin-top: 0.5rem;
    margin-bottom: 2.5rem;
  }
  .values-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
  @media (max-width: 900px) { .values-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 640px) { .values-grid { grid-template-columns: 1fr; } }

  .value-card {
    background: var(--bg-surface);
    border: 1px solid var(--bg-border);
    border-radius: 0.875rem;
    padding: 1.5rem;
    transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
  }
  .value-card:hover {
    border-color: oklch(42% 0.008 30);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px oklch(0% 0 0 / 0.3);
  }
  .value-icon {
    width: 40px; height: 40px; border-radius: 10px;
    background: oklch(68% 0.26 50 / 0.10);
    border: 1px solid oklch(68% 0.26 50 / 0.20);
    display: flex; align-items: center; justify-content: center;
    color: oklch(78% 0.18 50);
    margin-bottom: 1rem;
  }
  .value-label { font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem; }
  .value-desc  { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.65; }

  /* ── PAESI ── */
  .countries-grid { display: flex; flex-wrap: wrap; gap: 0.625rem; margin-top: 1.25rem; }
  .country-chip {
    display: inline-flex; align-items: center; gap: 0.4rem;
    padding: 0.4rem 0.875rem;
    background: var(--bg-raised); border: 1px solid var(--bg-border);
    border-radius: 999px; font-size: 0.875rem; color: var(--text-secondary);
    transition: all 0.15s;
  }
  .country-chip:hover { border-color: oklch(68% 0.26 50 / 0.4); color: var(--text-primary); }
  /* ── MOBILE ── */
@media (max-width: 640px) {

  /* Hero */
  .cs-hero {
    padding: 3.5rem 1.25rem 2.5rem;
  }
  .cs-hero-title {
    font-size: 1.75rem;
    letter-spacing: -0.02em;
  }
  .cs-hero-sub {
    font-size: 1rem;
  }

  /* Sezioni */
  .cs-content {
    padding: 0 1.25rem 4rem;
  }
  .cs-section {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 3rem 0;
  }
  .cs-section.reverse {
    direction: ltr;
  }

  /* Visual box */
  .cs-visual-box {
    max-width: 100%;
    padding: 1.5rem;
  }
  .cs-visual-stat {
    font-size: 2.25rem;
  }
  .section-number {
    font-size: 3.5rem;
  }

  /* Testo */
  .cs-title {
    font-size: 1.5rem;
  }
  .cs-body {
    font-size: 1rem;
  }

  /* Valori */
  .values-grid {
    grid-template-columns: 1fr;
  }
  .value-card {
    padding: 1.25rem;
  }

  /* Paesi */
  .countries-grid {
    gap: 0.5rem;
  }
  .country-chip {
    font-size: 0.8125rem;
  }
}

@media (min-width: 641px) and (max-width: 900px) {
  .cs-section {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .cs-visual-box {
    max-width: 320px;
  }
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
`;

/* ─────────────────────────────────────────────────────────────
   WAVE TRACK
───────────────────────────────────────────────────────────── */
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
    <div className={`cs-wave-track ${className}`} style={reverse ? { animationDirection: 'reverse' } : {}}>
      {svg}{svg}
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   COMPONENTE PRINCIPALE
───────────────────────────────────────────────────────────── */
const ChiSiamo = () => {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 60 });
  }, []);

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
              Conosciamo le tue sfide. Perché le abbiamo vissute in prima persona.
            </h1>
            <p className="cs-hero-sub" data-aos="fade-up" data-aos-delay="200">
              Non consulenti. Non teorici.<br /> Siamo imprenditori che costruiscono tecnologia per chi fa impresa.
            </p>
          </div>
        </div>

        {/* ── SEZIONI ── */}
        <div className="cs-content">
          {SECTIONS.map((sec, i) => {

            /* ── VALORI ── */
            if (sec.layout === "values-grid") return (
              <div key={sec.id} id={sec.id} className="cs-section values-layout cs-section-anchor">
                <div className="values-header" data-aos="fade-up">
                  <div className={`cs-eyebrow ${sec.accent}`}>{sec.eyebrow}</div>
                  <h2 className="cs-title">{sec.title}</h2>
                  <p className="values-supertitle">Il riferimento nel nostro lavoro</p>
                </div>
                <div className="values-grid">
                  {sec.values.map((v, vi) => (
                    <div key={v.label} className="value-card" data-aos="fade-up" data-aos-delay={(vi % 4) * 80}>
                      <div className="flex items-center gap-3" style={{ marginBottom: "0.75rem" }}>
                        <div className="value-icon">{v.icon}</div>
                        <div className="value-label">{v.label}</div>
                      </div>
                      <p className="value-desc">{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            );

            /* ── LAYOUT ALTERNATO ── */
            const isReverse = sec.layout === "text-right";
            const aosTxt    = isReverse ? "fade-right" : "fade-left";
            const aosVis    = isReverse ? "fade-left"  : "fade-right";

            const TextCol = (
              <div data-aos={aosTxt} data-aos-delay="100">
                <div className={`cs-eyebrow ${sec.accent}`}>{sec.eyebrow}</div>
                <h2 className="cs-title">{sec.title}</h2>
                {sec.body && <p className="cs-body">{sec.body}</p>}
                {sec.highlight && (
                  <div className={`cs-highlight ${sec.accent}`}>
                    <span style={{ flexShrink: 0 }}>{sec.accent === "orange" ? "⚡" : "✦"}</span>
                    {sec.highlight}
                  </div>
                )}
                {sec.countries && (
                  <div className="countries-grid">
                    {sec.countries.map((c) => (
                      <span key={c} className="country-chip">{c}</span>
                    ))}
                  </div>
                )}
              </div>
            );

            const VisualCol = (
              <div className="cs-visual" data-aos={aosVis} data-aos-delay="200">
                <div className={`cs-visual-box ${sec.accent}`}>
                  <span className="cs-visual-icon">{sec.icon}</span>
                  <div className={`cs-visual-stat ${sec.accent}`}>{sec.visual.stat}</div>
                  <p className="cs-visual-desc">{sec.visual.desc}</p>
                  <div className="section-number">0{i + 1}</div>
                </div>
              </div>
            );

            return (
              <div key={sec.id} id={sec.id}
                className={`cs-section cs-section-anchor${isReverse ? " reverse" : ""}`}>
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