
// import { Link } from "react-router-dom";
// import logo from "../assets/logo.jpeg";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <header className="navbar">
//       <div className="navbar-container">

//         <Link to="/" className="logo">
//           <img
//             src={logo}
//             alt="A4 Events Logo"
//             className="logo-image"
//           />
//         </Link>

//         <nav className="nav-links">
//           <Link to="/">Home</Link>
//           <Link to="/events">Events</Link>
//           <Link to="/products">Products</Link>
//           <Link to="/contact">Contact</Link>
//         </nav>

//         <div className="nav-actions">
//           <Link
//             to="/contact"
//             className="nav-cta"
//           >
//             Contact Us
//           </Link>
//         </div>

//       </div>
//     </header>
//   );
// }

// export default Navbar;


import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo123.jpeg";
import "./Navbar.css";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/events", label: "Events" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img
            src={logo}
            alt="A4A Anagrams Group"
            className="navbar-logo-image"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-link ${
                location.pathname === link.path ? "navbar-link-active" : ""
              }`}
            >
              <span>{link.label}</span>
              <div className="navbar-link-underline" />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="navbar-actions">
          <Link to="/contact" className="navbar-cta">
            <span>Contact Us</span>
            <span className="navbar-cta-arrow">→</span>
            <div className="navbar-cta-shimmer" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`navbar-mobile-btn ${isMobileOpen ? "navbar-mobile-open" : ""}`}
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileOpen}
        >
          <span className="navbar-mobile-line" />
          <span className="navbar-mobile-line" />
          <span className="navbar-mobile-line" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${isMobileOpen ? "navbar-mobile-visible" : ""}`}>
        <div className="navbar-mobile-backdrop" onClick={() => setIsMobileOpen(false)} />
        <div className="navbar-mobile-content">
          <nav className="navbar-mobile-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar-mobile-link ${
                  location.pathname === link.path ? "navbar-mobile-link-active" : ""
                }`}
              >
                <span className="navbar-mobile-dot" />
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            className="navbar-mobile-cta"
            onClick={() => setIsMobileOpen(false)}
          >
            <span>Contact Us</span>
            <span className="navbar-cta-arrow">→</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;