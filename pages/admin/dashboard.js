import React from 'react'
import AdminNavbar from '../../components/admin/adminNavbar'
import AdminSidebar from '../../components/admin/adminSideBar'
import Sidebar from '../../components/admin/Sidebar'

function Dasboard() {
  return (
    <div className='bg-gray-200 flex flex-col w-screen min-h-screen relative'>
        <AdminNavbar />
          <Sidebar />
        <div className='w-[80vw] ml-auto h-screen flex'>
        </div>
        <div className='w-[80vw] ml-auto h-screen bg-green-400 flex'>
        </div>
    </div>
  )
}

export default Dasboard