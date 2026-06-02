// import {
//   useEffect,
//   useState
// } from 'react';

// import { useParams } from 'react-router-dom';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function EditTestimonial() {
//   const { id } =
//     useParams();

//   const [file, setFile] =
//     useState(null);

//   const [formData, setFormData] =
//     useState({
//       name: '',
//       company: '',
//       review: '',
//       rating: 5,
//       image: ''
//     });

//   useEffect(() => {
//     loadTestimonial();
//   }, []);

//   const loadTestimonial =
//     async () => {
//       try {
//         const { data } =
//           await api.get(
//             `/testimonials/${id}`
//           );

//         setFormData(
//           data
//         );

//       } catch (error) {
//         console.error(
//           error
//         );
//       }
//     };

//   const handleSubmit =
//     async (e) => {
//       e.preventDefault();

//       try {
//         const token =
//           localStorage.getItem(
//             'token'
//           );

//         let imageUrl =
//           formData.image;

//         if (file) {
//           const uploadData =
//             new FormData();

//           uploadData.append(
//             'image',
//             file
//           );

//           const uploadResponse =
//             await api.post(
//               '/upload?type=testimonial',
//               uploadData,
//               {
//                 headers: {
//                   Authorization:
//                     `Bearer ${token}`
//                 }
//               }
//             );

//           imageUrl =
//             uploadResponse.data.imageUrl;
//         }

//         await api.put(
//           `/testimonials/${id}`,
//           {
//             ...formData,
//             image:
//               imageUrl
//           },
//           {
//             headers: {
//               Authorization:
//                 `Bearer ${token}`
//             }
//           }
//         );

//         alert(
//           'Testimonial Updated'
//         );

//       } catch (error) {
//         console.error(
//           error
//         );
//       }
//     };

//   return (
//     <AdminLayout>
//       <h1>
//         Edit Testimonial
//       </h1>

//       <form
//         onSubmit={
//           handleSubmit
//         }
//       >
//         <input
//           value={
//             formData.name
//           }
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               name:
//                 e.target.value
//             })
//           }
//         />

//         <br />
//         <br />

//         <input
//           value={
//             formData.company
//           }
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               company:
//                 e.target.value
//             })
//           }
//         />

//         <br />
//         <br />

//         <textarea
//           value={
//             formData.review
//           }
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               review:
//                 e.target.value
//             })
//           }
//         />

//         <br />
//         <br />

//         <input
//           type="number"
//           min="1"
//           max="5"
//           value={
//             formData.rating
//           }
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               rating:
//                 Number(
//                   e.target
//                     .value
//                 )
//             })
//           }
//         />

//         <br />
//         <br />

//         {formData.image && (
//           <img
//             src={`http://localhost:5000${formData.image}`}
//             alt=""
//             width="120"
//           />
//         )}

//         <br />
//         <br />

//         <input
//           type="file"
//           onChange={(e) =>
//             setFile(
//               e.target
//                 .files[0]
//             )
//           }
//         />

//         <br />
//         <br />

//         <button
//           type="submit"
//         >
//           Update Testimonial
//         </button>
//       </form>
//     </AdminLayout>
//   );
// }

// export default EditTestimonial;
















import {
  useEffect,
  useState
} from "react";

import { useParams } from "react-router-dom";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";

import "./EditTestimonial.css";

function EditTestimonial() {

  const { id } = useParams();

  const [file, setFile] =
    useState(null);

  const [formData, setFormData] =
    useState({
      name: "",
      company: "",
      review: "",
      rating: 5,
      image: "",
    });

  useEffect(() => {
    loadTestimonial();
  }, []);

  const loadTestimonial =
    async () => {
      try {

        const { data } =
          await api.get(
            `/testimonials/${id}`
          );

        setFormData(data);

      } catch (error) {
        console.error(error);
      }
    };

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const token =
          localStorage.getItem(
            "token"
          );

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
              "/upload?type=testimonial",
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
          `/testimonials/${id}`,
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
          "Testimonial Updated Successfully"
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

      <div className="a4-admin-edit-testimonial-page">

        <div className="a4-admin-edit-testimonial-header">

          <h1>
            Edit Testimonial
          </h1>

          <p>
            Update customer reviews,
            ratings and profile details.
          </p>

        </div>

        <div className="a4-admin-edit-testimonial-layout">

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="a4-admin-edit-testimonial-form"
          >

            <div className="a4-admin-testimonial-field">

              <label>
                Customer Name
              </label>

              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name:
                      e.target.value,
                  })
                }
              />

            </div>

            <div className="a4-admin-testimonial-field">

              <label>
                Company
              </label>

              <input
                type="text"
                value={
                  formData.company
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    company:
                      e.target.value,
                  })
                }
              />

            </div>

            <div className="a4-admin-testimonial-field">

              <label>
                Review
              </label>

              <textarea
                rows="6"
                value={
                  formData.review
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    review:
                      e.target.value,
                  })
                }
              />

            </div>

            <div className="a4-admin-testimonial-field">

              <label>
                Rating
              </label>

              <select
                value={
                  formData.rating
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    rating:
                      Number(
                        e.target
                          .value
                      ),
                  })
                }
              >
                <option value="5">
                  5 Stars
                </option>
                <option value="4">
                  4 Stars
                </option>
                <option value="3">
                  3 Stars
                </option>
                <option value="2">
                  2 Stars
                </option>
                <option value="1">
                  1 Star
                </option>
              </select>

            </div>

            <div className="a4-admin-testimonial-field">

              <label>
                Upload New Photo
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
              className="a4-admin-testimonial-update-btn"
            >
              Update Testimonial
            </button>

          </form>

          {/* LIVE PREVIEW */}

          <div className="a4-admin-testimonial-preview-card">

            <div className="a4-admin-testimonial-preview-top">

              <img
                src={previewImage}
                alt={
                  formData.name
                }
                className="a4-admin-testimonial-preview-avatar"
              />

              <div>

                <h3>
                  {
                    formData.name
                  }
                </h3>

                <p>
                  {
                    formData.company
                  }
                </p>

              </div>

            </div>

            <div className="a4-admin-testimonial-preview-rating">

              {"★".repeat(
                formData.rating
              )}

            </div>

            <p className="a4-admin-testimonial-preview-review">
              "
              {
                formData.review
              }
              "
            </p>

          </div>

        </div>

      </div>

    </AdminLayout>
  );
}

export default EditTestimonial;