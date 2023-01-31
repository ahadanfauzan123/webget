import React from 'react'

function Heading() {
  return (
    <div className='min-h-screen'>
        {/* section 1 */}
        <div className='w-[85%] mx-auto  h-[calc(100vh-120px)] flex items-center justify-between'>
            <div className='flex-[0.8]  flex flex-col space-y-4 justify-start items-start'>
                <h1 className='text-5xl font-bold'>WEBGET <span className='text-blue-400'>,GET AMAZING WEB</span></h1>
                <p className='w-[80%] text-lg justify-start'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde porro iure veniam inventore commodi iusto facilis saepe accusamus nesciunt impedit! Magni deleniti deserunt vero odit. Nam, minus minima. Magnam.
                </p>
                {/* button */}
                <div className='w-[80%] h-[100px] flex items-center justify-start space-x-3'>
                    <a href="" className='bg-blue-400 text-center text-xl flex-[0.3] font-bold py-[15px] rounded-[25px]'>Hire Us</a>
                    <a href="" className='bg-black text-center text-xl flex-[0.3] font-bold py-[15px] rounded-[25px]'>
                        Projects
                    </a>
                </div>
            </div>
            <div className='w-[300px] h-[300px] rounded-[50%] bg-red-400 animate-pulse shadow-2xl shadow-red-300 blur-sm flex items-center justify-center'>
                <div className='w-[85px] h-[85px] rounded-[50%] bg-red-200 shadow-lg shadow-white'></div>
            </div>
        </div>
        {/* section 2 */}
        <div className='w-full h-[calc(100vh-40vh)] bg-[#111010] flex items-center justify-center'>
            <div className='w-[80%] h-full flex items-center justify-between'>
                <div className='animate-spin w-[150px] h-[150px] rounded-[50%] bg-blue-400 animate-pulse shadow-2xl shadow-blue-500 blur-sm flex items-center justify-center'>
                    <div className='w-[50px] h-[50px] rounded-[50%] bg-blue-200 shadow-lg shadow-white'></div>
                </div>
                <div className='flex-[0.7] flex flex-col items-start justify-start space-y-4'>
                <h1 className='text-6xl font-bold'>Passionate in making any website</h1>
                    <p className=' text-lg justify-start'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde porro iure veniam inventore commodi iusto facilis saepe accusamus nesciunt impedit! Magni deleniti deserunt vero odit. Nam, minus minima. Magnam.
                    </p>
                </div>
            </div>
        </div>
        {/* section 3 */}
        <div className='w-full h-screen flex items-center justify-between px-[100px]'>
            <h1 className='text-5xl font-bold'>What We will Provide you</h1>
            <h3>parallax</h3>
        </div>
    </div>
  )
}

export default Heading