import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_010svn90', 'template_010svn90', form.current, {
        publicKey: '7e76wQ6JnVjNNWHb7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Message Sent..!!");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div id='contact' className='bg-[url("../images/contactbg.jpg")] w-full h-lvh bg-cover bg-no-repeat  text-white'>
        <div id='title2' className='sticky top-0 z-20 rounded-xl backdrop-blur-2xl hover:bg-[#08387B] duration-1000'>
          <h2 className='font-bree uppercase p-4 text-center text-5xl md:text-7xl'>contact us</h2>
        </div>

        <div className="font-averia md:w-1/2 h-auto rounded-2xl bg-slate-100 shadow-lg shadow-red-500/50 flex flex-col px-16 py-10 gap-1 mx-auto md:mt-5 mt-16">
                <p className="text-lg font-medium text-black">  ANY QUESTIONS?</p>
                <h3 className="text-3xl font-bold text-black">Send us a Message</h3>
                <form  className="flex flex-col "ref={form} onSubmit={sendEmail}>
                <input type="hidden" name="access_key" value="3899889e-9286-40bb-9157-592be704a827"></input>
                    <input className="px-2 py-4 border-b-[2.5px] border-slate-200 bg-transparent text-lg outline-none" name="name" placeholder="Name" type="text" required/>
                    <input className="px-2 py-4 border-b-[2.5px] border-slate-200 bg-transparent text-lg outline-none" name="email" placeholder="Email" type="text" required/>
                    <input className="px-2 py-4 border-b-[2.5px] border-slate-200 bg-transparent text-lg outline-none" name="phone" placeholder="Phone" type="text"/>
                    <textarea className="px-2 py-4 border-b-[2.5px] border-slate-200 bg-transparent text-lg outline-none" name="message" id="" cols={30} rows={4} placeholder="Message "></textarea>
                    <button className="bg-red-600 w-max px-4 py-4 text-xl font-medium rounded-lg text-white mt-4" type="submit" >Get In Touch</button>
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