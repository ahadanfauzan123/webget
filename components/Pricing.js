import React from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'
import { MdCancel } from 'react-icons/md'

function Pricing() {
  return (
    <div className='mt-10 w-[80%] h-screen mx-auto flex flex-col items-center space-y-8 pt-4'>
        <div className='flex flex-col items-center gap-y-3'>
            <h1 className='text-5xl font-bold'>Pricing</h1>
        </div>
        {/* cards */}
        <div className='flex-1 w-full flex items-center justify-between'>
            <div className='h-full w-[30%] bg-[#151825] rounded-2xl flex flex-col items-center gap-y-3 py-5 '>
                <h1 className='text-3xl font-semibold mb-3'>STARTER</h1>
                <div className='flex flex-col h-[80px]'>
                    <h3 className='text-red-300 font-semibold line-through'>IDR 500.000</h3>
                    <h3 className='text-gray-400 text-lg'>start from</h3>
                    <h2 className='text-green-300 text-[34px] font-bold -mt-3'><span className='text-2xl'>IDR</span> 399.000</h2>
                </div>
                <span className='h-1 w-full bg-gray-400 mt-6 mb-4'></span>
                <div className='flex-1 w-[70%] mx-auto flex flex-col items-start gap-y-3'>
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
                <button className='bg-gradient-to-r from-blue-800 to-gray-700 px-5 py-2 rounded-xl font-semibold'>Learn More</button>
            </div>
            <div className='h-full w-[30%] bg-[#151825] rounded-2xl flex flex-col items-center gap-y-3 py-5 '>
                <h1 className='text-3xl font-semibold mb-3'>PRO</h1>
                <div className='flex flex-col h-[80px]'>
                    <h3 className='text-red-300 font-semibold line-through'>IDR 1.500.000</h3>
                    <h3 className='text-gray-400 text-lg'>start from</h3>
                    <h2 className='text-green-300 text-[34px] font-bold -mt-3'><span className='text-2xl'>IDR</span> 1.299.000</h2>
                </div>
                <span className='h-1 w-full bg-gray-400 mt-6 mb-4'></span>
                <div className='flex-1 w-[70%] mx-auto flex flex-col items-start gap-y-3'>
                <div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg'>Up To 5 pages</p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg'>Free UI/UX Design</p>
                    </div>
                    <div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg'>Dynamic Website</p>
                    </div><div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg'>5 Revisions</p>
                    </div><div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg'>Domains</p>
                    </div><div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg'>Hosting up to 3GB Capacity</p>
                    </div>
                </div>
                {/* button */}
                <button className='bg-gradient-to-r from-blue-800 to-gray-700 px-5 py-2 rounded-xl font-semibold'>Learn More</button>
            </div>
            <div className='h-full w-[30%] bg-[#151825] rounded-2xl flex flex-col items-center gap-y-3 py-5'>
                <h1 className='text-3xl font-semibold mb-3'>CUSTOM</h1>
                <div className='flex flex-col h-[80px]'>
                    <h2 className='text-red-400 text-[34px] font-bold'>CALL US</h2>
                </div>
                <span className='h-1 w-full bg-gray-400 mt-6 mb-4'></span>
                <div className='flex-1 w-[70%] mx-auto flex flex-col items-start gap-y-3'>
                <div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg'>Unlimited Page</p>
                    </div><div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg'>Responsive Design</p>
                    </div><div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg'>Custom UI/UX design</p>
                    </div><div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg'>Unlimited Revision</p>
                    </div><div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg'>Domains</p>
                    </div><div className='flex items-center gap-x-3'>
                        <BsCheckCircleFill className='text-3xl text-green-300' />  
                        <p className='w-full text-start text-lg'>Hosting up to 10GB Capacity</p>
                    </div>
                </div>
                {/* button */}
                <button className='bg-gradient-to-r from-blue-800 to-gray-700 px-5 py-2 rounded-xl font-semibold'>Learn More</button>
                
            </div>
        </div>
    </div>
  )
}

export default Pricing