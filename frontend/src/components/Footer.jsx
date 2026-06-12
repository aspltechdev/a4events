import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="a4-footer">

      <div className="a4-footer-container">

        {/* Brand */}
        <div className="a4-footer-brand">

          <Link to="/" className="a4-footer-logo-link">
            <img
              src={logo}
              alt="A4 Events Logo"
              className="a4-footer-logo-image"
            />
            <span className="a4-footer-logo-text">A4 Events</span>
          </Link>

          <p className="a4-footer-description">
            Discover, explore and book unforgettable
            experiences. From concerts and festivals
            to conferences and workshops, we bring
            extraordinary events closer to you.
          </p>

        </div>

        {/* Quick Links */}
        <div className="a4-footer-column">

          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>

        </div>

        {/* Categories */}
        <div className="a4-footer-column">

          <h4>Event Categories</h4>

          <a href="/">Concerts</a>
          <a href="/">Festivals</a>
          <a href="/">Workshops</a>
          <a href="/">Conferences</a>

        </div>

        {/* Contact */}
        <div className="a4-footer-column">

          <h4>Contact</h4>

          <p>Pondicherry, India</p>
          <p>info@a4events.com</p>
          <p>+91 98765 43210</p>

        </div>

      </div>

      <div className="a4-footer-bottom">

        <p>
          © 2026 A4 Events. All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;