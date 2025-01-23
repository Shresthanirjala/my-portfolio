import React from "react";
import { useParams } from "react-router-dom";
import projects from "../data/Projects";

import Footer from "./Footer";

const ProjectDetail = () => {
  const { id } = useParams(); // Get project ID from URL
  const project = projects.find((p) => p.id === parseInt(id)); // Find the project by ID

  // Handle case when project is not found
  if (!project) {
    return (
      <div className="text-center text-red-500 mt-10">Project not found!</div>
    );
  }

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        {/* About Section */}
        <div className="flex flex-col items-center gap-6 px-4 py-24 md:px-0 w-full md:w-[700px] lg:w-[900px] my-10  ">
          <h1 className="text-black font-SourceSans3 font-bold text-[40px] ">
            {project.title}
          </h1>
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-w-[800px] rounded-lg mt-6"
          />
          <div className="flex justify-center gap-[25px] flex-col lg:w-[700px] ">
            <h1 className="font-SourceSans3 text-xl md:text-2xl font-bold mt-12">
              About {project.title}
            </h1>
            <p className="font-SourceSans3 text-sm md:text-base text-justify ">
              {project.description}
            </p>

            <h2 className="font-SourceSans3 text-xl md:text-2xl font-bold mt-12">
              Tools Used
            </h2>
            <div className="flex flex-row gap-3 px-3 py-1">
              {project.tools?.map((tool, index) => (
                <button
                  key={index}
                  className="bg-[#D9D9D9] w-[100px] rounded-lg px-3 py-2 text-sm font-semibold text-black"
                >
                  {tool}
                </button>
              ))}
            </div>

            {/* Redirect Button
            {project.link && (
              <div className="mt-8">
                <button
                  onClick={() => window.open(project.link, "_blank")}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
                >
                  View Project
                </button>
              </div>
            )} */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
