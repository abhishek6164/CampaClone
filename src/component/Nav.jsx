import React from 'react'
import campaLogo from '../assets/campanewLogo.png'

const Nav = () => {
  return (
    <header className="relative z-50">
      <nav className="fixed top-0 left-0 w-full bg-transparent text-[#D6B96A] px-16 py-6 border-y-2 border-[#D6B96A]/10 shadow-md flex justify-center z-50">
        <ul className="flex flex-wrap items-center justify-between gap-6 text-sm md:text-base font-semibold tracking-wide w-full max-w-7xl">
          <li className="hover:text-white transition duration-200 cursor-pointer">CAMPA COLA</li>
          <li className="hover:text-white transition duration-200 cursor-pointer">LEGACY</li>
          <li className="hover:text-white transition duration-200 cursor-pointer">CAMPA CRICKET</li>
          <li className="hover:text-white transition duration-200 cursor-pointer">POWER UP</li>
          <li className="hover:text-white transition duration-200 cursor-pointer">PRODUCT RANGE</li>
          <li className="hover:text-white transition duration-200 cursor-pointer">FIZZY MEMORIES</li>
        </ul>
        {/* <div className="absolute left-1/2 transform -translate-x-1/2 top-[100%] -mt-16 z-40">
        <img
          src={campaLogo}
          alt="Campa Logo"
          className="h-40 md:h-40 w-auto"
        />
      </div> */}
      </nav>

      {/* Logo overlapping just below nav */}
      
    </header>
  )
}

export default Nav
