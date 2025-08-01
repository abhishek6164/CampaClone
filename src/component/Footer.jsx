import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 sm:px-6 py-10 sm:py-12 w-full mt-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-3 gap-10">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h3 className="text-xl font-bold text-yellow-400 mb-3">Campa Cola HQ</h3>
          <p className="text-sm leading-6 text-gray-300">
            501, Soda Street, Flavour Nagar<br />
            Mumbai, Maharashtra, India<br />
            Contact: +91 99999 88888<br />
            Email: hello@campacola.in
          </p>
        </motion.div>

        {/* CENTER */}
        <motion.ul
          className="flex flex-col gap-3 text-sm font-medium items-center md:items-start"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {["Privacy Policy", "Terms & Conditions", "Caution Notice", "Support", "Contact Us"].map((item, i) => (
            <li key={i} className="hover:text-yellow-400 transition duration-300 cursor-pointer">{item}</li>
          ))}
        </motion.ul>

        {/* RIGHT */}
        <motion.div
          className="flex flex-col gap-4 items-center md:items-end text-center md:text-right"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex gap-5 text-2xl">
            <a href="https://www.linkedin.com/in/abhishek-pipriye/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-yellow-400 hover:scale-110 transition-all duration-300" />
            </a>
            <a href="https://github.com/abhishek6164" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-yellow-400 hover:scale-110 transition-all duration-300" />
            </a>
            <a href="https://www.instagram.com/abhishek.pipriye/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-yellow-400 hover:scale-110 transition-all duration-300" />
            </a>
          </div>
          <p className="text-sm text-gray-400">© 2023 Campa Cola. All rights reserved.</p>
          <p className="text-yellow-400 text-sm">Made with ❤️ by Abhishek</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
