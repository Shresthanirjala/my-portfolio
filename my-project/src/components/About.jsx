import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const About = () => {
  const [activeTab, setActiveTab] = useState("personal");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Animation for skill levels
  const personalSkills = [
    { name: "Responsible", level: 95 },
    { name: "Time Management", level: 90 },
    { name: "Attention to Details", level: 92 },
    { name: "Communication Skills", level: 88 },
  ];

  const technicalSkills = [
    { name: "React", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Node.js", level: 80 },
    { name: "Express", level: 75 },
    { name: "UI/UX Design", level: 85 },
    { name: "GitHub", level: 82 },
    { name: "Next.js", level: 78 },
  ];

  // Hackathon photos data
  const hackathonPhotos = [
    {
      id: 1,
      image: "hackathon1.jpg", // Replace with your actual image path
      title: "himalAi 2024",
      description: "Got the honourable mention tag and also selected as top 4",
      date: "April 2025",
    },
    {
      id: 2,
      image: "Hackathon2.JPG", // Replace with your actual image path
      title: "Sui Hacker House",
      description:
        "Collaborated on an AI-powered platform and Winner of the AI Track",
      date: "April 2025",
    },
  ];

  return (
    <div
      id="about"
      className="bg-gradient-to-b from-white to-purple-50 text-black py-12 sm:py-16 md:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        {/* Profile Section */}
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-16">
            {/* Profile Image with Animated Border */}
            <div className="relative group mb-6 lg:mb-0">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-purple-600 to-purple-400 rounded-full blur-md group-hover:blur-lg transition-all duration-300"></div>
              <div className="relative p-1.5 bg-white rounded-full">
                <img
                  src="nirjala.jpg"
                  alt="Profile"
                  className="w-40 h-40 xs:w-44 xs:h-44 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full object-cover transition-all duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* About Text */}
            <div className="lg:w-2/3 text-center lg:text-left">
              <div className="inline-block mb-3 md:mb-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-800 relative inline-block">
                  Get to Know Me
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></span>
                </h1>
              </div>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-4 md:mt-6 text-gray-700">
                I'm{" "}
                <span className="text-purple-600 font-semibold">Nirjala</span>,
                A passionate Full-Stack Software Developer based in Kathmandu,
                committed to building robust, scalable, and user-friendly web
                applications. I specialize in both frontend and backend
                development, creating responsive interfaces and powerful
                server-side solutions. With expertise in technologies like
                React, Node.js, and Express, I bring a well-rounded approach to
                delivering seamless digital experiences.
              </p>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-3 md:mt-4 text-gray-700">
                I'm always eager to learn and stay up-to-date with emerging
                technologies, aiming to bring a fresh perspective to every
                project. My goal is to craft digital solutions that are both
                visually appealing and functionally robust, delivering quality
                experiences for users.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mt-6 md:mt-8">
                <div className="p-2 sm:p-3 md:p-4 bg-white border border-purple-100 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600">
                    1+
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    Years Experience
                  </p>
                </div>
                <div className="p-2 sm:p-3 md:p-4 bg-white border border-purple-100 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600">
                    15+
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    Projects
                  </p>
                </div>
                <div className="p-2 sm:p-3 md:p-4 bg-white border border-purple-100 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600">
                    10+
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    Clients
                  </p>
                </div>
                <div className="p-2 sm:p-3 md:p-4 bg-white border border-purple-100 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600">
                    3
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    Certificates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Education Section */}
        <div className="mt-12 md:mt-16 lg:mt-24">
          {/* Tab Navigation - Scrollable on mobile */}
          <div className="flex justify-center mb-6 md:mb-10 overflow-x-auto pb-2 px-2">
            <div className="inline-flex p-1 bg-gray-100 rounded-full no-scrollbar whitespace-nowrap">
              <button
                onClick={() => setActiveTab("personal")}
                className={`px-3 sm:px-4 md:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  activeTab === "personal"
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                Personal Skills
              </button>
              <button
                onClick={() => setActiveTab("technical")}
                className={`px-3 sm:px-4 md:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  activeTab === "technical"
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                Technical Skills
              </button>
              <button
                onClick={() => setActiveTab("experience")}
                className={`px-3 sm:px-4 md:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  activeTab === "experience"
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`px-3 sm:px-4 md:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  activeTab === "education"
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab("hackathons")}
                className={`px-3 sm:px-4 md:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                  activeTab === "hackathons"
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-gray-700 hover:text-purple-600"
                }`}
              >
                Hackathons
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-10 md:mb-16">
            {/* Personal Skills Tab */}
            <div
              className={`transition-opacity duration-500 ${
                activeTab === "personal"
                  ? "block opacity-100"
                  : "hidden opacity-0"
              }`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-800 mb-4 md:mb-6">
                Personal Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                {personalSkills.map((skill, idx) => (
                  <div key={idx} className="mb-3 md:mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-sm md:text-base text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-purple-600 font-bold text-sm md:text-base">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 md:h-2.5">
                      <div
                        className="bg-gradient-to-r from-purple-400 to-purple-600 h-2 md:h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Tab */}
            <div
              className={`transition-opacity duration-500 ${
                activeTab === "technical"
                  ? "block opacity-100"
                  : "hidden opacity-0"
              }`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-800 mb-4 md:mb-6">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {technicalSkills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 rounded-lg md:rounded-xl p-3 md:p-4 border border-purple-100 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-sm md:text-base text-gray-800">
                        {skill.name}
                      </span>
                      <span className="text-xs md:text-sm font-bold text-purple-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
                      <div
                        className="bg-gradient-to-r from-purple-400 to-purple-600 h-1.5 md:h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Tab */}
            <div
              className={`transition-opacity duration-500 ${
                activeTab === "experience"
                  ? "block opacity-100"
                  : "hidden opacity-0"
              }`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-800 mb-4 md:mb-6">
                Experience
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div className="relative border-l-2 border-purple-300 pl-4 sm:pl-6 pb-4 sm:pb-6">
                  <div className="absolute -left-1.5 sm:-left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-purple-600"></div>
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4 md:p-5 hover:shadow-md transition-shadow">
                    <div className="inline-block px-2 sm:px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full mb-2">
                      2025-present
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                      Web Developer
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mt-1">
                      Clothing In Nepal
                    </p>
                    <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-700">
                      Developing responsive and user-friendly web applications,
                      implementing modern frontend frameworks and ensuring
                      optimal performance.
                    </p>
                  </div>
                </div>

                <div className="relative border-l-2 border-purple-300 pl-4 sm:pl-6 pb-4 sm:pb-6">
                  <div className="absolute -left-1.5 sm:-left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-purple-600"></div>
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4 md:p-5 hover:shadow-md transition-shadow">
                    <div className="inline-block px-2 sm:px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full mb-2">
                      2024
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                      Fullstack Intern and Traineeship
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mt-1">
                      N9 Solution
                    </p>
                    <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-700">
                      Gained hands-on experience with both frontend and backend
                      technologies, collaborating with senior developers on
                      real-world projects.
                    </p>
                  </div>
                </div>

                <div className="relative border-l-2 border-purple-300 pl-4 sm:pl-6">
                  <div className="absolute -left-1.5 sm:-left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-purple-600"></div>
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4 md:p-5 hover:shadow-md transition-shadow">
                    <div className="inline-block px-2 sm:px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full mb-2">
                      2021-2023
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                      English Tutor
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mt-1">
                      Atlantic English Secondary School
                    </p>
                    <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-700">
                      Developed strong communication and teaching skills while
                      helping students improve their English language
                      proficiency.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Tab */}
            <div
              className={`transition-opacity duration-500 ${
                activeTab === "education"
                  ? "block opacity-100"
                  : "hidden opacity-0"
              }`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-800 mb-4 md:mb-6">
                Education
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div className="relative border-l-2 border-purple-300 pl-4 sm:pl-6 pb-4 sm:pb-6">
                  <div className="absolute -left-1.5 sm:-left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-purple-600"></div>
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4 md:p-5 hover:shadow-md transition-shadow">
                    <div className="inline-block px-2 sm:px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full mb-2">
                      2021-Present
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                      Bachelor in Computer Application
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mt-1">
                      Jaya Multiple Campus
                    </p>
                    <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-700">
                      Focusing on computer science fundamentals, web
                      development, and software engineering principles.
                    </p>
                  </div>
                </div>

                <div className="relative border-l-2 border-purple-300 pl-4 sm:pl-6 pb-4 sm:pb-6">
                  <div className="absolute -left-1.5 sm:-left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-purple-600"></div>
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4 md:p-5 hover:shadow-md transition-shadow">
                    <div className="inline-block px-2 sm:px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full mb-2">
                      2019-2021
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                      School Leaving Certificate / 10+2
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mt-1">
                      Indreswori Secondary School
                    </p>
                    <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-700">
                      Completed higher secondary education with a focus on
                      business and mathematics.
                    </p>
                  </div>
                </div>

                <div className="relative border-l-2 border-purple-300 pl-4 sm:pl-6">
                  <div className="absolute -left-1.5 sm:-left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-purple-600"></div>
                  <div className="bg-gray-50 rounded-lg p-3 sm:p-4 md:p-5 hover:shadow-md transition-shadow">
                    <div className="inline-block px-2 sm:px-3 py-1 text-xs font-semibold text-purple-600 bg-purple-100 rounded-full mb-2">
                      2019
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                      Secondary Education Examination
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 mt-1">
                      Bal Sudhar Secondary School
                    </p>
                    <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-700">
                      Completed basic education with excellent academic
                      performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hackathons Tab - NEW SECTION */}
            <div
              className={`transition-opacity duration-500 ${
                activeTab === "hackathons"
                  ? "block opacity-100"
                  : "hidden opacity-0"
              }`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-800 mb-4 md:mb-6">
                Hackathon Experiences
              </h2>
              <p className="text-sm md:text-base text-gray-700 mb-6">
                I'm passionate about participating in hackathons to solve
                real-world problems, collaborate with talented developers, and
                push my creative boundaries.
              </p>

              {/* Hackathon Photo Gallery */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
                {hackathonPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    className="bg-gray-50 rounded-lg overflow-hidden border border-purple-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                      <img
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="inline-block px-2 py-1 text-xs font-semibold text-purple-600 bg-white bg-opacity-90 rounded-full">
                          {photo.date}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-gray-800 mb-1">
                        {photo.title}
                      </h3>
                      <p className="text-sm text-gray-700">
                        {photo.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Hackathon Achievement or Highlight */}
              <div className="mt-8 p-4 sm:p-5 bg-purple-50 border border-purple-100 rounded-lg">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-purple-100 rounded-full">
                      <svg
                        className="w-8 h-8 text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-purple-800">
                      Hackathon Highlight
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 mt-2">
                      Participating in the hackathon challenged me to think
                      creatively under pressure and strengthened my ability to
                      work collaboratively in a fast-paced environment.
                      Throughout the event, I enhanced my technical skills by
                      applying AI tools to real-world problems, and learned how
                      to build user-focused solutions that address genuine
                      community needs. This experience helped me improve my
                      problem-solving abilities, adapt quickly to feedback, and
                      manage tasks effectively within limited time. It also
                      deepened my understanding of the impact technology can
                      have in creating social change, especially in making
                      education more inclusive for underserved communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-2 sm:mt-4 md:mt-6 mb-4 sm:mb-6 lg:mb-0">
          <Link to="contact" smooth={true} offset={-70} duration={500}>
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-600 to-purple-500 p-0.5 text-sm sm:text-base md:text-lg font-bold text-white shadow-lg transition-all hover:shadow-xl">
              <span className="relative px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 transition-all duration-300 ease-out group-hover:bg-opacity-0">
                LET'S CONNECT
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 ml-2 -mr-1 inline-block"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>

      {/* Add style for hiding scrollbar but allowing scrolling */}
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
      `}</style>
    </div>
  );
};

export default About;
