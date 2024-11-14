import React, { useState } from 'react';
import { Link } from 'react-scroll'; // If you want smooth scrolling between sections

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">
          Portfolio
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? "block" : "hidden"} space-x-4`}>
          <Link to="home" smooth={true} offset={-70} duration={500} className="text-white hover:text-gray-400 cursor-pointer">Home</Link>
          <Link to="about" smooth={true} offset={-70} duration={500} className="text-white hover:text-gray-400 cursor-pointer">About</Link>
          <Link to="projects" smooth={true} offset={-70} duration={500} className="text-white hover:text-gray-400 cursor-pointer">Projects</Link>
          <Link to="contact" smooth={true} offset={-70} duration={500} className="text-white hover:text-gray-400 cursor-pointer">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
