import React from 'react';
import '../styles/Footer.css';
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Footer Columns */}
                <div className="footer-column">
                    <h3 className="footer-title">The Style Studio</h3>
                    <p className="footer-text">
                        Your one-stop shop for premium products at amazing prices.
                    </p>
                </div>

                <div className="footer-column">
                    <h4 className="footer-heading">Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/product">Products</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4 className="footer-heading">Customer Service</h4>
                    <ul className="footer-links">
                        <li><a href="#shipping">Shipping Info</a></li>
                        <li><a href="#returns">Returns</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#support">Support</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4 className="footer-heading">Follow Us</h4>
                    <div className="social-links">
                            <div className="social blue"><FaLinkedinIn /></div>
                            <div className="social gray"><FaGithub /></div>
                            <div className="social pink"><FaInstagram /></div>
                            <div className="social sky"><FaTwitter /></div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 The Style Studio All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
