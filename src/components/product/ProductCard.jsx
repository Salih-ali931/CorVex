// import { Link } from "react-router-dom";
// import { useWishlist } from "../../context/WishlistContext";
// import "./ProductCard.css";

// const ProductCard = ({ product }) => {
//   const { toggleWishlist, isWishlisted } = useWishlist();
//   const liked = isWishlisted(product.id);

//   return (
//     <div className="product-card">
//       {/* IMAGE */}
//       <div className="product-img-box">
//         <Link to={`/product/${product.id}`}>
//           <img src={product.image} alt={product.name} />
//         </Link>

//         {/* ❤️ WISHLIST BUTTON */}
//         <button
//           className={`wishlist-btn ${liked ? "active" : ""}`}
//           onClick={() => toggleWishlist(product)}
//         >
//           ♥
//         </button>
//       </div>

//       {/* INFO */}
//       <div className="product-info">
//         <h3>{product.name}</h3>
//         <p className="price">₹{product.price}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

















// import { Link } from "react-router-dom";
// import { useWishlist } from "../../context/WishlistContext";
// import "./ProductCard.css";

// const ProductCard = ({ product }) => {
//   const { toggleWishlist, isWishlisted } = useWishlist();
//   const liked = isWishlisted(product.id);

//   return (
//     <div className="product-card">
//       {/* IMAGE */}
//       <div className="product-img-box">
//         <Link to={`/product/${product.id}`}>
//           {/* 👇 FIRST IMAGE ONLY */}
//           <img
//             src={product.image[0]}
//             alt={product.name}
//           />
//         </Link>

//         {/* ❤️ WISHLIST BUTTON */}
//         <button
//           className={`wishlist-btn ${liked ? "active" : ""}`}
//           onClick={() => toggleWishlist(product)}
//         >
//           ♥
//         </button>
//       </div>

//       {/* INFO */}
//       <div className="product-info">
//         <h3>{product.name}</h3>
//         <p className="price">₹{product.price}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;







// import { Link } from "react-router-dom";
// import { useWishlist } from "../../context/WishlistContext";
// import "./ProductCard.css";

// const ProductCard = ({ product }) => {
//   const { toggleWishlist, isWishlisted } = useWishlist();
//   const liked = isWishlisted(product.id);

//   return (
//     <div className="product-card">
//       {/* IMAGE */}
//       <div className="product-img-box">
//         <Link to={`/product/${product.id}`}>
//           {/* BASE PRODUCT IMAGE */}
//           <img
//             src={product.image[0]}
//             alt={product.name}
//             className="base-img"
//           />

//           {/* MODEL IMAGE (image[1]) */}
//           <img
//             src={product.image[1]}
//             alt="model"
//             className="hover-img"
//           />
//         </Link>

//         {/* ❤️ WISHLIST */}
//         <button
//           className={`wishlist-btn ${liked ? "active" : ""}`}
//           onClick={(e) => {
//             e.preventDefault();
//             toggleWishlist(product);
//           }}
//         >
//           ♥
//         </button>
//       </div>

//       {/* INFO */}
//       <div className="product-info">
//         <h3>{product.name}</h3>
//         <p className="price">₹{product.price}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;





// import { Link } from "react-router-dom";
// import { useWishlist } from "../../context/WishlistContext";
// import "./ProductCard.css";

// const ProductCard = ({ product }) => {
//   const { toggleWishlist, isWishlisted } = useWishlist();
//   const liked = isWishlisted(product.id);

//   return (
//     <div className="product-card">
//       <div className="product-img-box">
//         <Link to={`/product/${product.id}`}>
//           {/* PRODUCT IMAGE */}
//           <img
//             src={product.image[0]}
//             alt={product.name}
//             className="base-img"


//           />

//           {/* MODEL IMAGE (ONLY IF EXISTS) */}
//           {product.image.length > 1 && (
//             <img
//               src={product.image[1]}
//               alt="model"
//               className="hover-img"
//             />
//           )}
//         </Link>

//         {/* WISHLIST */}
//         <button
//           className={`wishlist-btn ${liked ? "active" : ""}`}
//           onClick={(e) => {
//             e.preventDefault();
//             toggleWishlist(product);
//           }}
//         >
//           ♥
//         </button>
//       </div>

//       <div className="product-info">
//         <h3>{product.name}</h3>
//         <p className="price">₹{product.price}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;















// import { Link } from "react-router-dom";
// import { useWishlist } from "../../context/WishlistContext";
// import "./ProductCard.css";

// const ProductCard = ({ product }) => {
//   const { toggleWishlist, isWishlisted } = useWishlist();
//   const liked = isWishlisted(product.id);

//   return (
//     <div className="product-card">
//       {/* IMAGE BOX */}
//       <div className="product-img-box">
//         <Link
//           to={`/product/${product.id}`}
//           className="product-link"
//         >
//           {/* BASE PRODUCT IMAGE */}
//           <img
//             src={product.image[0]}
//             alt={product.name}
//             className="base-img"
//           />

//           {/* HOVER / MODEL IMAGE */}
//           {product.image && product.image.length > 1 && (
//             <img
//               src={product.image[1]}
//               alt={`${product.name} model`}
//               className="hover-img"
//             />
//           )}
//         </Link>

//         {/* WISHLIST BUTTON */}
//         <button
//           className={`wishlist-btn ${liked ? "active" : ""}`}
//           onClick={(e) => {
//             e.preventDefault(); // prevent navigation
//             toggleWishlist(product);
//           }}
//         >
//           ♥
//         </button>
//       </div>

//       {/* PRODUCT INFO */}
//       <div className="product-info">
//         <h3>{product.name}</h3>
//         <p className="price">₹{product.price}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;



























// import { Link } from "react-router-dom";
// import { useWishlist } from "../../context/WishlistContext";
// import "./ProductCard.css";

// const ProductCard = ({ product }) => {
//   const { toggleWishlist, isWishlisted } = useWishlist();
//   const liked = isWishlisted(product.id);

//   return (
//     <div className="product-card">
//       <div className="product-img-box">
//         <Link
//           to={`/product/${product.id}`}
//           className="product-link"   // 🔴 MUST EXIST
//         >
//           <img
//             src={product.image[0]}
//             alt={product.name}
//             className="base-img"
//           />

//           {product.image?.[1] && (
//             <img
//               src={product.image[1]}
//               alt="model"
//               className="hover-img"
//             />
//           )}
//         </Link>

//         <button
//           className={`wishlist-btn ${liked ? "active" : ""}`}
//           onClick={(e) => {
//             e.preventDefault();
//             toggleWishlist(product);
//           }}
//         >
//           ♥
//         </button>
//       </div>

//       <div className="product-info">
//         <h3>{product.name}</h3>
//         <p className="price">₹{product.price}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;















































// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useWishlist } from "../../context/WishlistContext";
// import "./ProductCard.css";

// const ProductCard = ({ product }) => {
//   const { toggleWishlist, isWishlisted } = useWishlist();
//   const liked = isWishlisted(product.id);

//   const images = product.image || [];
//   const [activeImg, setActiveImg] = useState(0);

//   return (
//     <div className="product-card">
//       <div className="product-img-box">
//         <Link to={`/product/${product.id}`} className="product-link">
//           {/* BASE IMAGE */}
//           <img
//             src={images[0]}
//             alt={product.name}
//             className="base-img"
//           />

//           {/* HOVER IMAGE (DESKTOP ONLY) */}
//           {images[1] && (
//             <img
//               src={images[1]}
//               alt="model"
//               className={`hover-img ${activeImg === 1 ? "force-show" : ""}`}
//             />
//           )}
//         </Link>

//         {/* ❤️ Wishlist */}
//         <button
//           className={`wishlist-btn ${liked ? "active" : ""}`}
//           onClick={(e) => {
//             e.preventDefault();
//             toggleWishlist(product);
//           }}
//         >
//           ♥
//         </button>
//       </div>

//       {/* DOTS — MOBILE + DESKTOP */}
//       {images.length > 1 && (
//         <div className="img-dots">
//           <span
//             className={activeImg === 0 ? "dot active" : "dot"}
//             onClick={() => setActiveImg(0)}
//           />
//           <span
//             className={activeImg === 1 ? "dot active" : "dot"}
//             onClick={() => setActiveImg(1)}
//           />
//         </div>
//       )}

//       <div className="product-info">
//         <h3>{product.name}</h3>
//         <p className="price">₹{product.price}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;














































// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useWishlist } from "../../context/WishlistContext";
// import "./ProductCard.css";

// const ProductCard = ({ product }) => {
//   const { toggleWishlist, isWishlisted } = useWishlist();
//   const liked = isWishlisted(product.id);

//   const images = product.image || [];
//   const [activeImg, setActiveImg] = useState(0);

//   return (
//     <div className="product-card">
//       <div className="product-img-box">
//         <Link to={`/product/${product.id}`} className="product-link">

//           {/* IMAGE 1 */}
//           <img
//             src={images[0]}
//             alt={product.name}
//             className={`main-img ${activeImg === 0 ? "show" : ""}`}
//           />

//           {/* IMAGE 2 (if exists) */}
//           {images[1] && (
//             <img
//               src={images[1]}
//               alt="hover"
//               className={`hover-img ${activeImg === 1 ? "show" : ""}`}
//             />
//           )}
//         </Link>

//         {/* ❤️ Wishlist */}
//         <button
//           className={`wishlist-btn ${liked ? "active" : ""}`}
//           onClick={(e) => {
//             e.preventDefault();
//             toggleWishlist(product);
//           }}
//         >
//           ♥
//         </button>

//         {/* 📱 MOBILE DOTS ONLY */}
//         {images.length > 1 && (
//           <div className="img-dots">
//             {images.slice(0, 2).map((_, i) => (
//               <span
//                 key={i}
//                 className={activeImg === i ? "active" : ""}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   setActiveImg(i);
//                 }}
//               />
//             ))}
//           </div>
//         )}
//       </div>

//       {/* INFO */}
//       <div className="product-info">
//         <h3>{product.name}</h3>
//         <p className="price">₹{product.price}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;






























// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useWishlist } from "../../context/WishlistContext";
// import "./ProductCard.css";

// const ProductCard = ({ product }) => {
//   const { toggleWishlist, isWishlisted } = useWishlist();
//   const liked = isWishlisted(product.id);

//   const images = product.image || [];
//   const [activeImg, setActiveImg] = useState(0);

//   return (
//     <div className="product-card">
//       <div className="product-img-box">
//         <Link to={`/product/${product.id}`} className="product-link">
//           {/* IMAGE 1 */}
//           <img
//             src={images[0]}
//             alt={product.name}
//             className={`img img-1 ${activeImg === 0 ? "show" : ""}`}
//           />

//           {/* IMAGE 2 */}
//           {images[1] && (
//             <img
//               src={images[1]}
//               alt="model"
//               className={`img img-2 ${activeImg === 1 ? "show" : ""}`}
//             />
//           )}
//         </Link>

//         {/* ❤️ Wishlist */}
//         <button
//           className={`wishlist-btn ${liked ? "active" : ""}`}
//           onClick={(e) => {
//             e.preventDefault();
//             toggleWishlist(product);
//           }}
//         >
//           ♥
//         </button>

//         {/* 📱 MOBILE DOTS ONLY */}
//         {images.length > 1 && (
//           <div className="img-dots">
//             <span
//               className={activeImg === 0 ? "active" : ""}
//               onClick={(e) => {
//                 e.preventDefault();
//                 setActiveImg(0);
//               }}
//             />
//             <span
//               className={activeImg === 1 ? "active" : ""}
//               onClick={(e) => {
//                 e.preventDefault();
//                 setActiveImg(1);
//               }}
//             />
//           </div>
//         )}
//       </div>

//       <div className="product-info">
//         <h3>{product.name}</h3>
//         <p className="price">₹{product.price}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;






























































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
