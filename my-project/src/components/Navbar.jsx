import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Track scroll position for shadow and background opacity
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (to) => {
    setIsOpen(false);

    // Map menu items to their corresponding section IDs
    const sectionMap = {
      menu: "home", // assuming your home section has id "home"
      about: "about",
      projects: "projects",
      contact: "contact",
    };

    const sectionId = sectionMap[to] || to;

    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn(`Section with id "${sectionId}" not found`);
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        } else {
          console.warn(`Section with id "${sectionId}" not found`);
        }
      }, 300); // Increased timeout to give the page more time to load
    }
  };

  return (
    <>
      {/* Add a placeholder div to prevent content from being hidden under the navbar */}
      <div className="h-16 md:h-20"></div>

      <nav
        className={`fixed w-full top-0 z-50 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white"
        } border-b border-purple-200 transition-all duration-300`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center justify-between w-full md:w-auto pb-2 md:pb-0">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-purple-400 rounded-lg flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <button
                  onClick={() => handleNavigation("menu")}
                  className="text-xl font-SourceSans3 font-semibold cursor-pointer text-purple-800 hover:text-purple-600 transition-colors"
                >
                  NIRJALA SHRESTHA
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-purple-800 focus:outline-none p-1 rounded-md border border-purple-200 hover:bg-purple-50"
                  aria-label="Toggle menu"
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
                          ? "M6 18L18 6M6 6l12 12"
                          : "M4 6h16M4 12h16M4 18h16"
                      }
                    ></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation Links */}
            <div
              className={`${
                isOpen ? "block" : "hidden md:flex"
              } w-full md:w-auto border-t md:border-t-0 border-purple-100 pt-2 md:pt-0 ${
                isOpen ? "bg-white pb-3" : ""
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-3 md:space-y-0">
                {["MENU", "ABOUT", "PROJECTS", "CONTACT"].map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavigation(item.toLowerCase())}
                    className="text-purple-800 hover:text-purple-500 relative font-semibold cursor-pointer font-SourceSans3 group transition-colors text-left px-2 py-1 md:py-0"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </button>
                ))}
                <button
                  className="bg-gradient-to-r from-purple-600 to-purple-400 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 mt-4 md:mt-0"
                  onClick={() => handleNavigation("contact")}
                >
                  HIRE ME
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu backdrop when open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/10 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
