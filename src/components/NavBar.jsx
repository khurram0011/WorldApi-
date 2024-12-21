import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Fetch Country Data Demo App</h2>
      <ul className="nav-links">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active-link' : ''}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'active-link' : ''}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/country" 
            className={({ isActive }) => isActive ? 'active-link' : ''}
          >
            Country
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'active-link' : ''}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
