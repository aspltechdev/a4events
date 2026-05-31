// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function EditProduct() {
//   const { id } = useParams();

//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: ''
//   });

//   useEffect(() => {
//     loadProduct();
//   }, []);

//   const loadProduct = async () => {
//     try {
//       const { data } =
//         await api.get(`/products/${id}`);

//       setFormData({
//         title: data.title,
//         description: data.description,
//         price: data.price
//       });

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token =
//         localStorage.getItem('token');

//       await api.put(
//         `/products/${id}`,
//         formData,
//         {
//           headers: {
//             Authorization:
//               `Bearer ${token}`
//           }
//         }
//       );

//       alert('Product Updated');

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>
//       <h1>Edit Product</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           value={formData.title}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               title: e.target.value
//             })
//           }
//         />

//         <br /><br />

//         <textarea
//           value={formData.description}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               description: e.target.value
//             })
//           }
//         />

//         <br /><br />

//         <input
//           type="number"
//           value={formData.price}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               price: e.target.value
//             })
//           }
//         />

//         <br /><br />

//         <button type="submit">
//           Update Product
//         </button>
//       </form>
//     </AdminLayout>
//   );
// }

// export default EditProduct;


import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import AdminLayout from './AdminLayout';

function EditProduct() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: ''
  });

  const [file, setFile] = useState(null);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      const { data } = await api.get(`/products/${id}`);

      setFormData({
        title: data.title,
        description: data.description,
        price: data.price,
        image: data.image || ''
      });

    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');

      let imageUrl = formData.image;

      // Upload new image if selected
      if (file) {
        const uploadData = new FormData();

        uploadData.append('image', file);

        const uploadResponse = await api.post(
          '/upload?type=product',
          uploadData,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        imageUrl = uploadResponse.data.imageUrl;
      }

      await api.put(
        `/products/${id}`,
        {
          title: formData.title,
          description: formData.description,
          price: Number(formData.price),
          image: imageUrl
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert('Product Updated');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>
      <h1>Edit Product</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={formData.title}
          onChange={(e) =>
            setFormData({
              ...formData,
              title: e.target.value
            })
          }
        />

        <br /><br />

        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData({
              ...formData,
              description: e.target.value
            })
          }
        />

        <br /><br />

        <input
          type="number"
          value={formData.price}
          onChange={(e) =>
            setFormData({
              ...formData,
              price: e.target.value
            })
          }
        />

        <br /><br />

        {formData.image && (
          <>
            <img
              src={`http://localhost:5000${formData.image}`}
              alt="Product"
              width="200"
            />
            <br /><br />
          </>
        )}

        <input
          type="file"
          onChange={(e) =>
            setFile(e.target.files[0])
          }
        />

        <br /><br />

        <button type="submit">
          Update Product
        </button>
      </form>
    </AdminLayout>
  );
}

export default EditProduct;