
// // import "./About.css";

// // function About() {
// //   return (
// //     <section className="about-premium">
// //       {/* Background Elements */}
// //       <div className="about-bg-orbs">
// //         <div className="about-orb about-orb-1"></div>
// //         <div className="about-orb about-orb-2"></div>
// //         <div className="about-orb about-orb-3"></div>
// //       </div>
      
// //       <div className="about-grid-pattern"></div>

// //       <div className="about-container">
// //         {/* HEADER */}
// //         <div className="about-header">
// //           <div className="about-header-badge">
// //             <span className="about-badge-icon">
// //               <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
// //                 <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2"/>
// //                 <path d="M8 3v5l3 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
// //               </svg>
// //             </span>
// //             <span className="about-badge-text">Indo–German Business Group</span>
// //           </div>

// //           <h1 className="about-title">
// //             A4A Anagrams UG
// //           </h1>

// //           <div className="about-title-underline"></div>

// //           <p className="about-subtitle">
// //             A Germany-based Indo-German enterprise operating across 
// //             events, education programs, premium health products, and 
// //             cross-border M&A & investment advisory under the Indo-German Free Trade framework.
// //           </p>
// //         </div>

// //         {/* CORE FOCUS */}
// //         <div className="about-grid">
// //           <div className="about-card about-card-events">
// //             <div className="about-card-icon">
// //               <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
// //                 <path d="M14 4l4 8 9 1.5-6.5 6 1.5 9-8-4.5-8 4.5L7.5 19.5 1 13.5l9-1.5 4-8z" fill="currentColor"/>
// //               </svg>
// //             </div>
// //             <div className="about-card-number">01</div>
// //             <h3>Events & Experiences</h3>
// //             <p>
// //               Large-scale public events, festivals, concerts, and cultural programs 
// //               delivering premium entertainment experiences across Germany.
// //             </p>
// //             <div className="about-card-accent"></div>
// //           </div>

// //           <div className="about-card about-card-education">
// //             <div className="about-card-icon">
// //               <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
// //                 <path d="M5 6h18v14H5z" stroke="currentColor" strokeWidth="1.5"/>
// //                 <path d="M5 10h18" stroke="currentColor" strokeWidth="1.5"/>
// //                 <path d="M14 6v14" stroke="currentColor" strokeWidth="1.5"/>
// //               </svg>
// //             </div>
// //             <div className="about-card-number">02</div>
// //             <h3>Student & UG Programs</h3>
// //             <p>
// //               Educational and internship opportunities in Germany with exposure 
// //               to real business, engineering, and global markets.
// //             </p>
// //             <div className="about-card-accent"></div>
// //           </div>

// //           <div className="about-card about-card-health">
// //             <div className="about-card-icon">
// //               <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
// //                 <path d="M14 4c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10z" stroke="currentColor" strokeWidth="1.5"/>
// //                 <path d="M14 10v8M10 14h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
// //               </svg>
// //             </div>
// //             <div className="about-card-number">03</div>
// //             <h3>Health & Lifestyle Products</h3>
// //             <p>
// //               Natural and millet-based healthy food products focused on wellness, 
// //               sustainability, and modern nutrition for conscious living.
// //             </p>
// //             <div className="about-card-accent"></div>
// //           </div>

// //           <div className="about-card about-card-trade">
// //             <div className="about-card-icon">
// //               <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
// //                 <path d="M4 14h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
// //                 <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5"/>
// //                 <path d="M14 4v20M14 4c-3 3-3 17 0 20M14 4c3 3 3 17 0 20" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
// //               </svg>
// //             </div>
// //             <div className="about-card-number">04</div>
// //             <h3>M&A & Indo-German Trade</h3>
// //             <p>
// //               Cross-border mergers, acquisitions, and JV structuring using Indo-German 
// //               trade frameworks for Mittelstand companies.
// //             </p>
// //             <div className="about-card-accent"></div>
// //           </div>
// //         </div>

// //         {/* STATS ROW */}
// //         <div className="about-stats">
// //           <div className="about-stat-item">
// //             <span className="about-stat-value">DE</span>
// //             <span className="about-stat-label">German Precision</span>
// //           </div>
// //           <div className="about-stat-divider"></div>
// //           <div className="about-stat-item">
// //             <span className="about-stat-value">IN</span>
// //             <span className="about-stat-label">Indian Execution</span>
// //           </div>
// //           <div className="about-stat-divider"></div>
// //           <div className="about-stat-item">
// //             <span className="about-stat-value">4</span>
// //             <span className="about-stat-label">Core Verticals</span>
// //           </div>
// //           <div className="about-stat-divider"></div>
// //           <div className="about-stat-item">
// //             <span className="about-stat-value">∞</span>
// //             <span className="about-stat-label">Global Reach</span>
// //           </div>
// //         </div>

// //         {/* FOOTER STRIP */}
// //         <div className="about-footer">
// //           <div className="about-footer-icon">
// //             <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
// //               <path d="M10 2l2.5 5 5.5.5-4 3.5 1 5.5-5-3-5 3 1-5.5-4-3.5 5.5-.5L10 2z" fill="currentColor"/>
// //             </svg>
// //           </div>
// //           <p>
// //             Built on <strong>German engineering precision</strong> + <strong>Indian execution strength</strong>
// //           </p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default About;


// import { useEffect, useRef, useState } from "react";
// import "./About.css";

// function About() {
//   const sectionRef = useRef(null);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.15 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (sectionRef.current) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         const progress = Math.max(
//           0,
//           Math.min(1, 1 - rect.bottom / (rect.height * 1.8))
//         );
//         setScrollProgress(progress);
//       }
//     };

//     const handleMouseMove = (e) => {
//       if (sectionRef.current) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         setMousePosition({
//           x: (e.clientX - rect.left) / rect.width,
//           y: (e.clientY - rect.top) / rect.height,
//         });
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     window.addEventListener("mousemove", handleMouseMove, { passive: true });
//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   const pillars = [
//     {
//       number: "01",
//       title: "Authentic Provisions",
//       description:
//         "Handpicked organic groceries, fruits, and specialty flowers. Pure, unadulterated quality from soil to shelf — now on European soil.",
//       accent: "provisions",
//     },
//     {
//       number: "02",
//       title: "Indo Events",
//       description:
//         "Vibrant cultural experiences connecting global communities. Festivals, concerts, and immersive celebrations that cure homesickness.",
//       accent: "events",
//     },
//     {
//       number: "03",
//       title: "EduConsulting",
//       description:
//         "Premium academic and research pathways for ambitious scholars. World-class education opportunities without borders or barriers.",
//       accent: "education",
//     },
//     {
//       number: "04",
//       title: "Business Expansion",
//       description:
//         "Bridging market gaps for entrepreneurs entering Europe. M&A, trade advisory, and cross-border growth under Indo-German frameworks.",
//       accent: "trade",
//     },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className={`about-premium ${isVisible ? "about-visible" : ""}`}
//       style={{
//         "--scroll-progress": scrollProgress,
//         "--mouse-x": mousePosition.x,
//         "--mouse-y": mousePosition.y,
//       }}
//     >
//       {/* Atmospheric Background Layers */}
//       <div className="about-atmosphere" aria-hidden="true">
//         <div className="about-ambient-glow about-glow--warm" />
//         <div className="about-ambient-glow about-glow--cool" />
//         <div className="about-ambient-glow about-glow--earth" />
//         <div className="about-mesh-gradient" />
//         <div className="about-noise-texture" />
//         <div className="about-vignette" />
//       </div>

//       {/* Floating Orbs */}
//       <div className="about-orbs" aria-hidden="true">
//         <div className="about-orb about-orb--1" />
//         <div className="about-orb about-orb--2" />
//         <div className="about-orb about-orb--3" />
//       </div>

//       <div className="about-container">
//         {/* Heritage Statement */}
//         <div className="about-heritage">
//           <div className="about-line-animated" />
//           <div className="about-heritage-content">
//             <div className="about-eyebrow">
//               <span className="about-eyebrow-dot" />
//               <span>100-Year Legacy Ecosystem</span>
//             </div>

//             <h2 className="about-headline">
//               <span className="about-headline-line">
//                 From a village hut in Sirugudi,
//               </span>
//               <span className="about-headline-line about-headline-emphasis">
//                 to a visionary global force.
//               </span>
//             </h2>

//             <p className="about-legacy-text">
//               A4A Anagrams Group EU bridges deep-rooted Indian heritage with 
//               European innovation. We bring premium organic quality to European 
//               soil — eliminating borders, curing homesickness, and unlocking 
//               limitless global opportunities.
//             </p>
//           </div>
//         </div>

//         {/* Core Pillars Grid */}
//         <div className="about-pillars">
//           <div className="about-pillars-header">
//             <span className="about-section-label">Core Pillars</span>
//             <div className="about-section-line" />
//           </div>

//           <div className="about-pillars-grid">
//             {pillars.map((pillar, index) => (
//               <div
//                 key={pillar.number}
//                 className={`about-pillar-card about-pillar-${pillar.accent}`}
//                 style={{ "--card-index": index }}
//               >
//                 <div className="about-pillar-number">
//                   <span>{pillar.number}</span>
//                   <div className="about-pillar-number-line" />
//                 </div>

//                 <div className="about-pillar-body">
//                   <h3 className="about-pillar-title">{pillar.title}</h3>
//                   <p className="about-pillar-description">
//                     {pillar.description}
//                   </p>
//                 </div>

//                 <div className="about-pillar-glow" aria-hidden="true" />
//                 <div className="about-pillar-border" aria-hidden="true" />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Mission Statement */}
//         <div className="about-mission">
//           <div className="about-mission-card">
//             <div className="about-mission-texture" />
//             <div className="about-mission-content">
//               <p className="about-mission-quote">
//                 "We eliminate borders. We cure homesickness. We unlock 
//                 limitless global opportunities."
//               </p>
//               <div className="about-mission-attribution">
//                 <span className="about-mission-name">A4A Anagrams Group EU</span>
//                 <span className="about-mission-subtitle">
//                   German Engineering Precision × Indian Execution Strength
//                 </span>
//               </div>
//             </div>
//             <div className="about-mission-accent" />
//           </div>
//         </div>

//         {/* Stats Strip */}
//         <div className="about-metrics">
//           <div className="about-metric">
//             <span className="about-metric-value">
//               <span className="about-metric-counter">100</span>
//               <span className="about-metric-suffix">+</span>
//             </span>
//             <span className="about-metric-label">Years Legacy</span>
//           </div>
//           <div className="about-metric-divider" />
//           <div className="about-metric">
//             <span className="about-metric-value">
//               <span className="about-metric-counter">4</span>
//             </span>
//             <span className="about-metric-label">Core Verticals</span>
//           </div>
//           <div className="about-metric-divider" />
//           <div className="about-metric">
//             <span className="about-metric-value">
//               <span className="about-metric-counter">DE</span>
//               <span className="about-metric-suffix">×</span>
//               <span className="about-metric-counter">IN</span>
//             </span>
//             <span className="about-metric-label">Indo-German Bridge</span>
//           </div>
//           <div className="about-metric-divider" />
//           <div className="about-metric">
//             <span className="about-metric-value">
//               <span className="about-metric-symbol">∞</span>
//             </span>
//             <span className="about-metric-label">Global Reach</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;


// import { useEffect, useRef, useState } from "react";
// import "./About.css";

// function About() {
//   const sectionRef = useRef(null);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.12 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (sectionRef.current) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         const progress = Math.max(0, Math.min(1, 1 - rect.bottom / (rect.height * 1.6)));
//         setScrollProgress(progress);
//       }
//     };

//     const handleMouseMove = (e) => {
//       if (sectionRef.current) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         setMousePosition({
//           x: (e.clientX - rect.left) / rect.width,
//           y: (e.clientY - rect.top) / rect.height,
//         });
//       }
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     window.addEventListener("mousemove", handleMouseMove, { passive: true });
//     handleScroll();

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   const pillars = [
//     {
//       accent: "provisions",
//       title: "Authentic Provisions",
//       description:
//         "Handpicked organic groceries, fruits, and specialty flowers — pure, unadulterated quality from soil to shelf, now rooted in European soil.",
//     },
//     {
//       accent: "events",
//       title: "Indo Cultural Experiences",
//       description:
//         "Vibrant festivals, concerts, and immersive celebrations that connect global communities and dissolve the ache of homesickness.",
//     },
//     {
//       accent: "education",
//       title: "EduConsulting Pathways",
//       description:
//         "Premium academic and research opportunities for ambitious scholars — world-class education without borders or barriers.",
//     },
//     {
//       accent: "trade",
//       title: "Business Expansion",
//       description:
//         "Bridging market gaps for entrepreneurs entering Europe through M&A advisory and cross-border growth strategies.",
//     },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className={`about-premium ${isVisible ? "about-visible" : ""}`}
//       style={{
//         "--scroll-progress": scrollProgress,
//         "--mouse-x": mousePosition.x,
//         "--mouse-y": mousePosition.y,
//       }}
//     >
//       {/* Ambient Depth Layers */}
//       <div className="about-atmosphere" aria-hidden="true">
//         <div className="about-ambient-glow about-glow--warm" />
//         <div className="about-ambient-glow about-glow--cool" />
//         <div className="about-ambient-glow about-glow--earth" />
//         <div className="about-mesh-gradient" />
//         <div className="about-noise-veil" />
//         <div className="about-vignette" />
//       </div>

//       {/* Floating Glass Orbs */}
//       <div className="about-orbs" aria-hidden="true">
//         <div className="about-orb about-orb--primary" />
//         <div className="about-orb about-orb--secondary" />
//         <div className="about-orb about-orb--tertiary" />
//       </div>

//       <div className="about-container">
//         {/* Heritage Origin Story */}
//         <div className="about-origin">
//           <div className="about-thread" />
//           <div className="about-origin-content">
//             <div className="about-whisper">
//               <span className="about-whisper-pulse" />
//               <span>A Century of Legacy</span>
//             </div>

//             <h2 className="about-headline">
//               <span className="about-headline-line">
//                 Born in a village hut in Sirugudi,
//               </span>
//               <span className="about-headline-line about-headline-radiance">
//                 risen as a visionary global force.
//               </span>
//             </h2>

//             <p className="about-prose">
//               A4A Anagrams Group EU bridges the soul of deep-rooted Indian 
//               heritage with the precision of European innovation. We bring 
//               premium organic quality to European soil — dissolving borders, 
//               healing homesickness, and unlocking limitless global opportunities.
//             </p>
//           </div>
//         </div>

//         {/* Core Pillars — Typographic Cards */}
//         <div className="about-pillars">
//           <div className="about-pillars-header">
//             <span className="about-section-label">What We Nurture</span>
//             <div className="about-section-thread" />
//           </div>

//           <div className="about-pillars-grid">
//             {pillars.map((pillar, index) => (
//               <div
//                 key={pillar.accent}
//                 className={`about-pillar-card about-pillar-${pillar.accent}`}
//                 style={{ "--card-index": index }}
//               >
//                 <div className="about-pillar-inner">
//                   <div className="about-pillar-top">
//                     <div className="about-pillar-accent-line" />
//                     <h3 className="about-pillar-title">{pillar.title}</h3>
//                   </div>
//                   <p className="about-pillar-description">{pillar.description}</p>
//                 </div>

//                 <div className="about-pillar-aura" aria-hidden="true" />
//                 <div className="about-pillar-edge" aria-hidden="true" />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Mission Statement */}
//         <div className="about-mission">
//           <div className="about-mission-card">
//             <div className="about-mission-veil" />
//             <div className="about-mission-content">
//               <p className="about-mission-quote">
//                 "We eliminate borders. We cure homesickness. We unlock 
//                 limitless global opportunities."
//               </p>
//               <div className="about-mission-attribution">
//                 <span className="about-mission-name">A4A Anagrams Group EU</span>
//                 <span className="about-mission-subtitle">
//                   German Precision · Indian Soul · Global Vision
//                 </span>
//               </div>
//             </div>
//             <div className="about-mission-radiance" />
//           </div>
//         </div>

//         {/* Essence Strip */}
//         <div className="about-essence">
//           <div className="about-essence-item">
//             <span className="about-essence-word">Heritage</span>
//             <span className="about-essence-subtle">Century-old roots</span>
//           </div>
//           <div className="about-essence-separator" />
//           <div className="about-essence-item">
//             <span className="about-essence-word">Precision</span>
//             <span className="about-essence-subtle">German engineering</span>
//           </div>
//           <div className="about-essence-separator" />
//           <div className="about-essence-item">
//             <span className="about-essence-word">Execution</span>
//             <span className="about-essence-subtle">Indian strength</span>
//           </div>
//           <div className="about-essence-separator" />
//           <div className="about-essence-item">
//             <span className="about-essence-word about-essence-infinite">Infinite</span>
//             <span className="about-essence-subtle">Global reach</span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;


import { useEffect, useRef, useState } from "react";
import "./About.css";

function About() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, 1 - rect.bottom / (rect.height * 1.6)));
        setScrollProgress(progress);
      }
    };

    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const pillars = [
    {
      accent: "provisions",
      title: "Authentic Provisions",
      description:
        "Handpicked organic groceries, fruits, and specialty flowers — pure, unadulterated quality from soil to shelf, now rooted in European soil.",
    },
    {
      accent: "events",
      title: "Indo Cultural Experiences",
      description:
        "Vibrant festivals, concerts, and immersive celebrations that connect global communities and dissolve the ache of homesickness.",
    },
    {
      accent: "education",
      title: "EduConsulting Pathways",
      description:
        "Premium academic and research opportunities for ambitious scholars — world-class education without borders or barriers.",
    },
    {
      accent: "trade",
      title: "Business Expansion",
      description:
        "Bridging market gaps for entrepreneurs entering Europe through M&A advisory and cross-border growth strategies.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`about-premium ${isVisible ? "about-visible" : ""}`}
      style={{
        "--scroll-progress": scrollProgress,
        "--mouse-x": mousePosition.x,
        "--mouse-y": mousePosition.y,
      }}
    >
      {/* Ambient Depth Layers */}
      <div className="about-atmosphere" aria-hidden="true">
        <div className="about-ambient-glow about-glow--teal" />
        <div className="about-ambient-glow about-glow--blue" />
        <div className="about-ambient-glow about-glow--emerald" />
        <div className="about-mesh-gradient" />
        <div className="about-noise-veil" />
        <div className="about-vignette" />
      </div>

      {/* Floating Glass Orbs */}
      <div className="about-orbs" aria-hidden="true">
        <div className="about-orb about-orb--primary" />
        <div className="about-orb about-orb--secondary" />
        <div className="about-orb about-orb--tertiary" />
      </div>

      <div className="about-container">
        {/* Heritage Origin Story */}
        <div className="about-origin">
          <div className="about-thread" />
          <div className="about-origin-content">
            <div className="about-whisper">
              <span className="about-whisper-pulse" />
              <span>A Century of Legacy</span>
            </div>

            <h2 className="about-headline">
              <span className="about-headline-line">
                Born in a village hut in Sirugudi,
              </span>
              <span className="about-headline-line about-headline-radiance">
                risen as a visionary global force.
              </span>
            </h2>

            <p className="about-prose">
              A4A Anagrams Group EU bridges the soul of deep-rooted Indian 
              heritage with the precision of European innovation. We bring 
              premium organic quality to European soil — dissolving borders, 
              healing homesickness, and unlocking limitless global opportunities.
            </p>
          </div>
        </div>

        {/* Core Pillars — White-Blend Cards */}
        <div className="about-pillars">
          <div className="about-pillars-header">
            <span className="about-section-label">What We Nurture</span>
            <div className="about-section-thread" />
          </div>

          <div className="about-pillars-grid">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.accent}
                className={`about-pillar-card about-pillar-${pillar.accent}`}
                style={{ "--card-index": index }}
              >
                {/* Card Shine */}
                <div className="about-pillar-shine" aria-hidden="true" />

                <div className="about-pillar-inner">
                  <div className="about-pillar-top">
                    <div className="about-pillar-accent-line" />
                    <h3 className="about-pillar-title">{pillar.title}</h3>
                  </div>
                  <p className="about-pillar-description">{pillar.description}</p>
                  
                  <div className="about-pillar-action">
                    <span>Learn more</span>
                    <span className="about-pillar-arrow">→</span>
                  </div>
                </div>

                <div className="about-pillar-aura" aria-hidden="true" />
                <div className="about-pillar-edge" aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="about-mission">
          <div className="about-mission-card">
            <div className="about-mission-shine" aria-hidden="true" />
            <div className="about-mission-veil" />
            <div className="about-mission-content">
              <p className="about-mission-quote">
                "We eliminate borders. We cure homesickness. We unlock 
                limitless global opportunities."
              </p>
              <div className="about-mission-attribution">
                <span className="about-mission-name">A4A Anagrams Group EU</span>
                <span className="about-mission-subtitle">
                  German Precision · Indian Soul · Global Vision
                </span>
              </div>
            </div>
            <div className="about-mission-radiance" />
          </div>
        </div>

        {/* Essence Strip */}
        <div className="about-essence">
          <div className="about-essence-thread" />
          <div className="about-essence-items">
            <div className="about-essence-item">
              <span className="about-essence-word">Heritage</span>
              <span className="about-essence-subtle">Century-old roots</span>
            </div>
            <div className="about-essence-separator" />
            <div className="about-essence-item">
              <span className="about-essence-word">Precision</span>
              <span className="about-essence-subtle">German engineering</span>
            </div>
            <div className="about-essence-separator" />
            <div className="about-essence-item">
              <span className="about-essence-word">Execution</span>
              <span className="about-essence-subtle">Indian strength</span>
            </div>
            <div className="about-essence-separator" />
            <div className="about-essence-item">
              <span className="about-essence-word about-essence-radiant">Infinite</span>
              <span className="about-essence-subtle">Global reach</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;