

// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function EditProduct() {
//   const { id } = useParams();

//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: '',
//     image: ''
//   });

//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     loadProduct();
//   }, []);

//   const loadProduct = async () => {
//     try {
//       const { data } = await api.get(`/products/${id}`);

//       setFormData({
//         title: data.title,
//         description: data.description,
//         price: data.price,
//         image: data.image || ''
//       });

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem('token');

//       let imageUrl = formData.image;

//       // Upload new image if selected
//       if (file) {
//         const uploadData = new FormData();

//         uploadData.append('image', file);

//         const uploadResponse = await api.post(
//           '/upload?type=product',
//           uploadData,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`
//             }
//           }
//         );

//         imageUrl = uploadResponse.data.imageUrl;
//       }

//       await api.put(
//         `/products/${id}`,
//         {
//           title: formData.title,
//           description: formData.description,
//           price: Number(formData.price),
//           image: imageUrl
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
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

//         {formData.image && (
//           <>
//             <img
//               src={`http://localhost:5000${formData.image}`}
//               alt="Product"
//               width="200"
//             />
//             <br /><br />
//           </>
//         )}

//         <input
//           type="file"
//           onChange={(e) =>
//             setFile(e.target.files[0])
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


// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function EditProduct() {
//   const { id } = useParams();

//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     price: '',
//     image: '',
//     featured: false
//   });

//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     loadProduct();
//   }, []);

//   const loadProduct = async () => {
//     try {
//       const { data } = await api.get(`/products/${id}`);

//       setFormData({
//         title: data.title || '',
//         description: data.description || '',
//         price: data.price || '',
//         image: data.image || '',
//         featured: data.featured || false
//       });

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem('token');

//       let imageUrl = formData.image;

//       // Upload new image if selected
//       if (file) {
//         const uploadData = new FormData();

//         uploadData.append('image', file);

//         const uploadResponse = await api.post(
//           '/upload?type=product',
//           uploadData,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`
//             }
//           }
//         );

//         imageUrl =
//           uploadResponse.data.imageUrl;
//       }

//       await api.put(
//         `/products/${id}`,
//         {
//           title: formData.title,
//           description: formData.description,
//           price: Number(formData.price),
//           image: imageUrl,
//           featured: formData.featured
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
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
//       <div>
//         <h1>Edit Product</h1>

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Title"
//             value={formData.title}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 title: e.target.value
//               })
//             }
//           />

//           <br />
//           <br />

//           <textarea
//             placeholder="Description"
//             value={formData.description}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 description: e.target.value
//               })
//             }
//           />

//           <br />
//           <br />

//           <input
//             type="number"
//             placeholder="Price"
//             value={formData.price}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 price: e.target.value
//               })
//             }
//           />

//           <br />
//           <br />

//           <h4>Current Image</h4>

//           {formData.image && (
//             <>
//               <img
//                 src={`http://localhost:5000${formData.image}`}
//                 alt="Product"
//                 width="200"
//               />

//               <br />
//               <br />
//             </>
//           )}

//           <input
//             type="file"
//             onChange={(e) =>
//               setFile(e.target.files[0])
//             }
//           />

//           <br />
//           <br />

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

//           <br />
//           <br />

//           <button type="submit">
//             Update Product
//           </button>
//         </form>
//       </div>
//     </AdminLayout>
//   );
// }

// export default EditProduct;





























// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./EditProduct.css";

// function EditProduct() {
//   const { id } = useParams();

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     price: "",
//     image: "",
//     featured: false,
//   });

//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     loadProduct();
//   }, []);

//   const loadProduct = async () => {
//     try {
//       const { data } = await api.get(`/products/${id}`);

//       setFormData({
//         title: data.title || "",
//         description: data.description || "",
//         price: data.price || "",
//         image: data.image || "",
//         featured: data.featured || false,
//       });

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem("token");

//       let imageUrl = formData.image;

//       if (file) {
//         const uploadData = new FormData();

//         uploadData.append("image", file);

//         const uploadResponse = await api.post(
//           "/upload?type=product",
//           uploadData,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         imageUrl =
//           uploadResponse.data.imageUrl;
//       }

//       await api.put(
//         `/products/${id}`,
//         {
//           title: formData.title,
//           description: formData.description,
//           price: Number(formData.price),
//           image: imageUrl,
//           featured: formData.featured,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("Product Updated Successfully");

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>

//       <div className="a4-edit-product-page">

//         <div className="a4-edit-product-header">

//           <h1>Edit Product</h1>

//           <p>
//             Update product details, pricing and images.
//           </p>

//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="a4-edit-product-form"
//         >

//           <div className="a4-edit-group">

//             <label>
//               Product Title
//             </label>

//             <input
//               type="text"
//               value={formData.title}
//               placeholder="Product Title"
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   title: e.target.value,
//                 })
//               }
//             />

//           </div>

//           <div className="a4-edit-group">

//             <label>
//               Description
//             </label>

//             <textarea
//               rows="5"
//               value={formData.description}
//               placeholder="Product Description"
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   description: e.target.value,
//                 })
//               }
//             />

//           </div>

//           <div className="a4-edit-grid">

//             <div className="a4-edit-group">

//               <label>
//                 Price
//               </label>

//               <input
//                 type="number"
//                 value={formData.price}
//                 placeholder="Price"
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     price: e.target.value,
//                   })
//                 }
//               />

//             </div>

//             <div className="a4-edit-group">

//               <label>
//                 Upload New Image
//               </label>

//               <input
//                 type="file"
//                 onChange={(e) =>
//                   setFile(e.target.files[0])
//                 }
//               />

//             </div>

//           </div>

//           {/* Current Image */}

//           {formData.image && !file && (
//             <div className="a4-image-section">

//               <label>
//                 Current Image
//               </label>

//               <img
//                 src={`http://localhost:5000${formData.image}`}
//                 alt="Current Product"
//                 className="a4-product-preview"
//               />

//             </div>
//           )}

//           {/* New Preview */}

//           {file && (
//             <div className="a4-image-section">

//               <label>
//                 New Image Preview
//               </label>

//               <img
//                 src={URL.createObjectURL(file)}
//                 alt="Preview"
//                 className="a4-product-preview"
//               />

//             </div>
//           )}

//           <div className="a4-checkbox-row">

//             <input
//               type="checkbox"
//               checked={formData.featured}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   featured: e.target.checked,
//                 })
//               }
//             />

//             <span>
//               Featured Product
//             </span>

//           </div>

//           <button
//             type="submit"
//             className="a4-update-product-btn"
//           >
//             Update Product
//           </button>

//         </form>

//       </div>

//     </AdminLayout>
//   );
// }

// export default EditProduct;










import { useEffect, useState } from "react";
import {
  useParams,
  useNavigate
} from "react-router-dom";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./EditProduct.css";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    featured: false,
  });

  const [file, setFile] = useState(null);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      const { data } = await api.get(
        `/products/${id}`
      );

      setFormData({
        title: data.title || "",
        description:
          data.description || "",
        price: data.price || "",
        image: data.image || "",
        featured:
          data.featured || false,
      });

    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token =
        localStorage.getItem("token");

      let imageUrl = formData.image;

      if (file) {
        const uploadData =
          new FormData();

        uploadData.append(
          "image",
          file
        );

        const uploadResponse =
          await api.post(
            "/upload?type=product",
            uploadData,
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        imageUrl =
          uploadResponse.data.imageUrl;
      }

      await api.put(
        `/products/${id}`,
        {
          title: formData.title,
          description:
            formData.description,
          price: Number(
            formData.price
          ),
          image: imageUrl,
          featured:
            formData.featured,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      alert(
        "Product Updated Successfully"
      );

      navigate("/admin/products");

    } catch (error) {
      console.error(error);
      alert(
        "Failed to update product"
      );
    }
  };

  return (
    <AdminLayout>
      <div className="a4-edit-product-page">

        <div className="a4-edit-product-header">

          <button
            type="button"
            className="a4-back-btn"
            onClick={() =>
              navigate(
                "/admin/products"
              )
            }
          >
            ← Back to Products
          </button>

          <h1>Edit Product</h1>

          <p>
            Update product details,
            pricing and images.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="a4-edit-product-form"
        >

          <div className="a4-edit-group">

            <label>
              Product Title
            </label>

            <input
              type="text"
              value={formData.title}
              placeholder="Product Title"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title:
                    e.target.value,
                })
              }
            />

          </div>

          <div className="a4-edit-group">

            <label>
              Description
            </label>

            <textarea
              rows="5"
              value={
                formData.description
              }
              placeholder="Product Description"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  description:
                    e.target.value,
                })
              }
            />

          </div>

          <div className="a4-edit-grid">

            <div className="a4-edit-group">

              <label>
                Price
              </label>

              <input
                type="number"
                value={formData.price}
                placeholder="Price"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    price:
                      e.target.value,
                  })
                }
              />

            </div>

            <div className="a4-edit-group">

              <label>
                Upload New Image
              </label>

              <input
                type="file"
                onChange={(e) =>
                  setFile(
                    e.target.files[0]
                  )
                }
              />

            </div>

          </div>

          {formData.image &&
            !file && (
              <div className="a4-image-section">

                <label>
                  Current Image
                </label>

                <img
                  src={`http://localhost:5000${formData.image}`}
                  alt="Current Product"
                  className="a4-product-preview"
                />

              </div>
            )}

          {file && (
            <div className="a4-image-section">

              <label>
                New Image Preview
              </label>

              <img
                src={URL.createObjectURL(
                  file
                )}
                alt="Preview"
                className="a4-product-preview"
              />

            </div>
          )}

          <div className="a4-checkbox-row">

            <input
              type="checkbox"
              checked={
                formData.featured
              }
              onChange={(e) =>
                setFormData({
                  ...formData,
                  featured:
                    e.target.checked,
                })
              }
            />

            <span>
              Featured Product
            </span>

          </div>

          <button
            type="submit"
            className="a4-update-product-btn"
          >
            Update Product
          </button>

        </form>

      </div>
    </AdminLayout>
  );
}

export default EditProduct;