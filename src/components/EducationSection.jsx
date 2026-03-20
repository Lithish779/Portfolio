import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import './EducationSection.css';

const EducationSection = () => {
  const educationData = [
    {
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      period: "Aug '23 - Present",
      details: ""
    },
    {
      institution: "Sri Siddhartha Junior College",
      location: "Madanapalle, Andhra Pradesh",
      degree: "Intermediate (PCM)",
      period: "Apr '21 - Mar '23",
      details: "Percentage: 94.4"
    },
    {
      institution: "S.P.V.B High School",
      location: "Mulakalacheruvu, Andhra Pradesh",
      degree: "Matriculation",
      period: "Apr '20 - Mar '21",
      details: "Percentage: 99"
    }
  ];

  return (
    <section id="education" className="education-section section">
      <h2 className="section-title">Academic Journey</h2>
      <h3 className="section-subtitle">Education</h3>

      <div className="education-container">
        {educationData.map((item, index) => (
          <div key={index} className="education-card glass">
            <div className="education-icon-wrapper">
              <GraduationCap size={24} />
            </div>
            <div className="education-content">
              <div className="education-header">
                <h4 className="institution">{item.institution}</h4>
                <span className="period">
                  <Calendar size={14} /> {item.period}
                </span>
              </div>
              <p className="degree">{item.degree}</p>
              <div className="education-footer">
                <span className="location">
                  <MapPin size={14} /> {item.location}
                </span>
                {item.details && <span className="details">{item.details}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
