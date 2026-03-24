import logo from "../assets/LOGO.png";
import { Linkedin } from "lucide-react";
import { useState } from "react";

const CONTENT = {
  it: {
    claim: <>Intelligenza artificiale applicata all'industria.<br />Dove l'innovazione incontra l'esperienza.</>,
    azienda: "Azienda",
    prodotti: "Prodotti",
    contatti: "Contatti",
    sediTitle: "Sedi",
    sedeLegale: "Sede Legale",
    sedeOperativa: "Sedi Operative",
    pec: "PEC",
    tel: "Tel",
    cf: "C.F./P.IVA",
    privacy: "Privacy Policy",
    cookie: "Cookie Policy",
    address_legale: <>Corso Garibaldi, 80 – 55049 Viareggio (LU), Italia</>,
    address_ops: [
      <>Corso Garibaldi, 80 – 55049 Viareggio (LU), Italia</>,
      <>Second Floor, No. 979, Yunhan Road,<br />Lingang New Area, Shanghai, Cina</>,
    ],
  },
  en: {
    claim: <>Artificial intelligence applied to industry.<br />Where innovation meets experience.</>,
    azienda: "Company",
    prodotti: "Products",
    contatti: "Contacts",
    sediTitle: "Offices",
    sedeLegale: "Registered Office",
    sedeOperativa: "Operative Headquarters",
    pec: "Certified Email",
    tel: "Tel",
    cf: "VAT Number",
    privacy: "Privacy Policy",
    cookie: "Cookie Policy",
    address_legale: <>Corso Garibaldi, 80 – 55049 Viareggio (LU), Italy</>,
    address_ops: [
      <>Corso Garibaldi, 80 – 55049 Viareggio (LU), Italy</>,
      <>Second Floor, No. 979, Yunhan Road,<br />Lingang New Area, Shanghai, China</>,
    ],
  },
  zh: {
    claim: <>人工智能应用于工业领域。<br />创新与经验的交汇之处。</>,
    azienda: "公司",
    prodotti: "产品",
    contatti: "联系方式",
    sediTitle: "办公室",
    sedeLegale: "注册办公室",
    sedeOperativa: "运营总部",
    pec: "认证Email",
    tel: "电话",
    cf: "增值税号码",
    privacy: "隐私政策",
    cookie: "Cookie政策",
    address_legale: <>Corso Garibaldi, 80 – 55049 Viareggio (LU), 意大利</>,
    address_ops: [
      <>Corso Garibaldi, 80 – 55049 Viareggio (LU), 意大利</>,
      <>中国（上海）自由贸易试验区<br />临港新片区云汉路979号2楼</>,
    ],
  },
};

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500&display=swap');

  .ft-root {
    background: #080808;
    color: #F0EDE8;
    font-family: 'DM Sans', sans-serif;
    border-top: 1px solid #1A1A1A;
  }

  /* ── TOP ROW ── */
  .ft-top {
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr 1fr;
    gap: 48px;
    padding: 72px 10% 56px;
    border-bottom: 1px solid #141414;
  }

  /* ── BRAND ── */
  .ft-brand-logo {
    display: block;
    margin-bottom: 16px;
    width: fit-content;
    text-decoration: none;
  }
  .ft-brand-logo img {
    height: 76px;
    width: auto;
    display: block;
    object-fit: contain;
  }
  .ft-brand-claim {
    font-size: 13px;
    line-height: 1.8;
    color: #555;
    font-weight: 300;
    max-width: 260px;
    margin-bottom: 24px;
  }
  .ft-brand-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
  }
  .ft-brand-badges { display: flex; gap: 8px; flex-wrap: wrap; }
  .ft-badge {
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 5px 12px;
    border: 1px solid #1E1E1E;
    border-radius: 100px;
    color: #444;
  }

  /* LinkedIn icon */
  .ft-linkedin {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border: 1px solid #1E1E1E;
    border-radius: 8px;
    color: #444;
    text-decoration: none;
    transition: border-color 0.2s, color 0.2s, background 0.2s;
    flex-shrink: 0;
  }
  .ft-linkedin:hover {
    border-color: #0A66C2;
    color: #0A66C2;
    background: #0A66C21A;
  }

  /* ── LANG SWITCH ── */
  .ft-lang-switch {
    display: flex;
    gap: 4px;
    margin-bottom: 20px;
  }
  .ft-lang-btn {
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 4px 10px;
    border: 1px solid #1E1E1E;
    border-radius: 100px;
    color: #444;
    background: transparent;
    cursor: pointer;
    font-family: 'DM Sans', sans-serif;
    transition: all 0.15s;
  }
  .ft-lang-btn:hover { color: #888; border-color: #333; }
  .ft-lang-btn.active { border-color: #E63946; color: #E63946; background: #E6394611; }

  /* ── COLS ── */
  .ft-col-title {
    font-size: 10px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #333;
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid #141414;
  }
  .ft-col-links { display: flex; flex-direction: column; gap: 10px; }
  .ft-link {
    font-size: 14px;
    color: #666;
    text-decoration: none;
    font-weight: 300;
    transition: color 0.2s;
    width: fit-content;
  }
  .ft-link:hover { color: #F0EDE8; }
  .ft-link-accent {
    font-size: 14px;
    color: #E63946;
    text-decoration: none;
    font-weight: 300;
    transition: opacity 0.2s;
    width: fit-content;
  }
  .ft-link-accent:hover { opacity: 0.7; }

  /* ── SEDI ── */
  .ft-sedi {
    padding: 40px 10%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    border-bottom: 1px solid #141414;
  }
  .ft-sede-block { display: flex; flex-direction: column; gap: 20px; }
  .ft-sede-item {}
  .ft-sede-flag {
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #E63946;
    margin-bottom: 8px;
  }
  .ft-sede-address {
    font-size: 13px;
    line-height: 1.8;
    color: #555;
    font-weight: 300;
  }

  /* ── BOTTOM ── */
  .ft-bottom {
    padding: 24px 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
  }
  .ft-legal-block {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .ft-legal-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 20px;
    align-items: center;
  }
  .ft-legal-item { font-size: 12px; color: #333; font-weight: 300; }
  .ft-legal-item a {
    color: #444;
    text-decoration: none;
    transition: color 0.2s;
  }
  .ft-legal-item a:hover { color: #888; }
  .ft-legal-dot { font-size: 12px; color: #222; }
  .ft-legal-sub  { font-size: 11px; color: #222; font-weight: 300; }

  .ft-policy-links { display: flex; align-items: center; gap: 20px; }
  .ft-policy-link {
    font-size: 11px;
    color: #333;
    text-decoration: none;
    letter-spacing: 0.5px;
    transition: color 0.2s;
  }
  .ft-policy-link:hover { color: #666; }
  .ft-policy-sep { width: 1px; height: 10px; background: #222; }

  @media (max-width: 900px) {
    .ft-top { grid-template-columns: 1fr 1fr; padding: 56px 6% 48px; gap: 36px; }
    .ft-brand-col { grid-column: 1 / -1; }
    .ft-sedi { padding: 36px 6%; gap: 32px; }
    .ft-bottom { padding: 20px 6%; flex-direction: column; align-items: flex-start; gap: 16px; }
  }
  @media (max-width: 560px) {
    .ft-top { grid-template-columns: 1fr; }
    .ft-sedi { grid-template-columns: 1fr; }
    .ft-policy-links { flex-wrap: wrap; gap: 12px; }
  }
    @media (max-width: 900px) {
  .ft-top {
    grid-template-columns: 1fr 1fr;
    padding: 48px 6% 40px;
    gap: 32px;
  }
  .ft-brand-col { grid-column: 1 / -1; }
  .ft-sedi { padding: 32px 6%; gap: 24px; }
  .ft-bottom {
    padding: 20px 6%;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}

@media (max-width: 560px) {
  .ft-top {
    grid-template-columns: 1fr;
    padding: 40px 5% 32px;
    gap: 28px;
  }
  .ft-brand-logo img { height: 56px; }
  .ft-brand-claim { font-size: 12px; }
  .ft-brand-badges { gap: 6px; }
  .ft-badge { font-size: 9px; padding: 4px 10px; }

  .ft-col-title { font-size: 9px; }
  .ft-link, .ft-link-accent { font-size: 13px; }

  .ft-sedi {
    grid-template-columns: 1fr;
    padding: 28px 5%;
    gap: 20px;
  }
  .ft-sede-address { font-size: 12px; }

  .ft-bottom { padding: 18px 5%; gap: 14px; }
  .ft-legal-row { gap: 4px 12px; }
  .ft-legal-item { font-size: 11px; }
  .ft-legal-dot { display: none; }
  .ft-legal-sub { font-size: 10px; }

  .ft-policy-links {
    flex-wrap: wrap;
    gap: 10px;
  }
  .ft-policy-sep { display: none; }
  .ft-policy-link { font-size: 11px; }
}
`;

const Footer = ({ lang = "it" }) => {
  const year = new Date().getFullYear();
  const [currentLang, setCurrentLang] = useState(lang);
  const t = CONTENT[currentLang] || CONTENT.it;

  return (
    <>
      <style>{style}</style>
      <footer className="ft-root">

        <div className="ft-top">
          {/* ── BRAND COL ── */}
          <div className="ft-brand-col">

            {/* Lang switch */}
            <div className="ft-lang-switch">
              {["it", "en", "zh"].map((l) => (
                <button
                  key={l}
                  className={`ft-lang-btn${currentLang === l ? " active" : ""}`}
                  onClick={() => setCurrentLang(l)}
                >
                  {l === "it" ? "ITA" : l === "en" ? "ENG" : "中文"}
                </button>
              ))}
            </div>

            <a href="/" className="ft-brand-logo">
              <img src={logo} alt="BluMentis" />
            </a>

            <p className="ft-brand-claim">{t.claim}</p>

            <div className="ft-brand-bottom">
              <div className="ft-brand-badges">
                <span className="ft-badge">GDPR Compliant</span>
                <span className="ft-badge">ISO Ready</span>
                <span className="ft-badge">Made in Italy</span>
              </div>
              <a
                href="https://www.linkedin.com/company/blumentis"
                target="_blank"
                rel="noreferrer"
                className="ft-linkedin"
                aria-label="BluMentis su LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* ── AZIENDA ── */}
          <div>
            <div className="ft-col-title">{t.azienda}</div>
            <div className="ft-col-links">
              <a href="/#chi-siamo" className="ft-link">Chi siamo</a>
              <a href="/#visione" className="ft-link">Visione</a>
              <a href="/#missione" className="ft-link">Missione</a>
              <a href="/#valori" className="ft-link">Valori</a>
              <a href="/#rete-internazionale" className="ft-link">Rete internazionale</a>
            </div>
          </div>

          {/* ── PRODOTTI ── */}
          <div>
            <div className="ft-col-title">{t.prodotti}</div>
            <div className="ft-col-links">
              <a href="/prodotti#proline" className="ft-link">ProLine Analytics</a>
              <a href="/prodotti#optimai" className="ft-link">OptimAI</a>
              <a href="/prodotti#agentiche" className="ft-link">Piattaforme Agentiche</a>
              <a href="/prodotti#custom" className="ft-link">Sviluppi Custom</a>
              <a href="/prodotti#hardware" className="ft-link">Hardware</a>
            </div>
          </div>

          {/* ── CONTATTI ── */}
          <div>
            <div className="ft-col-title">{t.contatti}</div>
            <div className="ft-col-links">
              <a href="mailto:blumentis@pec.it" className="ft-link-accent">blumentis@pec.it</a>
              <a href="tel:+390584148124" className="ft-link">+39 0584 1481242</a>
              <a href="/contatti" className="ft-link" style={{ marginTop: 8 }}>Scrivici →</a>
              <a href="/carriere" className="ft-link">Carriere &amp; Tesi</a>
            </div>
          </div>
        </div>

        {/* ── SEDI ── */}
        <div className="ft-sedi">
          <div className="ft-sede-block">
            <div className="ft-sede-item">
              <div className="ft-sede-flag">🇮🇹 {t.sedeLegale}</div>
              <div className="ft-sede-address">{t.address_legale}</div>
            </div>
          </div>
          <div className="ft-sede-block">
            <div className="ft-sede-flag"> {t.sedeOperativa}</div>
            {t.address_ops.map((addr, i) => (
              <div className="ft-sede-item" key={i}>
                <div className="ft-sede-address">{addr}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── BOTTOM ── */}
        <div className="ft-bottom">
          <div className="ft-legal-block">
            <div className="ft-legal-row">
              <span className="ft-legal-item">BluMentis s.r.l.</span>
              <span className="ft-legal-dot">·</span>
              <span className="ft-legal-item">{t.cf}: IT02694850468</span>
              <span className="ft-legal-dot">·</span>
              <span className="ft-legal-item">
                {t.pec}: <a href="mailto:blumentis@pec.it">blumentis@pec.it</a>
              </span>
              <span className="ft-legal-dot">·</span>
              <span className="ft-legal-item">
                {t.tel}: <a href="tel:+390584148124">+39 0584 1481242</a>
              </span>
            </div>
            <div className="ft-legal-sub">© {year} BluMentis s.r.l. Tutti i diritti riservati.</div>
          </div>

          <div className="ft-policy-links">
            <a href="/privacy" className="ft-policy-link">{t.privacy}</a>
            <div className="ft-policy-sep" />
            <a href="/cookie" className="ft-policy-link">{t.cookie}</a>
            <div className="ft-policy-sep" />
            <a href="https://www.blumentis.ai" className="ft-policy-link" target="_blank" rel="noreferrer">blumentis.ai ↗</a>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;