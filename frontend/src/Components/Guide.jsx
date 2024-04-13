import React from 'react'

const Guide = () => {
  return (
    <div id='Guide' className='flex flex-col p-5 items-center h-screen w-full bg-slate-900'>
      {/* Heading of the page.. */}
      <div className='font-averia font-bold'>
        <h1 className='text-4xl text-white py-2 uppercase'>guide</h1>
      </div>

      
      <div className='flex gap-24 justify-center items-center w-[1400px] m-5 p-10 bg-slate-800 rounded-xl'>
        {/* Images showing steps to export whatsapp chat.. */}
        <img src="../images/guide.jpg" alt="Guide image" className='h-[500px] w-[900px] rounded-xl' />
        
        {/* Steps to export whatsapp chat.. */}
        <div className='font-bree text-xl text-white mt-5'>
          <ol className='list-decimal'>
            <li>{"Open the WhatsApp chat you wish to export."}</li>
            <li>{"Tap the More Options menu (3 dots) > More > Export Chat."}</li>
            <li>{"Select whether to attach media or export as text-only."}</li>
            <li>{"Choose the save destination on your device storage."}</li>
          </ol>
        </div>
      </div>      
    </div>
  )
}

export default Guide