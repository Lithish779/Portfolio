import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section section">
      <h2 className="section-title">About Me</h2>
      <h3 className="section-subtitle">Get to know me</h3>
      
      <div className="about-content glass">
        <div className="about-text">
          <p>
            I'm a Computer Science undergraduate at Lovely Professional University with a strong foundation in full-stack web development and a growing passion for AI-driven applications. I build complete, production-ready projects — from secure authentication systems to AI-powered product discovery platforms — using the MERN stack as my core toolkit.
          </p>
          <p>
            I thrive at the intersection of functionality and user experience, crafting interfaces that are responsive, intuitive, and performant across all devices. Beyond web development, I've explored mobile development through Flutter during my internship at LPU, expanding my cross-platform skillset.
          </p>
          <p>
            I'm a consistent problem solver with 150+ DSA problems solved, a fast learner who holds certifications from IBM, Oracle, and Infosys, and someone who genuinely enjoys taking on projects that push my technical boundaries.
          </p>
        </div>
        <div className="about-action">
          <a href="/resume.pdf" download="Lithish_Kumar_Resume.pdf" className="btn btn-outline">Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
