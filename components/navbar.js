import React from 'react'
import {SiDiscord,SiInstagram,SiFiverr} from 'react-icons/si'
import {BsFillGearFill} from 'react-icons/bs'
import {MdPeopleOutline,MdOutlinePriceChange,MdOutlinePermContactCalendar} from 'react-icons/md'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'

function Navbar() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [background, setBackground] = useState(false)
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY){
      setShow(false)
    }else if(window.scrollY === lastScrollY) {
      setShow(true)
      setBackground(true)
    }else {
      setShow(true)
    }
    setLastScrollY(window.scrollY)
  }
  useEffect(() => {
    window.addEventListener('scroll',controlNavbar)
    console.log(window.scrollY)
    //return window.removeEventListener('scroll',controlNavbar)
  }, [lastScrollY])
  return (
    <div className={`fixed w-full h-[120px] text-white flex items-center justify-center z-10 pt-4`}>
      <div className={`absolute ${!show && 'hidden'} ${background?'bg-[#d9d9d9] ':' '} w-[82%] h-[70px] opacity-50 lg:translate-y-5 rounded-xl`}/>
      {/* <div className='absolute w-full h-full -z-5 bg-black opacity-40'></div> */}
      <div className={`w-[85vw] ${!show && 'hidden'} ${background?'bg-[#151825]':' '} h-[90px] z-50 flex items-center justify-between px-10 rounded-xl`}>
        <Link href={'./'}>
          <h1 className='font-bold text-[28px]'>web<span className='text-blue-400'>get</span></h1>
        </Link>
        {/* buttons */}
        {/* <div className=' h-[50%] w-[400px] flex justify-center space-x-4'>
          <div className=' flex items-center justify-center h-full w-[60px] rounded-md shadow-sm shadow-gray-600 bg-gray-700'>
            <a href=""><SiDiscord className='text-2xl'/></a>
          </div>
          <div className=' flex items-center justify-center h-full w-[60px] rounded-md shadow-sm shadow-gray-600 bg-gray-700'>
            <a href=""><SiInstagram className='text-2xl'/></a>
          </div>
          <div className=' flex items-center justify-center h-full w-[60px] rounded-md shadow-sm shadow-gray-600 bg-gray-700'>
            <a href=""><SiFiverr className='text-4xl'/></a>
          </div>
        </div> */}
        {/* lists */}
        <div className='h-full flex-1 flex items-center justify-end'>
          <ul className='w-[90%] flex justify-end space-x-12 font-bold text-[18px] text-gray-400'>
            <li className='flex items-center space-x-1 hover:text-green-300 transition-all cursor-pointer delay-75'>
                <MdOutlinePriceChange className='-rotate-45 text-xl'/>
                <p>Pricing</p>
            </li>
            <li className='flex items-center space-x-1 hover:text-blue-400 transition-all cursor-pointer delay-75'>
              <MdPeopleOutline className='text-2xl'/>
              <Link href={'./team'}>
                <p>Team</p>
              </Link>
            </li>
            <li className='flex items-center space-x-1 hover:text-blue-400 transition-all cursor-pointer delay-75'>
              <BsFillGearFill className='text-xl'/>
              <Link href={'./team'}>
                <p>Project</p>
              </Link>
            </li>
            <li className='flex items-center space-x-1 hover:text-purple-400 transition-all cursor-pointer delay-75'>
              <MdOutlinePermContactCalendar className='text-xl -mb-1'/>
              <p>Contact</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar