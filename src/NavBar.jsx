import React, { useState } from 'react';
import Logo from "../public/Pics/Logo.png";
import "./App.css";
import { Link } from 'react-router-dom';

const NavBar = () => {
  // State to track whether the menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav>
      {/* Logo */}
      <div className="logo">
        <img src={Logo} alt="Logo" className="LogoImg" />
      </div>

      {/* Navigation Menu */}
      <ul className={isMenuOpen ? 'menu-open' : ''}>
        <Link to="/" className="link">
          <li>Home</li>
        </Link>
        <Link to="/about" className="link">
          <li>About</li>
        </Link>
        <Link to="/skills" className="link">
          <li>Skills</li>
        </Link>
        <Link to="/resume" className="link">
          <li>Resume</li>
        </Link>
        <Link to="/contact" className="link">
          <li>Contact</li>
        </Link>
      </ul>

      {/* Hamburger icon */}
      <div className="bars" onClick={toggleMenu}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </nav>
  );
};

export default NavBar;
