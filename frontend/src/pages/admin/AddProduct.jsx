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

// import { useState } from "react";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./AddProduct.css";

// function AddProduct() {
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

//         imageUrl = uploadResponse.data.imageUrl;
//       }

//       await api.post(
//         "/products",
//         {
//           ...formData,
//           price: Number(formData.price),
//           discountPercent: Number(formData.discountPercent),
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
//         category: "Organics",
//         discountPercent: 0,
//         image: "",
//         featured: false,
//       });

//       setFile(null);
//     } catch (error) {
//       console.error(error);
//       alert("Failed to add product");
//     }
//   };

//   return (
//     <AdminLayout>
//       <div className="a4-add-product-page">
//         <div className="a4-add-product-header">
//           <h1>Add Product</h1>

//           <p>
//             Create a new food, organic, rice, snacks or grocery product.
//           </p>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="a4-add-product-form"
//         >
//           {/* Product Title */}

//           <div className="a4-form-group">
//             <label>Product Title</label>

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
//               required
//             />
//           </div>

//           {/* Description */}

//           <div className="a4-form-group">
//             <label>Description</label>

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
//               required
//             />
//           </div>

//           {/* Category */}

//           <div className="a4-form-group">
//             <label>Category</label>

//             <select
//               value={formData.category}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   category: e.target.value,
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
//                 Fresh Items - Seasonal Fruits & Flowers
//               </option>
//             </select>
//           </div>

//           {/* Price + Discount */}

//           <div className="a4-form-grid">
//             <div className="a4-form-group">
//               <label>Price (€)</label>

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
//                 required
//               />
//             </div>

//             <div className="a4-form-group">
//               <label>Discount (%)</label>

//               <input
//                 type="number"
//                 min="0"
//                 max="100"
//                 placeholder="0"
//                 value={formData.discountPercent}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     discountPercent: e.target.value,
//                   })
//                 }
//               />
//             </div>
//           </div>

//           {/* Product Image */}

//           <div className="a4-form-group">
//             <label>Product Image</label>

//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) =>
//                 setFile(e.target.files[0])
//               }
//             />
//           </div>

//           {/* Featured */}

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



// import { useState } from "react";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./AddProduct.css";

// function AddProduct() {
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
//   const [preview, setPreview] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
    
//     if (selectedFile) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result);
//       };
//       reader.readAsDataURL(selectedFile);
//     } else {
//       setPreview(null);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

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

//         imageUrl = uploadResponse.data.imageUrl;
//       }

//       await api.post(
//         "/products",
//         {
//           ...formData,
//           price: Number(formData.price),
//           discountPercent: Number(formData.discountPercent),
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
//         category: "Organics",
//         discountPercent: 0,
//         image: "",
//         featured: false,
//       });

//       setFile(null);
//       setPreview(null);
//     } catch (error) {
//       console.error(error);
//       alert("Failed to add product");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const categories = [
//     "Millet Mix & Soups",
//     "Organics",
//     "Pulses",
//     "Oil",
//     "Rice",
//     "Snacks",
//     "Frozen Items",
//     "Fresh Items - Seasonal Fruits & Flowers"
//   ];

//   return (
//     <AdminLayout>
//       <div className="aap-admin">
//         {/* Header */}
//         <div className="aap-header">
//           <div className="aap-header-left">
//             <h1>Add Product</h1>
//             <p>Create a new food, organic, rice, snacks or grocery product</p>
//           </div>
//         </div>

//         <form onSubmit={handleSubmit} className="aap-form">
//           <div className="aap-form-grid">
//             {/* Left Column */}
//             <div className="aap-form-left">
//               {/* Product Title */}
//               <div className="aap-form-group">
//                 <label>Product Title</label>
//                 <div className="aap-input-wrapper">
//                   <svg className="aap-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
//                     <path d="M3 4h12M3 9h8M3 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//                   </svg>
//                   <input
//                     type="text"
//                     placeholder="Enter product title"
//                     value={formData.title}
//                     onChange={(e) =>
//                       setFormData({ ...formData, title: e.target.value })
//                     }
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Description */}
//               <div className="aap-form-group">
//                 <label>Description</label>
//                 <div className="aap-textarea-wrapper">
//                   <svg className="aap-textarea-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
//                     <path d="M2 4h14M2 9h10M2 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//                   </svg>
//                   <textarea
//                     rows="5"
//                     placeholder="Write product description..."
//                     value={formData.description}
//                     onChange={(e) =>
//                       setFormData({ ...formData, description: e.target.value })
//                     }
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Category */}
//               <div className="aap-form-group">
//                 <label>Category</label>
//                 <div className="aap-select-wrapper">
//                   <svg className="aap-select-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
//                     <rect x="2" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
//                     <path d="M6 8l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                   <select
//                     value={formData.category}
//                     onChange={(e) =>
//                       setFormData({ ...formData, category: e.target.value })
//                     }
//                   >
//                     {categories.map((cat) => (
//                       <option key={cat} value={cat}>{cat}</option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               {/* Price + Discount */}
//               <div className="aap-form-row">
//                 <div className="aap-form-group">
//                   <label>Price (€)</label>
//                   <div className="aap-input-wrapper">
//                     <svg className="aap-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
//                       <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
//                       <path d="M9 5v8M6 7h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//                     </svg>
//                     <input
//                       type="number"
//                       placeholder="0.00"
//                       value={formData.price}
//                       onChange={(e) =>
//                         setFormData({ ...formData, price: e.target.value })
//                       }
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="aap-form-group">
//                   <label>Discount (%)</label>
//                   <div className="aap-input-wrapper">
//                     <svg className="aap-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
//                       <path d="M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//                       <circle cx="6" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
//                       <circle cx="12" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
//                     </svg>
//                     <input
//                       type="number"
//                       min="0"
//                       max="100"
//                       placeholder="0"
//                       value={formData.discountPercent}
//                       onChange={(e) =>
//                         setFormData({ ...formData, discountPercent: e.target.value })
//                       }
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Right Column */}
//             <div className="aap-form-right">
//               {/* Image Upload */}
//               <div className="aap-form-group">
//                 <label>Product Image</label>
//                 <div className="aap-upload-area">
//                   {preview ? (
//                     <div className="aap-preview">
//                       <img src={preview} alt="Preview" className="aap-preview-image" />
//                       <button
//                         type="button"
//                         className="aap-preview-remove"
//                         onClick={() => {
//                           setFile(null);
//                           setPreview(null);
//                         }}
//                       >
//                         <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                           <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//                         </svg>
//                       </button>
//                     </div>
//                   ) : (
//                     <label className="aap-upload-label">
//                       <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
//                         <rect x="4" y="6" width="32" height="28" rx="4" stroke="currentColor" strokeWidth="1.5"/>
//                         <circle cx="14" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
//                         <path d="M36 28l-10-10-6 6-4-4-12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                       </svg>
//                       <span>Click to upload image</span>
//                       <span className="aap-upload-hint">PNG, JPG or WEBP (Max 5MB)</span>
//                       <input
//                         type="file"
//                         accept="image/*"
//                         onChange={handleFileChange}
//                         className="aap-file-input"
//                       />
//                     </label>
//                   )}
//                 </div>
//               </div>

//               {/* Featured Checkbox */}
//               <div className="aap-form-group">
//                 <label className="aap-checkbox-label">
//                   <input
//                     type="checkbox"
//                     checked={formData.featured}
//                     onChange={(e) =>
//                       setFormData({ ...formData, featured: e.target.checked })
//                     }
//                     className="aap-checkbox"
//                   />
//                   <span className="aap-checkbox-custom"></span>
//                   <span className="aap-checkbox-text">Mark as Featured Product</span>
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="aap-form-footer">
//             <button
//               type="submit"
//               className="aap-btn-submit"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? (
//                 <>
//                   <span className="aap-btn-spinner"></span>
//                   Saving...
//                 </>
//               ) : (
//                 <>
//                   <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//                     <path d="M5 9l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                   Save Product
//                 </>
//               )}
//             </button>
//           </div>
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
  const [preview, setPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Ingredients / Types state
  const [ingredients, setIngredients] = useState([
    {
      title: "",
      description: "",
      file: null,
      image: "",
      preview: null,
    }
  ]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  // Ingredient handlers
  const addIngredient = () => {
    setIngredients([
      ...ingredients,
      {
        title: "",
        description: "",
        file: null,
        image: "",
        preview: null,
      }
    ]);
  };

  const removeIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const updateIngredient = (index, field, value) => {
    const updated = [...ingredients];
    updated[index][field] = value;
    setIngredients(updated);
  };

  const handleIngredientFileChange = (index, selectedFile) => {
    const updated = [...ingredients];
    updated[index].file = selectedFile;
    
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updated[index].preview = reader.result;
        setIngredients([...updated]);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      updated[index].preview = null;
    }
    
    setIngredients(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

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

      // Process ingredients - upload images
      const processedIngredients = [];

      for (const item of ingredients) {
        let ingredientImage = "";

        if (item.file) {
          const uploadData = new FormData();
          uploadData.append("image", item.file);

          const uploadResponse = await api.post(
            "/upload?type=product",
            uploadData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          ingredientImage = uploadResponse.data.imageUrl;
        }

        // Only add ingredient if it has a title
        if (item.title.trim()) {
          processedIngredients.push({
            title: item.title,
            description: item.description,
            image: ingredientImage,
          });
        }
      }

      await api.post(
        "/products",
        {
          ...formData,
          price: Number(formData.price),
          discountPercent: Number(formData.discountPercent),
          image: imageUrl,
          ingredients: processedIngredients,
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
      setPreview(null);
      setIngredients([
        {
          title: "",
          description: "",
          file: null,
          image: "",
          preview: null,
        }
      ]);
    } catch (error) {
      console.error(error);
      alert("Failed to add product");
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
    "Fresh Items - Seasonal Fruits & Flowers"
  ];

  // Get dynamic label based on category
  const getIngredientLabel = () => {
    if (formData.category === "Fresh Items - Seasonal Fruits & Flowers") return "Fruits / Flowers";
    if (formData.category === "Millet Mix & Soups") return "Ingredients";
    if (formData.category === "Snacks") return "Ingredients";
    if (formData.category === "Organics") return "Varieties / Types";
    return "Ingredients / Types";
  };

  return (
    <AdminLayout>
      <div className="aap-admin">
        {/* Header */}
        <div className="aap-header">
          <div className="aap-header-left">
            <h1>Add Product</h1>
            <p>Create a new food, organic, rice, snacks or grocery product</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="aap-form">
          <div className="aap-form-grid">
            {/* Left Column */}
            <div className="aap-form-left">
              {/* Product Title */}
              <div className="aap-form-group">
                <label>Product Title</label>
                <div className="aap-input-wrapper">
                  <svg className="aap-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 4h12M3 9h8M3 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Enter product title"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              {/* Description */}
              <div className="aap-form-group">
                <label>Description</label>
                <div className="aap-textarea-wrapper">
                  <svg className="aap-textarea-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M2 4h14M2 9h10M2 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <textarea
                    rows="5"
                    placeholder="Write product description..."
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              {/* Category */}
              <div className="aap-form-group">
                <label>Category</label>
                <div className="aap-select-wrapper">
                  <svg className="aap-select-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M6 8l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value })
                    }
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Price + Discount */}
              <div className="aap-form-row">
                <div className="aap-form-group">
                  <label>Price (€)</label>
                  <div className="aap-input-wrapper">
                    <svg className="aap-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M9 5v8M6 7h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <input
                      type="number"
                      placeholder="0.00"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({ ...formData, price: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="aap-form-group">
                  <label>Discount (%)</label>
                  <div className="aap-input-wrapper">
                    <svg className="aap-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M14 4L4 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <circle cx="6" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="12" cy="12" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      placeholder="0"
                      value={formData.discountPercent}
                      onChange={(e) =>
                        setFormData({ ...formData, discountPercent: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              {/* Ingredients / Types Section */}
              <div className="aap-ingredients-section">
                <div className="aap-ingredients-header">
                  <h3>{getIngredientLabel()}</h3>
                  <button
                    type="button"
                    onClick={addIngredient}
                    className="aap-btn-add-ingredient"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                    Add {getIngredientLabel().replace(" / ", "/")}
                  </button>
                </div>

                <div className="aap-ingredients-grid">
                  {ingredients.map((item, index) => (
                    <div key={index} className="aap-ingredient-card">
                      <div className="aap-ingredient-card-header">
                        <span className="aap-ingredient-number">#{index + 1}</span>
                        {ingredients.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeIngredient(index)}
                            className="aap-btn-remove-ingredient"
                          >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                              <path d="M10 3.5L3.5 10M3.5 3.5l6.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </button>
                        )}
                      </div>

                      <div className="aap-ingredient-fields">
                        <div className="aap-form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            placeholder={formData.category === "Fresh Items - Seasonal Fruits & Flowers" ? "e.g. Mango, Rose, Jasmine" : "e.g. Ragi, Jowar, Bajra"}
                            value={item.title}
                            onChange={(e) =>
                              updateIngredient(index, "title", e.target.value)
                            }
                          />
                        </div>

                        <div className="aap-form-group">
                          <label>Description</label>
                          <textarea
                            rows="2"
                            placeholder="Brief description..."
                            value={item.description}
                            onChange={(e) =>
                              updateIngredient(index, "description", e.target.value)
                            }
                          />
                        </div>

                        <div className="aap-form-group">
                          <label>Image</label>
                          <div className="aap-ingredient-upload">
                            {item.preview ? (
                              <div className="aap-ingredient-preview">
                                <img src={item.preview} alt="Preview" />
                                <button
                                  type="button"
                                  className="aap-ingredient-preview-remove"
                                  onClick={() => {
                                    updateIngredient(index, "file", null);
                                    updateIngredient(index, "preview", null);
                                  }}
                                >
                                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M9 3L3 9M3 3l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                  </svg>
                                </button>
                              </div>
                            ) : (
                              <label className="aap-ingredient-upload-label">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                  <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                                <span>Upload</span>
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={(e) =>
                                    handleIngredientFileChange(index, e.target.files[0])
                                  }
                                  className="aap-file-input"
                                />
                              </label>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="aap-form-right">
              {/* Image Upload */}
              <div className="aap-form-group">
                <label>Product Image</label>
                <div className="aap-upload-area">
                  {preview ? (
                    <div className="aap-preview">
                      <img src={preview} alt="Preview" className="aap-preview-image" />
                      <button
                        type="button"
                        className="aap-preview-remove"
                        onClick={() => {
                          setFile(null);
                          setPreview(null);
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <label className="aap-upload-label">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect x="4" y="6" width="32" height="28" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="14" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M36 28l-10-10-6 6-4-4-12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Click to upload image</span>
                      <span className="aap-upload-hint">PNG, JPG or WEBP (Max 5MB)</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="aap-file-input"
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Featured Checkbox */}
              <div className="aap-form-group">
                <label className="aap-checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) =>
                      setFormData({ ...formData, featured: e.target.checked })
                    }
                    className="aap-checkbox"
                  />
                  <span className="aap-checkbox-custom"></span>
                  <span className="aap-checkbox-text">Mark as Featured Product</span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="aap-form-footer">
            <button
              type="submit"
              className="aap-btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="aap-btn-spinner"></span>
                  Saving...
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M5 9l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Save Product
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

export default AddProduct;