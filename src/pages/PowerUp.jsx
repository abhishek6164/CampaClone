import React, { useEffect, useRef, useState } from 'react';
import Power from '../assets/power.png';

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
        <div className="w-full h-fit bg-gradient-to-b from-gray-900 via-gray-800 to-black flex items-center justify-center overflow-hidden px-4">
            <div className="flex flex-col -mt-20 md:flex-row items-center justify-center gap-10 max-w-[1200px] p-8 rounded-3xl">

                {/* 🖼️ Left Image */}
                <div
                    ref={imageRef}
                    className={`w-full md:w-1/2 transition-all duration-700 ${
                        isVisible ? 'animate-slideInLeft opacity-100' : 'opacity-0 translate-x-[-100px]'
                    }`}
                >
                    <img
                        className="w-full h-[100vh] rounded-2xl hover:scale-105 transition-transform duration-700"
                        src={Power}
                        alt="Power in Hand"
                    />
                </div>

                {/* 📝 Right Text */}
                <div
                    ref={textRef}
                    className={`w-full mt-60 md:w-3/6 text-center md:text-left text-white space-y-6 transition-all duration-700 ${
                        isVisible ? 'animate-slideInRight opacity-100' : 'opacity-0 translate-x-[100px]'
                    }`}
                >
                    <h1 className="text-4xl text-pretty md:text-5xl font-bold font-logik text-transparent bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-clip-text animate-pulse">
                        AB POWER APNE HAATH MEIN 💥
                    </h1>
                    <p className="text-lg md:text-xl font-jio text-gray-300 leading-relaxed">
                        From your very first sip till its last drop, experience a strong Cola that puts the power in your hand — a refreshing and invigorating carbonated blast!
                    </p>
                    <div className="w-1/2 h-1 mx-auto md:mx-0 animate-glow" />
                </div>
            </div>
        </div>
    );
};

export default PowerUp;
