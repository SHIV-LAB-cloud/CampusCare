import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ theme, toggleTheme, openModal }) {
  const location = useLocation();
  const path = location.pathname;

  return (
    <nav>
      <Link to="/" className="nav-logo">
        <div className="nav-logo-icon">🌿</div>
        <span>CampusCare</span>
      </Link>
      <div className="nav-links">
        <Link to="/" className={`nav-link ${path === '/' ? 'active' : ''}`}>Home</Link>
        <Link to="/chatbot" className={`nav-link ${path === '/chatbot' ? 'active' : ''}`}>Chatbot</Link>
        <Link to="/booking" className={`nav-link ${path === '/booking' ? 'active' : ''}`}>Booking</Link>
        <Link to="/resources" className={`nav-link ${path === '/resources' ? 'active' : ''}`}>Resources</Link>
        <Link to="/forum" className={`nav-link ${path === '/forum' ? 'active' : ''}`}>Forum</Link>
        <Link to="/gamification" className={`nav-link ${path === '/gamification' ? 'active' : ''}`}>Gamification</Link>
      </div>
      <div className="nav-right">
        <button className="nav-theme-btn" onClick={toggleTheme} title="Toggle dark/light mode">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
        <div className="nav-auth" onClick={() => openModal('signup')} style={{ cursor: 'pointer' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0110 0v4" />
          </svg>
          Not authenticated
        </div>
        <button className="btn-login" onClick={() => openModal('login')}>Login</button>
        <Link to="/chatbot" className="btn-talk" style={{textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem'}}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
          </svg>
          Talk now
        </Link>
      </div>
    </nav>
  );
}
