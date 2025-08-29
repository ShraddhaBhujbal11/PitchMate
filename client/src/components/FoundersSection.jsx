import React, { useState } from 'react';
import './FoundersSection.css';
import NDAModal from './NDAModel.jsx';

const founders = [
  {
    img: "/profile.jpeg",
    profile: '/liam.jpg',
    name: 'Liam Carter Hayes',
    upvotes: 775,
    startup: 'Medly',
    description:
      'AI health assistant for rural clinics. Diagnoses, manages records & works offline in local languages. 500+ users in 3 villages.',
  },
  {
    img: "/profile.jpeg",
    profile: '/liam.jpg',
    name: 'Liam Carter Hayes',
    upvotes: 775,
    startup: 'SkillSprout',
    description:
      'SkillSprout delivers 5-minute lessons. Learn fast, stay consistent. Grow a skill, one day at a time.',
  },
  {
    img: "/profile.jpeg",
    profile: '/liam.jpg',
    name: 'Liam Carter Hayes',
    upvotes: 775,
    startup: 'SkillSprout',
    description:
      'SkillSprout delivers 5-minute lessons. Learn fast, stay consistent. Grow a skill, one day at a time.',
  },
];

const FoundersSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFounder, setSelectedFounder] = useState(null);

  const handleDetailsClick = (founder) => {
    setSelectedFounder(founder);
    setIsModalOpen(true);
  };

  return (
    <div className="founders-section">
      <h2>Founders for you</h2>
      <div className="founder-slider">
        {founders.map((founder, idx) => (
          <div className="founder-card" key={idx}>
            <img src={founder.img} alt="Startup" className="startup-image" />
            <div className="founder-info">
              <div className="founder-header">
                <img src={founder.profile} alt="Profile" className="profile-pic" />
                <div>
                  <h4>{founder.name}</h4>
                  <p>{founder.upvotes} Upvotes</p>
                </div>
              </div>
              <h3>
                {founder.startup} <span className="verified">✔</span>
              </h3>
              <p>{founder.description}</p>
              <button className="details-btn" onClick={() => handleDetailsClick(founder)}>
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

export default FoundersSection;
