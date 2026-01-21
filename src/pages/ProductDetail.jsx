import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

/* DATA */
import { menProducts } from "../data/menProducts";
import { womenProducts } from "../data/womenProducts";
import { limitedEdition } from "../data/LimitedEdition";

/* COMPONENTS */
import ProductGallery from "../components/product/ProductGallery";

import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const productId = Number(id);

  const allProducts = [
    ...menProducts,
    ...womenProducts,
    ...limitedEdition,
  ];

  const product = allProducts.find((p) => p.id === productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return <h2 className="not-found">Product Not Found</h2>;
  }

  const images = Array.isArray(product.image)
    ? product.image
    : [product.image];

  const [selectedSize, setSelectedSize] = useState(
    product.sizeOptions?.[0] || ""
  );

  return (
    <div className="pd-page">

      {/* LEFT – GALLERY */}
      <div className="pd-left">
        <ProductGallery images={images} />
      </div>

      {/* RIGHT – DETAILS */}
      <div className="pd-right">

        <h1 className="pd-name">{product.name}</h1>

        {product.category && (
          <p className="pd-category">{product.category}</p>
        )}

        {/* RATING */}
        {product.rating && (
          <div className="pd-rating">
            <span className="rating-badge">★ {product.rating}</span>
            <span className="rating-count">
              ({product.totalReviews || 0} Reviews)
            </span>
          </div>
        )}

        {/* PRICE */}
        <div className="pd-price">
          ₹{product.price}

          {product.originalPrice && (
            <span className="pd-original">
              ₹{product.originalPrice}
            </span>
          )}

          {product.discount && (
            <span className="pd-discount">
              {product.discount}
            </span>
          )}

          <div className="pd-tax">Inclusive of all taxes</div>
        </div>

        {/* SIZE */}
        {product.sizeOptions && (
          <div className="pd-size">
            <p>Select Size</p>
            <div className="size-options">
              {product.sizeOptions.map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? "active" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ACTIONS */}
        <div className="pd-actions">
          <button
            className="buy-now"
            onClick={() => {
              addToCart(product, 1, selectedSize);
              navigate("/cart");
            }}
          >
            BUY NOW
          </button>

          <button
            className="add-cart"
            onClick={() => addToCart(product, 1, selectedSize)}
          >
            ADD TO BAG
          </button>
        </div>

        {/* DELIVERY INFO */}
        <div className="pd-info">
          <p>✔ Free Delivery across India</p>
          <p>✔ Easy 7-Day Returns</p>
          <p>✔ 1 Year Warranty</p>
        </div>

        {/* DESCRIPTION */}
        <div className="pd-section">
          <h4>Description</h4>
          <p>
            {product.description ||
              "Crafted with premium materials and a refined finish for all-day comfort and modern style."}
          </p>
        </div>

        {/* HIGHLIGHTS */}
        <div className="pd-section">
          <h4>Highlights</h4>
          {product.lensColor && (
            <p><strong>Lens Color:</strong> {product.lensColor}</p>
          )}
          {product.frameColor && (
            <p><strong>Frame Color:</strong> {product.frameColor}</p>
          )}
          {product.fitType && (
            <p><strong>Fit:</strong> {product.fitType}</p>
          )}
          {product.faceShape && (
            <p>
              <strong>Ideal Face Shape:</strong>{" "}
              {product.faceShape.join(", ")}
            </p>
          )}
        </div>

        {/* FEATURES */}
        {product.features && (
          <div className="pd-section">
            <h4>Key Features</h4>
            <ul className="pd-list">
              {product.features.map((item, i) => (
                <li key={i}>✔ {item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* BEST FOR */}
        {product.bestFor && (
          <div className="pd-section">
            <h4>Best For</h4>
            <div className="pd-tags">
              {product.bestFor.map((item, i) => (
                <span key={i}>{item}</span>
              ))}
            </div>
          </div>
        )}

        {/* MATERIAL */}
        {product.material && (
          <div className="pd-section">
            <h4>Material</h4>
            <p>{product.material}</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductDetail;
