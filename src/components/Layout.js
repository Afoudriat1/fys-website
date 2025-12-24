import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

function Layout({ children, pageTitle }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isMusicPage = location.pathname === '/music';
  const isContactPage = location.pathname === '/contact';
  const isDonatePage = location.pathname === '/donate';

  return (
    <div className="layout">
      {!isHomePage && !isMusicPage && !isContactPage && !isDonatePage && (
        <>
          <Link to="/" className="home-link">
            FREE YOUTH SERVICES
          </Link>
          <h1 className="page-title-below-button">{pageTitle}</h1>
        </>
      )}
      {isDonatePage && (
        <>
          <Link to="/" className="home-link">
            FREE YOUTH SERVICES
          </Link>
          <div 
            className="title-background-wrapper"
            style={{
              backgroundImage: 'url(/Donate.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'relative',
              padding: '150px 20px',
              marginBottom: '40px',
              minHeight: '500px'
            }}
          >
            <div className="header-overlay"></div>
            <div className="title-content">
              <h1 className="main-title">{pageTitle}</h1>
              <h2 className="mission-subheader">Every contribution makes a difference.</h2>
            </div>
          </div>
        </>
      )}
      {isContactPage && (
        <>
          <Link to="/" className="home-link">
            FREE YOUTH SERVICES
          </Link>
          <div 
            className="title-background-wrapper"
            style={{
              backgroundImage: 'url(/Contact.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'relative',
              padding: '150px 20px',
              marginBottom: '40px',
              minHeight: '500px'
            }}
          >
            <div className="header-overlay"></div>
            <div className="title-content">
              <h1 className="main-title">{pageTitle}</h1>
            </div>
          </div>
        </>
      )}
      {isMusicPage && (
        <>
          <Link to="/" className="home-link">
            FREE YOUTH SERVICES
          </Link>
          <div 
            className="title-background-wrapper"
            style={{
              backgroundImage: 'url(/Record_pic.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center 25%',
              backgroundRepeat: 'no-repeat',
              position: 'relative',
              padding: '150px 20px',
              marginBottom: '40px',
              minHeight: '500px'
            }}
          >
            <div className="header-overlay"></div>
            <div className="title-content">
              <h1 className="main-title">{pageTitle}</h1>
              <h2 className="mission-subheader">Bars Beyond Bars produces 2,000 songs annually featuring the original lyrics and voices of incarcerated youth ages 14-21.</h2>
            </div>
          </div>
        </>
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
            padding: '80px 20px',
            marginBottom: '40px'
          }}
        >
          <div className="header-overlay"></div>
          <div className="title-content">
            <h1 className="main-title">FREE YOUTH SERVICES</h1>
            <h2 className="mission-subheader">Our mission is to provide and fund programs for the incarcerated youth of NYS Youth Detention Centers.</h2>
          </div>
        </div>
      )}
      <div className="layout-header">
        {isHomePage ? (
          <>
            <div className="nav-buttons">
              <Link 
                to="/donate" 
                className="nav-button"
              >
                DONATE
              </Link>
              <Link 
                to="/music" 
                className="nav-button"
              >
                MUSIC
              </Link>
              <Link 
                to="/contact" 
                className="nav-button"
              >
                CONTACT
              </Link>
            </div>
            <div className="about-section">
              {/* <h2 className="about-title">ABOUT</h2> */}
              <p className="about-text">
              Since 2015, we've offered Bars Beyond Bars, a music recording program for incarcerated youth in every youth detention center within the Hudson Valley. Operating as a music studio in these facilities, the program gives hundreds of young people the chance to write, record, and produce original music—averaging about 2,000 finished songs each year.
              </p>
            </div>
          </>
        ) : null}
      </div>
      <div className="layout-content">
        {children}
      </div>
    </div>
  );
}

export default Layout;

