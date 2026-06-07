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

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    } catch (error) {
      console.error(error);
      alert("Failed to add event");
    }
  };

  return (
    <AdminLayout>
      <div className="a4-add-event-page">

        <div className="a4-add-event-header">
          <h1>Add Event</h1>

          <p>
            Create concerts, festivals,
            DJ nights and public experiences.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="a4-add-event-form"
        >

          {/* Event Title */}

          <div className="a4-event-form-group">
            <label>
              Event Title
            </label>

            <input
              type="text"
              placeholder="Enter event title"
              value={formData.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value,
                })
              }
              required
            />
          </div>

          {/* Description */}

          <div className="a4-event-form-group">
            <label>
              Description
            </label>

            <textarea
              rows="6"
              placeholder="Describe the event..."
              value={formData.description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  description: e.target.value,
                })
              }
              required
            />
          </div>

          {/* Location & Date */}

          <div className="a4-event-form-grid">

            <div className="a4-event-form-group">
              <label>
                Location
              </label>

              <input
                type="text"
                placeholder="Enter event location"
                value={formData.location}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    location: e.target.value,
                  })
                }
                required
              />
            </div>

            <div className="a4-event-form-group">
              <label>
                Event Date
              </label>

              <input
                type="date"
                value={formData.eventDate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    eventDate: e.target.value,
                  })
                }
                required
              />
            </div>

          </div>

          {/* Booking Link */}

          <div className="a4-event-form-group">
            <label>
              Booking Link
            </label>

            <input
              type="url"
              placeholder="https://bookmyshow.com/event"
              value={formData.bookingLink}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  bookingLink: e.target.value,
                })
              }
            />
          </div>

          {/* Sponsor Section */}

          <div className="a4-event-form-grid">

            <div className="a4-event-form-group">
              <label>
                Sponsor Name
              </label>

              <input
                type="text"
                placeholder="Enter sponsor name"
                value={formData.sponsorName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    sponsorName: e.target.value,
                  })
                }
              />
            </div>

            <div className="a4-event-form-group">
              <label>
                Sponsor Logo URL
              </label>

              <input
                type="text"
                placeholder="https://example.com/logo.png"
                value={formData.sponsorLogo}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    sponsorLogo: e.target.value,
                  })
                }
              />
            </div>

          </div>

          {/* Event Banner */}

          <div className="a4-event-form-group">
            <label>
              Event Banner
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setFile(e.target.files[0])
              }
            />

            {file && (
              <img
                src={URL.createObjectURL(file)}
                alt="Preview"
                className="a4-event-image-preview"
              />
            )}
          </div>

          {/* Featured Event */}

          <div className="a4-event-featured">

            <input
              type="checkbox"
              checked={formData.featured}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  featured: e.target.checked,
                })
              }
            />

            <span>
              Mark as Featured Event
            </span>

          </div>

          <button
            type="submit"
            className="a4-save-event-btn"
          >
            Save Event
          </button>

        </form>
      </div>
    </AdminLayout>
  );
}

export default AddEvent;