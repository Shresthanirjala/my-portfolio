import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const [activeIcon, setActiveIcon] = useState(null);

  useEffect(() => {
    // Particle animation setup for footer
    const canvas = document.getElementById("footer-particle-canvas");
    if (canvas) {
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = 200;

      const particles = [];
      const particleCount = 30;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
          if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
          ctx.fill();
        });

        requestAnimationFrame(animate);
      }

      animate();

      const handleResize = () => {
        canvas.width = window.innerWidth;
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const handleMouseEnter = (icon) => {
    setActiveIcon(icon);
  };

  const handleMouseLeave = () => {
    setActiveIcon(null);
  };

  return (
    <footer className="relative bg-gray-900 text-white pt-16 pb-8 overflow-hidden">
      {/* Particle canvas for footer */}
      <canvas
        id="footer-particle-canvas"
        className="absolute top-0 left-0 z-0"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-800/50 to-gray-900 z-0"></div>

      {/* Geometric accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-indigo-600/5 to-transparent rounded-full blur-2xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-blue-600/5 to-transparent rounded-full blur-2xl z-0"></div>

      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.15) 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 lg:px-16">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Left Section */}
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-300 bg-clip-text text-transparent mb-4">
                NIRJALA SHRESTHA
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mb-6">
                <div className="h-full w-full bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full"></div>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Fullstack Web Developer crafting both the Frontend and Backend of Websites and Web Applications to deliver seamless, scalable, and successful digital experiences.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Available for new opportunities</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 md:flex md:justify-end">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-blue-300 bg-clip-text text-transparent mb-6">
                  CONNECT
                </h3>
                <div className="flex gap-6">
                  {/* LinkedIn Icon */}
                  <a
                    href="https://www.linkedin.com/in/nirjala-shrestha-2b1624289/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label="LinkedIn Profile"
                    onMouseEnter={() => handleMouseEnter("linkedin")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      className={`w-14 h-14 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-xl group-hover:shadow-blue-500/25 ${
                        activeIcon === "linkedin" ? "animate-pulse-fast" : ""
                      }`}
                    >
                      <FaLinkedin className="text-xl text-indigo-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  </a>

                  {/* GitHub Icon */}
                  <a
                    href="https://github.com/Shresthanirjala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label="GitHub Profile"
                    onMouseEnter={() => handleMouseEnter("github")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      className={`w-14 h-14 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-gray-600 group-hover:to-gray-500 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl group-hover:shadow-gray-500/25 ${
                        activeIcon === "github" ? "animate-pulse-fast" : ""
                      }`}
                    >
                      <FaGithub className="text-xl text-indigo-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  </a>

                  {/* WhatsApp Icon */}
                  <a
                    href="https://wa.me/9808845112"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    aria-label="WhatsApp Contact"
                    onMouseEnter={() => handleMouseEnter("whatsapp")}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div
                      className={`w-14 h-14 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-green-600 group-hover:to-green-500 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-xl group-hover:shadow-green-500/25 ${
                        activeIcon === "whatsapp" ? "animate-pulse-fast" : ""
                      }`}
                    >
                      <FaWhatsapp className="text-xl text-indigo-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
            </div>
          </div>
        </div>

        {/* Enhanced Divider */}
        <div className="relative my-8">
          <div className="h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <span>© 2024 Made with</span>
            <span className="text-red-400 animate-pulse">♥</span>
            <span>by Nirjala Shrestha</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs">Built with React & Tailwind CSS</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Custom animations CSS */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes pulse-fast {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        .animate-pulse-fast {
          animation: pulse-fast 1s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
