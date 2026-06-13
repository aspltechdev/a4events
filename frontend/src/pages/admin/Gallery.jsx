// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function Gallery() {
//   const [gallery, setGallery] = useState([]);

//   useEffect(() => {
//     fetchGallery();
//   }, []);

//   const fetchGallery = async () => {
//     try {
//       const { data } = await api.get('/gallery');
//       setGallery(data);

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteImage = async (id) => {
//     const token = localStorage.getItem('token');

//     if (!window.confirm('Delete Image?')) {
//       return;
//     }

//     try {
//       await api.delete(
//         `/gallery/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       fetchGallery();

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>
//       <h1>Gallery</h1>

//       <Link to="/admin/gallery/add">
//         Add Gallery Image
//       </Link>

//       <br />
//       <br />

//       {gallery.map((item) => (
//         <div
//           key={item.id}
//           style={{
//             border: '1px solid #ddd',
//             padding: '15px',
//             marginBottom: '15px'
//           }}
//         >
//           {item.image && (
//             <img
//               src={`http://localhost:5000${item.image}`}
//               alt={item.title}
//               width="250"
//             />
//           )}

//           <h3>{item.title}</h3>

//           <p>
//             Category:
//             {' '}
//             {item.category}
//           </p>

//           <Link
//             to={`/admin/gallery/edit/${item.id}`}
//           >
//             Edit
//           </Link>

//           {' | '}

//           <button
//             onClick={() =>
//               deleteImage(item.id)
//             }
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </AdminLayout>
//   );
// }

// export default Gallery;










// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./GalleryAdmin.css";

// function Gallery() {
//   const [gallery, setGallery] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetchGallery();
//   }, []);

//   const fetchGallery = async () => {
//     try {
//       const { data } = await api.get(
//         "/gallery"
//       );

//       setGallery(data);

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteImage = async (id) => {
//     const token =
//       localStorage.getItem("token");

//     if (
//       !window.confirm(
//         "Delete Image?"
//       )
//     ) {
//       return;
//     }

//     try {
//       await api.delete(
//         `/gallery/${id}`,
//         {
//           headers: {
//             Authorization:
//               `Bearer ${token}`,
//           },
//         }
//       );

//       fetchGallery();

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const filteredGallery =
//     gallery.filter((item) =>
//       item.title
//         ?.toLowerCase()
//         .includes(
//           search.toLowerCase()
//         )
//     );

//   return (
//     <AdminLayout>

//       <div className="a4-gallery-admin">

//         <div className="a4-gallery-header">

//           <div>

//             <h1>
//               Gallery Management
//             </h1>

//             <p>
//               Manage event photos,
//               venue shots and media
//               assets.
//             </p>

//           </div>

//           <Link
//             to="/admin/gallery/add"
//             className="a4-gallery-add-btn"
//           >
//             + Add Image
//           </Link>

//         </div>

//         <div className="a4-gallery-toolbar">

//           <input
//             type="text"
//             placeholder="Search gallery..."
//             value={search}
//             onChange={(e) =>
//               setSearch(
//                 e.target.value
//               )
//             }
//             className="a4-gallery-search"
//           />

//         </div>

//         <div className="a4-gallery-grid">

//           {filteredGallery.map(
//             (item) => (
//               <div
//                 key={item.id}
//                 className="a4-gallery-card"
//               >

//                 <div className="a4-gallery-image-wrap">

//                   <img
//                     src={`http://localhost:5000${item.image}`}
//                     alt={item.title}
//                     className="a4-gallery-image"
//                   />

//                 </div>

//                 <div className="a4-gallery-content">

//                   <h3>
//                     {item.title}
//                   </h3>

//                   <span className="a4-gallery-category">
//                     {
//                       item.category
//                     }
//                   </span>

//                   <div className="a4-gallery-actions">

//                     {/* <Link
//                       to={`/admin/gallery/edit/${item.id}`}
//                       className="a4-gallery-edit-btn"
//                     >
//                       Edit
//                     </Link> */}
//                     <Link
//   to={`/admin/gallery/edit/${item.id}`}
//   className="a4-gallery-edit-btn"
// >
//   Edit
// </Link>

//                     <button
//                       onClick={() =>
//                         deleteImage(
//                           item.id
//                         )
//                       }
//                       className="a4-gallery-delete-btn"
//                     >
//                       Delete
//                     </button>

//                   </div>

//                 </div>

//               </div>
//             )
//           )}

//         </div>

//       </div>

//     </AdminLayout>
//   );
// }

// export default Gallery;











// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./GalleryAdmin.css";

// function Gallery() {
//   const [gallery, setGallery] = useState([]);
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     fetchGallery();
//   }, []);

//   const fetchGallery = async () => {
//     try {
//       const { data } = await api.get("/gallery");
//       setGallery(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteImage = async (id) => {
//     const token = localStorage.getItem("token");

//     if (!window.confirm("Delete Image?")) {
//       return;
//     }

//     try {
//       await api.delete(`/gallery/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       fetchGallery();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const filteredGallery = gallery.filter((item) =>
//     item.title?.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <AdminLayout>
//       <div className="a4-admin-gallery-page">

//         <div className="a4-admin-gallery-header">

//           <div>
//             <h1>Gallery Management</h1>
//             <p>
//               Manage event photos, venue shots,
//               stage production images and media assets.
//             </p>
//           </div>

//           <Link
//             to="/admin/gallery/add"
//             className="a4-admin-gallery-add-btn"
//           >
//             + Add New Image
//           </Link>

//         </div>

//         <div className="a4-admin-gallery-toolbar">

//           <input
//             type="text"
//             placeholder="Search gallery..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="a4-admin-gallery-search"
//           />

//         </div>

//         <div className="a4-admin-gallery-grid">

//           {filteredGallery.map((item) => (
//             <div
//               key={item.id}
//               className="a4-admin-gallery-card"
//             >

//               <div className="a4-admin-gallery-image-wrap">

//                 <img
//                   src={`http://localhost:5000${item.image}`}
//                   alt={item.title}
//                   className="a4-admin-gallery-image"
//                 />

//                 <div className="a4-admin-gallery-overlay">
//                   <span>
//                     {item.category}
//                   </span>
//                 </div>

//               </div>

//               <div className="a4-admin-gallery-content">

//                 <h3>{item.title}</h3>

//                 <div className="a4-admin-gallery-actions">

//                   <Link
//                     to={`/admin/gallery/edit/${item.id}`}
//                     className="a4-admin-gallery-edit-btn"
//                   >
//                     Edit
//                   </Link>

//                   <button
//                     onClick={() =>
//                       deleteImage(item.id)
//                     }
//                     className="a4-admin-gallery-delete-btn"
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

// export default Gallery;







import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./GalleryAdmin.css";

function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const { data } = await api.get("/gallery");
      setGallery(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteImage = async (id) => {
    const token = localStorage.getItem("token");

    if (!window.confirm("Are you sure you want to delete this image?")) {
      return;
    }

    try {
      await api.delete(`/gallery/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchGallery();
    } catch (error) {
      console.error(error);
    }
  };

  const filteredGallery = gallery.filter((item) =>
    item.title?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <AdminLayout>
        <div className="gal-loading">
          <div className="gal-loading-spinner"></div>
          <p>Loading gallery...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="gal-admin">
        {/* Header */}
        <div className="gal-header">
          <div className="gal-header-left">
            <h1>Gallery Management</h1>
            <p>Manage event photos, venue shots, stage production images and media assets</p>
          </div>
          <Link to="/admin/gallery/add" className="gal-btn-primary">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
            Add New Image
          </Link>
        </div>

        {/* Toolbar */}
        <div className="gal-toolbar">
          <div className="gal-search-wrapper">
            <svg className="gal-search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search gallery..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="gal-search-input"
            />
          </div>
          <div className="gal-toolbar-info">
            <span className="gal-count-badge">
              {filteredGallery.length} image{filteredGallery.length !== 1 ? 's' : ''}
            </span>
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredGallery.length === 0 ? (
          <div className="gal-empty">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="16" cy="20" r="4" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M44 32l-12-12-8 8-6-6-14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h3>No images found</h3>
            <p>{search ? 'Try adjusting your search terms' : 'Add your first gallery image to get started'}</p>
          </div>
        ) : (
          <div className="gal-grid">
            {filteredGallery.map((item) => (
              <div key={item.id} className="gal-card">
                {/* Image */}
                <div className="gal-card-image">
                  <img
                    src={`https://a4agroup.eu${item.image}`}
                    alt={item.title || "Gallery image"}
                    className="gal-image"
                  />
                  <div className="gal-card-overlay">
                    <div className="gal-overlay-actions">
                      <Link
                        to={`/admin/gallery/edit/${item.id}`}
                        className="gal-overlay-btn gal-overlay-edit"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M11 2l2 2-8 8H3v-2l8-8z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </Link>
                      <button
                        onClick={() => deleteImage(item.id)}
                        className="gal-overlay-btn gal-overlay-delete"
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2 4h12M5 4V2h6v2M4 4v8a1 1 0 001 1h6a1 1 0 001-1V4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  {item.category && (
                    <span className="gal-category-badge">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <rect x="1" y="2" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1"/>
                        <path d="M3 5l1.5 1.5L7 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item.category}
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="gal-card-content">
                  <h3 className="gal-title">{item.title || "Untitled"}</h3>
                  
                  <div className="gal-actions">
                    <Link
                      to={`/admin/gallery/edit/${item.id}`}
                      className="gal-btn-edit"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M10 2l2 2-8 8H2v-2l8-8z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteImage(item.id)}
                      className="gal-btn-delete"
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

export default Gallery;