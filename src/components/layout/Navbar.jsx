// import { Link } from "react-router-dom";
// import { useWishlist } from "../../context/WishlistContext";
// import "./Navbar.css";

// const Navbar = () => {
//   const { wishlist } = useWishlist(); // wishlist = []

//   return (
//     <nav className="nav">
//       <Link to="/" className="logo">BVLGARI</Link>

//       <div className="links">
//         <Link to="/men">Men</Link>
//         <Link to="/women">Women</Link>
//         <Link to="/kids">Kids</Link>
//         <Link to="/optical">Optical</Link>

//         <Link to="/wishlist">
//           ❤️ ({wishlist.length})
//         </Link>

//         <Link to="/cart">
//           🛒 Cart
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



















// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useWishlist } from "../../context/WishlistContext";
// import "./Navbar.css";

// const Navbar = () => {
//   const { wishlist } = useWishlist(); // ✅ wishlist count
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (!query.trim()) return;
//     navigate(`/search?query=${query}`);
//     setQuery("");
//   };

//   return (
//     <nav className="nav">
//       {/* LOGO */}
//       <Link to="/" className="logo">
//         BVLGARI
//       </Link>

//       {/* 🔍 SEARCH BAR */}
//       <form className="nav-search" onSubmit={handleSearch}>
//         <input
//           type="text"
//           placeholder="Search products, brands..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//       </form>

//       {/* LINKS */}
//       <div className="links">
//         <Link to="/men">Men</Link>
//         <Link to="/women">Women</Link>
//         <Link to="/kids">Kids</Link>
//         <Link to="/optical">Optical</Link>

//         <Link to="/wishlist" className="icon">
//           ❤️ <span>{wishlist.length}</span>
//         </Link>

//         <Link to="/cart" className="icon">
//           🛒 Cart
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







// import { Link } from "react-router-dom";
// import { useState } from "react";
// import SearchOverlay from "./SearchOverlay";
// import "./Navbar.css";

// const Navbar = () => {
//   const [openSearch, setOpenSearch] = useState(false);

//   return (
//     <>
//       <nav className="nav">
//         <Link to="/" className="logo">BVLGARI</Link>

//         <div className="nav-right">
//           <Link to="/men">Men</Link>
//           <Link to="/women">Women</Link>
//           <Link to="/optical">Optical</Link>

//           <button
//             className="search-btn"
//             onClick={() => setOpenSearch(true)}
//           >
//             🔍
//           </button>
//         </div>
//       </nav>

//       {/* SEARCH OVERLAY */}
//       {openSearch && (
//         <SearchOverlay onClose={() => setOpenSearch(false)} />
//       )}
//     </>
//   );
// };

// export default Navbar;










// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useWishlist } from "../../context/WishlistContext";
// import MenuDrawer from "./MenuDrawer";
// import "./Navbar.css";

// const Navbar = () => {
//   const { wishlist } = useWishlist();
//   const [openMenu, setOpenMenu] = useState(false);
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (!query.trim()) return;
//     navigate(`/search?query=${query}`);
//     setQuery("");
//   };

//   return (
//     <>
//       <nav className="nav">

//         {/* LEFT */}
//         <div className="nav-left">
//           <button className="menu-btn" onClick={() => setOpenMenu(true)}>
//             ☰
//           </button>
//         </div>

//         {/* CENTER */}
//         <div className="nav-center">
//           <Link to="/" className="logo">BVLGARI</Link>

//           <form className="nav-search" onSubmit={handleSearch}>
//             <input
//               type="text"
//               placeholder="Search products"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//           </form>
//         </div>

//         {/* RIGHT */}
//         <div className="nav-right">
//           <Link to="/wishlist" className="icon-btn">
//             ❤️ <span className="count">{wishlist.length}</span>
//           </Link>

//           <Link to="/cart" className="icon-btn">🛒</Link>
//         </div>
//       </nav>

//       {/* LEFT MENU DRAWER */}
//       {openMenu && <MenuDrawer side="left" onClose={() => setOpenMenu(false)} />}
//     </>
//   );
// };

// export default Navbar;


















// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useWishlist } from "../../context/WishlistContext";
// import MenuDrawer from "./MenuDrawer";
// import "./Navbar.css";

// const Navbar = () => {
//   const wishlistContext = useWishlist();
//   const wishlist = wishlistContext?.wishlist || [];

//   const [openMenu, setOpenMenu] = useState(false);
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (!query.trim()) return;
//     navigate(`/search?query=${query}`);
//     setQuery("");
//   };

//   return (
//     <>
//       <nav className="nav">

//         {/* LEFT */}
//         <div className="nav-left">
//           <button
//             className="menu-btn"
//             onClick={() => setOpenMenu(true)}
//             aria-label="Open Menu"
//           >
//             ☰
//           </button>
//         </div>

//         {/* CENTER */}
//         <div className="nav-center">
//           <Link to="/" className="logo">BVLGARI</Link>

//           <form className="nav-search" onSubmit={handleSearch}>
//             <input
//               type="text"
//               placeholder="Search products"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//           </form>
//         </div>

//         {/* RIGHT */}
//         <div className="nav-right">
//           <Link to="/wishlist" className="icon-btn">
//             ❤️
//             {wishlist.length > 0 && (
//               <span className="count">{wishlist.length}</span>
//             )}
//           </Link>

//           <Link to="/cart" className="icon-btn">🛒</Link>
//         </div>

//       </nav>

//       {/* MENU DRAWER */}
//       {openMenu && (
//         <MenuDrawer side="left" onClose={() => setOpenMenu(false)} />
//       )}
//     </>
//   );
// };

// export default Navbar;
















// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useWishlist } from "../../context/WishlistContext";
// import MenuDrawer from "./MenuDrawer";
// import SearchOverlay from "./SearchOverlay";
// import "./Navbar.css";

// const Navbar = () => {
//   const { wishlist = [] } = useWishlist();
//   const navigate = useNavigate();

//   const [openMenu, setOpenMenu] = useState(false);
//   const [openSearch, setOpenSearch] = useState(false);

//   return (
//     <>
//       <nav className="nav">
//         {/* LEFT */}
//         <div className="nav-left">
//           <button className="menu-btn" onClick={() => setOpenMenu(true)}>
//             ☰
//           </button>
//         </div>

//         {/* CENTER */}
//         <div className="nav-center">
//           <Link to="/" className="logo">BVLGARI</Link>

//           {/* SEARCH CLICK */}
//           <div
//             className="nav-search"
//             onClick={() => setOpenSearch(true)}
//           >
//             <input
//               type="text"
//               placeholder="Search products"
//               readOnly
//             />
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="nav-right">
//           <Link to="/wishlist" className="icon-btn">
//             ❤️
//             {wishlist.length > 0 && <span className="count">{wishlist.length}</span>}
//           </Link>

//           <Link to="/cart" className="icon-btn">🛒</Link>
//         </div>
//       </nav>

//       {openMenu && (
//         <MenuDrawer side="left" onClose={() => setOpenMenu(false)} />
//       )}

//       {openSearch && (
//         <SearchOverlay
//           onClose={() => setOpenSearch(false)}
//           onSearch={(q) => navigate(`/search?query=${q}`)}
//         />
//       )}
//     </>
//   );
// };

// export default Navbar;
































// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useWishlist } from "../../context/WishlistContext";
// import MenuDrawer from "./MenuDrawer";
// import SearchOverlay from "./SearchOverlay";
// import { Menu, Heart, ShoppingBag } from "lucide-react";
// import "./Navbar.css";

// const Navbar = () => {
//   const { wishlist = [] } = useWishlist();
//   const navigate = useNavigate();

//   const [openMenu, setOpenMenu] = useState(false);
//   const [openSearch, setOpenSearch] = useState(false);

//   return (
//     <>
//       <nav className="nav">
//         {/* LEFT */}
//         <div className="nav-left">
//           <button className="menu-btn" onClick={() => setOpenMenu(true)}>
//             <Menu size={22} strokeWidth={1.5} />
//           </button>
//         </div>

//         {/* CENTER */}
//         <div className="nav-center">
//           <Link to="/" className="logo">BVLGARI</Link>

//           {/* SEARCH (CLICK ONLY) */}
//           <div className="nav-search" onClick={() => setOpenSearch(true)}>
//             <input type="text" placeholder="Search products" readOnly />
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="nav-right">
//           <Link to="/wishlist" className="icon-btn">
//             <Heart size={18} strokeWidth={1.5} />
//             {wishlist.length > 0 && (
//               <span className="count">{wishlist.length}</span>
//             )}
//           </Link>

//           <Link to="/cart" className="icon-btn">
//             <ShoppingBag size={18} strokeWidth={1.5} />
//           </Link>
//         </div>
//       </nav>

//       {openMenu && (
//         <MenuDrawer side="left" onClose={() => setOpenMenu(false)} />
//       )}

//       {openSearch && (
//         <SearchOverlay
//           onClose={() => setOpenSearch(false)}
//           onSearch={(q) => navigate(`/search?query=${q}`)}
//         />
//       )}
//     </>
//   );
// };

// export default Navbar;




































// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { useWishlist } from "../../context/WishlistContext";
// import MenuDrawer from "./MenuDrawer";
// import SearchOverlay from "./SearchOverlay";
// import { Menu, Heart, ShoppingBag, User } from "lucide-react";
// import "./Navbar.css";

// const Navbar = () => {
//   const { wishlist = [] } = useWishlist();
//   const navigate = useNavigate();

//   const [openMenu, setOpenMenu] = useState(false);
//   const [openSearch, setOpenSearch] = useState(false);

//   return (
//     <>
//       <nav className="nav">
//         {/* LEFT */}
//         <div className="nav-left">
//           <button className="menu-btn" onClick={() => setOpenMenu(true)}>
//             <Menu size={22} strokeWidth={1.5} />
//           </button>
//         </div>

//         {/* CENTER */}
//         <div className="nav-center">
//           <Link to="/" className="logo">BVLGARI</Link>

//           {/* SEARCH BAR (CLICK ONLY) */}
//           <div
//             className="nav-search"
//             onClick={() => setOpenSearch(true)}
//           >
//             <input
//               type="text"
//               placeholder="Search products"
//               readOnly
//             />
//           </div>
//         </div>

//         {/* RIGHT */}
//         <div className="nav-right">
//           {/* ACCOUNT */}
//           <button
//             className="icon-btn"
//             onClick={() => navigate("/account")}
//           >
//             <User size={18} strokeWidth={1.5} />
//           </button>

//           {/* WISHLIST */}
//           <Link to="/wishlist" className="icon-btn">
//             <Heart size={18} strokeWidth={1.5} />
//             {wishlist.length > 0 && (
//               <span className="count">{wishlist.length}</span>
//             )}
//           </Link>

//           {/* CART */}
//           <Link to="/cart" className="icon-btn">
//             <ShoppingBag size={18} strokeWidth={1.5} />
//           </Link>
//         </div>
//       </nav>

//       {openMenu && (
//         <MenuDrawer onClose={() => setOpenMenu(false)} />
//       )}

//       {openSearch && (
//         <SearchOverlay
//           onClose={() => setOpenSearch(false)}
//           onSearch={(q) => navigate(`/search?query=${q}`)}
//         />
//       )}
//     </>
//   );
// };

// export default Navbar;




































// import { Link, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { Menu, Search, Heart, ShoppingBag, User } from "lucide-react";
// import SearchOverlay from "./SearchOverlay";
// import "./Navbar.css";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [openSearch, setOpenSearch] = useState(false);

//   return (
//     <>
//       <nav className="lux-nav">
//         {/* LEFT */}
//         <div className="lux-left">
//           <button className="lux-icon-btn">
//             <Menu size={20} strokeWidth={1.3} />
//           </button>
//         </div>

//         {/* CENTER */}
//         <div className="lux-center">
//           <Link to="/" className="lux-logo">BVLGARI</Link>
//         </div>

//         {/* RIGHT */}
//         <div className="lux-right">
//           <button
//             className="lux-icon-btn"
//             onClick={() => setOpenSearch(true)}
//           >
//             <Search size={18} strokeWidth={1.3} />
//           </button>

//           <button
//             className="lux-icon-btn"
//             onClick={() => navigate("/account")}
//           >
//             <User size={18} strokeWidth={1.3} />
//           </button>

//           <Link to="/wishlist" className="lux-icon-btn">
//             <Heart size={18} strokeWidth={1.3} />
//           </Link>

//           <Link to="/cart" className="lux-icon-btn">
//             <ShoppingBag size={18} strokeWidth={1.3} />
//           </Link>
//         </div>
//       </nav>

//       {/* SEARCH OVERLAY */}
//       {openSearch && (
//         <SearchOverlay
//           onClose={() => setOpenSearch(false)}
//           onSearch={(q) => navigate(`/search?query=${q}`)}
//         />
//       )}
//     </>
//   );
// };

// export default Navbar;




























import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, Search, Heart, ShoppingBag, User } from "lucide-react";

import MenuDrawer from "./MenuDrawer";
import SearchOverlay from "./SearchOverlay";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [openMenu, setOpenMenu] = useState(false);   // ✅ ADD THIS
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <>
      <nav className="lux-nav">
        {/* LEFT */}
        <div className="lux-left">
          <button
            className="lux-icon-btn"
            onClick={() => setOpenMenu(true)}   // ✅ MENU OPEN
          >
            <Menu size={20} strokeWidth={1.3} />
          </button>
        </div>

        {/* CENTER */}
        <div className="lux-center">
          <Link to="/" className="lux-logo">CorVex</Link>
        </div>

        {/* RIGHT */}
        <div className="lux-right">
          <button
            className="lux-icon-btn"
            onClick={() => setOpenSearch(true)}
          >
            <Search size={18} strokeWidth={1.3} />
          </button>

          <button
            className="lux-icon-btn"
            onClick={() => navigate("/account")}
          >
            <User size={18} strokeWidth={1.3} />
          </button>

          <Link to="/wishlist" className="lux-icon-btn">
            <Heart size={18} strokeWidth={1.3} />
          </Link>

          <Link to="/cart" className="lux-icon-btn">
            <ShoppingBag size={18} strokeWidth={1.3} />
          </Link>
        </div>
      </nav>

      {/* MENU DRAWER */}
      {openMenu && (
        <MenuDrawer onClose={() => setOpenMenu(false)} />
      )}

      {/* SEARCH OVERLAY */}
      {openSearch && (
        <SearchOverlay
          onClose={() => setOpenSearch(false)}
          onSearch={(q) => navigate(`/search?query=${q}`)}
        />
      )}
    </>
  );
};

export default Navbar;
