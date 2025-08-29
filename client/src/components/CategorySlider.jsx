// import React from 'react';
// import './CategorySlider.css';

// const categories = [
//   "Funding Requirement", "Agriculture / AgriTech", "HealthTech / MedTech",
//   "EdTech", "FinTech", "CleanTech / Greentech", "ClimateTech", "SaaS (Software as a Service)"
// ];

// const CategorySlider = () => {
//   return (
//     <div className="category-slider">
//       {categories.map((cat, index) => (
//         <div key={index} className="category-pill">
//           {cat}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CategorySlider;
import React from "react";
import { FaFilter } from "react-icons/fa";
import "./CategorySlider.css";

const categories = [
  "Funding Requirement",
  "Agriculture / AgriTech",
  "HealthTech / MedTech",
  "EdTech",
  "FinTech",
  "CleanTech / Greentech",
  "ClimateTech",
  "SaaS (Software as a Service)"
];

const CategorySlider = () => {
  return (
    <div className="category-wrapper">
      <div className="category-slider">
        <div className="filter-button">
          <FaFilter className="filter-icon" />
          <span>Filters</span>
        </div>

        {categories.map((cat, index) => (
          <div key={index} className="category-pill">
            {cat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
