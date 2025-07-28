// same imports as before
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import campaCan from "../assets/campa1.png";
import fizzSound from "../assets/Campa Wali Zidd - (10s).mp3";

const CampaCola = () => {
  const audioRef = useRef(null);
  const [showCan, setShowCan] = useState(false);
  const [showSuspense, setShowSuspense] = useState(false);
  const [showFlicker, setShowFlicker] = useState(false);
  const [stableGlow, setStableGlow] = useState(false);

  useEffect(() => {
    const createBubble = () => {
      const bubbleContainer = document.querySelector(".bubbles");
      if (!bubbleContainer) return;

      const bubble = document.createElement("span");
      bubble.classList.add("bubble");

      const size = Math.random() * 6 + 4;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.bottom = `-0px`;
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

 const revealCan = () => {
  setShowCan(true);

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
      y: "+=6",
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

  // 🎯 Add 10° continuous rotation at 9 seconds
  setTimeout(() => {
    gsap.to(".can", {
      rotate: 10,
      duration: 1.5,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  }, 500); // 9 seconds = 9000 milliseconds
};


  const playFizzSound = () => {
    const sound = audioRef.current;
    if (!sound) return;

    sound.volume = 0.7;
    sound.currentTime = 0;

    sound
      .play()
      .then(() => {
        setShowSuspense(true);
        setShowFlicker(true);

        setTimeout(() => {
          revealCan();
          setShowSuspense(false);
        }, 6000); // suspense build

        setTimeout(() => {
          setShowFlicker(false);
        }, 6000); // flicker stop

        setTimeout(() => {
          setStableGlow(true); // ✨ Final glow
        }, 6000); // almost end
      })
      .catch((err) => {
        console.warn("Autoplay blocked", err);
      });
  };

  return (
    <section className="relative bg-[#0B132B] -mt-44 h-screen w-full overflow-hidden text-white flex items-center justify-center flex-col">
      <audio ref={audioRef} src={fizzSound} preload="auto" />

      {/* Bubbles */}
      <div className="absolute inset-0 bubbles pointer-events-none z-0"></div>

      {/* Suspense Text */}
      {showSuspense && (
        <div className="absolute z-20 bottom-20 text-center text-[#D6B96A] text-xl md:text-3xl italic tracking-wide animate-pulse">
          Zidd Jaag Rahi Hai...
        </div>
      )}

      {/* Flicker BG */}
      {showFlicker && (
        <div className="absolute inset-0 bg-white opacity-10 animate-flicker z-30 pointer-events-none" />
      )}

      {/* Main Content */}
      <div className="relative z-10 flex justify-between   flex-wrap items-center">
        {!showCan && (
          <button
            onClick={playFizzSound}
            className="text-[#D6B96A] border border-[#D6B96A] px-6 py-3 rounded-full hover:bg-[#D6B96A]/20 transition-all ease-in-out duration-300 text-lg md:text-xl"
          >
            Click to Unlock the Zidd!
          </button>
        )}

        {/* Can Image */}
        {showCan && (
          <img
            src={campaCan}
            alt="Campa Can"
            className={`can h-96 md:h-[650px] cursor-pointer transition-all duration-700 ${
              stableGlow ? "" : ""
            }`}
          />
        )}

        {/* Headline Text */}
        {showCan && (
          <h2
            className={`headline  z-10 italic text-3xl md:text-7xl font-bold tracking-wider text-[#D6B96A] ${
              stableGlow ? "text-glow" : ""
            }`}
          >
            Campa Wali Zidd!!
          </h2>
        )}
      </div>

      {/* Extra Styles */}
      <style>
        {`
          @keyframes flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
              opacity: 0.1;
            }
            20%, 22%, 24%, 55% {
              opacity: 0.5;
            }
          }

          .animate-flicker {
            animation: flicker 0.15s infinite;
          }

          .text-glow {
            text-shadow: 0 0 20px #D6B96A, 0 0 40px #D6B96A;
          }

          .shadow-stable-glow {
            box-shadow: 0 0 25px #D6B96A, 0 0 60px #D6B96A;
            transition: box-shadow 0.6s ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default CampaCola;
