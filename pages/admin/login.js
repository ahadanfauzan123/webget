import React from 'react'
import Navbar from '../../components/navbar'

function Login() {
  return (
    <div className='bg-theme w-screen h-screen  flex items-center justify-center'>
        {/* admin navbar */}
        <div className=''>
            {/* login card */}
            <form action='/adminlogin' method="post">
                <div className='bg-bgCard h-[65vh] w-[50vw] rounded-lg flex flex-col justify-start items-center p-10'>
                    <h1 className='text-color text-3xl font-bold'>admin login</h1>
                    <div className='flex-1 w-full bg-green-300 flex flex-col space-y-5 items-center justify-center pt-[40px]'>
                        {/* username/email */}
                        <div className='w-full bg-yellow-400 flex justify-center'>
                            <input type="text" placeholder='username' className='bg-gray-300 w-[85%] h-[80px] rounded-lg px-[25px] text-xl font-semibold text-color border-none outline-none ' />
                        </div>
                        {/* password */}
                        <div className='w-full bg-red-300 flex justify-center'>
                            <input type="password" placeholder='password' className='bg-gray-300 w-[85%] h-[80px] rounded-lg px-[25px] text-xl font-semibold text-color border-none outline-none ' />
                        </div>
                        {/* submit */}
                        <div className='flex-1 w-full bg-purple-400 flex items-center justify-center'>
                            <button type='submit' value='' class='px-5 py-2 text-white font-semibold text-xl bg-blue-400 rounded-xl w-[150px] h-[60px] shadow hover:shadow-lg transition duration-700'>
                                <a href='./dashboard'>submit</a>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login