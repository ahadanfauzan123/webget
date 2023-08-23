import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {MdLogout} from 'react-icons/md'
import Link from 'next/link'

function Sidebar() {
  return (
    <div className='fixed'>
        <div className='absolute left-0 top-0 w-[20vw] bg-white shadow-xl h-screen z-50 '>
            {/* title */}
            <div className='h-[90px] flex justify-center items-center border-b-2'>
                <h1 className='font-bold text-[28px] text-gray-700'>Ad<span className='text-blue-400'>min</span></h1>
            </div>
            {/* Search */}
            <div className='flex justify-center items-center bg-[#F1F1F1] w-[85%] mt-[20px] mx-auto rounded-full pl-4'>
                <FiSearch className='w-[25px] h-[25px] text-gray-400'/>
                <input type="text" placeholder='Search' className='text-center w-full bg-transparent h-[45px] text-xl font-semibold text-color border-none outline-none' />
            </div>
            {/* Menu */}
            <div className='flex flex-col h-[50px] w-[90%] pl-4 mt-[20px] space-y-[15px]'>
                <h1 className='text-[20px] text-gray-800 font-semibold'>Menu</h1>
                {/* button */}
                <div className='bg-gray-200 flex justify-center items-center w-full h-[80px] sm:space-x-6 lg:space-x-12 sm:text-xl md:text-2xl py-[5px] rounded-[15px]'>
                    <a href="" className='text-gray-600 font-medium'>
                        Dashboard</a>
                </div>
                <div className='bg-gray-200 flex justify-center items-center w-full h-[80px] sm:space-x-6 lg:space-x-12 sm:text-xl md:text-2xl py-[5px] rounded-[15px]'>
                    <a href="" className='text-gray-600 font-medium'>
                        Manage Project</a>
                </div>
                <div className='bg-gray-200 flex justify-center items-center w-full h-[80px] sm:space-x-6 lg:space-x-12 sm:text-xl md:text-2xl py-[5px] rounded-[15px]'>
                    <a href="" className='text-gray-600 font-medium'>
                        Message</a>
                </div>
                <div className='bg-gray-200 flex justify-center items-center w-full h-[80px] sm:space-x-6 lg:space-x-12 sm:text-xl md:text-2xl py-[5px] rounded-[15px]'>
                    <a href="" className='text-gray-600 font-medium'>
                        Manage Admin</a>
                </div>
            </div>
            {/* setting */}
            <div className=' w-full mt-80'>
                <div className='border-t-2 border-b-2 flex justify-center items-center w-full h-[50px] sm:space-x-6 lg:space-x-12 sm:text-xl md:text-2xl py-[5px]'>
                    <a href="" className='text-gray-600 font-medium'>
                        Account</a>
                </div>
                <div className='border-b-2 flex justify-center items-center w-full h-[50px] sm:space-x-6 lg:space-x-12 sm:text-xl md:text-2xl py-[5px]'>
                    <a href="" className='text-gray-600 font-medium'>
                        Settings</a>
                </div>
                <div className='flex justify-center items-center w-full h-[80px] sm:space-x-6 lg:space-x-12 sm:text-xl md:text-2xl py-[5px]'>
                    <a href="" className='flex items-center justify-center text-gray-600 font-medium'>
                        Logout
                        <MdLogout className='w-[25px] h-[25px] ml-2 text-gray-600'/>
                        </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar