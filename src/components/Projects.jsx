import React from "react";
import { motion } from "framer-motion";
import { projectData } from "../data/projectData";
import { useNavigate } from "react-router-dom";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const Projects = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      id="projects"
      className="projects py-20 px-5 sm:px-10 md:px-20 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2
        className="section-title text-3xl sm:text-4xl md:text-5xl text-center mb-16 font-bold"
        variants={cardVariant}
      >
        Here are some of my{" "}
        <span className="font-light text-transparent">Projects</span>
      </motion.h2>

      <motion.div
        className="projects-grid grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2"
        variants={containerVariants}
      >
        {projectData.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariant}
            whileHover={{ scale: 1.03, y: -3 }}
            transition={{ type: "spring", stiffness: 230, damping: 18 }}
            onClick={() => navigate(`/project/${item.id}`)}
            className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer flex flex-col h-full"
          >
            <div className="project-image w-full h-56 sm:h-64 md:h-72 flex items-center justify-center bg-gray-100">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="rounded-md w-full h-full object-contain bg-white"
              />
            </div>

            <div className="project-content p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="project-title text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold">
                  {item.title}
                </h3>
              </div>

              <p className="project-description text-gray-600 text-sm sm:text-base mb-2 flex-1">
                {item.description}
              </p>

              <p className="stack-title font-semibold mb-4 text-gray-700">
                Stack:
              </p>

              <div className="flex flex-wrap gap-2 mb-4 overflow-x-auto whitespace-nowrap py-1">
                {item.stack.map((stack, index) => (
                  <span
                    key={index}
                    className="tech-tag px-3 py-1 bg-gray-200 rounded text-sm shrink-0"
                  >
                    {stack}
                  </span>
                ))}
              </div>

              <div className="project-buttons flex flex-col sm:flex-row gap-3 mt-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(item.liveDemo, "_blank", "noopener,noreferrer");
                  }}
                  className="relative overflow-hidden group flex-1 p-3 text-center border-2 border-gray-800 bg-transparent cursor-pointer transition-all rounded-md text-gray-800 font-medium no-underline"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Live Demo
                  </span>
                  <span className="absolute inset-0 bg-gray-800 origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100"></span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(item.github, "_blank", "noopener,noreferrer");
                  }}
                  className="relative overflow-hidden group flex-1 p-3 text-center border-2 border-gray-800 bg-transparent cursor-pointer transition-all rounded-md text-gray-800 font-medium no-underline"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Github ⚲
                  </span>
                  <span className="absolute inset-0 bg-gray-800 origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100"></span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
