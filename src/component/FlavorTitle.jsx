import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const FlavorTitle = () => {
  useGSAP(() => {
    const firstTextSplit = SplitText.create(".first-text-split h1", {
      type: "chars",
    });
    const secondTextSplit = SplitText.create(".second-text-split h1", {
      type: "chars",
    });

    gsap.from(firstTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
      },
    });

    gsap.to(".flavor-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 10%",
      },
    });

    gsap.from(secondTextSplit.chars, {
      yPercent: 200,
      stagger: 0.02,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 1%",
      },
    });
  });

  return (
    <div className="general-title col-center h-full font-logik gap-12 md:gap-20 xl:gap-28 2xl:gap-32 px-4 sm:px-8">
      {/* First Line */}
      <div className="first-text-split overflow-hidden py-3 md:py-5">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-logik text-transparent bg-gradient-to-tr from-cyan-300 via-white to-cyan-300 bg-clip-text drop-shadow-2xl text-center sm:text-left">
          We have 6
        </h1>
      </div>

      {/* Middle Line - Freaking */}
      <div
        style={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }}
        className="flavor-text-scroll"
      >
        <div className="bg-gradient-to-tr from-gray-900 via-black to-gray-900 py-4 px-6 md:py-5 md:px-10 rounded-xl shadow-md w-fit mx-auto sm:mx-0">
          <h2 className="second-text-split text-4xl sm:text-6xl md:text-7xl font-bold text-transparent bg-gradient-to-tr from-cyan-300 via-white to-cyan-300 bg-clip-text drop-shadow-xl font-logik text-center sm:text-left">
            freaking
          </h2>
        </div>
      </div>

      {/* Last Line */}
      <div className="overflow-hidden py-3 md:py-5">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-logik text-transparent bg-gradient-to-tr from-cyan-300 via-white to-cyan-300 bg-clip-text drop-shadow-2xl text-center sm:text-left">
          delicious <br className="hidden sm:block" /> flavors
        </h1>
      </div>
    </div>
  );
};

export default FlavorTitle;
