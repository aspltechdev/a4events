import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import AdminLayout from './AdminLayout';

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data } =
        await api.get('/testimonials');

      setTestimonials(data);

    } catch (error) {
      console.error(error);
    }
  };

  const deleteTestimonial = async (id) => {
    const token =
      localStorage.getItem('token');

    if (
      !window.confirm(
        'Delete Testimonial?'
      )
    ) {
      return;
    }

    try {
      await api.delete(
        `/testimonials/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

      fetchTestimonials();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>
      <h1>Testimonials</h1>

      <Link to="/admin/testimonials/add">
        Add Testimonial
      </Link>

      <br />
      <br />

      {testimonials.map(
        (testimonial) => (
          <div
            key={testimonial.id}
            style={{
              border:
                '1px solid #ddd',
              padding: '15px',
              marginBottom:
                '15px'
            }}
          >
            {testimonial.image && (
              <img
                src={`http://localhost:5000${testimonial.image}`}
                alt={
                  testimonial.name
                }
                width="120"
              />
            )}

            <h3>
              {testimonial.name}
            </h3>

            <p>
              {
                testimonial.company
              }
            </p>

            <p>
              Rating:
              {' '}
              {
                testimonial.rating
              }
              /5
            </p>

            <p>
              {
                testimonial.review
              }
            </p>

            <Link
              to={`/admin/testimonials/edit/${testimonial.id}`}
            >
              Edit
            </Link>

            {' | '}

            <button
              onClick={() =>
                deleteTestimonial(
                  testimonial.id
                )
              }
            >
              Delete
            </button>
          </div>
        )
      )}
    </AdminLayout>
  );
}

export default Testimonials;