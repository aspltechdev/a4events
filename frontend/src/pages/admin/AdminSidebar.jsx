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


// import {
//   Link,
//   useNavigate,
//   useLocation,
// } from "react-router-dom";

// import "./AdminSidebar.css";

// function AdminSidebar() {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   const isActive = (path) =>
//     location.pathname === path;

//   return (
//     <aside className="a4-admin-sidebar">

//       <div>

//         <div className="a4-admin-logo">
//           <h2>A4 Events</h2>
//           <span>Admin Panel</span>
//         </div>

//         <nav className="a4-admin-nav">

//           <Link
//             to="/admin"
//             className={
//               isActive("/admin")
//                 ? "a4-admin-link active"
//                 : "a4-admin-link"
//             }
//           >
//             Dashboard
//           </Link>

//           <Link
//             to="/admin/products"
//             className={
//               isActive("/admin/products")
//                 ? "a4-admin-link active"
//                 : "a4-admin-link"
//             }
//           >
//             Products
//           </Link>

//           <Link
//             to="/admin/products/add"
//             className={
//               isActive("/admin/products/add")
//                 ? "a4-admin-link active"
//                 : "a4-admin-link"
//             }
//           >
//             Add Product
//           </Link>

//           <Link
//             to="/admin/events"
//             className={
//               isActive("/admin/events")
//                 ? "a4-admin-link active"
//                 : "a4-admin-link"
//             }
//           >
//             Events
//           </Link>

//           <Link
//             to="/admin/events/add"
//             className={
//               isActive("/admin/events/add")
//                 ? "a4-admin-link active"
//                 : "a4-admin-link"
//             }
//           >
//             Add Event
//           </Link>

//           {/* <Link
//             to="/admin/inquiries"
//             className="a4-admin-link"
//           >
//             Inquiries
//           </Link> */}

//           <Link
//             to="/admin/contacts"
//             className="a4-admin-link"
//           >
//             Contact Messages
//           </Link>

//           <Link
//             to="/admin/hero-slides"
//             className="a4-admin-link"
//           >
//             Hero Slides
//           </Link>

//           <Link
//             to="/admin/gallery"
//             className="a4-admin-link"
//           >
//             Gallery
//           </Link>

//           {/* <Link
//             to="/admin/testimonials"
//             className="a4-admin-link"
//           >
//             Testimonials
//           </Link> */}

//         </nav>

//       </div>

//       <button
//         onClick={handleLogout}
//         className="a4-admin-logout"
//       >
//         Logout
//       </button>

//     </aside>
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

  const navItems = [
    {
      path: "/admin",
      label: "Dashboard",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="11" y="2" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="2" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="11" y="11" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      )
    },
    {
      path: "/admin/products",
      label: "Products",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4 4l4-2 8 4-4 2-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M4 10l4 2 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M4 16l4 2 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      path: "/admin/products/add",
      label: "Add Product",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M10 6v8M6 10h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      path: "/admin/events",
      label: "Events",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="4" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M2 8h16" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M6 2v4M14 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      path: "/admin/events/add",
      label: "Add Event",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="4" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M2 8h16" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M6 2v4M14 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10 10v4M8 12h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      path: "/admin/contacts",
      label: "Messages",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M3 5h14a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M1 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      path: "/admin/hero-slides",
      label: "Hero Slides",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M2 10l4-4 4 4 4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="7" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
        </svg>
      )
    },
    {
      path: "/admin/gallery",
      label: "Gallery",
      icon: (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="7" cy="8" r="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M18 14l-5-5-3 3-2-2-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <aside className="a4-admin-sidebar">
      <div className="a4-admin-sidebar-inner">
        {/* Logo Section */}
        <div className="a4-admin-logo">
          <div className="a4-admin-logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L15 9L22 10L17 15L18.5 22.5L12 18.5L5.5 22.5L7 15L2 10L9 9L12 2Z" fill="currentColor"/>
            </svg>
          </div>
          <div className="a4-admin-logo-text">
            <h2>A4 Events</h2>
            <span>Admin Panel</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="a4-admin-nav">
          <div className="a4-admin-nav-section">
            <span className="a4-admin-nav-label">MAIN MENU</span>
            {navItems.slice(0, 1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`a4-admin-link ${isActive(item.path) ? 'active' : ''}`}
              >
                {item.icon}
                <span>{item.label}</span>
                {isActive(item.path) && <span className="a4-admin-link-indicator"></span>}
              </Link>
            ))}
          </div>

          <div className="a4-admin-nav-section">
            <span className="a4-admin-nav-label">PRODUCTS</span>
            {navItems.slice(1, 3).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`a4-admin-link ${isActive(item.path) ? 'active' : ''}`}
              >
                {item.icon}
                <span>{item.label}</span>
                {isActive(item.path) && <span className="a4-admin-link-indicator"></span>}
              </Link>
            ))}
          </div>

          <div className="a4-admin-nav-section">
            <span className="a4-admin-nav-label">EVENTS</span>
            {navItems.slice(3, 5).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`a4-admin-link ${isActive(item.path) ? 'active' : ''}`}
              >
                {item.icon}
                <span>{item.label}</span>
                {isActive(item.path) && <span className="a4-admin-link-indicator"></span>}
              </Link>
            ))}
          </div>

          <div className="a4-admin-nav-section">
            <span className="a4-admin-nav-label">CONTENT</span>
            {navItems.slice(5).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`a4-admin-link ${isActive(item.path) ? 'active' : ''}`}
              >
                {item.icon}
                <span>{item.label}</span>
                {isActive(item.path) && <span className="a4-admin-link-indicator"></span>}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Logout Button */}
      <div className="a4-admin-sidebar-footer">
        <button
          onClick={handleLogout}
          className="a4-admin-logout"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M6 3H4a2 2 0 00-2 2v8a2 2 0 002 2h2M12 13l4-4-4-4M16 9H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default AdminSidebar;