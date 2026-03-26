import React from 'react';
import './PrestigeGallery.css';

const PrestigeGallery = () => {
  const galleryItems = [
    {
      id: 1,
      caption: "Speaker Session Setup",
      className: "featured-large"
    },
    {
      id: 2,
      caption: "Founder Talk Stage",
      className: "secondary-tall"
    },
    {
      id: 3,
      caption: "Premium Fest Lounge",
      className: "secondary-wide"
    },
    {
      id: 4,
      caption: "VIP Guest Seating",
      className: "secondary-square"
    },
    {
      id: 5,
      caption: "Keynote Conversation Format",
      className: "secondary-wide"
    }
  ];

  return (
    <section className="prestige-gallery-section" id="gallery">
      <div className="container">
        <div className="section-title">
          <h2>Seen on Distinguished Stages</h2>
          <p>
            From startup summits to flagship college festivals, RentBasket Events helps create a more premium stage experience.
          </p>
        </div>

        <div className="gallery-masonry">
          {galleryItems.map((item) => (
            <div key={item.id} className={`gallery-item ${item.className}`}>
              <div className="placeholder-image gallery-placeholder">
                <span className="gallery-caption">{item.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrestigeGallery;
