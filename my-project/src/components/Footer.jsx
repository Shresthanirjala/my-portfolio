import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-black px-6 sm:px-16 lg:px-40 py-16 lg:py-28">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:gap-60 gap-12">
        {/* Left Section */}
        <div className="lg:w-[500px] space-y-4 lg:space-y-8 text-center lg:text-left">
          <h1 className="text-white text-xl lg:text-2xl font-bold font-SourceSans3">
            NIRJALA SHRESTHA
          </h1>
          <h2 className="text-white font-SourceSans3 text-sm lg:text-base">
            Frontend focused Web Developer building the Frontend of Websites and
            Web Applications that leads to the success of the overall product.
          </h2>
        </div>

        {/* Right Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-white font-SourceSans3 text-xl lg:text-2xl font-bold">
            SOCIAL
          </h1>
          <div className="flex justify-center lg:justify-start gap-6 lg:gap-11 mt-4 lg:mt-7">
            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-[#D37A54] transition-all duration-300"
            >
              <FaLinkedin className="h-6 w-6 lg:h-[30px] lg:w-[30px] text-white" />
            </a>

            {/* GitHub Icon */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-[#D37A54] transition-all duration-300"
            >
              <FaGithub className="h-6 w-6 lg:h-[30px] lg:w-[30px] text-white" />
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-[#D37A54] transition-all duration-300"
            >
              <GrInstagram className="h-6 w-6 lg:h-[30px] lg:w-[30px] text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-screen-xl mx-auto border-t border-white mt-10"></div>

      {/* Footer Bottom */}
      <div className="flex justify-center items-center mt-8 lg:mt-24">
        <h1 className="text-white font-SourceSans3 text-sm lg:text-base text-center">
          © Copyright 2024, Made by Nirjala Shrestha
        </h1>
      </div>
    </div>
  );
};

export default Footer;
