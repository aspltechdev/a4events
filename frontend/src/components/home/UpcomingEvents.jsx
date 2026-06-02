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









import { useEffect, useState } from "react";
import api from "../../services/api";
import "./UpcomingEvents.css";

function UpcomingEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const { data } = await api.get("/events");
      setEvents(data.slice(0, 6));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="a4-upcoming-section">
      <div className="a4-upcoming-container">

        <div className="a4-upcoming-header">

          <span className="a4-upcoming-tag">
            UPCOMING EVENTS
          </span>

          <h2 className="a4-upcoming-title">
            Experiences Worth Looking Forward To
          </h2>

          <p className="a4-upcoming-description">
            Discover concerts, festivals, workshops,
            conferences and entertainment experiences
            happening near you.
          </p>

        </div>

        <div className="a4-upcoming-grid">

          {events.map((event) => (
            <div
              key={event.id}
              className="a4-upcoming-card"
            >
              <div className="a4-upcoming-image-wrapper">

                {event.bannerImage && (
                  <img
                    src={`http://localhost:5000${event.bannerImage}`}
                    alt={event.title}
                    className="a4-upcoming-image"
                  />
                )}

                <div className="a4-upcoming-overlay"></div>

                <div className="a4-upcoming-content">

                  <span className="a4-upcoming-badge">
                    Featured Event
                  </span>

                  <h3 className="a4-upcoming-event-title">
                    {event.title}
                  </h3>

                  <p className="a4-upcoming-location">
                    {event.location}
                  </p>

                  <button className="a4-upcoming-btn">
                    View Event
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default UpcomingEvents;