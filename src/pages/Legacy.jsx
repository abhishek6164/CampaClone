import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import poster1 from "../assets/campaold.webp";
import poster2 from "../assets/vintage2.webp";
import poster3 from "../assets/vintage3.webp";
import modern from "../assets/campamodern.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Legacy = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const pinWrapWidth = scrollRef.current.scrollWidth;

      const horizontalScroll = gsap.to(scrollRef.current, {
        x: () => `-${pinWrapWidth - window.innerWidth}`,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          end: () => "+=" + pinWrapWidth,
        },
      });

      gsap.utils.toArray(".poster").forEach((el) => {
        gsap.fromTo(
          el,
          {
            filter: "grayscale(100%) sepia(80%)",
            opacity: 0.5,
            scale: 0.95,
          },
          {
            opacity: 1,
            filter: "grayscale(10%) sepia(0%)",
            scale: 1,
            duration: 1,
            scrollTrigger: {
              trigger: el,
              containerAnimation: horizontalScroll,
              start: "left center",
              end: "right center",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden  bg-[#260046] text-white relative"
    >
      {/* 🟡 Title and Description */}
      <div className="absolute w-full   justify-center items-center top-10 text-center  z-10 max-w-screen  ">
        <h1 className="text-5xl h-50 md:text-6xl font-bold font-logik bg-gradient-to-t from-gray-700 via-gray-200 to-gray-700 bg-clip-text text-transparent drop-shadow-lg">
          A 50+ Years of Legacy
        </h1>

        <p className="mt-4 text-4xl md:text-2xl  font-inter  bg-gradient-to-t from-gray-700 via-gray-200 to-gray-700 bg-clip-text text-transparent drop-shadow-lg">
          One of the most iconic Indian brands, <br />
          now reborn for modern India in a new avatar.
        </p>
      </div>

      {/* 🟣 Horizontal Poster Scroll */}
      <div
        ref={scrollRef}
        className="flex w-max gap-20 mt-48  px-[calc(50vw-200px)] h-screen  items-center justify-start"
      >
        {[poster1, poster2, poster3, modern].map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`poster-${i}`}
            className="poster w-[500px] h-[500px]  mb-40 rounded-2xl shadow-7xl object-fill  transition-transform duration-900 hover:scale-105"
          />
        ))}
      </div>

    </section>
  );
};

export default Legacy;
