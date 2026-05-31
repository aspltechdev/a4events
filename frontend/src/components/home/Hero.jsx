// import { useEffect, useState } from 'react';

// const slides = [
//   {
//     title: 'WE CREATE EXPERIENCES',
//     subtitle:
//       'Concerts • Festivals • DJ Nights',
//     image:
//       'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f'
//   },
//   {
//     title: 'TURN UP THE ENERGY',
//     subtitle:
//       'Public Parties • Music Events',
//     image:
//       'https://images.unsplash.com/photo-1571266028243-d220c9d65c68'
//   },
//   {
//     title: 'LIGHTS • SOUND • ACTION',
//     subtitle:
//       'Premium Event Production',
//     image:
//       'https://images.unsplash.com/photo-1514525253161-7a46d19cd819'
//   },
//   {
//     title: 'YOUR EVENT OUR PASSION',
//     subtitle:
//       'Creating unforgettable moments',
//     image:
//       'https://images.unsplash.com/photo-1505236858219-8359eb29e329'
//   }
// ];

// function Hero() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent(
//         (prev) =>
//           (prev + 1) % slides.length
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       style={{
//         height: '100vh',
//         backgroundImage: `url(${slides[current].image})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         color: '#fff',
//         textAlign: 'center',
//         position: 'relative'
//       }}
//     >
//       <div
//         style={{
//           position: 'absolute',
//           inset: 0,
//           background:
//             'rgba(0,0,0,0.55)'
//         }}
//       />

//       <div
//         style={{
//           position: 'relative',
//           zIndex: 2
//         }}
//       >
//         <h1
//           style={{
//             fontSize: '4rem'
//           }}
//         >
//           {slides[current].title}
//         </h1>

//         <p
//           style={{
//             fontSize: '1.5rem'
//           }}
//         >
//           {slides[current].subtitle}
//         </p>

//         <div
//           style={{
//             marginTop: '20px'
//           }}
//         >
//           <button>
//             Explore Events
//           </button>

//           <button
//             style={{
//               marginLeft: '15px'
//             }}
//           >
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;

// import { useEffect, useState } from 'react';
// import api from '../../services/api';

// function Hero() {
//   const [slides, setSlides] = useState([]);
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     loadSlides();
//   }, []);

//   useEffect(() => {
//     if (!slides.length) return;

//     const interval = setInterval(() => {
//       setCurrent(
//         (prev) => (prev + 1) % slides.length
//       );
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [slides]);

//   const loadSlides = async () => {
//     try {
//       const { data } =
//         await api.get('/hero');

//       setSlides(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (!slides.length) {
//     return (
//       <section
//         style={{
//           height: '100vh',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center'
//         }}
//       >
//         Loading...
//       </section>
//     );
//   }

//   return (
//     <section
//       style={{
//         height: '100vh',
//         backgroundImage: `url(http://localhost:5000${slides[current].image})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         color: '#fff',
//         textAlign: 'center',
//         position: 'relative'
//       }}
//     >
//       <div
//         style={{
//           position: 'absolute',
//           inset: 0,
//           background:
//             'rgba(0,0,0,0.55)'
//         }}
//       />

//       <div
//         style={{
//           position: 'relative',
//           zIndex: 2
//         }}
//       >
//         <h1
//           style={{
//             fontSize: '4rem'
//           }}
//         >
//           {slides[current].title}
//         </h1>

//         <p
//           style={{
//             fontSize: '1.5rem'
//           }}
//         >
//           {slides[current].subtitle}
//         </p>

//         <div
//           style={{
//             marginTop: '20px'
//           }}
//         >
//           <button>
//             Explore Events
//           </button>

//           <button
//             style={{
//               marginLeft: '15px'
//             }}
//           >
//             Contact Us
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;


import { useEffect, useState } from 'react';
import api from '../../services/api';

function Hero() {
  const [slides, setSlides] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    loadSlides();
  }, []);

  useEffect(() => {
    if (!slides.length) return;

    const interval = setInterval(() => {
      setCurrent(
        (prev) => (prev + 1) % slides.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [slides]);

  const loadSlides = async () => {
    try {
      const { data } =
        await api.get('/hero-slides');

      setSlides(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!slides.length) {
    return null;
  }

  return (
    <section
      style={{
        height: '100vh',
        backgroundImage: `url(http://localhost:5000${slides[current].image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        textAlign: 'center',
        position: 'relative'
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'rgba(0,0,0,0.55)'
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2
        }}
      >
        <h1>
          {slides[current].title}
        </h1>

        <p>
          {slides[current].subtitle}
        </p>

        <div
          style={{
            marginTop: '20px'
          }}
        >
          <button>
            Explore Events
          </button>

          <button
            style={{
              marginLeft: '15px'
            }}
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;