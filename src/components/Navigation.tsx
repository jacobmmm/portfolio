import React, { useState } from "react";
import "../css/Navigation.css";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <button onClick={() => scrollToSection("home")} className="nav-logo">
          Jacob Mammen Jacob
        </button>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <button onClick={() => scrollToSection("home")} className="nav-link">
            HOME
          </button>
          <button onClick={() => scrollToSection("about")} className="nav-link">
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className="nav-link"
          >
            SKILLS
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="nav-link"
          >
            EXPERIENCE
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className="nav-link"
          >
            EDUCATION
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="nav-link"
          >
            PORTFOLIO
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="nav-link"
          >
            CONTACT
          </button>
        </div>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
