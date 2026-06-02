// function Testimonials() {
//   const testimonials = [
//     {
//       name: 'Rahul Kumar',
//       review:
//         'Amazing sound and lighting setup. Our music event was a huge success.'
//     },
//     {
//       name: 'Priya Sharma',
//       review:
//         'Professional team and excellent event management from start to finish.'
//     },
//     {
//       name: 'Arjun Singh',
//       review:
//         'The LED wall and stage production exceeded our expectations.'
//     }
//   ];

//   return (
//     <section
//       style={{
//         padding: '80px 20px',
//         background: '#f5f5f5'
//       }}
//     >
//       <h2
//         style={{
//           textAlign: 'center',
//           marginBottom: '40px'
//         }}
//       >
//         What Our Clients Say
//       </h2>

//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns:
//             'repeat(auto-fit, minmax(300px, 1fr))',
//           gap: '20px'
//         }}
//       >
//         {testimonials.map(
//           (testimonial, index) => (
//             <div
//               key={index}
//               style={{
//                 background: '#fff',
//                 padding: '25px',
//                 borderRadius: '12px',
//                 boxShadow:
//                   '0 2px 10px rgba(0,0,0,0.1)'
//               }}
//             >
//               <h3>★★★★★</h3>

//               <p>
//                 "{testimonial.review}"
//               </p>

//               <strong>
//                 - {testimonial.name}
//               </strong>
//             </div>
//           )
//         )}
//       </div>
//     </section>
//   );
// }

// export default Testimonials;

import "./Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Kumar",
      review:
        "Booking tickets was incredibly simple. The event experience exceeded all expectations and everything was perfectly organized."
    },
    {
      name: "Priya Sharma",
      review:
        "A fantastic platform for discovering new events. I found amazing experiences that I would have otherwise missed."
    },
    {
      name: "Arjun Singh",
      review:
        "From booking to event day, everything was seamless. One of the best event platforms I've used."
    }
  ];

  return (
    <section className="a4-testimonial-section">

      <div className="a4-testimonial-container">

        <div className="a4-testimonial-header">

          <span className="a4-testimonial-tag">
            TESTIMONIALS
          </span>

          <h2 className="a4-testimonial-title">
            Trusted By Event Enthusiasts
          </h2>

          <p className="a4-testimonial-description">
            Hear what attendees have to say about their
            experiences discovering and booking events
            through our platform.
          </p>

        </div>

        <div className="a4-testimonial-grid">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="a4-testimonial-card"
            >

              <div className="a4-testimonial-rating">
                ★★★★★
              </div>

              <p className="a4-testimonial-review">
                "{testimonial.review}"
              </p>

              <div className="a4-testimonial-user">
                {testimonial.name}
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;