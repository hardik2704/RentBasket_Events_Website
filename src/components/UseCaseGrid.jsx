import React from 'react';
import { GraduationCap, Mic2, Lightbulb, Users, Building, UserCheck, MessageSquare, Briefcase, Star } from 'lucide-react';
import './UseCaseGrid.css';

const UseCaseGrid = () => {
  const useCases = [
    { name: "College Fests", icon: <GraduationCap size={28} /> },
    { name: "Speaker Sessions", icon: <Mic2 size={28} /> },
    { name: "Startup Summits", icon: <Lightbulb size={28} /> },
    { name: "Celebrity Appearances", icon: <Star size={28} /> },
    { name: "Founder Talks", icon: <Briefcase size={28} /> },
    { name: "Panel Discussions", icon: <Users size={28} /> },
    { name: "Brand Events", icon: <Building size={28} /> },
    { name: "Hospitality Lounges", icon: <MessageSquare size={28} /> }
  ];

  return (
    <section className="use-case-section">
      <div className="container">
        <div className="section-title">
          <h2>Perfect For</h2>
          <p>Curated seating designed to meet the expectations of premium attendees and event planners.</p>
        </div>

        <div className="use-case-grid">
          {useCases.map((item, index) => (
            <div className="use-case-card" key={index}>
              <div className="use-case-icon">
                {/* Fallback for Celebrity Appearances using UserCheck temporarily if Star is not imported */}
                {item.name === "Celebrity Appearances" ? <UserCheck size={28} /> : item.icon}
              </div>
              <h4 className="use-case-name">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseGrid;
