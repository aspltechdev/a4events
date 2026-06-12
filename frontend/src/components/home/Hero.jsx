
// // // // import { useEffect, useState } from 'react';
// // // // import api from '../../services/api';

// // // // function Hero() {
// // // //   const [slides, setSlides] = useState([]);
// // // //   const [current, setCurrent] = useState(0);

// // // //   useEffect(() => {
// // // //     loadSlides();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     if (!slides.length) return;

// // // //     const interval = setInterval(() => {
// // // //       setCurrent(
// // // //         (prev) => (prev + 1) % slides.length
// // // //       );
// // // //     }, 5000);

// // // //     return () => clearInterval(interval);
// // // //   }, [slides]);

// // // //   const loadSlides = async () => {
// // // //     try {
// // // //       const { data } =
// // // //         await api.get('/hero-slides');

// // // //       setSlides(data);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     }
// // // //   };

// // // //   if (!slides.length) {
// // // //     return null;
// // // //   }

// // // //   return (
// // // //     <section
// // // //       style={{
// // // //         height: '100vh',
// // // //         backgroundImage: `url(http://localhost:5000${slides[current].image})`,
// // // //         backgroundSize: 'cover',
// // // //         backgroundPosition: 'center',
// // // //         display: 'flex',
// // // //         alignItems: 'center',
// // // //         justifyContent: 'center',
// // // //         color: '#fff',
// // // //         textAlign: 'center',
// // // //         position: 'relative'
// // // //       }}
// // // //     >
// // // //       <div
// // // //         style={{
// // // //           position: 'absolute',
// // // //           inset: 0,
// // // //           background:
// // // //             'rgba(0,0,0,0.55)'
// // // //         }}
// // // //       />

// // // //       <div
// // // //         style={{
// // // //           position: 'relative',
// // // //           zIndex: 2
// // // //         }}
// // // //       >
// // // //         <h1>
// // // //           {slides[current].title}
// // // //         </h1>

// // // //         <p>
// // // //           {slides[current].subtitle}
// // // //         </p>

// // // //         <div
// // // //           style={{
// // // //             marginTop: '20px'
// // // //           }}
// // // //         >
// // // //           <button>
// // // //             Explore Events
// // // //           </button>

// // // //           <button
// // // //             style={{
// // // //               marginLeft: '15px'
// // // //             }}
// // // //           >
// // // //             Contact Us
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // export default Hero;















// // // // import { useEffect, useState } from "react";
// // // // import api from "../../services/api";
// // // // import "./Hero.css";

// // // // function Hero() {
// // // //   const [slides, setSlides] = useState([]);
// // // //   const [current, setCurrent] = useState(0);

// // // //   useEffect(() => {
// // // //     loadSlides();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     if (!slides.length) return;

// // // //     const interval = setInterval(() => {
// // // //       setCurrent((prev) => (prev + 1) % slides.length);
// // // //     }, 5000);

// // // //     return () => clearInterval(interval);
// // // //   }, [slides]);

// // // //   const loadSlides = async () => {
// // // //     try {
// // // //       const { data } = await api.get("/hero-slides");
// // // //       setSlides(data);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     }
// // // //   };

// // // //   if (!slides.length) return null;

// // // //   return (
    
// // // //     <section
// // // //   className="hero"
// // // //   style={{
// // // //     backgroundImage: `url(http://localhost:5000${slides[current].image})`,
// // // //   }}
// // // // >
// // // //   <div className="hero-bg-scale"></div>

// // // //   <div className="noise"></div>

// // // //   <div className="gradient gradient-1"></div>
// // // //   <div className="gradient gradient-2"></div>

// // // //   <div className="hero-overlay"></div>

// // // //   <div className="hero-content">

// // // //     <div className="hero-badge">
// // // //       ✨ Premium Event Experiences
// // // //     </div>

// // // //     <h1 className="hero-title">
// // // //       {slides[current].title}
// // // //     </h1>

// // // //     <p className="hero-subtitle">
// // // //       {slides[current].subtitle}
// // // //     </p>

// // // //     <div className="hero-buttons">
// // // //       <button className="btn-primary">
// // // //         Explore Events
// // // //       </button>

// // // //       <button className="btn-secondary">
// // // //         Contact Us
// // // //       </button>
// // // //     </div>

// // // //   </div>

// // // //   <div className="floating-card card-1">
// // // //     🎵 500+ Events Hosted
// // // //   </div>

// // // //   <div className="floating-card card-2">
// // // //     🎤 Live Concerts
// // // //   </div>

// // // //   <div className="floating-card card-3">
// // // //     🎯 Premium Experiences
// // // //   </div>

// // // // </section>
// // // //   );
// // // // }

// // // // export default Hero;







// // // // import { useEffect, useState } from "react";
// // // // import api from "../../services/api";
// // // // import "./Hero.css";

// // // // function Hero() {
// // // //   const [slides, setSlides] = useState([]);
// // // //   const [current, setCurrent] = useState(0);

// // // //   useEffect(() => {
// // // //     loadSlides();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     if (!slides.length) return;

// // // //     const timer = setInterval(() => {
// // // //       setCurrent((prev) => (prev + 1) % slides.length);
// // // //     }, 6000);

// // // //     return () => clearInterval(timer);
// // // //   }, [slides]);

// // // //   const loadSlides = async () => {
// // // //     try {
// // // //       const { data } = await api.get("/hero-slides");
// // // //       setSlides(data);
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   if (!slides.length) return null;

// // // //   const slide = slides[current];

// // // //   return (
// // // //     <section className="hero">
// // // //       {/* Background Image */}
// // // //       <div
// // // //         className="hero-bg"
// // // //         style={{
// // // //           backgroundImage: `url(http://localhost:5000${slide.image})`,
// // // //         }}
// // // //       />

// // // //       {/* Overlay */}
// // // //       <div className="hero-overlay" />

// // // //       {/* Left Glow */}
// // // //       <div className="hero-glow hero-glow-left" />

// // // //       {/* Right Glow */}
// // // //       <div className="hero-glow hero-glow-right" />

// // // //       {/* Main Content */}
// // // //       <div className="hero-container">
// // // //         <div className="hero-content">
// // // //           <span className="hero-label">
// // // //             FEATURED EVENT
// // // //           </span>

// // // //           <h1 className="hero-title">
// // // //             {slide.title}
// // // //           </h1>

// // // //           <p className="hero-description">
// // // //             {slide.subtitle}
// // // //           </p>

// // // //           <div className="hero-actions">
// // // //             <button className="primary-btn">
// // // //               Book Tickets
// // // //             </button>

// // // //             <button className="secondary-btn">
// // // //               View Details
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* <div className="hero-panel">
// // // //           <div className="panel-item">
// // // //             <span>Location</span>
// // // //             <h4>Bangalore</h4>
// // // //           </div>

// // // //           <div className="panel-item">
// // // //             <span>Date</span>
// // // //             <h4>15 Aug 2026</h4>
// // // //           </div>

// // // //           <div className="panel-item">
// // // //             <span>Audience</span>
// // // //             <h4>20,000+</h4>
// // // //           </div>
// // // //         </div> */}
// // // //       </div>

// // // //       {/* Slide Navigation */}
// // // //       <div className="hero-pagination">
// // // //         {slides.map((_, index) => (
// // // //           <button
// // // //             key={index}
// // // //             className={`hero-dot ${
// // // //               current === index ? "active" : ""
// // // //             }`}
// // // //             onClick={() => setCurrent(index)}
// // // //           />
// // // //         ))}
// // // //       </div>

// // // //       {/* Bottom Fade */}
// // // //       <div className="hero-bottom-fade" />
// // // //     </section>
// // // //   );
// // // // }

// // // // export default Hero;

// // // // import { useEffect, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import api from "../../services/api";
// // // // import "./Hero.css";

// // // // function Hero() {
// // // //   const [slides, setSlides] = useState([]);
// // // //   const [current, setCurrent] = useState(0);

// // // //   useEffect(() => {
// // // //     loadSlides();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     if (!slides.length) return;

// // // //     const timer = setInterval(() => {
// // // //       setCurrent((prev) => (prev + 1) % slides.length);
// // // //     }, 6000);

// // // //     return () => clearInterval(timer);
// // // //   }, [slides]);

// // // //   const loadSlides = async () => {
// // // //     try {
// // // //       const { data } = await api.get("/hero-slides");

// // // //       const activeSlides = data
// // // //         .filter((slide) => slide.isActive)
// // // //         .sort((a, b) => a.order - b.order);

// // // //       setSlides(activeSlides);
// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   if (!slides.length) return null;

// // // //   const slide = slides[current];

// // // //   const isInternalLink =
// // // //     slide.buttonLink &&
// // // //     !slide.buttonLink.startsWith("http") &&
// // // //     !slide.buttonLink.startsWith("https");

// // // //   return (
// // // //     <section className="hero">
// // // //       {/* Background Image */}

// // // //       <div
// // // //         className="hero-bg"
// // // //         style={{
// // // //           backgroundImage: `url(http://localhost:5000${slide.image})`,
// // // //         }}
// // // //       />

// // // //       {/* Overlay */}

// // // //       <div className="hero-overlay" />

// // // //       {/* Left Glow */}

// // // //       <div className="hero-glow hero-glow-left" />

// // // //       {/* Right Glow */}

// // // //       <div className="hero-glow hero-glow-right" />

// // // //       {/* Main Content */}

// // // //       <div className="hero-container">
// // // //         <div className="hero-content">
// // // //           <span className="hero-label">
// // // //             FEATURED EVENT
// // // //           </span>

// // // //           <h1 className="hero-title">
// // // //             {slide.title}
// // // //           </h1>

// // // //           <p className="hero-description">
// // // //             {slide.subtitle}
// // // //           </p>

// // // //           {/* <div className="hero-actions">
         

// // // //             {slide.buttonLink ? (
// // // //               isInternalLink ? (
// // // //                 <Link
// // // //                   to={slide.buttonLink}
// // // //                   className="primary-btn"
// // // //                 >
// // // //                   {slide.buttonText ||
// // // //                     "Explore Events"}
// // // //                 </Link>
// // // //               ) : (
// // // //                 <a
// // // //                   href={slide.buttonLink}
// // // //                   target="_blank"
// // // //                   rel="noopener noreferrer"
// // // //                   className="primary-btn"
// // // //                 >
// // // //                   {slide.buttonText ||
// // // //                     "Explore Events"}
// // // //                 </a>
// // // //               )
// // // //             ) : (
// // // //               <Link
// // // //                 to="/events"
// // // //                 className="primary-btn"
// // // //               >
// // // //                 {slide.buttonText ||
// // // //                   "Explore Events"}
// // // //               </Link>
// // // //             )}

      

// // // //             <Link
// // // //               to="/events"
// // // //               className="secondary-btn"
// // // //             >
// // // //               View Events
// // // //             </Link>
// // // //           </div> */}


// // // //           <div className="hero-actions">
// // // //   {slide.buttonLink ? (
// // // //     isInternalLink ? (
// // // //       <Link
// // // //         to={slide.buttonLink}
// // // //         className="primary-btn"
// // // //       >
// // // //         Book Now
// // // //       </Link>
// // // //     ) : (
// // // //       <a
// // // //         href={slide.buttonLink}
// // // //         target="_blank"
// // // //         rel="noopener noreferrer"
// // // //         className="primary-btn"
// // // //       >
// // // //         Book Now
// // // //       </a>
// // // //     )
// // // //   ) : (
// // // //     <Link
// // // //       to="/events"
// // // //       className="primary-btn"
// // // //     >
// // // //       Book Now
// // // //     </Link>
// // // //   )}

// // // //   <Link
// // // //     to="/events"
// // // //     className="secondary-btn"
// // // //   >
// // // //     View Events
// // // //   </Link>
// // // // </div>
// // // //         </div>

// // // //         {/* Optional Stats Panel */}

// // // //         {/*
// // // //         <div className="hero-panel">
// // // //           <div className="panel-item">
// // // //             <span>Location</span>
// // // //             <h4>Bangalore</h4>
// // // //           </div>

// // // //           <div className="panel-item">
// // // //             <span>Date</span>
// // // //             <h4>15 Aug 2026</h4>
// // // //           </div>

// // // //           <div className="panel-item">
// // // //             <span>Audience</span>
// // // //             <h4>20,000+</h4>
// // // //           </div>
// // // //         </div>
// // // //         */}
// // // //       </div>

// // // //       {/* Slide Navigation */}

// // // //       <div className="hero-pagination">
// // // //         {slides.map((_, index) => (
// // // //           <button
// // // //             key={index}
// // // //             className={`hero-dot ${
// // // //               current === index
// // // //                 ? "active"
// // // //                 : ""
// // // //             }`}
// // // //             onClick={() =>
// // // //               setCurrent(index)
// // // //             }
// // // //           />
// // // //         ))}
// // // //       </div>

// // // //       {/* Bottom Fade */}

// // // //       <div className="hero-bottom-fade" />
// // // //     </section>
// // // //   );
// // // // }

// // // // export default Hero;


// // // // import { useEffect, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import api from "../../services/api";
// // // // import "./Hero.css";

// // // // function Hero() {
// // // //   const [slides, setSlides] = useState([]);
// // // //   const [current, setCurrent] = useState(0);

// // // //   const API_URL =
// // // //     import.meta.env.VITE_API_URL;

// // // //   useEffect(() => {
// // // //     loadSlides();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     if (!slides.length) return;

// // // //     const timer = setInterval(() => {
// // // //       setCurrent(
// // // //         (prev) =>
// // // //           (prev + 1) %
// // // //           slides.length
// // // //       );
// // // //     }, 6000);

// // // //     return () =>
// // // //       clearInterval(timer);
// // // //   }, [slides]);

// // // //   const loadSlides = async () => {
// // // //     try {
// // // //       const { data } =
// // // //         await api.get(
// // // //           "/hero-slides"
// // // //         );

// // // //       const activeSlides =
// // // //         data
// // // //           .filter(
// // // //             (slide) =>
// // // //               slide.isActive
// // // //           )
// // // //           .sort(
// // // //             (a, b) =>
// // // //               a.order -
// // // //               b.order
// // // //           );

// // // //       setSlides(
// // // //         activeSlides
// // // //       );

// // // //     } catch (err) {
// // // //       console.error(err);
// // // //     }
// // // //   };

// // // //   if (!slides.length)
// // // //     return null;

// // // //   const slide =
// // // //     slides[current];

// // // //   let redirectLink =
// // // //     "/events";

// // // //   if (
// // // //     slide.slideType ===
// // // //       "product" &&
// // // //     slide.productId
// // // //   ) {
// // // //     redirectLink =
// // // //       `/products/${slide.productId}`;
// // // //   } else if (
// // // //     slide.slideType ===
// // // //       "event" &&
// // // //     slide.eventId
// // // //   ) {
// // // //     redirectLink =
// // // //       `/events/${slide.eventId}`;
// // // //   } else if (
// // // //     slide.buttonLink
// // // //   ) {
// // // //     redirectLink =
// // // //       slide.buttonLink;
// // // //   }

// // // //   const isInternalLink =
// // // //     redirectLink &&
// // // //     !redirectLink.startsWith(
// // // //       "http"
// // // //     ) &&
// // // //     !redirectLink.startsWith(
// // // //       "https"
// // // //     );

// // // //   return (
// // // //     <section className="hero">

// // // //       {/* Background Image */}

// // // //       <div
// // // //         className="hero-bg"
// // // //         style={{
// // // //           backgroundImage: `url(http://localhost:5000${slide.image})`,
// // // //         }}
// // // //       />

// // // //       {/* Overlay */}

// // // //       <div className="hero-overlay" />

// // // //       {/* Left Glow */}

// // // //       <div className="hero-glow hero-glow-left" />

// // // //       {/* Right Glow */}

// // // //       <div className="hero-glow hero-glow-right" />

// // // //       {/* Content */}

// // // //       <div className="hero-container">

// // // //         <div className="hero-content">

// // // //           <span className="hero-label">

// // // //             {slide.slideType ===
// // // //             "product"
// // // //               ? "FEATURED PRODUCT"
// // // //               : slide.slideType ===
// // // //                 "event"
// // // //               ? "FEATURED EVENT"
// // // //               : "FEATURED"}

// // // //           </span>

// // // //           <h1 className="hero-title">
// // // //             {slide.title}
// // // //           </h1>

// // // //           <p className="hero-description">
// // // //             {slide.subtitle}
// // // //           </p>

// // // //           <div className="hero-actions">

// // // //             {isInternalLink ? (
// // // //               <Link
// // // //                 to={
// // // //                   redirectLink
// // // //                 }
// // // //                 className="primary-btn"
// // // //               >
// // // //                 {slide.buttonText ||
// // // //                   "Explore"}
// // // //               </Link>
// // // //             ) : (
// // // //               <a
// // // //                 href={
// // // //                   redirectLink
// // // //                 }
// // // //                 target="_blank"
// // // //                 rel="noopener noreferrer"
// // // //                 className="primary-btn"
// // // //               >
// // // //                 {slide.buttonText ||
// // // //                   "Explore"}
// // // //               </a>
// // // //             )}

// // // //             {slide.slideType ===
// // // //             "product" ? (
// // // //               <Link
// // // //                 to="/products"
// // // //                 className="secondary-btn"
// // // //               >
// // // //                 View Products
// // // //               </Link>
// // // //             ) : (
// // // //               <Link
// // // //                 to="/events"
// // // //                 className="secondary-btn"
// // // //               >
// // // //                 View Events
// // // //               </Link>
// // // //             )}

// // // //           </div>

// // // //         </div>

// // // //       </div>

// // // //       {/* Pagination */}

// // // //       <div className="hero-pagination">

// // // //         {slides.map(
// // // //           (
// // // //             _,
// // // //             index
// // // //           ) => (
// // // //             <button
// // // //               key={index}
// // // //               className={`hero-dot ${
// // // //                 current ===
// // // //                 index
// // // //                   ? "active"
// // // //                   : ""
// // // //               }`}
// // // //               onClick={() =>
// // // //                 setCurrent(
// // // //                   index
// // // //                 )
// // // //               }
// // // //             />
// // // //           )
// // // //         )}

// // // //       </div>

// // // //       {/* Bottom Fade */}

// // // //       <div className="hero-bottom-fade" />

// // // //     </section>
// // // //   );
// // // // }

// // // // export default Hero;




// // // import { useEffect, useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import api from "../../services/api";
// // // import "./Hero.css";

// // // function Hero() {
// // //   const [slides, setSlides] = useState([]);
// // //   const [current, setCurrent] = useState(0);
// // //   const [isAnimating, setIsAnimating] = useState(false);

// // //   useEffect(() => {
// // //     loadSlides();
// // //   }, []);

// // //   useEffect(() => {
// // //     if (!slides.length) return;

// // //     const timer = setInterval(() => {
// // //       setIsAnimating(true);
// // //       setTimeout(() => {
// // //         setCurrent((prev) => (prev + 1) % slides.length);
// // //         setIsAnimating(false);
// // //       }, 300);
// // //     }, 7000);

// // //     return () => clearInterval(timer);
// // //   }, [slides]);

// // //   const loadSlides = async () => {
// // //     try {
// // //       const { data } = await api.get("/hero-slides");
// // //       const activeSlides = data
// // //         .filter((slide) => slide.isActive)
// // //         .sort((a, b) => a.order - b.order);
// // //       setSlides(activeSlides);
// // //     } catch (err) {
// // //       console.error(err);
// // //       // Demo fallback data for preview
// // //       setSlides([
// // //         {
// // //           id: 1,
// // //           title: "Premium Quality Products",
// // //           subtitle: "Discover excellence in every detail. Crafted for those who appreciate the finer things.",
// // //           image: "/images/hero1.jpg",
// // //           slideType: "product",
// // //           buttonText: "Shop Now",
// // //           buttonLink: "/products",
// // //           isActive: true,
// // //           order: 1
// // //         },
// // //         {
// // //           id: 2,
// // //           title: "Exclusive Events",
// // //           subtitle: "Join us for unforgettable experiences. Network, learn, and grow with industry leaders.",
// // //           image: "/images/hero2.jpg",
// // //           slideType: "event",
// // //           buttonText: "Register Now",
// // //           buttonLink: "/events",
// // //           isActive: true,
// // //           order: 2
// // //         }
// // //       ]);
// // //     }
// // //   };

// // //   if (!slides.length) return null;

// // //   const slide = slides[current];

// // //   let redirectLink = "/events";
// // //   if (slide.slideType === "product" && slide.productId) {
// // //     redirectLink = `/products/${slide.productId}`;
// // //   } else if (slide.slideType === "event" && slide.eventId) {
// // //     redirectLink = `/events/${slide.eventId}`;
// // //   } else if (slide.buttonLink) {
// // //     redirectLink = slide.buttonLink;
// // //   }

// // //   const isInternalLink = redirectLink && !redirectLink.startsWith("http") && !redirectLink.startsWith("https");

// // //   return (
// // //     <section className="hero-premium">
// // //       {/* Animated Gradient Orbs */}
// // //       <div className="orb orb-1"></div>
// // //       <div className="orb orb-2"></div>
// // //       <div className="orb orb-3"></div>
      
// // //       {/* Background Image with Parallax Effect */}
// // //       <div 
// // //         className="hero-bg-premium" 
// // //         style={{ backgroundImage: `url(${'http://localhost:5000'}${slide.image})` }}
// // //       >
// // //         <div className="hero-bg-overlay"></div>
// // //       </div>

// // //       {/* Cinematic Light Leaks */}
// // //       <div className="light-leak light-leak-1"></div>
// // //       <div className="light-leak light-leak-2"></div>
      
// // //       {/* Animated Scan Lines */}
// // //       <div className="scan-lines"></div>

// // //       {/* Vignette Effect */}
// // //       <div className="vignette"></div>

// // //       {/* Main Content Container */}
// // //       <div className="hero-container-premium">
// // //         <div className={`hero-content-premium ${isAnimating ? 'fade-out' : 'fade-in'}`}>
          
// // //           {/* Premium Badge */}
// // //           <div className="hero-badge">
// // //             <span className="badge-icon">
// // //               <i className="fas fa-crown"></i>
// // //             </span>
// // //             <span className="badge-text">
// // //               {slide.slideType === "product" ? "FEATURED PRODUCT" : slide.slideType === "event" ? "FEATURED EVENT" : "EXCLUSIVE"}
// // //             </span>
// // //           </div>

// // //           {/* Main Title with Gradient */}
// // //           <h1 className="hero-title-premium">
// // //             <span className="title-gradient">{slide.title}</span>
// // //           </h1>

// // //           {/* Description */}
// // //           <p className="hero-description-premium">{slide.subtitle}</p>

// // //           {/* CTA Buttons */}
// // //           <div className="hero-actions-premium">
// // //             {isInternalLink ? (
// // //               <Link to={redirectLink} className="btn-primary-premium">
// // //                 <span>{slide.buttonText || "Explore Now"}</span>
// // //                 <i className="fas fa-arrow-right"></i>
// // //               </Link>
// // //             ) : (
// // //               <a href={redirectLink} target="_blank" rel="noopener noreferrer" className="btn-primary-premium">
// // //                 <span>{slide.buttonText || "Explore Now"}</span>
// // //                 <i className="fas fa-arrow-right"></i>
// // //               </a>
// // //             )}
            
// // //             <button className="btn-secondary-premium">
// // //               <i className="fas fa-play-circle"></i>
// // //               <span>Watch Demo</span>
// // //             </button>
// // //           </div>

// // //           {/* Trust Indicators */}
// // //           <div className="trust-indicators">
// // //             <div className="trust-item">
// // //               <i className="fas fa-check-circle"></i>
// // //               <span>Premium Quality</span>
// // //             </div>
// // //             <div className="trust-item">
// // //               <i className="fas fa-shield-alt"></i>
// // //               <span>Secure Payment</span>
// // //             </div>
// // //             <div className="trust-item">
// // //               <i className="fas fa-headset"></i>
// // //               <span>24/7 Support</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Premium Pagination Dots */}
// // //       <div className="hero-pagination-premium">
// // //         {slides.map((_, index) => (
// // //           <button
// // //             key={index}
// // //             className={`pagination-dot ${current === index ? "active" : ""}`}
// // //             onClick={() => {
// // //               setIsAnimating(true);
// // //               setTimeout(() => {
// // //                 setCurrent(index);
// // //                 setIsAnimating(false);
// // //               }, 200);
// // //             }}
// // //           >
// // //             <span className="dot-progress"></span>
// // //           </button>
// // //         ))}
// // //       </div>

// // //       {/* Scroll Indicator */}
// // //       <div className="scroll-indicator">
// // //         <div className="mouse">
// // //           <div className="wheel"></div>
// // //         </div>
// // //         <div className="scroll-text">Scroll</div>
// // //       </div>

// // //       {/* Bottom Gradient Fade */}
// // //       <div className="bottom-fade-premium"></div>
// // //     </section>
// // //   );
// // // }

// // // export default Hero;























// // // import { useEffect, useState, useRef } from "react";
// // // import { Link } from "react-router-dom";
// // // import api from "../../services/api";
// // // import "./Hero.css";

// // // function Hero() {
// // //   const [slides, setSlides] = useState([]);
// // //   const [current, setCurrent] = useState(0);
// // //   const [isAnimating, setIsAnimating] = useState(false);
// // //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// // //   const heroRef = useRef(null);

// // //   useEffect(() => {
// // //     loadSlides();
// // //   }, []);

// // //   useEffect(() => {
// // //     if (!slides.length) return;

// // //     const timer = setInterval(() => {
// // //       setIsAnimating(true);
// // //       setTimeout(() => {
// // //         setCurrent((prev) => (prev + 1) % slides.length);
// // //         setIsAnimating(false);
// // //       }, 500);
// // //     }, 8000);

// // //     return () => clearInterval(timer);
// // //   }, [slides]);

// // //   useEffect(() => {
// // //     const handleMouseMove = (e) => {
// // //       if (heroRef.current) {
// // //         const rect = heroRef.current.getBoundingClientRect();
// // //         const x = (e.clientX - rect.left) / rect.width;
// // //         const y = (e.clientY - rect.top) / rect.height;
// // //         setMousePosition({ x, y });
// // //       }
// // //     };

// // //     window.addEventListener('mousemove', handleMouseMove);
// // //     return () => window.removeEventListener('mousemove', handleMouseMove);
// // //   }, []);

// // //   const loadSlides = async () => {
// // //     try {
// // //       const { data } = await api.get("/hero-slides");
// // //       const activeSlides = data
// // //         .filter((slide) => slide.isActive)
// // //         .sort((a, b) => a.order - b.order);
// // //       setSlides(activeSlides);
// // //     } catch (err) {
// // //       console.error(err);
// // //     }
// // //   };

// // //   if (!slides.length) return null;

// // //   const slide = slides[current];

// // //   let redirectLink = "/events";
// // //   if (slide.slideType === "product" && slide.productId) {
// // //     redirectLink = `/products/${slide.productId}`;
// // //   } else if (slide.slideType === "event" && slide.eventId) {
// // //     redirectLink = `/events/${slide.eventId}`;
// // //   } else if (slide.buttonLink) {
// // //     redirectLink = slide.buttonLink;
// // //   }

// // //   const isInternalLink = redirectLink && !redirectLink.startsWith("http") && !redirectLink.startsWith("https");

// // //   return (
// // //     <section className="hero-apple" ref={heroRef}>
// // //       {/* Animated Background Layer */}
// // //       <div 
// // //         className="hero-bg-apple"
// // //         style={{
// // //           backgroundImage: `url(${ 'http://localhost:5000'}${slide.image})`,
// // //           transform: `scale(1.05) translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
// // //         }}
// // //       />
      
// // //       {/* Premium Gradient Overlays */}
// // //       <div className="overlay-multilayer">
// // //         <div className="layer layer-1"></div>
// // //         <div className="layer layer-2"></div>
// // //         <div className="layer layer-3"></div>
// // //       </div>

// // //       {/* Animated Grid Pattern */}
// // //       <div className="grid-pattern"></div>

// // //       {/* Floating Orbs */}
// // //       <div className="floating-orbs">
// // //         <div className="orb" style={{ 
// // //           transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
// // //         }}></div>
// // //         <div className="orb orb-2" style={{ 
// // //           transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
// // //         }}></div>
// // //       </div>

// // //       {/* Main Content */}
// // //       <div className="hero-container-apple">
// // //         <div className={`hero-content-apple ${isAnimating ? 'exit' : 'enter'}`}>
          
// // //           {/* Premium Chip/Badge */}
// // //           <div className="hero-chip">
// // //             <div className="chip-glow"></div>
// // //             <span className="chip-icon">✦</span>
// // //             <span className="chip-text">
// // //               {slide.slideType === "product" ? "Latest Drop" : slide.slideType === "event" ? "Live Now" : "Featured"}
// // //             </span>
// // //           </div>

// // //           {/* Main Headline with Gradient */}
// // //           <h1 className="hero-headline">
// // //             <span className="headline-gradient">{slide.title}</span>
// // //           </h1>

// // //           {/* Subheadline */}
// // //           <p className="hero-subheadline">{slide.subtitle}</p>

// // //           {/* CTA Group */}
// // //           <div className="cta-group">
// // //             {isInternalLink ? (
// // //               <Link to={redirectLink} className="cta-primary">
// // //                 <span>{slide.buttonText || "Explore Collection"} →</span>
// // //                 <div className="btn-hover-effect"></div>
// // //               </Link>
// // //             ) : (
// // //               <a href={redirectLink} target="_blank" rel="noopener noreferrer" className="cta-primary">
// // //                 <span>{slide.buttonText || "Explore Collection"} →</span>
// // //                 <div className="btn-hover-effect"></div>
// // //               </a>
// // //             )}
            
          
// // //           </div>

    
// // //         </div>
// // //       </div>

   

// // //     </section>
// // //   );
// // // }

// // // export default Hero;





// // import { useEffect, useState, useRef } from "react";
// // import { Link } from "react-router-dom";
// // import api from "../../services/api";
// // import "./Hero.css";

// // function Hero() {
// //   const [slides, setSlides] = useState([]);
// //   const [current, setCurrent] = useState(0);
// //   const [isAnimating, setIsAnimating] = useState(false);
// //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// //   const heroRef = useRef(null);

// //   useEffect(() => {
// //     loadSlides();
// //   }, []);

// //   useEffect(() => {
// //     if (!slides.length) return;

// //     const timer = setInterval(() => {
// //       setIsAnimating(true);
// //       setTimeout(() => {
// //         setCurrent((prev) => (prev + 1) % slides.length);
// //         setIsAnimating(false);
// //       }, 500);
// //     }, 8000);

// //     return () => clearInterval(timer);
// //   }, [slides]);

// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       if (heroRef.current) {
// //         const rect = heroRef.current.getBoundingClientRect();
// //         const x = (e.clientX - rect.left) / rect.width;
// //         const y = (e.clientY - rect.top) / rect.height;
// //         setMousePosition({ x, y });
// //       }
// //     };

// //     window.addEventListener('mousemove', handleMouseMove);
// //     return () => window.removeEventListener('mousemove', handleMouseMove);
// //   }, []);

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

// //   let redirectLink = "/events";
// //   if (slide.slideType === "product" && slide.productId) {
// //     redirectLink = `/products/${slide.productId}`;
// //   } else if (slide.slideType === "event" && slide.eventId) {
// //     redirectLink = `/events/${slide.eventId}`;
// //   } else if (slide.buttonLink) {
// //     redirectLink = slide.buttonLink;
// //   }

// //   const isInternalLink = redirectLink && !redirectLink.startsWith("http") && !redirectLink.startsWith("https");

// //   return (
// //     <section className="hero-apple" ref={heroRef}>
// //       {/* Animated Background Layer */}
// //       <div 
// //         className="hero-bg-apple"
// //         style={{
// //           backgroundImage: `url(${'http://localhost:5000'}${slide.image})`,
// //           transform: `scale(1.05) translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
// //         }}
// //       />
      
// //       {/* Premium Gradient Overlays */}
// //       <div className="overlay-multilayer">
// //         <div className="layer layer-1"></div>
// //         <div className="layer layer-2"></div>
// //         <div className="layer layer-3"></div>
// //       </div>

// //       {/* Animated Grid Pattern */}
// //       <div className="grid-pattern"></div>

// //       {/* Floating Orbs */}
// //       <div className="floating-orbs">
// //         <div className="orb" style={{ 
// //           transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
// //         }}></div>
// //         <div className="orb orb-2" style={{ 
// //           transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
// //         }}></div>
// //       </div>

// //       {/* Main Content */}
// //       <div className="hero-container-apple">
// //         <div className={`hero-content-apple ${isAnimating ? 'exit' : 'enter'}`}>
          
// //           {/* Premium Chip/Badge */}
// //           <div className="hero-chip">
// //             <div className="chip-glow"></div>
// //             <span className="chip-icon">✦</span>
// //             <span className="chip-text">
// //               {slide.slideType === "product" ? "Latest Drop" : slide.slideType === "event" ? "Live Now" : "Featured"}
// //             </span>
// //           </div>

// //           {/* Main Headline with Gradient */}
// //           <h1 className="hero-headline">
// //             <span className="headline-gradient">{slide.title}</span>
// //           </h1>

// //           {/* Subheadline */}
// //           <p className="hero-subheadline">{slide.subtitle}</p>

// //           {/* CTA Group */}
// //           <div className="cta-group">
// //             {isInternalLink ? (
// //               <Link to={redirectLink} className="cta-primary">
// //                 <span>{slide.buttonText || "Explore Collection"} →</span>
// //                 <div className="btn-hover-effect"></div>
// //               </Link>
// //             ) : (
// //               <a href={redirectLink} target="_blank" rel="noopener noreferrer" className="cta-primary">
// //                 <span>{slide.buttonText || "Explore Collection"} →</span>
// //                 <div className="btn-hover-effect"></div>
// //               </a>
// //             )}
            
          
// //           </div>

    
// //         </div>
// //       </div>

   

// //     </section>
// //   );
// // }

// // export default Hero;


// import { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import api from "../../services/api";
// import "./Hero.css";

// function Hero() {
//   const [slides, setSlides] = useState([]);
//   const [current, setCurrent] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const heroRef = useRef(null);

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
//       }, 500);
//     }, 8000);

//     return () => clearInterval(timer);
//   }, [slides]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (heroRef.current) {
//         const rect = heroRef.current.getBoundingClientRect();
//         const x = (e.clientX - rect.left) / rect.width;
//         const y = (e.clientY - rect.top) / rect.height;
//         setMousePosition({ x, y });
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const loadSlides = async () => {
//     try {
//       const { data } = await api.get("/hero-slides");
//       const activeSlides = data
//         .filter((slide) => slide.isActive)
//         .sort((a, b) => a.order - b.order);
//       setSlides(activeSlides);
//     } catch (err) {
//       console.error(err);
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
//     <section className="hero-apple" ref={heroRef}>
//       {/* Animated Background Layer */}
//       <div 
//         className="hero-bg-apple"
//         style={{
//           backgroundImage: `url(${'http://localhost:5000'}${slide.image})`,
//           transform: `scale(1.05) translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
//         }}
//       />
      
//       {/* Premium Gradient Overlays */}
//       <div className="overlay-multilayer">
//         <div className="layer layer-1"></div>
//         <div className="layer layer-2"></div>
//         <div className="layer layer-3"></div>
//       </div>

//       {/* Animated Grid Pattern */}
//       <div className="grid-pattern"></div>

//       {/* Floating Orbs */}
//       <div className="floating-orbs">
//         <div className="orb" style={{ 
//           transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
//         }}></div>
//         <div className="orb orb-2" style={{ 
//           transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
//         }}></div>
//       </div>

//       {/* Main Content */}
//       <div className="hero-container-apple">
//         <div className={`hero-content-apple ${isAnimating ? 'exit' : 'enter'}`}>
          
//           {/* Premium Chip/Badge */}
//           <div className="hero-chip">
//             <div className="chip-glow"></div>
//             <span className="chip-icon">✦</span>
//             <span className="chip-text">
//               {slide.slideType === "product" ? "Latest Drop" : slide.slideType === "event" ? "Live Now" : "Featured"}
//             </span>
//           </div>

//           {/* Main Headline with Gradient */}
//           <h1 className="hero-headline">
//             <span className="headline-gradient">{slide.title}</span>
//           </h1>

//           {/* Subheadline */}
//           <p className="hero-subheadline">{slide.subtitle}</p>

//           {/* CTA Group */}
//           <div className="cta-group">
//             {isInternalLink ? (
//               <Link to={redirectLink} className="cta-primary">
//                 <span>{slide.buttonText || "Explore Collection"} →</span>
//                 <div className="btn-hover-effect"></div>
//               </Link>
//             ) : (
//               <a href={redirectLink} target="_blank" rel="noopener noreferrer" className="cta-primary">
//                 <span>{slide.buttonText || "Explore Collection"} →</span>
//                 <div className="btn-hover-effect"></div>
//               </a>
//             )}
            
          
//           </div>

    
//         </div>
//       </div>

   

//     </section>
//   );
// }

// export default Hero;


import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "./Hero.css";

function Hero() {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);
  const animationFrameRef = useRef(null);

  useEffect(() => {
    loadSlides();
  }, []);

  useEffect(() => {
    if (!slides.length) return;

    const timer = setInterval(() => {
      handleSlideChange((current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides, current]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const loadSlides = async () => {
    try {
      const { data } = await api.get("/hero-slides");
      const activeSlides = data
        .filter((slide) => slide.isActive)
        .sort((a, b) => a.order - b.order);
      setSlides(activeSlides);
      setTimeout(() => setIsLoaded(true), 100);
    } catch (err) {
      console.error("Failed to load hero slides:", err);
    }
  };

  const handleSlideChange = useCallback((index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 50);
    }, 400);
  }, [isAnimating]);

  if (!slides.length) {
    return (
      <section className="hero-apple hero-skeleton">
        <div className="hero-skeleton-content">
          <div className="skeleton-chip"></div>
          <div className="skeleton-headline"></div>
          <div className="skeleton-subheadline"></div>
          <div className="skeleton-button"></div>
        </div>
      </section>
    );
  }

  const slide = slides[current];

  const getRedirectLink = () => {
    if (slide.slideType === "product" && slide.productId) return `/products/${slide.productId}`;
    if (slide.slideType === "event" && slide.eventId) return `/events/${slide.eventId}`;
    if (slide.buttonLink) return slide.buttonLink;
    return "/events";
  };

  const redirectLink = getRedirectLink();
  const isInternalLink = !redirectLink.startsWith("http");

  return (
    <section 
      ref={heroRef} 
      className={`hero-apple ${isLoaded ? 'hero-loaded' : ''}`}
      aria-label="Hero banner"
    >
      {/* Background Layer */}
      <div className="hero-bg-wrapper">
        <div 
          className="hero-bg-image"
          style={{
            backgroundImage: `url(http://localhost:5000${slide.image})`,
            transform: `scale(1.05) translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
          }}
        />
        <div className="hero-bg-image-next"
          style={{
            backgroundImage: `url(http://localhost:5000${slides[(current + 1) % slides.length].image})`,
            opacity: isAnimating ? 1 : 0
          }}
        />
      </div>
      
      {/* Overlay System */}
      <div className="hero-overlay-system">
        <div className="hero-overlay-base"></div>
        <div className="hero-overlay-vignette"></div>
        <div className="hero-overlay-grain"></div>
      </div>

      {/* Ambient Light Effects */}
      <div className="hero-ambient-lights">
        <div className="ambient-light ambient-primary"></div>
        <div className="ambient-light ambient-secondary"></div>
        <div className="ambient-light ambient-accent"></div>
      </div>

      {/* Content */}
      <div className="hero-container">
        <div className={`hero-content ${isAnimating ? 'content-exit' : 'content-enter'}`}>
          
          {/* Status Badge */}
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">
              {slide.slideType === "product" ? "New Collection" : slide.slideType === "event" ? "Upcoming Event" : "Featured"}
            </span>
          </div>

          {/* Headline */}
          <h1 className="hero-headline">
            <span className="headline-primary">{slide.title}</span>
          </h1>

          {/* Description */}
          <p className="hero-description">{slide.subtitle}</p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            {isInternalLink ? (
              <Link to={redirectLink} className="btn-primary">
                <span className="btn-content">
                  <span className="btn-label">{slide.buttonText || "Explore Now"}</span>
                  <span className="btn-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </span>
              </Link>
            ) : (
              <a href={redirectLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span className="btn-content">
                  <span className="btn-label">{slide.buttonText || "Explore Now"}</span>
                  <span className="btn-icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </span>
              </a>
            )}
            
            <Link to="/events" className="btn-secondary">
              Browse Events
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="hero-trust">
            <div className="trust-item">
              <span className="trust-value">500+</span>
              <span className="trust-label">Premium Events</span>
            </div>
            <div className="trust-separator"></div>
            <div className="trust-item">
              <span className="trust-value">50K+</span>
              <span className="trust-label">Happy Attendees</span>
            </div>
            <div className="trust-separator"></div>
            <div className="trust-item">
              <span className="trust-value">4.9</span>
              <span className="trust-label">Star Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="hero-navigation">
        <div className="hero-progress">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`progress-dot ${index === current ? 'active' : ''}`}
              onClick={() => handleSlideChange(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === current && <span className="progress-fill"></span>}
            </button>
          ))}
        </div>
        
        <div className="hero-counter">
          <span className="counter-current">{(current + 1).toString().padStart(2, '0')}</span>
          <span className="counter-separator">/</span>
          <span className="counter-total">{slides.length.toString().padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;