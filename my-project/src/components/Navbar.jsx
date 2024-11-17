import React, { useState } from "react";
import { Link } from "react-scroll"; // For smooth scrolling

import About from "./About";
import Landing from "./Landing";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white p-4 fixed w-full top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-row items-center">
          <img
            src="nirjala.jpg"
            className="rounded-full h-[51px] w-[51px]"
            alt="Profile"
          />
          <div className="text-xl font-bold font-SourceSans3 text-black ml-5">
            NIRJALA SHRESTHA
          </div>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              ></path>
            </svg>
          </button>
        </div>
        <div className={`md:flex ${isOpen ? "block" : "hidden"} space-x-8`}>
          <Link
            to="home"
            smooth={true}
            offset={-70}
            duration={500}
            className="text-black hover:text-[#D37A54] font-semibold cursor-pointer font-SourceSans3"
          >
            MENU
          </Link>
          <Link
            to="about"
            smooth={true}
            offset={-70}
            duration={500}
            className="text-black hover:text-[#D37A54] font-semibold cursor-pointer font-SourceSans3"
          >
            ABOUT
          </Link>
          <Link
            to="project"
            smooth={true}
            offset={-70}
            duration={500}
            className="text-black hover:text-[#D37A54] font-semibold cursor-pointer font-SourceSans3"
          >
            PROJECTS
          </Link>
          <Link
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
            className="text-black hover:text-[#D37A54] font-semibold cursor-pointer font-SourceSans3"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;
