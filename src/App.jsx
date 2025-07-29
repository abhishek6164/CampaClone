import CampaCola from './pages/CampaCola.jsx';
import Legacy from './pages/Legacy.jsx';
import Nav from './component/Nav.jsx'; 
import CampaCricket from './pages/campaCricket.jsx';
import PowerUp from './pages/PowerUp.jsx';
const App = () => {
  return (
    <div className='min-h-screen text-white'>
      {/* <Page1 /> */}
      <Nav/>
      <CampaCola />
      <Legacy />
      <CampaCricket/>
      <PowerUp/>
    </div>
  )
}

export default App
