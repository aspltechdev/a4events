// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function HeroSlides() {
//   const [slides, setSlides] = useState([]);

//   useEffect(() => {
//     fetchSlides();
//   }, []);

//   const fetchSlides = async () => {
//     try {
//       const { data } =
//         await api.get('/hero-slides');

//       setSlides(data);

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteSlide = async (id) => {
//     const token =
//       localStorage.getItem('token');

//     if (!window.confirm('Delete Slide?')) {
//       return;
//     }

//     try {
//       await api.delete(
//         `/hero-slides/${id}`,
//         {
//           headers: {
//             Authorization:
//               `Bearer ${token}`
//           }
//         }
//       );

//       fetchSlides();

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>
//       <h1>Hero Slides</h1>

//       <Link to="/admin/hero-slides/add">
//         Add New Slide
//       </Link>

//       <br />
//       <br />

//       {slides.map((slide) => (
//         <div
//           key={slide.id}
//           style={{
//             border: '1px solid #ddd',
//             padding: '15px',
//             marginBottom: '15px'
//           }}
//         >
//           {slide.image && (
//             <img
//               src={`http://localhost:5000${slide.image}`}
//               alt={slide.title}
//               width="250"
//             />
//           )}

//           <h3>{slide.title}</h3>

//           <p>{slide.subtitle}</p>

//           <p>
//             Order: {slide.order}
//           </p>

//           <p>
//             Status:
//             {slide.isActive
//               ? ' Active'
//               : ' Inactive'}
//           </p>

//           <Link
//             to={`/admin/hero-slides/edit/${slide.id}`}
//           >
//             Edit
//           </Link>

//           {' | '}

//           <button
//             onClick={() =>
//               deleteSlide(slide.id)
//             }
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </AdminLayout>
//   );
// }

// export default HeroSlides;



// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./HeroSlides.css";

// function HeroSlides() {
//   const [slides, setSlides] = useState([]);
//   const API_URL = import.meta.env.VITE_API_URL;


//   useEffect(() => {
//     fetchSlides();
//   }, []);

//   const fetchSlides = async () => {
//     try {
//       const { data } = await api.get(
//         "/hero-slides"
//       );

//       setSlides(data);

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteSlide = async (id) => {
//     const token =
//       localStorage.getItem("token");

//     if (!window.confirm("Delete Slide?")) {
//       return;
//     }

//     try {
//       await api.delete(
//         `/hero-slides/${id}`,
//         {
//           headers: {
//             Authorization:
//               `Bearer ${token}`,
//           },
//         }
//       );

//       fetchSlides();

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>

//       <div className="a4-slides-page">

//         <div className="a4-slides-header">

//           <div>

//             <h1>Hero Slides</h1>

//             <p>
//               Manage homepage hero banners
//               and promotional slides.
//             </p>

//           </div>

//           <Link
//             to="/admin/hero-slides/add"
//             className="a4-add-slide-btn"
//           >
//             + Add Slide
//           </Link>

//         </div>

//         <div className="a4-slides-grid">

//           {slides.map((slide) => (
//             <div
//               key={slide.id}
//               className="a4-slide-card"
//             >

//               <div className="a4-slide-image-wrap">

//                 {/* <img
//                   src={`http://localhost:5000${slide.image}`}
//                   alt={slide.title}
//                   className="a4-slide-image"
//                 /> */}

//                 <img
//                   src={`${API_URL}${slide.image}`}
//                   alt={slide.title}
//                   className="a4-slide-image"
//                 />

//                 <div className="a4-slide-overlay">
//                   <span
//                     className={
//                       slide.isActive
//                         ? "a4-status-active"
//                         : "a4-status-inactive"
//                     }
//                   >
//                     {slide.isActive
//                       ? "Active"
//                       : "Inactive"}
//                   </span>
//                 </div>

//               </div>

//               <div className="a4-slide-content">

//                 <h3>{slide.title}</h3>

//                 <p>
//                   {slide.subtitle}
//                 </p>

//                 <div className="a4-slide-order">
//                   Order:
//                   <strong>
//                     {" "}
//                     {slide.order}
//                   </strong>
//                 </div>

//                 <div className="a4-slide-actions">

//                   <Link
//                     to={`/admin/hero-slides/edit/${slide.id}`}
//                     className="a4-slide-edit-btn"
//                   >
//                     Edit
//                   </Link>

//                   <button
//                     onClick={() =>
//                       deleteSlide(slide.id)
//                     }
//                     className="a4-slide-delete-btn"
//                   >
//                     Delete
//                   </button>

//                 </div>

//               </div>

//             </div>
//           ))}

//         </div>

//       </div>

//     </AdminLayout>
//   );
// }

// export default HeroSlides;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./HeroSlides.css";

// function HeroSlides() {
//   const [slides, setSlides] = useState([]);

//   const API_URL =
//     import.meta.env.VITE_API_URL;

//   useEffect(() => {
//     fetchSlides();
//   }, []);

//   const fetchSlides = async () => {
//     try {
//       const { data } =
//         await api.get(
//           "/hero-slides"
//         );

//       setSlides(data);

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteSlide = async (id) => {
//     const token =
//       localStorage.getItem("token");

//     if (
//       !window.confirm(
//         "Delete Slide?"
//       )
//     ) {
//       return;
//     }

//     try {

//       await api.delete(
//         `/hero-slides/${id}`,
//         {
//           headers: {
//             Authorization:
//               `Bearer ${token}`,
//           },
//         }
//       );

//       fetchSlides();

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>

//       <div className="a4-slides-page">

//         <div className="a4-slides-header">

//           <div>

//             <h1>
//               Hero Slides
//             </h1>

//             <p>
//               Manage homepage hero
//               banners and promotional
//               slides.
//             </p>

//           </div>

//           <Link
//             to="/admin/hero-slides/add"
//             className="a4-add-slide-btn"
//           >
//             + Add Slide
//           </Link>

//         </div>

//         <div className="a4-slides-grid">

//           {slides.length === 0 && (
//             <div className="a4-empty-slides">
//               No Slides Found
//             </div>
//           )}

//           {slides.map((slide) => (

//             <div
//               key={slide.id}
//               className="a4-slide-card"
//             >

//               <div className="a4-slide-image-wrap">

//                 <img
//                   src={`http://localhost:5000${slide.image}`}
//                   alt={slide.title}
//                   className="a4-slide-image"
//                 />


//                 <div className="a4-slide-overlay">

//                   <span
//                     className={
//                       slide.isActive
//                         ? "a4-status-active"
//                         : "a4-status-inactive"
//                     }
//                   >
//                     {slide.isActive
//                       ? "Active"
//                       : "Inactive"}
//                   </span>

//                 </div>

//               </div>

//               <div className="a4-slide-content">

//                 <h3>
//                   {slide.title}
//                 </h3>

//                 {/* Slide Type */}

//                 <div className="a4-slide-type">

//                   {slide.slideType ===
//                     "custom" && (
//                     <span className="a4-type-custom">
//                       🎨 Custom
//                     </span>
//                   )}

//                   {slide.slideType ===
//                     "product" && (
//                     <span className="a4-type-product">
//                       🛒 Product
//                     </span>
//                   )}

//                   {slide.slideType ===
//                     "event" && (
//                     <span className="a4-type-event">
//                       🎉 Event
//                     </span>
//                   )}

//                 </div>

//                 <p>
//                   {slide.subtitle}
//                 </p>

//                 {/* Product */}

//                 {slide.productId && (

//                   <div className="a4-slide-link-info">
//                     Product ID:
//                     {" "}
//                     {slide.productId}
//                   </div>

//                 )}

//                 {/* Event */}

//                 {slide.eventId && (

//                   <div className="a4-slide-link-info">
//                     Event ID:
//                     {" "}
//                     {slide.eventId}
//                   </div>

//                 )}

//                 {/* Link */}

//                 {slide.buttonLink && (

//                   <div className="a4-slide-link-info">
//                     Link:
//                     {" "}
//                     {slide.buttonLink}
//                   </div>

//                 )}

//                 <div className="a4-slide-order">

//                   Order:
//                   <strong>
//                     {" "}
//                     {slide.order}
//                   </strong>

//                 </div>

//                 <div className="a4-slide-actions">

//                   <Link
//                     to={`/admin/hero-slides/edit/${slide.id}`}
//                     className="a4-slide-edit-btn"
//                   >
//                     Edit
//                   </Link>

//                   <button
//                     onClick={() =>
//                       deleteSlide(
//                         slide.id
//                       )
//                     }
//                     className="a4-slide-delete-btn"
//                   >
//                     Delete
//                   </button>

//                 </div>

//               </div>

//             </div>

//           ))}

//         </div>

//       </div>

//     </AdminLayout>
//   );
// }

// export default HeroSlides;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./HeroSlides.css";

function HeroSlides() {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSlides();
  }, []);

  const fetchSlides = async () => {
    try {
      const { data } = await api.get("/hero-slides");
      setSlides(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteSlide = async (id) => {
    const token = localStorage.getItem("token");

    if (!window.confirm("Are you sure you want to delete this slide?")) {
      return;
    }

    try {
      await api.delete(`/hero-slides/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchSlides();
    } catch (error) {
      console.error(error);
    }
  };

  const getSlideTypeIcon = (type) => {
    switch (type) {
      case "product":
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M4 4l3-2 6 3-3 2-6-3z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
            <path d="M4 8l3 2 6-3" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/>
          </svg>
        );
      case "event":
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="2" y="3" width="10" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
            <path d="M2 6h10" stroke="currentColor" strokeWidth="1.3"/>
          </svg>
        );
      default:
        return (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="2" y="2" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.3"/>
            <path d="M5 5l4 4M9 5l-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
        );
    }
  };

  const getSlideTypeLabel = (type) => {
    switch (type) {
      case "product": return "Product";
      case "event": return "Event";
      default: return "Custom";
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="ahs-loading">
          <div className="ahs-loading-spinner"></div>
          <p>Loading slides...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="ahs-admin">
        {/* Header */}
        <div className="ahs-header">
          <div className="ahs-header-left">
            <h1>Hero Slides</h1>
            <p>Manage homepage hero banners and promotional slides</p>
          </div>
          <Link to="/admin/hero-slides/add" className="ahs-btn-primary">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            Add Slide
          </Link>
        </div>

        {/* Slides Grid */}
        {slides.length === 0 ? (
          <div className="ahs-empty">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="6" y="10" width="36" height="28" rx="3" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M6 24l8-6 6 6 8-6 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3>No slides found</h3>
            <p>Add your first hero slide to get started</p>
          </div>
        ) : (
          <div className="ahs-grid">
            {slides.map((slide) => (
              <div key={slide.id} className="ahs-card">
                {/* Image */}
                <div className="ahs-card-image">
                  <img
                    src={`https://a4agroup.eu${slide.image}`}
                    alt={slide.title}
                    className="ahs-image"
                  />
                  <div className="ahs-card-badges">
                    <span className={`ahs-badge-status ${slide.isActive ? 'ahs-badge-active' : 'ahs-badge-inactive'}`}>
                      <span className={`ahs-status-dot ${slide.isActive ? 'ahs-dot-active' : 'ahs-dot-inactive'}`}></span>
                      {slide.isActive ? "Active" : "Inactive"}
                    </span>
                    <span className="ahs-badge-order">
                      Order: {slide.order}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="ahs-card-content">
                  <h3 className="ahs-title">{slide.title}</h3>
                  
                  <p className="ahs-subtitle">{slide.subtitle}</p>

                  {/* Slide Type */}
                  <div className="ahs-type-row">
                    <span className={`ahs-type-badge ahs-type-${slide.slideType || 'custom'}`}>
                      {getSlideTypeIcon(slide.slideType || 'custom')}
                      {getSlideTypeLabel(slide.slideType || 'custom')}
                    </span>
                    
                    {slide.productId && (
                      <span className="ahs-link-info">
                        Product #{slide.productId}
                      </span>
                    )}
                    {slide.eventId && (
                      <span className="ahs-link-info">
                        Event #{slide.eventId}
                      </span>
                    )}
                    {slide.buttonLink && (
                      <span className="ahs-link-info ahs-link-url">
                        {slide.buttonLink.length > 30 ? slide.buttonLink.substring(0, 30) + '...' : slide.buttonLink}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="ahs-actions">
                    <Link
                      to={`/admin/hero-slides/edit/${slide.id}`}
                      className="ahs-btn-edit"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M10 2l2 2-8 8H2v-2l8-8z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteSlide(slide.id)}
                      className="ahs-btn-delete"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 4h10M5 4V2h4v2M4 4v7a1 1 0 001 1h4a1 1 0 001-1V4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
}

export default HeroSlides;