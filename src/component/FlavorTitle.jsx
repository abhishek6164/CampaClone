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
    <div className="general-title col-center h-full font-logik 2xl:gap-32 xl:gap-24 gap-16">
      {/* First Line */}
      <div className="overflow-hidden  2xl:py-0 py-5 ">
        <h1 className="text-5xl md:text-8xl font-logik text-transparent bg-gradient-to-tr from-cyan-300 via-white to-cyan-300 bg-clip-text drop-shadow-2xl">
          We have 6
        </h1>
      </div>

      {/* Freaking */}
      <div
        style={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }}
        className="flavor-text-scroll"
      >
        <div className="bg-gradient-to-tr from-gray-900 via-black to-gray-900 pb-5 2xl:pt-1 pt-5 2xl:px-5 px-3 rounded-xl shadow-md">
          <h2 className="text-5xl md:text-7xl font-bold  text-transparent bg-gradient-to-tr from-cyan-300 via-white to-cyan-300 bg-clip-text drop-shadow-xl font-logik">
            freaking
          </h2>
        </div>
      </div>

      {/* Last Line */}
      <div className=" 2xl:py-0 py-3  ">
        <h1 className="text-5xl md:text-8xl font-logik text-transparent bg-gradient-to-tr from-cyan-300 via-white to-cyan-300 bg-clip-text drop-shadow-2xl">
          delicious <br /> flavors
        </h1>
      </div>
    </div>
  );
};


export default FlavorTitle;
