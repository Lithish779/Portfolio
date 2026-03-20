import React from 'react';
import { Link } from 'react-scroll';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section section">
      <div className="hero-content-wrapper">
        <div className="hero-text-content">
          <h1 className="hero-title">Lithish Kumar</h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          
          <p className="hero-description">
            Passionate about building intelligent, scalable web applications powered by the MERN stack and AI integrations. Experienced in developing end-to-end solutions — from responsive UIs to robust backend APIs — with a focus on performance, clean code, and real-world impact.
          </p>

          <div className="hero-actions">
            <Link to="contact" smooth={true} duration={500} offset={-80} className="btn btn-primary">
              Contact Me
            </Link>
            <Link to="projects" smooth={true} duration={500} offset={-80} className="btn btn-outline">
              View Work
            </Link>
          </div>
        </div>

        <div className="hero-image-container">
          <img src="/profile.jpeg" alt="Lithish Kumar" className="hero-profile-pic" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
