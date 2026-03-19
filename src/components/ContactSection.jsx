import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section section">
      <h2 className="section-title">Let's work together</h2>
      <h3 className="section-subtitle">Get In Touch</h3>
      
      <div className="contact-container glass">
        <p className="contact-intro">
          Have a project in mind or want to collaborate? I'm always open to new opportunities — feel free to reach out.
        </p>

        <div className="contact-details">
          <a href="mailto:lithishkumar779@gmail.com" className="contact-item">
            <div className="contact-icon"><Mail size={24} /></div>
            <span>lithishkumar779@gmail.com</span>
          </a>
          
          <a href="tel:+917013458576" className="contact-item">
            <div className="contact-icon"><Phone size={24} /></div>
            <span>+91-7013458576</span>
          </a>
          
          <a href="https://linkedin.com/in/lithishkumar779/" target="_blank" rel="noopener noreferrer" className="contact-item">
            <div className="contact-icon"><Linkedin size={24} /></div>
            <span>linkedin.com/in/lithishkumar779/</span>
          </a>
          
          <a href="https://github.com/Lithish779" target="_blank" rel="noopener noreferrer" className="contact-item">
            <div className="contact-icon"><Github size={24} /></div>
            <span>github.com/Lithish779</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
