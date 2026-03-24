import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
/**
 * Dropdown
 *
 * Props:
 *  - title    : string
 *  - options  : Array<{ label: string, href: string }>
 *                 href="#id"       → scroll in-page
 *                 href="/pagina"   → navigazione normale
 *  - align    : "left" | "right"  (default "left")
 *  - isOpen   : bool
 *  - onToggle : fn
 *  - onClose  : fn
 */
const Dropdown = ({ title, options, align = "left", isOpen, onToggle, onClose }) => {
  const ref = useRef(null);

  // click-away
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, onClose]);

  // Gestisce il click su un item:
  // - se è un anchor (#id) usa scrollIntoView per uno scroll smooth preciso
  // - altrimenti lascia fare al browser il suo lavoro
  const handleClick = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.getElementById(href.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    onClose();
  };

  return (
    <li style={{ position: "relative", listStyle: "none" }} ref={ref}>

      {/* Trigger */}
      <button
        className={`nav-trigger${isOpen ? " open" : ""}`}
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {title}
        <svg
          className="chevron"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Panel */}
      {isOpen && (
        <div
          className={`dropdown${align === "right" ? " align-right" : ""}`}
          role="menu"
        >
          {options.map(({ label, href }) => {
  const isHash = href.startsWith("#");

  if (isHash) {
    return (
      <button
        key={label}
        className="drop-item"
        role="menuitem"
        onClick={(e) => handleClick(e, href)}
      >
        {label}
      </button>
    );
  }

  return (
    <Link
      key={label}
      to={href}
      className="drop-item"
      role="menuitem"
      onClick={onClose}
    >
      {label}
    </Link>
  );
})}
        </div>
      )}
    </li>
  );
};

export default Dropdown;