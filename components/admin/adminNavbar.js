import Link from 'next/link'
import React from 'react'
import { BsFillGearFill } from 'react-icons/bs'
import { MdOutlinePermContactCalendar, MdOutlinePriceChange, MdPeopleOutline } from 'react-icons/md'
import SwitchThemeButton from '../SwtichThemeButton'
import Menu from '../headlessUi/Menu'
import AdminMenu from '../headlessUi/AdminMenu'

function AdminNavbar() {
  return (
    <div className={`w-[80vw] h-[90px] text-color flex items-start justify-end ml-auto border-b-8 border-black`}>
      <div className={`w-full bg-white h-[90px] z-50 flex items-center justify-between px-10`}>
        <Link href={'./dashboard'} >
          <h1 className='font-bold text-[28px] text-gray-700'>Dashboard Admin</h1>
        </Link>
        {/* lists */}
        <div className='h-full flex-1  sm:hidden lg:flex items-center justify-end px-10'>
          <div className='translate-y-[2px]'>
          <AdminMenu />
          </div>
        </div>
        {/* <div className='ml-12'>
        <SwitchThemeButton/>
        </div> */}
      </div>
    </div>
  )
}

export default AdminNavbar