import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  ExternalLink,
  Github,
  Code,
  Star,
  Calendar,
  Tag,
  Eye,
} from "lucide-react";
import projects from "../data/Projects";

const Project = () => {
  const navigate = useNavigate();
  const [activeProject, setActiveProject] = useState(null);
  const [selectedTag, setSelectedTag] = useState("All");
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const projectRefs = useRef([]);

  // Extract all unique tags from projects
  const allTags = [
    "All",
    ...Array.from(
      new Set(projects.flatMap((p) => p.tags || []).filter(Boolean))
    ),
  ];

  // For parallax effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  const bgY = useTransform(smoothProgress, [0, 1], ["0%", "30%"]);

  // Filter projects based on selected tag
  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((p) => p.tags && p.tags.includes(selectedTag));

  // Initialize refs array based on projects length
  useEffect(() => {
    projectRefs.current = Array(projects.length)
      .fill()
      .map((_, i) => projectRefs.current[i] || React.createRef());
  }, []);

  // Handle header visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Handle project navigation
  const handleViewProject = (id, e) => {
    e.preventDefault();

    // Capture current project for exit animation
    const project = projects.find((p) => p.id === id);
    setActiveProject(project);

    // Add exit animation, then navigate
    setTimeout(() => {
      navigate(`/ProjectDetail/${id}`);
    }, 300);
  };

  return (
    <motion.div
      id="projects"
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-violet-800 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Dynamic Background */}
      <motion.div className="absolute inset-0 opacity-20" style={{ y: bgY }}>
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 12 + 3}px`,
                height: `${Math.random() * 12 + 3}px`,
                left: `${Math.random() * 100}vw`,
                top: `${Math.random() * 200}vh`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
              animate={{
                y: [-1000, 1000],
                x: [
                  `${Math.random() * 20 - 10}px`,
                  `${Math.random() * 20 - 10}px`,
                ],
                scale: [1, Math.random() * 0.8 + 0.5, 1],
              }}
              transition={{
                duration: Math.random() * 150 + 80,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Fixed Header */}
      <motion.header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-indigo-900/70"
        initial={{ y: 0 }}
        animate={{ y: isHeaderVisible ? 0 : -100 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <motion.h1
            className="text-2xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-300 to-fuchsia-300">
              Nirjala Shrestha
            </span>
          </motion.h1>

          <div className="flex items-center gap-4">
            {/* View Mode Toggles */}
            <div className="hidden md:flex bg-indigo-800/50 p-1 rounded-lg">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1 rounded ${
                  viewMode === "grid"
                    ? "bg-violet-600 text-white"
                    : "text-violet-300"
                }`}
                onClick={() => setViewMode("grid")}
              >
                Grid
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-3 py-1 rounded ${
                  viewMode === "list"
                    ? "bg-violet-600 text-white"
                    : "text-violet-300"
                }`}
                onClick={() => setViewMode("list")}
              >
                List
              </motion.button>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-5 py-2 rounded-lg font-medium shadow-lg hover:shadow-violet-500/20"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Back to Top
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <div className="pt-32 pb-32 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-fuchsia-200 to-violet-300"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            My Creative Projects
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-violet-200 max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Explore my portfolio of innovative solutions, creative designs, and
            technical endeavors that showcase my skills and passion
          </motion.p>
        </motion.div>

        {/* Tags Filter */}
        <div className="mb-12 overflow-x-auto pb-2">
          <motion.div
            className="flex gap-2 justify-center min-w-max"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {allTags.map((tag, index) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-1 ${
                  selectedTag === tag
                    ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg shadow-violet-600/30"
                    : "bg-indigo-800/40 text-violet-200 hover:bg-indigo-700/50"
                }`}
                onClick={() => setSelectedTag(tag)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Tag size={14} />
                {tag}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Project Count */}
        <motion.div
          className="text-center mb-12 text-violet-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Found{" "}
          <span className="text-white font-semibold">
            {filteredProjects.length}
          </span>{" "}
          projects
          {selectedTag !== "All" && (
            <span>
              {" "}
              tagged with{" "}
              <span className="text-white font-semibold">{selectedTag}</span>
            </span>
          )}
        </motion.div>

        {/* Projects Grid/List */}
        <motion.div layout>
          <AnimatePresence mode="wait">
            {filteredProjects.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="py-16 text-center"
              >
                <div className="w-24 h-24 bg-indigo-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye size={32} className="text-violet-300" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  No Projects Found
                </h3>
                <p className="text-violet-300 max-w-md mx-auto">
                  Try selecting a different tag or check back later as I'm
                  constantly adding new projects
                </p>
              </motion.div>
            ) : viewMode === "grid" ? (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
                transition={{ duration: 0.5 }}
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    onClick={(e) => handleViewProject(project.id, e)}
                    isActive={activeProject?.id === project.id}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                className="flex flex-col gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layout
                transition={{ duration: 0.5 }}
              >
                {filteredProjects.map((project, index) => (
                  <ProjectListItem
                    key={project.id}
                    project={project}
                    index={index}
                    onClick={(e) => handleViewProject(project.id, e)}
                    isActive={activeProject?.id === project.id}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Project Card Component for Grid View
const ProjectCard = ({ project, index, onClick, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative bg-gradient-to-br from-indigo-900/90 to-violet-900/90 rounded-xl overflow-hidden shadow-xl hover:shadow-violet-600/30 transition-all"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={isActive ? { scale: 1.03, y: -10 } : {}}
    >
      {/* Image section with hover effects */}
      <div className="relative overflow-hidden aspect-[16/10]">
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-40 z-10"
          animate={{ opacity: isHovered ? 0.6 : 0.4 }}
        />

        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Overlay content on hover */}
        <motion.div
          className="absolute inset-0 z-20 flex flex-col justify-end p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            onClick={onClick}
            className="bg-white text-indigo-900 font-bold py-2.5 px-6 rounded-lg shadow-lg flex items-center justify-center gap-2 hover:bg-violet-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Eye size={18} /> View Project
          </motion.button>
        </motion.div>

        {/* Featured badge */}
        {project.featured && (
          <motion.div
            className="absolute top-4 right-4 z-20 bg-gradient-to-r from-amber-400 to-orange-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full shadow flex items-center gap-1"
            animate={{
              rotate: [0, 5, 0, -5, 0],
              scale: [1, 1.05, 1, 1.05, 1],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Star size={12} /> Featured
          </motion.div>
        )}
      </div>

      {/* Project details */}
      <div className="p-6">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white truncate group-hover:text-violet-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-violet-200 text-sm line-clamp-2">
            {project.shortdescription}
          </p>

          {/* Project metadata */}
          <div className="flex justify-between items-center border-t border-indigo-800/50 pt-4 mt-4">
            {/* Date */}
            <div className="flex items-center text-xs text-violet-300">
              <Calendar size={12} className="mr-1" />
              {project.date || "2025"}
            </div>

            {/* Links */}
            <div className="flex gap-2">
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-indigo-800/60 text-violet-300 hover:bg-indigo-700 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={14} />
                </motion.a>
              )}

              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full bg-indigo-800/60 text-violet-300 hover:bg-indigo-700 hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink size={14} />
                </motion.a>
              )}
            </div>
          </div>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-indigo-800/50 text-violet-300 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="text-xs text-violet-300">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Project List Item Component for List View
const ProjectListItem = ({ project, index, onClick, isActive }) => {
  return (
    <motion.div
      className="group bg-gradient-to-r from-indigo-900/80 to-violet-900/80 rounded-xl overflow-hidden shadow-lg hover:shadow-violet-600/20 flex flex-col md:flex-row"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.01, y: -2 }}
      animate={isActive ? { scale: 1.02 } : {}}
    >
      {/* Image section */}
      <div className="md:w-1/4 relative overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover min-h-[150px]"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
        {project.featured && (
          <div className="absolute top-2 left-2 bg-amber-400 text-amber-900 text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
            <Star size={10} /> Featured
          </div>
        )}
      </div>

      {/* Content section */}
      <div className="p-6 md:w-3/4 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-violet-300 transition-colors">
            {project.title}
          </h3>

          <p className="text-violet-200 text-sm mb-4 line-clamp-2">
            {project.shortdescription}
          </p>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-indigo-800/50 text-violet-300 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer with actions */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 md:pt-0">
          {/* Date */}
          <span className="text-xs text-violet-300 flex items-center">
            <Calendar size={12} className="mr-1" />
            {project.date || "2025"}
          </span>

          {/* Actions */}
          <div className="flex gap-2">
            <motion.button
              onClick={onClick}
              className="bg-violet-600 hover:bg-violet-500 text-white text-sm px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Eye size={14} /> View Details
            </motion.button>

            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Github size={14} /> GitHub
              </motion.a>
            )}

            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-800 hover:bg-indigo-700 text-white text-sm px-3 py-1.5 rounded flex items-center gap-1.5 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <ExternalLink size={14} /> Live
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
