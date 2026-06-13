

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



// import { useEffect, useState } from "react";
// import api from "../../services/api";
// import "./Gallery.css";

// function Gallery() {
//   const [images, setImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);

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
//       <section className="gallery-premium">
//         <div className="gallery-container">
//           {/* Header */}
//           <div className="gallery-header">
//             <div className="gallery-badge">
//               <span className="gallery-badge-line"></span>
//               <span className="gallery-badge-text">VISUAL STORYTELLING</span>
//             </div>
//             <h2 className="gallery-title">
//               Moments that create
//               <span className="gallery-title-accent"> lasting memories</span>
//             </h2>
//             <p className="gallery-description">
//               Explore highlights from concerts, festivals, celebrations, and workshops — 
//               captured through our lens.
//             </p>
//           </div>

//           {/* Gallery Grid */}
//           <div className="gallery-grid">
//             {images.map((item, index) => (
//               <div 
//                 key={item.id} 
//                 className="gallery-item"
//                 onClick={() => openLightbox(item)}
//               >
//                 <div className="gallery-image-wrapper">
//                   <img
//                     // src={`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${item.image}`}
//                     src={`http://localhost:5000${item.image}`}
//                     alt={item.title || "Gallery image"}
//                     className="gallery-image"
//                     loading="lazy"
//                   />
//                   <div className="gallery-overlay">
//                     <div className="gallery-overlay-content">
//                       <span className="gallery-plus">+</span>
//                       <p className="gallery-caption">{item.title || "Event Moment"}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* View All Button */}
//           {/* <div className="gallery-footer">
//             <button className="gallery-view-all">
//               View Full Gallery
//               <span className="gallery-arrow">→</span>
//             </button>
//           </div> */}
//         </div>
//       </section>

//       {/* Lightbox Modal */}
//       {selectedImage && (
//         <div className="gallery-lightbox" onClick={closeLightbox}>
//           <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
//             <button className="gallery-lightbox-close" onClick={closeLightbox}>×</button>
//             <img
//               // src={`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${selectedImage.image}`}
//                   src={`http://localhost:5000${selectedImage.image}`}
//               alt={selectedImage.title || "Gallery"}
//               className="gallery-lightbox-image"
//             />
//             {selectedImage.title && (
//               <div className="gallery-lightbox-caption">
//                 <p>{selectedImage.title}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Gallery;


// import { useEffect, useState } from "react";
// import api from "../../services/api";
// import "./Gallery.css";

// function Gallery() {
//   const [images, setImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

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
//       <section className="gallery-premium">
//         {/* Background Elements */}
//         <div className="gallery-bg-subtle"></div>
//         <div className="gallery-bg-gradient"></div>

//         <div className="gallery-container">
//           {/* Header */}
//           <div className="gallery-header">
//             <div className="gallery-badge">
//               <span className="gallery-badge-line"></span>
//               <span className="gallery-badge-text">VISUAL STORYTELLING</span>
//             </div>
//             <h2 className="gallery-title">
//               Moments that create
//               <span className="gallery-title-accent"> lasting memories</span>
//             </h2>
//             <p className="gallery-description">
//               Explore highlights from concerts, festivals, celebrations, and workshops — 
//               captured through our lens.
//             </p>
//           </div>

//           {/* Gallery Grid */}
//           <div className="gallery-grid">
//             {images.map((item, index) => (
//               <div 
//                 key={item.id} 
//                 className={`gallery-item ${hoveredIndex === index ? 'gallery-item-hovered' : ''}`}
//                 onClick={() => openLightbox(item)}
//                 onMouseEnter={() => setHoveredIndex(index)}
//                 onMouseLeave={() => setHoveredIndex(null)}
//                 style={{ animationDelay: `${index * 0.06}s` }}
//               >
//                 <div className="gallery-image-wrapper">
//                   <img
//                     src={`https://a4agroup.eu${item.image}`}
//                     alt={item.title || "Gallery image"}
//                     className="gallery-image"
//                     loading="lazy"
//                   />
//                   <div className="gallery-overlay">
//                     <div className="gallery-overlay-content">
//                       <div className="gallery-plus-icon">
//                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                           <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
//                         </svg>
//                       </div>
//                       <p className="gallery-caption">{item.title || "Event Moment"}</p>
//                       <span className="gallery-view-text">Click to view</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Empty State */}
//           {images.length === 0 && (
//             <div className="gallery-empty">
//               <div className="gallery-empty-content">
//                 <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
//                   <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="1.5"/>
//                   <circle cx="16" cy="20" r="4" stroke="currentColor" strokeWidth="1.5"/>
//                   <path d="M44 32l-12-12-8 8-6-6-14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                 </svg>
//                 <h3>No Gallery Images</h3>
//                 <p>Check back soon for visual highlights from our events.</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Lightbox Modal */}
//       {selectedImage && (
//         <div className="gallery-lightbox" onClick={closeLightbox}>
//           <div className="gallery-lightbox-backdrop"></div>
//           <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
//             <button className="gallery-lightbox-close" onClick={closeLightbox}>
//               <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
//                 <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </button>
//             <img
//               src={`https://a4agroup.eu${selectedImage.image}`}
//               alt={selectedImage.title || "Gallery"}
//               className="gallery-lightbox-image"
//             />
//             {selectedImage.title && (
//               <div className="gallery-lightbox-caption">
//                 <p>{selectedImage.title}</p>
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
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    loadGallery();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector(".gallery-premium");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, [images]);

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
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section className={`gallery-premium ${isVisible ? "gallery-visible" : ""}`}>
        {/* Atmospheric Depth */}
        <div className="gallery-atmosphere" aria-hidden="true">
          <div className="gallery-glow gallery-glow--teal" />
          <div className="gallery-glow gallery-glow--blue" />
          <div className="gallery-glow gallery-glow--emerald" />
          <div className="gallery-mesh" />
          <div className="gallery-grain" />
          <div className="gallery-vignette" />
        </div>

        {/* Floating Orbs */}
        <div className="gallery-orbs" aria-hidden="true">
          <div className="gallery-orb gallery-orb--primary" />
          <div className="gallery-orb gallery-orb--secondary" />
        </div>

        <div className="gallery-container">
          {/* Header */}
          <div className="gallery-header">
            <div className="gallery-thread" />
            <div className="gallery-header-content">
              <div className="gallery-whisper">
                <span className="gallery-whisper-pulse" />
                <span>Visual Storytelling</span>
              </div>

              <h2 className="gallery-headline">
                <span className="gallery-headline-line">Moments that create</span>
                <span className="gallery-headline-line gallery-headline-radiance">
                  lasting memories.
                </span>
              </h2>

              <p className="gallery-prose">
                Explore highlights from concerts, festivals, celebrations, and 
                workshops — captured through our lens, preserved for eternity.
              </p>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {images.map((item, index) => (
              <div
                key={item.id}
                className={`gallery-item ${
                  hoveredIndex === index ? "gallery-item-hovered" : ""
                }`}
                onClick={() => openLightbox(item)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ "--item-index": index }}
              >
                <div className="gallery-image-wrapper">
                  <img
                    src={`https://a4agroup.eu${item.image}`}
                    alt={item.title || "Gallery image"}
                    className="gallery-image"
                    loading="lazy"
                  />
                  <div className="gallery-image-veil" />

                  {/* Overlay */}
                  <div className="gallery-overlay">
                    <div className="gallery-overlay-shine" />
                    <div className="gallery-overlay-content">
                      <div className="gallery-overlay-line" />
                      <p className="gallery-caption">
                        {item.title || "Event Moment"}
                      </p>
                      <span className="gallery-view-text">View full image</span>
                    </div>
                  </div>
                </div>

                {/* Card Edge Glow */}
                <div className="gallery-item-edge" aria-hidden="true" />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {images.length === 0 && (
            <div className="gallery-empty">
              <div className="gallery-empty-content">
                <div className="gallery-empty-thread" />
                <h3 className="gallery-empty-title">No Gallery Images</h3>
                <p className="gallery-empty-text">
                  Visual highlights from our events are being curated. 
                  Return soon to witness the moments.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="gallery-lightbox" onClick={closeLightbox}>
          <div className="gallery-lightbox-backdrop" />
          <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-lightbox-close" onClick={closeLightbox}>
              <span className="gallery-lightbox-close-line gallery-lightbox-close-line--one" />
              <span className="gallery-lightbox-close-line gallery-lightbox-close-line--two" />
            </button>

            <div className="gallery-lightbox-image-wrap">
              <img
                src={`https://a4agroup.eu${selectedImage.image}`}
                alt={selectedImage.title || "Gallery"}
                className="gallery-lightbox-image"
              />
            </div>

            {selectedImage.title && (
              <div className="gallery-lightbox-caption">
                <div className="gallery-lightbox-caption-line" />
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