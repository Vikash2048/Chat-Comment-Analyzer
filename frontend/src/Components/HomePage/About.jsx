import React from 'react'

const About = () => {
  return (
    <>
      <div id='about' className='bg-[url("../images/aboutbg.jpg")] w-full  bg-cover bg-no-repeat bg-fixed text-white'>
        <div id='title2' className='sticky top-0 z-20 rounded-xl backdrop-blur-2xl hover:bg-[#08387B] duration-1000'>
          <h2 className='font-bree uppercase p-4 text-center text-5xl md:text-7xl'>about</h2>
        </div>

        <div className='flex flex-col'>
          <div className='hidden md:block md:mt-10'>
            <p className='font-averia px-10 text-center text-xl'>
              Have you ever wondered what lurks beneath the surface of a comment section? We did too. That's why we built the Chat & Comment Analyzer, a powerful tool that delves into the world of social media conversations, deciphering the emotions behind the words.
              <br /><br />
              Imagine: using cutting-edge AI like NLP, BERT, and Vader to dissect comments from YouTube, WhatsApp, and beyond. We leverage the magic of machine learning to categorize them as positive, negative, or neutral, giving you unparalleled insights into online sentiment.
              <br /><br />
              This isn't just about fancy algorithms, though. We've crafted a beautiful user experience, blending the power of React, Tailwind CSS, and Material UI for a seamless exploration of your social media data. And for the tech enthusiasts, we've built a robust backend with Express.js and Node.js utilizing RESTful APIs.
            </p>
          </div>


          <div className="">
            <p className='font-averia px-10 text-center text-2xl md:mt-10'>
              With the Chat & Comment Analyzer, you can: <br /><br />
            </p>

            <ul className='font-averia px-10 text-center text-2xl flex md:flex-row flex-col md:gap-5 sm:gap-0 justify-start mb-10 md:mt-5 ' >
              <li className='mb-5'><span className='font-extrabold underline'>Understand your audience better</span><br />Analyze public comments and chats to gauge public perception and tailor your content accordingly.</li>
              <li className='mb-5'><span className='font-extrabold underline'>Identify brand sentiment</span><br />Track how people feel about your brand or product across social media platforms.</li>
              <li className='mb-5'><span className='font-extrabold underline'>Foster positive online communities</span><br />By understanding sentiment, you can effectively respond to concerns and cultivate a thriving online space.</li>
            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default About