import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import { MdCancel } from 'react-icons/md'

function PricingCard() {
  return (
    <>
     <h1 className='text-3xl font-semibold mb-3'>STARTER</h1>
    <div className='flex flex-col h-[80px]'>
        <h3 className='text-red-300 font-semibold line-through'>IDR 500.000</h3>
        <h3 className='text-gray-400 text-lg'>start from</h3>
        <h2 className='text-green-300 text-[34px] font-bold -mt-3'><span className='text-2xl'>IDR</span> 399.000</h2>
    </div>
    <span className='h-[1px] w-[90%] bg-gray-400 mt-6 mb-4'></span>
    <div className='sm:h-[350px] w-[70%] mx-auto flex flex-col items-start gap-y-3'>
                    <div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg'>1 Page</p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg'>Responsive Design</p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg'>Free UI/UX Design</p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg'>Dynamic Website</p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg'>2 Revisions</p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <MdCancel className='text-3xl text-red-300' />  
                        <p className='w-full text-start text-lg'>Domains</p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <MdCancel className='text-3xl text-red-300' />  
                        <p className='w-full text-start text-lg'>Hosting</p>
                    </div>
    </div>
    {/* button */}
    <button className='bg-gradient-to-r from-blue-800 to-gray-700 px-5 py-2 sm:mt-2 rounded-xl font-semibold'>Learn More</button>  
    </>
  )
}

export default PricingCard