// import { Link } from "react-router-dom";
// import "./MenuDrawer.css";

// const MenuDrawer = ({ onClose }) => {
//   return (
//     <div className="menu-overlay">
//       <div className="menu-drawer">

//         {/* HEADER */}
//         <div className="menu-head">
//           <button onClick={onClose}>✕ Close</button>
//         </div>

//         {/* MAIN LINKS */}
//         <div className="menu-section">
//           <Link to="/men" onClick={onClose}>Men</Link>
//           <Link to="/women" onClick={onClose}>Women</Link>
//           <Link to="/kids" onClick={onClose}>Kids</Link>
//           <Link to="/optical" onClick={onClose}>Optical</Link>
//           <Link to="/cart" onClick={onClose}>Cart</Link>
//         </div>

//         {/* DIVIDER */}
//         <div className="divider" />

//         {/* ACCOUNT */}
//         <div className="menu-section small">
//           <Link to="/orders" onClick={onClose}>Order History</Link>
//           <Link to="/payment" onClick={onClose}>Payments</Link>
//         </div>

//         {/* DIVIDER */}
//         <div className="divider" />

//         {/* INFO */}
//         <div className="menu-section small">
//           <Link to="/about" onClick={onClose}>About</Link>
//           <Link to="/contact" onClick={onClose}>Contact</Link>
//           <Link to="/services" onClick={onClose}>Services</Link>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default MenuDrawer;










import { Link } from "react-router-dom";
import "./MenuDrawer.css";

const MenuDrawer = ({ onClose, side = "left" }) => {
  return (
    <div className="menu-overlay" onClick={onClose}>
      <div
        className={`menu-drawer ${side}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="menu-head">
          <button onClick={onClose}>✕ Close</button>
        </div>

        <div className="menu-section">
          <Link to="/men" onClick={onClose}>Men</Link>
          <Link to="/women" onClick={onClose}>Women</Link>
          <Link to="/kids" onClick={onClose}>Kids</Link>
          <Link to="/optical" onClick={onClose}>Optical</Link>
          <Link to="/jewelleries" onClick={onClose}>jewelleries</Link>
        </div>

        <div className="divider" />

        <div className="menu-section small">
          <Link to="/orders" onClick={onClose}>Order History</Link>
          <Link to="/payment" onClick={onClose}>Payments</Link>
        </div>

        <div className="divider" />

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
