"use client";

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useSearch } from "../context/SearchContext";
import "../styles/Header.css";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import wed from "../assets/hand-drawn-sari-illustration.png"

const Header = () => {
  const { getCartCount, toggleCart } = useCart();
  const { searchTerm, setSearchTerm } = useSearch();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <div className="logo">
          <Image src={wed} alt="Wedding Sarees" width={50} height={50} className="emoji" />
            <a href="/"><span className="logo-text">The Style Studio</span></a> 
        </div>

        {/* Search */}
         
        {/* <div className="search-bar">
          <input
            type="text"
            placeholder="Search sarees, fabric, category..."
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div> */}

        {/* Desktop Nav */}
        <div className="sub-header">
        <nav className="nav">
          <a href="/" className="nav-link">New Arrivals</a>
          <a href="/product" className="nav-link">Sarees</a>
          <a href="/contact" className="nav-link">Customer Support</a>

          <select className="lang-select">
            <option>En</option>
            <option>Ta</option>
          </select>
        </nav>

        {/* Profile */}
        <div className="profile pro">
          <CgProfile />
        </div>

        {/* Cart */}
        <button className="cart-button pro" onClick={toggleCart}>
          <span className="cart-icon">🛒</span>
          {getCartCount() > 0 && (
            <span className="cart-badge">{getCartCount()}</span>
          )}
        </button>

        {/* Hamburger */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
    </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="/" onClick={() => setMenuOpen(false)}>New Arrivals</a>
        <a href="/product" onClick={() => setMenuOpen(false)}>Sarees</a>
        <a href="/contact" onClick={() => setMenuOpen(false)}>Customer Support</a>

        {/* <select className="mobile-lang">
          <option>English</option>
          <option>Tamil</option>
        </select> */}

        {/* Cart */}
        <button className="cart-button" onClick={toggleCart}>
        <span className="cart-icon">🛒</span>
          {getCartCount() > 0 && (
            <span className="cart-badge">{getCartCount()}</span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
