import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          Jacob Mammen Jacob
        </Link>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            HOME
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            ABOUT
          </Link>
          <Link
            to="/skills"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            SKILLS
          </Link>
          <Link
            to="/experience"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            EXPERIENCE
          </Link>
          <Link
            to="/education"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            EDUCATION
          </Link>
          <Link
            to="/projects"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            PORTFOLIO
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </Link>
        </div>
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
