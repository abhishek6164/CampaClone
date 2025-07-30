import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-8 w-full mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        
        {/* Left side: Links */}
        <ul className="flex flex-col md:flex-row gap-4 text-sm font-medium">
          <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">Privacy Policy</li>
          <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">Terms & Conditions</li>
          <li className="hover:text-yellow-400 transition duration-300 cursor-pointer">Caution Notice</li>
        </ul>
        <div> 
            <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/abhishek-pipriye/" className="hover:text-yellow-400 transition duration-300">LinkedIn</a>
                <a href="https://github.com/abhishek6164" className="hover:text-yellow-400 transition duration-300">GitHub</a>
                <a href="https://www.instagram.com/abhishek.pipriye/" className="hover:text-yellow-400 transition duration-300">Instagram</a>
            </div>
        </div>
        {/* Right side: Info */}
        <div className="text-center md:text-right text-sm">
          <p className="mb-1">© 2023 Campa Cola. All rights reserved.</p>
          <p className="text-yellow-400">Developed with ❤️ by Abhishek</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
