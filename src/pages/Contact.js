import React from 'react';
import './Page.css';

function Contact() {
  return (
    <div className="page">

      <div className="page-content contact-layout">
        <div className="contact-photo-section">
          <img
            src="/Bosch_Headshot.jpeg"
            alt="Bosch Purvis"
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
              Bosch Purvis serves as the Managing Director of Free Youth Services and lead facilitator of the Bars Beyond Bars program. In this role, he oversees program development and operations while directing all aspects of music production, recording, and creative coordination for participating youth.
            </p>
          </div>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">PHONE</span>
              <a href="tel:8453328788" className="contact-link">845-332-8788</a>
            </div>
            <div className="contact-item">
              <span className="contact-label">EMAIL</span>
              <a href="mailto:Bosch@freeyouthservices.org" className="contact-link">Bosch@freeyouthservices.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="page-content contact-layout contact-layout--second">
        <div className="contact-photo-section">
          <img
            src="/Martin_Headshot.jpeg"
            alt="Allie Martin"
            className="contact-photo"
          />
        </div>
        <div className="contact-info-section">
          <div className="contact-header">
            <div className="contact-name-row">
              <h2 className="contact-name">ALLIE MARTIN</h2>
              <span className="contact-title">ADVISORY BOARD MEMBER</span>
            </div>
            <p className="contact-about">
              Allie Martin is an ethnomusicologist and artist from Prince George's County, Maryland. She is currently an assistant professor at Dartmouth College in the Music Department and the Cluster for Digital Humanities and Social Engagement. Her first book, <em>Intersectional Listening: Gentrification and Black Sonic Life in Washington, DC</em>, explores the relationships between race, sound, and gentrification in the nation's capital. Martin is the director of the Black Sound Lab at Dartmouth College, a research environment dedicated to amplifying Black life and decriminalizing Black sound through digital practice.
            </p>
          </div>
        </div>
      </div>

      <div className="page-content contact-layout contact-layout--second">
        <div className="contact-photo-section">
          <img
            src="/Lenny_Headshot.jpeg"
            alt="Lenny Bass"
            className="contact-photo"
          />
        </div>
        <div className="contact-info-section">
          <div className="contact-header">
            <div className="contact-name-row">
              <h2 className="contact-name">LENNY BASS</h2>
              <span className="contact-title">ADVISORY BOARD MEMBER</span>
            </div>
            <p className="contact-about">
              Lenny Bass is a Case Manager at Family of Woodstock, Inc., bringing prior experience within the organization as well as a strong background in youth and community services. He completed his studies at Bard College (2022–2025), further strengthening his academic foundation in human services and related fields.
            </p>
            <p className="contact-about" style={{ marginTop: '12px' }}>
              In addition to his work in case management, Lenny brings extensive experience in film and media production, having worked as a director and videographer. His professional skill set includes film production, video production, post-production, and commercial content development, allowing him to contribute a creative and technical perspective to his work with youth and community programming.
            </p>
          </div>
        </div>
      </div>

      <div className="page-content contact-layout contact-layout--second">
        <div className="contact-photo-section">
          <img
            src="/Zach_Headshot.jpeg"
            alt="Zach Jones"
            className="contact-photo"
          />
        </div>
        <div className="contact-info-section">
          <div className="contact-header">
            <div className="contact-name-row">
              <h2 className="contact-name">ZACH "MAUI" JONES</h2>
              <span className="contact-title">VOLUNTEER COMMUNITY PARTNER</span>
            </div>
            <p className="contact-about">
              Zach "Maui" Jones brings over 15 years of experience leading and facilitating outdoor education programs for at-risk youth across New York State. His work has taken young people out of challenging environments and into transformative natural spaces, using the outdoors as a powerful tool for growth, resilience, and self-discovery.
            </p>
            <p className="contact-about" style={{ marginTop: '12px' }}>
              For the past decade, Zach has been a dedicated community partner and volunteer with Free Youth Services.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;
