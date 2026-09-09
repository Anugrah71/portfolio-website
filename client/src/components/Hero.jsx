import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, Download } from "lucide-react";
import { getActiveResume } from "../services/api";
import {
  ReactIcon,
  NextJsIcon,
  TypeScriptIcon,
  JSIcon,
  NodeJsIcon,
  ExpressIcon,
  MongoDBIcon,
  Redis,
  Docker,
  TailwindIcon,
  N8nIcon,
  PostgresSQL,
  GithubIcon,
  HtmlIcon,
  CSS3Icon,
  Redux,
  GitIcon,
  PostmanIcon,
  NpmIcon,
  Ec2Icon,
} from "../assets/icons";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const floatingIcons = [
  { icon: NodeJsIcon, name: "Node.js", pos: { left: "2%", top: "14%" }, depth: 22, floatDur: 4.2 },
  { icon: ExpressIcon, name: "Express.js", pos: { left: "5%", top: "38%" }, depth: 30, floatDur: 5.1 },
  { icon: MongoDBIcon, name: "MongoDB", pos: { left: "1%", top: "62%" }, depth: 18, floatDur: 3.8 },
  { icon: Docker, name: "Docker", pos: { left: "8%", top: "80%" }, depth: 26, floatDur: 4.7 },
  { icon: ReactIcon, name: "React", pos: { right: "2%", top: "16%" }, depth: 20, floatDur: 4.5 },
  { icon: TypeScriptIcon, name: "TypeScript", pos: { right: "6%", top: "42%" }, depth: 16, floatDur: 5.4 },
  { icon: NextJsIcon, name: "Next.js", pos: { right: "1%", top: "66%" }, depth: 28, floatDur: 3.6 },
  { icon: TailwindIcon, name: "Tailwind", pos: { right: "8%", top: "82%" }, depth: 14, floatDur: 4.9 },
  { icon: PostgresSQL, name: "PostgreSQL", pos: { left: "19%", top: "12%" }, depth: 12, floatDur: 6.0 },
  { icon: Redis, name: "Redis", pos: { right: "19%", top: "12%" }, depth: 20, floatDur: 4.0 },
  { icon: Ec2Icon, name: "AWS EC2", pos: { right: "26%", top: "20%" }, depth: 24, floatDur: 5.2 },
  { icon: GithubIcon, name: "GitHub", pos: { left: "20%", top: "88%" }, depth: 18, floatDur: 5.6 },
  { icon: N8nIcon, name: "n8n", pos: { right: "20%", top: "90%" }, depth: 24, floatDur: 3.9 },
  { icon: JSIcon, name: "JavaScript", pos: { left: "13%", top: "54%" }, depth: 34, floatDur: 4.3 },
  { icon: GitIcon, name: "Git", pos: { right: "13%", top: "56%" }, depth: 32, floatDur: 5.0 },
  { icon: HtmlIcon, name: "HTML5", pos: { left: "16%", top: "26%" }, depth: 14, floatDur: 6.2 },
  { icon: NpmIcon, name: "NPM", pos: { right: "16%", top: "28%" }, depth: 10, floatDur: 5.8 },
];

const Hero = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [resumeData, setResumeData] = useState({
    fileUrl: "/Anugrah_K_Resume.pdf",
    fileName: "Anugrah_K_Resume.pdf",
  });

  useEffect(() => {
    getActiveResume()
      .then((data) => {
        if (data && data.fileUrl) {
          setResumeData(data);
        }
      })
      .catch((err) => console.warn("Using fallback resume:", err));
  }, []);

  const handleMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: (e.clientX - rect.left) / rect.width - 0.5,
      y: (e.clientY - rect.top) / rect.height - 0.5,
    });
  }, []);

  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-8 md:px-12 bg-[#080B12] text-[#F1F3F5] pt-28 pb-16 text-center relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="show"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C6CFF]/6 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-[#4F8AFF]/4 rounded-full blur-[120px] pointer-events-none" />

      {floatingIcons.map((item, idx) => {
        const Icon = item.icon;
        const tx = mouse.x * item.depth;
        const ty = mouse.y * item.depth;
        return (
          <div
            key={idx}
            className="absolute z-0 pointer-events-none hidden sm:block"
            style={{
              ...item.pos,
              transform: `translate(${tx}px, ${ty}px)`,
              transition: "transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
            }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: item.floatDur,
                repeat: Infinity,
                ease: "easeInOut",
                delay: idx * 0.18,
              }}
              className="flex items-center gap-2 px-3.5 py-2 bg-[#10141D]/85 backdrop-blur-md border border-[#202632] rounded-xl select-none"
              style={{ opacity: 0.72 }}
            >
              <Icon className="w-6 h-6 shrink-0" />
              <span className="text-xs font-semibold text-[#8B93A1] whitespace-nowrap">
                {item.name}
              </span>
            </motion.div>
          </div>
        );
      })}

      <div className="relative z-10 flex flex-col items-center">
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl xl:text-[5.5rem] font-extrabold mb-4 tracking-tight leading-tight text-[#F1F3F5] max-w-5xl"
        >
          Full Stack Developer
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-[#7C6CFF] mb-6 text-lg sm:text-2xl font-bold tracking-wide"
        >
          Backend-focused, building with Node.js &amp; TypeScript
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="max-w-[680px] text-sm sm:text-base md:text-lg leading-relaxed text-[#8B93A1] mb-10"
        >
          Full Stack Developer with hands-on experience building
          REST APIs, authentication systems, database-driven applications,
          AI-powered features, and third-party integrations using Node.js,
          Express.js, TypeScript, React, Next.js, and MongoDB
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center gap-4 mb-8"
        >
          <motion.a
            href={resumeData.fileUrl || "/Anugrah_K_Resume.pdf"}
            download={resumeData.fileName || "Anugrah_K_Resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#7C6CFF] hover:bg-[#6b59ff] text-white font-bold rounded-xl shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
          >
            <Download size={18} /> Download Resume
          </motion.a>

          <ScrollLink to="projects" smooth={true} duration={500} offset={-80} className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#10141D] hover:bg-[#161c29] text-[#F1F3F5] font-bold rounded-xl border border-[#202632] shadow-md transition-all duration-300 inline-flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              Explore Projects <ArrowRight size={18} />
            </motion.button>
          </ScrollLink>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#10141D] border border-[#202632] rounded-full text-xs sm:text-sm text-[#8B93A1]"
        >
          <span>
            <strong className="text-[#F1F3F5] font-semibold">
              Open to Junior Backend & Full Stack Opportunities
            </strong>
          </span>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
