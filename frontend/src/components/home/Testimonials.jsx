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



// import "./Testimonials.css";

// function Testimonials() {
//   const testimonials = [
//     {
//       name: "Rahul Kumar",
//       review:
//         "Booking tickets was incredibly simple. The event experience exceeded all expectations and everything was perfectly organized."
//     },
//     {
//       name: "Priya Sharma",
//       review:
//         "A fantastic platform for discovering new events. I found amazing experiences that I would have otherwise missed."
//     },
//     {
//       name: "Arjun Singh",
//       review:
//         "From booking to event day, everything was seamless. One of the best event platforms I've used."
//     }
//   ];

//   return (
//     <section className="a4-testimonial-section">

//       <div className="a4-testimonial-container">

//         <div className="a4-testimonial-header">

//           <span className="a4-testimonial-tag">
//             TESTIMONIALS
//           </span>

//           <h2 className="a4-testimonial-title">
//             Trusted By Event Enthusiasts
//           </h2>

//           <p className="a4-testimonial-description">
//             Hear what attendees have to say about their
//             experiences discovering and booking events
//             through our platform.
//           </p>

//         </div>

//         <div className="a4-testimonial-grid">

//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className="a4-testimonial-card"
//             >

//               <div className="a4-testimonial-rating">
//                 ★★★★★
//               </div>

//               <p className="a4-testimonial-review">
//                 "{testimonial.review}"
//               </p>

//               <div className="a4-testimonial-user">
//                 {testimonial.name}
//               </div>

//             </div>
//           ))}

//         </div>

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
      role: "Event Enthusiast",
      review: "Booking tickets was incredibly simple. The event experience exceeded all expectations and everything was perfectly organized.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      role: "Frequent Attendee",
      review: "A fantastic platform for discovering new events. I found amazing experiences that I would have otherwise missed.",
      rating: 5
    },
    {
      name: "Arjun Singh",
      role: "Verified Buyer",
      review: "From booking to event day, everything was seamless. One of the best event platforms I've used.",
      rating: 5
    },
    {
      name: "Meera Nair",
      role: "Product Lover",
      review: "The organic products are exceptional. Fresh, pure, and delivered on time. Highly recommend their millet mixes!",
      rating: 5
    },
    {
      name: "Vikram Reddy",
      role: "Regular Customer",
      review: "Love their organic rice and pulses. Quality is consistent and pricing is reasonable. Will continue buying.",
      rating: 5
    },
    {
      name: "Anjali Desai",
      role: "Health Conscious",
      review: "Finally found authentic organic products. The cold pressed oils and millet snacks are now my daily essentials.",
      rating: 5
    }
  ];

  return (
    <section className="tm__wrapper">
      {/* Background Elements */}
      <div className="tm__bgSubtle"></div>
      <div className="tm__bgGradient"></div>

      <div className="tm__container">
        {/* Header Section */}
        <div className="tm__header">
          <div className="tm__headerMarker">
            <span className="tm__markerLine"></span>
            <span className="tm__markerText">WHAT OUR COMMUNITY SAYS</span>
          </div>
          
          <h2 className="tm__headline">
            Trusted by thousands for
            <br />
            <span className="tm__headlineAccent">events & organic products</span>
          </h2>
          
          <p className="tm__subhead">
            Hear what our community has to say about their experiences discovering events 
            and enjoying premium organic products through our platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="tm__grid">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="tm__card"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Quote Icon */}
              <div className="tm__quoteIcon">
                <span>“</span>
              </div>
              
              {/* Rating Stars */}
              <div className="tm__rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="tm__star">★</span>
                ))}
              </div>
              
              {/* Review Text */}
              <p className="tm__review">"{testimonial.review}"</p>
              
              {/* User Info */}
              <div className="tm__userInfo">
                <div className="tm__userInitial">
                  <span>{testimonial.name.charAt(0)}</span>
                </div>
                <div className="tm__userDetails">
                  <div className="tm__userName">{testimonial.name}</div>
                  <div className="tm__userRole">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="tm__trustSection">
          <div className="tm__trustLine"></div>
          <div className="tm__trustBadges">
            <div className="tm__trustBadge">4.9 ★ Overall Rating</div>
            <div className="tm__trustSeparator"></div>
            <div className="tm__trustBadge">10,000+ Happy Customers</div>
            <div className="tm__trustSeparator"></div>
            <div className="tm__trustBadge">Verified Reviews</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;