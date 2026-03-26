import React from 'react';
import './ProductShowcaseCards.css';

const ProductShowcaseCards = () => {
  const products = [
    {
      title: "Premium Sofa Chairs",
      subtitle: "Stage-friendly silhouette and camera-ready luxury upholstery.",
      attributes: [
        "Camera-friendly upholstery",
        "Stage-friendly silhouette",
        "Comfortable for long speaker sessions",
        "Elegant visual presence"
      ],
      placeholder: "Sofa Chair Setup"
    },
    {
      title: "Luxury Coffee Tables",
      subtitle: "Clean premium finish complementary to luxury stage seating.",
      attributes: [
        "Clean premium finish",
        "Ideal for stage conversations",
        "Complements luxury seating",
        "Event-ready styling"
      ],
      placeholder: "Coffee Table Setup"
    }
  ];

  return (
    <section className="product-showcase-section" id="offerings">
      <div className="container">
        <div className="section-title">
          <h2>Curated for Premium Guest Experiences</h2>
          <p>An intentionally narrow selection to guarantee the highest quality for your most important stages.</p>
        </div>

        <div className="product-cards-grid">
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-visual">
                <div className="placeholder-image product-placeholder">
                  <span>{product.placeholder}</span>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-subtitle">{product.subtitle}</p>
                <ul className="product-attributes">
                  {product.attributes.map((attr, attrIndex) => (
                    <li key={attrIndex}>{attr}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="product-cta-container">
          <p className="product-cta-text">Need a curated stage setup for your event?</p>
          <a href="#inquire" className="btn-primary">Enquire Now</a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseCards;
