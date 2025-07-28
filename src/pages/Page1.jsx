import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const languages = [
  { lang: "English", text: "Campa Cola" },
  { lang: "Hindi", text: "कैंपा कोला" },
  { lang: "Marathi", text: "कॅंपा कोला" },
  { lang: "Tamil", text: "கம்பா கோலா" },
  { lang: "Bengali", text: "ক্যাম্পা কোলা" },
  { lang: "Gujarati", text: "કેમ્પા કોલા" },
  { lang: "Telugu", text: "క్యాంపా కోలా" },
  { lang: "Kannada", text: "ಕ್ಯಾಂಪಾ ಕೋಲಾ" },
  { lang: "Malayalam", text: "കാമ്പ കൊള" },
  { lang: "Urdu", text: "کیمپا کولا" },
];

const LanguageBanner = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (index < languages.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      // 🧠 Redirect after last language
      const redirectTimer = setTimeout(() => {
        navigate("/campacola"); // 👈 Change route as per your routing
      }, 2000);
      return () => clearTimeout(redirectTimer);
    }
  }, [index, navigate]);

  const currentLang = languages[index];

  return (
    
    <div className="h-40 w-full flex items-center justify-center bg-[#0B132B] border-y-2 border-[#D6B96A]/40 shadow-[0_4px_10px_rgba(214,185,106,0.25)] backdrop-blur-sm relative z-10">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className={`text-5xl md:text-7xl tracking-wide text-[#D6B96A] drop-shadow-[0_3px_6px_rgba(214,185,106,0.6)] ${currentLang.font} font-semibold italic`}
        >
          {currentLang.text}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LanguageBanner;
