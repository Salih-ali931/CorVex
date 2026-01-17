// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

// import { menProducts } from "../data/menProducts";
// import { womenProducts } from "../data/womenProducts";
// import { kidsProducts } from "../data/kidsProducts";
// import { opticalProducts } from "../data/opticalProducts";

// import "./ProductDetail.css";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const productId = Number(id);

//   const allProducts = [
//     ...menProducts,
//     ...womenProducts,
//     ...kidsProducts,
//     ...opticalProducts,
//   ];

//   const product = allProducts.find(p => p.id === productId);
//   if (!product) return <h2 className="not-found">Product Not Found</h2>;

//   const images = Array.isArray(product.image)
//     ? product.image
//     : [product.image];

//   /* ❤️ Wishlist state */
//   const [liked, setLiked] = useState(false);

//   /* Load wishlist status */
//   useEffect(() => {
//     const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     setLiked(wishlist.some(item => item.id === product.id));
//   }, [product.id]);

//   /* Toggle wishlist */
//   const toggleWishlist = () => {
//     let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

//     if (liked) {
//       wishlist = wishlist.filter(item => item.id !== product.id);
//     } else {
//       wishlist.push(product);
//     }

//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//     setLiked(!liked);
//   };

//   return (
//     <div className="pd-page">

//       {/* LEFT IMAGE SECTION */}
//       <div className="pd-left">
//         <div className="pd-thumbs">
//           {images.map((img, i) => (
//             <img key={i} src={img} alt="thumb" />
//           ))}
//         </div>

//         <div className="pd-main">
//           <img src={images[0]} alt={product.name} />

//           {/* ❤️ HEART BUTTON */}
//           <button
//             className={`pd-heart ${liked ? "active" : ""}`}
//             onClick={toggleWishlist}
//           >
//             ♥
//           </button>
//         </div>
//       </div>

//       {/* RIGHT INFO SECTION */}
//       <div className="pd-right">
//         <p className="pd-brand">{product.brand || "BVLGARI"}</p>
//         <h1 className="pd-title">{product.name}</h1>

//         <p className="pd-price">
//           ₹{product.price}
//           <span> Inclusive of all taxes</span>
//         </p>

//         <p className="pd-desc">
//           {product.description ||
//             "Luxury eyewear crafted with premium materials for modern elegance."}
//         </p>

//         {/* SIZE */}
//         <div className="pd-size">
//           <p>Select Size</p>
//           <button className="size-btn active">
//             {product.sizeOptions ? product.sizeOptions[0] : "One Size"}
//           </button>
//         </div>

//         {/* ACTION BUTTONS */}
//         <div className="pd-actions">
//           <button className="buy-now">BUY NOW</button>
//           <button className="add-bag">ADD TO BAG</button>
//         </div>

//         {/* DELIVERY */}
//         <div className="pd-delivery">
//           <h4>Delivery & Services</h4>
//           <ul>
//             <li>✔ Free delivery across India</li>
//             <li>✔ 15 days return / exchange</li>
//             <li>✔ Store pickup available</li>
//           </ul>
//         </div>

//         {/* PRODUCT DETAILS */}
//         <div className="pd-details">
//           <h4>Product Details</h4>
//           <ul>
//             <li><b>Material:</b> {product.material}</li>
//             <li><b>Frame Type:</b> Full Rim</li>
//             <li><b>Lens:</b> UV Protected</li>
//             <li><b>Style:</b> Luxury Fashion</li>
//           </ul>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default ProductDetail;
































// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useCart } from "../context/CartContext";

// import { menProducts } from "../data/menProducts";
// import { womenProducts } from "../data/womenProducts";
// import { kidsProducts } from "../data/kidsProducts";
// import { opticalProducts } from "../data/opticalProducts.js";

// import "./ProductDetail.css";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useCart();

//   const productId = Number(id);

//   const allProducts = [
//     ...menProducts,
//     ...womenProducts,
//     ...kidsProducts,
//     ...opticalProducts,
//   ];

//   const product = allProducts.find((p) => p.id === productId);
//   if (!product) return <h2>Product Not Found</h2>;

//   const images = Array.isArray(product.image)
//     ? product.image
//     : [product.image];

//   const [liked, setLiked] = useState(false);

//   useEffect(() => {
//     const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//     setLiked(wishlist.some((i) => i.id === product.id));
//   }, [product.id]);

//   const toggleWishlist = () => {
//     let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

//     if (liked) {
//       wishlist = wishlist.filter((i) => i.id !== product.id);
//     } else {
//       wishlist.push(product);
//     }

//     localStorage.setItem("wishlist", JSON.stringify(wishlist));
//     setLiked(!liked);
//   };

//   return (
//     <div className="pd-page">
//       <div className="pd-left">
//         <div className="pd-thumbs">
//           {images.map((img, i) => (
//             <img key={i} src={img} alt="thumb" />
//           ))}
//         </div>

//         <div className="pd-main">
//           <img src={images[0]} alt={product.name} />
//           <button
//             className={`pd-heart ${liked ? "active" : ""}`}
//             onClick={toggleWishlist}
//           >
//             ♥
//           </button>
//         </div>
//       </div>

//       <div className="pd-right">
//         <p className="pd-brand">{product.brand}</p>
//         <h1>{product.name}</h1>

//         <p className="pd-price">
//           ₹{product.price} <span>Inclusive of all taxes</span>
//         </p>

//         <div className="pd-actions">
//           {/* ✅ BUY NOW */}
//           <button
//             className="buy-now"
//             onClick={() => {
//               addToCart(product, 1);
//               navigate("/cart");
//             }}
//           >
//             BUY NOW
//           </button>

//           {/* ✅ ADD TO BAG */}
//           <button
//             className="add-bag"
//             onClick={() => addToCart(product, 1)}
//           >
//             ADD TO BAG
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;




















// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import { useWishlist } from "../context/WishlistContext";

// import { menProducts } from "../data/menProducts";
// import { womenProducts } from "../data/womenProducts";
// import { kidsProducts } from "../data/kidsProducts";
// import { opticalProducts } from "../data/opticalProducts";

// import "./ProductDetail.css";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const { addToCart } = useCart();
//   const { toggleWishlist, isWishlisted } = useWishlist();

//   const productId = Number(id);

//   const allProducts = [
//     ...menProducts,
//     ...womenProducts,
//     ...kidsProducts,
//     ...opticalProducts,
//   ];

//   const product = allProducts.find(p => p.id === productId);
//   if (!product) return <h2>Product Not Found</h2>;

//   const images = Array.isArray(product.image)
//     ? product.image
//     : [product.image];

//   const [mainImg, setMainImg] = useState(images[0]);
//   const [selectedSize, setSelectedSize] = useState(
//     product.sizeOptions?.[0]
//   );

//   const handleAddToBag = () => {
//     addToCart(product, 1);
//     alert("Added to Bag 🛒"); // ✅ feedback (important)
//   };

//   const handleBuyNow = () => {
//     addToCart(product, 1);
//     navigate("/cart"); // ✅ safe route
//   };

//   return (
//     <div className="tc-pd">

//       {/* LEFT IMAGE SECTION */}
//       <div className="tc-image-section">

//         {/* THUMBNAILS */}
//         <div className="tc-thumbs">
//           {images.map((img, i) => (
//             <img
//               key={i}
//               src={img}
//               alt="thumb"
//               className={mainImg === img ? "active" : ""}
//               onClick={() => setMainImg(img)}
//             />
//           ))}
//         </div>

//         {/* MAIN IMAGE */}
//         <div className="tc-main-img">

//           {/* ❤️ WISHLIST */}
//           <button
//             className={`tc-love ${isWishlisted(product.id) ? "active" : ""}`}
//             onClick={() => toggleWishlist(product)}
//           >
//             <svg viewBox="0 0 24 24">
//               <path d="M12 21s-6.7-4.35-9.33-7.1C.9 11.87.5 9.4 2.05 7.85
//               3.6 6.3 6.05 6.7 7.6 8.25L12 12.65l4.4-4.4
//               c1.55-1.55 4-1.95 5.55-.4
//               1.55 1.55 1.15 4.02-.62 6.05
//               C18.7 16.65 12 21 12 21z"/>
//             </svg>
//           </button>

//           <img src={mainImg} alt={product.name} />
//         </div>
//       </div>

//       {/* RIGHT DETAILS */}
//       <div className="tc-details">
//         <h1>{product.name}</h1>
//         <p className="brand">{product.brand}</p>

//         <p className="price">
//           ₹{product.price}
//           <span> Inclusive of all taxes</span>
//         </p>

//         {/* SIZE */}
//         {product.sizeOptions && (
//           <div className="tc-size">
//             <p>Select Size</p>
//             <div className="size-box">
//               {product.sizeOptions.map(size => (
//                 <button
//                   key={size}
//                   className={selectedSize === size ? "active" : ""}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* ACTIONS */}
//         <button className="tc-buy" onClick={handleBuyNow}>
//           Buy Now
//         </button>

//         <button className="tc-cart" onClick={handleAddToBag}>
//           Add to Bag
//         </button>

//         {/* DELIVERY */}
//         <div className="tc-delivery">
//           <p>✔ All India Free Shipping</p>
//           <p>✔ Easy Returns Available</p>
//           <p>✔ 1 Year Warranty</p>
//         </div>

//         {/* DETAILS */}
//         <div className="tc-specs">
//           <h4>Product Details</h4>
//           <ul>
//             <li>Brand: {product.brand}</li>
//             <li>Material: {product.material}</li>
//             <li>UV Protection: Yes</li>
//             <li>Frame Type: Full Rim</li>
//           </ul>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default ProductDetail;



























































// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import { useWishlist } from "../context/WishlistContext";

// /* ✅ DATA (ONLY MEN + WOMEN) */
// import { menProducts } from "../data/menProducts";
// import { womenProducts } from "../data/womenProducts";
// import { limitedEdition } from "../data/LimitedEdition";
// /* ✅ COMPONENTS */
// import ProductGallery from "../components/product/ProductGallery";
// import ProductReview from "../components/product/ProductReview";
// import ProductSpecs from "../components/product/ProductSpecs";

// import "./ProductDetail.css";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const { addToCart } = useCart();
//   const { toggleWishlist, isWishlisted } = useWishlist();

//   const productId = Number(id);

//   /* ✅ ONLY MEN + WOMEN PRODUCTS */
//   const allProducts = [
//     ...menProducts,
//     ...womenProducts,
//      ...limitedEdition,
//   ];

//   const product = allProducts.find(p => p.id === productId);
//   if (!product) return <h2>Product Not Found</h2>;

//   const images = Array.isArray(product.image)
//     ? product.image
//     : [product.image];

//   const [selectedSize, setSelectedSize] = useState(
//     product.sizeOptions?.[0]
//   );

//   const handleAddToBag = () => {
//     addToCart(product, 1);
//     alert("Added to Bag 🛒");
//   };

//   const handleBuyNow = () => {
//     addToCart(product, 1);
//     navigate("/cart");
//   };

//   return (
//     <div className="tc-pd">

//       {/* LEFT : GALLERY */}
//       <div className="tc-image-section">
//         <ProductGallery images={images} />
//       </div>

//       {/* RIGHT : DETAILS */}
//       <div className="tc-details">
//         <h1>{product.name}</h1>
//         <p className="brand">{product.brand}</p>

//         <ProductReview
//           rating={product.rating}
//           totalReviews={product.totalReviews}
//         />

//         <p className="price">
//           ₹{product.price}
//           <span> Inclusive of all taxes</span>
//         </p>

//         {/* SIZE */}
//         {product.sizeOptions && (
//           <div className="tc-size">
//             <p>Select Size</p>
//             <div className="size-box">
//               {product.sizeOptions.map(size => (
//                 <button
//                   key={size}
//                   className={selectedSize === size ? "active" : ""}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* ACTIONS */}
//         <button className="tc-buy" onClick={handleBuyNow}>
//           Buy Now
//         </button>

//         <button className="tc-cart" onClick={handleAddToBag}>
//           Add to Bag
//         </button>

//         {/* DELIVERY */}
//         <div className="tc-delivery">
//           <p>✔ All India Free Shipping</p>
//           <p>✔ Easy Returns Available</p>
//           <p>✔ 1 Year Warranty</p>
//         </div>

//         {/* SPECS */}
//         <ProductSpecs
//           material={product.material}
//           sizeOptions={product.sizeOptions}
//         />
//       </div>

//     </div>
//   );
// };

// export default ProductDetail;




























// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// /* DATA */
// import { menProducts } from "../data/menProducts";
// import { womenProducts } from "../data/womenProducts";
// import { limitedEdition } from "../data/LimitedEdition";

// /* COMPONENTS */
// import ProductGallery from "../components/product/ProductGallery";

// import "./ProductDetail.css";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useCart();

//   const productId = Number(id);

//   const allProducts = [
//     ...menProducts,
//     ...womenProducts,
//     ...limitedEdition,
//   ];

//   const product = allProducts.find(p => p.id === productId);
//   if (!product) return <h2 className="not-found">Product Not Found</h2>;

//   const images = Array.isArray(product.image)
//     ? product.image
//     : [product.image];

//   const [selectedSize, setSelectedSize] = useState(
//     product.sizeOptions?.[0]
//   );

//   return (
//     <div className="pd-page">

//       {/* LEFT */}
//       <div className="pd-left">
//         <ProductGallery images={images} />
//       </div>

//       {/* RIGHT */}
//       <div className="pd-right">
//         <h1 className="pd-name">{product.name}</h1>
//         <p className="pd-brand">{product.brand}</p>

//         {/* RATING */}
//         <div className="pd-rating">
//           <span className="rating-badge">
//             ★ {product.rating}
//           </span>
//           <span className="rating-count">
//             ({product.totalReviews} Reviews)
//           </span>
//         </div>

//         <p className="pd-price">
//           ₹{product.price}
//           <span> Inclusive of all taxes</span>
//         </p>

//         {/* SIZE */}
//         {product.sizeOptions && (
//           <div className="pd-size">
//             <p>Select Size</p>
//             <div className="size-options">
//               {product.sizeOptions.map(size => (
//                 <button
//                   key={size}
//                   className={selectedSize === size ? "active" : ""}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* ACTIONS */}
//         <div className="pd-actions">
//           <button
//             className="buy-now"
//             onClick={() => {
//               addToCart(product, 1);
//               navigate("/cart");
//             }}
//           >
//             Buy Now
//           </button>

//           <button
//             className="add-cart"
//             onClick={() => addToCart(product, 1)}
//           >
//             Add to Bag
//           </button>
//         </div>

//         {/* DELIVERY */}
//         <div className="pd-info">
//           <p>✔ Free Delivery across India</p>
//           <p>✔ Easy 7-Day Returns</p>
//           <p>✔ 1 Year Warranty</p>
//         </div>

//         {/* DESCRIPTION */}
//         <div className="pd-description">
//           <h4>Description</h4>
//           <p>
//             {product.description
//               ? product.description
//               : "Crafted with premium materials and a refined finish, this product offers exceptional comfort, durability, and modern style. Designed to elevate everyday wear with a luxury touch."}
//           </p>
//         </div>

//         {/* MATERIAL */}
//         <div className="pd-material">
//           <h4>Product Details</h4>
//           <p>{product.material}</p>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default ProductDetail;








































































































































































// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import { useWishlist } from "../context/WishlistContext";

// /* DATA */
// import { menProducts } from "../data/menProducts";
// import { womenProducts } from "../data/womenProducts";
// import { limitedEdition } from "../data/LimitedEdition";

// /* COMPONENTS */
// import ProductGallery from "../components/product/ProductGallery";
// import ProductReview from "../components/product/ProductReview";
// import ProductSpecs from "../components/product/ProductSpecs";

// import "./ProductDetail.css";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const { addToCart } = useCart();
//   const { toggleWishlist, isWishlisted } = useWishlist();

//   const productId = Number(id);

//   /* ALL PRODUCTS */
//   const allProducts = [
//     ...menProducts,
//     ...womenProducts,
//     ...limitedEdition,
//   ];

//   const product = allProducts.find(p => p.id === productId);
//   if (!product) return <h2>Product Not Found</h2>;

//   /* IMAGE ARRAY SAFE */
//   const images = Array.isArray(product.image)
//     ? product.image
//     : [product.image];

//   /* SIZE */
//   const [selectedSize, setSelectedSize] = useState(
//     product.sizeOptions?.[0] || ""
//   );

//   /* ADD TO BAG */
//   const handleAddToBag = () => {
//     if (product.sizeOptions && !selectedSize) {
//       alert("Please select size");
//       return;
//     }

//     addToCart(product, 1, selectedSize);
//     alert("Added to Bag 🛒");
//   };

//   /* BUY NOW */
//   const handleBuyNow = () => {
//     if (product.sizeOptions && !selectedSize) {
//       alert("Please select size");
//       return;
//     }

//     addToCart(product, 1, selectedSize);
//     navigate("/cart");
//   };

//   return (
//     <div className="tc-pd">

//       {/* LEFT : IMAGES */}
//       <div className="tc-image-section">
//         <ProductGallery images={images} />
//       </div>

//       {/* RIGHT : DETAILS */}
//       <div className="tc-details">

//         <h1>{product.name}</h1>
//         <p className="brand">{product.brand}</p>

//         <ProductReview
//           rating={product.rating}
//           totalReviews={product.totalReviews}
//         />

//         <p className="price">
//           ₹{product.price}
//           <span> Inclusive of all taxes</span>
//         </p>

//         {/* SIZE */}
//         {product.sizeOptions && (
//           <div className="tc-size">
//             <p>Select Size</p>
//             <div className="size-box">
//               {product.sizeOptions.map(size => (
//                 <button
//                   key={size}
//                   className={selectedSize === size ? "active" : ""}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* ACTIONS */}
//         <button className="tc-buy" onClick={handleBuyNow}>
//           Buy Now
//         </button>

//         <button className="tc-cart" onClick={handleAddToBag}>
//           Add to Bag
//         </button>

//         {/* DELIVERY */}
//         <div className="tc-delivery">
//           <p>✔ All India Free Shipping</p>
//           <p>✔ Easy Returns Available</p>
//           <p>✔ 1 Year Warranty</p>
//         </div>

//         {/* SPECS */}
//         <ProductSpecs
//           material={product.material}
//           sizeOptions={product.sizeOptions}
//         />

//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

















// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// /* DATA */
// import { menProducts } from "../data/menProducts";
// import { womenProducts } from "../data/womenProducts";
// import { limitedEdition } from "../data/LimitedEdition";

// /* COMPONENTS */
// import ProductGallery from "../components/product/ProductGallery";
// import ProductReview from "../components/product/ProductReview";
// import ProductSpecs from "../components/product/ProductSpecs";

// import "./ProductDetail.css";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useCart();

//   const productId = Number(id);

//   /* ALL PRODUCTS */
//   const allProducts = [
//     ...menProducts,
//     ...womenProducts,
//     ...limitedEdition,
//   ];

//   const product = allProducts.find((p) => p.id === productId);
//   if (!product) return <h2>Product Not Found</h2>;

//   /* IMAGE SAFE */
//   const images = Array.isArray(product.image)
//     ? product.image
//     : [product.image];

//   /* SIZE (OPTIONAL) */
//   const [selectedSize, setSelectedSize] = useState(
//     product.sizeOptions?.[0] || ""
//   );

//   /* ADD TO BAG */
//   const handleAddToBag = () => {
//     addToCart(product, 1, selectedSize);
//     alert("Added to Bag 🛒");
//   };

//   /* BUY NOW */
//   const handleBuyNow = () => {
//     addToCart(product, 1, selectedSize);
//     navigate("/cart");
//   };

//   return (
//     <div className="tc-pd">
//       {/* LEFT */}
//       <div className="tc-image-section">
//         <ProductGallery images={images} />
//       </div>

//       {/* RIGHT */}
//       <div className="tc-details">
//         <h1>{product.name}</h1>
//         <p className="brand">{product.brand}</p>

//         <ProductReview
//           rating={product.rating}
//           totalReviews={product.totalReviews}
//         />

//         <p className="price">
//           ₹{product.price}
//           <span> Inclusive of all taxes</span>
//         </p>

//         {/* SIZE (SHOW ONLY IF EXISTS) */}
//         {product.sizeOptions && (
//           <div className="tc-size">
//             <p>Select Size</p>
//             <div className="size-box">
//               {product.sizeOptions.map((size) => (
//                 <button
//                   key={size}
//                   className={selectedSize === size ? "active" : ""}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* BUTTONS */}
//         <button className="tc-buy" onClick={handleBuyNow}>
//           Buy Now
//         </button>

//         <button className="tc-cart" onClick={handleAddToBag}>
//           Add to Bag
//         </button>

//         {/* DELIVERY */}
//         <div className="tc-delivery">
//           <p>✔ All India Free Shipping</p>
//           <p>✔ Easy Returns Available</p>
//           <p>✔ 1 Year Warranty</p>
//         </div>

//         {/* SPECS */}
//         <ProductSpecs
//           material={product.material}
//           sizeOptions={product.sizeOptions}
//         />
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;













































// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// /* DATA */
// import { menProducts } from "../data/menProducts";
// import { womenProducts } from "../data/womenProducts";
// import { limitedEdition } from "../data/LimitedEdition";

// /* COMPONENTS */
// import ProductGallery from "../components/product/ProductGallery";

// import "./ProductDetail.css";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useCart();

//   const productId = Number(id);

//   const allProducts = [
//     ...menProducts,
//     ...womenProducts,
//     ...limitedEdition,
//   ];

//   const product = allProducts.find(p => p.id === productId);
//   if (!product) return <h2 className="not-found">Product Not Found</h2>;

//   const images = Array.isArray(product.image)
//     ? product.image
//     : [product.image];

//   const [selectedSize, setSelectedSize] = useState(
//     product.sizeOptions?.[0] || ""
//   );

//   return (
//     <div className="pd-page">

//       {/* LEFT */}
//       <div className="pd-left">
//         <ProductGallery images={images} />
//       </div>

//       {/* RIGHT */}
//       <div className="pd-right">

//         <h1 className="pd-name">{product.name}</h1>

//         {product.category && (
//           <p className="pd-category">{product.category}</p>
//         )}

//         {product.rating && (
//           <div className="pd-rating">
//             <span className="rating-badge">★ {product.rating}</span>
//             <span className="rating-count">
//               ({product.totalReviews || 0} Reviews)
//             </span>
//           </div>
//         )}

//         <div className="pd-price">
//           ₹{product.price}
//           {product.originalPrice && (
//             <span className="pd-original">₹{product.originalPrice}</span>
//           )}
//           {product.discount && (
//             <span className="pd-discount">{product.discount}</span>
//           )}
//           <div className="pd-tax">Inclusive of all taxes</div>
//         </div>

//         {product.sizeOptions && (
//           <div className="pd-size">
//             <p>Select Size</p>
//             <div className="size-options">
//               {product.sizeOptions.map(size => (
//                 <button
//                   key={size}
//                   className={selectedSize === size ? "active" : ""}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         <div className="pd-actions">
//           <button
//             className="buy-now"
//             onClick={() => {
//               addToCart(product, 1, selectedSize);
//               navigate("/cart");
//             }}
//           >
//             Buy Now
//           </button>

//           <button
//             className="add-cart"
//             onClick={() => addToCart(product, 1, selectedSize)}
//           >
//             Add to Bag
//           </button>
//         </div>

//         <div className="pd-info">
//           <p>✔ Free Delivery across India</p>
//           <p>✔ Easy 7-Day Returns</p>
//           <p>✔ 1 Year Warranty</p>
//         </div>

//         <div className="pd-section">
//           <h4>Description</h4>
//           <p>{product.description}</p>
//         </div>

//         <div className="pd-section">
//           <h4>Highlights</h4>
//           {product.lensColor && <p><b>Lens Color:</b> {product.lensColor}</p>}
//           {product.frameColor && <p><b>Frame Color:</b> {product.frameColor}</p>}
//           {product.fitType && <p><b>Fit:</b> {product.fitType}</p>}
//           {product.faceShape && (
//             <p><b>Face Shape:</b> {product.faceShape.join(", ")}</p>
//           )}
//         </div>

//         {product.features && (
//           <div className="pd-section">
//             <h4>Key Features</h4>
//             <ul className="pd-list">
//               {product.features.map((f, i) => (
//                 <li key={i}>✔ {f}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {product.bestFor && (
//           <div className="pd-section">
//             <h4>Best For</h4>
//             <div className="pd-tags">
//               {product.bestFor.map((b, i) => (
//                 <span key={i}>{b}</span>
//               ))}
//             </div>
//           </div>
//         )}

//         {product.material && (
//           <div className="pd-section">
//             <h4>Material</h4>
//             <p>{product.material}</p>
//           </div>
//         )}

//         {/* ================= RECOMMENDED PRODUCTS ================= */}
//         <div className="pd-section">
//           <h4>You may also like</h4>

//           <div className="recommend-grid">
//             {allProducts
//               .filter(item => item.id !== product.id)
//               .slice(0, 4)
//               .map(item => (
//                 <div
//                   key={item.id}
//                   className="recommend-card"
//                   onClick={() => navigate(`/product/${item.id}`)}
//                 >
//                   <div className="recommend-img">
//                     <img src={item.image[0]} alt={item.name} />
//                   </div>

//                   <div className="recommend-info">
//                     <p className="recommend-name">{item.name}</p>
//                     <p className="recommend-price">₹{item.price}</p>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

















// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// /* DATA */
// import { menProducts } from "../data/menProducts";
// import { womenProducts } from "../data/womenProducts";
// import { limitedEdition } from "../data/LimitedEdition";

// /* COMPONENTS */
// import ProductGallery from "../components/product/ProductGallery";

// import "./ProductDetail.css";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useCart();

//   const productId = Number(id);

//   const allProducts = [...menProducts, ...womenProducts, ...limitedEdition];

//   const product = allProducts.find(p => p.id === productId);
//   if (!product) return <h2 className="not-found">Product Not Found</h2>;

//   const images = Array.isArray(product.image)
//     ? product.image
//     : [product.image];

//   const [selectedSize, setSelectedSize] = useState(
//     product.sizeOptions?.[0] || ""
//   );

//   return (
//     <>
//       {/* ================= PRODUCT DETAIL ================= */}
//       <div className="pd-page">
//         {/* LEFT */}
//         <div className="pd-left">
//           <ProductGallery images={images} />
//         </div>

//         {/* RIGHT */}
//         <div className="pd-right">
//           <h1 className="pd-name">{product.name}</h1>

//           <p className="pd-category">{product.category}</p>

//           {product.rating && (
//             <div className="pd-rating">
//               <span className="rating-badge">★ {product.rating}</span>
//               <span className="rating-count">
//                 ({product.totalReviews} Reviews)
//               </span>
//             </div>
//           )}

//           <div className="pd-price">
//             ₹{product.price}
//             {product.originalPrice && (
//               <span className="pd-original">₹{product.originalPrice}</span>
//             )}
//             {product.discount && (
//               <span className="pd-discount">{product.discount}</span>
//             )}
//             <div className="pd-tax">Inclusive of all taxes</div>
//           </div>

//           {/* SIZE */}
//           {product.sizeOptions && (
//             <div className="pd-size">
//               <p>Select Size</p>
//               <div className="size-options">
//                 {product.sizeOptions.map(size => (
//                   <button
//                     key={size}
//                     className={selectedSize === size ? "active" : ""}
//                     onClick={() => setSelectedSize(size)}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* ACTIONS */}
//           <div className="pd-actions">
//             <button
//               className="buy-now"
//               onClick={() => {
//                 addToCart(product, 1, selectedSize);
//                 navigate("/cart");
//               }}
//             >
//               Buy Now
//             </button>

//             <button
//               className="add-cart"
//               onClick={() => addToCart(product, 1, selectedSize)}
//             >
//               Add to Bag
//             </button>
//           </div>

//           <div className="pd-info">
//             <p>✔ Free Delivery across India</p>
//             <p>✔ Easy 7-Day Returns</p>
//             <p>✔ 1 Year Warranty</p>
//           </div>

//           <div className="pd-section">
//             <h4>Description</h4>
//             <p>{product.description}</p>
//           </div>
//         </div>
//       </div>

//       {/* ================= RECOMMENDED PRODUCTS ================= */}
//       <section className="recommended-section">
//         <h3 className="recommended-title">You may also like</h3>

//         <div className="recommend-grid">
//           {allProducts
//             .filter(item => item.id !== product.id)
//             .slice(0, 4)
//             .map(item => (
//               <div
//                 key={item.id}
//                 className="recommend-card"
//                 onClick={() => navigate(`/product/${item.id}`)}
//               >
//                 <div className="recommend-img">
//                   <img src={item.image[0]} alt={item.name} />
//                 </div>

//                 <div className="recommend-info">
//                   <p className="recommend-name">{item.name}</p>
//                   <p className="recommend-price">₹{item.price}</p>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default ProductDetail;

















































// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// /* DATA */
// import { menProducts } from "../data/menProducts";
// import { womenProducts } from "../data/womenProducts";
// import { limitedEdition } from "../data/LimitedEdition";

// /* COMPONENTS */
// import ProductGallery from "../components/product/ProductGallery";

// import "./ProductDetail.css";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useCart();

//   const productId = Number(id);

//   const allProducts = [
//     ...menProducts,
//     ...womenProducts,
//     ...limitedEdition,
//   ];

//   const product = allProducts.find(p => p.id === productId);
//   if (!product) return <h2 className="not-found">Product Not Found</h2>;

//   const images = Array.isArray(product.image)
//     ? product.image
//     : [product.image];

//   const [selectedSize, setSelectedSize] = useState(
//     product.sizeOptions?.[0] || ""
//   );

//   return (
//     <div className="pd-page">

//       {/* LEFT */}
//       <div className="pd-left">
//         <ProductGallery images={images} />
//       </div>

//       {/* RIGHT */}
//       <div className="pd-right">

//         <h1 className="pd-name">{product.name}</h1>

//         {product.category && (
//           <p className="pd-category">{product.category}</p>
//         )}

//         {/* RATING */}
//         {product.rating && (
//           <div className="pd-rating">
//             <span className="rating-badge">★ {product.rating}</span>
//             <span className="rating-count">
//               ({product.totalReviews || 0} Reviews)
//             </span>
//           </div>
//         )}

//         {/* PRICE */}
//         <div className="pd-price">
//           ₹{product.price}

//           {product.originalPrice && (
//             <span className="pd-original">
//               ₹{product.originalPrice}
//             </span>
//           )}

//           {product.discount && (
//             <span className="pd-discount">
//               {product.discount}
//             </span>
//           )}

//           <div className="pd-tax">Inclusive of all taxes</div>
//         </div>

//         {/* SIZE */}
//         {product.sizeOptions && (
//           <div className="pd-size">
//             <p>Select Size</p>
//             <div className="size-options">
//               {product.sizeOptions.map(size => (
//                 <button
//                   key={size}
//                   className={selectedSize === size ? "active" : ""}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* ACTIONS */}
//         <div className="pd-actions">
//           <button
//             className="buy-now"
//             onClick={() => {
//               addToCart(product, 1, selectedSize);
//               navigate("/cart");
//             }}
//           >
//             Buy Now
//           </button>

//           <button
//             className="add-cart"
//             onClick={() => addToCart(product, 1, selectedSize)}
//           >
//             Add to Bag
//           </button>
//         </div>

//         {/* DELIVERY */}
//         <div className="pd-info">
//           <p>✔ Free Delivery across India</p>
//           <p>✔ Easy 7-Day Returns</p>
//           <p>✔ 1 Year Warranty</p>
//         </div>

//         {/* DESCRIPTION */}
//         <div className="pd-section">
//           <h4>Description</h4>
//           <p>
//             {product.description ||
//               "Crafted with premium materials and a refined finish for all-day comfort and modern style."}
//           </p>
//         </div>

//         {/* HIGHLIGHTS */}
//         <div className="pd-section">
//           <h4>Highlights</h4>
//           {product.lensColor && <p><strong>Lens Color:</strong> {product.lensColor}</p>}
//           {product.frameColor && <p><strong>Frame Color:</strong> {product.frameColor}</p>}
//           {product.fitType && <p><strong>Fit:</strong> {product.fitType}</p>}
//           {product.faceShape && (
//             <p><strong>Ideal Face Shape:</strong> {product.faceShape.join(", ")}</p>
//           )}
//         </div>

//         {/* FEATURES */}
//         {product.features && (
//           <div className="pd-section">
//             <h4>Key Features</h4>
//             <ul className="pd-list">
//               {product.features.map((item, i) => (
//                 <li key={i}>✔ {item}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {/* BEST FOR */}
//         {product.bestFor && (
//           <div className="pd-section">
//             <h4>Best For</h4>
//             <div className="pd-tags">
//               {product.bestFor.map((item, i) => (
//                 <span key={i}>{item}</span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* MATERIAL */}
//         {product.material && (
//           <div className="pd-section">
//             <h4>Material</h4>
//             <p>{product.material}</p>
//           </div>
//         )}

//       </div>
//     </div>
//   );
// };

// export default ProductDetail;







































































































































































// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import { useWishlist } from "../context/WishlistContext";

// /* DATA */
// import { menProducts } from "../data/menProducts";
// import { womenProducts } from "../data/womenProducts";
// import { limitedEdition } from "../data/LimitedEdition";

// /* COMPONENTS */
// import ProductGallery from "../components/product/ProductGallery";
// import ProductReview from "../components/product/ProductReview";
// import ProductSpecs from "../components/product/ProductSpecs";

// import "./ProductDetail.css";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const { addToCart } = useCart();
//   const { toggleWishlist, isWishlisted } = useWishlist();

//   const productId = Number(id);

//   /* ALL PRODUCTS */
//   const allProducts = [
//     ...menProducts,
//     ...womenProducts,
//     ...limitedEdition,
//   ];

//   const product = allProducts.find(p => p.id === productId);
//   if (!product) return <h2>Product Not Found</h2>;

//   /* IMAGE ARRAY SAFE */
//   const images = Array.isArray(product.image)
//     ? product.image
//     : [product.image];

//   /* SIZE */
//   const [selectedSize, setSelectedSize] = useState(
//     product.sizeOptions?.[0] || ""
//   );

//   /* ADD TO BAG */
//   const handleAddToBag = () => {
//     if (product.sizeOptions && !selectedSize) {
//       alert("Please select size");
//       return;
//     }

//     addToCart(product, 1, selectedSize);
//     alert("Added to Bag 🛒");
//   };

//   /* BUY NOW */
//   const handleBuyNow = () => {
//     if (product.sizeOptions && !selectedSize) {
//       alert("Please select size");
//       return;
//     }

//     addToCart(product, 1, selectedSize);
//     navigate("/cart");
//   };

//   return (
//     <div className="tc-pd">

//       {/* LEFT : IMAGES */}
//       <div className="tc-image-section">
//         <ProductGallery images={images} />
//       </div>

//       {/* RIGHT : DETAILS */}
//       <div className="tc-details">

//         <h1>{product.name}</h1>
//         <p className="brand">{product.brand}</p>

//         <ProductReview
//           rating={product.rating}
//           totalReviews={product.totalReviews}
//         />

//         <p className="price">
//           ₹{product.price}
//           <span> Inclusive of all taxes</span>
//         </p>

//         {/* SIZE */}
//         {product.sizeOptions && (
//           <div className="tc-size">
//             <p>Select Size</p>
//             <div className="size-box">
//               {product.sizeOptions.map(size => (
//                 <button
//                   key={size}
//                   className={selectedSize === size ? "active" : ""}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* ACTIONS */}
//         <button className="tc-buy" onClick={handleBuyNow}>
//           Buy Now
//         </button>

//         <button className="tc-cart" onClick={handleAddToBag}>
//           Add to Bag
//         </button>

//         {/* DELIVERY */}
//         <div className="tc-delivery">
//           <p>✔ All India Free Shipping</p>
//           <p>✔ Easy Returns Available</p>
//           <p>✔ 1 Year Warranty</p>
//         </div>

//         {/* SPECS */}
//         <ProductSpecs
//           material={product.material}
//           sizeOptions={product.sizeOptions}
//         />

//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

















// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// /* DATA */
// import { menProducts } from "../data/menProducts";
// import { womenProducts } from "../data/womenProducts";
// import { limitedEdition } from "../data/LimitedEdition";

// /* COMPONENTS */
// import ProductGallery from "../components/product/ProductGallery";
// import ProductReview from "../components/product/ProductReview";
// import ProductSpecs from "../components/product/ProductSpecs";

// import "./ProductDetail.css";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useCart();

//   const productId = Number(id);

//   /* ALL PRODUCTS */
//   const allProducts = [
//     ...menProducts,
//     ...womenProducts,
//     ...limitedEdition,
//   ];

//   const product = allProducts.find((p) => p.id === productId);
//   if (!product) return <h2>Product Not Found</h2>;

//   /* IMAGE SAFE */
//   const images = Array.isArray(product.image)
//     ? product.image
//     : [product.image];

//   /* SIZE (OPTIONAL) */
//   const [selectedSize, setSelectedSize] = useState(
//     product.sizeOptions?.[0] || ""
//   );

//   /* ADD TO BAG */
//   const handleAddToBag = () => {
//     addToCart(product, 1, selectedSize);
//     alert("Added to Bag 🛒");
//   };

//   /* BUY NOW */
//   const handleBuyNow = () => {
//     addToCart(product, 1, selectedSize);
//     navigate("/cart");
//   };

//   return (
//     <div className="tc-pd">
//       {/* LEFT */}
//       <div className="tc-image-section">
//         <ProductGallery images={images} />
//       </div>

//       {/* RIGHT */}
//       <div className="tc-details">
//         <h1>{product.name}</h1>
//         <p className="brand">{product.brand}</p>

//         <ProductReview
//           rating={product.rating}
//           totalReviews={product.totalReviews}
//         />

//         <p className="price">
//           ₹{product.price}
//           <span> Inclusive of all taxes</span>
//         </p>

//         {/* SIZE (SHOW ONLY IF EXISTS) */}
//         {product.sizeOptions && (
//           <div className="tc-size">
//             <p>Select Size</p>
//             <div className="size-box">
//               {product.sizeOptions.map((size) => (
//                 <button
//                   key={size}
//                   className={selectedSize === size ? "active" : ""}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* BUTTONS */}
//         <button className="tc-buy" onClick={handleBuyNow}>
//           Buy Now
//         </button>

//         <button className="tc-cart" onClick={handleAddToBag}>
//           Add to Bag
//         </button>

//         {/* DELIVERY */}
//         <div className="tc-delivery">
//           <p>✔ All India Free Shipping</p>
//           <p>✔ Easy Returns Available</p>
//           <p>✔ 1 Year Warranty</p>
//         </div>

//         {/* SPECS */}
//         <ProductSpecs
//           material={product.material}
//           sizeOptions={product.sizeOptions}
//         />
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;













































// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// /* DATA */
// import { menProducts } from "../data/menProducts";
// import { womenProducts } from "../data/womenProducts";
// import { limitedEdition } from "../data/LimitedEdition";

// /* COMPONENTS */
// import ProductGallery from "../components/product/ProductGallery";

// import "./ProductDetail.css";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useCart();

//   const productId = Number(id);

//   const allProducts = [
//     ...menProducts,
//     ...womenProducts,
//     ...limitedEdition,
//   ];

//   const product = allProducts.find(p => p.id === productId);
//   if (!product) return <h2 className="not-found">Product Not Found</h2>;

//   const images = Array.isArray(product.image)
//     ? product.image
//     : [product.image];

//   const [selectedSize, setSelectedSize] = useState(
//     product.sizeOptions?.[0] || ""
//   );

//   return (
//     <div className="pd-page">

//       {/* LEFT */}
//       <div className="pd-left">
//         <ProductGallery images={images} />
//       </div>

//       {/* RIGHT */}
//       <div className="pd-right">

//         <h1 className="pd-name">{product.name}</h1>

//         {product.category && (
//           <p className="pd-category">{product.category}</p>
//         )}

//         {product.rating && (
//           <div className="pd-rating">
//             <span className="rating-badge">★ {product.rating}</span>
//             <span className="rating-count">
//               ({product.totalReviews || 0} Reviews)
//             </span>
//           </div>
//         )}

//         <div className="pd-price">
//           ₹{product.price}
//           {product.originalPrice && (
//             <span className="pd-original">₹{product.originalPrice}</span>
//           )}
//           {product.discount && (
//             <span className="pd-discount">{product.discount}</span>
//           )}
//           <div className="pd-tax">Inclusive of all taxes</div>
//         </div>

//         {product.sizeOptions && (
//           <div className="pd-size">
//             <p>Select Size</p>
//             <div className="size-options">
//               {product.sizeOptions.map(size => (
//                 <button
//                   key={size}
//                   className={selectedSize === size ? "active" : ""}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         <div className="pd-actions">
//           <button
//             className="buy-now"
//             onClick={() => {
//               addToCart(product, 1, selectedSize);
//               navigate("/cart");
//             }}
//           >
//             Buy Now
//           </button>

//           <button
//             className="add-cart"
//             onClick={() => addToCart(product, 1, selectedSize)}
//           >
//             Add to Bag
//           </button>
//         </div>

//         <div className="pd-info">
//           <p>✔ Free Delivery across India</p>
//           <p>✔ Easy 7-Day Returns</p>
//           <p>✔ 1 Year Warranty</p>
//         </div>

//         <div className="pd-section">
//           <h4>Description</h4>
//           <p>{product.description}</p>
//         </div>

//         <div className="pd-section">
//           <h4>Highlights</h4>
//           {product.lensColor && <p><b>Lens Color:</b> {product.lensColor}</p>}
//           {product.frameColor && <p><b>Frame Color:</b> {product.frameColor}</p>}
//           {product.fitType && <p><b>Fit:</b> {product.fitType}</p>}
//           {product.faceShape && (
//             <p><b>Face Shape:</b> {product.faceShape.join(", ")}</p>
//           )}
//         </div>

//         {product.features && (
//           <div className="pd-section">
//             <h4>Key Features</h4>
//             <ul className="pd-list">
//               {product.features.map((f, i) => (
//                 <li key={i}>✔ {f}</li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {product.bestFor && (
//           <div className="pd-section">
//             <h4>Best For</h4>
//             <div className="pd-tags">
//               {product.bestFor.map((b, i) => (
//                 <span key={i}>{b}</span>
//               ))}
//             </div>
//           </div>
//         )}

//         {product.material && (
//           <div className="pd-section">
//             <h4>Material</h4>
//             <p>{product.material}</p>
//           </div>
//         )}

//         {/* ================= RECOMMENDED PRODUCTS ================= */}
//         <div className="pd-section">
//           <h4>You may also like</h4>

//           <div className="recommend-grid">
//             {allProducts
//               .filter(item => item.id !== product.id)
//               .slice(0, 4)
//               .map(item => (
//                 <div
//                   key={item.id}
//                   className="recommend-card"
//                   onClick={() => navigate(`/product/${item.id}`)}
//                 >
//                   <div className="recommend-img">
//                     <img src={item.image[0]} alt={item.name} />
//                   </div>

//                   <div className="recommend-info">
//                     <p className="recommend-name">{item.name}</p>
//                     <p className="recommend-price">₹{item.price}</p>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default ProductDetail;

















// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// /* DATA */
// import { menProducts } from "../data/menProducts";
// import { womenProducts } from "../data/womenProducts";
// import { limitedEdition } from "../data/LimitedEdition";

// /* COMPONENTS */
// import ProductGallery from "../components/product/ProductGallery";

// import "./ProductDetail.css";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { addToCart } = useCart();

//   const productId = Number(id);

//   const allProducts = [...menProducts, ...womenProducts, ...limitedEdition];

//   const product = allProducts.find(p => p.id === productId);
//   if (!product) return <h2 className="not-found">Product Not Found</h2>;

//   const images = Array.isArray(product.image)
//     ? product.image
//     : [product.image];

//   const [selectedSize, setSelectedSize] = useState(
//     product.sizeOptions?.[0] || ""
//   );

//   return (
//     <>
//       {/* ================= PRODUCT DETAIL ================= */}
//       <div className="pd-page">
//         {/* LEFT */}
//         <div className="pd-left">
//           <ProductGallery images={images} />
//         </div>

//         {/* RIGHT */}
//         <div className="pd-right">
//           <h1 className="pd-name">{product.name}</h1>

//           <p className="pd-category">{product.category}</p>

//           {product.rating && (
//             <div className="pd-rating">
//               <span className="rating-badge">★ {product.rating}</span>
//               <span className="rating-count">
//                 ({product.totalReviews} Reviews)
//               </span>
//             </div>
//           )}

//           <div className="pd-price">
//             ₹{product.price}
//             {product.originalPrice && (
//               <span className="pd-original">₹{product.originalPrice}</span>
//             )}
//             {product.discount && (
//               <span className="pd-discount">{product.discount}</span>
//             )}
//             <div className="pd-tax">Inclusive of all taxes</div>
//           </div>

//           {/* SIZE */}
//           {product.sizeOptions && (
//             <div className="pd-size">
//               <p>Select Size</p>
//               <div className="size-options">
//                 {product.sizeOptions.map(size => (
//                   <button
//                     key={size}
//                     className={selectedSize === size ? "active" : ""}
//                     onClick={() => setSelectedSize(size)}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* ACTIONS */}
//           <div className="pd-actions">
//             <button
//               className="buy-now"
//               onClick={() => {
//                 addToCart(product, 1, selectedSize);
//                 navigate("/cart");
//               }}
//             >
//               Buy Now
//             </button>

//             <button
//               className="add-cart"
//               onClick={() => addToCart(product, 1, selectedSize)}
//             >
//               Add to Bag
//             </button>
//           </div>

//           <div className="pd-info">
//             <p>✔ Free Delivery across India</p>
//             <p>✔ Easy 7-Day Returns</p>
//             <p>✔ 1 Year Warranty</p>
//           </div>

//           <div className="pd-section">
//             <h4>Description</h4>
//             <p>{product.description}</p>
//           </div>
//         </div>
//       </div>

//       {/* ================= RECOMMENDED PRODUCTS ================= */}
//       <section className="recommended-section">
//         <h3 className="recommended-title">You may also like</h3>

//         <div className="recommend-grid">
//           {allProducts
//             .filter(item => item.id !== product.id)
//             .slice(0, 4)
//             .map(item => (
//               <div
//                 key={item.id}
//                 className="recommend-card"
//                 onClick={() => navigate(`/product/${item.id}`)}
//               >
//                 <div className="recommend-img">
//                   <img src={item.image[0]} alt={item.name} />
//                 </div>

//                 <div className="recommend-info">
//                   <p className="recommend-name">{item.name}</p>
//                   <p className="recommend-price">₹{item.price}</p>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default ProductDetail;





























































































































































































































import React, { useState } from "react";
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

  const product = allProducts.find(p => p.id === productId);
  if (!product) return <h2 className="not-found">Product Not Found</h2>;

  const images = Array.isArray(product.image)
    ? product.image
    : [product.image];

  const [selectedSize, setSelectedSize] = useState(
    product.sizeOptions?.[0] || ""
  );

  return (
    <div className="pd-page">

      {/* LEFT */}
      <div className="pd-left">
        <ProductGallery images={images} />
      </div>

      {/* RIGHT */}
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
              {product.sizeOptions.map(size => (
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
            Buy Now
          </button>

          <button
            className="add-cart"
            onClick={() => addToCart(product, 1, selectedSize)}
          >
            Add to Bag
          </button>
        </div>

        {/* DELIVERY */}
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
          {product.lensColor && <p><strong>Lens Color:</strong> {product.lensColor}</p>}
          {product.frameColor && <p><strong>Frame Color:</strong> {product.frameColor}</p>}
          {product.fitType && <p><strong>Fit:</strong> {product.fitType}</p>}
          {product.faceShape && (
            <p><strong>Ideal Face Shape:</strong> {product.faceShape.join(", ")}</p>
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














































































