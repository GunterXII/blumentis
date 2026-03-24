import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import emailjs from "emailjs-com";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .ct-root {
    background: #0D0D0D;
    color: #F0EDE8;
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
    padding-top: 64px;
  }

  .ct-hero {
    padding: 80px 10% 64px;
    position: relative;
    border-bottom: 1px solid #1A1A1A;
    overflow: hidden;
  }

  .ct-hero::before {
    content: "CONTATTI";
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(80px, 18vw, 240px);
    color: #111;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap;
    pointer-events: none;
    letter-spacing: 8px;
    user-select: none;
  }

  .ct-hero-kicker {
    font-size: 11px; letter-spacing: 4px; text-transform: uppercase;
    color: #E63946; margin-bottom: 20px; position: relative;
    display: flex; align-items: center; gap: 10px;
  }
  .ct-hero-kicker::before { content: ""; display: block; width: 32px; height: 1px; background: #E63946; }

  .ct-hero-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(42px, 6vw, 88px);
    line-height: 1; letter-spacing: 1px; max-width: 700px; position: relative;
  }
  .ct-hero-title em {
    font-style: italic; color: #E63946;
    font-family: 'DM Sans', sans-serif; font-weight: 300;
    font-size: 0.55em; display: block; letter-spacing: 0; margin-top: 8px; line-height: 1.5;
  }

  .ct-body { display: grid; grid-template-columns: 1fr 1fr; min-height: 70vh; }

  .ct-info {
    padding: 72px 10%; border-right: 1px solid #1A1A1A;
    display: flex; flex-direction: column; gap: 56px;
  }

  .ct-info-label {
    font-size: 10px; letter-spacing: 4px; text-transform: uppercase;
    color: #555; margin-bottom: 20px; display: flex; align-items: center; gap: 8px;
  }
  .ct-info-label::after { content: ""; flex: 1; height: 1px; background: #1E1E1E; }

  .ct-sede-country { font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #E63946; margin-bottom: 6px; }
  .ct-sede-address { font-size: 15px; line-height: 1.7; color: #9A9390; font-weight: 300; margin-bottom: 24px; }

  .ct-contact-item {
    display: flex; align-items: center; gap: 14px; margin-bottom: 14px;
    text-decoration: none; color: #C0BAB2; font-size: 15px; font-weight: 300;
    transition: color 0.2s; width: fit-content;
  }
  .ct-contact-item:hover { color: #E63946; }

  .ct-contact-icon {
    width: 36px; height: 36px; border: 1px solid #222; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 14px; flex-shrink: 0; transition: border-color 0.2s;
  }
  .ct-contact-item:hover .ct-contact-icon { border-color: #E63946; }

  .ct-form-col { padding: 72px 10%; display: flex; flex-direction: column; }
  .ct-form-heading { margin-bottom: 48px; }
  .ct-form-kicker { font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: #555; margin-bottom: 12px; }
  .ct-form-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(28px, 3vw, 42px); letter-spacing: 1px; line-height: 1.1; }

  .ct-form { display: flex; flex-direction: column; gap: 0; flex: 1; }

  .ct-field { position: relative; border-bottom: 1px solid #1E1E1E; transition: border-color 0.25s; }
  .ct-field:focus-within { border-color: #E63946; }

  .ct-field label {
    display: block; font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
    color: #444; padding-top: 24px; margin-bottom: 6px; transition: color 0.25s;
  }
  .ct-field:focus-within label { color: #E63946; }

  .ct-field input, .ct-field textarea, .ct-field select {
    width: 100%; background: transparent; border: none; outline: none;
    color: #F0EDE8; font-family: 'DM Sans', sans-serif; font-size: 15px;
    font-weight: 300; padding-bottom: 20px; resize: none;
    appearance: none; -webkit-appearance: none;
  }
  .ct-field select option { background: #161616; color: #F0EDE8; }
  .ct-field select { cursor: pointer; }
  .ct-field textarea { min-height: 100px; }
  .ct-field input::placeholder, .ct-field textarea::placeholder { color: #333; }

  .ct-select-wrap { position: relative; }
  .ct-select-wrap::after { content: "↓"; position: absolute; right: 0; bottom: 20px; color: #444; pointer-events: none; font-size: 14px; }

  .ct-privacy { margin-top: 24px; display: flex; align-items: flex-start; gap: 12px; cursor: pointer; }

  .ct-checkbox {
    width: 18px; height: 18px; border: 1px solid #333; border-radius: 3px;
    flex-shrink: 0; margin-top: 2px; display: flex; align-items: center; justify-content: center;
    transition: border-color 0.2s, background 0.2s; cursor: pointer;
  }
  .ct-checkbox.checked { background: #E63946; border-color: #E63946; }
  .ct-privacy-text { font-size: 12px; color: #555; line-height: 1.6; font-weight: 300; }
  .ct-privacy-text a { color: #E63946; text-decoration: none; }

  .ct-submit-row { margin-top: 36px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }

  .ct-submit {
    display: inline-flex; align-items: center; gap: 12px;
    background: #E63946; color: #0D0D0D; border: none;
    padding: 16px 36px; font-family: 'DM Sans', sans-serif;
    font-size: 13px; letter-spacing: 2px; text-transform: uppercase;
    font-weight: 500; border-radius: 100px; cursor: pointer;
    transition: transform 0.2s, opacity 0.2s;
  }
  .ct-submit:hover { opacity: 0.85; transform: translateY(-1px); }
  .ct-submit:active { transform: translateY(0); }
  .ct-submit:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
  .ct-submit-note { font-size: 11px; color: #333; letter-spacing: 0.5px; line-height: 1.5; }

  .ct-success {
    flex: 1; display: flex; flex-direction: column;
    align-items: center; justify-content: center; text-align: center;
    gap: 16px; animation: fadeUp 0.5s ease forwards;
  }
  .ct-success-icon {
    width: 64px; height: 64px; border-radius: 50%; border: 1px solid #E63946;
    display: flex; align-items: center; justify-content: center; font-size: 28px; margin-bottom: 8px;
  }
  .ct-success-title { font-family: 'Bebas Neue', sans-serif; font-size: 36px; letter-spacing: 1px; }
  .ct-success-text { font-size: 15px; color: #7A7470; font-weight: 300; max-width: 320px; line-height: 1.7; }

  @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

  .ct-highlight-blocks { display: flex; flex-direction: column; gap: 1px; background: #1A1A1A; }

  .ct-highlight {
    background: #0D0D0D; padding: 48px 10%;
    display: grid; grid-template-columns: auto 1fr; gap: 32px;
    align-items: start; transition: background 0.25s;
  }
  .ct-highlight:hover { background: #111; }

  .ct-highlight-num { font-family: 'Bebas Neue', sans-serif; font-size: 48px; color: #1E1E1E; line-height: 1; padding-top: 4px; min-width: 44px; }
  .ct-highlight-title { font-family: 'Bebas Neue', sans-serif; font-size: 26px; letter-spacing: 1px; color: #F0EDE8; margin-bottom: 10px; }
  .ct-highlight-text { font-size: 14px; line-height: 1.8; color: #7A7470; font-weight: 300; }

  .ct-highlight-cta {
    margin-top: 16px; display: inline-flex; align-items: center; gap: 8px;
    font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
    color: #E63946; text-decoration: none; padding-bottom: 2px;
    border-bottom: 1px solid #E63946; transition: opacity 0.2s;
  }
  .ct-highlight-cta:hover { opacity: 0.7; }

  @media (max-width: 900px) {
    .ct-body { grid-template-columns: 1fr; }
    .ct-info { border-right: none; border-bottom: 1px solid #1A1A1A; padding: 56px 6%; }
    .ct-form-col { padding: 56px 6%; }
    .ct-hero { padding: 80px 6% 56px; }
    .ct-highlight { padding: 36px 6%; }
  }
    @media (max-width: 640px) {
  /* Hero */
  .ct-hero {
    padding: 56px 5% 40px;
  }
  .ct-hero-title {
    font-size: clamp(32px, 10vw, 52px);
  }
  .ct-hero-title em {
    font-size: 0.65em;
  }

  /* Body: colonna singola */
  .ct-body {
    grid-template-columns: 1fr;
  }
  .ct-info {
    border-right: none;
    border-bottom: 1px solid #1A1A1A;
    padding: 40px 5%;
    gap: 36px;
  }
  .ct-form-col {
    padding: 40px 5%;
  }

  /* Form */
  .ct-field label {
    padding-top: 18px;
    font-size: 9px;
  }
  .ct-field input,
  .ct-field textarea,
  .ct-field select {
    font-size: 14px;
    padding-bottom: 14px;
  }
  .ct-form-title {
    font-size: clamp(22px, 7vw, 32px);
  }

  /* Submit row */
  .ct-submit-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
  }
  .ct-submit {
    width: 100%;
    justify-content: center;
  }
  .ct-submit-note {
    font-size: 10px;
  }

  /* Highlight blocks */
  .ct-highlight {
    padding: 32px 5%;
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .ct-highlight-num {
    font-size: 32px;
  }
  .ct-highlight-title {
    font-size: 20px;
  }
  .ct-highlight-text {
    font-size: 13px;
  }

  /* Contatti diretti */
  .ct-contact-item {
    font-size: 13px;
  }
  .ct-contact-icon {
    width: 30px;
    height: 30px;
    font-size: 12px;
  }
}
`;

const TIPI = [
  "Seleziona un argomento",
  "Informazioni generali",
  "Demo prodotto",
  "Proposta di partnership",
  "Opportunità di tesi / stage",
  "Candidatura spontanea",
  "Idea o progetto innovativo",
  "Altro",
];

export default function Contatti() {
  const [form, setForm] = useState({ nome: "", email: "", azienda: "", tipo: "", messaggio: "" });
  const [privacy, setPrivacy] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 60 });
  }, []);

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = (e) => {
  e.preventDefault();
  if (!privacy) return;

  setLoading(true);

  emailjs.send(
    "SERVICE_ID",      // da EmailJS
    "TEMPLATE_ID",     // da EmailJS
    {
      nome: form.nome,
      email: form.email,
      azienda: form.azienda,
      tipo: form.tipo,
      messaggio: form.messaggio,
    },
    "PUBLIC_KEY"       // da EmailJS
  )
  .then(() => {
    setLoading(false);
    setSent(true);
  })
  .catch(() => {
    setLoading(false);
    alert("Errore invio");
  });
};

  const valid = form.nome && form.email && form.messaggio && privacy;

  return (
    <>
      <style>{style}</style>
      <div className="ct-root">

        {/* HERO */}
        <section className="ct-hero">
          <p className="ct-hero-kicker" data-aos="fade-right">Parliamo</p>
          <h1 className="ct-hero-title" data-aos="fade-up" data-aos-delay="100">
            Inizia la conversazione
            <em>Crediamo nel potere del dialogo e della collaborazione.</em>
          </h1>
        </section>

        {/* BODY */}
        <div className="ct-body">

          {/* INFO SX */}
          <div className="ct-info">
            <div data-aos="fade-right" data-aos-delay="100">
              <div className="ct-info-label">Sedi operative</div>
              <div className="ct-sede-country">🇮🇹 Italia</div>
              <div className="ct-sede-address">Corso Garibaldi, 80<br />55049 Viareggio (LU)</div>
              <div className="ct-sede-country">🇨🇳 Cina</div>
              <div className="ct-sede-address">
                Second Floor, No. 979, Yunhan Road,<br />
Lingang New Area, Shanghai, Cina
              </div>
            </div>

            <div data-aos="fade-right" data-aos-delay="200">
              <div className="ct-info-label">Contatti diretti</div>
              <a href="mailto:info@blumentis.ai" className="ct-contact-item">
                <span className="ct-contact-icon">✉</span>
                info@blumentis.ai
              </a>
              <a href="tel:+390584148124" className="ct-contact-item">
                <span className="ct-contact-icon">↗</span>
                +39 0584 1481242
              </a>
            </div>
          </div>

          {/* FORM DX */}
          <div className="ct-form-col" data-aos="fade-left" data-aos-delay="150">
            <div className="ct-form-heading">
              <div className="ct-form-kicker">Modulo di contatto</div>
              <h2 className="ct-form-title">Scrivici, rispondiamo a tutto</h2>
            </div>

            {sent ? (
              <div className="ct-success">
                <div className="ct-success-icon">✓</div>
                <div className="ct-success-title">Messaggio inviato</div>
                <p className="ct-success-text">Grazie per averci contattato. Il nostro team ti risponderà al più presto.</p>
              </div>
            ) : (
              <form className="ct-form" onSubmit={handleSubmit}>
                <div className="ct-field">
                  <label>Nome e cognome *</label>
                  <input type="text"  value={form.nome} onChange={set("nome")} />
                </div>
                <div className="ct-field">
                  <label>Email *</label>
                  <input type="email"  value={form.email} onChange={set("email")} />
                </div>
                <div className="ct-field">
                  <label>Azienda / Ente</label>
                  <input type="text" value={form.azienda} onChange={set("azienda")} />
                </div>
                <div className="ct-field">
                  <label>Argomento</label>
                  <div className="ct-select-wrap">
                    <select value={form.tipo} onChange={set("tipo")}>
                      {TIPI.map((t) => (
                        <option key={t} value={t === TIPI[0] ? "" : t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="ct-field">
                  <label>Messaggio *</label>
                  <textarea placeholder="Raccontaci il tuo progetto o la tua idea..." value={form.messaggio} onChange={set("messaggio")} />
                </div>
                <div className="ct-privacy" onClick={() => setPrivacy((p) => !p)}>
                  <div className={`ct-checkbox${privacy ? " checked" : ""}`}>
                    {privacy && <span style={{ color: "#fff", fontSize: 12 }}>✓</span>}
                  </div>
                  <p className="ct-privacy-text">
                    Ho letto e accetto la <a href="/privacy">Privacy Policy</a>. Acconsento al trattamento dei miei dati personali da parte di BluMentis s.r.l.
                  </p>
                </div>
                <div className="ct-submit-row">
                  <button className="ct-submit" type="submit" disabled={!valid || loading}>
                    {loading ? "Invio…" : "Invia messaggio"} {!loading && "→"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* HIGHLIGHT BLOCKS */}
        <div className="ct-highlight-blocks">
          <div className="ct-highlight" data-aos="fade-up">
            <div className="ct-highlight-num">01</div>
            <div>
              <div className="ct-highlight-title">Hai un'idea in mente?</div>
              <p className="ct-highlight-text">
                Rappresentiamo un'opportunità per innovatori e inventori. Se hai in mente un'idea o un progetto brillante, siamo pronti ad ascoltarti. Condividi la tua visione con noi e insieme valuteremo come trasformarla in realtà.
              </p>
              <a href="mailto:info@blumentis.ai?subject=Idea progetto" className="ct-highlight-cta">Condividi la tua idea →</a>
            </div>
          </div>

          <div className="ct-highlight" data-aos="fade-up" data-aos-delay="100">
            <div className="ct-highlight-num">02</div>
            <div>
              <div className="ct-highlight-title">Carriere, tesi e formazione</div>
              <p className="ct-highlight-text">
                Libera il tuo potenziale. In BluMentis ci dedichiamo a nutrire la prossima generazione di pionieri dell'intelligenza artificiale. Unisciti al nostro team come stagista, esplora le opportunità di tesi o inizia la tua carriera con noi.
              </p>
              <a href="/carriere" className="ct-highlight-cta">Esplora le opportunità →</a>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}