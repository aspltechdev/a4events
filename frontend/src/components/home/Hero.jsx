
// // // // // // import { useEffect, useState } from 'react';
// // // // // // import api from '../../services/api';

// // // // // // function Hero() {
// // // // // //   const [slides, setSlides] = useState([]);
// // // // // //   const [current, setCurrent] = useState(0);

// // // // // //   useEffect(() => {
// // // // // //     loadSlides();
// // // // // //   }, []);

// // // // // //   useEffect(() => {
// // // // // //     if (!slides.length) return;

// // // // // //     const interval = setInterval(() => {
// // // // // //       setCurrent(
// // // // // //         (prev) => (prev + 1) % slides.length
// // // // // //       );
// // // // // //     }, 5000);

// // // // // //     return () => clearInterval(interval);
// // // // // //   }, [slides]);

// // // // // //   const loadSlides = async () => {
// // // // // //     try {
// // // // // //       const { data } =
// // // // // //         await api.get('/hero-slides');

// // // // // //       setSlides(data);
// // // // // //     } catch (error) {
// // // // // //       console.error(error);
// // // // // //     }
// // // // // //   };

// // // // // //   if (!slides.length) {
// // // // // //     return null;
// // // // // //   }

// // // // // //   return (
// // // // // //     <section
// // // // // //       style={{
// // // // // //         height: '100vh',
// // // // // //         backgroundImage: `url(http://localhost:5000${slides[current].image})`,
// // // // // //         backgroundSize: 'cover',
// // // // // //         backgroundPosition: 'center',
// // // // // //         display: 'flex',
// // // // // //         alignItems: 'center',
// // // // // //         justifyContent: 'center',
// // // // // //         color: '#fff',
// // // // // //         textAlign: 'center',
// // // // // //         position: 'relative'
// // // // // //       }}
// // // // // //     >
// // // // // //       <div
// // // // // //         style={{
// // // // // //           position: 'absolute',
// // // // // //           inset: 0,
// // // // // //           background:
// // // // // //             'rgba(0,0,0,0.55)'
// // // // // //         }}
// // // // // //       />

// // // // // //       <div
// // // // // //         style={{
// // // // // //           position: 'relative',
// // // // // //           zIndex: 2
// // // // // //         }}
// // // // // //       >
// // // // // //         <h1>
// // // // // //           {slides[current].title}
// // // // // //         </h1>

// // // // // //         <p>
// // // // // //           {slides[current].subtitle}
// // // // // //         </p>

// // // // // //         <div
// // // // // //           style={{
// // // // // //             marginTop: '20px'
// // // // // //           }}
// // // // // //         >
// // // // // //           <button>
// // // // // //             Explore Events
// // // // // //           </button>

// // // // // //           <button
// // // // // //             style={{
// // // // // //               marginLeft: '15px'
// // // // // //             }}
// // // // // //           >
// // // // // //             Contact Us
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // // export default Hero;















// // // // // // import { useEffect, useState } from "react";
// // // // // // import api from "../../services/api";
// // // // // // import "./Hero.css";

// // // // // // function Hero() {
// // // // // //   const [slides, setSlides] = useState([]);
// // // // // //   const [current, setCurrent] = useState(0);

// // // // // //   useEffect(() => {
// // // // // //     loadSlides();
// // // // // //   }, []);

// // // // // //   useEffect(() => {
// // // // // //     if (!slides.length) return;

// // // // // //     const interval = setInterval(() => {
// // // // // //       setCurrent((prev) => (prev + 1) % slides.length);
// // // // // //     }, 5000);

// // // // // //     return () => clearInterval(interval);
// // // // // //   }, [slides]);

// // // // // //   const loadSlides = async () => {
// // // // // //     try {
// // // // // //       const { data } = await api.get("/hero-slides");
// // // // // //       setSlides(data);
// // // // // //     } catch (error) {
// // // // // //       console.error(error);
// // // // // //     }
// // // // // //   };

// // // // // //   if (!slides.length) return null;

// // // // // //   return (
    
// // // // // //     <section
// // // // // //   className="hero"
// // // // // //   style={{
// // // // // //     backgroundImage: `url(http://localhost:5000${slides[current].image})`,
// // // // // //   }}
// // // // // // >
// // // // // //   <div className="hero-bg-scale"></div>

// // // // // //   <div className="noise"></div>

// // // // // //   <div className="gradient gradient-1"></div>
// // // // // //   <div className="gradient gradient-2"></div>

// // // // // //   <div className="hero-overlay"></div>

// // // // // //   <div className="hero-content">

// // // // // //     <div className="hero-badge">
// // // // // //       ✨ Premium Event Experiences
// // // // // //     </div>

// // // // // //     <h1 className="hero-title">
// // // // // //       {slides[current].title}
// // // // // //     </h1>

// // // // // //     <p className="hero-subtitle">
// // // // // //       {slides[current].subtitle}
// // // // // //     </p>

// // // // // //     <div className="hero-buttons">
// // // // // //       <button className="btn-primary">
// // // // // //         Explore Events
// // // // // //       </button>

// // // // // //       <button className="btn-secondary">
// // // // // //         Contact Us
// // // // // //       </button>
// // // // // //     </div>

// // // // // //   </div>

// // // // // //   <div className="floating-card card-1">
// // // // // //     🎵 500+ Events Hosted
// // // // // //   </div>

// // // // // //   <div className="floating-card card-2">
// // // // // //     🎤 Live Concerts
// // // // // //   </div>

// // // // // //   <div className="floating-card card-3">
// // // // // //     🎯 Premium Experiences
// // // // // //   </div>

// // // // // // </section>
// // // // // //   );
// // // // // // }

// // // // // // export default Hero;







// // // // // // import { useEffect, useState } from "react";
// // // // // // import api from "../../services/api";
// // // // // // import "./Hero.css";

// // // // // // function Hero() {
// // // // // //   const [slides, setSlides] = useState([]);
// // // // // //   const [current, setCurrent] = useState(0);

// // // // // //   useEffect(() => {
// // // // // //     loadSlides();
// // // // // //   }, []);

// // // // // //   useEffect(() => {
// // // // // //     if (!slides.length) return;

// // // // // //     const timer = setInterval(() => {
// // // // // //       setCurrent((prev) => (prev + 1) % slides.length);
// // // // // //     }, 6000);

// // // // // //     return () => clearInterval(timer);
// // // // // //   }, [slides]);

// // // // // //   const loadSlides = async () => {
// // // // // //     try {
// // // // // //       const { data } = await api.get("/hero-slides");
// // // // // //       setSlides(data);
// // // // // //     } catch (err) {
// // // // // //       console.error(err);
// // // // // //     }
// // // // // //   };

// // // // // //   if (!slides.length) return null;

// // // // // //   const slide = slides[current];

// // // // // //   return (
// // // // // //     <section className="hero">
// // // // // //       {/* Background Image */}
// // // // // //       <div
// // // // // //         className="hero-bg"
// // // // // //         style={{
// // // // // //           backgroundImage: `url(http://localhost:5000${slide.image})`,
// // // // // //         }}
// // // // // //       />

// // // // // //       {/* Overlay */}
// // // // // //       <div className="hero-overlay" />

// // // // // //       {/* Left Glow */}
// // // // // //       <div className="hero-glow hero-glow-left" />

// // // // // //       {/* Right Glow */}
// // // // // //       <div className="hero-glow hero-glow-right" />

// // // // // //       {/* Main Content */}
// // // // // //       <div className="hero-container">
// // // // // //         <div className="hero-content">
// // // // // //           <span className="hero-label">
// // // // // //             FEATURED EVENT
// // // // // //           </span>

// // // // // //           <h1 className="hero-title">
// // // // // //             {slide.title}
// // // // // //           </h1>

// // // // // //           <p className="hero-description">
// // // // // //             {slide.subtitle}
// // // // // //           </p>

// // // // // //           <div className="hero-actions">
// // // // // //             <button className="primary-btn">
// // // // // //               Book Tickets
// // // // // //             </button>

// // // // // //             <button className="secondary-btn">
// // // // // //               View Details
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* <div className="hero-panel">
// // // // // //           <div className="panel-item">
// // // // // //             <span>Location</span>
// // // // // //             <h4>Bangalore</h4>
// // // // // //           </div>

// // // // // //           <div className="panel-item">
// // // // // //             <span>Date</span>
// // // // // //             <h4>15 Aug 2026</h4>
// // // // // //           </div>

// // // // // //           <div className="panel-item">
// // // // // //             <span>Audience</span>
// // // // // //             <h4>20,000+</h4>
// // // // // //           </div>
// // // // // //         </div> */}
// // // // // //       </div>

// // // // // //       {/* Slide Navigation */}
// // // // // //       <div className="hero-pagination">
// // // // // //         {slides.map((_, index) => (
// // // // // //           <button
// // // // // //             key={index}
// // // // // //             className={`hero-dot ${
// // // // // //               current === index ? "active" : ""
// // // // // //             }`}
// // // // // //             onClick={() => setCurrent(index)}
// // // // // //           />
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       {/* Bottom Fade */}
// // // // // //       <div className="hero-bottom-fade" />
// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // // export default Hero;

// // // // // // import { useEffect, useState } from "react";
// // // // // // import { Link } from "react-router-dom";
// // // // // // import api from "../../services/api";
// // // // // // import "./Hero.css";

// // // // // // function Hero() {
// // // // // //   const [slides, setSlides] = useState([]);
// // // // // //   const [current, setCurrent] = useState(0);

// // // // // //   useEffect(() => {
// // // // // //     loadSlides();
// // // // // //   }, []);

// // // // // //   useEffect(() => {
// // // // // //     if (!slides.length) return;

// // // // // //     const timer = setInterval(() => {
// // // // // //       setCurrent((prev) => (prev + 1) % slides.length);
// // // // // //     }, 6000);

// // // // // //     return () => clearInterval(timer);
// // // // // //   }, [slides]);

// // // // // //   const loadSlides = async () => {
// // // // // //     try {
// // // // // //       const { data } = await api.get("/hero-slides");

// // // // // //       const activeSlides = data
// // // // // //         .filter((slide) => slide.isActive)
// // // // // //         .sort((a, b) => a.order - b.order);

// // // // // //       setSlides(activeSlides);
// // // // // //     } catch (err) {
// // // // // //       console.error(err);
// // // // // //     }
// // // // // //   };

// // // // // //   if (!slides.length) return null;

// // // // // //   const slide = slides[current];

// // // // // //   const isInternalLink =
// // // // // //     slide.buttonLink &&
// // // // // //     !slide.buttonLink.startsWith("http") &&
// // // // // //     !slide.buttonLink.startsWith("https");

// // // // // //   return (
// // // // // //     <section className="hero">
// // // // // //       {/* Background Image */}

// // // // // //       <div
// // // // // //         className="hero-bg"
// // // // // //         style={{
// // // // // //           backgroundImage: `url(http://localhost:5000${slide.image})`,
// // // // // //         }}
// // // // // //       />

// // // // // //       {/* Overlay */}

// // // // // //       <div className="hero-overlay" />

// // // // // //       {/* Left Glow */}

// // // // // //       <div className="hero-glow hero-glow-left" />

// // // // // //       {/* Right Glow */}

// // // // // //       <div className="hero-glow hero-glow-right" />

// // // // // //       {/* Main Content */}

// // // // // //       <div className="hero-container">
// // // // // //         <div className="hero-content">
// // // // // //           <span className="hero-label">
// // // // // //             FEATURED EVENT
// // // // // //           </span>

// // // // // //           <h1 className="hero-title">
// // // // // //             {slide.title}
// // // // // //           </h1>

// // // // // //           <p className="hero-description">
// // // // // //             {slide.subtitle}
// // // // // //           </p>

// // // // // //           {/* <div className="hero-actions">
         

// // // // // //             {slide.buttonLink ? (
// // // // // //               isInternalLink ? (
// // // // // //                 <Link
// // // // // //                   to={slide.buttonLink}
// // // // // //                   className="primary-btn"
// // // // // //                 >
// // // // // //                   {slide.buttonText ||
// // // // // //                     "Explore Events"}
// // // // // //                 </Link>
// // // // // //               ) : (
// // // // // //                 <a
// // // // // //                   href={slide.buttonLink}
// // // // // //                   target="_blank"
// // // // // //                   rel="noopener noreferrer"
// // // // // //                   className="primary-btn"
// // // // // //                 >
// // // // // //                   {slide.buttonText ||
// // // // // //                     "Explore Events"}
// // // // // //                 </a>
// // // // // //               )
// // // // // //             ) : (
// // // // // //               <Link
// // // // // //                 to="/events"
// // // // // //                 className="primary-btn"
// // // // // //               >
// // // // // //                 {slide.buttonText ||
// // // // // //                   "Explore Events"}
// // // // // //               </Link>
// // // // // //             )}

      

// // // // // //             <Link
// // // // // //               to="/events"
// // // // // //               className="secondary-btn"
// // // // // //             >
// // // // // //               View Events
// // // // // //             </Link>
// // // // // //           </div> */}


// // // // // //           <div className="hero-actions">
// // // // // //   {slide.buttonLink ? (
// // // // // //     isInternalLink ? (
// // // // // //       <Link
// // // // // //         to={slide.buttonLink}
// // // // // //         className="primary-btn"
// // // // // //       >
// // // // // //         Book Now
// // // // // //       </Link>
// // // // // //     ) : (
// // // // // //       <a
// // // // // //         href={slide.buttonLink}
// // // // // //         target="_blank"
// // // // // //         rel="noopener noreferrer"
// // // // // //         className="primary-btn"
// // // // // //       >
// // // // // //         Book Now
// // // // // //       </a>
// // // // // //     )
// // // // // //   ) : (
// // // // // //     <Link
// // // // // //       to="/events"
// // // // // //       className="primary-btn"
// // // // // //     >
// // // // // //       Book Now
// // // // // //     </Link>
// // // // // //   )}

// // // // // //   <Link
// // // // // //     to="/events"
// // // // // //     className="secondary-btn"
// // // // // //   >
// // // // // //     View Events
// // // // // //   </Link>
// // // // // // </div>
// // // // // //         </div>

// // // // // //         {/* Optional Stats Panel */}

// // // // // //         {/*
// // // // // //         <div className="hero-panel">
// // // // // //           <div className="panel-item">
// // // // // //             <span>Location</span>
// // // // // //             <h4>Bangalore</h4>
// // // // // //           </div>

// // // // // //           <div className="panel-item">
// // // // // //             <span>Date</span>
// // // // // //             <h4>15 Aug 2026</h4>
// // // // // //           </div>

// // // // // //           <div className="panel-item">
// // // // // //             <span>Audience</span>
// // // // // //             <h4>20,000+</h4>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         */}
// // // // // //       </div>

// // // // // //       {/* Slide Navigation */}

// // // // // //       <div className="hero-pagination">
// // // // // //         {slides.map((_, index) => (
// // // // // //           <button
// // // // // //             key={index}
// // // // // //             className={`hero-dot ${
// // // // // //               current === index
// // // // // //                 ? "active"
// // // // // //                 : ""
// // // // // //             }`}
// // // // // //             onClick={() =>
// // // // // //               setCurrent(index)
// // // // // //             }
// // // // // //           />
// // // // // //         ))}
// // // // // //       </div>

// // // // // //       {/* Bottom Fade */}

// // // // // //       <div className="hero-bottom-fade" />
// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // // export default Hero;


// // // // // // import { useEffect, useState } from "react";
// // // // // // import { Link } from "react-router-dom";
// // // // // // import api from "../../services/api";
// // // // // // import "./Hero.css";

// // // // // // function Hero() {
// // // // // //   const [slides, setSlides] = useState([]);
// // // // // //   const [current, setCurrent] = useState(0);

// // // // // //   const API_URL =
// // // // // //     import.meta.env.VITE_API_URL;

// // // // // //   useEffect(() => {
// // // // // //     loadSlides();
// // // // // //   }, []);

// // // // // //   useEffect(() => {
// // // // // //     if (!slides.length) return;

// // // // // //     const timer = setInterval(() => {
// // // // // //       setCurrent(
// // // // // //         (prev) =>
// // // // // //           (prev + 1) %
// // // // // //           slides.length
// // // // // //       );
// // // // // //     }, 6000);

// // // // // //     return () =>
// // // // // //       clearInterval(timer);
// // // // // //   }, [slides]);

// // // // // //   const loadSlides = async () => {
// // // // // //     try {
// // // // // //       const { data } =
// // // // // //         await api.get(
// // // // // //           "/hero-slides"
// // // // // //         );

// // // // // //       const activeSlides =
// // // // // //         data
// // // // // //           .filter(
// // // // // //             (slide) =>
// // // // // //               slide.isActive
// // // // // //           )
// // // // // //           .sort(
// // // // // //             (a, b) =>
// // // // // //               a.order -
// // // // // //               b.order
// // // // // //           );

// // // // // //       setSlides(
// // // // // //         activeSlides
// // // // // //       );

// // // // // //     } catch (err) {
// // // // // //       console.error(err);
// // // // // //     }
// // // // // //   };

// // // // // //   if (!slides.length)
// // // // // //     return null;

// // // // // //   const slide =
// // // // // //     slides[current];

// // // // // //   let redirectLink =
// // // // // //     "/events";

// // // // // //   if (
// // // // // //     slide.slideType ===
// // // // // //       "product" &&
// // // // // //     slide.productId
// // // // // //   ) {
// // // // // //     redirectLink =
// // // // // //       `/products/${slide.productId}`;
// // // // // //   } else if (
// // // // // //     slide.slideType ===
// // // // // //       "event" &&
// // // // // //     slide.eventId
// // // // // //   ) {
// // // // // //     redirectLink =
// // // // // //       `/events/${slide.eventId}`;
// // // // // //   } else if (
// // // // // //     slide.buttonLink
// // // // // //   ) {
// // // // // //     redirectLink =
// // // // // //       slide.buttonLink;
// // // // // //   }

// // // // // //   const isInternalLink =
// // // // // //     redirectLink &&
// // // // // //     !redirectLink.startsWith(
// // // // // //       "http"
// // // // // //     ) &&
// // // // // //     !redirectLink.startsWith(
// // // // // //       "https"
// // // // // //     );

// // // // // //   return (
// // // // // //     <section className="hero">

// // // // // //       {/* Background Image */}

// // // // // //       <div
// // // // // //         className="hero-bg"
// // // // // //         style={{
// // // // // //           backgroundImage: `url(http://localhost:5000${slide.image})`,
// // // // // //         }}
// // // // // //       />

// // // // // //       {/* Overlay */}

// // // // // //       <div className="hero-overlay" />

// // // // // //       {/* Left Glow */}

// // // // // //       <div className="hero-glow hero-glow-left" />

// // // // // //       {/* Right Glow */}

// // // // // //       <div className="hero-glow hero-glow-right" />

// // // // // //       {/* Content */}

// // // // // //       <div className="hero-container">

// // // // // //         <div className="hero-content">

// // // // // //           <span className="hero-label">

// // // // // //             {slide.slideType ===
// // // // // //             "product"
// // // // // //               ? "FEATURED PRODUCT"
// // // // // //               : slide.slideType ===
// // // // // //                 "event"
// // // // // //               ? "FEATURED EVENT"
// // // // // //               : "FEATURED"}

// // // // // //           </span>

// // // // // //           <h1 className="hero-title">
// // // // // //             {slide.title}
// // // // // //           </h1>

// // // // // //           <p className="hero-description">
// // // // // //             {slide.subtitle}
// // // // // //           </p>

// // // // // //           <div className="hero-actions">

// // // // // //             {isInternalLink ? (
// // // // // //               <Link
// // // // // //                 to={
// // // // // //                   redirectLink
// // // // // //                 }
// // // // // //                 className="primary-btn"
// // // // // //               >
// // // // // //                 {slide.buttonText ||
// // // // // //                   "Explore"}
// // // // // //               </Link>
// // // // // //             ) : (
// // // // // //               <a
// // // // // //                 href={
// // // // // //                   redirectLink
// // // // // //                 }
// // // // // //                 target="_blank"
// // // // // //                 rel="noopener noreferrer"
// // // // // //                 className="primary-btn"
// // // // // //               >
// // // // // //                 {slide.buttonText ||
// // // // // //                   "Explore"}
// // // // // //               </a>
// // // // // //             )}

// // // // // //             {slide.slideType ===
// // // // // //             "product" ? (
// // // // // //               <Link
// // // // // //                 to="/products"
// // // // // //                 className="secondary-btn"
// // // // // //               >
// // // // // //                 View Products
// // // // // //               </Link>
// // // // // //             ) : (
// // // // // //               <Link
// // // // // //                 to="/events"
// // // // // //                 className="secondary-btn"
// // // // // //               >
// // // // // //                 View Events
// // // // // //               </Link>
// // // // // //             )}

// // // // // //           </div>

// // // // // //         </div>

// // // // // //       </div>

// // // // // //       {/* Pagination */}

// // // // // //       <div className="hero-pagination">

// // // // // //         {slides.map(
// // // // // //           (
// // // // // //             _,
// // // // // //             index
// // // // // //           ) => (
// // // // // //             <button
// // // // // //               key={index}
// // // // // //               className={`hero-dot ${
// // // // // //                 current ===
// // // // // //                 index
// // // // // //                   ? "active"
// // // // // //                   : ""
// // // // // //               }`}
// // // // // //               onClick={() =>
// // // // // //                 setCurrent(
// // // // // //                   index
// // // // // //                 )
// // // // // //               }
// // // // // //             />
// // // // // //           )
// // // // // //         )}

// // // // // //       </div>

// // // // // //       {/* Bottom Fade */}

// // // // // //       <div className="hero-bottom-fade" />

// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // // export default Hero;




// // // // // import { useEffect, useState } from "react";
// // // // // import { Link } from "react-router-dom";
// // // // // import api from "../../services/api";
// // // // // import "./Hero.css";

// // // // // function Hero() {
// // // // //   const [slides, setSlides] = useState([]);
// // // // //   const [current, setCurrent] = useState(0);
// // // // //   const [isAnimating, setIsAnimating] = useState(false);

// // // // //   useEffect(() => {
// // // // //     loadSlides();
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     if (!slides.length) return;

// // // // //     const timer = setInterval(() => {
// // // // //       setIsAnimating(true);
// // // // //       setTimeout(() => {
// // // // //         setCurrent((prev) => (prev + 1) % slides.length);
// // // // //         setIsAnimating(false);
// // // // //       }, 300);
// // // // //     }, 7000);

// // // // //     return () => clearInterval(timer);
// // // // //   }, [slides]);

// // // // //   const loadSlides = async () => {
// // // // //     try {
// // // // //       const { data } = await api.get("/hero-slides");
// // // // //       const activeSlides = data
// // // // //         .filter((slide) => slide.isActive)
// // // // //         .sort((a, b) => a.order - b.order);
// // // // //       setSlides(activeSlides);
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //       // Demo fallback data for preview
// // // // //       setSlides([
// // // // //         {
// // // // //           id: 1,
// // // // //           title: "Premium Quality Products",
// // // // //           subtitle: "Discover excellence in every detail. Crafted for those who appreciate the finer things.",
// // // // //           image: "/images/hero1.jpg",
// // // // //           slideType: "product",
// // // // //           buttonText: "Shop Now",
// // // // //           buttonLink: "/products",
// // // // //           isActive: true,
// // // // //           order: 1
// // // // //         },
// // // // //         {
// // // // //           id: 2,
// // // // //           title: "Exclusive Events",
// // // // //           subtitle: "Join us for unforgettable experiences. Network, learn, and grow with industry leaders.",
// // // // //           image: "/images/hero2.jpg",
// // // // //           slideType: "event",
// // // // //           buttonText: "Register Now",
// // // // //           buttonLink: "/events",
// // // // //           isActive: true,
// // // // //           order: 2
// // // // //         }
// // // // //       ]);
// // // // //     }
// // // // //   };

// // // // //   if (!slides.length) return null;

// // // // //   const slide = slides[current];

// // // // //   let redirectLink = "/events";
// // // // //   if (slide.slideType === "product" && slide.productId) {
// // // // //     redirectLink = `/products/${slide.productId}`;
// // // // //   } else if (slide.slideType === "event" && slide.eventId) {
// // // // //     redirectLink = `/events/${slide.eventId}`;
// // // // //   } else if (slide.buttonLink) {
// // // // //     redirectLink = slide.buttonLink;
// // // // //   }

// // // // //   const isInternalLink = redirectLink && !redirectLink.startsWith("http") && !redirectLink.startsWith("https");

// // // // //   return (
// // // // //     <section className="hero-premium">
// // // // //       {/* Animated Gradient Orbs */}
// // // // //       <div className="orb orb-1"></div>
// // // // //       <div className="orb orb-2"></div>
// // // // //       <div className="orb orb-3"></div>
      
// // // // //       {/* Background Image with Parallax Effect */}
// // // // //       <div 
// // // // //         className="hero-bg-premium" 
// // // // //         style={{ backgroundImage: `url(${'http://localhost:5000'}${slide.image})` }}
// // // // //       >
// // // // //         <div className="hero-bg-overlay"></div>
// // // // //       </div>

// // // // //       {/* Cinematic Light Leaks */}
// // // // //       <div className="light-leak light-leak-1"></div>
// // // // //       <div className="light-leak light-leak-2"></div>
      
// // // // //       {/* Animated Scan Lines */}
// // // // //       <div className="scan-lines"></div>

// // // // //       {/* Vignette Effect */}
// // // // //       <div className="vignette"></div>

// // // // //       {/* Main Content Container */}
// // // // //       <div className="hero-container-premium">
// // // // //         <div className={`hero-content-premium ${isAnimating ? 'fade-out' : 'fade-in'}`}>
          
// // // // //           {/* Premium Badge */}
// // // // //           <div className="hero-badge">
// // // // //             <span className="badge-icon">
// // // // //               <i className="fas fa-crown"></i>
// // // // //             </span>
// // // // //             <span className="badge-text">
// // // // //               {slide.slideType === "product" ? "FEATURED PRODUCT" : slide.slideType === "event" ? "FEATURED EVENT" : "EXCLUSIVE"}
// // // // //             </span>
// // // // //           </div>

// // // // //           {/* Main Title with Gradient */}
// // // // //           <h1 className="hero-title-premium">
// // // // //             <span className="title-gradient">{slide.title}</span>
// // // // //           </h1>

// // // // //           {/* Description */}
// // // // //           <p className="hero-description-premium">{slide.subtitle}</p>

// // // // //           {/* CTA Buttons */}
// // // // //           <div className="hero-actions-premium">
// // // // //             {isInternalLink ? (
// // // // //               <Link to={redirectLink} className="btn-primary-premium">
// // // // //                 <span>{slide.buttonText || "Explore Now"}</span>
// // // // //                 <i className="fas fa-arrow-right"></i>
// // // // //               </Link>
// // // // //             ) : (
// // // // //               <a href={redirectLink} target="_blank" rel="noopener noreferrer" className="btn-primary-premium">
// // // // //                 <span>{slide.buttonText || "Explore Now"}</span>
// // // // //                 <i className="fas fa-arrow-right"></i>
// // // // //               </a>
// // // // //             )}
            
// // // // //             <button className="btn-secondary-premium">
// // // // //               <i className="fas fa-play-circle"></i>
// // // // //               <span>Watch Demo</span>
// // // // //             </button>
// // // // //           </div>

// // // // //           {/* Trust Indicators */}
// // // // //           <div className="trust-indicators">
// // // // //             <div className="trust-item">
// // // // //               <i className="fas fa-check-circle"></i>
// // // // //               <span>Premium Quality</span>
// // // // //             </div>
// // // // //             <div className="trust-item">
// // // // //               <i className="fas fa-shield-alt"></i>
// // // // //               <span>Secure Payment</span>
// // // // //             </div>
// // // // //             <div className="trust-item">
// // // // //               <i className="fas fa-headset"></i>
// // // // //               <span>24/7 Support</span>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Premium Pagination Dots */}
// // // // //       <div className="hero-pagination-premium">
// // // // //         {slides.map((_, index) => (
// // // // //           <button
// // // // //             key={index}
// // // // //             className={`pagination-dot ${current === index ? "active" : ""}`}
// // // // //             onClick={() => {
// // // // //               setIsAnimating(true);
// // // // //               setTimeout(() => {
// // // // //                 setCurrent(index);
// // // // //                 setIsAnimating(false);
// // // // //               }, 200);
// // // // //             }}
// // // // //           >
// // // // //             <span className="dot-progress"></span>
// // // // //           </button>
// // // // //         ))}
// // // // //       </div>

// // // // //       {/* Scroll Indicator */}
// // // // //       <div className="scroll-indicator">
// // // // //         <div className="mouse">
// // // // //           <div className="wheel"></div>
// // // // //         </div>
// // // // //         <div className="scroll-text">Scroll</div>
// // // // //       </div>

// // // // //       {/* Bottom Gradient Fade */}
// // // // //       <div className="bottom-fade-premium"></div>
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // // export default Hero;























// // // // // import { useEffect, useState, useRef } from "react";
// // // // // import { Link } from "react-router-dom";
// // // // // import api from "../../services/api";
// // // // // import "./Hero.css";

// // // // // function Hero() {
// // // // //   const [slides, setSlides] = useState([]);
// // // // //   const [current, setCurrent] = useState(0);
// // // // //   const [isAnimating, setIsAnimating] = useState(false);
// // // // //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// // // // //   const heroRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     loadSlides();
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     if (!slides.length) return;

// // // // //     const timer = setInterval(() => {
// // // // //       setIsAnimating(true);
// // // // //       setTimeout(() => {
// // // // //         setCurrent((prev) => (prev + 1) % slides.length);
// // // // //         setIsAnimating(false);
// // // // //       }, 500);
// // // // //     }, 8000);

// // // // //     return () => clearInterval(timer);
// // // // //   }, [slides]);

// // // // //   useEffect(() => {
// // // // //     const handleMouseMove = (e) => {
// // // // //       if (heroRef.current) {
// // // // //         const rect = heroRef.current.getBoundingClientRect();
// // // // //         const x = (e.clientX - rect.left) / rect.width;
// // // // //         const y = (e.clientY - rect.top) / rect.height;
// // // // //         setMousePosition({ x, y });
// // // // //       }
// // // // //     };

// // // // //     window.addEventListener('mousemove', handleMouseMove);
// // // // //     return () => window.removeEventListener('mousemove', handleMouseMove);
// // // // //   }, []);

// // // // //   const loadSlides = async () => {
// // // // //     try {
// // // // //       const { data } = await api.get("/hero-slides");
// // // // //       const activeSlides = data
// // // // //         .filter((slide) => slide.isActive)
// // // // //         .sort((a, b) => a.order - b.order);
// // // // //       setSlides(activeSlides);
// // // // //     } catch (err) {
// // // // //       console.error(err);
// // // // //     }
// // // // //   };

// // // // //   if (!slides.length) return null;

// // // // //   const slide = slides[current];

// // // // //   let redirectLink = "/events";
// // // // //   if (slide.slideType === "product" && slide.productId) {
// // // // //     redirectLink = `/products/${slide.productId}`;
// // // // //   } else if (slide.slideType === "event" && slide.eventId) {
// // // // //     redirectLink = `/events/${slide.eventId}`;
// // // // //   } else if (slide.buttonLink) {
// // // // //     redirectLink = slide.buttonLink;
// // // // //   }

// // // // //   const isInternalLink = redirectLink && !redirectLink.startsWith("http") && !redirectLink.startsWith("https");

// // // // //   return (
// // // // //     <section className="hero-apple" ref={heroRef}>
// // // // //       {/* Animated Background Layer */}
// // // // //       <div 
// // // // //         className="hero-bg-apple"
// // // // //         style={{
// // // // //           backgroundImage: `url(${ 'http://localhost:5000'}${slide.image})`,
// // // // //           transform: `scale(1.05) translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
// // // // //         }}
// // // // //       />
      
// // // // //       {/* Premium Gradient Overlays */}
// // // // //       <div className="overlay-multilayer">
// // // // //         <div className="layer layer-1"></div>
// // // // //         <div className="layer layer-2"></div>
// // // // //         <div className="layer layer-3"></div>
// // // // //       </div>

// // // // //       {/* Animated Grid Pattern */}
// // // // //       <div className="grid-pattern"></div>

// // // // //       {/* Floating Orbs */}
// // // // //       <div className="floating-orbs">
// // // // //         <div className="orb" style={{ 
// // // // //           transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
// // // // //         }}></div>
// // // // //         <div className="orb orb-2" style={{ 
// // // // //           transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
// // // // //         }}></div>
// // // // //       </div>

// // // // //       {/* Main Content */}
// // // // //       <div className="hero-container-apple">
// // // // //         <div className={`hero-content-apple ${isAnimating ? 'exit' : 'enter'}`}>
          
// // // // //           {/* Premium Chip/Badge */}
// // // // //           <div className="hero-chip">
// // // // //             <div className="chip-glow"></div>
// // // // //             <span className="chip-icon">✦</span>
// // // // //             <span className="chip-text">
// // // // //               {slide.slideType === "product" ? "Latest Drop" : slide.slideType === "event" ? "Live Now" : "Featured"}
// // // // //             </span>
// // // // //           </div>

// // // // //           {/* Main Headline with Gradient */}
// // // // //           <h1 className="hero-headline">
// // // // //             <span className="headline-gradient">{slide.title}</span>
// // // // //           </h1>

// // // // //           {/* Subheadline */}
// // // // //           <p className="hero-subheadline">{slide.subtitle}</p>

// // // // //           {/* CTA Group */}
// // // // //           <div className="cta-group">
// // // // //             {isInternalLink ? (
// // // // //               <Link to={redirectLink} className="cta-primary">
// // // // //                 <span>{slide.buttonText || "Explore Collection"} →</span>
// // // // //                 <div className="btn-hover-effect"></div>
// // // // //               </Link>
// // // // //             ) : (
// // // // //               <a href={redirectLink} target="_blank" rel="noopener noreferrer" className="cta-primary">
// // // // //                 <span>{slide.buttonText || "Explore Collection"} →</span>
// // // // //                 <div className="btn-hover-effect"></div>
// // // // //               </a>
// // // // //             )}
            
          
// // // // //           </div>

    
// // // // //         </div>
// // // // //       </div>

   

// // // // //     </section>
// // // // //   );
// // // // // }

// // // // // export default Hero;





// // // // import { useEffect, useState, useRef } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import api from "../../services/api";
// // // // import "./Hero.css";

// // // // function Hero() {
// // // //   const [slides, setSlides] = useState([]);
// // // //   const [current, setCurrent] = useState(0);
// // // //   const [isAnimating, setIsAnimating] = useState(false);
// // // //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// // // //   const heroRef = useRef(null);

// // // //   useEffect(() => {
// // // //     loadSlides();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     if (!slides.length) return;

// // // //     const timer = setInterval(() => {
// // // //       setIsAnimating(true);
// // // //       setTimeout(() => {
// // // //         setCurrent((prev) => (prev + 1) % slides.length);
// // // //         setIsAnimating(false);
// // // //       }, 500);
// // // //     }, 8000);

// // // //     return () => clearInterval(timer);
// // // //   }, [slides]);

// // // //   useEffect(() => {
// // // //     const handleMouseMove = (e) => {
// // // //       if (heroRef.current) {
// // // //         const rect = heroRef.current.getBoundingClientRect();
// // // //         const x = (e.clientX - rect.left) / rect.width;
// // // //         const y = (e.clientY - rect.top) / rect.height;
// // // //         setMousePosition({ x, y });
// // // //       }
// // // //     };

// // // //     window.addEventListener('mousemove', handleMouseMove);
// // // //     return () => window.removeEventListener('mousemove', handleMouseMove);
// // // //   }, []);

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

// // // //   let redirectLink = "/events";
// // // //   if (slide.slideType === "product" && slide.productId) {
// // // //     redirectLink = `/products/${slide.productId}`;
// // // //   } else if (slide.slideType === "event" && slide.eventId) {
// // // //     redirectLink = `/events/${slide.eventId}`;
// // // //   } else if (slide.buttonLink) {
// // // //     redirectLink = slide.buttonLink;
// // // //   }

// // // //   const isInternalLink = redirectLink && !redirectLink.startsWith("http") && !redirectLink.startsWith("https");

// // // //   return (
// // // //     <section className="hero-apple" ref={heroRef}>
// // // //       {/* Animated Background Layer */}
// // // //       <div 
// // // //         className="hero-bg-apple"
// // // //         style={{
// // // //           backgroundImage: `url(${'http://localhost:5000'}${slide.image})`,
// // // //           transform: `scale(1.05) translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
// // // //         }}
// // // //       />
      
// // // //       {/* Premium Gradient Overlays */}
// // // //       <div className="overlay-multilayer">
// // // //         <div className="layer layer-1"></div>
// // // //         <div className="layer layer-2"></div>
// // // //         <div className="layer layer-3"></div>
// // // //       </div>

// // // //       {/* Animated Grid Pattern */}
// // // //       <div className="grid-pattern"></div>

// // // //       {/* Floating Orbs */}
// // // //       <div className="floating-orbs">
// // // //         <div className="orb" style={{ 
// // // //           transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
// // // //         }}></div>
// // // //         <div className="orb orb-2" style={{ 
// // // //           transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
// // // //         }}></div>
// // // //       </div>

// // // //       {/* Main Content */}
// // // //       <div className="hero-container-apple">
// // // //         <div className={`hero-content-apple ${isAnimating ? 'exit' : 'enter'}`}>
          
// // // //           {/* Premium Chip/Badge */}
// // // //           <div className="hero-chip">
// // // //             <div className="chip-glow"></div>
// // // //             <span className="chip-icon">✦</span>
// // // //             <span className="chip-text">
// // // //               {slide.slideType === "product" ? "Latest Drop" : slide.slideType === "event" ? "Live Now" : "Featured"}
// // // //             </span>
// // // //           </div>

// // // //           {/* Main Headline with Gradient */}
// // // //           <h1 className="hero-headline">
// // // //             <span className="headline-gradient">{slide.title}</span>
// // // //           </h1>

// // // //           {/* Subheadline */}
// // // //           <p className="hero-subheadline">{slide.subtitle}</p>

// // // //           {/* CTA Group */}
// // // //           <div className="cta-group">
// // // //             {isInternalLink ? (
// // // //               <Link to={redirectLink} className="cta-primary">
// // // //                 <span>{slide.buttonText || "Explore Collection"} →</span>
// // // //                 <div className="btn-hover-effect"></div>
// // // //               </Link>
// // // //             ) : (
// // // //               <a href={redirectLink} target="_blank" rel="noopener noreferrer" className="cta-primary">
// // // //                 <span>{slide.buttonText || "Explore Collection"} →</span>
// // // //                 <div className="btn-hover-effect"></div>
// // // //               </a>
// // // //             )}
            
          
// // // //           </div>

    
// // // //         </div>
// // // //       </div>

   

// // // //     </section>
// // // //   );
// // // // }

// // // // export default Hero;


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
// // //           backgroundImage: `url(${'http://localhost:5000'}${slide.image})`,
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


// // // import { useEffect, useState, useRef, useCallback } from "react";
// // // import { Link } from "react-router-dom";
// // // import api from "../../services/api";
// // // import "./Hero.css";

// // // function Hero() {
// // //   const [slides, setSlides] = useState([]);
// // //   const [current, setCurrent] = useState(0);
// // //   const [isAnimating, setIsAnimating] = useState(false);
// // //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// // //   const [isLoaded, setIsLoaded] = useState(false);
// // //   const heroRef = useRef(null);
// // //   const animationFrameRef = useRef(null);
// // //   const IMAGE_BASE = import.meta.env.VITE_IMAGE_URL;

// // //   useEffect(() => {
// // //     loadSlides();
// // //   }, []);

// // //   useEffect(() => {
// // //     if (!slides.length) return;

// // //     const timer = setInterval(() => {
// // //       handleSlideChange((current + 1) % slides.length);
// // //     }, 6000);

// // //     return () => clearInterval(timer);
// // //   }, [slides, current]);

// // //   useEffect(() => {
// // //     const handleMouseMove = (e) => {
// // //       if (heroRef.current) {
// // //         const rect = heroRef.current.getBoundingClientRect();
// // //         const x = (e.clientX - rect.left) / rect.width;
// // //         const y = (e.clientY - rect.top) / rect.height;
// // //         setMousePosition({ x, y });
// // //       }
// // //     };

// // //     window.addEventListener('mousemove', handleMouseMove, { passive: true });
// // //     return () => window.removeEventListener('mousemove', handleMouseMove);
// // //   }, []);

// // //   const loadSlides = async () => {
// // //     try {
// // //       const { data } = await api.get("/hero-slides");
// // //       const activeSlides = data
// // //         .filter((slide) => slide.isActive)
// // //         .sort((a, b) => a.order - b.order);
// // //       setSlides(activeSlides);
// // //       setTimeout(() => setIsLoaded(true), 100);
// // //     } catch (err) {
// // //       console.error("Failed to load hero slides:", err);
// // //     }
// // //   };

// // //   const handleSlideChange = useCallback((index) => {
// // //     if (isAnimating) return;
// // //     setIsAnimating(true);
// // //     setTimeout(() => {
// // //       setCurrent(index);
// // //       setTimeout(() => setIsAnimating(false), 50);
// // //     }, 400);
// // //   }, [isAnimating]);

// // //   if (!slides.length) {
// // //     return (
// // //       <section className="hero-apple hero-skeleton">
// // //         <div className="hero-skeleton-content">
// // //           <div className="skeleton-chip"></div>
// // //           <div className="skeleton-headline"></div>
// // //           <div className="skeleton-subheadline"></div>
// // //           <div className="skeleton-button"></div>
// // //         </div>
// // //       </section>
// // //     );
// // //   }

// // //   const slide = slides[current];

// // //   const getRedirectLink = () => {
// // //     if (slide.slideType === "product" && slide.productId) return `/products/${slide.productId}`;
// // //     if (slide.slideType === "event" && slide.eventId) return `/events/${slide.eventId}`;
// // //     if (slide.buttonLink) return slide.buttonLink;
// // //     return "/events";
// // //   };

// // //   const redirectLink = getRedirectLink();
// // //   const isInternalLink = !redirectLink.startsWith("http");

// // //   return (
// // //     <section 
// // //       ref={heroRef} 
// // //       className={`hero-apple ${isLoaded ? 'hero-loaded' : ''}`}
// // //       aria-label="Hero banner"
// // //     >
// // //       {/* Background Layer */}
// // //       <div className="hero-bg-wrapper">
// // //         <div 
// // //           className="hero-bg-image"
// // //           style={{
// // //             backgroundImage: `url(https://a4agroup.eu${slide.image})`,
// // //             transform: `scale(1.05) translate(${mousePosition.x * 15}px, ${mousePosition.y * 15}px)`
// // //           }}
// // //         />


// // //         <div className="hero-bg-image-next"
// // //           style={{
// // //             backgroundImage: `url(https://a4agroup.eu${slides[(current + 1) % slides.length].image})`,
// // //             opacity: isAnimating ? 1 : 0
// // //           }}
// // //         />
// // //       </div>
      
// // //       {/* Overlay System */}
// // //       <div className="hero-overlay-system">
// // //         <div className="hero-overlay-base"></div>
// // //         <div className="hero-overlay-vignette"></div>
// // //         <div className="hero-overlay-grain"></div>
// // //       </div>

// // //       {/* Ambient Light Effects */}
// // //       <div className="hero-ambient-lights">
// // //         <div className="ambient-light ambient-primary"></div>
// // //         <div className="ambient-light ambient-secondary"></div>
// // //         <div className="ambient-light ambient-accent"></div>
// // //       </div>

// // //       {/* Content */}
// // //       <div className="hero-container">
// // //         <div className={`hero-content ${isAnimating ? 'content-exit' : 'content-enter'}`}>
          
// // //           {/* Status Badge */}
// // //           <div className="hero-badge">
// // //             <span className="badge-dot"></span>
// // //             <span className="badge-text">
// // //               {slide.slideType === "product" ? "New Collection" : slide.slideType === "event" ? "Upcoming Event" : "Featured"}
// // //             </span>
// // //           </div>

// // //           {/* Headline */}
// // //           <h1 className="hero-headline">
// // //             <span className="headline-primary">{slide.title}</span>
// // //           </h1>

// // //           {/* Description */}
// // //           <p className="hero-description">{slide.subtitle}</p>

// // //           {/* CTA Buttons */}
// // //           <div className="hero-actions">
// // //             {isInternalLink ? (
// // //               <Link to={redirectLink} className="btn-primary">
// // //                 <span className="btn-content">
// // //                   <span className="btn-label">{slide.buttonText || "Explore Now"}</span>
// // //                   <span className="btn-icon">
// // //                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
// // //                       <path d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// // //                     </svg>
// // //                   </span>
// // //                 </span>
// // //               </Link>
// // //             ) : (
// // //               <a href={redirectLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
// // //                 <span className="btn-content">
// // //                   <span className="btn-label">{slide.buttonText || "Explore Now"}</span>
// // //                   <span className="btn-icon">
// // //                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
// // //                       <path d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// // //                     </svg>
// // //                   </span>
// // //                 </span>
// // //               </a>
// // //             )}
            
// // //             <Link to="/events" className="btn-secondary">
// // //               Browse Events
// // //             </Link>
// // //           </div>

// // //           {/* Trust Indicators */}
// // //           <div className="hero-trust">
// // //             <div className="trust-item">
// // //               <span className="trust-value">500+</span>
// // //               <span className="trust-label">Premium Events</span>
// // //             </div>
// // //             <div className="trust-separator"></div>
// // //             <div className="trust-item">
// // //               <span className="trust-value">50K+</span>
// // //               <span className="trust-label">Happy Attendees</span>
// // //             </div>
// // //             <div className="trust-separator"></div>
// // //             <div className="trust-item">
// // //               <span className="trust-value">4.9</span>
// // //               <span className="trust-label">Star Rating</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Navigation */}
// // //       <div className="hero-navigation">
// // //         <div className="hero-progress">
// // //           {slides.map((_, index) => (
// // //             <button
// // //               key={index}
// // //               className={`progress-dot ${index === current ? 'active' : ''}`}
// // //               onClick={() => handleSlideChange(index)}
// // //               aria-label={`Go to slide ${index + 1}`}
// // //             >
// // //               {index === current && <span className="progress-fill"></span>}
// // //             </button>
// // //           ))}
// // //         </div>
        
// // //         <div className="hero-counter">
// // //           <span className="counter-current">{(current + 1).toString().padStart(2, '0')}</span>
// // //           <span className="counter-separator">/</span>
// // //           <span className="counter-total">{slides.length.toString().padStart(2, '0')}</span>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // export default Hero;




// // // import { useEffect, useState, useRef, useCallback } from "react";
// // // import { Link } from "react-router-dom";
// // // import api from "../../services/api";
// // // import "./Hero.css";

// // // function Hero() {
// // //   const [slides, setSlides] = useState([]);
// // //   const [current, setCurrent] = useState(0);
// // //   const [isAnimating, setIsAnimating] = useState(false);
// // //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
// // //   const [isLoaded, setIsLoaded] = useState(false);
// // //   const [scrollProgress, setScrollProgress] = useState(0);
// // //   const heroRef = useRef(null);
// // //   const contentRef = useRef(null);
// // //   const IMAGE_BASE = import.meta.env.VITE_IMAGE_URL;

// // //   useEffect(() => {
// // //     loadSlides();
// // //   }, []);

// // //   useEffect(() => {
// // //     if (!slides.length) return;

// // //     const timer = setInterval(() => {
// // //       handleSlideChange((current + 1) % slides.length);
// // //     }, 6000);

// // //     return () => clearInterval(timer);
// // //   }, [slides, current]);

// // //   useEffect(() => {
// // //     const handleMouseMove = (e) => {
// // //       if (heroRef.current) {
// // //         const rect = heroRef.current.getBoundingClientRect();
// // //         const x = (e.clientX - rect.left) / rect.width;
// // //         const y = (e.clientY - rect.top) / rect.height;
// // //         setMousePosition({ x, y });
// // //       }
// // //     };

// // //     const handleScroll = () => {
// // //       if (heroRef.current) {
// // //         const rect = heroRef.current.getBoundingClientRect();
// // //         const progress = Math.max(0, Math.min(1, 1 - (rect.bottom / (rect.height * 1.5))));
// // //         setScrollProgress(progress);
// // //       }
// // //     };

// // //     window.addEventListener('mousemove', handleMouseMove, { passive: true });
// // //     window.addEventListener('scroll', handleScroll, { passive: true });
// // //     return () => {
// // //       window.removeEventListener('mousemove', handleMouseMove);
// // //       window.removeEventListener('scroll', handleScroll);
// // //     };
// // //   }, []);

// // //   const loadSlides = async () => {
// // //     try {
// // //       const { data } = await api.get("/hero-slides");
// // //       const activeSlides = data
// // //         .filter((slide) => slide.isActive)
// // //         .sort((a, b) => a.order - b.order);
// // //       setSlides(activeSlides);
// // //       setTimeout(() => setIsLoaded(true), 200);
// // //     } catch (err) {
// // //       console.error("Failed to load hero slides:", err);
// // //     }
// // //   };

// // //   const handleSlideChange = useCallback((index) => {
// // //     if (isAnimating) return;
// // //     setIsAnimating(true);
// // //     setTimeout(() => {
// // //       setCurrent(index);
// // //       setTimeout(() => setIsAnimating(false), 100);
// // //     }, 600);
// // //   }, [isAnimating]);

// // //   const handleProgressClick = (index) => {
// // //     if (index === current) return;
// // //     handleSlideChange(index);
// // //   };

// // //   if (!slides.length) {
// // //     return (
// // //       <section className="hero-cinematic hero-skeleton">
// // //         <div className="hero-skeleton-container">
// // //           <div className="skeleton-image"></div>
// // //           <div className="skeleton-content">
// // //             <div className="skeleton-chip"></div>
// // //             <div className="skeleton-headline"></div>
// // //             <div className="skeleton-subheadline"></div>
// // //             <div className="skeleton-cta"></div>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     );
// // //   }

// // //   const slide = slides[current];
// // //   const nextSlide = slides[(current + 1) % slides.length];

// // //   const getRedirectLink = () => {
// // //     if (slide.slideType === "product" && slide.productId) return `/products/${slide.productId}`;
// // //     if (slide.slideType === "event" && slide.eventId) return `/events/${slide.eventId}`;
// // //     if (slide.buttonLink) return slide.buttonLink;
// // //     return "/events";
// // //   };

// // //   const redirectLink = getRedirectLink();
// // //   const isInternalLink = !redirectLink.startsWith("http");

// // //   return (
// // //     <section 
// // //       ref={heroRef} 
// // //       className={`hero-cinematic ${isLoaded ? 'hero-loaded' : ''}`}
// // //       style={{
// // //         '--scroll-progress': scrollProgress,
// // //         '--mouse-x': mousePosition.x,
// // //         '--mouse-y': mousePosition.y,
// // //       }}
// // //     >
// // //       {/* Ambient Background Gradient */}
// // //       <div className="hero-ambient">
// // //         <div className="ambient-gradient ambient-gradient-1"></div>
// // //         <div className="ambient-gradient ambient-gradient-2"></div>
// // //         <div className="ambient-gradient ambient-gradient-3"></div>
// // //         <div className="ambient-noise"></div>
// // //       </div>

// // //       {/* Main Image Container */}
// // //       <div className="hero-media">
// // //         {/* Current Image */}
// // //         <div 
// // //           className={`hero-media-image ${isAnimating ? 'image-exit' : 'image-active'}`}
// // //           style={{
// // //             backgroundImage: `url(${IMAGE_BASE}${slide.image})`,
// // //           }}
// // //         />
        
// // //         {/* Next Image (preloaded) */}
// // //         <div 
// // //           className={`hero-media-image hero-media-next ${isAnimating ? 'image-enter' : ''}`}
// // //           style={{
// // //             backgroundImage: `url(${IMAGE_BASE}${nextSlide.image})`,
// // //           }}
// // //         />

// // //         {/* Image Overlay for better text readability */}
// // //         <div className="hero-media-overlay"></div>
        
// // //         {/* Floating accent shapes */}
// // //         <div className="hero-accent-shapes">
// // //           <div className="accent-circle" style={{ '--float-x': '-10%', '--float-y': '20%' }}></div>
// // //           <div className="accent-circle accent-circle-sm" style={{ '--float-x': '85%', '--float-y': '70%' }}></div>
// // //           <div className="accent-diamond" style={{ '--float-x': '60%', '--float-y': '15%' }}></div>
// // //         </div>
// // //       </div>

// // //       {/* Content Container */}
// // //       <div className="hero-container">
// // //         <div ref={contentRef} className={`hero-content-wrapper ${isAnimating ? 'content-exit' : 'content-enter'}`}>
          
// // //           {/* Premium Badge */}
// // //           <div className="hero-badge-premium">
// // //             <div className="badge-icon">
// // //               <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// // //                 <path d="M7 1L8.545 4.13L12 4.91L9.5 7.495L10.09 11L7 9.37L3.91 11L4.5 7.495L2 4.91L5.455 4.13L7 1Z" fill="currentColor"/>
// // //               </svg>
// // //             </div>
// // //             <span className="badge-label">
// // //               {slide.slideType === "product" ? "New Collection" : slide.slideType === "event" ? "Featured Event" : "Premium Experience"}
// // //             </span>
// // //           </div>

// // //           {/* Headline with text reveal effect */}
// // //           <h1 className="hero-headline">
// // //             <span className="headline-text">
// // //               {slide.title.split('').map((char, i) => (
// // //                 <span 
// // //                   key={i} 
// // //                   className="headline-char" 
// // //                   style={{ '--char-index': i }}
// // //                 >
// // //                   {char === ' ' ? '\u00A0' : char}
// // //                 </span>
// // //               ))}
// // //             </span>
// // //           </h1>

// // //           {/* Description */}
// // //           <p className="hero-description">{slide.subtitle}</p>

// // //           {/* CTA Section */}
// // //           <div className="hero-cta-group">
// // //             {isInternalLink ? (
// // //               <Link to={redirectLink} className="cta-primary">
// // //                 <span className="cta-text">{slide.buttonText || "Explore Now"}</span>
// // //                 <span className="cta-arrow">
// // //                   <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
// // //                     <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// // //                   </svg>
// // //                 </span>
// // //               </Link>
// // //             ) : (
// // //               <a href={redirectLink} target="_blank" rel="noopener noreferrer" className="cta-primary">
// // //                 <span className="cta-text">{slide.buttonText || "Explore Now"}</span>
// // //                 <span className="cta-arrow">
// // //                   <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
// // //                     <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// // //                   </svg>
// // //                 </span>
// // //               </a>
// // //             )}
            
// // //             <Link to="/events" className="cta-secondary">
// // //               <span>Browse Events</span>
// // //               <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
// // //                 <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
// // //                 <path d="M8 4V8L10.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// // //               </svg>
// // //             </Link>
// // //           </div>

// // //           {/* Stats with minimal design */}
// // //           <div className="hero-stats">
// // //             <div className="stat-item">
// // //               <span className="stat-number">500+</span>
// // //               <span className="stat-label">Premium Events</span>
// // //             </div>
// // //             <div className="stat-divider"></div>
// // //             <div className="stat-item">
// // //               <span className="stat-number">50K+</span>
// // //               <span className="stat-label">Attendees</span>
// // //             </div>
// // //             <div className="stat-divider"></div>
// // //             <div className="stat-item">
// // //               <div className="stat-rating">
// // //                 <span className="stat-number">4.9</span>
// // //                 <div className="rating-stars">
// // //                   {[...Array(5)].map((_, i) => (
// // //                     <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
// // //                       <path d="M6 1L7.545 4.13L11 4.91L8.5 7.495L9.09 11L6 9.37L2.91 11L3.5 7.495L1 4.91L4.455 4.13L6 1Z"/>
// // //                     </svg>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //               <span className="stat-label">Rating</span>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Progress Navigation - Linear/Vercel style */}
// // //       <div className="hero-progress-container">
// // //         <div className="hero-progress-track">
// // //           {slides.map((_, index) => (
// // //             <button
// // //               key={index}
// // //               className={`progress-segment ${index === current ? 'segment-active' : ''} ${isAnimating && index === ((current + 1) % slides.length) ? 'segment-next' : ''}`}
// // //               onClick={() => handleProgressClick(index)}
// // //               aria-label={`Slide ${index + 1}`}
// // //             >
// // //               <div className="segment-bar">
// // //                 <div className="segment-fill"></div>
// // //               </div>
// // //               <span className="segment-number">{(index + 1).toString().padStart(2, '0')}</span>
// // //             </button>
// // //           ))}
// // //         </div>
        
// // //         <div className="hero-counter-minimal">
// // //           <span className="counter-current">{String(current + 1).padStart(2, '0')}</span>
// // //           <span className="counter-divider">/</span>
// // //           <span className="counter-total">{String(slides.length).padStart(2, '0')}</span>
// // //         </div>
// // //       </div>

// // //       {/* Scroll indicator */}
// // //       <div className="hero-scroll-indicator" style={{ opacity: 1 - scrollProgress * 2 }}>
// // //         <span>Scroll</span>
// // //         <div className="scroll-line"></div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // export default Hero;



// // import { useEffect, useState, useRef, useCallback } from "react";
// // import { Link } from "react-router-dom";
// // import api from "../../services/api";
// // import "./Hero.css";

// // function Hero() {
// //   const [slides, setSlides] = useState([]);
// //   const [current, setCurrent] = useState(0);
// //   const [isAnimating, setIsAnimating] = useState(false);
// //   const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
// //   const [smoothMouse, setSmoothMouse] = useState({ x: 0.5, y: 0.5 });
// //   const [isLoaded, setIsLoaded] = useState(false);
// //   const [scrollProgress, setScrollProgress] = useState(0);
// //   const [imageOrientations, setImageOrientations] = useState({});
  
// //   const heroRef = useRef(null);
// //   const contentRef = useRef(null);
// //   const rafRef = useRef(null);
// //   const IMAGE_BASE = import.meta.env.VITE_IMAGE_URL;

// //   // Load slides & detect orientations
// //   useEffect(() => {
// //     loadSlides();
// //     return () => cancelAnimationFrame(rafRef.current);
// //   }, []);

// //   // Autoplay
// //   useEffect(() => {
// //     if (!slides.length || isAnimating) return;
// //     const timer = setInterval(() => {
// //       handleSlideChange((current + 1) % slides.length);
// //     }, 6000);
// //     return () => clearInterval(timer);
// //   }, [slides, current, isAnimating]);

// //   // Smooth parallax + scroll tracking
// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       if (heroRef.current) {
// //         const rect = heroRef.current.getBoundingClientRect();
// //         setMousePosition({
// //           x: Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)),
// //           y: Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height)),
// //         });
// //       }
// //     };

// //     const handleScroll = () => {
// //       if (heroRef.current) {
// //         const rect = heroRef.current.getBoundingClientRect();
// //         const progress = Math.max(0, Math.min(1, 1 - (rect.bottom / (rect.height * 1.5))));
// //         setScrollProgress(progress);
// //       }
// //     };

// //     const animate = () => {
// //       setSmoothMouse(prev => ({
// //         x: prev.x + (mousePosition.x - prev.x) * 0.05,
// //         y: prev.y + (mousePosition.y - prev.y) * 0.05,
// //       }));
// //       rafRef.current = requestAnimationFrame(animate);
// //     };

// //     window.addEventListener('mousemove', handleMouseMove, { passive: true });
// //     window.addEventListener('scroll', handleScroll, { passive: true });
// //     rafRef.current = requestAnimationFrame(animate);

// //     return () => {
// //       window.removeEventListener('mousemove', handleMouseMove);
// //       window.removeEventListener('scroll', handleScroll);
// //       cancelAnimationFrame(rafRef.current);
// //     };
// //   }, [mousePosition.x, mousePosition.y]);

// //   const loadSlides = async () => {
// //     try {
// //       const { data } = await api.get("/hero-slides");
// //       const activeSlides = data
// //         .filter((slide) => slide.isActive)
// //         .sort((a, b) => a.order - b.order);
// //       setSlides(activeSlides);
// //       detectOrientations(activeSlides);
// //       setTimeout(() => setIsLoaded(true), 300);
// //     } catch (err) {
// //       console.error("Failed to load hero slides:", err);
// //     }
// //   };

// //   const detectOrientations = (slides) => {
// //     const orientations = {};
// //     slides.forEach((slide, index) => {
// //       const img = new Image();
// //       img.onload = () => {
// //         orientations[index] = img.width >= img.height ? 'landscape' : 'portrait';
// //         setImageOrientations(prev => ({ ...prev, ...orientations }));
// //       };
// //       img.onerror = () => {
// //         orientations[index] = 'landscape';
// //         setImageOrientations(prev => ({ ...prev, ...orientations }));
// //       };
// //       img.src = `${IMAGE_BASE}${slide.image}`;
// //     });
// //   };

// //   const handleSlideChange = useCallback((index) => {
// //     if (isAnimating || index === current) return;
// //     setIsAnimating(true);
// //     setTimeout(() => {
// //       setCurrent(index);
// //       setTimeout(() => setIsAnimating(false), 100);
// //     }, 600);
// //   }, [isAnimating, current]);

// //   const handleProgressClick = (index) => {
// //     if (index === current || isAnimating) return;
// //     handleSlideChange(index);
// //   };

// //   if (!slides.length) {
// //     return (
// //       <section className="hero-premium hero-skeleton" aria-busy="true">
// //         <div className="hero-skeleton-container">
// //           <div className="skeleton-media" />
// //           <div className="skeleton-content">
// //             <div className="skeleton-chip" />
// //             <div className="skeleton-headline" />
// //             <div className="skeleton-subheadline" />
// //             <div className="skeleton-cta" />
// //           </div>
// //         </div>
// //       </section>
// //     );
// //   }

// //   const slide = slides[current];
// //   const nextSlide = slides[(current + 1) % slides.length];
// //   const orientation = imageOrientations[current] || 'landscape';

// //   const getRedirectLink = () => {
// //     if (slide.slideType === "product" && slide.productId) return `/products/${slide.productId}`;
// //     if (slide.slideType === "event" && slide.eventId) return `/events/${slide.eventId}`;
// //     if (slide.buttonLink) return slide.buttonLink;
// //     return "/events";
// //   };

// //   const redirectLink = getRedirectLink();
// //   const isInternalLink = !redirectLink.startsWith("http");

// //   // Parallax values
// //   const parallaxX = (smoothMouse.x - 0.5) * 25;
// //   const parallaxY = (smoothMouse.y - 0.5) * 25;

// //   return (
// //     <section 
// //       ref={heroRef} 
// //       className={`hero-premium ${isLoaded ? 'is-loaded' : ''}`}
// //       style={{
// //         '--scroll-progress': scrollProgress,
// //         '--mouse-x': smoothMouse.x,
// //         '--mouse-y': smoothMouse.y,
// //       }}
// //       aria-label="Featured content"
// //     >
// //       {/* Ambient background */}
// //       <div className="hero-bg" aria-hidden="true">
// //         <div className="hero-bg-orb hero-bg-orb--blue" />
// //         <div className="hero-bg-orb hero-bg-orb--teal" />
// //         <div className="hero-bg-orb hero-bg-orb--green" />
// //         <div className="hero-bg-grid" />
// //         <div className="hero-bg-grain" />
// //       </div>

// //       {/* Main Image Container */}
// //       <div className="hero-media">
// //         {/* Current Image */}
// //         <div 
// //           className={`hero-media-image ${isAnimating ? 'image-exit' : 'image-active'} ${orientation === 'portrait' ? 'image-portrait' : 'image-landscape'}`}
// //           style={{
// //             backgroundImage: `url(${IMAGE_BASE}${slide.image})`,
// //             transform: `translate(${parallaxX}px, ${parallaxY}px)`,
// //           }}
// //         />
        
// //         {/* Next Image (preloaded) */}
// //         <div 
// //           className={`hero-media-image hero-media-next ${isAnimating ? 'image-enter' : ''} ${imageOrientations[(current + 1) % slides.length] === 'portrait' ? 'image-portrait' : 'image-landscape'}`}
// //           style={{
// //             backgroundImage: `url(${IMAGE_BASE}${nextSlide.image})`,
// //           }}
// //         />

// //         {/* Subtle gradient overlay for text readability */}
// //         <div className="hero-media-gradient" />
        
// //         {/* Floating geometric accents */}
// //         <div className="hero-accents" aria-hidden="true">
// //           <div className="hero-accent hero-accent--1" />
// //           <div className="hero-accent hero-accent--2" />
// //           <div className="hero-accent hero-accent--3" />
// //         </div>
// //       </div>

// //       {/* Content Container */}
// //       <div className="hero-container">
// //         <div 
// //           ref={contentRef} 
// //           className={`hero-content ${isAnimating ? 'content-exit' : 'content-enter'}`}
// //         >
          
// //           {/* Premium Badge */}
// //           <div className="hero-badge">
// //             <span className="hero-badge-dot" />
// //             <span className="hero-badge-text">
// //               {slide.slideType === "product" ? "New Collection" : slide.slideType === "event" ? "Featured Event" : "Premium Experience"}
// //             </span>
// //           </div>

// //           {/* Headline */}
// //           <h1 className="hero-headline">
// //             <span className="hero-headline-text">{slide.title}</span>
// //           </h1>

// //           {/* Description */}
// //           <p className="hero-description">{slide.subtitle}</p>

// //           {/* CTA Buttons */}
// //           <div className="hero-actions">
// //             {isInternalLink ? (
// //               <Link to={redirectLink} className="hero-btn hero-btn--primary">
// //                 <span>{slide.buttonText || "Explore Now"}</span>
// //                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
// //                   <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// //                 </svg>
// //               </Link>
// //             ) : (
// //               <a href={redirectLink} target="_blank" rel="noopener noreferrer" className="hero-btn hero-btn--primary">
// //                 <span>{slide.buttonText || "Explore Now"}</span>
// //                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
// //                   <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
// //                 </svg>
// //               </a>
// //             )}
            
// //             <Link to="/events" className="hero-btn hero-btn--secondary">
// //               <span>Browse Events</span>
// //               <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
// //                 <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5"/>
// //                 <path d="M7 3.5V7L9.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// //               </svg>
// //             </Link>
// //           </div>

// //           {/* Stats */}
// //           <div className="hero-stats">
// //             <div className="hero-stat">
// //               <span className="hero-stat-value">500+</span>
// //               <span className="hero-stat-label">Premium Events</span>
// //             </div>
// //             <div className="hero-stat-divider" />
// //             <div className="hero-stat">
// //               <span className="hero-stat-value">50K+</span>
// //               <span className="hero-stat-label">Attendees</span>
// //             </div>
// //             <div className="hero-stat-divider" />
// //             <div className="hero-stat">
// //               <div className="hero-stat-rating">
// //                 <span className="hero-stat-value">4.9</span>
// //                 <div className="hero-stars">
// //                   {[...Array(5)].map((_, i) => (
// //                     <svg key={i} width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
// //                       <path d="M5 0L6.125 3.475L10 3.875L7.5 6.5L8.125 10L5 8.25L1.875 10L2.5 6.5L0 3.875L3.875 3.475L5 0Z"/>
// //                     </svg>
// //                   ))}
// //                 </div>
// //               </div>
// //               <span className="hero-stat-label">Rating</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Progress Navigation */}
// //       <div className="hero-nav" role="navigation" aria-label="Slide navigation">
// //         <div className="hero-nav-track">
// //           {slides.map((_, index) => (
// //             <button
// //               key={index}
// //               className={`hero-nav-dot ${index === current ? 'is-active' : ''}`}
// //               onClick={() => handleProgressClick(index)}
// //               aria-label={`Slide ${index + 1}`}
// //               aria-current={index === current ? 'true' : 'false'}
// //             >
// //               <span className="hero-nav-dot-fill" />
// //             </button>
// //           ))}
// //         </div>
        
// //         <div className="hero-nav-counter" aria-hidden="true">
// //           <span>{String(current + 1).padStart(2, '0')}</span>
// //           <span className="counter-sep">/</span>
// //           <span>{String(slides.length).padStart(2, '0')}</span>
// //         </div>
// //       </div>

// //       {/* Scroll indicator */}
// //       <div className="hero-scroll-hint" style={{ opacity: Math.max(0, 1 - scrollProgress * 2) }} aria-hidden="true">
// //         <span>Scroll</span>
// //         <div className="hero-scroll-hint-line" />
// //       </div>
// //     </section>
// //   );
// // }

// // export default Hero;


// // import { useEffect, useState, useRef, useCallback } from "react";
// // import { Link } from "react-router-dom";
// // import api from "../../services/api";
// // import "./Hero.css";

// // function Hero() {
// //   const [slides, setSlides] = useState([]);
// //   const [current, setCurrent] = useState(0);
// //   const [isAnimating, setIsAnimating] = useState(false);
// //   const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
// //   const [smoothMouse, setSmoothMouse] = useState({ x: 0.5, y: 0.5 });
// //   const [isLoaded, setIsLoaded] = useState(false);
// //   const [scrollProgress, setScrollProgress] = useState(0);
// //   const [imageOrientations, setImageOrientations] = useState({});
// //   const [contentVisible, setContentVisible] = useState(false);

// //   const heroRef = useRef(null);
// //   const contentRef = useRef(null);
// //   const rafRef = useRef(null);
// //   const IMAGE_BASE = import.meta.env.VITE_IMAGE_URL;

// //   // Load slides & detect orientations
// //   useEffect(() => {
// //     loadSlides();
// //     return () => cancelAnimationFrame(rafRef.current);
// //   }, []);

// //   // Content entrance animation after load
// //   useEffect(() => {
// //     if (isLoaded && slides.length) {
// //       setTimeout(() => setContentVisible(true), 400);
// //     }
// //   }, [isLoaded, slides]);

// //   // Autoplay with cinematic timing
// //   useEffect(() => {
// //     if (!slides.length || isAnimating) return;
// //     const timer = setInterval(() => {
// //       handleSlideChange((current + 1) % slides.length);
// //     }, 7000);
// //     return () => clearInterval(timer);
// //   }, [slides, current, isAnimating]);

// //   // Smooth parallax + scroll tracking
// //   useEffect(() => {
// //     const handleMouseMove = (e) => {
// //       if (heroRef.current) {
// //         const rect = heroRef.current.getBoundingClientRect();
// //         setMousePosition({
// //           x: Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)),
// //           y: Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height)),
// //         });
// //       }
// //     };

// //     const handleScroll = () => {
// //       if (heroRef.current) {
// //         const rect = heroRef.current.getBoundingClientRect();
// //         const progress = Math.max(0, Math.min(1, 1 - rect.bottom / (rect.height * 1.5)));
// //         setScrollProgress(progress);
// //       }
// //     };

// //     const animate = () => {
// //       setSmoothMouse((prev) => ({
// //         x: prev.x + (mousePosition.x - prev.x) * 0.04,
// //         y: prev.y + (mousePosition.y - prev.y) * 0.04,
// //       }));
// //       rafRef.current = requestAnimationFrame(animate);
// //     };

// //     window.addEventListener("mousemove", handleMouseMove, { passive: true });
// //     window.addEventListener("scroll", handleScroll, { passive: true });
// //     rafRef.current = requestAnimationFrame(animate);

// //     return () => {
// //       window.removeEventListener("mousemove", handleMouseMove);
// //       window.removeEventListener("scroll", handleScroll);
// //       cancelAnimationFrame(rafRef.current);
// //     };
// //   }, [mousePosition.x, mousePosition.y]);

// //   const loadSlides = async () => {
// //     try {
// //       const { data } = await api.get("/hero-slides");
// //       const activeSlides = data
// //         .filter((slide) => slide.isActive)
// //         .sort((a, b) => a.order - b.order);
// //       setSlides(activeSlides);
// //       detectOrientations(activeSlides);
// //       setTimeout(() => setIsLoaded(true), 400);
// //     } catch (err) {
// //       console.error("Failed to load hero slides:", err);
// //     }
// //   };

// //   const detectOrientations = (slides) => {
// //     const orientations = {};
// //     slides.forEach((slide, index) => {
// //       const img = new Image();
// //       img.onload = () => {
// //         orientations[index] = img.width >= img.height ? "landscape" : "portrait";
// //         setImageOrientations((prev) => ({ ...prev, ...orientations }));
// //       };
// //       img.onerror = () => {
// //         orientations[index] = "landscape";
// //         setImageOrientations((prev) => ({ ...prev, ...orientations }));
// //       };
// //       img.src = `${IMAGE_BASE}${slide.image}`;
// //     });
// //   };

// //   const handleSlideChange = useCallback(
// //     (index) => {
// //       if (isAnimating || index === current) return;
// //       setIsAnimating(true);
// //       setContentVisible(false);
// //       setTimeout(() => {
// //         setCurrent(index);
// //         setTimeout(() => {
// //           setContentVisible(true);
// //           setTimeout(() => setIsAnimating(false), 100);
// //         }, 150);
// //       }, 700);
// //     },
// //     [isAnimating, current]
// //   );

// //   const handleProgressClick = (index) => {
// //     if (index === current || isAnimating) return;
// //     handleSlideChange(index);
// //   };

// //   if (!slides.length) {
// //     return (
// //       <section className="hero-premium hero-skeleton" aria-busy="true">
// //         <div className="hero-skeleton-container">
// //           <div className="skeleton-media" />
// //           <div className="skeleton-content">
// //             <div className="skeleton-chip" />
// //             <div className="skeleton-headline" />
// //             <div className="skeleton-subheadline" />
// //             <div className="skeleton-cta" />
// //           </div>
// //         </div>
// //       </section>
// //     );
// //   }

// //   const slide = slides[current];
// //   const nextSlide = slides[(current + 1) % slides.length];
// //   const orientation = imageOrientations[current] || "landscape";

// //   const getRedirectLink = () => {
// //     if (slide.slideType === "product" && slide.productId) return `/products/${slide.productId}`;
// //     if (slide.slideType === "event" && slide.eventId) return `/events/${slide.eventId}`;
// //     if (slide.buttonLink) return slide.buttonLink;
// //     return "/events";
// //   };

// //   const redirectLink = getRedirectLink();
// //   const isInternalLink = !redirectLink.startsWith("http");

// //   // Parallax values
// //   const parallaxX = (smoothMouse.x - 0.5) * 30;
// //   const parallaxY = (smoothMouse.y - 0.5) * 30;

// //   return (
// //     <section
// //       ref={heroRef}
// //       className={`hero-premium ${isLoaded ? "is-loaded" : ""}`}
// //       style={{
// //         "--scroll-progress": scrollProgress,
// //         "--mouse-x": smoothMouse.x,
// //         "--mouse-y": smoothMouse.y,
// //       }}
// //       aria-label="Featured content"
// //     >
// //       {/* Ambient background */}
// //       <div className="hero-bg" aria-hidden="true">
// //         <div className="hero-bg-orb hero-bg-orb--blue" />
// //         <div className="hero-bg-orb hero-bg-orb--teal" />
// //         <div className="hero-bg-orb hero-bg-orb--green" />
// //         <div className="hero-bg-grid" />
// //         <div className="hero-bg-grain" />
// //       </div>

// //       {/* Main Image Container */}
// //       <div className="hero-media">
// //         {/* Current Image */}
// //         <div
// //           className={`hero-media-image ${isAnimating ? "image-exit" : "image-active"} ${
// //             orientation === "portrait" ? "image-portrait" : "image-landscape"
// //           }`}
// //           style={{
// //             backgroundImage: `url(${IMAGE_BASE}${slide.image})`,
// //             transform: `translate(${parallaxX}px, ${parallaxY}px) scale(1.05)`,
// //           }}
// //         />

// //         {/* Next Image (preloaded) */}
// //         <div
// //           className={`hero-media-image hero-media-next ${isAnimating ? "image-enter" : ""} ${
// //             imageOrientations[(current + 1) % slides.length] === "portrait"
// //               ? "image-portrait"
// //               : "image-landscape"
// //           }`}
// //           style={{
// //             backgroundImage: `url(${IMAGE_BASE}${nextSlide.image})`,
// //           }}
// //         />

// //         {/* Gradient overlay for text readability */}
// //         <div className="hero-media-gradient" />

// //         {/* Floating geometric accents */}
// //         <div className="hero-accents" aria-hidden="true">
// //           <div className="hero-accent hero-accent--1" />
// //           <div className="hero-accent hero-accent--2" />
// //           <div className="hero-accent hero-accent--3" />
// //         </div>
// //       </div>

// //       {/* Content Container */}
// //       <div className="hero-container">
// //         <div
// //           ref={contentRef}
// //           className={`hero-content ${contentVisible ? "content-enter" : "content-exit"}`}
// //         >
// //           {/* Premium Badge */}
// //           <div className="hero-badge">
// //             <span className="hero-badge-dot" />
// //             <span className="hero-badge-text">
// //               {slide.slideType === "product"
// //                 ? "New Collection"
// //                 : slide.slideType === "event"
// //                 ? "Featured Event"
// //                 : "Premium Experience"}
// //             </span>
// //           </div>

// //           {/* Headline */}
// //           <h1 className="hero-headline">
// //             <span className="hero-headline-text">{slide.title}</span>
// //           </h1>

// //           {/* Description */}
// //           <p className="hero-description">{slide.subtitle}</p>

// //           {/* CTA Buttons */}
// //           <div className="hero-actions">
// //             {isInternalLink ? (
// //               <Link to={redirectLink} className="hero-btn hero-btn--primary">
// //                 <span>{slide.buttonText || "Explore Now"}</span>
// //                 <svg
// //                   width="16"
// //                   height="16"
// //                   viewBox="0 0 16 16"
// //                   fill="none"
// //                   aria-hidden="true"
// //                 >
// //                   <path
// //                     d="M3 8H13M13 8L9 4M13 8L9 12"
// //                     stroke="currentColor"
// //                     strokeWidth="2"
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                   />
// //                 </svg>
// //               </Link>
// //             ) : (
// //               <a
// //                 href={redirectLink}
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 className="hero-btn hero-btn--primary"
// //               >
// //                 <span>{slide.buttonText || "Explore Now"}</span>
// //                 <svg
// //                   width="16"
// //                   height="16"
// //                   viewBox="0 0 16 16"
// //                   fill="none"
// //                   aria-hidden="true"
// //                 >
// //                   <path
// //                     d="M3 8H13M13 8L9 4M13 8L9 12"
// //                     stroke="currentColor"
// //                     strokeWidth="2"
// //                     strokeLinecap="round"
// //                     strokeLinejoin="round"
// //                   />
// //                 </svg>
// //               </a>
// //             )}

// //             <Link to="/events" className="hero-btn hero-btn--secondary">
// //               <span>Browse Events</span>
// //               <svg
// //                 width="14"
// //                 height="14"
// //                 viewBox="0 0 14 14"
// //                 fill="none"
// //                 aria-hidden="true"
// //               >
// //                 <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
// //                 <path
// //                   d="M7 3.5V7L9.5 9"
// //                   stroke="currentColor"
// //                   strokeWidth="1.5"
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                 />
// //               </svg>
// //             </Link>
// //           </div>

// //           {/* Stats */}
// //           <div className="hero-stats">
// //             <div className="hero-stat">
// //               <span className="hero-stat-value">500+</span>
// //               <span className="hero-stat-label">Premium Events</span>
// //             </div>
// //             <div className="hero-stat-divider" />
// //             <div className="hero-stat">
// //               <span className="hero-stat-value">50K+</span>
// //               <span className="hero-stat-label">Attendees</span>
// //             </div>
// //             <div className="hero-stat-divider" />
// //             <div className="hero-stat">
// //               <div className="hero-stat-rating">
// //                 <span className="hero-stat-value">4.9</span>
// //                 <div className="hero-stars">
// //                   {[...Array(5)].map((_, i) => (
// //                     <svg
// //                       key={i}
// //                       width="10"
// //                       height="10"
// //                       viewBox="0 0 10 10"
// //                       fill="currentColor"
// //                       aria-hidden="true"
// //                     >
// //                       <path d="M5 0L6.125 3.475L10 3.875L7.5 6.5L8.125 10L5 8.25L1.875 10L2.5 6.5L0 3.875L3.875 3.475L5 0Z" />
// //                     </svg>
// //                   ))}
// //                 </div>
// //               </div>
// //               <span className="hero-stat-label">Rating</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Progress Navigation */}
// //       <div className="hero-nav" role="navigation" aria-label="Slide navigation">
// //         <div className="hero-nav-track">
// //           {slides.map((_, index) => (
// //             <button
// //               key={index}
// //               className={`hero-nav-dot ${index === current ? "is-active" : ""}`}
// //               onClick={() => handleProgressClick(index)}
// //               aria-label={`Slide ${index + 1}`}
// //               aria-current={index === current ? "true" : "false"}
// //             >
// //               <span className="hero-nav-dot-fill" />
// //             </button>
// //           ))}
// //         </div>

// //         <div className="hero-nav-counter" aria-hidden="true">
// //           <span>{String(current + 1).padStart(2, "0")}</span>
// //           <span className="counter-sep">/</span>
// //           <span>{String(slides.length).padStart(2, "0")}</span>
// //         </div>
// //       </div>

// //       {/* Scroll indicator */}
// //       <div
// //         className="hero-scroll-hint"
// //         style={{ opacity: Math.max(0, 1 - scrollProgress * 2) }}
// //         aria-hidden="true"
// //       >
// //         <span>Scroll</span>
// //         <div className="hero-scroll-hint-line" />
// //       </div>
// //     </section>
// //   );
// // }

// // export default Hero;


// import { useEffect, useState, useRef, useCallback } from "react";
// import { Link } from "react-router-dom";
// import api from "../../services/api";
// import "./Hero.css";

// function Hero() {
//   const [slides, setSlides] = useState([]);
//   const [current, setCurrent] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
//   const [smoothMouse, setSmoothMouse] = useState({ x: 0.5, y: 0.5 });
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [imageOrientations, setImageOrientations] = useState({});
//   const [contentVisible, setContentVisible] = useState(false);

//   const heroRef = useRef(null);
//   const contentRef = useRef(null);
//   const rafRef = useRef(null);
//   const IMAGE_BASE = import.meta.env.VITE_IMAGE_URL;

//   useEffect(() => {
//     loadSlides();
//     return () => cancelAnimationFrame(rafRef.current);
//   }, []);

//   useEffect(() => {
//     if (isLoaded && slides.length) {
//       setTimeout(() => setContentVisible(true), 400);
//     }
//   }, [isLoaded, slides]);

//   useEffect(() => {
//     if (!slides.length || isAnimating) return;
//     const timer = setInterval(() => {
//       handleSlideChange((current + 1) % slides.length);
//     }, 7000);
//     return () => clearInterval(timer);
//   }, [slides, current, isAnimating]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (heroRef.current) {
//         const rect = heroRef.current.getBoundingClientRect();
//         setMousePosition({
//           x: Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)),
//           y: Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height)),
//         });
//       }
//     };

//     const handleScroll = () => {
//       if (heroRef.current) {
//         const rect = heroRef.current.getBoundingClientRect();
//         const progress = Math.max(0, Math.min(1, 1 - rect.bottom / (rect.height * 1.5)));
//         setScrollProgress(progress);
//       }
//     };

//     const animate = () => {
//       setSmoothMouse((prev) => ({
//         x: prev.x + (mousePosition.x - prev.x) * 0.04,
//         y: prev.y + (mousePosition.y - prev.y) * 0.04,
//       }));
//       rafRef.current = requestAnimationFrame(animate);
//     };

//     window.addEventListener("mousemove", handleMouseMove, { passive: true });
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     rafRef.current = requestAnimationFrame(animate);

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("scroll", handleScroll);
//       cancelAnimationFrame(rafRef.current);
//     };
//   }, [mousePosition.x, mousePosition.y]);

//   const loadSlides = async () => {
//     try {
//       const { data } = await api.get("/hero-slides");
//       const activeSlides = data
//         .filter((slide) => slide.isActive)
//         .sort((a, b) => a.order - b.order);
//       setSlides(activeSlides);
//       detectOrientations(activeSlides);
//       setTimeout(() => setIsLoaded(true), 400);
//     } catch (err) {
//       console.error("Failed to load hero slides:", err);
//     }
//   };

//   const detectOrientations = (slides) => {
//     const orientations = {};
//     slides.forEach((slide, index) => {
//       const img = new Image();
//       img.onload = () => {
//         orientations[index] = img.width >= img.height ? "landscape" : "portrait";
//         setImageOrientations((prev) => ({ ...prev, ...orientations }));
//       };
//       img.onerror = () => {
//         orientations[index] = "landscape";
//         setImageOrientations((prev) => ({ ...prev, ...orientations }));
//       };
//       img.src = `${IMAGE_BASE}${slide.image}`;
//     });
//   };

//   const handleSlideChange = useCallback(
//     (index) => {
//       if (isAnimating || index === current) return;
//       setIsAnimating(true);
//       setContentVisible(false);
//       setTimeout(() => {
//         setCurrent(index);
//         setTimeout(() => {
//           setContentVisible(true);
//           setTimeout(() => setIsAnimating(false), 100);
//         }, 150);
//       }, 700);
//     },
//     [isAnimating, current]
//   );

//   const handleProgressClick = (index) => {
//     if (index === current || isAnimating) return;
//     handleSlideChange(index);
//   };

//   if (!slides.length) {
//     return (
//       <section className="hero-premium hero-skeleton" aria-busy="true">
//         <div className="hero-skeleton-container">
//           <div className="skeleton-media" />
//           <div className="skeleton-content">
//             <div className="skeleton-chip" />
//             <div className="skeleton-headline" />
//             <div className="skeleton-subheadline" />
//             <div className="skeleton-cta" />
//           </div>
//         </div>
//       </section>
//     );
//   }

//   const slide = slides[current];
//   const nextSlide = slides[(current + 1) % slides.length];
//   const orientation = imageOrientations[current] || "landscape";

//   const getRedirectLink = () => {
//     if (slide.slideType === "product" && slide.productId) return `/products/${slide.productId}`;
//     if (slide.slideType === "event" && slide.eventId) return `/events/${slide.eventId}`;
//     if (slide.buttonLink) return slide.buttonLink;
//     return "/events";
//   };

//   const redirectLink = getRedirectLink();
//   const isInternalLink = !redirectLink.startsWith("http");

//   const parallaxX = (smoothMouse.x - 0.5) * 30;
//   const parallaxY = (smoothMouse.y - 0.5) * 30;

//   const getBadgeText = () => {
//     if (slide.slideType === "product") return "New Collection";
//     if (slide.slideType === "event") return "Featured Event";
//     return "Since 1926";
//   };

//   return (
//     <section
//       ref={heroRef}
//       className={`hero-premium ${isLoaded ? "is-loaded" : ""}`}
//       style={{
//         "--scroll-progress": scrollProgress,
//         "--mouse-x": smoothMouse.x,
//         "--mouse-y": smoothMouse.y,
//       }}
//       aria-label="Featured content"
//     >
//       {/* Ambient background */}
//       <div className="hero-bg" aria-hidden="true">
//         {/* <div className="hero-bg-orb hero-bg-orb--teal" />
//         <div className="hero-bg-orb hero-bg-orb--blue" /> */}
//         <div className="hero-bg-orb hero-bg-orb--emerald" />
//         <div className="hero-bg-grid" />
//         <div className="hero-bg-grain" />
//         <div className="hero-bg-vignette" />
//       </div>

//       {/* Main Image Container */}
//       <div className="hero-media">
//         <div
//           className={`hero-media-image ${isAnimating ? "image-exit" : "image-active"} ${
//             orientation === "portrait" ? "image-portrait" : "image-landscape"
//           }`}
//           style={{
//             backgroundImage: `url(https://a4agroup.eu${slide.image})`,
//             transform: `translate(${parallaxX}px, ${parallaxY}px) scale(1.05)`,
//           }}
//         />

//         <div
//           className={`hero-media-image hero-media-next ${isAnimating ? "image-enter" : ""} ${
//             imageOrientations[(current + 1) % slides.length] === "portrait"
//               ? "image-portrait"
//               : "image-landscape"
//           }`}
//           style={{
//             backgroundImage: `url(${IMAGE_BASE}${nextSlide.image})`,
//           }}
//         />

//         <div className="hero-media-gradient" />

//         {/* <div className="hero-accents" aria-hidden="true">
//           <div className="hero-accent hero-accent--1" />
//           <div className="hero-accent hero-accent--2" />
//           <div className="hero-accent hero-accent--3" />
//         </div> */}
//       </div>

//       {/* Content Container */}
//       <div className="hero-container">
//         <div
//           ref={contentRef}
//           className={`hero-content ${contentVisible ? "content-enter" : "content-exit"}`}
//         >
//           {/* Badge */}
//           <div className="hero-badge">
//             <span className="hero-badge-dot" />
//             <span className="hero-badge-text">{getBadgeText()}</span>
//           </div>

//           {/* Headline */}
//           <h1 className="hero-headline">
//             <span className="hero-headline-text">{slide.title}</span>
//           </h1>

//           {/* Description */}
//           <p className="hero-description">{slide.subtitle}</p>

//           {/* CTA Buttons */}
//           <div className="hero-actions">
//             {isInternalLink ? (
//               <Link to={redirectLink} className="hero-btn hero-btn--primary">
//                 <span>{slide.buttonText || "Explore Now"}</span>
//                 <span className="hero-btn-arrow">→</span>
//                 <div className="hero-btn-shimmer" aria-hidden="true" />
//               </Link>
//             ) : (
//               <a
//                 href={redirectLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hero-btn hero-btn--primary"
//               >
//                 <span>{slide.buttonText || "Explore Now"}</span>
//                 <span className="hero-btn-arrow">→</span>
//                 <div className="hero-btn-shimmer" aria-hidden="true" />
//               </a>
//             )}

//             <Link to="/events" className="hero-btn hero-btn--secondary">
//               <span>Browse Events</span>
//               <span className="hero-btn-arrow">→</span>
//               <div className="hero-btn-shimmer" aria-hidden="true" />
//             </Link>
//           </div>

//           {/* Heritage Stats */}
//           {/* <div className="hero-stats">
//             <div className="hero-stat">
//               <span className="hero-stat-value">Century</span>
//               <span className="hero-stat-label">Of Legacy</span>
//             </div>
//             <div className="hero-stat-divider" />
//             <div className="hero-stat">
//               <span className="hero-stat-value">German</span>
//               <span className="hero-stat-label">Precision</span>
//             </div>
//             <div className="hero-stat-divider" />
//             <div className="hero-stat">
//               <span className="hero-stat-value">Indian</span>
//               <span className="hero-stat-label">Soul</span>
//             </div>
//           </div> */}
//         </div>
//       </div>

//       {/* Progress Navigation */}
//       <div className="hero-nav" role="navigation" aria-label="Slide navigation">
//         <div className="hero-nav-track">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               className={`hero-nav-dot ${index === current ? "is-active" : ""}`}
//               onClick={() => handleProgressClick(index)}
//               aria-label={`Slide ${index + 1}`}
//               aria-current={index === current ? "true" : "false"}
//             >
//               <span className="hero-nav-dot-fill" />
//             </button>
//           ))}
//         </div>

//         <div className="hero-nav-counter" aria-hidden="true">
//           <span>{String(current + 1).padStart(2, "0")}</span>
//           <span className="counter-sep">/</span>
//           <span>{String(slides.length).padStart(2, "0")}</span>
//         </div>
//       </div>

//       {/* Scroll indicator */}
//       <div
//         className="hero-scroll-hint"
//         style={{ opacity: Math.max(0, 1 - scrollProgress * 2) }}
//         aria-hidden="true"
//       >
//         <span>Scroll</span>
//         <div className="hero-scroll-hint-line" />
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [imageOrientations, setImageOrientations] = useState({});

  const heroRef = useRef(null);
  const IMAGE_BASE = import.meta.env.VITE_IMAGE_URL;

  useEffect(() => {
    loadSlides();
  }, []);

  useEffect(() => {
    if (isLoaded && slides.length) {
      setTimeout(() => setContentVisible(true), 400);
    }
  }, [isLoaded, slides]);

  useEffect(() => {
    if (!slides.length || isAnimating) return;
    const timer = setInterval(() => {
      handleSlideChange((current + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides, current, isAnimating]);

  const loadSlides = async () => {
    try {
      const { data } = await api.get("/hero-slides");
      const activeSlides = data
        .filter((slide) => slide.isActive)
        .sort((a, b) => a.order - b.order);
      setSlides(activeSlides);
      detectOrientations(activeSlides);
      setTimeout(() => setIsLoaded(true), 300);
    } catch (err) {
      console.error("Failed to load hero slides:", err);
    }
  };

  const detectOrientations = (slides) => {
    const orientations = {};
    slides.forEach((slide, index) => {
      const img = new Image();
      img.onload = () => {
        orientations[index] = img.width >= img.height ? "landscape" : "portrait";
        setImageOrientations((prev) => ({ ...prev, ...orientations }));
      };
      img.onerror = () => {
        orientations[index] = "landscape";
        setImageOrientations((prev) => ({ ...prev, ...orientations }));
      };
      img.src = `${IMAGE_BASE}${slide.image}`;
    });
  };

  const handleSlideChange = useCallback(
    (index) => {
      if (isAnimating || index === current) return;
      setIsAnimating(true);
      setContentVisible(false);
      setTimeout(() => {
        setCurrent(index);
        setTimeout(() => {
          setContentVisible(true);
          setTimeout(() => setIsAnimating(false), 200);
        }, 200);
      }, 600);
    },
    [isAnimating, current]
  );

  const handleProgressClick = (index) => {
    if (index === current || isAnimating) return;
    handleSlideChange(index);
  };

  if (!slides.length) {
    return (
      <section className="hero-modern hero-skeleton" aria-busy="true">
        <div className="hero-skeleton-container">
          <div className="skeleton-content">
            <div className="skeleton-chip" />
            <div className="skeleton-headline" />
            <div className="skeleton-subheadline" />
            <div className="skeleton-cta" />
          </div>
          <div className="skeleton-poster" />
        </div>
      </section>
    );
  }

  const slide = slides[current];
  const nextSlide = slides[(current + 1) % slides.length];
  const orientation = imageOrientations[current] || "portrait";

  const getRedirectLink = () => {
    if (slide.slideType === "product" && slide.productId) return `/products/${slide.productId}`;
    if (slide.slideType === "event" && slide.eventId) return `/events/${slide.eventId}`;
    if (slide.buttonLink) return slide.buttonLink;
    return "/events";
  };

  const redirectLink = getRedirectLink();
  const isInternalLink = !redirectLink.startsWith("http");

  const getBadgeText = () => {
    if (slide.slideType === "product") return "New Collection";
    if (slide.slideType === "event") return "Featured Event";
    return "Since 1926";
  };

  const getCategoryIcon = () => {
    if (slide.slideType === "product") return "✦";
    if (slide.slideType === "event") return "◈";
    return "◆";
  };

  return (
    <section
      ref={heroRef}
      className={`hero-modern ${isLoaded ? "is-loaded" : ""}`}
      aria-label="Featured content"
    >
      {/* Background Effects */}
      <div className="hero-bg-effects" aria-hidden="true">
        <div className="hero-bg-glow hero-bg-glow--1" />
        <div className="hero-bg-glow hero-bg-glow--2" />
        <div className="hero-bg-grain" />
      </div>

      <div className="hero-modern-container">
        {/* LEFT CONTENT */}
        <div className="hero-content-section">
          <div className={`hero-content-inner ${contentVisible ? "content-enter" : "content-exit"}`}>
            {/* Category Badge */}
            <div className="hero-category-badge">
              <span className="hero-category-icon">{getCategoryIcon()}</span>
              <span className="hero-category-text">{getBadgeText()}</span>
            </div>

            {/* Title */}
            <h1 className="hero-main-title">
              <span className="hero-title-line">{slide.title}</span>
            </h1>

            {/* Description */}
            <p className="hero-description-modern">{slide.subtitle}</p>

            {/* CTA Buttons */}
            <div className="hero-actions-modern">
              {isInternalLink ? (
                <Link to={redirectLink} className="hero-btn-modern hero-btn-modern--primary">
                  <span>{slide.buttonText || "Explore Now"}</span>
                  <svg className="hero-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              ) : (
                <a
                  href={redirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-btn-modern hero-btn-modern--primary"
                >
                  <span>{slide.buttonText || "Explore Now"}</span>
                  <svg className="hero-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              )}

              <Link to="/events" className="hero-btn-modern hero-btn-modern--secondary">
                <span>View All</span>
              </Link>
            </div>

            {/* Stats / Info */}
            <div className="hero-info-strip">
              <div className="hero-info-item">
                <span className="hero-info-number">100+</span>
                <span className="hero-info-label">Years</span>
              </div>
              <div className="hero-info-divider" />
              <div className="hero-info-item">
                <span className="hero-info-number">🇩🇪</span>
                <span className="hero-info-label">Precision</span>
              </div>
              <div className="hero-info-divider" />
              <div className="hero-info-item">
                <span className="hero-info-number">🇮🇳</span>
                <span className="hero-info-label">Soul</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT POSTER CARD */}
        <div className="hero-poster-section">
          <div className="hero-poster-card">
            <div className="hero-poster-image-wrapper">
              <div
                className={`hero-poster-image ${isAnimating ? "poster-exit" : "poster-active"} ${
                  orientation === "portrait" ? "poster-portrait" : "poster-landscape"
                }`}
                style={{
                  backgroundImage: `url(${IMAGE_BASE}${slide.image})`,
                }}
              />
              
              {/* Next Poster (preloaded) */}
              <div
                className={`hero-poster-image hero-poster-next ${isAnimating ? "poster-enter" : ""}`}
                style={{
                  backgroundImage: `url(${IMAGE_BASE}${nextSlide.image})`,
                }}
              />

              {/* Poster Overlay Effects */}
              <div className="hero-poster-overlay" />
              <div className="hero-poster-shine" />
              
              {/* Poster Badge */}
              <div className="hero-poster-badge">
                <span>{current + 1}</span>
                <span>/{slides.length}</span>
              </div>
            </div>

            {/* Poster Footer Info */}
            <div className="hero-poster-footer">
              <div className="hero-poster-tags">
                <span className="hero-poster-tag">✦ Premium</span>
                <span className="hero-poster-tag">✦ Limited</span>
              </div>
              <div className="hero-poster-actions">
                <button 
                  className="hero-poster-nav-btn" 
                  onClick={() => handleProgressClick((current - 1 + slides.length) % slides.length)}
                  aria-label="Previous slide"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button 
                  className="hero-poster-nav-btn" 
                  onClick={() => handleProgressClick((current + 1) % slides.length)}
                  aria-label="Next slide"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="hero-nav-modern" role="navigation" aria-label="Slide navigation">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-nav-dot-modern ${index === current ? "is-active" : ""}`}
            onClick={() => handleProgressClick(index)}
            aria-label={`Slide ${index + 1}`}
            aria-current={index === current ? "true" : "false"}
          >
            <span className="hero-nav-dot-modern-fill" />
          </button>
        ))}
      </div>
    </section>
  );
}

export default Hero;