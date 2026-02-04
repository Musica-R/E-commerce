"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import "../styles/Header.css";
import { CgProfile } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import wed from "../assets/hand-drawn-sari-illustration.png";
import LoginPopup from "../components/Loginpage";
import { auth } from "../Auth/firebase";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const { getCartCount, toggleCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Listen for auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleProfileClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      setDropdownOpen(false);
      alert("Logged out successfully!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          {/* Logo */}
          <div className="logo">
            <Image src={wed} alt="Wedding Sarees" width={50} height={50} className="emoji" />
            <a href="/"><span className="logo-text">The Style Studio</span></a>
          </div>

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
            <div className="profile pro" onClick={handleProfileClick}>
              <CgProfile size={22} />

              {dropdownOpen && (
                <div className="profile-dropdown">
                  {user ? (
                    <>
                      {/* <p>{user.displayName || "User"}</p> */}
                      {/* <p>{user.email}</p> */}
                      <button onClick={handleLogout} className="logout">Logout</button>
                    </>
                  ) : (
                    <button
                      onClick={() => {
                        setShowLogin(true);
                        setDropdownOpen(false);
                      }}
                    >
                      Login
                    </button>
                  )}
                </div>
              )}
            </div>


            {/* Cart */}
            <button className="cart-button pro" onClick={toggleCart}>
              <span className="cart-icon">🛒</span>
              {getCartCount() > 0 && (
                <span className="cart-badge">{getCartCount()}</span>
              )}
            </button>

            {/* Hamburger */}
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <a href="/" onClick={() => setMenuOpen(false)}>New Arrivals</a>
          <a href="/product" onClick={() => setMenuOpen(false)}>Sarees</a>
          <a href="/contact" onClick={() => setMenuOpen(false)}>Customer Support</a>

          <button className="cart-button" onClick={toggleCart}>
            <span className="cart-icon">🛒</span>
            {getCartCount() > 0 && <span className="cart-badge">{getCartCount()}</span>}
          </button>
        </div>
      </header>

      <LoginPopup isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
};

export default Header;
