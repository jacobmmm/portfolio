import React, { useState } from "react";
import "../css/Projects.css";

const Projects: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProject, setCurrentProject] = useState<any>(null);

  const projects = [
    {
      title: "Asset Finance Platform",
      description:
        "Built fullstack React/Node.js app with MongoDB and login/session handling.",
      tech: ["React", "NodeJS", "ExpressJS", "MongoDB"],
      icon: "💰",
      liveUrl: "#",
      frontendUrl:
        "https://github.com/jacobmmm/asset-finance-specialist-front-end/tree/main/asset-finance-specialist-front-end",
      backendUrl:
        "https://github.com/jacobmmm/asset-finance-specialist-backend",
    },
  ];

  const handleGitHubClick = (project: any) => {
    setCurrentProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentProject(null);
  };

  return (
    <section id="projects" className="projects-container">
      <div className="projects-content">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">{project.icon}</div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-item">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.liveUrl}
                    className="project-link primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <button
                    onClick={() => handleGitHubClick(project)}
                    className="project-link secondary github-button"
                  >
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub Options Modal */}
      {showModal && currentProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{currentProject.title}</h3>
              <button className="close-button" onClick={closeModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              <p>Choose which repository to view:</p>
              <div className="modal-buttons">
                <a
                  href={currentProject.frontendUrl}
                  className="modal-link primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeModal}
                >
                  Frontend Code
                </a>
                <a
                  href={currentProject.backendUrl}
                  className="modal-link secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeModal}
                >
                  Backend Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
