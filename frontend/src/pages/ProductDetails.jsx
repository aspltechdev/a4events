// // // import { useEffect, useState } from 'react';
// // // import { useParams } from 'react-router-dom';
// // // import api from '../services/api';

// // // function ProductDetails() {
// // //   const { id } = useParams();
// // //   const [product, setProduct] = useState(null);

// // //   useEffect(() => {
// // //     loadProduct();
// // //   }, []);

// // //   const loadProduct = async () => {
// // //     const { data } = await api.get(`/products/${id}`);
// // //     setProduct(data);
// // //   };

// // //   if (!product) return <h2>Loading...</h2>;

// // // //   return (
// // // //     <div>
// // // //       <h1>{product.title}</h1>
// // // //       <p>{product.description}</p>
// // // //       <p>₹{product.price}</p>

// // // //       {product.image && (
// // // //         <img
// // // //           src={`http://localhost:5000${product.image}`}
// // // //           alt={product.title}
// // // //           width="300"
// // // //         />
// // // //       )}
// // // //     </div>
// // // //   );
// // // return (
// // //   <div style={{ padding: '20px' }}>
// // //     <Link to="/products">
// // //       ← Back
// // //     </Link>

// // //     <h1>{product.title}</h1>

// // //     {product.image && (
// // //       <img
// // //         src={`http://localhost:5000${product.image}`}
// // //         alt={product.title}
// // //         style={{
// // //           width: '500px',
// // //           maxWidth: '100%'
// // //         }}
// // //       />
// // //     )}

// // //     <p>{product.description}</p>

// // //     <h2>₹{product.price}</h2>

// // //     <button>
// // //       Enquire Now
// // //     </button>
// // //   </div>
// // // );
// // // }

// // // export default ProductDetails;


// // // import { useEffect, useState } from 'react';
// // // import { useParams, Link } from 'react-router-dom';
// // // import api from '../services/api';
// // // import InquiryForm from '../components/InquiryForm';
// // // function ProductDetails() {
// // //   const { id } = useParams();
// // //   const [product, setProduct] = useState(null);

// // //   useEffect(() => {
// // //     loadProduct();
// // //   }, []);

// // //   const loadProduct = async () => {
// // //     try {
// // //       const { data } = await api.get(`/products/${id}`);
// // //       setProduct(data);
// // //     } catch (error) {
// // //       console.error(error);
// // //     }
// // //   };

// // //   if (!product) return <h2>Loading...</h2>;

// // //   return (
// // //     <div style={{ padding: '20px' }}>
// // //       <Link to="/products">
// // //         ← Back
// // //       </Link>

// // //       <h1>{product.title}</h1>

// // //       {product.image && (
// // //         <img
// // //           src={`http://localhost:5000${product.image}`}
// // //           alt={product.title}
// // //           style={{
// // //             width: '500px',
// // //             maxWidth: '100%'
// // //           }}
// // //         />
// // //       )}

// // //       <p>{product.description}</p>

// // //       <h2>₹{product.price}</h2>
// // // {/* 
// // //       <button>
// // //         Enquire Now
// // //       </button> */}
// // //       <InquiryForm productId={product.id} />
// // //     </div>
// // //   );
// // // }

// // // export default ProductDetails;

// // // import { useEffect, useState } from "react";
// // // import { useParams, Link } from "react-router-dom";
// // // import api from "../services/api";
// // // import InquiryForm from "../components/InquiryForm";
// // // import "./ProductDetails.css";

// // // function ProductDetails() {
// // //   const { id } = useParams();

// // //   const [product, setProduct] = useState(null);

// // //   useEffect(() => {
// // //     loadProduct();
// // //   }, []);

// // //   const loadProduct = async () => {
// // //     try {
// // //       const { data } = await api.get(`/products/${id}`);
// // //       setProduct(data);
// // //     } catch (error) {
// // //       console.error(error);
// // //     }
// // //   };

// // //   if (!product) {
// // //     return <h2>Loading...</h2>;
// // //   }

// // //   const firstLocation =
// // //     product.locations?.[0];

// // //   return (
// // //     <div className="a4-product-details">

// // //       <div className="a4-product-details-container">

// // //         <Link
// // //           to="/products"
// // //           className="a4-back-link"
// // //         >
// // //           ← Back to Products
// // //         </Link>

// // //         <div className="a4-product-layout">

// // //           <div className="a4-product-image-section">

// // //             <img
// // //               src={`http://localhost:5000${product.image}`}
// // //               alt={product.title}
// // //               className="a4-product-main-image"
// // //             />

// // //           </div>

// // //           <div className="a4-product-info-section">

// // //             <h1 className="a4-product-title">
// // //               {product.title}
// // //             </h1>

// // //             <p className="a4-product-description">
// // //               {product.description}
// // //             </p>

// // //             <div className="a4-product-price">
// // //               ₹{product.price}
// // //             </div>

// // //           </div>

// // //         </div>

// // //         {/* Available Locations */}

// // //         {product.locations?.length > 0 && (
// // //           <>
// // //             <div className="a4-location-header">
// // //               <h2>Available At</h2>
// // //             </div>

// // //             <div className="a4-location-grid">

// // //               {product.locations.map(
// // //                 (location, index) => (
// // //                   <div
// // //                     key={index}
// // //                     className="a4-location-card"
// // //                   >
// // //                     <h4>{location.name}</h4>

// // //                     <p>
// // //                       {location.address}
// // //                     </p>
// // //                   </div>
// // //                 )
// // //               )}

// // //             </div>
// // //           </>
// // //         )}

// // //         {/* Google Map */}

// // //         {firstLocation && (
// // //           <div className="a4-map-wrapper">

// // //             <iframe
// // //               title="Store Location"
// // //               width="100%"
// // //               height="450"
// // //               style={{
// // //                 border: 0,
// // //                 borderRadius: "24px",
// // //               }}
// // //               loading="lazy"
// // //               allowFullScreen
// // //               src={`https://maps.google.com/maps?q=${firstLocation.lat},${firstLocation.lng}&z=15&output=embed`}
// // //             />

// // //           </div>
// // //         )}

// // //         <div className="a4-inquiry-wrapper">
// // //           <InquiryForm
// // //             productId={product.id}
// // //           />
// // //         </div>

// // //       </div>

// // //     </div>
// // //   );
// // // }

// // // export default ProductDetails;




// // import { useEffect, useState } from "react";
// // import { useParams, Link } from "react-router-dom";
// // import api from "../services/api";
// // import InquiryForm from "../components/InquiryForm";
// // import "./ProductDetails.css";

// // function ProductDetails() {
// //   const { id } = useParams();

// //   const [product, setProduct] = useState(null);

// //   useEffect(() => {
// //     loadProduct();
// //   }, [id]);

// //   const loadProduct = async () => {
// //     try {
// //       const { data } = await api.get(`/products/${id}`);
// //       setProduct(data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   if (!product) {
// //     return (
// //       <div className="a4-product-loading">
// //         Loading...
// //       </div>
// //     );
// //   }

// //   return (
// //     <section className="a4-product-page">

// //       <div className="a4-product-container">

// //         <Link
// //           to="/products"
// //           className="a4-product-back"
// //         >
// //           ← Back to Products
// //         </Link>

// //         <div className="a4-product-hero">

// //           <div className="a4-product-image-col">

// //             <img
// //               src={`http://localhost:5000${product.image}`}
// //               alt={product.title}
// //               className="a4-product-image"
// //             />

// //           </div>

// //           <div className="a4-product-content-col">

// //             <span className="a4-product-badge">
// //               BEST SELLER
// //             </span>

// //             <h1 className="a4-product-title">
// //               {product.title}
// //             </h1>

// //             <div className="a4-product-price">
// //               ₹{product.price}
// //             </div>

// //             <p className="a4-product-description">
// //               {product.description}
// //             </p>

// //             <div className="a4-product-features">

// //               <div className="a4-feature-chip">
// //                 Freshly Prepared
// //               </div>

// //               <div className="a4-feature-chip">
// //                 Premium Quality
// //               </div>

// //               <div className="a4-feature-chip">
// //                 Available In Store
// //               </div>

// //             </div>

// //             <button className="a4-order-btn">
// //               Enquire Now
// //             </button>

// //           </div>

// //         </div>

// //         {/* Store Locations */}

// //         <div className="a4-stores-section">

// //           <h2 className="a4-section-title">
// //             Available At Our Stores
// //           </h2>

// //           <div className="a4-store-grid">

// //             <div className="a4-store-card">
// //               <h4>Akshayaa Bakery</h4>
// //               <p>Main Branch, Pondicherry</p>
// //             </div>

// //             <div className="a4-store-card">
// //               <h4>Akshayaa Bakery</h4>
// //               <p>Lawspet, Pondicherry</p>
// //             </div>

// //             <div className="a4-store-card">
// //               <h4>Akshayaa Bakery</h4>
// //               <p>Muthialpet, Pondicherry</p>
// //             </div>

// //           </div>

// //         </div>

// //         {/* Map */}

// //         <div className="a4-map-section">

// //           <h2 className="a4-section-title">
// //             Find Us
// //           </h2>

// //           <iframe
// //             title="Store Location"
// //             className="a4-map"
// //             src="https://maps.google.com/maps?q=Pondicherry&t=&z=13&ie=UTF8&iwloc=&output=embed"
// //           />

// //         </div>

// //         {/* Inquiry */}

// //         <div className="a4-inquiry-section">

// //           <h2 className="a4-section-title">
// //             Product Inquiry
// //           </h2>

// //           <InquiryForm productId={product.id} />

// //         </div>

// //       </div>

// //     </section>
// //   );
// // }

// // export default ProductDetails;





// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import api from "../services/api";
// import InquiryForm from "../components/InquiryForm";
// import "./ProductDetails.css";

// function ProductDetails() {
//   const { id } = useParams();

//   const [product, setProduct] = useState(null);

//   const stores = [
//     {
//       name: "Spicelands",
//       location: "Frankfurt, Germany",
//       url: "https://www.google.com/search?q=Spicelands+Frankfurt",
//     },
//     {
//       name: "Jaffna Basar Frankfurt",
//       location: "Frankfurt, Germany",
//       url: "https://share.google/2UoWe8LQQSIOXPF5k",
//     },
//     {
//       name: "Kabil Kiosk",
//       location: "Frankfurt, Germany",
//       url: "https://share.google/CoGFCKg0t0YOubr4n",
//     },
//     {
//       name: "Transfood",
//       location: "Frankfurt, Germany",
//       url: "https://share.google/XxcAq4OFJXW41qScg",
//     },
//   ];

//   useEffect(() => {
//     loadProduct();
//   }, [id]);

//   const loadProduct = async () => {
//     try {
//       const { data } = await api.get(`/products/${id}`);
//       setProduct(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (!product) {
//     return (
//       <div className="a4-product-loading">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <section className="a4-product-page">
//       <div className="a4-product-container">
//         <Link
//           to="/products"
//           className="a4-product-back"
//         >
//           ← Back to Products
//         </Link>

//         {/* Product Hero */}

//         <div className="a4-product-hero">
//           <div className="a4-product-image-col">
//             <img
//               src={`http://localhost:5000${product.image}`}
//               alt={product.title}
//               className="a4-product-image"
//             />
//           </div>

//           <div className="a4-product-content-col">
//             <span className="a4-product-badge">
//               BEST SELLER
//             </span>

//             <h1 className="a4-product-title">
//               {product.title}
//             </h1>

//             <div className="a4-product-price">
//               ₹{product.price}
//             </div>

//             <p className="a4-product-description">
//               {product.description}
//             </p>

//             <div className="a4-product-features">
//               <div className="a4-feature-chip">
//                 Freshly Prepared
//               </div>

//               <div className="a4-feature-chip">
//                 Premium Quality
//               </div>

//               <div className="a4-feature-chip">
//                 Available In Stores
//               </div>

//               <div className="a4-feature-chip">
//                 Imported Product
//               </div>
//             </div>

//             <button
//               className="a4-order-btn"
//               onClick={() =>
//                 document
//                   .getElementById("inquiry-section")
//                   ?.scrollIntoView({
//                     behavior: "smooth",
//                   })
//               }
//             >
//               Enquire Now
//             </button>
//           </div>
//         </div>

//         {/* Store Locations */}

//         <div className="a4-stores-section">
//           <h2 className="a4-section-title">
//             Available At Our Stores
//           </h2>

//           <p className="a4-section-subtitle">
//             Visit any of our trusted retail partners in
//             Frankfurt to purchase this product.
//           </p>

//           <div className="a4-store-grid">
//             {stores.map((store, index) => (
//               <a
//                 key={index}
//                 href={store.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="a4-store-card"
//               >
//                 <div className="a4-store-icon">
//                   📍
//                 </div>

//                 <h4>{store.name}</h4>

//                 <p>{store.location}</p>

//                 <span className="a4-store-link">
//                   View Location →
//                 </span>
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Store Map */}

//         <div className="a4-map-section">
//           <h2 className="a4-section-title">
//             Find Our Stores
//           </h2>

//           <p className="a4-section-subtitle">
//             Our partner stores are conveniently located
//             across Frankfurt, Germany.
//           </p>

//           <iframe
//             title="Store Locations"
//             className="a4-map"
//             src="https://maps.google.com/maps?q=Frankfurt,Germany&t=&z=12&ie=UTF8&iwloc=&output=embed"
//             loading="lazy"
//             allowFullScreen
//           />
//         </div>

//         {/* Inquiry Form */}

//         <div
//           id="inquiry-section"
//           className="a4-inquiry-section"
//         >
//           <h2 className="a4-section-title">
//             Product Inquiry
//           </h2>

//           <p className="a4-section-subtitle">
//             Have questions about this product?
//             Contact us and we'll get back to you soon.
//           </p>

//           <InquiryForm productId={product.id} />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProductDetails;


import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";
import InquiryForm from "../components/InquiryForm";
import StoreMap from "../components/StoreMap";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    loadProduct();
  }, [id]);

  const loadProduct = async () => {
    try {
      const { data } = await api.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  const stores = [
    {
      name: "Spicelands",
      address: "Frankfurt, Germany",
      lat: 50.1109,
      lng: 8.6821,
    },
    {
      name: "Jaffna Basar Frankfurt",
      address: "Frankfurt, Germany",
      lat: 50.115,
      lng: 8.69,
    },
    {
      name: "Kabil Kiosk",
      address: "Frankfurt, Germany",
      lat: 50.103,
      lng: 8.675,
    },
    {
      name: "Transfood",
      address: "Frankfurt, Germany",
      lat: 50.099,
      lng: 8.701,
    },
  ];

  if (!product) {
    return <div className="a4-product-loading">Loading...</div>;
  }

  return (
    <section className="a4-product-page">
      <div className="a4-product-container">
        <Link to="/products" className="a4-product-back">
          ← Back to Products
        </Link>

        <div className="a4-product-hero">
          <div className="a4-product-image-col">
            <img
              src={`http://localhost:5000${product.image}`}
              alt={product.title}
              className="a4-product-image"
            />
          </div>

          <div className="a4-product-content-col">
            <span className="a4-product-badge">
              BEST SELLER
            </span>

            <h1 className="a4-product-title">
              {product.title}
            </h1>

            <div className="a4-product-price">
              ₹{product.price}
            </div>

            <p className="a4-product-description">
              {product.description}
            </p>

            <div className="a4-product-features">
              <div className="a4-feature-chip">Freshly Prepared</div>
              <div className="a4-feature-chip">Premium Quality</div>
              <div className="a4-feature-chip">Available In Store</div>
            </div>

            <button className="a4-order-btn">
              Enquire Now
            </button>
          </div>
        </div>

        {/* Store Cards */}

        <div className="a4-stores-section">
          <h2 className="a4-section-title">
            Available At Our Stores
          </h2>

          <div className="a4-store-grid">
            {stores.map((store, index) => (
              <div
                key={index}
                className="a4-store-card"
              >
                <h4>{store.name}</h4>
                <p>{store.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Map with Markers */}

        <div className="a4-map-section">
          <h2 className="a4-section-title">
            Store Locations
          </h2>

          <StoreMap stores={stores} />
        </div>

        {/* Inquiry */}

        {/* <div className="a4-inquiry-section">
          <h2 className="a4-section-title">
            Product Inquiry
          </h2>

          <InquiryForm productId={product.id} />
        </div> */}
      </div>
    </section>
  );
}

export default ProductDetails;