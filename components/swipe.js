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

function Swipe({}) {
  const swiper = useSwiper()
  const swiperSlide = useSwiperSlide();
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  return (
    <>
         <Swiper
          effect={"freemode"}
          spaceBetween={40}
          slidesPerView={3}
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
          className="mySwiper w-[calc(100vw+400px)] h-[400px] -translate-x-[200px]"
        >
          <SwiperSlide virtualIndex={0} className={`relative flex items-center justify-center rounded-xl text-white`}>
          {({ isNext,isPrev }) => (
            <>
            <div className={`h-full w-full ${isNext|isPrev ? 'bg-red-400':'absolute bg-black scale-[0.8] z-10'} opacity-60 rounded-xl`} />
            <Image src={Project1} className={`absolute h-full w-full ${isNext|isPrev ? 'scale-100':'scale-[0.8] z-8'} rounded-xl`} />
            </>
          )}
          </SwiperSlide>

          <SwiperSlide virtualIndex={1} className='relative flex items-center justify-center rounded-xl text-white'>
          {({ isNext,isPrev }) => (
            <>
            <div className={`h-full w-full ${isNext|isPrev ? 'bg-red-400':'absolute bg-black scale-[0.8] z-10'} opacity-60 rounded-xl`} />
            <Image src={Project2} className={`absolute h-full w-full ${isNext|isPrev ? 'scale-100':'scale-[0.8] z-8'} rounded-xl`} />
            </>
          )}
          </SwiperSlide>

          <SwiperSlide virtualIndex={2} className='relative flex items-center justify-center rounded-xl text-white'>
          {({ isNext,isPrev }) => (
            <>
            <div className={`h-full w-full ${isNext|isPrev ? 'bg-red-400':'absolute bg-black scale-[0.8] z-10'} opacity-60 rounded-xl`} />
            <Image src={Project3} className={`absolute h-full w-full ${isNext|isPrev ? 'scale-100':'scale-[0.8] z-8'} rounded-xl`} />
            </>
          )}
          </SwiperSlide>

          <SwiperSlide virtualIndex={2} className='relative flex items-center justify-center rounded-xl text-white'>
          {({ isNext,isPrev }) => (
            <>
            <div className={`h-full w-full ${isNext|isPrev ? 'bg-red-400':'absolute bg-black scale-[0.8] z-10'} opacity-60 rounded-xl`} />
            <Image src={Project4} className={`absolute h-full w-full ${isNext|isPrev ? 'scale-100':'scale-[0.8] z-8'} rounded-xl`} />
            </>
          )}
          </SwiperSlide>
        </Swiper>
        <div className='absolute flex items-center justify-between w-[52%] h-[100px]'>
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

export default Swipe