"use client";

import React from "react";
import Image from "next/image";
import "../styles/Mainpro.css";
import Link from "next/link";

import saree01 from "../assets/new1.jpg";
import saree03 from "../assets/new2.jpg";
import saree02 from "../assets/new5.jpg";
import saree04 from "../assets/new4.jpg";

import saree1 from "../assets/sarees1.jpg.jpeg";
import saree2 from "../assets/saree2.jpg.jpeg";
import saree3 from "../assets/saree3.jpg.jpeg";
import saree4 from "../assets/saree4.jpg.jpeg";

import saree9 from '../assets/pg.jpg';
import saree10 from '../assets/pgsar.jpg';
import saree11 from '../assets/Sillk_Saree.webp';
import saree12 from '../assets/saree8.webp';

const pro = [
    {
        id: 1,
        name: "Navy Blue Crepe Saree",
        price: "₹4,949",
        image: saree01,
        isNew: true,
    },
    {
        id: 2,
        name: "Hot Pink Georgette Saree",
        price: "₹22,109",
        image: saree02,
        isNew: true,
    },
    {
        id: 3,
        name: "Silver Banarasi Tissue Saree",
        price: "₹16,829",
        image: saree03,
    },
    {
        id: 4,
        name: "Burgundy Bandhani Silk Saree",
        price: "₹10,119",
        image: saree04,
    },
];

const products = [
    {
        id: 1,
        name: "Navy Blue Crepe Saree",
        price: "₹4,949",
        image: saree1,
        isNew: true,
    },
    {
        id: 2,
        name: "Hot Pink Georgette Saree",
        price: "₹22,109",
        image: saree2,
        isNew: true,
    },
    {
        id: 3,
        name: "Silver Banarasi Tissue Saree",
        price: "₹16,829",
        image: saree3,
    },
    {
        id: 4,
        name: "Burgundy Bandhani Silk Saree",
        price: "₹10,119",
        image: saree4,
    },
];

const productss = [
    {
        id: 1,
        name: "Maternity Wear",
        image: saree9,
    },
    {
        id: 2,
        name: "Wedding Collection",
        image: saree10,
    },
    {
        id: 3,
        name: "Office Wear",
        image: saree11,
    },
    {
        id: 4,
        name: "Party Wear Sarees",
        image: saree12,
    },
];

const HomeProduct = () => {
    return (
        <section className="homeproduct-section">
            <div className="homeproduct-header" id="offers">
                <h2>Hot of the Loom</h2>
                <a href="/product" className="view-all">View All →</a>
            </div>

            <div className="homeproduct-grid">
                {pro.map((product) => (
                    <div key={product.id} className="homeproduct-card">
                        {product.isNew && <span className="badge-new">NEW</span>}
                        <span className="wishlist">♡</span>

                        <div className="image-wrap">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={350}
                                height={500}
                                className="product-image"
                            />

                            {/* Hover overlay */}
                            <div className="hover-overlay">
                                <Link href="/product">
                                    <button className="view-product-btn">
                                        View Product
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p className="price">{product.price}</p>
                        </div>
                    </div>

                ))}
            </div>

            <div className="wrap">
                <div className="homeproduct-header">
                    <h2>Shop By Occasion</h2>
                    <a href="/product" className="view-all">View All →</a>
                </div>

                <div className="homeproduct-grid">
                    {productss.map((products) => (
                        <div key={products.id} className="homeproduct-card card-border">
                            {products.isNew && <span className="badge-new">NEW</span>}
                            <span className="wishlist">♡</span>
                            <div className="image-wrap">
                                <Image src={products.image} alt={products.name} width={350} height={500} className="product-image" />
                                {/* Hover overlay */}
                                <div className="hover-overlay">
                                    <Link href="/product">
                                        <button className="view-product-btn">
                                            View Product
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            {/* Info */}
                            <div className="product-info">
                                <h3>{products.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="wrap">
                <div className="homeproduct-header">
                    <h2>Our Bestsellers</h2>
                    <a href="/product" className="view-all">View All →</a>
                </div>

                <div className="homeproduct-grid">
                    {products.map((products) => (
                        <div key={products.id} className="homeproduct-card">
                            {products.isNew && <span className="badge-new">NEW</span>}
                            <span className="wishlist">♡</span>
                            <div className="image-wrap">
                                <Image src={products.image} alt={products.name} width={350} height={500} className="product-image" />
                                {/* Hover overlay */}
                                <div className="hover-overlay">
                                    <Link href="/product">
                                        <button className="view-product-btn">
                                            View Product
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            {/* Info */}
                            <div className="product-info">
                                <h3>{products.name}</h3>
                                <p className="price">{products.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default HomeProduct;
