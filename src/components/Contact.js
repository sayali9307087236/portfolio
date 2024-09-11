import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <a href="mailto:sayalisapkal2308@gmail.com" className="contact-item">
          <FaEnvelope size={24} />
          <span>Email: sayalisapkal2308@gmail.com</span>
        </a>
        <a href="https://www.linkedin.com/in/sayali-sapkal-946688245" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FaLinkedin size={24} />
          <span>LinkedIn: www.linkedin.com/in/sayali-sapkal-946688245</span>
        </a>
        <a href="https://github.com/sayali9307087236" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FaGithub size={24} />
          <span>GitHub: github.com/your-github-username</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
