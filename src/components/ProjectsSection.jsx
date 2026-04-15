import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'FreelanceCo — Scalable Freelancing Platform',
      description: 'A robust MERN + Redis backend supporting real-time chat, escrow payments, and multi-role workflows. Optimized for performance with Redis caching and MongoDB indexing, reducing latency and query times by over 40-60%. Features secure JWT auth with RBAC and AI-powered service matching.',
      image: '/freelanceco.png',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Firebase', 'Razorpay', 'Gemini AI', 'Cloudinary', 'Brevo'],
      links: {
        github: 'https://github.com/Lithish779/FreelanceCo',
        live: 'https://freelance-co.vercel.app/'
      }
    },
    {
      title: 'MarketZen — AI-Powered E-commerce',
      description: 'A full-stack e-commerce platform simulating a modern online marketplace. Features secure JWT authentication, a responsive React frontend, and a robust Node.js backend. Includes advanced implementations like persistent carts, concurrent stock validation during checkout, and order tracking.',
      image: '/image.png',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Gemini AI', 'Tailwind CSS'],
      links: {
        github: 'https://github.com/Lithish779/MarketZen-AI-Powered-Ecommerce',
        live: 'https://ecommerce-taupe-omega-29.vercel.app/'
      }
    },
    {
      title: 'Patient Monitoring Dashboard',
      description: 'A web-based dashboard for managing patient records and health data, built with PHP and MySQL. Includes REST-style backend endpoints for record creation and retrieval, a structured relational database schema, and responsive UI layouts. Achieved ~25% reduction in invalid data entries through schema optimization.',
      image: '/patient.png',
      tags: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
      links: {
        github: 'https://github.com/Lithish779/Patient-monitoring-Dashboard'
      }
    }
  ];

  const trainingInternProject = {
    title: 'LPU Touch Replica — Flutter Mobile App',
    description: 'A cross-platform mobile application built during my internship at Lovely Professional University. Implements modular UI components, structured navigation, and Firebase Authentication for secure login. Improved the deployment pipeline efficiency by 15%.',
    image: 'https://images.ctfassets.net/23aumh6u8s0i/4TsG2mTRrLFhlQ9G1m19sC/4c9f98d56165a0bdd71cbe7b9c2e2484/flutter',
    tags: ['Flutter', 'Dart', 'Firebase Auth', 'Firebase Realtime Database'],
    links: {
      github: 'https://github.com/Lithish779/Lpu_touch_replica'
    }
  };

  const tagImages = {
    'React': 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
    'Node.js': 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white',
    'Express': 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white',
    'MongoDB': 'https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white',
    'Redis': 'https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white',
    'Firebase': 'https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black',
    'Razorpay': 'https://img.shields.io/badge/Razorpay-2C71FF?style=for-the-badge&logo=razorpay&logoColor=white',
    'Gemini AI': 'https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=google-gemini&logoColor=white',
    'Cloudinary': 'https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white',
    'Brevo': 'https://img.shields.io/badge/Brevo-000000?style=for-the-badge&logo=brevo&logoColor=white',
    'Tailwind CSS': 'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white',
    'HTML5': 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
    'CSS3': 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
    'JavaScript': 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
    'PHP': 'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white',
    'MySQL': 'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white',
    'Bootstrap': 'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white',
    'Flutter': 'https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white',
    'Dart': 'https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white',
    'Firebase Auth': 'https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black',
    'Firebase Realtime Database': 'https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black'
  };

  const ProjectCard = ({ project }) => (
    <div className="project-card glass">
      {project.image ? (
        <a href={project.links.live || project.links.github} target="_blank" rel="noopener noreferrer" className="project-image-container">
          <img src={project.image} alt={project.title} className="project-image" />
        </a>
      ) : (
        <div className="project-image-placeholder">
          <span className="project-image-initials">
            {project.title.substring(0, 2).toUpperCase()}
          </span>
        </div>
      )}
      
      <div className="project-content">
        <h4 className="project-title">
          <a href={project.links.live || project.links.github} target="_blank" rel="noopener noreferrer" className="project-title-link">
            {project.title}
          </a>
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
  );

  return (
    <section id="projects" className="projects-section section">
      <h2 className="section-title">Some of My Work</h2>
      <h3 className="section-subtitle">Projects</h3>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div style={{ marginTop: '4rem' }}>
        <h3 className="section-subtitle">Training Intern</h3>
        <div className="projects-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', justifyContent: 'center' }}>
          <ProjectCard project={trainingInternProject} />
        </div>
      </div>
    </section>


  );
};

export default ProjectsSection;
