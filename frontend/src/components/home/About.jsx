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

import "./About.css";
function About() {
  return (
    <section className="a4-about-section">
      <div className="a4-about-container">

        <span className="a4-about-tag">
          REDEFINING EXPERIENCES
        </span>

        <h2 className="a4-about-title">
          Every Event Has A Story.
        </h2>

        <p className="a4-about-description">
          At A4 Events, we believe great events create lasting memories.
          Whether it's a sold-out concert, an inspiring conference,
          a vibrant festival, or an exclusive networking experience,
          our platform helps people discover and access the events
          that matter most.
        </p>

        <p className="a4-about-description">
          We bring together organizers, performers, brands, and
          audiences through a seamless booking experience, making
          every event more accessible, engaging, and unforgettable.
        </p>

      </div>
    </section>
  );
}

export default About;