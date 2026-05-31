import { useState } from 'react';
import api from '../../services/api';
import AdminLayout from './AdminLayout';

function AddTestimonial() {
  const [file, setFile] =
    useState(null);

  const [formData, setFormData] =
    useState({
      name: '',
      company: '',
      review: '',
      rating: 5
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token =
        localStorage.getItem(
          'token'
        );

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
            '/upload?type=testimonial',
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
        '/testimonials',
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

      alert(
        'Testimonial Added'
      );

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>
      <h1>
        Add Testimonial
      </h1>

      <form
        onSubmit={
          handleSubmit
        }
      >
        <input
          placeholder="Customer Name"
          onChange={(e) =>
            setFormData({
              ...formData,
              name:
                e.target.value
            })
          }
        />

        <br />
        <br />

        <input
          placeholder="Company"
          onChange={(e) =>
            setFormData({
              ...formData,
              company:
                e.target.value
            })
          }
        />

        <br />
        <br />

        <textarea
          placeholder="Review"
          onChange={(e) =>
            setFormData({
              ...formData,
              review:
                e.target.value
            })
          }
        />

        <br />
        <br />

        <input
          type="number"
          min="1"
          max="5"
          value={
            formData.rating
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              rating:
                Number(
                  e.target
                    .value
                )
            })
          }
        />

        <br />
        <br />

        <input
          type="file"
          onChange={(e) =>
            setFile(
              e.target
                .files[0]
            )
          }
        />

        <br />
        <br />

        <button
          type="submit"
        >
          Save Testimonial
        </button>
      </form>
    </AdminLayout>
  );
}

export default AddTestimonial;