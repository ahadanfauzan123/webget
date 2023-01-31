import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { FreeMode, Navigation, Thumbs,EffectCards } from "swiper";

function Swipe() {
  return (
    <>
         <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[FreeMode, Navigation, EffectCards, Thumbs]}
          slidesPerView={1}
          loop={true}
          className="mySwiper w-[600px] h-[400px]"
        >
          <SwiperSlide className='flex items-center justify-center rounded-xl text-white bg-red-400'>Slide 1</SwiperSlide>
          <SwiperSlide className='flex items-center justify-center rounded-xl text-white bg-red-400'>Slide 2</SwiperSlide>
          <SwiperSlide className='flex items-center justify-center rounded-xl text-white bg-red-400'>Slide 3</SwiperSlide>
        </Swiper>
    </>
  )
}

export default Swipe