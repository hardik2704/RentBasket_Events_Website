import React from 'react';
import { Camera, Star, ShieldCheck, Truck } from 'lucide-react';
import './ValuePropositionCards.css';

const ValuePropositionCards = () => {
  const values = [
    {
      icon: <Camera size={32} />,
      title: "Camera-Ready Seating",
      description: "Flawless aesthetics designed specifically for high-definition stage photography."
    },
    {
      icon: <Star size={32} />,
      title: "Premium Stage Presence",
      description: "Elevate the perception of your event with seating that commands respect."
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Trusted for VIP Guests",
      description: "Proven comfort and style for celebrities, founders, and keynote speakers."
    },
    {
      icon: <Truck size={32} />,
      title: "Reliable Event Delivery",
      description: "Punctual, white-glove setup ensuring your stage is ready before the doors open."
    }
  ];

  return (
    <section className="value-prop-section" id="why-us">
      <div className="container">
        <div className="section-title">
          <h2>Not Just Event Furniture. Event Presence.</h2>
          <p>
            Local vendors may manage general furniture needs, but celebrity guests and keynote speakers require a different level of aesthetic and presentation. RentBasket Events specializes in making that moment look premium.
          </p>
        </div>

        <div className="value-cards-grid">
          {values.map((val, index) => (
            <div className="value-card" key={index}>
              <div className="value-icon">{val.icon}</div>
              <h3 className="value-title">{val.title}</h3>
              <p className="value-description">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionCards;
