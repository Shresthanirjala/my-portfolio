import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Landing = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  // Generate initial particles with dark theme colors
  useEffect(() => {
    particlesRef.current = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      color: `rgba(99, 102, 241, ${Math.random() * 0.4 + 0.1})`,
    }));
  }, []);

  // Track mouse position for interactive effects
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

      {/* Enhanced gradient overlay to match photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 z-0"></div>

      {/* Interactive geometric accents */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-600/20 to-transparent rounded-full blur-3xl z-0 transition-transform duration-1000"
        style={{
          transform: `translate(${mousePosition.x * 30}px, ${
            mousePosition.y * 30
          }px)`,
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-full blur-3xl z-0 transition-transform duration-1000"
        style={{
          transform: `translate(${mousePosition.x * -20}px, ${
            mousePosition.y * -20
          }px)`,
        }}
      ></div>

      {/* Interactive grid pattern */}
      <div
        className="absolute inset-0 opacity-10 z-0 transition-opacity duration-500"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          transform: `translate(${mousePosition.x * 10}px, ${
            mousePosition.y * 10
          }px)`,
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-light">
              Hello, I'm a
            </h1>

            <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
              <Typewriter
                options={{
                  strings: [
                    "Frontend Developer",
                    "Software Developer",
                    "UI/UX Designer",
                    
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
              Crafting digital experiences through innovative software development
              and thoughtful design. I specialize in building scalable
              applications with modern technologies, focusing on performance,
              accessibility, and user experience.
            </p>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-300 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                <span>Open for freelance</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
              <Link to="project" smooth={true} offset={-70} duration={500}>
                <button
                  className="group relative bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/25 hover:scale-105 min-w-[180px] overflow-hidden"
                  style={{
                    transform: `translateY(${mousePosition.y * -3}px)`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    View Projects
                    <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform duration-300"></i>
                  </span>
                </button>
              </Link>

              <Link to="contact" smooth={true} offset={-70} duration={500}>
                <button
                  className="group relative border-2 border-gray-600 hover:border-indigo-500 px-8 py-4 text-gray-300 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:bg-gray-800/50 min-w-[180px] overflow-hidden"
                  style={{
                    transform: `translateY(${mousePosition.y * -3}px)`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="relative z-10 flex items-center gap-2">
                    Get In Touch
                    <i className="fas fa-envelope text-sm"></i>
                  </span>
                </button>
              </Link>
            </div>

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
                    className={`w-12 h-12 rounded-xl bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 flex items-center justify-center text-gray-500 transition-all duration-300 group-hover:bg-gray-700/80 group-hover:border-gray-600/50 ${social.color} group-hover:shadow-lg group-hover:scale-110 group-hover:shadow-indigo-500/20`}
                    style={{
                      transform: `translateY(${
                        mousePosition.y * -5
                      }px) rotateY(${mousePosition.x * 10}deg)`,
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

          {/* Seamlessly Integrated Image Section */}
          <div
            className={`hidden sm:flex justify-center lg:justify-end w-full lg:w-1/2 mt-12 lg:mt-0 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="relative group">
              {/* Background integration elements */}
              <div
                className="absolute -inset-32 bg-gradient-to-br from-indigo-600/5 via-blue-600/5 to-purple-600/5 rounded-full blur-3xl transition-all duration-1000"
                style={{
                  transform: `scale(${
                    1 + Math.abs(mousePosition.x) * 0.1
                  }) rotate(${mousePosition.x * 5}deg)`,
                }}
              ></div>

              {/* Floating holographic elements */}
              <div
                className="absolute -top-12 -left-12 w-20 h-20 bg-gradient-to-br from-indigo-400/10 to-transparent rounded-full blur-xl animate-pulse transition-all duration-700"
                style={{
                  transform: `translate(${mousePosition.x * 25}px, ${
                    mousePosition.y * 20
                  }px)`,
                }}
              ></div>

              <div
                className="absolute -bottom-8 -right-8 w-16 h-16 bg-gradient-to-tl from-blue-400/10 to-transparent rounded-full blur-xl animate-pulse transition-all duration-700"
                style={{
                  transform: `translate(${mousePosition.x * -20}px, ${
                    mousePosition.y * -15
                  }px)`,
                }}
              ></div>

              {/* Main photo - seamlessly integrated */}
              <div className="relative">
                {/* Subtle glow effect that matches background */}
                <div
                  className="absolute -inset-4 bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-transparent rounded-3xl blur-2xl transition-all duration-500 group-hover:from-indigo-500/20 group-hover:via-blue-500/10"
                  style={{
                    transform: `scale(${1 + Math.abs(mousePosition.y) * 0.1})`,
                  }}
                ></div>

                {/* Photo with seamless background integration */}
                <div className="relative">
                  <img
                    ref={imageRef}
                    src="/myself.png"
                    alt="Professional Developer Portrait"
                    className="w-80 h-[32rem] sm:w-[28rem] sm:h-[36rem] md:w-[28rem] md:h-[30rem] lg:w-[30rem] lg:h-[40rem] object-cover object-center transition-all duration-500 group-hover:scale-[1.02] rounded-3xl bg-transparent border-none shadow-none"
                    style={{
                      transform: `perspective(1000px) rotateY(${
                        mousePosition.x * 3
                      }deg) rotateX(${mousePosition.y * -2}deg)`,
                      transition: "transform 0.4s ease-out, filter 0.3s ease",
                      maskImage: `radial-gradient(ellipse 100% 100% at center, black 70%, transparent 100%)`,
                      WebkitMaskImage: `radial-gradient(ellipse 100% 100% at center, black 70%, transparent 100%)`,
                      filter: "none",
                      background: "none",
                      boxShadow: "none",
                      border: "none",
                    }}
                  />
                </div>

                {/* Floating status indicators */}
                <div
                  className="absolute -top-3 -right-3 flex gap-2 transition-all duration-500"
                  style={{
                    transform: `translate(${mousePosition.x * -5}px, ${
                      mousePosition.y * -5
                    }px)`,
                  }}
                >
                  <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg animate-pulse border border-green-300/50"></div>
                  <div className="w-2 h-2 bg-indigo-400 rounded-full shadow-lg animate-pulse border border-indigo-300/50"></div>
                </div>

                {/* Floating tech indicators */}
                <div
                  className="absolute -left-16 top-1/3 space-y-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200"
                  style={{
                    transform: `translateX(${
                      mousePosition.x * -8
                    }px) translateY(${mousePosition.y * 5}px)`,
                  }}
                >
                  {["React", "Node.js", "JavaScript"].map((tech, index) => (
                    <div
                      key={tech}
                      className="bg-gray-800/30 backdrop-blur-md px-3 py-1 rounded-full text-xs text-gray-300 border border-indigo-500/20 shadow-lg"
                      style={{
                        animationDelay: `${index * 300}ms`,
                        animation: "fadeInLeft 0.6s ease-out forwards",
                      }}
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                {/* Floating stats with better integration */}
                <div
                  className="absolute -right-12 bottom-1/3 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300"
                  style={{
                    transform: `translateX(${
                      mousePosition.x * 8
                    }px) translateY(${mousePosition.y * -5}px)`,
                  }}
                ></div>

                {/* Interactive code elements floating around */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-1000">
                  <div
                    className="absolute top-1/4 -left-8 text-indigo-400/30 text-xs font-mono animate-pulse"
                    style={{
                      transform: `translate(${mousePosition.x * -10}px, ${
                        mousePosition.y * 8
                      }px)`,
                    }}
                  >
                    {"</>"}
                  </div>
                  <div
                    className="absolute bottom-1/4 -right-6 text-blue-400/30 text-xs font-mono animate-pulse"
                    style={{
                      transform: `translate(${mousePosition.x * 12}px, ${
                        mousePosition.y * -6
                      }px)`,
                    }}
                  >
                    {"{}"}
                  </div>
                  <div
                    className="absolute top-1/2 -left-12 text-purple-400/30 text-xs font-mono animate-pulse"
                    style={{
                      transform: `translate(${mousePosition.x * -8}px, ${
                        mousePosition.y * 10
                      }px)`,
                    }}
                  >
                    {"()"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm animate-pulse">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center hover:border-indigo-500 transition-colors duration-300">
            <div className="w-1 h-3 bg-gradient-to-b from-indigo-400 to-blue-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* FontAwesome for icons */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />

      {/* Enhanced custom styles */}
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-15px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scan {
          0%,
          100% {
            transform: translateY(-100px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
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

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        /* Enhanced glassmorphism effects */
        .backdrop-blur-sm {
          backdrop-filter: blur(8px);
        }

        /* Smooth transitions for all interactive elements */
        * {
          transition-property: transform, opacity, background-color,
            border-color, color, box-shadow;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default Landing;
