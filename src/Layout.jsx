import React from 'react';
import Nav from './component/Nav';

const Layout = ({ children }) => {
  return (
    <div className="pt-44 bg-[#08142B] min-h-screen text-white">
      <Nav />
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
