// import AdminSidebar from './AdminSidebar';

// function AdminLayout({ children }) {
//   return (
//     <div
//       style={{
//         display: 'flex'
//       }}
//     >
//       <AdminSidebar />

//       <div
//         style={{
//           flex: 1,
//           padding: '20px'
//         }}
//       >
//         {children}
//       </div>
//     </div>
//   );
// }

// export default AdminLayout;


// import AdminSidebar from "./AdminSidebar";
// import "./AdminLayout.css";

// function AdminLayout({ children }) {
//   return (
//     <div className="a4-admin-layout">

//       <AdminSidebar />

//       <main className="a4-admin-content">
//         {children}
//       </main>

//     </div>
//   );
// }

// export default AdminLayout;


import AdminSidebar from "./AdminSidebar";
import "./AdminLayout.css";

function AdminLayout({ children }) {
  return (
    <div className="a4-admin-layout">
      <AdminSidebar />

      <main className="a4-admin-content">
        <div className="a4-admin-content-inner">
          {children}
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;