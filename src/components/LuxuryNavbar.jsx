import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './LuxuryNavbar.css';

const LuxuryNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`luxury-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          RentBasket <span>Events</span>
        </div>
        
        <div className="navbar-links desktop-only">
          <a href="#offerings">Offerings</a>
          <a href="#gallery">Gallery</a>
          <a href="#why-us">Why Us</a>
        </div>

        <div className="navbar-actions desktop-only">
          <a href="#inquire" className="btn-primary nav-btn">Enquire Now</a>
        </div>

        <button 
          className="mobile-menu-toggle mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-links">
          <a href="#offerings" onClick={() => setMobileMenuOpen(false)}>Offerings</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</a>
          <a href="#why-us" onClick={() => setMobileMenuOpen(false)}>Why Us</a>
          <a href="#inquire" className="btn-primary" onClick={() => setMobileMenuOpen(false)}>Enquire Now</a>
        </div>
      </div>
    </nav>
  );
};

export default LuxuryNavbar;
