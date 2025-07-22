import React from "react";
import "../css/Experience.css";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Inflamed – Melbourne, Australia",
      date: "Jan 2025 – Present",
      description:
        "Delivering full-stack solutions using modern technologies and improving system performance.",
      highlights: [
        "Delivered front-end features using React (16+), TypeScript, Redux, and Material UI, improving responsiveness by 30%",
        "Developed backend APIs using Google Cloud Functions and TypeScript, improving performance by 20%",
        "Set up development environments by cloning repositories, installing project dependencies, and analyzing package.json scripts reducing onboarding time for new developers by 30%",
        "Implemented server-side rendering with Next.js, reducing initial page load times",
        "Integrated third-party services (Stripe, Slack, Jira) for process automation",
        "Collaborated closely with internal teams in an Agile environment and contributed to bi-weekly sprint releases",
      ],
    },
    {
      title: "Software Engineer",
      company: "SMOVER Technologies – Remote",
      date: "Aug 2024 – Sep 2024",
      description:
        "Focused on React.js development and optimizing development workflows.",
      highlights: [
        "Created and maintained reusable React.js components, speeding up development cycles",
        "Improved load times using Next.js server-side rendering",
        "Participated in sprint planning, reviews, and retrospectives to ensure alignment with client requirements",
        "Configured clean development setups across multiple projects, resolving over 10+ dependency issues and ensuring builds ran smoothly across environments—accelerated development setup for team members by 25%",
      ],
    },
    {
      title: "Software Test Engineer",
      company: "Tech Mahindra – Bangalore, India",
      date: "Oct 2016 – Jul 2022",
      description:
        "Performed comprehensive testing of mobile applications and contributed to QA process improvements.",
      highlights: [
        "Performed manual and automated testing of mobile applications, ensuring cross-device compatibility and user satisfaction",
        "Worked closely with development teams to ensure smooth issue resolution and delivery",
        "Delivered test plans, bug reports, and contributed to improving QA processes",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-container">
      <h2 className="section-title">Professional Experience</h2>
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
