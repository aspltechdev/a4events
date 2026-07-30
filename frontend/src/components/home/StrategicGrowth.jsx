// import { useEffect, useRef, useState } from "react";
// import { 
//   Target, 
//   TrendingUp, 
//   Lightbulb, 
//   Globe2,
//   Handshake,
//   GraduationCap,
//   ArrowRight,
//   Building2,
//   Scale
// } from "lucide-react";
// import "./StrategicGrowth.css";

// function StrategicGrowth() {
//   const sectionRef = useRef(null);
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const acquisitionObjectives = [
//     {
//       icon: <TrendingUp size={22} strokeWidth={1.8} />,
//       title: "Growth Acceleration",
//       description: "Expand business operations by entering new markets and increasing revenue streams across borders."
//     },
//     {
//       icon: <Lightbulb size={22} strokeWidth={1.8} />,
//       title: "Technology Transfer",
//       description: "Bring world-class engineering, manufacturing expertise, and innovation capabilities into the partnership."
//     },
//     {
//       icon: <Globe2 size={22} strokeWidth={1.8} />,
//       title: "Global Market Expansion",
//       description: "Help established companies access new international markets through strategic networks and local expertise."
//     }
//   ];

//   const synergies = [
//     {
//       icon: <Scale size={22} strokeWidth={1.8} />,
//       title: "Cost Optimization",
//       description: "Reduce operating costs by combining resources, procurement, supply chains, and management processes across entities."
//     },
//     {
//       icon: <Target size={22} strokeWidth={1.8} />,
//       title: "Cross-Border Innovation",
//       description: "Combine technical expertise with operational capabilities to create new products, services, and efficiencies."
//     },
//     {
//       icon: <Handshake size={22} strokeWidth={1.8} />,
//       title: "Revenue Synergy",
//       description: "Generate additional revenue through cross-selling, market expansion, and entering new customer segments."
//     }
//   ];

//   const targetSectors = [
//     "Engineering", "Automation", "Technology", "Logistics", "Healthcare"
//   ];

//   const ugPrograms = [
//     {
//       icon: <GraduationCap size={22} strokeWidth={1.8} />,
//       title: "Study in Germany",
//       description: "Access world-class German universities and technical institutions through our guided UG programs."
//     },
//     {
//       icon: <Building2 size={22} strokeWidth={1.8} />,
//       title: "Internship Placements",
//       description: "Gain hands-on experience with leading German companies through structured internship programs."
//     },
//     {
//       icon: <Globe2 size={22} strokeWidth={1.8} />,
//       title: "Career Pathways",
//       description: "Build your global career with exposure to German engineering excellence and industry networks."
//     }
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className={`sg-premium ${isVisible ? "sg-visible" : ""}`}
//     >
//       {/* Atmosphere */}
//       <div className="sg-atmosphere" aria-hidden="true">
//         <div className="sg-glow sg-glow--teal" />
//         <div className="sg-glow sg-glow--blue" />
//         <div className="sg-glow sg-glow--emerald" />
//         <div className="sg-mesh" />
//         <div className="sg-grain" />
//         <div className="sg-vignette" />
//       </div>

//       <div className="sg-container">
//         {/* Header */}
//         <div className="sg-header">
//           <div className="sg-thread" />
//           <div className="sg-header-content">
//             <div className="sg-whisper">
//               <span className="sg-whisper-pulse" />
//               <span>Strategic Growth Framework</span>
//             </div>
//             <h2 className="sg-headline">
//               <span className="sg-headline-line">Building bridges,</span>
//               <span className="sg-headline-line sg-headline-radiance">
//                 creating lasting value.
//               </span>
//             </h2>
//             <p className="sg-prose">
//               A structured approach to acquiring and scaling profitable businesses 
//               through cross-border partnerships, combining technical excellence 
//               with operational strength for sustainable global growth.
//             </p>
//           </div>
//         </div>

//         {/* Target Sectors */}
//         <div className="sg-sectors">
//           <div className="sg-sectors-label">Target Sectors</div>
//           <div className="sg-sectors-list">
//             {targetSectors.map((sector) => (
//               <span key={sector} className="sg-sector-pill">
//                 <span className="sg-sector-dot" />
//                 {sector}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Section 1: Acquisition Objectives - Left Content, Right Cards */}
//         <div className="sg-row">
//           <div className="sg-row-content">
//             <div className="sg-row-label">Acquisition Strategy</div>
//             <h3 className="sg-row-title">
//               Identifying & acquiring profitable enterprises
//             </h3>
//             <p className="sg-row-text">
//               We target established businesses with strong technical expertise, 
//               stable revenues, and growth potential. Our partnership brings together 
//               local market knowledge with investment capital to create a seamless 
//               acquisition and scaling framework.
//             </p>
//             <div className="sg-row-accent" />
//           </div>
//           <div className="sg-row-cards">
//             {acquisitionObjectives.map((item, index) => (
//               <div
//                 key={item.title}
//                 className="sg-card"
//                 style={{ "--card-index": index }}
//               >
//                 <div className="sg-card-icon">{item.icon}</div>
//                 <h4 className="sg-card-title">{item.title}</h4>
//                 <p className="sg-card-text">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Section 2: Synergies - Right Content, Left Cards */}
//         <div className="sg-row sg-row-reverse">
//           <div className="sg-row-content">
//             <div className="sg-row-label">Partnership Synergies</div>
//             <h3 className="sg-row-title">
//               Creating value through strategic collaboration
//             </h3>
//             <p className="sg-row-text">
//               The partnership leverages complementary strengths — technical 
//               expertise meets operational excellence, creating a powerful 
//               ecosystem for sustainable growth and innovation across borders.
//             </p>
//             <div className="sg-row-accent" />
//           </div>
//           <div className="sg-row-cards">
//             {synergies.map((item, index) => (
//               <div
//                 key={item.title}
//                 className="sg-card"
//                 style={{ "--card-index": index }}
//               >
//                 <div className="sg-card-icon">{item.icon}</div>
//                 <h4 className="sg-card-title">{item.title}</h4>
//                 <p className="sg-card-text">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>


//              <div className="sg-roadmap">
//           <div className="sg-roadmap-thread" />
//           <div className="sg-roadmap-steps">
//             <div className="sg-step">
//               <span className="sg-step-number">01</span>
//               <span className="sg-step-label">Partnership Formation</span>
//             </div>
//             <div className="sg-step-arrow">→</div>
//             <div className="sg-step">
//               <span className="sg-step-number">02</span>
//               <span className="sg-step-label">Target Identification</span>
//             </div>
//             <div className="sg-step-arrow">→</div>
//             <div className="sg-step">
//               <span className="sg-step-number">03</span>
//               <span className="sg-step-label">Due Diligence</span>
//             </div>
//             <div className="sg-step-arrow">→</div>
//             <div className="sg-step">
//               <span className="sg-step-number">04</span>
//               <span className="sg-step-label">Deal Structuring</span>
//             </div>
//             <div className="sg-step-arrow">→</div>
//             <div className="sg-step">
//               <span className="sg-step-number">05</span>
//               <span className="sg-step-label">Acquisition & Integration</span>
//             </div>
//             <div className="sg-step-arrow">→</div>
//             <div className="sg-step">
//               <span className="sg-step-number">06</span>
//               <span className="sg-step-label">Growth & Expansion</span>
//             </div>
//           </div>
//         </div>

//         {/* Section 3: UG Programs - Left Content, Right Cards */}
//         <div className="sg-row">
//           <div className="sg-row-content">
//             <div className="sg-row-label">Education Pathways</div>
//             <h3 className="sg-row-title">
//               German UG Programs & career guidance
//             </h3>
//             <p className="sg-row-text">
//               We provide comprehensive guidance for students seeking undergraduate 
//               education in Germany — from university selection and application 
//               support to internship placements and career pathway development 
//               with leading German companies.
//             </p>
//             <div className="sg-row-accent" />
//           </div>
//           <div className="sg-row-cards">
//             {ugPrograms.map((item, index) => (
//               <div
//                 key={item.title}
//                 className="sg-card"
//                 style={{ "--card-index": index }}
//               >
//                 <div className="sg-card-icon">{item.icon}</div>
//                 <h4 className="sg-card-title">{item.title}</h4>
//                 <p className="sg-card-text">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Roadmap Strip */}
//         {/* <div className="sg-roadmap">
//           <div className="sg-roadmap-thread" />
//           <div className="sg-roadmap-steps">
//             <div className="sg-step">
//               <span className="sg-step-number">01</span>
//               <span className="sg-step-label">Partnership Formation</span>
//             </div>
//             <div className="sg-step-arrow">→</div>
//             <div className="sg-step">
//               <span className="sg-step-number">02</span>
//               <span className="sg-step-label">Target Identification</span>
//             </div>
//             <div className="sg-step-arrow">→</div>
//             <div className="sg-step">
//               <span className="sg-step-number">03</span>
//               <span className="sg-step-label">Due Diligence</span>
//             </div>
//             <div className="sg-step-arrow">→</div>
//             <div className="sg-step">
//               <span className="sg-step-number">04</span>
//               <span className="sg-step-label">Deal Structuring</span>
//             </div>
//             <div className="sg-step-arrow">→</div>
//             <div className="sg-step">
//               <span className="sg-step-number">05</span>
//               <span className="sg-step-label">Acquisition & Integration</span>
//             </div>
//             <div className="sg-step-arrow">→</div>
//             <div className="sg-step">
//               <span className="sg-step-number">06</span>
//               <span className="sg-step-label">Growth & Expansion</span>
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </section>
//   );
// }

// export default StrategicGrowth;

import { useEffect, useRef, useState } from "react";
import { 
  Target, 
  TrendingUp, 
  Lightbulb, 
  Globe2,
  Handshake,
  GraduationCap,
  Building2,
  Scale
} from "lucide-react";
import "./StrategicGrowth.css";

function StrategicGrowth() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const objectives = [
    {
      icon: <TrendingUp size={18} strokeWidth={1.8} />,
      title: "Growth Acceleration",
      description: "Expand business operations by entering new markets and increasing revenue streams across borders."
    },
    {
      icon: <Lightbulb size={18} strokeWidth={1.8} />,
      title: "Technology Transfer",
      description: "Bring world-class engineering, manufacturing expertise, and innovation capabilities."
    },
    {
      icon: <Globe2 size={18} strokeWidth={1.8} />,
      title: "Global Market Expansion",
      description: "Access new international markets through strategic networks and local expertise."
    }
  ];

  const synergies = [
    {
      icon: <Scale size={18} strokeWidth={1.8} />,
      title: "Cost Optimization",
      description: "Reduce operating costs by combining resources, supply chains, and management processes."
    },
    {
      icon: <Target size={18} strokeWidth={1.8} />,
      title: "Cross-Border Innovation",
      description: "Combine technical expertise with operational capabilities to create new efficiencies."
    },
    {
      icon: <Handshake size={18} strokeWidth={1.8} />,
      title: "Revenue Synergy",
      description: "Generate additional revenue through cross-selling, market expansion, and new segments."
    }
  ];

  const ugPrograms = [
    {
      icon: <GraduationCap size={18} strokeWidth={1.8} />,
      title: "Study in Germany",
      description: "Access world-class German universities through our guided UG programs."
    },
    {
      icon: <Building2 size={18} strokeWidth={1.8} />,
      title: "Internship Placements",
      description: "Gain hands-on experience with leading German companies through structured programs."
    },
    {
      icon: <Globe2 size={18} strokeWidth={1.8} />,
      title: "Career Pathways",
      description: "Build your global career with exposure to German engineering excellence."
    }
  ];

  const sectors = ["Engineering", "Automation", "Technology", "Logistics", "Healthcare"];

  return (
    <section
      ref={sectionRef}
      className={`sg-compact ${isVisible ? "sg-visible" : ""}`}
    >
      {/* Background */}
      <div className="sg-bg-compact" aria-hidden="true">
        <div className="sg-glow-compact sg-glow-compact--teal" />
        <div className="sg-glow-compact sg-glow-compact--blue" />
        <div className="sg-grain-compact" />
      </div>

      <div className="sg-container-compact">
        {/* Header */}
        <div className="sg-header-compact">
          <div className="sg-tag-compact">
            <span className="sg-tag-dot" />
            <span>Strategic Growth</span>
          </div>
          <h2 className="sg-title-compact">
            Building bridges, <span className="sg-title-highlight">creating lasting value</span>
          </h2>
          <p className="sg-subtitle-compact">
            A structured approach to acquiring and scaling profitable businesses through cross-border partnerships
          </p>
        </div>

        {/* Sectors */}
        <div className="sg-sectors-compact">
          {sectors.map((sector) => (
            <span key={sector} className="sg-sector-pill-compact">
              {sector}
            </span>
          ))}
        </div>

        {/* Objectives */}
        <div className="sg-section-compact">
          <div className="sg-section-header">
            <span className="sg-section-label">Acquisition Strategy</span>
            <h3 className="sg-section-title">Identifying & acquiring profitable enterprises</h3>
          </div>
          <div className="sg-grid-compact">
            {objectives.map((item) => (
              <div key={item.title} className="sg-card-compact">
                <div className="sg-card-icon-compact">{item.icon}</div>
                <h4 className="sg-card-title-compact">{item.title}</h4>
                <p className="sg-card-text-compact">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Synergies */}
        <div className="sg-section-compact">
          <div className="sg-section-header">
            <span className="sg-section-label">Partnership Synergies</span>
            <h3 className="sg-section-title">Creating value through strategic collaboration</h3>
          </div>
          <div className="sg-grid-compact">
            {synergies.map((item) => (
              <div key={item.title} className="sg-card-compact">
                <div className="sg-card-icon-compact">{item.icon}</div>
                <h4 className="sg-card-title-compact">{item.title}</h4>
                <p className="sg-card-text-compact">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* UG Programs */}
        <div className="sg-section-compact">
          <div className="sg-section-header">
            <span className="sg-section-label">Education Pathways</span>
            <h3 className="sg-section-title">German UG programs & career guidance</h3>
          </div>
          <div className="sg-grid-compact">
            {ugPrograms.map((item) => (
              <div key={item.title} className="sg-card-compact">
                <div className="sg-card-icon-compact">{item.icon}</div>
                <h4 className="sg-card-title-compact">{item.title}</h4>
                <p className="sg-card-text-compact">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="sg-process-compact">
          <div className="sg-process-label">Our Process</div>
          <div className="sg-process-steps">
            <div className="sg-process-step">
              <span className="sg-step-number">01</span>
              <span className="sg-step-label">Partnership</span>
            </div>
            <div className="sg-step-arrow-compact">→</div>
            <div className="sg-process-step">
              <span className="sg-step-number">02</span>
              <span className="sg-step-label">Target</span>
            </div>
            <div className="sg-step-arrow-compact">→</div>
            <div className="sg-process-step">
              <span className="sg-step-number">03</span>
              <span className="sg-step-label">Due Diligence</span>
            </div>
            <div className="sg-step-arrow-compact">→</div>
            <div className="sg-process-step">
              <span className="sg-step-number">04</span>
              <span className="sg-step-label">Structuring</span>
            </div>
            <div className="sg-step-arrow-compact">→</div>
            <div className="sg-process-step">
              <span className="sg-step-number">05</span>
              <span className="sg-step-label">Integration</span>
            </div>
            <div className="sg-step-arrow-compact">→</div>
            <div className="sg-process-step">
              <span className="sg-step-number">06</span>
              <span className="sg-step-label">Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StrategicGrowth;