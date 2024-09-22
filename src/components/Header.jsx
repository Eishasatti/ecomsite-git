import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
   <header>
    <Navbar/>
    <div className="container w-full py-3">
        <img src="/assets/bag5.jpg" alt="Background image" className="w-full object-cover h-[500px]"/>
      </div>
   </header>
  )
}

export default Header
