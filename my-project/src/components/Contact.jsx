import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMouseEnter = (icon) => {
    setActiveIcon(icon);
  };

  const handleMouseLeave = () => {
    setActiveIcon(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Floating accent elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-purple-300 opacity-10"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 20}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 py-20 px-4 flex flex-col items-center justify-center">
        {/* Title Section */}
        <div
          className={`mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-center font-SourceSans3 font-bold text-4xl md:text-5xl text-purple-800">
            Contact
          </h1>
          <div className="flex justify-center mt-4">
            <div className="w-20 sm:w-[120px] h-1 bg-gradient-to-r from-purple-300 via-purple-500 to-purple-300 rounded-full">
              <div className="h-full w-full bg-purple-200 animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Contact Form */}
          <div
            className={`w-full lg:w-1/2 bg-white shadow-xl rounded-xl transform transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-500 rounded-t-xl"></div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-purple-800 mb-6">
                Send Me a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="relative overflow-hidden w-full py-3 px-6 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300 group"
                >
                  <span className="relative z-10">Send Message</span>
                  <span className="absolute inset-0 bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div
            className={`w-full lg:w-1/2 transform transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            {/* Contact Details */}
            <div className="bg-white shadow-xl rounded-xl mb-8">
              <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-500 rounded-t-xl"></div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-purple-800 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-gray-700">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <MdEmail className="h-5 w-5 text-purple-500" />
                    </div>
                    <span>nirjalashrestha@email.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-700">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <MdLocationOn className="h-5 w-5 text-purple-500" />
                    </div>
                    <span>Kathmandu, Nepal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Icons with enhanced animations */}
            <div className="bg-white shadow-xl rounded-xl">
              <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-500 rounded-t-xl"></div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-purple-800 mb-6">
                  Connect With Me
                </h2>
                <div className="flex flex-wrap justify-center gap-8 mt-6">
                  {/* LinkedIn Icon */}
                  <a
                    href="https://www.linkedin.com/in/nirjala-shrestha-2b1624289/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => handleMouseEnter("linkedin")}
                    onMouseLeave={handleMouseLeave}
                    className="group"
                  >
                    <div
                      className={`p-5 rounded-lg bg-purple-100 group-hover:bg-purple-500 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-lg ${
                        activeIcon === "linkedin" ? "animate-pulse-fast" : ""
                      }`}
                    >
                      <FaLinkedin className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="block text-xs mt-2 text-center text-gray-600">
                      LinkedIn
                    </span>
                  </a>

                  {/* GitHub Icon */}
                  <a
                    href="https://github.com/Shresthanirjala"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => handleMouseEnter("github")}
                    onMouseLeave={handleMouseLeave}
                    className="group"
                  >
                    <div
                      className={`p-5 rounded-lg bg-purple-100 group-hover:bg-purple-500 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg ${
                        activeIcon === "github" ? "animate-pulse-fast" : ""
                      }`}
                    >
                      <FaGithub className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="block text-xs mt-2 text-center text-gray-600">
                      GitHub
                    </span>
                  </a>

                  {/* Whatsapp Icon */}
                  <a
                    href="https://wa.me/9808845112"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Contact us on WhatsApp"
                    onMouseEnter={() => handleMouseEnter("whatsapp")}
                    onMouseLeave={handleMouseLeave}
                    className="group"
                  >
                    <div
                      className={`p-5 rounded-lg bg-purple-100 group-hover:bg-purple-500 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-6 group-hover:shadow-lg ${
                        activeIcon === "whatsapp" ? "animate-pulse-fast" : ""
                      }`}
                    >
                      <FaWhatsapp className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="block text-xs mt-2 text-center text-gray-600">
                      WhatsApp
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>

      {/* Custom animations CSS */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-30px) rotate(5deg);
          }
          50% {
            transform: translateY(0) rotate(0deg);
          }
          75% {
            transform: translateY(30px) rotate(-5deg);
          }
        }

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
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-pulse-fast {
          animation: pulse-fast 0.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;
