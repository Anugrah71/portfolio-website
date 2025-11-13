import React from "react";
import { motion } from "framer-motion";

import {
  HtmlIcon,
  CSS3Icon,
  JSIcon,
  TailwindIcon,
  BootstrapIcon,
  TypeScriptIcon,
  ReactIcon,
  NextJsIcon,
  NodeJsIcon,
  ExpressIcon,
  MongoDBIcon,
  GitIcon,
  GithubIcon,
  PostmanIcon,
  NpmIcon,
} from "../assets/icons";

const skillsData = [
  {
    title: "Frontend",
    skills: [
      { icon: HtmlIcon, name: "HTML" },
      { icon: CSS3Icon, name: "CSS" },
      { icon: JSIcon, name: "JavaScript" },
      { icon: ReactIcon, name: "React" },
      { icon: TailwindIcon, name: "Tailwind" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { icon: NodeJsIcon, name: "Node.js" },
      { icon: ExpressIcon, name: "Express.js" },
      { icon: MongoDBIcon, name: "MongoDB" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { icon: GitIcon, name: "Git" },
      { icon: GithubIcon, name: "GitHub" },
      { icon: PostmanIcon, name: "Postman" },
      { icon: NpmIcon, name: "NPM" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

const iconVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 12 },
  },
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 px-5 sm:px-10 md:px-20 bg-[#f8f8f8]"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2
        className="section-title text-3xl sm:text-4xl md:text-5xl text-center mb-16 font-bold"
        variants={cardVariant}
      >
        My <span className="text-[#333]">Skills</span>
      </motion.h2>

      <motion.div
        className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto"
        variants={containerVariants}
      >
        {skillsData.map((item, idx) => (
          <motion.div
            key={idx}
            variants={cardVariant}
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="bg-white rounded-xl p-6 sm:p-8 shadow-lg flex flex-col"
          >
            <motion.h3
              variants={cardVariant}
              className="text-2xl sm:text-3xl mb-6 sm:mb-8 text-gray-600 text-center"
            >
              {item.title}
            </motion.h3>

            <motion.div
              className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 justify-items-center"
              variants={containerVariants}
            >
              {item.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  variants={iconVariant}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 rounded-full bg-[#f0f0f0] flex items-center justify-center overflow-hidden transition-transform duration-300">
                    <skill.icon className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
