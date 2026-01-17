import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

import { womenProducts } from "../data/womenProducts";
import { menProducts } from "../data/menProducts";
// import { kidsProducts } from "../data/kidsProducts";
// import { opticalProducts } from "../data/opticalProducts";

import "./SearchResult.css";

const SearchResult = () => {
  const navigate = useNavigate();
  const query = new URLSearchParams(useLocation().search)
    .get("query")
    ?.toLowerCase();

  const allProducts = [
    ...menProducts,
    ...womenProducts,
    // ...opticalProducts,
  ];

  const results = allProducts.filter(
    (item) =>
      item.name.toLowerCase().includes(query) ||
      item.brand?.toLowerCase().includes(query)
  );

  return (
    <>
      <Navbar />

      <div className="search-page">
        <h2 className="search-title">
          Search results for <span>“{query}”</span>
        </h2>

        {results.length === 0 ? (
          <p className="no-result">No products found</p>
        ) : (
          <div className="search-grid">
            {results.map((product) => (
              <div
                key={product.id}
                className="search-card"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img
                  src={Array.isArray(product.image)
                    ? product.image[0]
                    : product.image}
                  alt={product.name}
                />

                <div className="card-info">
                  <h4>{product.brand || "CorVex"}</h4>
                  <p className="name">{product.name}</p>
                  <p className="price">₹{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchResult;
