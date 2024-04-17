const Navbar = () => {
  // bg-gray-800
    return (
      <nav className="bg-black px-4 py-2">
        <div className="max-w-7xl  mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* logo  */}
            <img
              src="/images/whatsapp_logo.jpg"
              alt="WhatsApp Chat Analyzer Logo"
              className="h-10 rounded-3xl"
            />
            <span className="text-xl font-semibold">WhatsApp Chat Analyzer</span>
          </div>
          {/* Placeholder for other navbar content */}
          <div className="cursor-pointer">
            {/* Links or buttons can be placed here */}
            <img src="/images/menu.png" alt="" />
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;