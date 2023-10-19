import React, { useEffect, useState } from 'react'
import logo from '../assets/N.jpg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll';

const Header = () => {
  const [open, setopen] = useState(false) //forperforming toggle action in the navbar

  return (
    <>
      <div className='flex justify-between bg-primaryColor px-2'>
        <div className='w-1/2'>
          <img src={logo} alt="N-image" className='h-14 w-14'/>
        </div>
        <div className='md:hidden mx-4'>
          {
            open ? (
                <AiOutlineClose onClick={()=>{setopen(!open)}} className='h-full text-white text-3xl cursor-pointer'/>
            ):(
                <AiOutlineMenu onClick={()=>{setopen(!open)}} className='h-full text-white text-3xl cursor-pointer'/>
            )
          }
        </div>
        {/* This div only visible in the size md and more than md */}
        <div className='w-1/2 md:flex md:justify-end hidden md:block'>
          <Link to='home' activeClass='border-b-4 border-white' spy={true} smooth={true} offset={-60} duration={500} className='text-white cursor-pointer font-bold tracking-wider p-4'>Home</Link>
          <Link to='skills' activeClass='border-b-4 border-white' spy={true} smooth={true} offset={-60} duration={500} className='text-white cursor-pointer font-bold tracking-wider p-4'>Skills</Link>
          <Link to='projects' activeClass='border-b-4 border-white' spy={true} smooth={true} offset={-60} duration={500} className='text-white cursor-pointer font-bold tracking-wider p-4'>Projects</Link>
          <Link to='contact' activeClass='border-b-4 border-white' spy={true} smooth={true} offset={-60} duration={500} className='text-white cursor-pointer font-bold tracking-wider p-4'>Contact</Link>
        </div>
      </div>
      {/* This div is only visible in size lower than md,acts as a dropdown */}
      <div className={`bg-white md:hidden fixed w-full transition-opacity ${open ? 'opacity-100 visible duration-500' : 'opacity-0 invisible duration-500'}`}>
        <ul>
          <Link to='home' activeClass='text-red-500' spy={true} smooth={true} offset={-55} duration={500} ><li className='p-4 cursor-pointer font-bold tracking-wider hover:bg-gray-300' onClick={()=>{setopen(!open)}}>Home</li></Link>
          <Link to='skills' activeClass='text-red-500' spy={true} smooth={true} offset={-55} duration={500}><li className='p-4 cursor-pointer font-bold tracking-wider hover:bg-gray-300' onClick={()=>{setopen(!open)}}>Skills</li></Link>
          <Link to='projects' activeClass='text-red-500' spy={true} smooth={true} offset={-55} duration={500}><li className='p-4 cursor-pointer font-bold tracking-wider hover:bg-gray-300' onClick={()=>{setopen(!open)}}>Projects</li></Link>
          <Link to='contact' activeClass='text-red-500' spy={true} smooth={true} offset={-55} duration={500}><li className='p-4 cursor-pointer font-bold tracking-wider hover:bg-gray-300' onClick={()=>{setopen(!open)}}>Contact</li></Link>
        </ul>
      </div>
    </>
  )
}

export default Header
