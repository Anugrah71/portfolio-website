import { motion } from "framer-motion";
import ExperienceTimeline from "./ExperienceTimeline";
import TiltCard from "./TiltCard";
import { GraduationCap, Briefcase, Server } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const rightFade = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const AboutMe = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="about"
      className="py-20 px-4 sm:px-8 md:px-12 bg-[#080B12] text-[#F1F3F5]"
    >
      <motion.h2
        className="section-title text-center mb-12 font-extrabold text-[#F1F3F5]"
        id="about"
        variants={rightFade}
      >
        About Me
      </motion.h2>

      {/* About Me Card (Sized cleanly to max-w-5xl to match Experience Timeline) */}
      <TiltCard className="max-w-5xl mx-auto p-6 md:p-8 mb-16 bg-[#10141D] border border-[#202632] rounded-2xl shadow-xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-52 h-52 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-[#202632] p-1 shrink-0 shadow-xl self-start">
            <img
              src="/Anugrah.jpg"
              alt="Anugrah K"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-4 text-[#8B93A1]">
            <p className="leading-relaxed text-sm md:text-base">
              I'm <strong className="text-[#F1F3F5]">Anugrah</strong>, a BCA graduate and Full Stack Developer with a strong focus on backend development. I build web applications and backend systems using JavaScript, Node.js, Express.js, React, TypeScript, Next.js, and databases.
            </p>

            <p className="leading-relaxed text-sm md:text-base">
              During my internship at <strong className="text-[#F1F3F5]">Limenzy Technologies</strong>, I worked under the mentorship of experienced software developers and contributed to a real-world Job Application Tracker. I worked across both frontend and backend development, including REST APIs, database design, authentication and authorization, third-party integrations, AI-powered features, and workflow automation.
            </p>

            <p className="leading-relaxed text-sm md:text-base">
              Alongside my internship work, I've built projects such as a <strong className="text-[#F1F3F5]">Weather Analytics Dashboard</strong> with Redis caching and rate limiting, and a <strong className="text-[#F1F3F5]">Food Delivery application</strong> with JWT authentication, validation, Cloudinary, and Docker. These projects have helped me develop a stronger understanding of APIs, databases, authentication, performance, and application architecture.
            </p>

            <p className="leading-relaxed text-sm md:text-base text-[#F1F3F5] font-medium">
              I'm currently focused on becoming a stronger backend engineer, with a particular interest in system design, scalable architecture, and building secure, maintainable applications.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#202632] mt-2">
              <div className="p-3.5 bg-[#080B12] rounded-xl border border-[#202632] flex items-center gap-3">
                <div className="p-2 bg-[#7C6CFF]/10 text-[#7C6CFF] rounded-lg shrink-0">
                  <GraduationCap size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-[11px] text-[#8B93A1] uppercase font-semibold">Degree</h4>
                  <p className="text-xs font-bold text-[#F1F3F5] leading-snug">BCA Graduate</p>
                </div>
              </div>

              <div className="p-3.5 bg-[#080B12] rounded-xl border border-[#202632] flex items-center gap-3">
                <div className="p-2 bg-[#7C6CFF]/10 text-[#7C6CFF] rounded-lg shrink-0">
                  <Briefcase size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-[11px] text-[#8B93A1] uppercase font-semibold">Experience</h4>
                  <p className="text-xs font-bold text-[#F1F3F5] leading-snug">MERN Intern @ Limenzy</p>
                </div>
              </div>

              <div className="p-3.5 bg-[#080B12] rounded-xl border border-[#202632] flex items-center gap-3">
                <div className="p-2 bg-[#7C6CFF]/10 text-[#7C6CFF] rounded-lg shrink-0">
                  <Server size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-[11px] text-[#8B93A1] uppercase font-semibold">Focus</h4>
                  <p className="text-xs font-bold text-[#F1F3F5] leading-snug">Backend & System Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TiltCard>

      {/* Experience Timeline Section */}
      <ExperienceTimeline />
    </motion.section>
  );
};

export default AboutMe;
