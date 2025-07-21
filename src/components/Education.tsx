import React from "react";
import "../css/Education.css";

const Education: React.FC = () => {
  const educationData = [
    {
      degree: "Master of Information Technology",
      institution: "Monash University, Melbourne",
      date: "Jul 2022 – Aug 2024",
      description:
        "Advanced studies in information technology with focus on modern software development practices and emerging technologies.",
    },
    {
      degree:
        "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "VIT University, India",
      date: "Jul 2011 – Apr 2015",
      description:
        "Comprehensive undergraduate program covering electronics, communication systems, and engineering fundamentals.",
    },
  ];

  return (
    <section className="education-container">
      <h2 className="section-title">Education</h2>
      <div className="education-timeline">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className={`education-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div
              className={`education-content ${
                index % 2 === 0 ? "left" : "right"
              }`}
            >
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <div className="date">{edu.date}</div>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
