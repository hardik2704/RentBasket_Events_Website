import React from 'react';
import { ArrowRight } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-container">
        
        <div className="hero-content animate-fade-in-up">
          <div className="hero-eyebrow">RentBasket Events</div>
          <h1 className="hero-headline">
            The Chair Behind 
            <br />
            Memorable Conversations
          </h1>
          <p className="hero-subheadline">
            Luxury sofa chairs and coffee tables for celebrity guests, keynote sessions, college fests, startup events, and premium stage experiences.
          </p>
          
          <div className="hero-ctas">
            <a href="#inquire" className="btn-primary">
              Enquire for Your Event
              <ArrowRight size={20} className="cta-icon" />
            </a>
            <a href="#gallery" className="btn-secondary">
              View Event Gallery
            </a>
          </div>

          <div className="hero-trust">
            Trusted for high-visibility speaker sessions, premium college events, and curated stage setups.
          </div>
        </div>

        <div className="hero-visuals animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="placeholder-stack">
            <div className="placeholder-image primary-image">
              <span>Main Stage Setup</span>
            </div>
            <div className="placeholder-image secondary-image img-1">
              <span>Founder Talk</span>
            </div>
            <div className="placeholder-image secondary-image img-2">
              <span>Celebrity Guest</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
