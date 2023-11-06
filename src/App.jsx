import React from 'react'
import './App.css'
import { Element } from 'react-scroll';
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <ToastContainer/>
      <section id='header' className='sticky top-0 z-10'>
        <Header/>
      </section>
      <Element name='home'>
        <section className='h-screen bg-primaryColor flex flex-col md:flex-row md:justify-between justify-center items-center'>
          <Home/>
        </section>
      </Element>
      <Element name='skills'>    
        <section className='h-screen flex flex-col items-center p-5 md:p-20'>
          <Skills/>
        </section>
      </Element>
      <Element name='projects'>
        <section className='h-screen bg-primaryColor flex justify-center items-center pb-20'>
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
