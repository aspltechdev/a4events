// import { useEffect, useState } from 'react';
// import api from '../../services/api';

// function UpcomingEvents() {
//   const [events, setEvents] =
//     useState([]);

//   useEffect(() => {
//     loadEvents();
//   }, []);

//   const loadEvents = async () => {
//     const { data } =
//       await api.get('/events');

//     setEvents(data.slice(0, 6));
//   };

//   return (
//     <section
//       style={{
//         padding: '80px 20px'
//       }}
//     >
//       <h2>Upcoming Events</h2>

//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns:
//             'repeat(3,1fr)',
//           gap: '20px'
//         }}
//       >
//         {events.map((event) => (
//           <div key={event.id}>
//             {event.bannerImage && (
//               <img
//                 src={`http://localhost:5000${event.bannerImage}`}
//                 alt={event.title}
//                 width="100%"
//               />
//             )}

//             <h3>{event.title}</h3>

//             <p>{event.location}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default UpcomingEvents;









// import { useEffect, useState } from "react";
// import api from "../../services/api";
// import "./UpcomingEvents.css";

// function UpcomingEvents() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     loadEvents();
//   }, []);

//   const loadEvents = async () => {
//     try {
//       const { data } = await api.get("/events");
//       setEvents(data.slice(0, 6));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <section className="a4-upcoming-section">
//       <div className="a4-upcoming-container">

//         <div className="a4-upcoming-header">

//           <span className="a4-upcoming-tag">
//             UPCOMING EVENTS
//           </span>

//           <h2 className="a4-upcoming-title">
//             Experiences Worth Looking Forward To
//           </h2>

//           <p className="a4-upcoming-description">
//             Discover concerts, festivals, workshops,
//             conferences and entertainment experiences
//             happening near you.
//           </p>

//         </div>

//         <div className="a4-upcoming-grid">

//           {events.map((event) => (
//             <div
//               key={event.id}
//               className="a4-upcoming-card"
//             >
//               <div className="a4-upcoming-image-wrapper">

//                 {event.bannerImage && (
//                   <img
//                     src={`http://localhost:5000${event.bannerImage}`}
//                     alt={event.title}
//                     className="a4-upcoming-image"
//                   />
//                 )}

//                 <div className="a4-upcoming-overlay"></div>

//                 <div className="a4-upcoming-content">

//                   <span className="a4-upcoming-badge">
//                     Featured Event
//                   </span>

//                   <h3 className="a4-upcoming-event-title">
//                     {event.title}
//                   </h3>

//                   <p className="a4-upcoming-location">
//                     {event.location}
//                   </p>

//                   <button className="a4-upcoming-btn">
//                     View Event
//                   </button>

//                 </div>

//               </div>
//             </div>
//           ))}

//         </div>

//       </div>
//     </section>
//   );
// }

// export default UpcomingEvents;










// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../../services/api";
// import "./UpcomingEvents.css";

// function UpcomingEvents() {
//   const [events, setEvents] = useState([]);
//   const [hoveredEvent, setHoveredEvent] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     loadEvents();
//   }, []);

//   const loadEvents = async () => {
//     try {
//       const { data } = await api.get("/events");
//       setEvents(data.slice(0, 6));
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return "Date TBA";
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { 
//       month: 'short', 
//       day: 'numeric',
//       year: 'numeric'
//     });
//   };

//   const handleViewEvent = (eventId) => {
//     navigate(`/events/${eventId}`);
//   };

//   return (
//     <section className="ue__wrapper">
//       <div className="ue__bgSubtle"></div>
//       <div className="ue__bgGradient"></div>
//       <div className="ue__accentLines">
//         <div className="ue__accentLine"></div>
//         <div className="ue__accentLine"></div>
//       </div>

//       <div className="ue__container">
//         {/* Header Section */}
//         <div className="ue__header">
//           <div className="ue__headerMarker">
//             <span className="ue__markerLine"></span>
//             <span className="ue__markerText">DON'T MISS OUT</span>
//           </div>
          
//           <h2 className="ue__headline">
//             Experiences worth
//             <br />
//             <span className="ue__headlineAccent">looking forward to</span>
//           </h2>
          
//           <p className="ue__subhead">
//             Discover concerts, festivals, workshops, conferences, and entertainment 
//             experiences happening near you. Book your spot today.
//           </p>
//         </div>

//         {/* Events Grid */}
//         <div className="ue__grid">
//           {events.map((event, index) => (
//             <div
//               key={event.id}
//               className={`ue__card ${hoveredEvent === event.id ? 'ue__cardHovered' : ''}`}
//               onMouseEnter={() => setHoveredEvent(event.id)}
//               onMouseLeave={() => setHoveredEvent(null)}
//               style={{ animationDelay: `${index * 0.08}s` }}
//             >
//               {/* Image Container */}
//               <div className="ue__media">
//                 <div className="ue__imageWrapper">
//                   {event.bannerImage && (
//                     <img
//                       // src={`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${event.bannerImage}`}
//                          src={`http://localhost:5000${event.bannerImage}`}
//                       alt={event.title}
//                       className="ue__image"
//                       loading="lazy"
//                     />
//                   )}
//                   <div className="ue__imageOverlay"></div>
//                 </div>

//                 {/* Date Badge */}
//                 <div className="ue__dateBadge">
//                   <span className="ue__dateMonth">{formatDate(event.date).split(' ')[0]}</span>
//                   <span className="ue__dateDay">{formatDate(event.date).split(' ')[1]?.replace(',', '')}</span>
//                 </div>

//                 {/* Featured Badge */}
//                 {event.featured && (
//                   <div className="ue__featuredBadge">
//                     <span>Featured</span>
//                   </div>
//                 )}
//               </div>

//               {/* Event Details */}
//               <div className="ue__details">
//                 <div className="ue__category">{event.category || "Event"}</div>
                
//                 <h3 className="ue__title">{event.title}</h3>
                
//                 <div className="ue__meta">
//                   <div className="ue__location">
//                     <span>{event.location}</span>
//                   </div>
//                   <div className="ue__metaSeparator"></div>
//                   <div className="ue__time">
//                     <span>{event.time || "Time TBA"}</span>
//                   </div>
//                 </div>
                
//                 <p className="ue__description">
//                   {event.description || "Join us for an unforgettable experience with amazing performances and networking opportunities."}
//                 </p>
                
//                 <button 
//                   className="ue__actionBtn"
//                   onClick={() => handleViewEvent(event.id)}
//                 >
//                   View Event
//                   <span className="ue__btnArrow">→</span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Footer Actions */}
//         <div className="ue__footer">
//           <button 
//             className="ue__viewAllBtn"
//             onClick={() => navigate('/events')}
//           >
//             Explore All Events
//             <span className="ue__arrowIcon">→</span>
//           </button>
//         </div>

//         {/* Trust Indicators */}
//         <div className="ue__trustSection">
//           <div className="ue__trustLine"></div>
//           <div className="ue__trustBadges">
//             <div className="ue__trustBadge">Curated Experiences</div>
//             <div className="ue__trustSeparator"></div>
//             <div className="ue__trustBadge">Verified Organizers</div>
//             <div className="ue__trustSeparator"></div>
//             <div className="ue__trustBadge">Secure Booking</div>
//             <div className="ue__trustSeparator"></div>
//             <div className="ue__trustBadge">Best Price Guarantee</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default UpcomingEvents;








import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./UpcomingEvents.css";

function UpcomingEvents() {
  const [events, setEvents] = useState([]);
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const { data } = await api.get("/events");
      // Filter upcoming events (eventDate >= today) and limit to 6
      const today = new Date();
      const upcomingEvents = data
        .filter(event => new Date(event.eventDate) >= today)
        .sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate))
        .slice(0, 6);
      setEvents(upcomingEvents);
    } catch (error) {
      console.error(error);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return { month: "TBA", day: "00", year: "2024", formatted: "Date TBA" };
    const date = new Date(dateString);
    return {
      month: date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase(),
      day: date.getDate(),
      year: date.getFullYear(),
      formatted: date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
      })
    };
  };

  const formatTime = (dateString) => {
    if (!dateString) return "Time TBA";
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const isPastEvent = (dateString) => {
    return new Date(dateString) < new Date();
  };

  const handleViewEvent = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  return (
    <section className="ue__wrapper">
      <div className="ue__bgSubtle"></div>
      <div className="ue__bgGradient"></div>
      <div className="ue__accentLines">
        <div className="ue__accentLine"></div>
        <div className="ue__accentLine"></div>
      </div>

      <div className="ue__container">
        {/* Header Section */}
        <div className="ue__header">
          <div className="ue__headerMarker">
            <span className="ue__markerLine"></span>
            <span className="ue__markerText">UPCOMING EVENTS</span>
          </div>
          
          <h2 className="ue__headline">
            Experiences worth
            <br />
            <span className="ue__headlineAccent">looking forward to</span>
          </h2>
          
          <p className="ue__subhead">
            Discover concerts, festivals, workshops, conferences, and entertainment 
            experiences happening near you. Book your spot today.
          </p>
        </div>

        {/* Events Grid */}
        <div className="ue__grid">
          {events.map((event, index) => {
            const dateObj = formatDate(event.eventDate);
            const isPast = isPastEvent(event.eventDate);
            const timeFormatted = formatTime(event.eventDate);
            
            return (
              <div
                key={event.id}
                className={`ue__card ${hoveredEvent === event.id ? 'ue__cardHovered' : ''} ${isPast ? 'ue__cardPast' : ''}`}
                onMouseEnter={() => setHoveredEvent(event.id)}
                onMouseLeave={() => setHoveredEvent(null)}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Image Container */}
                <div className="ue__media">
                  <div className="ue__imageWrapper">
                    {event.bannerImage && (
                      <img
                        // src={`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${event.bannerImage}`}
                        src={`http://localhost:5000${event.bannerImage}`}
                        alt={event.title}
                        className="ue__image"
                        loading="lazy"
                      />
                    )}
                    <div className="ue__imageOverlay"></div>
                  </div>

                  {/* Date Badge */}
                  <div className="ue__dateBadge">
                    <span className="ue__dateMonth">{dateObj.month}</span>
                    <span className="ue__dateDay">{dateObj.day}</span>
                    <span className="ue__dateYear">{dateObj.year}</span>
                  </div>

                  {/* Featured Badge */}
                  {event.featured && (
                    <div className="ue__featuredBadge">
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                {/* Event Details */}
                <div className="ue__details">
                  <div className="ue__eventMeta">
                    <div className="ue__location">
                      📍 {event.location}
                    </div>
                    <div className="ue__timeSlot">
                      🕒 {timeFormatted}
                    </div>
                  </div>
                  
                  <h3 className="ue__title">{event.title}</h3>
                  
                  <p className="ue__description">
                    {event.description}
                  </p>
                  
                  <button 
                    className="ue__actionBtn"
                    onClick={() => handleViewEvent(event.id)}
                  >
                    View Event
                    <span className="ue__btnArrow">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {events.length === 0 && (
          <div className="ue__emptyState">
            <div className="ue__emptyContent">
              <div className="ue__emptyIcon">📅</div>
              <h3 className="ue__emptyTitle">No Upcoming Events</h3>
              <p className="ue__emptyText">Check back soon for exciting events near you!</p>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div className="ue__footer">
          <button 
            className="ue__viewAllBtn"
            onClick={() => navigate('/events')}
          >
            Explore All Events
            <span className="ue__arrowIcon">→</span>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="ue__trustSection">
          <div className="ue__trustLine"></div>
          <div className="ue__trustBadges">
            <div className="ue__trustBadge">Curated Experiences</div>
            <div className="ue__trustSeparator"></div>
            <div className="ue__trustBadge">Verified Organizers</div>
            <div className="ue__trustSeparator"></div>
            <div className="ue__trustBadge">Secure Booking</div>
            <div className="ue__trustSeparator"></div>
            <div className="ue__trustBadge">Best Price Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;