// import { Link } from 'react-router-dom';

// function Dashboard() {
//   return (
//     <div>
//       <h1>Admin Dashboard</h1>

//       <ul>
//         <li>
//           <Link to="/admin/products">
//             Manage Products
//           </Link>
//         </li>

//         <li>
//           <Link to="/admin/products/add">
//             Add Product
//           </Link>
//         </li>

//         <li>
//           <Link to="/admin/events">
//             Manage Events
//           </Link>
//         </li>

//         <li>
//           <Link to="/admin/events/add">
//             Add Event
//           </Link>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Dashboard;













import AdminLayout from './AdminLayout';

function Dashboard() {
  return (
    <AdminLayout>
      <h1>Admin Dashboard</h1>

      <p>Welcome to A4 Events Admin Panel</p>
{/* 
      <div>
        <h3>Quick Actions</h3>

        <ul>
          <li>Manage Products</li>
          <li>Add Product</li>
          <li>Manage Events</li>
          <li>Add Event</li>
        </ul>
      </div> */}
    </AdminLayout>
  );
}

export default Dashboard;