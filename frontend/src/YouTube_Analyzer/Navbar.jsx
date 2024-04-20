const Navbar = () => {
      return (
        <nav className="bg-black px-4 py-2 font-bree">
          <div className="max-w-7xl  mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-4">
              {/* logo  */}
              <img
                src="/images/youtube logo.jpg"
                alt="WhatsApp Chat Analyzer Logo"
                className="h-10 rounded-3xl"
              />
              <span className="text-xl font-semibold">Youtube Comment Analyzer</span>
            </div>
          </div>
        </nav>
      );
    };
    
    export default Navbar;