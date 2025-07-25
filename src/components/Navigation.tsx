import React, { useState, useEffect } from "react";
import "../css/Navigation.css";

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    console.log("Active section changed:", activeSection);
  }, [activeSection]);

  useEffect(() => {
    const sections = [
      "home",
      "about",
      "skills",
      "experience",
      "education",
      "projects",
      "contact",
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        console.log(
          "Intersection entries:",
          entries.map((entry) => ({
            id: entry.target.id,
            isIntersecting: entry.isIntersecting,
            intersectionRatio: entry.intersectionRatio,
          }))
        );

        // Find the section with the highest intersection ratio
        let mostVisibleSection = null;
        let highestRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > highestRatio) {
            highestRatio = entry.intersectionRatio;
            mostVisibleSection = entry.target.id;
          }
        });

        if (mostVisibleSection) {
          console.log("Setting active section to:", mostVisibleSection);
          setActiveSection(mostVisibleSection);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5], // Multiple thresholds for better detection
        rootMargin: "-10% 0px -10% 0px", // Much more lenient margins
      }
    );

    // Add a small delay to ensure sections are mounted
    const setupObserver = () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        console.log(
          `Checking section ${sectionId}:`,
          element ? "FOUND" : "NOT FOUND"
        );
        if (element) {
          observer.observe(element);
          console.log(`Observing section: ${sectionId}`);
        }
      });
    };

    // Setup observer immediately
    setupObserver();

    // Also try again after a short delay to catch any late-mounting sections
    const timeoutId = setTimeout(setupObserver, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const getNavLinkClass = (sectionId: string) => {
    return `nav-link ${activeSection === sectionId ? "active" : ""}`;
  };

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <button onClick={() => scrollToSection("home")} className="nav-logo">
          Jacob Mammen Jacob
        </button>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <button
            onClick={() => scrollToSection("home")}
            className={getNavLinkClass("home")}
          >
            HOME
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={getNavLinkClass("about")}
          >
            ABOUT
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className={getNavLinkClass("skills")}
          >
            SKILLS
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className={getNavLinkClass("experience")}
          >
            EXPERIENCE
          </button>
          <button
            onClick={() => scrollToSection("education")}
            className={getNavLinkClass("education")}
          >
            EDUCATION
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={getNavLinkClass("projects")}
          >
            PORTFOLIO
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={getNavLinkClass("contact")}
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
