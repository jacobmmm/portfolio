import React from "react";
import "../css/About.css";
import profileImage from "../Jacob-portfolio-background.jpg";

const About: React.FC = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Full Stack Engineer with robust experience in building
            cloud-deployed web applications using React, TypeScript, Node.js,
            and foundational experience in C# and .NET Core Python Flask.
            Skilled in RESTful API development, SQL and NoSQL databases, and
            deploying scalable backend services on AWS and Google Cloud.
            Demonstrates a strong understanding of testing, CI/CD, and agile
            delivery processes. Proven ability to work collaboratively in Agile
            teams and communicate effectively with stakeholders.
          </p>

          {/* <div className="stats">
            <div className="stat">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>20+</h3>
              <p>Technologies</p>
            </div>
          </div>*/}
        </div>
        <div className="about-image">
          <img src={profileImage} alt="Jacob Mammen" />
        </div>
      </div>
    </section>
  );
};

export default About;
