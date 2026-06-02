

// import { useEffect, useState } from 'react';
// import api from '../../services/api';

// function Gallery() {
//   const [images, setImages] = useState([]);

//   useEffect(() => {
//     loadGallery();
//   }, []);

//   const loadGallery = async () => {
//     try {
//       const { data } =
//         await api.get('/gallery');

//       setImages(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <section
//       style={{
//         padding: '80px 20px'
//       }}
//     >
//       <h2
//         style={{
//           textAlign: 'center',
//           marginBottom: '40px'
//         }}
//       >
//         Event Gallery
//       </h2>

//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns:
//             'repeat(auto-fit, minmax(300px, 1fr))',
//           gap: '20px'
//         }}
//       >
//         {images.map((item) => (
//           <div
//             key={item.id}
//             style={{
//               overflow: 'hidden',
//               borderRadius: '12px'
//             }}
//           >
//             <img
//               src={`http://localhost:5000${item.image}`}
//               alt={item.title || 'Gallery'}
//               style={{
//                 width: '100%',
//                 height: '250px',
//                 objectFit: 'cover'
//               }}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Gallery;


import { useEffect, useState } from "react";
import api from "../../services/api";
import "./Gallery.css";

function Gallery() {
  const [images, setImages] = useState([]);

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

  return (
    <section className="a4-gallery-section">

      <div className="a4-gallery-container">

        <div className="a4-gallery-header">

          <span className="a4-gallery-tag">
            EVENT GALLERY
          </span>

          <h2 className="a4-gallery-title">
            Moments That Create Memories
          </h2>

          <p className="a4-gallery-description">
            Explore highlights from concerts, festivals,
            celebrations, workshops and unforgettable
            experiences captured through our lens.
          </p>

        </div>

        <div className="a4-gallery-grid">

          {images.map((item) => (
            <div
              key={item.id}
              className="a4-gallery-card"
            >
              <img
                src={`http://localhost:5000${item.image}`}
                alt={item.title || "Gallery"}
                className="a4-gallery-image"
              />

              <div className="a4-gallery-overlay">
                <div className="a4-gallery-content">
                  <span>
                    {item.title || "Featured Event"}
                  </span>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Gallery;