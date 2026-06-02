// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function Testimonials() {
//   const [testimonials, setTestimonials] = useState([]);

//   useEffect(() => {
//     fetchTestimonials();
//   }, []);

//   const fetchTestimonials = async () => {
//     try {
//       const { data } =
//         await api.get('/testimonials');

//       setTestimonials(data);

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteTestimonial = async (id) => {
//     const token =
//       localStorage.getItem('token');

//     if (
//       !window.confirm(
//         'Delete Testimonial?'
//       )
//     ) {
//       return;
//     }

//     try {
//       await api.delete(
//         `/testimonials/${id}`,
//         {
//           headers: {
//             Authorization:
//               `Bearer ${token}`
//           }
//         }
//       );

//       fetchTestimonials();

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>
//       <h1>Testimonials</h1>

//       <Link to="/admin/testimonials/add">
//         Add Testimonial
//       </Link>

//       <br />
//       <br />

//       {testimonials.map(
//         (testimonial) => (
//           <div
//             key={testimonial.id}
//             style={{
//               border:
//                 '1px solid #ddd',
//               padding: '15px',
//               marginBottom:
//                 '15px'
//             }}
//           >
//             {testimonial.image && (
//               <img
//                 src={`http://localhost:5000${testimonial.image}`}
//                 alt={
//                   testimonial.name
//                 }
//                 width="120"
//               />
//             )}

//             <h3>
//               {testimonial.name}
//             </h3>

//             <p>
//               {
//                 testimonial.company
//               }
//             </p>

//             <p>
//               Rating:
//               {' '}
//               {
//                 testimonial.rating
//               }
//               /5
//             </p>

//             <p>
//               {
//                 testimonial.review
//               }
//             </p>

//             <Link
//               to={`/admin/testimonials/edit/${testimonial.id}`}
//             >
//               Edit
//             </Link>

//             {' | '}

//             <button
//               onClick={() =>
//                 deleteTestimonial(
//                   testimonial.id
//                 )
//               }
//             >
//               Delete
//             </button>
//           </div>
//         )
//       )}
//     </AdminLayout>
//   );
// }

// export default Testimonials;


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./AdminTestimonials.css";

function Testimonials() {

  const [testimonials, setTestimonials] =
    useState([]);

  const [search, setSearch] =
    useState("");

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {

      const { data } =
        await api.get("/testimonials");

      setTestimonials(data);

    } catch (error) {
      console.error(error);
    }
  };

  const deleteTestimonial =
    async (id) => {

      const token =
        localStorage.getItem("token");

      if (
        !window.confirm(
          "Delete Testimonial?"
        )
      ) {
        return;
      }

      try {

        await api.delete(
          `/testimonials/${id}`,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        );

        fetchTestimonials();

      } catch (error) {
        console.error(error);
      }
    };

  const filteredTestimonials =
    testimonials.filter((item) =>
      item.name
        ?.toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <AdminLayout>

      <div className="a4-admin-testimonials-page">

        <div className="a4-admin-testimonials-header">

          <div>

            <h1>
              Testimonials
            </h1>

            <p>
              Manage customer reviews,
              ratings and social proof.
            </p>

          </div>

          <Link
            to="/admin/testimonials/add"
            className="a4-admin-testimonials-add-btn"
          >
            + Add Testimonial
          </Link>

        </div>

        <div className="a4-admin-testimonials-toolbar">

          <input
            type="text"
            placeholder="Search testimonial..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
            className="a4-admin-testimonials-search"
          />

        </div>

        <div className="a4-admin-testimonials-grid">

          {filteredTestimonials.map(
            (testimonial) => (
              <div
                key={
                  testimonial.id
                }
                className="a4-admin-testimonial-card"
              >

                <div className="a4-admin-testimonial-top">

                  <img
                    src={`http://localhost:5000${testimonial.image}`}
                    alt={
                      testimonial.name
                    }
                    className="a4-admin-testimonial-avatar"
                  />

                  <div>

                    <h3>
                      {
                        testimonial.name
                      }
                    </h3>

                    <p>
                      {
                        testimonial.company
                      }
                    </p>

                  </div>

                </div>

                <div className="a4-admin-testimonial-rating">

                  {"★".repeat(
                    testimonial.rating
                  )}

                </div>

                <p className="a4-admin-testimonial-review">
                  "
                  {
                    testimonial.review
                  }
                  "
                </p>

                <div className="a4-admin-testimonial-actions">

                  <Link
                    to={`/admin/testimonials/edit/${testimonial.id}`}
                    className="a4-admin-testimonial-edit-btn"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      deleteTestimonial(
                        testimonial.id
                      )
                    }
                    className="a4-admin-testimonial-delete-btn"
                  >
                    Delete
                  </button>

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </AdminLayout>
  );
}

export default Testimonials;