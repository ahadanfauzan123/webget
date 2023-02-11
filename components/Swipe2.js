import React, { useState,useRef } from 'react'
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import { FreeMode, Navigation, Thumbs,EffectCards, Autoplay } from "swiper";
import Image from 'next/image';
import Project1 from '../src/project/1.png'
import Project2 from '../src/project/2.png'
import Project3 from '../src/project/3.png'
import Project4 from '../src/project/4.png'
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'

function Swipe2({}) {
  const swiper = useSwiper()
  const swiperSlide = useSwiperSlide();
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  return (
    <>
         <Swiper
          effect={"freemode"}
          spaceBetween={10}
          slidesPerView={1}
          allowTouchMove={false}
          initialSlide={0}
          navigation={{ 
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
           }}
          modules={[FreeMode, Navigation, EffectCards, Thumbs,Autoplay]}
          loop={true}
          autoplay={{ 
            delay:5000,
            disabledOnInteract:false
           }}
          className="mySwiper w-screen h-[300px]"
        >
          <SwiperSlide virtualIndex={0} className={`relative flex items-center justify-center text-white`}>
            <Image src={Project1} className={`absolute h-full w-full bg-cover`} />
          </SwiperSlide>
          <SwiperSlide virtualIndex={0} className={`relative flex items-center justify-center text-white`}>
            <Image src={Project2} className={`absolute h-full w-full bg-cover`} />
          </SwiperSlide>
          <SwiperSlide virtualIndex={0} className={`relative flex items-center justify-center text-white`}>
            <Image src={Project3} className={`absolute h-full w-full bg-cover`} />
          </SwiperSlide>
          <SwiperSlide virtualIndex={0} className={`relative flex items-center justify-center text-white`}>
            <Image src={Project4} className={`absolute h-full w-full bg-cover`} />
          </SwiperSlide>
        </Swiper>
        <div className='absolute bottom-14 flex items-center justify-between w-[52%] h-[100px] z-[50]'>
          <button className='z-50 flex items-center justify-center bg-white h-[50px] w-[50px] p-4 rounded-[50%] cursor-pointer' ref={navigationPrevRef}>
            <FaArrowLeft className='text-xl text-[#68626296]' />
          </button>
          <button className='z-50 flex items-center justify-center bg-white h-[50px] w-[50px] p-4 rounded-[50%] cursor-pointer' ref={navigationNextRef}>
            <FaArrowRight className='text-xl text-[#68626296]' />
          </button>
        </div>
        </>

  )
}

export default Swipe2