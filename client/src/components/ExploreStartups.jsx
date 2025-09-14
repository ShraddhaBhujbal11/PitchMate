// src/components/ExploreStartups.jsx
import React from 'react';
import './ExploreStartups.css';

const startupCategories = [
  { title: "New and Promising", img: "/startup3.jpg" },
  { title: "Slow Growth Believer", img: "/startup3.jpg" },
  { title: "Problem Solvers", img: "/startup3.jpg" },
  { title: "Offline-First", img: "/startup3.jpg" },
];

const ExploreStartups = () => {
  return (
     
    <div className="explore-startups-section">
      <hr className="line"></hr>
      <h2>Explore Startups Beyond Tech</h2>
      <div className="startup-scroll-container">
        {startupCategories.map((item, i) => (
          <div key={i} className="startup-card">
            <img src={item.img} alt={item.title} />
            <div className="startup-title">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreStartups;
