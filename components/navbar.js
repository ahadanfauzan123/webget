import {React,Fragment,useState} from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {SiDiscord,SiInstagram,SiFiverr} from 'react-icons/si'
import {BsFillGearFill} from 'react-icons/bs'
import {BiMenuAltRight} from 'react-icons/bi'
import {MdPeopleOutline,MdOutlinePriceChange,MdOutlinePermContactCalendar} from 'react-icons/md'
import Link from 'next/link'
import { useEffect } from 'react'
import Menu from './headlessUi/Menu'
import ThemeChanger from './ThemeChanger'
import SwitchThemeButton from './SwtichThemeButton'
import { useRecoilState,atom } from 'recoil'
import { lastScrollYState, linkState, navBackgroundState, showNavbarState } from '../atom/atom'

function Navbar() {
  //recoil
  const [linkName, setLinkName] = useRecoilState(linkState)
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [background, setBackground] = useState(false)
  // const controlNavbar = () => {
  //   if (window.scrollY > lastScrollY){
  //     setShow(false)
  //   }else if(window.scrollY === lastScrollY) {
  //     setShow(false)
  //     setBackground(false)
  //   }else {
  //     setShow(true)
  //     setBackground(true)
  //   }
  //   setLastScrollY(window.scrollY)
  // }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (lastScrollY < window.scrollY){
        setShow(true)
      }else if(lastScrollY === window.scrollY) {
        setShow(false)
        setBackground(false)
      }else {
        setShow(true)
        setBackground(true)  
      }
      setLastScrollY(window.scrollY)
    })
    console.log(window.scrollY)
    //return window.removeEventListener('scroll',controlNavbar)
  }, [lastScrollY])
  return (
    <div className={`fixed w-full h-[120px] text-color flex items-center justify-center z-10 pt-4`}>
      <div className={`absolute ${!show && 'hidden'} ${background?'bg-bgNavSec ':' '} w-[82%] h-[70px] opacity-50 lg:translate-y-5 rounded-xl`}/>
      {/* <div className='absolute w-full h-full -z-5 bg-black opacity-40'></div> */}
      <div className={`w-[85vw] ${!show && 'hidden'} ${background?'bg-bgNav':' '} h-[90px] z-50 flex items-center justify-between px-10 rounded-xl`}>
        <Link href={'./'} >
          <h1 className='font-bold text-[28px]'>web<span className='text-blue-400'>get</span></h1>
        </Link>
        {/* lists */}
        <div className='h-full flex-1 sm:hidden lg:flex items-center justify-end'>
          <ul className='w-[90%] flex justify-end space-x-12 font-bold text-[18px] text-color'>
            <li className='flex items-center space-x-1 hover:text-green-300 transition-all cursor-pointer delay-75'>
                <MdOutlinePriceChange className='-rotate-45 text-xl'/>
                <Link href={`#${linkName[1]}`} scroll={true} >
                <p>Pricing</p>
              </Link>
            </li>
            <li className='flex items-center space-x-1 hover:text-blue-400 transition-all cursor-pointer delay-75'>
              <BsFillGearFill className='text-xl'/>
              <Link href={`#${linkName[2]}`} scroll={true} >
                <p>Project</p>
              </Link>
            </li>
            <li className='flex items-center space-x-1 hover:text-blue-400 transition-all cursor-pointer delay-75'>
              <MdPeopleOutline className='text-2xl'/>
              <Link href='#'>
                <p>Team</p>
              </Link>
            </li>
            <li className='flex items-center space-x-1 hover:text-purple-400 transition-all cursor-pointer delay-75'>
              <MdOutlinePermContactCalendar className='text-xl -mb-1'/>
              <p>Contact</p>
            </li>
          </ul>
        </div>
        <div className='ml-12'>
        <SwitchThemeButton/>
        </div>
        {/* when in then smaller screen */}
        <div className='sm:inline-flex lg:hidden'>
          <Menu />
        </div>
      </div>
    </div>
  )
}

export default Navbar