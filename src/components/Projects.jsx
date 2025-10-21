import React from "react";
import { projectData } from "../data/projectData";
import { Link } from "react-router-dom";


import { RightArrowKey } from "../assets/icons";

const Projects = () => {

  return (
    <>
      <section className="projects py-20 px-[10%] min-h-screen">
        <h2 className="section-title  text-[3rem] text-center mb-16 font-bold">
          Here are some of my{" "}
          <span className="font-light text-transparent [webkit-text-stroke:1px_#333]">
            Projects
          </span>
        </h2>
        <div className="projects-grid grid [grid-template-columns:repeat(auto-fit,minmax(450px,1fr))] gap-12">
          {projectData.map((item) => (
            <Link key={item.id} to={`/project/${item.id}`} className="project-card">
            <div  className="project-card bg-white rounded-[10px] overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.1)] hover:scale-110 transition-transform duration-300">
              <div className="project-image  w-full h-[250px]  flex items-center justify-center text-white p-2">
                <img
                  src={item.imageUrl}
                  alt="The Gaffer"
                  className="rounded-md"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="project-content  p-8">
                <div className="flex flex-row items-center gap-2">
                  <h3 className="project-title text-[1.5rem]  text-[#555]">
                    {item.title}
                  </h3>
                  <RightArrowKey className=" w-5 h-5" />
                </div>
                <p className="project-description text-[#666] mb-6">
                  {item.description}
                </p>

                <p className="stack-title font-semibold mb-2 ">Stack:</p>
                <div className="tech-stack  flex flex-wrap gap-2 mb-4 overflow-x-auto whitespace-nowrap py-2">
                  {item.stack.map((stack) => (
                    <span className="tech-tag px-4 py-2 bg-gray-200 rounded-[5px] text-[0.9rem] shrink-0">
                      {stack}
                    </span>
                  ))}
                </div>

                <div className="project-buttons flex gap-4 mt-6">
                  <a
                    href={item.githubUrl}
                    className="relative overflow-hidden group flex-1 p-3 text-center border-2 border-[#333] bg-transparent cursor-pointer transition-all no-underline text-[#333] font-medium rounded-[5px]"
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      Live Demo
                    </span>
                    <span className="absolute inset-0 bg-[#333] origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100"></span>
                  </a>
                  <a
                    href={item.githubUrl}
                    className="relative overflow-hidden group flex-1 p-3 text-center border-2 border-[#333] bg-transparent cursor-pointer transition-all no-underline text-[#333] font-medium rounded-[5px]"
                  >
                    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                      Github ⚲
                    </span>
                    <span className="absolute inset-0 bg-[#333] origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100"></span>
                  </a>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
