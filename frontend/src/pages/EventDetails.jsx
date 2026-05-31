import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';
import InquiryForm from '../components/InquiryForm';
function EventDetails() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    loadEvent();
  }, []);

  const loadEvent = async () => {
    try {
      const { data } = await api.get(`/events/${id}`);
      setEvent(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!event) {
    return <h2>Loading...</h2>;
  }

//   return (
//     <div>
//       <Link to="/events">
//         ← Back to Events
//       </Link>

//       <h1>{event.title}</h1>

//       {event.image && (
//         <img
//           src={`http://localhost:5000${event.image}`}
//           alt={event.title}
//           width="400"
//         />
//       )}

//       <p>{event.description}</p>

//       <p>
//         <strong>Location:</strong> {event.location}
//       </p>

//       <p>
//         <strong>Date:</strong>{' '}
//         {new Date(event.eventDate).toLocaleDateString()}
//       </p>
//     </div>
//   );
return (
  <div style={{ padding: '20px' }}>
    <Link to="/events">
      ← Back
    </Link>

    <h1>{event.title}</h1>

    {event.bannerImage && (
  <img
    src={`http://localhost:5000${event.bannerImage}`}
    alt={event.title}
    width="500"
  />
)}

    <p>{event.description}</p>

    <h3>
      Location: {event.location}
    </h3>

    <h3>
      Date:{' '}
      {new Date(
        event.eventDate
      ).toLocaleDateString()}
    </h3>

    <button>
      Book Now
    </button>
    <InquiryForm eventId={event.id} />
  </div>
);
}

export default EventDetails;