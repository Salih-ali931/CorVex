// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import "./Wishlist.css";

// const Wishlist = () => {
//   const [wishlist, setWishlist] = useState([]);
//   const [activeProduct, setActiveProduct] = useState(null);

//   const { addToCart } = useCart();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
//     setWishlist(saved);
//   }, []);

//   /* ✅ REMOVE FROM WISHLIST */
//   const removeWishlist = (id) => {
//     const updated = wishlist.filter((item) => item.id !== id);
//     setWishlist(updated);
//     localStorage.setItem("wishlist", JSON.stringify(updated));
//   };

//   /* ADD TO CART */
//   const addToBag = (product) => {
//     addToCart(product, 1);
//     setActiveProduct(null);
//     navigate("/cart");
//   };

//   return (
//     <div className="wishlist-wrapper">
//       <h1 className="wishlist-heading">My Wishlist</h1>

//       <div className="wishlist-grid">
//         {wishlist.map((item) => (
//           <div className="wishlist-item" key={item.id}>
            
//             {/* REMOVE BUTTON */}
//             <button
//               className="wish-remove"
//               onClick={() => removeWishlist(item.id)}
//             >
//               ×
//             </button>

//             <img
//               src={Array.isArray(item.image) ? item.image[0] : item.image}
//               alt={item.name}
//               onClick={() => setActiveProduct(item)}
//             />

//             <h3>{item.brand || "BVLGARI"}</h3>
//             <p>₹{item.price}</p>
//           </div>
//         ))}
//       </div>

//       {/* MODAL */}
//       {activeProduct && (
//         <div className="wishlist-modal">
//           <div className="modal-box">
//             <button
//               className="close-btn"
//               onClick={() => setActiveProduct(null)}
//             >
//               ✕
//             </button>

//             <div className="modal-left">
//               <img
//                 src={
//                   Array.isArray(activeProduct.image)
//                     ? activeProduct.image[0]
//                     : activeProduct.image
//                 }
//                 alt={activeProduct.name}
//               />
//             </div>

//             <div className="modal-right">
//               <h2>{activeProduct.brand || "BVLGARI"}</h2>
//               <p>{activeProduct.name}</p>

//               <h3>₹{activeProduct.price}</h3>
//               <p className="tax">(Inclusive of all taxes)</p>

//               <button
//                 className="add-bag-btn"
//                 onClick={() => addToBag(activeProduct)}
//               >
//                 ADD TO BAG
//               </button>

//               <button
//                 className="details-btn"
//                 onClick={() =>
//                   navigate(`/product/${activeProduct.id}`)
//                 }
//               >
//                 PRODUCT DETAILS
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Wishlist;



























// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import "./Wishlist.css";

// const Wishlist = () => {
//   const [wishlist, setWishlist] = useState([]);
//   const [activeProduct, setActiveProduct] = useState(null);

//   const { addToCart } = useCart();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
//     setWishlist(saved);
//   }, []);

//   const removeWishlist = (id) => {
//     const updated = wishlist.filter((item) => item.id !== id);
//     setWishlist(updated);
//     localStorage.setItem("wishlist", JSON.stringify(updated));
//   };

//   const addToBag = (product) => {
//     addToCart(product, 1);
//     navigate("/cart");
//   };

//   return (
//     <div className="wishlist-wrapper">
//       <h1 className="wishlist-heading">My Wishlist</h1>

//       {wishlist.length === 0 && (
//         <p className="empty-text">Your wishlist is empty</p>
//       )}

//       <div className="wishlist-grid">
//         {wishlist.map((item) => (
//           <div className="wishlist-card" key={item.id}>
//             <button
//               className="wish-remove"
//               onClick={() => removeWishlist(item.id)}
//             >
//               ×
//             </button>

//             <img
//               src={Array.isArray(item.image) ? item.image[0] : item.image}
//               alt={item.name}
//               onClick={() => setActiveProduct(item)}
//             />

//             <h3>{item.brand || "BVLGARI"}</h3>
//             <p className="price">₹{item.price}</p>
//           </div>
//         ))}
//       </div>

//       {/* MODAL */}
//       {activeProduct && (
//         <div className="wishlist-modal">
//           <div className="modal-box">
//             <button
//               className="close-btn"
//               onClick={() => setActiveProduct(null)}
//             >
//               ✕
//             </button>

//             <div className="modal-left">
//               <img
//                 src={
//                   Array.isArray(activeProduct.image)
//                     ? activeProduct.image[0]
//                     : activeProduct.image
//                 }
//                 alt={activeProduct.name}
//               />
//             </div>

//             <div className="modal-right">
//               <h2>{activeProduct.brand || "BVLGARI"}</h2>
//               <p>{activeProduct.name}</p>

//               <h3>₹{activeProduct.price}</h3>
//               <p className="tax">(Inclusive of all taxes)</p>

//               <button
//                 className="add-bag-btn"
//                 onClick={() => addToBag(activeProduct)}
//               >
//                 ADD TO BAG
//               </button>

//               <button
//                 className="details-btn"
//                 onClick={() =>
//                   navigate(`/product/${activeProduct.id}`)
//                 }
//               >
//                 PRODUCT DETAILS
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Wishlist;
import { useEffect, useState } from "react";
import Navbar from "../components/layout/Navbar";
import ProductCard from "../components/product/ProductCard";
import "./Wishlist.css";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(saved);
  }, []);

  const removeWishlist = (id) => {
    const updated = wishlist.filter(item => item.id !== id);
    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <>
      <Navbar />

      <section className="wishlist-page">
        <h1>My Wishlist</h1>

        {wishlist.length === 0 && (
          <p className="empty-text">Your wishlist is empty</p>
        )}

        <div className="wishlist-grid">
          {wishlist.map(item => (
            <div className="wishlist-card-wrapper" key={item.id}>
              {/* REMOVE BUTTON */}
              <button
                className="wishlist-remove"
                onClick={() => removeWishlist(item.id)}
              >
                ×
              </button>

              {/* SAME CARD AS ALL PRODUCTS */}
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Wishlist;
