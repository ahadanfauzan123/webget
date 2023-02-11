import React,{ useRef } from 'react'
import Swipe from './swipe'
import Swipe2 from './Swipe2'
function Projects() {
  return (
    <div className='h-screen w-full flex flex-col items-center py-6 mb-[50px] mt-[150px]'>
        <h1 className='text-5xl font-bold'>Projects</h1>
        <div className='sm:hidden lg:inline-flex flex-1 bg-none flex flex-col w-screen items-center justify-center'>
         <Swipe />
        </div>
        <div className='relative sm:inline-flex lg:hidden flex-1 bg-none flex flex-col w-screen items-center justify-center'>
         <Swipe2 />
        </div>
        <a href="" className='underline text-lg font-semibold text-blue-300'>see all of them</a>
    </div>
  )
}

export default Projects