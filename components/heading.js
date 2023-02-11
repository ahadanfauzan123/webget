import React from 'react'
import {BiMouse} from 'react-icons/bi'

function Heading() {
  return (
    <div className='min-h-screen'>
        {/* section 1 */}
        <div className='relative w-screen h-screen flex items-center justify-center sm:translate-y-[-36px] lg:translate-y-[48px]'>     
            <div className='flex-[0.8] flex flex-col space-y-3 justify-center items-center'>
                <h1 className='sm:text-[40px] lg:text-[64px] font-bold sm:text-center'>WEBGET, <span className=''>GET AMAZING WEB</span></h1>
                <p className=' lg:w-[65%] sm:text-[14px] lg:text-[24px] text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde porro iure veniam inventore commodi iusto facilis saepe accusamus nesciunt impedit! Magni deleniti deserunt vero odit. Nam, minus minima. Magnam.
                </p>
                {/* button */}
                <div className='sm:w-full md:w-[80%] h-[100px] flex items-center justify-center sm:space-x-6 lg:space-x-12 sm:text-xl md:text-2xl'>
                    <a href="" className='bg-white text-black border-[8px] border-[#151825] text-center sm:flex-[0.38] lg:flex-[0.25] font-bold py-[8px] rounded-[30px]'>
                        Hire Us</a>
                    <a href="" className='bg-[#151825] text-center sm:flex-[0.4] font-bold py-[15px] rounded-[30px]'>
                        Projects
                    </a>
                </div>
                {/* mouse */}
                <div className='absolute sm:bottom-10 md:hidden'>
                    <BiMouse className='h-12 w-12 animate-bounce opacity-80'/>
                </div>
            </div>
        </div>
        {/* section 2 */}
        <div className='w-full h-screen bg-[#151825] flex items-center justify-center'>
            <div className='w-[80%] sm:h-[75%] lg:h-full flex sm:flex-col lg:flex-row items-center justify-between'>
                <div className='animate-spin w-[150px] h-[150px] rounded-[50%] bg-blue-400 animate-pulse shadow-2xl shadow-blue-500 blur-sm flex items-center justify-center'>
                    <div className='w-[50px] h-[50px] rounded-[50%] bg-blue-200 shadow-lg shadow-white'></div>
                </div>
                <div className='flex-[0.7] flex flex-col items-start justify-start space-y-4'>
                <h1 className='sm:text-2xl lg:text-6xl font-bold'>Passionate in making any website</h1>
                    <p className='sm:text-sm lg:text-lg justify-start'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde porro iure veniam inventore commodi iusto facilis saepe accusamus nesciunt impedit! Magni deleniti deserunt vero odit. Nam, minus minima. Magnam.
                    </p>
                </div>
            </div>
        </div>
        {/* section 3 */}
    </div>
  )
}

export default Heading