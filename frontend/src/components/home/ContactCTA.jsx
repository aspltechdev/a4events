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


// import { Link } from "react-router-dom";
// import "./ContactCTA.css";

// function ContactCTA() {
//   return (
//     <section className="a4-cta-section">

//       <div className="a4-cta-container">

//         <span className="a4-cta-tag">
//           READY FOR YOUR NEXT EXPERIENCE?
//         </span>

//         <h2 className="a4-cta-title">
//           Discover Events That Inspire,
//           Entertain & Connect.
//         </h2>

//         <p className="a4-cta-description">
//           Explore concerts, festivals, conferences,
//           workshops and unforgettable experiences
//           happening near you.
//         </p>

//         <div className="a4-cta-actions">
//           <Link to="/events">
//             <button className="a4-cta-primary-btn">
//               Explore Events
//             </button>
//           </Link>

//           <Link to="/contact">
//             <button className="a4-cta-secondary-btn">
//               Contact Us
//             </button>
//           </Link>
//         </div>

//       </div>

//     </section>
//   );
// }

// export default ContactCTA;



import { Link } from "react-router-dom";
import "./ContactCTA.css";

function ContactCTA() {
  return (
    <section className="cta__wrapper">
      {/* Background Elements */}
      <div className="cta__bgSubtle"></div>
      <div className="cta__bgGradient"></div>
      <div className="cta__accentLines">
        <div className="cta__accentLine"></div>
        <div className="cta__accentLine"></div>
        <div className="cta__accentLine"></div>
      </div>

      {/* Floating Elements */}
      <div className="cta__floatingOrb"></div>
      <div className="cta__floatingOrbTwo"></div>

      <div className="cta__container">
        <div className="cta__content">
          {/* Badge */}
          <div className="cta__badge">
            <span className="cta__badgeDot"></span>
            <span className="cta__badgeText">READY TO BEGIN</span>
          </div>

          {/* Main Title */}
          <h2 className="cta__title">
            Elevate your events & embrace
            <br />
            <span className="cta__titleAccent">a healthier way of living</span>
          </h2>

          {/* Description */}
          <p className="cta__description">
            Whether you're looking to book unforgettable experiences or bring home 
            nature's finest organic products — we're here to help you every step of the way.
          </p>

          {/* CTA Buttons */}
          <div className="cta__buttons">
            <Link to="/events" className="cta__btnPrimary">
              Explore Events
              <span className="cta__btnArrow">→</span>
            </Link>

            <Link to="/products" className="cta__btnSecondary">
              Shop Products
              <span className="cta__btnArrow">→</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="cta__trustSection">
            <div className="cta__trustLine"></div>
            <div className="cta__trustBadges">
              <div className="cta__trustBadge">Verified Experiences</div>
              <div className="cta__trustSeparator"></div>
              <div className="cta__trustBadge">100% Organic Products</div>
              <div className="cta__trustSeparator"></div>
              <div className="cta__trustBadge">Secure Transactions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;