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
      // Redirect to main site
      const redirectTimer = setTimeout(() => {
        navigate("/campacola");
      }, 2000);
      return () => clearTimeout(redirectTimer);
    }
  }, [index, navigate]);

  const currentLang = languages[index];

  return (
    <div className="h-screen w-full bg-[#0B132B] flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, z: 30, scale: 0.95 }}
          animate={{ opacity: 1, z: 0, scale: 1 }}
          exit={{ opacity: 0, z: -30, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-7xl tracking-wide text-[#D6B96A] drop-shadow-[0_3px_6px_rgba(214,185,106,0.6)] font-semibold italic text-center"
        >
          {currentLang.text}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LanguageBanner;
