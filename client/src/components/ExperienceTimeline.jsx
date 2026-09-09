import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, Server, ShieldCheck, Zap, Code2, Cpu, Rocket, Users, Mail, GitBranch, Layers } from "lucide-react";

const experienceData = [
  {
    type: "internship",
    company: "Limizny Technologies Pvt. Ltd.",
    role: "MERN Stack Developer Intern",
    period: "April 2026 – July 2026",
    location: "Government Cyberpark, Kozhikode",
    nodeIcon: Briefcase,
    impactMetric: "Worked on full-stack web application development using MERN, Next.js, and TypeScript, contributing to backend APIs, database operations, authentication, integrations, and workflow automation.",
    highlights: [
      {
        icon: Layers,
        title: "Full-Stack Development",
        desc: "Developed application features using Next.js, TypeScript, Node.js, Express.js, and MongoDB, working across both frontend and backend functionality."
      },
      {
        icon: Server,
        title: "REST API & Database Development",
        desc: "Designed and developed RESTful APIs, database schemas, and CRUD operations using Express.js, MongoDB, and Mongoose."
      },
      {
        icon: ShieldCheck,
        title: "Authentication & Authorization",
        desc: "Implemented JWT-based authentication with access and refresh tokens, Google OAuth, and role-based access control for protected application features."
      },
      {
        icon: Zap,
        title: "Third-Party Integrations",
        desc: "Integrated Cloudinary for media management, Stripe for payment processing, and n8n for workflow automation."
      },
      {
        icon: Mail,
        title: "Email Automation & Background Workflows",
        desc: "Built automated email workflows and scheduled background tasks using n8n, separating workflow processing from the application's core backend logic."
      },
      {
        icon: GitBranch,
        title: "Development Workflow",
        desc: "Worked under the mentorship of experienced developers and used Git and GitHub for source control and version management throughout development."
      }
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Google OAuth", "Cloudinary", "Stripe", "n8n", "Git", "GitHub"]
  },
];

const ExperienceTimeline = () => {
  return (
    <div className="mt-16 max-w-5xl mx-auto px-4">
      <div className="text-center mb-12">
        <h3 className="text-2xl md:text-4xl font-extrabold text-[#F1F3F5]">
          Experience
        </h3>
        <p className="text-[#8B93A1] text-sm md:text-base mt-2">
          Hands-on industry experience building web applications, backend APIs, and software development workflows.
        </p>
      </div>

      <div className="relative border-l-2 border-[#202632] ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
        {experienceData.map((exp, index) => {
          const NodeIcon = exp.nodeIcon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <span className="absolute -left-[31px] md:-left-[47px] top-0 bg-[#7C6CFF] text-white p-2.5 rounded-full shadow-lg ring-8 ring-[#080B12] group-hover:scale-110 transition-transform">
                <NodeIcon size={20} />
              </span>

              {/* Main Content Card */}
              <div className="bg-[#10141D] border border-[#202632] rounded-2xl p-6 md:p-8 shadow-2xl hover:border-[#7C6CFF]/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[#202632] pb-4 mb-5">
                  <div>
                    <h4 className="text-xl md:text-2xl font-bold text-[#F1F3F5] flex items-center gap-2">
                      {exp.role}
                    </h4>
                    <p className="text-base font-semibold text-[#7C6CFF] flex items-center gap-2 mt-1">
                      <Building2 size={16} className="text-[#7C6CFF]" />
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-[#8B93A1] font-medium">
                    <span className="inline-flex items-center gap-1 bg-[#080B12] border border-[#202632] px-3 py-1 rounded-full text-[#F1F3F5] font-semibold">
                      <Calendar size={14} /> {exp.period}
                    </span>
                    <span className="bg-[#080B12] text-[#F1F3F5] border border-[#202632] px-3 py-1 rounded-full font-semibold">
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary Statement */}
                <p className="text-sm md:text-base text-[#8B93A1] mb-6 leading-relaxed font-medium">
                  {exp.impactMetric}
                </p>

                {/* Grid of Accomplishments / Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {exp.highlights.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={i}
                        className="p-4 bg-[#080B12] rounded-xl border border-[#202632] hover:border-[#7C6CFF]/30 transition flex items-start gap-3.5"
                      >
                        <div className="p-2 bg-[#7C6CFF]/10 text-[#7C6CFF] rounded-lg shrink-0">
                          <Icon size={18} />
                        </div>
                        <div>
                          <h5 className="font-semibold text-[#F1F3F5] text-sm md:text-base flex items-center gap-1">
                            {item.title}
                          </h5>
                          <p className="text-xs md:text-sm text-[#8B93A1] leading-relaxed mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#202632]">
                  <span className="text-xs font-semibold text-[#8B93A1] uppercase mr-1">Skills & Tools:</span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-[#080B12] text-[#F1F3F5] text-xs font-mono rounded-lg border border-[#202632]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
