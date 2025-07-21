import React from "react";
import "../css/Skills.css";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React.js (16+)",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Material UI",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Microservices Architecture",
        "ASP.NET Core (C#)",
        "Flask (Python)",
      ],
    },
    {
      title: "Databases",
      skills: [
        "MySQL",
        "MongoDB",
        "SQL Server",
        "Sequelize ORM",
        "Database Design",
        "Data Modelling",
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        "Google Cloud Functions",
        "AWS (Lambda, S3, API Gateway)",
        "CI/CD Pipelines",
        "GitHub Actions",
        "Docker",
      ],
    },
    {
      title: "Monitoring & Tools",
      skills: ["JIRA", "Postman"],
    },
    {
      title: "Practices",
      skills: [
        "Agile Methodologies",
        "Code Reviews",
        "Regression Testing",
        "Cloud Deployment",
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
