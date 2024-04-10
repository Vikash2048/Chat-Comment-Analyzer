import React from 'react'

const Home = () => {
    return (
        <>
        <div id='main' className='bg-[url("https://i.pinimg.com/564x/61/c9/e0/61c9e0ba50bb0bdded1db82f761d912c.jpg")] bg-[length:630px_800px] md:bg-[length:1550px_800px] bg-no-repeat bg-fixed text-white'>
            {/* NAVBAR */}
            <div id='navbar' className='sticky top-0 z-20 rounded-xl backdrop-blur-2xl hover:bg-[#08387B] duration-1000'>
                <ul className='flex justify-around p-4 text-3xl font-bree font-extrabold'>
                    <li className='cursor-pointer hover:scale-150 hover:text-orange-700 active:text-orange-400 duration-700'><a href="#main">Home</a></li>
                    <li className='cursor-pointer hover:scale-150 hover:text-orange-700 active:text-orange-400 duration-700'><a href="#about">About</a></li>
                    {/* <li className='cursor-pointer hover:scale-150 hover:text-orange-700 active:text-orange-400 duration-700'><a href="#main"><img src="./Assets/logo.png" alt="Logo" className='rounded-full size-14 cursor-zoom-in' /></a></li> */}
                    <li className='cursor-pointer hover:scale-150 hover:text-orange-700 active:text-orange-400 duration-700'><a href="#content">Analyzers</a></li>
                    <li className='cursor-pointer hover:scale-150 hover:text-orange-700 active:text-orange-400 duration-700'><a href="#contact">Contact Us</a></li>
                </ul>
            </div>

            {/* <div className='flex justify-center items-center p-10 pb-0 mb-0'>
                <a href="#main"><img src="./Assets/logo.png" alt="Logo" className='rounded-full size-48 cursor-zoom-in' /></a>
            </div> */}

            {/* MAIN */}
            <div className='grid place-content-center h-screen w-full'>
                <h1 className='font-averia uppercase text-center text-7xl font-bold md:text-[150px]'>Chat & comment analyzer</h1>
            </div>
        </div>
        </>
    )
}

export default Home


// BG - bg-[url('https://i.pinimg.com/564x/39/9b/b4/399bb4bf47aad332a25d4cdcb0fa79b0.jpg')]
// BG - https://i.pinimg.com/564x/ee/92/29/ee9229f3bb674eb16ae1ac29c0f6105c.jpg