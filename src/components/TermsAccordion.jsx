import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './TermsAccordion.css';

const TermsAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const terms = [
    "Booking is subject to availability of the curated furniture sets.",
    "Event date and location confirmation required prior to final booking.",
    "Transport and setup coordination is based on venue access and restrictions.",
    "Pricing may vary by event requirements, scale, and specific logistics.",
    "Final confirmation is provided after discussion and mutual alignment with our team.",
    "Images shown may be indicative placeholders representing expected styling.",
    "Product handling and stage usage responsibility to be mutually aligned.",
    "Detailed commercial terms are shared during the booking confirmation process."
  ];

  return (
    <section className="terms-section" id="terms">
      <div className="container">
        <div className="terms-card">
          <div 
            className="terms-header" 
            onClick={toggleAccordion}
            role="button"
            tabIndex={0}
          >
            <h3>Terms & Event Notes</h3>
            <span className="terms-icon">
              {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </span>
          </div>
          
          <div className={`terms-content ${isOpen ? 'open' : ''}`}>
            <ul className="terms-list">
              {terms.map((term, index) => (
                <li key={index}>{term}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsAccordion;
