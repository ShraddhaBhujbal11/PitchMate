// src/components/Navbar.jsx
import React from 'react';
 import { Link } from "react-router-dom";
import './Navbar.css';

import { FaSearch, FaHome, FaUsers } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">Pitch<span>Mate</span></h2>
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <ul className="navbar-menu">
        <li className="active">
           <Link to="/" className="nav-link">
            Home <FaHome className="icon" />
          </Link>
        </li>
        <li>
          <Link to="/Network" className="nav-link">
            Network <FaUsers className="icon" />
          </Link>
        </li>
        <li>
          How it works <MdKeyboardArrowDown className="icon" />
        </li>
        <li>
          Events <MdKeyboardArrowDown className="icon" />
        </li>
        <li>
          About <MdKeyboardArrowDown className="icon" />
        </li>
      </ul>

      <div className="profile-image">
       

          <Link to="/profile">
           <img src="/profile.jpeg" alt="Profile" />
          </Link>

        
      </div>
    </nav>
  );
};

export default Navbar;
