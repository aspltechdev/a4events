// import { Link, useNavigate } from 'react-router-dom';

// function AdminSidebar() {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   return (
//     <div
//       style={{
//         width: '250px',
//         minHeight: '100vh',
//         padding: '20px',
//         background: '#f5f5f5'
//       }}
//     >
//       <h2>A4 Events Admin</h2>

//       <ul
//         style={{
//           listStyle: 'none',
//           padding: 0
//         }}
//       >
//         <li>
//           <Link to="/admin">
//             Dashboard
//           </Link>
//         </li>

//         <br />

//         <li>
//           <Link to="/admin/products">
//             Products
//           </Link>
//         </li>

//         <br />

//         <li>
//           <Link to="/admin/products/add">
//             Add Product
//           </Link>
//         </li>

//         <br />

//         <li>
//           <Link to="/admin/events">
//             Events
//           </Link>
//         </li>

//         <br />

//         <li>
//           <Link to="/admin/events/add">
//             Add Event
//           </Link>
//         </li>
//         <br/>
// <li>
//   <Link to="/admin/inquiries">
//     Inquiries
//   </Link>
// </li>

// <br/>
// <li>
//   <Link to="/admin/contacts">
//     Contact Messages
//   </Link>
// </li>

// <br/>
// <li>
//   <Link to="/admin/hero-slides">
//     Hero Slides
//   </Link>
// </li>
// <br />
// <li>
//   <Link to="/admin/gallery">
//     Gallery
//   </Link>
// </li>
// <br />
// <Link to="/admin/testimonials">
//   Testimonials
// </Link>
//         <br />

//         <li>
//           <button onClick={handleLogout}>
//             Logout
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default AdminSidebar;


import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

import "./AdminSidebar.css";

function AdminSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isActive = (path) =>
    location.pathname === path;

  return (
    <aside className="a4-admin-sidebar">

      <div>

        <div className="a4-admin-logo">
          <h2>A4 Events</h2>
          <span>Admin Panel</span>
        </div>

        <nav className="a4-admin-nav">

          <Link
            to="/admin"
            className={
              isActive("/admin")
                ? "a4-admin-link active"
                : "a4-admin-link"
            }
          >
            Dashboard
          </Link>

          <Link
            to="/admin/products"
            className={
              isActive("/admin/products")
                ? "a4-admin-link active"
                : "a4-admin-link"
            }
          >
            Products
          </Link>

          <Link
            to="/admin/products/add"
            className={
              isActive("/admin/products/add")
                ? "a4-admin-link active"
                : "a4-admin-link"
            }
          >
            Add Product
          </Link>

          <Link
            to="/admin/events"
            className={
              isActive("/admin/events")
                ? "a4-admin-link active"
                : "a4-admin-link"
            }
          >
            Events
          </Link>

          <Link
            to="/admin/events/add"
            className={
              isActive("/admin/events/add")
                ? "a4-admin-link active"
                : "a4-admin-link"
            }
          >
            Add Event
          </Link>

          {/* <Link
            to="/admin/inquiries"
            className="a4-admin-link"
          >
            Inquiries
          </Link> */}

          <Link
            to="/admin/contacts"
            className="a4-admin-link"
          >
            Contact Messages
          </Link>

          <Link
            to="/admin/hero-slides"
            className="a4-admin-link"
          >
            Hero Slides
          </Link>

          <Link
            to="/admin/gallery"
            className="a4-admin-link"
          >
            Gallery
          </Link>

          {/* <Link
            to="/admin/testimonials"
            className="a4-admin-link"
          >
            Testimonials
          </Link> */}

        </nav>

      </div>

      <button
        onClick={handleLogout}
        className="a4-admin-logout"
      >
        Logout
      </button>

    </aside>
  );
}

export default AdminSidebar;