// import { useEffect, useState } from 'react';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';
// import { Link } from 'react-router-dom';

// function EventsList() {
//     const [events, setEvents] = useState([]);

//     useEffect(() => {
//         fetchEvents();
//     }, []);

//     const fetchEvents = async () => {
//         const { data } = await api.get('/events');
//         setEvents(data);
//     };
//     const deleteEvent = async (id) => {
//         const token = localStorage.getItem('token');

//         if (!window.confirm('Delete Event?')) {
//             return;
//         }

//         try {
//             await api.delete(`/events/${id}`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });

//             fetchEvents();

//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <AdminLayout>
//             <div>
//                 <h1>Events</h1>

//                 {events.map((event) => (

//                     <div key={event.id}>
//                         {event.bannerImage && (
//                             <img
//                                 src={`http://localhost:5000${event.bannerImage}`}
//                                 alt={event.title}
//                                 width="120"
//                             />
//                         )}
//                         <h3>{event.title}</h3>
//                         <p>{event.location}</p>
//                         <Link to={`/admin/events/edit/${event.id}`}>
//                             Edit
//                         </Link>
//                         {' | '}

//                         <button
//                             onClick={() => deleteEvent(event.id)}
//                         >
//                             Delete
//                         </button>
//                     </div>

//                 ))}
//             </div>
//         </AdminLayout>
//     );
// }

// export default EventsList;



// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./EventsList.css";

// function EventsList() {
//   const [events, setEvents] = useState([]);
//   const [search, setSearch] = useState("");

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

//   const deleteEvent = async (id) => {
//     const token = localStorage.getItem("token");

//     if (!window.confirm("Delete Event?")) {
//       return;
//     }

//     try {
//       await api.delete(`/events/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       fetchEvents();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const filteredEvents = events.filter(
//     (event) =>
//       event.title
//         .toLowerCase()
//         .includes(search.toLowerCase())
//   );

//   return (
//     <AdminLayout>

//       <div className="a4-events-admin">

//         <div className="a4-events-header">

//           <div>
//             <h1>Events</h1>

//             <p>
//               Manage all concerts, workshops,
//               conferences and festivals.
//             </p>
//           </div>

//           <Link
//             to="/admin/events/add"
//             className="a4-add-event-btn"
//           >
//             + Add Event
//           </Link>

//         </div>

//         <div className="a4-events-toolbar">

//           <input
//             type="text"
//             placeholder="Search events..."
//             value={search}
//             onChange={(e) =>
//               setSearch(e.target.value)
//             }
//             className="a4-event-search"
//           />

//         </div>

//         <div className="a4-events-grid">

//           {filteredEvents.map((event) => (
//             <div
//               key={event.id}
//               className="a4-event-card"
//             >

//               <div className="a4-event-image-wrapper">

//                 <img
//                   src={`http://localhost:5000${event.bannerImage}`}
//                   alt={event.title}
//                   className="a4-event-image"
//                 />

//                 <div className="a4-event-overlay"></div>

//               </div>

//               <div className="a4-event-content">

//                 <div className="a4-event-badge">
//                   Live Event
//                 </div>

//                 <h3>
//                   {event.title}
//                 </h3>

//                 <p className="a4-event-location">
//                   {event.location}
//                 </p>

//                 {event.eventDate && (
//                   <div className="a4-event-date">
//                     {new Date(
//                       event.eventDate
//                     ).toLocaleDateString()}
//                   </div>
//                 )}

//                 <div className="a4-event-actions">

//                   <Link
//                     to={`/admin/events/edit/${event.id}`}
//                     className="a4-edit-event-btn"
//                   >
//                     Edit
//                   </Link>

//                   <button
//                     onClick={() =>
//                       deleteEvent(event.id)
//                     }
//                     className="a4-delete-event-btn"
//                   >
//                     Delete
//                   </button>

//                 </div>

//               </div>

//             </div>
//           ))}

//         </div>

//       </div>

//     </AdminLayout>
//   );
// }

// export default EventsList; 

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./EventsList.css";

function EventsList() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data } = await api.get("/events");
      setEvents(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteEvent = async (id) => {
    const token = localStorage.getItem("token");

    if (!window.confirm("Are you sure you want to delete this event?")) {
      return;
    }

    try {
      await api.delete(`/events/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchEvents();
    } catch (error) {
      console.error(error);
    }
  };

  const filteredEvents = events.filter(
    (event) =>
      event.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  const formatDate = (dateString) => {
    if (!dateString) return "Date TBA";
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "short",
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const isUpcoming = (dateString) => {
    return new Date(dateString) >= new Date();
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="ael-loading">
          <div className="ael-loading-spinner"></div>
          <p>Loading events...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="ael-admin">
        {/* Header */}
        <div className="ael-header">
          <div className="ael-header-left">
            <h1>Events</h1>
            <p>Manage all concerts, workshops, conferences and festivals</p>
          </div>
          <Link to="/admin/events/add" className="ael-btn-primary">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            Add Event
          </Link>
        </div>

        {/* Toolbar */}
        <div className="ael-toolbar">
          <div className="ael-search-wrapper">
            <svg className="ael-search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search events..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ael-search-input"
            />
          </div>
          <div className="ael-toolbar-info">
            <span className="ael-count-badge">
              {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <div className="ael-empty">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="6" y="8" width="36" height="34" rx="4" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6 18h36" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M16 4v8M32 4v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <h3>No events found</h3>
            <p>{search ? 'Try adjusting your search terms' : 'Add your first event to get started'}</p>
          </div>
        ) : (
          <div className="ael-grid">
            {filteredEvents.map((event) => {
              const upcoming = isUpcoming(event.eventDate);

              return (
                <div key={event.id} className="ael-card">
                  {/* Image */}
                  <div className="ael-card-image">
                    <img
                      src={`https://a4agroup.eu${event.bannerImage}`}
                      alt={event.title}
                      className="ael-image"
                    />
                    <div className="ael-card-badges">
                      {event.featured && (
                        <span className="ael-badge-featured">
                          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                            <path d="M5 0L6.5 3.5L10 4L7.5 6.5L8.5 10L5 8L1.5 10L2.5 6.5L0 4L3.5 3.5L5 0Z" fill="currentColor"/>
                          </svg>
                          Featured
                        </span>
                      )}
                      <span className={`ael-badge-status ${upcoming ? 'ael-badge-upcoming' : 'ael-badge-past'}`}>
                        {upcoming ? 'Upcoming' : 'Past'}
                      </span>
                    </div>
                    <div className="ael-image-overlay"></div>
                  </div>

                  {/* Content */}
                  <div className="ael-card-content">
                    <h3 className="ael-title">{event.title}</h3>
                    
                    <div className="ael-meta">
                      <span className="ael-location">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M7 1C4.79 1 3 2.79 3 5c0 3 4 8 4 8s4-5 4-8c0-2.21-1.79-4-4-4z" stroke="currentColor" strokeWidth="1.2"/>
                          <circle cx="7" cy="5" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
                        </svg>
                        {event.location}
                      </span>
                      {event.eventDate && (
                        <span className="ael-date">
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <rect x="1.5" y="2.5" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                            <path d="M1.5 6h11" stroke="currentColor" strokeWidth="1.2"/>
                            <path d="M4.5 1v3M9.5 1v3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                          </svg>
                          {formatDate(event.eventDate)}
                        </span>
                      )}
                    </div>

                    <div className="ael-actions">
                      <Link
                        to={`/admin/events/edit/${event.id}`}
                        className="ael-btn-edit"
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M10 2l2 2-8 8H2v-2l8-8z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteEvent(event.id)}
                        className="ael-btn-delete"
                      >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 4h10M5 4V2h4v2M4 4v7a1 1 0 001 1h4a1 1 0 001-1V4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

export default EventsList;