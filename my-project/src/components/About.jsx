import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    { name: "React", category: "Frontend" },
    { name: "JavaScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Next.js", category: "Framework" },
    { name: "Express.js", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "Python", category: "Language" },
    { name: "Git", category: "Tools" },
    { name: "RESTful APIs", category: "Development" },
    { name: "Responsive Design", category: "Frontend" },
  ];

  const experiences = [
    {
      period: "2025 - Present",
      role: "Web Developer",
      company: "Clothing In Nepal",
      description:
        "Leading development of responsive e-commerce solutions with modern technologies.",
      technologies: ["React", "Node.js", "MongoDB"],
      type: "Full-time",
    },
    {
      period: "2024",
      role: "Full-Stack Developer Intern",
      company: "N9 Solution",
      description:
        "Collaborated on enterprise-level projects and API development.",
      technologies: ["MERN Stack", "API Development"],
      type: "Internship",
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "himalAi 2024",
      description: "Top 4 finalist in AI innovation hackathon",
      date: "April 2025",
      award: "Top 4 Finalist",
      image: "/hackathon1.jpg",
    },
    {
      id: 2,
      title: "Sui Hacker House",
      description: "AI Track Winner for platform development",
      date: "April 2025",
      award: "AI Track Winner",
      image: "/Hackathon2.JPG",
    },
   
  ];

  return (
    <div
      id="about"
      className="relative min-h-screen overflow-hidden bg-gray-900 py-10"
    >
      {/* Particle canvas for subtle background */}
      <div className="absolute inset-0 z-0" />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 z-1"></div>

      {/* Professional geometric accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-600/10 to-transparent rounded-full blur-3xl z-1"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl z-1"></div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 z-1"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container mx-auto px-0 py-10 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About Me
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            I'm a{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text font-semibold">
              full-stack developer
            </span>{" "}
            who creates efficient, scalable web solutions
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Available for projects
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div>Based in Nepal 🇳🇵</div>
          </div>
        </div>

        {/* Skills & Experience Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Skills Side */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="bg-gray-800/40 border border-gray-700/50 rounded-lg p-4 hover:border-blue-500/30 transition-all duration-300">
                      <div className="font-medium text-white mb-1">
                        {skill.name}
                      </div>
                      <div className="text-xs text-gray-400">
                        {skill.category}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Side */}
          <div className="space-y-8">
            {/* Experience */}
            <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-white">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-blue-500/50 pl-6 pb-6 last:pb-0"
                  >
                    <div className="bg-gray-800/30 rounded-lg p-6">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-sm text-blue-400 font-mono">
                          {exp.period}
                        </span>
                        <span className="px-3 py-1 text-xs bg-blue-600/20 text-blue-300 rounded-full border border-blue-600/30">
                          {exp.type}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">
                        {exp.role}
                      </h4>
                      <p className="text-blue-400 font-medium mb-3">
                        {exp.company}
                      </p>
                      <p className="text-gray-300 text-sm mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded border border-gray-600/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-3">
              Achievements & Recognition
            </h3>
            <p className="text-gray-400">
              Key milestones in my development journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement) => (
              <div key={achievement.id} className="group">
                <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-800/50 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300">
                  <div className="aspect-video bg-gray-800/50 overflow-hidden">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-bold text-lg text-white mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-300 mb-4">
                      {achievement.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {achievement.date}
                      </span>
                      <div className="px-3 py-1 text-xs bg-blue-600/20 text-blue-300 rounded-full border border-blue-600/30">
                        {achievement.award}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

     
      
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
