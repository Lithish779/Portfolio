import React from 'react';
import { 
  FaReact, FaNodeJs, FaBootstrap, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub 
} from 'react-icons/fa';
import { 
  SiExpress, SiMongodb, SiTailwindcss, SiMysql, SiFlutter, SiDart, 
  SiCplusplus, SiC, SiVercel, SiRender, SiPostman 
} from 'react-icons/si';
import './SkillsSection.css';

const SkillsSection = () => {
  const techSkills = [
    { name: 'React', icon: <FaReact color="#61DAFB" /> },
    { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
    { name: 'Express.js', icon: <SiExpress color="var(--text-primary)" /> },
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
    { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> },
    { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
    { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
    { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
    { name: 'Flutter', icon: <SiFlutter color="#02569B" /> },
    { name: 'Dart', icon: <SiDart color="#0175C2" /> },
    { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
    { name: 'C', icon: <SiC color="#A8B9CC" /> },
    { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
    { name: 'GitHub', icon: <FaGithub color="var(--text-primary)" /> },
    { name: 'Vercel', icon: <SiVercel color="var(--text-primary)" /> },
    { name: 'Render', icon: <SiRender color="var(--text-primary)" /> },
    { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
  ];

  return (
    <section id="skills" className="skills-section section">
      <h2 className="section-title">Skills</h2>
      <h3 className="section-subtitle">I have experience with these technologies</h3>
      
      <div className="skills-intro glass">
        <p>
          My core expertise lies in the MERN stack — React.js, Node.js, Express.js, and MongoDB — which I use to build full-stack, production-deployed applications. I've integrated third-party services including Google Gemini AI, Razorpay, and Cloudinary into live projects. Beyond web, I build cross-platform mobile apps using Flutter and Dart, and my problem-solving skills are backed by 150+ DSA problems solved in C and C++.
        </p>
      </div>

      <div className="tech-icons-grid">
        {techSkills.map((tech, index) => (
          <div key={index} className="tech-icon-card glass">
            <div className="tech-icon-wrapper">
              {tech.icon}
            </div>
            <span className="tech-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
