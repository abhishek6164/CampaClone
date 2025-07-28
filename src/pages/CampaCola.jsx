import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import campaCan from "../assets/campa1.png"; // 🥫 your soda can image
import Slogan from "../assets/campaslogan.svg"; // 🥫 your slogan image

gsap.registerPlugin(ScrollTrigger);

const CampaCola = () => {
  useEffect(() => {
  // Initial soda can entry animation
  gsap.fromTo(
    ".can",
    { rotate: -10, y: -100, opacity: 0 },
    {
      rotate: 0,
      y: 0,
      opacity: 1,
      duration: 1.8,
      ease: "power4.out",
      delay: 0.5,
    }
  );

  gsap.to(".can", {
    rotate: 1,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  // Headline animation
  gsap.fromTo(
    ".headline",
    { opacity: 0, y: 30 },
    { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1.5 }
  );

  gsap.to(".headline", {
    textShadow: "0 0 10px rgba(214,185,106,0.8)",
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });

  // Bubble creator — new bubbles every 1s
  const createBubble = () => {
    const bubbleContainer = document.querySelector(".bubbles");
    if (!bubbleContainer) return;

    const bubble = document.createElement("span");
    bubble.classList.add("bubble");

    const size = Math.random() * 6 + 4; // 4px to 10px
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

  const interval = setInterval(createBubble, 200); // every 0.2s
  return () => clearInterval(interval); // cleanup
}, []);


  return (
    <>
      <section className="relative bg-[#0B132B] h-screen -mt-44 w-full overflow-hidden text-white flex items-center justify-center flex-col">
        {/* Bubble background */}
        <div className="absolute inset-0 bubbles pointer-events-none z-0">
          {[...Array( 0)].map((_, i) => (
            <span
              key={i}
              className="absolute w-3 h-2 bg-[#D6B96A] rounded-full opacity-30 blur-sm"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 30}px`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        <div className="relative z-10 flex flex-wrap justify-between p-6">
          {/* Can Image */}
          <img
            src={campaCan}
            alt="Campa Can"
            className="can relative z-10 h-96 md:h-[550px] drop-shadow-[0_8px_20px_rgba(214,185,106,0.5)]"
          />

          
          <img src={Slogan} alt="Campa Slogan" className=" headline drop-shadow-[0_10px_40px_rgba(214,185,106,0.5)] text-3xl md:text-5xl font-bold mt-6  z-10 italic tracking-wide" />

        </div>
      </section>
    </>
  );
};

export default CampaCola;
