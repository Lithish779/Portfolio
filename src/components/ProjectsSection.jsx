import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'MarketZen',
      description: 'A full-stack e-commerce platform simulating a modern online marketplace. Features secure JWT authentication, a responsive React frontend, and a robust Node.js backend. Includes advanced implementations like persistent carts, concurrent stock validation during checkout, and order tracking.',
      image: '/image.png', // Added image property
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini AI', 'Tailwind CSS'], // Updated tags
      links: {
        github: 'https://github.com/Lithish779/MarketZen-AI-Powered-Ecommerce',
        live: 'https://ecommerce-taupe-omega-29.vercel.app/'
      }
    },
    {
      title: 'Patient Monitoring Dashboard',
      description: 'A web-based dashboard for managing patient records and health data, built with PHP and MySQL. Includes REST-style backend endpoints for record creation and retrieval, a structured relational database schema, and responsive UI layouts. Achieved ~25% reduction in invalid data entries through schema optimization and validation.',
      image: '/patient.png',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'PHP', 'MySQL'],
      links: {
        github: 'https://github.com/Lithish779/Patient-monitoring-Dashboard'
      }
    },
    {
      title: 'LPU Touch Replica — Flutter Mobile App',
      description: 'A cross-platform mobile application built during my internship at Lovely Professional University. Implements modular UI components, structured navigation, and Firebase Authentication for secure login. Improved the deployment pipeline efficiency by 15% through streamlined remote team workflows.',
      image: 'https://images.ctfassets.net/23aumh6u8s0i/4TsG2mTRrLFhlQ9G1m19sC/4c9f98d56165a0bdd71cbe7b9c2e2484/flutter',
      tags: ['Flutter', 'Dart', 'Firebase Auth', 'Firebase Realtime Database'],
      links: {
        github: 'https://github.com/Lithish779/Lpu_touch_replica'
      }
    }
  ];

  const tagImages = {
    'React': 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
    'Node.js': 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white',
    'Express': 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white',
    'MongoDB': 'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white',
    'Gemini AI': 'https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=google-gemini&logoColor=white',
    'Tailwind CSS': 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white',
    'HTML5': 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
    'CSS3': 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
    'JavaScript': 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
    'Bootstrap': 'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white',
    'PHP': 'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white',
    'MySQL': 'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white',
    'Flutter': 'https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white',
    'Dart': 'https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white',
    'Firebase Auth': 'https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black',
    'Firebase Realtime Database': 'https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black'
  };

  return (
    <section id="projects" className="projects-section section">
      <h2 className="section-title">Some of My Work</h2>
      <h3 className="section-subtitle">Projects</h3>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card glass">
            {project.image ? (
              project.links && project.links.live && project.links.live !== '#' ? (
                <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                </a>
              ) : (
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                </div>
              )
            ) : (
              <div className="project-image-placeholder">
                <span className="project-image-initials">
                  {project.title.split(' — ')[0].substring(0, 2).toUpperCase()}
                </span>
              </div>
            )}
            
            <div className="project-content">
              <h4 className="project-title">
                {project.links && project.links.live && project.links.live !== '#' ? (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="project-title-link">
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h4>
              <p className="project-desc">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  tagImages[tag] ? (
                    <img key={i} src={tagImages[tag]} alt={tag} className="project-badge" />
                  ) : (
                    <span key={i} className="project-tag">{tag}</span>
                  )
                ))}
              </div>
              
              <div className="project-links">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline project-link-btn">
                    <Github size={18} /> GitHub
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary project-link-btn">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
