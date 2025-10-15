import React from "react";

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
          <div className="project-card bg-white rounded-[10px] overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.1)] transition-transform duration-300">
            <div className="project-image  w-full h-[250px] bg-[#333] flex items-center justify-center text-white">
              <img
                src=""
                alt="The Gaffer"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="project-content  p-8">
              <h3 className="project-title text-[1.5rem] mb-4 text-[#555]">
                The Gaffer
              </h3>
              <p className="project-description text-[#666] mb-6">
                A football tactics builder and tester built with the MERN stack.
              </p>

              <p className="stack-title font-semibold mb-2">Stack:</p>
              <div className="tech-stack  flex flex-wrap gap-2 mb-4">
                <span
                  className="tech-tag px-4 py-2 bg-gray-200 rounded-[5px] text-[0.9rem]
"
                >
                  MongoDB
                </span>
                <span
                  className="tech-tag px-4 py-2 bg-gray-200 rounded-[5px] text-[0.9rem]
"
                >
                  Express.js
                </span>
                <span
                  className="tech-tag px-4 py-2 bg-gray-200 rounded-[5px] text-[0.9rem]
"
                >
                  React
                </span>
                <span
                  className="tech-tag px-4 py-2 bg-gray-200 rounded-[5px] text-[0.9rem]
"
                >
                  Node.js
                </span>
              </div>

              <p className="stack-title">Tools:</p>
              <div className="tools flex flex-wrap gap-2 mb-4">
                <span
                  className="tech-tag px-4 py-2 bg-gray-200 rounded-[5px] text-[0.9rem]
"
                >
                  Tailwind CSS
                </span>
                <span
                  className="tech-tag px-4 py-2 bg-gray-200 rounded-[5px] text-[0.9rem]
"
                >
                  Dnd Kit
                </span>
                <span
                  className="tech-tag px-4 py-2 bg-gray-200 rounded-[5px] text-[0.9rem]
"
                >
                  OpenAI API
                </span>
                <span
                  className="tech-tag px-4 py-2 bg-gray-200 rounded-[5px] text-[0.9rem]
"
                >
                  Postman
                </span>
                <span
                  className="tech-tag px-4 py-2 bg-gray-200 rounded-[5px] text-[0.9rem]
"
                >
                  Vite
                </span>
              </div>

              <div
                className="project-buttons flex gap-4 mt-6
"
              >
                <a
                  href="#"
                  className="btn flex-1 p-3 text-center border-2 border-[#333] bg-transparent cursor-pointer transition-all no-underline text-[#333] font-medium rounded-[5px]
"
                >
                  Live Demo
                </a>
                <a
                  href="#"
                  className="btn flex-1 p-3 text-center border-2 border-[#333] bg-transparent cursor-pointer transition-all no-underline text-[#333] font-medium rounded-[5px]
"
                >
                  Github ⚲
                </a>
              </div>
            </div>
          </div>

          <div className="project-card bg-white rounded-[10px] overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.1)] transition-transform duration-300">
            <div className="project-image  w-full h-[250px] bg-[#333] flex items-center justify-center text-white">
              <img
                src=""
                alt="The Gaffer"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <div className="project-content  p-8">
              <h3 className="project-title text-[1.5rem] mb-4 text-[#555]">
                The Gaffer
              </h3>
              <p className="project-description text-[#666] mb-6">
                A football tactics builder and tester built with the MERN stack.
              </p>

              <p className="stack-title font-semibold mb-2">Stack:</p>
              <div className="tech-stack  flex flex-wrap gap-2 mb-4">
                <span
                  className="tech-tag px-4 py-2 bg-gray-200 rounded-[5px] text-[0.9rem]
"
                >
                  MongoDB
                </span>
                <span
                  className="tech-tag px-4 py-2 bg-gray-200 rounded-[5px] text-[0.9rem]
"
                >
                  Express.js
                </span>
                <span
                  className="tech-tag px-4 py-2 bg-gray-200 rounded-[5px] text-[0.9rem]
"
                >
                  React
                </span>
                <span
                  className="tech-tag px-4 py-2 bg-gray-200 rounded-[5px] text-[0.9rem]
"
                >
                  Node.js
                </span>
              </div>

              <p className="stack-title">Tools:</p>
              <div className="tools flex flex-wrap gap-2 mb-4">
                <span
                  className="tech-tag px-4 py-2 bg-gray-200 rounded-[5px] text-[0.9rem]
"
                >
                  Tailwind CSS
                </span>
                <span
                  className="tech-tag px-4 py-2 bg-gray-200 rounded-[5px] text-[0.9rem]
"
                >
                  Dnd Kit
                </span>
                <span
                  className="tech-tag px-4 py-2 bg-gray-200 rounded-[5px] text-[0.9rem]
"
                >
                  OpenAI API
                </span>
                <span
                  className="tech-tag px-4 py-2 bg-gray-200 rounded-[5px] text-[0.9rem]
"
                >
                  Postman
                </span>
                <span
                  className="tech-tag px-4 py-2 bg-gray-200 rounded-[5px] text-[0.9rem]
"
                >
                  Vite
                </span>
              </div>

              <div
                className="project-buttons flex gap-4 mt-6
"
              >
                <a
                  href="#"
                  className="btn flex-1 p-3 text-center border-2 border-[#333] bg-transparent cursor-pointer transition-all no-underline text-[#333] font-medium rounded-[5px]
"
                >
                  Live Demo
                </a>
                <a
                  href="#"
                  className="btn flex-1 p-3 text-center border-2 border-[#333] bg-transparent cursor-pointer transition-all no-underline text-[#333] font-medium rounded-[5px]
"
                >
                  Github ⚲
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
