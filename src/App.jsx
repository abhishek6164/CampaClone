import CampaCola from './pages/CampaCola.jsx';
import Legacy from './pages/Legacy.jsx';
import Nav from './component/Nav.jsx'; 
import CampaCricket from './pages/CampaCricket.jsx';
import PowerUp from './pages/PowerUp.jsx';
import Footer from './component/Footer.jsx';
const App = () => {
  return (
    <div className='min-h-screen text-white'>
      {/* <Page1 /> */}
      <Nav/>
      <CampaCola />
      <Legacy />
      <CampaCricket/>
      <PowerUp/>
      <Footer/>
    </div>
  )
}

export default App
