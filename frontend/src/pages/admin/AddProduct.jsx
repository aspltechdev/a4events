// import { useState } from 'react';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';
// function AddProduct() {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: '',
//     image: ''
//   });

//   const [file, setFile] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem('token');

//       let imageUrl = '';

//       if (file) {
//         const uploadData = new FormData();

//         uploadData.append('image', file);

//         const uploadResponse =
//           await api.post(
//             '/upload?type=product',
//             uploadData,
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`
//               }
//             }
//           );

//         imageUrl =
//           uploadResponse.data.imageUrl;
//       }

//       await api.post(
//         '/products',
//         {
//           ...formData,
//           price: Number(formData.price),
//           image: imageUrl
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       alert('Product Added');

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>
//     <div>
//       <h1>Add Product</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder="Title"
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               title: e.target.value
//             })
//           }
//         />

//         <br />
//         <br />

//         <textarea
//           placeholder="Description"
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               description: e.target.value
//             })
//           }
//         />

//         <br />
//         <br />

//         <input
//           placeholder="Price"
//           type="number"
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               price: e.target.value
//             })
//           }
//         />

//         <br />
//         <br />

//         <input
//           type="file"
//           onChange={(e) =>
//             setFile(e.target.files[0])
//           }
//         />

//         <br />
//         <br />

//         <button type="submit">
//           Save Product
//         </button>
//       </form>
//     </div>
// </AdminLayout>
//   );
// }

// export default AddProduct;




// import { useState } from 'react';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function AddProduct() {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: '',
//     image: '',
//     featured: false
//   });

//   const [file, setFile] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem('token');

//       let imageUrl = '';

//       if (file) {
//         const uploadData = new FormData();

//         uploadData.append('image', file);

//         const uploadResponse =
//           await api.post(
//             '/upload?type=product',
//             uploadData,
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`
//               }
//             }
//           );

//         imageUrl =
//           uploadResponse.data.imageUrl;
//       }

//       await api.post(
//         '/products',
//         {
//           ...formData,
//           price: Number(formData.price),
//           image: imageUrl
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       alert('Product Added');

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>
//       <div>
//         <h1>Add Product</h1>

//         <form onSubmit={handleSubmit}>
//           <input
//             placeholder="Title"
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 title: e.target.value
//               })
//             }
//           />

//           <br /><br />

//           <textarea
//             placeholder="Description"
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 description: e.target.value
//               })
//             }
//           />

//           <br /><br />

//           <input
//             placeholder="Price"
//             type="number"
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 price: e.target.value
//               })
//             }
//           />

//           <br /><br />

//           <input
//             type="file"
//             onChange={(e) =>
//               setFile(e.target.files[0])
//             }
//           />

//           <br /><br />

//           <label>
//             <input
//               type="checkbox"
//               checked={formData.featured}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   featured: e.target.checked
//                 })
//               }
//             />
//             {' '}
//             Featured Product
//           </label>

//           <br /><br />

//           <button type="submit">
//             Save Product
//           </button>
//         </form>
//       </div>
//     </AdminLayout>
//   );
// }

// export default AddProduct;


import { useState } from "react";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./AddProduct.css";

function AddProduct() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    featured: false,
  });

  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      let imageUrl = "";

      if (file) {
        const uploadData = new FormData();

        uploadData.append("image", file);

        const uploadResponse = await api.post(
          "/upload?type=product",
          uploadData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        imageUrl =
          uploadResponse.data.imageUrl;
      }

      await api.post(
        "/products",
        {
          ...formData,
          price: Number(formData.price),
          image: imageUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Product Added Successfully");

      setFormData({
        title: "",
        description: "",
        price: "",
        image: "",
        featured: false,
      });

      setFile(null);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>

      <div className="a4-add-product-page">

        <div className="a4-add-product-header">

          <h1>Add Product</h1>

          <p>
            Create a new food, snack or beverage product.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="a4-add-product-form"
        >

          <div className="a4-form-group">

            <label>
              Product Title
            </label>

            <input
              type="text"
              placeholder="Enter product title"
              value={formData.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value,
                })
              }
            />

          </div>

          <div className="a4-form-group">

            <label>
              Description
            </label>

            <textarea
              rows="5"
              placeholder="Write product description..."
              value={formData.description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  description: e.target.value,
                })
              }
            />

          </div>

          <div className="a4-form-grid">

            <div className="a4-form-group">

              <label>
                Price
              </label>

              <input
                type="number"
                placeholder="0.00"
                value={formData.price}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    price: e.target.value,
                  })
                }
              />

            </div>

            <div className="a4-form-group">

              <label>
                Product Image
              </label>

              <input
                type="file"
                onChange={(e) =>
                  setFile(e.target.files[0])
                }
              />

            </div>

          </div>

          <div className="a4-checkbox-row">

            <input
              type="checkbox"
              checked={formData.featured}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  featured: e.target.checked,
                })
              }
            />

            <span>
              Mark as Featured Product
            </span>

          </div>

          <button
            type="submit"
            className="a4-save-product-btn"
          >
            Save Product
          </button>

        </form>

      </div>

    </AdminLayout>
  );
}

export default AddProduct;