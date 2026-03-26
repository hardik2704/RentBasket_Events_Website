import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import './WhyChooseUsSection.css';

const WhyChooseUsSection = () => {
  const reasons = [
    "Premium Aesthetic",
    "Focused Product Selection",
    "Speaker & Guest Ready",
    "Smooth Event Coordination",
    "Visual Impact on Stage",
    "Trusted RentBasket Reliability"
  ];

  return (
    <section className="why-choose-us-section">
      <div className="container">
        <div className="why-choose-us-grid">
          
          <div className="why-choose-us-visual">
            <div className="placeholder-image large-feature">
              <span>Backstage Setup</span>
            </div>
          </div>

          <div className="why-choose-us-content">
            <h2>Why Event Organizers Choose Us for Premium Guests</h2>
            <p className="why-subtitle">
              We specialize in the seating that matters most—where the cameras point and the most important conversations happen.
            </p>
            
            <ul className="reasons-list">
              {reasons.map((reason, index) => (
                <li key={index} className="reason-item">
                  <CheckCircle2 className="reason-icon" size={24} />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
