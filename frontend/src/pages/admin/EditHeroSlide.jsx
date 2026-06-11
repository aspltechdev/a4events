// import {
//   useEffect,
//   useState
// } from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function EditHeroSlide() {
//   const { id } = useParams();

//   const [file, setFile] =
//     useState(null);

//   const [formData, setFormData] =
//     useState({
//       title: '',
//       subtitle: '',
//       buttonText: '',
//       buttonLink: '',
//       order: 1,
//       image: '',
//       isActive: true
//     });

//   useEffect(() => {
//     loadSlide();
//   }, []);

//   const loadSlide = async () => {
//     try {
//       const { data } =
//         await api.get(
//           `/hero-slides/${id}`
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

//       await api.put(
//         `/hero-slides/${id}`,
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

//       alert('Slide Updated');

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>
//       <h1>Edit Hero Slide</h1>

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

//         <textarea
//           value={formData.subtitle}
//           onChange={(e) =>
//             setFormData({
//               ...formData,
//               subtitle:
//                 e.target.value
//             })
//           }
//         />

//         <br /><br />

//         <input
//           value={formData.buttonText}
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
//           value={formData.buttonLink}
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
//           value={formData.order}
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
//           Update Slide
//         </button>
//       </form>
//     </AdminLayout>
//   );
// }

// export default EditHeroSlide;












// import {
//   useEffect,
//   useState
// } from "react";
// import { useParams } from "react-router-dom";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./EditHeroSlide.css";

// function EditHeroSlide() {
//   const { id } = useParams();

//   const [file, setFile] = useState(null);

//   const [formData, setFormData] =
//     useState({
//       title: "",
//       subtitle: "",
//       buttonText: "",
//       buttonLink: "",
//       order: 1,
//       image: "",
//       isActive: true,
//     });

//   useEffect(() => {
//     loadSlide();
//   }, []);

//   const loadSlide = async () => {
//     try {
//       const { data } =
//         await api.get(
//           `/hero-slides/${id}`
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
//         localStorage.getItem("token");

//       let imageUrl =
//         formData.image;

//       if (file) {
//         const uploadData =
//           new FormData();

//         uploadData.append(
//           "image",
//           file
//         );

//         const uploadResponse =
//           await api.post(
//             "/upload?type=hero",
//             uploadData,
//             {
//               headers: {
//                 Authorization:
//                   `Bearer ${token}`,
//               },
//             }
//           );

//         imageUrl =
//           uploadResponse.data.imageUrl;
//       }

//       await api.put(
//         `/hero-slides/${id}`,
//         {
//           ...formData,
//           image: imageUrl,
//         },
//         {
//           headers: {
//             Authorization:
//               `Bearer ${token}`,
//           },
//         }
//       );

//       alert(
//         "Hero Slide Updated Successfully"
//       );

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>

//       <div className="a4-edit-slide-page">

//         <div className="a4-edit-slide-header">

//           <h1>Edit Hero Slide</h1>

//           <p>
//             Update homepage banner
//             content and preview changes
//             live.
//           </p>

//         </div>

//         <div className="a4-edit-slide-layout">

//           {/* FORM */}

//           <form
//             onSubmit={handleSubmit}
//             className="a4-edit-slide-form"
//           >

//             <div className="a4-slide-field">

//               <label>
//                 Hero Title
//               </label>

//               <input
//                 type="text"
//                 value={formData.title}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     title:
//                       e.target.value,
//                   })
//                 }
//               />

//             </div>

//             <div className="a4-slide-field">

//               <label>
//                 Subtitle
//               </label>

//               <textarea
//                 rows="5"
//                 value={
//                   formData.subtitle
//                 }
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     subtitle:
//                       e.target.value,
//                   })
//                 }
//               />

//             </div>

//             <div className="a4-slide-field">

//               <label>
//                 Button Text
//               </label>

//               <input
//                 value={
//                   formData.buttonText
//                 }
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     buttonText:
//                       e.target.value,
//                   })
//                 }
//               />

//             </div>

//             <div className="a4-slide-field">

//               <label>
//                 Button Link
//               </label>

//               <input
//                 value={
//                   formData.buttonLink
//                 }
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     buttonLink:
//                       e.target.value,
//                   })
//                 }
//               />

//             </div>

//             <div className="a4-slide-grid">

//               <div className="a4-slide-field">

//                 <label>
//                   Display Order
//                 </label>

//                 <input
//                   type="number"
//                   value={formData.order}
//                   onChange={(e) =>
//                     setFormData({
//                       ...formData,
//                       order:
//                         Number(
//                           e.target
//                             .value
//                         ),
//                     })
//                   }
//                 />

//               </div>

//               <div className="a4-slide-field">

//                 <label>
//                   Upload New Image
//                 </label>

//                 <input
//                   type="file"
//                   onChange={(e) =>
//                     setFile(
//                       e.target
//                         .files[0]
//                     )
//                   }
//                 />

//               </div>

//             </div>

//             <div className="a4-slide-active">

//               <input
//                 type="checkbox"
//                 checked={
//                   formData.isActive
//                 }
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     isActive:
//                       e.target.checked,
//                   })
//                 }
//               />

//               <span>
//                 Active Slide
//               </span>

//             </div>

//             <button
//               type="submit"
//               className="a4-update-slide-btn"
//             >
//               Update Hero Slide
//             </button>

//           </form>

//           {/* LIVE PREVIEW */}

//           <div className="a4-slide-preview">

//             <div
//               className="a4-preview-banner"
//               style={{
//                 backgroundImage: file
//                   ? `url(${URL.createObjectURL(file)})`
//                   : formData.image
//                   ? `url(http://localhost:5000${formData.image})`
//                   : "",
//               }}
//             >

//               <div className="a4-preview-overlay">

//                 <span>
//                   Homepage Preview
//                 </span>

//                 <h2>
//                   {formData.title}
//                 </h2>

//                 <p>
//                   {
//                     formData.subtitle
//                   }
//                 </p>

//                 <button>
//                   {formData.buttonText ||
//                     "Explore"}
//                 </button>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>

//     </AdminLayout>
//   );
// }

// export default EditHeroSlide;


import {
  useEffect,
  useState
} from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./EditHeroSlide.css";

function EditHeroSlide() {
  const { id } = useParams();

  const API_URL =
    import.meta.env.VITE_API_URL;

  const [file, setFile] =
    useState(null);

  const [products, setProducts] =
    useState([]);

  const [events, setEvents] =
    useState([]);

  const [formData, setFormData] =
    useState({
      title: "",
      subtitle: "",
      buttonText: "",
      buttonLink: "",
      order: 1,
      image: "",
      isActive: true,

      slideType: "custom",
      productId: "",
      eventId: "",
    });

  useEffect(() => {
    loadSlide();
    loadProducts();
    loadEvents();
  }, []);

  const loadSlide = async () => {
    try {
      const { data } =
        await api.get(
          `/hero-slides/${id}`
        );

      setFormData({
        ...data,
        productId:
          data.productId || "",
        eventId:
          data.eventId || "",
      });

    } catch (error) {
      console.error(error);
    }
  };

  const loadProducts = async () => {
    try {
      const { data } =
        await api.get("/products");

      setProducts(data);

    } catch (error) {
      console.error(error);
    }
  };

  const loadEvents = async () => {
    try {
      const { data } =
        await api.get("/events");

      setEvents(data);

    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
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

      await api.put(
        `/hero-slides/${id}`,
        {
          ...formData,

          image: imageUrl,

          productId:
            formData.slideType ===
            "product"
              ? Number(
                  formData.productId
                )
              : null,

          eventId:
            formData.slideType ===
            "event"
              ? Number(
                  formData.eventId
                )
              : null,
        },
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      alert(
        "Hero Slide Updated Successfully"
      );

    } catch (error) {
      console.error(error);
      alert(
        "Failed To Update Slide"
      );
    }
  };

  return (
    <AdminLayout>

      <div className="a4-edit-slide-page">

        <div className="a4-edit-slide-header">

          <h1>
            Edit Hero Slide
          </h1>

          <p>
            Update homepage banner
            content and preview
            changes live.
          </p>

        </div>

        <div className="a4-edit-slide-layout">

          <form
            onSubmit={
              handleSubmit
            }
            className="a4-edit-slide-form"
          >

            <div className="a4-slide-field">

              <label>
                Hero Title
              </label>

              <input
                type="text"
                value={
                  formData.title
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title:
                      e.target.value,
                  })
                }
              />

            </div>

            <div className="a4-slide-field">

              <label>
                Slide Type
              </label>

              <select
                value={
                  formData.slideType
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    slideType:
                      e.target.value,
                  })
                }
              >

                <option value="custom">
                  Custom Slide
                </option>

                <option value="product">
                  Product Slide
                </option>

                <option value="event">
                  Event Slide
                </option>

              </select>

            </div>

            {formData.slideType ===
              "product" && (

              <div className="a4-slide-field">

                <label>
                  Select Product
                </label>

                <select
                  value={
                    formData.productId
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      productId:
                        e.target
                          .value,
                    })
                  }
                >

                  <option value="">
                    Select Product
                  </option>

                  {products.map(
                    (
                      product
                    ) => (
                      <option
                        key={
                          product.id
                        }
                        value={
                          product.id
                        }
                      >
                        {
                          product.title
                        }
                      </option>
                    )
                  )}

                </select>

              </div>
            )}

            {formData.slideType ===
              "event" && (

              <div className="a4-slide-field">

                <label>
                  Select Event
                </label>

                <select
                  value={
                    formData.eventId
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      eventId:
                        e.target
                          .value,
                    })
                  }
                >

                  <option value="">
                    Select Event
                  </option>

                  {events.map(
                    (
                      event
                    ) => (
                      <option
                        key={
                          event.id
                        }
                        value={
                          event.id
                        }
                      >
                        {
                          event.title
                        }
                      </option>
                    )
                  )}

                </select>

              </div>
            )}

            <div className="a4-slide-field">

              <label>
                Subtitle
              </label>

              <textarea
                rows="5"
                value={
                  formData.subtitle
                }
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    subtitle:
                      e.target.value,
                  })
                }
              />

            </div>

            <div className="a4-slide-field">

              <label>
                Button Text
              </label>

              <input
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

            <div className="a4-slide-field">

              <label>
                Button Link
              </label>

              <input
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

              <div className="a4-slide-field">

                <label>
                  Display Order
                </label>

                <input
                  type="number"
                  value={
                    formData.order
                  }
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

              <div className="a4-slide-field">

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

            </div>

            <div className="a4-slide-active">

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
              className="a4-update-slide-btn"
            >
              Update Hero Slide
            </button>

          </form>

          <div className="a4-slide-preview">

            <div
              className="a4-preview-banner"
              style={{
                backgroundImage:
                  file
                    ? `url(${URL.createObjectURL(
                        file
                      )})`
                    : formData.image
                    ? `url(${API_URL}${formData.image})`
                    : "",
              }}
            >

              <div className="a4-preview-overlay">

                <span>
                  Homepage Preview
                </span>

                <h2>
                  {
                    formData.title
                  }
                </h2>

                <p>
                  {
                    formData.subtitle
                  }
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

export default EditHeroSlide;