import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(landingbg.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "400px", // adjust height as per your layout
        }}
        className="mt-6 flex items-center justify-center flex-col gap-4"
      >
        <h1 className="text-center font-SourceSans3 font-bold text-3xl">
          Contact
        </h1>
        <div className="flex justify-center">
          <img
            src="line.svg"
            className="w-16 sm:w-[100px] h-[4px]"
            alt="Divider"
          />
        </div>
        <div className="flex flex-row gap-11 mt-7">
          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/nirjala-shrestha-2b1624289/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-lg hover:bg-[#D37A54] transition-all duration-300"
          >
            <FaLinkedin className="h-[30px] w-[30px]" />
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/Shresthanirjala"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-lg hover:bg-[#D37A54] transition-all duration-300"
          >
            <FaGithub className="h-[30px] w-[30px]" />
          </a>

          {/* Whatsapp Icon */}
          <a
            href="https://wa.me/9808845112"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
             className="p-5 rounded-lg hover:bg-[#D37A54] transition-all duration-300"
          >
            <FaWhatsapp  className="h-[30px] w-[30px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
