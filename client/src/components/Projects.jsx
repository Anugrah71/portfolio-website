import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projectData } from "../data/projectData";
import { getProjects } from "../services/api";
import { useNavigate } from "react-router-dom";
import TiltCard from "./TiltCard";
import { Zap, ExternalLink, Github, ArrowRight } from "lucide-react";

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
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState(projectData);

  useEffect(() => {
    getProjects().then((data) => {
      if (data && Array.isArray(data) && data.length > 0) {
        // Merge with local assets from src/assets/ for existing projects
        const resolved = data.map((item) => {
          const local = projectData.find((p) => p.id === item.id);
          if (local) {
            const hasCustomUpload =
              item.imageUrl &&
              !item.imageUrl.includes("unsplash.com") &&
              !item.imageUrl.includes("photo-") &&
              item.imageUrl.startsWith("http");

            return {
              ...item,
              imageUrl: hasCustomUpload ? item.imageUrl : local.imageUrl,
              images:
                item.images &&
                item.images.length > 0 &&
                !item.images[0].includes("unsplash.com") &&
                item.images[0].startsWith("http")
                  ? item.images
                  : local.images,
            };
          }
          return item;
        });
        setProjects(resolved);
      }
    });
  }, []);

  return (
    <motion.section
      id="projects"
      className="py-20 px-5 sm:px-10 md:px-20 bg-[#080B12] min-h-screen text-[#F1F3F5]"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2
        className="section-title text-3xl sm:text-4xl md:text-5xl text-center mb-16 font-extrabold text-[#F1F3F5]"
        variants={cardVariant}
      >
        Featured Projects
      </motion.h2>

      <motion.div
        className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto"
        variants={containerVariants}
      >
        {[...projects].sort((a, b) => (a.order || 0) - (b.order || 0) || b.id - a.id).map((item) => (
          <motion.div key={item.id} variants={cardVariant}>
            <TiltCard
              onClick={() => navigate(`/project/${item.id}`)}
              className="cursor-pointer flex flex-col h-full group bg-[#10141D] border border-[#202632]"
            >
              <div className="w-full h-60 sm:h-72 flex items-center justify-center bg-[#080B12] relative overflow-hidden p-4 border-b border-[#202632]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="rounded-xl w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                {item.keyMetric && (
                  <div className="absolute bottom-3 left-3 right-3 bg-[#10141D] text-[#F1F3F5] text-xs px-3.5 py-2 rounded-xl flex items-center gap-2 border border-[#202632] shadow-lg">
                    <Zap size={14} className="text-[#7C6CFF] shrink-0" />
                    <span className="truncate font-medium">{item.keyMetric}</span>
                  </div>
                )}
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#F1F3F5] mb-2 group-hover:text-[#7C6CFF] transition-colors">
                  {item.title}
                </h3>

                <p className="text-[#8B93A1] text-sm sm:text-base mb-4 flex-1 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {item.stack.map((stack, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#080B12] text-[#F1F3F5] border border-[#202632] rounded-lg text-xs font-mono"
                    >
                      {stack}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-2.5 mt-auto pt-4 border-t border-[#202632]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/project/${item.id}`);
                    }}
                    className="flex-1 min-w-[120px] py-2.5 px-3 bg-[#7C6CFF] hover:bg-[#6b59ff] text-white text-xs sm:text-sm font-bold rounded-xl shadow-lg transition flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View Details</span>
                    <ArrowRight size={14} />
                  </button>

                  {item.liveDemo && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(item.liveDemo, "_blank", "noopener,noreferrer");
                      }}
                      className="py-2.5 px-3.5 bg-[#080B12] hover:bg-[#161c29] text-[#F1F3F5] border border-[#202632] text-xs sm:text-sm font-bold rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer"
                      title="Live Demo"
                    >
                      <span>Live</span>
                      <ExternalLink size={14} />
                    </button>
                  )}

                  {item.github && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(item.github, "_blank", "noopener,noreferrer");
                      }}
                      className="py-2.5 px-3.5 bg-[#080B12] hover:bg-[#161c29] text-[#F1F3F5] border border-[#202632] text-xs sm:text-sm font-bold rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer"
                      title="GitHub Repository"
                    >
                      <Github size={15} />
                      <span>Code</span>
                    </button>
                  )}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
