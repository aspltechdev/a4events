// import { useState } from 'react';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';
// function AddEvent() {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     location: '',
//     eventDate: ''
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token =
//       localStorage.getItem('token');

//     await api.post(
//       '/events',
//       formData,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       }
//     );

//     alert('Event Added');
//   };

//   return ( 
//     <AdminLayout>
//     <div>
//       <h1>Add Event</h1>

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
//           placeholder="Location"
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               location: e.target.value
//             })
//           }
//         />

//         <br /><br />

//         <input
//           type="date"
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               eventDate: e.target.value
//             })
//           }
//         />

//         <br /><br />

//         <button type="submit">
//           Save Event
//         </button>
//       </form>
//     </div>
//     </AdminLayout>
//   );
// }

// export default AddEvent;

// import { useState } from 'react';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function AddEvent() {
//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     location: '',
//     eventDate: ''
//   });

//   const [file, setFile] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem('token');

//       let bannerImage = '';

//       if (file) {
//         const uploadData = new FormData();

//         uploadData.append('image', file);

//         const uploadResponse = await api.post(
//           '/upload?type=event',
//           uploadData,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`
//             }
//           }
//         );

//         bannerImage =
//           uploadResponse.data.imageUrl;
//       }

//       await api.post(
//         '/events',
//         {
//           ...formData,
//           bannerImage
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       alert('Event Added');

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>
//       <div>
//         <h1>Add Event</h1>

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

//           <br />
//           <br />

//           <textarea
//             placeholder="Description"
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
//             placeholder="Location"
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 location: e.target.value
//               })
//             }
//           />

//           <br />
//           <br />

//           <input
//             type="date"
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 eventDate: e.target.value
//               })
//             }
//           />

//           <br />
//           <br />

//           <input
//             type="file"
//             onChange={(e) =>
//               setFile(e.target.files[0])
//             }
//           />

//           <br />
//           <br />

//           <button type="submit">
//             Save Event
//           </button>
//         </form>
//       </div>
//     </AdminLayout>
//   );
// }

// export default AddEvent;


// import { useState } from "react";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./AddEvent.css";

// function AddEvent() {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     location: "",
//     eventDate: "",
//   });

//   const [file, setFile] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem("token");

//       let bannerImage = "";

//       if (file) {
//         const uploadData = new FormData();

//         uploadData.append("image", file);

//         const uploadResponse = await api.post(
//           "/upload?type=event",
//           uploadData,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         bannerImage =
//           uploadResponse.data.imageUrl;
//       }

//       await api.post(
//         "/events",
//         {
//           ...formData,
//           bannerImage,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("Event Added Successfully");

//       setFormData({
//         title: "",
//         description: "",
//         location: "",
//         eventDate: "",
//       });

//       setFile(null);

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>

//       <div className="a4-add-event-page">

//         <div className="a4-add-event-header">

//           <h1>Add Event</h1>

//           <p>
//             Create concerts, workshops,
//             festivals and experiences.
//           </p>

//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="a4-add-event-form"
//         >

//           <div className="a4-event-form-group">

//             <label>
//               Event Title
//             </label>

//             <input
//               type="text"
//               placeholder="Enter event title"
//               value={formData.title}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   title: e.target.value,
//                 })
//               }
//             />

//           </div>

//           <div className="a4-event-form-group">

//             <label>
//               Description
//             </label>

//             <textarea
//               rows="6"
//               placeholder="Describe the event..."
//               value={formData.description}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   description: e.target.value,
//                 })
//               }
//             />

//           </div>

//           <div className="a4-event-form-grid">

//             <div className="a4-event-form-group">

//               <label>
//                 Location
//               </label>

//               <input
//                 type="text"
//                 placeholder="Enter event location"
//                 value={formData.location}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     location: e.target.value,
//                   })
//                 }
//               />

//             </div>

//             <div className="a4-event-form-group">

//               <label>
//                 Event Date
//               </label>

//               <input
//                 type="date"
//                 value={formData.eventDate}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     eventDate: e.target.value,
//                   })
//                 }
//               />

//             </div>

//           </div>

//           <div className="a4-event-form-group">

//             <label>
//               Event Banner
//             </label>

//             <input
//               type="file"
//               onChange={(e) =>
//                 setFile(e.target.files[0])
//               }
//             />

//             {file && (
//               <img
//                 src={URL.createObjectURL(file)}
//                 alt="Preview"
//                 className="a4-event-image-preview"
//               />
//             )}

//           </div>

//           <button
//             type="submit"
//             className="a4-save-event-btn"
//           >
//             Save Event
//           </button>

//         </form>

//       </div>

//     </AdminLayout>
//   );
// }

// export default AddEvent;








// import { useState } from "react";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./AddEvent.css";

// function AddEvent() {
//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     location: "",
//     eventDate: "",
//     bookingLink: "",
//     sponsorName: "",
//     sponsorLogo: "",
//     featured: false,
//   });

//   const [file, setFile] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem("token");

//       let bannerImage = "";

//       if (file) {
//         const uploadData = new FormData();

//         uploadData.append("image", file);

//         const uploadResponse = await api.post(
//           "/upload?type=event",
//           uploadData,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );

//         bannerImage = uploadResponse.data.imageUrl;
//       }

//       await api.post(
//         "/events",
//         {
//           ...formData,
//           bannerImage,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("Event Added Successfully");

//       setFormData({
//         title: "",
//         description: "",
//         location: "",
//         eventDate: "",
//         bookingLink: "",
//         sponsorName: "",
//         sponsorLogo: "",
//         featured: false,
//       });

//       setFile(null);

//     } catch (error) {
//       console.error(error);
//       alert("Failed to add event");
//     }
//   };

//   return (
//     <AdminLayout>
//       <div className="a4-add-event-page">

//         <div className="a4-add-event-header">
//           <h1>Add Event</h1>

//           <p>
//             Create concerts, festivals,
//             DJ nights and public experiences.
//           </p>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="a4-add-event-form"
//         >

//           {/* Event Title */}

//           <div className="a4-event-form-group">
//             <label>
//               Event Title
//             </label>

//             <input
//               type="text"
//               placeholder="Enter event title"
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

//           <div className="a4-event-form-group">
//             <label>
//               Description
//             </label>

//             <textarea
//               rows="6"
//               placeholder="Describe the event..."
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

//           {/* Location & Date */}

//           <div className="a4-event-form-grid">

//             <div className="a4-event-form-group">
//               <label>
//                 Location
//               </label>

//               <input
//                 type="text"
//                 placeholder="Enter event location"
//                 value={formData.location}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     location: e.target.value,
//                   })
//                 }
//                 required
//               />
//             </div>

//             <div className="a4-event-form-group">
//               <label>
//                 Event Date
//               </label>

//               <input
//                 type="date"
//                 value={formData.eventDate}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     eventDate: e.target.value,
//                   })
//                 }
//                 required
//               />
//             </div>

//           </div>

//           {/* Booking Link */}

//           <div className="a4-event-form-group">
//             <label>
//               Booking Link
//             </label>

//             <input
//               type="url"
//               placeholder="https://bookmyshow.com/event"
//               value={formData.bookingLink}
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   bookingLink: e.target.value,
//                 })
//               }
//             />
//           </div>

//           {/* Sponsor Section */}

//           <div className="a4-event-form-grid">

//             <div className="a4-event-form-group">
//               <label>
//                 Sponsor Name
//               </label>

//               <input
//                 type="text"
//                 placeholder="Enter sponsor name"
//                 value={formData.sponsorName}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     sponsorName: e.target.value,
//                   })
//                 }
//               />
//             </div>

//             <div className="a4-event-form-group">
//               <label>
//                 Sponsor Logo URL
//               </label>

//               <input
//                 type="text"
//                 placeholder="https://example.com/logo.png"
//                 value={formData.sponsorLogo}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     sponsorLogo: e.target.value,
//                   })
//                 }
//               />
//             </div>

//           </div>

//           {/* Event Banner */}

//           <div className="a4-event-form-group">
//             <label>
//               Event Banner
//             </label>

//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) =>
//                 setFile(e.target.files[0])
//               }
//             />

//             {file && (
//               <img
//                 src={URL.createObjectURL(file)}
//                 alt="Preview"
//                 className="a4-event-image-preview"
//               />
//             )}
//           </div>

//           {/* Featured Event */}

//           <div className="a4-event-featured">

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
//               Mark as Featured Event
//             </span>

//           </div>

//           <button
//             type="submit"
//             className="a4-save-event-btn"
//           >
//             Save Event
//           </button>

//         </form>
//       </div>
//     </AdminLayout>
//   );
// }

// export default AddEvent;


import { useState } from "react";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./AddEvent.css";

function AddEvent() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    eventDate: "",
    bookingLink: "",
    sponsorName: "",
    sponsorLogo: "",
    featured: false,
  });

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const token = localStorage.getItem("token");

      let bannerImage = "";

      if (file) {
        const uploadData = new FormData();
        uploadData.append("image", file);

        const uploadResponse = await api.post(
          "/upload?type=event",
          uploadData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        bannerImage = uploadResponse.data.imageUrl;
      }

      await api.post(
        "/events",
        {
          ...formData,
          bannerImage,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Event Added Successfully");

      setFormData({
        title: "",
        description: "",
        location: "",
        eventDate: "",
        bookingLink: "",
        sponsorName: "",
        sponsorLogo: "",
        featured: false,
      });

      setFile(null);
      setPreview(null);
    } catch (error) {
      console.error(error);
      alert("Failed to add event");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AdminLayout>
      <div className="aev-admin">
        {/* Header */}
        <div className="aev-header">
          <div className="aev-header-left">
            <h1>Add Event</h1>
            <p>Create concerts, festivals, DJ nights and public experiences</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="aev-form">
          <div className="aev-form-grid">
            {/* Left Column */}
            <div className="aev-form-left">
              {/* Event Title */}
              <div className="aev-form-group">
                <label>Event Title</label>
                <div className="aev-input-wrapper">
                  <svg className="aev-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 4h12M3 9h8M3 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <input
                    type="text"
                    placeholder="Enter event title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Description */}
              <div className="aev-form-group">
                <label>Description</label>
                <div className="aev-textarea-wrapper">
                  <svg className="aev-textarea-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M2 4h14M2 9h10M2 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <textarea
                    rows="5"
                    placeholder="Describe the event..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Location & Date */}
              <div className="aev-form-row">
                <div className="aev-form-group">
                  <label>Location</label>
                  <div className="aev-input-wrapper">
                    <svg className="aev-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 1C6.24 1 4 3.24 4 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="9" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <input
                      type="text"
                      placeholder="Event location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="aev-form-group">
                  <label>Event Date</label>
                  <div className="aev-input-wrapper">
                    <svg className="aev-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="2" y="3" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M2 7h14" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M5 1v3M13 1v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Booking Link */}
              <div className="aev-form-group">
                <label>Booking Link</label>
                <div className="aev-input-wrapper">
                  <svg className="aev-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M7 9h4M7 9a4 4 0 110-4h4a4 4 0 110 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <input
                    type="url"
                    placeholder="https://bookmyshow.com/event"
                    value={formData.bookingLink}
                    onChange={(e) => setFormData({ ...formData, bookingLink: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="aev-form-right">
              {/* Sponsor Info */}
              <div className="aev-form-section">
                <span className="aev-section-label">SPONSOR DETAILS</span>
                
                <div className="aev-form-group">
                  <label>Sponsor Name</label>
                  <div className="aev-input-wrapper">
                    <svg className="aev-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="6" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M3 16c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <input
                      type="text"
                      placeholder="Enter sponsor name"
                      value={formData.sponsorName}
                      onChange={(e) => setFormData({ ...formData, sponsorName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="aev-form-group">
                  <label>Sponsor Logo URL</label>
                  <div className="aev-input-wrapper">
                    <svg className="aev-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="2" y="4" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="6.5" cy="7.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M16 13l-4-4-3 3-2-2-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input
                      type="text"
                      placeholder="https://example.com/logo.png"
                      value={formData.sponsorLogo}
                      onChange={(e) => setFormData({ ...formData, sponsorLogo: e.target.value })}
                    />
                  </div>
                </div>
              </div>

              {/* Event Banner */}
              <div className="aev-form-group">
                <label>Event Banner</label>
                <div className="aev-upload-area">
                  {preview ? (
                    <div className="aev-preview">
                      <img src={preview} alt="Preview" className="aev-preview-image" />
                      <button
                        type="button"
                        className="aev-preview-remove"
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
                    <label className="aev-upload-label">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect x="4" y="6" width="32" height="28" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="14" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M36 28l-10-10-6 6-4-4-12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Click to upload banner</span>
                      <span className="aev-upload-hint">PNG, JPG or WEBP (Max 5MB)</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="aev-file-input"
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Featured Checkbox */}
              <div className="aev-form-group">
                <label className="aev-checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="aev-checkbox"
                  />
                  <span className="aev-checkbox-custom"></span>
                  <span className="aev-checkbox-text">Mark as Featured Event</span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="aev-form-footer">
            <button
              type="submit"
              className="aev-btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="aev-btn-spinner"></span>
                  Saving...
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M5 9l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Save Event
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

export default AddEvent;