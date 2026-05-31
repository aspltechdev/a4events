import { useState } from 'react';
import api from '../../services/api';
import AdminLayout from './AdminLayout';
function AddProduct() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: ''
  });

  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');

      let imageUrl = '';

      if (file) {
        const uploadData = new FormData();

        uploadData.append('image', file);

        const uploadResponse =
          await api.post(
            '/upload?type=product',
            uploadData,
            {
              headers: {
                Authorization: `Bearer ${token}`
              }
            }
          );

        imageUrl =
          uploadResponse.data.imageUrl;
      }

      await api.post(
        '/products',
        {
          ...formData,
          price: Number(formData.price),
          image: imageUrl
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert('Product Added');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>
    <div>
      <h1>Add Product</h1>

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

        <br />
        <br />

        <textarea
          placeholder="Description"
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value
            })
          }
        />

        <br />
        <br />

        <input
          placeholder="Price"
          type="number"
          onChange={(e) =>
            setFormData({
              ...formData,
              price: e.target.value
            })
          }
        />

        <br />
        <br />

        <input
          type="file"
          onChange={(e) =>
            setFile(e.target.files[0])
          }
        />

        <br />
        <br />

        <button type="submit">
          Save Product
        </button>
      </form>
    </div>
</AdminLayout>
  );
}

export default AddProduct;