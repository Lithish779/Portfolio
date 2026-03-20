import React from 'react';
import { Award, ShieldCheck, CheckCircle, ExternalLink } from 'lucide-react';
import './CertificationsSection.css';

const CertificationsSection = () => {
  const certifications = [
    {
      title: 'IBM Certified Specialist',
      issuer: 'IBM',
      description: 'Professional certification demonstrating proficiency in enterprise software solutions and cloud architecture.',
      icon: <Award size={32} className="cert-icon" />,
      link: '/ibm.png'
    },
    {
      title: 'Oracle Certified Associate',
      issuer: 'Oracle',
      description: 'Credentials verifying foundational knowledge and skills in database management and SQL programming.',
      icon: <ShieldCheck size={32} className="cert-icon" />,
      link: '/oracle.png'
    },
    {
      title: 'Infosys Certified Developer',
      issuer: 'Infosys',
      description: 'Certification validating software engineering fundamentals, algorithm design, and application deployment strategies.',
      icon: <CheckCircle size={32} className="cert-icon" />,
      link: '/infosys.png'
    }
  ];

  return (
    <section id="certifications" className="certifications-section section">
      <h2 className="section-title">Credentials</h2>
      <h3 className="section-subtitle">Certifications & Achievements</h3>

      <div className="certs-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card glass">
            <div className="cert-header">
              {cert.icon}
              <h4 className="cert-title">{cert.title}</h4>
            </div>
            <span className="cert-issuer">{cert.issuer}</span>
            <p className="cert-desc">{cert.description}</p>
            {cert.link && (
              <div className="cert-action">
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                  View Certificate <ExternalLink size={16} />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
