// function Gallery() {
//   const images = [
//     'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
//     'https://images.unsplash.com/photo-1501386761578-eac5c94b800a',
//     'https://images.unsplash.com/photo-1514525253161-7a46d19cd819',
//     'https://images.unsplash.com/photo-1505236858219-8359eb29e329',
//     'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3',
//     'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2'
//   ];

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
//         {images.map((image, index) => (
//           <div
//             key={index}
//             style={{
//               overflow: 'hidden',
//               borderRadius: '12px'
//             }}
//           >
//             <img
//               src={image}
//               alt="Event"
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


import { useEffect, useState } from 'react';
import api from '../../services/api';

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    try {
      const { data } =
        await api.get('/gallery');

      setImages(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      style={{
        padding: '80px 20px'
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '40px'
        }}
      >
        Event Gallery
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}
      >
        {images.map((item) => (
          <div
            key={item.id}
            style={{
              overflow: 'hidden',
              borderRadius: '12px'
            }}
          >
            <img
              src={`http://localhost:5000${item.image}`}
              alt={item.title || 'Gallery'}
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover'
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;