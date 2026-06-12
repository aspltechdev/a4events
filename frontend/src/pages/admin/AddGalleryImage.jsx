// import { useState } from 'react';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function AddGalleryImage() {
//   const [file, setFile] =
//     useState(null);

//   const [formData, setFormData] =
//     useState({
//       title: '',
//       category: ''
//     });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token =
//         localStorage.getItem('token');

//       let imageUrl = '';

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

//       await api.post(
//         '/gallery',
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

//       alert('Image Added');

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>
//       <h1>Add Gallery Image</h1>

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

//         <br /><br />

//         <input
//           placeholder="Category"
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               category:
//                 e.target.value
//             })
//           }
//         />

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
//           Save Image
//         </button>
//       </form>
//     </AdminLayout>
//   );
// }

// export default AddGalleryImage;

// import { useState } from "react";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./AddGalleryImage.css";

// function AddGalleryImage() {
//   const [file, setFile] = useState(null);

//   const [formData, setFormData] = useState({
//     title: "",
//     category: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token =
//         localStorage.getItem("token");

//       let imageUrl = "";

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
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           );

//         imageUrl =
//           uploadResponse.data.imageUrl;
//       }

//       await api.post(
//         "/gallery",
//         {
//           ...formData,
//           image: imageUrl,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("Gallery Image Added");

//       setFormData({
//         title: "",
//         category: "",
//       });

//       setFile(null);

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>
//       <div className="gallery-page">

//         <div className="gallery-header">
//           <h1>Add Gallery Image</h1>

//           <p>
//             Upload event photos and
//             organize them into categories.
//           </p>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="gallery-form"
//         >

//           <div className="gallery-form-group">
//             <label>
//               Image Title
//             </label>

//             <input
//               type="text"
//               value={formData.title}
//               placeholder="Enter image title"
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   title: e.target.value,
//                 })
//               }
//             />
//           </div>

//           <div className="gallery-form-group">
//             <label>
//               Category
//             </label>

//             <input
//               type="text"
//               value={formData.category}
//               placeholder="Concert, DJ Night, Festival..."
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   category:
//                     e.target.value,
//                 })
//               }
//             />
//           </div>

//           <div className="gallery-form-group">
//             <label>
//               Upload Image
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

//           {file && (
//             <div className="gallery-preview">
//               <label>
//                 Preview
//               </label>

//               <img
//                 src={URL.createObjectURL(
//                   file
//                 )}
//                 alt="Preview"
//               />
//             </div>
//           )}

//           <button
//             type="submit"
//             className="gallery-submit-btn"
//           >
//             Save Gallery Image
//           </button>

//         </form>
//       </div>
//     </AdminLayout>
//   );
// }

// export default AddGalleryImage;

import { useState } from "react";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./AddGalleryImage.css";

function AddGalleryImage() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
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
          "/upload?type=gallery",
          uploadData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        imageUrl = uploadResponse.data.imageUrl;
      }

      await api.post(
        "/gallery",
        {
          ...formData,
          image: imageUrl,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Gallery Image Added Successfully");

      setFormData({ title: "", category: "" });
      setFile(null);
      setPreview(null);
    } catch (error) {
      console.error(error);
      alert("Failed to add gallery image");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AdminLayout>
      <div className="agi-admin">
        {/* Header */}
        <div className="agi-header">
          <div className="agi-header-left">
            <h1>Add Gallery Image</h1>
            <p>Upload event photos and organize them into categories</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="agi-form">
          <div className="agi-form-grid">
            {/* Left Column */}
            <div className="agi-form-left">
              {/* Image Title */}
              <div className="agi-form-group">
                <label>Image Title</label>
                <div className="agi-input-wrapper">
                  <svg className="agi-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
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
              <div className="agi-form-group">
                <label>Category</label>
                <div className="agi-input-wrapper">
                  <svg className="agi-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M6 8l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <input
                    type="text"
                    value={formData.category}
                    placeholder="Concert, DJ Night, Festival..."
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  />
                </div>
              </div>

              {/* Image Upload */}
              <div className="agi-form-group">
                <label>Upload Image</label>
                <div className="agi-upload-area">
                  {preview ? (
                    <div className="agi-preview">
                      <img src={preview} alt="Preview" className="agi-preview-image" />
                      <button
                        type="button"
                        className="agi-preview-remove"
                        onClick={() => { setFile(null); setPreview(null); }}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <label className="agi-upload-label">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect x="4" y="6" width="32" height="28" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="14" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M36 28l-10-10-6 6-4-4-12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Click to upload image</span>
                      <span className="agi-upload-hint">PNG, JPG or WEBP (Max 5MB)</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="agi-file-input"
                        required
                      />
                    </label>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Preview */}
            <div className="agi-form-right">
              <span className="agi-preview-label">PREVIEW</span>
              
              {preview ? (
                <div className="agi-preview-card">
                  <img src={preview} alt="Preview" className="agi-preview-card-image" />
                  <div className="agi-preview-card-content">
                    {formData.category && (
                      <span className="agi-preview-category">
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
                <div className="agi-preview-placeholder">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect x="4" y="8" width="32" height="24" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="14" cy="18" r="3" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M36 28l-8-8-6 6-4-4-10 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Upload an image to preview</span>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="agi-form-footer">
            <button
              type="submit"
              className="agi-btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="agi-btn-spinner"></span>
                  Saving...
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M5 9l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Save Gallery Image
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

export default AddGalleryImage;