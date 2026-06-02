// import { useState } from 'react';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function AddHeroSlide() {
//   const [file, setFile] =
//     useState(null);

//   const [formData, setFormData] =
//     useState({
//       title: '',
//       subtitle: '',
//       buttonText: '',
//       buttonLink: '',
//       order: 1,
//       isActive: true
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
//             '/upload?type=hero',
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
//         '/hero-slides',
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

//       alert('Slide Added');

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>
//       <h1>Add Hero Slide</h1>

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

//         <textarea
//           placeholder="Subtitle"
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               subtitle: e.target.value
//             })
//           }
//         />

//         <br /><br />

//         <input
//           placeholder="Button Text"
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               buttonText:
//                 e.target.value
//             })
//           }
//         />

//         <br /><br />

//         <input
//           placeholder="Button Link"
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               buttonLink:
//                 e.target.value
//             })
//           }
//         />

//         <br /><br />

//         <input
//           type="number"
//           placeholder="Order"
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               order:
//                 Number(
//                   e.target.value
//                 )
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
//           Save Slide
//         </button>
//       </form>
//     </AdminLayout>
//   );
// }

// export default AddHeroSlide;


import { useState } from "react";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./AddHeroSlide.css";

function AddHeroSlide() {
  const [file, setFile] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    buttonText: "",
    buttonLink: "",
    order: 1,
    isActive: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token =
        localStorage.getItem("token");

      let imageUrl = "";

      if (file) {
        const uploadData =
          new FormData();

        uploadData.append(
          "image",
          file
        );

        const uploadResponse =
          await api.post(
            "/upload?type=hero",
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

      await api.post(
        "/hero-slides",
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
        "Hero Slide Added Successfully"
      );

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>

      <div className="a4-add-slide-page">

        <div className="a4-add-slide-header">

          <h1>Add Hero Slide</h1>

          <p>
            Create homepage banners and
            promotional hero sections.
          </p>

        </div>

        <div className="a4-slide-layout">

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="a4-slide-form"
          >

            <div className="a4-slide-group">

              <label>
                Hero Title
              </label>

              <input
                type="text"
                placeholder="Enter Hero Title"
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

            <div className="a4-slide-group">

              <label>
                Subtitle
              </label>

              <textarea
                rows="5"
                placeholder="Hero subtitle..."
                value={formData.subtitle}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    subtitle:
                      e.target.value,
                  })
                }
              />

            </div>

            <div className="a4-slide-group">

              <label>
                Button Text
              </label>

              <input
                type="text"
                placeholder="Explore Events"
                value={
                  formData.buttonText
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    buttonText:
                      e.target.value,
                  })
                }
              />

            </div>

            <div className="a4-slide-group">

              <label>
                Button Link
              </label>

              <input
                type="text"
                placeholder="/events"
                value={
                  formData.buttonLink
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    buttonLink:
                      e.target.value,
                  })
                }
              />

            </div>

            <div className="a4-slide-grid">

              <div className="a4-slide-group">

                <label>
                  Display Order
                </label>

                <input
                  type="number"
                  value={formData.order}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      order:
                        Number(
                          e.target
                            .value
                        ),
                    })
                  }
                />

              </div>

              <div className="a4-slide-group">

                <label>
                  Upload Image
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

            </div>

            <div className="a4-slide-checkbox">

              <input
                type="checkbox"
                checked={
                  formData.isActive
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    isActive:
                      e.target.checked,
                  })
                }
              />

              <span>
                Active Slide
              </span>

            </div>

            <button
              type="submit"
              className="a4-save-slide-btn"
            >
              Save Hero Slide
            </button>

          </form>

          {/* LIVE PREVIEW */}

          <div className="a4-slide-preview">

            <div
              className="a4-preview-banner"
              style={{
                backgroundImage: file
                  ? `url(${URL.createObjectURL(file)})`
                  : "",
              }}
            >

              <div className="a4-preview-overlay">

                <span>
                  Homepage Preview
                </span>

                <h2>
                  {formData.title ||
                    "Your Hero Title"}
                </h2>

                <p>
                  {formData.subtitle ||
                    "Hero subtitle preview will appear here."}
                </p>

                <button>
                  {formData.buttonText ||
                    "Explore"}
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </AdminLayout>
  );
}

export default AddHeroSlide;