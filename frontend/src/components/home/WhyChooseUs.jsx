

// import "./WhyChooseUs.css";

// function WhyChooseUs() {
//   const items = [
//     {
//       title: "Curated Experiences",
//       description:
//         "Discover carefully selected events, festivals, concerts and experiences worth attending."
//     },
//     {
//       title: "Seamless Booking",
//       description:
//         "Book tickets quickly and securely with a smooth, hassle-free experience."
//     },
//     {
//       title: "Trusted Organizers",
//       description:
//         "Connect with verified event organizers and trusted experiences."
//     },
//     {
//       title: "Exclusive Access",
//       description:
//         "Get early access to popular events, limited seats and special experiences."
//     }
//   ];

//   return (
//     <section className="a4-why-section">
//       <div className="a4-why-container">

//         <div className="a4-why-header">

//           <span className="a4-why-tag">
//             WHY CHOOSE A4 EVENTS
//           </span>

//           <h2 className="a4-why-title">
//             Built For Memorable Experiences
//           </h2>

//           <p className="a4-why-description">
//             We help people discover, explore and book
//             exceptional events through a seamless and
//             trusted platform.
//           </p>

//         </div>

//         <div className="a4-why-grid">

//           {items.map((item) => (
//             <div
//               className="a4-why-card"
//               key={item.title}
//             >
//               <h3 className="a4-why-card-title">
//                 {item.title}
//               </h3>

//               <p className="a4-why-card-description">
//                 {item.description}
//               </p>
//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

// export default WhyChooseUs;


// import "./WhyChooseUs.css";

// function WhyChooseUs() {
//   const items = [
//     {
//       title: "Curated Excellence",
//       description: "Every event and product undergoes rigorous vetting. From concerts to organic millets, we deliver only the finest experiences and ingredients.",
//       highlight: false
//     },
//     {
//       title: "Trusted Partnerships",
//       description: "Verified event organizers and certified organic farm partners. Lab-tested products and professionally managed events you can rely on.",
//       highlight: true
//     },
//     {
//       title: "End-to-End Quality",
//       description: "From farm to table, concept to execution — we maintain uncompromising standards across every event we produce and every product we sell.",
//       highlight: false
//     },
//     {
//       title: "Exclusive Privileges",
//       description: "Early access to sold-out events, first dibs on limited edition organic drops, and member-only experiences you won't find elsewhere.",
//       highlight: false
//     }
//   ];

//   return (
//     <section className="wc__wrapper">
//       {/* Background Elements */}
//       <div className="wc__bgSubtle"></div>
//       <div className="wc__bgGradient"></div>
//       <div className="wc__accentOrb"></div>
//       <div className="wc__accentOrbTwo"></div>

//       <div className="wc__container">
//         {/* Header Section */}
//         <div className="wc__header">
//           <div className="wc__headerMarker">
//             <span className="wc__markerLine"></span>
//             <span className="wc__markerText">WHY CHOOSE US</span>
//           </div>
          
//           <h2 className="wc__headline">
//             Setting the standard for
//             <br />
//             <span className="wc__headlineAccent">exceptional events & organic living</span>
//           </h2>
          
//           <p className="wc__subhead">
//             We bridge the gap between unforgettable experiences and premium natural products — 
//             delivering uncompromising quality across everything we do.
//           </p>
//         </div>

//         {/* 4 Cards Grid */}
//         <div className="wc__grid">
//           {items.map((item, index) => (
//             <div 
//               key={item.title} 
//               className={`wc__card ${item.highlight ? 'wc__cardHighlight' : ''}`}
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="wc__cardNumber">
//                 <span>0{index + 1}</span>
//                 <div className="wc__cardLine"></div>
//               </div>
              
//               <h3 className="wc__cardTitle">{item.title}</h3>
              
//               <p className="wc__cardDescription">{item.description}</p>
              
//               <div className="wc__cardLink">
//                 <span>Learn more</span>
//                 <span className="wc__cardArrow">→</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div className="wc__statsSection">
//           <div className="wc__statsLine"></div>
//           <div className="wc__statsGrid">
//             <div className="wc__statItem">
//               <div className="wc__statNumber">500+</div>
//               <div className="wc__statLabel">Events Delivered</div>
//             </div>
//             <div className="wc__statSeparator"></div>
//             <div className="wc__statItem">
//               <div className="wc__statNumber">50+</div>
//               <div className="wc__statLabel">Partner Farms</div>
//             </div>
//             <div className="wc__statSeparator"></div>
//             <div className="wc__statItem">
//               <div className="wc__statNumber">100%</div>
//               <div className="wc__statLabel">Chemical Free</div>
//             </div>
//             <div className="wc__statSeparator"></div>
//             <div className="wc__statItem">
//               <div className="wc__statNumber">98%</div>
//               <div className="wc__statLabel">Satisfaction Rate</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhyChooseUs;





// import "./WhyChooseUs.css";

// function WhyChooseUs() {
//   const items = [
//     {
//       title: "Curated Excellence",
//       description: "Every event and product undergoes rigorous vetting. From concerts to organic millets, we deliver only the finest experiences and ingredients.",
//       icon: (
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//           <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
//         </svg>
//       ),
//       highlight: false
//     },
//     {
//       title: "Trusted Partnerships",
//       description: "Verified event organizers and certified organic farm partners. Lab-tested products and professionally managed events you can rely on.",
//       icon: (
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//           <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//           <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
//           <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//       ),
//       highlight: true
//     },
//     {
//       title: "End-to-End Quality",
//       description: "From farm to table, concept to execution — we maintain uncompromising standards across every event we produce and every product we sell.",
//       icon: (
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//           <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//           <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
//         </svg>
//       ),
//       highlight: false
//     },
//     {
//       title: "Exclusive Privileges",
//       description: "Early access to sold-out events, first dibs on limited edition organic drops, and member-only experiences you won't find elsewhere.",
//       icon: (
//         <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//           <path d="M12 15l-2 5h4l-2-5zM12 15V8m0 0L8 4h8l-4 4z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//           <path d="M4 11h16M5 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//         </svg>
//       ),
//       highlight: false
//     }
//   ];

//   return (
//     <section className="wc__wrapper">
//       {/* Background Elements */}
//       <div className="wc__bgSubtle"></div>
//       <div className="wc__bgGradient"></div>
//       <div className="wc__accentOrb"></div>
//       <div className="wc__accentOrbTwo"></div>

//       <div className="wc__container">
//         {/* Header Section */}
//         <div className="wc__header">
//           <div className="wc__headerMarker">
//             <span className="wc__markerLine"></span>
//             <span className="wc__markerText">WHY CHOOSE US</span>
//           </div>
          
//           <h2 className="wc__headline">
//             Setting the standard for
//             <br />
//             <span className="wc__headlineAccent">exceptional events & organic living</span>
//           </h2>
          
//           <p className="wc__subhead">
//             We bridge the gap between unforgettable experiences and premium natural products — 
//             delivering uncompromising quality across everything we do.
//           </p>
//         </div>

//         {/* 4 Cards Grid */}
//         <div className="wc__grid">
//           {items.map((item, index) => (
//             <div 
//               key={item.title} 
//               className={`wc__card ${item.highlight ? 'wc__cardHighlight' : ''}`}
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="wc__cardIcon">
//                 {item.icon}
//               </div>
              
//               <div className="wc__cardNumber">
//                 <span>0{index + 1}</span>
//                 <div className="wc__cardLine"></div>
//               </div>
              
//               <h3 className="wc__cardTitle">{item.title}</h3>
              
//               <p className="wc__cardDescription">{item.description}</p>
              
//               <div className="wc__cardLink">
//                 <span>Learn more</span>
//                 <span className="wc__cardArrow">→</span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Stats Section */}
//         <div className="wc__statsSection">
//           <div className="wc__statsLine"></div>
//           <div className="wc__statsGrid">
//             <div className="wc__statItem">
//               <div className="wc__statNumber">500+</div>
//               <div className="wc__statLabel">Events Delivered</div>
//             </div>
//             <div className="wc__statSeparator"></div>
//             <div className="wc__statItem">
//               <div className="wc__statNumber">50+</div>
//               <div className="wc__statLabel">Partner Farms</div>
//             </div>
//             <div className="wc__statSeparator"></div>
//             <div className="wc__statItem">
//               <div className="wc__statNumber">100%</div>
//               <div className="wc__statLabel">Chemical Free</div>
//             </div>
//             <div className="wc__statSeparator"></div>
//             <div className="wc__statItem">
//               <div className="wc__statNumber">98%</div>
//               <div className="wc__statLabel">Satisfaction Rate</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhyChooseUs;


// import { useEffect, useState, useRef } from "react";
// import "./WhyChooseUs.css";

// function WhyChooseUs() {
//   const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   const pillars = [
//     {
//       accent: "excellence",
//       title: "Curated Excellence",
//       description:
//         "Every event and product undergoes rigorous vetting. From concerts to organic provisions, we deliver only the finest experiences and ingredients — no compromises, ever.",
//       keyword: "Rigorous",
//     },
//     {
//       accent: "trust",
//       title: "Trusted Partnerships",
//       description:
//         "Verified event organizers and certified organic farm partners across continents. Lab-tested products and professionally managed experiences you can rely on, always.",
//       keyword: "Verified",
//     },
//     {
//       accent: "quality",
//       title: "End-to-End Quality",
//       description:
//         "From farm to table, concept to execution — we maintain uncompromising standards across every gathering we produce and every product we deliver to your doorstep.",
//       keyword: "Uncompromising",
//     },
//     {
//       accent: "privilege",
//       title: "Exclusive Privileges",
//       description:
//         "Early access to sold-out experiences, first access to limited edition organic drops, and member-only gatherings you won't find anywhere else in the world.",
//       keyword: "Members-only",
//     },
//   ];

//   const essence = [
//     { word: "Heritage", subtle: "Century-old roots" },
//     { word: "Precision", subtle: "German engineering" },
//     { word: "Purity", subtle: "Chemical free" },
//     { word: "Trust", subtle: "Verified excellence" },
//   ];

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
//     const handleMouseMove = (e) => {
//       if (sectionRef.current) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         setMousePosition({
//           x: (e.clientX - rect.left) / rect.width,
//           y: (e.clientY - rect.top) / rect.height,
//         });
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove, { passive: true });
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className={`wc-premium ${isVisible ? "wc-visible" : ""}`}
//       style={{
//         "--mouse-x": mousePosition.x,
//         "--mouse-y": mousePosition.y,
//       }}
//     >
//       {/* Atmospheric Depth */}
//       <div className="wc-atmosphere" aria-hidden="true">
//         <div className="wc-glow wc-glow--amber" />
//         <div className="wc-glow wc-glow--emerald" />
//         <div className="wc-glow wc-glow--indigo" />
//         <div className="wc-mesh" />
//         <div className="wc-grain" />
//         <div className="wc-vignette" />
//       </div>

//       {/* Floating Glass Orbs */}
//       <div className="wc-orbs" aria-hidden="true">
//         <div className="wc-orb wc-orb--primary" />
//         <div className="wc-orb wc-orb--secondary" />
//         <div className="wc-orb wc-orb--tertiary" />
//       </div>

//       <div className="wc-container">
//         {/* Header */}
//         <div className="wc-header">
//           <div className="wc-thread" />
//           <div className="wc-header-content">
//             <div className="wc-whisper">
//               <span className="wc-whisper-pulse" />
//               <span>Why we exist</span>
//             </div>

//             <h2 className="wc-headline">
//               <span className="wc-headline-line">Heritage-driven,</span>
//               <span className="wc-headline-line wc-headline-radiance">
//                 future-focused.
//               </span>
//             </h2>

//             <p className="wc-prose">
//               A century-old legacy ecosystem bridging deep-rooted Indian 
//               heritage with European innovation. We bring premium organic 
//               quality to European soil — eliminating borders, curing 
//               homesickness, and unlocking limitless global opportunities.
//             </p>
//           </div>
//         </div>

//         {/* Pillar Cards */}
//         <div className="wc-grid">
//           {pillars.map((pillar, index) => (
//             <div
//               key={pillar.accent}
//               className={`wc-card wc-card-${pillar.accent}`}
//               style={{ "--card-index": index }}
//             >
//               {/* Card Atmosphere */}
//               <div className="wc-card-atmosphere" aria-hidden="true">
//                 <div className="wc-card-glow" />
//                 <div className="wc-card-noise" />
//               </div>

//               <div className="wc-card-inner">
//                 <div className="wc-card-top">
//                   <div className="wc-card-accent-line" />
//                   <span className="wc-card-keyword">{pillar.keyword}</span>
//                 </div>

//                 <h3 className="wc-card-title">{pillar.title}</h3>

//                 <p className="wc-card-description">{pillar.description}</p>

//                 <div className="wc-card-action">
//                   <span>Discover more</span>
//                   <span className="wc-action-arrow">→</span>
//                 </div>
//               </div>

//               <div className="wc-card-border" aria-hidden="true" />
//             </div>
//           ))}
//         </div>


     
//       </div>
//     </section>
//   );
// }

// export default WhyChooseUs;

import { useEffect, useState, useRef } from "react";
import "./WhyChooseUs.css";

function WhyChooseUs() {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const pillars = [
    {
      accent: "excellence",
      title: "Curated Excellence",
      description:
        "Every event and product undergoes rigorous vetting. From concerts to organic provisions, we deliver only the finest experiences and ingredients — no compromises, ever.",
      keyword: "Rigorous",
    },
    {
      accent: "trust",
      title: "Trusted Partnerships",
      description:
        "Verified event organizers and certified organic farm partners across continents. Lab-tested products and professionally managed experiences you can rely on, always.",
      keyword: "Verified",
    },
    {
      accent: "quality",
      title: "End-to-End Quality",
      description:
        "From farm to table, concept to execution — we maintain uncompromising standards across every gathering we produce and every product we deliver to your doorstep.",
      keyword: "Uncompromising",
    },
    {
      accent: "privilege",
      title: "Exclusive Privileges",
      description:
        "Early access to sold-out experiences, first access to limited edition organic drops, and member-only gatherings you won't find anywhere else in the world.",
      keyword: "Members-only",
    },
  ];

  const essence = [
    { word: "Heritage", subtle: "Century-old roots" },
    { word: "Precision", subtle: "German engineering" },
    { word: "Purity", subtle: "Chemical free" },
    { word: "Trust", subtle: "Verified excellence" },
  ];

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
    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`wc-premium ${isVisible ? "wc-visible" : ""}`}
      style={{
        "--mouse-x": mousePosition.x,
        "--mouse-y": mousePosition.y,
      }}
    >
      {/* Atmospheric Depth */}
      <div className="wc-atmosphere" aria-hidden="true">
        <div className="wc-glow wc-glow--teal" />
        <div className="wc-glow wc-glow--blue" />
        <div className="wc-glow wc-glow--emerald" />
        <div className="wc-mesh" />
        <div className="wc-grain" />
        <div className="wc-vignette" />
      </div>

      {/* Floating Glass Orbs */}
      <div className="wc-orbs" aria-hidden="true">
        <div className="wc-orb wc-orb--primary" />
        <div className="wc-orb wc-orb--secondary" />
        <div className="wc-orb wc-orb--tertiary" />
      </div>

      <div className="wc-container">
        {/* Header */}
        <div className="wc-header">
          <div className="wc-thread" />
          <div className="wc-header-content">
            <div className="wc-whisper">
              <span className="wc-whisper-pulse" />
              <span>Why we exist</span>
            </div>

            <h2 className="wc-headline">
              <span className="wc-headline-line">Heritage-driven,</span>
              <span className="wc-headline-line wc-headline-radiance">
                future-focused.
              </span>
            </h2>

            <p className="wc-prose">
              A century-old legacy ecosystem bridging deep-rooted Indian 
              heritage with European innovation. We bring premium organic 
              quality to European soil — eliminating borders, curing 
              homesickness, and unlocking limitless global opportunities.
            </p>
          </div>
        </div>

        {/* Pillar Cards */}
        <div className="wc-grid">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.accent}
              className={`wc-card wc-card-${pillar.accent}`}
              style={{ "--card-index": index }}
            >
              {/* Card Atmosphere */}
              <div className="wc-card-atmosphere" aria-hidden="true">
                <div className="wc-card-glow" />
                <div className="wc-card-noise" />
              </div>

              <div className="wc-card-inner">
                <div className="wc-card-top">
                  <div className="wc-card-accent-line" />
                  <span className="wc-card-keyword">{pillar.keyword}</span>
                </div>

                <h3 className="wc-card-title">{pillar.title}</h3>

                <p className="wc-card-description">{pillar.description}</p>

                <div className="wc-card-action">
                  <span>Discover more</span>
                  <span className="wc-action-arrow">→</span>
                </div>
              </div>

              <div className="wc-card-border" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Essence Strip */}
        <div className="wc-essence">
          <div className="wc-essence-thread" />
          <div className="wc-essence-items">
            {essence.map((item, index) => (
              <div key={item.word} className="wc-essence-group">
                <div className="wc-essence-item">
                  <span className="wc-essence-word">{item.word}</span>
                  <span className="wc-essence-subtle">{item.subtle}</span>
                </div>
                {index < essence.length - 1 && (
                  <div className="wc-essence-separator" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;