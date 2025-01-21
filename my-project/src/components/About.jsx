import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div className="bg-white text-black">
      <div
        style={{
          backgroundImage: "url(background.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="flex items-center justify-center  px-4 sm:px-8 lg:px-24  sm:py-20"
      >
        <div className="w-full max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 text-black">
            <div className="mt-8 lg:mt-14">
              <img
                src="nirjala.jpg"
                alt="Profile"
                className="shadow-lg w-48 h-48 sm:w-60 sm:h-60 lg:w-[300px] lg:h-[300px] rounded-full object-cover"
              />
            </div>
            <div className="lg:w-[800px] mt-8 lg:mt-20 text-center lg:text-left px-4 sm:px-0">
              <h1 className="text-3xl sm:text-4xl font-bold font-SourceSans3">
                Get to Know me!!
              </h1>
              <p className="text-base sm:text-lg leading-relaxed mt-6 font-SourceSans3">
                I'm Nirjala, a passionate Frontend Developer and UI/UX Designer
                based in Kathmandu, dedicated to building seamless,
                user-friendly web applications. My focus is on creating
                responsive, engaging interfaces that enhance user experience.
                Alongside my frontend expertise, I also have a working knowledge
                of backend technologies like Node.js and Express, which gives me
                a well-rounded approach to development.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mt-3 font-SourceSans3">
                I’m always eager to learn and stay up-to-date with emerging
                technologies, aiming to bring a fresh perspective to every
                project. My goal is to craft digital solutions that are both
                visually appealing and functionally robust, delivering quality
                experiences for users.
              </p>
            </div>
          </div>

          <div className="mt-16 lg:mt-20 text-black flex flex-col lg:flex-row  justify-between">
            <div className="">
              <h1 className="text-2xl sm:text-3xl font-bold font-SourceSans3 mb-5">
                Personal Skills
              </h1>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Responsible",
                  "Time Management",
                  "Attention to Details",
                  "Communication Skill",
                ].map((skill, idx) => (
                  <button
                    key={idx}
                    className="rounded-2xl min-w-[120px] sm:min-w-[150px] h-[40px] p-2 text-black border border-black"
                  >
                    {skill}
                  </button>
                ))}
              </div>
              <div className="mt-10">
                <h1 className="text-2xl sm:text-3xl font-bold font-SourceSans3">
                  Experience
                </h1>
                <div className="mt-5 space-y-5">
                  <div>
                    <h3 className="text-lg font-SourceSans3">2021 - 2023</h3>
                    <h2 className="text-xl font-bold font-SourceSans3">
                      English Tutor
                    </h2>
                    <p>Atlantic English Secondary School</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-SourceSans3">2024 </h3>
                    <h2 className="text-xl font-bold font-SourceSans3">
                      Fullstack Intern and Traineship
                    </h2>
                    <p className="font-SourceSans3">N9 Solution</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-SourceSans3">2025-present </h3>
                    <h2 className="text-xl font-bold font-SourceSans3">
                      Web Developer
                    </h2>
                    <p className="font-SourceSans3">Clothing In Nepal</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <h1 className="text-2xl sm:text-3xl font-bold font-SourceSans3 mb-5">
                Technical Skills
              </h1>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "React",
                  "JavaScript",
                  "HTML/CSS",
                  "Tailwind CSS",
                  "Node.js",
                  "Express",
                  "UI/UX Design",
                  "GitHub",
                  "Next js",
                ].map((field, idx) => (
                  <button
                    key={idx}
                    className="rounded-2xl min-w-[120px] sm:min-w-[150px] h-[40px] p-2 text-black border border-black"
                  >
                    {field}
                  </button>
                ))}
              </div>

              <div className="mt-10">
                <h1 className="text-2xl sm:text-3xl font-bold font-SourceSans3">
                  Education
                </h1>
                <div className="mt-5 space-y-5">
                  <div>
                    <h3 className="text-lg font-SourceSans3">2019</h3>
                    <h2 className="text-xl font-bold font-SourceSans3">
                      Secondary Education Examination
                    </h2>
                    <p className="font-SourceSans3">
                      Bal Sudhar Secondary School
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-SourceSans3">2019-2021</h3>
                    <h2 className="text-xl font-bold font-SourceSans3">
                      School Leaving Certificate / 10+2
                    </h2>
                    <p className="font-SourceSans3">
                      Indreswori Secondary School
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-SourceSans3">2021 - Present</h3>
                    <h2 className="text-xl font-bold font-SourceSans3">
                      Bachelor in Computer Application
                    </h2>
                    <p className="font-SourceSans3">Jaya Multiple Campus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-12 lg:mt-20 mb-8 lg:mb-24">
            <Link to="contact" smooth={true} offset={-70} duration={500}>
              <button className="bg-[#D37A54] p-3 w-[120px] sm:w-[150px] font-bold text-white rounded-lg font-SourceSans3 hover:bg-[#DA9171]">
                CONTACT
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
