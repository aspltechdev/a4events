// import { Link } from 'react-router-dom';

// function Navbar() {
//   return (
//     <nav>
//       <Link to="/">Home</Link> |{' '}
//       <Link to="/products">Products</Link> |{' '}
//       <Link to="/events">Events</Link> |{' '}
//       <Link to="/contact">Contact</Link>
//     </nav>
//   );
// }

// export default Navbar;

// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   return (
//     <header className="navbar">
//       <div className="navbar-container">

//         <Link to="/" className="logo">
//           A4a Events
//         </Link>

//         <nav className="nav-links">
//           <Link to="/">Home</Link>
//           <Link to="/events">Events</Link>
//           <Link to="/products">Products</Link>
//           <Link to="/contact">Contact</Link>
//         </nav>

//         <div className="nav-actions">
//           <button className="nav-login">
//             Sign In
//           </button>

//           <button className="nav-cta">
//             Book Event
//           </button>
//         </div>

//       </div>
//     </header>
//   );
// }

// export default Navbar;


import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          <img
            src={logo}
            alt="A4 Events Logo"
            className="logo-image"
          />

          <span className="logo-text">
            A4A Events
          </span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="nav-actions">
          <Link
            to="/events"
            className="nav-cta"
          >
            Book Now
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Navbar;