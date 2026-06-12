
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





// import { useEffect, useState } from "react";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./Dashboard.css";

// function Dashboard() {
//   const [dashboard, setDashboard] = useState({
//     products: 0,
//     events: 0,
//     inquiries: 0,
//     contacts: 0,
//     latestProducts: [],
//     latestEvents: [],
//     latestInquiries: [],
//     latestContacts: [],
//   });

//   useEffect(() => {
//     fetchStats();
//   }, []);

//   const fetchStats = async () => {
//     try {
//       const token =
//         localStorage.getItem("token");

//       const { data } = await api.get(
//         "/dashboard/stats",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setDashboard(data);

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>

//       <div className="a4-dashboard">

//         <div className="a4-dashboard-header">

//           <div>
//             <h1>
//               Dashboard
//             </h1>

//             <p>
//               Welcome back. Here's what's happening today.
//             </p>
//           </div>

//         </div>

//         {/* STATS */}

//         <div className="a4-stats-grid">

//           <div className="a4-stat-card">
//             <span>Total Products</span>
//             <h2>{dashboard.products}</h2>
//           </div>

//           <div className="a4-stat-card">
//             <span>Total Events</span>
//             <h2>{dashboard.events}</h2>
//           </div>

//           {/* <div className="a4-stat-card">
//             <span>Inquiries</span>
//             <h2>{dashboard.inquiries}</h2>
//           </div> */}

//           <div className="a4-stat-card">
//             <span>Contacts</span>
//             <h2>{dashboard.contacts}</h2>
//           </div>

//         </div>

//         {/* ACTIVITY */}

//         <div className="a4-dashboard-grid">

//           <div className="a4-dashboard-card">

//             <h3>
//               Latest Products
//             </h3>

//             {dashboard.latestProducts.length === 0 ? (
//               <p>No products found</p>
//             ) : (
//               dashboard.latestProducts.map(
//                 (product) => (
//                   <div
//                     key={product.id}
//                     className="a4-dashboard-item"
//                   >
//                     {product.title}
//                   </div>
//                 )
//               )
//             )}

//           </div>

//           <div className="a4-dashboard-card">

//             <h3>
//               Latest Events
//             </h3>

//             {dashboard.latestEvents.length === 0 ? (
//               <p>No events found</p>
//             ) : (
//               dashboard.latestEvents.map(
//                 (event) => (
//                   <div
//                     key={event.id}
//                     className="a4-dashboard-item"
//                   >
//                     {event.title}
//                   </div>
//                 )
//               )
//             )}

//           </div>

//           {/* <div className="a4-dashboard-card">

//             <h3>
//               Latest Inquiries
//             </h3>

//             {dashboard.latestInquiries.length === 0 ? (
//               <p>No inquiries found</p>
//             ) : (
//               dashboard.latestInquiries.map(
//                 (inquiry) => (
//                   <div
//                     key={inquiry.id}
//                     className="a4-dashboard-item"
//                   >
//                     {inquiry.name}
//                   </div>
//                 )
//               )
//             )}

//           </div> */}

//           <div className="a4-dashboard-card">

//             <h3>
//               Latest Contacts
//             </h3>

//             {dashboard.latestContacts.length === 0 ? (
//               <p>No contacts found</p>
//             ) : (
//               dashboard.latestContacts.map(
//                 (contact) => (
//                   <div
//                     key={contact.id}
//                     className="a4-dashboard-item"
//                   >
//                     {contact.name}
//                   </div>
//                 )
//               )
//             )}

//           </div>

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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const token = localStorage.getItem("token");

      const { data } = await api.get("/dashboard/stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setDashboard(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const statsCards = [
    {
      label: "Total Products",
      value: dashboard.products,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M6 6l4-2 10 6-4 2-10-6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M6 12l4 2 10-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M6 18l4 2 10-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      ),
      color: "blue",
      trend: "+12%",
      trendUp: true,
    },
    {
      label: "Total Events",
      value: dashboard.events,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      color: "gold",
      trend: "+8%",
      trendUp: true,
    },
    {
      label: "Contact Messages",
      value: dashboard.contacts,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M2 8l10 7 10-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      color: "green",
      trend: "+5%",
      trendUp: true,
    },
  ];

  if (loading) {
    return (
      <AdminLayout>
        <div className="a4-dashboard-loading">
          <div className="a4-dashboard-loading-spinner"></div>
          <p>Loading dashboard...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="a4-dashboard">
        {/* Header */}
        <div className="a4-dashboard-header">
          <div className="a4-dashboard-header-left">
            <h1>Dashboard</h1>
            <p>Welcome back. Here's what's happening today.</p>
          </div>
          <div className="a4-dashboard-header-right">
            <div className="a4-dashboard-date">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M2 7h12" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M5 1v3M11 1v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="a4-stats-grid">
          {statsCards.map((stat, index) => (
            <div key={index} className={`a4-stat-card a4-stat-card-${stat.color}`}>
              <div className="a4-stat-card-header">
                <div className={`a4-stat-icon a4-stat-icon-${stat.color}`}>
                  {stat.icon}
                </div>
                <div className={`a4-stat-trend ${stat.trendUp ? 'a4-stat-trend-up' : 'a4-stat-trend-down'}`}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d={stat.trendUp ? "M2 8l4-5 4 5" : "M2 4l4 5 4-5"} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{stat.trend}</span>
                </div>
              </div>
              <h2 className="a4-stat-value">{stat.value}</h2>
              <span className="a4-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Activity Grid */}
        <div className="a4-dashboard-grid">
          {/* Latest Products */}
          <div className="a4-dashboard-card">
            <div className="a4-dashboard-card-header">
              <h3>Latest Products</h3>
              <span className="a4-dashboard-card-badge">{dashboard.latestProducts.length} items</span>
            </div>
            
            {dashboard.latestProducts.length === 0 ? (
              <div className="a4-dashboard-empty">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M10 10l8-4 16 8-8 4-16-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M10 20l8 4 16-8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M10 30l8 4 16-8" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
                <p>No products found</p>
              </div>
            ) : (
              <div className="a4-dashboard-list">
                {dashboard.latestProducts.map((product, index) => (
                  <div key={product.id} className="a4-dashboard-item">
                    <span className="a4-dashboard-item-index">{String(index + 1).padStart(2, '0')}</span>
                    <span className="a4-dashboard-item-name">{product.title}</span>
                    <span className="a4-dashboard-item-arrow">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Latest Events */}
          <div className="a4-dashboard-card">
            <div className="a4-dashboard-card-header">
              <h3>Latest Events</h3>
              <span className="a4-dashboard-card-badge">{dashboard.latestEvents.length} items</span>
            </div>
            
            {dashboard.latestEvents.length === 0 ? (
              <div className="a4-dashboard-empty">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <rect x="6" y="8" width="28" height="26" rx="3" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 16h28" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M14 4v8M26 4v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <p>No events found</p>
              </div>
            ) : (
              <div className="a4-dashboard-list">
                {dashboard.latestEvents.map((event, index) => (
                  <div key={event.id} className="a4-dashboard-item">
                    <span className="a4-dashboard-item-index">{String(index + 1).padStart(2, '0')}</span>
                    <span className="a4-dashboard-item-name">{event.title}</span>
                    <span className="a4-dashboard-item-arrow">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Latest Contacts */}
          <div className="a4-dashboard-card">
            <div className="a4-dashboard-card-header">
              <h3>Latest Contacts</h3>
              <span className="a4-dashboard-card-badge">{dashboard.latestContacts.length} messages</span>
            </div>
            
            {dashboard.latestContacts.length === 0 ? (
              <div className="a4-dashboard-empty">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M6 10h28a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V14a4 4 0 014-4z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 16l18 12 18-12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>No contacts found</p>
              </div>
            ) : (
              <div className="a4-dashboard-list">
                {dashboard.latestContacts.map((contact, index) => (
                  <div key={contact.id} className="a4-dashboard-item">
                    <span className="a4-dashboard-item-index">{String(index + 1).padStart(2, '0')}</span>
                    <span className="a4-dashboard-item-name">{contact.name}</span>
                    <span className="a4-dashboard-item-arrow">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Dashboard;