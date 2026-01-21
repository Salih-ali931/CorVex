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

  const removeWishlist = (e, id) => {
    e.preventDefault();      // 🔥 STOP LINK
    e.stopPropagation();     // 🔥 STOP CARD CLICK

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
                onClick={(e) => removeWishlist(e, item.id)}
                aria-label="Remove from wishlist"
              >
                ×
              </button>

              {/* PRODUCT CARD */}
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Wishlist;
