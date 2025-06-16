import { useState, useEffect } from 'react'
import logo from '../assets/N.jpg'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { Link, scrollSpy } from 'react-scroll';

const Header = () => {

  const [open, setopen] = useState(false) //for performing toggle action in the navbar
  const [isActive, setIsActive] = useState(false)
  const handleSetActive = (linkName) => {
    setIsActive(linkName)
  }
  
  useEffect(() => {
    // Manually update scrollSpy on the first render to set the initial active state
    scrollSpy.update();
  }, []);

  return (
    <>
      <div className='flex justify-between bg-primaryColor px-2'>
        <div className='w-1/2'>
        <Link to='home' spy={true} smooth={true} offset={-60} duration={500} >
          <img src={logo} alt="N-image" className='h-14 w-14 cursor-pointer'/>
        </Link>
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
          <Link to='home' id={ isActive==='home' ? null : 'nav-link' } isDynamic={true} activeClass='border-b-4 border-white' onSetActive={handleSetActive} spy={true} smooth={true} offset={-60} duration={500} className='from-left text-white cursor-pointer font-bold tracking-wider mx-1 p-4'>Home</Link>
          <Link to='skills' id={ isActive==='skills' ? null : 'nav-link' } isDynamic={true} activeClass='border-b-4 border-white' onSetActive={handleSetActive} spy={true} smooth={true} offset={-60} duration={500} className='from-left text-white cursor-pointer font-bold tracking-wider mx-1 p-4'>Skills</Link>
          <Link to='projects' id={ isActive==='projects' ? null : 'nav-link' } isDynamic={true} activeClass='border-b-4 border-white' onSetActive={handleSetActive} spy={true} smooth={true} offset={-60} duration={500} className='from-left text-white cursor-pointer font-bold tracking-wider mx-1 p-4'>Projects</Link>
          <Link to='contact' id={ isActive==='contact' ? null : 'nav-link' } isDynamic={true} activeClass='border-b-4 border-white' onSetActive={handleSetActive} spy={true} smooth={true} offset={-60} duration={500} className='from-left text-white cursor-pointer font-bold tracking-wider mx-1 p-4'>Contact</Link>
        </div>
        {/* This div is only visible in size lower than md,acts as a dropdown */}
        <div className={`bg-white md:hidden fixed w-full transition-opacity ${open ? 'opacity-100 visible duration-500' : 'opacity-0 invisible duration-500'}`}>
          <ul>
            <Link to='home' activeClass='text-red-500' spy={true} isDynamic={true} smooth={true} offset={-55} duration={500}><li className='p-4 cursor-pointer font-bold tracking-wider hover:bg-gray-300' onClick={()=>{setopen(!open)}}>Home</li></Link>
            <Link to='skills' activeClass='text-red-500' spy={true} isDynamic={true} smooth={true} offset={-55} duration={500}><li className='p-4 cursor-pointer font-bold tracking-wider hover:bg-gray-300' onClick={()=>{setopen(!open)}}>Skills</li></Link>
            <Link to='projects' activeClass='text-red-500' spy={true} isDynamic={true} smooth={true} offset={-55} duration={500}><li className='p-4 cursor-pointer font-bold tracking-wider hover:bg-gray-300' onClick={()=>{setopen(!open)}}>Projects</li></Link>
            <Link to='contact' activeClass='text-red-500' spy={true} isDynamic={true} smooth={true} offset={-55} duration={500}><li className='p-4 cursor-pointer font-bold tracking-wider hover:bg-gray-300' onClick={()=>{setopen(!open)}}>Contact</li></Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
