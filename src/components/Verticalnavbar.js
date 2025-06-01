import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Verticalnavbar = ({ scrollToSection }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative">
      {/* Navbar */}
      <div
        className="fixed top-0 left-0 h-full w-16 bg-blue-300 border-2 border-black flex flex-col items-center z-50"
      >
        {/* Hamburger icon at the top (always visible, toggles sidebar) */}
        <div
          className="flex items-center justify-center w-16 h-16 bg-blue-200 border-2 ml-1 mt-0 border-black cursor-pointer"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <FaBars className="text-black text-2xl" />
        </div>
        {/* "PORTFOLIO" text centered vertically and clickable */}
        <div
          className="flex-1 flex items-center justify-center transform -rotate-90 whitespace-nowrap cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          <span className="text-3xl font-bold font-babyboomer">PORTFOLIO</span>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-16 h-full bg-blue-200 border-2 border-l-0 border-black transition-transform duration-500 ${
          isSidebarOpen ? 'z-[999] translate-x-0' : 'z-40 -translate-x-full'
        }`}
        style={{ width: '300px' }}
      >
        <ul className="p-7 space-y-6">
          <li
            className="text-2xl font-bold cursor-pointer border-b-2 border-black pb-2"
            onClick={() => { scrollToSection('home'); setIsSidebarOpen(false); }}
          >
            Home
          </li>
          <li
            className="text-2xl font-bold cursor-pointer border-b-2 border-black pb-2"
            onClick={() => { scrollToSection('about'); setIsSidebarOpen(false); }}
          >
            About
          </li>
          <li
            className="text-2xl font-bold cursor-pointer border-b-2 border-black pb-2"
            onClick={() => { scrollToSection('projects'); setIsSidebarOpen(false); }}
          >
            Projects
          </li>
          <li
            className="text-2xl font-bold cursor-pointer border-b-2 border-black pb-2"
            onClick={() => { scrollToSection('connect'); setIsSidebarOpen(false); }}
          >
            Connect
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Verticalnavbar;
