import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // For smooth scrolling
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom"; // For routing

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (to) => {
    if (location.pathname === "/") {
      // If on the home page, scroll to the section
      const section = document.getElementById(to);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to the home page and scroll after page load
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(to);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <nav className="bg-white p-4 fixed w-full top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex flex-row items-center">
          <img
            src="/nirjala.jpg"
            className="rounded-full h-[51px] w-[51px]"
            alt="Profile"
          />
          <div className="text-xl font-bold font-SourceSans3 text-black ml-5">
            NIRJALA SHRESTHA
          </div>
        </div>

        {/* Mobile Menu Toggle */}
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
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12" // Close icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                }
              ></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`md:flex md:items-center space-x-8 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <button
            onClick={() => handleNavigation("home")}
            className="text-black hover:text-[#D37A54] font-semibold cursor-pointer font-SourceSans3"
          >
            MENU
          </button>
          <button
            onClick={() => handleNavigation("about")}
            className="text-black hover:text-[#D37A54] font-semibold cursor-pointer font-SourceSans3"
          >
            ABOUT
          </button>
          <button
            onClick={() => handleNavigation("project")}
            className="text-black hover:text-[#D37A54] font-semibold cursor-pointer font-SourceSans3"
          >
            PROJECTS
          </button>
          <button
            onClick={() => handleNavigation("contact")}
            className="text-black hover:text-[#D37A54] font-semibold cursor-pointer font-SourceSans3"
          >
            CONTACT
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
