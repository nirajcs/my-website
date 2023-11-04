import React, { useEffect, useState } from 'react'
import myimage from '../assets/niraj.jpg'
import cv from '../assets/Niraj C S-Resume.pdf'

const Home = () => {
  const [text,setText] = useState('')
  const [charIndex, setCharIndex] = useState(0);
  const content = "Self-driven and self-learned, I've mastered the MERN stack through determination and endless curiosity, making me a versatile developer ready to take on any challenge."

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      if (charIndex < content.length) {
        setText(content.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }
    }, 50); // Adjust the typing speed (e.g., 100ms per character)

    return () => clearTimeout(typingTimer);
  }, [charIndex, content]);

  return (
    <>
      <div className='w-full md:w-1/2 order-2 text-center md:text-left md:order-1 flex flex-col justify-center items-center md:pb-40'>
        <div className='w-5/6 flex justify-center md:justify-start'>
          <div className='md:ps-10 w-[500px] md:w-full'>
            <div className="w-full">
              <h1 className='hidden md:block text-white text-4xl w-full'>Hi, I am</h1>
            </div>
            <div className="w-full">
              <h1 className='text-white text-5xl font-bold w-full'>Niraj C S</h1>
            </div>
            <div className='w-full'>
              <h3 className='text-white text-2xl md:my-10 w-full'>MERN Stack Developer</h3>
            </div>
          </div>
        </div>
        <div className='flex w-5/6 h-[150px] justify-start md:ps-10'>
          <p className='text-white mt-5 md:mt-0'>{text}</p>
        </div>
      </div>
      <div className='md:w-1/2 order-1 md:order-1 w-full flex flex-col justify-center items-center mb-10 md:mb-0 md:pb-32'>
        <img src={myimage} alt="niraj-c-s" className='md:w-80 md:h-80 w-52 h-52 rounded-full border-4 border-white'/>
        <a href={cv} target='_blank'>
          <button className="bg-transparent tracking-wider hover:bg-white text-white font-semibold hover:text-primaryColor py-1 px-4 border border-white hover:border-transparent rounded mt-5">
            View CV
          </button>
        </a>
      </div>
    </>
  )
}

export default Home