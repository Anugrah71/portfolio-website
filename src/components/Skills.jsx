import React from "react";
import "./Skills.css";
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
        <div className="skills-container">
          {skillsData.map((item) => (
            <div className="skill-category">
              <h3 className="category-title">{item.title}</h3>
              <div className="skills-grid">
                {item.skills.map((skill) => (
                  <div className="skill-item">
                    {typeof skill.icon === "function" ? (
                      <skill.icon className="skill-icon" />
                    ) : (
                      skill.icon
                    )}{" "}
                    <p className="skill-name">{skill.name}</p>
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
