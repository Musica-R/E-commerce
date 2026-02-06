"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useSearch } from "../context/SearchContext";
import "../styles/ProductGrid.css";
import Loader from "./Loader";

const ProductGrid = ({ onViewDetails }) => {
  const { searchTerm, setSearchTerm } = useSearch();

  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        // ✅ CORS-safe API call (via rewrite)
        const res = await fetch("/api/loom");

        if (!res.ok) {
          throw new Error("API response not OK");
        }

        const data = await res.json();

        //API returns an ARRAY
        const activeProducts = Array.isArray(data) ? data.filter((item) => item.status === "active") : [];

        setProducts(activeProducts);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Unable to load products. Please try again later.");
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ✅ Category list
  const categories = [
    "All",
    ...new Set(products.map((p) => p.category).filter(Boolean)),
  ];

  // ✅ Filtering logic (safe)
  const filteredProducts = products.filter((product) => {
    const name = product.name?.toLowerCase() || "";
    const category = product.category?.toLowerCase() || "";
    const search = searchTerm?.toLowerCase() || "";

    const matchCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    const matchSearch =
      name.includes(search) || category.includes(search);

    return matchCategory && matchSearch;
  });

  // 🔄 Loading UI
  if (loading) {
    return <Loader className="loader"/>
  }

  // ❌ Error UI
  if (error) {
    return (
      <p style={{ textAlign: "center", color: "red" }}>
        {error}
      </p>
    );
  }

  return (
    <section className="product-section" id="products">
      <div className="product-container">
        {/* Header + Search */}
        <div className="search-wrapper">
          <div className="section-header">
            <p className="section-subtitle">
              Browse Our Premium Saree Fabrics Collection
            </p>
          </div>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search sarees, fabric, category..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? "active" : ""
                  }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className={`product-grid ${!loading ? "show" : ""}`}>
          {filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>No products found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
