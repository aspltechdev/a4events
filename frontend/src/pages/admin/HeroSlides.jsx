// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function HeroSlides() {
//   const [slides, setSlides] = useState([]);

//   useEffect(() => {
//     fetchSlides();
//   }, []);

//   const fetchSlides = async () => {
//     try {
//       const { data } =
//         await api.get('/hero-slides');

//       setSlides(data);

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteSlide = async (id) => {
//     const token =
//       localStorage.getItem('token');

//     if (!window.confirm('Delete Slide?')) {
//       return;
//     }

//     try {
//       await api.delete(
//         `/hero-slides/${id}`,
//         {
//           headers: {
//             Authorization:
//               `Bearer ${token}`
//           }
//         }
//       );

//       fetchSlides();

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>
//       <h1>Hero Slides</h1>

//       <Link to="/admin/hero-slides/add">
//         Add New Slide
//       </Link>

//       <br />
//       <br />

//       {slides.map((slide) => (
//         <div
//           key={slide.id}
//           style={{
//             border: '1px solid #ddd',
//             padding: '15px',
//             marginBottom: '15px'
//           }}
//         >
//           {slide.image && (
//             <img
//               src={`http://localhost:5000${slide.image}`}
//               alt={slide.title}
//               width="250"
//             />
//           )}

//           <h3>{slide.title}</h3>

//           <p>{slide.subtitle}</p>

//           <p>
//             Order: {slide.order}
//           </p>

//           <p>
//             Status:
//             {slide.isActive
//               ? ' Active'
//               : ' Inactive'}
//           </p>

//           <Link
//             to={`/admin/hero-slides/edit/${slide.id}`}
//           >
//             Edit
//           </Link>

//           {' | '}

//           <button
//             onClick={() =>
//               deleteSlide(slide.id)
//             }
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </AdminLayout>
//   );
// }

// export default HeroSlides;



import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./HeroSlides.css";

function HeroSlides() {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetchSlides();
  }, []);

  const fetchSlides = async () => {
    try {
      const { data } = await api.get(
        "/hero-slides"
      );

      setSlides(data);

    } catch (error) {
      console.error(error);
    }
  };

  const deleteSlide = async (id) => {
    const token =
      localStorage.getItem("token");

    if (!window.confirm("Delete Slide?")) {
      return;
    }

    try {
      await api.delete(
        `/hero-slides/${id}`,
        {
          headers: {
            Authorization:
              `Bearer ${token}`,
          },
        }
      );

      fetchSlides();

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>

      <div className="a4-slides-page">

        <div className="a4-slides-header">

          <div>

            <h1>Hero Slides</h1>

            <p>
              Manage homepage hero banners
              and promotional slides.
            </p>

          </div>

          <Link
            to="/admin/hero-slides/add"
            className="a4-add-slide-btn"
          >
            + Add Slide
          </Link>

        </div>

        <div className="a4-slides-grid">

          {slides.map((slide) => (
            <div
              key={slide.id}
              className="a4-slide-card"
            >

              <div className="a4-slide-image-wrap">

                <img
                  src={`http://localhost:5000${slide.image}`}
                  alt={slide.title}
                  className="a4-slide-image"
                />

                <div className="a4-slide-overlay">
                  <span
                    className={
                      slide.isActive
                        ? "a4-status-active"
                        : "a4-status-inactive"
                    }
                  >
                    {slide.isActive
                      ? "Active"
                      : "Inactive"}
                  </span>
                </div>

              </div>

              <div className="a4-slide-content">

                <h3>{slide.title}</h3>

                <p>
                  {slide.subtitle}
                </p>

                <div className="a4-slide-order">
                  Order:
                  <strong>
                    {" "}
                    {slide.order}
                  </strong>
                </div>

                <div className="a4-slide-actions">

                  <Link
                    to={`/admin/hero-slides/edit/${slide.id}`}
                    className="a4-slide-edit-btn"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      deleteSlide(slide.id)
                    }
                    className="a4-slide-delete-btn"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </AdminLayout>
  );
}

export default HeroSlides;