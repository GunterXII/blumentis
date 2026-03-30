/* eslint-disable react-hooks/set-state-in-effect */
// src/pages/Industrie.jsx
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { Cog, Factory, Anchor, Building2, Leaf } from "lucide-react";

const INDUSTRY_META = [
  { id: "automotive",    icon: <Factory   color="#6B7280" size={50} strokeWidth={1.5} />, accent: "#E63946" },
  { id: "industriale",   icon: <Cog       color="#1D4ED8" size={50} strokeWidth={1.5} />, accent: "#2A9D8F" },
  { id: "agromeccanica", icon: <Leaf      color="#16A34A" size={50} strokeWidth={1.5} />, accent: "#F4A261" },
  { id: "nautico",       icon: <Anchor    color="#0EA5E9" size={50} strokeWidth={1.5} />, accent: "#457B9D" },
  { id: "pmi",           icon: <Building2 color="#374151" size={50} strokeWidth={1.5} />, accent: "#8338EC" },
];



const style = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .ind-root {
    background: #0D0D0D; color: #F0EDE8;
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh; padding-top: 64px; overflow-x: hidden;
  }

  .ind-hero {
    padding: 80px 10% 64px; position: relative;
    border-bottom: 1px solid #1A1A1A; overflow: hidden;
  }
  .ind-hero-bg-word {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(60px, 14vw, 200px);
    color: #111; position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    white-space: nowrap; pointer-events: none;
    letter-spacing: 8px; user-select: none;
  }
  .ind-hero-kicker {
    font-size: 11px; letter-spacing: 4px; text-transform: uppercase;
    color: var(--accent, #E63946); margin-bottom: 20px;
    display: flex; align-items: center; gap: 10px; position: relative;
  }
  .ind-hero-kicker::before { content: ""; display: block; width: 32px; height: 1px; background: var(--accent, #E63946); }
  .ind-hero-title {
    font-family: 'Bebas Neue', sans-serif;
    font-size: clamp(42px, 6vw, 80px);
    line-height: 1; letter-spacing: 1px; max-width: 700px; position: relative;
  }
  .ind-hero-sub {
    font-size: 16px; color: #7A7470; font-weight: 300;
    max-width: 500px; line-height: 1.7; margin-top: 16px; position: relative;
  }

  .ind-tabs { display: flex; gap: 4px; padding: 32px 10% 0; flex-wrap: wrap; width: 100%; }
  .ind-tab {
    padding: 8px 20px; border-radius: 100px;
    border: 1px solid #222; background: transparent;
    color: #666; cursor: pointer; font-size: 13px;
    font-family: 'DM Sans', sans-serif; letter-spacing: 0.5px; transition: all 0.25s;
  }
  .ind-tab.active { background: var(--accent); border-color: var(--accent); color: #0D0D0D; font-weight: 500; }

  .ind-progress { width: 100%; height: 2px; background: #1A1A1A; margin: 24px 0 0; overflow: hidden; }
  .ind-progress__fill { height: 100%; background: var(--accent); transition: width 0.55s cubic-bezier(0.77,0,0.175,1), background 0.4s; }

  .ind-slider-outer { width: 100%; position: relative; }
  .ind-track-wrap { overflow: hidden; }
  .ind-track { display: flex; transition: transform 0.55s cubic-bezier(0.77,0,0.175,1); }

  .ind-card {
    min-width: 100%; background: #0F0F0F;
    border-bottom: 1px solid #1A1A1A;
    display: grid; grid-template-columns: 1fr 1fr; min-height: 460px;
  }
  .ind-card__left {
    padding: 64px 10%; display: flex; flex-direction: column; justify-content: space-between;
    border-right: 1px solid #1A1A1A; position: relative;
  }
  .ind-card__icon { font-size: 56px; line-height: 1; margin-bottom: 32px; }
  .ind-card__num {
    font-family: 'Bebas Neue', sans-serif; font-size: 120px; line-height: 1;
    color: #161616; position: absolute; bottom: -10px; right: 20px;
    user-select: none; pointer-events: none;
  }
  .ind-card__name { font-family: 'Bebas Neue', sans-serif; font-size: clamp(40px,5vw,72px); line-height: 1; letter-spacing: 1px; color: var(--accent); }
  .ind-card__desc { font-size: 14px; color: #666; font-weight: 300; margin-top: 10px; line-height: 1.6; }
  .ind-card__right { padding: 64px 10%; display: flex; flex-direction: column; justify-content: center; }
  .ind-card__text { font-size: 16px; line-height: 1.85; color: #C0BAB2; font-weight: 300; }

  .ind-cta-wrap { position: relative; display: inline-block; margin-top: 36px; }
  .ind-card__cta {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 13px; letter-spacing: 2px; text-transform: uppercase;
    color: var(--accent); border: 1px solid var(--accent);
    padding: 12px 24px; border-radius: 100px; cursor: pointer;
    transition: background 0.2s, color 0.2s;
    background: transparent; font-family: 'DM Sans', sans-serif;
  }
  .ind-card__cta:hover { background: var(--accent); color: #0D0D0D; }

 .ind-bubble {
  position: absolute;
  left: 220px;              /* invece di 220px */
  margin-left: 16px;       /* spazio dal bottone */
  top: 50%;
  transform: translateY(-50%);
  
  width: min(320px, 90vw); /* 🔥 responsive */
  
  background: #161616;
  border: 1px solid var(--accent);
  border-radius: 16px;
  padding: 20px 22px;
  z-index: 10;
   background: rgba(22, 22, 22, 0.6); /* 👈 trasparente */
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px); /* Safari */
  animation: bubblePop 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}
  .ind-bubble::before {
  content: "";
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
  width: 14px;
  height: 14px;
  background: #161616;
  border-left: 1px solid var(--accent);
  border-bottom: 1px solid var(--accent);
}
  .ind-bubble__text {
    font-size: 14px; color: #9A9390;
    line-height: 1.75; font-weight: 300;
  }
  @keyframes bubblePop {
    from { opacity: 0; transform: translateY(-50%) scale(0.9); }
    to   { opacity: 1; transform: translateY(-50%) scale(1); }
  }

  .ind-controls {
    display: flex; align-items: center; justify-content: center;
    gap: 20px; padding: 40px 10%; border-bottom: 1px solid #1A1A1A;
  }
  .ind-btn {
    width: 48px; height: 48px; border-radius: 50%;
    border: 1px solid #222; background: #161616; color: #F0EDE8;
    cursor: pointer; font-size: 20px;
    display: flex; align-items: center; justify-content: center;
    transition: border-color 0.2s, background 0.2s;
  }
  .ind-btn:hover { border-color: var(--accent); background: #222; }
  .ind-dots { display: flex; gap: 8px; align-items: center; }
  .ind-dot { width: 6px; height: 6px; border-radius: 50%; background: #333; cursor: pointer; transition: background 0.3s, width 0.3s; }
  .ind-dot.active { background: var(--accent); width: 24px; border-radius: 3px; }

  @media (max-width: 900px) {
    .ind-bubble {
      left: 0; top: -300px;
      transform: none; width: 280px;
      animation: bubblePopDown 0.25s cubic-bezier(0.34,1.56,0.64,1) forwards;
      backdrop:blur
    }
    
    @keyframes bubblePopDown {
      from { opacity: 0; transform: translateY(-8px) scale(0.95); }
      to   { opacity: 1; transform: translateY(0) scale(1); }
    }
  }
  @media (max-width: 700px) {
    .ind-card { grid-template-columns: 1fr; }
    .ind-card__left { border-right: none; border-bottom: 1px solid #1A1A1A; padding: 48px 6%; }
    .ind-card__right { padding: 48px 6%; }
    .ind-card__num { display: none; }
    .ind-hero { padding: 72px 6% 48px; }
    .ind-tabs { padding: 24px 6% 0; }
    .ind-controls { padding: 32px 6%; }
  }
`;

export default function Industrie() {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [showBubble, setShowBubble] = useState(false);
  const { hash } = useLocation();
  const trackRef = useRef(null);
const BUBBLE_TEXT = {
  automotive:    t("automotive"),
  industriale:   t("industriale"),
  agromeccanica: t("agromeccanica"),
  nautico:       t("nautico"),
  pmi:           t("pmi"),
};
  const items = t("industrie.items", { returnObjects: true });
  const industrie = Array.isArray(items)
    ? items.map((item, i) => ({ ...item, ...INDUSTRY_META[i] }))
    : [];

  useEffect(() => {
    const id = hash.replace("#", "");
    const idx = industrie.findIndex((ind) => ind.id === id);
    if (idx !== -1) setCurrent(idx);
  }, [hash]);

  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease-out-cubic", once: true, offset: 60 });
  }, []);

  // Chiude la bolla quando si cambia settore
  useEffect(() => setShowBubble(false), [current]);

  const accent = industrie[current]?.accent ?? "#E63946";
  const go = (idx) => setCurrent((idx + industrie.length) % industrie.length);

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(-${current * 100}%)`;
    }
  }, [current]);

  const progress = ((current + 1) / industrie.length) * 100;

  return (
    <>
      <style>{style}</style>
      <div className="ind-root" style={{ "--accent": accent }}>

        <section className="ind-hero" id={`${industrie[current]?.id || "automotive"}`}>
          <span className="ind-hero-bg-word" aria-hidden="true">{t("industrie.hero.bg_word")}</span>
          <p className="ind-hero-kicker" data-aos="fade-right">{t("industrie.hero.kicker")}</p>
          <h1 className="ind-hero-title" data-aos="fade-up" data-aos-delay="100">{t("industrie.hero.title")}</h1>
          <p className="ind-hero-sub" data-aos="fade-up" data-aos-delay="200">{t("industrie.hero.subtitle")}</p>
        </section>

        <div className="ind-tabs" data-aos="fade-up" data-aos-delay="100">
          {industrie.map((ind, i) => (
            <button
              id={ind.id}
              key={ind.id}
              className={`ind-tab${i === current ? " active" : ""}`}
              onClick={() => go(i)}
              style={i === current ? { "--accent": ind.accent } : {}}
            >
              {ind.name}
            </button>
          ))}
        </div>

        <div className="ind-progress">
          <div className="ind-progress__fill" style={{ width: `${progress}%` }} />
        </div>

        <div className="ind-slider-outer" data-aos="fade-up" data-aos-delay="150">
          <div className="ind-track-wrap">
            <div className="ind-track" ref={trackRef}>
              {industrie.map((ind, i) => (
                <div className="ind-card" key={ind.id} style={{ "--accent": ind.accent }}>
                  <div className="ind-card__left">
                    <div>
                      <div className="ind-card__icon">{ind.icon}</div>
                      <div className="ind-card__name">{ind.name}</div>
                      <div className="ind-card__desc">{ind.description}</div>
                    </div>
                    <div className="ind-card__num">0{i + 1}</div>
                  </div>
                  <div className="ind-card__right">
                    <p className="ind-card__text">{ind.text}</p>
                    <div className="ind-cta-wrap">
                      <button
                        className="ind-card__cta"
                        onClick={() => setShowBubble((p) => !p)}
                      >
                        {t("industrie.cta")} {showBubble ? "×" : ""}
                      </button>
                      {showBubble && i === current && (
                        <div className="ind-bubble">
                          <p className="ind-bubble__text">{BUBBLE_TEXT[ind.id]}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="ind-controls" data-aos="fade-up" data-aos-delay="200">
          <button className="ind-btn" onClick={() => go(current - 1)}>‹</button>
          <div className="ind-dots">
            {industrie.map((_, i) => (
              <div
                key={i}
                className={`ind-dot${i === current ? " active" : ""}`}
                style={i === current ? { background: accent } : {}}
                onClick={() => go(i)}
              />
            ))}
          </div>
          <button className="ind-btn" onClick={() => go(current + 1)}>›</button>
        </div>

        <Footer />
      </div>
    </>
  );
}