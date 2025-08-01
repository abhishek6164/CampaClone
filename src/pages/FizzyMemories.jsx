import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const memoryData = [
  {
    img: "/images/bcciVScampa.jpg",
   },
  {
    img: "/images/TeamIndia.jpg",
   },
  {
    img: "/images/campachicken.jpg",
  },
  {
    img: "/images/camparestor.jpg",
  },
  {
    img: "/images/Campalemonlastjpg.jpg",
  },
  {
    img: "/images/jeetgaye.jpg",
  },
];

const FizzyMemories = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % memoryData.length);
    }, 4500);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="w-full bg-[#260046] py-16 px-8 md:px-20 flex flex-col lg:flex-row justify-between items-center gap-12">
      
      {/* 🎯 TITLE SECTION */}
      <div className="text-center lg:text-left max-w-xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight font-logik tracking-wide"
        >
          <span className=" text-transparent bg-gradient-to-tr from-cyan-300 via-white to-cyan-300 bg-clip-text drop-shadow-2xl">
            CAPTURING THE
          </span>
          <br />
          <span className="text-yellow-300">SPIRIT OF INDIA</span>
          <br />
          <span className=" text-transparent bg-gradient-to-tr from-cyan-300 via-white to-cyan-300 bg-clip-text drop-shadow-2xl">
            THROUGH
            <br />
            THE GREAT
          </span>
          <br />
          <span className="text-yellow-300"> INDIAN TASTE</span>
        </motion.h1>
      </div>

      {/* 🎞️ IMAGE SLIDER SECTION */}
      <div className="relative w-full max-w-[600px] h-[500px] md:h-[600px] overflow-hidden rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.3)] border-2 border-yellow-400">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-full h-full"
          >
            <img
              src={memoryData[index].img}
              alt={memoryData[index].title}
              className="w-full h-full object-contain bg-black rounded-3xl"
            />
            
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FizzyMemories;
