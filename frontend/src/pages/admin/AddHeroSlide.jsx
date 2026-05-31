import { useState } from 'react';
import api from '../../services/api';
import AdminLayout from './AdminLayout';

function AddHeroSlide() {
  const [file, setFile] =
    useState(null);

  const [formData, setFormData] =
    useState({
      title: '',
      subtitle: '',
      buttonText: '',
      buttonLink: '',
      order: 1,
      isActive: true
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token =
        localStorage.getItem('token');

      let imageUrl = '';

      if (file) {
        const uploadData =
          new FormData();

        uploadData.append(
          'image',
          file
        );

        const uploadResponse =
          await api.post(
            '/upload?type=hero',
            uploadData,
            {
              headers: {
                Authorization:
                  `Bearer ${token}`
              }
            }
          );

        imageUrl =
          uploadResponse.data.imageUrl;
      }

      await api.post(
        '/hero-slides',
        {
          ...formData,
          image: imageUrl
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

      alert('Slide Added');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>
      <h1>Add Hero Slide</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value
            })
          }
        />

        <br /><br />

        <textarea
          placeholder="Subtitle"
          onChange={(e) =>
            setFormData({
              ...formData,
              subtitle: e.target.value
            })
          }
        />

        <br /><br />

        <input
          placeholder="Button Text"
          onChange={(e) =>
            setFormData({
              ...formData,
              buttonText:
                e.target.value
            })
          }
        />

        <br /><br />

        <input
          placeholder="Button Link"
          onChange={(e) =>
            setFormData({
              ...formData,
              buttonLink:
                e.target.value
            })
          }
        />

        <br /><br />

        <input
          type="number"
          placeholder="Order"
          onChange={(e) =>
            setFormData({
              ...formData,
              order:
                Number(
                  e.target.value
                )
            })
          }
        />

        <br /><br />

        <input
          type="file"
          onChange={(e) =>
            setFile(
              e.target.files[0]
            )
          }
        />

        <br /><br />

        <button type="submit">
          Save Slide
        </button>
      </form>
    </AdminLayout>
  );
}

export default AddHeroSlide;