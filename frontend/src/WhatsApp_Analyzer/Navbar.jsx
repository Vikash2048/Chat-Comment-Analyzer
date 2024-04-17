import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  // bg-gray-800
    return (
      <nav className="font-bree bg-black px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* logo  */}
            <img
              src="/images/whatsapp_logo.jpg"
              alt="WhatsApp Chat Analyzer Logo"
              className="h-10 rounded-3xl"
            />
            <span className="text-xl">WhatsApp Chat Analyzer</span>
          </div>
          
          {/* Placeholder for other navbar content */}
          <div className="cursor-pointer hover:scale-110 hover:text-orange-700 active:text-orange-400 duration-700">
            {/* Links or buttons can be placed here */}
            <Link to="/guide"><h3 className='text-center text-xl'>Guide</h3></Link>
            {/* <a href="#guide" className='text-xl hover:text-orange-700 active:text-orange-300 duration-700'>Guide</a> */}
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;

  // Guide classes--> after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-orange-400 after:transition-all after:ease-in after:duration-1000 hover:after:w-auto