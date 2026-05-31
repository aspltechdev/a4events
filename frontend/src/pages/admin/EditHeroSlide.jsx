import {
  useEffect,
  useState
} from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import AdminLayout from './AdminLayout';

function EditHeroSlide() {
  const { id } = useParams();

  const [file, setFile] =
    useState(null);

  const [formData, setFormData] =
    useState({
      title: '',
      subtitle: '',
      buttonText: '',
      buttonLink: '',
      order: 1,
      image: '',
      isActive: true
    });

  useEffect(() => {
    loadSlide();
  }, []);

  const loadSlide = async () => {
    try {
      const { data } =
        await api.get(
          `/hero-slides/${id}`
        );

      setFormData(data);

    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token =
        localStorage.getItem('token');

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

      await api.put(
        `/hero-slides/${id}`,
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

      alert('Slide Updated');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>
      <h1>Edit Hero Slide</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              title:
                e.target.value
            })
          }
        />

        <br /><br />

        <textarea
          value={formData.subtitle}
          onChange={(e) =>
            setFormData({
              ...formData,
              subtitle:
                e.target.value
            })
          }
        />

        <br /><br />

        <input
          value={formData.buttonText}
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
          value={formData.buttonLink}
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
          value={formData.order}
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

        {formData.image && (
          <img
            src={`http://localhost:5000${formData.image}`}
            alt=""
            width="250"
          />
        )}

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
          Update Slide
        </button>
      </form>
    </AdminLayout>
  );
}

export default EditHeroSlide;