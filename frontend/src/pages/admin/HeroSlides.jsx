import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import AdminLayout from './AdminLayout';

function HeroSlides() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetchSlides();
  }, []);

  const fetchSlides = async () => {
    try {
      const { data } =
        await api.get('/hero-slides');

      setSlides(data);

    } catch (error) {
      console.error(error);
    }
  };

  const deleteSlide = async (id) => {
    const token =
      localStorage.getItem('token');

    if (!window.confirm('Delete Slide?')) {
      return;
    }

    try {
      await api.delete(
        `/hero-slides/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

      fetchSlides();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>
      <h1>Hero Slides</h1>

      <Link to="/admin/hero-slides/add">
        Add New Slide
      </Link>

      <br />
      <br />

      {slides.map((slide) => (
        <div
          key={slide.id}
          style={{
            border: '1px solid #ddd',
            padding: '15px',
            marginBottom: '15px'
          }}
        >
          {slide.image && (
            <img
              src={`http://localhost:5000${slide.image}`}
              alt={slide.title}
              width="250"
            />
          )}

          <h3>{slide.title}</h3>

          <p>{slide.subtitle}</p>

          <p>
            Order: {slide.order}
          </p>

          <p>
            Status:
            {slide.isActive
              ? ' Active'
              : ' Inactive'}
          </p>

          <Link
            to={`/admin/hero-slides/edit/${slide.id}`}
          >
            Edit
          </Link>

          {' | '}

          <button
            onClick={() =>
              deleteSlide(slide.id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </AdminLayout>
  );
}

export default HeroSlides;