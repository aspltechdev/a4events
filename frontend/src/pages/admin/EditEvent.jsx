// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function EditEvent() {
//   const { id } = useParams();

//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     location: '',
//     eventDate: ''
//   });

//   useEffect(() => {
//     loadEvent();
//   }, []);

//   const loadEvent = async () => {
//     try {
//       const { data } = await api.get(`/events/${id}`);

//       setFormData({
//         title: data.title || '',
//         description: data.description || '',
//         location: data.location || '',
//         eventDate: data.eventDate
//           ? data.eventDate.split('T')[0]
//           : ''
//       });

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteEvent = async (id) => {
//   const token = localStorage.getItem('token');

//   if (!window.confirm('Delete Event?')) {
//     return;
//   }

//   try {
//     await api.delete(`/events/${id}`, {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });

//     fetchEvents();

//   } catch (error) {
//     console.error(error);
//   }
// };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem('token');

//       await api.put(
//         `/events/${id}`,
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       alert('Event Updated');

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>
//       <h1>Edit Event</h1>

//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
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
//           placeholder="Description"
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
//           type="text"
//           placeholder="Location"
//           value={formData.location}
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
//           value={formData.eventDate}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               eventDate: e.target.value
//             })
//           }
//         />

//         <br /><br />

//         <button type="submit">
//           Update Event
//         </button>
//       </form>
//     </AdminLayout>
//   );
// }

// export default EditEvent;










// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function EditEvent() {
//   const { id } = useParams();

//   const [formData, setFormData] = useState({
//     title: '',
//     description: '',
//     location: '',
//     eventDate: '',
//     bannerImage: ''
//   });

//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     loadEvent();
//   }, []);

//   const loadEvent = async () => {
//     try {
//       const { data } = await api.get(`/events/${id}`);

//       setFormData({
//         title: data.title || '',
//         description: data.description || '',
//         location: data.location || '',
//         eventDate: data.eventDate
//           ? data.eventDate.split('T')[0]
//           : '',
//         bannerImage: data.bannerImage || ''
//       });

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem('token');

//       let bannerImage = formData.bannerImage;

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

//       await api.put(
//         `/events/${id}`,
//         {
//           title: formData.title,
//           description: formData.description,
//           location: formData.location,
//           eventDate: formData.eventDate,
//           bannerImage
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       alert('Event Updated');

//     } catch (error) {
//       console.error(error);
//       alert('Failed to update event');
//     }
//   };

//   return (
//     <AdminLayout>
//       <div>
//         <h1>Edit Event</h1>

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
//             type="text"
//             placeholder="Location"
//             value={formData.location}
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
//             value={formData.eventDate}
//             onChange={(e) =>
//               setFormData({
//                 ...formData,
//                 eventDate: e.target.value
//               })
//             }
//           />

//           <br />
//           <br />

//           {formData.bannerImage && (
//             <>
//               <img
//                 src={`http://localhost:5000${formData.bannerImage}`}
//                 alt="Event Banner"
//                 width="250"
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

//           <button type="submit">
//             Update Event
//           </button>
//         </form>
//       </div>
//     </AdminLayout>
//   );
// }

// export default EditEvent;
















// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./EditEvent.css";

// function EditEvent() {
//   const { id } = useParams();

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     location: "",
//     eventDate: "",
//     bannerImage: "",
//   });

//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     loadEvent();
//   }, []);

//   const loadEvent = async () => {
//     try {
//       const { data } = await api.get(`/events/${id}`);

//       setFormData({
//         title: data.title || "",
//         description: data.description || "",
//         location: data.location || "",
//         eventDate: data.eventDate
//           ? data.eventDate.split("T")[0]
//           : "",
//         bannerImage: data.bannerImage || "",
//       });

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token = localStorage.getItem("token");

//       let bannerImage =
//         formData.bannerImage;

//       if (file) {
//         const uploadData =
//           new FormData();

//         uploadData.append(
//           "image",
//           file
//         );

//         const uploadResponse =
//           await api.post(
//             "/upload?type=event",
//             uploadData,
//             {
//               headers: {
//                 Authorization: `Bearer ${token}`,
//               },
//             }
//           );

//         bannerImage =
//           uploadResponse.data.imageUrl;
//       }

//       await api.put(
//         `/events/${id}`,
//         {
//           title: formData.title,
//           description:
//             formData.description,
//           location: formData.location,
//           eventDate:
//             formData.eventDate,
//           bannerImage,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert(
//         "Event Updated Successfully"
//       );

//     } catch (error) {
//       console.error(error);
//       alert(
//         "Failed to update event"
//       );
//     }
//   };

//   return (
//     <AdminLayout>

//       <div className="a4-edit-event-page">

//         <div className="a4-edit-event-header">

//           <h1>Edit Event</h1>

//           <p>
//             Update event information,
//             banner, location and date.
//           </p>

//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="a4-edit-event-form"
//         >

//           <div className="a4-event-edit-group">

//             <label>
//               Event Title
//             </label>

//             <input
//               type="text"
//               value={formData.title}
//               placeholder="Event Title"
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   title:
//                     e.target.value,
//                 })
//               }
//             />

//           </div>

//           <div className="a4-event-edit-group">

//             <label>
//               Event Description
//             </label>

//             <textarea
//               rows="6"
//               value={
//                 formData.description
//               }
//               placeholder="Event Description"
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   description:
//                     e.target.value,
//                 })
//               }
//             />

//           </div>

//           <div className="a4-event-edit-grid">

//             <div className="a4-event-edit-group">

//               <label>
//                 Location
//               </label>

//               <input
//                 type="text"
//                 value={formData.location}
//                 placeholder="Event Location"
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     location:
//                       e.target.value,
//                   })
//                 }
//               />

//             </div>

//             <div className="a4-event-edit-group">

//               <label>
//                 Event Date
//               </label>

//               <input
//                 type="date"
//                 value={
//                   formData.eventDate
//                 }
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     eventDate:
//                       e.target.value,
//                   })
//                 }
//               />

//             </div>

//           </div>

//           {/* Current Banner */}

//           {formData.bannerImage &&
//             !file && (
//               <div className="a4-event-banner-section">

//                 <label>
//                   Current Banner
//                 </label>

//                 <img
//                   src={`http://localhost:5000${formData.bannerImage}`}
//                   alt="Current Banner"
//                   className="a4-event-banner-preview"
//                 />

//               </div>
//             )}

//           {/* New Banner Preview */}

//           {file && (
//             <div className="a4-event-banner-section">

//               <label>
//                 New Banner Preview
//               </label>

//               <img
//                 src={URL.createObjectURL(
//                   file
//                 )}
//                 alt="Preview"
//                 className="a4-event-banner-preview"
//               />

//             </div>
//           )}

//           <div className="a4-event-edit-group">

//             <label>
//               Upload New Banner
//             </label>

//             <input
//               type="file"
//               onChange={(e) =>
//                 setFile(
//                   e.target.files[0]
//                 )
//               }
//             />

//           </div>

//           <button
//             type="submit"
//             className="a4-update-event-btn"
//           >
//             Update Event
//           </button>

//         </form>

//       </div>

//     </AdminLayout>
//   );
// }

// export default EditEvent;


// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./EditEvent.css";

// function EditEvent() {
//   const { id } = useParams();

//   const [formData, setFormData] = useState({
//     title: "",
//     description: "",
//     location: "",
//     eventDate: "",
//     bannerImage: "",
//     bookingLink: "",
//     sponsorName: "",
//     sponsorLogo: "",
//     featured: false,
//   });

//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     loadEvent();
//   }, []);

//   const loadEvent = async () => {
//     try {
//       const { data } = await api.get(`/events/${id}`);

//       setFormData({
//         title: data.title || "",
//         description: data.description || "",
//         location: data.location || "",
//         eventDate: data.eventDate
//           ? data.eventDate.split("T")[0]
//           : "",
//         bannerImage: data.bannerImage || "",
//         bookingLink: data.bookingLink || "",
//         sponsorName: data.sponsorName || "",
//         sponsorLogo: data.sponsorLogo || "",
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

//       let bannerImage = formData.bannerImage;

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

//       await api.put(
//         `/events/${id}`,
//         {
//           title: formData.title,
//           description: formData.description,
//           location: formData.location,
//           eventDate: formData.eventDate,
//           bannerImage,
//           bookingLink: formData.bookingLink,
//           sponsorName: formData.sponsorName,
//           sponsorLogo: formData.sponsorLogo,
//           featured: formData.featured,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       alert("Event Updated Successfully");
//     } catch (error) {
//       console.error(error);
//       alert("Failed to update event");
//     }
//   };

//   return (
//     <AdminLayout>
//       <div className="a4-edit-event-page">
//         <div className="a4-edit-event-header">
//           <h1>Edit Event</h1>

//           <p>
//             Update event information, banner, location,
//             sponsor details and booking link.
//           </p>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="a4-edit-event-form"
//         >
//           {/* Event Title */}

//           <div className="a4-event-edit-group">
//             <label>Event Title</label>

//             <input
//               type="text"
//               value={formData.title}
//               placeholder="Event Title"
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   title: e.target.value,
//                 })
//               }
//             />
//           </div>

//           {/* Description */}

//           <div className="a4-event-edit-group">
//             <label>Event Description</label>

//             <textarea
//               rows="6"
//               value={formData.description}
//               placeholder="Event Description"
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   description: e.target.value,
//                 })
//               }
//             />
//           </div>

//           {/* Location & Date */}

//           <div className="a4-event-edit-grid">
//             <div className="a4-event-edit-group">
//               <label>Location</label>

//               <input
//                 type="text"
//                 value={formData.location}
//                 placeholder="Event Location"
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     location: e.target.value,
//                   })
//                 }
//               />
//             </div>

//             <div className="a4-event-edit-group">
//               <label>Event Date</label>

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

//           {/* Booking Link */}

//           <div className="a4-event-edit-group">
//             <label>Booking Link</label>

//             <input
//               type="url"
//               value={formData.bookingLink}
//               placeholder="https://example.com/book"
//               onChange={(e) =>
//                 setFormData({
//                   ...formData,
//                   bookingLink: e.target.value,
//                 })
//               }
//             />
//           </div>

//           {/* Sponsor Details */}

//           <div className="a4-event-edit-grid">
//             <div className="a4-event-edit-group">
//               <label>Sponsor Name</label>

//               <input
//                 type="text"
//                 value={formData.sponsorName}
//                 placeholder="Sponsor Name"
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     sponsorName: e.target.value,
//                   })
//                 }
//               />
//             </div>

//             <div className="a4-event-edit-group">
//               <label>Sponsor Logo URL</label>

//               <input
//                 type="text"
//                 value={formData.sponsorLogo}
//                 placeholder="https://logo-url.com/logo.png"
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     sponsorLogo: e.target.value,
//                   })
//                 }
//               />
//             </div>
//           </div>

//           {/* Sponsor Logo Preview */}

//           {formData.sponsorLogo && (
//             <div className="a4-event-banner-section">
//               <label>Sponsor Logo Preview</label>

//               <img
//                 src={formData.sponsorLogo}
//                 alt="Sponsor Logo"
//                 className="a4-event-banner-preview"
//                 style={{
//                   maxWidth: "180px",
//                   objectFit: "contain",
//                 }}
//               />
//             </div>
//           )}

//           {/* Featured Toggle */}

//           <div className="a4-event-edit-group">
//             <label
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: "10px",
//                 cursor: "pointer",
//               }}
//             >
//               <input
//                 type="checkbox"
//                 checked={formData.featured}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     featured: e.target.checked,
//                   })
//                 }
//               />

//               Featured Event
//             </label>
//           </div>

//           {/* Current Banner */}

//           {formData.bannerImage && !file && (
//             <div className="a4-event-banner-section">
//               <label>Current Banner</label>

//               <img
//                 src={`http://localhost:5000${formData.bannerImage}`}
//                 alt="Current Banner"
//                 className="a4-event-banner-preview"
//               />
//             </div>
//           )}

//           {/* New Banner Preview */}

//           {file && (
//             <div className="a4-event-banner-section">
//               <label>New Banner Preview</label>

//               <img
//                 src={URL.createObjectURL(file)}
//                 alt="Preview"
//                 className="a4-event-banner-preview"
//               />
//             </div>
//           )}

//           {/* Upload Banner */}

//           <div className="a4-event-edit-group">
//             <label>Upload New Banner</label>

//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) =>
//                 setFile(e.target.files[0])
//               }
//             />
//           </div>

//           <button
//             type="submit"
//             className="a4-update-event-btn"
//           >
//             Update Event
//           </button>
//         </form>
//       </div>
//     </AdminLayout>
//   );
// }

// export default EditEvent;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./EditEvent.css";

function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    eventDate: "",
    bannerImage: "",
    bookingLink: "",
    sponsorName: "",
    sponsorLogo: "",
    featured: false,
  });

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    loadEvent();
  }, [id]);

  const loadEvent = async () => {
    try {
      const { data } = await api.get(`/events/${id}`);

      setFormData({
        title: data.title || "",
        description: data.description || "",
        location: data.location || "",
        eventDate: data.eventDate ? data.eventDate.split("T")[0] : "",
        bannerImage: data.bannerImage || "",
        bookingLink: data.bookingLink || "",
        sponsorName: data.sponsorName || "",
        sponsorLogo: data.sponsorLogo || "",
        featured: data.featured || false,
      });

      if (data.bannerImage) {
        setPreview(`http://localhost:5000${data.bannerImage}`);
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
      let bannerImage = formData.bannerImage;

      if (file) {
        const uploadData = new FormData();
        uploadData.append("image", file);

        const uploadResponse = await api.post(
          "/upload?type=event",
          uploadData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        bannerImage = uploadResponse.data.imageUrl;
      }

      await api.put(
        `/events/${id}`,
        {
          title: formData.title,
          description: formData.description,
          location: formData.location,
          eventDate: formData.eventDate,
          bannerImage,
          bookingLink: formData.bookingLink,
          sponsorName: formData.sponsorName,
          sponsorLogo: formData.sponsorLogo,
          featured: formData.featured,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Event Updated Successfully");
      navigate("/admin/events");
    } catch (error) {
      console.error(error);
      alert("Failed to update event");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="ee-loading">
          <div className="ee-loading-spinner"></div>
          <p>Loading event...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="ee-admin">
        {/* Header */}
        <div className="ee-header">
          <button
            type="button"
            className="ee-back-btn"
            onClick={() => navigate("/admin/events")}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Events
          </button>
          <div className="ee-header-info">
            <h1>Edit Event</h1>
            <p>Update event information, banner, location, sponsor details and booking link</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="ee-form">
          <div className="ee-form-grid">
            {/* Left Column */}
            <div className="ee-form-left">
              {/* Event Title */}
              <div className="ee-form-group">
                <label>Event Title</label>
                <div className="ee-input-wrapper">
                  <svg className="ee-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 4h12M3 9h8M3 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <input
                    type="text"
                    value={formData.title}
                    placeholder="Event Title"
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Description */}
              <div className="ee-form-group">
                <label>Description</label>
                <div className="ee-textarea-wrapper">
                  <svg className="ee-textarea-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M2 4h14M2 9h10M2 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <textarea
                    rows="4"
                    value={formData.description}
                    placeholder="Event Description"
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Location & Date */}
              <div className="ee-form-row">
                <div className="ee-form-group">
                  <label>Location</label>
                  <div className="ee-input-wrapper">
                    <svg className="ee-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 1C6.24 1 4 3.24 4 6c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="9" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <input
                      type="text"
                      value={formData.location}
                      placeholder="Event Location"
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="ee-form-group">
                  <label>Event Date</label>
                  <div className="ee-input-wrapper">
                    <svg className="ee-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
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
              <div className="ee-form-group">
                <label>Booking Link</label>
                <div className="ee-input-wrapper">
                  <svg className="ee-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M7 9h4M7 9a4 4 0 110-4h4a4 4 0 110 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <input
                    type="url"
                    value={formData.bookingLink}
                    placeholder="https://example.com/book"
                    onChange={(e) => setFormData({ ...formData, bookingLink: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="ee-form-right">
              {/* Sponsor Section */}
              <div className="ee-form-section">
                <span className="ee-section-label">SPONSOR DETAILS</span>
                
                <div className="ee-form-group">
                  <label>Sponsor Name</label>
                  <div className="ee-input-wrapper">
                    <svg className="ee-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="6" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M3 16c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <input
                      type="text"
                      value={formData.sponsorName}
                      placeholder="Sponsor Name"
                      onChange={(e) => setFormData({ ...formData, sponsorName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="ee-form-group">
                  <label>Sponsor Logo URL</label>
                  <div className="ee-input-wrapper">
                    <svg className="ee-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="2" y="4" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                      <circle cx="6.5" cy="7.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M16 13l-4-4-3 3-2-2-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input
                      type="text"
                      value={formData.sponsorLogo}
                      placeholder="https://logo-url.com/logo.png"
                      onChange={(e) => setFormData({ ...formData, sponsorLogo: e.target.value })}
                    />
                  </div>
                </div>

                {formData.sponsorLogo && (
                  <div className="ee-sponsor-preview">
                    <img src={formData.sponsorLogo} alt="Sponsor Logo" />
                  </div>
                )}
              </div>

              {/* Banner Upload */}
              <div className="ee-form-group">
                <label>Event Banner</label>
                <div className="ee-upload-area">
                  {preview ? (
                    <div className="ee-preview">
                      <img src={preview} alt="Preview" className="ee-preview-image" />
                      <button
                        type="button"
                        className="ee-preview-remove"
                        onClick={() => {
                          setFile(null);
                          setPreview(formData.bannerImage ? `http://localhost:5000${formData.bannerImage}` : null);
                        }}
                      >
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </button>
                      {file && <span className="ee-preview-badge">New</span>}
                    </div>
                  ) : (
                    <label className="ee-upload-label">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect x="4" y="6" width="32" height="28" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="14" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M36 28l-10-10-6 6-4-4-12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Click to upload banner</span>
                      <span className="ee-upload-hint">PNG, JPG or WEBP (Max 5MB)</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="ee-file-input"
                      />
                    </label>
                  )}
                </div>
              </div>

              {/* Featured Checkbox */}
              <div className="ee-form-group">
                <label className="ee-checkbox-label">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="ee-checkbox"
                  />
                  <span className="ee-checkbox-custom"></span>
                  <span className="ee-checkbox-text">Featured Event</span>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="ee-form-footer">
            <button
              type="submit"
              className="ee-btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="ee-btn-spinner"></span>
                  Updating...
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M5 9l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Update Event
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

export default EditEvent;