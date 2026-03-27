// src/components/Footer.jsx
import { useTranslation } from "react-i18next";
import logo from "../assets/LOGO.png";
import { Linkedin } from "lucide-react";

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
    color: #888;
    font-weight: 300;
    max-width: 260px;
    margin-bottom: 24px;
    white-space: pre-line;
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
    color: #888;
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
    color: #888;
    text-decoration: none;
    transition: border-color 0.2s, color 0.2s, background 0.2s;
    flex-shrink: 0;
  }
  .ft-linkedin:hover {
    border-color: #0A66C2;
    color: #0A66C2;
    background: #0A66C21A;
  }

  /* ── COLS ── */
  .ft-col-title {
    font-size: 10px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #999;
    margin-bottom: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid #141414;
  }
  .ft-col-links { display: flex; flex-direction: column; gap: 10px; }
  .ft-link {
    font-size: 14px;
    color: #888;
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
    color: #888;
    font-weight: 300;
    white-space: pre-line;
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
  .ft-legal-block { display: flex; flex-direction: column; gap: 6px; }
  .ft-legal-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 20px;
    align-items: center;
  }
  .ft-legal-item { font-size: 12px; color: #666; font-weight: 300; }
  .ft-legal-item a { color: #666; text-decoration: none; transition: color 0.2s; }
  .ft-legal-item a:hover { color: #888; }
  .ft-legal-dot { font-size: 12px; color: #666; }
  .ft-legal-sub { font-size: 11px; color: #666; font-weight: 300; }

  .ft-policy-links { display: flex; align-items: center; gap: 20px; }
  .ft-policy-link {
    font-size: 11px;
    color: #666;
    text-decoration: none;
    letter-spacing: 0.5px;
    transition: color 0.2s;
  }
  .ft-policy-link:hover { color: #666; }
  .ft-policy-sep { width: 1px; height: 10px; background: #222; }

  @media (max-width: 900px) {
    .ft-top { grid-template-columns: 1fr 1fr; padding: 48px 6% 40px; gap: 32px; }
    .ft-brand-col { grid-column: 1 / -1; }
    .ft-sedi { padding: 32px 6%; gap: 24px; }
    .ft-bottom { padding: 20px 6%; flex-direction: column; align-items: flex-start; gap: 16px; }
  }
  @media (max-width: 560px) {
    .ft-top { grid-template-columns: 1fr; padding: 40px 5% 32px; gap: 28px; }
    .ft-brand-logo img { height: 56px; }
    .ft-brand-claim { font-size: 12px; }
    .ft-brand-badges { gap: 6px; }
    .ft-badge { font-size: 9px; padding: 4px 10px; }
    .ft-col-title { font-size: 9px; }
    .ft-link, .ft-link-accent { font-size: 13px; }
    .ft-sedi { grid-template-columns: 1fr; padding: 28px 5%; gap: 20px; }
    .ft-sede-address { font-size: 12px; }
    .ft-bottom { padding: 18px 5%; gap: 14px; }
    .ft-legal-row { gap: 4px 12px; }
    .ft-legal-item { font-size: 11px; }
    .ft-legal-dot { display: none; }
    .ft-legal-sub { font-size: 10px; }
    .ft-policy-links { flex-wrap: wrap; gap: 10px; }
    .ft-policy-sep { display: none; }
    .ft-policy-link { font-size: 11px; }
  }
`;

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  // Il \n negli indirizzi del JSON viene rispettato grazie a white-space: pre-line nel CSS
  const opsAddresses = t("footer.addresses.ops", { returnObjects: true });

  return (
    <>
      <style>{style}</style>
      <footer className="ft-root">

        {/* ── TOP ROW ── */}
        <div className="ft-top">

          {/* ── BRAND COL ── */}
          <div className="ft-brand-col">
            <a href="/" className="ft-brand-logo">
              <img src={logo} alt="BluMentis" />
            </a>

            <p className="ft-brand-claim">{t("footer.claim")}</p>

            <div className="ft-brand-bottom">
              <div className="ft-brand-badges">
                <span className="ft-badge">{t("footer.badges.gdpr")}</span>
                <span className="ft-badge">{t("footer.badges.iso")}</span>
                <span className="ft-badge">{t("footer.badges.madeInItaly")}</span>
              </div>
              <a
                href="https://www.linkedin.com/company/blumentis"
                target="_blank"
                rel="noreferrer"
                className="ft-linkedin"
                aria-label={t("footer.aria.linkedin")}
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* ── AZIENDA ── */}
          <div>
            <div className="ft-col-title">{t("footer.azienda")}</div>
            <div className="ft-col-links">
              <a href="/#chi-siamo"           className="ft-link">{t("footer.links.chi_siamo")}</a>
              <a href="/#visione"             className="ft-link">{t("footer.links.visione")}</a>
              <a href="/#missione"            className="ft-link">{t("footer.links.missione")}</a>
              <a href="/#valori"              className="ft-link">{t("footer.links.valori")}</a>
              <a href="/#rete-internazionale" className="ft-link">{t("footer.links.rete_internazionale")}</a>
            </div>
          </div>

          {/* ── PRODOTTI ── */}
          <div>
            <div className="ft-col-title">{t("footer.prodotti")}</div>
            <div className="ft-col-links">
              <a href="/prodotti#proline"    className="ft-link">ProLine Analytics</a>
              <a href="/prodotti#optimai"    className="ft-link">OptimAI</a>
              <a href="/prodotti#agentiche"  className="ft-link">{t("nav.links.agentiche")}</a>
              <a href="/prodotti#custom"     className="ft-link">{t("nav.links.custom")}</a>
              <a href="/prodotti#hardware"   className="ft-link">Hardware</a>
            </div>
          </div>

          {/* ── CONTATTI ── */}
          <div>
            <div className="ft-col-title">{t("footer.contatti")}</div>
            <div className="ft-col-links">
              <a href="mailto:blumentis@pec.it" className="ft-link-accent">blumentis@pec.it</a>
              <a href="tel:+390584148124"        className="ft-link">+39 0584 1481242</a>
              <a href="/contatti"                className="ft-link" style={{ marginTop: 8 }}>{t("footer.links.scrivici")}</a>
              <a href="/carriere"                className="ft-link">{t("footer.links.carriere")}</a>
            </div>
          </div>
        </div>

        {/* ── SEDI ── */}
        <div className="ft-sedi">
          <div className="ft-sede-block">
            <div>
              <div className="ft-sede-flag">🇮🇹 {t("footer.sedi.legale")}</div>
              <div className="ft-sede-address">{t("footer.addresses.legale")}</div>
            </div>
          </div>
          <div className="ft-sede-block">
            <div className="ft-sede-flag">{t("footer.sedi.operativa")}</div>
            {Array.isArray(opsAddresses) && opsAddresses.map((addr, i) => (
              <div key={i}>
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
              <span className="ft-legal-item">{t("footer.legal.cf")}: IT02694850468</span>
              <span className="ft-legal-dot">·</span>
              <span className="ft-legal-item">
                {t("footer.legal.pec")}: <a href="mailto:blumentis@pec.it">blumentis@pec.it</a>
              </span>
              <span className="ft-legal-dot">·</span>
              <span className="ft-legal-item">
                {t("footer.legal.tel")}: <a href="tel:+390584148124">+39 0584 1481242</a>
              </span>
            </div>
            <div className="ft-legal-sub">
              © {year} BluMentis s.r.l. — {t("footer.legal.rights")}
            </div>
          </div>

          <div className="ft-policy-links">
            <a href="/privacy" className="ft-policy-link">{t("footer.policy.privacy")}</a>
            <div className="ft-policy-sep" />
            <a href="/cookie"  className="ft-policy-link">{t("footer.policy.cookie")}</a>
            <div className="ft-policy-sep" />
            <a href="https://www.blumentis.ai" className="ft-policy-link" target="_blank" rel="noreferrer">
              blumentis.ai ↗
            </a>
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;