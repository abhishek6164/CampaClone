import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef();

  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(() => {
    const scrollAmount =
      sliderRef.current.scrollWidth - window.innerWidth;

    if (!isTabletOrMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollAmount + 1500}px`,
          scrub: true,
          pin: true,
        },
      });

      tl.to(".flavor-section", {
        x: `-${scrollAmount + 1500}px`,
        ease: "power1.inOut",
      });
    }

    const titleTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: true,
      },
    });

    titleTl
      .to(".first-text-split", {
        xPercent: -30,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -22,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(
        ".second-text-split",
        {
          xPercent: -10,
          ease: "power1.inOut",
        },
        "<"
      );
  }, [isTabletOrMobile]);

  return (
    <div
      ref={sliderRef}
      className={`slider-wrapper py-16 ${
        isTabletOrMobile ? "overflow-x-auto" : ""
      }`}
    >
      <div
        className={`flavors flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-max px-6 sm:px-8 md:px-10`}
      >
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 flex-none transition-transform duration-300 hover:scale-105 cursor-pointer 
              rounded-2xl overflow-hidden shadow-xl border border-[#ffffff11] backdrop-blur-sm 
              w-[80vw] sm:w-[70vw] md:w-[55vw] lg:w-[42vw]
              h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[70vh]
              ${flavor.rotation}`}
          >
            <img
              src={`/images/${flavor.color}-bg.webp`}
              alt={`${flavor.name}-bg`}
              className="absolute bottom-0 h-full w-full object-cover opacity-90"
            />

            <img
              src={`/images/${flavor.color}-drink.png`}
              alt=""
              className="drinks"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
