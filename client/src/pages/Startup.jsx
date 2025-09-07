import React, { useState } from "react";
import "./Startup.css";
import Navbar from "../components/Navbar";

const Startup = () => {
  // array of tabs with title + content
 const reviewsData = [
  {
    user: "@priyamehta",
    time: "2 weeks ago",
    title: "A game-changer for rural healthcare!",
    author: "Priya Mehta, Angel Investor & Digital Health Advisor",
    text: "Medly is solving a real problem where it matters most. The offline-first approach and use of AI in local languages is impressive. What stood out to me is the thoughtful deployment strategy and lean use of funds. I see strong potential for scale, especially with public health partnerships. Excited to see where this goes!",
    stars: 3,
  },
  {
    user: "@arjunmalhotra134",
    time: "1 week ago",
    title: "Smart, scalable, and socially impactful",
    author: "Arjun Malhotra, Early-Stage Investor",
    text: "Medly hits the sweet spot between technology and impact. Their ability to function offline in rural clinics shows a deep understanding of the real-world challenges in healthcare. The founding team seems focused and data-driven. I believe this could become a leading solution in emerging markets.",
    stars: 4,
     },
  {
    user: "@neharao",
    time: "3 days ago",
    title: "Exactly what rural India needs right now.",
    author: "Neha Rao, Public Health Expert",
    text: "Medly bridges a critical gap in rural healthcare delivery. Local language support, offline functionality, and a clean user interface make it highly usable even in the toughest conditions. This is not just tech for the sake of tech—this is meaningful innovation.",
    stars: 4,
  },
];
  const faqData = [
    {
      question: "What stage is this startup currently in?",
      answer: "We are in the early pilot stage, currently testing in 3 rural villages with 500+ users.",
    },
    {
      question: "How will my investment be used?",
      answer: "Funds will be directed towards expanding to 50+ clinics, building stronger AI features, and regional language support.",
    },
    {
      question: "What do I get in return for investing?",
      answer: "Investors receive equity in the company, with potential for high returns as adoption scales.",
    },
    {
      question: "When can I expect a return on my investment?",
      answer: "We expect significant returns within 3–5 years, aligned with expansion and adoption milestones.",
    },
    {
      question: "What makes this startup a strong bet?",
      answer: "We combine AI technology, grassroots partnerships, and an underserved healthcare market to create high-impact growth.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
 
      const tabs = [
  {
    title: "Overview",
    content: (
      <>
        {/* Why to Invest Section */}
        <section className="invest-section">
          <h2>Why to invest in Medly</h2>
          <ol>
            <li>
              <strong>Untapped Market with Urgent Need:</strong> Rural healthcare is a $20B+ underserved sector...
            </li>
            <li>
              <strong>High-Impact, Locally-Tailored Solution:</strong> Medly provides accurate illness diagnosis...
            </li>
            <li>
              <strong>Early Traction and Community Adoption:</strong> Already piloting in 3 villages with 500+ users...
            </li>
            <li>
              <strong>Purpose-Driven Team with Tech Expertise:</strong> Combining AI, public health, and grassroots partnerships...
            </li>
            <li>
              <strong>Clear Roadmap with Scalable Growth:</strong> Funding will expand to 50+ clinics and support more regional languages...
            </li>
          </ol>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <h2>My Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <img src="https://via.placeholder.com/150" alt="Danial" />
              <h3>Danial Cooper ✔</h3>
              <p>Field Ops Manager at Medly, brings 7+ years in rural healthcare...</p>
            </div>
            <div className="team-card">
              <img src="https://via.placeholder.com/150" alt="Neha" />
              <h3>Neha Verma</h3>
              <p>Co-founder & CEO, combines public health and tech experience...</p>
            </div>
            <div className="team-card">
              <img src="https://via.placeholder.com/150" alt="Rohit" />
              <h3>Rohit Sen</h3>
              <p>AI Lead at Medly, builds offline-first diagnostic engine...</p>
            </div>
            <div className="team-card">
              <img src="https://via.placeholder.com/150" alt="Priya" />
              <h3>Dr. Priya Nair</h3>
              <p>Medical Advisor, ensures clinical accuracy with 10+ years of practice...</p>
            </div>
            <div className="team-card">
              <img src="https://via.placeholder.com/150" alt="Kunal" />
              <h3>Kunal Deshpande</h3>
              <p>Product Designer, crafts user-friendly interfaces for frontline workers...</p>
            </div>
          </div>
        </section>

        {/* Closure Section */}
        <section className="closure-section">
          <h2>Get a closer look at Medly</h2>
          <p>
            Explore Medly in action — see our team at work, real-world product usage in rural clinics,
            and how we're making healthcare smarter and more impactful.
          </p>
          <div className="gallery-placeholder">[ Gallery / Carousel Placeholder ]</div>
        </section>
      </>
    ),
  },
  {
    title: "Essential Information",
    content: (
      <section className="info-section">
        <h2>Essential Information</h2>
        <ul>
          <li><strong>Founded:</strong> 2023</li>
          <li><strong>Headquarters:</strong> Pune, India</li>
          <li><strong>Sector:</strong> HealthTech / AI</li>
          <li><strong>Stage:</strong> Early Pilot</li>
          <li><strong>Users:</strong> 500+ active users</li>
        </ul>
      </section>
    ),
  },
  {
    title: "Investment Terms",
    content: (
      <section className="terms-section">
        <h2>Investment Terms</h2>
        <p>Looking to raise <strong>$500,000</strong> ...</p>
      </section>
    ),
  },
  {
     title: "Reviews",
    content: (
      <section className="reviews-section">
        <h2>Reviews</h2>
    {reviewsData.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-content">
              <div className="review-user">
                {review.user} <span className="review-time">{review.time}</span>
              </div>
              <div className="review-title">“{review.title}”</div>
              <div className="review-author">— {review.author}</div>
              <div className="review-text">{review.text}</div>
            </div>
            <div className="review-stars">
              {"★".repeat(review.stars) + "☆".repeat(5 - review.stars)}
            </div>
          </div>
        ))}
        <div className="more-btn">...More</div>
      </section>
    ),
  },
  {   title: "Investing FAQs",
      content: (
    <section className="faq-section">
          <h2>Investing FAQs</h2>
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="faq-item"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="faq-question">
                {index + 1}. {faq.question}
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </div>
              <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
                {faq.answer}
              </div>
            </div>
          ))}
        </section>
    ),
  },
];


  const [activeTab, setActiveTab] = useState(tabs[0].title);

  return (
    <div className="home-container">
      <Navbar />

      {/* Upvotes Bar */}
      <div className="upvotes-bar">
        <span className="bookmark">🔖</span>
        <span className="upvote-count">775 upvotes</span>
      </div>

      {/* Banner */}
      <div className="startup-banner">
        <img src="/startup2.jpeg" alt="Medly Banner" className="startup-banner-img" />
        <div className="founder-overlay">
          <img src="/profile.jpeg" alt="Founder" className="founder-photo" />
          <a href="#" className="founder-name">Liam Carter Hayes</a>
        </div>
      </div>

      {/* Intro */}
      <div className="startup-intro">
        <h1>Medly - AI Powered Virtual Health Assistant for Rural Clinics</h1>
        <p>
          Medly helps rural clinics diagnose illness, manage records, and
          offer care in local languages – even offline. Currently piloting
          in 3 villages with 500+ active users.
        </p>
        <button className="interest-btn">Show Interest</button>
      </div>

      {/* Tabs */}
      <div className="tabs">
        {tabs.map((tab) => (
          <span
            key={tab.title}
            className={activeTab === tab.title ? "active" : ""}
            onClick={() => setActiveTab(tab.title)}
          >
            {tab.title}
          </span>
        ))}
      </div>

      {/* Dynamic Tab Content */}
      <div className="tab-content">
        {tabs.find((tab) => tab.title === activeTab)?.content}
      </div>
    </div>
  );
};

export default Startup;
