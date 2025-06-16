import './App.css'
import { Element } from 'react-scroll';
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "animate.css"
import useAnimationOnScroll from "react-animate-on-scroll-animate.css"
import {useRef} from "react";

function App() {
  const scrollElem = useRef(null)
  useAnimationOnScroll(scrollElem || null, {noRepeat : false})
  return (
    <>
      <ToastContainer/>
      <section id='header' className='sticky top-0 z-10'>
        <Header/>
      </section>
      <Element name='home'>
        <section className='h-screen home-main flex flex-col md:flex-row md:justify-between justify-center items-center'>
          <Home/>
        </section>
      </Element>
      <Element name='skills'>    
        <section className='h-screen flex flex-col items-center px-5 py-20 md:p-20'>
          <Skills/>
        </section>
      </Element>
      <Element name='projects'>
        <section className='h-screen bg-primaryColor flex flex-col justify-center items-center pb-20'>
          <Projects/>
        </section>
      </Element>
      <Element name='contact'>
        <section className='h-screen flex flex-col md:flex-row p-10 pb-20'>
          <Contact/>
        </section>
      </Element>
    </>
  )
}

export default App
