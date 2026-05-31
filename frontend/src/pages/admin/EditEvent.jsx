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

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import AdminLayout from './AdminLayout';

function EditEvent() {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    eventDate: '',
    bannerImage: ''
  });

  const [file, setFile] = useState(null);

  useEffect(() => {
    loadEvent();
  }, []);

  const loadEvent = async () => {
    try {
      const { data } = await api.get(`/events/${id}`);

      setFormData({
        title: data.title || '',
        description: data.description || '',
        location: data.location || '',
        eventDate: data.eventDate
          ? data.eventDate.split('T')[0]
          : '',
        bannerImage: data.bannerImage || ''
      });

    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');

      let bannerImage = formData.bannerImage;

      if (file) {
        const uploadData = new FormData();

        uploadData.append('image', file);

        const uploadResponse = await api.post(
          '/upload?type=event',
          uploadData,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        bannerImage =
          uploadResponse.data.imageUrl;
      }

      await api.put(
        `/events/${id}`,
        {
          title: formData.title,
          description: formData.description,
          location: formData.location,
          eventDate: formData.eventDate,
          bannerImage
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert('Event Updated');

    } catch (error) {
      console.error(error);
      alert('Failed to update event');
    }
  };

  return (
    <AdminLayout>
      <div>
        <h1>Edit Event</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value
              })
            }
          />

          <br />
          <br />

          <textarea
            placeholder="Description"
            value={formData.description}
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value
              })
            }
          />

          <br />
          <br />

          <input
            type="text"
            placeholder="Location"
            value={formData.location}
            onChange={(e) =>
              setFormData({
                ...formData,
                location: e.target.value
              })
            }
          />

          <br />
          <br />

          <input
            type="date"
            value={formData.eventDate}
            onChange={(e) =>
              setFormData({
                ...formData,
                eventDate: e.target.value
              })
            }
          />

          <br />
          <br />

          {formData.bannerImage && (
            <>
              <img
                src={`http://localhost:5000${formData.bannerImage}`}
                alt="Event Banner"
                width="250"
              />

              <br />
              <br />
            </>
          )}

          <input
            type="file"
            onChange={(e) =>
              setFile(e.target.files[0])
            }
          />

          <br />
          <br />

          <button type="submit">
            Update Event
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}

export default EditEvent;