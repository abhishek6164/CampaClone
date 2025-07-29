import React from 'react'

// import Page1 from './pages/Page1.jsx';
import CampaCola from './pages/CampaCola.jsx';
import Legacy from './pages/Legacy.jsx';
import Nav from './component/Nav.jsx'; 

const App = () => {
  return (
    <div className='min-h-screen text-white'>
      {/* <Page1 /> */}
      <Nav/>
      <CampaCola />
      <Legacy />
    </div>
  )
}

export default App
