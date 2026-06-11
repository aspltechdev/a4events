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


// import { useState } from "react";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./AddProduct.css";

// function AddProduct() {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     price: "",
//     image: "",
//     featured: false,
//   });

//   const [file, setFile] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem("token");

//       let imageUrl = "";

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

//       await api.post(
//         "/products",
//         {
//           ...formData,
//           price: Number(formData.price),
//           image: imageUrl,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("Product Added Successfully");

//       setFormData({
//         title: "",
//         description: "",
//         price: "",
//         image: "",
//         featured: false,
//       });

//       setFile(null);

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>

//       <div className="a4-add-product-page">

//         <div className="a4-add-product-header">

//           <h1>Add Product</h1>

//           <p>
//             Create a new food, snack or beverage product.
//           </p>

//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="a4-add-product-form"
//         >

//           <div className="a4-form-group">

//             <label>
//               Product Title
//             </label>

//             <input
//               type="text"
//               placeholder="Enter product title"
//               value={formData.title}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   title: e.target.value,
//                 })
//               }
//             />

//           </div>

//           <div className="a4-form-group">

//             <label>
//               Description
//             </label>

//             <textarea
//               rows="5"
//               placeholder="Write product description..."
//               value={formData.description}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   description: e.target.value,
//                 })
//               }
//             />

//           </div>

//           <div className="a4-form-grid">

//             <div className="a4-form-group">

//               <label>
//                 Price
//               </label>

//               <input
//                 type="number"
//                 placeholder="0.00"
//                 value={formData.price}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     price: e.target.value,
//                   })
//                 }
//               />

//             </div>

//             <div className="a4-form-group">

//               <label>
//                 Product Image
//               </label>

//               <input
//                 type="file"
//                 onChange={(e) =>
//                   setFile(e.target.files[0])
//                 }
//               />

//             </div>

//           </div>

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
//               Mark as Featured Product
//             </span>

//           </div>

//           <button
//             type="submit"
//             className="a4-save-product-btn"
//           >
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
    category: "Organics",
    discountPercent: 0,
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

        imageUrl = uploadResponse.data.imageUrl;
      }

      await api.post(
        "/products",
        {
          ...formData,
          price: Number(formData.price),
          discountPercent: Number(formData.discountPercent),
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
        category: "Organics",
        discountPercent: 0,
        image: "",
        featured: false,
      });

      setFile(null);
    } catch (error) {
      console.error(error);
      alert("Failed to add product");
    }
  };

  return (
    <AdminLayout>
      <div className="a4-add-product-page">
        <div className="a4-add-product-header">
          <h1>Add Product</h1>

          <p>
            Create a new food, organic, rice, snacks or grocery product.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="a4-add-product-form"
        >
          {/* Product Title */}

          <div className="a4-form-group">
            <label>Product Title</label>

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
              required
            />
          </div>

          {/* Description */}

          <div className="a4-form-group">
            <label>Description</label>

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
              required
            />
          </div>

          {/* Category */}

          <div className="a4-form-group">
            <label>Category</label>

            <select
              value={formData.category}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  category: e.target.value,
                })
              }
            >
              <option value="Millet Mix & Soups">
                Millet Mix & Soups
              </option>

              <option value="Organics">
                Organics
              </option>

              <option value="Pulses">
                Pulses
              </option>

              <option value="Oil">
                Oil
              </option>

              <option value="Rice">
                Rice
              </option>

              <option value="Snacks">
                Snacks
              </option>

              <option value="Frozen Items">
                Frozen Items
              </option>

              <option value="Fresh Items">
                Fresh Items - Seasonal Fruits & Flowers
              </option>
            </select>
          </div>

          {/* Price + Discount */}

          <div className="a4-form-grid">
            <div className="a4-form-group">
              <label>Price (₹)</label>

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
                required
              />
            </div>

            <div className="a4-form-group">
              <label>Discount (%)</label>

              <input
                type="number"
                min="0"
                max="100"
                placeholder="0"
                value={formData.discountPercent}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    discountPercent: e.target.value,
                  })
                }
              />
            </div>
          </div>

          {/* Product Image */}

          <div className="a4-form-group">
            <label>Product Image</label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setFile(e.target.files[0])
              }
            />
          </div>

          {/* Featured */}

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