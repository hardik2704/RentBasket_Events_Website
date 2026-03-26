import React from 'react';
import './LuxuryFooter.css';

const LuxuryFooter = () => {
  return (
    <footer className="luxury-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-logo">RentBasket <span>Events</span></h3>
            <p className="footer-tagline">The premium seating choice for important stages.</p>
            <p className="footer-continuity">A premium event furnishing vertical by RentBasket.</p>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Explore</h4>
              <a href="#offerings">Offerings</a>
              <a href="#gallery">Gallery</a>
              <a href="#why-us">Why Choose Us</a>
            </div>
            <div className="link-group">
              <h4>Support</h4>
              <a href="#inquire">Contact Us</a>
              <a href="#terms">Event Terms</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} RentBasket Events. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default LuxuryFooter;
