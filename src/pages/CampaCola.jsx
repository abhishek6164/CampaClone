import React from "react";
import { motion } from "framer-motion";
import campaBottle from "../assets/campa1.png";

const CampaCola = () => {
  return (
    <section className="relative w-full  min-h-screen bg-[#0A0A0A] text-white overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-20 py-16">
      {/* 💭 Animated Blurry Bubbles */}
      {[...Array(30)].map((_, i) => {
        const size = Math.random() * 15 + 4;
        const left = Math.random() * 100;
        const blur = Math.random() > 0.5 ? "blur-sm" : "blur-md";
        const delay = Math.random() * 2;

        return (
          <motion.div
            key={i}
            className={`absolute rounded-full bg-cyan-400 opacity-40 ${blur}`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              left: `${left}%`,
              bottom: `${Math.random() * 100}px`,
              zIndex: 1,
            }}
            animate={{
              y: [-10, -200, -300],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              delay: delay,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* 💫 Main Content */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-10 relative z-10">
        {/* 🥫 Rotating Bottle */}
        <motion.img
          src={campaBottle}
          alt="Campa Bottle"
          initial={{ rotate: -180, opacity: 0, x: -200 }}
          animate={{ rotate: 0, opacity: 1, x: 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] mx-auto"
        />

        {/* 🧾 Slogan Text */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
          className="text-center md:text-left space-y-6 px-2 sm:px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-logik text-transparent bg-gradient-to-tr from-cyan-300 via-white to-cyan-300 bg-clip-text drop-shadow-xl animate-pulse leading-tight">
            CAPTURING THE <br />
            SPIRIT OF INDIA <br />
            <span className="text-white font-light">THROUGH</span> <br />
            THE GREAT INDIAN TASTE
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-lg font-jio mx-auto md:mx-0">
            Ek bottle jo sirf thandak nahi laati, balki yaadein bhi taza karti hai.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CampaCola;
