import Footer from './Footer';
import { Link } from 'react-router-dom';
import { Users, CheckCircle, DollarSign, Cpu } from "lucide-react";

const css = `
  .hw-root {
    --steel:      oklch(58% 0.08 220);
    --steel-dim:  oklch(58% 0.08 220 / 0.12);
    --steel-bdr:  oklch(58% 0.08 220 / 0.30);
    --steel-glow: oklch(58% 0.08 220 / 0.20);
    --steel-hi:   oklch(72% 0.06 220);
    --accent2:    oklch(64% 0.12 160);
    --bg:         #09090b;
    --surface:    #0f0f12;
    --raised:     #161619;
    --border:     rgba(255,255,255,.07);
    --text:       #eceef2;
    --text-2:     #8a8f9e;
    --text-3:     #4a4f5e;
    --radius: 14px;
    --shadow: 0 10px 32px rgba(0,0,0,.44);
    font-family: 'DM Sans', sans-serif;
    color: var(--text);
    background: var(--bg);
  }
  .hw-root *, .hw-root *::before, .hw-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .hw-root h1,.hw-root h2,.hw-root h3,.hw-root h4 { font-family: 'Syne', sans-serif; }

  /* ── HERO ── */
  .hw-hero {
    padding: 120px 32px 90px;
    text-align: center; position: relative; overflow: hidden;
  }
  .hw-hero::before {
    content: ""; position: absolute; inset: 0;
    background: radial-gradient(ellipse 65% 50% at 50% 0%, oklch(58% 0.08 220 / 0.09) 0%, transparent 68%);
    pointer-events: none;
  }
  .hw-hero-inner { max-width: 760px; margin: 0 auto; position: relative; z-index: 1; }
  .hw-hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--steel-dim); border: 1px solid var(--steel-bdr);
    color: var(--steel-hi);
    font-size: 11px; font-weight: 600; letter-spacing: .13em; text-transform: uppercase;
    padding: 6px 18px; border-radius: 999px; margin-bottom: 28px;
  }
  .hw-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--steel); animation: dotPulse 2s ease-in-out infinite; }
  @keyframes dotPulse { 0%,100%{opacity:1;} 50%{opacity:.22;} }
  .hw-hero h1 {
    font-size: clamp(36px, 5.8vw, 66px); font-weight: 800;
    line-height: 1.06; letter-spacing: -0.025em; margin-bottom: 14px;
  }
  .hw-accent {
    background: linear-gradient(135deg, var(--steel-hi), var(--accent2));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .hw-hero-sub {
    font-size: 16px; color: var(--text-2); line-height: 1.82; max-width: 600px;
    margin: 0 auto 40px; font-weight: 300;
  }
  .hw-hero-cta { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .hw-btn-primary {
    background: var(--steel); color: #09090b;
    padding: 14px 30px; border-radius: var(--radius);
    font-weight: 700; font-size: 15px; border: none; cursor: pointer;
    transition: .22s; font-family: 'DM Sans', sans-serif;
  }
  .hw-btn-primary:hover { filter: brightness(1.15); transform: translateY(-2px); box-shadow: 0 8px 24px var(--steel-glow); }
  .hw-btn-ghost {
    background: transparent; color: var(--text);
    padding: 14px 30px; border-radius: var(--radius); font-weight: 500; font-size: 15px;
    border: 2px solid rgba(255,255,255,.18); cursor: pointer; transition: .22s;
    font-family: 'DM Sans', sans-serif;
  }
  .hw-btn-ghost:hover { background: rgba(255,255,255,.05); border-color: rgba(255,255,255,.42); }

  /* ── PAGE ── */
  .hw-page { max-width: 1000px; margin: 0 auto; padding: 72px 32px; }

  /* ── SECTION HEAD ── */
  .hw-head { margin-bottom: 44px; }
  .hw-head h2 { font-size: clamp(24px, 3.4vw, 38px); font-weight: 800; letter-spacing: -0.025em; }
  .hw-head h2 .hw-accent { -webkit-text-fill-color: unset; background: none; color: var(--steel-hi); }
  .hw-bar {
    width: 80px; height: 4px; margin-top: 12px; border-radius: 99px;
    background: linear-gradient(90deg, var(--steel), oklch(58% 0.08 220 / 0.20));
    animation: barPulse 2.5s ease-in-out infinite;
  }
  @keyframes barPulse { 0%,100%{opacity:1;} 50%{opacity:.25;} }

  /* ── DIVIDER ── */
  .hw-divider {
    border: none; height: 1px; margin: 0 32px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
  }

  /* ── INTRO TEXT ── */
  .hw-intro { max-width: 720px; }
  .hw-intro p {
    font-size: 15px; color: var(--text-2); line-height: 1.85; margin-bottom: 22px;
  }
  .hw-intro p:last-child { margin-bottom: 0; }
  .hw-intro strong { color: var(--text); font-weight: 600; }
  .hw-intro-highlight {
    margin-top: 28px;
    background: var(--surface); border: 1px solid var(--steel-bdr);
    border-left: 3px solid var(--steel); border-radius: 0 var(--radius) var(--radius) 0;
    padding: 20px 24px;
  }
  .hw-intro-highlight p { margin-bottom: 0; color: var(--text-2); font-size: 14px; }
  .hw-intro-highlight strong { color: var(--steel-hi); }

  /* ── SETTORI ── */
  .hw-sectors { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 18px; }
  .hw-sector {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 18px; padding: 28px 24px; transition: .28s; position: relative; overflow: hidden;
  }
  .hw-sector::before {
    content: ""; position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, var(--steel), var(--accent2));
    opacity: 0; transition: .28s;
  }
  .hw-sector:hover { border-color: var(--steel-bdr); transform: translateY(-4px); box-shadow: var(--shadow); }
  .hw-sector:hover::before { opacity: 1; }
  .hw-sector h3 { font-size: 16px; font-weight: 700; margin-bottom: 10px; color: var(--text); }
  .hw-sector p  { font-size: 13px; color: var(--text-3); line-height: 1.72; }

  /* ── PERCHÉ ── */
  .hw-why { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .hw-why-card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 18px; padding: 28px 26px; transition: .26s;
  }
  .hw-why-card:hover { border-color: var(--steel-bdr); background: oklch(58% 0.08 220 / 0.06); }
  .hw-why-icon {
    width: 38px; height: 38px; border-radius: 10px;
    background: var(--steel-dim); border: 1px solid var(--steel-bdr);
    display: flex; align-items: center; justify-content: center;
    font-size: 17px; margin-bottom: 14px;
  }
  .hw-why-card h3 { font-size: 15px; font-weight: 700; margin-bottom: 8px; color: var(--text); }
  .hw-why-card p  { font-size: 13px; color: var(--text-3); line-height: 1.72; }
  .hw-why-ai {
    border-color: var(--steel-bdr);
    background: linear-gradient(135deg, oklch(58% 0.08 220 / 0.08), oklch(64% 0.12 160 / 0.06));
  }
  .hw-why-ai h3 { color: var(--steel-hi); }

  /* ── CTA ── */
  .hw-cta {
    background: linear-gradient(135deg, #060608 0%, oklch(13% 0.06 220) 100%);
    border-top: 1px solid var(--border);
    color: white; padding: 88px 20px; margin-top: 80px;
    text-align: center;
  }
  .hw-cta-inner { max-width: 640px; margin: 0 auto; }
  .hw-cta-title { font-size: clamp(22px, 3.5vw, 36px); font-weight: 800; margin-bottom: 14px; letter-spacing: -0.02em; }
  .hw-cta-title .hw-accent { -webkit-text-fill-color: unset; background: none; color: var(--steel-hi); }
  .hw-cta-sub { opacity: .66; margin-bottom: 34px; line-height: 1.8; font-size: 15px; }
  .hw-cta-btn {
    background: var(--steel); color: #09090b;
    padding: 14px 32px; border-radius: var(--radius); font-weight: 700;
    border: none; cursor: pointer; transition: .22s; font-family: 'DM Sans', sans-serif; font-size: 15px;
    display: inline-block;
  }
  .hw-cta-btn:hover { filter: brightness(1.14); transform: translateY(-2px); box-shadow: 0 8px 24px var(--steel-glow); }

  /* ── FOOTER ── */
  .hw-footer {
    background: #040406; border-top: 1px solid rgba(255,255,255,.05);
    padding: 56px 32px 32px; color: var(--text-3);
  }
  .hw-footer-inner {
    max-width: 1000px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr auto; gap: 48px; align-items: start;
  }
  .hw-footer-brand h3 { font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 800; color: var(--text); margin-bottom: 6px; }
  .hw-footer-brand p { font-size: 13px; line-height: 1.65; max-width: 280px; }
  .hw-footer-tag {
    display: inline-block; margin-top: 12px;
    background: var(--steel-dim); border: 1px solid var(--steel-bdr);
    color: var(--steel-hi); font-size: 11px; font-weight: 600;
    letter-spacing: .1em; text-transform: uppercase; padding: 4px 12px; border-radius: 999px;
  }
  .hw-footer-links { display: flex; flex-direction: column; gap: 10px; align-items: flex-end; }
  .hw-footer-links a { color: var(--text-3); text-decoration: none; font-size: 14px; font-weight: 500; transition: .2s; }
  .hw-footer-links a:hover { color: var(--steel-hi); }
  .hw-footer-bottom {
    max-width: 1000px; margin: 26px auto 0; padding-top: 18px;
    border-top: 1px solid rgba(255,255,255,.05);
    display: flex; gap: 12px; justify-content: space-between;
    flex-wrap: wrap; font-size: 12px; opacity: .36;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 760px) {
    .hw-sectors { grid-template-columns: 1fr; }
    .hw-why { grid-template-columns: 1fr; }
    .hw-page { padding: 56px 20px; }
    .hw-footer-inner { grid-template-columns: 1fr; }
    .hw-footer-links { align-items: flex-start; }
    .hw-hero { padding: 100px 20px 70px; }
  }
    @media (max-width: 700px) {
  .hw-hero { padding: 80px 20px 60px; }
  .hw-hero h1 { font-size: clamp(28px, 8vw, 44px); }
  .hw-hero-sub { font-size: 14px; }
  .hw-hero-cta { flex-direction: column; }
  .hw-btn-primary { width: 100%; }

  .hw-sectors { grid-template-columns: 1fr; }
  .hw-why { grid-template-columns: 1fr; }
  .hw-page { padding: 48px 16px; }

  .hw-cta { padding: 56px 16px; }
  .hw-cta-btn { width: 100%; }

  .hw-footer-inner { grid-template-columns: 1fr; }
  .hw-footer-links { align-items: flex-start; }
  .hw-footer-bottom { flex-direction: column; gap: 4px; }
}
`;

export default function Hardware() {
  return (
    <div className="hw-root">
      <style>{css}</style>

      {/* ── HERO ── */}
      <section className="hw-hero">
        <div className="hw-hero-inner">
          <div className="hw-hero-badge">
            <span className="hw-badge-dot" />
            Hardware & Supply Chain
          </div>
          <h1>Il componente giusto.<br /><span className="hw-accent">Dove serve. Quando serve.</span></h1>
          <p className="hw-hero-sub">
            Trovare hardware industriale di qualità, a prezzi competitivi e con fornitori affidabili
            non è semplice. Noi lo facciamo da oltre vent'anni — con una rete diretta in Europa,
            Cina e nel resto del mondo, costruita sui rapporti personali dei nostri fondatori.
          </p>
          <div className="hw-hero-cta">
            <Link to="/contatti" className="hw-btn-primary"> Hai un'esigenza? Scrivici</Link>
           
          </div>
        </div>
      </section>

      <hr className="hw-divider" />

      {/* ── INTRO ── */}
      <div className="hw-page">
        <div className="hw-head">
          <h2>Componenti Hardware</h2>
          <div className="hw-bar" />
        </div>
        <div className="hw-intro">
          <p>
            I nostri fondatori hanno costruito nel tempo una <strong>rete commerciale internazionale
            solida e diversificata</strong>. Oggi quella rete è al servizio di forniture per i nostri clienti
             — con un focus su automotive e agromeccanica, e la capacità
            di operare su un ampio ventaglio di componenti industriali.
          </p>
          <div className="hw-intro-highlight">
            <p>
              Recentemente abbiamo intrapreso un nuovo percorso che ci entusiasma particolarmente:
              <strong> soluzioni integrate che combinano hardware selezionato e software AI proprietario</strong> —
              prodotti ad alto impatto tecnologico che renderemo disponibili nei prossimi mesi.
              <br /> <span className='mt-10'><strong>Non perderti le prossime novità!</strong></span>
            </p>
          </div>
        </div>
      </div>

      <hr className="hw-divider" />

      {/* ── SETTORI ── */}
      <div className="hw-page">
        <div className="hw-head">
          <h2>Settori di <span className="hw-accent">riferimento</span></h2>
          <div className="hw-bar" />
        </div>
        <div className="hw-sectors">
          {[
            { title: "Automotive",    desc: "Componentistica e hardware per linee di produzione, testing e sistemi embedded nel settore automotive." },
            { title: "Agromeccanica", desc: "Hardware dedicato a macchine agricole e sistemi di automazione per il settore agromeccanico." },
            { title: "Altri settori", desc: "La nostra rete copre un'ampia gamma di categorie merceologiche. Se hai un'esigenza specifica, contattaci." },
          ].map((s) => (
            <div className="hw-sector" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className="hw-divider" />

      {/* ── PERCHÉ ── */}
      <div className="hw-page">
        <div className="hw-head">
          <h2>Perché <span className="hw-accent">sceglierci</span></h2>
          <div className="hw-bar" />
        </div>
        <div className="hw-why">
          {[
  { icon: <Users color="#2563EB" size={24} />, 
    title: "Connessioni dirette",  
    desc: "Rapporti personali ventennali con fornitori selezionati in Europa, Cina e nel resto del mondo. Nessun intermediario.", 
    ai: false 
  },
  { icon: <CheckCircle color="#16A34A" size={24} />, 
    title: "Qualità verificata",   
    desc: "Ogni fornitore è selezionato per standard tecnologici elevati e affidabilità consolidata nel tempo.", 
    ai: false 
  },
  { icon: <DollarSign color="#F59E0B" size={24} />, 
    title: "Costi competitivi",    
    desc: "L'accesso diretto ai mercati di produzione ci permette di offrire condizioni difficilmente replicabili sul mercato.", 
    ai: false 
  },
  { icon: <Cpu color="#A855F7" size={24} />, 
    title: "Integrazione AI",      
    desc: "L'hardware può essere selezionato e configurato per supportare direttamente le nostre tecnologie.", 
    ai: true
  },
].map((w) => (
            <div className={`hw-why-card${w.ai ? " hw-why-ai" : ""}`} key={w.title}>
              <div className="hw-why-icon">{w.icon}</div>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="hw-cta">
        <div className="hw-cta-inner">
          <h2 className="hw-cta-title">
            Hai un'esigenza<br /><span className="hw-accent">di fornitura?</span>
          </h2>
          <p className="hw-cta-sub">
            Raccontaci cosa ti serve. Valutiamo insieme tempi, specifiche
            e condizioni — senza impegno.
          </p>
          <Link className="hw-cta-btn" to="/contatti">Contattaci</Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="hw-footer">
        <div className="hw-footer-inner">
          <div className="hw-footer-brand">
            <h3>Hardware & Supply Chain</h3>
            <p>
              Rete diretta internazionale per forniture hardware industriali
              ad alto contenuto tecnologico. Da oltre vent'anni.
            </p>
            <span className="hw-footer-tag">Europa · Cina · Worldwide</span>
          </div>
          <div className="hw-footer-links">
            <Link to="/cookie">Cookie Policy</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/contatti" >Contatti</Link>
          </div>
        </div>
        <div className="hw-footer-bottom">
          <span>© {new Date().getFullYear()} BluMentis. Tutti i diritti riservati.</span>
          <span>Made in Italy 🇮🇹</span>
        </div>
      </footer>
      <Footer />
    </div>
  );
}