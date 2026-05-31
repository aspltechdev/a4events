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


import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import PublicLayout from '../layouts/PublicLayout';

function Events() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const { data } = await api.get('/events');
    setEvents(data);
  };

  return (
    <PublicLayout>
    <div style={{ padding: '20px' }}>
      <h1>Events</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '20px'
        }}
      >
        {events.map((event) => (
          <div
            key={event.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '15px'
            }}
          >
            {event.bannerImage && (
  <img
    src={`http://localhost:5000${event.bannerImage}`}
    alt={event.title}
    width="250"
  />
)}
            <h3>{event.title}</h3>

            <p>{event.location}</p>

            <Link to={`/events/${event.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
    </PublicLayout>
  );
}

export default Events;