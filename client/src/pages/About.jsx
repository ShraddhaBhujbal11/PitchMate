import React from 'react';
import './About.css'; // Import the CSS file
import Navbar from "../components/Navbar"; 

const AboutPage = () => {
  return (
    <div className="about-page-container">
      {/* Navbar Section */}
      <Navbar />

      {/* About Section */}
      <div className="about-content">

        {/* Navigation pills - full width */}
        <div className="about-navigation">
          <button className="active">What is PitchMate?</button>
          <button>Why we built PitchMate</button>
          <button>Our Mission/Vision</button>
          <button>Story of PitchMate</button>
          <button>PitchMate values</button>
          <button>Founding team</button>
        </div>

        {/* Two-column layout */}
        <div className="about-main">
          {/* Left side (text) */}
          <div className="about-left">
            <div className="about-details">
              <h2>About</h2>
              <h2>What is PitchMate?</h2>
              <p>
                PitchMate is a smart networking and fundraising platform that connects startup founders with the right
                investors. It helps founders showcase their startups through detailed profiles, while investors can discover, connect, and collaborate with ventures that match their interests —
                all in a streamlined, intuitive space.
              </p>
              
          <h2>Why We Built PitchMate</h2>
          <p>
            We believe fundraising should be transparent, accessible, and human.
            Founders often struggle to find the right investors, and investors waste
            time sorting through irrelevant pitches. PitchMate bridges that gap
            through smart matchmaking and direct communication.
          </p>

          <h2>Our Mission / Vision</h2>
          <p>
            To simplify startup fundraising and build a smarter, more accessible
            funding ecosystem.
          </p>
          <h2>Story of PitchMate</h2>
          <p>"Started in 2025 by a team of founders who faced the same problem.."</p>
           <h2>PitchMate values</h2>
            <h3 >1. Transparency</h3>
            <p>
              We believe in clear, honest communication between founders and investors — no hidden agendas, just real connections.
            </p>

            <h3>2. Accessibility</h3>
            <p>
              Fundraising should be accessible to all, regardless of background, location, or network. PitchMate levels the playing field.
            </p>

            <h3>3. Trust</h3>
            <p>
              We're building a platform where users feel safe, respected, and confident in every interaction.
            </p>
             <h3>4. Efficiency</h3>
            <p>
              We value your time. Our smart matching and streamlined tools help cut through the noise and make every connection count.
            </p>

            <h3>5. Community</h3>
            <p>
              PitchMate is more than a platform — it's a growing ecosystem of innovators, visionaries, and changemakers.
            </p>

            <h3>6. Empowerment</h3>
            <p>
              We empower founders to tell their story and investors to discover what matters to them most.
            </p>

            </div>
          </div>

          {/* Right side (image) */}
          <div className="about-right">
            <img src="/about.jpg" alt="About PitchMate" />
          </div>
        </div>
        
      {/* Founding Team section goes full width (below image) */}
     {/* Founding Team section */}
     <div className="founding-team">
  <h2>Founding Team</h2>
  <div className="team-members">
    {/* Team Member 1 */}
    <div className="team-member">
      <img src="/profile.jpeg" alt="Shraddha Bhujbal" />
      <h3>Jane Doe</h3>
      <p>CEO & Co-Founder. Jane leads PitchMate with a focus on strategy and growth.</p>
    </div>

    {/* Team Member 2 */}
    <div className="team-member">
      <img src="/profile.jpeg" alt="Mansi Pathak" />
      <h3>John Smith</h3>
      <p>CTO & Co-Founder. John manages all technical aspects and product development.</p>
    </div>

    {/* Team Member 3 */}
    <div className="team-member">
      <img src="/profile.jpeg" alt="Vivek Gethe" />
      <h3>Emily Johnson</h3>
      <p>COO & Co-Founder. Emily ensures smooth operations and team collaboration.</p>
    </div>

    {/* Team Member 4 */}
    <div className="team-member">
      <img src="/profile.jpeg" alt="Manaswa Medhi" />
      <h3>Michael Lee</h3>
      <p>CMO & Co-Founder. Michael drives marketing and investor outreach efforts.</p>
    </div>
  </div>
</div>


    
 
</div>
</div>

  );
};

export default AboutPage;
