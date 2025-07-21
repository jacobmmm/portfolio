import React from "react";
import "../css/Projects.css";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      icon: "🛒",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      tech: ["React", "TypeScript", "Socket.io", "Express", "PostgreSQL"],
      icon: "📋",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "A responsive weather dashboard with location-based forecasts and interactive charts.",
      tech: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      icon: "🌤️",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Media App",
      description:
        "A social media platform with real-time messaging, photo sharing, and friend connections.",
      tech: ["React Native", "Firebase", "Redux", "Expo"],
      icon: "📱",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "A business analytics dashboard with interactive data visualizations and reporting features.",
      tech: ["React", "D3.js", "Python", "Django", "PostgreSQL"],
      icon: "📊",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Booking System",
      description:
        "An online booking system for appointments with calendar integration and email notifications.",
      tech: ["Next.js", "Prisma", "MySQL", "NextAuth", "Tailwind"],
      icon: "📅",
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section className="projects-container">
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
                  <a
                    href={project.githubUrl}
                    className="project-link secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
