import {
  useEffect,
  useState
} from 'react';

import { useParams } from 'react-router-dom';
import api from '../../services/api';
import AdminLayout from './AdminLayout';

function EditTestimonial() {
  const { id } =
    useParams();

  const [file, setFile] =
    useState(null);

  const [formData, setFormData] =
    useState({
      name: '',
      company: '',
      review: '',
      rating: 5,
      image: ''
    });

  useEffect(() => {
    loadTestimonial();
  }, []);

  const loadTestimonial =
    async () => {
      try {
        const { data } =
          await api.get(
            `/testimonials/${id}`
          );

        setFormData(
          data
        );

      } catch (error) {
        console.error(
          error
        );
      }
    };

  const handleSubmit =
    async (e) => {
      e.preventDefault();

      try {
        const token =
          localStorage.getItem(
            'token'
          );

        let imageUrl =
          formData.image;

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

        await api.put(
          `/testimonials/${id}`,
          {
            ...formData,
            image:
              imageUrl
          },
          {
            headers: {
              Authorization:
                `Bearer ${token}`
            }
          }
        );

        alert(
          'Testimonial Updated'
        );

      } catch (error) {
        console.error(
          error
        );
      }
    };

  return (
    <AdminLayout>
      <h1>
        Edit Testimonial
      </h1>

      <form
        onSubmit={
          handleSubmit
        }
      >
        <input
          value={
            formData.name
          }
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
          value={
            formData.company
          }
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
          value={
            formData.review
          }
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

        {formData.image && (
          <img
            src={`http://localhost:5000${formData.image}`}
            alt=""
            width="120"
          />
        )}

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
          Update Testimonial
        </button>
      </form>
    </AdminLayout>
  );
}

export default EditTestimonial;