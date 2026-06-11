// import { useEffect, useState } from 'react';
// import api from '../services/api';

// function Events() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const { data } = await api.get('/events');
//       setEvents(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div>
//       <h1>Events</h1>

//       {events.map((event) => (
//         <div key={event.id}>
//             {event.bannerImage && (
//   <img
//     src={`http://localhost:5000${event.bannerImage}`}
//     alt={event.title}
//     width="250"
//   />
// )}
//           <h3>{event.title}</h3>
//           <p>{event.location}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Events;


// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import api from '../services/api';
// import PublicLayout from '../layouts/PublicLayout';

// function Events() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     const { data } = await api.get('/events');
//     setEvents(data);
//   };

//   return (
//     <PublicLayout>
//     <div style={{ padding: '20px' }}>
//       <h1>Events</h1>

//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns:
//             'repeat(auto-fill, minmax(250px, 1fr))',
//           gap: '20px'
//         }}
//       >
//         {events.map((event) => (
//           <div
//             key={event.id}
//             style={{
//               border: '1px solid #ddd',
//               borderRadius: '10px',
//               padding: '15px'
//             }}
//           >
//             {event.bannerImage && (
//   <img
//     src={`http://localhost:5000${event.bannerImage}`}
//     alt={event.title}
//     width="250"
//   />
// )}
//             <h3>{event.title}</h3>

//             <p>{event.location}</p>

//             <Link to={`/events/${event.id}`}>
//               View Details
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//     </PublicLayout>
//   );
// }

// export default Events;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../services/api";
// import PublicLayout from "../layouts/PublicLayout";
// import "./Events.css";

// function Events() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const { data } = await api.get("/events");
//       setEvents(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <PublicLayout>

//       <section className="a4-events-page">

//         <div className="a4-events-page-header">

//           <span className="a4-events-page-tag">
//             DISCOVER EVENTS
//           </span>

//           <h1 className="a4-events-page-title">
//             Experiences Worth
//             Remembering
//           </h1>

//           <p className="a4-events-page-description">
//             Explore concerts, festivals, workshops,
//             conferences and unforgettable experiences
//             happening around you.
//           </p>

//         </div>

//         <div className="a4-events-page-grid">

//           {events.map((event) => (
//             <Link
//               key={event.id}
//               to={`/events/${event.id}`}
//               className="a4-events-page-card"
//             >

//               <div className="a4-events-page-image-wrapper">

//                 {event.bannerImage && (
//                   <img
//                     src={`http://localhost:5000${event.bannerImage}`}
//                     alt={event.title}
//                     className="a4-events-page-image"
//                   />
//                 )}

//                 <div className="a4-events-page-overlay"></div>

//               </div>

//               <div className="a4-events-page-content">

//                 <span className="a4-events-page-badge">
//                   Featured Event
//                 </span>

//                 <h3 className="a4-events-page-event-title">
//                   {event.title}
//                 </h3>

//                 <div className="a4-events-page-location">
//                   {event.location}
//                 </div>

//                 <button className="a4-events-page-btn">
//                   View Details
//                 </button>

//               </div>

//             </Link>
//           ))}

//         </div>

//       </section>

//     </PublicLayout>
//   );
// }

// export default Events;




// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../services/api";
// import PublicLayout from "../layouts/PublicLayout";
// import "./Events.css";

// function Events() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = async () => {
//     try {
//       const { data } = await api.get("/events");
//       setEvents(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const today = new Date();

//   const featuredEvents = events.filter(
//     (event) => event.featured
//   );

//   const upcomingEvents = events.filter(
//     (event) =>
//       !event.featured &&
//       new Date(event.eventDate) >= today
//   );

//   const pastEvents = events.filter(
//     (event) =>
//       new Date(event.eventDate) < today
//   );

//   const renderEvents = (eventList) =>
//     eventList.map((event) => (
//       <Link
//         key={event.id}
//         to={`/events/${event.id}`}
//         className="a4-events-page-card"
//       >
//         <div className="a4-events-page-image-wrapper">
//           {event.bannerImage && (
//             <img
//               src={`http://localhost:5000${event.bannerImage}`}
//               alt={event.title}
//               className="a4-events-page-image"
//             />
//           )}

//           <div className="a4-events-page-overlay"></div>
//         </div>

//         <div className="a4-events-page-content">
//           {event.featured && (
//             <span className="a4-events-page-badge">
//               ⭐ Featured Event
//             </span>
//           )}

//           <h3 className="a4-events-page-event-title">
//             {event.title}
//           </h3>

//           <div className="a4-events-page-location">
//             📍 {event.location}
//           </div>

//           <div className="a4-events-page-date">
//             📅{" "}
//             {new Date(
//               event.eventDate
//             ).toLocaleDateString("en-US", {
//               day: "numeric",
//               month: "long",
//               year: "numeric",
//             })}
//           </div>

//           <button className="a4-events-page-btn">
//             View Details
//           </button>
//         </div>
//       </Link>
//     ));

//   return (
//     <PublicLayout>
//       <section className="a4-events-page">
//         <div className="a4-events-page-header">
//           <span className="a4-events-page-tag">
//             DISCOVER EVENTS
//           </span>

//           <h1 className="a4-events-page-title">
//             Experiences Worth
//             Remembering
//           </h1>

//           <p className="a4-events-page-description">
//             Explore concerts,
//             festivals, workshops,
//             conferences and
//             unforgettable experiences
//             happening around you.
//           </p>
//         </div>

//         {/* FEATURED EVENTS */}

//         {featuredEvents.length > 0 && (
//           <>
//             <div className="a4-events-section-header">
//               <h2>
//                 ⭐ Featured Events
//               </h2>

//               <p>
//                 Handpicked premium
//                 experiences you
//                 shouldn't miss.
//               </p>
//             </div>

//             <div className="a4-events-page-grid">
//               {renderEvents(
//                 featuredEvents
//               )}
//             </div>
//           </>
//         )}

//         {/* UPCOMING EVENTS */}

//         {upcomingEvents.length > 0 && (
//           <>
//             <div className="a4-events-section-header">
//               <h2>
//                 🚀 Upcoming Events
//               </h2>

//               <p>
//                 Discover exciting
//                 events coming soon.
//               </p>
//             </div>

//             <div className="a4-events-page-grid">
//               {renderEvents(
//                 upcomingEvents
//               )}
//             </div>
//           </>
//         )}

//         {/* PAST EVENTS */}

//         {pastEvents.length > 0 && (
//           <>
//             <div className="a4-events-section-header">
//               <h2>
//                 📅 Past Events
//               </h2>

//               <p>
//                 Browse our previous
//                 successful events.
//               </p>
//             </div>

//             <div className="a4-events-page-grid">
//               {renderEvents(
//                 pastEvents
//               )}
//             </div>
//           </>
//         )}

//         {/* NO EVENTS */}

//         {events.length === 0 && (
//           <div className="a4-no-events">
//             <h3>
//               No Events Available
//             </h3>

//             <p>
//               Check back later for
//               upcoming events.
//             </p>
//           </div>
//         )}
//       </section>
//     </PublicLayout>
//   );
// }

// export default Events;




import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import PublicLayout from "../layouts/PublicLayout";
import "./Events.css";

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data } = await api.get("/events");
      setEvents(data);
    } catch (error) {
      console.error(error);
    }
  };

  const today = new Date();

  const featuredEvents = events.filter((event) => event.featured);
  
  const upcomingEvents = events.filter(
    (event) => !event.featured && new Date(event.eventDate) >= today
  );
  
  const pastEvents = events.filter(
    (event) => new Date(event.eventDate) < today
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatMonth = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
  };

  const formatDay = (dateString) => {
    const date = new Date(dateString);
    return date.getDate();
  };

  const renderEventSection = (title, subtitle, eventList, type) => {
    if (eventList.length === 0) return null;

    return (
      <div className="ev__section">
        <div className="ev__sectionHeader">
          <div className="ev__sectionMarker">
            <span className="ev__sectionLine"></span>
            <span className="ev__sectionLabel">{title}</span>
          </div>
          <h2 className="ev__sectionTitle">{subtitle}</h2>
        </div>

        <div className="ev__grid">
          {eventList.map((event) => (
            <Link
              key={event.id}
              to={`/events/${event.id}`}
              className="ev__cardLink"
            >
              <div className="ev__card">
                <div className="ev__cardImage">
                  {event.bannerImage && (
                    <img
                      src={`http://localhost:5000${event.bannerImage}`}
                      alt={event.title}
                      className="ev__image"
                    />
                  )}
                  <div className="ev__imageOverlay"></div>
                  
                  {/* Date Card */}
                  <div className="ev__dateCard">
                    <span className="ev__dateMonth">{formatMonth(event.eventDate)}</span>
                    <span className="ev__dateDay">{formatDay(event.eventDate)}</span>
                  </div>
                </div>

                <div className="ev__cardContent">
                  <h3 className="ev__title">{event.title}</h3>
                  
                  <div className="ev__location">
                    {event.location}
                  </div>
                  
                  <p className="ev__description">
                    {event.description || "Join us for an unforgettable experience with amazing performances and networking opportunities."}
                  </p>
                  
                  <div className="ev__cardFooter">
                    <span className="ev__dateFull">{formatDate(event.eventDate)}</span>
                    <span className="ev__linkArrow">View Event →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <PublicLayout>
      <section className="ev__wrapper">
        <div className="ev__bgSubtle"></div>
        <div className="ev__bgGradient"></div>

        <div className="ev__container">
          {/* Hero Header */}
          <div className="ev__hero">
            <div className="ev__heroBadge">
              <span className="ev__heroLine"></span>
              <span className="ev__heroText">DISCOVER EVENTS</span>
            </div>
            
            <h1 className="ev__heroTitle">
              Experiences worth
              <br />
              <span className="ev__heroAccent">remembering forever</span>
            </h1>
            
            <p className="ev__heroDescription">
              Explore concerts, festivals, workshops, conferences, and unforgettable 
              experiences happening around you. Book your spot today.
            </p>
          </div>

          {/* Featured Events Section */}
          {renderEventSection(
            "FEATURED",
            "Handpicked premium experiences",
            featuredEvents,
            "featured"
          )}

          {/* Upcoming Events Section */}
          {renderEventSection(
            "UPCOMING",
            "Don't miss these exciting events",
            upcomingEvents,
            "upcoming"
          )}

          {/* Past Events Section */}
          {renderEventSection(
            "PAST EVENTS",
            "Memorable moments from our journey",
            pastEvents,
            "past"
          )}

          {/* Empty State */}
          {events.length === 0 && (
            <div className="ev__empty">
              <div className="ev__emptyContent">
                <h3>No Events Available</h3>
                <p>Check back later for upcoming events.</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </PublicLayout>
  );
}

export default Events;