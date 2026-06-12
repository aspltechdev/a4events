// import {
//   useEffect,
//   useState
// } from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function EditHeroSlide() {
//   const { id } = useParams();

//   const [file, setFile] =
//     useState(null);

//   const [formData, setFormData] =
//     useState({
//       title: '',
//       subtitle: '',
//       buttonText: '',
//       buttonLink: '',
//       order: 1,
//       image: '',
//       isActive: true
//     });

//   useEffect(() => {
//     loadSlide();
//   }, []);

//   const loadSlide = async () => {
//     try {
//       const { data } =
//         await api.get(
//           `/hero-slides/${id}`
//         );

//       setFormData(data);

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token =
//         localStorage.getItem('token');

//       let imageUrl =
//         formData.image;

//       if (file) {
//         const uploadData =
//           new FormData();

//         uploadData.append(
//           'image',
//           file
//         );

//         const uploadResponse =
//           await api.post(
//             '/upload?type=hero',
//             uploadData,
//             {
//               headers: {
//                 Authorization:
//                   `Bearer ${token}`
//               }
//             }
//           );

//         imageUrl =
//           uploadResponse.data.imageUrl;
//       }

//       await api.put(
//         `/hero-slides/${id}`,
//         {
//           ...formData,
//           image: imageUrl
//         },
//         {
//           headers: {
//             Authorization:
//               `Bearer ${token}`
//           }
//         }
//       );

//       alert('Slide Updated');

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>
//       <h1>Edit Hero Slide</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           value={formData.title}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               title:
//                 e.target.value
//             })
//           }
//         />

//         <br /><br />

//         <textarea
//           value={formData.subtitle}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               subtitle:
//                 e.target.value
//             })
//           }
//         />

//         <br /><br />

//         <input
//           value={formData.buttonText}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               buttonText:
//                 e.target.value
//             })
//           }
//         />

//         <br /><br />

//         <input
//           value={formData.buttonLink}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               buttonLink:
//                 e.target.value
//             })
//           }
//         />

//         <br /><br />

//         <input
//           type="number"
//           value={formData.order}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               order:
//                 Number(
//                   e.target.value
//                 )
//             })
//           }
//         />

//         <br /><br />

//         {formData.image && (
//           <img
//             src={`http://localhost:5000${formData.image}`}
//             alt=""
//             width="250"
//           />
//         )}

//         <br /><br />

//         <input
//           type="file"
//           onChange={(e) =>
//             setFile(
//               e.target.files[0]
//             )
//           }
//         />

//         <br /><br />

//         <button type="submit">
//           Update Slide
//         </button>
//       </form>
//     </AdminLayout>
//   );
// }

// export default EditHeroSlide;












// import {
//   useEffect,
//   useState
// } from "react";
// import { useParams } from "react-router-dom";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./EditHeroSlide.css";

// function EditHeroSlide() {
//   const { id } = useParams();

//   const [file, setFile] = useState(null);

//   const [formData, setFormData] =
//     useState({
//       title: "",
//       subtitle: "",
//       buttonText: "",
//       buttonLink: "",
//       order: 1,
//       image: "",
//       isActive: true,
//     });

//   useEffect(() => {
//     loadSlide();
//   }, []);

//   const loadSlide = async () => {
//     try {
//       const { data } =
//         await api.get(
//           `/hero-slides/${id}`
//         );

//       setFormData(data);

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token =
//         localStorage.getItem("token");

//       let imageUrl =
//         formData.image;

//       if (file) {
//         const uploadData =
//           new FormData();

//         uploadData.append(
//           "image",
//           file
//         );

//         const uploadResponse =
//           await api.post(
//             "/upload?type=hero",
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
//         `/hero-slides/${id}`,
//         {
//           ...formData,
//           image: imageUrl,
//         },
//         {
//           headers: {
//             Authorization:
//               `Bearer ${token}`,
//           },
//         }
//       );

//       alert(
//         "Hero Slide Updated Successfully"
//       );

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>

//       <div className="a4-edit-slide-page">

//         <div className="a4-edit-slide-header">

//           <h1>Edit Hero Slide</h1>

//           <p>
//             Update homepage banner
//             content and preview changes
//             live.
//           </p>

//         </div>

//         <div className="a4-edit-slide-layout">

//           {/* FORM */}

//           <form
//             onSubmit={handleSubmit}
//             className="a4-edit-slide-form"
//           >

//             <div className="a4-slide-field">

//               <label>
//                 Hero Title
//               </label>

//               <input
//                 type="text"
//                 value={formData.title}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     title:
//                       e.target.value,
//                   })
//                 }
//               />

//             </div>

//             <div className="a4-slide-field">

//               <label>
//                 Subtitle
//               </label>

//               <textarea
//                 rows="5"
//                 value={
//                   formData.subtitle
//                 }
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     subtitle:
//                       e.target.value,
//                   })
//                 }
//               />

//             </div>

//             <div className="a4-slide-field">

//               <label>
//                 Button Text
//               </label>

//               <input
//                 value={
//                   formData.buttonText
//                 }
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     buttonText:
//                       e.target.value,
//                   })
//                 }
//               />

//             </div>

//             <div className="a4-slide-field">

//               <label>
//                 Button Link
//               </label>

//               <input
//                 value={
//                   formData.buttonLink
//                 }
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     buttonLink:
//                       e.target.value,
//                   })
//                 }
//               />

//             </div>

//             <div className="a4-slide-grid">

//               <div className="a4-slide-field">

//                 <label>
//                   Display Order
//                 </label>

//                 <input
//                   type="number"
//                   value={formData.order}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       order:
//                         Number(
//                           e.target
//                             .value
//                         ),
//                     })
//                   }
//                 />

//               </div>

//               <div className="a4-slide-field">

//                 <label>
//                   Upload New Image
//                 </label>

//                 <input
//                   type="file"
//                   onChange={(e) =>
//                     setFile(
//                       e.target
//                         .files[0]
//                     )
//                   }
//                 />

//               </div>

//             </div>

//             <div className="a4-slide-active">

//               <input
//                 type="checkbox"
//                 checked={
//                   formData.isActive
//                 }
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     isActive:
//                       e.target.checked,
//                   })
//                 }
//               />

//               <span>
//                 Active Slide
//               </span>

//             </div>

//             <button
//               type="submit"
//               className="a4-update-slide-btn"
//             >
//               Update Hero Slide
//             </button>

//           </form>

//           {/* LIVE PREVIEW */}

//           <div className="a4-slide-preview">

//             <div
//               className="a4-preview-banner"
//               style={{
//                 backgroundImage: file
//                   ? `url(${URL.createObjectURL(file)})`
//                   : formData.image
//                   ? `url(http://localhost:5000${formData.image})`
//                   : "",
//               }}
//             >

//               <div className="a4-preview-overlay">

//                 <span>
//                   Homepage Preview
//                 </span>

//                 <h2>
//                   {formData.title}
//                 </h2>

//                 <p>
//                   {
//                     formData.subtitle
//                   }
//                 </p>

//                 <button>
//                   {formData.buttonText ||
//                     "Explore"}
//                 </button>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </AdminLayout>
//   );
// }

// export default EditHeroSlide;


// import {
//   useEffect,
//   useState
// } from "react";
// import { useParams } from "react-router-dom";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./EditHeroSlide.css";

// function EditHeroSlide() {
//   const { id } = useParams();

//   const API_URL =
//     import.meta.env.VITE_API_URL;

//   const [file, setFile] =
//     useState(null);

//   const [products, setProducts] =
//     useState([]);

//   const [events, setEvents] =
//     useState([]);

//   const [formData, setFormData] =
//     useState({
//       title: "",
//       subtitle: "",
//       buttonText: "",
//       buttonLink: "",
//       order: 1,
//       image: "",
//       isActive: true,

//       slideType: "custom",
//       productId: "",
//       eventId: "",
//     });

//   useEffect(() => {
//     loadSlide();
//     loadProducts();
//     loadEvents();
//   }, []);

//   const loadSlide = async () => {
//     try {
//       const { data } =
//         await api.get(
//           `/hero-slides/${id}`
//         );

//       setFormData({
//         ...data,
//         productId:
//           data.productId || "",
//         eventId:
//           data.eventId || "",
//       });

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const loadProducts = async () => {
//     try {
//       const { data } =
//         await api.get("/products");

//       setProducts(data);

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const loadEvents = async () => {
//     try {
//       const { data } =
//         await api.get("/events");

//       setEvents(data);

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token =
//         localStorage.getItem(
//           "token"
//         );

//       let imageUrl =
//         formData.image;

//       if (file) {
//         const uploadData =
//           new FormData();

//         uploadData.append(
//           "image",
//           file
//         );

//         const uploadResponse =
//           await api.post(
//             "/upload?type=hero",
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
//         `/hero-slides/${id}`,
//         {
//           ...formData,

//           image: imageUrl,

//           productId:
//             formData.slideType ===
//             "product"
//               ? Number(
//                   formData.productId
//                 )
//               : null,

//           eventId:
//             formData.slideType ===
//             "event"
//               ? Number(
//                   formData.eventId
//                 )
//               : null,
//         },
//         {
//           headers: {
//             Authorization:
//               `Bearer ${token}`,
//           },
//         }
//       );

//       alert(
//         "Hero Slide Updated Successfully"
//       );

//     } catch (error) {
//       console.error(error);
//       alert(
//         "Failed To Update Slide"
//       );
//     }
//   };

//   return (
//     <AdminLayout>

//       <div className="a4-edit-slide-page">

//         <div className="a4-edit-slide-header">

//           <h1>
//             Edit Hero Slide
//           </h1>

//           <p>
//             Update homepage banner
//             content and preview
//             changes live.
//           </p>

//         </div>

//         <div className="a4-edit-slide-layout">

//           <form
//             onSubmit={
//               handleSubmit
//             }
//             className="a4-edit-slide-form"
//           >

//             <div className="a4-slide-field">

//               <label>
//                 Hero Title
//               </label>

//               <input
//                 type="text"
//                 value={
//                   formData.title
//                 }
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     title:
//                       e.target.value,
//                   })
//                 }
//               />

//             </div>

//             <div className="a4-slide-field">

//               <label>
//                 Slide Type
//               </label>

//               <select
//                 value={
//                   formData.slideType
//                 }
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     slideType:
//                       e.target.value,
//                   })
//                 }
//               >

//                 <option value="custom">
//                   Custom Slide
//                 </option>

//                 <option value="product">
//                   Product Slide
//                 </option>

//                 <option value="event">
//                   Event Slide
//                 </option>

//               </select>

//             </div>

//             {formData.slideType ===
//               "product" && (

//               <div className="a4-slide-field">

//                 <label>
//                   Select Product
//                 </label>

//                 <select
//                   value={
//                     formData.productId
//                   }
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       productId:
//                         e.target
//                           .value,
//                     })
//                   }
//                 >

//                   <option value="">
//                     Select Product
//                   </option>

//                   {products.map(
//                     (
//                       product
//                     ) => (
//                       <option
//                         key={
//                           product.id
//                         }
//                         value={
//                           product.id
//                         }
//                       >
//                         {
//                           product.title
//                         }
//                       </option>
//                     )
//                   )}

//                 </select>

//               </div>
//             )}

//             {formData.slideType ===
//               "event" && (

//               <div className="a4-slide-field">

//                 <label>
//                   Select Event
//                 </label>

//                 <select
//                   value={
//                     formData.eventId
//                   }
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       eventId:
//                         e.target
//                           .value,
//                     })
//                   }
//                 >

//                   <option value="">
//                     Select Event
//                   </option>

//                   {events.map(
//                     (
//                       event
//                     ) => (
//                       <option
//                         key={
//                           event.id
//                         }
//                         value={
//                           event.id
//                         }
//                       >
//                         {
//                           event.title
//                         }
//                       </option>
//                     )
//                   )}

//                 </select>

//               </div>
//             )}

//             <div className="a4-slide-field">

//               <label>
//                 Subtitle
//               </label>

//               <textarea
//                 rows="5"
//                 value={
//                   formData.subtitle
//                 }
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     subtitle:
//                       e.target.value,
//                   })
//                 }
//               />

//             </div>

//             <div className="a4-slide-field">

//               <label>
//                 Button Text
//               </label>

//               <input
//                 value={
//                   formData.buttonText
//                 }
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     buttonText:
//                       e.target.value,
//                   })
//                 }
//               />

//             </div>

//             <div className="a4-slide-field">

//               <label>
//                 Button Link
//               </label>

//               <input
//                 value={
//                   formData.buttonLink
//                 }
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     buttonLink:
//                       e.target.value,
//                   })
//                 }
//               />

//             </div>

//             <div className="a4-slide-grid">

//               <div className="a4-slide-field">

//                 <label>
//                   Display Order
//                 </label>

//                 <input
//                   type="number"
//                   value={
//                     formData.order
//                   }
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       order:
//                         Number(
//                           e.target
//                             .value
//                         ),
//                     })
//                   }
//                 />

//               </div>

//               <div className="a4-slide-field">

//                 <label>
//                   Upload New Image
//                 </label>

//                 <input
//                   type="file"
//                   onChange={(e) =>
//                     setFile(
//                       e.target
//                         .files[0]
//                     )
//                   }
//                 />

//               </div>

//             </div>

//             <div className="a4-slide-active">

//               <input
//                 type="checkbox"
//                 checked={
//                   formData.isActive
//                 }
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     isActive:
//                       e.target.checked,
//                   })
//                 }
//               />

//               <span>
//                 Active Slide
//               </span>

//             </div>

//             <button
//               type="submit"
//               className="a4-update-slide-btn"
//             >
//               Update Hero Slide
//             </button>

//           </form>

//           <div className="a4-slide-preview">

//             <div
//               className="a4-preview-banner"
//               style={{
//                 backgroundImage:
//                   file
//                     ? `url(${URL.createObjectURL(
//                         file
//                       )})`
//                     : formData.image
//                     ? `url(${API_URL}${formData.image})`
//                     : "",
//               }}
//             >

//               <div className="a4-preview-overlay">

//                 <span>
//                   Homepage Preview
//                 </span>

//                 <h2>
//                   {
//                     formData.title
//                   }
//                 </h2>

//                 <p>
//                   {
//                     formData.subtitle
//                   }
//                 </p>

//                 <button>
//                   {formData.buttonText ||
//                     "Explore"}
//                 </button>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </AdminLayout>
//   );
// }

// export default EditHeroSlide;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./EditHeroSlide.css";

function EditHeroSlide() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [products, setProducts] = useState([]);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    buttonText: "",
    buttonLink: "",
    order: 1,
    image: "",
    isActive: true,
    slideType: "custom",
    productId: "",
    eventId: "",
  });

  useEffect(() => {
    loadSlide();
    loadProducts();
    loadEvents();
  }, [id]);

  const loadSlide = async () => {
    try {
      const { data } = await api.get(`/hero-slides/${id}`);
      setFormData({
        ...data,
        productId: data.productId || "",
        eventId: data.eventId || "",
      });
      if (data.image) {
        setPreview(`http://localhost:5000${data.image}`);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loadProducts = async () => {
    try {
      const { data } = await api.get("/products");
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadEvents = async () => {
    try {
      const { data } = await api.get("/events");
      setEvents(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
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
          "/upload?type=hero",
          uploadData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        imageUrl = uploadResponse.data.imageUrl;
      }

      await api.put(
        `/hero-slides/${id}`,
        {
          ...formData,
          image: imageUrl,
          productId: formData.slideType === "product" ? Number(formData.productId) : null,
          eventId: formData.slideType === "event" ? Number(formData.eventId) : null,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("Hero Slide Updated Successfully");
      navigate("/admin/hero-slides");
    } catch (error) {
      console.error(error);
      alert("Failed To Update Slide");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="ehs-loading">
          <div className="ehs-loading-spinner"></div>
          <p>Loading slide...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="ehs-admin">
        {/* Header */}
        <div className="ehs-header">
          <button
            type="button"
            className="ehs-back-btn"
            onClick={() => navigate("/admin/hero-slides")}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Slides
          </button>
          <div className="ehs-header-info">
            <h1>Edit Hero Slide</h1>
            <p>Update homepage banner content and preview changes live</p>
          </div>
        </div>

        <div className="ehs-layout">
          {/* Form */}
          <form onSubmit={handleSubmit} className="ehs-form">
            {/* Slide Type */}
            <div className="ehs-form-group">
              <label>Slide Type</label>
              <div className="ehs-select-wrapper">
                <svg className="ehs-select-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 8l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <select
                  value={formData.slideType}
                  onChange={(e) => setFormData({ ...formData, slideType: e.target.value })}
                >
                  <option value="custom">Custom Slide</option>
                  <option value="product">Product Slide</option>
                  <option value="event">Event Slide</option>
                </select>
              </div>
            </div>

            {/* Product/Event Selection */}
            {formData.slideType === "product" && (
              <div className="ehs-form-group">
                <label>Select Product</label>
                <div className="ehs-select-wrapper">
                  <svg className="ehs-select-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M4 4l3-2 8 4-3 2-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  </svg>
                  <select
                    value={formData.productId}
                    onChange={(e) => setFormData({ ...formData, productId: e.target.value })}
                  >
                    <option value="">Select Product</option>
                    {products.map((product) => (
                      <option key={product.id} value={product.id}>{product.title}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {formData.slideType === "event" && (
              <div className="ehs-form-group">
                <label>Select Event</label>
                <div className="ehs-select-wrapper">
                  <svg className="ehs-select-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="3" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <select
                    value={formData.eventId}
                    onChange={(e) => setFormData({ ...formData, eventId: e.target.value })}
                  >
                    <option value="">Select Event</option>
                    {events.map((event) => (
                      <option key={event.id} value={event.id}>{event.title}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Hero Title */}
            <div className="ehs-form-group">
              <label>Hero Title</label>
              <div className="ehs-input-wrapper">
                <svg className="ehs-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 4h12M3 9h8M3 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <input
                  type="text"
                  placeholder="Enter hero title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
              </div>
            </div>

            {/* Subtitle */}
            <div className="ehs-form-group">
              <label>Subtitle</label>
              <div className="ehs-textarea-wrapper">
                <svg className="ehs-textarea-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M2 4h14M2 9h10M2 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <textarea
                  rows="3"
                  placeholder="Enter subtitle text"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                />
              </div>
            </div>

            {/* Button Text + Link */}
            <div className="ehs-form-row">
              <div className="ehs-form-group">
                <label>Button Text</label>
                <div className="ehs-input-wrapper">
                  <input
                    type="text"
                    placeholder="Explore Now"
                    value={formData.buttonText}
                    onChange={(e) => setFormData({ ...formData, buttonText: e.target.value })}
                  />
                </div>
              </div>
              <div className="ehs-form-group">
                <label>Button Link</label>
                <div className="ehs-input-wrapper">
                  <svg className="ehs-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M7 9h4M7 9a4 4 0 110-4h4a4 4 0 110 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="/events or https://..."
                    value={formData.buttonLink}
                    onChange={(e) => setFormData({ ...formData, buttonLink: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Order + Image */}
            <div className="ehs-form-row">
              <div className="ehs-form-group">
                <label>Display Order</label>
                <div className="ehs-input-wrapper">
                  <input
                    type="number"
                    min="1"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })}
                  />
                </div>
              </div>
              <div className="ehs-form-group">
                <label>New Image</label>
                <div className="ehs-file-input-wrapper">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="ehs-file-input"
                    id="ehs-file"
                  />
                  <label htmlFor="ehs-file" className="ehs-file-label">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    Choose Image
                  </label>
                  {file && <span className="ehs-file-name">{file.name}</span>}
                </div>
              </div>
            </div>

            {/* Active Checkbox */}
            <div className="ehs-form-group">
              <label className="ehs-checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="ehs-checkbox"
                />
                <span className="ehs-checkbox-custom"></span>
                <span className="ehs-checkbox-text">Active Slide</span>
              </label>
            </div>

            {/* Submit */}
            <div className="ehs-form-footer">
              <button
                type="submit"
                className="ehs-btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="ehs-btn-spinner"></span>
                    Updating...
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M5 9l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Update Hero Slide
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Preview */}
          <div className="ehs-preview">
            <span className="ehs-preview-label">LIVE PREVIEW</span>
            <div
              className="ehs-preview-banner"
              style={{
                backgroundImage: preview ? `url(${preview})` : "none",
              }}
            >
              <div className="ehs-preview-overlay">
                <h2>{formData.title || "Hero Title"}</h2>
                <p>{formData.subtitle || "Subtitle text will appear here"}</p>
                <button>{formData.buttonText || "Explore"}</button>
              </div>
            </div>
            {!preview && (
              <div className="ehs-preview-placeholder">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="4" y="6" width="32" height="28" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="14" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M36 28l-10-10-6 6-4-4-12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>No image uploaded</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default EditHeroSlide;