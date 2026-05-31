import {
  useEffect,
  useState
} from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import AdminLayout from './AdminLayout';

function EditGalleryImage() {
  const { id } = useParams();

  const [file, setFile] =
    useState(null);

  const [formData, setFormData] =
    useState({
      title: '',
      category: '',
      image: ''
    });

  useEffect(() => {
    loadImage();
  }, []);

  const loadImage = async () => {
    try {
      const { data } =
        await api.get(
          `/gallery/${id}`
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

      await api.put(
        `/gallery/${id}`,
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

      alert('Image Updated');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>
      <h1>Edit Gallery Image</h1>

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

        <input
          value={formData.category}
          onChange={(e) =>
            setFormData({
              ...formData,
              category:
                e.target.value
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
          Update Image
        </button>
      </form>
    </AdminLayout>
  );
}

export default EditGalleryImage;