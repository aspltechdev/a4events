// // // // // // // // import { useEffect, useState } from 'react';
// // // // // // // // import { useParams } from 'react-router-dom';
// // // // // // // // import api from '../services/api';

// // // // // // // // function ProductDetails() {
// // // // // // // //   const { id } = useParams();
// // // // // // // //   const [product, setProduct] = useState(null);

// // // // // // // //   useEffect(() => {
// // // // // // // //     loadProduct();
// // // // // // // //   }, []);

// // // // // // // //   const loadProduct = async () => {
// // // // // // // //     const { data } = await api.get(`/products/${id}`);
// // // // // // // //     setProduct(data);
// // // // // // // //   };

// // // // // // // //   if (!product) return <h2>Loading...</h2>;

// // // // // // // // //   return (
// // // // // // // // //     <div>
// // // // // // // // //       <h1>{product.title}</h1>
// // // // // // // // //       <p>{product.description}</p>
// // // // // // // // //       <p>€{product.price}</p>

// // // // // // // // //       {product.image && (
// // // // // // // // //         <img
// // // // // // // // //           src={`http://localhost:5000${product.image}`}
// // // // // // // // //           alt={product.title}
// // // // // // // // //           width="300"
// // // // // // // // //         />
// // // // // // // // //       )}
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // return (
// // // // // // // //   <div style={{ padding: '20px' }}>
// // // // // // // //     <Link to="/products">
// // // // // // // //       ← Back
// // // // // // // //     </Link>

// // // // // // // //     <h1>{product.title}</h1>

// // // // // // // //     {product.image && (
// // // // // // // //       <img
// // // // // // // //         src={`http://localhost:5000${product.image}`}
// // // // // // // //         alt={product.title}
// // // // // // // //         style={{
// // // // // // // //           width: '500px',
// // // // // // // //           maxWidth: '100%'
// // // // // // // //         }}
// // // // // // // //       />
// // // // // // // //     )}

// // // // // // // //     <p>{product.description}</p>

// // // // // // // //     <h2>€{product.price}</h2>

// // // // // // // //     <button>
// // // // // // // //       Enquire Now
// // // // // // // //     </button>
// // // // // // // //   </div>
// // // // // // // // );
// // // // // // // // }

// // // // // // // // export default ProductDetails;


// // // // // // // // import { useEffect, useState } from 'react';
// // // // // // // // import { useParams, Link } from 'react-router-dom';
// // // // // // // // import api from '../services/api';
// // // // // // // // import InquiryForm from '../components/InquiryForm';
// // // // // // // // function ProductDetails() {
// // // // // // // //   const { id } = useParams();
// // // // // // // //   const [product, setProduct] = useState(null);

// // // // // // // //   useEffect(() => {
// // // // // // // //     loadProduct();
// // // // // // // //   }, []);

// // // // // // // //   const loadProduct = async () => {
// // // // // // // //     try {
// // // // // // // //       const { data } = await api.get(`/products/${id}`);
// // // // // // // //       setProduct(data);
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error(error);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   if (!product) return <h2>Loading...</h2>;

// // // // // // // //   return (
// // // // // // // //     <div style={{ padding: '20px' }}>
// // // // // // // //       <Link to="/products">
// // // // // // // //         ← Back
// // // // // // // //       </Link>

// // // // // // // //       <h1>{product.title}</h1>

// // // // // // // //       {product.image && (
// // // // // // // //         <img
// // // // // // // //           src={`http://localhost:5000${product.image}`}
// // // // // // // //           alt={product.title}
// // // // // // // //           style={{
// // // // // // // //             width: '500px',
// // // // // // // //             maxWidth: '100%'
// // // // // // // //           }}
// // // // // // // //         />
// // // // // // // //       )}

// // // // // // // //       <p>{product.description}</p>

// // // // // // // //       <h2>€{product.price}</h2>
// // // // // // // // {/* 
// // // // // // // //       <button>
// // // // // // // //         Enquire Now
// // // // // // // //       </button> */}
// // // // // // // //       <InquiryForm productId={product.id} />
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default ProductDetails;

// // // // // // // // import { useEffect, useState } from "react";
// // // // // // // // import { useParams, Link } from "react-router-dom";
// // // // // // // // import api from "../services/api";
// // // // // // // // import InquiryForm from "../components/InquiryForm";
// // // // // // // // import "./ProductDetails.css";

// // // // // // // // function ProductDetails() {
// // // // // // // //   const { id } = useParams();

// // // // // // // //   const [product, setProduct] = useState(null);

// // // // // // // //   useEffect(() => {
// // // // // // // //     loadProduct();
// // // // // // // //   }, []);

// // // // // // // //   const loadProduct = async () => {
// // // // // // // //     try {
// // // // // // // //       const { data } = await api.get(`/products/${id}`);
// // // // // // // //       setProduct(data);
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error(error);
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   if (!product) {
// // // // // // // //     return <h2>Loading...</h2>;
// // // // // // // //   }

// // // // // // // //   const firstLocation =
// // // // // // // //     product.locations?.[0];

// // // // // // // //   return (
// // // // // // // //     <div className="a4-product-details">

// // // // // // // //       <div className="a4-product-details-container">

// // // // // // // //         <Link
// // // // // // // //           to="/products"
// // // // // // // //           className="a4-back-link"
// // // // // // // //         >
// // // // // // // //           ← Back to Products
// // // // // // // //         </Link>

// // // // // // // //         <div className="a4-product-layout">

// // // // // // // //           <div className="a4-product-image-section">

// // // // // // // //             <img
// // // // // // // //               src={`http://localhost:5000${product.image}`}
// // // // // // // //               alt={product.title}
// // // // // // // //               className="a4-product-main-image"
// // // // // // // //             />

// // // // // // // //           </div>

// // // // // // // //           <div className="a4-product-info-section">

// // // // // // // //             <h1 className="a4-product-title">
// // // // // // // //               {product.title}
// // // // // // // //             </h1>

// // // // // // // //             <p className="a4-product-description">
// // // // // // // //               {product.description}
// // // // // // // //             </p>

// // // // // // // //             <div className="a4-product-price">
// // // // // // // //               €{product.price}
// // // // // // // //             </div>

// // // // // // // //           </div>

// // // // // // // //         </div>

// // // // // // // //         {/* Available Locations */}

// // // // // // // //         {product.locations?.length > 0 && (
// // // // // // // //           <>
// // // // // // // //             <div className="a4-location-header">
// // // // // // // //               <h2>Available At</h2>
// // // // // // // //             </div>

// // // // // // // //             <div className="a4-location-grid">

// // // // // // // //               {product.locations.map(
// // // // // // // //                 (location, index) => (
// // // // // // // //                   <div
// // // // // // // //                     key={index}
// // // // // // // //                     className="a4-location-card"
// // // // // // // //                   >
// // // // // // // //                     <h4>{location.name}</h4>

// // // // // // // //                     <p>
// // // // // // // //                       {location.address}
// // // // // // // //                     </p>
// // // // // // // //                   </div>
// // // // // // // //                 )
// // // // // // // //               )}

// // // // // // // //             </div>
// // // // // // // //           </>
// // // // // // // //         )}

// // // // // // // //         {/* Google Map */}

// // // // // // // //         {firstLocation && (
// // // // // // // //           <div className="a4-map-wrapper">

// // // // // // // //             <iframe
// // // // // // // //               title="Store Location"
// // // // // // // //               width="100%"
// // // // // // // //               height="450"
// // // // // // // //               style={{
// // // // // // // //                 border: 0,
// // // // // // // //                 borderRadius: "24px",
// // // // // // // //               }}
// // // // // // // //               loading="lazy"
// // // // // // // //               allowFullScreen
// // // // // // // //               src={`https://maps.google.com/maps?q=${firstLocation.lat},${firstLocation.lng}&z=15&output=embed`}
// // // // // // // //             />

// // // // // // // //           </div>
// // // // // // // //         )}

// // // // // // // //         <div className="a4-inquiry-wrapper">
// // // // // // // //           <InquiryForm
// // // // // // // //             productId={product.id}
// // // // // // // //           />
// // // // // // // //         </div>

// // // // // // // //       </div>

// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default ProductDetails;




// // // // // // // import { useEffect, useState } from "react";
// // // // // // // import { useParams, Link } from "react-router-dom";
// // // // // // // import api from "../services/api";
// // // // // // // import InquiryForm from "../components/InquiryForm";
// // // // // // // import "./ProductDetails.css";

// // // // // // // function ProductDetails() {
// // // // // // //   const { id } = useParams();

// // // // // // //   const [product, setProduct] = useState(null);

// // // // // // //   useEffect(() => {
// // // // // // //     loadProduct();
// // // // // // //   }, [id]);

// // // // // // //   const loadProduct = async () => {
// // // // // // //     try {
// // // // // // //       const { data } = await api.get(`/products/${id}`);
// // // // // // //       setProduct(data);
// // // // // // //     } catch (error) {
// // // // // // //       console.error(error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   if (!product) {
// // // // // // //     return (
// // // // // // //       <div className="a4-product-loading">
// // // // // // //         Loading...
// // // // // // //       </div>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <section className="a4-product-page">

// // // // // // //       <div className="a4-product-container">

// // // // // // //         <Link
// // // // // // //           to="/products"
// // // // // // //           className="a4-product-back"
// // // // // // //         >
// // // // // // //           ← Back to Products
// // // // // // //         </Link>

// // // // // // //         <div className="a4-product-hero">

// // // // // // //           <div className="a4-product-image-col">

// // // // // // //             <img
// // // // // // //               src={`http://localhost:5000${product.image}`}
// // // // // // //               alt={product.title}
// // // // // // //               className="a4-product-image"
// // // // // // //             />

// // // // // // //           </div>

// // // // // // //           <div className="a4-product-content-col">

// // // // // // //             <span className="a4-product-badge">
// // // // // // //               BEST SELLER
// // // // // // //             </span>

// // // // // // //             <h1 className="a4-product-title">
// // // // // // //               {product.title}
// // // // // // //             </h1>

// // // // // // //             <div className="a4-product-price">
// // // // // // //               €{product.price}
// // // // // // //             </div>

// // // // // // //             <p className="a4-product-description">
// // // // // // //               {product.description}
// // // // // // //             </p>

// // // // // // //             <div className="a4-product-features">

// // // // // // //               <div className="a4-feature-chip">
// // // // // // //                 Freshly Prepared
// // // // // // //               </div>

// // // // // // //               <div className="a4-feature-chip">
// // // // // // //                 Premium Quality
// // // // // // //               </div>

// // // // // // //               <div className="a4-feature-chip">
// // // // // // //                 Available In Store
// // // // // // //               </div>

// // // // // // //             </div>

// // // // // // //             <button className="a4-order-btn">
// // // // // // //               Enquire Now
// // // // // // //             </button>

// // // // // // //           </div>

// // // // // // //         </div>

// // // // // // //         {/* Store Locations */}

// // // // // // //         <div className="a4-stores-section">

// // // // // // //           <h2 className="a4-section-title">
// // // // // // //             Available At Our Stores
// // // // // // //           </h2>

// // // // // // //           <div className="a4-store-grid">

// // // // // // //             <div className="a4-store-card">
// // // // // // //               <h4>Akshayaa Bakery</h4>
// // // // // // //               <p>Main Branch, Pondicherry</p>
// // // // // // //             </div>

// // // // // // //             <div className="a4-store-card">
// // // // // // //               <h4>Akshayaa Bakery</h4>
// // // // // // //               <p>Lawspet, Pondicherry</p>
// // // // // // //             </div>

// // // // // // //             <div className="a4-store-card">
// // // // // // //               <h4>Akshayaa Bakery</h4>
// // // // // // //               <p>Muthialpet, Pondicherry</p>
// // // // // // //             </div>

// // // // // // //           </div>

// // // // // // //         </div>

// // // // // // //         {/* Map */}

// // // // // // //         <div className="a4-map-section">

// // // // // // //           <h2 className="a4-section-title">
// // // // // // //             Find Us
// // // // // // //           </h2>

// // // // // // //           <iframe
// // // // // // //             title="Store Location"
// // // // // // //             className="a4-map"
// // // // // // //             src="https://maps.google.com/maps?q=Pondicherry&t=&z=13&ie=UTF8&iwloc=&output=embed"
// // // // // // //           />

// // // // // // //         </div>

// // // // // // //         {/* Inquiry */}

// // // // // // //         <div className="a4-inquiry-section">

// // // // // // //           <h2 className="a4-section-title">
// // // // // // //             Product Inquiry
// // // // // // //           </h2>

// // // // // // //           <InquiryForm productId={product.id} />

// // // // // // //         </div>

// // // // // // //       </div>

// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default ProductDetails;





// // // // // // import { useEffect, useState } from "react";
// // // // // // import { useParams, Link } from "react-router-dom";
// // // // // // import api from "../services/api";
// // // // // // import InquiryForm from "../components/InquiryForm";
// // // // // // import "./ProductDetails.css";

// // // // // // function ProductDetails() {
// // // // // //   const { id } = useParams();

// // // // // //   const [product, setProduct] = useState(null);

// // // // // //   const stores = [
// // // // // //     {
// // // // // //       name: "Spicelands",
// // // // // //       location: "Frankfurt, Germany",
// // // // // //       url: "https://www.google.com/search?q=Spicelands+Frankfurt",
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Jaffna Basar Frankfurt",
// // // // // //       location: "Frankfurt, Germany",
// // // // // //       url: "https://share.google/2UoWe8LQQSIOXPF5k",
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Kabil Kiosk",
// // // // // //       location: "Frankfurt, Germany",
// // // // // //       url: "https://share.google/CoGFCKg0t0YOubr4n",
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Transfood",
// // // // // //       location: "Frankfurt, Germany",
// // // // // //       url: "https://share.google/XxcAq4OFJXW41qScg",
// // // // // //     },
// // // // // //   ];

// // // // // //   useEffect(() => {
// // // // // //     loadProduct();
// // // // // //   }, [id]);

// // // // // //   const loadProduct = async () => {
// // // // // //     try {
// // // // // //       const { data } = await api.get(`/products/${id}`);
// // // // // //       setProduct(data);
// // // // // //     } catch (error) {
// // // // // //       console.error(error);
// // // // // //     }
// // // // // //   };

// // // // // //   if (!product) {
// // // // // //     return (
// // // // // //       <div className="a4-product-loading">
// // // // // //         Loading...
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   return (
// // // // // //     <section className="a4-product-page">
// // // // // //       <div className="a4-product-container">
// // // // // //         <Link
// // // // // //           to="/products"
// // // // // //           className="a4-product-back"
// // // // // //         >
// // // // // //           ← Back to Products
// // // // // //         </Link>

// // // // // //         {/* Product Hero */}

// // // // // //         <div className="a4-product-hero">
// // // // // //           <div className="a4-product-image-col">
// // // // // //             <img
// // // // // //               src={`http://localhost:5000${product.image}`}
// // // // // //               alt={product.title}
// // // // // //               className="a4-product-image"
// // // // // //             />
// // // // // //           </div>

// // // // // //           <div className="a4-product-content-col">
// // // // // //             <span className="a4-product-badge">
// // // // // //               BEST SELLER
// // // // // //             </span>

// // // // // //             <h1 className="a4-product-title">
// // // // // //               {product.title}
// // // // // //             </h1>

// // // // // //             <div className="a4-product-price">
// // // // // //               €{product.price}
// // // // // //             </div>

// // // // // //             <p className="a4-product-description">
// // // // // //               {product.description}
// // // // // //             </p>

// // // // // //             <div className="a4-product-features">
// // // // // //               <div className="a4-feature-chip">
// // // // // //                 Freshly Prepared
// // // // // //               </div>

// // // // // //               <div className="a4-feature-chip">
// // // // // //                 Premium Quality
// // // // // //               </div>

// // // // // //               <div className="a4-feature-chip">
// // // // // //                 Available In Stores
// // // // // //               </div>

// // // // // //               <div className="a4-feature-chip">
// // // // // //                 Imported Product
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             <button
// // // // // //               className="a4-order-btn"
// // // // // //               onClick={() =>
// // // // // //                 document
// // // // // //                   .getElementById("inquiry-section")
// // // // // //                   ?.scrollIntoView({
// // // // // //                     behavior: "smooth",
// // // // // //                   })
// // // // // //               }
// // // // // //             >
// // // // // //               Enquire Now
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Store Locations */}

// // // // // //         <div className="a4-stores-section">
// // // // // //           <h2 className="a4-section-title">
// // // // // //             Available At Our Stores
// // // // // //           </h2>

// // // // // //           <p className="a4-section-subtitle">
// // // // // //             Visit any of our trusted retail partners in
// // // // // //             Frankfurt to purchase this product.
// // // // // //           </p>

// // // // // //           <div className="a4-store-grid">
// // // // // //             {stores.map((store, index) => (
// // // // // //               <a
// // // // // //                 key={index}
// // // // // //                 href={store.url}
// // // // // //                 target="_blank"
// // // // // //                 rel="noopener noreferrer"
// // // // // //                 className="a4-store-card"
// // // // // //               >
// // // // // //                 <div className="a4-store-icon">
// // // // // //                   📍
// // // // // //                 </div>

// // // // // //                 <h4>{store.name}</h4>

// // // // // //                 <p>{store.location}</p>

// // // // // //                 <span className="a4-store-link">
// // // // // //                   View Location →
// // // // // //                 </span>
// // // // // //               </a>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Store Map */}

// // // // // //         <div className="a4-map-section">
// // // // // //           <h2 className="a4-section-title">
// // // // // //             Find Our Stores
// // // // // //           </h2>

// // // // // //           <p className="a4-section-subtitle">
// // // // // //             Our partner stores are conveniently located
// // // // // //             across Frankfurt, Germany.
// // // // // //           </p>

// // // // // //           <iframe
// // // // // //             title="Store Locations"
// // // // // //             className="a4-map"
// // // // // //             src="https://maps.google.com/maps?q=Frankfurt,Germany&t=&z=12&ie=UTF8&iwloc=&output=embed"
// // // // // //             loading="lazy"
// // // // // //             allowFullScreen
// // // // // //           />
// // // // // //         </div>

// // // // // //         {/* Inquiry Form */}

// // // // // //         <div
// // // // // //           id="inquiry-section"
// // // // // //           className="a4-inquiry-section"
// // // // // //         >
// // // // // //           <h2 className="a4-section-title">
// // // // // //             Product Inquiry
// // // // // //           </h2>

// // // // // //           <p className="a4-section-subtitle">
// // // // // //             Have questions about this product?
// // // // // //             Contact us and we'll get back to you soon.
// // // // // //           </p>

// // // // // //           <InquiryForm productId={product.id} />
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // // export default ProductDetails;


// // // // // // import { useEffect, useState } from "react";
// // // // // // import { useParams, Link } from "react-router-dom";
// // // // // // import api from "../services/api";
// // // // // // import InquiryForm from "../components/InquiryForm";
// // // // // // import StoreMap from "../components/StoreMap";
// // // // // // import "./ProductDetails.css";

// // // // // // function ProductDetails() {
// // // // // //   const { id } = useParams();
// // // // // //   const [product, setProduct] = useState(null);

// // // // // //   useEffect(() => {
// // // // // //     loadProduct();
// // // // // //   }, [id]);

// // // // // //   const loadProduct = async () => {
// // // // // //     try {
// // // // // //       const { data } = await api.get(`/products/${id}`);
// // // // // //       setProduct(data);
// // // // // //     } catch (error) {
// // // // // //       console.error(error);
// // // // // //     }
// // // // // //   };

// // // // // //   const stores = [
// // // // // //     {
// // // // // //       name: "Spicelands",
// // // // // //       address: "Frankfurt, Germany",
// // // // // //       lat: 50.1109,
// // // // // //       lng: 8.6821,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Jaffna Basar Frankfurt",
// // // // // //       address: "Frankfurt, Germany",
// // // // // //       lat: 50.115,
// // // // // //       lng: 8.69,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Kabil Kiosk",
// // // // // //       address: "Frankfurt, Germany",
// // // // // //       lat: 50.103,
// // // // // //       lng: 8.675,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Transfood",
// // // // // //       address: "Frankfurt, Germany",
// // // // // //       lat: 50.099,
// // // // // //       lng: 8.701,
// // // // // //     },
// // // // // //   ];

// // // // // //   if (!product) {
// // // // // //     return <div className="a4-product-loading">Loading...</div>;
// // // // // //   }

// // // // // //   return (
// // // // // //     <section className="a4-product-page">
// // // // // //       <div className="a4-product-container">
// // // // // //         <Link to="/products" className="a4-product-back">
// // // // // //           ← Back to Products
// // // // // //         </Link>

// // // // // //         <div className="a4-product-hero">
// // // // // //           <div className="a4-product-image-col">
// // // // // //             <img
// // // // // //               src={`http://localhost:5000${product.image}`}
// // // // // //               alt={product.title}
// // // // // //               className="a4-product-image"
// // // // // //             />
// // // // // //           </div>

// // // // // //           <div className="a4-product-content-col">
// // // // // //             <span className="a4-product-badge">
// // // // // //               BEST SELLER
// // // // // //             </span>

// // // // // //             <h1 className="a4-product-title">
// // // // // //               {product.title}
// // // // // //             </h1>

// // // // // //             <div className="a4-product-price">
// // // // // //               €{product.price}
// // // // // //             </div>

// // // // // //             <p className="a4-product-description">
// // // // // //               {product.description}
// // // // // //             </p>

// // // // // //             <div className="a4-product-features">
// // // // // //               <div className="a4-feature-chip">Freshly Prepared</div>
// // // // // //               <div className="a4-feature-chip">Premium Quality</div>
// // // // // //               <div className="a4-feature-chip">Available In Store</div>
// // // // // //             </div>

// // // // // //             <button className="a4-order-btn">
// // // // // //               Enquire Now
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Store Cards */}

// // // // // //         <div className="a4-stores-section">
// // // // // //           <h2 className="a4-section-title">
// // // // // //             Available At Our Stores
// // // // // //           </h2>

// // // // // //           <div className="a4-store-grid">
// // // // // //             {stores.map((store, index) => (
// // // // // //               <div
// // // // // //                 key={index}
// // // // // //                 className="a4-store-card"
// // // // // //               >
// // // // // //                 <h4>{store.name}</h4>
// // // // // //                 <p>{store.address}</p>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Interactive Map with Markers */}

// // // // // //         <div className="a4-map-section">
// // // // // //           <h2 className="a4-section-title">
// // // // // //             Store Locations
// // // // // //           </h2>

// // // // // //           <StoreMap stores={stores} />
// // // // // //         </div>

// // // // // //         {/* Inquiry */}

// // // // // //         {/* <div className="a4-inquiry-section">
// // // // // //           <h2 className="a4-section-title">
// // // // // //             Product Inquiry
// // // // // //           </h2>

// // // // // //           <InquiryForm productId={product.id} />
// // // // // //         </div> */}
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // // export default ProductDetails;


// // // // // // import { useEffect, useState } from "react";
// // // // // // import { useParams, Link } from "react-router-dom";
// // // // // // import api from "../services/api";
// // // // // // import StoreMap from "../components/StoreMap";
// // // // // // import "./ProductDetails.css";
// // // // // // import PublicLayout from "../layouts/PublicLayout";

// // // // // // function ProductDetails() {
// // // // // //   const { id } = useParams();

// // // // // //   const [product, setProduct] = useState(null);

// // // // // //   useEffect(() => {
// // // // // //     loadProduct();
// // // // // //   }, [id]);

// // // // // //   const loadProduct = async () => {
// // // // // //     try {
// // // // // //       const { data } = await api.get(
// // // // // //         `/products/${id}`
// // // // // //       );

// // // // // //       setProduct(data);
// // // // // //     } catch (error) {
// // // // // //       console.error(error);
// // // // // //     }
// // // // // //   };

// // // // // //   const stores = [
// // // // // //     {
// // // // // //       name: "Spicelands",
// // // // // //       address: "Frankfurt, Germany",
// // // // // //       lat: 50.1109,
// // // // // //       lng: 8.6821,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Jaffna Basar Frankfurt",
// // // // // //       address: "Frankfurt, Germany",
// // // // // //       lat: 50.115,
// // // // // //       lng: 8.69,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Kabil Kiosk",
// // // // // //       address: "Frankfurt, Germany",
// // // // // //       lat: 50.103,
// // // // // //       lng: 8.675,
// // // // // //     },
// // // // // //     {
// // // // // //       name: "Transfood",
// // // // // //       address: "Frankfurt, Germany",
// // // // // //       lat: 50.099,
// // // // // //       lng: 8.701,
// // // // // //     },
// // // // // //   ];

// // // // // //   if (!product) {
// // // // // //     return (
// // // // // //       <div className="a4-product-loading">
// // // // // //         Loading...
// // // // // //       </div>
// // // // // //     );
// // // // // //   }

// // // // // //   const discountedPrice =
// // // // // //     product.price -
// // // // // //     (product.price *
// // // // // //       (product.discountPercent || 0)) /
// // // // // //       100;

// // // // // //   return (

// // // // // //     <PublicLayout>
// // // // // //     <section className="a4-product-page">

// // // // // //       <div className="a4-product-container">

// // // // // //         <Link
// // // // // //           to="/products"
// // // // // //           className="a4-product-back"
// // // // // //         >
// // // // // //           ← Back to Products
// // // // // //         </Link>

// // // // // //         <div className="a4-product-hero">

// // // // // //           <div className="a4-product-image-col">

// // // // // //             {product.image && (
// // // // // //               <img
// // // // // //                 src={`http://localhost:5000${product.image}`}
// // // // // //                 alt={product.title}
// // // // // //                 className="a4-product-image"
// // // // // //               />
// // // // // //             )}

// // // // // //           </div>

// // // // // //           <div className="a4-product-content-col">

// // // // // //             <div className="a4-product-top-badges">

// // // // // //               {product.featured && (
// // // // // //                 <span className="a4-featured-badge">
// // // // // //                   Featured Product
// // // // // //                 </span>
// // // // // //               )}

// // // // // //               <span className="a4-category-badge">
// // // // // //                 {product.category}
// // // // // //               </span>

// // // // // //             </div>

// // // // // //             <h1 className="a4-product-title">
// // // // // //               {product.title}
// // // // // //             </h1>

// // // // // //             <div className="a4-product-price-box">

// // // // // //               <span className="a4-product-final-price">
// // // // // //                 €{discountedPrice.toFixed(2)}
// // // // // //               </span>

// // // // // //               {product.discountPercent > 0 && (
// // // // // //                 <>
// // // // // //                   <span className="a4-product-old-price">
// // // // // //                     €{product.price}
// // // // // //                   </span>

// // // // // //                   <span className="a4-product-discount">
// // // // // //                     {product.discountPercent}% OFF
// // // // // //                   </span>
// // // // // //                 </>
// // // // // //               )}

// // // // // //             </div>

// // // // // //             <p className="a4-product-description">
// // // // // //               {product.description}
// // // // // //             </p>

// // // // // //             <div className="a4-product-features">

// // // // // //               <div className="a4-feature-chip">
// // // // // //                 Premium Quality
// // // // // //               </div>

// // // // // //               <div className="a4-feature-chip">
// // // // // //                 Category: {product.category}
// // // // // //               </div>

// // // // // //               <div className="a4-feature-chip">
// // // // // //                 Available In Store
// // // // // //               </div>

// // // // // //               {product.discountPercent > 0 && (
// // // // // //                 <div className="a4-feature-chip">
// // // // // //                   Save {product.discountPercent}%
// // // // // //                 </div>
// // // // // //               )}

// // // // // //             </div>

// // // // // //             <button className="a4-order-btn">
// // // // // //               Enquire Now
// // // // // //             </button>

// // // // // //           </div>

// // // // // //         </div>

// // // // // //         {/* Stores */}

// // // // // //         <div className="a4-stores-section">

// // // // // //           <h2 className="a4-section-title">
// // // // // //             Available At Our Stores
// // // // // //           </h2>

// // // // // //           <div className="a4-store-grid">

// // // // // //             {stores.map((store, index) => (
// // // // // //               <div
// // // // // //                 key={index}
// // // // // //                 className="a4-store-card"
// // // // // //               >
// // // // // //                 <h4>{store.name}</h4>

// // // // // //                 <p>{store.address}</p>
// // // // // //               </div>
// // // // // //             ))}

// // // // // //           </div>

// // // // // //         </div>

// // // // // //         {/* Map */}

// // // // // //         <div className="a4-map-section">

// // // // // //           <h2 className="a4-section-title">
// // // // // //             Store Locations
// // // // // //           </h2>

// // // // // //           <StoreMap stores={stores} />

// // // // // //         </div>

// // // // // //       </div>

// // // // // //     </section>
// // // // // //     </PublicLayout>
// // // // // //   );
// // // // // // }

// // // // // // export default ProductDetails;





// // // // // import { useEffect, useState } from "react";
// // // // // import { useParams, Link } from "react-router-dom";
// // // // // import api from "../services/api";
// // // // // import StoreMap from "../components/StoreMap";
// // // // // import PublicLayout from "../layouts/PublicLayout";
// // // // // import "./ProductDetails.css";

// // // // // function ProductDetails() {
// // // // //   const { id } = useParams();
// // // // //   const [product, setProduct] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);

// // // // //   useEffect(() => {
// // // // //     loadProduct();
// // // // //   }, [id]);

// // // // //   const loadProduct = async () => {
// // // // //     setLoading(true);
// // // // //     try {
// // // // //       const { data } = await api.get(`/products/${id}`);
// // // // //       setProduct(data);
// // // // //     } catch (error) {
// // // // //       console.error(error);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const stores = [
// // // // //     {
// // // // //       name: "Spicelands",
// // // // //       address: "Frankfurt, Germany",
// // // // //       lat: 50.1109,
// // // // //       lng: 8.6821,
// // // // //     },
// // // // //     {
// // // // //       name: "Jaffna Basar Frankfurt",
// // // // //       address: "Frankfurt, Germany",
// // // // //       lat: 50.115,
// // // // //       lng: 8.69,
// // // // //     },
// // // // //     {
// // // // //       name: "Kabil Kiosk",
// // // // //       address: "Frankfurt, Germany",
// // // // //       lat: 50.103,
// // // // //       lng: 8.675,
// // // // //     },
// // // // //     {
// // // // //       name: "Transfood",
// // // // //       address: "Frankfurt, Germany",
// // // // //       lat: 50.099,
// // // // //       lng: 8.701,
// // // // //     },
// // // // //   ];

// // // // //   const calculateDiscountedPrice = (price, discountPercent) => {
// // // // //     if (discountPercent && discountPercent > 0) {
// // // // //       return price - (price * discountPercent / 100);
// // // // //     }
// // // // //     return price;
// // // // //   };

// // // // //   if (loading) {
// // // // //     return (
// // // // //       <PublicLayout>
// // // // //         <div className="prdd__loading">
// // // // //           <div className="prdd__loadingContent">
// // // // //             <div className="prdd__loadingSpinner"></div>
// // // // //             <p>Loading product details...</p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </PublicLayout>
// // // // //     );
// // // // //   }

// // // // //   if (!product) {
// // // // //     return (
// // // // //       <PublicLayout>
// // // // //         <div className="prdd__notFound">
// // // // //           <div className="prdd__notFoundContent">
// // // // //             <h2>Product Not Found</h2>
// // // // //             <p>The product you're looking for doesn't exist or has been removed.</p>
// // // // //             <Link to="/products" className="prdd__backLink">Back to Products →</Link>
// // // // //           </div>
// // // // //         </div>
// // // // //       </PublicLayout>
// // // // //     );
// // // // //   }

// // // // //   const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercent);
// // // // //   const hasDiscount = product.discountPercent && product.discountPercent > 0;

// // // // //   return (
// // // // //     <PublicLayout>
// // // // //       <section className="prdd__wrapper">
// // // // //         <div className="prdd__bgSubtle"></div>
// // // // //         <div className="prdd__bgGradient"></div>

// // // // //         <div className="prdd__container">
// // // // //           {/* Back Navigation */}
// // // // //           <Link to="/products" className="prdd__backButton">
// // // // //             ← Back to Products
// // // // //           </Link>

// // // // //           {/* Product Hero Section */}
// // // // //           <div className="prdd__hero">
// // // // //             {/* Image Column */}
// // // // //             <div className="prdd__imageColumn">
// // // // //               <div className="prdd__imageWrapper">
// // // // //                 {product.image && (
// // // // //                   <img
// // // // //                     src={`http://localhost:5000${product.image}`}
// // // // //                     alt={product.title}
// // // // //                     className="prdd__image"
// // // // //                   />
// // // // //                 )}
// // // // //                 <div className="prdd__imageOverlay"></div>

// // // // //                 {/* Badges */}
// // // // //                 <div className="prdd__badges">
// // // // //                   {product.featured && (
// // // // //                     <span className="prdd__featuredBadge">Featured</span>
// // // // //                   )}
// // // // //                   {hasDiscount && (
// // // // //                     <span className="prdd__discountBadge">
// // // // //                       {product.discountPercent}% OFF
// // // // //                     </span>
// // // // //                   )}
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Content Column */}
// // // // //             <div className="prdd__contentColumn">
// // // // //               <div className="prdd__category">
// // // // //                 {product.category}
// // // // //               </div>

// // // // //               <h1 className="prdd__title">{product.title}</h1>

// // // // //               <div className="prdd__pricing">
// // // // //                 <span className="prdd__priceCurrent">€{Math.round(discountedPrice)}</span>
// // // // //                 {hasDiscount && (
// // // // //                   <>
// // // // //                     <span className="prdd__priceOriginal">€{product.price}</span>
// // // // //                     <span className="prdd__saveBadge">Save {product.discountPercent}%</span>
// // // // //                   </>
// // // // //                 )}
// // // // //               </div>

// // // // //               <p className="prdd__description">{product.description}</p>

// // // // //               <div className="prdd__features">
// // // // //                 <div className="prdd__featureItem">Premium Quality</div>
// // // // //                 <div className="prdd__featureItem">100% Organic</div>
// // // // //                 <div className="prdd__featureItem">Lab Tested</div>
// // // // //                 <div className="prdd__featureItem">Chemical Free</div>
// // // // //                 {hasDiscount && (
// // // // //                   <div className="prdd__featureItem prdd__featureHighlight">
// // // // //                     Limited Time Offer
// // // // //                   </div>
// // // // //                 )}
// // // // //               </div>

// // // // //               <button className="prdd__enquireBtn">
// // // // //                 Enquire Now
// // // // //                 <span className="prdd__btnArrow">→</span>
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Store Availability Section */}
// // // // //           <div className="prdd__storeSection">
// // // // //             <div className="prdd__sectionHeader">
// // // // //               <div className="prdd__sectionLine"></div>
// // // // //               <span className="prdd__sectionLabel">AVAILABILITY</span>
// // // // //             </div>
// // // // //             <h2 className="prdd__sectionTitle">Available at our stores</h2>

// // // // //             <div className="prdd__storeGrid">
// // // // //               {stores.map((store, index) => (
// // // // //                 <div key={index} className="prdd__storeCard">
// // // // //                   <div className="prdd__storeIcon"></div>
// // // // //                   <div className="prdd__storeInfo">
// // // // //                     <h4 className="prdd__storeName">{store.name}</h4>
// // // // //                     <p className="prdd__storeAddress">{store.address}</p>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Map Section */}
// // // // //           <div className="prdd__mapSection">
// // // // //             <div className="prdd__sectionHeader">
// // // // //               <div className="prdd__sectionLine"></div>
// // // // //               <span className="prdd__sectionLabel">FIND US</span>
// // // // //             </div>
// // // // //             <h2 className="prdd__sectionTitle">Store Locations</h2>
// // // // //             <div className="prdd__mapWrapper">
// // // // //               <StoreMap stores={stores} />
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>
// // // // //     </PublicLayout>
// // // // //   );
// // // // // }

// // // // // export default ProductDetails;



// // // // // import { useEffect, useState } from "react";
// // // // // import { useParams, Link } from "react-router-dom";
// // // // // import api from "../services/api";
// // // // // import StoreMap from "../components/StoreMap";
// // // // // import PublicLayout from "../layouts/PublicLayout";
// // // // // import "./ProductDetails.css";

// // // // // function ProductDetails() {
// // // // //   const { id } = useParams();
// // // // //   const [product, setProduct] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);

// // // // //   useEffect(() => {
// // // // //     loadProduct();
// // // // //   }, [id]);

// // // // //   const loadProduct = async () => {
// // // // //     setLoading(true);
// // // // //     try {
// // // // //       const { data } = await api.get(`/products/${id}`);
// // // // //       setProduct(data);
// // // // //     } catch (error) {
// // // // //       console.error(error);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const stores = [
// // // // //     {
// // // // //       name: "Spicelands",
// // // // //       address: "Frankfurt, Germany",
// // // // //       lat: 50.1109,
// // // // //       lng: 8.6821,
// // // // //     },
// // // // //     {
// // // // //       name: "Jaffna Basar Frankfurt",
// // // // //       address: "Frankfurt, Germany",
// // // // //       lat: 50.115,
// // // // //       lng: 8.69,
// // // // //     },
// // // // //     {
// // // // //       name: "Kabil Kiosk",
// // // // //       address: "Frankfurt, Germany",
// // // // //       lat: 50.103,
// // // // //       lng: 8.675,
// // // // //     },
// // // // //     {
// // // // //       name: "Transfood",
// // // // //       address: "Frankfurt, Germany",
// // // // //       lat: 50.099,
// // // // //       lng: 8.701,
// // // // //     },
// // // // //   ];

// // // // //   const calculateDiscountedPrice = (price, discountPercent) => {
// // // // //     if (discountPercent && discountPercent > 0) {
// // // // //       return price - (price * discountPercent / 100);
// // // // //     }
// // // // //     return price;
// // // // //   };

// // // // //   if (loading) {
// // // // //     return (
// // // // //       <PublicLayout>
// // // // //         <div className="pdt__loading">
// // // // //           <div className="pdt__loadingSpinner"></div>
// // // // //         </div>
// // // // //       </PublicLayout>
// // // // //     );
// // // // //   }

// // // // //   if (!product) {
// // // // //     return (
// // // // //       <PublicLayout>
// // // // //         <div className="pdt__notFound">
// // // // //           <div className="pdt__notFoundContent">
// // // // //             <h2>Product Not Found</h2>
// // // // //             <Link to="/products" className="pdt__notFoundLink">Browse Products →</Link>
// // // // //           </div>
// // // // //         </div>
// // // // //       </PublicLayout>
// // // // //     );
// // // // //   }

// // // // //   const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercent);
// // // // //   const hasDiscount = product.discountPercent && product.discountPercent > 0;

// // // // //   return (
// // // // //     <PublicLayout>
// // // // //       <section className="pdt__wrapper">
// // // // //         <div className="pdt__container">
// // // // //           {/* Back Navigation */}
// // // // //           <Link to="/products" className="pdt__backLink">
// // // // //             ← Back to Products
// // // // //           </Link>

// // // // //           {/* Product Grid */}
// // // // //           <div className="pdt__grid">
// // // // //             {/* Image Section */}
// // // // //             <div className="pdt__imageSection">
// // // // //               <div className="pdt__imageCard">
// // // // //                 <img
// // // // //                   src={`http://localhost:5000${product.image}`}
// // // // //                   alt={product.title}
// // // // //                   className="pdt__image"
// // // // //                 />
// // // // //                 {hasDiscount && (
// // // // //                   <div className="pdt__discountPill">
// // // // //                     {product.discountPercent}% OFF
// // // // //                   </div>
// // // // //                 )}
// // // // //                 {product.featured && !hasDiscount && (
// // // // //                   <div className="pdt__featuredPill">
// // // // //                     Featured
// // // // //                   </div>
// // // // //                 )}
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Info Section */}
// // // // //             <div className="pdt__infoSection">
// // // // //               <div className="pdt__categoryBadge">{product.category}</div>

// // // // //               <h1 className="pdt__title">{product.title}</h1>

// // // // //               <div className="pdt__priceWrapper">
// // // // //                 <div className="pdt__priceBox">
// // // // //                   <span className="pdt__priceCurrent">€{Math.round(discountedPrice)}</span>
// // // // //                   {hasDiscount && (
// // // // //                     <span className="pdt__priceOriginal">€{product.price}</span>
// // // // //                   )}
// // // // //                 </div>
// // // // //                 {hasDiscount && (
// // // // //                   <div className="pdt__saveText">Save {product.discountPercent}%</div>
// // // // //                 )}
// // // // //               </div>

// // // // //               <p className="pdt__description">{product.description}</p>

// // // // //               <div className="pdt__features">
// // // // //                 <div className="pdt__feature">Premium Quality</div>
// // // // //                 <div className="pdt__feature">100% Organic</div>
// // // // //                 <div className="pdt__feature">Lab Tested</div>
// // // // //                 <div className="pdt__feature">Chemical Free</div>
// // // // //               </div>

// // // // //               <button className="pdt__enquireBtn">
// // // // //                 Enquire Now
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Store Availability Section */}
// // // // //           <div className="pdt__storeSection">
// // // // //             <div className="pdt__sectionHeader">
// // // // //               <div className="pdt__sectionLine"></div>
// // // // //               <span className="pdt__sectionLabel">AVAILABLE AT</span>
// // // // //             </div>
// // // // //             <h2 className="pdt__sectionTitle">Our Store Locations</h2>

// // // // //             <div className="pdt__storeGrid">
// // // // //               {stores.map((store, index) => (
// // // // //                 <div key={index} className="pdt__storeCard">
// // // // //                   <div className="pdt__storeCardInner">
// // // // //                     <h4 className="pdt__storeName">{store.name}</h4>
// // // // //                     <p className="pdt__storeAddress">{store.address}</p>
// // // // //                     <div className="pdt__storeStock">In Stock</div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Map Section */}
// // // // //           <div className="pdt__mapSection">
// // // // //             <div className="pdt__sectionHeader">
// // // // //               <div className="pdt__sectionLine"></div>
// // // // //               <span className="pdt__sectionLabel">FIND US</span>
// // // // //             </div>
// // // // //             <h2 className="pdt__sectionTitle">Store Locations Map</h2>
// // // // //             <div className="pdt__mapWrapper">
// // // // //               <StoreMap stores={stores} />
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>
// // // // //     </PublicLayout>
// // // // //   );
// // // // // }

// // // // // export default ProductDetails;














// // // // // import { useEffect, useState } from "react";
// // // // // import { useParams, Link } from "react-router-dom";
// // // // // import api from "../services/api";
// // // // // import StoreMap from "../components/StoreMap";
// // // // // import PublicLayout from "../layouts/PublicLayout";
// // // // // import "./ProductDetails.css";

// // // // // function ProductDetails() {
// // // // //   const { id } = useParams();
// // // // //   const [product, setProduct] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);

// // // // //   useEffect(() => {
// // // // //     loadProduct();
// // // // //   }, [id]);

// // // // //   const loadProduct = async () => {
// // // // //     setLoading(true);
// // // // //     try {
// // // // //       const { data } = await api.get(`/products/${id}`);
// // // // //       setProduct(data);
// // // // //     } catch (error) {
// // // // //       console.error(error);
// // // // //     } finally {
// // // // //       setLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const stores = [
// // // // //     {
// // // // //       name: "Spicelands",
// // // // //       address: "Frankfurt, Germany",
// // // // //       lat: 50.1109,
// // // // //       lng: 8.6821,
// // // // //     },
// // // // //     {
// // // // //       name: "Jaffna Basar Frankfurt",
// // // // //       address: "Frankfurt, Germany",
// // // // //       lat: 50.115,
// // // // //       lng: 8.69,
// // // // //     },
// // // // //     {
// // // // //       name: "Kabil Kiosk",
// // // // //       address: "Frankfurt, Germany",
// // // // //       lat: 50.103,
// // // // //       lng: 8.675,
// // // // //     },
// // // // //     {
// // // // //       name: "Transfood",
// // // // //       address: "Frankfurt, Germany",
// // // // //       lat: 50.099,
// // // // //       lng: 8.701,
// // // // //     },
// // // // //   ];

// // // // //   const calculateDiscountedPrice = (price, discountPercent) => {
// // // // //     if (discountPercent && discountPercent > 0) {
// // // // //       return price - (price * discountPercent / 100);
// // // // //     }
// // // // //     return price;
// // // // //   };

// // // // //   if (loading) {
// // // // //     return (
// // // // //       <PublicLayout>
// // // // //         <div className="pdt__loading">
// // // // //           <div className="pdt__loadingSpinner"></div>
// // // // //         </div>
// // // // //       </PublicLayout>
// // // // //     );
// // // // //   }

// // // // //   if (!product) {
// // // // //     return (
// // // // //       <PublicLayout>
// // // // //         <div className="pdt__notFound">
// // // // //           <div className="pdt__notFoundContent">
// // // // //             <h2>Product Not Found</h2>
// // // // //             <Link to="/products" className="pdt__notFoundLink">Browse Products →</Link>
// // // // //           </div>
// // // // //         </div>
// // // // //       </PublicLayout>
// // // // //     );
// // // // //   }

// // // // //   const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercent);
// // // // //   const hasDiscount = product.discountPercent && product.discountPercent > 0;

// // // // //   return (
// // // // //     <PublicLayout>
// // // // //       <section className="pdt__wrapper">
// // // // //         <div className="pdt__container">
// // // // //           {/* Back Navigation */}
// // // // //           <Link to="/products" className="pdt__backLink">
// // // // //             ← Back to Products
// // // // //           </Link>

// // // // //           {/* Product Grid */}
// // // // //           <div className="pdt__grid">
// // // // //             {/* Image Section */}
// // // // //             <div className="pdt__imageSection">
// // // // //               <div className="pdt__imageCard">
// // // // //                 <img
// // // // //                   src={`http://localhost:5000${product.image}`}
// // // // //                   alt={product.title}
// // // // //                   className="pdt__image"
// // // // //                 />
// // // // //                 {hasDiscount && (
// // // // //                   <div className="pdt__discountPill">
// // // // //                     {product.discountPercent}% OFF
// // // // //                   </div>
// // // // //                 )}
// // // // //                 {product.featured && !hasDiscount && (
// // // // //                   <div className="pdt__featuredPill">
// // // // //                     Featured
// // // // //                   </div>
// // // // //                 )}
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Info Section */}
// // // // //             <div className="pdt__infoSection">
// // // // //               <div className="pdt__categoryBadge">{product.category}</div>

// // // // //               <h1 className="pdt__title">{product.title}</h1>

// // // // //               <div className="pdt__priceWrapper">
// // // // //                 <div className="pdt__priceBox">
// // // // //                   <span className="pdt__priceCurrent">€{Math.round(discountedPrice)}</span>
// // // // //                   {hasDiscount && (
// // // // //                     <span className="pdt__priceOriginal">€{product.price}</span>
// // // // //                   )}
// // // // //                 </div>
// // // // //                 {hasDiscount && (
// // // // //                   <div className="pdt__saveText">Save {product.discountPercent}%</div>
// // // // //                 )}
// // // // //               </div>

// // // // //               <p className="pdt__description">{product.description}</p>

// // // // //               <div className="pdt__features">
// // // // //                 <div className="pdt__feature">Premium Quality</div>
// // // // //                 <div className="pdt__feature">100% Organic</div>
// // // // //                 <div className="pdt__feature">Lab Tested</div>
// // // // //                 <div className="pdt__feature">Chemical Free</div>
// // // // //               </div>

// // // // //               <button className="pdt__enquireBtn">
// // // // //                 Enquire Now
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Store Availability Section */}
// // // // //           <div className="pdt__storeSection">
// // // // //             <div className="pdt__sectionHeader">
// // // // //               <div className="pdt__sectionLine"></div>
// // // // //               <span className="pdt__sectionLabel">AVAILABLE AT</span>
// // // // //             </div>
// // // // //             <h2 className="pdt__sectionTitle">Our Store Locations</h2>

// // // // //             <div className="pdt__storeGrid">
// // // // //               {stores.map((store, index) => (
// // // // //                 <div key={index} className="pdt__storeCard">
// // // // //                   <div className="pdt__storeCardInner">
// // // // //                     <h4 className="pdt__storeName">{store.name}</h4>
// // // // //                     <p className="pdt__storeAddress">{store.address}</p>
// // // // //                     <div className="pdt__storeStock">In Stock</div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Map Section */}
// // // // //           <div className="pdt__mapSection">
// // // // //             <div className="pdt__sectionHeader">
// // // // //               <div className="pdt__sectionLine"></div>
// // // // //               <span className="pdt__sectionLabel">FIND US</span>
// // // // //             </div>
// // // // //             <h2 className="pdt__sectionTitle">Store Locations Map</h2>
// // // // //             <div className="pdt__mapWrapper">
// // // // //               <StoreMap stores={stores} />
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>
// // // // //     </PublicLayout>
// // // // //   );
// // // // // }

// // // // // export default ProductDetails;








// // // // import { useEffect, useState } from "react";
// // // // import { useParams, Link } from "react-router-dom";
// // // // import api from "../services/api";
// // // // import StoreMap from "../components/StoreMap";
// // // // import PublicLayout from "../layouts/PublicLayout";
// // // // import "./ProductDetails.css";

// // // // function ProductDetails() {
// // // //   const { id } = useParams();
// // // //   const [product, setProduct] = useState(null);
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     loadProduct();
// // // //   }, [id]);

// // // //   const loadProduct = async () => {
// // // //     setLoading(true);
// // // //     try {
// // // //       const { data } = await api.get(`/products/${id}`);
// // // //       setProduct(data);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const stores = [
// // // //     {
// // // //       name: "Spicelands",
// // // //       address: "Frankfurt, Germany",
// // // //       lat: 50.1109,
// // // //       lng: 8.6821,
// // // //     },
// // // //     {
// // // //       name: "Jaffna Basar Frankfurt",
// // // //       address: "Frankfurt, Germany",
// // // //       lat: 50.115,
// // // //       lng: 8.69,
// // // //     },
// // // //     {
// // // //       name: "Kabil Kiosk",
// // // //       address: "Frankfurt, Germany",
// // // //       lat: 50.103,
// // // //       lng: 8.675,
// // // //     },
// // // //     {
// // // //       name: "Transfood",
// // // //       address: "Frankfurt, Germany",
// // // //       lat: 50.099,
// // // //       lng: 8.701,
// // // //     },
// // // //   ];

// // // //   const calculateDiscountedPrice = (price, discountPercent) => {
// // // //     if (discountPercent && discountPercent > 0) {
// // // //       return price - (price * discountPercent / 100);
// // // //     }
// // // //     return price;
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <PublicLayout>
// // // //         <div className="pdt__loading">
// // // //           <div className="pdt__loadingContent">
// // // //             <div className="pdt__loadingSpinner"></div>
// // // //             <p>Loading product details...</p>
// // // //           </div>
// // // //         </div>
// // // //       </PublicLayout>
// // // //     );
// // // //   }

// // // //   if (!product) {
// // // //     return (
// // // //       <PublicLayout>
// // // //         <div className="pdt__notFound">
// // // //           <div className="pdt__notFoundContent">
// // // //             <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
// // // //               <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5"/>
// // // //               <path d="M24 16v12M24 32v0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// // // //             </svg>
// // // //             <h2>Product Not Found</h2>
// // // //             <p>The product you're looking for doesn't exist or has been removed.</p>
// // // //             <Link to="/products" className="pdt__notFoundLink">Browse Products →</Link>
// // // //           </div>
// // // //         </div>
// // // //       </PublicLayout>
// // // //     );
// // // //   }

// // // //   const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercent);
// // // //   const hasDiscount = product.discountPercent && product.discountPercent > 0;

// // // //   return (
// // // //     <PublicLayout>
// // // //       <section className="pdt__wrapper">
// // // //         <div className="pdt__bgSubtle"></div>
// // // //         <div className="pdt__bgGradient"></div>

// // // //         <div className="pdt__container">
// // // //           {/* Back Navigation */}
// // // //           <Link to="/products" className="pdt__backLink">
// // // //             <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
// // // //               <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// // // //             </svg>
// // // //             Back to Products
// // // //           </Link>

// // // //           {/* Product Grid */}
// // // //           <div className="pdt__grid">
// // // //             {/* Image Section */}
// // // //             <div className="pdt__imageSection">
// // // //               <div className="pdt__imageCard">
// // // //                 <img
// // // //                   src={`http://localhost:5000${product.image}`}
// // // //                   alt={product.title}
// // // //                   className="pdt__image"
// // // //                 />
// // // //                 {hasDiscount && (
// // // //                   <div className="pdt__discountPill">
// // // //                     <span>{product.discountPercent}% OFF</span>
// // // //                   </div>
// // // //                 )}
// // // //                 {product.featured && !hasDiscount && (
// // // //                   <div className="pdt__featuredPill">
// // // //                     <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
// // // //                       <path d="M6 0L7.5 4.5L12 4.5L8.25 7.5L9.75 12L6 9L2.25 12L3.75 7.5L0 4.5L4.5 4.5L6 0Z" fill="currentColor"/>
// // // //                     </svg>
// // // //                     <span>Featured</span>
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //             </div>

// // // //             {/* Info Section */}
// // // //             <div className="pdt__infoSection">
// // // //               <div className="pdt__categoryBadge">{product.category}</div>

// // // //               <h1 className="pdt__title">{product.title}</h1>

// // // //               <div className="pdt__priceWrapper">
// // // //                 <div className="pdt__priceBox">
// // // //                   <span className="pdt__priceCurrent">€{Math.round(discountedPrice)}</span>
// // // //                   {hasDiscount && (
// // // //                     <span className="pdt__priceOriginal">€{product.price}</span>
// // // //                   )}
// // // //                 </div>
// // // //                 {hasDiscount && (
// // // //                   <div className="pdt__saveText">
// // // //                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// // // //                       <path d="M7 1L9 5.5L13.5 6.5L10 10L11 14.5L7 12L3 14.5L4 10L0.5 6.5L5 5.5L7 1Z" fill="currentColor"/>
// // // //                     </svg>
// // // //                     Save {product.discountPercent}%
// // // //                   </div>
// // // //                 )}
// // // //               </div>

// // // //               <p className="pdt__description">{product.description}</p>

// // // //               <div className="pdt__features">
// // // //                 <div className="pdt__feature">
// // // //                   <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// // // //                     <path d="M7 1L9 5.5L13.5 6.5L10 10L11 14.5L7 12L3 14.5L4 10L0.5 6.5L5 5.5L7 1Z" fill="currentColor"/>
// // // //                   </svg>
// // // //                   Premium Quality
// // // //                 </div>
// // // //                 <div className="pdt__feature">
// // // //                   <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// // // //                     <path d="M4 7l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// // // //                     <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
// // // //                   </svg>
// // // //                   100% Organic
// // // //                 </div>
// // // //                 <div className="pdt__feature">
// // // //                   <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// // // //                     <path d="M2 4h10M5 4V2h4v2M4 7h6M4 10h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
// // // //                     <rect x="1.5" y="4" width="11" height="8.5" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
// // // //                   </svg>
// // // //                   Lab Tested
// // // //                 </div>
// // // //                 <div className="pdt__feature">
// // // //                   <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// // // //                     <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
// // // //                     <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
// // // //                   </svg>
// // // //                   Chemical Free
// // // //                 </div>
// // // //               </div>

// // // //               <button className="pdt__enquireBtn">
// // // //                 <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
// // // //                   <path d="M15 3H3a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="1.5"/>
// // // //                   <path d="M2 5l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// // // //                 </svg>
// // // //                 Enquire Now
// // // //               </button>
// // // //             </div>
// // // //           </div>

// // // //           {/* Store Availability Section */}
// // // //           <div className="pdt__storeSection">
// // // //             <div className="pdt__sectionHeader">
// // // //               <div className="pdt__sectionLine"></div>
// // // //               <span className="pdt__sectionLabel">AVAILABLE AT</span>
// // // //             </div>
// // // //             <h2 className="pdt__sectionTitle">Our Store Locations</h2>

// // // //             <div className="pdt__storeGrid">
// // // //               {stores.map((store, index) => (
// // // //                 <div key={index} className="pdt__storeCard">
// // // //                   <div className="pdt__storeCardInner">
// // // //                     <div className="pdt__storeIcon">
// // // //                       <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
// // // //                         <path d="M10 2C7.24 2 5 4.24 5 7c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.5"/>
// // // //                         <circle cx="10" cy="7" r="2" stroke="currentColor" strokeWidth="1.5"/>
// // // //                       </svg>
// // // //                     </div>
// // // //                     <div className="pdt__storeInfo">
// // // //                       <h4 className="pdt__storeName">{store.name}</h4>
// // // //                       <p className="pdt__storeAddress">{store.address}</p>
// // // //                     </div>
// // // //                     <div className="pdt__storeStock">
// // // //                       <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
// // // //                         <path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// // // //                       </svg>
// // // //                       In Stock
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* Map Section */}
// // // //           <div className="pdt__mapSection">
// // // //             <div className="pdt__sectionHeader">
// // // //               <div className="pdt__sectionLine"></div>
// // // //               <span className="pdt__sectionLabel">FIND US</span>
// // // //             </div>
// // // //             <h2 className="pdt__sectionTitle">Store Locations Map</h2>
// // // //             <div className="pdt__mapWrapper">
// // // //               <StoreMap stores={stores} />
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </PublicLayout>
// // // //   );
// // // // }

// // // // export default ProductDetails;

// // // // import { useEffect, useState } from "react";
// // // // import { useParams, Link } from "react-router-dom";
// // // // import api from "../services/api";
// // // // import StoreMap from "../components/StoreMap";
// // // // import PublicLayout from "../layouts/PublicLayout";
// // // // import "./ProductDetails.css";

// // // // function ProductDetails() {
// // // //   const { id } = useParams();
// // // //   const [product, setProduct] = useState(null);
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     loadProduct();
// // // //   }, [id]);

// // // //   const loadProduct = async () => {
// // // //     setLoading(true);
// // // //     try {
// // // //       const { data } = await api.get(`/products/${id}`);
// // // //       setProduct(data);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const stores = [
// // // //     {
// // // //       name: "Spicelands",
// // // //       address: "Frankfurt, Germany",
// // // //       lat: 50.1109,
// // // //       lng: 8.6821,
// // // //     },
// // // //     {
// // // //       name: "Jaffna Basar Frankfurt",
// // // //       address: "Frankfurt, Germany",
// // // //       lat: 50.115,
// // // //       lng: 8.69,
// // // //     },
// // // //     {
// // // //       name: "Kabil Kiosk",
// // // //       address: "Frankfurt, Germany",
// // // //       lat: 50.103,
// // // //       lng: 8.675,
// // // //     },
// // // //     {
// // // //       name: "Transfood",
// // // //       address: "Frankfurt, Germany",
// // // //       lat: 50.099,
// // // //       lng: 8.701,
// // // //     },
// // // //   ];

// // // //   const calculateDiscountedPrice = (price, discountPercent) => {
// // // //     if (discountPercent && discountPercent > 0) {
// // // //       return price - (price * discountPercent / 100);
// // // //     }
// // // //     return price;
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <PublicLayout>
// // // //         <div className="pdt__loading">
// // // //           <div className="pdt__loadingContent">
// // // //             <div className="pdt__loadingSpinner"></div>
// // // //             <p>Loading product details...</p>
// // // //           </div>
// // // //         </div>
// // // //       </PublicLayout>
// // // //     );
// // // //   }

// // // //   if (!product) {
// // // //     return (
// // // //       <PublicLayout>
// // // //         <div className="pdt__notFound">
// // // //           <div className="pdt__notFoundContent">
// // // //             <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
// // // //               <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5"/>
// // // //               <path d="M24 16v12M24 32v0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
// // // //             </svg>
// // // //             <h2>Product Not Found</h2>
// // // //             <p>The product you're looking for doesn't exist or has been removed.</p>
// // // //             <Link to="/products" className="pdt__notFoundLink">Browse Products →</Link>
// // // //           </div>
// // // //         </div>
// // // //       </PublicLayout>
// // // //     );
// // // //   }

// // // //   const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercent);
// // // //   const hasDiscount = product.discountPercent && product.discountPercent > 0;

// // // //   return (
// // // //     <PublicLayout>
// // // //       <section className="pdt__wrapper">
// // // //         <div className="pdt__bgSubtle"></div>
// // // //         <div className="pdt__bgGradient"></div>

// // // //         <div className="pdt__container">
// // // //           {/* Back Navigation */}
// // // //           <Link to="/products" className="pdt__backLink">
// // // //             <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
// // // //               <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// // // //             </svg>
// // // //             Back to Products
// // // //           </Link>

// // // //           {/* Product Grid */}
// // // //           <div className="pdt__grid">
// // // //             {/* Image Section */}
// // // //             <div className="pdt__imageSection">
// // // //               <div className="pdt__imageCard">
// // // //                 <img
// // // //                   src={`https://a4agroup.eu${product.image}`}
// // // //                   alt={product.title}
// // // //                   className="pdt__image"
// // // //                 />
// // // //                 {hasDiscount && (
// // // //                   <div className="pdt__discountPill">
// // // //                     <span>{product.discountPercent}% OFF</span>
// // // //                   </div>
// // // //                 )}
// // // //                 {product.featured && !hasDiscount && (
// // // //                   <div className="pdt__featuredPill">
// // // //                     <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
// // // //                       <path d="M6 0L7.5 4.5L12 4.5L8.25 7.5L9.75 12L6 9L2.25 12L3.75 7.5L0 4.5L4.5 4.5L6 0Z" fill="currentColor"/>
// // // //                     </svg>
// // // //                     <span>Featured</span>
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //             </div>

// // // //             {/* Info Section */}
// // // //             <div className="pdt__infoSection">
// // // //               <div className="pdt__categoryBadge">{product.category}</div>

// // // //               <h1 className="pdt__title">{product.title}</h1>

// // // //               <div className="pdt__priceWrapper">
// // // //                 <div className="pdt__priceBox">
// // // //                   <span className="pdt__priceCurrent">€{Math.round(discountedPrice)}</span>
// // // //                   {hasDiscount && (
// // // //                     <span className="pdt__priceOriginal">€{product.price}</span>
// // // //                   )}
// // // //                 </div>
// // // //                 {hasDiscount && (
// // // //                   <div className="pdt__saveText">
// // // //                     <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// // // //                       <path d="M7 1L9 5.5L13.5 6.5L10 10L11 14.5L7 12L3 14.5L4 10L0.5 6.5L5 5.5L7 1Z" fill="currentColor"/>
// // // //                     </svg>
// // // //                     Save {product.discountPercent}%
// // // //                   </div>
// // // //                 )}
// // // //               </div>

// // // //               <p className="pdt__description">{product.description}</p>

// // // //               <div className="pdt__features">
// // // //                 <div className="pdt__feature">
// // // //                   <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// // // //                     <path d="M7 1L9 5.5L13.5 6.5L10 10L11 14.5L7 12L3 14.5L4 10L0.5 6.5L5 5.5L7 1Z" fill="currentColor"/>
// // // //                   </svg>
// // // //                   Premium Quality
// // // //                 </div>
// // // //                 <div className="pdt__feature">
// // // //                   <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// // // //                     <path d="M4 7l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// // // //                     <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
// // // //                   </svg>
// // // //                   100% Organic
// // // //                 </div>
// // // //                 <div className="pdt__feature">
// // // //                   <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// // // //                     <path d="M2 4h10M5 4V2h4v2M4 7h6M4 10h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
// // // //                     <rect x="1.5" y="4" width="11" height="8.5" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
// // // //                   </svg>
// // // //                   Lab Tested
// // // //                 </div>
// // // //                 <div className="pdt__feature">
// // // //                   <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// // // //                     <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
// // // //                     <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
// // // //                   </svg>
// // // //                   Chemical Free
// // // //                 </div>
// // // //               </div>

// // // //               <button className="pdt__enquireBtn">
// // // //                 <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
// // // //                   <path d="M15 3H3a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="1.5"/>
// // // //                   <path d="M2 5l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// // // //                 </svg>
// // // //                 Enquire Now
// // // //               </button>
// // // //             </div>
// // // //           </div>

// // // //           {/* Store Availability Section */}
// // // //           <div className="pdt__storeSection">
// // // //             <div className="pdt__sectionHeader">
// // // //               <div className="pdt__sectionLine"></div>
// // // //               <span className="pdt__sectionLabel">AVAILABLE AT</span>
// // // //             </div>
// // // //             <h2 className="pdt__sectionTitle">Our Store Locations</h2>

// // // //             <div className="pdt__storeGrid">
// // // //               {stores.map((store, index) => (
// // // //                 <div key={index} className="pdt__storeCard">
// // // //                   <div className="pdt__storeCardInner">
// // // //                     <div className="pdt__storeIcon">
// // // //                       <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
// // // //                         <path d="M10 2C7.24 2 5 4.24 5 7c0 3.75 5 9 5 9s5-5.25 5-9c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.5"/>
// // // //                         <circle cx="10" cy="7" r="2" stroke="currentColor" strokeWidth="1.5"/>
// // // //                       </svg>
// // // //                     </div>
// // // //                     <div className="pdt__storeInfo">
// // // //                       <h4 className="pdt__storeName">{store.name}</h4>
// // // //                       <p className="pdt__storeAddress">{store.address}</p>
// // // //                     </div>
// // // //                     <div className="pdt__storeStock">
// // // //                       <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
// // // //                         <path d="M2 6l2.5 2.5L10 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// // // //                       </svg>
// // // //                       In Stock
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* Map Section */}
// // // //           <div className="pdt__mapSection">
// // // //             <div className="pdt__sectionHeader">
// // // //               <div className="pdt__sectionLine"></div>
// // // //               <span className="pdt__sectionLabel">FIND US</span>
// // // //             </div>
// // // //             <h2 className="pdt__sectionTitle">Store Locations Map</h2>
// // // //             <div className="pdt__mapWrapper">
// // // //               <StoreMap stores={stores} />
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </section>
// // // //     </PublicLayout>
// // // //   );
// // // // }

// // // // export default ProductDetails;

// // // // import { useEffect, useState } from "react";
// // // // import { useParams, Link, useNavigate } from "react-router-dom";
// // // // import api from "../services/api";
// // // // import StoreMap from "../components/StoreMap";
// // // // import PublicLayout from "../layouts/PublicLayout";
// // // // import "./ProductDetails.css";
// // // // import logo1 from "../assets/logo1.jpeg";
// // // // import logo2 from "../assets/logo2.jpeg";
// // // // import logo3 from "../assets/logo3.jpeg";
// // // // import logo4 from "../assets/logo4.jpeg";

// // // // function ProductDetails() {
// // // //   const { id } = useParams();
// // // //   const navigate = useNavigate();
// // // //   const [product, setProduct] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [isVisible, setIsVisible] = useState(false);

// // // //   useEffect(() => {
// // // //     loadProduct();
// // // //   }, [id]);

// // // //   useEffect(() => {
// // // //     if (!loading && product) {
// // // //       setTimeout(() => setIsVisible(true), 100);
// // // //     }
// // // //   }, [loading, product]);

// // // //   const loadProduct = async () => {
// // // //     setLoading(true);
// // // //     try {
// // // //       const { data } = await api.get(`/products/${id}`);
// // // //       setProduct(data);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };


// // // //   const stores = [
// // // //   {
// // // //     name: "Spicelands",
// // // //     address: "Kaiserstraße 60, 60329 Frankfurt am Main, Germany",
// // // //     lat: 50.1088,
// // // //     lng: 8.6698,
// // // //     logo: logo4,
// // // //   },
// // // //   {
// // // //     name: "Jaffna Basar",
// // // //     address: "Kaiserstraße 49, 60329 Frankfurt am Main, Germany",
// // // //     lat: 50.1086,
// // // //     lng: 8.6695,
// // // //     logo: logo3,
// // // //   },
// // // //   {
// // // //     name: "Kabil Kiosk",
// // // //     address: "60327 Frankfurt am Main, Germany",
// // // //     lat: 50.1049,
// // // //     lng: 8.6518,
// // // //     logo: logo2,
// // // //   },
// // // //   {
// // // //     name: "Transfood  Düsseldorf",
// // // //     address: "Weg 40, 65451 Kelsterbach, Germany",
// // // //     lat: 50.0607,
// // // //     lng: 8.5297,
// // // //     logo: logo1,
// // // //   },
// // // // ];

// // // //   const calculateDiscountedPrice = (price, discountPercent) => {
// // // //     if (discountPercent && discountPercent > 0) {
// // // //       return price - (price * discountPercent) / 100;
// // // //     }
// // // //     return price;
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <PublicLayout>
// // // //         <div className="pdt-loading">
// // // //           <div className="pdt-loading-spinner" />
// // // //           <p>Loading product details...</p>
// // // //         </div>
// // // //       </PublicLayout>
// // // //     );
// // // //   }

// // // //   if (!product) {
// // // //     return (
// // // //       <PublicLayout>
// // // //         <div className="pdt-error">
// // // //           <div className="pdt-error-content">
// // // //             <div className="pdt-error-thread" />
// // // //             <h2>Product Not Found</h2>
// // // //             <p>The product you're looking for doesn't exist or has been removed.</p>
// // // //             <Link to="/products" className="pdt-error-btn">
// // // //               <span>Browse Products</span>
// // // //               <span>→</span>
// // // //             </Link>
// // // //           </div>
// // // //         </div>
// // // //       </PublicLayout>
// // // //     );
// // // //   }

// // // //   const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercent);
// // // //   const hasDiscount = product.discountPercent && product.discountPercent > 0;

// // // //   return (
// // // //     <PublicLayout>
// // // //       <div className={`pdt-page ${isVisible ? "pdt-visible" : ""}`}>
// // // //         {/* Top Navigation */}
// // // //         <div className="pdt-top-nav">
// // // //           <div className="pdt-top-nav-inner">
// // // //             <button onClick={() => navigate(-1)} className="pdt-nav-back">
// // // //               <span>←</span>
// // // //               <span>Back</span>
// // // //             </button>
// // // //             <Link to="/products" className="pdt-nav-all">
// // // //               <span>All Products</span>
// // // //               <span>→</span>
// // // //             </Link>
// // // //           </div>
// // // //         </div>

// // // //         {/* Main Content */}
// // // //         <div className="pdt-container">
// // // //           {/* Product Hero */}
// // // //           <div className="pdt-hero">
// // // //             {/* Image Column */}
// // // //             <div className="pdt-hero-image-col">
// // // //               <div className="pdt-image-frame">
// // // //                 <img
// // // //                   src={`https://a4agroup.eu${product.image}`}
// // // //                   alt={product.title}
// // // //                   className="pdt-image"
// // // //                 />
// // // //                 <div className="pdt-image-overlay" />
// // // //                 {hasDiscount && (
// // // //                   <div className="pdt-badge pdt-badge-sale">
// // // //                     <span>{product.discountPercent}% OFF</span>
// // // //                   </div>
// // // //                 )}
// // // //                 {product.featured && !hasDiscount && (
// // // //                   <div className="pdt-badge pdt-badge-featured">
// // // //                     <span>Featured</span>
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //             </div>

// // // //             {/* Info Column */}
// // // //             <div className="pdt-hero-info-col">
// // // //               <div className="pdt-info-card">
// // // //                 <div className="pdt-info-card-inner">
// // // //                   <div className="pdt-category-row">
// // // //                     <span className="pdt-category-tag">{product.category}</span>
// // // //                   </div>

// // // //                   <h1 className="pdt-title">{product.title}</h1>

// // // //                   <p className="pdt-description">{product.description}</p>

// // // //                   <div className="pdt-price-block">
// // // //                     <span className="pdt-price-current">€{Math.round(discountedPrice)}</span>
// // // //                     {hasDiscount && (
// // // //                       <>
// // // //                         <span className="pdt-price-original">€{product.price}</span>
// // // //                         <span className="pdt-price-save">Save {product.discountPercent}%</span>
// // // //                       </>
// // // //                     )}
// // // //                   </div>

// // // //                   <div className="pdt-qualities">
// // // //                     <div className="pdt-quality-item">
// // // //                       <span className="pdt-quality-dot pdt-q-green" />
// // // //                       <span>Certified Organic</span>
// // // //                     </div>
// // // //                     <div className="pdt-quality-item">
// // // //                       <span className="pdt-quality-dot pdt-q-teal" />
// // // //                       <span>Chemical Free</span>
// // // //                     </div>
// // // //                     <div className="pdt-quality-item">
// // // //                       <span className="pdt-quality-dot pdt-q-blue" />
// // // //                       <span>Lab Tested</span>
// // // //                     </div>
// // // //                     <div className="pdt-quality-item">
// // // //                       <span className="pdt-quality-dot pdt-q-amber" />
// // // //                       <span>Premium Quality</span>
// // // //                     </div>
// // // //                   </div>

// // // //                   <button className="pdt-enquire-btn">
// // // //                     <span>Enquire About This Product</span>
// // // //                     <span>→</span>
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Product Details Section */}
// // // //           <div className="pdt-section">
// // // //             <div className="pdt-section-card">
// // // //               <div className="pdt-section-head">
// // // //                 <div className="pdt-section-thread" />
// // // //                 <span className="pdt-section-eyebrow">Product Information</span>
// // // //               </div>
// // // //               <h2 className="pdt-section-title">Details</h2>

// // // //               <div className="pdt-specs-grid">
// // // //                 <div className="pdt-spec-item">
// // // //                   <span className="pdt-spec-label">Category</span>
// // // //                   <span className="pdt-spec-value">{product.category}</span>
// // // //                 </div>
// // // //                 <div className="pdt-spec-item">
// // // //                   <span className="pdt-spec-label">Price</span>
// // // //                   <span className="pdt-spec-value">
// // // //                     €{Math.round(discountedPrice)}
// // // //                     {hasDiscount && (
// // // //                       <span className="pdt-spec-original"> (was €{product.price})</span>
// // // //                     )}
// // // //                   </span>
// // // //                 </div>
// // // //                 <div className="pdt-spec-item">
// // // //                   <span className="pdt-spec-label">Quality Standard</span>
// // // //                   <span className="pdt-spec-value">Premium Organic</span>
// // // //                 </div>
// // // //                 <div className="pdt-spec-item">
// // // //                   <span className="pdt-spec-label">Source</span>
// // // //                   <span className="pdt-spec-value">Certified Farm Partners</span>
// // // //                 </div>
// // // //                 <div className="pdt-spec-item">
// // // //                   <span className="pdt-spec-label">Processing</span>
// // // //                   <span className="pdt-spec-value">Chemical Free</span>
// // // //                 </div>
// // // //                 <div className="pdt-spec-item">
// // // //                   <span className="pdt-spec-label">Testing</span>
// // // //                   <span className="pdt-spec-value">Laboratory Verified</span>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Store Availability Section */}
// // // //           <div className="pdt-section">
// // // //             <div className="pdt-section-card">
// // // //               <div className="pdt-section-head">
// // // //                 <div className="pdt-section-thread pdt-thread-blue" />
// // // //                 <span className="pdt-section-eyebrow">Where to Find</span>
// // // //               </div>
// // // //               <h2 className="pdt-section-title">Available At</h2>
// // // //               <p className="pdt-section-sub">Find this product at our partner stores across Germany</p>

// // // //               <div className="pdt-stores-grid">
// // // //                 {stores.map((store, index) => (
// // // //                   <div key={index} className="pdt-store-card">
// // // //                     <div className="pdt-store-logo-wrap">
// // // //                       <img
// // // //                         src={store.logo}
// // // //                         alt={store.name}
// // // //                         className="pdt-store-logo"
// // // //                         onError={(e) => {
// // // //                           e.target.style.display = "none";
// // // //                         }}
// // // //                       />
// // // //                       {/* <div className="pdt-store-logo-fallback">
// // // //                         <span>{store.name.charAt(0)}</span>
// // // //                       </div> */}
// // // //                     </div>
// // // //                     <div className="pdt-store-info">
// // // //                       <h4 className="pdt-store-name">{store.name}</h4>
// // // //                       <p className="pdt-store-address">{store.address}</p>
// // // //                       <span className="pdt-store-stock">
// // // //                         <span className="pdt-store-stock-dot" />
// // // //                         In Stock
// // // //                       </span>
// // // //                     </div>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Map Section */}
// // // //           <div className="pdt-section">
// // // //             <div className="pdt-section-card">
// // // //               <div className="pdt-section-head">
// // // //                 <div className="pdt-section-thread pdt-thread-emerald" />
// // // //                 <span className="pdt-section-eyebrow">Store Locations</span>
// // // //               </div>
// // // //               <h2 className="pdt-section-title">Find Us on Map</h2>
// // // //               <div className="pdt-map-frame">
// // // //                 <StoreMap stores={stores} />
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Bottom CTA */}
// // // //           <div className="pdt-bottom">
// // // //             <div className="pdt-bottom-card">
// // // //               <div className="pdt-bottom-text">
// // // //                 <h3 className="pdt-bottom-title">Interested in this product?</h3>
// // // //                 <p className="pdt-bottom-sub">Reach out to us for bulk orders, inquiries, or store availability near you.</p>
// // // //               </div>
// // // //               <button className="pdt-bottom-btn">
// // // //                 <span>Enquire Now</span>
// // // //                 <span>→</span>
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </PublicLayout>
// // // //   );
// // // // }

// // // // export default ProductDetails;


// // // import { useEffect, useState } from "react";
// // // import { useParams, Link, useNavigate } from "react-router-dom";
// // // import api from "../services/api";
// // // import StoreMap from "../components/StoreMap";
// // // import PublicLayout from "../layouts/PublicLayout";
// // // import "./ProductDetails.css";
// // // import logo1 from "../assets/logo1.jpeg";
// // // import logo2 from "../assets/logo2.jpeg";
// // // import logo3 from "../assets/logo3.jpeg";
// // // import logo4 from "../assets/logo4.jpeg";

// // // function ProductDetails() {
// // //   const { id } = useParams();
// // //   const navigate = useNavigate();
// // //   const [product, setProduct] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [isVisible, setIsVisible] = useState(false);

// // //   useEffect(() => {
// // //     loadProduct();
// // //   }, [id]);

// // //   useEffect(() => {
// // //     if (!loading && product) {
// // //       setTimeout(() => setIsVisible(true), 100);
// // //     }
// // //   }, [loading, product]);

// // //   const loadProduct = async () => {
// // //     setLoading(true);
// // //     try {
// // //       const { data } = await api.get(`/products/${id}`);
// // //       setProduct(data);
// // //     } catch (error) {
// // //       console.error(error);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const stores = [
// // //     {
// // //       name: "Spicelands",
// // //       address: "Kaiserstraße 60, 60329 Frankfurt am Main, Germany",
// // //       lat: 50.1088,
// // //       lng: 8.6698,
// // //       logo: logo4,
// // //     },
// // //     {
// // //       name: "Jaffna Basar",
// // //       address: "Kaiserstraße 49, 60329 Frankfurt am Main, Germany",
// // //       lat: 50.1086,
// // //       lng: 8.6695,
// // //       logo: logo3,
// // //     },
// // //     {
// // //       name: "Kabil Kiosk",
// // //       address: "60327 Frankfurt am Main, Germany",
// // //       lat: 50.1049,
// // //       lng: 8.6518,
// // //       logo: logo2,
// // //     },
// // //     {
// // //       name: "Transfood Düsseldorf",
// // //       address: "Weg 40, 65451 Kelsterbach, Germany",
// // //       lat: 50.0607,
// // //       lng: 8.5297,
// // //       logo: logo1,
// // //     },
// // //   ];

// // //   const calculateDiscountedPrice = (price, discountPercent) => {
// // //     if (discountPercent && discountPercent > 0) {
// // //       return price - (price * discountPercent) / 100;
// // //     }
// // //     return price;
// // //   };

// // //   const getIngredientLabel = () => {
// // //     if (!product) return "Ingredients / Types";
// // //     if (product.category === "Fresh Items - Seasonal Fruits & Flowers") return "Fruits & Flowers";
// // //     if (product.category === "Millet Mix & Soups") return "Ingredients";
// // //     if (product.category === "Snacks") return "Ingredients";
// // //     if (product.category === "Organics") return "Varieties";
// // //     return "Ingredients / Types";
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <PublicLayout>
// // //         <div className="pdt-loading">
// // //           <div className="pdt-loading-spinner" />
// // //           <p>Loading product details...</p>
// // //         </div>
// // //       </PublicLayout>
// // //     );
// // //   }

// // //   if (!product) {
// // //     return (
// // //       <PublicLayout>
// // //         <div className="pdt-error">
// // //           <div className="pdt-error-content">
// // //             <div className="pdt-error-thread" />
// // //             <h2>Product Not Found</h2>
// // //             <p>The product you're looking for doesn't exist or has been removed.</p>
// // //             <Link to="/products" className="pdt-error-btn">
// // //               <span>Browse Products</span>
// // //               <span>→</span>
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </PublicLayout>
// // //     );
// // //   }

// // //   const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercent);
// // //   const hasDiscount = product.discountPercent && product.discountPercent > 0;
// // //   const hasIngredients = product.ingredients && product.ingredients.length > 0;

// // //   return (
// // //     <PublicLayout>
// // //       <div className={`pdt-page ${isVisible ? "pdt-visible" : ""}`}>
// // //         {/* Top Navigation */}
// // //         <div className="pdt-top-nav">
// // //           <div className="pdt-top-nav-inner">
// // //             <button onClick={() => navigate(-1)} className="pdt-nav-back">
// // //               <span>←</span>
// // //               <span>Back</span>
// // //             </button>
// // //             <Link to="/products" className="pdt-nav-all">
// // //               <span>All Products</span>
// // //               <span>→</span>
// // //             </Link>
// // //           </div>
// // //         </div>

// // //         {/* Main Content */}
// // //         <div className="pdt-container">
// // //           {/* Product Hero */}
// // //           <div className="pdt-hero">
// // //             {/* Image Column */}
// // //             <div className="pdt-hero-image-col">
// // //               <div className="pdt-image-frame">
// // //                 <img
// // //                   src={`https://a4agroup.eu${product.image}`}
// // //                   alt={product.title}
// // //                   className="pdt-image"
// // //                 />
// // //                 <div className="pdt-image-overlay" />
// // //                 {hasDiscount && (
// // //                   <div className="pdt-badge pdt-badge-sale">
// // //                     <span>{product.discountPercent}% OFF</span>
// // //                   </div>
// // //                 )}
// // //                 {product.featured && !hasDiscount && (
// // //                   <div className="pdt-badge pdt-badge-featured">
// // //                     <span>Featured</span>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             </div>

// // //             {/* Info Column */}
// // //             <div className="pdt-hero-info-col">
// // //               <div className="pdt-info-card">
// // //                 <div className="pdt-info-card-inner">
// // //                   <div className="pdt-category-row">
// // //                     <span className="pdt-category-tag">{product.category}</span>
// // //                   </div>

// // //                   <h1 className="pdt-title">{product.title}</h1>

// // //                   <p className="pdt-description">{product.description}</p>

// // //                   <div className="pdt-price-block">
// // //                     <span className="pdt-price-current">€{Math.round(discountedPrice)}</span>
// // //                     {hasDiscount && (
// // //                       <>
// // //                         <span className="pdt-price-original">€{product.price}</span>
// // //                         <span className="pdt-price-save">Save {product.discountPercent}%</span>
// // //                       </>
// // //                     )}
// // //                   </div>

// // //                   <div className="pdt-qualities">
// // //                     <div className="pdt-quality-item">
// // //                       <span className="pdt-quality-dot pdt-q-green" />
// // //                       <span>Certified Organic</span>
// // //                     </div>
// // //                     <div className="pdt-quality-item">
// // //                       <span className="pdt-quality-dot pdt-q-teal" />
// // //                       <span>Chemical Free</span>
// // //                     </div>
// // //                     <div className="pdt-quality-item">
// // //                       <span className="pdt-quality-dot pdt-q-blue" />
// // //                       <span>Lab Tested</span>
// // //                     </div>
// // //                     <div className="pdt-quality-item">
// // //                       <span className="pdt-quality-dot pdt-q-amber" />
// // //                       <span>Premium Quality</span>
// // //                     </div>
// // //                   </div>

// // //                   <button className="pdt-enquire-btn">
// // //                     <span>Enquire About This Product</span>
// // //                     <span>→</span>
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Product Details Section */}
// // //           <div className="pdt-section">
// // //             <div className="pdt-section-card">
// // //               <div className="pdt-section-head">
// // //                 <div className="pdt-section-thread" />
// // //                 <span className="pdt-section-eyebrow">Product Information</span>
// // //               </div>
// // //               <h2 className="pdt-section-title">Details</h2>

// // //               <div className="pdt-specs-grid">
// // //                 <div className="pdt-spec-item">
// // //                   <span className="pdt-spec-label">Category</span>
// // //                   <span className="pdt-spec-value">{product.category}</span>
// // //                 </div>
// // //                 <div className="pdt-spec-item">
// // //                   <span className="pdt-spec-label">Price</span>
// // //                   <span className="pdt-spec-value">
// // //                     €{Math.round(discountedPrice)}
// // //                     {hasDiscount && (
// // //                       <span className="pdt-spec-original"> (was €{product.price})</span>
// // //                     )}
// // //                   </span>
// // //                 </div>
// // //                 <div className="pdt-spec-item">
// // //                   <span className="pdt-spec-label">Quality Standard</span>
// // //                   <span className="pdt-spec-value">Premium Organic</span>
// // //                 </div>
// // //                 <div className="pdt-spec-item">
// // //                   <span className="pdt-spec-label">Source</span>
// // //                   <span className="pdt-spec-value">Certified Farm Partners</span>
// // //                 </div>
// // //                 <div className="pdt-spec-item">
// // //                   <span className="pdt-spec-label">Processing</span>
// // //                   <span className="pdt-spec-value">Chemical Free</span>
// // //                 </div>
// // //                 <div className="pdt-spec-item">
// // //                   <span className="pdt-spec-label">Testing</span>
// // //                   <span className="pdt-spec-value">Laboratory Verified</span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Store Availability Section */}
// // //           <div className="pdt-section">
// // //             <div className="pdt-section-card">
// // //               <div className="pdt-section-head">
// // //                 <div className="pdt-section-thread pdt-thread-blue" />
// // //                 <span className="pdt-section-eyebrow">Where to Find</span>
// // //               </div>
// // //               <h2 className="pdt-section-title">Available At</h2>
// // //               <p className="pdt-section-sub">Find this product at our partner stores across Germany</p>

// // //               <div className="pdt-stores-grid">
// // //                 {stores.map((store, index) => (
// // //                   <div key={index} className="pdt-store-card">
// // //                     <div className="pdt-store-logo-wrap">
// // //                       <img
// // //                         src={store.logo}
// // //                         alt={store.name}
// // //                         className="pdt-store-logo"
// // //                         onError={(e) => {
// // //                           e.target.style.display = "none";
// // //                         }}
// // //                       />
// // //                     </div>
// // //                     <div className="pdt-store-info">
// // //                       <h4 className="pdt-store-name">{store.name}</h4>
// // //                       <p className="pdt-store-address">{store.address}</p>
// // //                       <span className="pdt-store-stock">
// // //                         <span className="pdt-store-stock-dot" />
// // //                         In Stock
// // //                       </span>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Map Section */}
// // //           <div className="pdt-section">
// // //             <div className="pdt-section-card">
// // //               <div className="pdt-section-head">
// // //                 <div className="pdt-section-thread pdt-thread-emerald" />
// // //                 <span className="pdt-section-eyebrow">Store Locations</span>
// // //               </div>
// // //               <h2 className="pdt-section-title">Find Us on Map</h2>
// // //               <div className="pdt-map-frame">
// // //                 <StoreMap stores={stores} />
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Ingredients Section - Below Map */}
// // //           {hasIngredients && (
// // //             <div className="pdt-section">
// // //               <div className="pdt-section-card">
// // //                 <div className="pdt-section-head">
// // //                   <div className="pdt-section-thread pdt-thread-gold" />
// // //                   <span className="pdt-section-eyebrow">{getIngredientLabel()}</span>
// // //                 </div>
// // //                 <h2 className="pdt-section-title">
// // //                   {product.category === "Fresh Items - Seasonal Fruits & Flowers" 
// // //                     ? "Seasonal Fruits & Flowers" 
// // //                     : product.category === "Millet Mix & Soups" 
// // //                     ? "Key Ingredients" 
// // //                     : "Types & Varieties"}
// // //                 </h2>
// // //                 <p className="pdt-section-sub">
// // //                   {product.category === "Fresh Items - Seasonal Fruits & Flowers"
// // //                     ? "Explore our seasonal collection of fresh fruits and flowers"
// // //                     : product.category === "Millet Mix & Soups"
// // //                     ? "Discover the wholesome ingredients in this product"
// // //                     : "Browse the different varieties and types available"}
// // //                 </p>

// // //                 <div className="pdt-ingredients-grid">
// // //                   {product.ingredients.map((ingredient, index) => (
// // //                     <div key={ingredient.id || index} className="pdt-ingredient-card">
// // //                       {ingredient.image && (
// // //                         <div className="pdt-ingredient-image-wrap">
// // //                           <img
// // //                             src={`https://a4agroup.eu${ingredient.image}`}
// // //                             alt={ingredient.title}
// // //                             className="pdt-ingredient-image"
// // //                             loading="lazy"
// // //                           />
// // //                         </div>
// // //                       )}
// // //                       <div className="pdt-ingredient-info">
// // //                         <h4 className="pdt-ingredient-name">{ingredient.title}</h4>
// // //                         {ingredient.description && (
// // //                           <p className="pdt-ingredient-description">{ingredient.description}</p>
// // //                         )}
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* Bottom CTA */}
// // //           <div className="pdt-bottom">
// // //             <div className="pdt-bottom-card">
// // //               <div className="pdt-bottom-text">
// // //                 <h3 className="pdt-bottom-title">Interested in this product?</h3>
// // //                 <p className="pdt-bottom-sub">Reach out to us for bulk orders, inquiries, or store availability near you.</p>
// // //               </div>
// // //               <button className="pdt-bottom-btn">
// // //                 <span>Enquire Now</span>
// // //                 <span>→</span>
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </PublicLayout>
// // //   );
// // // }

// // // export default ProductDetails;

// // // import { useEffect, useState } from "react";
// // // import { useParams, Link, useNavigate } from "react-router-dom";
// // // import api from "../services/api";
// // // import StoreMap from "../components/StoreMap";
// // // import PublicLayout from "../layouts/PublicLayout";
// // // import "./ProductDetails.css";
// // // import logo1 from "../assets/logo1.jpeg";
// // // import logo2 from "../assets/logo2.jpeg";
// // // import logo3 from "../assets/logo3.jpeg";
// // // import logo4 from "../assets/logo4.jpeg";

// // // function ProductDetails() {
// // //   const { id } = useParams();
// // //   const navigate = useNavigate();
// // //   const [product, setProduct] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [isVisible, setIsVisible] = useState(false);

// // //   useEffect(() => {
// // //     loadProduct();
// // //   }, [id]);

// // //   useEffect(() => {
// // //     if (!loading && product) {
// // //       setTimeout(() => setIsVisible(true), 100);
// // //     }
// // //   }, [loading, product]);

// // //   const loadProduct = async () => {
// // //     setLoading(true);
// // //     try {
// // //       const { data } = await api.get(`/products/${id}`);
// // //       setProduct(data);
// // //     } catch (error) {
// // //       console.error(error);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const stores = [
// // //     {
// // //       name: "Spicelands",
// // //       address: "Kaiserstraße 60, 60329 Frankfurt am Main, Germany",
// // //       lat: 50.1088,
// // //       lng: 8.6698,
// // //       logo: logo4,
// // //     },
// // //     {
// // //       name: "Jaffna Basar",
// // //       address: "Kaiserstraße 49, 60329 Frankfurt am Main, Germany",
// // //       lat: 50.1086,
// // //       lng: 8.6695,
// // //       logo: logo3,
// // //     },
// // //     {
// // //       name: "Kabil Kiosk",
// // //       address: "60327 Frankfurt am Main, Germany",
// // //       lat: 50.1049,
// // //       lng: 8.6518,
// // //       logo: logo2,
// // //     },
// // //     {
// // //       name: "Transfood Düsseldorf",
// // //       address: "Weg 40, 65451 Kelsterbach, Germany",
// // //       lat: 50.0607,
// // //       lng: 8.5297,
// // //       logo: logo1,
// // //     },
// // //   ];

// // //   const calculateDiscountedPrice = (price, discountPercent) => {
// // //     if (discountPercent && Number(discountPercent) > 0) {
// // //       return price - (price * Number(discountPercent)) / 100;
// // //     }
// // //     return price;
// // //   };

// // //   // Simplified: Only "Fresh Items - Seasonal Fruits & Flowers" shows "Fruits & Flowers", everything else shows "Ingredients"
// // //   const getIngredientLabel = () => {
// // //     if (!product) return "Ingredients";
// // //     if (product.category === "Fresh Items - Seasonal Fruits & Flowers") return "Fruits & Flowers";
// // //     return "Ingredients";
// // //   };

// // //   const getIngredientTitle = () => {
// // //     if (!product) return "Key Ingredients";
// // //     if (product.category === "Fresh Items - Seasonal Fruits & Flowers") return "Seasonal Fruits & Flowers";
// // //     return "Key Ingredients";
// // //   };

// // //   const getIngredientSubtitle = () => {
// // //     if (!product) return "Discover the wholesome ingredients in this product";
// // //     if (product.category === "Fresh Items - Seasonal Fruits & Flowers") {
// // //       return "Explore our seasonal collection of fresh fruits and flowers";
// // //     }
// // //     return "Discover the wholesome ingredients in this product";
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <PublicLayout>
// // //         <div className="pdt-loading">
// // //           <div className="pdt-loading-spinner" />
// // //           <p>Loading product details...</p>
// // //         </div>
// // //       </PublicLayout>
// // //     );
// // //   }

// // //   if (!product) {
// // //     return (
// // //       <PublicLayout>
// // //         <div className="pdt-error">
// // //           <div className="pdt-error-content">
// // //             <div className="pdt-error-thread" />
// // //             <h2>Product Not Found</h2>
// // //             <p>The product you're looking for doesn't exist or has been removed.</p>
// // //             <Link to="/products" className="pdt-error-btn">
// // //               <span>Browse Products</span>
// // //               <span>→</span>
// // //             </Link>
// // //           </div>
// // //         </div>
// // //       </PublicLayout>
// // //     );
// // //   }

// // //   const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercent);
// // //   const hasDiscount = product.discountPercent && Number(product.discountPercent) > 0;
// // //   const hasIngredients = product.ingredients && Array.isArray(product.ingredients) && product.ingredients.length > 0;

// // //   return (
// // //     <PublicLayout>
// // //       <div className={`pdt-page ${isVisible ? "pdt-visible" : ""}`}>
// // //         {/* Top Navigation */}
// // //         <div className="pdt-top-nav">
// // //           <div className="pdt-top-nav-inner">
// // //             <button onClick={() => navigate(-1)} className="pdt-nav-back">
// // //               <span>←</span>
// // //               <span>Back</span>
// // //             </button>
// // //             <Link to="/products" className="pdt-nav-all">
// // //               <span>All Products</span>
// // //               <span>→</span>
// // //             </Link>
// // //           </div>
// // //         </div>

// // //         {/* Main Content */}
// // //         <div className="pdt-container">
// // //           {/* Product Hero */}
// // //           <div className="pdt-hero">
// // //             <div className="pdt-hero-image-col">
// // //               <div className="pdt-image-frame">
// // //                 <img
// // //                   src={`https://a4agroup.eu${product.image}`}
// // //                   alt={product.title}
// // //                   className="pdt-image"
// // //                 />
// // //                 <div className="pdt-image-overlay" />
// // //                 {hasDiscount && (
// // //                   <div className="pdt-badge pdt-badge-sale">
// // //                     <span>{product.discountPercent}% OFF</span>
// // //                   </div>
// // //                 )}
// // //                 {product.featured && !hasDiscount && (
// // //                   <div className="pdt-badge pdt-badge-featured">
// // //                     <span>Featured</span>
// // //                   </div>
// // //                 )}
// // //               </div>
// // //             </div>

// // //             <div className="pdt-hero-info-col">
// // //               <div className="pdt-info-card">
// // //                 <div className="pdt-info-card-inner">
// // //                   <div className="pdt-category-row">
// // //                     <span className="pdt-category-tag">{product.category}</span>
// // //                   </div>
// // //                   <h1 className="pdt-title">{product.title}</h1>
// // //                   <p className="pdt-description">{product.description}</p>
// // //                   <div className="pdt-price-block">
// // //                     <span className="pdt-price-current">€{Math.round(discountedPrice)}</span>
// // //                     {hasDiscount && (
// // //                       <>
// // //                         <span className="pdt-price-original">€{product.price}</span>
// // //                         <span className="pdt-price-save">Save {product.discountPercent}%</span>
// // //                       </>
// // //                     )}
// // //                   </div>
// // //                   <div className="pdt-qualities">
// // //                     <div className="pdt-quality-item">
// // //                       <span className="pdt-quality-dot pdt-q-green" />
// // //                       <span>Certified Organic</span>
// // //                     </div>
// // //                     <div className="pdt-quality-item">
// // //                       <span className="pdt-quality-dot pdt-q-teal" />
// // //                       <span>Chemical Free</span>
// // //                     </div>
// // //                     <div className="pdt-quality-item">
// // //                       <span className="pdt-quality-dot pdt-q-blue" />
// // //                       <span>Lab Tested</span>
// // //                     </div>
// // //                     <div className="pdt-quality-item">
// // //                       <span className="pdt-quality-dot pdt-q-amber" />
// // //                       <span>Premium Quality</span>
// // //                     </div>
// // //                   </div>
// // //                   <button className="pdt-enquire-btn">
// // //                     <span>Enquire About This Product</span>
// // //                     <span>→</span>
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Product Details Section */}
// // //           <div className="pdt-section">
// // //             <div className="pdt-section-card">
// // //               <div className="pdt-section-head">
// // //                 <div className="pdt-section-thread" />
// // //                 <span className="pdt-section-eyebrow">Product Information</span>
// // //               </div>
// // //               <h2 className="pdt-section-title">Details</h2>
// // //               <div className="pdt-specs-grid">
// // //                 <div className="pdt-spec-item">
// // //                   <span className="pdt-spec-label">Category</span>
// // //                   <span className="pdt-spec-value">{product.category}</span>
// // //                 </div>
// // //                 <div className="pdt-spec-item">
// // //                   <span className="pdt-spec-label">Price</span>
// // //                   <span className="pdt-spec-value">
// // //                     €{Math.round(discountedPrice)}
// // //                     {hasDiscount && (
// // //                       <span className="pdt-spec-original"> (was €{product.price})</span>
// // //                     )}
// // //                   </span>
// // //                 </div>
// // //                 <div className="pdt-spec-item">
// // //                   <span className="pdt-spec-label">Quality Standard</span>
// // //                   <span className="pdt-spec-value">Premium Organic</span>
// // //                 </div>
// // //                 <div className="pdt-spec-item">
// // //                   <span className="pdt-spec-label">Source</span>
// // //                   <span className="pdt-spec-value">Certified Farm Partners</span>
// // //                 </div>
// // //                 <div className="pdt-spec-item">
// // //                   <span className="pdt-spec-label">Processing</span>
// // //                   <span className="pdt-spec-value">Chemical Free</span>
// // //                 </div>
// // //                 <div className="pdt-spec-item">
// // //                   <span className="pdt-spec-label">Testing</span>
// // //                   <span className="pdt-spec-value">Laboratory Verified</span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Store Availability Section */}
// // //           <div className="pdt-section">
// // //             <div className="pdt-section-card">
// // //               <div className="pdt-section-head">
// // //                 <div className="pdt-section-thread pdt-thread-blue" />
// // //                 <span className="pdt-section-eyebrow">Where to Find</span>
// // //               </div>
// // //               <h2 className="pdt-section-title">Available At</h2>
// // //               <p className="pdt-section-sub">Find this product at our partner stores across Germany</p>
// // //               <div className="pdt-stores-grid">
// // //                 {stores.map((store, index) => (
// // //                   <div key={index} className="pdt-store-card">
// // //                     <div className="pdt-store-logo-wrap">
// // //                       <img
// // //                         src={store.logo}
// // //                         alt={store.name}
// // //                         className="pdt-store-logo"
// // //                         onError={(e) => { e.target.style.display = "none"; }}
// // //                       />
// // //                     </div>
// // //                     <div className="pdt-store-info">
// // //                       <h4 className="pdt-store-name">{store.name}</h4>
// // //                       <p className="pdt-store-address">{store.address}</p>
// // //                       <span className="pdt-store-stock">
// // //                         <span className="pdt-store-stock-dot" />
// // //                         In Stock
// // //                       </span>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Map Section */}
// // //           <div className="pdt-section">
// // //             <div className="pdt-section-card">
// // //               <div className="pdt-section-head">
// // //                 <div className="pdt-section-thread pdt-thread-emerald" />
// // //                 <span className="pdt-section-eyebrow">Store Locations</span>
// // //               </div>
// // //               <h2 className="pdt-section-title">Find Us on Map</h2>
// // //               <div className="pdt-map-frame">
// // //                 <StoreMap stores={stores} />
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Ingredients / Types Section - Below Map */}
// // //           {hasIngredients && (
// // //             <div className="pdt-section">
// // //               <div className="pdt-section-card">
// // //                 <div className="pdt-section-head">
// // //                   <div className="pdt-section-thread pdt-thread-gold" />
// // //                   <span className="pdt-section-eyebrow">{getIngredientLabel()}</span>
// // //                 </div>
// // //                 <h2 className="pdt-section-title">{getIngredientTitle()}</h2>
// // //                 <p className="pdt-section-sub">{getIngredientSubtitle()}</p>

// // //                 <div className="pdt-ingredients-grid">
// // //                   {product.ingredients.map((ingredient) => (
// // //                     <div key={ingredient.id || Math.random()} className="pdt-ingredient-card">
// // //                       {ingredient.image ? (
// // //                         <div className="pdt-ingredient-image-wrap">
// // //                           <img
// // //                             src={`https://a4agroup.eu${ingredient.image}`}
// // //                             alt={ingredient.title}
// // //                             className="pdt-ingredient-image"
// // //                             loading="lazy"
// // //                             onError={(e) => {
// // //                               e.target.style.display = "none";
// // //                               e.target.parentElement.style.display = "none";
// // //                             }}
// // //                           />
// // //                         </div>
// // //                       ) : (
// // //                         <div className="pdt-ingredient-image-wrap pdt-ingredient-placeholder">
// // //                           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
// // //                             <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
// // //                             <circle cx="8.5" cy="8.5" r="1.5"/>
// // //                             <polyline points="21 15 16 10 5 21"/>
// // //                           </svg>
// // //                         </div>
// // //                       )}
// // //                       <div className="pdt-ingredient-info">
// // //                         <h4 className="pdt-ingredient-name">{ingredient.title}</h4>
// // //                         {ingredient.description && (
// // //                           <p className="pdt-ingredient-description">{ingredient.description}</p>
// // //                         )}
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* Bottom CTA */}
// // //           <div className="pdt-bottom">
// // //             <div className="pdt-bottom-card">
// // //               <div className="pdt-bottom-text">
// // //                 <h3 className="pdt-bottom-title">Interested in this product?</h3>
// // //                 <p className="pdt-bottom-sub">Reach out to us for bulk orders, inquiries, or store availability near you.</p>
// // //               </div>
// // //               <button className="pdt-bottom-btn">
// // //                 <span>Enquire Now</span>
// // //                 <span>→</span>
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </PublicLayout>
// // //   );
// // // }

// // // export default ProductDetails;



// // import { useEffect, useState, useCallback } from "react";
// // import { useParams, Link, useNavigate } from "react-router-dom";
// // import api from "../services/api";
// // import StoreMap from "../components/StoreMap";
// // import PublicLayout from "../layouts/PublicLayout";
// // import "./ProductDetails.css";
// // import logo1 from "../assets/logo1.jpeg";
// // import logo2 from "../assets/logo2.jpeg";
// // import logo3 from "../assets/logo3.jpeg";
// // import logo4 from "../assets/logo4.jpeg";

// // function ProductDetails() {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [product, setProduct] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [isVisible, setIsVisible] = useState(false);

// //   // =====================================================
// //   // CART STATE
// //   // =====================================================

// //   const [cartItems, setCartItems] = useState({});
// //   const [cartLoading, setCartLoading] = useState(false);
// //   const [quantity, setQuantity] = useState(1);

// //   // =====================================================
// //   // SESSION
// //   // =====================================================

// //   const getSessionId = useCallback(() => {
// //     let sessionId = localStorage.getItem("cartSessionId");

// //     if (!sessionId) {
// //       sessionId = "cart-" + Date.now() + "-" + Math.random().toString(36).substring(2, 10);
// //       localStorage.setItem("cartSessionId", sessionId);
// //     }

// //     return sessionId;
// //   }, []);

// //   // =====================================================
// //   // FETCH CART
// //   // =====================================================

// //   const fetchCartItems = useCallback(async () => {
// //     try {
// //       const sessionId = getSessionId();
// //       const { data } = await api.get(`/cart/${sessionId}`);

// //       const quantities = {};
// //       data.items?.forEach((item) => {
// //         quantities[item.productId] = item.quantity;
// //       });

// //       setCartItems(quantities);

// //       // If this product is in cart, set the quantity
// //       if (id && quantities[id]) {
// //         setQuantity(quantities[id]);
// //       }
// //     } catch (error) {
// //       if (error.response?.status === 404) {
// //         setCartItems({});
// //         return;
// //       }
// //       console.error("Failed to load cart:", error);
// //     }
// //   }, [getSessionId, id]);

// //   // =====================================================
// //   // LOAD CART ON PAGE LOAD
// //   // =====================================================

// //   useEffect(() => {
// //     fetchCartItems();
// //   }, [fetchCartItems]);

// //   // =====================================================
// //   // CART UPDATE LISTENER
// //   // =====================================================

// //   useEffect(() => {
// //     const handleCartUpdated = () => {
// //       fetchCartItems();
// //     };

// //     window.addEventListener("cartUpdated", handleCartUpdated);

// //     return () => {
// //       window.removeEventListener("cartUpdated", handleCartUpdated);
// //     };
// //   }, [fetchCartItems]);

// //   // =====================================================
// //   // LOAD PRODUCT
// //   // =====================================================

// //   useEffect(() => {
// //     loadProduct();
// //   }, [id]);

// //   useEffect(() => {
// //     if (!loading && product) {
// //       setTimeout(() => setIsVisible(true), 100);
// //     }
// //   }, [loading, product]);

// //   const loadProduct = async () => {
// //     setLoading(true);
// //     try {
// //       const { data } = await api.get(`/products/${id}`);
// //       setProduct(data);
// //     } catch (error) {
// //       console.error(error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // =====================================================
// //   // CHECK IF PRODUCT IS FLOWER
// //   // =====================================================

// //   const isFlowerProduct = (product) => {
// //     if (!product) return false;
// //     const category = String(product.category || "").trim().toLowerCase();
// //     return category.includes("flower") ||
// //       category.includes("fresh items - seasonal fruits & flowers");
// //   };

// //   // =====================================================
// //   // ADD TO CART
// //   // =====================================================

// //   const addToCart = async () => {
// //     if (!product) return;

// //     try {
// //       setCartLoading(true);
// //       const sessionId = getSessionId();

// //       const response = await api.post("/cart/add", {
// //         sessionId,
// //         productId: product.id,
// //         quantity: quantity,
// //       });

// //       if (response.status === 200 || response.status === 201) {
// //         setCartItems((prev) => ({
// //           ...prev,
// //           [product.id]: (prev[product.id] || 0) + quantity,
// //         }));
// //         window.dispatchEvent(new Event("cartUpdated"));
// //       }
// //     } catch (error) {
// //       console.error("Add to cart error:", error);
// //     } finally {
// //       setCartLoading(false);
// //     }
// //   };

// //   // =====================================================
// //   // UPDATE CART QUANTITY
// //   // =====================================================

// //   const updateCartQuantity = async (newQuantity) => {
// //     if (!product) return;

// //     if (newQuantity < 1) {
// //       await removeFromCart();
// //       return;
// //     }

// //     try {
// //       setCartLoading(true);
// //       const sessionId = getSessionId();

// //       await api.put(`/cart/${sessionId}/${product.id}`, {
// //         quantity: newQuantity,
// //       });

// //       setCartItems((prev) => ({
// //         ...prev,
// //         [product.id]: newQuantity,
// //       }));
// //       setQuantity(newQuantity);
// //       window.dispatchEvent(new Event("cartUpdated"));
// //     } catch (error) {
// //       console.error("Update cart error:", error);
// //     } finally {
// //       setCartLoading(false);
// //     }
// //   };

// //   // =====================================================
// //   // REMOVE FROM CART
// //   // =====================================================

// //   const removeFromCart = async () => {
// //     if (!product) return;

// //     try {
// //       setCartLoading(true);
// //       const sessionId = getSessionId();

// //       await api.delete(`/cart/${sessionId}/${product.id}`);

// //       setCartItems((prev) => {
// //         const updated = { ...prev };
// //         delete updated[product.id];
// //         return updated;
// //       });
// //       setQuantity(1);
// //       window.dispatchEvent(new Event("cartUpdated"));
// //     } catch (error) {
// //       console.error("Remove cart error:", error);
// //     } finally {
// //       setCartLoading(false);
// //     }
// //   };

// //   // =====================================================
// //   // HANDLE QUANTITY CHANGE
// //   // =====================================================

// //   const handleQuantityChange = (e) => {
// //     const val = parseInt(e.target.value);
// //     if (val > 0) {
// //       setQuantity(val);
// //     }
// //   };

// //   const incrementQuantity = () => {
// //     setQuantity(prev => prev + 1);
// //   };

// //   const decrementQuantity = () => {
// //     if (quantity > 1) {
// //       setQuantity(prev => prev - 1);
// //     }
// //   };

// //   const stores = [
// //     {
// //       name: "Spicelands",
// //       address: "Kaiserstraße 60, 60329 Frankfurt am Main, Germany",
// //       lat: 50.1088,
// //       lng: 8.6698,
// //       logo: logo4,
// //     },
// //     {
// //       name: "Jaffna Basar",
// //       address: "Kaiserstraße 49, 60329 Frankfurt am Main, Germany",
// //       lat: 50.1086,
// //       lng: 8.6695,
// //       logo: logo3,
// //     },
// //     {
// //       name: "Kabil Kiosk",
// //       address: "60327 Frankfurt am Main, Germany",
// //       lat: 50.1049,
// //       lng: 8.6518,
// //       logo: logo2,
// //     },
// //     {
// //       name: "Transfood Düsseldorf",
// //       address: "Weg 40, 65451 Kelsterbach, Germany",
// //       lat: 50.0607,
// //       lng: 8.5297,
// //       logo: logo1,
// //     },
// //   ];

// //   const calculateDiscountedPrice = (price, discountPercent) => {
// //     if (discountPercent && Number(discountPercent) > 0) {
// //       return price - (price * Number(discountPercent)) / 100;
// //     }
// //     return price;
// //   };

// //   // Simplified: Only "Fresh Items - Seasonal Fruits & Flowers" shows "Fruits & Flowers", everything else shows "Ingredients"
// //   const getIngredientLabel = () => {
// //     if (!product) return "Ingredients";
// //     if (product.category === "Fresh Items - Seasonal Fruits & Flowers") return "Fruits & Flowers";
// //     return "Ingredients";
// //   };

// //   const getIngredientTitle = () => {
// //     if (!product) return "Key Ingredients";
// //     if (product.category === "Fresh Items - Seasonal Fruits & Flowers") return "Seasonal Fruits & Flowers";
// //     return "Key Ingredients";
// //   };

// //   const getIngredientSubtitle = () => {
// //     if (!product) return "Discover the wholesome ingredients in this product";
// //     if (product.category === "Fresh Items - Seasonal Fruits & Flowers") {
// //       return "Explore our seasonal collection of fresh fruits and flowers";
// //     }
// //     return "Discover the wholesome ingredients in this product";
// //   };

// //   if (loading) {
// //     return (
// //       <PublicLayout>
// //         <div className="pdt-loading">
// //           <div className="pdt-loading-spinner" />
// //           <p>Loading product details...</p>
// //         </div>
// //       </PublicLayout>
// //     );
// //   }

// //   if (!product) {
// //     return (
// //       <PublicLayout>
// //         <div className="pdt-error">
// //           <div className="pdt-error-content">
// //             <div className="pdt-error-thread" />
// //             <h2>Product Not Found</h2>
// //             <p>The product you're looking for doesn't exist or has been removed.</p>
// //             <Link to="/products" className="pdt-error-btn">
// //               <span>Browse Products</span>
// //               <span>→</span>
// //             </Link>
// //           </div>
// //         </div>
// //       </PublicLayout>
// //     );
// //   }

// //   const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercent);
// //   const hasDiscount = product.discountPercent && Number(product.discountPercent) > 0;
// //   const hasIngredients = product.ingredients && Array.isArray(product.ingredients) && product.ingredients.length > 0;
// //   const isFlower = isFlowerProduct(product);
// //   const isInCart = cartItems[product.id] > 0;
// //   const cartQuantity = cartItems[product.id] || 0;

// //   return (
// //     <PublicLayout>
// //       <div className={`pdt-page ${isVisible ? "pdt-visible" : ""}`}>
// //         {/* Top Navigation */}
// //         <div className="pdt-top-nav">
// //           <div className="pdt-top-nav-inner">
// //             <button onClick={() => navigate(-1)} className="pdt-nav-back">
// //               <span>←</span>
// //               <span>Back</span>
// //             </button>
// //             <Link to="/products" className="pdt-nav-all">
// //               <span>All Products</span>
// //               <span>→</span>
// //             </Link>
// //           </div>
// //         </div>

// //         {/* Main Content */}
// //         <div className="pdt-container">
// //           {/* Product Hero */}
// //           <div className="pdt-hero">
// //             <div className="pdt-hero-image-col">
// //               <div className="pdt-image-frame">
// //                 <img
// //                   src={`https://a4agroup.eu${product.image}`}
// //                   alt={product.title}
// //                   className="pdt-image"
// //                 />
// //                 <div className="pdt-image-overlay" />
// //                 {hasDiscount && (
// //                   <div className="pdt-badge pdt-badge-sale">
// //                     <span>{product.discountPercent}% OFF</span>
// //                   </div>
// //                 )}
// //                 {product.featured && !hasDiscount && (
// //                   <div className="pdt-badge pdt-badge-featured">
// //                     <span>Featured</span>
// //                   </div>
// //                 )}
// //                 {isFlower && (
// //                   <div className="pdt-badge pdt-badge-flower">
// //                     <span>🌸 Fresh Flower</span>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>

// //             <div className="pdt-hero-info-col">
// //               <div className="pdt-info-card">
// //                 <div className="pdt-info-card-inner">
// //                   <div className="pdt-category-row">
// //                     <span className="pdt-category-tag">{product.category}</span>
// //                     {isFlower && (
// //                       <span className="pdt-category-tag pdt-tag-flower">
// //                         🌸 Seasonal
// //                       </span>
// //                     )}
// //                   </div>
// //                   <h1 className="pdt-title">{product.title}</h1>
// //                   <p className="pdt-description">{product.description}</p>
// //                   <div className="pdt-price-block">
// //                     <span className="pdt-price-current">€{Math.round(discountedPrice)}</span>
// //                     {hasDiscount && (
// //                       <>
// //                         <span className="pdt-price-original">€{product.price}</span>
// //                         <span className="pdt-price-save">Save {product.discountPercent}%</span>
// //                       </>
// //                     )}
// //                   </div>

// //                   {/* =========================================
// //                       CART SECTION - ONLY FOR FLOWERS
// //                   ========================================= */}

// //                   {isFlower && (
// //                     <div className="pdt-cart-section">
// //                       {!isInCart ? (
// //                         // Add to Cart
// //                         <div className="pdt-cart-add">
// //                           <div className="pdt-quantity-selector">
// //                             <button
// //                               type="button"
// //                               onClick={decrementQuantity}
// //                               disabled={quantity <= 1 || cartLoading}
// //                               aria-label="Decrease quantity"
// //                             >
// //                               −
// //                             </button>
// //                             <input
// //                               type="number"
// //                               min="1"
// //                               value={quantity}
// //                               onChange={handleQuantityChange}
// //                               disabled={cartLoading}
// //                               aria-label="Quantity"
// //                             />
// //                             <button
// //                               type="button"
// //                               onClick={incrementQuantity}
// //                               disabled={cartLoading}
// //                               aria-label="Increase quantity"
// //                             >
// //                               +
// //                             </button>
// //                           </div>
// //                           <button
// //                             type="button"
// //                             className="pdt-add-cart-btn"
// //                             onClick={addToCart}
// //                             disabled={cartLoading}
// //                           >
// //                             {cartLoading ? "Adding..." : "Add to Cart"}
// //                           </button>
// //                         </div>
// //                       ) : (
// //                         // Update Cart
// //                         <div className="pdt-cart-update">
// //                           <div className="pdt-cart-status">
// //                             <span className="pdt-cart-check">✓</span>
// //                             <span>In Cart ({cartQuantity})</span>
// //                           </div>
// //                           <div className="pdt-cart-actions">
// //                             <div className="pdt-quantity-selector">
// //                               <button
// //                                 type="button"
// //                                 onClick={() => updateCartQuantity(cartQuantity - 1)}
// //                                 disabled={cartLoading || cartQuantity <= 1}
// //                                 aria-label="Decrease quantity"
// //                               >
// //                                 −
// //                               </button>
// //                               <span className="pdt-quantity-display">{cartQuantity}</span>
// //                               <button
// //                                 type="button"
// //                                 onClick={() => updateCartQuantity(cartQuantity + 1)}
// //                                 disabled={cartLoading}
// //                                 aria-label="Increase quantity"
// //                               >
// //                                 +
// //                               </button>
// //                             </div>
// //                             <button
// //                               type="button"
// //                               className="pdt-remove-cart-btn"
// //                               onClick={removeFromCart}
// //                               disabled={cartLoading}
// //                             >
// //                               Remove
// //                             </button>
// //                           </div>
// //                         </div>
// //                       )}
// //                     </div>
// //                   )}

// //                   <div className="pdt-qualities">
// //                     <div className="pdt-quality-item">
// //                       <span className="pdt-quality-dot pdt-q-green" />
// //                       <span>Certified Organic</span>
// //                     </div>
// //                     <div className="pdt-quality-item">
// //                       <span className="pdt-quality-dot pdt-q-teal" />
// //                       <span>Chemical Free</span>
// //                     </div>
// //                     <div className="pdt-quality-item">
// //                       <span className="pdt-quality-dot pdt-q-blue" />
// //                       <span>Lab Tested</span>
// //                     </div>
// //                     <div className="pdt-quality-item">
// //                       <span className="pdt-quality-dot pdt-q-amber" />
// //                       <span>Premium Quality</span>
// //                     </div>
// //                   </div>
// //                   {/* <button className="pdt-enquire-btn">
// //                     <span>Enquire About This Product</span>
// //                     <span>→</span>
// //                   </button> */}

// //                   <button
// //                     className="pdt-enquire-btn"
// //                     onClick={() => navigate("/contact")}
// //                   >
// //                     <span>Enquire About This Product</span>
// //                     <span>→</span>
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Product Details Section */}
// //           <div className="pdt-section">
// //             <div className="pdt-section-card">
// //               <div className="pdt-section-head">
// //                 <div className="pdt-section-thread" />
// //                 <span className="pdt-section-eyebrow">Product Information</span>
// //               </div>
// //               <h2 className="pdt-section-title">Details</h2>
// //               <div className="pdt-specs-grid">
// //                 <div className="pdt-spec-item">
// //                   <span className="pdt-spec-label">Category</span>
// //                   <span className="pdt-spec-value">{product.category}</span>
// //                 </div>
// //                 <div className="pdt-spec-item">
// //                   <span className="pdt-spec-label">Price</span>
// //                   <span className="pdt-spec-value">
// //                     €{Math.round(discountedPrice)}
// //                     {hasDiscount && (
// //                       <span className="pdt-spec-original"> (was €{product.price})</span>
// //                     )}
// //                   </span>
// //                 </div>
// //                 <div className="pdt-spec-item">
// //                   <span className="pdt-spec-label">Quality Standard</span>
// //                   <span className="pdt-spec-value">Premium Organic</span>
// //                 </div>
// //                 <div className="pdt-spec-item">
// //                   <span className="pdt-spec-label">Source</span>
// //                   <span className="pdt-spec-value">Certified Farm Partners</span>
// //                 </div>
// //                 <div className="pdt-spec-item">
// //                   <span className="pdt-spec-label">Processing</span>
// //                   <span className="pdt-spec-value">Chemical Free</span>
// //                 </div>
// //                 <div className="pdt-spec-item">
// //                   <span className="pdt-spec-label">Testing</span>
// //                   <span className="pdt-spec-value">Laboratory Verified</span>
// //                 </div>
// //                 {isFlower && (
// //                   <div className="pdt-spec-item">
// //                     <span className="pdt-spec-label">Type</span>
// //                     <span className="pdt-spec-value">🌸 Seasonal Fresh Flower</span>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Store Availability Section */}
// //           <div className="pdt-section">
// //             <div className="pdt-section-card">
// //               <div className="pdt-section-head">
// //                 <div className="pdt-section-thread pdt-thread-blue" />
// //                 <span className="pdt-section-eyebrow">Where to Find</span>
// //               </div>
// //               <h2 className="pdt-section-title">Available At</h2>
// //               <p className="pdt-section-sub">Find this product at our partner stores across Germany</p>
// //               <div className="pdt-stores-grid">
// //                 {stores.map((store, index) => (
// //                   <div key={index} className="pdt-store-card">
// //                     <div className="pdt-store-logo-wrap">
// //                       <img
// //                         src={store.logo}
// //                         alt={store.name}
// //                         className="pdt-store-logo"
// //                         onError={(e) => { e.target.style.display = "none"; }}
// //                       />
// //                     </div>
// //                     <div className="pdt-store-info">
// //                       <h4 className="pdt-store-name">{store.name}</h4>
// //                       <p className="pdt-store-address">{store.address}</p>
// //                       <span className="pdt-store-stock">
// //                         <span className="pdt-store-stock-dot" />
// //                         In Stock
// //                       </span>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>

// //           {/* Map Section */}
// //           <div className="pdt-section">
// //             <div className="pdt-section-card">
// //               <div className="pdt-section-head">
// //                 <div className="pdt-section-thread pdt-thread-emerald" />
// //                 <span className="pdt-section-eyebrow">Store Locations</span>
// //               </div>
// //               <h2 className="pdt-section-title">Find Us on Map</h2>
// //               <div className="pdt-map-frame">
// //                 <StoreMap stores={stores} />
// //               </div>
// //             </div>
// //           </div>

// //           {/* Ingredients / Types Section - Below Map */}
// //           {hasIngredients && (
// //             <div className="pdt-section">
// //               <div className="pdt-section-card">
// //                 <div className="pdt-section-head">
// //                   <div className="pdt-section-thread pdt-thread-gold" />
// //                   <span className="pdt-section-eyebrow">{getIngredientLabel()}</span>
// //                 </div>
// //                 <h2 className="pdt-section-title">{getIngredientTitle()}</h2>
// //                 <p className="pdt-section-sub">{getIngredientSubtitle()}</p>

// //                 <div className="pdt-ingredients-grid">
// //                   {product.ingredients.map((ingredient) => (
// //                     <div key={ingredient.id || Math.random()} className="pdt-ingredient-card">
// //                       {ingredient.image ? (
// //                         <div className="pdt-ingredient-image-wrap">
// //                           <img
// //                             src={`https://a4agroup.eu${ingredient.image}`}
// //                             alt={ingredient.title}
// //                             className="pdt-ingredient-image"
// //                             loading="lazy"
// //                             onError={(e) => {
// //                               e.target.style.display = "none";
// //                               e.target.parentElement.style.display = "none";
// //                             }}
// //                           />
// //                         </div>
// //                       ) : (
// //                         <div className="pdt-ingredient-image-wrap pdt-ingredient-placeholder">
// //                           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
// //                             <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
// //                             <circle cx="8.5" cy="8.5" r="1.5" />
// //                             <polyline points="21 15 16 10 5 21" />
// //                           </svg>
// //                         </div>
// //                       )}
// //                       <div className="pdt-ingredient-info">
// //                         <h4 className="pdt-ingredient-name">{ingredient.title}</h4>
// //                         {ingredient.description && (
// //                           <p className="pdt-ingredient-description">{ingredient.description}</p>
// //                         )}
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           )}

// //           {/* Bottom CTA */}
// //           <div className="pdt-bottom">
// //             <div className="pdt-bottom-card">
// //               <div className="pdt-bottom-text">
// //                 <h3 className="pdt-bottom-title">Interested in this product?</h3>
// //                 <p className="pdt-bottom-sub">Reach out to us for bulk orders, inquiries, or store availability near you.</p>
// //               </div>
// //               <button className="pdt-bottom-btn"    onClick={() => navigate("/contact")}>
// //                 <span>Enquire Now</span>
// //                 <span>→</span>
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </PublicLayout>
// //   );
// // }

// // export default ProductDetails;



// import { useEffect, useState, useCallback } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import api from "../services/api";
// import StoreMap from "../components/StoreMap";
// import PublicLayout from "../layouts/PublicLayout";
// import "./ProductDetails.css";
// import logo1 from "../assets/logo1.jpeg";
// import logo2 from "../assets/logo2.jpeg";
// import logo3 from "../assets/logo3.jpeg";
// import logo4 from "../assets/logo4.jpeg";

// function ProductDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [isVisible, setIsVisible] = useState(false);

//   // =====================================================
//   // CART STATE
//   // =====================================================

//   const [cartItems, setCartItems] = useState({});
//   const [cartLoading, setCartLoading] = useState(false);
//   const [quantity, setQuantity] = useState(1);

//   // =====================================================
//   // SESSION
//   // =====================================================

//   const getSessionId = useCallback(() => {
//     let sessionId = localStorage.getItem("cartSessionId");

//     if (!sessionId) {
//       sessionId = "cart-" + Date.now() + "-" + Math.random().toString(36).substring(2, 10);
//       localStorage.setItem("cartSessionId", sessionId);
//     }

//     return sessionId;
//   }, []);

//   // =====================================================
//   // FETCH CART
//   // =====================================================

//   const fetchCartItems = useCallback(async () => {
//     try {
//       const sessionId = getSessionId();
//       const { data } = await api.get(`/cart/${sessionId}`);

//       const quantities = {};
//       data.items?.forEach((item) => {
//         quantities[item.productId] = item.quantity;
//       });

//       setCartItems(quantities);

//       // If this product is in cart, set the quantity
//       if (id && quantities[id]) {
//         setQuantity(quantities[id]);
//       }
//     } catch (error) {
//       if (error.response?.status === 404) {
//         setCartItems({});
//         return;
//       }
//       console.error("Failed to load cart:", error);
//     }
//   }, [getSessionId, id]);

//   // =====================================================
//   // LOAD CART ON PAGE LOAD
//   // =====================================================

//   useEffect(() => {
//     fetchCartItems();
//   }, [fetchCartItems]);

//   // =====================================================
//   // CART UPDATE LISTENER
//   // =====================================================

//   useEffect(() => {
//     const handleCartUpdated = () => {
//       fetchCartItems();
//     };

//     window.addEventListener("cartUpdated", handleCartUpdated);

//     return () => {
//       window.removeEventListener("cartUpdated", handleCartUpdated);
//     };
//   }, [fetchCartItems]);

//   // =====================================================
//   // LOAD PRODUCT
//   // =====================================================

//   useEffect(() => {
//     loadProduct();
//   }, [id]);

//   useEffect(() => {
//     if (!loading && product) {
//       setTimeout(() => setIsVisible(true), 100);
//     }
//   }, [loading, product]);

//   const loadProduct = async () => {
//     setLoading(true);
//     try {
//       const { data } = await api.get(`/products/${id}`);
//       setProduct(data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =====================================================
//   // CHECK IF PRODUCT IS FRESH ITEMS CATEGORY
//   // =====================================================

//   const isFreshItemsCategory = (product) => {
//     if (!product) return false;
//     const category = String(product.category || "").trim().toLowerCase();
//     return category.includes("fresh items - seasonal fruits & flowers") ||
//            category.includes("fresh items") ||
//            category.includes("seasonal fruits");
//   };

//   // =====================================================
//   // CHECK IF PRODUCT IS FLOWER
//   // =====================================================

//   const isFlowerProduct = (product) => {
//     if (!product) return false;
//     const category = String(product.category || "").trim().toLowerCase();
//     return category.includes("flower") ||
//       category.includes("fresh items - seasonal fruits & flowers");
//   };

//   // =====================================================
//   // ADD TO CART
//   // =====================================================

//   const addToCart = async () => {
//     if (!product) return;

//     try {
//       setCartLoading(true);
//       const sessionId = getSessionId();

//       const response = await api.post("/cart/add", {
//         sessionId,
//         productId: product.id,
//         quantity: quantity,
//       });

//       if (response.status === 200 || response.status === 201) {
//         setCartItems((prev) => ({
//           ...prev,
//           [product.id]: (prev[product.id] || 0) + quantity,
//         }));
//         window.dispatchEvent(new Event("cartUpdated"));
//       }
//     } catch (error) {
//       console.error("Add to cart error:", error);
//     } finally {
//       setCartLoading(false);
//     }
//   };

//   // =====================================================
//   // UPDATE CART QUANTITY
//   // =====================================================

//   const updateCartQuantity = async (newQuantity) => {
//     if (!product) return;

//     if (newQuantity < 1) {
//       await removeFromCart();
//       return;
//     }

//     try {
//       setCartLoading(true);
//       const sessionId = getSessionId();

//       await api.put(`/cart/${sessionId}/${product.id}`, {
//         quantity: newQuantity,
//       });

//       setCartItems((prev) => ({
//         ...prev,
//         [product.id]: newQuantity,
//       }));
//       setQuantity(newQuantity);
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (error) {
//       console.error("Update cart error:", error);
//     } finally {
//       setCartLoading(false);
//     }
//   };

//   // =====================================================
//   // REMOVE FROM CART
//   // =====================================================

//   const removeFromCart = async () => {
//     if (!product) return;

//     try {
//       setCartLoading(true);
//       const sessionId = getSessionId();

//       await api.delete(`/cart/${sessionId}/${product.id}`);

//       setCartItems((prev) => {
//         const updated = { ...prev };
//         delete updated[product.id];
//         return updated;
//       });
//       setQuantity(1);
//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (error) {
//       console.error("Remove cart error:", error);
//     } finally {
//       setCartLoading(false);
//     }
//   };

//   // =====================================================
//   // HANDLE QUANTITY CHANGE
//   // =====================================================

//   const handleQuantityChange = (e) => {
//     const val = parseInt(e.target.value);
//     if (val > 0) {
//       setQuantity(val);
//     }
//   };

//   const incrementQuantity = () => {
//     setQuantity(prev => prev + 1);
//   };

//   const decrementQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(prev => prev - 1);
//     }
//   };

//   const stores = [
//     {
//       name: "Spicelands",
//       address: "Kaiserstraße 60, 60329 Frankfurt am Main, Germany",
//       lat: 50.1088,
//       lng: 8.6698,
//       logo: logo4,
//     },
//     {
//       name: "Jaffna Basar",
//       address: "Kaiserstraße 49, 60329 Frankfurt am Main, Germany",
//       lat: 50.1086,
//       lng: 8.6695,
//       logo: logo3,
//     },
//     {
//       name: "Kabil Kiosk",
//       address: "60327 Frankfurt am Main, Germany",
//       lat: 50.1049,
//       lng: 8.6518,
//       logo: logo2,
//     },
//     {
//       name: "Transfood Düsseldorf",
//       address: "Weg 40, 65451 Kelsterbach, Germany",
//       lat: 50.0607,
//       lng: 8.5297,
//       logo: logo1,
//     },
//   ];

//   const calculateDiscountedPrice = (price, discountPercent) => {
//     if (discountPercent && Number(discountPercent) > 0) {
//       return price - (price * Number(discountPercent)) / 100;
//     }
//     return price;
//   };

//   // Simplified: Only "Fresh Items - Seasonal Fruits & Flowers" shows "Fruits & Flowers", everything else shows "Ingredients"
//   const getIngredientLabel = () => {
//     if (!product) return "Ingredients";
//     if (product.category === "Fresh Items - Seasonal Fruits & Flowers") return "Fruits & Flowers";
//     return "Ingredients";
//   };

//   const getIngredientTitle = () => {
//     if (!product) return "Key Ingredients";
//     if (product.category === "Fresh Items - Seasonal Fruits & Flowers") return "Seasonal Fruits & Flowers";
//     return "Key Ingredients";
//   };

//   const getIngredientSubtitle = () => {
//     if (!product) return "Discover the wholesome ingredients in this product";
//     if (product.category === "Fresh Items - Seasonal Fruits & Flowers") {
//       return "Explore our seasonal collection of fresh fruits and flowers";
//     }
//     return "Discover the wholesome ingredients in this product";
//   };

//   if (loading) {
//     return (
//       <PublicLayout>
//         <div className="pdt-loading">
//           <div className="pdt-loading-spinner" />
//           <p>Loading product details...</p>
//         </div>
//       </PublicLayout>
//     );
//   }

//   if (!product) {
//     return (
//       <PublicLayout>
//         <div className="pdt-error">
//           <div className="pdt-error-content">
//             <div className="pdt-error-thread" />
//             <h2>Product Not Found</h2>
//             <p>The product you're looking for doesn't exist or has been removed.</p>
//             <Link to="/products" className="pdt-error-btn">
//               <span>Browse Products</span>
//               <span>→</span>
//             </Link>
//           </div>
//         </div>
//       </PublicLayout>
//     );
//   }

//   const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercent);
//   const hasDiscount = product.discountPercent && Number(product.discountPercent) > 0;
//   const hasIngredients = product.ingredients && Array.isArray(product.ingredients) && product.ingredients.length > 0;
//   const isFlower = isFlowerProduct(product);
//   const isFresh = isFreshItemsCategory(product);
//   const isInCart = cartItems[product.id] > 0;
//   const cartQuantity = cartItems[product.id] || 0;

//   // =====================================================
//   // QUALITY ITEMS BASED ON CATEGORY
//   // =====================================================

//   const getQualityItems = () => {
//     // For Fresh Items category - show "Imported from India" instead of "Chemical Free"
//     if (isFresh) {
//       return [
//         { dot: "pdt-q-green", label: "Certified Organic" },
//         { dot: "pdt-q-teal", label: "Imported from India" },
//         { dot: "pdt-q-blue", label: "Lab Tested" },
//         { dot: "pdt-q-amber", label: "Premium Quality" },
//       ];
//     }
    
//     // For all other categories - show "Chemical Free"
//     return [
//       { dot: "pdt-q-green", label: "Certified Organic" },
//       { dot: "pdt-q-teal", label: "Chemical Free" },
//       { dot: "pdt-q-blue", label: "Lab Tested" },
//       { dot: "pdt-q-amber", label: "Premium Quality" },
//     ];
//   };

//   const qualityItems = getQualityItems();

//   return (
//     <PublicLayout>
//       <div className={`pdt-page ${isVisible ? "pdt-visible" : ""}`}>
//         {/* Top Navigation */}
//         <div className="pdt-top-nav">
//           <div className="pdt-top-nav-inner">
//             <button onClick={() => navigate(-1)} className="pdt-nav-back">
//               <span>←</span>
//               <span>Back</span>
//             </button>
//             <Link to="/products" className="pdt-nav-all">
//               <span>All Products</span>
//               <span>→</span>
//             </Link>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="pdt-container">
//           {/* Product Hero */}
//           <div className="pdt-hero">
//             <div className="pdt-hero-image-col">
//               <div className="pdt-image-frame">
//                 <img
//                   src={`https://a4agroup.eu${product.image}`}
//                   alt={product.title}
//                   className="pdt-image"
//                 />
//                 <div className="pdt-image-overlay" />
//                 {hasDiscount && (
//                   <div className="pdt-badge pdt-badge-sale">
//                     <span>{product.discountPercent}% OFF</span>
//                   </div>
//                 )}
//                 {product.featured && !hasDiscount && (
//                   <div className="pdt-badge pdt-badge-featured">
//                     <span>Featured</span>
//                   </div>
//                 )}
//                 {/* {isFlower && (
//                   <div className="pdt-badge pdt-badge-flower">
//                     <span>🌸 Fresh Flower</span>
//                   </div>
//                 )}
//                 {isFresh && !isFlower && (
//                   <div className="pdt-badge pdt-badge-fresh">
//                     <span>🌿 Fresh Produce</span>
//                   </div>
//                 )} */}
//               </div>
//             </div>

//             <div className="pdt-hero-info-col">
//               <div className="pdt-info-card">
//                 <div className="pdt-info-card-inner">
//                   <div className="pdt-category-row">
//                     <span className="pdt-category-tag">{product.category}</span>
//                     {/* {isFlower && (
//                       <span className="pdt-category-tag pdt-tag-flower">
//                         🌸 Seasonal
//                       </span>
//                     )}
//                     {isFresh && !isFlower && (
//                       <span className="pdt-category-tag pdt-tag-fresh">
//                         🌿 Fresh
//                       </span>
//                     )} */}
//                   </div>
//                   <h1 className="pdt-title">{product.title}</h1>
//                   <p className="pdt-description">{product.description}</p>
//                   <div className="pdt-price-block">
//                     <span className="pdt-price-current">€{Math.round(discountedPrice)}</span>
//                     {hasDiscount && (
//                       <>
//                         <span className="pdt-price-original">€{product.price}</span>
//                         <span className="pdt-price-save">Save {product.discountPercent}%</span>
//                       </>
//                     )}
//                   </div>

//                   {/* =========================================
//                       CART SECTION - ONLY FOR FLOWERS
//                   ========================================= */}

//                   {isFlower && (
//                     <div className="pdt-cart-section">
//                       {!isInCart ? (
//                         // Add to Cart
//                         <div className="pdt-cart-add">
//                           <div className="pdt-quantity-selector">
//                             <button
//                               type="button"
//                               onClick={decrementQuantity}
//                               disabled={quantity <= 1 || cartLoading}
//                               aria-label="Decrease quantity"
//                             >
//                               −
//                             </button>
//                             <input
//                               type="number"
//                               min="1"
//                               value={quantity}
//                               onChange={handleQuantityChange}
//                               disabled={cartLoading}
//                               aria-label="Quantity"
//                             />
//                             <button
//                               type="button"
//                               onClick={incrementQuantity}
//                               disabled={cartLoading}
//                               aria-label="Increase quantity"
//                             >
//                               +
//                             </button>
//                           </div>
//                           <button
//                             type="button"
//                             className="pdt-add-cart-btn"
//                             onClick={addToCart}
//                             disabled={cartLoading}
//                           >
//                             {cartLoading ? "Adding..." : "Add to Cart"}
//                           </button>
//                         </div>
//                       ) : (
//                         // Update Cart
//                         <div className="pdt-cart-update">
//                           <div className="pdt-cart-status">
//                             <span className="pdt-cart-check">✓</span>
//                             <span>In Cart ({cartQuantity})</span>
//                           </div>
//                           <div className="pdt-cart-actions">
//                             <div className="pdt-quantity-selector">
//                               <button
//                                 type="button"
//                                 onClick={() => updateCartQuantity(cartQuantity - 1)}
//                                 disabled={cartLoading || cartQuantity <= 1}
//                                 aria-label="Decrease quantity"
//                               >
//                                 −
//                               </button>
//                               <span className="pdt-quantity-display">{cartQuantity}</span>
//                               <button
//                                 type="button"
//                                 onClick={() => updateCartQuantity(cartQuantity + 1)}
//                                 disabled={cartLoading}
//                                 aria-label="Increase quantity"
//                               >
//                                 +
//                               </button>
//                             </div>
//                             <button
//                               type="button"
//                               className="pdt-remove-cart-btn"
//                               onClick={removeFromCart}
//                               disabled={cartLoading}
//                             >
//                               Remove
//                             </button>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   )}

//                   <div className="pdt-qualities">
//                     {qualityItems.map((item, index) => (
//                       <div key={index} className="pdt-quality-item">
//                         <span className={`pdt-quality-dot ${item.dot}`} />
//                         <span>{item.label}</span>
//                       </div>
//                     ))}
//                   </div>

//                   <button
//                     className="pdt-enquire-btn"
//                     onClick={() => navigate("/contact")}
//                   >
//                     <span>Enquire About This Product</span>
//                     <span>→</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Product Details Section */}
//           <div className="pdt-section">
//             <div className="pdt-section-card">
//               <div className="pdt-section-head">
//                 <div className="pdt-section-thread" />
//                 <span className="pdt-section-eyebrow">Product Information</span>
//               </div>
//               <h2 className="pdt-section-title">Details</h2>
//               <div className="pdt-specs-grid">
//                 <div className="pdt-spec-item">
//                   <span className="pdt-spec-label">Category</span>
//                   <span className="pdt-spec-value">{product.category}</span>
//                 </div>
//                 <div className="pdt-spec-item">
//                   <span className="pdt-spec-label">Price</span>
//                   <span className="pdt-spec-value">
//                     €{Math.round(discountedPrice)}
//                     {hasDiscount && (
//                       <span className="pdt-spec-original"> (was €{product.price})</span>
//                     )}
//                   </span>
//                 </div>
//                 <div className="pdt-spec-item">
//                   <span className="pdt-spec-label">Quality Standard</span>
//                   <span className="pdt-spec-value">Premium Organic</span>
//                 </div>
//                 <div className="pdt-spec-item">
//                   <span className="pdt-spec-label">Source</span>
//                   <span className="pdt-spec-value">
//                     {isFresh ? "Imported from India" : "Certified Farm Partners"}
//                   </span>
//                 </div>
//                 <div className="pdt-spec-item">
//                   <span className="pdt-spec-label">Processing</span>
//                   <span className="pdt-spec-value">Chemical Free</span>
//                 </div>
//                 <div className="pdt-spec-item">
//                   <span className="pdt-spec-label">Testing</span>
//                   <span className="pdt-spec-value">Laboratory Verified</span>
//                 </div>
//                 {isFlower && (
//                   <div className="pdt-spec-item">
//                     <span className="pdt-spec-label">Type</span>
//                     <span className="pdt-spec-value"> Seasonal Fresh Flower</span>
//                   </div>
//                 )}
//                 {isFresh && !isFlower && (
//                   <div className="pdt-spec-item">
//                     <span className="pdt-spec-label">Origin</span>
//                     <span className="pdt-spec-value">🌿 Imported from India</span>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Store Availability Section */}
//           <div className="pdt-section">
//             <div className="pdt-section-card">
//               <div className="pdt-section-head">
//                 <div className="pdt-section-thread pdt-thread-blue" />
//                 <span className="pdt-section-eyebrow">Where to Find</span>
//               </div>
//               <h2 className="pdt-section-title">Available At</h2>
//               <p className="pdt-section-sub">Find this product at our partner stores across Germany</p>
//               <div className="pdt-stores-grid">
//                 {stores.map((store, index) => (
//                   <div key={index} className="pdt-store-card">
//                     <div className="pdt-store-logo-wrap">
//                       <img
//                         src={store.logo}
//                         alt={store.name}
//                         className="pdt-store-logo"
//                         onError={(e) => { e.target.style.display = "none"; }}
//                       />
//                     </div>
//                     <div className="pdt-store-info">
//                       <h4 className="pdt-store-name">{store.name}</h4>
//                       <p className="pdt-store-address">{store.address}</p>
//                       <span className="pdt-store-stock">
//                         <span className="pdt-store-stock-dot" />
//                         In Stock
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Map Section */}
//           <div className="pdt-section">
//             <div className="pdt-section-card">
//               <div className="pdt-section-head">
//                 <div className="pdt-section-thread pdt-thread-emerald" />
//                 <span className="pdt-section-eyebrow">Store Locations</span>
//               </div>
//               <h2 className="pdt-section-title">Find Us on Map</h2>
//               <div className="pdt-map-frame">
//                 <StoreMap stores={stores} />
//               </div>
//             </div>
//           </div>

//           {/* Ingredients / Types Section - Below Map */}
//           {hasIngredients && (
//             <div className="pdt-section">
//               <div className="pdt-section-card">
//                 <div className="pdt-section-head">
//                   <div className="pdt-section-thread pdt-thread-gold" />
//                   <span className="pdt-section-eyebrow">{getIngredientLabel()}</span>
//                 </div>
//                 <h2 className="pdt-section-title">{getIngredientTitle()}</h2>
//                 <p className="pdt-section-sub">{getIngredientSubtitle()}</p>

//                 <div className="pdt-ingredients-grid">
//                   {product.ingredients.map((ingredient) => (
//                     <div key={ingredient.id || Math.random()} className="pdt-ingredient-card">
//                       {ingredient.image ? (
//                         <div className="pdt-ingredient-image-wrap">
//                           <img
//                             src={`https://a4agroup.eu${ingredient.image}`}
//                             alt={ingredient.title}
//                             className="pdt-ingredient-image"
//                             loading="lazy"
//                             onError={(e) => {
//                               e.target.style.display = "none";
//                               e.target.parentElement.style.display = "none";
//                             }}
//                           />
//                         </div>
//                       ) : (
//                         <div className="pdt-ingredient-image-wrap pdt-ingredient-placeholder">
//                           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
//                             <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
//                             <circle cx="8.5" cy="8.5" r="1.5" />
//                             <polyline points="21 15 16 10 5 21" />
//                           </svg>
//                         </div>
//                       )}
//                       <div className="pdt-ingredient-info">
//                         <h4 className="pdt-ingredient-name">{ingredient.title}</h4>
//                         {ingredient.description && (
//                           <p className="pdt-ingredient-description">{ingredient.description}</p>
//                         )}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Bottom CTA */}
//           <div className="pdt-bottom">
//             <div className="pdt-bottom-card">
//               <div className="pdt-bottom-text">
//                 <h3 className="pdt-bottom-title">Interested in this product?</h3>
//                 <p className="pdt-bottom-sub">Reach out to us for bulk orders, inquiries, or store availability near you.</p>
//               </div>
//               <button className="pdt-bottom-btn" onClick={() => navigate("/contact")}>
//                 <span>Enquire Now</span>
//                 <span>→</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </PublicLayout>
//   );
// }

// export default ProductDetails;

























import { useEffect, useState, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import StoreMap from "../components/StoreMap";
import PublicLayout from "../layouts/PublicLayout";
import "./ProductDetails.css";
import logo1 from "../assets/logo1.jpeg";
import logo2 from "../assets/logo2.jpeg";
import logo3 from "../assets/logo3.jpeg";
import logo4 from "../assets/logo4.jpeg";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // =====================================================
  // CART STATE
  // =====================================================

  const [cartItems, setCartItems] = useState({});
  const [cartLoading, setCartLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // =====================================================
  // SESSION
  // =====================================================

  const getSessionId = useCallback(() => {
    let sessionId = localStorage.getItem("cartSessionId");

    if (!sessionId) {
      sessionId = "cart-" + Date.now() + "-" + Math.random().toString(36).substring(2, 10);
      localStorage.setItem("cartSessionId", sessionId);
    }

    return sessionId;
  }, []);

  // =====================================================
  // FETCH CART
  // =====================================================

  const fetchCartItems = useCallback(async () => {
    try {
      const sessionId = getSessionId();
      const { data } = await api.get(`/cart/${sessionId}`);

      const quantities = {};
      data.items?.forEach((item) => {
        quantities[item.productId] = item.quantity;
      });

      setCartItems(quantities);

      // If this product is in cart, set the quantity
      if (id && quantities[id]) {
        setQuantity(quantities[id]);
      }
    } catch (error) {
      if (error.response?.status === 404) {
        setCartItems({});
        return;
      }
      console.error("Failed to load cart:", error);
    }
  }, [getSessionId, id]);

  // =====================================================
  // LOAD CART ON PAGE LOAD
  // =====================================================

  useEffect(() => {
    fetchCartItems();
  }, [fetchCartItems]);

  // =====================================================
  // CART UPDATE LISTENER
  // =====================================================

  useEffect(() => {
    const handleCartUpdated = () => {
      fetchCartItems();
    };

    window.addEventListener("cartUpdated", handleCartUpdated);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdated);
    };
  }, [fetchCartItems]);

  // =====================================================
  // LOAD PRODUCT
  // =====================================================

  useEffect(() => {
    loadProduct();
  }, [id]);

  useEffect(() => {
    if (!loading && product) {
      setTimeout(() => setIsVisible(true), 100);
    }
  }, [loading, product]);

  const loadProduct = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // CHECK IF PRODUCT IS FRESH ITEMS CATEGORY
  // =====================================================

  const isFreshItemsCategory = (product) => {
    if (!product) return false;
    const category = String(product.category || "").trim().toLowerCase();
    return category.includes("fresh items - seasonal fruits & flowers") ||
           category.includes("fresh items") ||
           category.includes("seasonal fruits");
  };

  // =====================================================
  // CHECK IF PRODUCT IS FLOWER
  // =====================================================

  const isFlowerProduct = (product) => {
    if (!product) return false;
    const category = String(product.category || "").trim().toLowerCase();
    return category.includes("flower") ||
      category.includes("fresh items - seasonal fruits & flowers");
  };

  // =====================================================
  // ADD TO CART - API INTEGRATION
  // =====================================================

  const addToCart = async () => {
    if (!product) return;

    try {
      setCartLoading(true);
      const sessionId = getSessionId();

      const response = await api.post("/cart/add", {
        sessionId,
        productId: product.id,
        quantity: quantity,
      });

      if (response.status === 200 || response.status === 201) {
        // Update local cart state
        setCartItems((prev) => ({
          ...prev,
          [product.id]: (prev[product.id] || 0) + quantity,
        }));
        
        // Dispatch event to update navbar cart count
        window.dispatchEvent(new Event("cartUpdated"));
      }
    } catch (error) {
      console.error("Add to cart error:", error);
    } finally {
      setCartLoading(false);
    }
  };

  // =====================================================
  // UPDATE CART QUANTITY - API INTEGRATION
  // =====================================================

  const updateCartQuantity = async (newQuantity) => {
    if (!product) return;

    if (newQuantity < 1) {
      await removeFromCart();
      return;
    }

    try {
      setCartLoading(true);
      const sessionId = getSessionId();

      const response = await api.put(`/cart/${sessionId}/${product.id}`, {
        quantity: newQuantity,
      });

      if (response.status === 200) {
        // Update local cart state
        setCartItems((prev) => ({
          ...prev,
          [product.id]: newQuantity,
        }));
        setQuantity(newQuantity);
        
        // Dispatch event to update navbar cart count
        window.dispatchEvent(new Event("cartUpdated"));
      }
    } catch (error) {
      console.error("Update cart error:", error);
    } finally {
      setCartLoading(false);
    }
  };

  // =====================================================
  // REMOVE FROM CART - API INTEGRATION
  // =====================================================

  const removeFromCart = async () => {
    if (!product) return;

    try {
      setCartLoading(true);
      const sessionId = getSessionId();

      const response = await api.delete(`/cart/${sessionId}/${product.id}`);

      if (response.status === 200) {
        // Remove from local cart state
        setCartItems((prev) => {
          const updated = { ...prev };
          delete updated[product.id];
          return updated;
        });
        setQuantity(1);
        
        // Dispatch event to update navbar cart count
        window.dispatchEvent(new Event("cartUpdated"));
      }
    } catch (error) {
      console.error("Remove cart error:", error);
    } finally {
      setCartLoading(false);
    }
  };

  // =====================================================
  // HANDLE QUANTITY CHANGE
  // =====================================================

  const handleQuantityChange = (e) => {
    const val = parseInt(e.target.value);
    if (val > 0) {
      setQuantity(val);
    }
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // =====================================================
  // STORES DATA
  // =====================================================

  const stores = [
    {
      name: "Spicelands",
      address: "Kaiserstraße 60, 60329 Frankfurt am Main, Germany",
      lat: 50.1088,
      lng: 8.6698,
      logo: logo4,
    },
    {
      name: "Jaffna Basar",
      address: "Kaiserstraße 49, 60329 Frankfurt am Main, Germany",
      lat: 50.1086,
      lng: 8.6695,
      logo: logo3,
    },
    {
      name: "Kabil Kiosk",
      address: "60327 Frankfurt am Main, Germany",
      lat: 50.1049,
      lng: 8.6518,
      logo: logo2,
    },
    {
      name: "Transfood Düsseldorf",
      address: "Weg 40, 65451 Kelsterbach, Germany",
      lat: 50.0607,
      lng: 8.5297,
      logo: logo1,
    },
  ];

  // =====================================================
  // PRICE CALCULATIONS
  // =====================================================

  const calculateDiscountedPrice = (price, discountPercent) => {
    if (discountPercent && Number(discountPercent) > 0) {
      return price - (price * Number(discountPercent)) / 100;
    }
    return price;
  };

  // =====================================================
  // INGREDIENT LABELS
  // =====================================================

  const getIngredientLabel = () => {
    if (!product) return "Ingredients";
    if (product.category === "Fresh Items - Seasonal Fruits & Flowers") return "Fruits & Flowers";
    return "Ingredients";
  };

  const getIngredientTitle = () => {
    if (!product) return "Key Ingredients";
    if (product.category === "Fresh Items - Seasonal Fruits & Flowers") return "Seasonal Fruits & Flowers";
    return "Key Ingredients";
  };

  const getIngredientSubtitle = () => {
    if (!product) return "Discover the wholesome ingredients in this product";
    if (product.category === "Fresh Items - Seasonal Fruits & Flowers") {
      return "Explore our seasonal collection of fresh fruits and flowers";
    }
    return "Discover the wholesome ingredients in this product";
  };

  // =====================================================
  // QUALITY ITEMS BASED ON CATEGORY
  // =====================================================

  const getQualityItems = () => {
    // For Fresh Items category - show "Imported from India" instead of "Chemical Free"
    if (isFresh) {
      return [
        { dot: "pdt-q-green", label: "Certified Organic" },
        { dot: "pdt-q-teal", label: "Imported from India" },
        { dot: "pdt-q-blue", label: "Lab Tested" },
        { dot: "pdt-q-amber", label: "Premium Quality" },
      ];
    }
    
    // For all other categories - show "Chemical Free"
    return [
      { dot: "pdt-q-green", label: "Certified Organic" },
      { dot: "pdt-q-teal", label: "Chemical Free" },
      { dot: "pdt-q-blue", label: "Lab Tested" },
      { dot: "pdt-q-amber", label: "Premium Quality" },
    ];
  };

  // =====================================================
  // LOADING STATE
  // =====================================================

  if (loading) {
    return (
      <PublicLayout>
        <div className="pdt-loading">
          <div className="pdt-loading-spinner" />
          <p>Loading product details...</p>
        </div>
      </PublicLayout>
    );
  }

  // =====================================================
  // PRODUCT NOT FOUND
  // =====================================================

  if (!product) {
    return (
      <PublicLayout>
        <div className="pdt-error">
          <div className="pdt-error-content">
            <div className="pdt-error-thread" />
            <h2>Product Not Found</h2>
            <p>The product you're looking for doesn't exist or has been removed.</p>
            <Link to="/products" className="pdt-error-btn">
              <span>Browse Products</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </PublicLayout>
    );
  }

  // =====================================================
  // COMPUTED VALUES
  // =====================================================

  const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercent);
  const hasDiscount = product.discountPercent && Number(product.discountPercent) > 0;
  const hasIngredients = product.ingredients && Array.isArray(product.ingredients) && product.ingredients.length > 0;
  const isFlower = isFlowerProduct(product);
  const isFresh = isFreshItemsCategory(product);
  const isInCart = cartItems[product.id] > 0;
  const cartQuantity = cartItems[product.id] || 0;
  const qualityItems = getQualityItems();

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <PublicLayout>
      <div className={`pdt-page ${isVisible ? "pdt-visible" : ""}`}>
        {/* =============================================
            TOP NAVIGATION
        ============================================= */}
        
        <div className="pdt-top-nav">
          <div className="pdt-top-nav-inner">
            <button onClick={() => navigate(-1)} className="pdt-nav-back">
              <span>←</span>
              <span>Back</span>
            </button>
            <Link to="/products" className="pdt-nav-all">
              <span>All Products</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* =============================================
            MAIN CONTENT
        ============================================= */}
        
        <div className="pdt-container">
          {/* =============================================
              PRODUCT HERO
          ============================================= */}
          
          <div className="pdt-hero">
            {/* Image Column */}
            <div className="pdt-hero-image-col">
              <div className="pdt-image-frame">
                <img
                  src={`https://a4agroup.eu${product.image}`}
                  alt={product.title}
                  className="pdt-image"
                />
                <div className="pdt-image-overlay" />
                
                {/* Badges */}
                {hasDiscount && (
                  <div className="pdt-badge pdt-badge-sale">
                    <span>{product.discountPercent}% OFF</span>
                  </div>
                )}
                {product.featured && !hasDiscount && (
                  <div className="pdt-badge pdt-badge-featured">
                    <span>Featured</span>
                  </div>
                )}
                {/* {isFlower && (
                  <div className="pdt-badge pdt-badge-flower">
                    <span>🌸 Fresh Flower</span>
                  </div>
                )}
                {isFresh && !isFlower && (
                  <div className="pdt-badge pdt-badge-fresh">
                    <span>🌿 Fresh Produce</span>
                  </div>
                )} */}
              </div>
            </div>

            {/* Info Column */}
            <div className="pdt-hero-info-col">
              <div className="pdt-info-card">
                <div className="pdt-info-card-inner">
                  {/* Category Tags */}
                  <div className="pdt-category-row">
                    <span className="pdt-category-tag">{product.category}</span>
                    {/* {isFlower && (
                      <span className="pdt-category-tag pdt-tag-flower">
                        🌸 Seasonal
                      </span>
                    )}
                    {isFresh && !isFlower && (
                      <span className="pdt-category-tag pdt-tag-fresh">
                        🌿 Fresh
                      </span>
                    )} */}
                  </div>

                  {/* Title */}
                  <h1 className="pdt-title">{product.title}</h1>

                  {/* Description */}
                  <p className="pdt-description">{product.description}</p>

                  {/* Pricing */}
                  <div className="pdt-price-block">
                    <span className="pdt-price-current">€{Math.round(discountedPrice)}</span>
                    {hasDiscount && (
                      <>
                        <span className="pdt-price-original">€{product.price}</span>
                        <span className="pdt-price-save">Save {product.discountPercent}%</span>
                      </>
                    )}
                  </div>

                  {/* =========================================
                      CART SECTION - ONLY FOR FLOWERS
                      WITH FULL API INTEGRATION
                  ========================================= */}

                  {isFlower && (
                    <div className="pdt-cart-section">
                      {!isInCart ? (
                        // Add to Cart
                        <div className="pdt-cart-add">
                          <div className="pdt-quantity-selector">
                            <button
                              type="button"
                              onClick={decrementQuantity}
                              disabled={quantity <= 1 || cartLoading}
                              aria-label="Decrease quantity"
                            >
                              −
                            </button>
                            <input
                              type="number"
                              min="1"
                              value={quantity}
                              onChange={handleQuantityChange}
                              disabled={cartLoading}
                              aria-label="Quantity"
                            />
                            <button
                              type="button"
                              onClick={incrementQuantity}
                              disabled={cartLoading}
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                          <button
                            type="button"
                            className="pdt-add-cart-btn"
                            onClick={addToCart}
                            disabled={cartLoading}
                          >
                            {cartLoading ? "Adding..." : "Add to Cart"}
                          </button>
                        </div>
                      ) : (
                        // Update Cart
                        <div className="pdt-cart-update">
                          <div className="pdt-cart-status">
                            <span className="pdt-cart-check">✓</span>
                            <span>In Cart ({cartQuantity})</span>
                          </div>
                          <div className="pdt-cart-actions">
                            <div className="pdt-quantity-selector">
                              <button
                                type="button"
                                onClick={() => updateCartQuantity(cartQuantity - 1)}
                                disabled={cartLoading || cartQuantity <= 1}
                                aria-label="Decrease quantity"
                              >
                                −
                              </button>
                              <span className="pdt-quantity-display">{cartQuantity}</span>
                              <button
                                type="button"
                                onClick={() => updateCartQuantity(cartQuantity + 1)}
                                disabled={cartLoading}
                                aria-label="Increase quantity"
                              >
                                +
                              </button>
                            </div>
                            <button
                              type="button"
                              className="pdt-remove-cart-btn"
                              onClick={removeFromCart}
                              disabled={cartLoading}
                            >
                              {cartLoading ? "Removing..." : "Remove"}
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Quality Items */}
                  <div className="pdt-qualities">
                    {qualityItems.map((item, index) => (
                      <div key={index} className="pdt-quality-item">
                        <span className={`pdt-quality-dot ${item.dot}`} />
                        <span>{item.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Enquire Button - Navigates to Contact */}
                  <button
                    className="pdt-enquire-btn"
                    onClick={() => navigate("/contact")}
                  >
                    <span>Enquire About This Product</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* =============================================
              PRODUCT DETAILS SECTION
          ============================================= */}
          
          <div className="pdt-section">
            <div className="pdt-section-card">
              <div className="pdt-section-head">
                <div className="pdt-section-thread" />
                <span className="pdt-section-eyebrow">Product Information</span>
              </div>
              <h2 className="pdt-section-title">Details</h2>
              <div className="pdt-specs-grid">
                <div className="pdt-spec-item">
                  <span className="pdt-spec-label">Category</span>
                  <span className="pdt-spec-value">{product.category}</span>
                </div>
                <div className="pdt-spec-item">
                  <span className="pdt-spec-label">Price</span>
                  <span className="pdt-spec-value">
                    €{Math.round(discountedPrice)}
                    {hasDiscount && (
                      <span className="pdt-spec-original"> (was €{product.price})</span>
                    )}
                  </span>
                </div>
                <div className="pdt-spec-item">
                  <span className="pdt-spec-label">Quality Standard</span>
                  <span className="pdt-spec-value">Premium Organic</span>
                </div>
                <div className="pdt-spec-item">
                  <span className="pdt-spec-label">Source</span>
                  <span className="pdt-spec-value">
                    {isFresh ? "Imported from India" : "Certified Farm Partners"}
                  </span>
                </div>
                <div className="pdt-spec-item">
                  <span className="pdt-spec-label">Processing</span>
                  <span className="pdt-spec-value">Chemical Free</span>
                </div>
                <div className="pdt-spec-item">
                  <span className="pdt-spec-label">Testing</span>
                  <span className="pdt-spec-value">Laboratory Verified</span>
                </div>
                {isFlower && (
                  <div className="pdt-spec-item">
                    <span className="pdt-spec-label">Type</span>
                    <span className="pdt-spec-value"> Seasonal Fresh Flower</span>
                  </div>
                )}
                {isFresh && !isFlower && (
                  <div className="pdt-spec-item">
                    <span className="pdt-spec-label">Origin</span>
                    <span className="pdt-spec-value"> Imported from India</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* =============================================
              STORE AVAILABILITY SECTION
          ============================================= */}
          
          <div className="pdt-section">
            <div className="pdt-section-card">
              <div className="pdt-section-head">
                <div className="pdt-section-thread pdt-thread-blue" />
                <span className="pdt-section-eyebrow">Where to Find</span>
              </div>
              <h2 className="pdt-section-title">Available At</h2>
              <p className="pdt-section-sub">Find this product at our partner stores across Germany</p>
              <div className="pdt-stores-grid">
                {stores.map((store, index) => (
                  <div key={index} className="pdt-store-card">
                    <div className="pdt-store-logo-wrap">
                      <img
                        src={store.logo}
                        alt={store.name}
                        className="pdt-store-logo"
                        onError={(e) => { e.target.style.display = "none"; }}
                      />
                    </div>
                    <div className="pdt-store-info">
                      <h4 className="pdt-store-name">{store.name}</h4>
                      <p className="pdt-store-address">{store.address}</p>
                      <span className="pdt-store-stock">
                        <span className="pdt-store-stock-dot" />
                        In Stock
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =============================================
              MAP SECTION
          ============================================= */}
          
          <div className="pdt-section">
            <div className="pdt-section-card">
              <div className="pdt-section-head">
                <div className="pdt-section-thread pdt-thread-emerald" />
                <span className="pdt-section-eyebrow">Store Locations</span>
              </div>
              <h2 className="pdt-section-title">Find Us on Map</h2>
              <div className="pdt-map-frame">
                <StoreMap stores={stores} />
              </div>
            </div>
          </div>

          {/* =============================================
              INGREDIENTS SECTION
          ============================================= */}
          
          {hasIngredients && (
            <div className="pdt-section">
              <div className="pdt-section-card">
                <div className="pdt-section-head">
                  <div className="pdt-section-thread pdt-thread-gold" />
                  <span className="pdt-section-eyebrow">{getIngredientLabel()}</span>
                </div>
                <h2 className="pdt-section-title">{getIngredientTitle()}</h2>
                <p className="pdt-section-sub">{getIngredientSubtitle()}</p>

                <div className="pdt-ingredients-grid">
                  {product.ingredients.map((ingredient) => (
                    <div key={ingredient.id || Math.random()} className="pdt-ingredient-card">
                      {ingredient.image ? (
                        <div className="pdt-ingredient-image-wrap">
                          <img
                            src={`https://a4agroup.eu${ingredient.image}`}
                            alt={ingredient.title}
                            className="pdt-ingredient-image"
                            loading="lazy"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.parentElement.style.display = "none";
                            }}
                          />
                        </div>
                      ) : (
                        <div className="pdt-ingredient-image-wrap pdt-ingredient-placeholder">
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <polyline points="21 15 16 10 5 21" />
                          </svg>
                        </div>
                      )}
                      <div className="pdt-ingredient-info">
                        <h4 className="pdt-ingredient-name">{ingredient.title}</h4>
                        {ingredient.description && (
                          <p className="pdt-ingredient-description">{ingredient.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* =============================================
              BOTTOM CTA
          ============================================= */}
          
          <div className="pdt-bottom">
            <div className="pdt-bottom-card">
              <div className="pdt-bottom-text">
                <h3 className="pdt-bottom-title">Interested in this product?</h3>
                <p className="pdt-bottom-sub">Reach out to us for bulk orders, inquiries, or store availability near you.</p>
              </div>
              <button className="pdt-bottom-btn" onClick={() => navigate("/contact")}>
                <span>Enquire Now</span>
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}

export default ProductDetails;