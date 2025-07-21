import React from "react";
import "../css/Skills.css";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Sass",
        "Bootstrap",
        "Material-UI",
        "Tailwind CSS",
        "Next.js",
      ],
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js",
        "Express.js",
        "Python",
        "Django",
        "Flask",
        "REST APIs",
        "GraphQL",
        "Microservices",
        "Authentication",
      ],
    },
    {
      title: "Database & Cloud",
      skills: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "AWS",
        "Azure",
        "Docker",
        "Kubernetes",
        "Firebase",
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Webpack",
        "Jest",
        "Cypress",
        "Figma",
        "Postman",
        "Linux",
        "Agile",
      ],
    },
  ];

  return (
    <section className="skills-container">
      <div className="skills-content">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
