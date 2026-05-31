import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{' '}
      <Link to="/products">Products</Link> |{' '}
      <Link to="/events">Events</Link> |{' '}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;