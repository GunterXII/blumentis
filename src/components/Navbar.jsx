// src/components/Navbar.jsx
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Dropdown from "./Dropdown";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/LOGO.png";

// ─── Lingue disponibili ───────────────────────────────────────────────────────
const LANGS = [
  { code: "it", flag: "🇮🇹" },
  { code: "en", flag: "🇬🇧" },
  { code: "zh", flag: "🇨🇳" },
];

// ─── Selettore lingua ─────────────────────────────────────────────────────────
const LangSelector = ({ isOpen, onToggle, onClose }) => {
  const { t, i18n } = useTranslation();
  const ref = useRef(null);
  const cur = LANGS.find((l) => l.code === i18n.language) ?? LANGS[0];

  // Chiude il dropdown se si clicca fuori
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onClose]);

  const handleSelect = (code) => {
    i18n.changeLanguage(code);
    onClose();
  };

  return (
    <div style={{ position: "relative" }} ref={ref}>
      <button
        className="lang-btn"
        onClick={onToggle}
        aria-label={t("nav.aria.lang_select")}
      >
        <span>{cur.code.toUpperCase()}</span>
        <svg
          style={{
            width: 11, height: 11, opacity: 0.5,
            transition: "transform 0.2s",
            transform: isOpen ? "rotate(180deg)" : "none",
          }}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div className="dropdown align-right" style={{ minWidth: 150 }} role="menu">
          {LANGS.map((l) => (
            <button
              key={l.code}
              className={`lang-item${i18n.language === l.code ? " sel" : ""}`}
              onClick={() => handleSelect(l.code)}
              role="menuitem"
            >
              <span>{l.flag}</span>
              {/* Il nome della lingua è tradotto nella lingua corrente */}
              <span>{t(`langs.${l.code}`)}</span>
              {i18n.language === l.code && <span className="lang-check">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ─── Navbar ───────────────────────────────────────────────────────────────────
const Navbar = () => {
  const { t } = useTranslation();
  const [open, setOpen]         = useState(null);
  const [mobile, setMobile]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Le voci di navigazione usano t() — si aggiornano automaticamente al cambio lingua
  const NAV = [
    {
      title: t("nav.homepage"),
      align: "left",
      options: [
        { label: t("nav.links.chi_siamo"),           href: pathname === "/" ? "#chi-siamo"           : "/#chi-siamo" },
        { label: t("nav.links.visione"),             href: pathname === "/" ? "#visione"             : "/#visione" },
        { label: t("nav.links.missione"),            href: pathname === "/" ? "#missione"            : "/#missione" },
        { label: t("nav.links.valori"),              href: pathname === "/" ? "#valori"              : "/#valori" },
        { label: t("nav.links.rete_internazionale"), href: pathname === "/" ? "#rete-internazionale" : "/#rete-internazionale" },
      ],
    },
    {
      title: t("nav.prodotti"),
      align: "left",
      options: [
        {
          label: t("nav.prodotti"),   href: "/prodotti" 
        },
        { label: t("nav.links.proline"),   href: "/prodotti#proline" },
        { label: t("nav.links.optimai"),   href: "/prodotti#optimai" },
        { label: t("nav.links.agentiche"), href: "/prodotti#agentiche" },
        { label: t("nav.links.custom"),    href: "/prodotti#custom" },
        { label: t("nav.links.hardware"),  href: "/prodotti#hardware" },
      ],
    },
    {
      title: t("nav.industrie"),
      align: "left",
      options: [
        { label: t("nav.links.automotive"),    href: "/industrie#automotive" },
        { label: t("nav.links.industriale"),   href: "/industrie#industriale" },
        { label: t("nav.links.agromeccanica"), href: "/industrie#agromeccanica" },
        { label: t("nav.links.nautico"),       href: "/industrie#nautico" },
        { label: t("nav.links.pmi"),           href: "/industrie#pmi" },
      ],
    },
    {
      title: t("nav.contatti"),
      align: "right",
      options: [
        { label: t("nav.links.contatti_link"),  href: "/contatti" },
        { label: t("nav.links.collaborazioni"), href: pathname === "/" ? "contatti#collaborazioni"           : "/contatti#collaborazioni" },
      ],
    },
  ];

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const fn = (e) => {
      if (e.key === "Escape") { setOpen(null); setMobile(false); }
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, []);

  const toggle = (k) => setOpen((prev) => (prev === k ? null : k));
  const close  = ()  => setOpen(null);

  return (
    <>
      {open !== null && <div className="overlay" onClick={close} />}

      <nav
        className={`navbar${scrolled ? " scrolled" : ""}`}
        role="navigation"
        aria-label={t("nav.aria.main_nav")}
      >
        <div className="navbar-inner">

          {/* Logo */}
          <a href="/" className="logo" aria-label={t("nav.aria.home")}>
            <img
              src={logo}
              alt="BluMentis"
              style={{
                height: "clamp(44px, 8vw, 70px)",
                width: "auto",
                display: "block",
                objectFit: "contain",
              }}
            />
          </a>

          {/* Desktop nav */}
          <ul className="nav-links">
            {NAV.map((item, i) => (
              <Dropdown
                key={item.title}
                title={item.title}
                options={item.options}
                align={item.align}
                isOpen={open === i}
                onToggle={() => toggle(i)}
                onClose={close}
              />
            ))}
          </ul>

          {/* Destra: selettore lingua + hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <LangSelector
              isOpen={open === "lang"}
              onToggle={() => toggle("lang")}
              onClose={close}
            />
            <button
              className={`hamburger${mobile ? " open" : ""}`}
              onClick={() => setMobile((p) => !p)}
              aria-label={mobile ? t("nav.aria.close_menu") : t("nav.aria.open_menu")}
              aria-expanded={mobile}
            >
              <span className="ham" />
              <span className="ham" />
              <span className="ham" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobile && (
        <div className="mobile-menu" role="dialog" aria-label={t("nav.aria.main_nav")}>
          {NAV.map((item) => (
            <div key={item.title} className="mob-section">
              <div className="mob-title">{item.title}</div>
              {item.options.map((opt) => (
                <Link
                  key={opt.label}
                  to={opt.href}
                  className="mob-item"
                  onClick={() => setMobile(false)}
                >
                  {opt.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;