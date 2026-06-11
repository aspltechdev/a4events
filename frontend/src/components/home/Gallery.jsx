

// // import { useEffect, useState } from 'react';
// // import api from '../../services/api';

// // function Gallery() {
// //   const [images, setImages] = useState([]);

// //   useEffect(() => {
// //     loadGallery();
// //   }, []);

// //   const loadGallery = async () => {
// //     try {
// //       const { data } =
// //         await api.get('/gallery');

// //       setImages(data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <section
// //       style={{
// //         padding: '80px 20px'
// //       }}
// //     >
// //       <h2
// //         style={{
// //           textAlign: 'center',
// //           marginBottom: '40px'
// //         }}
// //       >
// //         Event Gallery
// //       </h2>

// //       <div
// //         style={{
// //           display: 'grid',
// //           gridTemplateColumns:
// //             'repeat(auto-fit, minmax(300px, 1fr))',
// //           gap: '20px'
// //         }}
// //       >
// //         {images.map((item) => (
// //           <div
// //             key={item.id}
// //             style={{
// //               overflow: 'hidden',
// //               borderRadius: '12px'
// //             }}
// //           >
// //             <img
// //               src={`http://localhost:5000${item.image}`}
// //               alt={item.title || 'Gallery'}
// //               style={{
// //                 width: '100%',
// //                 height: '250px',
// //                 objectFit: 'cover'
// //               }}
// //             />
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// // export default Gallery;


// // import { useEffect, useState } from "react";
// // import api from "../../services/api";
// // import "./Gallery.css";

// // function Gallery() {
// //   const [images, setImages] = useState([]);

// //   useEffect(() => {
// //     loadGallery();
// //   }, []);

// //   const loadGallery = async () => {
// //     try {
// //       const { data } = await api.get("/gallery");
// //       setImages(data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <section className="a4-gallery-section">

// //       <div className="a4-gallery-container">

// //         <div className="a4-gallery-header">

// //           <span className="a4-gallery-tag">
// //             EVENT GALLERY
// //           </span>

// //           <h2 className="a4-gallery-title">
// //             Moments That Create Memories
// //           </h2>

// //           <p className="a4-gallery-description">
// //             Explore highlights from concerts, festivals,
// //             celebrations, workshops and unforgettable
// //             experiences captured through our lens.
// //           </p>

// //         </div>

// //         <div className="a4-gallery-grid">

// //           {images.map((item) => (
// //             <div
// //               key={item.id}
// //               className="a4-gallery-card"
// //             >
// //               <img
// //                 src={`http://localhost:5000${item.image}`}
// //                 alt={item.title || "Gallery"}
// //                 className="a4-gallery-image"
// //               />

// //               <div className="a4-gallery-overlay">
// //                 <div className="a4-gallery-content">
// //                   <span>
// //                     {item.title || "Featured Event"}
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}

// //         </div>

// //       </div>

// //     </section>
// //   );
// // }

// // export default Gallery;











// import { useEffect, useState } from "react";
// import api from "../../services/api";
// import "./Gallery.css";

// function Gallery() {
//   const [images, setImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [hoveredImage, setHoveredImage] = useState(null);

//   useEffect(() => {
//     loadGallery();
//   }, []);

//   const loadGallery = async () => {
//     try {
//       const { data } = await api.get("/gallery");
//       setImages(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const openLightbox = (image) => {
//     setSelectedImage(image);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeLightbox = () => {
//     setSelectedImage(null);
//     document.body.style.overflow = 'auto';
//   };

//   return (
//     <>
//       <section className="gl__wrapper">
//         {/* Background Elements */}
//         <div className="gl__bgSubtle"></div>
//         <div className="gl__bgGradient"></div>
//         <div className="gl__accentLines">
//           <div className="gl__accentLine"></div>
//           <div className="gl__accentLine"></div>
//         </div>

//         <div className="gl__container">
//           {/* Header Section */}
//           <div className="gl__header">
//             <div className="gl__headerMarker">
//               <span className="gl__markerLine"></span>
//               <span className="gl__markerText">MOMENTS THAT MATTER</span>
//             </div>
            
//             <h2 className="gl__headline">
//               Capturing unforgettable
//               <br />
//               <span className="gl__headlineAccent">experiences through our lens</span>
//             </h2>
            
//             <p className="gl__subhead">
//               Explore highlights from concerts, festivals, celebrations, workshops, 
//               and unforgettable experiences — both from our events and product journeys.
//             </p>
//           </div>

//           {/* Gallery Grid - Masonry Style */}
//           <div className="gl__grid">
//             {images.map((item, index) => (
//               <div
//                 key={item.id}
//                 className={`gl__card ${hoveredImage === item.id ? 'gl__cardHovered' : ''}`}
//                 onMouseEnter={() => setHoveredImage(item.id)}
//                 onMouseLeave={() => setHoveredImage(null)}
//                 onClick={() => openLightbox(item)}
//                 style={{ animationDelay: `${index * 0.05}s` }}
//               >
//                 <div className="gl__imageWrapper">
//                   <img
//                     src={`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${item.image}`}
//                     alt={item.title || "Gallery"}
//                     className="gl__image"
//                     loading="lazy"
//                   />
//                   <div className="gl__overlay">
//                     <div className="gl__overlayContent">
//                       <div className="gl__zoomIcon">
//                         <span>+</span>
//                       </div>
//                       <h4 className="gl__imageTitle">{item.title || "Event Moment"}</h4>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* View More Button */}
//           <div className="gl__footer">
//             <button className="gl__viewAllBtn" onClick={() => window.location.href = '/gallery'}>
//               Explore Full Gallery
//               <span className="gl__arrowIcon">→</span>
//             </button>
//           </div>

//           {/* Stats Section */}
//           <div className="gl__statsSection">
//             <div className="gl__statsLine"></div>
//             <div className="gl__statsGrid">
//               <div className="gl__statItem">
//                 <div className="gl__statNumber">500+</div>
//                 <div className="gl__statLabel">Moments Captured</div>
//               </div>
//               <div className="gl__statSeparator"></div>
//               <div className="gl__statItem">
//                 <div className="gl__statNumber">100+</div>
//                 <div className="gl__statLabel">Happy Events</div>
//               </div>
//               <div className="gl__statSeparator"></div>
//               <div className="gl__statItem">
//                 <div className="gl__statNumber">50+</div>
//                 <div className="gl__statLabel">Product Launches</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Lightbox Modal */}
//       {selectedImage && (
//         <div className="gl__lightbox" onClick={closeLightbox}>
//           <div className="gl__lightboxContent" onClick={(e) => e.stopPropagation()}>
//             <button className="gl__lightboxClose" onClick={closeLightbox}>×</button>
//             <img
            
//               src={`http://localhost:5000${selectedImage.image}`}
//               alt={selectedImage.title || "Gallery"}
            
//             />
//             {selectedImage.title && (
//               <div className="gl__lightboxCaption">
//                 <h3>{selectedImage.title}</h3>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Gallery;



import { useEffect, useState } from "react";
import api from "../../services/api";
import "./Gallery.css";

function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    try {
      const { data } = await api.get("/gallery");
      setImages(data);
    } catch (error) {
      console.error(error);
    }
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section className="gallery-premium">
        <div className="gallery-container">
          {/* Header */}
          <div className="gallery-header">
            <div className="gallery-badge">
              <span className="gallery-badge-line"></span>
              <span className="gallery-badge-text">VISUAL STORYTELLING</span>
            </div>
            <h2 className="gallery-title">
              Moments that create
              <span className="gallery-title-accent"> lasting memories</span>
            </h2>
            <p className="gallery-description">
              Explore highlights from concerts, festivals, celebrations, and workshops — 
              captured through our lens.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {images.map((item, index) => (
              <div 
                key={item.id} 
                className="gallery-item"
                onClick={() => openLightbox(item)}
              >
                <div className="gallery-image-wrapper">
                  <img
                    // src={`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${item.image}`}
                    src={`http://localhost:5000${item.image}`}
                    alt={item.title || "Gallery image"}
                    className="gallery-image"
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <div className="gallery-overlay-content">
                      <span className="gallery-plus">+</span>
                      <p className="gallery-caption">{item.title || "Event Moment"}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          {/* <div className="gallery-footer">
            <button className="gallery-view-all">
              View Full Gallery
              <span className="gallery-arrow">→</span>
            </button>
          </div> */}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-lightbox-close" onClick={closeLightbox}>×</button>
            <img
              // src={`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${selectedImage.image}`}
                  src={`http://localhost:5000${selectedImage.image}`}
              alt={selectedImage.title || "Gallery"}
              className="gallery-lightbox-image"
            />
            {selectedImage.title && (
              <div className="gallery-lightbox-caption">
                <p>{selectedImage.title}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;