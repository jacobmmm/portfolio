import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../Jacob-portfolio-background.jpg";
import "../css/Home.css";

const Home: React.FC = () => {
  return (
    <section
      className="hero-container"
      style={
        {
          "--background-image": `url(${backgroundImage})`,
        } as React.CSSProperties
      }
    >
      <div className="hero-content">
        <h1 className="hero-title">Jacob Mammen</h1>
        <h2 className="hero-subtitle">Full Stack Developer</h2>
        <p className="hero-description">
          Passionate about creating innovative digital solutions with modern
          technologies. Experienced in building scalable web applications and
          delivering exceptional user experiences.
        </p>
        <div className="hero-buttons">
          <Link to="/projects" className="hero-button primary">
            View My Work
          </Link>
          <Link to="/contact" className="hero-button">
            Get In Touch
          </Link>
        </div>
      </div>
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Home;
