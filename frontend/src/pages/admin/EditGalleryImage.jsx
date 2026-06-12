// import {
//   useEffect,
//   useState
// } from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function EditGalleryImage() {
//   const { id } = useParams();

//   const [file, setFile] =
//     useState(null);

//   const [formData, setFormData] =
//     useState({
//       title: '',
//       category: '',
//       image: ''
//     });

//   useEffect(() => {
//     loadImage();
//   }, []);

//   const loadImage = async () => {
//     try {
//       const { data } =
//         await api.get(
//           `/gallery/${id}`
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
//             '/upload?type=gallery',
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
//         `/gallery/${id}`,
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

//       alert('Image Updated');

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>
//       <h1>Edit Gallery Image</h1>

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

//         <input
//           value={formData.category}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               category:
//                 e.target.value
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
//           Update Image
//         </button>
//       </form>
//     </AdminLayout>
//   );
// }

// export default EditGalleryImage;

// import {
//   useEffect,
//   useState
// } from "react";
// import { useParams } from "react-router-dom";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./EditGalleryImage.css";

// function EditGalleryImage() {
//   const { id } = useParams();

//   const [file, setFile] =
//     useState(null);

//   const [formData, setFormData] =
//     useState({
//       title: "",
//       category: "",
//       image: "",
//     });

//   useEffect(() => {
//     loadImage();
//   }, []);

//   const loadImage = async () => {
//     try {
//       const { data } =
//         await api.get(`/gallery/${id}`);

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
//             "/upload?type=gallery",
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
//         `/gallery/${id}`,
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
//         "Gallery Image Updated"
//       );

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const previewImage = file
//     ? URL.createObjectURL(file)
//     : `http://localhost:5000${formData.image}`;

//   return (
//     <AdminLayout>

//       <div className="a4-admin-edit-gallery-page">

//         <div className="a4-admin-edit-gallery-header">

//           <h1>
//             Edit Gallery Image
//           </h1>

//           <p>
//             Update gallery media,
//             category and preview changes
//             instantly.
//           </p>

//         </div>

//         <div className="a4-admin-edit-gallery-layout">

//           {/* FORM */}

//           <form
//             onSubmit={handleSubmit}
//             className="a4-admin-edit-gallery-form"
//           >

//             <div className="a4-admin-gallery-field">

//               <label>
//                 Image Title
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

//             <div className="a4-admin-gallery-field">

//               <label>
//                 Category
//               </label>

//               <input
//                 type="text"
//                 value={
//                   formData.category
//                 }
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     category:
//                       e.target.value,
//                   })
//                 }
//               />

//             </div>

//             <div className="a4-admin-gallery-field">

//               <label>
//                 Upload New Image
//               </label>

//               <input
//                 type="file"
//                 onChange={(e) =>
//                   setFile(
//                     e.target
//                       .files[0]
//                   )
//                 }
//               />

//             </div>

//             <button
//               type="submit"
//               className="a4-admin-gallery-update-btn"
//             >
//               Update Gallery Image
//             </button>

//           </form>

//           {/* PREVIEW */}

//           <div className="a4-admin-gallery-preview-card">

//             <img
//               src={previewImage}
//               alt={formData.title}
//               className="a4-admin-gallery-preview-image"
//             />

//             <div className="a4-admin-gallery-preview-content">

//               <span className="a4-admin-gallery-preview-category">
//                 {formData.category ||
//                   "Category"}
//               </span>

//               <h3>
//                 {formData.title ||
//                   "Gallery Title"}
//               </h3>

//             </div>

//           </div>

//         </div>

//       </div>

//     </AdminLayout>
//   );
// }

// export default EditGalleryImage;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./EditGalleryImage.css";

function EditGalleryImage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    loadImage();
  }, [id]);

  const loadImage = async () => {
    try {
      const { data } = await api.get(`/gallery/${id}`);
      setFormData(data);
      if (data.image) {
        setPreview(`http://localhost:5000${data.image}`);
      }
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
          "/upload?type=gallery",
          uploadData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        imageUrl = uploadResponse.data.imageUrl;
      }

      await api.put(
        `/gallery/${id}`,
        {
          ...formData,
          image: imageUrl,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Gallery Image Updated Successfully");
      navigate("/admin/gallery");
    } catch (error) {
      console.error(error);
      alert("Failed to update gallery image");
    } finally {
      setIsSubmitting(false);
    }
  };

  const previewImage = file
    ? URL.createObjectURL(file)
    : formData.image
    ? `http://localhost:5000${formData.image}`
    : null;

  if (loading) {
    return (
      <AdminLayout>
        <div className="egi-loading">
          <div className="egi-loading-spinner"></div>
          <p>Loading image...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="egi-admin">
        {/* Header */}
        <div className="egi-header">
          <button
            type="button"
            className="egi-back-btn"
            onClick={() => navigate("/admin/gallery")}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Gallery
          </button>
          <div className="egi-header-info">
            <h1>Edit Gallery Image</h1>
            <p>Update gallery media, category and preview changes instantly</p>
          </div>
        </div>

        <div className="egi-layout">
          {/* Form */}
          <form onSubmit={handleSubmit} className="egi-form">
            {/* Image Title */}
            <div className="egi-form-group">
              <label>Image Title</label>
              <div className="egi-input-wrapper">
                <svg className="egi-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 4h12M3 9h8M3 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <input
                  type="text"
                  value={formData.title}
                  placeholder="Enter image title"
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>
            </div>

            {/* Category */}
            <div className="egi-form-group">
              <label>Category</label>
              <div className="egi-input-wrapper">
                <svg className="egi-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 8l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input
                  type="text"
                  value={formData.category}
                  placeholder="e.g. Concert, Festival, Workshop"
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                />
              </div>
            </div>

            {/* Image Upload */}
            <div className="egi-form-group">
              <label>Upload New Image</label>
              <div className="egi-upload-area">
                {preview ? (
                  <div className="egi-preview">
                    <img src={preview} alt="Preview" className="egi-preview-image" />
                    <button
                      type="button"
                      className="egi-preview-remove"
                      onClick={() => {
                        setFile(null);
                        setPreview(formData.image ? `http://localhost:5000${formData.image}` : null);
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </button>
                    {file && <span className="egi-preview-badge">New</span>}
                  </div>
                ) : (
                  <label className="egi-upload-label">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <rect x="4" y="6" width="32" height="28" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="14" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M36 28l-10-10-6 6-4-4-12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Click to upload new image</span>
                    <span className="egi-upload-hint">PNG, JPG or WEBP (Max 5MB)</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="egi-file-input"
                    />
                  </label>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="egi-form-footer">
              <button
                type="submit"
                className="egi-btn-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="egi-btn-spinner"></span>
                    Updating...
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M5 9l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Update Gallery Image
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Preview */}
          <div className="egi-preview-panel">
            <span className="egi-preview-label">PREVIEW</span>
            
            {previewImage ? (
              <div className="egi-preview-card">
                <img
                  src={previewImage}
                  alt={formData.title || "Preview"}
                  className="egi-preview-card-image"
                />
                <div className="egi-preview-card-content">
                  {formData.category && (
                    <span className="egi-preview-category">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <rect x="1" y="2" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1"/>
                        <path d="M3 5l1.5 1.5L7 4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {formData.category}
                    </span>
                  )}
                  <h3>{formData.title || "Gallery Title"}</h3>
                </div>
              </div>
            ) : (
              <div className="egi-preview-placeholder">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="4" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="14" cy="18" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M36 28l-8-8-6 6-4-4-10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>No image to preview</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default EditGalleryImage;