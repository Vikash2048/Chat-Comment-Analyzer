import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Content = () => {
  // State to handle hover effect
  const [wHovering, setWHovering] = useState(false);
  const [yHovering, setYHovering] = useState(false);

  return (
    <>
      <div id='content' className='bg-[url("../images/contentbg.jpg")] h-lvh w-full bg-cover bg-no-repeat text-white '>

        <div id='title1' className='sticky top-0 z-20 rounded-xl backdrop-blur-2xl hover:bg-[#08387B] duration-1000'>
          <h2 className='font-bree uppercase p-4 text-center text-5xl md:text-7xl'>Analyzers</h2>
        </div>

        <div className='flex h-screen w-full md:flex-row flex-col items-center justify-center gap-10 p-4 font-averia font-extrabold text-2xl md:text-5xl'>

          {/* WhatsApp Section.. */}
          <div className='grid place-content-center md:h-[400px] h-[300px] w-[600px] hover:bg-slate-800/65 hover:text-orange-700 hover:scale-125 active:bg-orange-400 duration-1000 ' onMouseEnter={() => setWHovering(true)} onMouseLeave={() => setWHovering(false)}>
            <Link to="/whatsappAnalyzer">
              <h3 className='text-center'>
                {wHovering ? 
                  <img src="../images/whatsapp_logo.jpg" alt="WhatsApp image" className="w-40 h-40 rounded-xl" /> :
                  'WhatsApp'
                }
              </h3>
            </Link>
          </div>
          
          {/* YouTube Section.. */}
          <div className='grid place-content-center md:h-[400px] h-[300px] w-[600px] hover:bg-slate-800/65 hover:text-orange-700 hover:scale-125 active:bg-orange-400 duration-1000
          
          ' onMouseEnter={() => setYHovering(true)} onMouseLeave={() => setYHovering(false)}>
            <Link to="/youtubeAnalyzer">
              <h3 className='text-center'>
                {yHovering ? 
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