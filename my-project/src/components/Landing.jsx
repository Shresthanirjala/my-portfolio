import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Landing = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const containerRef = useRef(null);

  // Generate initial particles
  useEffect(() => {
    particlesRef.current = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      color: `rgba(128, 90, 213, ${Math.random() * 0.3 + 0.1})`,
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
        // Move particles
        particle.x += particle.vx + mousePosition.x * 0.5;
        particle.y += particle.vy + mousePosition.y * 0.5;

        // Bounce off walls
        if (particle.x < 0 || particle.x > 100) particle.vx *= -1;
        if (particle.y < 0 || particle.y > 100) particle.vy *= -1;

        // Draw particle
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
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* Particle canvas for interactive background */}
      <canvas id="particle-canvas" className="absolute inset-0 z-0" />

      {/* Subtle purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white z-0"></div>

      {/* Purple decorative elements */}
      <div className="absolute top-0 left-0 w-24 md:w-32 h-24 md:h-32 bg-purple-600 rounded-br-full opacity-10 z-0"></div>
      <div className="absolute bottom-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-purple-400 rounded-tl-full opacity-10 z-0"></div>
      <div
        className="absolute hidden lg:block"
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "30px solid rgba(128, 90, 213, 0.05)",
          top: "10%",
          right: "5%",
          transform: `translate(${mousePosition.x * -20}px, ${
            mousePosition.y * -20
          }px)`,
          transition: "transform 0.3s ease-out",
        }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 lg:px-0 xl:px-9 min-h-screen py-12 md:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl gap-8 md:gap-10 lg:gap-16">
          {/* Text Section */}
          <div
            className={`flex flex-col gap-5 md:gap-7 font-SourceSans3 px-2 sm:px-4 lg:px-0 w-full lg:w-1/2 text-center lg:text-left transition-all duration-1000 ${
              isLoaded ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-purple-800">
              Hello, <span className="text-purple-500">I am</span>
            </h1>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
              <Typewriter
                options={{
                  strings: ["Fullstack Developer", "UI/UX Designer"],
                  autoStart: true,
                  loop: true,
                  wrapperClassName: "text-black",
                  cursorClassName: "text-purple-600",
                }}
              />
            </h1>

            <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700">
              Hi! I'm a Full-Stack Developer and UI/UX Designer, passionate
              about building dynamic and user-centric web applications. I
              specialize in crafting responsive interfaces with React and
              developing powerful backend solutions. I thrive on creating
              innovative digital experiences that are both functional and
              visually engaging.
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-2">
              <Link to="project" smooth={true} offset={-70} duration={500}>
                <button
                  className="group relative overflow-hidden bg-purple-600 p-3 w-40 font-bold text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-300"
                  style={{
                    transform: `translateY(${mousePosition.y * -5}px)`,
                    transition: "transform 0.2s ease-out, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={() => {
                    // Create ripple effect on hover
                    const ripples = document.querySelectorAll(".ripple");
                    ripples.forEach((ripple) => ripple.remove());

                    const button = event.currentTarget;
                    const ripple = document.createElement("span");
                    ripple.classList.add("ripple");
                    button.appendChild(ripple);

                    const rect = button.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height);
                    ripple.style.width = ripple.style.height = `${size * 2}px`;
                    ripple.style.left = `${event.clientX - rect.left - size}px`;
                    ripple.style.top = `${event.clientY - rect.top - size}px`;
                    ripple.classList.add("active");
                  }}
                >
                  <span className="relative z-10">PROJECTS</span>
                  <span className="absolute inset-0 bg-purple-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
              </Link>

              <Link to="contact" smooth={true} offset={-70} duration={500}>
                <button
                  className="group relative overflow-hidden border-2 border-purple-600 p-3 w-40 font-bold text-purple-600 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-100 mt-3 sm:mt-0"
                  style={{
                    transform: `translateY(${mousePosition.y * -5}px)`,
                    transition: "transform 0.2s ease-out, box-shadow 0.3s ease",
                  }}
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    CONTACT ME
                  </span>
                  <span className="absolute inset-0 bg-purple-600 transform scale-x-0 origin-right transition-transform duration-300 group-hover:scale-x-100"></span>
                </button>
              </Link>
            </div>

            {/* Interactive Social icons */}
            <div className="flex gap-3 md:gap-4 justify-center lg:justify-start mt-4">
              {[
                {
                  name: "github",
                  icon: "fab fa-github",
                  url: "https://github.com/Shresthanirjala",
                },
                {
                  name: "linkedin",
                  icon: "fab fa-linkedin-in",
                  url: "https://www.linkedin.com/notifications/?filter=all",
                },
                {
                  name: "twitter",
                  icon: "fab fa-twitter",
                  url: "https://x.com/home",
                },
                {
                  name: "whatsapp",
                  icon: "fab fa-whatsapp",
                  url: "https://wa.me/+977 9808845112",
                },
              ].map((social, index) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="group relative"
                >
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 border border-purple-200 transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white group-hover:border-transparent group-hover:shadow-lg group-hover:shadow-purple-300"
                    style={{
                      transform: `translateY(${
                        mousePosition.y * -10
                      }px) translateX(${mousePosition.x * 10}px) scale(1)`,
                      transition: "transform 0.3s ease-out, all 0.3s ease",
                    }}
                  >
                    <i className={social.icon}></i>
                  </div>
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div
            className={`flex justify-center lg:justify-end w-full lg:w-1/2 mt-8 lg:mt-0 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100" : "opacity-0 translate-x-10"
            }`}
          >
            <div
              className="relative"
              style={{
                transform: `perspective(1000px) rotateY(${
                  mousePosition.x * 10
                }deg) rotateX(${mousePosition.y * -10}deg)`,
                transition: "transform 0.3s ease-out",
              }}
            >
              {/* Glowing circle behind image */}
              <div className="absolute inset-0 bg-purple-300/20 rounded-full filter blur-2xl transform scale-110"></div>

              {/* Profile image with purple border */}
              <img
                src="/nirjala1.png"
                alt="Profile"
                className="hidden sm:block relative z-10 w-56 h-56 xs:w-60 xs:h-60 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-purple-400/50 shadow-2xl shadow-purple-300/30"
              />

              {/* Animated ring */}
              <div
                className="absolute top-0 left-0 right-0 bottom-0 border-4 border-purple-300/30 rounded-full"
                style={{ animation: "spin 12s linear infinite" }}
              ></div>
              <div
                className="absolute top-0 left-0 right-0 bottom-0 border-4 border-purple-300/20 rounded-full"
                style={{
                  animation: "spin 18s linear infinite reverse",
                  transform: "scale(1.1)",
                }}
              ></div>

              {/* Floating badges with white background and purple accents - Hidden on small screens */}
              {[
                { name: "React", icon: "fab fa-react" },
                { name: "Node.js", icon: "fab fa-node-js" },
                { name: "MongoDB", icon: "fas fa-database" },
                { name: "UI/UX", icon: "fas fa-paint-brush" },
              ].map((tech, index) => (
                <div
                  key={tech.name}
                  className="absolute bg-white text-purple-800 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-xl text-xs sm:text-sm shadow-lg border border-purple-200 flex items-center gap-1 sm:gap-2 hidden sm:flex"
                  style={{
                    top: `${20 + index * 20}%`,
                    right: index % 2 === 0 ? "-30%" : "80%",
                    transform: `translateY(${
                      Math.sin(Date.now() / 1000 + index) * 10
                    }px) translateX(${mousePosition.x * 20}px) scale(${
                      1 + Math.abs(mousePosition.y) * 0.05
                    })`,
                    transition: "transform 0.3s ease-out",
                    zIndex: 20,
                  }}
                >
                  <i className={tech.icon}></i>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Global style for animations */}
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(-10px) translateX(-50%);
          }
        }
        @keyframes scrollDown {
          0% {
            transform: translateY(-5px);
            opacity: 0;
          }
          50% {
            transform: translateY(5px);
            opacity: 1;
          }
          100% {
            transform: translateY(15px);
            opacity: 0;
          }
        }
        .ripple {
          position: absolute;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.7);
          transform: scale(0);
          animation: ripple 0.6s linear;
          z-index: 0;
        }
        @keyframes ripple {
          to {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Landing;
