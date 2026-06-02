// import { Link } from 'react-router-dom';

// function ContactCTA() {
//   return (
//     <section
//       style={{
//         padding: '100px 20px',
//         textAlign: 'center'
//       }}
//     >
//       <h2>
//         Planning Your Next Event?
//       </h2>

//       <p>
//         Let's create an unforgettable
//         experience together.
//       </p>

//       <Link to="/contact">
//         <button>
//           Contact Us
//         </button>
//       </Link>
//     </section>
//   );
// }

// export default ContactCTA;


import { Link } from "react-router-dom";
import "./ContactCTA.css";

function ContactCTA() {
  return (
    <section className="a4-cta-section">

      <div className="a4-cta-container">

        <span className="a4-cta-tag">
          READY FOR YOUR NEXT EXPERIENCE?
        </span>

        <h2 className="a4-cta-title">
          Discover Events That Inspire,
          Entertain & Connect.
        </h2>

        <p className="a4-cta-description">
          Explore concerts, festivals, conferences,
          workshops and unforgettable experiences
          happening near you.
        </p>

        <div className="a4-cta-actions">
          <Link to="/events">
            <button className="a4-cta-primary-btn">
              Explore Events
            </button>
          </Link>

          <Link to="/contact">
            <button className="a4-cta-secondary-btn">
              Contact Us
            </button>
          </Link>
        </div>

      </div>

    </section>
  );
}

export default ContactCTA;