import React,{ useRef } from 'react'
import Swipe from './swipe'
function Projects() {
  return (
    <div className='h-screen w-full flex flex-col items-center py-6'>
        <h1 className='text-3xl font-bold'>Projects</h1>
        <div className='flex-1 bg-none flex items-center justify-center'>
         <Swipe />
        </div>
        <a href="" className='underline text-lg font-semibold text-blue-300'>see all of them</a>
    </div>
  )
}

export default Projects