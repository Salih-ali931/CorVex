import Navbar from "../components/layout/Navbar";
import ProductCard from "../components/product/ProductCard";
import { womenProducts } from "../data/womenProducts";
import "./Women.css";

const Women = () => {
  return (
    <>
      <Navbar />

      <section className="women-page">
        <h1>Women Collection</h1>

        <div className="women-grid">
          {womenProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Women;