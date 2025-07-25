import React from "react";
import backgroundImage from "../Jacob-portfolio-background.jpg";
import "../css/Home.css";

const Home: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
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
    </section>
  );
};

export default Home;
