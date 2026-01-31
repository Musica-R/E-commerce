import '../styles/Contact.css';
import { FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { LuSend } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import WhyShopHub from './WhyShopHub';

export default function Contact() {
    return (
        <section className="contact" id="contact">

            <WhyShopHub />

            {/* HEADER */}
            <div className="contact-header">
                <h2>Customer Support</h2>
                <p>
                    Need help with an order, product, or delivery?
                    Our support team is here for you.
                </p>
            </div>

            <div className="contact-body">

                {/* LEFT SIDE */}
                <div className="contact-left">

                    {/* SUPPORT DETAILS */}
                    <div className="contact-card">
                        <h2>Contact Information</h2>

                        <div className="contact-item">
                            <div className="icon blue">
                                <FiMail />
                            </div>
                            <div className="text">
                                <h4>Email Support</h4>
                                <span>support@yourstore.com</span>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="icon green">
                                <FaWhatsapp />
                            </div>
                            <div className="text">
                                <h4>WhatsApp</h4>
                                <span>+91 98765 43210</span>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="icon orange">
                                <FaPhoneAlt />
                            </div>
                            <div className="text">
                                <h4>Customer Care</h4>
                                <span>Mon – Sat, 9 AM – 6 PM</span>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="icon purple">
                                <IoLocationOutline />
                            </div>
                            <div className="text">
                                <h4>Warehouse</h4>
                                <span>Chennai, India</span>
                            </div>
                        </div>
                    </div>

                    {/* TRUST INFO */}
                    <div className="contact-card">
                        <h2>Why Shop With Us?</h2>
                        <ul className="trust-list">
                            <li>Secure Payments</li>
                            <li>Fast Delivery</li>
                            <li>Easy Returns</li>
                            <li>24/7 Support</li>
                        </ul>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="contact-right">
                    <h2>Submit a Support Request</h2>

                    <form className="form">
                        <label>Name</label>
                        <input type="text" placeholder="Your full name" />

                        <label>Email</label>
                        <input type="email" placeholder="you@example.com" />

                        <label>Order ID (optional)</label>
                        <input type="text" placeholder="#ORD123456" />

                        <label>Issue Type</label>
                        <select>
                            <option>Order Issue</option>
                            <option>Payment Problem</option>
                            <option>Delivery Delay</option>
                            <option>Return / Refund</option>
                            <option>Product Enquiry</option>
                        </select>

                        <label>Message</label>
                        <textarea placeholder="Describe your issue..."></textarea>

                        <button className="Con-btn">
                            <LuSend /> Submit Request
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
