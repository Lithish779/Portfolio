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
  const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
      { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
      { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Express.js", icon: <SiExpress color="var(--text-primary)" /> }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> }
    ]
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: <SiC color="#A8B9CC" /> },
      { name: "C++", icon: <SiCplusplus color="#00599C" /> },
      { name: "Dart", icon: <SiDart color="#0175C2" /> }
    ]
  },
  
  {
    title: "Dev Tools & Deployment",
    skills: [
      { name: "Git", icon: <FaGitAlt color="#F05032" /> },
      { name: "GitHub", icon: <FaGithub color="var(--text-primary)" /> },
      { name: "Vercel", icon: <SiVercel color="var(--text-primary)" /> },
      { name: "Render", icon: <SiRender color="var(--text-primary)" /> }
    ]
  }
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

      <div className="skills-categories-container">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="skill-category-group">
            <div className="category-header">
              <div className="category-dot"></div>
              <span className="category-title">{category.title}</span>
              <div className="category-line"></div>
            </div>
            
            <div className="tech-icons-row centered">
              {category.skills.map((tech, index) => (
                <div key={index} className="tech-icon-card glass">
                  <div className="tech-icon-wrapper">
                    {tech.icon}
                  </div>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
