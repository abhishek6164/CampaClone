// pages/HomePage.jsx
import React from 'react'
import Nav from '../component/Nav'
import CampaCola from './CampaCola'
import Legacy from './Legacy'

const HomePage = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-b from-[#08142B] via-[#0D1D3B] to-[#08142B] text-white">
      <CampaCola />
      <Legacy />
    </div></>
  )
}

export default HomePage
