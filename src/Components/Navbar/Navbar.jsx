
import React, { useState } from 'react';
import "./Navbar.css";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); 
  };

  return (
    <nav className='navbar'>
      <div className="logo">
        <span className="brand-name">
          Collec <span className="highlight">Tive</span>
        </span>
      </div>
      
      <div className={`nav-links ${isOpen ? 'show' : ''}`}>
        <ul>
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
          <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>Services</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Us</a></li>
          <li><a href="#footer" onClick={(e) => { e.preventDefault(); scrollToSection('footer'); }}>Contacts</a></li>
        </ul>
      </div>
      
      {/* <div className="search-icon">
        <FaSearch />
      </div> */}
      
      <div className="hamburger-menu" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </nav>
  );
};

export default Navbar;