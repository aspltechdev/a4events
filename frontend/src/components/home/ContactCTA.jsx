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



// import { Link } from "react-router-dom";
// import "./ContactCTA.css";

// function ContactCTA() {
//   return (
//     <section className="cta__wrapper">
//       {/* Background Elements */}
//       <div className="cta__bgSubtle"></div>
//       <div className="cta__bgGradient"></div>
//       <div className="cta__accentLines">
//         <div className="cta__accentLine"></div>
//         <div className="cta__accentLine"></div>
//         <div className="cta__accentLine"></div>
//       </div>

//       {/* Floating Elements */}
//       <div className="cta__floatingOrb"></div>
//       <div className="cta__floatingOrbTwo"></div>

//       <div className="cta__container">
//         <div className="cta__content">
//           {/* Badge */}
//           <div className="cta__badge">
//             <span className="cta__badgeDot"></span>
//             <span className="cta__badgeText">READY TO BEGIN</span>
//           </div>

//           {/* Main Title */}
//           <h2 className="cta__title">
//             Elevate your events & embrace
//             <br />
//             <span className="cta__titleAccent">a healthier way of living</span>
//           </h2>

//           {/* Description */}
//           <p className="cta__description">
//             Whether you're looking to book unforgettable experiences or bring home 
//             nature's finest organic products — we're here to help you every step of the way.
//           </p>

//           {/* CTA Buttons */}
//           <div className="cta__buttons">
//             <Link to="/events" className="cta__btnPrimary">
//               Explore Events
//               <span className="cta__btnArrow">→</span>
//             </Link>

//             <Link to="/products" className="cta__btnSecondary">
//               Shop Products
//               <span className="cta__btnArrow">→</span>
//             </Link>
//           </div>

//           {/* Trust Indicators */}
//           <div className="cta__trustSection">
//             <div className="cta__trustLine"></div>
//             <div className="cta__trustBadges">
//               <div className="cta__trustBadge">Verified Experiences</div>
//               <div className="cta__trustSeparator"></div>
//               <div className="cta__trustBadge">100% Organic Products</div>
//               <div className="cta__trustSeparator"></div>
//               <div className="cta__trustBadge">Secure Transactions</div>
//             </div>
//           </div>
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
              <span className="cta__btnContent">
                <svg className="cta__btnIcon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2 6a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4H6a4 4 0 01-4-4V6z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 2v3a1 1 0 001 1h2a1 1 0 001-1V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Explore Events
              </span>
              <span className="cta__btnArrow">→</span>
            </Link>

            <Link to="/products" className="cta__btnSecondary">
              <span className="cta__btnContent">
                <svg className="cta__btnIcon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 6l6-3 6 3-6 3-6-3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M4 10l6 3 6-3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M4 14l6 3 6-3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                Shop Products
              </span>
              <span className="cta__btnArrow">→</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="cta__trustSection">
            <div className="cta__trustLine"></div>
            <div className="cta__trustBadges">
              <div className="cta__trustBadge">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L9 5.5L13.5 6.5L10 10L11 14.5L7 12L3 14.5L4 10L0.5 6.5L5 5.5L7 1Z" fill="currentColor"/>
                </svg>
                Verified Experiences
              </div>
              <div className="cta__trustSeparator"></div>
              <div className="cta__trustBadge">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L9 5.5L13.5 6.5L10 10L11 14.5L7 12L3 14.5L4 10L0.5 6.5L5 5.5L7 1Z" fill="currentColor"/>
                </svg>
                100% Organic Products
              </div>
              <div className="cta__trustSeparator"></div>
              <div className="cta__trustBadge">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L9 5.5L13.5 6.5L10 10L11 14.5L7 12L3 14.5L4 10L0.5 6.5L5 5.5L7 1Z" fill="currentColor"/>
                </svg>
                Secure Transactions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;