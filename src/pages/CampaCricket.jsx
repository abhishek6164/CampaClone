import React, { useEffect, useRef } from "react";
import campaCricket from "../assets/CampaCricket.mp4";
import campacricket from "../assets/campacricket.png";
import stadium from "../assets/stadium.png";
import audience from "../assets/audiance.png";

const CampaCricket = () => {
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    text.classList.add("animate-fadeInZoom");
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (container) observer.observe(container);
    return () => container && observer.unobserve(container);
  }, []);

  return (
    <div className="w-full bg-black text-white">

      {/* 🏏 Top Video Section */}
      <div
        ref={containerRef}
        className="flex flex-col  items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black px-4"
      >
        <h1 className="text-5xl md:text-7xl font-bold font-logik text-transparent bg-gradient-to-tr from-cyan-300 via-white to-cyan-300 bg-clip-text drop-shadow-2xl animate-pulse mt-20">
          Refresh The Josh!
        </h1>

        <p className="mt-4 text-2xl md:text-3xl text-center font-inter text-transparent bg-gradient-to-tr from-cyan-100 via-gray-200 to-cyan-100 bg-clip-text drop-shadow-lg animate-float">
          Cheer with Campa Cricket, from the House of Campa
        </p>

        <div className="w-[80vw] h-[80vh] mt-20 overflow-hidden relative rounded-2xl shadow-[0_0_50px_#00FFF7] border border-cyan-300">
          <video
            ref={videoRef}
            src={campaCricket}
            loop
            playsInline
            muted
            className="w-full h-full object-cover rounded-xl border-4 border-[#00FFF7] shadow-[0_0_30px_#00FFF7] transition-all duration-700 hover:scale-[1.02]"
          ></video>

          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1
              ref={textRef}
              className="text-white text-5xl font-bold drop-shadow-2xl opacity-0"
            >
              Campa x Cricket 🏏
            </h1>
          </div>
        </div>
      </div>

      {/* 🏟️ Stadium Background Section */}
      <div
        className="relative mt-10 min-h-screen w-full flex items-center justify-center px-4 py-16"
        style={{
          backgroundImage: `url(${stadium}), url(${audience})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* 💨 Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* ✨ Content Overlay */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-[1300px]">

          {/* ⬅️ Left Text */}
          <div className="text-center md:text-left md:w-1/3 space-y-4 animate-slideInLeft">
            <h1 className="text-3xl md:text-5xl font-logik text-cyan-300 drop-shadow-lg">
              FIZZY LEMONY <br /> REHYDRATOR
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 font-jio">
              A zesty burst of cricket energy 🍋🏏
            </p>
          </div>

          {/* 🖼️ Center Bottle Image */}
          <div className="relative w-[250px] md:w-[380px] h-auto animate-floatSlow">
            <img
              src={campacricket}
              alt="Campa Cricket Bottle"
              className="w-full h-[800px] rounded-2xl "
            />
          </div>

          {/* ➡️ Right Text */}
          <div className="text-center md:text-left md:w-1/3 space-y-4 animate-slideInRight">
            <h1 className="text-3xl md:text-5xl font-logik text-cyan-300 drop-shadow-lg">
              POWERED WITH <br /> ELECTROLYTES ⚡
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 font-jio">
              Replenish. Refresh. Rejoice.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CampaCricket;
