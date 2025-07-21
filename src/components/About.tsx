import React from "react";
import "../css/About.css";

const About: React.FC = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a passionate Full Stack Developer with a strong foundation in
            modern web technologies. I love creating digital experiences that
            are not only functional but also beautiful and intuitive.
          </p>
          <p>
            With expertise in both frontend and backend development, I enjoy
            working on complex problems and turning ideas into reality. I'm
            constantly learning and adapting to new technologies to stay at the
            forefront of web development.
          </p>
          <p>
            When I'm not coding, you can find me exploring new places, trying
            out new technologies, or contributing to open-source projects. I
            believe in continuous learning and sharing knowledge with the
            developer community.
          </p>
          <div className="stats">
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
          </div>
        </div>
        <div className="about-image">
          <img src="/placeholder-avatar.jpg" alt="Jacob Mammen" />
        </div>
      </div>
    </section>
  );
};

export default About;
