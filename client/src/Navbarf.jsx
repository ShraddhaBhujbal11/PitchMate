// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbarf.css";

import { FaSearch, FaHome, FaUsers } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import SearchComponent from "./SearchComponent"; // <-- import your Search component

const Navbarf = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <h2 className="logo">
            Pitch<span>Mate</span>
          </h2>
          <div className="search-box" onClick={() => setShowSearch(true)}>
            <FaSearch className="search-icon" />
            <input type="text" placeholder="Search" readOnly /> 
            {/* readOnly so typing opens the component instead */}
          </div>
        </div>

        <ul className="navbar-menu">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Home <FaHome className="icon" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Network"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Network <FaUsers className="icon" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/HowItWorks"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              How it works <MdKeyboardArrowDown className="icon" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Events"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Events <MdKeyboardArrowDown className="icon" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About <MdKeyboardArrowDown className="icon" />
            </NavLink>
          </li>
        </ul>

        <div className="profile-image">
          <NavLink to="/profile">
            <img src="/profile.jpeg" alt="Profile" />
          </NavLink>
        </div>
      </nav>

      {/* Conditionally render search overlay */}
      {showSearch && <SearchComponent onClose={() => setShowSearch(false)} />}
    </>
  );
};

export default Navbarf;
