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
      image: hero1,
      rute: '/category'
    },
    {
      image: hero2,
      rute: '/category'
    },
    {
      image: hero3,
      rute: '/category'
    },
    {
      image: hero4,
      rute: '/category'
    },
    {
      image: hero5,
      rute: '/category'
    },
    {
      image: hero6,
      rute: '/category'
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
          <SwiperSlide>
            <Link to={slider.rute}>
              <img src={slider.image} alt="" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}