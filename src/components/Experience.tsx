import React from "react";
import "../css/Experience.css";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Solutions",
      date: "2022 - Present",
      description:
        "Leading development of enterprise web applications using React, Node.js, and cloud technologies.",
      highlights: [
        "Led a team of 5 developers in building scalable web applications",
        "Implemented microservices architecture reducing response time by 40%",
        "Mentored junior developers and conducted code reviews",
      ],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd",
      date: "2020 - 2022",
      description:
        "Developed and maintained multiple client projects using modern web technologies.",
      highlights: [
        "Built responsive web applications serving 10k+ daily active users",
        "Integrated payment gateways and third-party APIs",
        "Optimized application performance improving load times by 60%",
      ],
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      date: "2019 - 2020",
      description:
        "Focused on creating intuitive user interfaces and improving user experience.",
      highlights: [
        "Developed reusable React components library",
        "Collaborated with UX/UI designers to implement pixel-perfect designs",
        "Implemented automated testing reducing bugs by 30%",
      ],
    },
    {
      title: "Computer Science Degree",
      company: "University of Technology",
      date: "2015 - 2019",
      description:
        "Bachelor of Science in Computer Science with focus on Software Engineering.",
      highlights: [
        "Graduated with First Class Honours",
        "Specialized in Web Technologies and Database Systems",
        "Final year project: AI-powered web application",
      ],
    },
  ];

  return (
    <section className="experience-container">
      <h2 className="section-title">Experience & Education</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div
              className={`timeline-content ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <div className="date">{exp.date}</div>
              <p>{exp.description}</p>
              <ul>
                {exp.highlights.map((highlight, highlightIndex) => (
                  <li key={highlightIndex}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
