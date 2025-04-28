import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/Projects";
import Footer from "./Footer";
import { motion } from "framer-motion";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loading state
    window.scrollTo(0, 0);
    setTimeout(() => setIsLoaded(true), 300);

    // Auto rotate gallery images if they exist
    let interval;
    if (project?.gallery && project.gallery.length > 1) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) =>
          prev === project.gallery.length - 1 ? 0 : prev + 1
        );
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [project]);

  // Handle case when project is not found
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center p-8 max-w-md bg-white rounded-lg shadow-xl"
        >
          <div className="text-purple-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Project Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            We couldn't locate the project you're looking for.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/projects")}
            className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Return to Projects
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Header with project title */}
      <header className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-20 relative"
        >
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
            transition={{ delay: 0.3 }}
            onClick={() => navigate(-1)}
            className="absolute top-8 left-4 md:left-8 flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span>Back</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
            >
              {project.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, staggerChildren: 0.1 }}
              className="flex flex-wrap justify-center gap-2 mb-8"
            >
              {project.tags &&
                project.tags.map((tag, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="bg-purple-600/30 text-white text-sm px-3 py-1 rounded-full border border-purple-400/30 backdrop-blur-sm"
                  >
                    {tag}
                  </motion.span>
                ))}
            </motion.div>

            {project.description && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-lg text-white/90 max-w-2xl mx-auto"
              >
                {project.description.split(" ").slice(0, 20).join(" ")}
                {project.description.split(" ").length > 20 ? "..." : ""}
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      </header>

      {/* Main content area */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Project showcase - Featured image or gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mb-16"
          >
            {project.gallery && project.gallery.length > 0 ? (
              <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-video bg-gray-100 ring-4 ring-purple-100">
                {/* Main image */}
                {project.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: currentImageIndex === index ? 1 : 0,
                      transition: { duration: 0.7 },
                    }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={image}
                      alt={`${project.title} showcase ${index + 1}`}
                      className="w-full h-full object-cover object-center"
                    />
                  </motion.div>
                ))}

                {/* Image navigation dots */}
                {project.gallery.length > 1 && (
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
                    {project.gallery.map((_, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.2 }}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          currentImageIndex === index
                            ? "bg-purple-500 scale-110"
                            : "bg-white/50"
                        }`}
                        aria-label={`View image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="rounded-2xl shadow-xl aspect-video bg-purple-50 flex items-center justify-center">
                <div className="text-purple-400 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 mx-auto mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p>No images available</p>
                </div>
              </div>
            )}
          </motion.div>

          {/* Project information in a two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left column - Project details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="lg:col-span-2 space-y-12"
            >
              {/* About section */}
              <section>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-3xl font-bold text-purple-900 mb-6 inline-flex items-center"
                >
                  <span className="bg-purple-100 text-purple-700 p-2 rounded-lg mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  About This Project
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="prose prose-lg max-w-none text-gray-700"
                >
                  <p>{project.description}</p>
                </motion.div>
              </section>

              {/* Challenge & Solution sections */}
              {(project.challenge || project.solution) && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {project.challenge && (
                    <motion.div
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.1)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg"
                    >
                      <h3 className="flex items-center text-xl font-semibold text-purple-800 mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                        The Challenge
                      </h3>
                      <p className="text-gray-700">{project.challenge}</p>
                    </motion.div>
                  )}

                  {project.solution && (
                    <motion.div
                      whileHover={{
                        y: -5,
                        boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.1)",
                      }}
                      transition={{ duration: 0.3 }}
                      className="bg-purple-50 border-l-4 border-purple-400 p-6 rounded-r-lg"
                    >
                      <h3 className="flex items-center text-xl font-semibold text-purple-800 mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        The Solution
                      </h3>
                      <p className="text-gray-700">{project.solution}</p>
                    </motion.div>
                  )}
                </motion.section>
              )}
            </motion.div>

            {/* Right column - Tools and links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-10"
            >
              {/* Technologies used */}
              <motion.section
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px -10px rgba(124, 58, 237, 0.15)",
                }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100"
              >
                <h3 className="text-xl font-bold text-purple-900 mb-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  Technologies Used
                </h3>

                {project.tools && project.tools.length > 0 ? (
                  <ul className="space-y-3">
                    {project.tools.map((tool, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        className="flex items-center"
                      >
                        <span className="bg-purple-100 p-1 rounded-md mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-purple-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        <span className="text-gray-700">{tool}</span>
                      </motion.li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 italic">No tools specified</p>
                )}
              </motion.section>

              {/* Project links */}
              <motion.section
                whileHover={{
                  y: -5,
                  boxShadow: "0 15px 30px -10px rgba(124, 58, 237, 0.15)",
                }}
                transition={{ duration: 0.4 }}
                className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl border border-purple-100"
              >
                <h3 className="text-xl font-bold text-purple-900 mb-6 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mr-2 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                    />
                  </svg>
                  Project Links
                </h3>

                <div className="space-y-4">
                  {project.link && (
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-md hover:shadow-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                      Live Project
                    </motion.a>
                  )}

                  {project.github && (
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-lg hover:from-gray-900 hover:to-gray-800 transition-all shadow-md hover:shadow-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                        />
                      </svg>
                      GitHub Repository
                    </motion.a>
                  )}

                  {project.figma && (
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-md hover:shadow-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Figma Design
                    </motion.a>
                  )}

                  {!project.link && !project.github && !project.figma && (
                    <p className="text-gray-500 italic text-center py-4">
                      No links available
                    </p>
                  )}
                </div>
              </motion.section>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Next/Previous Navigation */}
      {/* <div className="bg-gradient-to-b from-white to-purple-50 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
              {projects.findIndex((p) => p.id === parseInt(id)) > 0 ? (
                <motion.button
                  whileHover={{
                    x: -10,
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(`/project/${parseInt(id) - 1}`)}
                  className="flex items-center space-x-3 bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all w-full sm:w-auto border border-purple-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16l-4-4m0 0l4-4m-4 4h18"
                    />
                  </svg>
                  <div className="text-left">
                    <div className="text-sm text-gray-500">
                      Previous Project
                    </div>
                    <div className="font-medium text-purple-900">
                      {projects.find((p) => p.id === parseInt(id) - 1)?.title}
                    </div>
                  </div>
                </motion.button>
              ) : (
                <div className="w-full sm:w-auto" /> // Empty div for spacing
              )}

              {projects.findIndex((p) => p.id === parseInt(id)) <
              projects.length - 1 ? (
                <motion.button
                  whileHover={{
                    x: 10,
                    scale: 1.03,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(`/project/${parseInt(id) + 1}`)}
                  className="flex items-center justify-end space-x-3 bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all w-full sm:w-auto border border-purple-100"
                >
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Next Project</div>
                    <div className="font-medium text-purple-900">
                      {projects.find((p) => p.id === parseInt(id) + 1)?.title}
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.button>
              ) : (
                <div className="w-full sm:w-auto" /> // Empty div for spacing
              )}
            </div>
          </div>
        </div>
      </div> */}

      {/* Related Projects Section */}
      <div className="bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-purple-900 mb-12 text-center"
            >
              Related Projects
            </motion.h2> */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(
                  (p) =>
                    p.id !== parseInt(id) &&
                    p.tags &&
                    project.tags &&
                    p.tags.some((tag) => project.tags.includes(tag))
                )
                .slice(0, 3)
                .map((relatedProject, index) => (
                  <motion.div
                    key={relatedProject.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    className="bg-white rounded-xl overflow-hidden shadow-lg border border-purple-100"
                  >
                    <div className="h-48 overflow-hidden">
                      {relatedProject.thumbnail ? (
                        <img
                          src={relatedProject.thumbnail}
                          alt={relatedProject.title}
                          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-purple-200 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-purple-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-purple-900 mb-2">
                        {relatedProject.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {relatedProject.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {relatedProject.tags &&
                          relatedProject.tags.slice(0, 3).map((tag, i) => (
                            <span
                              key={i}
                              className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => {
                          navigate(`/project/${relatedProject.id}`);
                          window.scrollTo(0, 0);
                        }}
                        className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
                      >
                        <span>View Project</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </motion.button>
                    </div>
                  </motion.div>
                ))}

              {/* {projects.filter(
                (p) =>
                  p.id !== parseInt(id) &&
                  p.tags &&
                  project.tags &&
                  p.tags.some((tag) => project.tags.includes(tag))
              ).length === 0 && (
                <div className="col-span-full text-center py-10">
                  <div className="text-purple-400 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 mx-auto"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    No related projects found
                  </h3>
                  <p className="text-gray-600">
                    Explore other projects in the portfolio
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/projects")}
                    className="mt-6 inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <span>View All Projects</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.button>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-purple-900 via-purple-800 to-indigo-900 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Interested in working together?
            </h2>
            <p className="text-lg text-purple-100 mb-10 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, staggerChildren: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.a
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#ffffff",
                  color: "#6d28d9",
                }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-8 py-3 bg-white text-purple-800 font-medium rounded-lg transition-all transform shadow-lg hover:shadow-xl"
              >
                Contact Me
              </motion.a>
              {/* <motion.a
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)",
                }}
                whileTap={{ scale: 0.95 }}
                href="/projects"
                className="px-8 py-3 bg-white/10 text-white font-medium rounded-lg border border-white/20 backdrop-blur-sm transition-all transform shadow-lg hover:shadow-xl"
              >
                View All Projects
              </motion.a> */}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
