import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import poster1 from "../assets/campaold.webp";
import CampaOld from "../../public/images/campagoogle.webp";
import CampaOld2 from "../../public/images/campagoogle1.jpeg";
import poster2 from "../assets/vintage2.webp";
import poster3 from "../assets/vintage3.webp";
import modern from "../assets/campamodern.jpeg";
import Image1977 from "../../public/images/Campa1977.webp";
import Image1980 from "../../public/images/Campa1980.webp";
import Image1995 from "../../public/images/Campa1995.webp";
import Image2000 from "../../public/images/Campa2000.webp";
import lastcampa from "../../public/images/lastcampa.webp";

gsap.registerPlugin(ScrollTrigger);

const Legacy = () => {
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(carouselRef.current, {
        xPercent: -100,
        repeat: -1,
        duration: 40,
        ease: "linear",
      });

      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#1a0033] text-white overflow-hidden flex items-center justify-center px-4 md:px-12"
    >
      {/* 💡 Neon Glow Background */}
      <div className="absolute z-0 w-[700px] h-[700px] bg-gradient-to-br from-[#ff00ff44] via-[#ffffff10] to-[#00ffff44] blur-[140px] rounded-full top-0 left-1/2 -translate-x-1/2 pointer-events-none" />

      {/* 🌟 Title & Subtitle */}
      <div className="absolute top-16 z-30 text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-logik text-transparent bg-gradient-to-tr from-cyan-300 via-white to-cyan-300 bg-clip-text drop-shadow-2xl animate-pulse">
          A 50+ Years of Legacy
        </h1>
        <p className="mt-4 text-lg md:text-2xl font-inter text-gray-300 max-w-2xl mx-auto">
          One of the most iconic Indian brands, <br /> reborn for modern India in a bold, nostalgic avatar.
        </p>
      </div>

      {/* 🖼️ Scrolling Carousel */}
      <div className="absolute z-10 bottom-10 left-1/2 -translate-x-1/2 w-full overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-12 w-max opacity-100 scale-100"
        >
          {[
            poster1,
            CampaOld,
            Image1977,
            poster2,
            Image1980,
            poster3,
            Image1995,
            Image2000,
            modern,
            lastcampa,
            CampaOld2,
            poster1,
            Image1977,
            poster2,
            Image1980,
            poster3,
            Image1995,
            Image2000,
          ].map((src, index) => (
            <div
              key={index}
              className="relative group transition-transform duration-300 hover:scale-105"
            >
              <img
                src={src}
                alt={`carousel-${index}`}
                className="w-[260px] md:w-[330px] h-[400px] md:h-[480px] rounded-3xl object-cover shadow-[0_10px_50px_rgba(255,255,255,0.2)]"
              />
              {/* ✨ Glass Reflection */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/10 via-transparent to-black/40 opacity-30 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Legacy;
