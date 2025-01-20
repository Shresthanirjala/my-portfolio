import React from "react";
import { useNavigate } from "react-router-dom";
import projects from "../data/Projects";

const Project = () => {
  const navigate = useNavigate();

  const handleViewProject = (id) => {
    navigate(`/ProjectDetail/${id}`); // Redirect to dynamic route
  };

  return (
    <div className="px-4 md:px-8 py-16 flex justify-center">
      <div className="flex flex-col gap-12 w-full max-w-[1200px]">
        {/* Title Section */}
        <h1 className="text-center font-SourceSans3 font-bold text-3xl">
          Projects
        </h1>
        <div className="flex justify-center">
          <img
            src="line.svg"
            className="w-16 sm:w-[100px] h-[4px]"
            alt="Divider"
          />
        </div>

        {/* Projects Section */}
        <div className="flex flex-col gap-16 mt-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-8 md:gap-12 items-center ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-[650px] flex justify-center">
                <div className="w-full aspect-w-16 aspect-h-9 lg:aspect-w-4 lg:aspect-h-3">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-[500px] flex flex-col gap-6 items-center md:items-start text-center md:text-left">
                <h2 className="font-SourceSans3 font-bold text-xl md:text-2xl">
                  {project.title}
                </h2>
                <p className="text-sm md:text-base">
                  {project.shortdescription}
                </p>
                <button
                  onClick={() => handleViewProject(project.id)} // Pass project ID
                  className="bg-[#D37A54] px-6 py-2 font-bold text-white rounded-lg font-SourceSans3 hover:bg-[#DA9171] transition-colors duration-300"
                >
                  VIEW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
