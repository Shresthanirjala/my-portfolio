import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

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

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/nirjala_shrestha34/?fbclid=IwZXh0bgNhZW0CMTEAAR2lW3abDpLiJ1A-OzEu-0nrm4NPXZdcz07bqh9Iykwy2d1tJ_z9KsGPWv8_aem_tN87biYh6ySc5Dju59arZA"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-lg hover:bg-[#D37A54] transition-all duration-300"
          >
            <GrInstagram className="h-[30px] w-[30px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
