import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './gallery.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Gallery2() {
  return (
    <>
    <h1 className='gallery-heading'>Gallery</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}  
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://wrlandconservancy.org/wp-content/themes/western-reserve/img/placeholder.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://beasleysjewelry.com/wp-content/uploads/2020/04/calm-1.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://wrlandconservancy.org/wp-content/themes/western-reserve/img/placeholder.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://beasleysjewelry.com/wp-content/uploads/2020/04/calm-1.jpg" alt="" /></SwiperSlide>   
      </Swiper>
    </>
  );
}
