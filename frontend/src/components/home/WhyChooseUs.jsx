// function WhyChooseUs() {
//   const items = [
//     'Professional Event Production',
//     'Premium Sound & Lighting',
//     'Experienced Team',
//     'End-to-End Event Management'
//   ];

//   return (
//     <section
//       style={{
//         padding: '80px 20px'
//       }}
//     >
//       <h2>Why Choose Us</h2>

//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns:
//             'repeat(4,1fr)',
//           gap: '20px'
//         }}
//       >
//         {items.map((item) => (
//           <div key={item}>
//             <h3>{item}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default WhyChooseUs;

import "./WhyChooseUs.css";

function WhyChooseUs() {
  const items = [
    {
      title: "Curated Experiences",
      description:
        "Discover carefully selected events, festivals, concerts and experiences worth attending."
    },
    {
      title: "Seamless Booking",
      description:
        "Book tickets quickly and securely with a smooth, hassle-free experience."
    },
    {
      title: "Trusted Organizers",
      description:
        "Connect with verified event organizers and trusted experiences."
    },
    {
      title: "Exclusive Access",
      description:
        "Get early access to popular events, limited seats and special experiences."
    }
  ];

  return (
    <section className="a4-why-section">
      <div className="a4-why-container">

        <div className="a4-why-header">

          <span className="a4-why-tag">
            WHY CHOOSE A4 EVENTS
          </span>

          <h2 className="a4-why-title">
            Built For Memorable Experiences
          </h2>

          <p className="a4-why-description">
            We help people discover, explore and book
            exceptional events through a seamless and
            trusted platform.
          </p>

        </div>

        <div className="a4-why-grid">

          {items.map((item) => (
            <div
              className="a4-why-card"
              key={item.title}
            >
              <h3 className="a4-why-card-title">
                {item.title}
              </h3>

              <p className="a4-why-card-description">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;