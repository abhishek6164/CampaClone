import { useState } from "react";
import { Menu, X } from "lucide-react"; // 👉 Lucide icons for hamburger (install: `npm i lucide-react`)

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "CAMPA COLA",
    "LEGACY",
    "CAMPA CRICKET",
    "POWER UP",
    "PRODUCT RANGE",
    "FIZZY MEMORIES",
  ];

  return (
    <header className="fixed top-0  w-screen z-50">
      <nav className="bg-gradient-to-b w-full from-[#08142B] via-[#0D1D3B] to-[#08142B] text-[#D6B96A] px-6 sm:px-12 lg:px-20 py-4 border-y-2 border-[#D6B96A]/10 shadow-xl backdrop-blur-sm flex justify-between items-center  max-w-[1600px] mx-auto">
        {/* 🧃 Brand / Logo */}
        <div className="font-bold text-sm sm:text-base tracking-widest">CAMPA</div>

        {/* 🍔 Hamburger Menu - Mobile Only */}
        <div className="md:hidden z-[999]">
          {isOpen ? (
            <X size={26} onClick={() => setIsOpen(false)} className="cursor-pointer" />
          ) : (
            <Menu size={26} onClick={() => setIsOpen(true)} className="cursor-pointer" />
          )}
        </div>

        {/* 🖥️ Desktop Nav */}
        <ul className="hidden md:flex flex-wrap items-center justify-between gap-4 sm:gap-6 md:gap-10 text-xs sm:text-sm md:text-base font-semibold tracking-wide">
          {navItems.map((item, i) => (
            <li
              key={i}
              className="cursor-pointer relative group transition-all duration-300 ease-in-out"
            >
              <span className="group-hover:text-white transition-colors duration-300">{item}</span>
              <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[2px] bg-[#D6B96A] transition-all duration-300 ease-in-out"></span>
            </li>
          ))}
        </ul>

        {/* 📱 Mobile Menu Overlay */}
        {isOpen && (
          <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-[#08142B] bg-opacity-95 backdrop-blur-lg z-[998] flex flex-col items-center justify-center gap-8 text-lg font-semibold transition-all">
            {navItems.map((item, i) => (
              <span
                key={i}
                className="hover:text-white text-[#D6B96A] transition duration-300 cursor-pointer text-xl"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
