// import { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import api from '../services/api';
// import InquiryForm from '../components/InquiryForm';
// function EventDetails() {
//   const { id } = useParams();

//   const [event, setEvent] = useState(null);

//   useEffect(() => {
//     loadEvent();
//   }, []);

//   const loadEvent = async () => {
//     try {
//       const { data } = await api.get(`/events/${id}`);
//       setEvent(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (!event) {
//     return <h2>Loading...</h2>;
//   }

// //   return (
// //     <div>
// //       <Link to="/events">
// //         ← Back to Events
// //       </Link>

// //       <h1>{event.title}</h1>

// //       {event.image && (
// //         <img
// //           src={`http://localhost:5000${event.image}`}
// //           alt={event.title}
// //           width="400"
// //         />
// //       )}

// //       <p>{event.description}</p>

// //       <p>
// //         <strong>Location:</strong> {event.location}
// //       </p>

// //       <p>
// //         <strong>Date:</strong>{' '}
// //         {new Date(event.eventDate).toLocaleDateString()}
// //       </p>
// //     </div>
// //   );
// return (
//   <div style={{ padding: '20px' }}>
//     <Link to="/events">
//       ← Back
//     </Link>

//     <h1>{event.title}</h1>

//     {event.bannerImage && (
//   <img
//     src={`http://localhost:5000${event.bannerImage}`}
//     alt={event.title}
//     width="500"
//   />
// )}

//     <p>{event.description}</p>

//     <h3>
//       Location: {event.location}
//     </h3>

//     <h3>
//       Date:{' '}
//       {new Date(
//         event.eventDate
//       ).toLocaleDateString()}
//     </h3>

//     <button>
//       Book Now
//     </button>
//     <InquiryForm eventId={event.id} />
//   </div>
// );
// }

// export default EventDetails;


import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";
import InquiryForm from "../components/InquiryForm";
import "./EventDetails.css";

function EventDetails() {
  const { id } = useParams();

  const [event, setEvent] = useState(null);

  useEffect(() => {
    loadEvent();
  }, [id]);

  const loadEvent = async () => {
    try {
      const { data } = await api.get(`/events/${id}`);
      setEvent(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!event) {
    return (
      <div className="a4-event-loading">
        Loading...
      </div>
    );
  }

  return (
    <section className="a4-event-page">

      {/* HERO */}

      <div
        className="a4-event-hero"
        style={{
          backgroundImage: `url(http://localhost:5000${event.bannerImage})`,
        }}
      >

        <div className="a4-event-overlay"></div>

        <div className="a4-event-hero-content">

          <Link
            to="/events"
            className="a4-event-back"
          >
            ← Back To Events
          </Link>

          <span className="a4-event-tag">
            FEATURED EVENT
          </span>

          <h1 className="a4-event-title">
            {event.title}
          </h1>

          <div className="a4-event-meta">

            <div className="a4-event-meta-card">
              <span>Location</span>
              <h4>{event.location}</h4>
            </div>

            <div className="a4-event-meta-card">
              <span>Date</span>
              <h4>
                {new Date(
                  event.eventDate
                ).toLocaleDateString()}
              </h4>
            </div>

          </div>

          <button className="a4-event-book-btn">
            Book Your Spot
          </button>

        </div>

      </div>

      {/* CONTENT */}

      <div className="a4-event-content-container">

        <div className="a4-event-description-card">

          <h2>
            About This Event
          </h2>

          <p>
            {event.description}
          </p>

        </div>

        {/* Venue */}

        <div className="a4-event-location-card">

          <h2>
            Event Location
          </h2>

          <p>{event.location}</p>

          <iframe
            title="Event Location"
            className="a4-event-map"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              event.location
            )}&z=15&output=embed`}
          />

        </div>

        {/* Inquiry */}

        <div className="a4-event-inquiry">

          <h2>
            Reserve Your Spot
          </h2>

          <InquiryForm
            eventId={event.id}
          />

        </div>

      </div>

    </section>
  );
}

export default EventDetails;