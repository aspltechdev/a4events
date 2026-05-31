import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Products from '../pages/Products';
import Events from '../pages/Events';
import Login from '../pages/Login';
// import Dashboard from '../pages/Dashboard';
import ProductDetails from '../pages/ProductDetails';
import EventDetails from '../pages/EventDetails';
import ProtectedRoute from '../ProtectedRoute';
import Dashboard from '../pages/admin/Dashboard';
import ProductsList from '../pages/admin/ProductsList';
import AddProduct from '../pages/admin/AddProduct';
import EventsList from '../pages/admin/EventsList';
import AddEvent from '../pages/admin/AddEvent';
import EditProduct from '../pages/admin/EditProduct';
import EditEvent from '../pages/admin/EditEvent';
import Inquiries from '../pages/admin/Inquiries';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/events" element={<Events />} />
      <Route path="/login" element={<Login />} />
   
      <Route path="/products/:id" element={<ProductDetails />} />
<Route path="/events/:id" element={<EventDetails />} />

 <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />


      <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/products"
  element={
    <ProtectedRoute>
      <ProductsList />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/products/add"
  element={
    <ProtectedRoute>
      <AddProduct />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/products/edit/:id"
  element={
    <ProtectedRoute>
      <EditProduct />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/events"
  element={
    <ProtectedRoute>
      <EventsList />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/events/add"
  element={
    <ProtectedRoute>
      <AddEvent />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/events/edit/:id"
  element={
    <ProtectedRoute>
      <EditEvent />
    </ProtectedRoute>
  }
/>


<Route
  path="/admin/inquiries"
  element={
    <ProtectedRoute>
      <Inquiries />
    </ProtectedRoute>
  }
/>
    </Routes>
    
  );
}

export default AppRoutes;