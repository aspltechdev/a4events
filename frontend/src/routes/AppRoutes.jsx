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

import Contact from '../pages/Contact';
import Contacts from '../pages/admin/Contacts';
import EditHeroSlide from '../pages/admin/EditHeroSlide';
import AddHeroSlide from '../pages/admin/AddHeroSlide';
import HeroSlides from '../pages/admin/HeroSlides';
import EditGalleryImage from '../pages/admin/EditGalleryImage';
import AddGalleryImage from '../pages/admin/AddGalleryImage';
import Gallery from '../pages/admin/Gallery';
import EditTestimonial from '../pages/admin/EditTestimonial';
import AddTestimonial from '../pages/admin/AddTestimonial';
import Testimonials from '../pages/admin/Testimonials';
import Business from '../pages/Business';
import Education from '../pages/Education';



function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/events" element={<Events />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
         <Route path="/business" element={<Business />} />
          <Route path="/education" element={<Education/>} />
   
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





<Route
  path="/admin/contacts"
  element={
    <ProtectedRoute>
      <Contacts/>
    </ProtectedRoute>
  }
/>







<Route
  path="/admin/hero-slides"
  element={
    <ProtectedRoute>
      <HeroSlides />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/hero-slides/add"
  element={
    <ProtectedRoute>
      <AddHeroSlide />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/hero-slides/edit/:id"
  element={
    <ProtectedRoute>
      <EditHeroSlide />
    </ProtectedRoute>
  }
/>


<Route
  path="/admin/gallery"
  element={
    <ProtectedRoute>
      <Gallery />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/gallery/add"
  element={
    <ProtectedRoute>
      <AddGalleryImage />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/gallery/edit/:id"
  element={
    <ProtectedRoute>
      <EditGalleryImage />
    </ProtectedRoute>
  }
/>





















<Route
  path="/admin/testimonials"
  element={
    <ProtectedRoute>
      <Testimonials />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/testimonials/add"
  element={
    <ProtectedRoute>
      <AddTestimonial />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/testimonials/edit/:id"
  element={
    <ProtectedRoute>
      <EditTestimonial />
    </ProtectedRoute>
  }
/>







    </Routes>
    
  );
}

export default AppRoutes;