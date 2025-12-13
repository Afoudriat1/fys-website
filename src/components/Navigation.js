import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link to="/" className="logo">
          <h1>FREE YOUTH SERVICES</h1>
        </Link>
        <div className="nav-buttons">
          <Link 
            to="/music" 
            className={`nav-button ${location.pathname === '/music' ? 'active' : ''}`}
          >
            MUSIC
          </Link>
          <Link 
            to="/donate" 
            className={`nav-button ${location.pathname === '/donate' ? 'active' : ''}`}
          >
            DONATE
          </Link>
          <Link 
            to="/contact" 
            className={`nav-button ${location.pathname === '/contact' ? 'active' : ''}`}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

