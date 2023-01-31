import React from 'react'
import {SiDiscord,SiInstagram,SiFiverr} from 'react-icons/si'
import {MdPeopleOutline,MdOutlinePriceChange,MdOutlinePermContactCalendar} from 'react-icons/md'

function Navbar() {
  return (
    <div className='relative w-full h-[120px] text-white flex items-center justify-center'>
      <div className='absolute w-full h-full -z-5 bg-black opacity-40'></div>
      <div className='w-[80%] h-[85%] z-10 flex items-center justify-between px-[20px]'>
        <h1 className='font-bold text-[28px]'>web<span className='text-blue-400'>get</span></h1>
        {/* buttons */}
        <div className=' h-[50%] w-[400px] flex justify-center space-x-4'>
          <div className=' flex items-center justify-center h-full w-[60px] rounded-md shadow-sm shadow-gray-600 bg-gray-700 opacity-50'>
            <a href=""><SiDiscord className='text-2xl'/></a>
          </div>
          <div className=' flex items-center justify-center h-full w-[60px] rounded-md shadow-sm shadow-gray-600 bg-gray-700 opacity-50'>
            <a href=""><SiInstagram className='text-2xl'/></a>
          </div>
          <div className=' flex items-center justify-center h-full w-[60px] rounded-md shadow-sm shadow-gray-600 bg-gray-700 opacity-50'>
            <a href=""><SiFiverr className='text-4xl'/></a>
          </div>
        </div>
        {/* lists */}
        <div className='h-full flex-1 flex items-center justify-start'>
          <ul className='w-[90%] flex justify-end space-x-12 font-bold text-[18px] text-gray-400'>
            <li className='flex items-center space-x-1 hover:text-green-300 hover:animate-bounce transition-all cursor-pointer delay-75'>
                <p>Pricing</p>
                <MdOutlinePriceChange className='-rotate-45 text-xl'/>
            </li>
            <li className='flex items-center space-x-1 hover:text-blue-400 hover:animate-bounce transition-all cursor-pointer delay-75'>
              <p>Team</p>
              <MdPeopleOutline className='text-2xl'/>
            </li>
            <li className='flex items-center space-x-1 hover:text-purple-400 hover:animate-bounce transition-all cursor-pointer delay-75'>
              <p>Contact</p>
              <MdOutlinePermContactCalendar className='text-xl -mb-1'/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar