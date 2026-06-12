
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








// import { useState, useEffect } from "react";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./AddHeroSlide.css";

// function AddHeroSlide() {
//   const [file, setFile] = useState(null);

//   const [slideType, setSlideType] =
//     useState("custom");

//   const [products, setProducts] =
//     useState([]);

//   const [events, setEvents] =
//     useState([]);

//   const [selectedProduct,
//     setSelectedProduct] =
//     useState("");

//   const [selectedEvent,
//     setSelectedEvent] =
//     useState("");

//   const [formData, setFormData] =
//     useState({
//       title: "",
//       subtitle: "",
//       buttonText: "",
//       buttonLink: "",
//       order: 1,
//       isActive: true,
//     });

//   useEffect(() => {
//     loadData();
//   }, []);

//   const loadData = async () => {
//     try {
//       const productsRes =
//         await api.get("/products");

//       const eventsRes =
//         await api.get("/events");

//       setProducts(productsRes.data);
//       setEvents(eventsRes.data);

//     } catch (error) {
//       console.error(error);
//     }
//   };

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

//       let payload = {
//         ...formData,
//         image: imageUrl,
//         slideType,
//       };

//       // PRODUCT SLIDE
//       if (
//         slideType === "product" &&
//         selectedProduct
//       ) {
//         const product =
//           products.find(
//             (p) =>
//               p.id ===
//               Number(
//                 selectedProduct
//               )
//           );

//         if (product) {
//           payload = {
//             ...payload,
//             title:
//               product.title,
//             subtitle:
//               product.description,
//             image:
//               product.image,
//             buttonText:
//               "View Product",
//             buttonLink:
//               `/products/${product.id}`,
//             productId:
//               product.id,
//           };
//         }
//       }

//       // EVENT SLIDE
//       if (
//         slideType === "event" &&
//         selectedEvent
//       ) {
//         const event =
//           events.find(
//             (e) =>
//               e.id ===
//               Number(
//                 selectedEvent
//               )
//           );

//         if (event) {
//           payload = {
//             ...payload,
//             title:
//               event.title,
//             subtitle:
//               event.description,
//             image:
//               event.image,
//             buttonText:
//               "View Event",
//             buttonLink:
//               `/events/${event.id}`,
//             eventId:
//               event.id,
//           };
//         }
//       }

//       await api.post(
//         "/hero-slides",
//         payload,
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
//             Create homepage banners
//             and promotional hero sections.
//           </p>
//         </div>

//         <div className="a4-slide-layout">

//           <form
//             onSubmit={handleSubmit}
//             className="a4-slide-form"
//           >

//             {/* Slide Type */}

//             <div className="a4-slide-group">

//               <label>
//                 Slide Type
//               </label>

//               <select
//                 value={slideType}
//                 onChange={(e) =>
//                   setSlideType(
//                     e.target.value
//                   )
//                 }
//               >
//                 <option value="custom">
//                   Custom Slide
//                 </option>

//                 <option value="product">
//                   Product Slide
//                 </option>

//                 <option value="event">
//                   Event Slide
//                 </option>

//               </select>

//             </div>

//             {/* Product Dropdown */}

//             {slideType ===
//               "product" && (

//               <div className="a4-slide-group">

//                 <label>
//                   Select Product
//                 </label>

//                 <select
//                   value={
//                     selectedProduct
//                   }
//                   onChange={(e) =>
//                     setSelectedProduct(
//                       e.target.value
//                     )
//                   }
//                 >

//                   <option value="">
//                     Select Product
//                   </option>

//                   {products.map(
//                     (
//                       product
//                     ) => (
//                       <option
//                         key={
//                           product.id
//                         }
//                         value={
//                           product.id
//                         }
//                       >
//                         {
//                           product.title
//                         }
//                       </option>
//                     )
//                   )}

//                 </select>

//               </div>
//             )}

//             {/* Event Dropdown */}

//             {slideType ===
//               "event" && (

//               <div className="a4-slide-group">

//                 <label>
//                   Select Event
//                 </label>

//                 <select
//                   value={
//                     selectedEvent
//                   }
//                   onChange={(e) =>
//                     setSelectedEvent(
//                       e.target.value
//                     )
//                   }
//                 >

//                   <option value="">
//                     Select Event
//                   </option>

//                   {events.map(
//                     (event) => (
//                       <option
//                         key={
//                           event.id
//                         }
//                         value={
//                           event.id
//                         }
//                       >
//                         {
//                           event.title
//                         }
//                       </option>
//                     )
//                   )}

//                 </select>

//               </div>
//             )}

//             {slideType ===
//               "custom" && (
//               <>
//                 <div className="a4-slide-group">

//                   <label>
//                     Hero Title
//                   </label>

//                   <input
//                     type="text"
//                     placeholder="Enter Hero Title"
//                     value={
//                       formData.title
//                     }
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         title:
//                           e.target
//                             .value,
//                       })
//                     }
//                   />

//                 </div>

//                 <div className="a4-slide-group">

//                   <label>
//                     Subtitle
//                   </label>

//                   <textarea
//                     rows="5"
//                     value={
//                       formData.subtitle
//                     }
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         subtitle:
//                           e.target
//                             .value,
//                       })
//                     }
//                   />

//                 </div>

//                 <div className="a4-slide-group">

//                   <label>
//                     Button Text
//                   </label>

//                   <input
//                     type="text"
//                     value={
//                       formData.buttonText
//                     }
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         buttonText:
//                           e.target
//                             .value,
//                       })
//                     }
//                   />

//                 </div>

//                 <div className="a4-slide-group">

//                   <label>
//                     Button Link
//                   </label>

//                   <input
//                     type="text"
//                     value={
//                       formData.buttonLink
//                     }
//                     onChange={(e) =>
//                       setFormData({
//                         ...formData,
//                         buttonLink:
//                           e.target
//                             .value,
//                       })
//                     }
//                   />

//                 </div>
//               </>
//             )}

//             <div className="a4-slide-grid">

//               <div className="a4-slide-group">

//                 <label>
//                   Display Order
//                 </label>

//                 <input
//                   type="number"
//                   value={
//                     formData.order
//                   }
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

//               {slideType ===
//                 "custom" && (
//                 <div className="a4-slide-group">

//                   <label>
//                     Upload Image
//                   </label>

//                   <input
//                     type="file"
//                     onChange={(e) =>
//                       setFile(
//                         e.target
//                           .files[0]
//                       )
//                     }
//                   />

//                 </div>
//               )}

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
//                       e.target
//                         .checked,
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
  const [preview, setPreview] = useState(null);
  const [slideType, setSlideType] = useState("custom");
  const [products, setProducts] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
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
      const productsRes = await api.get("/products");
      const eventsRes = await api.get("/events");
      setProducts(productsRes.data);
      setEvents(eventsRes.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const token = localStorage.getItem("token");
      let imageUrl = "";

      if (file) {
        const uploadData = new FormData();
        uploadData.append("image", file);

        const uploadResponse = await api.post(
          "/upload?type=hero",
          uploadData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        imageUrl = uploadResponse.data.imageUrl;
      }

      let payload = {
        ...formData,
        image: imageUrl,
        slideType,
      };

      if (slideType === "product" && selectedProduct) {
        const product = products.find((p) => p.id === Number(selectedProduct));
        if (product) {
          payload = {
            ...payload,
            title: product.title,
            subtitle: product.description,
            image: product.image,
            buttonText: "View Product",
            buttonLink: `/products/${product.id}`,
            productId: product.id,
          };
        }
      }

      if (slideType === "event" && selectedEvent) {
        const event = events.find((e) => e.id === Number(selectedEvent));
        if (event) {
          payload = {
            ...payload,
            title: event.title,
            subtitle: event.description,
            image: event.image,
            buttonText: "View Event",
            buttonLink: `/events/${event.id}`,
            eventId: event.id,
          };
        }
      }

      await api.post("/hero-slides", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Hero Slide Added Successfully");
      
      setFormData({ title: "", subtitle: "", buttonText: "", buttonLink: "", order: 1, isActive: true });
      setFile(null);
      setPreview(null);
      setSlideType("custom");
      setSelectedProduct("");
      setSelectedEvent("");
    } catch (error) {
      console.error(error);
      alert("Failed to add slide");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AdminLayout>
      <div className="ahs-add-admin">
        {/* Header */}
        <div className="ahs-add-header">
          <div className="ahs-add-header-left">
            <h1>Add Hero Slide</h1>
            <p>Create homepage banners and promotional hero sections</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="ahs-add-form">
          <div className="ahs-add-grid">
            {/* Left Column */}
            <div className="ahs-add-left">
              {/* Slide Type */}
              <div className="ahs-add-group">
                <label>Slide Type</label>
                <div className="ahs-add-select-wrapper">
                  <svg className="ahs-add-select-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <rect x="2" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M6 8l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <select value={slideType} onChange={(e) => setSlideType(e.target.value)}>
                    <option value="custom">Custom Slide</option>
                    <option value="product">Product Slide</option>
                    <option value="event">Event Slide</option>
                  </select>
                </div>
              </div>

              {/* Product Dropdown */}
              {slideType === "product" && (
                <div className="ahs-add-group">
                  <label>Select Product</label>
                  <div className="ahs-add-select-wrapper">
                    <svg className="ahs-add-select-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M4 4l3-2 8 4-3 2-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    </svg>
                    <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
                      <option value="">Select Product</option>
                      {products.map((product) => (
                        <option key={product.id} value={product.id}>{product.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Event Dropdown */}
              {slideType === "event" && (
                <div className="ahs-add-group">
                  <label>Select Event</label>
                  <div className="ahs-add-select-wrapper">
                    <svg className="ahs-add-select-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="2" y="3" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                    <select value={selectedEvent} onChange={(e) => setSelectedEvent(e.target.value)}>
                      <option value="">Select Event</option>
                      {events.map((event) => (
                        <option key={event.id} value={event.id}>{event.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Custom Fields */}
              {slideType === "custom" && (
                <>
                  <div className="ahs-add-group">
                    <label>Hero Title</label>
                    <div className="ahs-add-input-wrapper">
                      <svg className="ahs-add-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M3 4h12M3 9h8M3 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <input
                        type="text"
                        placeholder="Enter Hero Title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="ahs-add-group">
                    <label>Subtitle</label>
                    <div className="ahs-add-textarea-wrapper">
                      <svg className="ahs-add-textarea-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M2 4h14M2 9h10M2 14h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <textarea
                        rows="3"
                        placeholder="Enter subtitle text"
                        value={formData.subtitle}
                        onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="ahs-add-row">
                    <div className="ahs-add-group">
                      <label>Button Text</label>
                      <input
                        type="text"
                        placeholder="Explore Now"
                        value={formData.buttonText}
                        onChange={(e) => setFormData({ ...formData, buttonText: e.target.value })}
                      />
                    </div>
                    <div className="ahs-add-group">
                      <label>Button Link</label>
                      <div className="ahs-add-input-wrapper">
                        <svg className="ahs-add-input-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path d="M7 9h4M7 9a4 4 0 110-4h4a4 4 0 110 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                        <input
                          type="text"
                          placeholder="/events or https://..."
                          value={formData.buttonLink}
                          onChange={(e) => setFormData({ ...formData, buttonLink: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Image Upload */}
                  <div className="ahs-add-group">
                    <label>Upload Image</label>
                    <div className="ahs-add-upload-area">
                      {preview ? (
                        <div className="ahs-add-preview">
                          <img src={preview} alt="Preview" className="ahs-add-preview-image" />
                          <button
                            type="button"
                            className="ahs-add-preview-remove"
                            onClick={() => { setFile(null); setPreview(null); }}
                          >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                          </button>
                        </div>
                      ) : (
                        <label className="ahs-add-upload-label">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <rect x="4" y="6" width="32" height="28" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                            <circle cx="14" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
                            <path d="M36 28l-10-10-6 6-4-4-12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          <span>Click to upload banner</span>
                          <span className="ahs-add-upload-hint">PNG, JPG or WEBP (Max 5MB)</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="ahs-add-file-input"
                          />
                        </label>
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* Order + Active */}
              <div className="ahs-add-row">
                <div className="ahs-add-group">
                  <label>Display Order</label>
                  <input
                    type="number"
                    min="1"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })}
                  />
                </div>
                <div className="ahs-add-group">
                  <label className="ahs-add-checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.isActive}
                      onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                      className="ahs-add-checkbox"
                    />
                    <span className="ahs-add-checkbox-custom"></span>
                    <span className="ahs-add-checkbox-text">Active Slide</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Column - Preview */}
            <div className="ahs-add-right">
              <span className="ahs-add-preview-label">PREVIEW</span>
              
              {slideType === "custom" ? (
                <div
                  className="ahs-add-preview-banner"
                  style={{
                    backgroundImage: preview ? `url(${preview})` : "none",
                  }}
                >
                  <div className="ahs-add-preview-overlay">
                    <h2>{formData.title || "Hero Title"}</h2>
                    <p>{formData.subtitle || "Subtitle text will appear here"}</p>
                    <button>{formData.buttonText || "Explore"}</button>
                  </div>
                  {!preview && (
                    <div className="ahs-add-preview-placeholder">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <rect x="4" y="6" width="32" height="28" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                        <circle cx="14" cy="16" r="4" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M36 28l-10-10-6 6-4-4-12 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Upload an image to preview</span>
                    </div>
                  )}
                </div>
              ) : (
                <div className="ahs-add-auto-info">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M24 16v8M24 32v0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <h3>Auto-Generated Slide</h3>
                  <p>Title, subtitle, image, and button will be automatically pulled from the selected {slideType}.</p>
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="ahs-add-footer">
            <button
              type="submit"
              className="ahs-add-btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="ahs-add-btn-spinner"></span>
                  Saving...
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M5 9l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Save Hero Slide
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}

export default AddHeroSlide;