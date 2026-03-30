/* eslint-disable no-undef */
// src/pages/Contatti.jsx
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import emailjs from "emailjs-com";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .ct-root {
    background: #0D0D0D; color: #F0EDE8;
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh; overflow-x: hidden; padding-top: 64px;
  }

  .ct-hero {
    padding: 80px 10% 64px; position: relative;
    border-bottom: 1px solid #1A1A1A; overflow: hidden;
  }
  .ct-hero-bg-word {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(80px, 18vw, 240px);
    color: #111; position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap; pointer-events: none;
    letter-spacing: 8px; user-select: none;
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
  .ct-hero-title.glow { animation: glowIn 1.2s ease forwards; }
  @keyframes glowIn {
    0%   { text-shadow: 0 0 0px #fff; transform: translateY(10px); }
    60%  { text-shadow: 0 0 25px #ffffff, 0 0 50px #E63946; }
    100% { text-shadow: 0 0 0px transparent; transform: translateY(0); }
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
  .ct-sede-address { font-size: 15px; line-height: 1.7; color: #9A9390; font-weight: 300; margin-bottom: 24px; white-space: pre-line; }

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
  .ct-form-kicker { font-size: 10px; letter-spacing: 4px; text-transform: uppercase; color: #999; margin-bottom: 12px; }
  .ct-form-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(28px, 3vw, 42px); letter-spacing: 1px; line-height: 1.1; }

  .ct-form { display: flex; flex-direction: column; gap: 0; flex: 1; }
  .ct-field { position: relative; border-bottom: 1px solid #1E1E1E; transition: border-color 0.25s; }
  .ct-field:focus-within { border-color: #E63946; }
  .ct-field label {
    display: block; font-size: 10px; letter-spacing: 3px; text-transform: uppercase;
    color: #999; padding-top: 24px; margin-bottom: 6px; transition: color 0.25s;
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
  .ct-field input::placeholder, .ct-field textarea::placeholder { color: #888; }
  .ct-select-wrap { position: relative; }
  .ct-select-wrap::after { content: "↓"; position: absolute; right: 0; bottom: 20px; color: #444; pointer-events: none; font-size: 14px; }

  /* Hint per la lunghezza minima */
  .field-hint {
    font-size: 10px;
    color: #888;
    margin-top: 4px;
    margin-bottom: 8px;
    letter-spacing: 0.3px;
  }

  .ct-privacy { margin-top: 24px; display: flex; align-items: flex-start; gap: 12px; cursor: pointer; }
  .ct-checkbox {
    width: 18px; height: 18px; border: 1px solid #333; border-radius: 3px;
    flex-shrink: 0; margin-top: 2px; display: flex; align-items: center; justify-content: center;
    transition: border-color 0.2s, background 0.2s; cursor: pointer;
  }
  .ct-checkbox.checked { background: #E63946; border-color: #E63946; }
  .ct-privacy-text { font-size: 12px; color: #888; line-height: 1.6; font-weight: 300; }
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

  /* HONEYPOT - nascosto a umani e bot */
  .ct-honeypot {
    position: absolute;
    left: -9999px;
    top: -9999px;
    opacity: 0;
    pointer-events: none;
    height: 0;
    width: 0;
    overflow: hidden;
  }

  @media (max-width: 900px) {
    .ct-body { grid-template-columns: 1fr; }
    .ct-info { border-right: none; border-bottom: 1px solid #1A1A1A; padding: 56px 6%; }
    .ct-form-col { padding: 56px 6%; }
    .ct-hero { padding: 80px 6% 56px; }
    .ct-highlight { padding: 36px 6%; }
  }
  @media (max-width: 640px) {
    .ct-hero { padding: 56px 5% 40px; }
    .ct-hero-title { font-size: clamp(32px, 10vw, 52px); }
    .ct-hero-title em { font-size: 0.65em; }
    .ct-body { grid-template-columns: 1fr; }
    .ct-info { border-right: none; border-bottom: 1px solid #1A1A1A; padding: 40px 5%; gap: 36px; }
    .ct-form-col { padding: 40px 5%; }
    .ct-field label { padding-top: 18px; font-size: 9px; }
    .ct-field input, .ct-field textarea, .ct-field select { font-size: 14px; padding-bottom: 14px; }
    .ct-form-title { font-size: clamp(22px, 7vw, 32px); }
    .ct-submit-row { flex-direction: column; align-items: flex-start; gap: 14px; }
    .ct-submit { width: 100%; justify-content: center; }
    .ct-submit-note { font-size: 10px; }
    .ct-highlight { padding: 32px 5%; grid-template-columns: 1fr; gap: 12px; }
    .ct-highlight-num { font-size: 32px; }
    .ct-highlight-title { font-size: 20px; }
    .ct-highlight-text { font-size: 13px; }
    .ct-contact-item { font-size: 13px; }
    .ct-contact-icon { width: 30px; height: 30px; font-size: 12px; }
  }
`;

export default function Contatti() {
  const { t } = useTranslation();

  const [form, setForm] = useState({ nome: "", email: "", azienda: "", tipo: "", messaggio: "" });
  const [privacy, setPrivacy] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [glow, setGlow] = useState(false);
  const [honeypot, setHoneypot] = useState(""); // campo anti-spam

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 60 });
    setTimeout(() => setGlow(true), 100);
  }, []);

  const setFormField = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  // Helper per leggere variabili d'ambiente (CRA / Vite)
  const getEnvVar = (name) => {
    if (typeof process !== 'undefined' && process.env && process.env[name]) return process.env[name];
    if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env[name]) return import.meta.env[name];
    return undefined;
  };

  // Controllo spam: troppi link nel messaggio
  const containsTooManyLinks = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+|[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?)/gi;
    const matches = text.match(urlRegex);
    return matches && matches.length > 2; // più di 2 link = spam
  };

  // Rate limiting (localStorage)
  const isRateLimited = () => {
    const lastSubmit = localStorage.getItem('lastSubmitTime');
    if (!lastSubmit) return false;
    const now = Date.now();
    const diffSeconds = (now - parseInt(lastSubmit, 10)) / 1000;
    return diffSeconds < 60; // 60 secondi di cooldown
  };

  const setRateLimit = () => {
    localStorage.setItem('lastSubmitTime', Date.now().toString());
  };

  // ================== EMAILJS HANDLER ==================
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Honeypot: se compilato -> bot
    if (honeypot) {
      console.warn("Honeypot triggered – possibile bot");
      alert("Si è verificato un errore. Riprova.");
      return;
    }

    // 2. Privacy
    if (!privacy) {
      alert("Devi accettare la privacy policy per inviare il messaggio.");
      return;
    }

    // 3. Campi obbligatori
    if (!form.nome || !form.email || !form.messaggio) {
      alert("Per favore, compila tutti i campi obbligatori.");
      return;
    }

    // 4. Lunghezza minima del messaggio
    if (form.messaggio.trim().length < 10) {
      alert("Il messaggio deve contenere almeno 10 caratteri.");
      return;
    }

    // 5. Controllo spam (troppi link)
    if (containsTooManyLinks(form.messaggio)) {
      alert("Il messaggio contiene troppi link ed è stato bloccato come possibile spam.");
      return;
    }

    // 6. Rate limiting
    if (isRateLimited()) {
      alert("Hai inviato un messaggio di recente. Attendi un minuto prima di inviarne un altro.");
      return;
    }

    setLoading(true);

    const serviceId = getEnvVar('REACT_APP_EMAILJS_SERVICE_ID') || getEnvVar('VITE_EMAILJS_SERVICE_ID');
    const templateId = getEnvVar('REACT_APP_EMAILJS_TEMPLATE_ID') || getEnvVar('VITE_EMAILJS_TEMPLATE_ID');
    const userId = getEnvVar('REACT_APP_EMAILJS_USER_ID') || getEnvVar('VITE_EMAILJS_USER_ID');

    if (!serviceId || !templateId || !userId) {
      alert("EmailJS non configurato correttamente. Controlla le variabili d'ambiente.");
      setLoading(false);
      return;
    }

    const now = new Date();
    const formattedTime = now.toLocaleString('it-IT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    const templateParams = {
      nome: form.nome,
      email: form.email,
      azienda: form.azienda || "Non specificata",
      categoria: form.tipo || "Generico",
      messaggio: form.messaggio,
      time: formattedTime,
      title: `Nuovo contatto da ${form.nome}`
    };

    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, userId);
      if (response.status === 200) {
        setSent(true);
        setForm({ nome: "", email: "", azienda: "", tipo: "", messaggio: "" });
        setPrivacy(false);
        setRateLimit();
      } else {
        throw new Error("Risposta non valida");
      }
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Si è verificato un errore nell'invio. Riprova più tardi.");
    } finally {
      setLoading(false);
    }
  };
  // =====================================================

  // Validazione lato client (influenza lo stato del bottone)
  const valid = form.nome && form.email && form.messaggio && privacy && form.messaggio.trim().length >= 10;

  // Dati dal JSON
  const sedi = t("contatti.info.sedi", { returnObjects: true });
  const highlights = t("contatti.highlights", { returnObjects: true });
  const tipi = t("contatti.form.tipi", { returnObjects: true });

  return (
    <>
      <style>{style}</style>
      <div className="ct-root">
        {/* HERO */}
        <section className="ct-hero">
          <span className="ct-hero-bg-word" aria-hidden="true">
            {t("contatti.hero.bg_word")}
          </span>
          <p className="ct-hero-kicker" data-aos="fade-right">
            {t("contatti.hero.kicker")}
          </p>
          <h1 className={`ct-hero-title glow `} data-aos="fade-up" data-aos-delay="100">
            {t("contatti.hero.title")}
            <em>{t("contatti.hero.subtitle")}</em>
          </h1>
        </section>

        <div className="ct-body">
          {/* INFO SX */}
          <div className="ct-info">
            <div data-aos="fade-right" data-aos-delay="100">
              <div className="ct-info-label">{t("contatti.info.sedi_label")}</div>
              {Array.isArray(sedi) && sedi.map((sede, i) => (
                <div key={i}>
                  <div className="ct-sede-country">{sede.flag} {sede.country}</div>
                  <div className="ct-sede-address">{sede.address}</div>
                </div>
              ))}
            </div>
            <div data-aos="fade-right" data-aos-delay="200">
              <div className="ct-info-label">{t("contatti.info.contatti_label")}</div>
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
              <div className="ct-form-kicker">{t("contatti.form.kicker")}</div>
              <h2 className="ct-form-title">{t("contatti.form.title")}</h2>
            </div>

            {sent ? (
              <div className="ct-success">
                <div className="ct-success-icon">✓</div>
                <div className="ct-success-title">{t("contatti.form.success.title")}</div>
                <p className="ct-success-text">{t("contatti.form.success.text")}</p>
              </div>
            ) : (
              <form className="ct-form" onSubmit={handleSubmit}>
                {/* HONEYPOT - campo invisibile agli umani */}
                <div className="ct-honeypot">
                  <label htmlFor="website">website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                <div className="ct-field">
                  <label>{t("contatti.form.fields.nome")}</label>
                  <input type="text" value={form.nome} onChange={setFormField("nome")} required />
                </div>
                <div className="ct-field">
                  <label>{t("contatti.form.fields.email")}</label>
                  <input type="email" value={form.email} onChange={setFormField("email")} required />
                </div>
                <div className="ct-field">
                  <label>{t("contatti.form.fields.azienda")}</label>
                  <input type="text" value={form.azienda} onChange={setFormField("azienda")} />
                </div>
                <div className="ct-field">
                  <label>{t("contatti.form.fields.argomento")}</label>
                  <div className="ct-select-wrap">
                    <select value={form.tipo} onChange={setFormField("tipo")}>
                      {Array.isArray(tipi) && tipi.map((voce, i) => (
                        <option key={voce} value={i === 0 ? "" : voce}>{voce}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="ct-field">
                  <label>{t("contatti.form.fields.messaggio")}</label>
                  <textarea
                    placeholder={t("contatti.form.fields.messaggio_placeholder")}
                    value={form.messaggio}
                    onChange={setFormField("messaggio")}
                    required
                  />
                  <div className="field-hint">Minimo 10 caratteri</div>
                </div>

                {/* Privacy */}
                <div className="ct-privacy" onClick={() => setPrivacy((p) => !p)}>
                  <div className={`ct-checkbox${privacy ? " checked" : ""}`}>
                    {privacy && <span style={{ color: "#fff", fontSize: 12 }}>✓</span>}
                  </div>
                  <p
                    className="ct-privacy-text"
                    dangerouslySetInnerHTML={{ __html: t("contatti.form.privacy") }}
                  />
                </div>

                <div className="ct-submit-row" id="collaborazioni">
                  <button className="ct-submit" type="submit" disabled={!valid || loading}>
                    {loading ? t("contatti.form.submitting") : t("contatti.form.submit")}
                    {!loading && " →"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* HIGHLIGHT BLOCKS */}
        <div className="ct-highlight-blocks">
          {Array.isArray(highlights) && highlights.map((h, i) => (
            <div key={i} className="ct-highlight" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="ct-highlight-num">{h.num}</div>
              <div>
                <div className="ct-highlight-title">{h.title}</div>
                <p className="ct-highlight-text">{h.text}</p>
                <a href={h.href} className="ct-highlight-cta">{h.cta}</a>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </div>
    </>
  );
}