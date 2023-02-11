import React from 'react'
import {SiFiverr, SiFreelancer} from 'react-icons/si'
import {AiOutlineInstagram} from 'react-icons/ai'
import {CgMail} from 'react-icons/cg'

function Contact() {
  return (
    <div className='min-h-[100vh] w-screen bg-[#161616] mx-auto flex flex-col items-center justify-center space-y-8'>
        {/* title */}
        <div className='sm:w-[100%] lg:w-[60%] mt-[30px]'>
            <h1 className='sm:text-3xl lg:text-5xl font-bold text-white text-center'>We made awesome websites, so always feel free to hire us.</h1>
        </div>
        <span class="h-1 w-full bg-gray-400 sm:w-full lg:w-1/3 xl:w-screen"></span>
        <div className='flex-1 sm:w-[290px] lg:w-[85%] flex sm:flex-col sm:space-y-6 lg:flex-row items-center justify-between'>
            {/* header */}
            <div className='sm:flex-[0.25] lg:flex-[0.35] flex flex-col sm:space-y-2 space-y-7'>
                <h1 className='sm:text-2xl lg:text-6xl font-bold'>web<span className="text-blue-300">get</span></h1>
                <p className='sm:text-sm text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maiores incidunt repellendus porro sapiente pariatur culpa inventore non.</p>
            </div>
            {/* cards */}
            <div className='sm:flex-[0.75] lg:flex-[0.65] sm:flex sm:flex-col space-y-2 lg:grid lg:grid-cols-2 gap-x-2'>
                <div className='lg:w-[350px] h-[80px] lg:h-[100px] bg-[#2e2c2c] rounded-xl flex items-center px-8 space-x-2 hover:bg-[#535151] transition-all ease-linear duration-300 cursor-pointer'>
                {/* fiverr */}
                <h1 className='text-green-400 flex-[0.5]'><SiFiverr className='text-[65px]'/></h1>
                <h1 className='text-lg font-semibold text-gray-300'>fiverr/webgetStore</h1>
                </div>
                <div className='lg:w-[350px] h-[80px] lg:h-[100px] bg-[#2e2c2c] rounded-xl flex items-center px-8 space-x-2 hover:bg-[#535151] transition-all ease-linear duration-300 cursor-pointer'>
                    {/* freelancer */}
                    <h1 className='text-blue-400 flex-[0.5]'><SiFreelancer className='text-[50px]'/></h1>
                    <h1 className='text-lg font-semibold text-gray-300'>freelancer/webget</h1>
                </div>
                <div className='lg:w-[350px] h-[80px] lg:h-[100px] bg-[#2e2c2c] rounded-xl flex items-center px-8 space-x-2 hover:bg-[#535151] transition-all ease-linear duration-300 cursor-pointer'>
                    {/* intagram */}
                    <h1 className='text-pink-400 flex-[0.5]'><AiOutlineInstagram className='text-[40px]'/></h1>
                    <h1 className='text-lg font-semibold text-gray-300'>@webgetid_</h1>
                </div>
                <div className='lg:w-[350px] h-[80px] lg:h-[100px] bg-[#2e2c2c] rounded-xl flex items-center px-8 space-x-2 hover:bg-[#535151] transition-all ease-linear duration-300 cursor-pointer'>
                    {/* email */}
                    <h1 className='text-gray-400 flex-[0.5]'><CgMail className='text-[40px]'/></h1>
                    <h1 className='text-lg font-semibold text-gray-300'>webget@gmail.co.id</h1>
                </div>
            </div>

        </div>
        {/* contact box */}
        
    </div>
  )
}

export default Contact