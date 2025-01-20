import React from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Landing = () => {
  return (
    <div
      style={{
        backgroundImage: "url(landingbg.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex items-center justify-center px-6 lg:px-0 xl:px-9"
    >
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-[1200px] gap-10 lg:gap-16 lg:mt-14 mt-28">
        {/* Text Section */}
        <div className="flex flex-col gap-7 font-SourceSans3 px-4 lg:px-12 xl:px-24 w-full lg:w-[60%] text-center lg:text-left">
          <h1 className="text-lg sm:text-xl lg:text-2xl">
            Hello, <span className="text-[#DA9171]">I am</span>
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            <Typewriter
              options={{
                strings: ["Frontend Developer", "UI/UX Designer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <h2 className="text-sm sm:text-base lg:text-lg">
            Hi! I’m a Junior Frontend Developer and UI/UX Designer crafting responsive interfaces
            using React and the MERN stack. Passionate about learning and
            building.
          </h2>
          <Link to="project" smooth={true} offset={-70} duration={500}>
            <button className="bg-[#D37A54] p-3 w-[100px] sm:w-[120px] md:w-[150px] transition-colors delay-150 duration-300 ease-in-out font-bold text-white rounded-lg hover:bg-[#DA9171]">
              PROJECTS
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-end w-full lg:w-[40%]">
          <img
            src="/nirjala1.png"
            alt="Profile"
            className="hidden lg:block w-40 lg:mt-[-40px] h-40  mb-40 sm:w-52 sm:h-52 lg:w-[300px] lg:h-[400px] xl:w-[500px] xl:h-[600px] object-cover rounded-full lg:rounded-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
