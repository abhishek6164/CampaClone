import React, { useEffect, useRef, useState } from "react";
import Power from "../assets/power.png";

const PowerUp = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-gray-900 via-black to-gray-950 overflow-hidden py-16 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
        {/* 📝 Text */}
        <div
          ref={textRef}
          className={`w-full md:w-1/2 text-white transition-all duration-1000 ease-in-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-logik font-bold text-transparent bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text animate-pulse leading-tight tracking-wide text-center md:text-left">
            AB POWER APNE HAATH MEIN 💥
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl font-jio text-gray-300 leading-relaxed text-center md:text-left">
            From your very first sip till its last drop, experience a strong Cola that puts the power in your hand —
            a refreshing and invigorating carbonated blast that hits differently.
          </p>
          <div className="mt-6 h-1 w-1/2 bg-gradient-to-r from-cyan-300 via-white to-cyan-300 rounded-full animate-glow mx-auto md:mx-0" />
        </div>

        {/* 🖼️ Image */}
        <div
          ref={imageRef}
          className={`w-full md:w-1/2 transition-all duration-1000 ease-in-out ${
            isVisible
              ? "opacity-100 scale-100 translate-x-0"
              : "opacity-0 scale-95 -translate-x-20"
          }`}
        >
          <img
            src={Power}
            alt="Power in Hand"
            className="rounded-3xl hover:scale-105 transition-transform duration-700 ease-in-out w-full h-[300px] sm:h-[450px] md:h-[90vh] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default PowerUp;
