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
















import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./EditEvent.css";

function EditEvent() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    eventDate: "",
    bannerImage: "",
  });

  const [file, setFile] = useState(null);

  useEffect(() => {
    loadEvent();
  }, []);

  const loadEvent = async () => {
    try {
      const { data } = await api.get(`/events/${id}`);

      setFormData({
        title: data.title || "",
        description: data.description || "",
        location: data.location || "",
        eventDate: data.eventDate
          ? data.eventDate.split("T")[0]
          : "",
        bannerImage: data.bannerImage || "",
      });

    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      let bannerImage =
        formData.bannerImage;

      if (file) {
        const uploadData =
          new FormData();

        uploadData.append(
          "image",
          file
        );

        const uploadResponse =
          await api.post(
            "/upload?type=event",
            uploadData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

        bannerImage =
          uploadResponse.data.imageUrl;
      }

      await api.put(
        `/events/${id}`,
        {
          title: formData.title,
          description:
            formData.description,
          location: formData.location,
          eventDate:
            formData.eventDate,
          bannerImage,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(
        "Event Updated Successfully"
      );

    } catch (error) {
      console.error(error);
      alert(
        "Failed to update event"
      );
    }
  };

  return (
    <AdminLayout>

      <div className="a4-edit-event-page">

        <div className="a4-edit-event-header">

          <h1>Edit Event</h1>

          <p>
            Update event information,
            banner, location and date.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="a4-edit-event-form"
        >

          <div className="a4-event-edit-group">

            <label>
              Event Title
            </label>

            <input
              type="text"
              value={formData.title}
              placeholder="Event Title"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title:
                    e.target.value,
                })
              }
            />

          </div>

          <div className="a4-event-edit-group">

            <label>
              Event Description
            </label>

            <textarea
              rows="6"
              value={
                formData.description
              }
              placeholder="Event Description"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  description:
                    e.target.value,
                })
              }
            />

          </div>

          <div className="a4-event-edit-grid">

            <div className="a4-event-edit-group">

              <label>
                Location
              </label>

              <input
                type="text"
                value={formData.location}
                placeholder="Event Location"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    location:
                      e.target.value,
                  })
                }
              />

            </div>

            <div className="a4-event-edit-group">

              <label>
                Event Date
              </label>

              <input
                type="date"
                value={
                  formData.eventDate
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    eventDate:
                      e.target.value,
                  })
                }
              />

            </div>

          </div>

          {/* Current Banner */}

          {formData.bannerImage &&
            !file && (
              <div className="a4-event-banner-section">

                <label>
                  Current Banner
                </label>

                <img
                  src={`http://localhost:5000${formData.bannerImage}`}
                  alt="Current Banner"
                  className="a4-event-banner-preview"
                />

              </div>
            )}

          {/* New Banner Preview */}

          {file && (
            <div className="a4-event-banner-section">

              <label>
                New Banner Preview
              </label>

              <img
                src={URL.createObjectURL(
                  file
                )}
                alt="Preview"
                className="a4-event-banner-preview"
              />

            </div>
          )}

          <div className="a4-event-edit-group">

            <label>
              Upload New Banner
            </label>

            <input
              type="file"
              onChange={(e) =>
                setFile(
                  e.target.files[0]
                )
              }
            />

          </div>

          <button
            type="submit"
            className="a4-update-event-btn"
          >
            Update Event
          </button>

        </form>

      </div>

    </AdminLayout>
  );
}

export default EditEvent;