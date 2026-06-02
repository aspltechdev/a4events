// // import { useEffect, useState } from 'react';
// // import api from '../../services/api';

// // function FeaturedProducts() {
// //   const [products, setProducts] =
// //     useState([]);

// //   useEffect(() => {
// //     loadProducts();
// //   }, []);

// //   const loadProducts = async () => {
// //     const { data } =
// //       await api.get('/products');

// //     setProducts(data.slice(0, 6));
// //   };

// //   return (
// //     <section
// //       style={{
// //         padding: '80px 20px'
// //       }}
// //     >
// //       <h2>Featured Products</h2>

// //       <div
// //         style={{
// //           display: 'grid',
// //           gridTemplateColumns:
// //             'repeat(3,1fr)',
// //           gap: '20px'
// //         }}
// //       >
// //         {products.map((product) => (
// //           <div key={product.id}>
// //             {product.image && (
// //               <img
// //                 src={`http://localhost:5000${product.image}`}
// //                 alt={product.title}
// //                 width="100%"
// //               />
// //             )}

// //             <h3>{product.title}</h3>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// // export default FeaturedProducts;

// // import { useEffect, useState } from 'react';
// // import api from '../../services/api';

// // function FeaturedProducts() {
// //   const [products, setProducts] =
// //     useState([]);

// //   useEffect(() => {
// //     loadProducts();
// //   }, []);

// //   const loadProducts = async () => {
// //     const { data } =
// //       await api.get('/products');

// //     setProducts(data.slice(0, 6));
// //   };

// //   return (
// //     <section
// //       style={{
// //         padding: '80px 20px'
// //       }}
// //     >
// //       <h2>Featured Products</h2>

// //       <div
// //         style={{
// //           display: 'grid',
// //           gridTemplateColumns:
// //             'repeat(3,1fr)',
// //           gap: '20px'
// //         }}
// //       >
// //         {products.map((product) => (
// //           <div key={product.id}>
// //             {product.image && (
// //               <img
// //                 src={`http://localhost:5000${product.image}`}
// //                 alt={product.title}
// //                 width="100%"
// //               />
// //             )}

// //             <h3>{product.title}</h3>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// // export default FeaturedProducts;


// import { useEffect, useState } from 'react';
// import api from '../../services/api';

// function FeaturedProducts() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     loadProducts();
//   }, []);

//   const loadProducts = async () => {
//     try {
//       const { data } = await api.get('/products/featured');

//       console.log('Featured Products:', data);

//       setProducts(data);
//     } catch (error) {
//       console.error('Featured products error:', error);
//     }
//   };

//   return (
//     <section
//       style={{
//         padding: '80px 20px'
//       }}
//     >
//       <h2>Featured Products</h2>

//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(3,1fr)',
//           gap: '20px'
//         }}
//       >
//         {products.map((product) => (
//           <div key={product.id}>
//             {product.image && (
//               <img
//                 src={`http://localhost:5000${product.image}`}
//                 alt={product.title}
//                 width="100%"
//               />
//             )}

//             <h3>{product.title}</h3>
//             <p>₹{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default FeaturedProducts;


// import { useEffect, useState } from "react";
// import api from "../../services/api";
// import "./FeaturedEvents.css";

// function FeaturedProducts() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     loadProducts();
//   }, []);

//   const loadProducts = async () => {
//     try {
//       const { data } = await api.get("/products/featured");
//       setProducts(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <section className="a4-events-section">
//       <div className="a4-events-container">

//         <div className="a4-events-header">
//           <span className="a4-events-tag">
//             FEATURED EVENTS
//           </span>

//           <h2 className="a4-events-title">
//             Discover Extraordinary Experiences
//           </h2>

//           <p className="a4-events-description">
//             Explore concerts, festivals, conferences,
//             workshops and unforgettable experiences
//             happening around you.
//           </p>
//         </div>

//         <div className="a4-events-grid">
//           {products.map((product) => (
//             <div
//               className="a4-event-card"
//               key={product.id}
//             >
//               <div className="a4-event-image-wrapper">
//                 <img
//                   src={`http://localhost:5000${product.image}`}
//                   alt={product.title}
//                   className="a4-event-image"
//                 />
//               </div>

//               <div className="a4-event-content">

//                 <span className="a4-event-category">
//                   Featured Product
//                 </span>

//                 <h3 className="a4-event-title">
//                   {product.title}
//                 </h3>

//                 <div className="a4-event-footer">
//                   <span className="a4-event-price">
//                     ₹{product.price}
//                   </span>

//                   <button className="a4-event-btn">
//                     Book Now
//                   </button>
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// export default FeaturedProducts;



import { useEffect, useState } from "react";
import api from "../../services/api";
import "./FeaturedProducts.css";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const { data } = await api.get("/products/featured");
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="a4-products-section">
      <div className="a4-products-container">

        <div className="a4-products-header">

          <span className="a4-products-tag">
            FEATURED PRODUCTS
          </span>

          <h2 className="a4-products-title">
            Freshly Made. Perfectly Served.
          </h2>

          <p className="a4-products-description">
            Explore our delicious collection of snacks,
            beverages, desserts and signature favorites
            crafted to satisfy every craving.
          </p>

        </div>

        <div className="a4-products-grid">

          {products.map((product) => (
            <div
              className="a4-product-card"
              key={product.id}
            >
              <div className="a4-product-image-wrapper">
                <img
                  src={`http://localhost:5000${product.image}`}
                  alt={product.title}
                  className="a4-product-image"
                />
              </div>

              <div className="a4-product-content">

                <span className="a4-product-badge">
                  Best Seller
                </span>

                <h3 className="a4-product-title">
                  {product.title}
                </h3>

                <p className="a4-product-subtitle">
                  Prepared with quality ingredients and
                  unforgettable flavors.
                </p>

                <div className="a4-product-footer">

                  <span className="a4-product-price">
                    ₹{product.price}
                  </span>

                  <button className="a4-product-btn">
                    Order Now
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;