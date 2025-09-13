// src/components/Navbarf.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbarf.css";


import { FaSearch, FaHome, FaUsers } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import SearchComponent from "./SearchComponent";

const Navbarf = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <nav className="founder-navbar">
        <div className="founder-navbar-left">
          <h2 className="founder-logo">
            Pitch<span>Mate</span>
          </h2>
          <div
            className="founder-search-box"
            onClick={() => setShowSearch(true)}
          >
            <FaSearch className="founder-search-icon" />
            <input type="text" placeholder="Search" readOnly />
          </div>
        </div>

        <ul className="founder-navbar-menu">
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "founder-nav-link active" : "founder-nav-link"
              }
            >
              Home <FaHome className="founder-icon" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Network"
              className={({ isActive }) =>
                isActive ? "founder-nav-link active" : "founder-nav-link"
              }
            >
              Network <FaUsers className="founder-icon" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/MyIdea"
              className={({ isActive }) =>
                isActive ? "founder-nav-link active" : "founder-nav-link"
              }
            >
               MyIdea 
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/HowItWorks"
              className={({ isActive }) =>
                isActive ? "founder-nav-link active" : "founder-nav-link"
              }
            >
              How it works <MdKeyboardArrowDown className="founder-icon" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Events"
              className={({ isActive }) =>
                isActive ? "founder-nav-link active" : "founder-nav-link"
              }
            >
              Events <MdKeyboardArrowDown className="founder-icon" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive ? "founder-nav-link active" : "founder-nav-link"
              }
            >
              About <MdKeyboardArrowDown className="founder-icon" />
            </NavLink>
          </li>
        </ul>

        <div className="founder-profile-image">
          <NavLink to="/founderprofile">
            <img src="/profile.jpeg" alt="Profile" />
          </NavLink>
        </div>
      </nav>

      {showSearch && <SearchComponent onClose={() => setShowSearch(false)} />}
    </>
  );
};

export default Navbarf;
