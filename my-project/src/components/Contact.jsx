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
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Particle animation setup
    const canvas = document.getElementById("particle-canvas");
    if (canvas) {
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles = [];
      const particleCount = 50;

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
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
        canvas.height = window.innerHeight;
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) {
      return "Name is required";
    }
    if (name.trim().length < 2) {
      return "Name must be at least 2 characters long";
    }
    if (name.trim().length > 50) {
      return "Name must be less than 50 characters";
    }
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
      return "Name can only contain letters and spaces";
    }
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return "Please enter a valid email address";
    }
    if (email.length > 100) {
      return "Email must be less than 100 characters";
    }
    return "";
  };

  const validateMessage = (message) => {
    if (!message.trim()) {
      return "Message is required";
    }
    if (message.trim().length < 10) {
      return "Message must be at least 10 characters long";
    }
    if (message.trim().length > 1000) {
      return "Message must be less than 1000 characters";
    }
    return "";
  };

  const validateForm = () => {
    const newErrors = {
      name: validateName(formData.name),
      email: validateEmail(formData.email),
      message: validateMessage(formData.message),
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

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

    // Real-time validation
    if (touched[name]) {
      let error = "";
      switch (name) {
        case "name":
          error = validateName(value);
          break;
        case "email":
          error = validateEmail(value);
          break;
        case "message":
          error = validateMessage(value);
          break;
        default:
          break;
      }
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    // Validate on blur
    let error = "";
    switch (name) {
      case "name":
        error = validateName(formData[name]);
        break;
      case "email":
        error = validateEmail(formData[name]);
        break;
      case "message":
        error = validateMessage(formData[name]);
        break;
      default:
        break;
    }
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      message: true,
    });

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("Form submitted:", formData);
      alert("Thank you for your message! I'll get back to you soon.");

      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setTouched({});
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInputClassName = (fieldName) => {
    const baseClass =
      "w-full px-4 py-4 rounded-xl bg-gray-700/50 border text-white placeholder-gray-400 focus:outline-none transition-all duration-300 backdrop-blur-sm";

    if (errors[fieldName] && touched[fieldName]) {
      return `${baseClass} border-red-500/70 focus:ring-2 focus:ring-red-500 focus:border-red-500`;
    } else if (
      !errors[fieldName] &&
      touched[fieldName] &&
      formData[fieldName]
    ) {
      return `${baseClass} border-green-500/70 focus:ring-2 focus:ring-green-500 focus:border-green-500`;
    } else {
      return `${baseClass} border-gray-600/50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500`;
    }
  };
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4840d654-63cf-4be7-9460-1d12b95264d0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
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
      <div className="relative z-10 py-20 px-4 flex flex-col items-center justify-center">
        {/* Title Section */}
        <div
          className={`mb-16 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-center font-bold text-4xl md:text-5xl text-white bg-clip-text text-transparent">
            Contact
          </h1>

          <p className="text-center text-gray-300 mt-4 text-lg">
            Let's connect and bring your ideas to life
          </p>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Contact Form */}
          <div
            className={`w-full lg:w-1/2 backdrop-blur-sm bg-gray-800/30 border border-gray-700/50 shadow-2xl rounded-2xl transform transition-all duration-700 hover:shadow-indigo-500/10 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-20"
            }`}
          >
            <div className="h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-400 rounded-t-2xl"></div>
            <div className="p-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-blue-300 bg-clip-text text-transparent mb-8">
                Send Me a Message
              </h2>
              <form
                onSubmit={handleSubmit}
                // action="https://api.web3forms.com/submit"
                // method="POST"
                className="space-y-6"
              >
                {/* Name Field */}
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-indigo-400 transition-colors"
                  >
                    Name *
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={getInputClassName("name")}
                    placeholder="Your Name"
                    disabled={isSubmitting}
                  />
                  {errors.name && touched.name && (
                    <p className="mt-2 text-sm text-red-400 flex items-center">
                      <span className="mr-1">⚠</span>
                      {errors.name}
                    </p>
                  )}
                  {!errors.name && touched.name && formData.name && (
                    <p className="mt-2 text-sm text-green-400 flex items-center">
                      <span className="mr-1">✓</span>
                      Looks good!
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-indigo-400 transition-colors"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    className={getInputClassName("email")}
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && touched.email && (
                    <p className="mt-2 text-sm text-red-400 flex items-center">
                      <span className="mr-1">⚠</span>
                      {errors.email}
                    </p>
                  )}
                  {!errors.email && touched.email && formData.email && (
                    <p className="mt-2 text-sm text-green-400 flex items-center">
                      <span className="mr-1">✓</span>
                      Valid email address!
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="group">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2 group-focus-within:text-indigo-400 transition-colors"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    rows="5"
                    className={`${getInputClassName("message")} resize-none`}
                    placeholder="Your message here..."
                    disabled={isSubmitting}
                  ></textarea>
                  <div className="flex justify-between items-center mt-2">
                    <div>
                      {errors.message && touched.message && (
                        <p className="text-sm text-red-400 flex items-center">
                          <span className="mr-1">⚠</span>
                          {errors.message}
                        </p>
                      )}
                      {!errors.message &&
                        touched.message &&
                        formData.message && (
                          <p className="text-sm text-green-400 flex items-center">
                            <span className="mr-1">✓</span>
                            Message looks great!
                          </p>
                        )}
                    </div>
                    <span
                      className={`text-sm ${
                        formData.message.length > 1000
                          ? "text-red-400"
                          : formData.message.length > 800
                          ? "text-yellow-400"
                          : "text-gray-400"
                      }`}
                    >
                      {formData.message.length}/1000
                    </span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={
                    isSubmitting ||
                    Object.values(errors).some((error) => error !== "")
                  }
                  className={`relative overflow-hidden w-full py-4 px-6 font-bold rounded-xl shadow-lg transition-all duration-300 group transform ${
                    isSubmitting ||
                    Object.values(errors).some((error) => error !== "")
                      ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:shadow-indigo-500/25 hover:scale-105"
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          →
                        </span>
                      </>
                    )}
                  </span>
                  {!isSubmitting &&
                    !Object.values(errors).some((error) => error !== "") && (
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    )}
                </button>
                {/* <input
                  type="checkbox"
                  name="botcheck"
                  class="hidden"
                  style="display: none;"
                ></input> */}
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
            <div className="backdrop-blur-sm bg-gray-800/30 border border-gray-700/50 shadow-2xl rounded-2xl mb-4 hover:shadow-indigo-500/10 transition-shadow duration-300">
              <div className="h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-400 rounded-t-2xl"></div>
              <div className="p-10">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-blue-300 bg-clip-text text-transparent mb-8">
                  Contact Information
                </h2>
                <div className="space-y-8">
                  <div className="flex items-center gap-6 text-gray-300 group hover:text-white transition-colors duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/25 transition-shadow duration-300">
                      <MdEmail className="h-7 w-7 text-white" />
                    </div>
                    <span className="text-lg">nirjalas437@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-6 text-gray-300 group hover:text-white transition-colors duration-300">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg group-hover:shadow-indigo-500/25 transition-shadow duration-300">
                      <MdLocationOn className="h-7 w-7 text-white" />
                    </div>
                    <span className="text-lg">Kathmandu, Nepal</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="backdrop-blur-sm bg-gray-800/30 border border-gray-700/50 shadow-2xl rounded-2xl hover:shadow-indigo-500/10 transition-shadow duration-300 mt-12">
              <div className="h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-400 rounded-t-2xl"></div>
              <div className="p-10">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-blue-300 bg-clip-text text-transparent mb-8">
                  Connect With Me
                </h2>
                <div className="flex flex-wrap justify-center gap-8 mt-8">
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
                      className={`p-7 rounded-xl bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-xl group-hover:shadow-blue-500/25 ${
                        activeIcon === "linkedin" ? "animate-pulse-fast" : ""
                      }`}
                    >
                      <FaLinkedin className="h-9 w-9 text-indigo-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="block text-sm mt-3 text-center text-gray-400 group-hover:text-indigo-300 transition-colors duration-300">
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
                      className={`p-7 rounded-xl bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 group-hover:bg-gradient-to-br group-hover:from-gray-600 group-hover:to-gray-500 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl group-hover:shadow-gray-500/25 ${
                        activeIcon === "github" ? "animate-pulse-fast" : ""
                      }`}
                    >
                      <FaGithub className="h-9 w-9 text-indigo-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="block text-sm mt-3 text-center text-gray-400 group-hover:text-indigo-300 transition-colors duration-300">
                      GitHub
                    </span>
                  </a>

                  {/* WhatsApp Icon */}
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
                      className={`p-7 rounded-xl bg-gray-700/50 backdrop-blur-sm border border-gray-600/50 group-hover:bg-gradient-to-br group-hover:from-green-600 group-hover:to-green-500 transition-all duration-500 transform group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-xl group-hover:shadow-green-500/25 ${
                        activeIcon === "whatsapp" ? "animate-pulse-fast" : ""
                      }`}
                    >
                      <FaWhatsapp className="h-9 w-9 text-indigo-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="block text-sm mt-3 text-center text-gray-400 group-hover:text-indigo-300 transition-colors duration-300">
                      WhatsApp
                    </span>
                  </a>
                </div>
              </div>
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

        /* Scrollbar styling for dark theme */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(31, 41, 55, 0.5);
        }

        ::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.5);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: rgba(99, 102, 241, 0.7);
        }
      `}</style>
    </div>
  );
};

export default Contact;
