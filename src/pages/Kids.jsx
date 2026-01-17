import Navbar from "../components/layout/Navbar";
import ProductCard from "../components/product/ProductCard";
import { kidsProducts } from "../data/kidsProducts";
import "./Kids.css";

const Kids = () => {
  return (
    <>
      <Navbar />

      <section className="kids-page">
        <h1>Kids Collection</h1>

        <div className="kids-grid">
          {kidsProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Kids;
