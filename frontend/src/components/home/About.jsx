// // function About() {
// //   return (
// //     <section
// //       style={{
// //         padding: '80px 20px',
// //         textAlign: 'center'
// //       }}
// //     >
// //       <h2>About A4 Events</h2>

// //       <p>
// //         A4 Events specializes in
// //         concerts, DJ nights,
// //         festivals, public parties,
// //         sound systems, lighting,
// //         LED walls and complete
// //         event production.
// //       </p>
// //     </section>
// //   );
// // }

// export default About;

// import "./About.css";
// function About() {
//   return (
//     <section className="a4-about-section">
//       <div className="a4-about-container">

//         <span className="a4-about-tag">
//           REDEFINING EXPERIENCES
//         </span>

//         <h2 className="a4-about-title">
//           Every Event Has A Story.
//         </h2>

//         <p className="a4-about-description">
//           At A4 Events, we believe great events create lasting memories.
//           Whether it's a sold-out concert, an inspiring conference,
//           a vibrant festival, or an exclusive networking experience,
//           our platform helps people discover and access the events
//           that matter most.
//         </p>

//         <p className="a4-about-description">
//           We bring together organizers, performers, brands, and
//           audiences through a seamless booking experience, making
//           every event more accessible, engaging, and unforgettable.
//         </p>

//       </div>
//     </section>
//   );
// }

// export default About;













import "./About.css";

function About() {
  const productCategories = [
    { name: "Millet Mix & Soups", count: 8 },
    { name: "Organics", count: 6 },
    { name: "Pulses", count: 5 },
    { name: "Oils", count: 4 },
    { name: "Rice", count: 4 },
    { name: "Snacks", count: 3 },
    { name: "Frozen Items", count: 2 },
    { name: "Fresh Items", count: 0 }
  ];

  const eventTypes = [
    { name: "Corporate Events", count: 150 },
    { name: "Music Festivals", count: 45 },
    { name: "Weddings & Celebrations", count: 200 },
    { name: "Product Launches", count: 35 },
    { name: "Workshops & Seminars", count: 80 }
  ];

  return (
    <section className="about-premium-light">
      {/* Background Elements */}
      <div className="bg-gradient-light"></div>
      <div className="bg-noise"></div>
      
      {/* Subtle Accent Lines */}
      <div className="accent-lines-light">
        <div className="accent-line-light"></div>
        <div className="accent-line-light"></div>
      </div>

      <div className="container-premium-light">
        {/* Header Section */}
        <div className="header-premium-light">
          <div className="badge-premium-light">
            <span className="badge-dot-light"></span>
            <span className="badge-text-light">REDEFINING EXCELLENCE</span>
          </div>
          
          <h1 className="title-premium-light">
            Where extraordinary events
            <br />
            <span className="title-accent-light">meet premium natural living</span>
          </h1>
          
          <p className="description-premium-light">
            We're a dual-force enterprise — masterfully crafting unforgettable events 
            while delivering nature's finest products. From grand celebrations to daily 
            nourishment, we bring uncompromising quality to every experience.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="two-column-grid">
          
          {/* Events Column */}
          <div className="column-events">
            <div className="column-label-light">
              <span className="label-number">01</span>
              <span className="label-line"></span>
              <span className="label-text">EVENTS</span>
            </div>
            
            <h3 className="column-heading">Crafting moments that last forever</h3>
            
            <p className="column-paragraph">
              From intimate gatherings to large-scale productions, we bring visions to life 
              with precision, creativity, and flawless execution. Every event is a unique 
              story waiting to be told.
            </p>

            <div className="metrics-grid">
              <div className="metric-block">
                <div className="metric-value">500+</div>
                <div className="metric-label">Events Delivered</div>
              </div>
              <div className="metric-block">
                <div className="metric-value">98%</div>
                <div className="metric-label">Client Retention</div>
              </div>
              <div className="metric-block">
                <div className="metric-value">50K+</div>
                <div className="metric-label">Attendees Served</div>
              </div>
            </div>

          
          </div>

          {/* Products Column */}
          <div className="column-products">
            <div className="column-label-light">
              <span className="label-number">02</span>
              <span className="label-line"></span>
              <span className="label-text">PRODUCTS</span>
            </div>
            
            <h3 className="column-heading">Pure, natural, and thoughtfully sourced</h3>
            
            <p className="column-paragraph">
              From farm to table, our premium range of organic products brings nature's 
              finest ingredients to your kitchen. No compromises, no additives — just 
              pure goodness.
            </p>

            <div className="metrics-grid">
              <div className="metric-block">
                <div className="metric-value">50+</div>
                <div className="metric-label">Partner Farms</div>
              </div>
              <div className="metric-block">
                <div className="metric-value">100%</div>
                <div className="metric-label">Chemical Free</div>
              </div>
              <div className="metric-block">
                <div className="metric-value">24h</div>
                <div className="metric-label">Farm to Door</div>
              </div>
            </div>

          

         
          </div>
        </div>

        {/* Bottom Trust Section */}
        <div className="trust-section-light">
          <div className="trust-line"></div>
          <div className="trust-badges-light">
            <div className="trust-item-light">
              <span>Certified Organic</span>
            </div>
            <div className="trust-dot"></div>
            <div className="trust-item-light">
              <span>Sustainable Practices</span>
            </div>
            <div className="trust-dot"></div>
            <div className="trust-item-light">
              <span>Premium Quality</span>
            </div>
            <div className="trust-dot"></div>
            <div className="trust-item-light">
              <span>Eco-Friendly Packaging</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;