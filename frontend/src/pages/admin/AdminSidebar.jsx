import { Link, useNavigate } from 'react-router-dom';

function AdminSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div
      style={{
        width: '250px',
        minHeight: '100vh',
        padding: '20px',
        background: '#f5f5f5'
      }}
    >
      <h2>A4 Events Admin</h2>

      <ul
        style={{
          listStyle: 'none',
          padding: 0
        }}
      >
        <li>
          <Link to="/admin">
            Dashboard
          </Link>
        </li>

        <br />

        <li>
          <Link to="/admin/products">
            Products
          </Link>
        </li>

        <br />

        <li>
          <Link to="/admin/products/add">
            Add Product
          </Link>
        </li>

        <br />

        <li>
          <Link to="/admin/events">
            Events
          </Link>
        </li>

        <br />

        <li>
          <Link to="/admin/events/add">
            Add Event
          </Link>
        </li>
        <br/>
<li>
  <Link to="/admin/inquiries">
    Inquiries
  </Link>
</li>

<br/>
<li>
  <Link to="/admin/contacts">
    Contact Messages
  </Link>
</li>

<br/>
<li>
  <Link to="/admin/hero-slides">
    Hero Slides
  </Link>
</li>
<br />
<li>
  <Link to="/admin/gallery">
    Gallery
  </Link>
</li>
<br />
<Link to="/admin/testimonials">
  Testimonials
</Link>
        <br />

        <li>
          <button onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;