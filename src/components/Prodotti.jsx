// src/pages/Prodotti.jsx
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Card from "./Card";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { BotIcon, ChartNetworkIcon, Computer, FolderCode, Wrench } from "lucide-react";

// ─── Metadati fissi per prodotto (non traducibili) ────────────────────────────
// Ordine DEVE corrispondere all'ordine degli item nel JSON
const PRODUCT_META = [
  { id: "proline",   icon: <FolderCode size={80} strokeWidth={1.5} />,       accent: "orange", accentClass: "orange", href: "/prodotti/proline" },
  { id: "optimai",   icon: <ChartNetworkIcon size={80} strokeWidth={1.5} />,  accent: "blue",   accentClass: "blue",   href: "/prodotti/optimai" },
  { id: "agentiche", icon: <BotIcon size={80} strokeWidth={1.5} />,           accent: "orange", accentClass: "teal",   href: "/prodotti/agentiche" },
  { id: "custom",    icon: <Wrench strokeWidth={1.5} size={80}  />, accent: "blue", accentClass: "gold", href: "/prodotti/custom" },
  { id: "hardware",  icon: <Computer size={80} strokeWidth={1.5} />,          accent: "orange", accentClass: "steel",  href: "/prodotti/hardware" },
];

const accentColor = (accentClass) => {
  if (accentClass === "orange") return { bg: "oklch(68% 0.26 50)",  glow: "oklch(68% 0.26 50 / 0.25)",  text: "#0d0f14" };
  if (accentClass === "blue")   return { bg: "oklch(60% 0.22 255)", glow: "oklch(60% 0.22 255 / 0.25)", text: "#0d0f14" };
  if (accentClass === "teal")   return { bg: "oklch(66% 0.18 185)", glow: "oklch(66% 0.18 185 / 0.25)", text: "#080b10" };
  if (accentClass === "gold")   return { bg: "oklch(62% 0.14 80)",  glow: "oklch(62% 0.14 80 / 0.25)",  text: "#0b0c09" };
  if (accentClass === "steel")  return { bg: "oklch(58% 0.08 220)", glow: "oklch(58% 0.08 220 / 0.25)", text: "#09090b" };
  return { bg: "oklch(68% 0.26 50)", glow: "oklch(68% 0.26 50 / 0.25)", text: "#0d0f14" };
};

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

  .pr-page { padding-top: 64px; background: var(--bg-base); min-height: 100vh; }

  .pr-hero {
    position: relative; padding: 5rem 1.5rem 4rem;
    overflow: hidden; border-bottom: 1px solid var(--bg-border);
  }
  .pr-hero-bg-word {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(60px, 14vw, 200px);
    color: white; opacity: 3%;
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap; pointer-events: none;
    letter-spacing: 8px; user-select: none;
  }

  .pr-tab.active.teal  { color: oklch(78% 0.14 185); border-color: oklch(66% 0.18 185); }
  .pr-cat-label.teal   { color: oklch(78% 0.14 185); }
  .pr-stat-val.teal    { color: oklch(66% 0.18 185); }
  .pr-check.teal       { background: oklch(66% 0.18 185 / 0.12); border: 1px solid oklch(66% 0.18 185 / 0.30); color: oklch(66% 0.18 185); }
  .pr-other-cat.teal   { background: oklch(66% 0.18 185 / 0.12); color: oklch(78% 0.14 185); }
  .pr-count-val.teal   { color: oklch(66% 0.18 185); }
  .pr-eyebrow.teal     { background: oklch(66% 0.18 185 / 0.10); border-color: oklch(66% 0.18 185 / 0.22); color: oklch(78% 0.14 185); }
  .pr-tab.active.gold  { color: oklch(74% 0.11 80);  border-color: oklch(62% 0.14 80); }
  .pr-cat-label.gold   { color: oklch(74% 0.11 80); }
  .pr-stat-val.gold    { color: oklch(62% 0.14 80); }
  .pr-check.gold       { background: oklch(62% 0.14 80 / 0.12); border: 1px solid oklch(62% 0.14 80 / 0.30); color: oklch(62% 0.14 80); }
  .pr-other-cat.gold   { background: oklch(62% 0.14 80 / 0.12); color: oklch(74% 0.11 80); }
  .pr-tab.active.steel { color: oklch(72% 0.06 220); border-color: oklch(58% 0.08 220); }
  .pr-cat-label.steel  { color: oklch(72% 0.06 220); }
  .pr-stat-val.steel   { color: oklch(58% 0.08 220); }
  .pr-check.steel      { background: oklch(58% 0.08 220 / 0.12); border: 1px solid oklch(58% 0.08 220 / 0.30); color: oklch(58% 0.08 220); }
  .pr-other-cat.steel  { background: oklch(58% 0.08 220 / 0.12); color: oklch(72% 0.06 220); }

  .pr-hero-inner {
    position: relative; z-index: 1; max-width: 1100px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center;
  }
  @media (max-width: 768px) { .pr-hero-inner { grid-template-columns: 1fr; gap: 2.5rem; } }

  .pr-eyebrow {
    display: inline-flex; align-items: center; gap: 0.5rem;
    padding: 0.3rem 0.875rem;
    background: oklch(68% 0.26 50 / 0.10); border: 1px solid oklch(68% 0.26 50 / 0.22);
    border-radius: 999px; font-size: 0.8rem; font-weight: 500; color: oklch(78% 0.18 50);
    margin-bottom: 1.25rem;
  }
  .pr-hero-title {
    font-family: 'Syne', sans-serif;
    font-size: clamp(2rem, 4.5vw, 3.5rem);
    font-weight: 800; line-height: 1.08; letter-spacing: -0.03em; margin-bottom: 1.25rem;
  }
  .pr-hero-title .line { display: block; }
  .pr-hero-title .accent {
    background: linear-gradient(135deg, oklch(78% 0.22 50), oklch(60% 0.22 255));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .pr-hero-sub { font-size: 1.0625rem; line-height: 1.75; color: var(--text-secondary); max-width: 460px; }

  .pr-count-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px;
    background: var(--bg-border); border: 1px solid var(--bg-border);
    border-radius: 1rem; overflow: hidden;
  }
  .pr-count-cell { background: var(--bg-surface); padding: 1.5rem 1rem; text-align: center; transition: background 0.2s; }
  .pr-count-cell:hover { background: var(--bg-raised); }
  .pr-count-val { font-family: 'Syne', sans-serif; font-size: 2rem; font-weight: 800; line-height: 1; margin-bottom: 0.4rem; }
  .pr-count-val.orange { color: oklch(68% 0.26 50); }
  .pr-count-val.blue   { color: oklch(60% 0.22 255); }
  .pr-count-label { font-size: 0.7rem; color: var(--text-muted); line-height: 1.4; }

  .pr-tabs-wrap { position: sticky; top: 64px; z-index: 50; background: oklch(13% 0.008 30 / 0.92); backdrop-filter: blur(12px); border-bottom: 1px solid var(--bg-border); }
  .pr-tabs { margin: 0 auto; padding: 0 1.5rem; display: flex; overflow-x: auto; scrollbar-width: none; }
  .pr-tabs::-webkit-scrollbar { display: none; }
  .pr-tab {
    display: flex; align-items: center; gap: 0.5rem;
    padding: 1rem 1.25rem; font-family: 'DM Sans', sans-serif; font-size: 0.875rem; font-weight: 450;
    color: var(--text-muted); background: none; border: none;
    border-bottom: 2px solid transparent; cursor: pointer; white-space: nowrap;
    transition: color 0.15s, border-color 0.15s; margin-bottom: -1px;
  }
  .pr-tab:hover { color: var(--text-secondary); }
  .pr-tab.active.orange { color: oklch(78% 0.18 50); border-color: oklch(68% 0.26 50); }
  .pr-tab.active.blue   { color: oklch(75% 0.18 240); border-color: oklch(60% 0.22 255); }
  .pr-tab-icon { font-size: 1rem; ; }
  .pr-tab-badge { font-size: 0.6rem; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; padding: 0.1rem 0.4rem; border-radius: 999px;  ; border: 1px solid  }

  .pr-content { max-width: 1100px; margin: 0 auto; padding: 4rem 1.5rem 6rem; }
  .pr-featured { display: grid; grid-template-columns: auto 1fr; gap: 4rem; align-items: start; margin-bottom: 4rem; padding-bottom: 4rem; border-bottom: 1px solid var(--bg-border); }
  @media (max-width: 768px) { .pr-featured { grid-template-columns: 1fr; gap: 2.5rem; } }

  .pr-cat-label { font-size: 0.6875rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 0.875rem; }
  .pr-cat-label.orange { color: oklch(78% 0.18 50); }
  .pr-cat-label.blue   { color: oklch(75% 0.18 240); }
  .pr-product-title { font-family: 'Syne', sans-serif; font-size: clamp(1.75rem,3vw,2.5rem); font-weight: 700; line-height: 1.1; letter-spacing: -0.025em; margin-bottom: 0.5rem; }
  .pr-tagline { font-size: 1rem; color: var(--text-muted); margin-bottom: 1.5rem; }
  .pr-desc { font-size: 1rem; line-height: 1.8; color: var(--text-secondary); margin-bottom: 2rem; }

  .pr-stats { display: flex; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 2rem; }
  .pr-stat { background: var(--bg-raised); border: 1px solid var(--bg-border); border-radius: 0.75rem; padding: 0.875rem 1.25rem; text-align: center; min-width: 80px; }
  .pr-stat-val { font-family: 'Syne', sans-serif; font-size: 1.5rem; font-weight: 800; line-height: 1; margin-bottom: 0.2rem; }
  .pr-stat-val.orange { color: oklch(68% 0.26 50); }
  .pr-stat-val.blue   { color: oklch(60% 0.22 255); }
  .pr-stat-lbl { font-size: 0.7rem; color: var(--text-muted); font-weight: 500; letter-spacing: 0.04em; }

  .pr-features { display: flex; flex-direction: column; gap: 0.6rem; margin-bottom: 2rem; }
  .pr-feature { display: flex; align-items: center; gap: 0.625rem; font-size: 0.9rem; color: var(--text-secondary); }
  .pr-check { width: 18px; height: 18px; border-radius: 50%; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; font-weight: 700; }
  .pr-check.orange { background: oklch(68% 0.26 50 / 0.12); border: 1px solid oklch(68% 0.26 50 / 0.3); color: oklch(68% 0.26 50); }
  .pr-check.blue   { background: oklch(60% 0.22 255 / 0.12); border: 1px solid oklch(60% 0.22 255 / 0.3); color: oklch(60% 0.22 255); }

  .pr-scopri-btn { display: inline-flex; align-items: center; gap: 0.5rem; margin-top: 0.5rem; padding: 0.75rem 1.5rem; border-radius: 0.75rem; font-weight: 700; font-size: 0.9rem; text-decoration: none; transition: 0.22s; }
  .pr-scopri-btn:hover { filter: brightness(1.1); transform: translateY(-2px); box-shadow: 0 8px 24px var(--btn-glow); }

  .pr-others-label { font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 600; color: var(--text-muted); letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 1.25rem; }
  .pr-others-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 1rem; }
  .pr-other-card { background: var(--bg-surface); border: 1px solid var(--bg-border); border-radius: 0.875rem; padding: 1.25rem; cursor: pointer; text-align: left; transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s; display: flex; flex-direction: column; gap: 0.625rem; }
  .pr-other-card:hover { border-color: oklch(42% 0.008 30); transform: translateY(-2px); box-shadow: 0 8px 24px oklch(0% 0 0 / 0.3); }
  .pr-other-top { display: flex; align-items: center; justify-content: space-between; }
  .pr-other-icon { font-size: 1.375rem; }
  .pr-other-cat { font-size: 0.65rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; padding: 0.15rem 0.5rem; border-radius: 999px; }
  .pr-other-cat.orange { background: oklch(68% 0.26 50 / 0.12); color: oklch(78% 0.18 50); }
  .pr-other-cat.blue   { background: oklch(60% 0.22 255 / 0.12); color: oklch(75% 0.18 240); }
  .pr-other-name { font-family: 'Syne', sans-serif; font-size: 0.9375rem; font-weight: 600; }
  .pr-other-tagline { font-size: 0.8125rem; color: var(--text-muted); line-height: 1.5; }
  .pr-other-arrow { color: var(--text-muted); font-size: 0.8125rem; margin-top: auto; }

  .pr-tab-name-short { display: none; }
  @media (max-width: 768px) {
    .pr-hero { padding: 3rem 1.25rem 2.5rem; }
    .pr-count-val { font-size: 1.4rem; }
    .pr-tab { padding: 0.75rem 0.625rem; font-size: 0.7rem; gap: 0.25rem; flex-direction: column; align-items: center; min-width: 64px; text-align: center; }
    .pr-tab-badge { display: none; }
    .pr-tab-name-full  { display: none; }
    .pr-tab-name-short { display: block; }
    .pr-content { padding: 2rem 1.25rem 4rem; }
    .pr-featured { grid-template-columns: 1fr; gap: 2rem; margin-bottom: 2.5rem; padding-bottom: 2.5rem; }
    .pr-others-grid { grid-template-columns: 1fr 1fr; gap: 0.75rem; }
    .pr-scopri-btn { width: 100%; justify-content: center; }
  }
  @media (max-width: 420px) { .pr-others-grid { grid-template-columns: 1fr; } }
`;

const Prodotti = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const { hash } = useLocation();

  // Testo dal JSON, metadati fissi dal JS — uniti per formare i prodotti completi
  const items = t("prodotti.items", { returnObjects: true });
  const counts = t("prodotti.counts", { returnObjects: true });

  const PRODUCTS = Array.isArray(items)
    ? items.map((item, i) => ({ ...item, ...PRODUCT_META[i] }))
    : [];

  useEffect(() => {
    const id = hash.replace("#", "");
    const idx = PRODUCTS.findIndex((p) => p.id === id);
    if (idx !== -1) setActive(idx);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash]);

  useEffect(() => {
    AOS.init({ duration: 650, easing: "ease-out-cubic", once: true, offset: 60 });
  }, []);

  const product = PRODUCTS[active];
  const others  = PRODUCTS.filter((_, i) => i !== active);

  if (!product) return null;

  return (
    <>
      <style>{css}</style>
      <div className="pr-page">

        {/* ── HERO ── */}
        <div className="pr-hero">
          <span className="pr-hero-bg-word" aria-hidden="true">
            {t("prodotti.hero.bg_word")}
          </span>
          <div className="pr-hero-inner">
            <div data-aos="fade-right">
              <div className="pr-eyebrow">
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "oklch(68% 0.26 50)", display: "inline-block" }} />
                {t("prodotti.hero.eyebrow")}
              </div>
              <h1 className="pr-hero-title">
                <span className="line">{t("prodotti.hero.title_1")}</span>
                <span className="line">{t("prodotti.hero.title_2")}</span>
                <span className="line accent">{t("prodotti.hero.title_3")}</span>
              </h1>
              <p className="pr-hero-sub">{t("prodotti.hero.subtitle")}</p>
            </div>

            <div data-aos="fade-left" data-aos-delay="150">
              <div className="pr-count-grid">
                {Array.isArray(counts) && counts.map(({ val, label }, i) => (
                  <div key={i} className="pr-count-cell">
                    <div className={`pr-count-val ${i % 2 === 0 ? "orange" : "blue"}`}>{val}</div>
                    <div className="pr-count-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── TAB NAV ── */}
        <div className="pr-tabs-wrap">
          <div className="pr-tabs" role="tablist">
            {PRODUCTS.map((p, i) => (
              <button
                key={p.id}
                role="tab"
                aria-selected={active === i}
                className={`pr-tab${active === i ? ` active ${p.accentClass}` : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="pr-tab-icon">{p.id=="proline"?<FolderCode></FolderCode>:p.id=="optimai"?<ChartNetworkIcon></ChartNetworkIcon>:p.id=="agentiche"?<BotIcon></BotIcon>:p.id=="custom"?<Wrench></Wrench>:p.id=="hardware"?<Computer></Computer>:null}</span>
                <span className="pr-tab-name-full">{p.name}</span>
                <span className="pr-tab-name-short">{p.shortName}</span>
                {p.badge && <span className={`pr-tab-badge text-${p.accentClass} bg-${p.accentClass} border-${p.accentColor}` } >{p.badge}</span>}
              </button>
            ))}
          </div>
        </div>

        {/* ── PRODOTTO ATTIVO ── */}
        <div className="pr-content" key={product.id} id={`${product.id}`}>
          <div className="pr-featured" data-aos="fade-up">
            <Card product={product} isActive={true} onClick={() => {}} />

            <div className="pr-text-col">
              <div className={`pr-cat-label ${product.accentClass}`}>{product.category}</div>
              <h2 className="pr-product-title">{product.name}</h2>
              <p className="pr-tagline">{product.tagline}</p>
              <p className="pr-desc">{product.description}</p>

              <div className="pr-stats">
                {product.stats.map(({ value, label }) => (
                  <div key={label} className="pr-stat">
                    <div className={`pr-stat-val ${product.accentClass}`}>{value}</div>
                    <div className="pr-stat-lbl">{label}</div>
                  </div>
                ))}
              </div>

              <div className="pr-features">
                {product.features.map((f) => (
                  <div key={f} className="pr-feature">
                    <span className={`pr-check ${product.accentClass}`}>✓</span>
                    {f}
                  </div>
                ))}
              </div>

              {(() => {
                const { bg, glow, text } = accentColor(product.accentClass);
                return (
                  <Link
                    to={product.href}
                    className="pr-scopri-btn"
                    style={{ background: bg, color: text, "--btn-glow": glow }}
                  >
                    {t("prodotti.scopri")}
                  </Link>
                );
              })()}
            </div>
          </div>

          {/* ── ALTRI PRODOTTI ── */}
          <div data-aos="fade-up" data-aos-delay="100">
            <div className="pr-others-label">{t("prodotti.esplora")}</div>
            <div className="pr-others-grid">
              {others.map((p) => (
                <button
                  key={p.id}
                  className="pr-other-card"
                  onClick={() => { setActive(PRODUCTS.indexOf(p)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                >
                  <div className="pr-other-top">
                    <span className="pr-tab-icon">{p.id=="proline"?<FolderCode></FolderCode>:p.id=="optimai"?<ChartNetworkIcon></ChartNetworkIcon>:p.id=="agentiche"?<BotIcon></BotIcon>:p.id=="custom"?<Wrench></Wrench>:p.id=="hardware"?<Computer></Computer>:null}</span>
                    <span className={`pr-other-cat ${p.accentClass}`}>{p.category}</span>
                  </div>
                  <div className="pr-other-name">{p.name}</div>
                  <div className="pr-other-tagline">{p.tagline}</div>
                  <div className="pr-other-arrow">{t("prodotti.scopri_short")}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Prodotti;