import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import AdminLayout from './AdminLayout';

function Gallery() {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const { data } = await api.get('/gallery');
      setGallery(data);

    } catch (error) {
      console.error(error);
    }
  };

  const deleteImage = async (id) => {
    const token = localStorage.getItem('token');

    if (!window.confirm('Delete Image?')) {
      return;
    }

    try {
      await api.delete(
        `/gallery/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      fetchGallery();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>
      <h1>Gallery</h1>

      <Link to="/admin/gallery/add">
        Add Gallery Image
      </Link>

      <br />
      <br />

      {gallery.map((item) => (
        <div
          key={item.id}
          style={{
            border: '1px solid #ddd',
            padding: '15px',
            marginBottom: '15px'
          }}
        >
          {item.image && (
            <img
              src={`http://localhost:5000${item.image}`}
              alt={item.title}
              width="250"
            />
          )}

          <h3>{item.title}</h3>

          <p>
            Category:
            {' '}
            {item.category}
          </p>

          <Link
            to={`/admin/gallery/edit/${item.id}`}
          >
            Edit
          </Link>

          {' | '}

          <button
            onClick={() =>
              deleteImage(item.id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </AdminLayout>
  );
}

export default Gallery;