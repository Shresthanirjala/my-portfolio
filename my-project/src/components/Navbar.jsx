import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (to) => {
    setIsOpen(false);

    const sectionMap = {
      menu: "home",
      about: "about",
      projects: "projects",
      contact: "contact",
    };

    const sectionId = sectionMap[to] || to;

    if (location.pathname === "/") {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/");
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <>
      <div className="h-16"></div>

      <nav className="fixed w-full top-0 z-50 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <span className="text-gray-800 font-bold text-lg">N</span>
              </div>
              <button
                onClick={() => handleNavigation("menu")}
                className="text-white font-semibold text-lg hover:text-gray-300"
              >
                NIRJALA SHRESTHA
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["MENU", "ABOUT", "PROJECTS", "CONTACT"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavigation(item.toLowerCase())}
                  className="text-white hover:text-gray-300 font-medium"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => handleNavigation("contact")}
                className="bg-white text-gray-800 font-medium py-2 px-4 rounded hover:bg-gray-100"
              >
                HIRE ME
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden border-t border-gray-600">
              <div className="py-2 space-y-1">
                {["MENU", "ABOUT", "PROJECTS", "CONTACT"].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavigation(item.toLowerCase())}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700"
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={() => handleNavigation("contact")}
                  className="block w-full text-left px-4 py-2 text-white bg-gray-600 hover:bg-gray-500 mx-4 my-2 rounded"
                >
                  HIRE ME
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
