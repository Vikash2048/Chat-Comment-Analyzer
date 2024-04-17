import React from 'react'
import { Link } from 'react-router-dom'

const Content = () => {
  return (
    <>
      <div id='content' className='bg-[url("https://i.pinimg.com/564x/40/f0/e3/40f0e3534cefc92372665093d9217734.jpg")] bg-[length:630px_800px] bg-fixed bg-no-repeat text-white md:bg-[length:1550px_800px]'>
        <div id='title1' className='sticky top-0 z-20 rounded-xl backdrop-blur-2xl hover:bg-[#08387B] duration-1000'>
          <h2 className='font-bree uppercase p-4 text-center text-5xl md:text-7xl'>Analyzers</h2>
        </div>

        <div className='flex h-screen w-full flex-row items-center justify-around p-4 font-averia font-extrabold text-2xl md:text-5xl'>
<<<<<<< HEAD
          <div className='grid place-content-center h-screen w-full hover:bg-slate-800/65 hover:text-orange-700 hover:scale-125 active:bg-orange-400 duration-1000'><Link to="/whatsappAnalyzer"><h3 className='text-center'>WhatsApp</h3></Link></div>
=======
          <Link to="/whatsappAnalyzer">
            <div className='grid place-content-center h-screen w-full hover:bg-slate-800/65 hover:text-orange-700 hover:scale-125 active:bg-orange-400 duration-1000'><h3 className='text-center'>WhatsApp</h3></div>
          </Link>
          
          <Link to="/youtubeAnalyzer">
>>>>>>> 2193ae825c211012e5236dec0018d7aca369d4ed
          <div className='grid place-content-center h-screen w-full hover:bg-slate-800/65 hover:text-orange-700 hover:scale-125 active:bg-orange-400 duration-1000'><h3 className='text-center'>YouTube</h3></div>
          </Link>
          <div className='grid place-content-center h-screen w-full hover:bg-slate-800/65 hover:text-orange-700 hover:scale-125 active:bg-orange-400 duration-1000'><h3 className='text-center'>Instagram</h3></div>
          <div className='grid place-content-center h-screen w-full hover:bg-slate-800/65 hover:text-orange-700 hover:scale-125 active:bg-orange-400 duration-1000'><h3 className='text-center'>Twitter</h3></div>
        </div>
      </div>
    </>
  )
}

export default Content