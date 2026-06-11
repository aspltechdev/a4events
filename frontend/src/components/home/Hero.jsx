
// // import { useEffect, useState } from 'react';
// // import api from '../../services/api';

// // function Hero() {
// //   const [slides, setSlides] = useState([]);
// //   const [current, setCurrent] = useState(0);

// //   useEffect(() => {
// //     loadSlides();
// //   }, []);

// //   useEffect(() => {
// //     if (!slides.length) return;

// //     const interval = setInterval(() => {
// //       setCurrent(
// //         (prev) => (prev + 1) % slides.length
// //       );
// //     }, 5000);

// //     return () => clearInterval(interval);
// //   }, [slides]);

// //   const loadSlides = async () => {
// //     try {
// //       const { data } =
// //         await api.get('/hero-slides');

// //       setSlides(data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   if (!slides.length) {
// //     return null;
// //   }

// //   return (
// //     <section
// //       style={{
// //         height: '100vh',
// //         backgroundImage: `url(http://localhost:5000${slides[current].image})`,
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center',
// //         display: 'flex',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         color: '#fff',
// //         textAlign: 'center',
// //         position: 'relative'
// //       }}
// //     >
// //       <div
// //         style={{
// //           position: 'absolute',
// //           inset: 0,
// //           background:
// //             'rgba(0,0,0,0.55)'
// //         }}
// //       />

// //       <div
// //         style={{
// //           position: 'relative',
// //           zIndex: 2
// //         }}
// //       >
// //         <h1>
// //           {slides[current].title}
// //         </h1>

// //         <p>
// //           {slides[current].subtitle}
// //         </p>

// //         <div
// //           style={{
// //             marginTop: '20px'
// //           }}
// //         >
// //           <button>
// //             Explore Events
// //           </button>

// //           <button
// //             style={{
// //               marginLeft: '15px'
// //             }}
// //           >
// //             Contact Us
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default Hero;















// // import { useEffect, useState } from "react";
// // import api from "../../services/api";
// // import "./Hero.css";

// // function Hero() {
// //   const [slides, setSlides] = useState([]);
// //   const [current, setCurrent] = useState(0);

// //   useEffect(() => {
// //     loadSlides();
// //   }, []);

// //   useEffect(() => {
// //     if (!slides.length) return;

// //     const interval = setInterval(() => {
// //       setCurrent((prev) => (prev + 1) % slides.length);
// //     }, 5000);

// //     return () => clearInterval(interval);
// //   }, [slides]);

// //   const loadSlides = async () => {
// //     try {
// //       const { data } = await api.get("/hero-slides");
// //       setSlides(data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   if (!slides.length) return null;

// //   return (
    
// //     <section
// //   className="hero"
// //   style={{
// //     backgroundImage: `url(http://localhost:5000${slides[current].image})`,
// //   }}
// // >
// //   <div className="hero-bg-scale"></div>

// //   <div className="noise"></div>

// //   <div className="gradient gradient-1"></div>
// //   <div className="gradient gradient-2"></div>

// //   <div className="hero-overlay"></div>

// //   <div className="hero-content">

// //     <div className="hero-badge">
// //       ✨ Premium Event Experiences
// //     </div>

// //     <h1 className="hero-title">
// //       {slides[current].title}
// //     </h1>

// //     <p className="hero-subtitle">
// //       {slides[current].subtitle}
// //     </p>

// //     <div className="hero-buttons">
// //       <button className="btn-primary">
// //         Explore Events
// //       </button>

// //       <button className="btn-secondary">
// //         Contact Us
// //       </button>
// //     </div>

// //   </div>

// //   <div className="floating-card card-1">
// //     🎵 500+ Events Hosted
// //   </div>

// //   <div className="floating-card card-2">
// //     🎤 Live Concerts
// //   </div>

// //   <div className="floating-card card-3">
// //     🎯 Premium Experiences
// //   </div>

// // </section>
// //   );
// // }

// // export default Hero;







// // import { useEffect, useState } from "react";
// // import api from "../../services/api";
// // import "./Hero.css";

// // function Hero() {
// //   const [slides, setSlides] = useState([]);
// //   const [current, setCurrent] = useState(0);

// //   useEffect(() => {
// //     loadSlides();
// //   }, []);

// //   useEffect(() => {
// //     if (!slides.length) return;

// //     const timer = setInterval(() => {
// //       setCurrent((prev) => (prev + 1) % slides.length);
// //     }, 6000);

// //     return () => clearInterval(timer);
// //   }, [slides]);

// //   const loadSlides = async () => {
// //     try {
// //       const { data } = await api.get("/hero-slides");
// //       setSlides(data);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   if (!slides.length) return null;

// //   const slide = slides[current];

// //   return (
// //     <section className="hero">
// //       {/* Background Image */}
// //       <div
// //         className="hero-bg"
// //         style={{
// //           backgroundImage: `url(http://localhost:5000${slide.image})`,
// //         }}
// //       />

// //       {/* Overlay */}
// //       <div className="hero-overlay" />

// //       {/* Left Glow */}
// //       <div className="hero-glow hero-glow-left" />

// //       {/* Right Glow */}
// //       <div className="hero-glow hero-glow-right" />

// //       {/* Main Content */}
// //       <div className="hero-container">
// //         <div className="hero-content">
// //           <span className="hero-label">
// //             FEATURED EVENT
// //           </span>

// //           <h1 className="hero-title">
// //             {slide.title}
// //           </h1>

// //           <p className="hero-description">
// //             {slide.subtitle}
// //           </p>

// //           <div className="hero-actions">
// //             <button className="primary-btn">
// //               Book Tickets
// //             </button>

// //             <button className="secondary-btn">
// //               View Details
// //             </button>
// //           </div>
// //         </div>

// //         {/* <div className="hero-panel">
// //           <div className="panel-item">
// //             <span>Location</span>
// //             <h4>Bangalore</h4>
// //           </div>

// //           <div className="panel-item">
// //             <span>Date</span>
// //             <h4>15 Aug 2026</h4>
// //           </div>

// //           <div className="panel-item">
// //             <span>Audience</span>
// //             <h4>20,000+</h4>
// //           </div>
// //         </div> */}
// //       </div>

// //       {/* Slide Navigation */}
// //       <div className="hero-pagination">
// //         {slides.map((_, index) => (
// //           <button
// //             key={index}
// //             className={`hero-dot ${
// //               current === index ? "active" : ""
// //             }`}
// //             onClick={() => setCurrent(index)}
// //           />
// //         ))}
// //       </div>

// //       {/* Bottom Fade */}
// //       <div className="hero-bottom-fade" />
// //     </section>
// //   );
// // }

// // export default Hero;

// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import api from "../../services/api";
// // import "./Hero.css";

// // function Hero() {
// //   const [slides, setSlides] = useState([]);
// //   const [current, setCurrent] = useState(0);

// //   useEffect(() => {
// //     loadSlides();
// //   }, []);

// //   useEffect(() => {
// //     if (!slides.length) return;

// //     const timer = setInterval(() => {
// //       setCurrent((prev) => (prev + 1) % slides.length);
// //     }, 6000);

// //     return () => clearInterval(timer);
// //   }, [slides]);

// //   const loadSlides = async () => {
// //     try {
// //       const { data } = await api.get("/hero-slides");

// //       const activeSlides = data
// //         .filter((slide) => slide.isActive)
// //         .sort((a, b) => a.order - b.order);

// //       setSlides(activeSlides);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   if (!slides.length) return null;

// //   const slide = slides[current];

// //   const isInternalLink =
// //     slide.buttonLink &&
// //     !slide.buttonLink.startsWith("http") &&
// //     !slide.buttonLink.startsWith("https");

// //   return (
// //     <section className="hero">
// //       {/* Background Image */}

// //       <div
// //         className="hero-bg"
// //         style={{
// //           backgroundImage: `url(http://localhost:5000${slide.image})`,
// //         }}
// //       />

// //       {/* Overlay */}

// //       <div className="hero-overlay" />

// //       {/* Left Glow */}

// //       <div className="hero-glow hero-glow-left" />

// //       {/* Right Glow */}

// //       <div className="hero-glow hero-glow-right" />

// //       {/* Main Content */}

// //       <div className="hero-container">
// //         <div className="hero-content">
// //           <span className="hero-label">
// //             FEATURED EVENT
// //           </span>

// //           <h1 className="hero-title">
// //             {slide.title}
// //           </h1>

// //           <p className="hero-description">
// //             {slide.subtitle}
// //           </p>

// //           {/* <div className="hero-actions">
         

// //             {slide.buttonLink ? (
// //               isInternalLink ? (
// //                 <Link
// //                   to={slide.buttonLink}
// //                   className="primary-btn"
// //                 >
// //                   {slide.buttonText ||
// //                     "Explore Events"}
// //                 </Link>
// //               ) : (
// //                 <a
// //                   href={slide.buttonLink}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="primary-btn"
// //                 >
// //                   {slide.buttonText ||
// //                     "Explore Events"}
// //                 </a>
// //               )
// //             ) : (
// //               <Link
// //                 to="/events"
// //                 className="primary-btn"
// //               >
// //                 {slide.buttonText ||
// //                   "Explore Events"}
// //               </Link>
// //             )}

      

// //             <Link
// //               to="/events"
// //               className="secondary-btn"
// //             >
// //               View Events
// //             </Link>
// //           </div> */}


// //           <div className="hero-actions">
// //   {slide.buttonLink ? (
// //     isInternalLink ? (
// //       <Link
// //         to={slide.buttonLink}
// //         className="primary-btn"
// //       >
// //         Book Now
// //       </Link>
// //     ) : (
// //       <a
// //         href={slide.buttonLink}
// //         target="_blank"
// //         rel="noopener noreferrer"
// //         className="primary-btn"
// //       >
// //         Book Now
// //       </a>
// //     )
// //   ) : (
// //     <Link
// //       to="/events"
// //       className="primary-btn"
// //     >
// //       Book Now
// //     </Link>
// //   )}

// //   <Link
// //     to="/events"
// //     className="secondary-btn"
// //   >
// //     View Events
// //   </Link>
// // </div>
// //         </div>

// //         {/* Optional Stats Panel */}

// //         {/*
// //         <div className="hero-panel">
// //           <div className="panel-item">
// //             <span>Location</span>
// //             <h4>Bangalore</h4>
// //           </div>

// //           <div className="panel-item">
// //             <span>Date</span>
// //             <h4>15 Aug 2026</h4>
// //           </div>

// //           <div className="panel-item">
// //             <span>Audience</span>
// //             <h4>20,000+</h4>
// //           </div>
// //         </div>
// //         */}
// //       </div>

// //       {/* Slide Navigation */}

// //       <div className="hero-pagination">
// //         {slides.map((_, index) => (
// //           <button
// //             key={index}
// //             className={`hero-dot ${
// //               current === index
// //                 ? "active"
// //                 : ""
// //             }`}
// //             onClick={() =>
// //               setCurrent(index)
// //             }
// //           />
// //         ))}
// //       </div>

// //       {/* Bottom Fade */}

// //       <div className="hero-bottom-fade" />
// //     </section>
// //   );
// // }

// // export default Hero;


// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import api from "../../services/api";
// // import "./Hero.css";

// // function Hero() {
// //   const [slides, setSlides] = useState([]);
// //   const [current, setCurrent] = useState(0);

// //   const API_URL =
// //     import.meta.env.VITE_API_URL;

// //   useEffect(() => {
// //     loadSlides();
// //   }, []);

// //   useEffect(() => {
// //     if (!slides.length) return;

// //     const timer = setInterval(() => {
// //       setCurrent(
// //         (prev) =>
// //           (prev + 1) %
// //           slides.length
// //       );
// //     }, 6000);

// //     return () =>
// //       clearInterval(timer);
// //   }, [slides]);

// //   const loadSlides = async () => {
// //     try {
// //       const { data } =
// //         await api.get(
// //           "/hero-slides"
// //         );

// //       const activeSlides =
// //         data
// //           .filter(
// //             (slide) =>
// //               slide.isActive
// //           )
// //           .sort(
// //             (a, b) =>
// //               a.order -
// //               b.order
// //           );

// //       setSlides(
// //         activeSlides
// //       );

// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   if (!slides.length)
// //     return null;

// //   const slide =
// //     slides[current];

// //   let redirectLink =
// //     "/events";

// //   if (
// //     slide.slideType ===
// //       "product" &&
// //     slide.productId
// //   ) {
// //     redirectLink =
// //       `/products/${slide.productId}`;
// //   } else if (
// //     slide.slideType ===
// //       "event" &&
// //     slide.eventId
// //   ) {
// //     redirectLink =
// //       `/events/${slide.eventId}`;
// //   } else if (
// //     slide.buttonLink
// //   ) {
// //     redirectLink =
// //       slide.buttonLink;
// //   }

// //   const isInternalLink =
// //     redirectLink &&
// //     !redirectLink.startsWith(
// //       "http"
// //     ) &&
// //     !redirectLink.startsWith(
// //       "https"
// //     );

// //   return (
// //     <section className="hero">

// //       {/* Background Image */}

// //       <div
// //         className="hero-bg"
// //         style={{
// //           backgroundImage: `url(http://localhost:5000${slide.image})`,
// //         }}
// //       />

// //       {/* Overlay */}

// //       <div className="hero-overlay" />

// //       {/* Left Glow */}

// //       <div className="hero-glow hero-glow-left" />

// //       {/* Right Glow */}

// //       <div className="hero-glow hero-glow-right" />

// //       {/* Content */}

// //       <div className="hero-container">

// //         <div className="hero-content">

// //           <span className="hero-label">

// //             {slide.slideType ===
// //             "product"
// //               ? "FEATURED PRODUCT"
// //               : slide.slideType ===
// //                 "event"
// //               ? "FEATURED EVENT"
// //               : "FEATURED"}

// //           </span>

// //           <h1 className="hero-title">
// //             {slide.title}
// //           </h1>

// //           <p className="hero-description">
// //             {slide.subtitle}
// //           </p>

// //           <div className="hero-actions">

// //             {isInternalLink ? (
// //               <Link
// //                 to={
// //                   redirectLink
// //                 }
// //                 className="primary-btn"
// //               >
// //                 {slide.buttonText ||
// //                   "Explore"}
// //               </Link>
// //             ) : (
// //               <a
// //                 href={
// //                   redirectLink
// //                 }
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="primary-btn"
// //               >
// //                 {slide.buttonText ||
// //                   "Explore"}
// //               </a>
// //             )}

// //             {slide.slideType ===
// //             "product" ? (
// //               <Link
// //                 to="/products"
// //                 className="secondary-btn"
// //               >
// //                 View Products
// //               </Link>
// //             ) : (
// //               <Link
// //                 to="/events"
// //                 className="secondary-btn"
// //               >
// //                 View Events
// //               </Link>
// //             )}

// //           </div>

// //         </div>

// //       </div>

// //       {/* Pagination */}

// //       <div className="hero-pagination">

// //         {slides.map(
// //           (
// //             _,
// //             index
// //           ) => (
// //             <button
// //               key={index}
// //               className={`hero-dot ${
// //                 current ===
// //                 index
// //                   ? "active"
// //                   : ""
// //               }`}
// //               onClick={() =>
// //                 setCurrent(
// //                   index
// //                 )
// //               }
// //             />
// //           )
// //         )}

// //       </div>

// //       {/* Bottom Fade */}

// //       <div className="hero-bottom-fade" />

// //     </section>
// //   );
// // }

// // export default Hero;




// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../../services/api";
// import "./Hero.css";

// function Hero() {
//   const [slides, setSlides] = useState([]);
//   const [current, setCurrent] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   useEffect(() => {
//     loadSlides();
//   }, []);

//   useEffect(() => {
//     if (!slides.length) return;

//     const timer = setInterval(() => {
//       setIsAnimating(true);
//       setTimeout(() => {
//         setCurrent((prev) => (prev + 1) % slides.length);
//         setIsAnimating(false);
//       }, 300);
//     }, 7000);

//     return () => clearInterval(timer);
//   }, [slides]);

//   const loadSlides = async () => {
//     try {
//       const { data } = await api.get("/hero-slides");
//       const activeSlides = data
//         .filter((slide) => slide.isActive)
//         .sort((a, b) => a.order - b.order);
//       setSlides(activeSlides);
//     } catch (err) {
//       console.error(err);
//       // Demo fallback data for preview
//       setSlides([
//         {
//           id: 1,
//           title: "Premium Quality Products",
//           subtitle: "Discover excellence in every detail. Crafted for those who appreciate the finer things.",
//           image: "/images/hero1.jpg",
//           slideType: "product",
//           buttonText: "Shop Now",
//           buttonLink: "/products",
//           isActive: true,
//           order: 1
//         },
//         {
//           id: 2,
//           title: "Exclusive Events",
//           subtitle: "Join us for unforgettable experiences. Network, learn, and grow with industry leaders.",
//           image: "/images/hero2.jpg",
//           slideType: "event",
//           buttonText: "Register Now",
//           buttonLink: "/events",
//           isActive: true,
//           order: 2
//         }
//       ]);
//     }
//   };

//   if (!slides.length) return null;

//   const slide = slides[current];

//   let redirectLink = "/events";
//   if (slide.slideType === "product" && slide.productId) {
//     redirectLink = `/products/${slide.productId}`;
//   } else if (slide.slideType === "event" && slide.eventId) {
//     redirectLink = `/events/${slide.eventId}`;
//   } else if (slide.buttonLink) {
//     redirectLink = slide.buttonLink;
//   }

//   const isInternalLink = redirectLink && !redirectLink.startsWith("http") && !redirectLink.startsWith("https");

//   return (
//     <section className="hero-premium">
//       {/* Animated Gradient Orbs */}
//       <div className="orb orb-1"></div>
//       <div className="orb orb-2"></div>
//       <div className="orb orb-3"></div>
      
//       {/* Background Image with Parallax Effect */}
//       <div 
//         className="hero-bg-premium" 
//         style={{ backgroundImage: `url(${'http://localhost:5000'}${slide.image})` }}
//       >
//         <div className="hero-bg-overlay"></div>
//       </div>

//       {/* Cinematic Light Leaks */}
//       <div className="light-leak light-leak-1"></div>
//       <div className="light-leak light-leak-2"></div>
      
//       {/* Animated Scan Lines */}
//       <div className="scan-lines"></div>

//       {/* Vignette Effect */}
//       <div className="vignette"></div>

//       {/* Main Content Container */}
//       <div className="hero-container-premium">
//         <div className={`hero-content-premium ${isAnimating ? 'fade-out' : 'fade-in'}`}>
          
//           {/* Premium Badge */}
//           <div className="hero-badge">
//             <span className="badge-icon">
//               <i className="fas fa-crown"></i>
//             </span>
//             <span className="badge-text">
//               {slide.slideType === "product" ? "FEATURED PRODUCT" : slide.slideType === "event" ? "FEATURED EVENT" : "EXCLUSIVE"}
//             </span>
//           </div>

//           {/* Main Title with Gradient */}
//           <h1 className="hero-title-premium">
//             <span className="title-gradient">{slide.title}</span>
//           </h1>

//           {/* Description */}
//           <p className="hero-description-premium">{slide.subtitle}</p>

//           {/* CTA Buttons */}
//           <div className="hero-actions-premium">
//             {isInternalLink ? (
//               <Link to={redirectLink} className="btn-primary-premium">
//                 <span>{slide.buttonText || "Explore Now"}</span>
//                 <i className="fas fa-arrow-right"></i>
//               </Link>
//             ) : (
//               <a href={redirectLink} target="_blank" rel="noopener noreferrer" className="btn-primary-premium">
//                 <span>{slide.buttonText || "Explore Now"}</span>
//                 <i className="fas fa-arrow-right"></i>
//               </a>
//             )}
            
//             <button className="btn-secondary-premium">
//               <i className="fas fa-play-circle"></i>
//               <span>Watch Demo</span>
//             </button>
//           </div>

//           {/* Trust Indicators */}
//           <div className="trust-indicators">
//             <div className="trust-item">
//               <i className="fas fa-check-circle"></i>
//               <span>Premium Quality</span>
//             </div>
//             <div className="trust-item">
//               <i className="fas fa-shield-alt"></i>
//               <span>Secure Payment</span>
//             </div>
//             <div className="trust-item">
//               <i className="fas fa-headset"></i>
//               <span>24/7 Support</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Premium Pagination Dots */}
//       <div className="hero-pagination-premium">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             className={`pagination-dot ${current === index ? "active" : ""}`}
//             onClick={() => {
//               setIsAnimating(true);
//               setTimeout(() => {
//                 setCurrent(index);
//                 setIsAnimating(false);
//               }, 200);
//             }}
//           >
//             <span className="dot-progress"></span>
//           </button>
//         ))}
//       </div>

//       {/* Scroll Indicator */}
//       <div className="scroll-indicator">
//         <div className="mouse">
//           <div className="wheel"></div>
//         </div>
//         <div className="scroll-text">Scroll</div>
//       </div>

//       {/* Bottom Gradient Fade */}
//       <div className="bottom-fade-premium"></div>
//     </section>
//   );
// }

// export default Hero;























import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./Hero.css";

function Hero() {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    loadSlides();
  }, []);

  useEffect(() => {
    if (!slides.length) return;

    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, 8000);

    return () => clearInterval(timer);
  }, [slides]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const loadSlides = async () => {
    try {
      const { data } = await api.get("/hero-slides");
      const activeSlides = data
        .filter((slide) => slide.isActive)
        .sort((a, b) => a.order - b.order);
      setSlides(activeSlides);
    } catch (err) {
      console.error(err);
    }
  };

  if (!slides.length) return null;

  const slide = slides[current];

  let redirectLink = "/events";
  if (slide.slideType === "product" && slide.productId) {
    redirectLink = `/products/${slide.productId}`;
  } else if (slide.slideType === "event" && slide.eventId) {
    redirectLink = `/events/${slide.eventId}`;
  } else if (slide.buttonLink) {
    redirectLink = slide.buttonLink;
  }

  const isInternalLink = redirectLink && !redirectLink.startsWith("http") && !redirectLink.startsWith("https");

  return (
    <section className="hero-apple" ref={heroRef}>
      {/* Animated Background Layer */}
      <div 
        className="hero-bg-apple"
        style={{
          backgroundImage: `url(${ 'http://localhost:5000'}${slide.image})`,
          transform: `scale(1.05) translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
        }}
      />
      
      {/* Premium Gradient Overlays */}
      <div className="overlay-multilayer">
        <div className="layer layer-1"></div>
        <div className="layer layer-2"></div>
        <div className="layer layer-3"></div>
      </div>

      {/* Animated Grid Pattern */}
      <div className="grid-pattern"></div>

      {/* Floating Orbs */}
      <div className="floating-orbs">
        <div className="orb" style={{ 
          transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
        }}></div>
        <div className="orb orb-2" style={{ 
          transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
        }}></div>
      </div>

      {/* Main Content */}
      <div className="hero-container-apple">
        <div className={`hero-content-apple ${isAnimating ? 'exit' : 'enter'}`}>
          
          {/* Premium Chip/Badge */}
          <div className="hero-chip">
            <div className="chip-glow"></div>
            <span className="chip-icon">✦</span>
            <span className="chip-text">
              {slide.slideType === "product" ? "Latest Drop" : slide.slideType === "event" ? "Live Now" : "Featured"}
            </span>
          </div>

          {/* Main Headline with Gradient */}
          <h1 className="hero-headline">
            <span className="headline-gradient">{slide.title}</span>
          </h1>

          {/* Subheadline */}
          <p className="hero-subheadline">{slide.subtitle}</p>

          {/* CTA Group */}
          <div className="cta-group">
            {isInternalLink ? (
              <Link to={redirectLink} className="cta-primary">
                <span>{slide.buttonText || "Explore Collection"} →</span>
                <div className="btn-hover-effect"></div>
              </Link>
            ) : (
              <a href={redirectLink} target="_blank" rel="noopener noreferrer" className="cta-primary">
                <span>{slide.buttonText || "Explore Collection"} →</span>
                <div className="btn-hover-effect"></div>
              </a>
            )}
            
          
          </div>

    
        </div>
      </div>

   

    </section>
  );
}

export default Hero;