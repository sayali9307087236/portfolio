import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Background from './Background';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Background />
      <div className="hero">
        <h2 className="hero-title">Hi, I'm Sayali Sapkal</h2>
        <p className="hero-description">
          Welcome to my portfolio. I am a passionate web developer specializing in creating interactive, responsive, and visually appealing web applications using modern front-end technologies like React.js. With experience in building real-world projects and solving complex problems, I aim to deliver clean and user-focused designs. Explore my work and get in touch to collaborate!
        </p>
        {/* Use Link to navigate to /projects */}
        <Link to="/projects" className="cta-button">View My Projects</Link>
      </div>
    </div>
  );
};

export default Home;
