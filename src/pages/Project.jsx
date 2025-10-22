import React, { useEffect, useState } from "react";
import { projectData } from "../data/projectData";
import "./project.css";
import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  useEffect(() => {
    const found  = projectData.find((p) => p.id === Number(id));
    setProject(found);
  },[id]);

  if (!project) {
    return (
      <h2 className="text-center text-red-500 mt-20">Project not found!</h2>
    );
  }
 

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>{project.title}</h1>
          <p className="hero-tagline">{project.tagline}</p>
          <div className="hero-buttons">
            <a href={project.liveDemo} className="btn btn-primary">
              Live Demo
            </a>
            <a href={project.github} className="btn btn-secondary">
              GitHub Repo
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Project Overview</h2>
          <p className="section-content">{project.overview}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Tech Stack</h2>
          {Object.entries(project.techStack).map(([category, tools]) => (
            <div key={project.category} className="tech-category">
              <div className="tech-category-title">{category}</div>
              <div className="tech-badges">
                {tools.map((tool) => (
                  <span key={tool} className="badge">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            {project.features.map(({ icon, title, desc }) => (
              <div key={title} className="feature-card">
                <div className="feature-icon">{icon}</div>
                <div className="feature-title">{title}</div>
                <p className="feature-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Learning Journey</h2>
          <p className="section-content">{project.learningJourney}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Challenges & Solutions</h2>
          {project.challenges.map(({ title, problem, solution }) => (
            <div key={title} className="challenge-card">
              <div className="challenge-title">Challenge: {title}</div>
              <p className="challenge-text">{problem}</p>
              <div className="solution">
                <strong>Solution:</strong> {solution}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Implementation Highlights</h2>
          <div className="screenshots">
            {project.screenshots.map(({ src, caption }, idx) => (
              <div key={idx} className="screenshot-item">
                <img src={src} alt={caption} className="screenshot-img" />
                <div className="screenshot-caption">{caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Outcome & Takeaways</h2>
          <div className="outcome-box">
            <h3>What I Learned</h3>
            <p>{project.outcome.learned}</p>
            <br />
            <p>{project.outcome.improvements}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
