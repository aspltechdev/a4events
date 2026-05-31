import { useEffect, useState } from 'react';
import api from '../../services/api';

function UpcomingEvents() {
  const [events, setEvents] =
    useState([]);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    const { data } =
      await api.get('/events');

    setEvents(data.slice(0, 6));
  };

  return (
    <section
      style={{
        padding: '80px 20px'
      }}
    >
      <h2>Upcoming Events</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(3,1fr)',
          gap: '20px'
        }}
      >
        {events.map((event) => (
          <div key={event.id}>
            {event.bannerImage && (
              <img
                src={`http://localhost:5000${event.bannerImage}`}
                alt={event.title}
                width="100%"
              />
            )}

            <h3>{event.title}</h3>

            <p>{event.location}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingEvents;