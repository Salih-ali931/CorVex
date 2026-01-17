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
import "./Men.css";

const Men = () => {
  return (
    <>
      <Navbar />
      <section className="men-page">
        <h1>Men Collection</h1>

        <div className="men-grid">
          {menProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Men;
