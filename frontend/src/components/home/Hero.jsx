
// import { useEffect, useState } from 'react';
// import api from '../../services/api';

// function Hero() {
//   const [slides, setSlides] = useState([]);
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     loadSlides();
//   }, []);

//   useEffect(() => {
//     if (!slides.length) return;

//     const interval = setInterval(() => {
//       setCurrent(
//         (prev) => (prev + 1) % slides.length
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [slides]);

//   const loadSlides = async () => {
//     try {
//       const { data } =
//         await api.get('/hero-slides');

//       setSlides(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (!slides.length) {
//     return null;
//   }

//   return (
//     <section
//       style={{
//         height: '100vh',
//         backgroundImage: `url(http://localhost:5000${slides[current].image})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         color: '#fff',
//         textAlign: 'center',
//         position: 'relative'
//       }}
//     >
//       <div
//         style={{
//           position: 'absolute',
//           inset: 0,
//           background:
//             'rgba(0,0,0,0.55)'
//         }}
//       />

//       <div
//         style={{
//           position: 'relative',
//           zIndex: 2
//         }}
//       >
//         <h1>
//           {slides[current].title}
//         </h1>

//         <p>
//           {slides[current].subtitle}
//         </p>

//         <div
//           style={{
//             marginTop: '20px'
//           }}
//         >
//           <button>
//             Explore Events
//           </button>

//           <button
//             style={{
//               marginLeft: '15px'
//             }}
//           >
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;















// import { useEffect, useState } from "react";
// import api from "../../services/api";
// import "./Hero.css";

// function Hero() {
//   const [slides, setSlides] = useState([]);
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     loadSlides();
//   }, []);

//   useEffect(() => {
//     if (!slides.length) return;

//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [slides]);

//   const loadSlides = async () => {
//     try {
//       const { data } = await api.get("/hero-slides");
//       setSlides(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (!slides.length) return null;

//   return (
    
//     <section
//   className="hero"
//   style={{
//     backgroundImage: `url(http://localhost:5000${slides[current].image})`,
//   }}
// >
//   <div className="hero-bg-scale"></div>

//   <div className="noise"></div>

//   <div className="gradient gradient-1"></div>
//   <div className="gradient gradient-2"></div>

//   <div className="hero-overlay"></div>

//   <div className="hero-content">

//     <div className="hero-badge">
//       ✨ Premium Event Experiences
//     </div>

//     <h1 className="hero-title">
//       {slides[current].title}
//     </h1>

//     <p className="hero-subtitle">
//       {slides[current].subtitle}
//     </p>

//     <div className="hero-buttons">
//       <button className="btn-primary">
//         Explore Events
//       </button>

//       <button className="btn-secondary">
//         Contact Us
//       </button>
//     </div>

//   </div>

//   <div className="floating-card card-1">
//     🎵 500+ Events Hosted
//   </div>

//   <div className="floating-card card-2">
//     🎤 Live Concerts
//   </div>

//   <div className="floating-card card-3">
//     🎯 Premium Experiences
//   </div>

// </section>
//   );
// }

// export default Hero;
import { useEffect, useState } from "react";
import api from "../../services/api";
import "./Hero.css";

function Hero() {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    loadSlides();
  }, []);

  useEffect(() => {
    if (!slides.length) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides]);

  const loadSlides = async () => {
    try {
      const { data } = await api.get("/hero-slides");
      setSlides(data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!slides.length) return null;

  const slide = slides[current];

  return (
    <section className="hero">
      {/* Background Image */}
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(http://localhost:5000${slide.image})`,
        }}
      />

      {/* Overlay */}
      <div className="hero-overlay" />

      {/* Left Glow */}
      <div className="hero-glow hero-glow-left" />

      {/* Right Glow */}
      <div className="hero-glow hero-glow-right" />

      {/* Main Content */}
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-label">
            FEATURED EVENT
          </span>

          <h1 className="hero-title">
            {slide.title}
          </h1>

          <p className="hero-description">
            {slide.subtitle}
          </p>

          <div className="hero-actions">
            <button className="primary-btn">
              Book Tickets
            </button>

            <button className="secondary-btn">
              View Details
            </button>
          </div>
        </div>

        {/* <div className="hero-panel">
          <div className="panel-item">
            <span>Location</span>
            <h4>Bangalore</h4>
          </div>

          <div className="panel-item">
            <span>Date</span>
            <h4>15 Aug 2026</h4>
          </div>

          <div className="panel-item">
            <span>Audience</span>
            <h4>20,000+</h4>
          </div>
        </div> */}
      </div>

      {/* Slide Navigation */}
      <div className="hero-pagination">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${
              current === index ? "active" : ""
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>

      {/* Bottom Fade */}
      <div className="hero-bottom-fade" />
    </section>
  );
}

export default Hero;