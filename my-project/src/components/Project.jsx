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

// Enhanced Project Card Component
const ProjectCard = ({ project }) => {
  const liveUrl = project.link;
  return (
    <div
      className="bg-gradient-to-br from-gray-800/60 to-gray-900/80 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 border border-gray-700/50 backdrop-blur-sm cursor-pointer"
      onClick={() => {
        if (liveUrl) window.open(liveUrl, "_blank");
      }}
      title={liveUrl ? `Open ${project.title} Live` : undefined}
    >
      {/* Tech Stack Header - Above Image */}
      {project.tags && project.tags.length > 0 && (
        <div className="px-4 py-3 bg-gray-800/40 border-b border-gray-700/30">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 6).map((tech, index) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 bg-gradient-to-r from-blue-600/20 to-blue-500/20 text-blue-200 rounded-md border border-blue-500/30 font-medium"
              >
                {tech}
              </span>
            ))}
          
          </div>
        </div>
      )}

      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-white mb-3 hover:text-blue-300 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
            {project.shortdescription || project.description}
          </p>
        </div>

        {/* Enhanced Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-600/30">
          {/* Date */}
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar size={14} className="mr-1.5" />
            <span>{project.date || "2025"}</span>
          </div>

          {/* Action Links */}
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-700/50 text-gray-300 rounded-lg hover:bg-blue-600/20 hover:text-blue-300 transition-all duration-200 border border-gray-600/30 hover:border-blue-500/50"
                title="View Source Code on GitHub"
                onClick={(e) => e.stopPropagation()}
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
                onClick={(e) => e.stopPropagation()}
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