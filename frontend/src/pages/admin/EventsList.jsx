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



import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./EventsList.css";

function EventsList() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState("");

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

  const deleteEvent = async (id) => {
    const token = localStorage.getItem("token");

    if (!window.confirm("Delete Event?")) {
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

  return (
    <AdminLayout>

      <div className="a4-events-admin">

        <div className="a4-events-header">

          <div>
            <h1>Events</h1>

            <p>
              Manage all concerts, workshops,
              conferences and festivals.
            </p>
          </div>

          <Link
            to="/admin/events/add"
            className="a4-add-event-btn"
          >
            + Add Event
          </Link>

        </div>

        <div className="a4-events-toolbar">

          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="a4-event-search"
          />

        </div>

        <div className="a4-events-grid">

          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="a4-event-card"
            >

              <div className="a4-event-image-wrapper">

                <img
                  src={`http://localhost:5000${event.bannerImage}`}
                  alt={event.title}
                  className="a4-event-image"
                />

                <div className="a4-event-overlay"></div>

              </div>

              <div className="a4-event-content">

                <div className="a4-event-badge">
                  Live Event
                </div>

                <h3>
                  {event.title}
                </h3>

                <p className="a4-event-location">
                  {event.location}
                </p>

                {event.eventDate && (
                  <div className="a4-event-date">
                    {new Date(
                      event.eventDate
                    ).toLocaleDateString()}
                  </div>
                )}

                <div className="a4-event-actions">

                  <Link
                    to={`/admin/events/edit/${event.id}`}
                    className="a4-edit-event-btn"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      deleteEvent(event.id)
                    }
                    className="a4-delete-event-btn"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </AdminLayout>
  );
}

export default EventsList;