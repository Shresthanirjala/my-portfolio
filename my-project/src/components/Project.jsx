import React from "react";
import { useNavigate } from "react-router-dom";
import projects from "../data/Projects";


const Project = () => {
  const navigate = useNavigate();

  const handleViewProject = (id) => {
    navigate(`/ProjectDetail/${id}`); // Redirect to dynamic route
  };

  return (
    <div className="px-4 lg:px-32">
      <div className="flex flex-col py-16 gap-4">
        <h1 className="text-center font-SourceSans3 font-bold text-3xl">
          Project
        </h1>
        <div className="flex justify-center">
          <img
            src="line.svg"
            className="w-16 sm:w-[100px] h-[4px]"
            alt="Divider"
          />
        </div>
        <div className="flex flex-col gap-[117px] mt-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-24 items-center lg:items-start ${
                index % 2 === 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full lg:w-[650px] h-[350px]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full lg:w-[500px] flex flex-col gap-7 mt-9">
                <h1 className="font-SourceSans3 font-bold text-2xl">
                  {project.title}
                </h1>
                <p className="text-sm md:text-base">{project.shortdescription}</p>
                <button
                  onClick={() => handleViewProject(project.id)} // Pass project ID
                  className="bg-[#D37A54] px-4 py-2 w-[120px] sm:w-[150px] font-bold text-white rounded-lg font-SourceSans3 hover:bg-[#DA9171]"
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
