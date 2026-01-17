

import { useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import ProductCard from "../components/product/ProductCard";

import { newArrivals } from "../data/newArrivals";
import { limitedEdition } from "../data/LimitedEdition";

import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Noir Hive</h1>
          <p>STAY STYLISH THIS SEASON</p>
          <button onClick={() => navigate("/shop")}>
  SHOP NOW
</button>


        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="product-section">
        <h2 className="section-title">NEW ARRIVALS</h2>
        <p className="section-sub">Fresh designs · Premium finish</p>

        <div className="product-grid six">
          {newArrivals.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      {/* MEN */}
      <section className="category-card men" onClick={() => navigate("/men")}>
        <div className="cat-overlay">
          <h2>Frost Élite</h2>
          <p>Luxury feel with sleek design & <p></p>superior UV protection</p>
          <button>SHOP MEN</button>
        </div>
      </section>

      {/* WOMEN */}
      <section className="category-card women" onClick={() => navigate("/women")}>
        <div className="cat-overlay">
          <h2>Maison d’Hiver</h2>
          <p>Elegant style and high-quality<p></p> comfort for a chic look</p>
          <button>SHOP WOMEN</button>
        </div>
      </section>



      {/* LIMITED EDITION */}
      <section className="product-section">
        <h2 className="section-title">LIMITED EDITION</h2>
        <p className="section-sub">Exclusive · Handpicked · Premium</p>

        <div className="product-grid three">
          {limitedEdition.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

