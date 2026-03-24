/**
 * Card.jsx
 * Adattamento della card originale al design system Blumentis.
 * 
 * Props:
 *  product: { id, name, category, accent, icon, tagline }
 *  onClick: fn  — chiamato al click su "Scopri di più"
 *  isActive: bool — evidenzia la card se è il prodotto selezionato
 */
import { Link } from "react-router-dom";
const Card = ({ product, isActive }) => {
  return (
    <div
      className={`card${isActive ? " card--active" : ""}`}
      data-accent={product.accentClass}   /* usato per il glow corretto */
      data-label={product.category}  /* testo in filigrana (::after) */
    >
      {/* Area icona — sostituisce imgBox con immagine */}
      <div className="imgBox">
        <span className="card-icon">{product.icon}</span>

        {/* badge categoria in alto a destra */}
        <span className="card-cat-badge">{product.category}</span>
      </div>

      {/* Area testo */}
      <div className="contentBox">
        <div className="contentBox__text">
          <h3>{product.name}</h3>
          <p className="card-tagline">{product.tagline}</p>
        </div>
        <Link
                    to={`/prodotti/${product.id}`}
                    className="buy"
                   
                  >
                    Scopri di più →
                  </Link>
      </div>
    </div>
  );
};

export default Card;