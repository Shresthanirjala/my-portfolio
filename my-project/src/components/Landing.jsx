import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Landing = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const containerRef = useRef(null);

  // Generate initial particles with dark theme colors
  useEffect(() => {
    particlesRef.current = Array.from({ length: 25 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      color: `rgba(99, 102, 241, ${Math.random() * 0.4 + 0.1})`,
    }));
  }, []);

  // Track mouse position for subtle interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };

    setIsLoaded(true);
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Particle animation
  useEffect(() => {
    let animationId;
    const canvas = document.getElementById("particle-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const animateParticles = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx + mousePosition.x * 0.3;
        particle.y += particle.vy + mousePosition.y * 0.3;

        if (particle.x < 0 || particle.x > 100) particle.vx *= -1;
        if (particle.y < 0 || particle.y > 100) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(
          (particle.x * canvas.width) / 100,
          (particle.y * canvas.height) / 100,
          particle.size,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = particle.color;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animateParticles);
    };

    animateParticles();
    return () => cancelAnimationFrame(animationId);
  }, [mousePosition]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gray-900"
    >
      {/* Particle canvas for subtle background */}
      <canvas id="particle-canvas" className="absolute inset-0 z-0" />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 z-0"></div>

      {/* Professional geometric accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-600/10 to-transparent rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl z-0"></div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8 min-h-screen py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl gap-12 lg:gap-20">
          {/* Text Section */}
          <div
            className={`flex flex-col gap-6 w-full lg:w-1/2 text-center lg:text-left transition-all duration-1000 ${
              isLoaded ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Professional greeting */}
           
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-light">
              Hello, I'm a
            </h1>

            <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "UI/UX Designer",
                    "Problem Solver",
                  ],
                  autoStart: true,
                  loop: true,
                  wrapperClassName:
                    "bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent",
                  cursorClassName: "text-indigo-400",
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              Crafting digital experiences through innovative web development
              and thoughtful design. I specialize in building scalable
              applications with modern technologies, focusing on performance,
              accessibility, and user experience.
            </p>

            {/* Professional stats */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-300 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Available for projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                <span>Full-time & Contract</span>
              </div>
            </div>

            {/* Professional CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
              <Link to="project" smooth={true} offset={-70} duration={500}>
                <button
                  className="group relative bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25 hover:scale-105 min-w-[180px]"
                  style={{
                    transform: `translateY(${mousePosition.y * -3}px)`,
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform duration-300"></i>
                  </span>
                </button>
              </Link>

              <Link to="contact" smooth={true} offset={-70} duration={500}>
                <button
                  className="group relative border-2 border-gray-600 hover:border-indigo-500 px-8 py-4 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-gray-800/50 min-w-[180px]"
                  style={{
                    transform: `translateY(${mousePosition.y * -3}px)`,
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get In Touch
                    <i className="fas fa-envelope text-sm"></i>
                  </span>
                </button>
              </Link>
            </div>

            {/* Professional social links */}
            <div className="flex gap-4 justify-center lg:justify-start mt-8">
              {[
                {
                  name: "GitHub",
                  icon: "fab fa-github",
                  url: "https://github.com/Shresthanirjala",
                  color: "hover:text-gray-300",
                },
                {
                  name: "LinkedIn",
                  icon: "fab fa-linkedin-in",
                  url: "https://www.linkedin.com/notifications/?filter=all",
                  color: "hover:text-blue-400",
                },
                {
                  name: "Twitter",
                  icon: "fab fa-twitter",
                  url: "https://x.com/home",
                  color: "hover:text-blue-400",
                },
                {
                  name: "WhatsApp",
                  icon: "fab fa-whatsapp",
                  url: "https://wa.me/+977 9808845112",
                  color: "hover:text-green-400",
                },
              ].map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-500 transition-all duration-300 group-hover:bg-gray-700 group-hover:border-gray-600 ${social.color} group-hover:shadow-lg group-hover:scale-110`}
                    style={{
                      transform: `translateY(${mousePosition.y * -5}px)`,
                      transition: "transform 0.3s ease-out, all 0.3s ease",
                    }}
                  >
                    <i className={social.icon}></i>
                  </div>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 whitespace-nowrap">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Professional Image Section - CLEANED UP */}
          <div
            className={`flex justify-center lg:justify-end w-full lg:w-1/2 mt-12 lg:mt-0 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative">
              {/* Clean backdrop with minimal glow */}
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/5 via-blue-500/3 to-transparent rounded-2xl blur-xl"></div>

              {/* Executive photo frame - simplified */}
              <div className="relative">
                {/* Single clean frame */}
                <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm p-3 rounded-2xl shadow-2xl border border-gray-700/30">
                  {/* Photo container */}
                  <div className="relative overflow-hidden rounded-xl bg-gray-900/50">
                    <img
                      src="/nirjala1.png"
                      alt="Professional Developer Portrait"
                      className="w-72 h-80 sm:w-80 sm:h-96 md:w-88 md:h-[26rem] lg:w-92 lg:h-[28rem] object-cover object-center filter brightness-105 contrast-110 saturate-110"
                      style={{
                        transform: `perspective(1000px) rotateY(${
                          mousePosition.x * 2
                        }deg) rotateX(${mousePosition.y * -2}deg)`,
                        transition: "transform 0.4s ease-out",
                      }}
                    />

                    {/* Subtle professional overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 via-transparent to-transparent"></div>
                  </div>
                </div>

                {/* Minimal accent dot */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full shadow-md"></div>
              </div>

              {/* Clean professional stats - positioned better */}
             


           
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-indigo-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* FontAwesome for icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      {/* Custom styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Landing;
