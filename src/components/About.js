import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm Sayali Sapkal, a passionate and skilled web developer with a solid foundation in front-end technologies and a keen interest in creating exceptional user experiences. I hold a Bachelor of Technology in Computer Science and Engineering from Sharad Institute Of Technology College Of Engineering, where I graduated with a GPA of 8.0.
          <br/><br/>
          My technical expertise spans a variety of languages and frameworks, including React.js, JavaScript, HTML, CSS, C, Core Java Programming, and Python. I am proficient in utilizing these technologies to build dynamic, responsive, and user-friendly web applications.
          <br/><br/>
          In my role as an Associate Engineer at Unitedlex in Bangalore, I focused on Data Breach Analysis, specializing in the identification and capture of sensitive information within electronically stored documents. This experience sharpened my analytical skills and reinforced my commitment to maintaining high-quality standards in data review processes.
          <br/><br/>
          I possess strong project management abilities, decision-making skills, and effective communication. I am fluent in English, Hindi, and Marathi, which enables me to collaborate effectively in diverse teams.
          <br/><br/>
          My drive for continuous learning and staying updated with the latest trends in web development fuels my passion for creating innovative solutions. I am dedicated to delivering high-quality user experiences and look forward to exploring new opportunities in the ever-evolving field of web development.
        </p>
      </section>
      
      <section className="skills-list-container">
        <h3>My Skills Include:</h3>
        <ul className="skills-list">
          <li className="animate__animated animate__fadeInUp">React.js & JavaScript</li>
          <li className="animate__animated animate__fadeInUp">Front-end Development</li>
          <li className="animate__animated animate__fadeInUp">UI/UX Design</li>
          <li className="animate__animated animate__fadeInUp">Responsive Web Design</li>
          <li className="animate__animated animate__fadeInUp">API Integration</li>
          <li className="animate__animated animate__fadeInUp">HTML</li>
          <li className="animate__animated animate__fadeInUp">CSS</li>
          <li className="animate__animated animate__fadeInUp">C</li>
          <li className="animate__animated animate__fadeInUp">Core Java</li>
          <li className="animate__animated animate__fadeInUp">Python</li>
          <li className="animate__animated animate__fadeInUp">SQL</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
