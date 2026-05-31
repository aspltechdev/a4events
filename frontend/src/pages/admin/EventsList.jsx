import { useEffect, useState } from 'react';
import api from '../../services/api';
import AdminLayout from './AdminLayout';
import { Link } from 'react-router-dom';

function EventsList() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        const { data } = await api.get('/events');
        setEvents(data);
    };
    const deleteEvent = async (id) => {
        const token = localStorage.getItem('token');

        if (!window.confirm('Delete Event?')) {
            return;
        }

        try {
            await api.delete(`/events/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            fetchEvents();

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <AdminLayout>
            <div>
                <h1>Events</h1>

                {events.map((event) => (

                    <div key={event.id}>
                        {event.bannerImage && (
                            <img
                                src={`http://localhost:5000${event.bannerImage}`}
                                alt={event.title}
                                width="120"
                            />
                        )}
                        <h3>{event.title}</h3>
                        <p>{event.location}</p>
                        <Link to={`/admin/events/edit/${event.id}`}>
                            Edit
                        </Link>
                        {' | '}

                        <button
                            onClick={() => deleteEvent(event.id)}
                        >
                            Delete
                        </button>
                    </div>

                ))}
            </div>
        </AdminLayout>
    );
}

export default EventsList;