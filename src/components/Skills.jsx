import React from "react";

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
      // { icon: BootstrapIcon, name: "Bootstrap" },
      // { icon: TypeScriptIcon, name: "TypeScript" },
      // { icon: NextJsIcon, name: "Next.js" },
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

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-5 sm:px-10 md:px-20 bg-[#f8f8f8]"
    >
      <h2 className="section-title text-3xl sm:text-4xl md:text-5xl text-center mb-16 font-bold">
        My <span className="text-[#333]">Skills</span>
      </h2>

      <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1200px] mx-auto">
        {skillsData.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            <h3 className="text-2xl sm:text-3xl mb-6 sm:mb-8 text-gray-600 text-center">
              {item.title}
            </h3>
            <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-8 justify-items-center">
              {item.skills.map((skill, i) => (
                <div
                  key={i}
                  className="text-center transition-transform hover:scale-110"
                >
                  {typeof skill.icon === "function" ? (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2 rounded-full bg-[#f0f0f0] flex items-center justify-center overflow-hidden transition-transform duration-300 hover:scale-110">
                      <skill.icon className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
                    </div>
                  ) : (
                    skill.icon
                  )}
                  <p className="text-sm sm:text-base text-gray-600">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
