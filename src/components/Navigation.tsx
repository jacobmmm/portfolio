import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navigation.css";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <Link to="/" className="nav-logo">
          Jacob Mammen
        </Link>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/skills"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </Link>
          <Link
            to="/experience"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="nav-link"
            onClick={() => setIsOpen(false)}
          >
            Contact
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
