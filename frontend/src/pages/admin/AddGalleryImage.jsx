import { useState } from 'react';
import api from '../../services/api';
import AdminLayout from './AdminLayout';

function AddGalleryImage() {
  const [file, setFile] =
    useState(null);

  const [formData, setFormData] =
    useState({
      title: '',
      category: ''
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
            '/upload?type=gallery',
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
        '/gallery',
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

      alert('Image Added');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>
      <h1>Add Gallery Image</h1>

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

        <input
          placeholder="Category"
          onChange={(e) =>
            setFormData({
              ...formData,
              category:
                e.target.value
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
          Save Image
        </button>
      </form>
    </AdminLayout>
  );
}

export default AddGalleryImage;