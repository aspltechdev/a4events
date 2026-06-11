
// import { useState } from "react";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./AddHeroSlide.css";

// function AddHeroSlide() {
//   const [file, setFile] = useState(null);

//   const [formData, setFormData] = useState({
//     title: "",
//     subtitle: "",
//     buttonText: "",
//     buttonLink: "",
//     order: 1,
//     isActive: true,
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const token =
//         localStorage.getItem("token");

//       let imageUrl = "";

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

//       await api.post(
//         "/hero-slides",
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
//         "Hero Slide Added Successfully"
//       );

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>

//       <div className="a4-add-slide-page">

//         <div className="a4-add-slide-header">

//           <h1>Add Hero Slide</h1>

//           <p>
//             Create homepage banners and
//             promotional hero sections.
//           </p>

//         </div>

//         <div className="a4-slide-layout">

//           {/* FORM */}

//           <form
//             onSubmit={handleSubmit}
//             className="a4-slide-form"
//           >

//             <div className="a4-slide-group">

//               <label>
//                 Hero Title
//               </label>

//               <input
//                 type="text"
//                 placeholder="Enter Hero Title"
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

//             <div className="a4-slide-group">

//               <label>
//                 Subtitle
//               </label>

//               <textarea
//                 rows="5"
//                 placeholder="Hero subtitle..."
//                 value={formData.subtitle}
//                 onChange={(e) =>
//                   setFormData({
//                     ...formData,
//                     subtitle:
//                       e.target.value,
//                   })
//                 }
//               />

//             </div>

//             <div className="a4-slide-group">

//               <label>
//                 Button Text
//               </label>

//               <input
//                 type="text"
//                 placeholder="Explore Events"
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

//             <div className="a4-slide-group">

//               <label>
//                 Button Link
//               </label>

//               <input
//                 type="text"
//                 placeholder="/events"
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

//               <div className="a4-slide-group">

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

//               <div className="a4-slide-group">

//                 <label>
//                   Upload Image
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

//             <div className="a4-slide-checkbox">

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
//               className="a4-save-slide-btn"
//             >
//               Save Hero Slide
//             </button>

//           </form>

//           {/* LIVE PREVIEW */}

//           <div className="a4-slide-preview">

//             <div
//               className="a4-preview-banner"
//               style={{
//                 backgroundImage: file
//                   ? `url(${URL.createObjectURL(file)})`
//                   : "",
//               }}
//             >

//               <div className="a4-preview-overlay">

//                 <span>
//                   Homepage Preview
//                 </span>

//                 <h2>
//                   {formData.title ||
//                     "Your Hero Title"}
//                 </h2>

//                 <p>
//                   {formData.subtitle ||
//                     "Hero subtitle preview will appear here."}
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

// export default AddHeroSlide;








import { useState, useEffect } from "react";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./AddHeroSlide.css";

function AddHeroSlide() {
  const [file, setFile] = useState(null);

  const [slideType, setSlideType] =
    useState("custom");

  const [products, setProducts] =
    useState([]);

  const [events, setEvents] =
    useState([]);

  const [selectedProduct,
    setSelectedProduct] =
    useState("");

  const [selectedEvent,
    setSelectedEvent] =
    useState("");

  const [formData, setFormData] =
    useState({
      title: "",
      subtitle: "",
      buttonText: "",
      buttonLink: "",
      order: 1,
      isActive: true,
    });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const productsRes =
        await api.get("/products");

      const eventsRes =
        await api.get("/events");

      setProducts(productsRes.data);
      setEvents(eventsRes.data);

    } catch (error) {
      console.error(error);
    }
  };

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

      let payload = {
        ...formData,
        image: imageUrl,
        slideType,
      };

      // PRODUCT SLIDE
      if (
        slideType === "product" &&
        selectedProduct
      ) {
        const product =
          products.find(
            (p) =>
              p.id ===
              Number(
                selectedProduct
              )
          );

        if (product) {
          payload = {
            ...payload,
            title:
              product.title,
            subtitle:
              product.description,
            image:
              product.image,
            buttonText:
              "View Product",
            buttonLink:
              `/products/${product.id}`,
            productId:
              product.id,
          };
        }
      }

      // EVENT SLIDE
      if (
        slideType === "event" &&
        selectedEvent
      ) {
        const event =
          events.find(
            (e) =>
              e.id ===
              Number(
                selectedEvent
              )
          );

        if (event) {
          payload = {
            ...payload,
            title:
              event.title,
            subtitle:
              event.description,
            image:
              event.image,
            buttonText:
              "View Event",
            buttonLink:
              `/events/${event.id}`,
            eventId:
              event.id,
          };
        }
      }

      await api.post(
        "/hero-slides",
        payload,
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
            Create homepage banners
            and promotional hero sections.
          </p>
        </div>

        <div className="a4-slide-layout">

          <form
            onSubmit={handleSubmit}
            className="a4-slide-form"
          >

            {/* Slide Type */}

            <div className="a4-slide-group">

              <label>
                Slide Type
              </label>

              <select
                value={slideType}
                onChange={(e) =>
                  setSlideType(
                    e.target.value
                  )
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

            {/* Product Dropdown */}

            {slideType ===
              "product" && (

              <div className="a4-slide-group">

                <label>
                  Select Product
                </label>

                <select
                  value={
                    selectedProduct
                  }
                  onChange={(e) =>
                    setSelectedProduct(
                      e.target.value
                    )
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

            {/* Event Dropdown */}

            {slideType ===
              "event" && (

              <div className="a4-slide-group">

                <label>
                  Select Event
                </label>

                <select
                  value={
                    selectedEvent
                  }
                  onChange={(e) =>
                    setSelectedEvent(
                      e.target.value
                    )
                  }
                >

                  <option value="">
                    Select Event
                  </option>

                  {events.map(
                    (event) => (
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

            {slideType ===
              "custom" && (
              <>
                <div className="a4-slide-group">

                  <label>
                    Hero Title
                  </label>

                  <input
                    type="text"
                    placeholder="Enter Hero Title"
                    value={
                      formData.title
                    }
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        title:
                          e.target
                            .value,
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
                    value={
                      formData.subtitle
                    }
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        subtitle:
                          e.target
                            .value,
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
                    value={
                      formData.buttonText
                    }
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        buttonText:
                          e.target
                            .value,
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
                    value={
                      formData.buttonLink
                    }
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        buttonLink:
                          e.target
                            .value,
                      })
                    }
                  />

                </div>
              </>
            )}

            <div className="a4-slide-grid">

              <div className="a4-slide-group">

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

              {slideType ===
                "custom" && (
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
              )}

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
                      e.target
                        .checked,
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

        </div>

      </div>

    </AdminLayout>
  );
}

export default AddHeroSlide;