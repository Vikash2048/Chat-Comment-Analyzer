import React from 'react'

const Contact = () => {
  return (
    <>
    <div id='contact' className='bg-[url("https://i.pinimg.com/564x/78/4f/05/784f05041443a8a68202ae5eed0a43b3.jpg")] bg-[length:630px_800px] md:bg-[length:1550px_800px] bg-no-repeat bg-fixed text-white'>
      <div id='title2' className='sticky top-0 z-20 rounded-xl backdrop-blur-2xl hover:bg-[#08387B] duration-1000'>
        <h2 className='font-bree uppercase p-4 text-center text-5xl md:text-7xl'>contact us</h2>
      </div>

      <div className='grid place-content-center h-screen w-full font-averia px-4 text-center text-xl'>
        <form className='flex flex-col gap-5 justify-start'>
          <label for='name' className='flex gap-14 justify-end items-center'>
            <span className="text-3xl font-bold">Name: </span>
            <input type="text" name="name" id='name' placeholder='Your Name' className="rounded-lg px-2 py-1 text-black"/>
          </label>
          
          <label for="email" className='flex gap-14 justify-end items-center'>
            <span className="text-3xl font-bold">Email: </span>
            <input type="text" name="email" id="email" cols="10" placeholder="you@gmail.com" className="rounded-lg px-2 py-1 text-black" />
          </label>

          <label for="Textarea" className='flex gap-14 justify-end items-center'>
            <span className="text-3xl font-bold">Feedback: </span>
            <textarea name="textarea" id="Textarea" rows="3" placeholder="Type Something.." className="rounded-lg px-2 py-1 text-black"></textarea>
          </label>

          <button className='mt-8'>
            <span className="text-2xl font-bold text-orange-700 rounded-lg border-2 border-orange-700 py-4 px-8 duration-300 hover:bg-orange-700 hover:text-white hover:border-white active:bg-orange-400 active:border-4"><input type="submit" value="SUBMIT"/></span>
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact

// BG:
// https://i.pinimg.com/564x/78/4f/05/784f05041443a8a68202ae5eed0a43b3.jpg
// https://i.pinimg.com/564x/7a/51/84/7a518424890e15c71dfe8a27905de12b.jpg
// https://i.pinimg.com/564x/d2/b1/0d/d2b10d09e1af3666713d700619d80fd8.jpg
// https://i.pinimg.com/564x/aa/72/61/aa72617f44ae23c5af52744cb7f714bf.jpg
// https://i.pinimg.com/564x/be/ab/4f/beab4fad47518bd0875563b34ea374c0.jpg
// https://i.pinimg.com/564x/fc/a4/9a/fca49a54e51894b1dcc475650505ce90.jpg