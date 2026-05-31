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

import { useState } from 'react';
import api from '../../services/api';
import AdminLayout from './AdminLayout';

function AddEvent() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    eventDate: ''
  });

  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');

      let bannerImage = '';

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

      await api.post(
        '/events',
        {
          ...formData,
          bannerImage
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert('Event Added');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>
      <div>
        <h1>Add Event</h1>

        <form onSubmit={handleSubmit}>
          <input
            placeholder="Title"
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
            placeholder="Location"
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
            onChange={(e) =>
              setFormData({
                ...formData,
                eventDate: e.target.value
              })
            }
          />

          <br />
          <br />

          <input
            type="file"
            onChange={(e) =>
              setFile(e.target.files[0])
            }
          />

          <br />
          <br />

          <button type="submit">
            Save Event
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}

export default AddEvent;