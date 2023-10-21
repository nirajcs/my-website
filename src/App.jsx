import React from 'react'
import './App.css'
import { Element } from 'react-scroll';
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'

function App() {

  return (
    <>
      <section id='header' className='sticky top-0 z-10'>
        <Header/>
      </section>
      <Element name='home'>
        <section className='h-screen bg-primaryColor flex flex-col md:flex-row md:justify-between justify-center items-center'>
          <Home/>
        </section>
      </Element>
      <Element name='skills'>    
        <section className='h-screen flex flex-col items-center p-20'>
          <Skills/>
        </section>
      </Element>
      <Element name='projects'>
        <section className='h-screen bg-green-500 '>
          <Projects/>
        </section>
      </Element>
      <Element name='contact'>
        <section className='h-screen bg-blue-500 '>
          <Contact/>
        </section>
      </Element>
    </>
  )
}

export default App
