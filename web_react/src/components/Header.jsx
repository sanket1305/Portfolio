
import React from "react";
import "../css/components/header.css";
import { useTheme } from "../App";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="header" id="header">
      <div className="container">
        <nav className="navbar">
          <div className="logo">
            <a href="#home">Sanket</a>
          </div>
          <ul className="nav-menu">
            <li className="nav-item"><a href="#home" className="nav-link active">Home</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#resume" className="nav-link">Resume</a></li>
            <li className="nav-item"><a href="#experience" className="nav-link">Experience</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
            <li className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle">Portfolio <i className="fas fa-chevron-down"></i></a>
              <ul className="dropdown-menu">
                <li><a href="#publications" className="dropdown-item">Publications</a></li>
                <li><a href="#certifications" className="dropdown-item">Certifications</a></li>
                <li><a href="#education" className="dropdown-item">Education</a></li>
                <li><a href="#achievements" className="dropdown-item">Achievements</a></li>
              </ul>
            </li>
            <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
          <div className="theme-toggle">
            <button id="themeToggle" aria-label="Toggle dark/light theme" onClick={toggleTheme}>
              <i className={`fas fa-moon${theme === 'dark' ? '' : ' inactive'}`}></i>
              <i className={`fas fa-sun${theme === 'light' ? '' : ' inactive'}`}></i>
            </button>
          </div>
          <button className="nav-toggle" id="navToggle" aria-label="Toggle navigation menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
