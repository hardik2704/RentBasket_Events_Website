import React, { useState } from 'react';
import './InquiryFormCard.css';

const InquiryFormCard = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    event: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder submission
    alert('Thank you for your inquiry. Our team will contact you shortly.');
  };

  return (
    <section className="inquiry-section" id="inquire">
      <div className="container">
        <div className="inquiry-wrapper">
          <div className="inquiry-info">
            <h2>Tell Us About Your Event</h2>
            <p>Planning a premium stage experience? Share a few details and our team will get in touch.</p>
            
            <div className="inquiry-assurance">
              <h4>What you can expect:</h4>
              <ul>
                <li>Premium stage furniture</li>
                <li>Reliable coordination</li>
                <li>Curated guest seating</li>
                <li>RentBasket support</li>
              </ul>
            </div>
          </div>

          <div className="inquiry-form-card">
            <form onSubmit={handleSubmit} className="premium-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Jane Doe"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Mobile Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91..."
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="event">Event / Fest Name</label>
                <input 
                  type="text" 
                  id="event" 
                  name="event" 
                  value={formData.event}
                  onChange={handleChange}
                  placeholder="e.g. Startup Summit 2026"
                  required 
                />
              </div>

              <div className="form-group">
                <label htmlFor="location">College / Venue / Location</label>
                <input 
                  type="text" 
                  id="location" 
                  name="location" 
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Main Auditorium"
                  required 
                />
              </div>

              <button type="submit" className="btn-primary submit-btn">Request Event Setup</button>
              
              <p className="form-disclaimer">
                Our team will contact you to understand the event requirement and suggest the right seating setup.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryFormCard;
