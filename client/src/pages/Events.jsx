import React, { useRef, useEffect, useState } from "react";
import Navbar from "../components/Navbar"; 
import demoChartTop from "../assets/demo-chart.jpg"; 
import demoChartBottom from "../assets/demo-chart.jpg"; 
import "./Events.css";

export default function Events() {
  const hrRef = useRef(null);
  const leftRef = useRef(null);
  const topImgRef = useRef(null);
  const bottomImgRef = useRef(null);
  const [topHeight, setTopHeight] = useState(0);
  const [bottomHeight, setBottomHeight] = useState(0);

  // Example events list
  const events = [
    {
      title: "PitchMate Live: Startup Demo Day",
      date: "July 25, 2025 – 6:00 PM IST",
      type: "Live Pitch Event",
      description: "Top 10 selected startups pitch to a panel of active investors."
    },
    {
      title: "Investor Connect Workshop",
      date: "August 5, 2025 – 4:00 PM IST",
      type: "Workshop",
      description: "Learn how to structure your pitch deck and attract investors."
    },
    {
      title: "Women in Startups Meetup",
      date: "August 20, 2025 – 5:30 PM IST",
      type: "Networking Event",
      description: "Celebrating women entrepreneurs and building strong networks."
    }
  ];

  const pastEvents = [
    {
      title: "Startup Growth Summit",
      date: "June 10, 2025 – 3:00 PM IST",
      type: "Conference",
      description: "Industry leaders shared strategies for scaling startups globally."
    },
    {
      title: "AI for Entrepreneurs Workshop",
      date: "May 15, 2025 – 2:00 PM IST",
      type: "Workshop",
      description: "Hands-on session on applying AI tools in startup workflows."
    }
  ];

  // Calculate image heights
useEffect(() => {
  function updateImageHeights() {
    if (hrRef.current && leftRef.current) {
      const leftTop = leftRef.current.offsetTop; // top of container relative to parent
      const hrTop = hrRef.current.offsetTop;     // top of HR relative to container
      const hrHeight = hrRef.current.offsetHeight; // height of HR including line

      // Top image = from top of left container to bottom of HR
      const top = hrTop + hrHeight - leftTop;

      // Bottom image = remaining height
      const bottom = leftRef.current.offsetHeight - top;

      setTopHeight(top);
      setBottomHeight(bottom);
    }
  }

  updateImageHeights();
  window.addEventListener("resize", updateImageHeights);
  return () => window.removeEventListener("resize", updateImageHeights);
}, []);




   


  return (
    <>
      <Navbar />

      <div className="events-page" ref={leftRef}>
        {/* Left section: multiple events */}
        <div className="events-left">
          <h2>Events</h2>
          <p>Upcoming events</p>

          {events.map((event, index) => (
            <div key={index} className="event-item">
              <p><strong>Event :</strong> {event.title}</p>
              <p><strong>Date :</strong> {event.date}</p>
              <p><strong>Type :</strong> {event.type}</p>
              <p><strong>Description :</strong> {event.description}</p>
              <button className="register-btn">Register now</button>
            </div>
          ))}

          <hr ref={hrRef} />

          {/* Past events section */}
          <h3>Past Events</h3>

          {pastEvents.map((event, index) => (
            <div key={index} className="event-item">
              <p><strong>Event:</strong> {event.title}</p>
              <p className="event-date"><strong>Date:</strong> {event.date}</p>
              <p className="event-type"><strong>Type:</strong> {event.type}</p>
              <p className="event-description"><strong>Description:</strong> {event.description}</p>
            </div>
          ))}
        </div>

        {/* Right section: two images */}
        <div className="events-right">
          <img
            ref={topImgRef}
            src={demoChartTop}
            alt="Upcoming Events"
            style={{ height: topHeight }}
          />
          <img
            ref={bottomImgRef}
            src={demoChartBottom}
            alt="Past Events"
            style={{ height: bottomHeight }}
          />
        </div>
      </div>
    </>
  );
}
