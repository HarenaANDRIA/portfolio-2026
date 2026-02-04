import React from 'react'
import Navbar from './Composants/Navbar/Navbar'
import Hero from './Composants/Hero/Hero'
import About from './Composants/About/About'
import MyWork from './Composants/MyWork/MyWork'
import Contact from './Composants/Contact/Contact'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <MyWork/>
      <Contact/>
    </div>
  )
}

export default App