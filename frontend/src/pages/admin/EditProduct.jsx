

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










// import { useEffect, useState } from "react";
// import {
//   useParams,
//   useNavigate
// } from "react-router-dom";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./EditProduct.css";

// function EditProduct() {
//   const { id } = useParams();
//   const navigate = useNavigate();

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
//       const { data } = await api.get(
//         `/products/${id}`
//       );

//       setFormData({
//         title: data.title || "",
//         description:
//           data.description || "",
//         price: data.price || "",
//         image: data.image || "",
//         featured:
//           data.featured || false,
//       });

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token =
//         localStorage.getItem("token");

//       let imageUrl = formData.image;

//       if (file) {
//         const uploadData =
//           new FormData();

//         uploadData.append(
//           "image",
//           file
//         );

//         const uploadResponse =
//           await api.post(
//             "/upload?type=product",
//             uploadData,
//             {
//               headers: {
//                 Authorization:
//                   `Bearer ${token}`,
//               },
//             }
//           );

//         imageUrl =
//           uploadResponse.data.imageUrl;
//       }

//       await api.put(
//         `/products/${id}`,
//         {
//           title: formData.title,
//           description:
//             formData.description,
//           price: Number(
//             formData.price
//           ),
//           image: imageUrl,
//           featured:
//             formData.featured,
//         },
//         {
//           headers: {
//             Authorization:
//               `Bearer ${token}`,
//           },
//         }
//       );

//       alert(
//         "Product Updated Successfully"
//       );

//       navigate("/admin/products");

//     } catch (error) {
//       console.error(error);
//       alert(
//         "Failed to update product"
//       );
//     }
//   };

//   return (
//     <AdminLayout>
//       <div className="a4-edit-product-page">

//         <div className="a4-edit-product-header">

//           <button
//             type="button"
//             className="a4-back-btn"
//             onClick={() =>
//               navigate(
//                 "/admin/products"
//               )
//             }
//           >
//             ← Back to Products
//           </button>

//           <h1>Edit Product</h1>

//           <p>
//             Update product details,
//             pricing and images.
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
//                   title:
//                     e.target.value,
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
//               value={
//                 formData.description
//               }
//               placeholder="Product Description"
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   description:
//                     e.target.value,
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
//                     price:
//                       e.target.value,
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
//                   setFile(
//                     e.target.files[0]
//                   )
//                 }
//               />

//             </div>

//           </div>

//           {formData.image &&
//             !file && (
//               <div className="a4-image-section">

//                 <label>
//                   Current Image
//                 </label>

//                 <img
//                   src={`http://localhost:5000${formData.image}`}
//                   alt="Current Product"
//                   className="a4-product-preview"
//                 />

//               </div>
//             )}

//           {file && (
//             <div className="a4-image-section">

//               <label>
//                 New Image Preview
//               </label>

//               <img
//                 src={URL.createObjectURL(
//                   file
//                 )}
//                 alt="Preview"
//                 className="a4-product-preview"
//               />

//             </div>
//           )}

//           <div className="a4-checkbox-row">

//             <input
//               type="checkbox"
//               checked={
//                 formData.featured
//               }
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   featured:
//                     e.target.checked,
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


// import { useEffect, useState } from "react";
// import {
//   useParams,
//   useNavigate
// } from "react-router-dom";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./EditProduct.css";

// function EditProduct() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     price: "",
//     category: "Organics",
//     discountPercent: 0,
//     image: "",
//     featured: false,
//   });

//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     loadProduct();
//   }, []);

//   const loadProduct = async () => {
//     try {
//       const { data } = await api.get(
//         `/products/${id}`
//       );

//       setFormData({
//         title: data.title || "",
//         description: data.description || "",
//         price: data.price || "",
//         category:
//           data.category || "Organics",
//         discountPercent:
//           data.discountPercent || 0,
//         image: data.image || "",
//         featured:
//           data.featured || false,
//       });

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token =
//         localStorage.getItem("token");

//       let imageUrl = formData.image;

//       if (file) {
//         const uploadData =
//           new FormData();

//         uploadData.append(
//           "image",
//           file
//         );

//         const uploadResponse =
//           await api.post(
//             "/upload?type=product",
//             uploadData,
//             {
//               headers: {
//                 Authorization:
//                   `Bearer ${token}`,
//               },
//             }
//           );

//         imageUrl =
//           uploadResponse.data.imageUrl;
//       }

//       await api.put(
//         `/products/${id}`,
//         {
//           title: formData.title,
//           description:
//             formData.description,
//           price: Number(
//             formData.price
//           ),
//           category:
//             formData.category,
//           discountPercent: Number(
//             formData.discountPercent
//           ),
//           image: imageUrl,
//           featured:
//             formData.featured,
//         },
//         {
//           headers: {
//             Authorization:
//               `Bearer ${token}`,
//           },
//         }
//       );

//       alert(
//         "Product Updated Successfully"
//       );

//       navigate("/admin/products");

//     } catch (error) {
//       console.error(error);

//       alert(
//         "Failed to update product"
//       );
//     }
//   };

//   return (
//     <AdminLayout>
//       <div className="a4-edit-product-page">

//         <div className="a4-edit-product-header">

//           <button
//             type="button"
//             className="a4-back-btn"
//             onClick={() =>
//               navigate(
//                 "/admin/products"
//               )
//             }
//           >
//             ← Back to Products
//           </button>

//           <h1>Edit Product</h1>

//           <p>
//             Update product details,
//             pricing, discounts and
//             images.
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
//                   title:
//                     e.target.value,
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
//               value={
//                 formData.description
//               }
//               placeholder="Product Description"
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   description:
//                     e.target.value,
//                 })
//               }
//             />

//           </div>

//           <div className="a4-edit-group">

//             <label>
//               Category
//             </label>

//             <select
//               value={
//                 formData.category
//               }
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   category:
//                     e.target.value,
//                 })
//               }
//             >
//               <option value="Millet Mix & Soups">
//                 Millet Mix & Soups
//               </option>

//               <option value="Organics">
//                 Organics
//               </option>

//               <option value="Pulses">
//                 Pulses
//               </option>

//               <option value="Oil">
//                 Oil
//               </option>

//               <option value="Rice">
//                 Rice
//               </option>

//               <option value="Snacks">
//                 Snacks
//               </option>

//               <option value="Frozen Items">
//                 Frozen Items
//               </option>

//               <option value="Fresh Items">
//                 Fresh Items -
//                 Seasonal Fruits &
//                 Flowers
//               </option>
//             </select>

//           </div>

//           <div className="a4-edit-grid">

//             <div className="a4-edit-group">

//               <label>
//                 Price (₹)
//               </label>

//               <input
//                 type="number"
//                 value={
//                   formData.price
//                 }
//                 placeholder="Price"
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     price:
//                       e.target.value,
//                   })
//                 }
//               />

//             </div>

//             <div className="a4-edit-group">

//               <label>
//                 Discount (%)
//               </label>

//               <input
//                 type="number"
//                 min="0"
//                 max="100"
//                 value={
//                   formData.discountPercent
//                 }
//                 placeholder="0"
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     discountPercent:
//                       e.target.value,
//                   })
//                 }
//               />

//             </div>

//           </div>

//           <div className="a4-edit-group">

//             <label>
//               Upload New Image
//             </label>

//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) =>
//                 setFile(
//                   e.target.files[0]
//                 )
//               }
//             />

//           </div>

//           {formData.image &&
//             !file && (
//               <div className="a4-image-section">

//                 <label>
//                   Current Image
//                 </label>

//                 <img
//                   src={`http://localhost:5000${formData.image}`}
//                   alt="Current Product"
//                   className="a4-product-preview"
//                 />

//               </div>
//             )}

//           {file && (
//             <div className="a4-image-section">

//               <label>
//                 New Image Preview
//               </label>

//               <img
//                 src={URL.createObjectURL(
//                   file
//                 )}
//                 alt="Preview"
//                 className="a4-product-preview"
//               />

//             </div>
//           )}

//           <div className="a4-checkbox-row">

//             <input
//               type="checkbox"
//               checked={
//                 formData.featured
//               }
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   featured:
//                     e.target.checked,
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
import { useParams, useNavigate } from "react-router-dom";
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
    category: "Organics",
    discountPercent: 0,
    image: "",
    featured: false,
  });

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadProduct();
  }, [id]);

  const loadProduct = async () => {
    try {
      const { data } = await api.get(`/products/${id}`);

      setFormData({
        title: data.title || "",
        description: data.description || "",
        price: data.price || "",
        category: data.category || "Organics",
        discountPercent: data.discountPercent || 0,
        image: data.image || "",
        featured: data.featured || false,
      });

      setPreview(`http://localhost:5000${data.image}`);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const token = localStorage.getItem("token");

      let imageUrl = formData.image;

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

      await api.put(
        `/products/${id}`,
        {
          title: formData.title,
          description: formData.description,
          price: Number(formData.price),
          category: formData.category,
          discountPercent: Number(formData.discountPercent),
          image: imageUrl,
          featured: formData.featured,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Product Updated Successfully");
      navigate("/admin/products");
    } catch (error) {
      console.error(error);
      alert("Failed to update product");
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = [
    "Millet Mix & Soups",
    "Organics",
    "Pulses",
    "Oil",
    "Rice",
    "Snacks",
    "Frozen Items",
    "Fresh Items - Seasonal Fruits & Flowers",
  ];

  if (loading) {
    return (
      <AdminLayout>
        <div className="aep-loading">
          <div className="aep-loading-spinner"></div>
          <p>Loading product...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="aep-admin">
        {/* Header */}
        <div className="aep-header">
          <button
            type="button"
            className="aep-back-btn"
            onClick={() => navigate("/admin/products")}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Products
          </button>
          <div className="aep-header-info">
            <h1>Edit Product</h1>
            <p>Update product details, pricing, discounts and images</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="aep-form">
          <div className="aep-form-grid">
            {/* Left Column */}
            <div className="aep-form-left">
              {/* Product Title */}
              <div className="aep-form-group">
                <label>Product Title</label>
                <div className="aep-input-wrapper">
                  <svg className="aep-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 4h12M3 9h8M3 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <input
                    type="text"
                    value={formData.title}
                    placeholder="Product Title"
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Description */}
              <div className="aep-form-group">
                <label>Description</label>
                <div className="aep-textarea-wrapper">
                  <svg className="aep-textarea-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M2 4h14M2 9h10M2 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <textarea
                    rows="5"
                    value={formData.description}
                    placeholder="Product Description"
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Category */}
              <div className="aep-form-group">
                <label>Category</label>
                <div className="aep-select-wrapper">
                  <svg className="aep-select-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M6 8l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Price + Discount */}
              <div className="aep-form-row">
                <div className="aep-form-group">
                  <label>Price (₹)</label>
                  <div className="aep-input-wrapper">
                    <svg className="aep-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M9 5v8M6 7h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <input
                      type="number"
                      value={formData.price}
                      placeholder="Price"
                      onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="aep-form-group">
                  <label>Discount (%)</label>
                  <div className="aep-input-wrapper">
                    <svg className="aep-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="6" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={formData.discountPercent}
                      placeholder="0"
                      onChange={(e) => setFormData({ ...formData, discountPercent: e.target.value })}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="aep-form-right">
              {/* Image Upload */}
              <div className="aep-form-group">
                <label>Product Image</label>
                <div className="aep-upload-area">
                  {preview ? (
                    <div className="aep-preview">
                      <img src={preview} alt="Preview" className="aep-preview-image" />
                      <button
                        type="button"
                        className="aep-preview-remove"
                        onClick={() => {
                          setFile(null);
                          setPreview(formData.image ? `http://localhost:5000${formData.image}` : null);
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </button>
                      {file && <span className="aep-preview-badge">New</span>}
                    </div>
                  ) : (
                    <label className="aep-upload-label">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect x="4" y="6" width="32" height="28" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="14" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M36 28l-10-10-6 6-4-4-12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Click to upload new image</span>
                      <span className="aep-upload-hint">PNG, JPG or WEBP (Max 5MB)</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="aep-file-input"
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Featured Checkbox */}
              <div className="aep-form-group">
                <label className="aep-checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="aep-checkbox"
                  />
                  <span className="aep-checkbox-custom"></span>
                  <span className="aep-checkbox-text">Featured Product</span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="aep-form-footer">
            <button
              type="submit"
              className="aep-btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="aep-btn-spinner"></span>
                  Updating...
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M5 9l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Update Product
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

export default EditProduct;