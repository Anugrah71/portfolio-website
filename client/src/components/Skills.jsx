import React from "react";
import { motion } from "framer-motion";

import TiltCard from "./TiltCard";

import {
  HtmlIcon,
  CSS3Icon,
  JSIcon,
  TypeScriptIcon,
  ReactIcon,
  NextJsIcon,
  TailwindIcon,
  Redis,
  Redux,
  Docker,
  NodeJsIcon,
  ExpressIcon,
  MongoDBIcon,
  GitIcon,
  GithubIcon,
  PostmanIcon,
  PostgresSQL,
  NpmIcon,
  N8nIcon,
  Ec2Icon,
} from "../assets/icons";

const skillsData = [
  {
    title: "Frontend Development",
    skills: [
      { icon: HtmlIcon, name: "HTML5" },
      { icon: CSS3Icon, name: "CSS3" },
      { icon: JSIcon, name: "JavaScript" },
      { icon: TypeScriptIcon, name: "TypeScript" },
      { icon: ReactIcon, name: "React" },
      { icon: NextJsIcon, name: "Next.js" },
      { icon: TailwindIcon, name: "Tailwind" },
      { icon: Redux, name: "Redux Toolkit" },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      { icon: NodeJsIcon, name: "Node.js" },
      { icon: ExpressIcon, name: "Express.js" },
      { icon: MongoDBIcon, name: "MongoDB" },
      { icon: PostgresSQL, name: "PostgreSQL" },
      { icon: Redis, name: "Redis Cache" },
    ],
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { icon: GitIcon, name: "Git" },
      { icon: GithubIcon, name: "GitHub" },
      { icon: PostmanIcon, name: "Postman" },
      { icon: Docker, name: "Docker" },
      { icon: Ec2Icon, name: "AWS EC2" },
      { icon: N8nIcon, name: "n8n Workflows" },
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

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-20 px-5 sm:px-10 md:px-20 bg-[#080B12] text-[#F1F3F5]"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2
        className="section-title text-3xl sm:text-4xl md:text-5xl text-center mb-12 font-extrabold text-[#F1F3F5]"
        variants={cardVariant}
      >
        Technical Skills
      </motion.h2>



      {/* Grid of Skill Categories */}
      <motion.div
        className="grid gap-8 grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto"
        variants={containerVariants}
      >
        {skillsData.map((item, idx) => (
          <motion.div key={idx} variants={cardVariant}>
            <TiltCard className="p-6 sm:p-8 flex flex-col h-full bg-[#10141D] border border-[#202632]">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[#F1F3F5] text-center border-b border-[#202632] pb-4">
                {item.title}
              </h3>

              <div className="grid grid-cols-3 gap-4 justify-items-center">
                {item.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="text-center group"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-2 rounded-2xl bg-[#080B12] border border-[#202632] flex items-center justify-center p-3 group-hover:border-[#7C6CFF]/60 group-hover:bg-[#161c29] transition-all duration-300 shadow-md">
                      <skill.icon className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                    </div>
                    <p className="text-xs font-semibold text-[#8B93A1] group-hover:text-[#7C6CFF] transition-colors">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
