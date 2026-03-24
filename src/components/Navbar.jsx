import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/LOGO.png";

const LANGS = [
  { code: "it", flag: "🇮🇹", label: "Italiano" },
  { code: "en", flag: "🇬🇧", label: "Inglese" },
  { code: "zh", flag: "🇨🇳", label: "Cinese" },
];

const LangSelector = ({ isOpen, onToggle, onClose }) => {
  const [sel, setSel] = useState("it");
  const ref = useRef(null);
  const cur = LANGS.find((l) => l.code === sel);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onClose]);

  return (
    <div style={{ position: "relative" }} ref={ref}>
      <button className="lang-btn" onClick={onToggle} aria-label="Seleziona lingua">
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
              className={`lang-item${sel === l.code ? " sel" : ""}`}
              onClick={() => { setSel(l.code); onClose(); }}
              role="menuitem"
            >
              <span>{l.flag}</span>
              <span>{l.label}</span>
              {sel === l.code && <span className="lang-check">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [open, setOpen]         = useState(null);
  const [mobile, setMobile]     = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const NAV = [
    {
      title: "Homepage",
      align: "left",
      options: [
        { label: "Chi siamo",           href: pathname === "/" ? "#chi-siamo"           : "/#chi-siamo" },
        { label: "Visione",             href: pathname === "/" ? "#visione"             : "/#visione" },
        { label: "Missione",            href: pathname === "/" ? "#missione"            : "/#missione" },
        { label: "Valori",              href: pathname === "/" ? "#valori"              : "/#valori" },
        { label: "Rete internazionale", href: pathname === "/" ? "#rete-internazionale" : "/#rete-internazionale" },
      ],
    },
    {
      title: "Prodotti",
      align: "left",
      options: [
        { label: "ProLine Analytics",     href: "/prodotti#proline" },
        { label: "OptimAI",               href: "/prodotti#optimai" },
        { label: "Piattaforme Agentiche", href: "/prodotti#agentiche" },
        { label: "Sviluppi Custom",       href: "/prodotti#custom" },
        { label: "Hardware",              href: "/prodotti#hardware" },
      ],
    },
    {
      title: "Industrie",
      align: "left",
      options: [
        { label: "Automotive",    href: "/industrie#automotive" },
        { label: "Industriale",   href: "/industrie#industriale" },
       { label: "Agromeccanica", href: "/industrie#agromeccanica" },
{ label: "Nautico",       href: "/industrie#nautico" },
{ label: "PMI",           href: "/industrie#pmi" },
      ],
    },
    {
      title: "Contatti",
      align: "right",
      options: [
        { label: "Contatti",                  href: "/contatti" },
        { label: "Collaborazioni & Carriere", href: "/contatti" },
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
        aria-label="Navigazione principale"
      >
        <div className="navbar-inner">

          {/* Logo */}
          <a href="/" className="logo" aria-label="Home">
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

          {/* Destra */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <LangSelector
              isOpen={open === "lang"}
              onToggle={() => toggle("lang")}
              onClose={close}
            />
            <button
              className={`hamburger${mobile ? " open" : ""}`}
              onClick={() => setMobile((p) => !p)}
              aria-label={mobile ? "Chiudi menu" : "Apri menu"}
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
        <div className="mobile-menu" role="dialog" aria-label="Menu mobile">
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