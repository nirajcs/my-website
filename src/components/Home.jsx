import React from 'react'
import myimage from '../assets/niraj.jpg'
import cv from '../assets/Niraj C S-Resume.pdf'

const Home = () => {
  return (
    <>
      <div className='md:w-1/2 order-2 text-center md:text-left md:order-1 flex justify-center items-center md:pb-32'>
        <div className='flex justify-center md:justify-end'>
          <div className='w-2/3'>
            <h1 className='hidden md:block text-white text-4xl'>Hi, I am</h1>
            <h1 className='text-white text-5xl font-bold'>Niraj C S</h1>
            <h3 className='text-white text-2xl md:my-10'>MERN Stack Developer</h3>
            <p className='text-white w-full mt-5 md:mt-0'>"Self-driven and self-learned, I've mastered the MERN stack through determination and endless curiosity, making me a versatile developer ready to take on any challenge."</p>
          </div>
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