// // import { useEffect, useState } from 'react';
// // import { useParams, Link } from 'react-router-dom';
// // import api from '../services/api';
// // import InquiryForm from '../components/InquiryForm';
// // function EventDetails() {
// //   const { id } = useParams();

// //   const [event, setEvent] = useState(null);

// //   useEffect(() => {
// //     loadEvent();
// //   }, []);

// //   const loadEvent = async () => {
// //     try {
// //       const { data } = await api.get(`/events/${id}`);
// //       setEvent(data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   if (!event) {
// //     return <h2>Loading...</h2>;
// //   }

// // //   return (
// // //     <div>
// // //       <Link to="/events">
// // //         ← Back to Events
// // //       </Link>

// // //       <h1>{event.title}</h1>

// // //       {event.image && (
// // //         <img
// // //           src={`http://localhost:5000${event.image}`}
// // //           alt={event.title}
// // //           width="400"
// // //         />
// // //       )}

// // //       <p>{event.description}</p>

// // //       <p>
// // //         <strong>Location:</strong> {event.location}
// // //       </p>

// // //       <p>
// // //         <strong>Date:</strong>{' '}
// // //         {new Date(event.eventDate).toLocaleDateString()}
// // //       </p>
// // //     </div>
// // //   );
// // return (
// //   <div style={{ padding: '20px' }}>
// //     <Link to="/events">
// //       ← Back
// //     </Link>

// //     <h1>{event.title}</h1>

// //     {event.bannerImage && (
// //   <img
// //     src={`http://localhost:5000${event.bannerImage}`}
// //     alt={event.title}
// //     width="500"
// //   />
// // )}

// //     <p>{event.description}</p>

// //     <h3>
// //       Location: {event.location}
// //     </h3>

// //     <h3>
// //       Date:{' '}
// //       {new Date(
// //         event.eventDate
// //       ).toLocaleDateString()}
// //     </h3>

// //     <button>
// //       Book Now
// //     </button>
// //     <InquiryForm eventId={event.id} />
// //   </div>
// // );
// // }

// // export default EventDetails;


// // import { useEffect, useState } from "react";
// // import { useParams, Link } from "react-router-dom";
// // import api from "../services/api";
// // import InquiryForm from "../components/InquiryForm";
// // import "./EventDetails.css";

// // function EventDetails() {
// //   const { id } = useParams();

// //   const [event, setEvent] = useState(null);

// //   useEffect(() => {
// //     loadEvent();
// //   }, [id]);

// //   const loadEvent = async () => {
// //     try {
// //       const { data } = await api.get(`/events/${id}`);
// //       setEvent(data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   if (!event) {
// //     return (
// //       <div className="a4-event-loading">
// //         Loading...
// //       </div>
// //     );
// //   }

// //   return (
// //     <section className="a4-event-page">

// //       {/* HERO */}

// //       <div
// //         className="a4-event-hero"
// //         style={{
// //           backgroundImage: `url(http://localhost:5000${event.bannerImage})`,
// //         }}
// //       >

// //         <div className="a4-event-overlay"></div>

// //         <div className="a4-event-hero-content">

// //           <Link
// //             to="/events"
// //             className="a4-event-back"
// //           >
// //             ← Back To Events
// //           </Link>

// //           <span className="a4-event-tag">
// //             FEATURED EVENT
// //           </span>

// //           <h1 className="a4-event-title">
// //             {event.title}
// //           </h1>

// //           <div className="a4-event-meta">

// //             <div className="a4-event-meta-card">
// //               <span>Location</span>
// //               <h4>{event.location}</h4>
// //             </div>

// //             <div className="a4-event-meta-card">
// //               <span>Date</span>
// //               <h4>
// //                 {new Date(
// //                   event.eventDate
// //                 ).toLocaleDateString()}
// //               </h4>
// //             </div>

// //           </div>

// //           <button className="a4-event-book-btn">
// //             Book Your Spot
// //           </button>

// //         </div>

// //       </div>

// //       {/* CONTENT */}

// //       <div className="a4-event-content-container">

// //         <div className="a4-event-description-card">

// //           <h2>
// //             About This Event
// //           </h2>

// //           <p>
// //             {event.description}
// //           </p>

// //         </div>

// //         {/* Venue */}

// //         <div className="a4-event-location-card">

// //           <h2>
// //             Event Location
// //           </h2>

// //           <p>{event.location}</p>

// //           <iframe
// //             title="Event Location"
// //             className="a4-event-map"
// //             src={`https://maps.google.com/maps?q=${encodeURIComponent(
// //               event.location
// //             )}&z=15&output=embed`}
// //           />

// //         </div>

// //         {/* Inquiry */}

// //         <div className="a4-event-inquiry">

// //           <h2>
// //             Reserve Your Spot
// //           </h2>

// //           <InquiryForm
// //             eventId={event.id}
// //           />

// //         </div>

// //       </div>

// //     </section>
// //   );
// // }

// // export default EventDetails;



// // import { useEffect, useState } from "react";
// // import { useParams, Link } from "react-router-dom";
// // import api from "../services/api";
// // import InquiryForm from "../components/InquiryForm";
// // import "./EventDetails.css";
// // import PublicLayout from "../layouts/PublicLayout";

// // function EventDetails() {
// //   const { id } = useParams();

// //   const [event, setEvent] = useState(null);

// //   useEffect(() => {
// //     loadEvent();
// //   }, [id]);

// //   const loadEvent = async () => {
// //     try {
// //       const { data } = await api.get(`/events/${id}`);
// //       setEvent(data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   if (!event) {
// //     return (
// //       <div className="a4-event-loading">
// //         Loading...
// //       </div>
// //     );
// //   }

// //   return (
// //     <PublicLayout>
// //     <section className="a4-event-page">
// //       {/* HERO */}

// //       <div
// //         className="a4-event-hero"
// //         style={{
// //           backgroundImage: `url(http://localhost:5000${event.bannerImage})`,
// //         }}
// //       >
// //         <div className="a4-event-overlay"></div>

// //         <div className="a4-event-hero-content">
// //           <Link
// //             to="/events"
// //             className="a4-event-back"
// //           >
// //             ← Back To Events
// //           </Link>

// //           {event.featured && (
// //             <span className="a4-event-tag">
// //               FEATURED EVENT
// //             </span>
// //           )}

// //           <h1 className="a4-event-title">
// //             {event.title}
// //           </h1>

// //           <div className="a4-event-meta">
// //             <div className="a4-event-meta-card">
// //               <span>Location</span>
// //               <h4>{event.location}</h4>
// //             </div>

// //             <div className="a4-event-meta-card">
// //               <span>Date</span>
// //               <h4>
// //                 {new Date(
// //                   event.eventDate
// //                 ).toLocaleDateString(
// //                   "en-US",
// //                   {
// //                     weekday: "short",
// //                     day: "numeric",
// //                     month: "long",
// //                     year: "numeric",
// //                   }
// //                 )}
// //               </h4>
// //             </div>
// //           </div>

// //           {event.bookingLink && (
// //             <a
// //               href={event.bookingLink}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="a4-event-book-btn"
// //             >
// //               Book Your Spot
// //             </a>
// //           )}
// //         </div>
// //       </div>

// //       {/* CONTENT */}

// //       <div className="a4-event-content-container">
// //         {/* ABOUT EVENT */}

// //         <div className="a4-event-description-card">
// //           <h2>
// //             About This Event
// //           </h2>

// //           <p>
// //             {event.description}
// //           </p>
// //         </div>

// //         {/* SPONSOR SECTION */}

// //         {(event.sponsorName ||
// //           event.sponsorLogo) && (
// //           <div className="a4-event-sponsor-card">
// //             <h2>
// //               Event Sponsor
// //             </h2>

// //             {event.sponsorLogo && (
// //               <img
// //                 src={event.sponsorLogo}
// //                 alt={
// //                   event.sponsorName ||
// //                   "Sponsor"
// //                 }
// //                 className="a4-event-sponsor-logo"
// //               />
// //             )}

// //             {event.sponsorName && (
// //               <h3>
// //                 {event.sponsorName}
// //               </h3>
// //             )}

// //             <p>
// //               Proudly supporting
// //               this event.
// //             </p>
// //           </div>
// //         )}

// //         {/* EVENT DETAILS */}

// //         <div className="a4-event-description-card">
// //           <h2>
// //             Event Details
// //           </h2>

// //           <div className="a4-event-details-grid">
// //             <div>
// //               <strong>
// //                 Event Date
// //               </strong>

// //               <p>
// //                 {new Date(
// //                   event.eventDate
// //                 ).toLocaleDateString(
// //                   "en-US",
// //                   {
// //                     weekday:
// //                       "long",
// //                     day: "numeric",
// //                     month:
// //                       "long",
// //                     year:
// //                       "numeric",
// //                   }
// //                 )}
// //               </p>
// //             </div>

// //             <div>
// //               <strong>
// //                 Location
// //               </strong>

// //               <p>
// //                 {event.location}
// //               </p>
// //             </div>

// //             {event.bookingLink && (
// //               <div>
// //                 <strong>
// //                   Booking
// //                 </strong>

// //                 <p>
// //                   <a
// //                     href={
// //                       event.bookingLink
// //                     }
// //                     target="_blank"
// //                     rel="noopener noreferrer"
// //                   >
// //                     Reserve Your
// //                     Spot
// //                   </a>
// //                 </p>
// //               </div>
// //             )}
// //           </div>
// //         </div>

// //         {/* LOCATION */}

// //         <div className="a4-event-location-card">
// //           <h2>
// //             Event Location
// //           </h2>

// //           <p>{event.location}</p>

// //           <iframe
// //             title="Event Location"
// //             className="a4-event-map"
// //             src={`https://maps.google.com/maps?q=${encodeURIComponent(
// //               event.location
// //             )}&z=15&output=embed`}
// //             loading="lazy"
// //             allowFullScreen
// //           />
// //         </div>

// //         {/* INQUIRY FORM */}

// //         {/* <div className="a4-event-inquiry">
// //           <h2>
// //             Reserve Your Spot
// //           </h2>

// //           <InquiryForm
// //             eventId={event.id}
// //           />
// //         </div> */}
// //       </div>
// //     </section> 
// //     </PublicLayout>
// //   );
// // }

// // export default EventDetails;










// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import api from "../services/api";
// import PublicLayout from "../layouts/PublicLayout";
// import "./EventDetails.css";

// function EventDetails() {
//   const { id } = useParams();
//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadEvent();
//   }, [id]);

//   const loadEvent = async () => {
//     setLoading(true);
//     try {
//       const { data } = await api.get(`/events/${id}`);
//       setEvent(data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString("en-US", {
//       weekday: "long",
//       day: "numeric",
//       month: "long",
//       year: "numeric",
//     });
//   };

//   const formatShortDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString("en-US", {
//       weekday: "short",
//       day: "numeric",
//       month: "long",
//     });
//   };

//   if (loading) {
//     return (
//       <PublicLayout>
//         <div className="evdt__loading">
//           <div className="evdt__loadingContent">
//             <div className="evdt__loadingSpinner"></div>
//             <p>Loading event details...</p>
//           </div>
//         </div>
//       </PublicLayout>
//     );
//   }

//   if (!event) {
//     return (
//       <PublicLayout>
//         <div className="evdt__notFound">
//           <div className="evdt__notFoundContent">
//             <h2>Event Not Found</h2>
//             <p>The event you're looking for doesn't exist or has been removed.</p>
//             <Link to="/events" className="evdt__backLink">Back to Events →</Link>
//           </div>
//         </div>
//       </PublicLayout>
//     );
//   }

//   return (
//     <PublicLayout>
//       <section className="evdt__wrapper">
//         {/* Hero Section */}
//         <div 
//           className="evdt__hero"
//           style={{
//             backgroundImage: `url(http://localhost:5000${event.bannerImage})`,
//           }}
//         >
//           <div className="evdt__heroOverlay"></div>
//           <div className="evdt__heroContent">
//             <Link to="/events" className="evdt__backButton">
//               ← Back to Events
//             </Link>
            
//             {event.featured && (
//               <div className="evdt__featuredBadge">
//                 <span>Featured Event</span>
//               </div>
//             )}
            
//             <h1 className="evdt__title">{event.title}</h1>
            
//             <div className="evdt__metaGrid">
//               <div className="evdt__metaItem">
//                 <span className="evdt__metaLabel">Location</span>
//                 <h3 className="evdt__metaValue">{event.location}</h3>
//               </div>
//               <div className="evdt__metaDivider"></div>
//               <div className="evdt__metaItem">
//                 <span className="evdt__metaLabel">Date</span>
//                 <h3 className="evdt__metaValue">{formatShortDate(event.eventDate)}</h3>
//               </div>
//             </div>
            
//             {event.bookingLink && (
//               <a
//                 href={event.bookingLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="evdt__bookButton"
//               >
//                 Book Your Spot
//                 <span className="evdt__bookArrow">→</span>
//               </a>
//             )}
//           </div>
//         </div>

//         {/* Content Container */}
//         <div className="evdt__container">
//           {/* About Section */}
//           <div className="evdt__section">
//             <div className="evdt__sectionHeader">
//               <div className="evdt__sectionLine"></div>
//               <span className="evdt__sectionLabel">ABOUT THE EVENT</span>
//             </div>
//             <h2 className="evdt__sectionTitle">What to expect</h2>
//             <p className="evdt__description">{event.description}</p>
//           </div>

//           {/* Event Details Grid */}
//           <div className="evdt__detailsGrid">
//             <div className="evdt__detailCard">
//               <div className="evdt__detailIcon"></div>
//               <div className="evdt__detailContent">
//                 <span className="evdt__detailLabel">Full Date & Time</span>
//                 <p className="evdt__detailValue">{formatDate(event.eventDate)}</p>
//               </div>
//             </div>
            
//             <div className="evdt__detailCard">
//               <div className="evdt__detailIcon"></div>
//               <div className="evdt__detailContent">
//                 <span className="evdt__detailLabel">Venue Location</span>
//                 <p className="evdt__detailValue">{event.location}</p>
//               </div>
//             </div>
            
//             {event.bookingLink && (
//               <div className="evdt__detailCard evdt__detailCardHighlight">
//                 <div className="evdt__detailIcon"></div>
//                 <div className="evdt__detailContent">
//                   <span className="evdt__detailLabel">Booking Status</span>
//                   <p className="evdt__detailValue">
//                     <a href={event.bookingLink} target="_blank" rel="noopener noreferrer" className="evdt__bookingLink">
//                       Reserve Your Spot →
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Sponsor Section */}
//           {(event.sponsorName || event.sponsorLogo) && (
//             <div className="evdt__sponsorSection">
//               <div className="evdt__sectionHeader">
//                 <div className="evdt__sectionLine"></div>
//                 <span className="evdt__sectionLabel">PROUDLY SUPPORTED BY</span>
//               </div>
//               <div className="evdt__sponsorContent">
//                 {event.sponsorLogo && (
//                   <img
//                     src={event.sponsorLogo}
//                     alt={event.sponsorName || "Sponsor"}
//                     className="evdt__sponsorLogo"
//                   />
//                 )}
//                 {event.sponsorName && (
//                   <h3 className="evdt__sponsorName">{event.sponsorName}</h3>
//                 )}
//                 <p className="evdt__sponsorText">Proudly supporting this event</p>
//               </div>
//             </div>
//           )}

//           {/* Location Map Section */}
//           <div className="evdt__mapSection">
//             <div className="evdt__sectionHeader">
//               <div className="evdt__sectionLine"></div>
//               <span className="evdt__sectionLabel">FIND YOUR WAY</span>
//             </div>
//             <h2 className="evdt__sectionTitle">Event Location</h2>
//             <p className="evdt__mapAddress">{event.location}</p>
//             <div className="evdt__mapWrapper">
//               <iframe
//                 title="Event Location Map"
//                 className="evdt__map"
//                 src={`https://maps.google.com/maps?q=${encodeURIComponent(event.location)}&z=15&output=embed`}
//                 loading="lazy"
//                 allowFullScreen
//               />
//             </div>
//           </div>

//           {/* CTA Section */}
//           {event.bookingLink && (
//             <div className="evdt__ctaSection">
//               <div className="evdt__ctaContent">
//                 <h3 className="evdt__ctaTitle">Ready to join us?</h3>
//                 <p className="evdt__ctaText">Secure your spot today for an unforgettable experience.</p>
//                 <a
//                   href={event.bookingLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="evdt__ctaButton"
//                 >
//                   Book Your Spot Now
//                   <span className="evdt__ctaArrow">→</span>
//                 </a>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </PublicLayout>
//   );
// }

// export default EventDetails;



// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import api from "../services/api";
// import PublicLayout from "../layouts/PublicLayout";
// import "./EventDetails.css";

// function EventDetails() {
//   const { id } = useParams();
//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadEvent();
//   }, [id]);

//   const loadEvent = async () => {
//     setLoading(true);
//     try {
//       const { data } = await api.get(`/events/${id}`);
//       setEvent(data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString("en-US", {
//       weekday: "long",
//       day: "numeric",
//       month: "long",
//       year: "numeric",
//     });
//   };

//   const formatShortDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString("en-US", {
//       weekday: "short",
//       day: "numeric",
//       month: "long",
//     });
//   };

//   if (loading) {
//     return (
//       <PublicLayout>
//         <div className="evdt__loading">
//           <div className="evdt__loadingContent">
//             <div className="evdt__loadingSpinner"></div>
//             <p>Loading event details...</p>
//           </div>
//         </div>
//       </PublicLayout>
//     );
//   }

//   if (!event) {
//     return (
//       <PublicLayout>
//         <div className="evdt__notFound">
//           <div className="evdt__notFoundContent">
//             <h2>Event Not Found</h2>
//             <p>The event you're looking for doesn't exist or has been removed.</p>
//             <Link to="/events" className="evdt__backLink">Back to Events →</Link>
//           </div>
//         </div>
//       </PublicLayout>
//     );
//   }

//   return (
//     <PublicLayout>
//       <section className="evdt__wrapper">
//         {/* Hero Section */}
//         <div 
//           className="evdt__hero"
//           style={{
//             backgroundImage: `url(http://localhost:5000${event.bannerImage})`,
//           }}
//         >
//           <div className="evdt__heroOverlay"></div>
//           <div className="evdt__heroContent">
//             <Link to="/events" className="evdt__backButton">
//               ← Back to Events
//             </Link>
            
//             {event.featured && (
//               <div className="evdt__featuredBadge">
//                 <span>Featured Event</span>
//               </div>
//             )}
            
//             <h1 className="evdt__title">{event.title}</h1>
            
//             <div className="evdt__metaGrid">
//               <div className="evdt__metaItem">
//                 <span className="evdt__metaLabel">Location</span>
//                 <h3 className="evdt__metaValue">{event.location}</h3>
//               </div>
//               <div className="evdt__metaDivider"></div>
//               <div className="evdt__metaItem">
//                 <span className="evdt__metaLabel">Date</span>
//                 <h3 className="evdt__metaValue">{formatShortDate(event.eventDate)}</h3>
//               </div>
//             </div>
            
//             {event.bookingLink && (
//               <a
//                 href={event.bookingLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="evdt__bookButton"
//               >
//                 Book Your Spot
//                 <span className="evdt__bookArrow">→</span>
//               </a>
//             )}
//           </div>
//         </div>

//         {/* Content Container */}
//         <div className="evdt__container">
//           {/* About Section */}
//           <div className="evdt__section">
//             <div className="evdt__sectionHeader">
//               <div className="evdt__sectionLine"></div>
//               <span className="evdt__sectionLabel">ABOUT THE EVENT</span>
//             </div>
//             <h2 className="evdt__sectionTitle">What to expect</h2>
//             <p className="evdt__description">{event.description}</p>
//           </div>

//           {/* Event Details Grid */}
//           <div className="evdt__detailsGrid">
//             <div className="evdt__detailCard">
//               <div className="evdt__detailIcon"></div>
//               <div className="evdt__detailContent">
//                 <span className="evdt__detailLabel">Full Date & Time</span>
//                 <p className="evdt__detailValue">{formatDate(event.eventDate)}</p>
//               </div>
//             </div>
            
//             <div className="evdt__detailCard">
//               <div className="evdt__detailIcon"></div>
//               <div className="evdt__detailContent">
//                 <span className="evdt__detailLabel">Venue Location</span>
//                 <p className="evdt__detailValue">{event.location}</p>
//               </div>
//             </div>
            
//             {event.bookingLink && (
//               <div className="evdt__detailCard evdt__detailCardHighlight">
//                 <div className="evdt__detailIcon"></div>
//                 <div className="evdt__detailContent">
//                   <span className="evdt__detailLabel">Booking Status</span>
//                   <p className="evdt__detailValue">
//                     <a href={event.bookingLink} target="_blank" rel="noopener noreferrer" className="evdt__bookingLink">
//                       Reserve Your Spot →
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Sponsor Section */}
//           {(event.sponsorName || event.sponsorLogo) && (
//             <div className="evdt__sponsorSection">
//               <div className="evdt__sectionHeader">
//                 <div className="evdt__sectionLine"></div>
//                 <span className="evdt__sectionLabel">PROUDLY SUPPORTED BY</span>
//               </div>
//               <div className="evdt__sponsorContent">
//                 {event.sponsorLogo && (
//                   <img
//                     src={event.sponsorLogo}
//                     alt={event.sponsorName || "Sponsor"}
//                     className="evdt__sponsorLogo"
//                   />
//                 )}
//                 {event.sponsorName && (
//                   <h3 className="evdt__sponsorName">{event.sponsorName}</h3>
//                 )}
//                 <p className="evdt__sponsorText">Proudly supporting this event</p>
//               </div>
//             </div>
//           )}

//           {/* Location Map Section */}
//           <div className="evdt__mapSection">
//             <div className="evdt__sectionHeader">
//               <div className="evdt__sectionLine"></div>
//               <span className="evdt__sectionLabel">FIND YOUR WAY</span>
//             </div>
//             <h2 className="evdt__sectionTitle">Event Location</h2>
//             <p className="evdt__mapAddress">{event.location}</p>
//             <div className="evdt__mapWrapper">
//               <iframe
//                 title="Event Location Map"
//                 className="evdt__map"
//                 src={`https://maps.google.com/maps?q=${encodeURIComponent(event.location)}&z=15&output=embed`}
//                 loading="lazy"
//                 allowFullScreen
//               />
//             </div>
//           </div>

//           {/* CTA Section */}
//           {event.bookingLink && (
//             <div className="evdt__ctaSection">
//               <div className="evdt__ctaContent">
//                 <h3 className="evdt__ctaTitle">Ready to join us?</h3>
//                 <p className="evdt__ctaText">Secure your spot today for an unforgettable experience.</p>
//                 <a
//                   href={event.bookingLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="evdt__ctaButton"
//                 >
//                   Book Your Spot Now
//                   <span className="evdt__ctaArrow">→</span>
//                 </a>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </PublicLayout>
//   );
// }

// export default EventDetails;











// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import api from "../services/api";
// import PublicLayout from "../layouts/PublicLayout";
// import "./EventDetails.css";

// function EventDetails() {
//   const { id } = useParams();
//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadEvent();
//   }, [id]);

//   const loadEvent = async () => {
//     setLoading(true);
//     try {
//       const { data } = await api.get(`/events/${id}`);
//       setEvent(data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString("en-US", {
//       weekday: "long",
//       day: "numeric",
//       month: "long",
//       year: "numeric",
//     });
//   };

//   const formatShortDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString("en-US", {
//       weekday: "short",
//       day: "numeric",
//       month: "long",
//     });
//   };

//   if (loading) {
//     return (
//       <PublicLayout>
//         <div className="evdt__loading">
//           <div className="evdt__loadingContent">
//             <div className="evdt__loadingSpinner"></div>
//             <p>Loading event details...</p>
//           </div>
//         </div>
//       </PublicLayout>
//     );
//   }

//   if (!event) {
//     return (
//       <PublicLayout>
//         <div className="evdt__notFound">
//           <div className="evdt__notFoundContent">
//             <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
//               <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5"/>
//               <path d="M24 16v12M24 32v0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//             </svg>
//             <h2>Event Not Found</h2>
//             <p>The event you're looking for doesn't exist or has been removed.</p>
//             <Link to="/events" className="evdt__backLink">Back to Events →</Link>
//           </div>
//         </div>
//       </PublicLayout>
//     );
//   }

//   return (
//     <PublicLayout>
//       <section className="evdt__wrapper">
//         {/* Hero Section */}
//         <div 
//           className="evdt__hero"
//           style={{
//             backgroundImage: `url(http://localhost:5000${event.bannerImage})`,
//           }}
//         >
//           <div className="evdt__heroOverlay"></div>
//           <div className="evdt__heroContent">
//             <Link to="/events" className="evdt__backButton">
//               <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                 <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//               Back to Events
//             </Link>
            
//             {event.featured && (
//               <div className="evdt__featuredBadge">
//                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//                   <path d="M6 0L7.5 4.5L12 4.5L8.25 7.5L9.75 12L6 9L2.25 12L3.75 7.5L0 4.5L4.5 4.5L6 0Z" fill="currentColor"/>
//                 </svg>
//                 <span>Featured Event</span>
//               </div>
//             )}
            
//             <h1 className="evdt__title">{event.title}</h1>
            
//             <div className="evdt__metaGrid">
//               <div className="evdt__metaItem">
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                   <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.2"/>
//                   <circle cx="8" cy="6" r="2" stroke="currentColor" strokeWidth="1.2"/>
//                 </svg>
//                 <div>
//                   <span className="evdt__metaLabel">Location</span>
//                   <h3 className="evdt__metaValue">{event.location}</h3>
//                 </div>
//               </div>
//               <div className="evdt__metaDivider"></div>
//               <div className="evdt__metaItem">
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                   <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
//                   <path d="M2 7h12" stroke="currentColor" strokeWidth="1.2"/>
//                   <path d="M5 1v3M11 1v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
//                 </svg>
//                 <div>
//                   <span className="evdt__metaLabel">Date</span>
//                   <h3 className="evdt__metaValue">{formatShortDate(event.eventDate)}</h3>
//                 </div>
//               </div>
//             </div>
            
//             {event.bookingLink && (
//               <a
//                 href={event.bookingLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="evdt__bookButton"
//               >
//                 Book Your Spot
//                 <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                   <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//               </a>
//             )}
//           </div>
//         </div>

//         {/* Content Container */}
//         <div className="evdt__container">
//           {/* About Section */}
//           <div className="evdt__section">
//             <div className="evdt__sectionHeader">
//               <div className="evdt__sectionLine"></div>
//               <span className="evdt__sectionLabel">ABOUT THE EVENT</span>
//             </div>
//             <h2 className="evdt__sectionTitle">What to expect</h2>
//             <p className="evdt__description">{event.description}</p>
//           </div>

//           {/* Event Details Grid */}
//           <div className="evdt__detailsGrid">
//             <div className="evdt__detailCard">
//               <div className="evdt__detailIcon">
//                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//                   <rect x="2" y="4" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
//                   <path d="M2 8h16" stroke="currentColor" strokeWidth="1.5"/>
//                   <path d="M6 2v4M14 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//                 </svg>
//               </div>
//               <div className="evdt__detailContent">
//                 <span className="evdt__detailLabel">Full Date & Time</span>
//                 <p className="evdt__detailValue">{formatDate(event.eventDate)}</p>
//               </div>
//             </div>
            
//             <div className="evdt__detailCard">
//               <div className="evdt__detailIcon">
//                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//                   <path d="M10 2C6.69 2 4 4.69 4 8c0 4.5 6 11 6 11s6-6.5 6-11c0-3.31-2.69-6-6-6z" stroke="currentColor" strokeWidth="1.5"/>
//                   <circle cx="10" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
//                 </svg>
//               </div>
//               <div className="evdt__detailContent">
//                 <span className="evdt__detailLabel">Venue Location</span>
//                 <p className="evdt__detailValue">{event.location}</p>
//               </div>
//             </div>
            
//             {event.bookingLink && (
//               <div className="evdt__detailCard evdt__detailCardHighlight">
//                 <div className="evdt__detailIcon">
//                   <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//                     <path d="M5 4h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5"/>
//                     <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
//                     <path d="M14 14l-2.5-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//                   </svg>
//                 </div>
//                 <div className="evdt__detailContent">
//                   <span className="evdt__detailLabel">Booking Status</span>
//                   <p className="evdt__detailValue">
//                     <a href={event.bookingLink} target="_blank" rel="noopener noreferrer" className="evdt__bookingLink">
//                       Reserve Your Spot →
//                     </a>
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Sponsor Section */}
//           {(event.sponsorName || event.sponsorLogo) && (
//             <div className="evdt__sponsorSection">
//               <div className="evdt__sectionHeader">
//                 <div className="evdt__sectionLine"></div>
//                 <span className="evdt__sectionLabel">PROUDLY SUPPORTED BY</span>
//               </div>
//               <div className="evdt__sponsorContent">
//                 {event.sponsorLogo && (
//                   <img
//                     src={event.sponsorLogo}
//                     alt={event.sponsorName || "Sponsor"}
//                     className="evdt__sponsorLogo"
//                   />
//                 )}
//                 {event.sponsorName && (
//                   <h3 className="evdt__sponsorName">{event.sponsorName}</h3>
//                 )}
//                 <p className="evdt__sponsorText">Proudly supporting this event</p>
//               </div>
//             </div>
//           )}

//           {/* Location Map Section */}
//           <div className="evdt__mapSection">
//             <div className="evdt__sectionHeader">
//               <div className="evdt__sectionLine"></div>
//               <span className="evdt__sectionLabel">FIND YOUR WAY</span>
//             </div>
//             <h2 className="evdt__sectionTitle">Event Location</h2>
//             <p className="evdt__mapAddress">
//               <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                 <path d="M7 1C4.79 1 3 2.79 3 5c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4z" stroke="currentColor" strokeWidth="1.2"/>
//                 <circle cx="7" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
//               </svg>
//               {event.location}
//             </p>
//             <div className="evdt__mapWrapper">
//               <iframe
//                 title="Event Location Map"
//                 className="evdt__map"
//                 src={`https://maps.google.com/maps?q=${encodeURIComponent(event.location)}&z=15&output=embed`}
//                 loading="lazy"
//                 allowFullScreen
//               />
//             </div>
//           </div>

//           {/* CTA Section */}
//           {event.bookingLink && (
//             <div className="evdt__ctaSection">
//               <div className="evdt__ctaContent">
//                 <h3 className="evdt__ctaTitle">Ready to join us?</h3>
//                 <p className="evdt__ctaText">Secure your spot today for an unforgettable experience.</p>
//                 <a
//                   href={event.bookingLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="evdt__ctaButton"
//                 >
//                   Book Your Spot Now
//                   <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                     <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </PublicLayout>
//   );
// }

// export default EventDetails;

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";
import PublicLayout from "../layouts/PublicLayout";
import "./EventDetails.css";

function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadEvent();
  }, [id]);

  const loadEvent = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(`/events/${id}`);
      setEvent(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatShortDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "long",
    });
  };

  const isPastEvent = (dateString) => {
    if (!dateString) return false;
    const eventDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate < today;
  };

  if (loading) {
    return (
      <PublicLayout>
        <div className="evdt__loading">
          <div className="evdt__loadingContent">
            <div className="evdt__loadingSpinner"></div>
            <p>Loading event details...</p>
          </div>
        </div>
      </PublicLayout>
    );
  }

  if (!event) {
    return (
      <PublicLayout>
        <div className="evdt__notFound">
          <div className="evdt__notFoundContent">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M24 16v12M24 32v0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <h2>Event Not Found</h2>
            <p>The event you're looking for doesn't exist or has been removed.</p>
            <Link to="/events" className="evdt__backLink">Back to Events →</Link>
          </div>
        </div>
      </PublicLayout>
    );
  }

  const pastEvent = isPastEvent(event.eventDate);

  return (
    <PublicLayout>
      <section className="evdt__wrapper">
        {/* Hero Section */}
        <div 
          className="evdt__hero"
          style={{
            backgroundImage: `url(http://localhost:5000${event.bannerImage})`,
          }}
        >
          <div className="evdt__heroOverlay"></div>
          <div className="evdt__heroContent">
            <Link to="/events" className="evdt__backButton">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Events
            </Link>
            
            {event.featured && !pastEvent && (
              <div className="evdt__featuredBadge">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 0L7.5 4.5L12 4.5L8.25 7.5L9.75 12L6 9L2.25 12L3.75 7.5L0 4.5L4.5 4.5L6 0Z" fill="currentColor"/>
                </svg>
                <span>Featured Event</span>
              </div>
            )}

            {pastEvent && (
              <div className="evdt__pastBadge">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M6 3v3l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Past Event</span>
              </div>
            )}
            
            <h1 className="evdt__title">{event.title}</h1>
            
            <div className="evdt__metaGrid">
              <div className="evdt__metaItem">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1C5.24 1 3 3.24 3 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="8" cy="6" r="2" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                <div>
                  <span className="evdt__metaLabel">Location</span>
                  <h3 className="evdt__metaValue">{event.location}</h3>
                </div>
              </div>
              <div className="evdt__metaDivider"></div>
              <div className="evdt__metaItem">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M2 7h12" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M5 1v3M11 1v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                <div>
                  <span className="evdt__metaLabel">Date</span>
                  <h3 className="evdt__metaValue">{formatShortDate(event.eventDate)}</h3>
                </div>
              </div>
            </div>
            
            {event.bookingLink && (
              pastEvent ? (
                <button className="evdt__bookButton evdt__bookButtonDisabled" disabled>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 8h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  Event Ended
                </button>
              ) : (
                <a
                  href={event.bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="evdt__bookButton"
                >
                  Book Your Spot
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              )
            )}
          </div>
        </div>

        {/* Content Container */}
        <div className="evdt__container">
          {/* About Section */}
          <div className="evdt__section">
            <div className="evdt__sectionHeader">
              <div className="evdt__sectionLine"></div>
              <span className="evdt__sectionLabel">ABOUT THE EVENT</span>
            </div>
            <h2 className="evdt__sectionTitle">What to expect</h2>
            <p className="evdt__description">{event.description}</p>
          </div>

          {/* Event Details Grid */}
          <div className="evdt__detailsGrid">
            <div className="evdt__detailCard">
              <div className="evdt__detailIcon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <rect x="2" y="4" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 8h16" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 2v4M14 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="evdt__detailContent">
                <span className="evdt__detailLabel">Full Date & Time</span>
                <p className="evdt__detailValue">{formatDate(event.eventDate)}</p>
                {pastEvent && (
                  <span className="evdt__pastIndicator">This event has ended</span>
                )}
              </div>
            </div>
            
            <div className="evdt__detailCard">
              <div className="evdt__detailIcon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2C6.69 2 4 4.69 4 8c0 4.5 6 11 6 11s6-6.5 6-11c0-3.31-2.69-6-6-6z" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="10" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div className="evdt__detailContent">
                <span className="evdt__detailLabel">Venue Location</span>
                <p className="evdt__detailValue">{event.location}</p>
              </div>
            </div>
            
            {event.bookingLink && !pastEvent && (
              <div className="evdt__detailCard evdt__detailCardHighlight">
                <div className="evdt__detailIcon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 4h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="10" cy="10" r="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M14 14l-2.5-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="evdt__detailContent">
                  <span className="evdt__detailLabel">Booking Status</span>
                  <p className="evdt__detailValue">
                    <a href={event.bookingLink} target="_blank" rel="noopener noreferrer" className="evdt__bookingLink">
                      Reserve Your Spot →
                    </a>
                  </p>
                </div>
              </div>
            )}

            {pastEvent && (
              <div className="evdt__detailCard evdt__detailCardPast">
                <div className="evdt__detailIcon evdt__detailIconPast">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M10 6v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="evdt__detailContent">
                  <span className="evdt__detailLabel">Event Status</span>
                  <p className="evdt__detailValue evdt__detailValuePast">Event Has Ended</p>
                </div>
              </div>
            )}
          </div>

          {/* Sponsor Section */}
          {(event.sponsorName || event.sponsorLogo) && (
            <div className="evdt__sponsorSection">
              <div className="evdt__sectionHeader">
                <div className="evdt__sectionLine"></div>
                <span className="evdt__sectionLabel">PROUDLY SUPPORTED BY</span>
              </div>
              <div className="evdt__sponsorContent">
                {event.sponsorLogo && (
                  <img
                    src={event.sponsorLogo}
                    alt={event.sponsorName || "Sponsor"}
                    className="evdt__sponsorLogo"
                  />
                )}
                {event.sponsorName && (
                  <h3 className="evdt__sponsorName">{event.sponsorName}</h3>
                )}
                <p className="evdt__sponsorText">Proudly supporting this event</p>
              </div>
            </div>
          )}

          {/* Location Map Section */}
          <div className="evdt__mapSection">
            <div className="evdt__sectionHeader">
              <div className="evdt__sectionLine"></div>
              <span className="evdt__sectionLabel">FIND YOUR WAY</span>
            </div>
            <h2 className="evdt__sectionTitle">Event Location</h2>
            <p className="evdt__mapAddress">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1C4.79 1 3 2.79 3 5c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4z" stroke="currentColor" strokeWidth="1.2"/>
                <circle cx="7" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
              {event.location}
            </p>
            <div className="evdt__mapWrapper">
              <iframe
                title="Event Location Map"
                className="evdt__map"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(event.location)}&z=15&output=embed`}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

          {/* CTA Section - Only show for upcoming events */}
          {event.bookingLink && !pastEvent && (
            <div className="evdt__ctaSection">
              <div className="evdt__ctaContent">
                <h3 className="evdt__ctaTitle">Ready to join us?</h3>
                <p className="evdt__ctaText">Secure your spot today for an unforgettable experience.</p>
                <a
                  href={event.bookingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="evdt__ctaButton"
                >
                  Book Your Spot Now
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          )}

          {/* Past Event Message */}
          {pastEvent && (
            <div className="evdt__ctaSection evdt__ctaSectionPast">
              <div className="evdt__ctaContent">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M20 12v8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <h3 className="evdt__ctaTitle">This Event Has Ended</h3>
                <p className="evdt__ctaText">Thank you for your interest. Check out our upcoming events for more exciting experiences.</p>
                <Link to="/events" className="evdt__ctaButton evdt__ctaButtonPast">
                  Explore Upcoming Events
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </PublicLayout>
  );
}

export default EventDetails;