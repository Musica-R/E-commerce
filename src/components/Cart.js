import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';
import Image from 'next/image';


const Cart = () => {
    const { cartItems, isCartOpen, removeFromCart, updateQuantity, getCartTotal, toggleCart } = useCart();

    return (
        <>
            {/* Overlay */}
            {isCartOpen && <div className="cart-overlay" onClick={toggleCart}></div>}

            {/* Cart Sidebar */}
            <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
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
                            <button className="continue-shopping-btn" onClick={toggleCart}>
                                <a href="/product">   Continue Shopping </a>
                            </button>
                        </div>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id} className="cart-item">

                                <Image
                                    src={item.image} alt={item.name}
                                    className="cart-item-image"
                                    width={0}
                                    height={0} />


                                <div className="cart-item-details">
                                    <h4 className="cart-item-name">{item.name}</h4>
                                    <p className="cart-item-price">${item.price.toFixed(2)}</p>

                                    {/* Quantity Controls */}
                                    <div className="quantity-controls">
                                        <button
                                            className="quantity-btn"
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        >
                                            -
                                        </button>
                                        <span className="quantity">{item.quantity}</span>
                                        <button
                                            className="quantity-btn"
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* Remove Button */}
                                <button
                                    className="remove-item-btn"
                                    onClick={() => removeFromCart(item.id)}>
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
                        <button className="checkout-btn">
                            <a href='/addtocart'>Proceed to Checkout </a>
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;
