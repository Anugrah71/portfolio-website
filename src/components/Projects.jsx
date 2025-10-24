import React from "react";
import { projectData } from "../data/projectData";
import { Link } from "react-router-dom";
import { RightArrowKey } from "../assets/icons";
// import Svg from '../components/Svg'

const Projects = () => {
  return (
    <section className="projects py-20 px-5 sm:px-10 md:px-20 min-h-screen">
        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-center mb-16 font-bold">
        Here are some of my{" "}
        <span className="font-light text-transparent ">
          Projects
        </span>
      </h2>

      <div className="projects-grid grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2">
        {projectData.map((item) => (
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col h-full">
            <div className="project-image w-full h-56 sm:h-64 md:h-72 flex items-center justify-center bg-gray-100">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="rounded-md w-full h-full object-cover"
              />
            </div>

            <div className="project-content p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="project-title text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold">
                  {item.title}
                </h3>
                <Link
                  key={item.id}
                  to={`/project/${item.id}`}
                  className="project-card"
                >
                  <RightArrowKey className="w-5 h-5" />
                </Link>
              </div>

              <p className="project-description text-gray-600 text-sm sm:text-base mb-4 flex-1">
                {item.description}
              </p>

              <p className="stack-title font-semibold mb-2 text-gray-700">
                Stack:
              </p>
              <div className="tech-stack flex flex-wrap gap-2 mb-4 overflow-x-auto whitespace-nowrap py-1">
                {item.stack.map((stack, index) => (
                  <span
                    key={index}
                    className="tech-tag px-3 py-1 bg-gray-200 rounded text-sm shrink-0"
                  >
                    {stack}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="project-buttons flex flex-col sm:flex-row gap-3 mt-auto">
                <a
                  href={item.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden group flex-1 p-3 text-center border-2 border-gray-800 bg-transparent cursor-pointer transition-all rounded-md text-gray-800 font-medium no-underline"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Live Demo
                  </span>
                  <span className="absolute inset-0 bg-gray-800 origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100"></span>
                </a>

                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative overflow-hidden group flex-1 p-3 text-center border-2 border-gray-800 bg-transparent cursor-pointer transition-all rounded-md text-gray-800 font-medium no-underline"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Github ⚲
                  </span>
                  <span className="absolute inset-0 bg-gray-800 origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100"></span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
