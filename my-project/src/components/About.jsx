import React, { useEffect, useState, useCallback, useRef } from "react";

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorTrail, setCursorTrail] = useState([]);
  const animationRef = useRef();
  const lastUpdateTime = useRef(0);
  const trailUpdateInterval = 50; // Update trail every 50ms for smoother performance

  // Optimized mouse tracking with throttling
  const handleMouseMove = useCallback((e) => {
    const now = Date.now();
    if (now - lastUpdateTime.current > 16) {
      // ~60fps throttling
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      lastUpdateTime.current = now;
    }
  }, []);

  // Smooth cursor trail with optimized updates
  useEffect(() => {
    const updateTrail = () => {
      setCursorTrail((prev) => {
        if (prev.length === 0) return [mousePosition];

        // Smooth interpolation for trail points
        const newTrail = [mousePosition];
        for (let i = 0; i < Math.min(8, prev.length); i++) {
          const prevPoint = prev[i];
          const factor = 0.85; // Smooth follow factor
          newTrail.push({
            x: prevPoint.x + (mousePosition.x - prevPoint.x) * (1 - factor),
            y: prevPoint.y + (mousePosition.y - prevPoint.y) * (1 - factor),
          });
        }
        return newTrail;
      });
    };

    const intervalId = setInterval(updateTrail, trailUpdateInterval);
    return () => clearInterval(intervalId);
  }, [mousePosition]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const skills = [
    { name: "React", category: "Frontend" },
    { name: "JavaScript", category: "Language" },
    { name: "Node.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Next.js", category: "Framework" },
    { name: "Express.js", category: "Backend" },
    { name: "Git", category: "Tools" },
    { name: "RESTful APIs", category: "Development" },
    { name: "Responsive Design", category: "Frontend" },
  ];

  const experiences = [
   
    {
      period: "2024-present",
      role: "Frontend Developer",
      company: "N9 Solution",
      description:
        "Collaborated on enterprise-level projects and API development.",
      technologies: ["React ", "Nextjs ", "Javascript ", "Tailwind css", "API Development"],
  
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "HimalAi 2024",
      description: "Top 4 finalist in AI innovation hackathon",
      date: "April 2025",
      award: "Top 4 Finalist",
      image: "/hackathon1.jpg",
      link: "https://www.linkedin.com/posts/nirjala-shrestha-2b1624289_himalaihackathon-firsthackathon-honorablemention-activity-7317567018604404737-_xC8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEYJlqUBODqn4P66q1zRcjX6tQQYLkdJv2g",
    },
    {
      id: 2,
      title: "Sui Hacker House",
      description: "AI Track Winner for platform development",
      date: "April 2025",
      award: "AI Track Winner",
      image: "/Hackathon2.JPG",
      link: "https://www.linkedin.com/posts/nirjala-shrestha-2b1624289_galexen-hackathonjourney-gratitude-activity-7322635570734624768-zTb_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEYJlqUBODqn4P66q1zRcjX6tQQYLkdJv2g",
    },
    {
      id: 3,
      title: "Solana Spotlight: Bringing Web3 to Everyday Nepalis",
      description: "Bounty Winner in Content Creation",
      date: "July 2025",
      award: "1st Runner Up",
      image: "/solana.jpg",
      link: "https://x.com/nirjalas437/status/1940959805063286885", 
    },
  ];

  const handleAchievementClick = (link) => {
    if (link && link !== "#") {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      id="about"
      className="relative min-h-screen overflow-hidden bg-gray-900 py-10 cursor-none"
    >
      {/* Optimized Magic Cursor */}
      <div className="fixed inset-0 pointer-events-none z-50">
       
        <div
          className="absolute w-8 h-8 rounded-full will-change-transform"
          style={{
            left: mousePosition.x - 16,
            top: mousePosition.y - 16,
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(147, 51, 234, 0.2) 50%, transparent 100%)",
            filter: "blur(8px)",
            transform: "translate3d(0, 0, 0)",
          }}
        />

        {/* Main cursor point with smooth transition */}
        <div
          className="absolute w-3 h-3 rounded-full will-change-transform"
          style={{
            left: mousePosition.x - 6,
            top: mousePosition.y - 6,
            background: "radial-gradient(circle, #60a5fa 0%, #a855f7 100%)",
            boxShadow:
              "0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(147, 51, 234, 0.4)",
            transform: "translate3d(0, 0, 0)",
          }}
        />

        {/* Optimized cursor trail */}
        {cursorTrail.slice(1, 6).map((point, index) => (
          <div
            key={index}
            className="absolute rounded-full will-change-transform"
            style={{
              left: point.x - (3 - index * 0.3),
              top: point.y - (3 - index * 0.3),
              width: Math.max(2, 6 - index * 1),
              height: Math.max(2, 6 - index * 1),
              background: `radial-gradient(circle, rgba(96, 165, 250, ${
                0.6 - index * 0.12
              }) 0%, rgba(168, 85, 247, ${0.3 - index * 0.06}) 100%)`,
              filter: `blur(${index * 0.5}px)`,
              transform: "translate3d(0, 0, 0)",
            }}
          />
        ))}

        {/* Simplified magic sparkles with CSS animations */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full animate-sparkle-smooth will-change-transform"
            style={{
              left: mousePosition.x + Math.cos(i * 1.57) * 30,
              top: mousePosition.y + Math.sin(i * 1.57) * 30,
              animationDelay: `${i * 0.25}s`,
              transform: "translate3d(0, 0, 0)",
            }}
          />
        ))}
      </div>

      {/* Simplified corner bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-15">
        {/* Top Left Corner - Fewer bubbles for better performance */}
        <div className="absolute top-0 left-0 w-80 h-80 overflow-hidden">
          <div className="absolute top-16 left-12 w-8 h-8 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full animate-bubble-smooth border border-blue-400/20 backdrop-blur-sm" />
          <div className="absolute top-32 left-24 w-6 h-6 bg-gradient-to-br from-purple-400/25 to-cyan-400/25 rounded-full animate-bubble-smooth-delay border border-purple-400/20 backdrop-blur-sm" />
          <div className="absolute top-24 left-6 w-4 h-4 bg-gradient-to-br from-cyan-400/30 to-indigo-400/30 rounded-full animate-bubble-smooth-2 border border-cyan-400/25 backdrop-blur-sm" />
        </div>

        {/* Top Right Corner - Simplified */}
        <div className="absolute top-0 right-0 w-80 h-80 overflow-hidden">
          <div className="absolute top-20 right-16 w-7 h-7 bg-gradient-to-br from-purple-400/22 to-blue-400/22 rounded-full animate-bubble-smooth-3 border border-purple-400/20 backdrop-blur-sm" />
          <div className="absolute top-12 right-8 w-5 h-5 bg-gradient-to-br from-cyan-400/27 to-purple-400/27 rounded-full animate-bubble-smooth-delay border border-cyan-400/25 backdrop-blur-sm" />
        </div>
      </div>

      {/* Optimized mouse-following gradient */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-3xl will-change-transform"
        style={{
          left: `${
            (mousePosition.x /
              (typeof window !== "undefined" ? window.innerWidth : 1920)) *
              100 -
            25
          }%`,
          top: `${
            (mousePosition.y /
              (typeof window !== "undefined" ? window.innerHeight : 1080)) *
              100 -
            25
          }%`,
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(147, 51, 234, 0.04) 50%, transparent 100%)",
          transform: "translate3d(0, 0, 0)",
          transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      />

      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 z-0"></div>

      {/* Simplified geometric accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-600/3 to-transparent rounded-full blur-3xl animate-pulse-smooth"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-600/3 to-transparent rounded-full blur-3xl animate-pulse-smooth-delay"></div>

      {/* Simplified grid pattern */}
      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-20 container mx-auto px-6 py-10 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white animate-fade-in-up">
              About Me
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 animate-fade-in-up-delay">
            I'm a{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-semibold animate-gradient-smooth">
              Frontend Developer
            </span>{" "}
            and a final-year BCA student with a strong passion for building
            efficient, scalable web solutions. With hands-on experience in both
            frontend technologies, I enjoy turning ideas into
            reality through clean, user-focused design and robust engineering.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400 animate-fade-in-up-delay-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-smooth"></div>
              Available for projects
            </div>
            <div className="w-px h-4 bg-gray-600"></div>
            <div>Based in Nepal 🇳🇵</div>
          </div>
        </div>

        {/* Skills & Experience Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Skills Side */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-8 hover:bg-gray-900/60 transition-all duration-300 hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/10">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Technical Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div
                      className="bg-gray-800/40 border border-gray-700/50 rounded-lg p-4 hover:border-blue-500/30 hover:transform hover:scale-105 hover:bg-gray-800/60 transition-all duration-200 cursor-none animate-fade-in-stagger"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="font-medium text-white mb-1 group-hover:text-blue-300 transition-colors duration-200">
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
          <div className="space-y-8 animate-slide-in-right">
            <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-800/50 rounded-2xl p-8 hover:bg-gray-900/60 transition-all duration-300 hover:border-blue-500/20 hover:shadow-xl hover:shadow-blue-500/10">
              <h3 className="text-2xl font-bold mb-6 text-white">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="border-l-2 border-blue-500/50 pl-6 pb-6 last:pb-0 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="bg-gray-800/30 rounded-lg p-6 hover:bg-gray-800/50 hover:transform hover:translateX-2 transition-all duration-200 group">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="text-sm text-blue-400 font-mono group-hover:text-blue-300 transition-colors duration-200">
                          {exp.period}
                        </span>
                        <span className="px-3 py-1 text-xs bg-blue-600/20 text-blue-300 rounded-full border border-blue-600/30 group-hover:bg-blue-600/30 transition-all duration-200">
                          {exp.type}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-200">
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
                            className="px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded border border-gray-600/50 hover:bg-gray-700/70 hover:border-blue-500/30 transition-all duration-200"
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

        {/* Achievements Section - Updated to display 3 cards in one row */}
        <div
          className="mb-16 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-white mb-3">
              Achievements & Recognition
            </h3>
            <p className="text-gray-400">
              Key milestones in my tech journey
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.id}
                className="group animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${1 + index * 0.2}s` }}
                onClick={() => handleAchievementClick(achievement.link)}
              >
                <div className="bg-gray-900/40 backdrop-blur-lg border border-gray-800/50 rounded-2xl overflow-hidden hover:border-blue-500/30 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 h-full">
                  <div className="aspect-video bg-gray-800/50 overflow-hidden relative">
                    <img
                      src={achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Click indicator */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-8 h-8 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/30">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="font-bold text-lg text-white mb-2 group-hover:text-blue-300 transition-colors duration-200">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-300 mb-4 flex-1">
                      {achievement.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {achievement.date}
                      </span>
                      <div className="px-3 py-1 text-xs bg-blue-600/20 text-blue-300 rounded-full border border-blue-600/30 group-hover:bg-blue-600/30 group-hover:scale-105 transition-all duration-200">
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
        @keyframes sparkle-smooth {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(0.5) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.2) rotate(180deg);
          }
        }

        @keyframes bubble-smooth {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-10px) translateX(5px) scale(1.05);
            opacity: 0.8;
          }
        }

        @keyframes bubble-smooth-delay {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translateY(8px) translateX(-6px) scale(0.95);
            opacity: 0.9;
          }
        }

        @keyframes bubble-smooth-2 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-6px) translateX(8px) scale(1.02);
            opacity: 0.4;
          }
        }

        @keyframes bubble-smooth-3 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translateY(12px) translateX(-4px) scale(0.98);
            opacity: 0.8;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes gradient-smooth {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-smooth {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        .animate-sparkle-smooth {
          animation: sparkle-smooth 3s ease-in-out infinite;
        }

        .animate-bubble-smooth {
          animation: bubble-smooth 6s ease-in-out infinite;
        }

        .animate-bubble-smooth-delay {
          animation: bubble-smooth-delay 7s ease-in-out infinite;
        }

        .animate-bubble-smooth-2 {
          animation: bubble-smooth-2 8s ease-in-out infinite;
        }

        .animate-bubble-smooth-3 {
          animation: bubble-smooth-3 9s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up 0.6s ease-out 0.2s forwards;
          opacity: 0;
        }

        .animate-fade-in-up-delay-2 {
          animation: fade-in-up 0.6s ease-out 0.4s forwards;
          opacity: 0;
        }

        .animate-fade-in-stagger {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out 0.3s forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out 0.5s forwards;
          opacity: 0;
        }

        .animate-gradient-smooth {
          background-size: 200% 200%;
          animation: gradient-smooth 4s ease infinite;
        }

        .animate-pulse-smooth {
          animation: pulse-smooth 3s ease-in-out infinite;
        }

        .animate-pulse-smooth-delay {
          animation: pulse-smooth 3s ease-in-out infinite 1.5s;
        }

        .will-change-transform {
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default About;