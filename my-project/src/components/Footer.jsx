import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-10">
          {/* Left Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              NIRJALA SHRESTHA
            </h2>
            <p className="text-gray-300 max-w-md">
              Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex-1 md:flex md:justify-end">
            <div>
              <h3 className="text-xl font-bold text-purple-400 mb-4">SOCIAL</h3>
              <div className="flex gap-4">
                {/* LinkedIn Icon */}
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="text-xl" />
                </a>

                {/* GitHub Icon */}
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="text-xl" />
                </a>

                {/* WhatsApp Icon */}
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors duration-300"
                  aria-label="WhatsApp Contact"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent my-6"></div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-400 text-sm">
          © Copyright 2024, Made by Nirjala Shrestha
        </div>
      </div>
    </footer>
  );
};

export default Footer;
