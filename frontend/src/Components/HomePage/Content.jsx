import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Content = () => {
  // State to handle hover effect
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <div id='content' className='bg-[url("https://i.pinimg.com/564x/40/f0/e3/40f0e3534cefc92372665093d9217734.jpg")] bg-[length:630px_800px] bg-fixed bg-no-repeat text-white md:bg-[length:1550px_800px]'>

        <div id='title1' className='sticky top-0 z-20 rounded-xl backdrop-blur-2xl hover:bg-[#08387B] duration-1000'>
          <h2 className='font-bree uppercase p-4 text-center text-5xl md:text-7xl'>Analyzers</h2>
        </div>

        <div className='flex h-screen w-full flex-row items-center justify-around p-4 font-averia font-extrabold text-2xl md:text-5xl'>

          {/* WhatsApp Section.. */}
          <div className='grid place-content-center h-screen w-full hover:bg-slate-800/65 hover:text-orange-700 hover:scale-125 active:bg-orange-400 duration-1000' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <Link to="/whatsappAnalyzer">
              <h3 className='text-center hover:duration-1000'>
                {isHovering ? 
                  <img src="../images/whatsapp_logo.jpg" alt="WhatsApp image" className="w-40 h-40 rounded-xl" /> :
                  'WhatsApp'
                }
              </h3>
            </Link>
          </div>
          
          {/* YouTube Section.. */}
          <div className='grid place-content-center h-screen w-full hover:bg-slate-800/65 hover:text-orange-700 hover:scale-125 active:bg-orange-400 duration-1000' onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <Link to="/youtubeAnalyzer">
              <h3 className='text-center hover:duration-1000'>
                {isHovering ? 
                  <img src="../images/youtube logo.jpg" alt="YouTube image" className="w-40 h-40 rounded-xl" /> :
                  'YouTube'
                }
              </h3>
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default Content