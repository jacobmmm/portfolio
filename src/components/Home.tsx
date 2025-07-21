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
        <h2 className="hero-greeting">Hello, I'm</h2>
        <h1 className="hero-title">Jacob Mammen Jacob</h1>
        <h3 className="hero-subtitle">AND THIS IS MY RESUME</h3>
      </div>
      <div className="scroll-indicator">
        <span className="scroll-text">Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Home;
