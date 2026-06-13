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









// import "./Testimonials.css";

// function Testimonials() {
//   const testimonials = [
//     {
//       name: "Rahul Kumar",
//       role: "Event Enthusiast",
//       review: "Booking tickets was incredibly simple. The event experience exceeded all expectations and everything was perfectly organized.",
//       rating: 5
//     },
//     {
//       name: "Priya Sharma",
//       role: "Frequent Attendee",
//       review: "A fantastic platform for discovering new events. I found amazing experiences that I would have otherwise missed.",
//       rating: 5
//     },
//     {
//       name: "Arjun Singh",
//       role: "Verified Buyer",
//       review: "From booking to event day, everything was seamless. One of the best event platforms I've used.",
//       rating: 5
//     },
//     {
//       name: "Meera Nair",
//       role: "Product Lover",
//       review: "The organic products are exceptional. Fresh, pure, and delivered on time. Highly recommend their millet mixes!",
//       rating: 5
//     },
//     {
//       name: "Vikram Reddy",
//       role: "Regular Customer",
//       review: "Love their organic rice and pulses. Quality is consistent and pricing is reasonable. Will continue buying.",
//       rating: 5
//     },
//     {
//       name: "Anjali Desai",
//       role: "Health Conscious",
//       review: "Finally found authentic organic products. The cold pressed oils and millet snacks are now my daily essentials.",
//       rating: 5
//     }
//   ];

//   return (
//     <section className="tm__wrapper">
//       {/* Background Elements */}
//       <div className="tm__bgSubtle"></div>
//       <div className="tm__bgGradient"></div>

//       <div className="tm__container">
//         {/* Header Section */}
//         <div className="tm__header">
//           <div className="tm__headerMarker">
//             <span className="tm__markerLine"></span>
//             <span className="tm__markerText">WHAT OUR COMMUNITY SAYS</span>
//           </div>
          
//           <h2 className="tm__headline">
//             Trusted by thousands for
//             <br />
//             <span className="tm__headlineAccent">events & organic products</span>
//           </h2>
          
//           <p className="tm__subhead">
//             Hear what our community has to say about their experiences discovering events 
//             and enjoying premium organic products through our platform.
//           </p>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="tm__grid">
//           {testimonials.map((testimonial, index) => (
//             <div 
//               key={index} 
//               className="tm__card"
//               style={{ animationDelay: `${index * 0.08}s` }}
//             >
//               {/* Quote Icon */}
//               <div className="tm__quoteIcon">
//                 <span>“</span>
//               </div>
              
//               {/* Rating Stars */}
//               <div className="tm__rating">
//                 {[...Array(5)].map((_, i) => (
//                   <span key={i} className="tm__star">★</span>
//                 ))}
//               </div>
              
//               {/* Review Text */}
//               <p className="tm__review">"{testimonial.review}"</p>
              
//               {/* User Info */}
//               <div className="tm__userInfo">
//                 <div className="tm__userInitial">
//                   <span>{testimonial.name.charAt(0)}</span>
//                 </div>
//                 <div className="tm__userDetails">
//                   <div className="tm__userName">{testimonial.name}</div>
//                   <div className="tm__userRole">{testimonial.role}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Trust Badges */}
//         <div className="tm__trustSection">
//           <div className="tm__trustLine"></div>
//           <div className="tm__trustBadges">
//             <div className="tm__trustBadge">4.9 ★ Overall Rating</div>
//             <div className="tm__trustSeparator"></div>
//             <div className="tm__trustBadge">10,000+ Happy Customers</div>
//             <div className="tm__trustSeparator"></div>
//             <div className="tm__trustBadge">Verified Reviews</div>
//           </div>
//         </div>
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
//       role: "Event Enthusiast",
//       review: "Booking tickets was incredibly simple. The event experience exceeded all expectations and everything was perfectly organized.",
//       rating: 5
//     },
//     {
//       name: "Priya Sharma",
//       role: "Frequent Attendee",
//       review: "A fantastic platform for discovering new events. I found amazing experiences that I would have otherwise missed.",
//       rating: 5
//     },
//     {
//       name: "Arjun Singh",
//       role: "Verified Buyer",
//       review: "From booking to event day, everything was seamless. One of the best event platforms I've used.",
//       rating: 5
//     },
//     {
//       name: "Meera Nair",
//       role: "Product Lover",
//       review: "The organic products are exceptional. Fresh, pure, and delivered on time. Highly recommend their millet mixes!",
//       rating: 5
//     },
//     {
//       name: "Vikram Reddy",
//       role: "Regular Customer",
//       review: "Love their organic rice and pulses. Quality is consistent and pricing is reasonable. Will continue buying.",
//       rating: 5
//     },
//     {
//       name: "Anjali Desai",
//       role: "Health Conscious",
//       review: "Finally found authentic organic products. The cold pressed oils and millet snacks are now my daily essentials.",
//       rating: 5
//     }
//   ];

//   return (
//     <section className="tm__wrapper">
//       {/* Background Elements */}
//       <div className="tm__bgSubtle"></div>
//       <div className="tm__bgGradient"></div>

//       <div className="tm__container">
//         {/* Header Section */}
//         <div className="tm__header">
//           <div className="tm__headerMarker">
//             <span className="tm__markerLine"></span>
//             <span className="tm__markerText">WHAT OUR COMMUNITY SAYS</span>
//           </div>
          
//           <h2 className="tm__headline">
//             Trusted by thousands for
//             <br />
//             <span className="tm__headlineAccent">events & organic products</span>
//           </h2>
          
//           <p className="tm__subhead">
//             Hear what our community has to say about their experiences discovering events 
//             and enjoying premium organic products through our platform.
//           </p>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="tm__grid">
//           {testimonials.map((testimonial, index) => (
//             <div 
//               key={index} 
//               className="tm__card"
//               style={{ animationDelay: `${index * 0.08}s` }}
//             >
//               {/* Quote Icon */}
//               <div className="tm__quoteIcon">
//                 <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
//                   <path d="M8 16C8 16 4 16 4 12C4 8 8 4 12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   <path d="M8 16C8 16 8 28 8 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                   <path d="M22 16C22 16 18 16 18 12C18 8 22 4 26 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   <path d="M22 16C22 16 22 28 22 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                 </svg>
//               </div>
              
//               {/* Rating Stars */}
//               <div className="tm__rating">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} className="tm__star" width="16" height="16" viewBox="0 0 16 16" fill="none">
//                     <path d="M8 1L10 5.5L15 6L11 9.5L12 14.5L8 12L4 14.5L5 9.5L1 6L6 5.5L8 1Z" fill="currentColor"/>
//                   </svg>
//                 ))}
//               </div>
              
//               {/* Review Text */}
//               <p className="tm__review">"{testimonial.review}"</p>
              
//               {/* User Info */}
//               <div className="tm__userInfo">
//                 <div className="tm__userAvatar">
//                   <span>{testimonial.name.charAt(0)}</span>
//                 </div>
//                 <div className="tm__userDetails">
//                   <div className="tm__userName">{testimonial.name}</div>
//                   <div className="tm__userRole">{testimonial.role}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Trust Badges */}
//         <div className="tm__trustSection">
//           <div className="tm__trustLine"></div>
//           <div className="tm__trustBadges">
//             <div className="tm__trustBadge">
//               <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                 <path d="M7 1L8.5 5.5L13 6L9.5 9L10.5 13.5L7 11L3.5 13.5L4.5 9L1 6L5.5 5.5L7 1Z" fill="currentColor"/>
//               </svg>
//               4.9 ★ Overall Rating
//             </div>
//             <div className="tm__trustSeparator"></div>
//             <div className="tm__trustBadge">
//               <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                 <path d="M7 1L8.5 5.5L13 6L9.5 9L10.5 13.5L7 11L3.5 13.5L4.5 9L1 6L5.5 5.5L7 1Z" fill="currentColor"/>
//               </svg>
//               10,000+ Happy Customers
//             </div>
//             <div className="tm__trustSeparator"></div>
//             <div className="tm__trustBadge">
//               <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                 <path d="M7 1L8.5 5.5L13 6L9.5 9L10.5 13.5L7 11L3.5 13.5L4.5 9L1 6L5.5 5.5L7 1Z" fill="currentColor"/>
//               </svg>
//               Verified Reviews
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Testimonials;


import { useEffect, useState, useRef } from "react";
import "./Testimonials.css";

function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const testimonials = [
    {
      name: "Rahul Kumar",
      role: "Event Enthusiast",
      review: "Booking tickets was incredibly simple. The event experience exceeded all expectations and everything was perfectly organized.",
    },
    {
      name: "Priya Sharma",
      role: "Frequent Attendee",
      review: "A fantastic platform for discovering new events. I found amazing experiences that I would have otherwise missed.",
    },
    {
      name: "Arjun Singh",
      role: "Verified Buyer",
      review: "From booking to event day, everything was seamless. One of the best event platforms I've used.",
    },
    {
      name: "Meera Nair",
      role: "Product Lover",
      review: "The organic products are exceptional. Fresh, pure, and delivered on time. Highly recommend their millet mixes.",
    },
    {
      name: "Vikram Reddy",
      role: "Regular Customer",
      review: "Love their organic rice and pulses. Quality is consistent and pricing is reasonable. Will continue buying.",
    },
    {
      name: "Anjali Desai",
      role: "Health Conscious",
      review: "Finally found authentic organic products. The cold pressed oils and millet snacks are now my daily essentials.",
    },
  ];

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

  return (
    <section
      ref={sectionRef}
      className={`tm-premium ${isVisible ? "tm-visible" : ""}`}
    >
      {/* Atmospheric Depth */}
      <div className="tm-atmosphere" aria-hidden="true">
        <div className="tm-glow tm-glow--teal" />
        <div className="tm-glow tm-glow--blue" />
        <div className="tm-glow tm-glow--emerald" />
        <div className="tm-mesh" />
        <div className="tm-grain" />
        <div className="tm-vignette" />
      </div>

      {/* Floating Orbs */}
      <div className="tm-orbs" aria-hidden="true">
        <div className="tm-orb tm-orb--primary" />
        <div className="tm-orb tm-orb--secondary" />
      </div>

      <div className="tm-container">
        {/* Header */}
        <div className="tm-header">
          <div className="tm-thread" />
          <div className="tm-header-content">
            <div className="tm-whisper">
              <span className="tm-whisper-pulse" />
              <span>What our community says</span>
            </div>

            <h2 className="tm-headline">
              <span className="tm-headline-line">Trusted by thousands for</span>
              <span className="tm-headline-line tm-headline-radiance">
                events & organic living.
              </span>
            </h2>

            <p className="tm-prose">
              Hear what our community has to say about their experiences 
              discovering events and enjoying premium organic products 
              through our platform.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="tm-grid">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="tm-card"
              style={{ "--card-index": index }}
            >
              {/* Card Shine */}
              <div className="tm-card-shine" aria-hidden="true" />

              {/* Quote Mark */}
              <div className="tm-quote">
                <span className="tm-quote-mark">"</span>
              </div>

              {/* Review Text */}
              <p className="tm-review">{testimonial.review}</p>

              {/* Divider */}
              <div className="tm-divider" />

              {/* User Info */}
              <div className="tm-user">
                <div className="tm-user-avatar">
                  <span>{testimonial.name.charAt(0)}</span>
                </div>
                <div className="tm-user-details">
                  <span className="tm-user-name">{testimonial.name}</span>
                  <span className="tm-user-role">{testimonial.role}</span>
                </div>
              </div>

              {/* Card Edge Glow */}
              <div className="tm-card-edge" aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Essence Strip */}
        <div className="tm-essence">
          <div className="tm-essence-thread" />
          <div className="tm-essence-items">
            <div className="tm-essence-item">
              <span className="tm-essence-word">Trusted</span>
              <span className="tm-essence-subtle">By thousands</span>
            </div>
            <div className="tm-essence-separator" />
            <div className="tm-essence-item">
              <span className="tm-essence-word">Verified</span>
              <span className="tm-essence-subtle">Real reviews</span>
            </div>
            <div className="tm-essence-separator" />
            <div className="tm-essence-item">
              <span className="tm-essence-word">Consistent</span>
              <span className="tm-essence-subtle">Quality always</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;