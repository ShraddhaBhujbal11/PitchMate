import React, { useState } from 'react';
import './InvestorsSection.css';
import NDAModal from './NDAModel.jsx';

const investors = [
  {
    img: "/profile.jpeg", // replace with real investor image
    name: "Jay Carter Telebe",
    details: {
      stage: "Pre-seed",
      sectors: "Edtech",
      checkSize: "Small Checks",
      approach: "Product-focused",
    },
  },
  {
    img: "/profile.jpeg", // replace with real investor image
    name: "Jay Carter Telebe",
    details: {
      stage: "Pre-seed",
      sectors: "Edtech",
      checkSize: "Small Checks",
      approach: "Product-focused",
    },
  },
  {
    img: "/profile.jpeg", // replace with real investor image
    name: "Jay Carter Telebe",
    details: {
      stage: "Pre-seed",
      sectors: "Edtech",
      checkSize: "Small Checks",
      approach: "Product-focused",
    },
  },
  // you can easily add more investors here in the same format
];

const InvestorsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedInvestor, setSelectedInvestor] = useState(null);

  const handleDetailsClick = (investor) => {
    setSelectedInvestor(investor);
    setIsModalOpen(true);
  };

  return (
    <div className="investors-section">
      <h2 className="investors-title">Investors for you</h2>
      <div className="investors-list">
        {investors.map((investor, idx) => (
          <div className="investors-card" key={idx}>
            <img src={investor.img} alt={investor.name} className="investors-image" />
            <div className="investors-info">
              <h3 className="investors-name">{investor.name}</h3>
              <p>
                <strong>Investment Stage :</strong> {investor.details.stage}
              </p>
              <p>
                <strong>Sectors :</strong> {investor.details.sectors}
              </p>
              <p>
                <strong>Check size :</strong> {investor.details.checkSize}
              </p>
              <p>
                <strong>Approach :</strong> {investor.details.approach}
              </p>
              <button
                className="investors-details-btn"
                onClick={() => handleDetailsClick(investor)}
              >
                See details
              </button>
            </div>
          </div>
        ))}
      </div>

      <NDAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default InvestorsSection;
