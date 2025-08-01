import CampaCola from './pages/CampaCola.jsx';
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Legacy from './pages/Legacy.jsx';
import Nav from './component/Nav.jsx';
import CampaCricket from './pages/CampaCricket.jsx';
import PowerUp from './pages/PowerUp.jsx';
import Footer from './component/Footer.jsx';
import FlavorSection from './pages/FlavorSection.jsx';
import FizzyMemories from './pages/FizzyMemories.jsx';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <div id="smooth-wrapper">
      {/* ✅ Fixed Nav placed outside smooth-content */}
      <Nav />
      
      <div id="smooth-content" className=""> {/* Add padding to avoid content hiding under navbar */}
        <div className='min-h-screen text-white'>
          <CampaCola />
          <Legacy />
          <CampaCricket />
          <PowerUp />
          <FlavorSection />
          <FizzyMemories />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
