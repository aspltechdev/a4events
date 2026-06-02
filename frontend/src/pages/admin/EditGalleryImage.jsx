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

import {
  useEffect,
  useState
} from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./EditGalleryImage.css";

function EditGalleryImage() {
  const { id } = useParams();

  const [file, setFile] =
    useState(null);

  const [formData, setFormData] =
    useState({
      title: "",
      category: "",
      image: "",
    });

  useEffect(() => {
    loadImage();
  }, []);

  const loadImage = async () => {
    try {
      const { data } =
        await api.get(`/gallery/${id}`);

      setFormData(data);

    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token =
        localStorage.getItem("token");

      let imageUrl =
        formData.image;

      if (file) {
        const uploadData =
          new FormData();

        uploadData.append(
          "image",
          file
        );

        const uploadResponse =
          await api.post(
            "/upload?type=gallery",
            uploadData,
            {
              headers: {
                Authorization:
                  `Bearer ${token}`,
              },
            }
          );

        imageUrl =
          uploadResponse.data.imageUrl;
      }

      await api.put(
        `/gallery/${id}`,
        {
          ...formData,
          image: imageUrl,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      alert(
        "Gallery Image Updated"
      );

    } catch (error) {
      console.error(error);
    }
  };

  const previewImage = file
    ? URL.createObjectURL(file)
    : `http://localhost:5000${formData.image}`;

  return (
    <AdminLayout>

      <div className="a4-admin-edit-gallery-page">

        <div className="a4-admin-edit-gallery-header">

          <h1>
            Edit Gallery Image
          </h1>

          <p>
            Update gallery media,
            category and preview changes
            instantly.
          </p>

        </div>

        <div className="a4-admin-edit-gallery-layout">

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="a4-admin-edit-gallery-form"
          >

            <div className="a4-admin-gallery-field">

              <label>
                Image Title
              </label>

              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title:
                      e.target.value,
                  })
                }
              />

            </div>

            <div className="a4-admin-gallery-field">

              <label>
                Category
              </label>

              <input
                type="text"
                value={
                  formData.category
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    category:
                      e.target.value,
                  })
                }
              />

            </div>

            <div className="a4-admin-gallery-field">

              <label>
                Upload New Image
              </label>

              <input
                type="file"
                onChange={(e) =>
                  setFile(
                    e.target
                      .files[0]
                  )
                }
              />

            </div>

            <button
              type="submit"
              className="a4-admin-gallery-update-btn"
            >
              Update Gallery Image
            </button>

          </form>

          {/* PREVIEW */}

          <div className="a4-admin-gallery-preview-card">

            <img
              src={previewImage}
              alt={formData.title}
              className="a4-admin-gallery-preview-image"
            />

            <div className="a4-admin-gallery-preview-content">

              <span className="a4-admin-gallery-preview-category">
                {formData.category ||
                  "Category"}
              </span>

              <h3>
                {formData.title ||
                  "Gallery Title"}
              </h3>

            </div>

          </div>

        </div>

      </div>

    </AdminLayout>
  );
}

export default EditGalleryImage;