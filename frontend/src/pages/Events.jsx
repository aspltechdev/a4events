// // import { useEffect, useState } from 'react';
// // import api from '../services/api';

// // function Events() {
// //   const [events, setEvents] = useState([]);

// //   useEffect(() => {
// //     fetchEvents();
// //   }, []);

// //   const fetchEvents = async () => {
// //     try {
// //       const { data } = await api.get('/events');
// //       setEvents(data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Events</h1>

// //       {events.map((event) => (
// //         <div key={event.id}>
// //             {event.bannerImage && (
// //   <img
// //     src={`http://localhost:5000${event.bannerImage}`}
// //     alt={event.title}
// //     width="250"
// //   />
// // )}
// //           <h3>{event.title}</h3>
// //           <p>{event.location}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default Events;


// // import { useEffect, useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import api from '../services/api';
// // import PublicLayout from '../layouts/PublicLayout';

// // function Events() {
// //   const [events, setEvents] = useState([]);

// //   useEffect(() => {
// //     fetchEvents();
// //   }, []);

// //   const fetchEvents = async () => {
// //     const { data } = await api.get('/events');
// //     setEvents(data);
// //   };

// //   return (
// //     <PublicLayout>
// //     <div style={{ padding: '20px' }}>
// //       <h1>Events</h1>

// //       <div
// //         style={{
// //           display: 'grid',
// //           gridTemplateColumns:
// //             'repeat(auto-fill, minmax(250px, 1fr))',
// //           gap: '20px'
// //         }}
// //       >
// //         {events.map((event) => (
// //           <div
// //             key={event.id}
// //             style={{
// //               border: '1px solid #ddd',
// //               borderRadius: '10px',
// //               padding: '15px'
// //             }}
// //           >
// //             {event.bannerImage && (
// //   <img
// //     src={`http://localhost:5000${event.bannerImage}`}
// //     alt={event.title}
// //     width="250"
// //   />
// // )}
// //             <h3>{event.title}</h3>

// //             <p>{event.location}</p>

// //             <Link to={`/events/${event.id}`}>
// //               View Details
// //             </Link>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //     </PublicLayout>
// //   );
// // }

// // export default Events;


// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import api from "../services/api";
// // import PublicLayout from "../layouts/PublicLayout";
// // import "./Events.css";

// // function Events() {
// //   const [events, setEvents] = useState([]);

// //   useEffect(() => {
// //     fetchEvents();
// //   }, []);

// //   const fetchEvents = async () => {
// //     try {
// //       const { data } = await api.get("/events");
// //       setEvents(data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <PublicLayout>

// //       <section className="a4-events-page">

// //         <div className="a4-events-page-header">

// //           <span className="a4-events-page-tag">
// //             DISCOVER EVENTS
// //           </span>

// //           <h1 className="a4-events-page-title">
// //             Experiences Worth
// //             Remembering
// //           </h1>

// //           <p className="a4-events-page-description">
// //             Explore concerts, festivals, workshops,
// //             conferences and unforgettable experiences
// //             happening around you.
// //           </p>

// //         </div>

// //         <div className="a4-events-page-grid">

// //           {events.map((event) => (
// //             <Link
// //               key={event.id}
// //               to={`/events/${event.id}`}
// //               className="a4-events-page-card"
// //             >

// //               <div className="a4-events-page-image-wrapper">

// //                 {event.bannerImage && (
// //                   <img
// //                     src={`http://localhost:5000${event.bannerImage}`}
// //                     alt={event.title}
// //                     className="a4-events-page-image"
// //                   />
// //                 )}

// //                 <div className="a4-events-page-overlay"></div>

// //               </div>

// //               <div className="a4-events-page-content">

// //                 <span className="a4-events-page-badge">
// //                   Featured Event
// //                 </span>

// //                 <h3 className="a4-events-page-event-title">
// //                   {event.title}
// //                 </h3>

// //                 <div className="a4-events-page-location">
// //                   {event.location}
// //                 </div>

// //                 <button className="a4-events-page-btn">
// //                   View Details
// //                 </button>

// //               </div>

// //             </Link>
// //           ))}

// //         </div>

// //       </section>

// //     </PublicLayout>
// //   );
// // }

// // export default Events;




// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import api from "../services/api";
// // import PublicLayout from "../layouts/PublicLayout";
// // import "./Events.css";

// // function Events() {
// //   const [events, setEvents] = useState([]);

// //   useEffect(() => {
// //     fetchEvents();
// //   }, []);

// //   const fetchEvents = async () => {
// //     try {
// //       const { data } = await api.get("/events");
// //       setEvents(data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const today = new Date();

// //   const featuredEvents = events.filter(
// //     (event) => event.featured
// //   );

// //   const upcomingEvents = events.filter(
// //     (event) =>
// //       !event.featured &&
// //       new Date(event.eventDate) >= today
// //   );

// //   const pastEvents = events.filter(
// //     (event) =>
// //       new Date(event.eventDate) < today
// //   );

// //   const renderEvents = (eventList) =>
// //     eventList.map((event) => (
// //       <Link
// //         key={event.id}
// //         to={`/events/${event.id}`}
// //         className="a4-events-page-card"
// //       >
// //         <div className="a4-events-page-image-wrapper">
// //           {event.bannerImage && (
// //             <img
// //               src={`http://localhost:5000${event.bannerImage}`}
// //               alt={event.title}
// //               className="a4-events-page-image"
// //             />
// //           )}

// //           <div className="a4-events-page-overlay"></div>
// //         </div>

// //         <div className="a4-events-page-content">
// //           {event.featured && (
// //             <span className="a4-events-page-badge">
// //               ⭐ Featured Event
// //             </span>
// //           )}

// //           <h3 className="a4-events-page-event-title">
// //             {event.title}
// //           </h3>

// //           <div className="a4-events-page-location">
// //             📍 {event.location}
// //           </div>

// //           <div className="a4-events-page-date">
// //             📅{" "}
// //             {new Date(
// //               event.eventDate
// //             ).toLocaleDateString("en-US", {
// //               day: "numeric",
// //               month: "long",
// //               year: "numeric",
// //             })}
// //           </div>

// //           <button className="a4-events-page-btn">
// //             View Details
// //           </button>
// //         </div>
// //       </Link>
// //     ));

// //   return (
// //     <PublicLayout>
// //       <section className="a4-events-page">
// //         <div className="a4-events-page-header">
// //           <span className="a4-events-page-tag">
// //             DISCOVER EVENTS
// //           </span>

// //           <h1 className="a4-events-page-title">
// //             Experiences Worth
// //             Remembering
// //           </h1>

// //           <p className="a4-events-page-description">
// //             Explore concerts,
// //             festivals, workshops,
// //             conferences and
// //             unforgettable experiences
// //             happening around you.
// //           </p>
// //         </div>

// //         {/* FEATURED EVENTS */}

// //         {featuredEvents.length > 0 && (
// //           <>
// //             <div className="a4-events-section-header">
// //               <h2>
// //                 ⭐ Featured Events
// //               </h2>

// //               <p>
// //                 Handpicked premium
// //                 experiences you
// //                 shouldn't miss.
// //               </p>
// //             </div>

// //             <div className="a4-events-page-grid">
// //               {renderEvents(
// //                 featuredEvents
// //               )}
// //             </div>
// //           </>
// //         )}

// //         {/* UPCOMING EVENTS */}

// //         {upcomingEvents.length > 0 && (
// //           <>
// //             <div className="a4-events-section-header">
// //               <h2>
// //                 🚀 Upcoming Events
// //               </h2>

// //               <p>
// //                 Discover exciting
// //                 events coming soon.
// //               </p>
// //             </div>

// //             <div className="a4-events-page-grid">
// //               {renderEvents(
// //                 upcomingEvents
// //               )}
// //             </div>
// //           </>
// //         )}

// //         {/* PAST EVENTS */}

// //         {pastEvents.length > 0 && (
// //           <>
// //             <div className="a4-events-section-header">
// //               <h2>
// //                 📅 Past Events
// //               </h2>

// //               <p>
// //                 Browse our previous
// //                 successful events.
// //               </p>
// //             </div>

// //             <div className="a4-events-page-grid">
// //               {renderEvents(
// //                 pastEvents
// //               )}
// //             </div>
// //           </>
// //         )}

// //         {/* NO EVENTS */}

// //         {events.length === 0 && (
// //           <div className="a4-no-events">
// //             <h3>
// //               No Events Available
// //             </h3>

// //             <p>
// //               Check back later for
// //               upcoming events.
// //             </p>
// //           </div>
// //         )}
// //       </section>
// //     </PublicLayout>
// //   );
// // }

// // export default Events;




// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import api from "../services/api";
// // import PublicLayout from "../layouts/PublicLayout";
// // import "./Events.css";

// // function Events() {
// //   const [events, setEvents] = useState([]);

// //   useEffect(() => {
// //     fetchEvents();
// //   }, []);

// //   const fetchEvents = async () => {
// //     try {
// //       const { data } = await api.get("/events");
// //       setEvents(data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const today = new Date();

// //   const featuredEvents = events.filter((event) => event.featured);
  
// //   const upcomingEvents = events.filter(
// //     (event) => !event.featured && new Date(event.eventDate) >= today
// //   );
  
// //   const pastEvents = events.filter(
// //     (event) => new Date(event.eventDate) < today
// //   );

// //   const formatDate = (dateString) => {
// //     const date = new Date(dateString);
// //     return date.toLocaleDateString("en-US", {
// //       day: "numeric",
// //       month: "long",
// //       year: "numeric",
// //     });
// //   };

// //   const formatMonth = (dateString) => {
// //     const date = new Date(dateString);
// //     return date.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
// //   };

// //   const formatDay = (dateString) => {
// //     const date = new Date(dateString);
// //     return date.getDate();
// //   };

// //   const renderEventSection = (title, subtitle, eventList, type) => {
// //     if (eventList.length === 0) return null;

// //     return (
// //       <div className="ev__section">
// //         <div className="ev__sectionHeader">
// //           <div className="ev__sectionMarker">
// //             <span className="ev__sectionLine"></span>
// //             <span className="ev__sectionLabel">{title}</span>
// //           </div>
// //           <h2 className="ev__sectionTitle">{subtitle}</h2>
// //         </div>

// //         <div className="ev__grid">
// //           {eventList.map((event) => (
// //             <Link
// //               key={event.id}
// //               to={`/events/${event.id}`}
// //               className="ev__cardLink"
// //             >
// //               <div className="ev__card">
// //                 <div className="ev__cardImage">
// //                   {event.bannerImage && (
// //                     <img
// //                       src={`http://localhost:5000${event.bannerImage}`}
// //                       alt={event.title}
// //                       className="ev__image"
// //                     />
// //                   )}
// //                   <div className="ev__imageOverlay"></div>
                  
// //                   {/* Date Card */}
// //                   <div className="ev__dateCard">
// //                     <span className="ev__dateMonth">{formatMonth(event.eventDate)}</span>
// //                     <span className="ev__dateDay">{formatDay(event.eventDate)}</span>
// //                   </div>
// //                 </div>

// //                 <div className="ev__cardContent">
// //                   <h3 className="ev__title">{event.title}</h3>
                  
// //                   <div className="ev__location">
// //                     {event.location}
// //                   </div>
                  
// //                   <p className="ev__description">
// //                     {event.description || "Join us for an unforgettable experience with amazing performances and networking opportunities."}
// //                   </p>
                  
// //                   <div className="ev__cardFooter">
// //                     <span className="ev__dateFull">{formatDate(event.eventDate)}</span>
// //                     <span className="ev__linkArrow">View Event →</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </Link>
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <PublicLayout>
// //       <section className="ev__wrapper">
// //         <div className="ev__bgSubtle"></div>
// //         <div className="ev__bgGradient"></div>

// //         <div className="ev__container">
// //           {/* Hero Header */}
// //           <div className="ev__hero">
// //             <div className="ev__heroBadge">
// //               <span className="ev__heroLine"></span>
// //               <span className="ev__heroText">DISCOVER EVENTS</span>
// //             </div>
            
// //             <h1 className="ev__heroTitle">
// //               Experiences worth
// //               <br />
// //               <span className="ev__heroAccent">remembering forever</span>
// //             </h1>
            
// //             <p className="ev__heroDescription">
// //               Explore concerts, festivals, workshops, conferences, and unforgettable 
// //               experiences happening around you. Book your spot today.
// //             </p>
// //           </div>

// //           {/* Featured Events Section */}
// //           {renderEventSection(
// //             "FEATURED",
// //             "Handpicked premium experiences",
// //             featuredEvents,
// //             "featured"
// //           )}

// //           {/* Upcoming Events Section */}
// //           {renderEventSection(
// //             "UPCOMING",
// //             "Don't miss these exciting events",
// //             upcomingEvents,
// //             "upcoming"
// //           )}

// //           {/* Past Events Section */}
// //           {renderEventSection(
// //             "PAST EVENTS",
// //             "Memorable moments from our journey",
// //             pastEvents,
// //             "past"
// //           )}

// //           {/* Empty State */}
// //           {events.length === 0 && (
// //             <div className="ev__empty">
// //               <div className="ev__emptyContent">
// //                 <h3>No Events Available</h3>
// //                 <p>Check back later for upcoming events.</p>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </section>
// //     </PublicLayout>
// //   );
// // }

// // export default Events;


// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import api from "../services/api";
// // import PublicLayout from "../layouts/PublicLayout";
// // import "./Events.css";

// // function Events() {
// //   const [events, setEvents] = useState([]);

// //   useEffect(() => {
// //     fetchEvents();
// //   }, []);

// //   const fetchEvents = async () => {
// //     try {
// //       const { data } = await api.get("/events");
// //       setEvents(data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const today = new Date();

// //   const featuredEvents = events.filter((event) => event.featured);
  
// //   const upcomingEvents = events.filter(
// //     (event) => !event.featured && new Date(event.eventDate) >= today
// //   );
  
// //   const pastEvents = events.filter(
// //     (event) => new Date(event.eventDate) < today
// //   );

// //   const formatDate = (dateString) => {
// //     const date = new Date(dateString);
// //     return date.toLocaleDateString("en-US", {
// //       day: "numeric",
// //       month: "long",
// //       year: "numeric",
// //     });
// //   };

// //   const formatMonth = (dateString) => {
// //     const date = new Date(dateString);
// //     return date.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
// //   };

// //   const formatDay = (dateString) => {
// //     const date = new Date(dateString);
// //     return date.getDate();
// //   };

// //   const renderEventSection = (title, subtitle, eventList, type) => {
// //     if (eventList.length === 0) return null;

// //     return (
// //       <div className="ev__section">
// //         <div className="ev__sectionHeader">
// //           <div className="ev__sectionMarker">
// //             <span className="ev__sectionLine"></span>
// //             <span className="ev__sectionLabel">{title}</span>
// //           </div>
// //           <h2 className="ev__sectionTitle">{subtitle}</h2>
// //         </div>

// //         <div className="ev__grid">
// //           {eventList.map((event) => (
// //             <Link
// //               key={event.id}
// //               to={`/events/${event.id}`}
// //               className="ev__cardLink"
// //             >
// //               <div className="ev__card">
// //                 <div className="ev__cardImage">
// //                   {event.bannerImage && (
// //                     <img
// //                       src={`http://localhost:5000${event.bannerImage}`}
// //                       alt={event.title}
// //                       className="ev__image"
// //                     />
// //                   )}
// //                   <div className="ev__imageOverlay"></div>
                  
// //                   {/* Date Card */}
// //                   <div className="ev__dateCard">
// //                     <span className="ev__dateMonth">{formatMonth(event.eventDate)}</span>
// //                     <span className="ev__dateDay">{formatDay(event.eventDate)}</span>
// //                   </div>
// //                 </div>

// //                 <div className="ev__cardContent">
// //                   <h3 className="ev__title">{event.title}</h3>
                  
// //                   <div className="ev__location">
// //                     {event.location}
// //                   </div>
                  
// //                   <p className="ev__description">
// //                     {event.description || "Join us for an unforgettable experience with amazing performances and networking opportunities."}
// //                   </p>
                  
// //                   <div className="ev__cardFooter">
// //                     <span className="ev__dateFull">{formatDate(event.eventDate)}</span>
// //                     <span className="ev__linkArrow">View Event →</span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </Link>
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <PublicLayout>
// //       <section className="ev__wrapper">
// //         <div className="ev__bgSubtle"></div>
// //         <div className="ev__bgGradient"></div>

// //         <div className="ev__container">
// //           {/* Hero Header */}
// //           <div className="ev__hero">
// //             <div className="ev__heroBadge">
// //               <span className="ev__heroLine"></span>
// //               <span className="ev__heroText">DISCOVER EVENTS</span>
// //             </div>
            
// //             <h1 className="ev__heroTitle">
// //               Experiences worth
// //               <br />
// //               <span className="ev__heroAccent">remembering forever</span>
// //             </h1>
            
// //             <p className="ev__heroDescription">
// //               Explore concerts, festivals, workshops, conferences, and unforgettable 
// //               experiences happening around you. Book your spot today.
// //             </p>
// //           </div>

// //           {/* Featured Events Section */}
// //           {renderEventSection(
// //             "FEATURED",
// //             "Handpicked premium experiences",
// //             featuredEvents,
// //             "featured"
// //           )}

// //           {/* Upcoming Events Section */}
// //           {renderEventSection(
// //             "UPCOMING",
// //             "Don't miss these exciting events",
// //             upcomingEvents,
// //             "upcoming"
// //           )}

// //           {/* Past Events Section */}
// //           {renderEventSection(
// //             "PAST EVENTS",
// //             "Memorable moments from our journey",
// //             pastEvents,
// //             "past"
// //           )}

// //           {/* Empty State */}
// //           {events.length === 0 && (
// //             <div className="ev__empty">
// //               <div className="ev__emptyContent">
// //                 <h3>No Events Available</h3>
// //                 <p>Check back later for upcoming events.</p>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </section>
// //     </PublicLayout>
// //   );
// // }

// // export default Events;


// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import api from "../services/api";
// // import PublicLayout from "../layouts/PublicLayout";
// // import "./Events.css";

// // function Events() {
// //   const [events, setEvents] = useState([]);

// //   useEffect(() => {
// //     fetchEvents();
// //   }, []);

// //   const fetchEvents = async () => {
// //     try {
// //       const { data } = await api.get("/events");
// //       setEvents(data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const today = new Date();

// //   const featuredEvents = events.filter((event) => event.featured);
  
// //   const upcomingEvents = events.filter(
// //     (event) => !event.featured && new Date(event.eventDate) >= today
// //   );
  
// //   const pastEvents = events.filter(
// //     (event) => new Date(event.eventDate) < today
// //   );

// //   const formatDate = (dateString) => {
// //     const date = new Date(dateString);
// //     return date.toLocaleDateString("en-US", {
// //       day: "numeric",
// //       month: "long",
// //       year: "numeric",
// //     });
// //   };

// //   const formatMonth = (dateString) => {
// //     const date = new Date(dateString);
// //     return date.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
// //   };

// //   const formatDay = (dateString) => {
// //     const date = new Date(dateString);
// //     return date.getDate();
// //   };

// //   const renderEventSection = (title, subtitle, eventList, type) => {
// //     if (eventList.length === 0) return null;

// //     return (
// //       <div className="ev__section">
// //         <div className="ev__sectionHeader">
// //           <div className="ev__sectionMarker">
// //             <span className="ev__sectionLine"></span>
// //             <span className="ev__sectionLabel">{title}</span>
// //           </div>
// //           <h2 className="ev__sectionTitle">{subtitle}</h2>
// //         </div>

// //         <div className="ev__grid">
// //           {eventList.map((event) => (
// //             <Link
// //               key={event.id}
// //               to={`/events/${event.id}`}
// //               className="ev__cardLink"
// //             >
// //               <div className="ev__card">
// //                 <div className="ev__cardImage">
// //                   {event.bannerImage && (
// //                     <img
// //                       src={`https://a4agroup.eu${event.bannerImage}`}
// //                       alt={event.title}
// //                       className="ev__image"
// //                     />
// //                   )}
// //                   <div className="ev__imageOverlay"></div>
                  
// //                   {/* Date Card */}
// //                   <div className="ev__dateCard">
// //                     <span className="ev__dateMonth">{formatMonth(event.eventDate)}</span>
// //                     <span className="ev__dateDay">{formatDay(event.eventDate)}</span>
// //                   </div>

// //                   {/* Featured Badge */}
// //                   {event.featured && (
// //                     <div className="ev__featuredBadge">
// //                       <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
// //                         <path d="M5 0L6.5 3.5L10 4L7.5 6.5L8.5 10L5 8L1.5 10L2.5 6.5L0 4L3.5 3.5L5 0Z" fill="currentColor"/>
// //                       </svg>
// //                       <span>Featured</span>
// //                     </div>
// //                   )}
// //                 </div>

// //                 <div className="ev__cardContent">
// //                   <h3 className="ev__title">{event.title}</h3>
                  
// //                   <div className="ev__location">
// //                     <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
// //                       <path d="M7 1C4.79 1 3 2.79 3 5C3 8 7 13 7 13C7 13 11 8 11 5C11 2.79 9.21 1 7 1Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
// //                       <circle cx="7" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
// //                     </svg>
// //                     {event.location}
// //                   </div>
                  
// //                   <p className="ev__description">
// //                     {event.description || "Join us for an unforgettable experience with amazing performances and networking opportunities."}
// //                   </p>
                  
// //                   <div className="ev__cardFooter">
// //                     <span className="ev__dateFull">
// //                       <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
// //                         <rect x="1.5" y="2.5" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
// //                         <path d="M1.5 6h11" stroke="currentColor" strokeWidth="1.2"/>
// //                         <path d="M4.5 1v3M9.5 1v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
// //                       </svg>
// //                       {formatDate(event.eventDate)}
// //                     </span>
// //                     <span className="ev__linkArrow">
// //                       View Event
// //                       <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// //                         <path d="M3 7h8M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
// //                       </svg>
// //                     </span>
// //                   </div>
// //                 </div>
// //               </div>
// //             </Link>
// //           ))}
// //         </div>
// //       </div>
// //     );
// //   };

// //   return (
// //     <PublicLayout>
// //       <section className="ev__wrapper">
// //         <div className="ev__bgSubtle"></div>
// //         <div className="ev__bgGradient"></div>

// //         <div className="ev__container">
// //           {/* Hero Header */}
// //           <div className="ev__hero">
// //             <div className="ev__heroBadge">
// //               <span className="ev__heroLine"></span>
// //               <span className="ev__heroText">DISCOVER EVENTS</span>
// //             </div>
            
// //             <h1 className="ev__heroTitle">
// //               Experiences worth
// //               <br />
// //               <span className="ev__heroAccent">remembering forever</span>
// //             </h1>
            
// //             <p className="ev__heroDescription">
// //               Explore concerts, festivals, workshops, conferences, and unforgettable 
// //               experiences happening around you. Book your spot today.
// //             </p>
// //           </div>

// //           {/* Featured Events Section */}
// //           {renderEventSection(
// //             "FEATURED",
// //             "Handpicked premium experiences",
// //             featuredEvents,
// //             "featured"
// //           )}

// //           {/* Upcoming Events Section */}
// //           {renderEventSection(
// //             "UPCOMING",
// //             "Don't miss these exciting events",
// //             upcomingEvents,
// //             "upcoming"
// //           )}

// //           {/* Past Events Section */}
// //           {renderEventSection(
// //             "PAST EVENTS",
// //             "Memorable moments from our journey",
// //             pastEvents,
// //             "past"
// //           )}

// //           {/* Empty State */}
// //           {events.length === 0 && (
// //             <div className="ev__empty">
// //               <div className="ev__emptyContent">
// //                 <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
// //                   <rect x="6" y="8" width="36" height="34" rx="4" stroke="currentColor" strokeWidth="1.5"/>
// //                   <path d="M6 18h36" stroke="currentColor" strokeWidth="1.5"/>
// //                   <path d="M16 4v8M32 4v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
// //                   <circle cx="18" cy="26" r="2" fill="currentColor"/>
// //                   <circle cx="26" cy="26" r="2" fill="currentColor"/>
// //                   <circle cx="22" cy="32" r="2" fill="currentColor"/>
// //                 </svg>
// //                 <h3>No Events Available</h3>
// //                 <p>Check back later for upcoming events.</p>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </section>
// //     </PublicLayout>
// //   );
// // }

// // export default Events;

// // import { useEffect, useState, useRef } from "react";
// // import { Link } from "react-router-dom";
// // import api from "../services/api";
// // import PublicLayout from "../layouts/PublicLayout";
// // import "./Events.css";

// // function Events() {
// //   const [events, setEvents] = useState([]);
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [isPaused, setIsPaused] = useState(false);
// //   const [activeTab, setActiveTab] = useState("upcoming");
// //   const sectionRef = useRef(null);

// //   useEffect(() => {
// //     fetchEvents();
// //   }, []);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) setIsVisible(true);
// //       },
// //       { threshold: 0.05 }
// //     );

// //     if (sectionRef.current) observer.observe(sectionRef.current);
// //     return () => observer.disconnect();
// //   }, [events]);

// //   const fetchEvents = async () => {
// //     try {
// //       const { data } = await api.get("/events");
// //       setEvents(data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const today = new Date();

// //   const featuredEvents = events.filter((event) => event.featured);
// //   const upcomingEvents = events.filter(
// //     (event) => !event.featured && new Date(event.eventDate) >= today
// //   );
// //   const pastEvents = events.filter(
// //     (event) => new Date(event.eventDate) < today
// //   );

// //   const formatDate = (dateString) => {
// //     const date = new Date(dateString);
// //     return date.toLocaleDateString("en-US", {
// //       day: "numeric",
// //       month: "long",
// //       year: "numeric",
// //     });
// //   };

// //   const formatTime = (dateString) => {
// //     const date = new Date(dateString);
// //     return date.toLocaleTimeString("en-US", {
// //       hour: "2-digit",
// //       minute: "2-digit",
// //       hour12: true,
// //     });
// //   };

// //   const formatMonth = (dateString) => {
// //     const date = new Date(dateString);
// //     return date.toLocaleDateString("en-US", { month: "short" });
// //   };

// //   const formatDay = (dateString) => {
// //     const date = new Date(dateString);
// //     return date.getDate();
// //   };

// //   const marqueeEvents = [...featuredEvents, ...featuredEvents];

// //   const renderEventCard = (event, index, isLarge = false) => (
// //     <Link
// //       key={`${event.id}-${index}`}
// //       to={`/events/${event.id}`}
// //       className={`ev-card-link ${isLarge ? "ev-card-link-large" : ""}`}
// //       style={{ "--card-index": index }}
// //     >
// //       <div className={`ev-card ${isLarge ? "ev-card-large" : ""}`}>
// //         <div className="ev-card-shine" aria-hidden="true" />
// //         <div className="ev-card-media">
// //           <div className="ev-card-image-wrap">
// //             {event.bannerImage && (
// //               <img
// //                 src={`https://a4agroup.eu${event.bannerImage}`}
// //                 alt={event.title}
// //                 className="ev-card-image"
// //                 loading="lazy"
// //               />
// //             )}
// //             <div className="ev-card-image-veil" />
// //           </div>
// //           <div className="ev-card-date">
// //             <span className="ev-date-month">{formatMonth(event.eventDate)}</span>
// //             <span className="ev-date-day">{formatDay(event.eventDate)}</span>
// //           </div>
// //           {event.featured && (
// //             <div className="ev-card-featured">
// //               <span>Featured</span>
// //             </div>
// //           )}
// //         </div>
// //         <div className="ev-card-details">
// //           <div className="ev-card-meta">
// //             <span className="ev-meta-item">
// //               <span className="ev-meta-dot" />
// //               {event.location || "Venue TBA"}
// //             </span>
// //             <span className="ev-meta-divider" />
// //             <span className="ev-meta-item">
// //               <span className="ev-meta-dot" />
// //               {formatDate(event.eventDate)}
// //             </span>
// //             <span className="ev-meta-divider" />
// //             <span className="ev-meta-item">
// //               <span className="ev-meta-dot" />
// //               {formatTime(event.eventDate)}
// //             </span>
// //           </div>
// //           <h3 className="ev-card-title">{event.title}</h3>
// //           <p className="ev-card-description">
// //             {event.description || "Join us for an unforgettable experience with amazing performances and networking opportunities."}
// //           </p>
// //           <div className="ev-card-action">
// //             <span>View Event Details</span>
// //             <span className="ev-action-arrow">→</span>
// //           </div>
// //         </div>
// //         <div className="ev-card-edge" aria-hidden="true" />
// //       </div>
// //     </Link>
// //   );

// //   const activeEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;

// //   return (
// //     <PublicLayout>
// //       <section
// //         ref={sectionRef}
// //         className={`ev-premium ${isVisible ? "ev-visible" : ""}`}
// //       >
// //         {/* Atmospheric Depth */}
// //         <div className="ev-atmosphere" aria-hidden="true">
// //           <div className="ev-glow ev-glow--teal" />
// //           <div className="ev-glow ev-glow--blue" />
// //           <div className="ev-glow ev-glow--emerald" />
// //           <div className="ev-mesh" />
// //           <div className="ev-grain" />
// //           <div className="ev-vignette" />
// //         </div>

// //         {/* Floating Orbs */}
// //         <div className="ev-orbs" aria-hidden="true">
// //           <div className="ev-orb ev-orb--primary" />
// //           <div className="ev-orb ev-orb--secondary" />
// //           <div className="ev-orb ev-orb--tertiary" />
// //         </div>

// //         <div className="ev-container">
// //           {/* Hero Header — Centered */}
// //           <div className="ev-hero">
// //             <div className="ev-hero-content">
// //               <div className="ev-whisper">
// //                 <span className="ev-whisper-line" />
// //                 <span>Discover Events</span>
// //                 <span className="ev-whisper-line" />
// //               </div>
// //               <h1 className="ev-headline">
// //                 <span className="ev-headline-line">Experiences worth</span>
// //                 <span className="ev-headline-line ev-headline-radiance">
// //                   remembering forever
// //                 </span>
// //               </h1>
// //               <p className="ev-prose">
// //                 Explore concerts, festivals, workshops, and unforgettable 
// //                 experiences happening around you. Book your spot today.
// //               </p>
// //             </div>
// //           </div>

// //           {/* Featured Events Marquee */}
// //           {featuredEvents.length > 0 && (
// //             <div className="ev-featured-section">
// //               <div className="ev-featured-header">
// //                 <span className="ev-featured-label">Featured Events</span>
// //                 <p className="ev-featured-subtitle">
// //                   Handpicked premium experiences curated just for you
// //                 </p>
// //               </div>
// //               <div
// //                 className="ev-marquee-stage"
// //                 onMouseEnter={() => setIsPaused(true)}
// //                 onMouseLeave={() => setIsPaused(false)}
// //               >
// //                 <div className={`ev-marquee-track ${isPaused ? "ev-marquee-paused" : ""}`}>
// //                   {marqueeEvents.map((event, index) => renderEventCard(event, index, true))}
// //                 </div>
// //                 <div className="ev-marquee-fade ev-marquee-fade-left" />
// //                 <div className="ev-marquee-fade ev-marquee-fade-right" />
// //               </div>
// //             </div>
// //           )}

// //           {/* Toggle Section */}
// //           <div className="ev-toggle-section">
// //             <div className="ev-toggle-header">
// //               <div className="ev-toggle-tabs">
// //                 <button
// //                   className={`ev-toggle-tab ${activeTab === "upcoming" ? "ev-toggle-active" : ""}`}
// //                   onClick={() => setActiveTab("upcoming")}
// //                 >
// //                   <span>Upcoming Events</span>
// //                   <span className="ev-toggle-count">{upcomingEvents.length}</span>
// //                 </button>
// //                 <button
// //                   className={`ev-toggle-tab ${activeTab === "past" ? "ev-toggle-active" : ""}`}
// //                   onClick={() => setActiveTab("past")}
// //                 >
// //                   <span>Past Events</span>
// //                   <span className="ev-toggle-count">{pastEvents.length}</span>
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Events Grid */}
// //             <div className="ev-grid">
// //               {activeEvents.length > 0 ? (
// //                 activeEvents.map((event, index) => renderEventCard(event, index))
// //               ) : (
// //                 <div className="ev-empty-grid">
// //                   <div className="ev-empty-content">
// //                     <div className="ev-empty-thread" />
// //                     <h3 className="ev-empty-title">
// //                       {activeTab === "upcoming" ? "No upcoming events" : "No past events"}
// //                     </h3>
// //                     <p className="ev-empty-text">
// //                       {activeTab === "upcoming"
// //                         ? "New experiences are being curated. Check back soon for something extraordinary."
// //                         : "Memorable moments from past events will appear here."}
// //                     </p>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           </div>

// //           {/* Global Empty State */}
// //           {events.length === 0 && (
// //             <div className="ev-empty">
// //               <div className="ev-empty-content">
// //                 <div className="ev-empty-thread" />
// //                 <h3 className="ev-empty-title">No Events Available</h3>
// //                 <p className="ev-empty-text">
// //                   Check back later for upcoming events.
// //                 </p>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </section>
// //     </PublicLayout>
// //   );
// // }

// // export default Events;


// // import { useEffect, useState, useRef } from "react";
// // import { Link } from "react-router-dom";
// // import api from "../services/api";
// // import PublicLayout from "../layouts/PublicLayout";
// // import "./Events.css";

// // function Events() {
// //   const [events, setEvents] = useState([]);
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [isPaused, setIsPaused] = useState(false);
// //   const [activeTab, setActiveTab] = useState("upcoming");
// //   const sectionRef = useRef(null);

// //   useEffect(() => {
// //     fetchEvents();
// //   }, []);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) setIsVisible(true);
// //       },
// //       { threshold: 0.05 }
// //     );

// //     if (sectionRef.current) observer.observe(sectionRef.current);
// //     return () => observer.disconnect();
// //   }, [events]);

// //   const fetchEvents = async () => {
// //     try {
// //       const { data } = await api.get("/events");
// //       setEvents(data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const today = new Date();
// //   today.setHours(0, 0, 0, 0); // Reset time to start of day for accurate comparison

// //   // Featured events - regardless of date
// //   const featuredEvents = events.filter((event) => event.featured);

// //   // Upcoming events - ALL events (including featured) with date >= today
// //   const upcomingEvents = events.filter((event) => {
// //     const eventDate = new Date(event.eventDate);
// //     eventDate.setHours(0, 0, 0, 0);
// //     return eventDate >= today;
// //   });

// //   // Past events - ALL events with date < today
// //   const pastEvents = events.filter((event) => {
// //     if (!event.eventDate) return false;
// //     const eventDate = new Date(event.eventDate);
// //     eventDate.setHours(0, 0, 0, 0);
// //     return eventDate < today;
// //   });

// //   const formatDate = (dateString) => {
// //     if (!dateString) return "Date TBA";
// //     const date = new Date(dateString);
// //     return date.toLocaleDateString("en-US", {
// //       day: "numeric",
// //       month: "long",
// //       year: "numeric",
// //     });
// //   };

// //   const formatTime = (dateString) => {
// //     if (!dateString) return "Time TBA";
// //     const date = new Date(dateString);
// //     return date.toLocaleTimeString("en-US", {
// //       hour: "2-digit",
// //       minute: "2-digit",
// //       hour12: true,
// //     });
// //   };

// //   const formatMonth = (dateString) => {
// //     if (!dateString) return "TBA";
// //     const date = new Date(dateString);
// //     return date.toLocaleDateString("en-US", { month: "short" });
// //   };

// //   const formatDay = (dateString) => {
// //     if (!dateString) return "??";
// //     const date = new Date(dateString);
// //     return date.getDate();
// //   };

// //   // Duplicate featured events for marquee (only if there are featured events)
// //   const marqueeEvents = featuredEvents.length > 0 
// //     ? [...featuredEvents, ...featuredEvents] 
// //     : [];

// //   const renderEventCard = (event, index, isLarge = false) => (
// //     <Link
// //       key={`${event.id}-${isLarge ? 'featured-' : ''}${index}`}
// //       to={`/events/${event.id}`}
// //       className={`ev-card-link ${isLarge ? "ev-card-link-large" : ""}`}
// //       style={{ "--card-index": index }}
// //     >
// //       <div className={`ev-card ${isLarge ? "ev-card-large" : ""}`}>
// //         <div className="ev-card-shine" aria-hidden="true" />
// //         <div className="ev-card-media">
// //           <div className="ev-card-image-wrap">
// //             {event.bannerImage && (
// //               <img
// //                 src={`https://a4agroup.eu${event.bannerImage}`}
// //                 alt={event.title}
// //                 className="ev-card-image"
// //                 loading="lazy"
// //               />
// //             )}
// //             <div className="ev-card-image-veil" />
// //           </div>
// //           <div className="ev-card-date">
// //             <span className="ev-date-month">{formatMonth(event.eventDate)}</span>
// //             <span className="ev-date-day">{formatDay(event.eventDate)}</span>
// //           </div>
// //           {event.featured && (
// //             <div className="ev-card-featured">
// //               <span>Featured</span>
// //             </div>
// //           )}
// //         </div>
// //         <div className="ev-card-details">
// //           <div className="ev-card-meta">
// //             <span className="ev-meta-item">
// //               <span className="ev-meta-dot" />
// //               {event.location || "Venue TBA"}
// //             </span>
// //             <span className="ev-meta-divider" />
// //             <span className="ev-meta-item">
// //               <span className="ev-meta-dot" />
// //               {formatDate(event.eventDate)}
// //             </span>
// //             <span className="ev-meta-divider" />
// //             <span className="ev-meta-item">
// //               <span className="ev-meta-dot" />
// //               {formatTime(event.eventDate)}
// //             </span>
// //           </div>
// //           <h3 className="ev-card-title">{event.title}</h3>
// //           <p className="ev-card-description">
// //             {event.description || "Join us for an unforgettable experience with amazing performances and networking opportunities."}
// //           </p>
// //           <div className="ev-card-action">
// //             <span>View Event Details</span>
// //             <span className="ev-action-arrow">→</span>
// //           </div>
// //         </div>
// //         <div className="ev-card-edge" aria-hidden="true" />
// //       </div>
// //     </Link>
// //   );

// //   // Determine which events to show in the grid based on active tab
// //   const activeEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;

// //   return (
// //     <PublicLayout>
// //       <section
// //         ref={sectionRef}
// //         className={`ev-premium ${isVisible ? "ev-visible" : ""}`}
// //       >
// //         {/* Atmospheric Depth */}
// //         <div className="ev-atmosphere" aria-hidden="true">
// //           <div className="ev-glow ev-glow--teal" />
// //           <div className="ev-glow ev-glow--blue" />
// //           <div className="ev-glow ev-glow--emerald" />
// //           <div className="ev-mesh" />
// //           <div className="ev-grain" />
// //           <div className="ev-vignette" />
// //         </div>

// //         {/* Floating Orbs */}
// //         <div className="ev-orbs" aria-hidden="true">
// //           <div className="ev-orb ev-orb--primary" />
// //           <div className="ev-orb ev-orb--secondary" />
// //           <div className="ev-orb ev-orb--tertiary" />
// //         </div>

// //         <div className="ev-container">
// //           {/* Hero Header — Centered */}
// //           <div className="ev-hero">
// //             <div className="ev-hero-content">
// //               <div className="ev-whisper">
// //                 <span className="ev-whisper-line" />
// //                 <span>Discover Events</span>
// //                 <span className="ev-whisper-line" />
// //               </div>
// //               <h1 className="ev-headline">
// //                 <span className="ev-headline-line">Experiences worth</span>
// //                 <span className="ev-headline-line ev-headline-radiance">
// //                   remembering forever
// //                 </span>
// //               </h1>
// //               <p className="ev-prose">
// //                 Explore concerts, festivals, workshops, and unforgettable 
// //                 experiences happening around you. Book your spot today.
// //               </p>
// //             </div>
// //           </div>

// //           {/* Featured Events Marquee */}
// //           {featuredEvents.length > 0 && (
// //             <div className="ev-featured-section">
// //               <div className="ev-featured-header">
// //                 <span className="ev-featured-label">Featured Events</span>
// //                 <p className="ev-featured-subtitle">
// //                   Handpicked premium experiences curated just for you
// //                 </p>
// //               </div>
// //               <div
// //                 className="ev-marquee-stage"
// //                 onMouseEnter={() => setIsPaused(true)}
// //                 onMouseLeave={() => setIsPaused(false)}
// //               >
// //                 <div className={`ev-marquee-track ${isPaused ? "ev-marquee-paused" : ""}`}>
// //                   {marqueeEvents.map((event, index) => renderEventCard(event, index, true))}
// //                 </div>
// //                 <div className="ev-marquee-fade ev-marquee-fade-left" />
// //                 <div className="ev-marquee-fade ev-marquee-fade-right" />
// //               </div>
// //             </div>
// //           )}

// //           {/* Toggle Section */}
// //           <div className="ev-toggle-section">
// //             <div className="ev-toggle-header">
// //               <div className="ev-toggle-tabs">
// //                 <button
// //                   className={`ev-toggle-tab ${activeTab === "upcoming" ? "ev-toggle-active" : ""}`}
// //                   onClick={() => setActiveTab("upcoming")}
// //                 >
// //                   <span>Upcoming Events</span>
// //                   <span className="ev-toggle-count">{upcomingEvents.length}</span>
// //                 </button>
// //                 <button
// //                   className={`ev-toggle-tab ${activeTab === "past" ? "ev-toggle-active" : ""}`}
// //                   onClick={() => setActiveTab("past")}
// //                 >
// //                   <span>Past Events</span>
// //                   <span className="ev-toggle-count">{pastEvents.length}</span>
// //                 </button>
// //               </div>
// //             </div>

// //             {/* Events Grid */}
// //             <div className="ev-grid">
// //               {activeEvents.length > 0 ? (
// //                 activeEvents.map((event, index) => renderEventCard(event, index))
// //               ) : (
// //                 <div className="ev-empty-grid">
// //                   <div className="ev-empty-content">
// //                     <div className="ev-empty-thread" />
// //                     <h3 className="ev-empty-title">
// //                       {activeTab === "upcoming" ? "No upcoming events" : "No past events"}
// //                     </h3>
// //                     <p className="ev-empty-text">
// //                       {activeTab === "upcoming"
// //                         ? "New experiences are being curated. Check back soon for something extraordinary."
// //                         : "Memorable moments from past events will appear here."}
// //                     </p>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           </div>

// //           {/* Global Empty State */}
// //           {events.length === 0 && (
// //             <div className="ev-empty">
// //               <div className="ev-empty-content">
// //                 <div className="ev-empty-thread" />
// //                 <h3 className="ev-empty-title">No Events Available</h3>
// //                 <p className="ev-empty-text">
// //                   Check back later for upcoming events.
// //                 </p>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </section>
// //     </PublicLayout>
// //   );
// // }

// // export default Events;


// import { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import api from "../services/api";
// import PublicLayout from "../layouts/PublicLayout";
// import { Mail, Phone, Calendar } from "lucide-react";
// import "./Events.css";

// function Events() {
//   const [events, setEvents] = useState([]);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   const [activeTab, setActiveTab] = useState("upcoming");
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.05 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, [events]);

//   const fetchEvents = async () => {
//     try {
//       const { data } = await api.get("/events");
//       setEvents(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const today = new Date();
//   today.setHours(0, 0, 0, 0);

//   const featuredEvents = events.filter((event) => event.featured);

//   const upcomingEvents = events.filter((event) => {
//     const eventDate = new Date(event.eventDate);
//     eventDate.setHours(0, 0, 0, 0);
//     return eventDate >= today;
//   });

//   const pastEvents = events.filter((event) => {
//     if (!event.eventDate) return false;
//     const eventDate = new Date(event.eventDate);
//     eventDate.setHours(0, 0, 0, 0);
//     return eventDate < today;
//   });

//   const formatDate = (dateString) => {
//     if (!dateString) return "Date TBA";
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", {
//       day: "numeric",
//       month: "long",
//       year: "numeric",
//     });
//   };

//   const formatTime = (dateString) => {
//     if (!dateString) return "Time TBA";
//     const date = new Date(dateString);
//     return date.toLocaleTimeString("en-US", {
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//     });
//   };

//   const formatMonth = (dateString) => {
//     if (!dateString) return "TBA";
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", { month: "short" });
//   };

//   const formatDay = (dateString) => {
//     if (!dateString) return "??";
//     const date = new Date(dateString);
//     return date.getDate();
//   };

//   const marqueeEvents = featuredEvents.length > 0 
//     ? [...featuredEvents, ...featuredEvents] 
//     : [];

//   const renderEventCard = (event, index, isLarge = false) => (
//     <Link
//       key={`${event.id}-${isLarge ? 'featured-' : ''}${index}`}
//       to={`/events/${event.id}`}
//       className={`ev-card-link ${isLarge ? "ev-card-link-large" : ""}`}
//       style={{ "--card-index": index }}
//     >
//       <div className={`ev-card ${isLarge ? "ev-card-large" : ""}`}>
//         <div className="ev-card-shine" aria-hidden="true" />
//         <div className="ev-card-media">
//           <div className="ev-card-image-wrap">
//             {event.bannerImage && (
//               <img
//                 src={`https://a4agroup.eu${event.bannerImage}`}
//                 alt={event.title}
//                 className="ev-card-image"
//                 loading="lazy"
//               />
//             )}
//             <div className="ev-card-image-veil" />
//           </div>
//           <div className="ev-card-date">
//             <span className="ev-date-month">{formatMonth(event.eventDate)}</span>
//             <span className="ev-date-day">{formatDay(event.eventDate)}</span>
//           </div>
//           {event.featured && (
//             <div className="ev-card-featured">
//               <span>Featured</span>
//             </div>
//           )}
//         </div>
//         <div className="ev-card-details">
//           <div className="ev-card-meta">
//             <span className="ev-meta-item">
//               <span className="ev-meta-dot" />
//               {event.location || "Venue TBA"}
//             </span>
//             <span className="ev-meta-divider" />
//             <span className="ev-meta-item">
//               <span className="ev-meta-dot" />
//               {formatDate(event.eventDate)}
//             </span>
//             <span className="ev-meta-divider" />
//             <span className="ev-meta-item">
//               <span className="ev-meta-dot" />
//               {formatTime(event.eventDate)}
//             </span>
//           </div>
//           <h3 className="ev-card-title">{event.title}</h3>
//           <p className="ev-card-description">
//             {event.description || "Join us for an unforgettable experience with amazing performances and networking opportunities."}
//           </p>
//           <div className="ev-card-action">
//             <span>View Event Details</span>
//             <span className="ev-action-arrow">→</span>
//           </div>
//         </div>
//         <div className="ev-card-edge" aria-hidden="true" />
//       </div>
//     </Link>
//   );

//   const activeEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;

//   return (
//     <PublicLayout>
//       <section
//         ref={sectionRef}
//         className={`ev-premium ${isVisible ? "ev-visible" : ""}`}
//       >
//         {/* Atmospheric Depth */}
//         <div className="ev-atmosphere" aria-hidden="true">
//           <div className="ev-glow ev-glow--teal" />
//           <div className="ev-glow ev-glow--blue" />
//           <div className="ev-glow ev-glow--emerald" />
//           <div className="ev-mesh" />
//           <div className="ev-grain" />
//           <div className="ev-vignette" />
//         </div>

//         {/* Floating Orbs */}
//         <div className="ev-orbs" aria-hidden="true">
//           <div className="ev-orb ev-orb--primary" />
//           <div className="ev-orb ev-orb--secondary" />
//           <div className="ev-orb ev-orb--tertiary" />
//         </div>

//         <div className="ev-container">
//           {/* Hero Header */}
//           <div className="ev-hero">
//             <div className="ev-hero-content">
//               <div className="ev-whisper">
//                 <span className="ev-whisper-line" />
//                 <span>Discover Events</span>
//                 <span className="ev-whisper-line" />
//               </div>
//               <h1 className="ev-headline">
//                 <span className="ev-headline-line">Experiences worth</span>
//                 <span className="ev-headline-line ev-headline-radiance">
//                   remembering forever
//                 </span>
//               </h1>
//               <p className="ev-prose">
//                 Explore concerts, festivals, workshops, and unforgettable 
//                 experiences happening around you. Book your spot today.
//               </p>
//             </div>
//           </div>

//           {/* ===== TOGGLE SECTION - NOW ON TOP ===== */}
//           <div className="ev-toggle-section">
//             <div className="ev-toggle-header">
//               <div className="ev-toggle-tabs">
//                 <button
//                   className={`ev-toggle-tab ${activeTab === "upcoming" ? "ev-toggle-active" : ""}`}
//                   onClick={() => setActiveTab("upcoming")}
//                 >
//                   <span>Upcoming Events</span>
//                   <span className="ev-toggle-count">{upcomingEvents.length}</span>
//                 </button>
//                 <button
//                   className={`ev-toggle-tab ${activeTab === "past" ? "ev-toggle-active" : ""}`}
//                   onClick={() => setActiveTab("past")}
//                 >
//                   <span>Past Events</span>
//                   <span className="ev-toggle-count">{pastEvents.length}</span>
//                 </button>
//               </div>
//             </div>

//             {/* Events Grid */}
//             <div className="ev-grid">
//               {activeEvents.length > 0 ? (
//                 activeEvents.map((event, index) => renderEventCard(event, index))
//               ) : (
//                 <div className="ev-empty-grid">
//                   <div className="ev-empty-content">
//                     <div className="ev-empty-thread" />
//                     <h3 className="ev-empty-title">
//                       {activeTab === "upcoming" ? "No upcoming events" : "No past events"}
//                     </h3>
//                     <p className="ev-empty-text">
//                       {activeTab === "upcoming"
//                         ? "New experiences are being curated. Check back soon for something extraordinary."
//                         : "Memorable moments from past events will appear here."}
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* ===== FEATURED EVENTS - NOW BELOW ===== */}
//           {featuredEvents.length > 0 && (
//             <div className="ev-featured-section">
//               <div className="ev-featured-header">
//                 <span className="ev-featured-label">Featured Events</span>
//                 <p className="ev-featured-subtitle">
//                   Handpicked premium experiences curated just for you
//                 </p>
//               </div>
//               <div
//                 className="ev-marquee-stage"
//                 onMouseEnter={() => setIsPaused(true)}
//                 onMouseLeave={() => setIsPaused(false)}
//               >
//                 <div className={`ev-marquee-track ${isPaused ? "ev-marquee-paused" : ""}`}>
//                   {marqueeEvents.map((event, index) => renderEventCard(event, index, true))}
//                 </div>
//                 <div className="ev-marquee-fade ev-marquee-fade-left" />
//                 <div className="ev-marquee-fade ev-marquee-fade-right" />
//               </div>
//             </div>
//           )}

//           {/* ===== CTA SECTION - Organize Your Event ===== */}
//           <div className="ev-cta-section">
//             <div className="ev-cta-card">
//               <div className="ev-cta-shine" aria-hidden="true" />
//               <div className="ev-cta-content">
//                 <div className="ev-cta-icon">
//                   <Calendar size={28} strokeWidth={1.6} />
//                 </div>
//                 <h2 className="ev-cta-title">
//                   Want to organize your own event?
//                 </h2>
//                 <p className="ev-cta-text">
//                   Let us bring your vision to life. From intimate gatherings to 
//                   large-scale productions — we craft unforgettable experiences 
//                   tailored to your needs.
//                 </p>
//                 <div className="ev-cta-actions">
//                   <a
//                     href="mailto:contact@a4aevents.com"
//                     className="ev-cta-btn ev-cta-btn-primary"
//                   >
//                     <Mail size={18} strokeWidth={1.6} />
//                     <span>contact@a4aevents.com</span>
//                     <span className="ev-cta-arrow">→</span>
//                   </a>
//                   <a
//                     href="tel:+491234567890"
//                     className="ev-cta-btn ev-cta-btn-secondary"
//                   >
//                     <Phone size={18} strokeWidth={1.6} />
//                     <span>+49 123 456 7890</span>
//                     <span className="ev-cta-arrow">→</span>
//                   </a>
//                 </div>
//                 <p className="ev-cta-subtle">
//                   Available for events across Germany and India
//                 </p>
//               </div>
//               <div className="ev-cta-radiance" aria-hidden="true" />
//             </div>
//           </div>

//           {/* Global Empty State */}
//           {events.length === 0 && (
//             <div className="ev-empty">
//               <div className="ev-empty-content">
//                 <div className="ev-empty-thread" />
//                 <h3 className="ev-empty-title">No Events Available</h3>
//                 <p className="ev-empty-text">
//                   Check back later for upcoming events.
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </PublicLayout>
//   );
// }

// export default Events;










import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import PublicLayout from "../layouts/PublicLayout";
import { Mail, Calendar } from "lucide-react";
import "./Events.css";

function Events() {
  const [events, setEvents] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeTab, setActiveTab] = useState("upcoming");
  const sectionRef = useRef(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [events]);

  const fetchEvents = async () => {
    try {
      const { data } = await api.get("/events");
      setEvents(data);
    } catch (error) {
      console.error(error);
    }
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const featuredEvents = events.filter((event) => event.featured);

  const upcomingEvents = events.filter((event) => {
    const eventDate = new Date(event.eventDate);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate >= today;
  });

  const pastEvents = events.filter((event) => {
    if (!event.eventDate) return false;
    const eventDate = new Date(event.eventDate);
    eventDate.setHours(0, 0, 0, 0);
    return eventDate < today;
  });

  const formatDate = (dateString) => {
    if (!dateString) return "Date TBA";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime = (dateString) => {
    if (!dateString) return "Time TBA";
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatMonth = (dateString) => {
    if (!dateString) return "TBA";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short" });
  };

  const formatDay = (dateString) => {
    if (!dateString) return "??";
    const date = new Date(dateString);
    return date.getDate();
  };

  const marqueeEvents = featuredEvents.length > 0 
    ? [...featuredEvents, ...featuredEvents] 
    : [];

  const renderEventCard = (event, index, isLarge = false) => (
    <Link
      key={`${event.id}-${isLarge ? 'featured-' : ''}${index}`}
      to={`/events/${event.id}`}
      className={`ev-card-link ${isLarge ? "ev-card-link-large" : ""}`}
      style={{ "--card-index": index }}
    >
      <div className={`ev-card ${isLarge ? "ev-card-large" : ""}`}>
        <div className="ev-card-shine" aria-hidden="true" />
        <div className="ev-card-media">
          <div className="ev-card-image-wrap">
            {event.bannerImage && (
              <img
                src={`https://a4agroup.eu${event.bannerImage}`}
                alt={event.title}
                className="ev-card-image"
                loading="lazy"
              />
            )}
            <div className="ev-card-image-veil" />
          </div>
          <div className="ev-card-date">
            <span className="ev-date-month">{formatMonth(event.eventDate)}</span>
            <span className="ev-date-day">{formatDay(event.eventDate)}</span>
          </div>
          {event.featured && (
            <div className="ev-card-featured">
              <span>Featured</span>
            </div>
          )}
        </div>
        <div className="ev-card-details">
          <div className="ev-card-meta">
            <span className="ev-meta-item">
              <span className="ev-meta-dot" />
              {event.location || "Venue TBA"}
            </span>
            <span className="ev-meta-divider" />
            <span className="ev-meta-item">
              <span className="ev-meta-dot" />
              {formatDate(event.eventDate)}
            </span>
            <span className="ev-meta-divider" />
            <span className="ev-meta-item">
              <span className="ev-meta-dot" />
              {formatTime(event.eventDate)}
            </span>
          </div>
          <h3 className="ev-card-title">{event.title}</h3>
          <p className="ev-card-description">
            {event.description || "Join us for an unforgettable experience with amazing performances and networking opportunities."}
          </p>
          <div className="ev-card-action">
            <span>View Event Details</span>
            <span className="ev-action-arrow">→</span>
          </div>
        </div>
        <div className="ev-card-edge" aria-hidden="true" />
      </div>
    </Link>
  );

  const activeEvents = activeTab === "upcoming" ? upcomingEvents : pastEvents;

  return (
    <PublicLayout>
      <section
        ref={sectionRef}
        className={`ev-premium ${isVisible ? "ev-visible" : ""}`}
      >
        {/* Atmospheric Depth */}
        <div className="ev-atmosphere" aria-hidden="true">
          <div className="ev-glow ev-glow--teal" />
          <div className="ev-glow ev-glow--blue" />
          <div className="ev-glow ev-glow--emerald" />
          <div className="ev-mesh" />
          <div className="ev-grain" />
          <div className="ev-vignette" />
        </div>

        {/* Floating Orbs */}
        <div className="ev-orbs" aria-hidden="true">
          <div className="ev-orb ev-orb--primary" />
          <div className="ev-orb ev-orb--secondary" />
          <div className="ev-orb ev-orb--tertiary" />
        </div>

        <div className="ev-container">
          {/* Hero Header */}
          <div className="ev-hero">
            <div className="ev-hero-content">
              <div className="ev-whisper">
                <span className="ev-whisper-line" />
                <span>Discover Events</span>
                <span className="ev-whisper-line" />
              </div>
              <h1 className="ev-headline">
                <span className="ev-headline-line">Experiences worth</span>
                <span className="ev-headline-line ev-headline-radiance">
                  remembering forever
                </span>
              </h1>
              <p className="ev-prose">
                Explore concerts, festivals, workshops, and unforgettable 
                experiences happening around you. Book your spot today.
              </p>
            </div>
          </div>

          {/* Toggle Section - Upcoming/Past Events */}
          <div className="ev-toggle-section">
            <div className="ev-toggle-header">
              <div className="ev-toggle-tabs">
                <button
                  className={`ev-toggle-tab ${activeTab === "upcoming" ? "ev-toggle-active" : ""}`}
                  onClick={() => setActiveTab("upcoming")}
                >
                  <span>Upcoming Events</span>
                  <span className="ev-toggle-count">{upcomingEvents.length}</span>
                </button>
                <button
                  className={`ev-toggle-tab ${activeTab === "past" ? "ev-toggle-active" : ""}`}
                  onClick={() => setActiveTab("past")}
                >
                  <span>Past Events</span>
                  <span className="ev-toggle-count">{pastEvents.length}</span>
                </button>
              </div>
            </div>

            {/* Events Grid */}
            <div className="ev-grid">
              {activeEvents.length > 0 ? (
                activeEvents.map((event, index) => renderEventCard(event, index))
              ) : (
                <div className="ev-empty-grid">
                  <div className="ev-empty-content">
                    <div className="ev-empty-thread" />
                    <h3 className="ev-empty-title">
                      {activeTab === "upcoming" ? "No upcoming events" : "No past events"}
                    </h3>
                    <p className="ev-empty-text">
                      {activeTab === "upcoming"
                        ? "New experiences are being curated. Check back soon for something extraordinary."
                        : "Memorable moments from past events will appear here."}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Featured Events Marquee */}
          {featuredEvents.length > 0 && (
            <div className="ev-featured-section">
              <div className="ev-featured-header">
                <span className="ev-featured-label">Featured Events</span>
                <p className="ev-featured-subtitle">
                  Handpicked premium experiences curated just for you
                </p>
              </div>
              <div
                className="ev-marquee-stage"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className={`ev-marquee-track ${isPaused ? "ev-marquee-paused" : ""}`}>
                  {marqueeEvents.map((event, index) => renderEventCard(event, index, true))}
                </div>
                <div className="ev-marquee-fade ev-marquee-fade-left" />
                <div className="ev-marquee-fade ev-marquee-fade-right" />
              </div>
            </div>
          )}

          {/* Compact CTA Section */}
          <div className="ev-cta-section">
            <div className="ev-cta-card">
              <div className="ev-cta-content">
                <div className="ev-cta-left">
                  <div className="ev-cta-icon">
                    <Calendar size={22} strokeWidth={1.6} />
                  </div>
                  <div className="ev-cta-info">
                    <h3 className="ev-cta-title">Want to organize an event?</h3>
                    <p className="ev-cta-text">
                      Let us craft your next unforgettable experience.
                    </p>
                  </div>
                </div>
                <a
                  href="mailto:contact.events@a4agroups.eu"
                  className="ev-cta-btn"
                >
                  <Mail size={16} strokeWidth={1.6} />
                  <span>contact.events@a4agroups.eu</span>
                  <span className="ev-cta-arrow">→</span>
                </a>
              </div>
              <div className="ev-cta-radiance" aria-hidden="true" />
            </div>
          </div>

          {/* Global Empty State */}
          {events.length === 0 && (
            <div className="ev-empty">
              <div className="ev-empty-content">
                <div className="ev-empty-thread" />
                <h3 className="ev-empty-title">No Events Available</h3>
                <p className="ev-empty-text">
                  Check back later for upcoming events.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </PublicLayout>
  );
}

export default Events;