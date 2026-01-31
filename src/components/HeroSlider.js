"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import hero1 from "@/assets/banner5.webp";
import hero2 from "@/assets/banner6.webp";
import hero3 from "@/assets/banner8.webp";
import hero4 from "@/assets/banner8webp.webp";

export default function HeroSection() {
  return (
    <div className="hero-left">
      <section className="offer-banner">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          loop={true}
          speed={1200} // smooth slide speed (ms)
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <Image src={hero2} alt="Offer 2" className="offer-banner-img" />
          </SwiperSlide>

          <SwiperSlide>
            <Image src={hero3} alt="Offer 3" className="offer-banner-img" />
          </SwiperSlide>

          <SwiperSlide>
            <Image src={hero1} alt="Offer 1" className="offer-banner-img" />
          </SwiperSlide>

          <SwiperSlide>
            <Image src={hero4} alt="Offer 4" className="offer-banner-img" />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}
