"use client";

import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const { cartItems, isCartOpen, removeFromCart, updateQuantity, getCartTotal, toggleCart } = useCart();

  return (
    <>
      {/* Overlay */}
      {isCartOpen && <div className="cart-overlay" onClick={toggleCart}></div>}

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
        {/* Cart Header */}
        <div className="cart-header">
          <h2 className="cart-title">View Cart</h2>
          <button className="close-cart-btn" onClick={toggleCart}>
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <span className="empty-cart-icon">🛒</span>
              <p>Your cart is empty</p>
              <Link href="/product">
                <button className="continue-shopping-btn">Continue Shopping</button>
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item._id} className="cart-item">
                {/* Image */}
                <div className="cart-item-image-container">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    style={{ objectFit: "contain", borderRadius: "8px" }}
                  />
                </div>

                {/* Details */}
                <div className="cart-item-details">
                  <h4 className="cart-item-name">{item.name}</h4>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>

                  {/* Quantity */}
                  <div className="quantity-controls">
                    <button
                      className="quantity-btn"
                      onClick={() =>
                        updateQuantity(item._id, Math.max(1, item.quantity - 1))
                      }
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="quantity-btn"
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove */}
                <button className="remove-item-btn" onClick={() => removeFromCart(item._id)}>
                  🗑️
                </button>
              </div>
            ))
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span className="total-amount">${getCartTotal().toFixed(2)}</span>
            </div>
            <Link href="/addtocart">
              <button className="checkout-btn">Proceed to Checkout</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
