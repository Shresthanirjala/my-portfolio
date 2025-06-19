import React, { useState } from "react";
import { Github, ExternalLink, Calendar } from "lucide-react";
import projects from "../data/Projects";

const Project = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  // Extract all unique tags from projects
  const allTags = [
    "All",
    ...Array.from(
      new Set(projects.flatMap((p) => p.tags || []).filter(Boolean))
    ),
  ];

  // Filter projects based on selected tag
  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((p) => p.tags && p.tags.includes(selectedTag));

  return (
    <div
      id="projects"
      className="relative min-h-screen overflow-hidden bg-gray-900 py-20"
    >
      {/* Particle canvas for subtle background */}
      <canvas id="particle-canvas" className="absolute inset-0 z-0" />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 z-1"></div>

      {/* Professional geometric accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-600/10 to-transparent rounded-full blur-3xl z-1"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-600/10 to-transparent rounded-full blur-3xl z-1"></div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5 z-1"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div className="max-w-6xl mx-auto px-4 relative z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My Projects
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A collection of my work showcasing different technologies and
            solutions
          </p>
        </div>

        {/* Tags Filter */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedTag === tag
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25"
                  : "bg-gray-800/50 text-gray-200 hover:bg-gray-700/70 border border-gray-600/50 hover:border-blue-500/30"
              }`}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* No projects found */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📁</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No Projects Found
              </h3>
              <p className="text-gray-300 max-w-md mx-auto">
                No projects match the selected tag. Try selecting a different
                category.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  // Use 'link' as the live URL for redirection
  const liveUrl = project.link;
  return (
    <div
      className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 border border-gray-700/50 backdrop-blur-sm py-5 cursor-pointer"
      onClick={() => {
        if (liveUrl) window.open(liveUrl, "_blank");
      }}
      title={liveUrl ? `Open ${project.title} Live` : undefined}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        {project.featured && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow-lg">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-white mb-3 hover:text-blue-300 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
            {project.shortdescription || project.description}
          </p>

          {/* Technologies - Enhanced styling */}
          {project.tags && project.tags.length > 0 && (
            <div className="mb-4">
              <p className="text-blue-300 text-xs uppercase tracking-wider mb-3 font-semibold">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gradient-to-r from-blue-600/20 to-blue-500/20 text-blue-200 text-xs px-3 py-1.5 rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-all duration-200 backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-600/30">
          {/* Date and Status */}
          <div className="flex items-center gap-3">
            {/* Date */}
            <div className="flex items-center text-gray-400 text-sm">
              <Calendar size={14} className="mr-1" />
              {project.date || "2025"}
            </div>

            {/* Live Demo Indicator */}
            {project.liveUrl && (
              <div className="flex items-center gap-1 text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium">Live</span>
              </div>
            )}
          </div>

          {/* Action Links - GitHub and Live Demo */}
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-blue-600/20 hover:text-blue-300 transition-all duration-200 border border-gray-600/30 hover:border-blue-500/50"
                title="View Source Code on GitHub"
              >
                <Github size={16} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-green-600/20 hover:text-green-300 transition-all duration-200 border border-gray-600/30 hover:border-green-500/50"
                title="View Live Demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
