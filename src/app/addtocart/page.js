"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import "@/styles/Checkout.css";
import Cart from "@/components/Cart";
import MobileArrow from "@/components/MobileArrow";

export default function Addtocart() {
    const { cartItems, getCartTotal } = useCart();

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        address: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // 🔹 FINAL WhatsApp redirect
    const proceedToWhatsApp = () => {
        if (cartItems.length === 0) {
            alert("Your cart is empty");
            return;
        }

        let message = `*New Order Request*\n\n`;

        cartItems.forEach((item, index) => {
            message += `*${index + 1}. ${item.name}*\n`;
            message += `Price: ₹${item.price}\n`;
            message += `Qty: ${item.quantity}\n`;
            message += `Subtotal: ₹${item.price * item.quantity}\n\n`;
        });

        message += `----------------------\n`;
        message += `*Total:* ₹${getCartTotal()}\n\n`;

        message += `*Customer Details*\n`;
        message += `Name: ${form.name}\n`;
        message += `Phone: ${form.phone}\n`;
        message += `Email: ${form.email}\n`;
        message += `Address: ${form.address}\n`;

        const phoneNumber = "918610766168";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
            message
        )}`;

        window.open(url, "_blank");
    };

    return (
        <>
            <div className="checkout-container">
                <h2 className="checkout-title">Checkout</h2>

                <div className="checkout-grid">
                    {/* 🛒 Cart Items */}
                    <div className="checkout-cart">
                        <h3>Your Order</h3>

                        {cartItems.length === 0 ? (
                            <p>Your cart is empty</p>
                        ) : (
                            cartItems.map((item) => (
                                <div className="checkout-item" key={item._id}>
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={80}
                                        height={100}
                                        className="checkout-image"
                                    />

                                    <div className="checkout-item-info">
                                        <p className="item-name">{item.name}</p>
                                        <p>
                                            ₹{item.price} × {item.quantity}
                                        </p>
                                    </div>

                                    <span className="item-subtotal">
                                        ₹{item.price * item.quantity}
                                    </span>
                                </div>
                            ))
                        )}

                        {cartItems.length > 0 && (
                            <div className="checkout-total">
                                Total: ₹{getCartTotal()}
                            </div>
                        )}
                    </div>

                    {/* 📝 Customer Details Form */}
                    <div className="checkout-form">
                        <h3>Customer Details</h3>

                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="number"
                            name="phone"
                            placeholder="Phone Number"
                            value={form.phone}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={form.email}
                            onChange={handleChange}
                        />

                        <textarea
                            name="address"
                            placeholder="Delivery Address"
                            rows="4"
                            value={form.address}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <button
                            className="whatsapp-btn"
                            onClick={proceedToWhatsApp}
                            disabled={cartItems.length === 0}
                        >
                            Place Order on WhatsApp
                        </button>
                    </div>
                </div>
            </div>

            <Cart />
            <MobileArrow />
        </>
    );
}
