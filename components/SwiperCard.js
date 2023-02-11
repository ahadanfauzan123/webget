import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Keyboard,Scrollbar,Navigation,Pagination } from 'swiper';
import PricingCard from './PricingCard';

function SwiperCard() {
  return (
    <>
    <Swiper
        slidesPerView={1.3}
        spaceBetween={30}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={false}
        keyboard={{ enabled:true, }}
        scrollbar={false}
        loop={false}
        pagination={{ 
        clickable:true,
        }}
        modules={[Autoplay,Keyboard,Scrollbar, Navigation,Pagination]}
        className='relative h-[95%] w-[90%] mt-20 cursor-grab'>
            <SwiperSlide className='bg-[#151825] rounded-2xl flex flex-col items-center gap-y-3 py-5'>
                {/* card */}
                <PricingCard />
            </SwiperSlide>
            <SwiperSlide className='bg-[#151825] rounded-2xl flex flex-col items-center gap-y-3 py-5'>
                {/* card */}
                <PricingCard />
            </SwiperSlide>
            <SwiperSlide className='bg-[#151825] rounded-2xl flex flex-col items-center gap-y-3 py-5'>
                {/* card */}
                <PricingCard />
            </SwiperSlide>
        </Swiper>
    </>
  )
}

export default SwiperCard