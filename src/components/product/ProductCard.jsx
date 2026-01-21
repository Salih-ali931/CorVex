

import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { useWishlist } from "../../context/WishlistContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const liked = isWishlisted(product.id);

  const images = Array.isArray(product.image)
    ? product.image
    : [product.image];

  const [activeImg, setActiveImg] = useState(0);

  return (
    <div className="product-card">
      <div className="product-img-box">
        <Link to={`/product/${product.id}`} className="product-link">
          {/* IMAGE 1 */}
          <img
            src={images[0]}
            alt={product.name}
            className={`img img-1 ${activeImg === 0 ? "show" : ""}`}
          />

          {/* IMAGE 2 */}
          {images[1] && (
            <img
              src={images[1]}
              alt="model"
              className={`img img-2 ${activeImg === 1 ? "show" : ""}`}
            />
          )}
        </Link>

        {/* ❤️ CLEAN LUCIDE HEART */}
        <button
          className={`wishlist-btn ${liked ? "active" : ""}`}
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product);
          }}
          aria-label="Wishlist"
        >
          <Heart size={20} strokeWidth={1.3} />
        </button>

        {/* 📱 MOBILE DOTS */}
        {images.length > 1 && (
          <div className="img-dots">
            <span
              className={activeImg === 0 ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActiveImg(0);
              }}
            />
            <span
              className={activeImg === 1 ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActiveImg(1);
              }}
            />
          </div>
        )}
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">₹{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
