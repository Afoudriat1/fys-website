import React from 'react';
import { useLocation } from 'react-router-dom';
import './Layout.css';

function Layout({ children, pageTitle }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isMusicPage = location.pathname === '/music';
  const isContactPage = location.pathname === '/contact';
  const isDonatePage = location.pathname === '/donate';

  return (
    <div className="layout">
      {isDonatePage && (
        <div
          className="title-background-wrapper"
          style={{
            backgroundImage: 'url(/Donate.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            padding: '100px 20px',
            marginBottom: '40px',
            minHeight: '380px'
          }}
        >
          <div className="header-overlay"></div>
          <div className="title-content">
            <h1 className="main-title">{pageTitle}</h1>
            <h2 className="mission-subheader">Every contribution makes a difference.</h2>
          </div>
        </div>
      )}
      {isContactPage && (
        <div
          className="title-background-wrapper"
          style={{
            backgroundImage: 'url(/Contact.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            padding: '100px 20px',
            marginBottom: '40px',
            minHeight: '380px'
          }}
        >
          <div className="header-overlay"></div>
          <div className="title-content">
            <h1 className="main-title">{pageTitle}</h1>
          </div>
        </div>
      )}
      {isMusicPage && (
        <div
          className="title-background-wrapper"
          style={{
            backgroundImage: 'url(/Record_pic.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 25%',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            padding: '100px 20px',
            marginBottom: '40px',
            minHeight: '380px'
          }}
        >
          <div className="header-overlay"></div>
          <div className="title-content">
            <h1 className="main-title">{pageTitle}</h1>
            <h2 className="mission-subheader">Every track below was written, recorded, and produced by incarcerated youth participating in the Bars Beyond Bars program. These songs represent real voices, real stories, and real talent from young people across New York.</h2>
          </div>
        </div>
      )}
      {isHomePage && (
        <div
          className="title-background-wrapper"
          style={{
            backgroundImage: 'url(/Recording_Pic.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
            padding: '100px 20px',
            marginBottom: '0',
            minHeight: '400px'
          }}
        >
          <div className="header-overlay"></div>
          <div className="title-content">
            <h1 className="main-title">FREE YOUTH SERVICES</h1>
            <h2 className="mission-subheader">Free Youth Services is a New York–based organization dedicated to enriching the lives of incarcerated youth through meaningful after-school programming within youth detention facilities.</h2>
          </div>
        </div>
      )}
      <div className="layout-content">
        {children}
      </div>
    </div>
  );
}

export default Layout;
