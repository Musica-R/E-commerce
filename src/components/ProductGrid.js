"use client";

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { useSearch } from "../context/SearchContext";
import '../styles/ProductGrid.css';

const ProductGrid = ({ onViewDetails }) => {

  const { searchTerm, setSearchTerm } = useSearch();
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(products.map(p => p.category))];

  // Combined Filter (Category + Search)
  const filteredProducts = products.filter(product => {
    const matchCategory =
      selectedCategory === 'All' || product.category === selectedCategory;

    const matchSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  return (
    <section className="product-section" id="products">
      <div className="product-container">

        {/* Section Header */}
        <div className="search-wrapper">

          <div className="section-header">
            <p className="section-subtitle"> Browse Our Premium Saree Fabrics Collection </p>
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Search sarees, fabric, category..." className="search-input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>

          {/* Category Filter */}
          <div className="category-filter">
            {categories.map(category => (
              <button key={category} className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}>{category}</button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onViewDetails={onViewDetails} />
          ))}
        </div>

        {/* No Products */}
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
