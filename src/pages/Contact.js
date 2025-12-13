import React from 'react';
import './Page.css';

function Contact() {
  return (
    <div className="page">
      <div className="page-content contact-layout">
        <div className="contact-photo-section">
          <img 
            src="/Bosch_photo.jpeg" 
            alt="Bosch" 
            className="contact-photo"
          />
        </div>
        <div className="contact-info-section">
          <div className="contact-header">
            <div className="contact-name-row">
              <h2 className="contact-name">BOSCH PURVIS</h2>
              <span className="contact-title">MANAGING DIRECTOR</span>
            </div>
            <p className="contact-about">
              About information for Bosch Purvis goes here. This paragraph provides details about the managing director's background, experience, and role at Free Youth Services.
            </p>
          </div>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">PHONE</span>
              <a href="tel:8453328788" className="contact-link">845-332-8788</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">EMAIL</span>
              <a href="mailto:Bosch@freeyouthservices.org" className="contact-link">Bosch@freeyouthservices.org</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

