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











import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./GalleryAdmin.css";

function Gallery() {
  const [gallery, setGallery] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const { data } = await api.get("/gallery");
      setGallery(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteImage = async (id) => {
    const token = localStorage.getItem("token");

    if (!window.confirm("Delete Image?")) {
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

  return (
    <AdminLayout>
      <div className="a4-admin-gallery-page">

        <div className="a4-admin-gallery-header">

          <div>
            <h1>Gallery Management</h1>
            <p>
              Manage event photos, venue shots,
              stage production images and media assets.
            </p>
          </div>

          <Link
            to="/admin/gallery/add"
            className="a4-admin-gallery-add-btn"
          >
            + Add New Image
          </Link>

        </div>

        <div className="a4-admin-gallery-toolbar">

          <input
            type="text"
            placeholder="Search gallery..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="a4-admin-gallery-search"
          />

        </div>

        <div className="a4-admin-gallery-grid">

          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="a4-admin-gallery-card"
            >

              <div className="a4-admin-gallery-image-wrap">

                <img
                  src={`http://localhost:5000${item.image}`}
                  alt={item.title}
                  className="a4-admin-gallery-image"
                />

                <div className="a4-admin-gallery-overlay">
                  <span>
                    {item.category}
                  </span>
                </div>

              </div>

              <div className="a4-admin-gallery-content">

                <h3>{item.title}</h3>

                <div className="a4-admin-gallery-actions">

                  <Link
                    to={`/admin/gallery/edit/${item.id}`}
                    className="a4-admin-gallery-edit-btn"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      deleteImage(item.id)
                    }
                    className="a4-admin-gallery-delete-btn"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </AdminLayout>
  );
}

export default Gallery;