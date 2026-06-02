
// import { useEffect, useState } from 'react';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function Dashboard() {
//   const [stats, setStats] = useState({
//     products: 0,
//     events: 0,
//     inquiries: 0,
//     contacts: 0
//   });

//   useEffect(() => {
//     fetchStats();
//   }, []);

//   const fetchStats = async () => {
//     try {
//       const token =
//         localStorage.getItem('token');

//       const { data } = await api.get(
//         '/dashboard/stats',
//         {
//           headers: {
//             Authorization:
//               `Bearer ${token}`
//           }
//         }
//       );

//       setStats(data);

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>
//       <h1>Dashboard</h1>

//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns:
//             'repeat(4, 1fr)',
//           gap: '20px'
//         }}
//       >
//         <div
//           style={{
//             border: '1px solid #ddd',
//             padding: '20px'
//           }}
//         >
//           <h3>Products</h3>
//           <h2>{stats.products}</h2>
//         </div>

//         <div
//           style={{
//             border: '1px solid #ddd',
//             padding: '20px'
//           }}
//         >
//           <h3>Events</h3>
//           <h2>{stats.events}</h2>
//         </div>

//         <div
//           style={{
//             border: '1px solid #ddd',
//             padding: '20px'
//           }}
//         >
//           <h3>Inquiries</h3>
//           <h2>{stats.inquiries}</h2>
//         </div>

//         <div
//           style={{
//             border: '1px solid #ddd',
//             padding: '20px'
//           }}
//         >
//           <h3>Contacts</h3>
//           <h2>{stats.contacts}</h2>
//         </div>
//       </div>
//     </AdminLayout>
//   );
// }

// export default Dashboard; 

// import { useEffect, useState } from 'react';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function Dashboard() {
//   const [dashboard, setDashboard] = useState({
//     products: 0,
//     events: 0,
//     inquiries: 0,
//     contacts: 0,
//     latestProducts: [],
//     latestEvents: [],
//     latestInquiries: [],
//     latestContacts: []
//   });

//   useEffect(() => {
//     fetchStats();
//   }, []);

//   const fetchStats = async () => {
//     try {
//       const token = localStorage.getItem('token');

//       const { data } = await api.get(
//         '/dashboard/stats',
//         {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         }
//       );

//       setDashboard(data);

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>
//       <h1>Dashboard</h1>

//       {/* Stats Cards */}
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(4, 1fr)',
//           gap: '20px',
//           marginBottom: '40px'
//         }}
//       >
//         <div
//           style={{
//             border: '1px solid #ddd',
//             padding: '20px',
//             borderRadius: '8px'
//           }}
//         >
//           <h3>Products</h3>
//           <h2>{dashboard.products}</h2>
//         </div>

//         <div
//           style={{
//             border: '1px solid #ddd',
//             padding: '20px',
//             borderRadius: '8px'
//           }}
//         >
//           <h3>Events</h3>
//           <h2>{dashboard.events}</h2>
//         </div>

//         <div
//           style={{
//             border: '1px solid #ddd',
//             padding: '20px',
//             borderRadius: '8px'
//           }}
//         >
//           <h3>Inquiries</h3>
//           <h2>{dashboard.inquiries}</h2>
//         </div>

//         <div
//           style={{
//             border: '1px solid #ddd',
//             padding: '20px',
//             borderRadius: '8px'
//           }}
//         >
//           <h3>Contacts</h3>
//           <h2>{dashboard.contacts}</h2>
//         </div>
//       </div>

//       {/* Recent Activity */}
//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: '1fr 1fr',
//           gap: '30px'
//         }}
//       >
//         {/* Latest Products */}
//         <div
//           style={{
//             border: '1px solid #ddd',
//             padding: '20px',
//             borderRadius: '8px'
//           }}
//         >
//           <h2>Latest Products</h2>

//           {dashboard.latestProducts.length === 0 ? (
//             <p>No products found</p>
//           ) : (
//             dashboard.latestProducts.map((product) => (
//               <div key={product.id}>
//                 • {product.title}
//               </div>
//             ))
//           )}
//         </div>

//         {/* Latest Events */}
//         <div
//           style={{
//             border: '1px solid #ddd',
//             padding: '20px',
//             borderRadius: '8px'
//           }}
//         >
//           <h2>Latest Events</h2>

//           {dashboard.latestEvents.length === 0 ? (
//             <p>No events found</p>
//           ) : (
//             dashboard.latestEvents.map((event) => (
//               <div key={event.id}>
//                 • {event.title}
//               </div>
//             ))
//           )}
//         </div>

//         {/* Latest Inquiries */}
//         <div
//           style={{
//             border: '1px solid #ddd',
//             padding: '20px',
//             borderRadius: '8px'
//           }}
//         >
//           <h2>Latest Inquiries</h2>

//           {dashboard.latestInquiries.length === 0 ? (
//             <p>No inquiries found</p>
//           ) : (
//             dashboard.latestInquiries.map((inquiry) => (
//               <div key={inquiry.id}>
//                 • {inquiry.name}
//               </div>
//             ))
//           )}
//         </div>

//         {/* Latest Contacts */}
//         <div
//           style={{
//             border: '1px solid #ddd',
//             padding: '20px',
//             borderRadius: '8px'
//           }}
//         >
//           <h2>Latest Contacts</h2>

//           {dashboard.latestContacts.length === 0 ? (
//             <p>No contacts found</p>
//           ) : (
//             dashboard.latestContacts.map((contact) => (
//               <div key={contact.id}>
//                 • {contact.name}
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </AdminLayout>
//   );
// }

// export default Dashboard;





import { useEffect, useState } from "react";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./Dashboard.css";

function Dashboard() {
  const [dashboard, setDashboard] = useState({
    products: 0,
    events: 0,
    inquiries: 0,
    contacts: 0,
    latestProducts: [],
    latestEvents: [],
    latestInquiries: [],
    latestContacts: [],
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token =
        localStorage.getItem("token");

      const { data } = await api.get(
        "/dashboard/stats",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setDashboard(data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>

      <div className="a4-dashboard">

        <div className="a4-dashboard-header">

          <div>
            <h1>
              Dashboard
            </h1>

            <p>
              Welcome back. Here's what's happening today.
            </p>
          </div>

        </div>

        {/* STATS */}

        <div className="a4-stats-grid">

          <div className="a4-stat-card">
            <span>Total Products</span>
            <h2>{dashboard.products}</h2>
          </div>

          <div className="a4-stat-card">
            <span>Total Events</span>
            <h2>{dashboard.events}</h2>
          </div>

          <div className="a4-stat-card">
            <span>Inquiries</span>
            <h2>{dashboard.inquiries}</h2>
          </div>

          <div className="a4-stat-card">
            <span>Contacts</span>
            <h2>{dashboard.contacts}</h2>
          </div>

        </div>

        {/* ACTIVITY */}

        <div className="a4-dashboard-grid">

          <div className="a4-dashboard-card">

            <h3>
              Latest Products
            </h3>

            {dashboard.latestProducts.length === 0 ? (
              <p>No products found</p>
            ) : (
              dashboard.latestProducts.map(
                (product) => (
                  <div
                    key={product.id}
                    className="a4-dashboard-item"
                  >
                    {product.title}
                  </div>
                )
              )
            )}

          </div>

          <div className="a4-dashboard-card">

            <h3>
              Latest Events
            </h3>

            {dashboard.latestEvents.length === 0 ? (
              <p>No events found</p>
            ) : (
              dashboard.latestEvents.map(
                (event) => (
                  <div
                    key={event.id}
                    className="a4-dashboard-item"
                  >
                    {event.title}
                  </div>
                )
              )
            )}

          </div>

          <div className="a4-dashboard-card">

            <h3>
              Latest Inquiries
            </h3>

            {dashboard.latestInquiries.length === 0 ? (
              <p>No inquiries found</p>
            ) : (
              dashboard.latestInquiries.map(
                (inquiry) => (
                  <div
                    key={inquiry.id}
                    className="a4-dashboard-item"
                  >
                    {inquiry.name}
                  </div>
                )
              )
            )}

          </div>

          <div className="a4-dashboard-card">

            <h3>
              Latest Contacts
            </h3>

            {dashboard.latestContacts.length === 0 ? (
              <p>No contacts found</p>
            ) : (
              dashboard.latestContacts.map(
                (contact) => (
                  <div
                    key={contact.id}
                    className="a4-dashboard-item"
                  >
                    {contact.name}
                  </div>
                )
              )
            )}

          </div>

        </div>

      </div>

    </AdminLayout>
  );
}

export default Dashboard;