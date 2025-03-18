import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Counter from './Components/Counter/Counter'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>

        <div id='nav'><Navbar/></div>
        <div id='hero'><Hero/></div>
        <div id='services'><Services/></div>
        <div id='about'><About/></div>
        <div id='count'><Counter/></div>
        <div id='footer'><Footer/></div>

    </div>
  )
}

export default App


