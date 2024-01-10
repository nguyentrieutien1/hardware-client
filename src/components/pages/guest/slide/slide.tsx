import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./slide.css"

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
export default function Slide() {
    return (
        <div className="container">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            autoplay={true}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
          >
            <SwiperSlide>
              <h1>dsad</h1>
              <img  src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img  src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img  src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img  src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img  src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img  src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img  src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img  src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img  src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide>
          </Swiper>
        </div>
      );
}
