// function Dashboard() {
//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <p>Login successful.</p>
//     </div>
//   );
// }

// export default Dashboard;   

import AdminLayout from '../../components/admin/AdminLayout';

function Dashboard() {
  return (
    <AdminLayout>
      <h1>Dashboard</h1>

      <p>Welcome to A4 Events Admin Panel</p>
    </AdminLayout>
  );
}

export default Dashboard;