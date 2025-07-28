import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import campaCan from "../assets/campa1.png";
import Slogan from "../assets/campaslogan.svg";
import fizzSound from "../assets/Campa Wali Zidd - (10s).mp3";

gsap.registerPlugin(ScrollTrigger);

const CampaCola = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Bubble loop
    const createBubble = () => {
      const bubbleContainer = document.querySelector(".bubbles");
      if (!bubbleContainer) return;

      const bubble = document.createElement("span");
      bubble.classList.add("bubble");

      const size = Math.random() * 6 + 4;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.bottom = `-20px`;
      bubble.style.position = "absolute";
      bubble.style.background = "#D6B96A";
      bubble.style.borderRadius = "50%";
      bubble.style.opacity = "0.3";
      bubble.style.filter = "blur(1px)";
      bubble.style.zIndex = "0";

      bubbleContainer.appendChild(bubble);

      gsap.to(bubble, {
        y: -window.innerHeight - 100,
        x: Math.random() * 50 - 25,
        duration: 4 + Math.random() * 2,
        ease: "sine.out",
        onComplete: () => bubble.remove(),
      });
    };

    const bubbleInterval = setInterval(createBubble, 200);
    return () => clearInterval(bubbleInterval);
  }, []);

  // Animation timeline
  const syncAnimations = () => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".can",
      { y: -200, opacity: 0, scale: 0.9, rotate: -20 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        rotate: 0,
        duration: 1.5,
        ease: "bounce.out",
      }
    );

    tl.fromTo(
      ".headline",
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.5"
    );

    tl.to(
      ".can",
      {
        boxShadow: "0 0 25px #D6B96A",
        duration: 1,
        repeat: 3,
        yoyo: true,
        ease: "sine.inOut",
      },
      "+=0.5"
    );

    tl.to(
      ".can",
      {
        y: "+=4",
        duration: 0.2,
        repeat: 10,
        yoyo: true,
        ease: "sine.inOut",
      },
      "+=0.5"
    );

    tl.to(".headline", {
      textShadow: "0 0 20px #D6B96A",
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });
  };

  // Play music and trigger animation
  const playFizzSound = () => {
    const sound = audioRef.current;
    if (!sound) return;

    sound.volume = 0.7;
    sound.currentTime = 0;

    sound
      .play()
      .then(() => {
        syncAnimations();
      })
      .catch((err) => {
        console.warn("Autoplay blocked", err);
      });
  };

  return (
    <section className="relative bg-[#0B132B] h-screen w-full overflow-hidden text-white flex items-center justify-center flex-col">
      {/* Hidden audio element */}
      <audio ref={audioRef} src={fizzSound} preload="auto" />

      {/* Bubble background */}
      <div className="absolute inset-0 bubbles pointer-events-none z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex  justify-between p-6 flex-wrap 0 ">
        {/* Can Image - click to play sound */}
        <img
          src={campaCan}
          alt="Campa Can"
          onClick={playFizzSound}
          className="can h-96 md:h-[550px] drop-shadow-[0_8px_20px_rgba(214,185,106,0.5)] cursor-pointer"
        />

        {/* Headline */}
        <img
          src={Slogan}
          alt="Campa Slogan"
          className="headline mt-6 z-10 italic tracking-wide w-80 md:w-[500px]"
        />
      </div>
    </section>
  );
};

export default CampaCola;
