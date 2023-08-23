import React from 'react'
import Contact from '../components/Contact'
import Navbar from '../components/navbar'
import Rose from '../src/rose.png'
import Lisa from '../src/lisa.png'
import Jennie from '../src/jennie.png'
import Jisoo from '../src/jisoo.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay,Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import Image from 'next/image';
import { SiDiscord, SiFiverr, SiInstagram } from 'react-icons/si';
import { AiFillGithub } from 'react-icons/ai';
import { BiGlobe } from 'react-icons/bi'

function Team() {
  return (
    <div className='bg-theme'>
        {/* navbar */}
        <Navbar />
        {/* main */}
        <div className='min-h-[calc(100vh+240px)] w-full flex flex-col items-end justify-end'>
            <div className='min-h-[calc(100vh+120px)] w-full flex flex-col items-center space-y-6'>
                {/* header */}
                {/* cards */}
                <div className='flex-1 w-screen'>
                  <Swiper
                  slidesPerView={1.25}
                  spaceBetween={60}
                  centeredSlides={false}
                  slidesPerGroupSkip={1}
                  grabCursor={false}
                  keyboard={{ enabled:true, }}
                  scrollbar={false}
                  autoplay={{ 
                    delay:3000,
                    disabledOnInteract:false
                   }}
                   loop={false}
                  pagination={{ 
                    clickable:true,
                   }}
                  modules={[Autoplay,Keyboard,Scrollbar, Navigation,Pagination]}
                  className='relative h-[500px] w-[80%] mt-20 cursor-grab'>
                    <SwiperSlide className='flex flex-col space-y-3 items-center justify-center cursor-default'>
                      <h1 className='text-8xl font-bold'>WEBGET</h1>
                      <h3 className='text-lg font-semibold'>meet our team</h3>
                    </SwiperSlide>
                    {/* ahadan */}
                    <SwiperSlide className='bg-[#2c2a2a] flex rounded-[25px]'>
                      {/* image */}
                        <Image 
                          src={Rose}
                          alt='profile 1'
                          width={400}
                          className='absolute -translate-y-5 -translate-x-[150px] z-50' />
                      {/* description */}
                      <div className='flex-1 pl-[200px] flex flex-col justify-center'>
                        <h1 className='text-7xl font-semibold'>AHADAN</h1>
                        <div className='w-[90%] space-y-4'>
                          <div className='mt-6 bg-blue-300 w-[120px] text-xl flex items-center justify-center rounded-xl'>developer</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis ab cupiditate eius maxime minima reprehenderit expedita, voluptatem iure iusto.</p>
                        </div>
                        {/* button */}
                        <div className='z-10 h-[40%] w-[400px] flex space-x-4 mt-[20px]'>
                        <div className=' flex items-center justify-center h-[60px] w-[60px] rounded-md bg-[#141313]'>
                          <a href=""><AiFillGithub className='text-2xl'/></a>
                        </div>
                        <div className=' flex items-center justify-center h-[60px] w-[60px] rounded-md bg-[#141313]'>
                          <a href=""><SiInstagram className='text-2xl'/></a>
                        </div>
                        <div className=' flex items-center justify-center h-[60px] w-[60px] rounded-md bg-[#141313]'>
                          <a href=""><BiGlobe className='text-4xl'/></a>
                        </div>
                      </div>
                      <div className='absolute bottom-[-30px] left-[-15px] h-[270px] w-[270px] rounded-[50%] bg-gradient-to-tr from-red-400 to-orange-400'/>
                      </div>
                    </SwiperSlide>
                    {/* syadda */}
                    <SwiperSlide className='bg-[#2c2a2a] flex rounded-[25px]'>
                      {/* image */}
                        <Image 
                          src={Lisa}
                          alt='profile 1'
                          width={250}
                          className='absolute -translate-y-5 -translate-x-[80px] z-50' />
                      {/* description */}
                      <div className='flex-1 pl-[200px] flex flex-col justify-center'>
                        <h1 className='text-7xl font-semibold'>SYADDA</h1>
                        <div className='w-[90%] space-y-4'>
                          <div className='mt-6 bg-blue-300 w-[120px] text-xl flex items-center justify-center rounded-xl'>designer</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis ab cupiditate eius maxime minima reprehenderit expedita, voluptatem iure iusto.</p>
                        </div>
                        {/* button */}
                        <div className=' h-[40%] w-[400px] flex space-x-4 mt-[20px]'>
                        <div className=' flex items-center justify-center h-[60px] w-[60px] rounded-md bg-[#141313]'>
                          <a href=""><AiFillGithub className='text-2xl'/></a>
                        </div>
                        <div className=' flex items-center justify-center h-[60px] w-[60px] rounded-md bg-[#141313]'>
                          <a href=""><SiInstagram className='text-2xl'/></a>
                        </div>
                        <div className=' flex items-center justify-center h-[60px] w-[60px] rounded-md bg-[#141313]'>
                          <a href=""><BiGlobe className='text-4xl'/></a>
                        </div>
                      </div>
                      
                      </div>
                    </SwiperSlide>
                    {/* justin */}
                    <SwiperSlide className='bg-[#2c2a2a] flex rounded-[25px]'>
                      {/* image */}
                        <Image 
                          src={Jennie}
                          alt='profile 1'
                          width={250}
                          className='absolute translate-y-20 -translate-x-[40px] z-50' />
                      {/* description */}
                      <div className='flex-1 pl-[200px] flex flex-col justify-center'>
                        <h1 className='text-7xl font-semibold'>ICHLASUL</h1>
                        <div className='w-[90%] space-y-4'>
                          <div className='mt-6 bg-blue-300 w-[200px] text-xl flex items-center justify-center rounded-xl'>brand ambassador</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis ab cupiditate eius maxime minima reprehenderit expedita, voluptatem iure iusto.</p>
                        </div>
                        {/* button */}
                        <div className=' h-[40%] w-[400px] flex space-x-4 mt-[20px]'>
                        <div className=' flex items-center justify-center h-[60px] w-[60px] rounded-md bg-[#141313]'>
                          <a href=""><AiFillGithub className='text-2xl'/></a>
                        </div>
                        <div className=' flex items-center justify-center h-[60px] w-[60px] rounded-md bg-[#141313]'>
                          <a href=""><SiInstagram className='text-2xl'/></a>
                        </div>
                        <div className=' flex items-center justify-center h-[60px] w-[60px] rounded-md bg-[#141313]'>
                          <a href=""><BiGlobe className='text-4xl'/></a>
                        </div>
                      </div>
                      </div>
                    </SwiperSlide>
                    {/* rafa */}
                    <SwiperSlide className='bg-[#2c2a2a] flex rounded-[25px]'>
                      {/* image */}
                        <Image 
                          src={Jisoo}
                          alt='profile 1'
                          width={400}
                          className='absolute -translate-y-[130px] -translate-x-[120px] z-50' />
                      {/* description */}
                      <div className='flex-1 pl-[200px] flex flex-col justify-center'>
                        <h1 className='text-7xl font-semibold'>KHAIRRURAFA</h1>
                        <div className='w-[90%] space-y-4'>
                          <div className='mt-6 bg-blue-300 w-[120px] text-xl flex items-center justify-center rounded-xl'>developer</div>
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit omnis ab cupiditate eius maxime minima reprehenderit expedita, voluptatem iure iusto.</p>
                        </div>
                        {/* button */}
                        <div className=' h-[40%] w-[400px] flex space-x-4 mt-[20px]'>
                        <div className=' flex items-center justify-center h-[60px] w-[60px] rounded-md bg-[#141313]'>
                          <a href=""><AiFillGithub className='text-2xl'/></a>
                        </div>
                        <div className=' flex items-center justify-center h-[60px] w-[60px] rounded-md bg-[#141313]'>
                          <a href=""><SiInstagram className='text-2xl'/></a>
                        </div>
                        <div className=' flex items-center justify-center h-[60px] w-[60px] rounded-md bg-[#141313]'>
                          <a href=""><BiGlobe className='text-4xl'/></a>
                        </div>
                      </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
            </div>
        </div>
        {/* contact */}
        <Contact />
    </div>
  )
}

export default Team