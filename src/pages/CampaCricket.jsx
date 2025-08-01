import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import campaCricket from "../assets/CampaCricket.mp4";
import campacricket from "../assets/campacricket.png";
import stadium from "../assets/stadium.png";
import audience from "../assets/audiance.png";

const CampaCricket = () => {
  const textRef = useRef(null);
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const bottleRef = useRef(null);
  const isBottleInView = useInView(bottleRef, { once: true, amount: 0.3 });

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
    <div className="w-full text-white">
      {/* 🎬 Hero Cricket Video Section */}
      <div
        ref={containerRef}
        className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black px-4 relative overflow-hidden"
      >
        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-logik text-transparent bg-gradient-to-tr from-cyan-300 via-white to-cyan-300 bg-clip-text drop-shadow-2xl animate-pulse mt-20 text-center"
        >
          Refresh The Josh!
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-lg sm:text-xl md:text-2xl text-center font-inter text-transparent bg-gradient-to-tr from-cyan-100 via-gray-200 to-cyan-100 bg-clip-text drop-shadow-lg animate-float max-w-3xl"
        >
          Cheer with Campa Cricket, from the House of Campa
        </motion.p>

        <div className="w-[95vw] sm:w-[85vw] md:w-[80vw] max-w-[1200px] h-[55vh] sm:h-[65vh] md:h-[75vh] mt-12 overflow-hidden relative rounded-2xl shadow-[0_0_50px_#00FFF7] border border-cyan-300 group transition-all duration-500">
          <video
            ref={videoRef}
            src={campaCricket}
            loop
            playsInline
            muted
            className="w-full h-full object-cover rounded-xl border-4 border-[#00FFF7] shadow-[0_0_30px_#00FFF7] group-hover:scale-[1.03] transition-all duration-700"
          ></video>

          {/* ✨ Overlay Text */}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center pointer-events-none">
            <motion.h1
              ref={textRef}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-white text-2xl sm:text-4xl md:text-5xl font-bold drop-shadow-2xl text-center"
            >
              Campa x Cricket 🏏
            </motion.h1>
          </div>
        </div>
      </div>

      {/* 🏟️ Stadium Scene */}
      <div
        className="relative mt-10 min-h-screen w-full flex items-center justify-center px-4 py-16 overflow-hidden"
        style={{
          backgroundImage: `url(${stadium}), url(${audience})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0 backdrop-blur-sm"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-[1300px]">
          {/* 💬 Left Info */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left w-full md:w-1/3 space-y-4 px-2"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-logik text-cyan-300 drop-shadow-lg">
              FIZZY LEMONY <br /> REHYDRATOR
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-jio">
              A zesty burst of cricket energy 🍋🏏
            </p>
          </motion.div>

          {/* 🧃 Bottle */}
          <motion.div
            ref={bottleRef}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={
              isBottleInView
                ? { scale: 1, opacity: 1, y: [0, -10, 0] }
                : {}
            }
            transition={{
              duration: 1.8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="relative w-[180px] sm:w-[250px] md:w-[320px] h-auto drop-shadow-[0_0_40px_#00FFF7]"
          >
            <img
              src={campacricket}
              alt="Campa Cricket Bottle"
              className="w-full h-[400px] sm:h-[600px] md:h-[800px] object-contain"
            />
          </motion.div>

          {/* 💬 Right Info */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left w-full md:w-1/3 space-y-4 px-2"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-logik text-cyan-300 drop-shadow-lg">
              POWERED WITH <br /> ELECTROLYTES ⚡
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 font-jio">
              Replenish. Refresh. Rejoice.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CampaCricket;
