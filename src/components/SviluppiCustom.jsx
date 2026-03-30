import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const css = `
  .svc-root {
    --gold:      oklch(62% 0.14 80);
    --gold-dim:  oklch(62% 0.14 80 / 0.13);
    --gold-bdr:  oklch(62% 0.14 80 / 0.32);
    --gold-glow: oklch(62% 0.14 80 / 0.22);
    --gold-hi:   oklch(74% 0.11 80);
    --bg:        #0b0c09;
    --surface:   #111209;
    --raised:    #181a10;
    --border:    rgba(255,255,255,.07);
    --text:      #f0ede6;
    --text-2:    #9a9585;
    --text-3:    #565044;
    --radius: 14px;
    --shadow: 0 10px 32px rgba(0,0,0,.42);
    font-family: 'DM Sans', sans-serif;
    color: var(--text);
    background: var(--bg);
  }
  .svc-root *, .svc-root *::before, .svc-root *::after { box-sizing: border-box; margin: 0; padding: 0; }
  .svc-root h1,.svc-root h2,.svc-root h3,.svc-root h4 { font-family: 'Syne', sans-serif; }

  /* ── HERO ── */
  .svc-hero {
    padding: 120px 32px 90px;
    text-align: center; position: relative; overflow: hidden;
  }
  .svc-hero::before {
    content: ""; position: absolute; inset: 0;
    background: radial-gradient(ellipse 70% 55% at 50% 0%, oklch(62% 0.14 80 / 0.10) 0%, transparent 70%);
    pointer-events: none;
  }
  .svc-hero-inner { max-width: 760px; margin: 0 auto; position: relative; z-index: 1; }
  .svc-hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--gold-dim); border: 1px solid var(--gold-bdr);
    color: var(--gold-hi);
    font-size: 11px; font-weight: 600; letter-spacing: .13em; text-transform: uppercase;
    padding: 6px 18px; border-radius: 999px; margin-bottom: 28px;
  }
  .svc-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold); animation: dotPulse 2s ease-in-out infinite; }
  @keyframes dotPulse { 0%,100%{opacity:1;} 50%{opacity:.25;} }
  .svc-hero h1 {
    font-size: clamp(38px, 6vw, 68px); font-weight: 800;
    line-height: 1.06; letter-spacing: -0.025em; margin-bottom: 16px;
  }
  .svc-accent {
    background: linear-gradient(135deg, var(--gold-hi), oklch(58% 0.16 60));
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .svc-hero-sub {
    font-size: 17px; color: var(--text-2); line-height: 1.8; max-width: 580px;
    margin: 0 auto 40px; font-weight: 300;
  }
  .svc-hero-cta { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .svc-btn-primary {
    background: var(--gold); color: #0b0c09;
    padding: 14px 30px; border-radius: var(--radius);
    font-weight: 700; font-size: 15px; border: none; cursor: pointer;
    transition: .22s; font-family: 'DM Sans', sans-serif;
  }
  .svc-btn-primary:hover { filter: brightness(1.12); transform: translateY(-2px); box-shadow: 0 8px 24px var(--gold-glow); }
  .svc-btn-ghost {
    background: transparent; color: var(--text);
    padding: 14px 30px; border-radius: var(--radius); font-weight: 500; font-size: 15px;
    border: 2px solid rgba(255,255,255,.20); cursor: pointer; transition: .22s;
    font-family: 'DM Sans', sans-serif;
  }
  .svc-btn-ghost:hover { background: rgba(255,255,255,.06); border-color: rgba(255,255,255,.45); }

  /* ── PAGE ── */
  .svc-page { max-width: 1000px; margin: 0 auto; padding: 72px 32px; }

  /* ── SECTION HEAD ── */
  .svc-head { margin-bottom: 44px; }
  .svc-head h2 { font-size: clamp(26px, 3.6vw, 40px); font-weight: 800; letter-spacing: -0.025em; }
  .svc-head h2 .svc-accent { -webkit-text-fill-color: unset; background: none; color: var(--gold-hi); }
  .svc-bar {
    width: 80px; height: 4px; margin-top: 12px; border-radius: 99px;
    background: linear-gradient(90deg, var(--gold), oklch(62% 0.14 80 / 0.22));
    animation: barPulse 2.5s ease-in-out infinite;
  }
  @keyframes barPulse { 0%,100%{opacity:1;} 50%{opacity:.28;} }

  /* ── DIVIDER ── */
  .svc-divider {
    border: none; height: 1px; margin: 0 32px;
    background: linear-gradient(90deg, transparent, var(--border), transparent);
  }

  /* ── MODELLI ── */
  .svc-models { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
  .svc-model {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 22px; padding: 36px 32px; transition: .32s; position: relative; overflow: hidden;
  }
  .svc-model::before {
    content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--gold), oklch(58% 0.16 60));
    opacity: 0; transition: .32s;
  }
  .svc-model:hover { border-color: var(--gold-bdr); transform: translateY(-4px); box-shadow: var(--shadow); }
  .svc-model:hover::before { opacity: 1; }
  .svc-model-tag {
    display: inline-block; margin-bottom: 8px;
    background: var(--gold-dim); border: 1px solid var(--gold-bdr);
    color: var(--gold-hi); font-size: 10px; font-weight: 700;
    letter-spacing: .12em; text-transform: uppercase; padding: 4px 12px; border-radius: 999px;
  }
  .svc-model h3 { font-size: 20px; font-weight: 800; margin-bottom: 6px; color: var(--text); }
  .svc-model-sub { font-size: 13px; color: var(--gold-hi); margin-bottom: 18px; font-weight: 500; }
  .svc-model p { font-size: 14px; color: var(--text-2); line-height: 1.78; margin-bottom: 22px; }
  .svc-model-checks { display: flex; flex-direction: column; gap: 10px; }
  .svc-model-check { display: flex; align-items: flex-start; gap: 10px; font-size: 14px; color: var(--text); }
  .svc-model-check-ico {
    width: 18px; height: 18px; border-radius: 50%; flex-shrink: 0; margin-top: 1px;
    background: var(--gold-dim); border: 1px solid var(--gold-bdr);
    color: var(--gold); display: flex; align-items: center; justify-content: center;
    font-size: 10px; font-weight: 700;
  }

  /* ── PROCESSO ── */
  .svc-process { display: flex; flex-direction: column; gap: 0; position: relative; }
  .svc-process::before {
    content: ""; position: absolute; left: 19px; top: 0; bottom: 0;
    width: 2px; background: linear-gradient(to bottom, var(--gold-bdr), transparent);
  }
  .svc-proc-step { display: flex; gap: 24px; align-items: flex-start; padding-bottom: 36px; position: relative; }
  .svc-proc-step:last-child { padding-bottom: 0; }
  .svc-proc-num {
    width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0;
    background: var(--surface); border: 1px solid var(--gold-bdr);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 800;
    color: var(--gold); z-index: 1; position: relative;
    transition: .28s;
  }
  .svc-proc-step:hover .svc-proc-num { background: var(--gold-dim); border-color: var(--gold); }
  .svc-proc-body { padding-top: 8px; }
  .svc-proc-body h3 { font-size: 17px; font-weight: 800; margin-bottom: 6px; color: var(--text); }
  .svc-proc-body p { font-size: 14px; color: var(--text-2); line-height: 1.75; }

  /* ── CTA ── */
  .svc-cta {
    background: linear-gradient(135deg, #070808 0%, oklch(14% 0.09 80) 100%);
    border-top: 1px solid var(--border);
    color: white; padding: 90px 20px; margin-top: 80px;
  }
  .svc-cta-inner { max-width: 680px; margin: 0 auto; text-align: center; }
  .svc-cta-title { font-size: clamp(24px, 3.8vw, 38px); font-weight: 800; margin-bottom: 16px; letter-spacing: -0.02em; }
  .svc-cta-title .svc-accent { -webkit-text-fill-color: unset; background: none; color: var(--gold-hi); }
  .svc-cta-sub { opacity: .68; margin-bottom: 36px; line-height: 1.8; font-size: 15px; }
  .svc-cta-btns { display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; }
  .svc-cta-primary {
    background: var(--gold); color: #0b0c09;
    padding: 14px 28px; border-radius: var(--radius); font-weight: 700;
    border: none; cursor: pointer; transition: .22s; font-family: 'DM Sans', sans-serif; font-size: 15px;
  }
  .svc-cta-primary:hover { filter: brightness(1.12); transform: translateY(-2px); box-shadow: 0 8px 24px var(--gold-glow); }
  .svc-cta-secondary {
    background: transparent; color: white; padding: 14px 28px; border-radius: var(--radius); font-weight: 500;
    border: 2px solid rgba(255,255,255,.22); cursor: pointer; transition: .22s; font-family: 'DM Sans', sans-serif; font-size: 15px;
  }
  .svc-cta-secondary:hover { background: rgba(255,255,255,.07); border-color: rgba(255,255,255,.5); }

  /* ── FOOTER ── */
  .svc-footer {
    background: #050606; border-top: 1px solid rgba(255,255,255,.05);
    padding: 56px 32px 32px; color: var(--text-3);
  }
  .svc-footer-inner {
    max-width: 1000px; margin: 0 auto;
    display: grid; grid-template-columns: 1fr auto; gap: 48px; align-items: start;
  }
  .svc-footer-brand h3 { font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 800; color: var(--text); margin-bottom: 6px; }
  .svc-footer-brand p { font-size: 13px; line-height: 1.65; max-width: 280px; }
  .svc-footer-tag {
    display: inline-block; margin-top: 12px;
    background: var(--gold-dim); border: 1px solid var(--gold-bdr);
    color: var(--gold-hi); font-size: 11px; font-weight: 600;
    letter-spacing: .1em; text-transform: uppercase; padding: 4px 12px; border-radius: 999px;
  }
  .svc-footer-links { display: flex; flex-direction: column; gap: 10px; align-items: flex-end; }
  .svc-footer-links a { color: var(--text-3); text-decoration: none; font-size: 14px; font-weight: 500; transition: .2s; }
  .svc-footer-links a:hover { color: var(--gold-hi); }
  .svc-footer-bottom {
    max-width: 1000px; margin: 28px auto 0; padding-top: 20px;
    border-top: 1px solid rgba(255,255,255,.05);
    display: flex; gap: 12px; justify-content: space-between;
    flex-wrap: wrap; font-size: 12px; opacity: .38;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 700px) {
    .svc-models { grid-template-columns: 1fr; }
    .svc-page { padding: 56px 20px; }
    .svc-footer-inner { grid-template-columns: 1fr; }
    .svc-footer-links { align-items: flex-start; }
    .svc-hero { padding: 100px 20px 72px; }
  }
  @media (max-width: 700px) {
    .svc-hero { padding: 80px 20px 60px; }
    .svc-hero h1 { font-size: clamp(30px, 8vw, 48px); }
    .svc-hero-sub { font-size: 14px; }
    .svc-hero-cta { flex-direction: column; }
    .svc-btn-primary, .svc-btn-ghost { width: 100%; text-align: center; }
    .svc-models { grid-template-columns: 1fr; }
    .svc-model { padding: 24px 20px; }
    .svc-page { padding: 48px 16px; }
    .svc-cta { padding: 56px 16px; }
    .svc-cta-btns { flex-direction: column; align-items: center; }
    .svc-cta-primary, .svc-cta-secondary { width: 100%; text-align: center; justify-content: center; }
    .svc-footer-inner { grid-template-columns: 1fr; }
    .svc-footer-links { align-items: flex-start; }
    .svc-footer-bottom { flex-direction: column; gap: 4px; }
  }
`;

export default function SviluppiCustom() {
  const { t } = useTranslation();

  const models = t('custom.models', { returnObjects: true });
  const steps = t('custom.processSteps', { returnObjects: true });

  return (
    <div className="svc-root">
      <style>{css}</style>

      {/* ── HERO ── */}
      <section className="svc-hero">
        <div className="svc-hero-inner">
          <div className="svc-hero-badge">
            <span className="svc-badge-dot" />
            {t('custom.hero.badge')}
          </div>
          <h1
            dangerouslySetInnerHTML={{
              __html: t('custom.hero.title', { interpolation: { escapeValue: false } }),
            }}
          />
          <p className="svc-hero-sub">{t('custom.hero.sub')}</p>
          <div className="svc-hero-cta">
            <Link to="/contatti" className="svc-btn-primary">
              {t('custom.hero.ctaPrimary')}
            </Link>
            <a href="#come-lavoriamo" className="svc-btn-ghost">
              {t('custom.hero.ctaSecondary')}
            </a>
          </div>
        </div>
      </section>

      <hr className="svc-divider" />

      {/* ── MODELLI ── */}
      <div className="svc-page" id="come-lavoriamo">
        <div className="svc-head">
          <h2
            dangerouslySetInnerHTML={{
              __html: t('custom.modelsTitle', { interpolation: { escapeValue: false } }),
            }}
          />
          <div className="svc-bar" />
        </div>
        <div className="svc-models">
          {models.map((m) => (
            <div className="svc-model" key={m.tag}>
              <span className="svc-model-tag">{m.tag}</span>
              <h3>{m.title}</h3>
              <div className="svc-model-sub">{m.sub}</div>
              <p>{m.desc}</p>
              <div className="svc-model-checks">
                {m.checks.map((c) => (
                  <div className="svc-model-check" key={c}>
                    <span className="svc-model-check-ico">✓</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="svc-divider" />

      {/* ── PROCESSO ── */}
      <div className="svc-page">
        <div className="svc-head">
          <h2
            dangerouslySetInnerHTML={{
              __html: t('custom.processTitle', { interpolation: { escapeValue: false } }),
            }}
          />
          <div className="svc-bar" />
        </div>
        <div className="svc-process">
          {steps.map((s) => (
            <div className="svc-proc-step" key={s.number}>
              <div className="svc-proc-num">{s.number}</div>
              <div className="svc-proc-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <section className="svc-cta">
        <div className="svc-cta-inner">
          <h2
            className="svc-cta-title"
            dangerouslySetInnerHTML={{
              __html: t('custom.cta.title', { interpolation: { escapeValue: false } }),
            }}
          />
          <p className="svc-cta-sub">{t('custom.cta.sub')}</p>
          <div className="svc-cta-btns">
            <Link to="/contatti" className="svc-cta-primary">
              {t('custom.cta.buttonPrimary')}
            </Link>
          
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="svc-footer">
        <div className="svc-footer-inner">
          <div className="svc-footer-brand">
            <h3>{t('custom.footer.brand')}</h3>
            <p>{t('custom.footer.desc')}</p>
            <span className="svc-footer-tag">{t('custom.footer.tag')}</span>
          </div>
          <div className="svc-footer-links">
            <Link to="/privacy">{t('custom.footer.privacy')}</Link>
            <Link to="/contatti">{t('custom.footer.contact')}</Link>
          </div>
        </div>
        <div className="svc-footer-bottom">
          <span>{t('custom.footer.copyright', { year: new Date().getFullYear() })}</span>
          <span>{t('custom.footer.madeIn')}</span>
        </div>
      </footer>
      <Footer />
    </div>
  );
}