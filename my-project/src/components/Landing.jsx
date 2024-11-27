import React from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Landing = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(landingbg.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "800px", // adjust height as per your layout
        }}
        className="flex py-16 px-32"
      >
        <div className="mt-52 flex flex-col gap-7 font-SourceSans3 px-24 w-[900px]">
          <h1 className=" font-SourceSans3 text-2xl">
            Hello, <span className="text-[#DA9171]">I am</span>
          </h1>
          <h1 className="text-5xl font-bold font-SourceSans3">
            <span>
              <Typewriter
                options={{
                  strings: ["Frontend Developer","UI/UX Designer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h1>

          <h2 className="font-SourceSans3">
          HI I’m a Junior front-end developer crafting responsive interfaces using React and the MERN stack. Passionate about learning and building.
          </h2>

          <Link to="project" smooth={true} offset={-70} duration={500}>
            <button className="bg-[#D37A54] p-3 w-[120px] sm:w-[150px] font-bold text-white rounded-lg font-SourceSans3 hover:bg-[#DA9171]">
              PROJECTS
            </button>
          </Link>
        </div>
        <div className=" w-[600px] flex justify-center mt-32">
          <img src="/nnn.png" className="shadow-lg w-60 h-60 sm:w-60 sm:h-60 lg:w-[500px] lg:h-[600px]  object-cover bg-[#D37A54]"/>
        </div>
      </div>
    </div>
  );
};

export default Landing;
