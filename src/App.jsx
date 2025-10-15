import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {

  return (
    <>
    <Navbar >
    </Navbar>
    <Hero />
    <Projects />
    <Skills />
    <Contact />
    </>
  )
}

export default App
