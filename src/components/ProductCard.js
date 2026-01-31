import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/ProductCard.css';
import Image from 'next/image';
import { FaStar } from "react-icons/fa6";

// ProductCard Component
// Displays individual product with image, details, and add to cart button
const ProductCard = ({ product, onViewDetails }) => {
    const { addToCart } = useCart();

    // Handle add to cart with visual feedback
    const handleAddToCart = () => {
        addToCart(product);
        // You could add a toast notification here
    };

    return (
        <div className="product-card" id="product">
            {/* Product Image */}
            <div className="product-image-container">
                
                <Image
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                    width={0}
                    height={0}
                />

                <div className="product-overlay">
                    <button
                        className="view-details-btn"
                        onClick={() => onViewDetails(product)}
                    >
                        Quick View
                    </button>
                </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
                {/* <span className="product-category">{product.category}</span> */}
                <h3 className="product-name">{product.name}</h3>

                {/* Rating */}
                <div className="product-rating">
                    {[...Array(5)].map((_, index) => (
                        <span key={index} className={index < Math.floor(product.rating) ? 'star filled' : 'star'}>
                           <FaStar style={{color:"#FACC15"}} />
                        </span>
                    ))}
                    <span className="rating-number">({product.rating})</span>
                </div>

                {/* Price and Add to Cart */}
                <div className="product-footer">
                    <span className="product-price">₹ {product.price.toFixed(2)}</span>
                     <p className='grey'>{product.pri}</p>
                     <p className='red'>{product.offer}</p>
                    {/* <button
                        className="add-to-cart-btn"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
