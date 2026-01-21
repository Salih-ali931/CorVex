import { Link } from "react-router-dom";
import "./MenuDrawer.css";

const MenuDrawer = ({ onClose, side = "left" }) => {
  return (
    <div className="menu-overlay" onClick={onClose}>
      <div
        className={`menu-drawer ${side}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="menu-head">
          <button onClick={onClose}>✕ Close</button>
        </div>

        {/* 🔥 MAIN CATEGORIES (NO LOADING) */}
        <div className="menu-section">
          <Link to="/men" onClick={onClose}>Men</Link>
          <Link to="/women" onClick={onClose}>Women</Link>
          <Link to="/jewelleries" onClick={onClose}>Jewelleries</Link>
        </div>

        <div className="divider" />

        {/* ⏳ LOADING REQUIRED */}
        <div className="menu-section">
          <Link to="/loading?to=/kids" onClick={onClose}>Kids</Link>
          <Link to="/loading?to=/optical" onClick={onClose}>Optical</Link>
        </div>

        <div className="divider" />

        {/* ⏳ USER PAGES → LOADING */}
        <div className="menu-section small">
          <Link to="/loading?to=/orders" onClick={onClose}>
            Order History
          </Link>
          <Link to="/loading?to=/payment" onClick={onClose}>
            Payments
          </Link>
        </div>

        <div className="divider" />

        {/* 🔥 STATIC PAGES (NO LOADING) */}
        <div className="menu-section small">
          <Link to="/about" onClick={onClose}>About</Link>
          <Link to="/contact" onClick={onClose}>Contact</Link>
          <Link to="/services" onClick={onClose}>Services</Link>
        </div>
      </div>
    </div>
  );
};

export default MenuDrawer;
