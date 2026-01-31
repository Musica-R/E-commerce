"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import saree from "../assets/sarees1.jpg.jpeg";
import tissue from "../assets/saree2.jpg.jpeg";
import poly from "../assets/saree3.jpg.jpeg";
import polys from "../assets/saree4.jpg.jpeg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/HomeMain.css";

export default function MainHero() {
  return (
    <section className="main-hero">

      {/* Background Shapes */}
      <div className="hero-shape hero-shape-1"></div>
      <div className="hero-shape hero-shape-2"></div>

      <div className="main-hero-container">

        {/* LEFT CONTENT */}
        <div className="main-hero-text">

          <span className="hero-badge">🔥 Festive Sale – Up to 40% OFF</span>

          <h1 className="main-hero-title">
            Premium Sarees <br />
            <span>For Every Occasion</span>
          </h1>

          <p className="main-hero-desc">
            Handpicked collections • Trusted quality • Fast delivery across India
          </p>

          <div className="main-hero-actions">
            <a href="/product" className="btn-primary">Shop Now</a>
            <a href="#offers" className="btn-secondary">View Offers</a>
          </div>

          <div className="hero-trust">
            ⭐ 4.8 Rated &nbsp;|&nbsp; 🚚 Free Shipping &nbsp;|&nbsp; 🔒 Secure Payment
          </div>
        </div>

        {/* RIGHT SLIDER */}
        <div className="main-hero-slider glass-card">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation
            className="main-swiper"
          >
            <SwiperSlide className="main-slide">
              <Image src={saree} alt="Silk Saree" fill priority />
            </SwiperSlide>

            <SwiperSlide className="main-slide">
              <Image src={tissue} alt="Tissue Saree" fill />
            </SwiperSlide>

            <SwiperSlide className="main-slide">
              <Image src={poly} alt="Poly Saree" fill />
            </SwiperSlide>

             <SwiperSlide className="main-slide">
              <Image src={polys} alt="Polys Saree" fill />
            </SwiperSlide>
          </Swiper>
        </div>

      </div>
    </section>
  );
}
