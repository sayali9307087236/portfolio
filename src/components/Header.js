import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import './Header.css'; // Separate file for header styles

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <h1>Portfolio</h1>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" activeClassName="active-link">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
