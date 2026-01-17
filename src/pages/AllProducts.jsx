// import { useNavigate } from "react-router-dom";
// import { menProducts } from "../data/menProducts";
// import { womenProducts } from "../data/womenProducts";
// import "./AllProducts.css";

// const AllProducts = () => {
//   const navigate = useNavigate();
//   const allProducts = [...menProducts, ...womenProducts];

//   return (
//     <div className="product-section">
//       <h2 className="section-title">ALL PRODUCTS</h2>

//       <div className="product-grid six">
//         {allProducts.map(item => (
//           <div
//             key={item.id}
//             className="product-card"
//             onClick={() => navigate(`/product/${item.id}`)}
//           >
//             <img src={item.image[0]} alt={item.name} />
//             <h4>{item.name}</h4>
//             <span>₹{item.price}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// // export default AllProducts;
// import { useNavigate } from "react-router-dom";
// import { menProducts } from "../data/menProducts";
// import { womenProducts } from "../data/womenProducts";
// import "./AllProducts.css";
// const AllProducts = () => {
//   const navigate = useNavigate();

//   const allProducts = [...menProducts, ...womenProducts];

//   return (
//     <div className="product-section">
//       <h2 className="section-title">ALL PRODUCTS</h2>

//       <div className="product-grid six">
//         {allProducts.map(item => (
//           <div
//             key={item.id}
//             className="product-card"
//             onClick={() => navigate(`/product/${item.id}`)}
//           >
//             <img src={item.image[0]} alt={item.name} />
//             <h4>{item.name}</h4>
//             <span>₹{item.price}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllProducts;


// import Navbar from "../components/layout/Navbar";
// import ProductCard from "../components/product/ProductCard";
// import { menProducts } from "../data/menProducts";

// import "./Men.css";

// const Men = () => {
//   return (
//     <>
//       <Navbar />
//       <section className="men-page">
//         <h1>Men Collection</h1>

//         <div className="men-grid">
//           {menProducts.map((item) => (
//             <ProductCard key={item.id} product={item} />
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Men;


import Navbar from "../components/layout/Navbar";
import ProductCard from "../components/product/ProductCard";

import { menProducts } from "../data/menProducts";
import { womenProducts } from "../data/womenProducts";

import "./AllProducts.css";

const AllProducts = () => {
  const allProducts = [...menProducts, ...womenProducts];

  return (
    <>
      <Navbar />

      <section className="all-products-page">
        <h1>All Products</h1>

        <div className="all-products-grid">
          {allProducts.map(item => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default AllProducts;
