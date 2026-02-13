import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Handle clicks on any link inside the nav
  const handleNavClick = (e) => {
    // Check if the clicked element is a link or inside a link
    if (e.target.tagName === 'A' || e.target.closest('a')) {
      closeMobileMenu();
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/" className="logo-link" onClick={closeMobileMenu}>
            <div className={`logo-wrapper ${scrolled ? 'compact' : ''}`}>
              <div className="logo-content">
                <span className="logo-fiestas">FIESTAS</span>
                <span className="logo-by-emily">BY EMILY</span>
              </div>
            </div>
          </Link>
        </div>

        <nav 
          className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}
          onClick={handleNavClick} // Single handler for all links
        >
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="/our-couples" className="nav-link">Our Couples</Link>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLScVXi0EHD7UVQv8ZtUAjXd9smuBp3SHsZHsYX7ttsIgDvgYPA/viewform" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link"
          >
            Inquire Now
          </a>
          <a
            className="instagram-link"
            href="https://www.instagram.com/fiestasbyemily"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="instagram-icon">📷</span>
          </a>
        </nav>

        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}