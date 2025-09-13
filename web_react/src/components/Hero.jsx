import React from "react";
import "../css/components/hero.css";

const Hero = () => (
  <section className="hero" id="home">
    <div className="container">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Sanket Deshmukh</h1>
          <h2 className="hero-title">Software Development Engineer & Data Enthusiast</h2>
          <p className="hero-description">Building innovative solutions at the intersection of software engineering and data.</p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
            <a href="#projects" className="btn btn-secondary">View My Work</a>
          </div>
          <div className="social-links">
            <a href="https://linkedin.com/in/deshmukh-sanket" className="social-link" aria-label="LinkedIn" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/sanket1305" className="social-link" aria-label="GitHub" target="_blank"><i className="fab fa-github"></i></a>
            <a href="https://leetcode.com/u/deshmukhsanket/" className="social-link" aria-label="HackerRank" target="_blank"><i className="fab fa-hackerrank"></i></a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/assets/images/sanket.jpeg" alt="Sanket" className="profile-image" />
        </div>
      </div>
    </div>
    <div className="scroll-down">
      <a href="#about" aria-label="Scroll down"><i className="fas fa-chevron-down"></i></a>
    </div>
  </section>
);

export default Hero;
