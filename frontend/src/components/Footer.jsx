// // import { Link } from "react-router-dom";
// // import logo from "../assets/logo.jpeg";
// // import "./Footer.css";

// // function Footer() {
// //   return (
// //     <footer className="a4-footer">

// //       <div className="a4-footer-container">

// //         {/* Brand */}
// //         <div className="a4-footer-brand">

// //           <Link to="/" className="a4-footer-logo-link">
// //             <img
// //               src={logo}
// //               alt="A4 Events Logo"
// //               className="a4-footer-logo-image"
// //             />
// //             <span className="a4-footer-logo-text">A4 Events</span>
// //           </Link>

// //           <p className="a4-footer-description">
// //             Discover, explore and book unforgettable
// //             experiences. From concerts and festivals
// //             to conferences and workshops, we bring
// //             extraordinary events closer to you.
// //           </p>

// //         </div>

// //         {/* Quick Links */}
// //         <div className="a4-footer-column">

// //           <h4>Quick Links</h4>

// //           <Link to="/">Home</Link>
// //           <Link to="/events">Events</Link>
// //           <Link to="/products">Products</Link>
// //           <Link to="/contact">Contact</Link>

// //         </div>

// //         {/* Categories */}
// //         <div className="a4-footer-column">

// //           <h4>Event Categories</h4>

// //           <a href="/">Concerts</a>
// //           <a href="/">Festivals</a>
// //           <a href="/">Workshops</a>
// //           <a href="/">Conferences</a>

// //         </div>

// //         {/* Contact */}
// //         <div className="a4-footer-column">

// //           <h4>Contact</h4>

// //           <p>Pondicherry, India</p>
// //           <p>info@a4events.com</p>
// //           <p>+91 98765 43210</p>

// //         </div>

// //       </div>

// //       <div className="a4-footer-bottom">

// //         <p>
// //           © 2026 A4 Events. All rights reserved.
// //         </p>

// //       </div>

// //     </footer>
// //   );
// // }

// // export default Footer;

// import { Link } from "react-router-dom";
// import logo from "../assets/logo11.png";
// import "./Footer.css";

// function Footer() {
//   return (
//     <footer className="ft-premium">
//       {/* Subtle Atmosphere */}
//       <div className="ft-atmosphere" aria-hidden="true">
//         <div className="ft-glow ft-glow--warm" />
//         <div className="ft-grain" />
//       </div>

//       {/* Top Separator */}
//       <div className="ft-separator" aria-hidden="true">
//         <div className="ft-separator-line" />
//         <div className="ft-separator-dot" />
//         <div className="ft-separator-line" />
//       </div>

//       <div className="ft-container">
//         {/* Main Footer Content */}
//         <div className="ft-grid">
//           {/* Brand Column */}
//           <div className="ft-brand">
//             <Link to="/" className="ft-logo-link">
//               <img
//                 src={logo}
//                 alt="A4A Anagrams Group"
//                 className="ft-logo-image"
//               />
//             </Link>

//             <p className="ft-brand-description">
//               A century-old legacy ecosystem bridging deep-rooted Indian
//               heritage with European innovation. Premium organic quality
//               delivered to European soil.
//             </p>

//             <span className="ft-tagline">
//              A4AAnagrams UG


//             </span>
//             <span className="ft-tagline ">Frankfurt am main
//               Germany</span>
//           </div>

//           {/* Navigate */}
//           <div className="ft-column">
//             <h4 className="ft-column-title">Navigate</h4>
//             <nav className="ft-links">
//               <Link to="/" className="ft-link">Home</Link>
//               <Link to="/events" className="ft-link">Events</Link>
//               <Link to="/products" className="ft-link">Products</Link>
//               <Link to="/contact" className="ft-link">Contact</Link>
//             </nav>
//           </div>

//           {/* Core Pillars */}
//           <div className="ft-column">
//             <h4 className="ft-column-title">Core Pillars</h4>
//             {/* <nav className="ft-links">
//               <Link to="/products" className="ft-link">Authentic Provisions</Link>
//               <Link to="/events" className="ft-link">Indo Experiences</Link>
//               <Link to="/events" className="ft-link">EduConsulting</Link>
//               <Link to="/products" className="ft-link">Business Expansion</Link>
//             </nav> */}

//             <nav className="ft-links">
//               <Link to="/products" className="ft-link">Organic Products</Link>
//               <Link to="/events" className="ft-link">Concerts & Festivals</Link>
//               <Link to="/products" className="ft-link">Millet Mix & Snacks</Link>
//               <Link to="/events" className="ft-link">Workshops & Conferences</Link>
//             </nav>
//           </div>

//           {/* Global Presence */}
//           <div className="ft-column">
//             <h4 className="ft-column-title">Global Presence</h4>
//             <div className="ft-presence">
//               <div className="ft-presence-item">
//                 <span className="ft-presence-country">Germany</span>
//                 <span className="ft-presence-role">Headquarters</span>
//               </div>
//               <div className="ft-presence-item">
//                 <span className="ft-presence-country">India</span>
//                 <span className="ft-presence-role">Heritage Roots</span>
//               </div>
//               <div className="ft-presence-item">
//                 <span className="ft-presence-country">Europe</span>
//                 <span className="ft-presence-role">Operations</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="ft-bottom">
//           <p className="ft-copyright">
//             © 2026 A4A Anagrams Group EU
//           </p>
//           <div className="ft-bottom-links">
//             <span className="ft-bottom-link">Privacy</span>
//             <span className="ft-bottom-dot" />
//             <span className="ft-bottom-link">Terms</span>
//             <span className="ft-bottom-dot" />
//             <span className="ft-bottom-link">Imprint</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;


import { Link } from "react-router-dom";
import logo from "../assets/logo11.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="ft-compact">
      {/* Background */}
      <div className="ft-bg-compact" aria-hidden="true">
        <div className="ft-glow-compact ft-glow-compact--warm" />
        <div className="ft-grain-compact" />
      </div>

      <div className="ft-container-compact">
        {/* Main Footer Content */}
        <div className="ft-grid-compact">
          {/* Brand Column */}
          <div className="ft-brand-compact">
            <Link to="/" className="ft-logo-link-compact">
              <img
                src={logo}
                alt="A4A Anagrams Group"
                className="ft-logo-image-compact"
              />
            </Link>
            <p className="ft-brand-description-compact">
              A century-old legacy bridging Indian heritage with European innovation. 
              Premium organic quality delivered to European soil.
            </p>
            <div className="ft-brand-meta-compact">
              <span>A4A Anagrams UG</span>
              <span className="ft-meta-dot" />
              <span>Frankfurt am Main, Germany</span>
            </div>
          </div>

          {/* Navigate */}
          <div className="ft-column-compact">
            <h4 className="ft-column-title-compact">Navigate</h4>
            <nav className="ft-links-compact">
              <Link to="/" className="ft-link-compact">Home</Link>
              <Link to="/events" className="ft-link-compact">Events</Link>
              <Link to="/products" className="ft-link-compact">Products</Link>
              <Link to="/contact" className="ft-link-compact">Contact</Link>
            </nav>
          </div>

          {/* Core Pillars */}
          <div className="ft-column-compact">
            <h4 className="ft-column-title-compact">Core Pillars</h4>
            <nav className="ft-links-compact">
              <Link to="/products" className="ft-link-compact">Organic Products</Link>
                 <Link to="/products" className="ft-link-compact">Imported From India</Link>
              <Link to="/events" className="ft-link-compact">Concerts & Festivals</Link>
           
              <Link to="/events" className="ft-link-compact">Workshops & Conferences</Link>
            </nav>
          </div>

          {/* Global Presence */}
          <div className="ft-column-compact">
            <h4 className="ft-column-title-compact">Global Presence</h4>
            <div className="ft-presence-compact">
              <div className="ft-presence-item-compact">
                <span className="ft-presence-country-compact">Germany</span>
                <span className="ft-presence-role-compact">Headquarters</span>
              </div>
              <div className="ft-presence-item-compact">
                <span className="ft-presence-country-compact">India</span>
                <span className="ft-presence-role-compact">Heritage Roots</span>
              </div>
              <div className="ft-presence-item-compact">
                <span className="ft-presence-country-compact">Europe</span>
                <span className="ft-presence-role-compact">Operations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="ft-bottom-compact">
          <p className="ft-copyright-compact">
            © 2026 A4A Anagrams Group EU
          </p>
          <div className="ft-bottom-links-compact">
            <span className="ft-bottom-link-compact">Privacy</span>
            <span className="ft-bottom-dot-compact" />
            <span className="ft-bottom-link-compact">Terms</span>
            <span className="ft-bottom-dot-compact" />
            <span className="ft-bottom-link-compact">Imprint</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;