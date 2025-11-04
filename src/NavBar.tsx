import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const MOBILE_WIDTH_THRESHOLD = 768;

const NavBar: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
  const navbarRef = useRef<HTMLDivElement>(null);

  const updateNavbarHeight = () => {
    if (navbarRef.current) {
      const isMobileView = window.innerWidth <= MOBILE_WIDTH_THRESHOLD;
      setIsSmallScreen(isMobileView);
      setIsNavVisible(!isMobileView);
    }
  };

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  const hideNavDropdown = () => {
    if (isNavVisible && isSmallScreen) {
      setIsNavVisible(false);
    }
  }

  const applyMediaQueryStyles = () => {
    const style = document.createElement('style');
    style.innerHTML = `
      @media (max-width: ${MOBILE_WIDTH_THRESHOLD}px) {
        .navbar-links-container {
          align-items: flex-start;
          flex-direction: column;
          height: auto;
          border-top: 1px solid #fff;
          padding: 1rem 0;
        }

        .navbar-links {
          flex-direction: column;
          width: 100%;
        }

        .navbar-links li {
          margin: 0 0;
          text-align: center;
        }

        .navbar-links li a {
          display: block;
          width: 100%;
          padding: 0 0;
          text-align: center;
          color: white;
          text-decoration: none;
        }

        .navbar-toggle {
          display: flex;
        }
      }
    `;
    document.head.appendChild(style);

    // Clean up the injected style on component unmount
    return () => {
      document.head.removeChild(style);
    };
};

  useEffect(() => {
    updateNavbarHeight();
    applyMediaQueryStyles();

    window.addEventListener('resize', updateNavbarHeight);

    return () => {
      window.removeEventListener('resize', updateNavbarHeight);
    };
  }, []);

  const navBarLinksContainer = () => {
    return (
      <div className={`navbar-links-container ${isNavVisible ? 'visible' : 'hidden'}`}>
        <ul className="navbar-links">
          <li><Link to="/home" onClick={hideNavDropdown}>Home</Link></li>
          <li><Link to="/resume" onClick={hideNavDropdown}>Resume</Link></li>
        </ul>
      </div>
    )
  }

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-container">
        <Link to="/" onClick={hideNavDropdown} className="navbar-logo">Lucas Reyna</Link>
        <button className="navbar-toggle" onClick={toggleNavVisibility}>☰</button>
        {!isSmallScreen && navBarLinksContainer()}
      </div>
      {isSmallScreen && navBarLinksContainer()}
    </nav>
  );
};

export default NavBar;
