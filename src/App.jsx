import CampaCola from './pages/CampaCola.jsx';
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Legacy from './pages/Legacy.jsx';
import Nav from './component/Nav.jsx';
import CampaCricket from './pages/CampaCricket.jsx';
import PowerUp from './pages/PowerUp.jsx';
import Footer from './component/Footer.jsx';
import ProductRange from './pages/ProductRange.jsx';
import FlavorSection from './pages/FlavorSection.jsx';
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
      <div id="smooth-content">
        <div className='min-h-screen text-white'>
          {/* <Page1 /> */}
          <Nav />
          <CampaCola />
          <Legacy />
          <CampaCricket />
          <PowerUp />
          <FlavorSection />
          <ProductRange />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
