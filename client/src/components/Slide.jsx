import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import hero1 from '../assets/images/heroBanners/1.jpg'
import hero2 from '../assets/images/heroBanners/2.jpg'
import hero3 from '../assets/images/heroBanners/3.jpg'
import hero4 from '../assets/images/heroBanners/4.jpg'
import hero5 from '../assets/images/heroBanners/5.jpg'
import hero6 from '../assets/images/heroBanners/6.jpg'



export function Slide() {

  const slides = [
    {
      id: 1,
      image: hero1,
      rute: '/products'
    },
    {
      id: 2,
      image: hero2,
      rute: '/products'
    },
    {
      id: 3,
      image: hero3,
      rute: '/products'
    },
    {
      id: 4,
      image: hero4,
      rute: '/products'
    },
    {
      id: 5,
      image: hero5,
      rute: '/products'
    },
    {
      id: 6,
      image: hero6,
      rute: '/products'
    },
  ]

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slider) => (
          <SwiperSlide key={slider.id}>
            <Link to={slider.rute}>
              <img src={slider.image} alt="" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}