import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import { MdCancel } from 'react-icons/md'
import SwiperCard from './SwiperCard'
import { useRecoilState,atom } from 'recoil'
import { linkState } from '../atom/atom'

function Pricing() {
    //recoil
    const [linkName, setLinkName] = useRecoilState(linkState)
  return (
    <div id={linkName[1]} className='mt-10 w-[80%] h-screen mx-auto flex flex-col items-center lg:space-y-8 pt-4'>
        <div className='flex flex-col items-center gap-y-3'>
            <h1 className='text-5xl font-bold text-color'>Pricing</h1>
        </div>
        {/* cards */}
        <div className='sm:hidden lg:inline-flex flex-1 w-full flex items-center justify-between'>
            <div className='h-full w-[30%] bg-bgCard rounded-2xl flex flex-col items-center gap-y-3 py-5 '>
                <h1 className='text-3xl font-semibold mb-3 text-color'>STARTER</h1>
                <div className='flex flex-col h-[80px]'>
                    <h3 className='text-red-300 font-semibold line-through'>IDR 500.000</h3>
                    <h3 className='text-gray-400 text-lg'>start from</h3>
                    <h2 className='text-green-300 text-[34px] font-bold -mt-3'><span className='text-2xl'>IDR</span> 399.000</h2>
                </div>
                <span className='h-1 w-full bg-gray-400 mt-6 mb-4'></span>
                <div className='flex-1 w-[70%] mx-auto flex flex-col items-start gap-y-3'>
                    <div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg text-color'>1 Page</p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg text-color'>Responsive Design</p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg text-color'>Free UI/UX Design</p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg text-color'>Dynamic Website</p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg text-color'>2 Revisions</p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <MdCancel className='text-3xl text-red-300' />  
                        <p className='w-full text-start text-lg text-color'>Domains</p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <MdCancel className='text-3xl text-red-300' />  
                        <p className='w-full text-start text-lg text-color'>Hosting</p>
                    </div>
                   
                </div>
                {/* button */}
                <button className='bg-gradient-to-r from-blue-800 to-gray-700 px-5 py-2 rounded-xl font-semibold'>Learn More</button>
            </div>
            <div className='h-full w-[30%] bg-bgCard rounded-2xl flex flex-col items-center gap-y-3 py-5 '>
                <h1 className='text-3xl font-semibold mb-3 text-color'>PRO</h1>
                <div className='flex flex-col h-[80px]'>
                    <h3 className='text-red-300 font-semibold line-through'>IDR 1.500.000</h3>
                    <h3 className='text-gray-400 text-lg'>start from</h3>
                    <h2 className='text-green-300 text-[34px] font-bold -mt-3'><span className='text-2xl'>IDR</span> 1.299.000</h2>
                </div>
                <span className='h-1 w-full bg-gray-400 mt-6 mb-4'></span>
                <div className='flex-1 w-[70%] mx-auto flex flex-col items-start gap-y-3'>
                <div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg text-color'>Up To 5 pages</p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg text-color'>Free UI/UX Design</p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg text-color'>Dynamic Website</p>
                    </div><div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg text-color'>5 Revisions</p>
                    </div><div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg text-color'>Domains</p>
                    </div><div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg text-color'>Hosting up to 3GB Capacity</p>
                    </div>
                </div>
                {/* button */}
                <button className='bg-gradient-to-r from-blue-800 to-gray-700 px-5 py-2 rounded-xl font-semibold'>Learn More</button>
            </div>
            <div className='h-full w-[30%] bg-bgCard rounded-2xl flex flex-col items-center gap-y-3 py-5'>
                <h1 className='text-3xl font-semibold mb-3 text-color'>CUSTOM</h1>
                <div className='flex flex-col h-[80px]'>
                    <h2 className='text-red-400 text-[34px] font-bold'>CALL US</h2>
                </div>
                <span className='h-1 w-full bg-gray-400 mt-6 mb-4'></span>
                <div className='flex-1 w-[70%] mx-auto flex flex-col items-start gap-y-3'>
                <div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg text-color'>Unlimited Page</p>
                    </div><div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg text-color'>Responsive Design</p>
                    </div><div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg text-color'>Custom UI/UX design</p>
                    </div><div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg text-color'>Unlimited Revision</p>
                    </div><div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg text-color'>Domains</p>
                    </div><div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg text-color'>Hosting up to 10GB Capacity</p>
                    </div>
                </div>
                {/* button */}
                <button className='bg-gradient-to-r from-blue-800 to-gray-700 px-5 py-2 rounded-xl font-semibold'>Learn More</button>
                
            </div>
        </div>
        {/* cards in the smaller screen */}
        <div className='lg:hidden flex-1 w-screen'>
            {/* cards */}
            <SwiperCard />
        </div>
    </div>
  )
}

export default Pricing