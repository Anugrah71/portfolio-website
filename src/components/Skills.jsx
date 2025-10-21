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
      { icon: TailwindIcon, name: "TailwindIcon" },
      { icon: BootstrapIcon, name: "Bootstrap" },
      { icon: TypeScriptIcon, name: "TypeScript" },
      { icon: NextJsIcon, name: "Next.js" },
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
    <>
      <section className="skills" style={{ background: "#f8f8f8" }}>
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
        <div
          className=" grid gap-8 max-w-6xl mx-auto max-w-[1200px]"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {skillsData.map((item) => (
            <div className=" bg-[#fff] rounded-xl p-8 shadow-[0_5px_20px_rgba(0,0,0,0.1)] transition-transform  hover:scale-110">
              <h3 className="text-2xl mb-8 text-gray-600">{item.title}</h3>
              <div
                className="grid gap-5"
                style={{
                  gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
                }}
              >
                {item.skills.map((skill) => (
                  <div className=" text-center  transition-transform hover:scale-110">
                    {typeof skill.icon === "function" ? (
                      <skill.icon className=" w-[60px] h-[60px] bg-[#f0f0f0]  mx-auto mb-2 rounded-full p-2 flex items-center justify-center text-4xl transition-transform duration-300" />
                    ) : (
                      skill.icon
                    )}{" "}
                    <p className=" text-sm text-gray-600">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
