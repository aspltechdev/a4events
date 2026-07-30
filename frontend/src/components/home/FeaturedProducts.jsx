// // // import { useEffect, useState } from 'react';
// // // import api from '../../services/api';

// // // function FeaturedProducts() {
// // //   const [products, setProducts] =
// // //     useState([]);

// // //   useEffect(() => {
// // //     loadProducts();
// // //   }, []);

// // //   const loadProducts = async () => {
// // //     const { data } =
// // //       await api.get('/products');

// // //     setProducts(data.slice(0, 6));
// // //   };

// // //   return (
// // //     <section
// // //       style={{
// // //         padding: '80px 20px'
// // //       }}
// // //     >
// // //       <h2>Featured Products</h2>

// // //       <div
// // //         style={{
// // //           display: 'grid',
// // //           gridTemplateColumns:
// // //             'repeat(3,1fr)',
// // //           gap: '20px'
// // //         }}
// // //       >
// // //         {products.map((product) => (
// // //           <div key={product.id}>
// // //             {product.image && (
// // //               <img
// // //                 src={`http://localhost:5000${product.image}`}
// // //                 alt={product.title}
// // //                 width="100%"
// // //               />
// // //             )}

// // //             <h3>{product.title}</h3>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // export default FeaturedProducts;

// // // import { useEffect, useState } from 'react';
// // // import api from '../../services/api';

// // // function FeaturedProducts() {
// // //   const [products, setProducts] =
// // //     useState([]);

// // //   useEffect(() => {
// // //     loadProducts();
// // //   }, []);

// // //   const loadProducts = async () => {
// // //     const { data } =
// // //       await api.get('/products');

// // //     setProducts(data.slice(0, 6));
// // //   };

// // //   return (
// // //     <section
// // //       style={{
// // //         padding: '80px 20px'
// // //       }}
// // //     >
// // //       <h2>Featured Products</h2>

// // //       <div
// // //         style={{
// // //           display: 'grid',
// // //           gridTemplateColumns:
// // //             'repeat(3,1fr)',
// // //           gap: '20px'
// // //         }}
// // //       >
// // //         {products.map((product) => (
// // //           <div key={product.id}>
// // //             {product.image && (
// // //               <img
// // //                 src={`http://localhost:5000${product.image}`}
// // //                 alt={product.title}
// // //                 width="100%"
// // //               />
// // //             )}

// // //             <h3>{product.title}</h3>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // export default FeaturedProducts;


// // import { useEffect, useState } from 'react';
// // import api from '../../services/api';

// // function FeaturedProducts() {
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     loadProducts();
// //   }, []);

// //   const loadProducts = async () => {
// //     try {
// //       const { data } = await api.get('/products/featured');

// //       console.log('Featured Products:', data);

// //       setProducts(data);
// //     } catch (error) {
// //       console.error('Featured products error:', error);
// //     }
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
// //           gridTemplateColumns: 'repeat(3,1fr)',
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
// //             <p>€{product.price}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }

// // export default FeaturedProducts;


// // import { useEffect, useState } from "react";
// // import api from "../../services/api";
// // import "./FeaturedEvents.css";

// // function FeaturedProducts() {
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     loadProducts();
// //   }, []);

// //   const loadProducts = async () => {
// //     try {
// //       const { data } = await api.get("/products/featured");
// //       setProducts(data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <section className="a4-events-section">
// //       <div className="a4-events-container">

// //         <div className="a4-events-header">
// //           <span className="a4-events-tag">
// //             FEATURED EVENTS
// //           </span>

// //           <h2 className="a4-events-title">
// //             Discover Extraordinary Experiences
// //           </h2>

// //           <p className="a4-events-description">
// //             Explore concerts, festivals, conferences,
// //             workshops and unforgettable experiences
// //             happening around you.
// //           </p>
// //         </div>

// //         <div className="a4-events-grid">
// //           {products.map((product) => (
// //             <div
// //               className="a4-event-card"
// //               key={product.id}
// //             >
// //               <div className="a4-event-image-wrapper">
// //                 <img
// //                   src={`http://localhost:5000${product.image}`}
// //                   alt={product.title}
// //                   className="a4-event-image"
// //                 />
// //               </div>

// //               <div className="a4-event-content">

// //                 <span className="a4-event-category">
// //                   Featured Product
// //                 </span>

// //                 <h3 className="a4-event-title">
// //                   {product.title}
// //                 </h3>

// //                 <div className="a4-event-footer">
// //                   <span className="a4-event-price">
// //                     €{product.price}
// //                   </span>

// //                   <button className="a4-event-btn">
// //                     Book Now
// //                   </button>
// //                 </div>

// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// // export default FeaturedProducts;



// // import { useEffect, useState } from "react";
// // import api from "../../services/api";
// // import "./FeaturedProducts.css";

// // function FeaturedProducts() {
// //   const [products, setProducts] = useState([]);

// //   useEffect(() => {
// //     loadProducts();
// //   }, []);

// //   const loadProducts = async () => {
// //     try {
// //       const { data } = await api.get("/products/featured");
// //       setProducts(data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   return (
// //     <section className="a4-products-section">
// //       <div className="a4-products-container">

// //         <div className="a4-products-header">

// //           <span className="a4-products-tag">
// //             FEATURED PRODUCTS
// //           </span>

// //           <h2 className="a4-products-title">
// //             Freshly Made. Perfectly Served.
// //           </h2>

// //           <p className="a4-products-description">
// //             Explore our delicious collection of snacks,
// //             beverages, desserts and signature favorites
// //             crafted to satisfy every craving.
// //           </p>

// //         </div>

// //         <div className="a4-products-grid">

// //           {products.map((product) => (
// //             <div
// //               className="a4-product-card"
// //               key={product.id}
// //             >
// //               <div className="a4-product-image-wrapper">
// //                 <img
// //                   src={`http://localhost:5000${product.image}`}
// //                   alt={product.title}
// //                   className="a4-product-image"
// //                 />
// //               </div>

// //               <div className="a4-product-content">

// //                 <span className="a4-product-badge">
// //                   Best Seller
// //                 </span>

// //                 <h3 className="a4-product-title">
// //                   {product.title}
// //                 </h3>

// //                 <p className="a4-product-subtitle">
// //                   Prepared with quality ingredients and
// //                   unforgettable flavors.
// //                 </p>

// //                 <div className="a4-product-footer">

// //                   <span className="a4-product-price">
// //                     €{product.price}
// //                   </span>

// //                   <button className="a4-product-btn">
// //                     Order Now
// //                   </button>

// //                 </div>

// //               </div>
// //             </div>
// //           ))}

// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// // export default FeaturedProducts;


// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import api from "../../services/api";
// // import "./FeaturedProducts.css";

// // function FeaturedProducts() {
// //   const [products, setProducts] = useState([]);
// //   const [hoveredProduct, setHoveredProduct] = useState(null);

// //   useEffect(() => {
// //     loadProducts();
// //   }, []);

// //   const loadProducts = async () => {
// //     try {
// //       const { data } = await api.get("/products/featured");
// //       setProducts(data);
// //     } catch (error) {
// //       console.error(error);
// //       // Demo data
// //       setProducts([
// //         { id: 1, title: "Organic Multi Millet Mix", price: 249, category: "Millets", badge: "Bestseller", image: "/images/millet-mix.jpg", weight: "500g" },
// //         { id: 2, title: "Cold Pressed Coconut Oil", price: 399, category: "Oils", badge: "Pure", image: "/images/coconut-oil.jpg", weight: "1L" },
// //         { id: 3, title: "Whole Grain Brown Rice", price: 299, category: "Rice", badge: "Organic", image: "/images/brown-rice.jpg", weight: "1kg" },
// //         { id: 4, title: "Protein Rich Snack Mix", price: 149, category: "Snacks", badge: "New", image: "/images/snack-mix.jpg", weight: "200g" },
// //         { id: 5, title: "Toor Dal Premium", price: 189, category: "Pulses", badge: "Best", image: "/images/toor-dal.jpg", weight: "500g" },
// //         { id: 6, title: "Frozen Mixed Vegetables", price: 99, category: "Frozen", badge: "Fresh", image: "/images/frozen-veg.jpg", weight: "400g" }
// //       ]);
// //     }
// //   };

// //   return (
// //     <section className="featured-products-premium">
// //       {/* Background Elements */}
// //       <div className="bg-subtle"></div>
// //       <div className="bg-gradient-light"></div>

// //       <div className="products-container">
// //         {/* Header Section */}
// //         <div className="products-header">
// //           <div className="header-marker">
// //             <span className="marker-line"></span>
// //             <span className="marker-text">HAND PICKED FOR YOU</span>
// //           </div>
          
// //           <h2 className="products-headline">
// //             Premium natural products,
// //             <br />
// //             <span className="headline-accent">crafted for wellness</span>
// //           </h2>
          
// //           <p className="products-subhead">
// //             Sourced directly from certified organic farms. Each product is carefully selected,
// //             lab-tested, and delivered fresh to your doorstep.
// //           </p>
// //         </div>

// //         {/* Products Grid */}
// //         <div className="products-grid">
// //           {products.map((product, index) => (
// //             <div
// //               key={product.id}
// //               className={`product-card ${hoveredProduct === product.id ? 'hovered' : ''}`}
// //               onMouseEnter={() => setHoveredProduct(product.id)}
// //               onMouseLeave={() => setHoveredProduct(null)}
// //               style={{ animationDelay: `${index * 0.08}s` }}
// //             >
// //               {/* Image Section */}
// //               <div className="product-media">
// //                 <div className="product-image-wrapper">
// //                   <img
// //                     src={`http://localhost:5000${product.image}`}
// //                     alt={product.title}
// //                     className="product-image"
// //                   />
// //                   <div className="image-backdrop"></div>
// //                 </div>
                
// //                 {/* Badge */}
// //                 <div className="product-badge">
// //                   <span>{product.badge}</span>
// //                 </div>
// //               </div>

// //               {/* Product Details */}
// //               <div className="product-details">
// //                 <div className="product-category">{product.category}</div>
                
// //                 <h3 className="product-title">{product.title}</h3>
                
// //                 <div className="product-specs">
// //                   <span className="spec-weight">{product.weight}</span>
// //                   <span className="spec-divider">/</span>
// //                   <span className="spec-stock">In Stock</span>
// //                 </div>
                
// //                 <div className="product-pricing">
// //                   <span className="price-current">€{product.price}</span>
// //                   <span className="price-unit">INR</span>
// //                 </div>
                
// //                 <button className="product-action">
// //                 View Product
// //                 </button>
// //               </div>
// //             </div>
// //           ))}
// //         </div>

// //         {/* Footer Actions */}
// //         <div className="products-footer">
// //           <Link to="/products" className="view-all-button">
// //             Explore Complete Collection
// //             <span className="button-arrow">→</span>
// //           </Link>
// //         </div>

// //         {/* Quality Assurance */}
// //         <div className="quality-section">
// //           <div className="quality-line"></div>
// //           <div className="quality-badges">
// //             <div className="quality-badge">Certified Organic</div>
// //             <div className="quality-separator"></div>
// //             <div className="quality-badge">Chemical Free</div>
// //             <div className="quality-separator"></div>
// //             <div className="quality-badge">Lab Tested</div>
// //             <div className="quality-separator"></div>
// //             <div className="quality-badge">Fresh Stock</div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default FeaturedProducts;








// // import { useEffect, useState } from "react";
// // import { Link } from "react-router-dom";
// // import api from "../../services/api";
// // import "./FeaturedProducts.css";

// // function FeaturedProducts() {
// //   const [products, setProducts] = useState([]);
// //   const [hoveredProduct, setHoveredProduct] = useState(null);

// //   useEffect(() => {
// //     loadProducts();
// //   }, []);

// //   const loadProducts = async () => {
// //     try {
// //       const { data } = await api.get("/products/featured");
// //       setProducts(data);
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   // Calculate discounted price
// //   const calculateDiscountedPrice = (price, discountPercent) => {
// //     if (discountPercent && discountPercent > 0) {
// //       return price - (price * discountPercent / 100);
// //     }
// //     return null;
// //   };

// //   return (
// //     <section className="featured-products-premium">
// //       <div className="bg-subtle"></div>
// //       <div className="bg-gradient-light"></div>

// //       <div className="products-container">
// //         {/* Header Section */}
// //         <div className="products-header">
// //           <div className="header-marker">
// //             <span className="marker-line"></span>
// //             <span className="marker-text">PREMIUM COLLECTION</span>
// //           </div>
          
// //           <h2 className="products-headline">
// //             Naturally sourced,
// //             <br />
// //             <span className="headline-accent">delivered with care</span>
// //           </h2>
          
// //           <p className="products-subhead">
// //             Discover our handpicked selection of organic, chemical-free products 
// //             sourced directly from trusted farms. Each item is carefully curated 
// //             for your wellness journey.
// //           </p>
// //         </div>

// //         {/* Products Grid */}
// //         <div className="products-grid">
// //           {products.map((product, index) => {
// //             const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercent);
// //             const hasDiscount = product.discountPercent && product.discountPercent > 0;
            
// //             return (
// //               <div
// //                 key={product.id}
// //                 className={`product-card ${hoveredProduct === product.id ? 'hovered' : ''}`}
// //                 onMouseEnter={() => setHoveredProduct(product.id)}
// //                 onMouseLeave={() => setHoveredProduct(null)}
// //                 style={{ animationDelay: `${index * 0.08}s` }}
// //               >
// //                 {/* Image Section */}
// //                 <div className="product-media">
// //                   <div className="product-image-wrapper">
// //                     <img
// //                      src={`http://localhost:5000${product.image}`}
// //                       alt={product.title}
// //                       className="product-image"
// //                       loading="lazy"
// //                     />
// //                     <div className="image-backdrop"></div>
// //                   </div>
                  
// //                   {/* Discount Badge */}
// //                   {hasDiscount && (
// //                     <div className="discount-badge">
// //                       <span>{product.discountPercent}% OFF</span>
// //                     </div>
// //                   )}
                  
// //                   {/* Featured Badge */}
// //                   {product.featured && !hasDiscount && (
// //                     <div className="featured-badge">
// //                       <span>Featured</span>
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* Product Details */}
// //                 <div className="product-details">
// //                   <div className="product-category">{product.category}</div>
                  
// //                   <h3 className="product-title">{product.title}</h3>
                  
// //                   <p className="product-description">{product.description}</p>
                  
// //                   <div className="product-pricing">
// //                     {hasDiscount ? (
// //                       <>
// //                         <span className="price-current">€{Math.round(discountedPrice)}</span>
// //                         <span className="price-original">€{product.price}</span>
// //                         <span className="price-save">Save {product.discountPercent}%</span>
// //                       </>
// //                     ) : (
// //                       <span className="price-current">€{product.price}</span>
// //                     )}
// //                   </div>
                  
// //                   <button className="product-action">
// //                     Add to Cart
// //                   </button>
// //                 </div>
// //               </div>
// //             );
// //           })}
// //         </div>

// //         {/* Footer Actions */}
// //         <div className="products-footer">
// //           <Link to="/products" className="view-all-button">
// //             Explore Complete Collection
// //             <span className="button-arrow">→</span>
// //           </Link>
// //         </div>

// //         {/* Quality Assurance */}
// //         <div className="quality-section">
// //           <div className="quality-line"></div>
// //           <div className="quality-badges">
// //             <div className="quality-badge">Certified Organic</div>
// //             <div className="quality-separator"></div>
// //             <div className="quality-badge">Chemical Free</div>
// //             <div className="quality-separator"></div>
// //             <div className="quality-badge">Lab Tested</div>
// //             <div className="quality-separator"></div>
// //             <div className="quality-badge">Fresh Stock</div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default FeaturedProducts;















// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../../services/api";
// import "./FeaturedProducts.css";

// function FeaturedProducts() {
//   const [products, setProducts] = useState([]);
//   const [hoveredProduct, setHoveredProduct] = useState(null);

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

//   const calculateDiscountedPrice = (price, discountPercent) => {
//     if (discountPercent && discountPercent > 0) {
//       return price - (price * discountPercent / 100);
//     }
//     return null;
//   };

//   return (
//     <section className="fp__wrapper">
//       <div className="fp__bgSubtle"></div>
//       <div className="fp__bgGradient"></div>

//       <div className="fp__container">
//         {/* Header Section */}
//         <div className="fp__header">
//           <div className="fp__headerMarker">
//             <span className="fp__markerLine"></span>
//             <span className="fp__markerText">PREMIUM COLLECTION</span>
//           </div>
          
//           <h2 className="fp__headline">
//             Naturally sourced,
//             <br />
//             <span className="fp__headlineAccent">delivered with care</span>
//           </h2>
          
//           <p className="fp__subhead">
//             Discover our handpicked selection of organic, chemical-free products 
//             sourced directly from trusted farms. Each item is carefully curated 
//             for your wellness journey.
//           </p>
//         </div>

//         {/* Products Grid */}
//         <div className="fp__grid">
//           {products.map((product, index) => {
//             const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercent);
//             const hasDiscount = product.discountPercent && product.discountPercent > 0;
            
//             return (
//               <div
//                 key={product.id}
//                 className={`fp__card ${hoveredProduct === product.id ? 'fp__cardHovered' : ''}`}
//                 onMouseEnter={() => setHoveredProduct(product.id)}
//                 onMouseLeave={() => setHoveredProduct(null)}
//                 style={{ animationDelay: `${index * 0.08}s` }}
//               >
//                 {/* Image Section */}
//                 <div className="fp__media">
//                   <div className="fp__imageWrapper">
//                     <img
//                       // src={`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${product.image}`}
//                         src={`http://localhost:5000${product.image}`}
//                       alt={product.title}
//                       className="fp__image"
//                       loading="lazy"
//                     />
//                     <div className="fp__imageBackdrop"></div>
//                   </div>
                  
//                   {hasDiscount && (
//                     <div className="fp__discountBadge">
//                       <span>{product.discountPercent}% OFF</span>
//                     </div>
//                   )}
                  
//                   {product.featured && !hasDiscount && (
//                     <div className="fp__featuredBadge">
//                       <span>Featured</span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Product Details */}
//                 <div className="fp__details">
//                   <div className="fp__category">{product.category}</div>
                  
//                   <h3 className="fp__title">{product.title}</h3>
                  
//                   <p className="fp__description">{product.description}</p>
                  
//                   <div className="fp__pricing">
//                     {hasDiscount ? (
//                       <>
//                         <span className="fp__priceCurrent">€{Math.round(discountedPrice)}</span>
//                         <span className="fp__priceOriginal">€{product.price}</span>
//                         <span className="fp__priceSave">Save {product.discountPercent}%</span>
//                       </>
//                     ) : (
//                       <span className="fp__priceCurrent">€{product.price}</span>
//                     )}
//                   </div>
                  
//                   <button className="fp__actionBtn">
//                     View 
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Footer Actions */}
//         <div className="fp__footer">
//           <Link to="/products" className="fp__viewAllBtn">
//             Explore Complete Collection
//             <span className="fp__arrowIcon">→</span>
//           </Link>
//         </div>

//         {/* Quality Assurance */}
//         <div className="fp__qualitySection">
//           <div className="fp__qualityLine"></div>
//           <div className="fp__qualityBadges">
//             <div className="fp__qualityBadge">Certified Organic</div>
//             <div className="fp__qualitySeparator"></div>
//             <div className="fp__qualityBadge">Chemical Free</div>
//             <div className="fp__qualitySeparator"></div>
//             <div className="fp__qualityBadge">Lab Tested</div>
//             <div className="fp__qualitySeparator"></div>
//             <div className="fp__qualityBadge">Fresh Stock</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FeaturedProducts;




// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import api from "../../services/api";
// import "./FeaturedProducts.css";

// function FeaturedProducts() {
//   const [products, setProducts] = useState([]);
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const navigate = useNavigate();

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

//   const calculateDiscountedPrice = (price, discountPercent) => {
//     if (discountPercent && discountPercent > 0) {
//       return price - (price * discountPercent / 100);
//     }
//     return null;
//   };

//   const handleAddToCart = (productId) => {
//     navigate(`/products/${productId}`);
//   };

//   return (
//     <section className="fp__wrapper">
//       <div className="fp__bgSubtle"></div>
//       <div className="fp__bgGradient"></div>

//       <div className="fp__container">
//         {/* Header Section */}
//         <div className="fp__header">
//           <div className="fp__headerMarker">
//             <span className="fp__markerLine"></span>
//             <span className="fp__markerText">PREMIUM COLLECTION</span>
//           </div>
          
//           <h2 className="fp__headline">
//             Naturally sourced,
//             <br />
//             <span className="fp__headlineAccent">delivered with care</span>
//           </h2>
          
//           <p className="fp__subhead">
//             Discover our handpicked selection of organic, chemical-free products 
//             sourced directly from trusted farms. Each item is carefully curated 
//             for your wellness journey.
//           </p>
//         </div>

//         {/* Products Grid */}
//         <div className="fp__grid">
//           {products.map((product, index) => {
//             const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercent);
//             const hasDiscount = product.discountPercent && product.discountPercent > 0;
            
//             return (
//               <div
//                 key={product.id}
//                 className={`fp__card ${hoveredProduct === product.id ? 'fp__cardHovered' : ''}`}
//                 onMouseEnter={() => setHoveredProduct(product.id)}
//                 onMouseLeave={() => setHoveredProduct(null)}
//                 style={{ animationDelay: `${index * 0.08}s` }}
//               >
//                 {/* Image Section - Clickable */}
//                 <div 
//                   className="fp__media"
//                   onClick={() => handleAddToCart(product.id)}
//                   style={{ cursor: 'pointer' }}
//                 >
//                   <div className="fp__imageWrapper">
//                     <img
//                       // src={`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${product.image}`}
//                        src={`http://localhost:5000${product.image}`}
//                       // alt={product.title}
//                       className="fp__image"
//                       loading="lazy"
//                     />
//                     <div className="fp__imageBackdrop"></div>
//                   </div>
                  
//                   {hasDiscount && (
//                     <div className="fp__discountBadge">
//                       <span>{product.discountPercent}% OFF</span>
//                     </div>
//                   )}
                  
//                   {product.featured && !hasDiscount && (
//                     <div className="fp__featuredBadge">
//                       <span>Featured</span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Product Details */}
//                 <div className="fp__details">
//                   <div 
//                     className="fp__category"
//                     onClick={() => handleAddToCart(product.id)}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     {product.category}
//                   </div>
                  
//                   <h3 
//                     className="fp__title"
//                     onClick={() => handleAddToCart(product.id)}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     {product.title}
//                   </h3>
                  
//                   <p className="fp__description">{product.description}</p>
                  
//                   <div className="fp__pricing">
//                     {hasDiscount ? (
//                       <>
//                         <span className="fp__priceCurrent">€{Math.round(discountedPrice)}</span>
//                         <span className="fp__priceOriginal">€{product.price}</span>
//                         <span className="fp__priceSave">Save {product.discountPercent}%</span>
//                       </>
//                     ) : (
//                       <span className="fp__priceCurrent">€{product.price}</span>
//                     )}
//                   </div>
                  
//                   <button 
//                     className="fp__actionBtn"
//                     onClick={() => handleAddToCart(product.id)}
//                   >
//                     View Product
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Footer Actions */}
//         <div className="fp__footer">
//           <Link to="/products" className="fp__viewAllBtn">
//             Explore Complete Collection
//             <span className="fp__arrowIcon">→</span>
//           </Link>
//         </div>

//         {/* Quality Assurance */}
//         <div className="fp__qualitySection">
//           <div className="fp__qualityLine"></div>
//           <div className="fp__qualityBadges">
//             <div className="fp__qualityBadge">Certified Organic</div>
//             <div className="fp__qualitySeparator"></div>
//             <div className="fp__qualityBadge">Chemical Free</div>
//             <div className="fp__qualitySeparator"></div>
//             <div className="fp__qualityBadge">Lab Tested</div>
//             <div className="fp__qualitySeparator"></div>
//             <div className="fp__qualityBadge">Fresh Stock</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FeaturedProducts;



// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import api from "../../services/api";
// import "./FeaturedProducts.css";

// function FeaturedProducts() {
//   const [products, setProducts] = useState([]);
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const navigate = useNavigate();

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

//   const calculateDiscountedPrice = (price, discountPercent) => {
//     if (discountPercent && discountPercent > 0) {
//       return price - (price * discountPercent / 100);
//     }
//     return null;
//   };

//   const handleAddToCart = (productId) => {
//     navigate(`/products/${productId}`);
//   };

//   return (
//     <section className="fp__wrapper">
//       <div className="fp__bgSubtle"></div>
//       <div className="fp__bgGradient"></div>

//       <div className="fp__container">
//         {/* Header Section */}
//         <div className="fp__header">
//           <div className="fp__headerMarker">
//             <span className="fp__markerLine"></span>
//             <span className="fp__markerText">PREMIUM COLLECTION</span>
//           </div>
          
//           <h2 className="fp__headline">
//             Naturally sourced,
//             <br />
//             <span className="fp__headlineAccent">delivered with care</span>
//           </h2>
          
//           <p className="fp__subhead">
//             Discover our handpicked selection of organic, chemical-free products 
//             sourced directly from trusted farms. Each item is carefully curated 
//             for your wellness journey.
//           </p>
//         </div>

//         {/* Products Grid */}
//         <div className="fp__grid">
//           {products.map((product, index) => {
//             const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercent);
//             const hasDiscount = product.discountPercent && product.discountPercent > 0;
            
//             return (
//               <div
//                 key={product.id}
//                 className={`fp__card ${hoveredProduct === product.id ? 'fp__cardHovered' : ''}`}
//                 onMouseEnter={() => setHoveredProduct(product.id)}
//                 onMouseLeave={() => setHoveredProduct(null)}
//                 style={{ animationDelay: `${index * 0.08}s` }}
//               >
//                 {/* Image Section - Clickable */}
//                 <div 
//                   className="fp__media"
//                   onClick={() => handleAddToCart(product.id)}
//                   style={{ cursor: 'pointer' }}
//                 >
//                   <div className="fp__imageWrapper">
//                     <img
//                       src={`http://localhost:5000${product.image}`}
//                       alt={product.title}
//                       className="fp__image"
//                       loading="lazy"
//                     />
//                     <div className="fp__imageBackdrop"></div>
//                   </div>
                  
//                   {hasDiscount && (
//                     <div className="fp__discountBadge">
//                       <span>{product.discountPercent}% OFF</span>
//                     </div>
//                   )}
                  
//                   {product.featured && !hasDiscount && (
//                     <div className="fp__featuredBadge">
//                       <span>Featured</span>
//                     </div>
//                   )}
//                 </div>

//                 {/* Product Details */}
//                 <div className="fp__details">
//                   <div 
//                     className="fp__category"
//                     onClick={() => handleAddToCart(product.id)}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     {product.category}
//                   </div>
                  
//                   <h3 
//                     className="fp__title"
//                     onClick={() => handleAddToCart(product.id)}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     {product.title}
//                   </h3>
                  
//                   <p className="fp__description">{product.description}</p>
                  
//                   <div className="fp__pricing">
//                     {hasDiscount ? (
//                       <>
//                         <span className="fp__priceCurrent">€{Math.round(discountedPrice)}</span>
//                         <span className="fp__priceOriginal">€{product.price}</span>
//                         <span className="fp__priceSave">Save {product.discountPercent}%</span>
//                       </>
//                     ) : (
//                       <span className="fp__priceCurrent">€{product.price}</span>
//                     )}
//                   </div>
                  
//                   <button 
//                     className="fp__actionBtn"
//                     onClick={() => handleAddToCart(product.id)}
//                   >
//                     View Product
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Footer Actions */}
//         <div className="fp__footer">
//           <Link to="/products" className="fp__viewAllBtn">
//             Explore Complete Collection
//             <span className="fp__arrowIcon">→</span>
//           </Link>
//         </div>

//         {/* Quality Assurance */}
//         <div className="fp__qualitySection">
//           <div className="fp__qualityLine"></div>
//           <div className="fp__qualityBadges">
//             <div className="fp__qualityBadge">Certified Organic</div>
//             <div className="fp__qualitySeparator"></div>
//             <div className="fp__qualityBadge">Chemical Free</div>
//             <div className="fp__qualitySeparator"></div>
//             <div className="fp__qualityBadge">Lab Tested</div>
//             <div className="fp__qualitySeparator"></div>
//             <div className="fp__qualityBadge">Fresh Stock</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FeaturedProducts;


// import { useEffect, useState, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import api from "../../services/api";
// import "./FeaturedProducts.css";

// function FeaturedProducts() {
//   const [products, setProducts] = useState([]);
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const navigate = useNavigate();
//   const marqueeRef = useRef(null);

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

//   const calculateDiscountedPrice = (price, discountPercent) => {
//     if (discountPercent && discountPercent > 0) {
//       return price - (price * discountPercent / 100);
//     }
//     return null;
//   };

//   const handleViewProduct = (productId) => {
//     navigate(`/products/${productId}`);
//   };

//   // Duplicate products for seamless marquee
//   const marqueeProducts = [...products, ...products];

//   return (
//     <section className="fp__wrapper">
//       <div className="fp__bgSubtle"></div>
//       <div className="fp__bgGradient"></div>

//       <div className="fp__container">
//         {/* Header Section */}
//         <div className="fp__header">
//           <div className="fp__headerMarker">
//             <span className="fp__markerLine"></span>
//             <span className="fp__markerText">PREMIUM COLLECTION</span>
//           </div>
          
//           <h2 className="fp__headline">
//             Naturally sourced,
//             <br />
//             <span className="fp__headlineAccent">delivered with care</span>
//           </h2>
          
//           <p className="fp__subhead">
//             Discover our handpicked selection of organic, chemical-free products 
//             sourced directly from trusted farms. Each item is carefully curated 
//             for your wellness journey.
//           </p>
//         </div>

//         {/* Marquee Products */}
//         <div 
//           className="fp__marqueeWrapper"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           <div 
//             ref={marqueeRef}
//             className={`fp__marqueeTrack ${isPaused ? 'fp__marqueePaused' : ''}`}
//           >
//             {marqueeProducts.map((product, index) => {
//               const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercent);
//               const hasDiscount = product.discountPercent && product.discountPercent > 0;
              
//               return (
//                 <div
//                   key={`${product.id}-${index}`}
//                   className={`fp__card ${hoveredProduct === `${product.id}-${index}` ? 'fp__cardHovered' : ''}`}
//                   onMouseEnter={() => setHoveredProduct(`${product.id}-${index}`)}
//                   onMouseLeave={() => setHoveredProduct(null)}
//                 >
//                   {/* Image Section */}
//                   <div 
//                     className="fp__media"
//                     onClick={() => handleViewProduct(product.id)}
//                   >
//                     <div className="fp__imageWrapper">
//                       <img
//                         src={`https://a4agroup.eu${product.image}`}
//                         alt={product.title}
//                         className="fp__image"
//                         loading="lazy"
//                       />
//                       <div className="fp__imageBackdrop"></div>
//                     </div>
                    
//                     {hasDiscount && (
//                       <div className="fp__discountBadge">
//                         <span>{product.discountPercent}% OFF</span>
//                       </div>
//                     )}
                    
//                     {product.featured && !hasDiscount && (
//                       <div className="fp__featuredBadge">
//                         <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
//                           <path d="M5 0L6.5 3.5L10 4L7.5 6.5L8.5 10L5 8L1.5 10L2.5 6.5L0 4L3.5 3.5L5 0Z" fill="currentColor"/>
//                         </svg>
//                         <span>Featured</span>
//                       </div>
//                     )}
//                   </div>

//                   {/* Product Details */}
//                   <div className="fp__details">
//                     <div 
//                       className="fp__category"
//                       onClick={() => handleViewProduct(product.id)}
//                     >
//                       {product.category}
//                     </div>
                    
//                     <h3 
//                       className="fp__title"
//                       onClick={() => handleViewProduct(product.id)}
//                     >
//                       {product.title}
//                     </h3>
                    
//                     <p className="fp__description">{product.description}</p>
                    
//                     <div className="fp__pricing">
//                       {hasDiscount ? (
//                         <>
//                           <span className="fp__priceCurrent">€{Math.round(discountedPrice)}</span>
//                           <span className="fp__priceOriginal">€{product.price}</span>
//                           <span className="fp__priceSave">Save {product.discountPercent}%</span>
//                         </>
//                       ) : (
//                         <span className="fp__priceCurrent">€{product.price}</span>
//                       )}
//                     </div>
                    
//                     <button 
//                       className="fp__actionBtn"
//                       onClick={() => handleViewProduct(product.id)}
//                     >
//                       View Product
//                       <span className="fp__btnArrow">→</span>
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Gradient Fade Edges */}
//         <div className="fp__marqueeFadeLeft"></div>
//         <div className="fp__marqueeFadeRight"></div>

//         {/* Footer Actions */}
//         <div className="fp__footer">
//           <Link to="/products" className="fp__viewAllBtn">
//             Explore Complete Collection
//             <span className="fp__arrowIcon">→</span>
//           </Link>
//         </div>

//         {/* Quality Assurance */}
//         <div className="fp__qualitySection">
//           <div className="fp__qualityLine"></div>
//           <div className="fp__qualityBadges">
//             <div className="fp__qualityBadge">
//               <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//                 <path d="M6 0L7.5 4.5L12 4.5L8.25 7.5L9.75 12L6 9L2.25 12L3.75 7.5L0 4.5L4.5 4.5L6 0Z" fill="currentColor"/>
//               </svg>
//               Certified Organic
//             </div>
//             <div className="fp__qualitySeparator"></div>
//             <div className="fp__qualityBadge">
//               <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//                 <path d="M6 0L7.5 4.5L12 4.5L8.25 7.5L9.75 12L6 9L2.25 12L3.75 7.5L0 4.5L4.5 4.5L6 0Z" fill="currentColor"/>
//               </svg>
//               Chemical Free
//             </div>
//             <div className="fp__qualitySeparator"></div>
//             <div className="fp__qualityBadge">
//               <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//                 <path d="M6 0L7.5 4.5L12 4.5L8.25 7.5L9.75 12L6 9L2.25 12L3.75 7.5L0 4.5L4.5 4.5L6 0Z" fill="currentColor"/>
//               </svg>
//               Lab Tested
//             </div>
//             <div className="fp__qualitySeparator"></div>
//             <div className="fp__qualityBadge">
//               <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//                 <path d="M6 0L7.5 4.5L12 4.5L8.25 7.5L9.75 12L6 9L2.25 12L3.75 7.5L0 4.5L4.5 4.5L6 0Z" fill="currentColor"/>
//               </svg>
//               Fresh Stock
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FeaturedProducts;


// import { useEffect, useState, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import api from "../../services/api";
// import "./FeaturedProducts.css";

// function FeaturedProducts() {
//   const [products, setProducts] = useState([]);
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
//   const [isVisible, setIsVisible] = useState(false);
//   const navigate = useNavigate();
//   const sectionRef = useRef(null);
//   const marqueeRef = useRef(null);

//   useEffect(() => {
//     loadProducts();
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.15 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (sectionRef.current) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         setMousePosition({
//           x: (e.clientX - rect.left) / rect.width,
//           y: (e.clientY - rect.top) / rect.height,
//         });
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove, { passive: true });
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const loadProducts = async () => {
//     try {
//       const { data } = await api.get("/products/featured");
//       setProducts(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const calculateDiscountedPrice = (price, discountPercent) => {
//     if (discountPercent && discountPercent > 0) {
//       return price - (price * discountPercent) / 100;
//     }
//     return null;
//   };

//   const handleViewProduct = (productId) => {
//     navigate(`/products/${productId}`);
//   };

//   const marqueeProducts = [...products, ...products];

//   return (
//     <section
//       ref={sectionRef}
//       className={`fp-premium ${isVisible ? "fp-visible" : ""}`}
//       style={{
//         "--mouse-x": mousePosition.x,
//         "--mouse-y": mousePosition.y,
//       }}
//     >
//       {/* Atmospheric Depth */}
//       <div className="fp-atmosphere" aria-hidden="true">
//         <div className="fp-glow fp-glow--earth" />
//         <div className="fp-glow fp-glow--warm" />
//         <div className="fp-glow fp-glow--fresh" />
//         <div className="fp-mesh" />
//         <div className="fp-grain" />
//         <div className="fp-vignette" />
//       </div>

//       {/* Floating Glass Orbs */}
//       <div className="fp-orbs" aria-hidden="true">
//         <div className="fp-orb fp-orb--large" />
//         <div className="fp-orb fp-orb--medium" />
//         <div className="fp-orb fp-orb--small" />
//       </div>

//       <div className="fp-container">
//         {/* Header */}
//         <div className="fp-header">
//           <div className="fp-thread" />
//           <div className="fp-header-content">
//             <div className="fp-whisper">
//               <span className="fp-whisper-pulse" />
//               <span>Curated with intention</span>
//             </div>

//             <h2 className="fp-headline">
//               <span className="fp-headline-line">Naturally sourced,</span>
//               <span className="fp-headline-line fp-headline-radiance">
//                 delivered with care.
//               </span>
//             </h2>

//             <p className="fp-prose">
//               Handpicked organic, chemical-free provisions sourced directly 
//               from trusted farms. Each product carries the purity of its origin 
//               — curated intentionally for your wellness journey.
//             </p>
//           </div>
//         </div>

//         {/* Marquee Carousel */}
//         <div
//           className="fp-marquee-stage"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           <div
//             ref={marqueeRef}
//             className={`fp-marquee-track ${isPaused ? "fp-marquee-paused" : ""}`}
//           >
//             {marqueeProducts.map((product, index) => {
//               const discountedPrice = calculateDiscountedPrice(
//                 product.price,
//                 product.discountPercent
//               );
//               const hasDiscount =
//                 product.discountPercent && product.discountPercent > 0;

//               return (
//                 <div
//                   key={`${product.id}-${index}`}
//                   className={`fp-card ${
//                     hoveredProduct === `${product.id}-${index}`
//                       ? "fp-card-hovered"
//                       : ""
//                   }`}
//                   onMouseEnter={() =>
//                     setHoveredProduct(`${product.id}-${index}`)
//                   }
//                   onMouseLeave={() => setHoveredProduct(null)}
//                 >
//                   {/* Card Atmosphere */}
//                   <div className="fp-card-atmosphere" aria-hidden="true">
//                     <div className="fp-card-glow" />
//                     <div className="fp-card-noise" />
//                   </div>

//                   {/* Image */}
//                   <div
//                     className="fp-card-media"
//                     onClick={() => handleViewProduct(product.id)}
//                   >
//                     <div className="fp-card-image-wrap">
//                       <img
//                         src={`https://a4agroup.eu${product.image}`}
//                         alt={product.title}
//                         className="fp-card-image"
//                         loading="lazy"
//                       />
//                       <div className="fp-card-image-veil" />
//                     </div>

//                     {hasDiscount && (
//                       <div className="fp-card-badge">
//                         <span className="fp-badge-text">
//                           {product.discountPercent}% off
//                         </span>
//                       </div>
//                     )}

//                     {product.featured && !hasDiscount && (
//                       <div className="fp-card-badge fp-card-badge-featured">
//                         <span className="fp-badge-text">Featured</span>
//                       </div>
//                     )}
//                   </div>

//                   {/* Details */}
//                   <div className="fp-card-details">
//                     <div
//                       className="fp-card-category"
//                       onClick={() => handleViewProduct(product.id)}
//                     >
//                       <span className="fp-category-line" />
//                       {product.category}
//                     </div>

//                     <h3
//                       className="fp-card-title"
//                       onClick={() => handleViewProduct(product.id)}
//                     >
//                       {product.title}
//                     </h3>

//                     <p className="fp-card-description">
//                       {product.description}
//                     </p>

//                     <div className="fp-card-pricing">
//                       {hasDiscount ? (
//                         <>
//                           <span className="fp-price-current">
//                             €{Math.round(discountedPrice)}
//                           </span>
//                           <span className="fp-price-original">
//                             €{product.price}
//                           </span>
//                           <span className="fp-price-save">
//                             Save {product.discountPercent}%
//                           </span>
//                         </>
//                       ) : (
//                         <span className="fp-price-current">
//                           €{product.price}
//                         </span>
//                       )}
//                     </div>

//                     <button
//                       className="fp-card-action"
//                       onClick={() => handleViewProduct(product.id)}
//                     >
//                       <span>Discover</span>
//                       <span className="fp-action-arrow">→</span>
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Fade Edges */}
//           <div className="fp-marquee-fade fp-marquee-fade-left" />
//           <div className="fp-marquee-fade fp-marquee-fade-right" />
//         </div>

//         {/* Footer */}
//         <div className="fp-footer">
//           <Link to="/products" className="fp-footer-link">
//             <span>Explore the complete collection</span>
//             <span className="fp-footer-arrow">→</span>
//           </Link>
//         </div>

//         {/* Essence Strip */}
//         <div className="fp-essence">
//           <div className="fp-essence-thread" />
//           <div className="fp-essence-items">
//             <div className="fp-essence-item">
//               <span className="fp-essence-word">Organic</span>
//               <span className="fp-essence-subtle">Certified purity</span>
//             </div>
//             <div className="fp-essence-separator" />
//             <div className="fp-essence-item">
//               <span className="fp-essence-word">Pure</span>
//               <span className="fp-essence-subtle">Chemical free</span>
//             </div>
//             <div className="fp-essence-separator" />
//             <div className="fp-essence-item">
//               <span className="fp-essence-word">Tested</span>
//               <span className="fp-essence-subtle">Lab verified</span>
//             </div>
//             <div className="fp-essence-separator" />
//             <div className="fp-essence-item">
//               <span className="fp-essence-word">Fresh</span>
//               <span className="fp-essence-subtle">Direct from farm</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FeaturedProducts;



// import { useEffect, useState, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import api from "../../services/api";
// import "./FeaturedProducts.css";

// function FeaturedProducts() {
//   const [products, setProducts] = useState([]);
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
//   const [isVisible, setIsVisible] = useState(false);
//   const navigate = useNavigate();
//   const sectionRef = useRef(null);
//   const marqueeRef = useRef(null);

//   useEffect(() => {
//     loadProducts();
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.15 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (sectionRef.current) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         setMousePosition({
//           x: (e.clientX - rect.left) / rect.width,
//           y: (e.clientY - rect.top) / rect.height,
//         });
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove, { passive: true });
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const loadProducts = async () => {
//     try {
//       const { data } = await api.get("/products/featured");
//       setProducts(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const calculateDiscountedPrice = (price, discountPercent) => {
//     if (discountPercent && discountPercent > 0) {
//       return price - (price * discountPercent) / 100;
//     }
//     return null;
//   };

//   const handleViewProduct = (productId) => {
//     navigate(`/products/${productId}`);
//   };

//   const marqueeProducts = [...products, ...products];

//   return (
//     <section
//       ref={sectionRef}
//       className={`fp-premium ${isVisible ? "fp-visible" : ""}`}
//       style={{
//         "--mouse-x": mousePosition.x,
//         "--mouse-y": mousePosition.y,
//       }}
//     >
//       {/* Ambient Atmosphere */}
//       <div className="fp-atmosphere" aria-hidden="true">
//         <div className="fp-glow fp-glow--warm" />
//         <div className="fp-glow fp-glow--fresh" />
//         <div className="fp-glow fp-glow--sky" />
//         <div className="fp-mesh" />
//         <div className="fp-grain" />
//       </div>

//       {/* Floating Glass Orbs */}
//       <div className="fp-orbs" aria-hidden="true">
//         <div className="fp-orb fp-orb--large" />
//         <div className="fp-orb fp-orb--medium" />
//         <div className="fp-orb fp-orb--small" />
//       </div>

//       <div className="fp-container">
//         {/* Header */}
//         <div className="fp-header">
//           <div className="fp-thread" />
//           <div className="fp-header-content">
//             <div className="fp-whisper">
//               <span className="fp-whisper-pulse" />
//               <span>Curated with intention</span>
//             </div>

//             <h2 className="fp-headline">
//               <span className="fp-headline-line">Naturally sourced,</span>
//               <span className="fp-headline-line fp-headline-radiance">
//                 delivered with care.
//               </span>
//             </h2>

//             <p className="fp-prose">
//               Handpicked organic, chemical-free provisions sourced directly 
//               from trusted farms. Each product carries the purity of its origin 
//               — curated intentionally for your wellness journey.
//             </p>
//           </div>
//         </div>

//         {/* Marquee Carousel */}
//         <div
//           className="fp-marquee-stage"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           <div
//             ref={marqueeRef}
//             className={`fp-marquee-track ${isPaused ? "fp-marquee-paused" : ""}`}
//           >
//             {marqueeProducts.map((product, index) => {
//               const discountedPrice = calculateDiscountedPrice(
//                 product.price,
//                 product.discountPercent
//               );
//               const hasDiscount =
//                 product.discountPercent && product.discountPercent > 0;

//               return (
//                 <div
//                   key={`${product.id}-${index}`}
//                   className={`fp-card ${
//                     hoveredProduct === `${product.id}-${index}`
//                       ? "fp-card-hovered"
//                       : ""
//                   }`}
//                   onMouseEnter={() =>
//                     setHoveredProduct(`${product.id}-${index}`)
//                   }
//                   onMouseLeave={() => setHoveredProduct(null)}
//                 >
//                   {/* Card Atmosphere */}
//                   <div className="fp-card-atmosphere" aria-hidden="true">
//                     <div className="fp-card-glow" />
//                   </div>

//                   {/* Image */}
//                   <div
//                     className="fp-card-media"
//                     onClick={() => handleViewProduct(product.id)}
//                   >
//                     <div className="fp-card-image-wrap">
//                       <img
//                         src={`https://a4agroup.eu${product.image}`}
//                         alt={product.title}
//                         className="fp-card-image"
//                         loading="lazy"
//                       />
//                       <div className="fp-card-image-veil" />
//                     </div>

//                     {hasDiscount && (
//                       <div className="fp-card-badge">
//                         <span className="fp-badge-text">
//                           {product.discountPercent}% off
//                         </span>
//                       </div>
//                     )}

//                     {product.featured && !hasDiscount && (
//                       <div className="fp-card-badge fp-card-badge-featured">
//                         <span className="fp-badge-text">Featured</span>
//                       </div>
//                     )}
//                   </div>

//                   {/* Details */}
//                   <div className="fp-card-details">
//                     <div
//                       className="fp-card-category"
//                       onClick={() => handleViewProduct(product.id)}
//                     >
//                       <span className="fp-category-line" />
//                       {product.category}
//                     </div>

//                     <h3
//                       className="fp-card-title"
//                       onClick={() => handleViewProduct(product.id)}
//                     >
//                       {product.title}
//                     </h3>

//                     <p className="fp-card-description">
//                       {product.description}
//                     </p>

//                     <div className="fp-card-pricing">
//                       {hasDiscount ? (
//                         <>
//                           <span className="fp-price-current">
//                             €{Math.round(discountedPrice)}
//                           </span>
//                           <span className="fp-price-original">
//                             €{product.price}
//                           </span>
//                           <span className="fp-price-save">
//                             Save {product.discountPercent}%
//                           </span>
//                         </>
//                       ) : (
//                         <span className="fp-price-current">
//                           €{product.price}
//                         </span>
//                       )}
//                     </div>

//                     <button
//                       className="fp-card-action"
//                       onClick={() => handleViewProduct(product.id)}
//                     >
//                       <span>Discover</span>
//                       <span className="fp-action-arrow">→</span>
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Fade Edges */}
//           <div className="fp-marquee-fade fp-marquee-fade-left" />
//           <div className="fp-marquee-fade fp-marquee-fade-right" />
//         </div>

//         {/* Footer */}
//         <div className="fp-footer">
//           <Link to="/products" className="fp-footer-link">
//             <span>Explore the complete collection</span>
//             <span className="fp-footer-arrow">→</span>
//           </Link>
//         </div>

//         {/* Essence Strip */}
//         <div className="fp-essence">
//           <div className="fp-essence-thread" />
//           <div className="fp-essence-items">
//             <div className="fp-essence-item">
//               <span className="fp-essence-word">Organic</span>
//               <span className="fp-essence-subtle">Certified purity</span>
//             </div>
//             <div className="fp-essence-separator" />
//             <div className="fp-essence-item">
//               <span className="fp-essence-word">Pure</span>
//               <span className="fp-essence-subtle">Chemical free</span>
//             </div>
//             <div className="fp-essence-separator" />
//             <div className="fp-essence-item">
//               <span className="fp-essence-word">Tested</span>
//               <span className="fp-essence-subtle">Lab verified</span>
//             </div>
//             <div className="fp-essence-separator" />
//             <div className="fp-essence-item">
//               <span className="fp-essence-word">Fresh</span>
//               <span className="fp-essence-subtle">Direct from farm</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FeaturedProducts;




// import { useEffect, useState, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import api from "../../services/api";
// import "./FeaturedProducts.css";

// function FeaturedProducts() {
//   const [products, setProducts] = useState([]);
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
//   const [isVisible, setIsVisible] = useState(false);
//   const navigate = useNavigate();
//   const sectionRef = useRef(null);
//   const marqueeRef = useRef(null);

//   useEffect(() => {
//     loadProducts();
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.15 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (sectionRef.current) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         setMousePosition({
//           x: (e.clientX - rect.left) / rect.width,
//           y: (e.clientY - rect.top) / rect.height,
//         });
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove, { passive: true });
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const loadProducts = async () => {
//     try {
//       const { data } = await api.get("/products/featured");
//       setProducts(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const calculateDiscountedPrice = (price, discountPercent) => {
//     if (discountPercent && discountPercent > 0) {
//       return price - (price * discountPercent) / 100;
//     }
//     return null;
//   };

//   const handleViewProduct = (productId) => {
//     navigate(`/products/${productId}`);
//   };

//   const marqueeProducts = [...products, ...products];

//   return (
//     <section
//       ref={sectionRef}
//       className={`fp-premium ${isVisible ? "fp-visible" : ""}`}
//       style={{
//         "--mouse-x": mousePosition.x,
//         "--mouse-y": mousePosition.y,
//       }}
//     >
//       {/* Ambient Atmosphere */}
//       <div className="fp-atmosphere" aria-hidden="true">
//         <div className="fp-glow fp-glow--teal" />
//         <div className="fp-glow fp-glow--blue" />
//         <div className="fp-glow fp-glow--emerald" />
//         <div className="fp-mesh" />
//         <div className="fp-grain" />
//         <div className="fp-vignette" />
//       </div>

//       {/* Floating Glass Orbs */}
//       <div className="fp-orbs" aria-hidden="true">
//         <div className="fp-orb fp-orb--primary" />
//         <div className="fp-orb fp-orb--secondary" />
//         <div className="fp-orb fp-orb--tertiary" />
//       </div>

//       <div className="fp-container">
//         {/* Header */}
//         <div className="fp-header">
//           <div className="fp-thread" />
//           <div className="fp-header-content">
//             <div className="fp-whisper">
//               <span className="fp-whisper-pulse" />
//               <span>Curated with intention</span>
//             </div>

//             <h2 className="fp-headline">
//               <span className="fp-headline-line">Naturally sourced,</span>
//               <span className="fp-headline-line fp-headline-radiance">
//                 delivered with care.
//               </span>
//             </h2>

//             <p className="fp-prose">
//               Handpicked organic, chemical-free provisions sourced directly 
//               from trusted farms. Each product carries the purity of its origin 
//               — curated intentionally for your wellness journey.
//             </p>
//           </div>
//         </div>

//         {/* Marquee Carousel */}
//         <div
//           className="fp-marquee-stage"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           <div
//             ref={marqueeRef}
//             className={`fp-marquee-track ${isPaused ? "fp-marquee-paused" : ""}`}
//           >
//             {marqueeProducts.map((product, index) => {
//               const discountedPrice = calculateDiscountedPrice(
//                 product.price,
//                 product.discountPercent
//               );
//               const hasDiscount =
//                 product.discountPercent && product.discountPercent > 0;

//               return (
//                 <div
//                   key={`${product.id}-${index}`}
//                   className={`fp-card ${
//                     hoveredProduct === `${product.id}-${index}`
//                       ? "fp-card-hovered"
//                       : ""
//                   }`}
//                   onMouseEnter={() =>
//                     setHoveredProduct(`${product.id}-${index}`)
//                   }
//                   onMouseLeave={() => setHoveredProduct(null)}
//                 >
//                   {/* Card Shine */}
//                   <div className="fp-card-shine" aria-hidden="true" />

//                   {/* Image */}
//                   <div
//                     className="fp-card-media"
//                     onClick={() => handleViewProduct(product.id)}
//                   >
//                     <div className="fp-card-image-wrap">
//                       <img
//                         src={`https://a4agroup.eu${product.image}`}
//                         alt={product.title}
//                         className="fp-card-image"
//                         loading="lazy"
//                       />
//                       <div className="fp-card-image-veil" />
//                     </div>

//                     {hasDiscount && (
//                       <div className="fp-card-badge fp-card-badge-discount">
//                         <span className="fp-badge-text">
//                           {product.discountPercent}% off
//                         </span>
//                       </div>
//                     )}

//                     {product.featured && !hasDiscount && (
//                       <div className="fp-card-badge fp-card-badge-featured">
//                         <span className="fp-badge-text">Featured</span>
//                       </div>
//                     )}
//                   </div>

//                   {/* Details */}
//                   <div className="fp-card-details">
//                     <div
//                       className="fp-card-category"
//                       onClick={() => handleViewProduct(product.id)}
//                     >
//                       <span className="fp-category-line" />
//                       {product.category}
//                     </div>

//                     <h3
//                       className="fp-card-title"
//                       onClick={() => handleViewProduct(product.id)}
//                     >
//                       {product.title}
//                     </h3>

//                     <p className="fp-card-description">
//                       {product.description}
//                     </p>

//                     <div className="fp-card-pricing">
//                       {hasDiscount ? (
//                         <>
//                           <span className="fp-price-current">
//                             €{Math.round(discountedPrice)}
//                           </span>
//                           <span className="fp-price-original">
//                             €{product.price}
//                           </span>
//                           <span className="fp-price-save">
//                             Save {product.discountPercent}%
//                           </span>
//                         </>
//                       ) : (
//                         <span className="fp-price-current">
//                           €{product.price}
//                         </span>
//                       )}
//                     </div>

//                     <button
//                       className="fp-card-action"
//                       onClick={() => handleViewProduct(product.id)}
//                     >
//                       <span>Discover</span>
//                       <span className="fp-action-arrow">→</span>
//                     </button>
//                   </div>

//                   {/* Card Edge Glow */}
//                   <div className="fp-card-edge" aria-hidden="true" />
//                 </div>
//               );
//             })}
//           </div>

//           {/* Fade Edges */}
//           <div className="fp-marquee-fade fp-marquee-fade-left" />
//           <div className="fp-marquee-fade fp-marquee-fade-right" />
//         </div>

//         {/* Footer */}
//         <div className="fp-footer">
//           <Link to="/products" className="fp-footer-link">
//             <span>Explore the complete collection</span>
//             <span className="fp-footer-arrow">→</span>
//           </Link>
//         </div>

//         {/* Essence Strip */}
//         <div className="fp-essence">
//           <div className="fp-essence-thread" />
//           <div className="fp-essence-items">
//             <div className="fp-essence-item">
//               <span className="fp-essence-word">Organic</span>
//               <span className="fp-essence-subtle">Certified purity</span>
//             </div>
//             <div className="fp-essence-separator" />
//             <div className="fp-essence-item">
//               <span className="fp-essence-word">Pure</span>
//               <span className="fp-essence-subtle">Chemical free</span>
//             </div>
//             <div className="fp-essence-separator" />
//             <div className="fp-essence-item">
//               <span className="fp-essence-word">Tested</span>
//               <span className="fp-essence-subtle">Lab verified</span>
//             </div>
//             <div className="fp-essence-separator" />
//             <div className="fp-essence-item">
//               <span className="fp-essence-word">Fresh</span>
//               <span className="fp-essence-subtle">Direct from farm</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FeaturedProducts;



// import { useEffect, useState, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import api from "../../services/api";
// import "./FeaturedProducts.css";

// function FeaturedProducts() {
//   const [products, setProducts] = useState([]);
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
//   const [isVisible, setIsVisible] = useState(false);
//   const navigate = useNavigate();
//   const sectionRef = useRef(null);
//   const marqueeRef = useRef(null);

//   useEffect(() => {
//     loadProducts();
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.15 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (sectionRef.current) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         setMousePosition({
//           x: (e.clientX - rect.left) / rect.width,
//           y: (e.clientY - rect.top) / rect.height,
//         });
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove, { passive: true });
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const loadProducts = async () => {
//     try {
//       const { data } = await api.get("/products/featured");
//       setProducts(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const calculateDiscountedPrice = (price, discountPercent) => {
//     if (discountPercent && discountPercent > 0) {
//       return price - (price * discountPercent) / 100;
//     }
//     return null;
//   };

//   const handleViewProduct = (productId) => {
//     navigate(`/products/${productId}`);
//   };

//   const marqueeProducts = products.length > 0 ? [...products, ...products] : [];

//   return (
//     <section
//       ref={sectionRef}
//       className={`fp-premium ${isVisible ? "fp-visible" : ""}`}
//       style={{
//         "--mouse-x": mousePosition.x,
//         "--mouse-y": mousePosition.y,
//       }}
//     >
//       {/* Ambient Atmosphere */}
//       <div className="fp-atmosphere" aria-hidden="true">
//         <div className="fp-glow fp-glow--teal" />
//         <div className="fp-glow fp-glow--blue" />
//         <div className="fp-glow fp-glow--emerald" />
//         <div className="fp-mesh" />
//         <div className="fp-grain" />
//         <div className="fp-vignette" />
//       </div>

//       {/* Floating Glass Orbs */}
//       <div className="fp-orbs" aria-hidden="true">
//         <div className="fp-orb fp-orb--primary" />
//         <div className="fp-orb fp-orb--secondary" />
//         <div className="fp-orb fp-orb--tertiary" />
//       </div>

//       <div className="fp-container">
//         {/* Header */}
//         <div className="fp-header">
//           <div className="fp-thread" />
//           <div className="fp-header-content">
//             <div className="fp-whisper">
//               <span className="fp-whisper-pulse" />
//               <span>Curated with intention</span>
//             </div>

//             <h2 className="fp-headline">
//               <span className="fp-headline-line">Naturally sourced,</span>
//               <span className="fp-headline-line fp-headline-radiance">
//                 delivered with care.
//               </span>
//             </h2>

//             <p className="fp-prose">
//               Handpicked organic, chemical-free provisions sourced directly 
//               from trusted farms. Each product carries the purity of its origin 
//               — curated intentionally for your wellness journey.
//             </p>
//           </div>
//         </div>

//         {/* Marquee Carousel */}
//         <div
//           className="fp-marquee-stage"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           <div
//             ref={marqueeRef}
//             className={`fp-marquee-track ${isPaused ? "fp-marquee-paused" : ""}`}
//           >
//             {marqueeProducts.map((product, index) => {
//               const discountedPrice = calculateDiscountedPrice(
//                 product.price,
//                 product.discountPercent
//               );
//               // Only show discount if discountPercent exists AND is greater than 0
//               const hasDiscount = product.discountPercent && product.discountPercent > 0;

//               return (
//                 <div
//                   key={`${product.id}-${index}`}
//                   className={`fp-card ${
//                     hoveredProduct === `${product.id}-${index}`
//                       ? "fp-card-hovered"
//                       : ""
//                   }`}
//                   onMouseEnter={() =>
//                     setHoveredProduct(`${product.id}-${index}`)
//                   }
//                   onMouseLeave={() => setHoveredProduct(null)}
//                 >
//                   {/* Card Shine */}
//                   <div className="fp-card-shine" aria-hidden="true" />

//                   {/* Image */}
//                   <div
//                     className="fp-card-media"
//                     onClick={() => handleViewProduct(product.id)}
//                   >
//                     <div className="fp-card-image-wrap">
//                       <img
//                         src={`https://a4agroup.eu${product.image}`}
//                         alt={product.title}
//                         className="fp-card-image"
//                         loading="lazy"
//                       />
//                       <div className="fp-card-image-veil" />
//                     </div>

//                     {/* Discount Badge - Only shown when hasDiscount is true */}
//                     {hasDiscount && (
//                       <div className="fp-card-badge fp-card-badge-discount">
//                         <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="fp-badge-icon">
//                           <path d="M7 1L9 5.5L13.5 6.5L10 10L11 14.5L7 12L3 14.5L4 10L0.5 6.5L5 5.5L7 1Z" fill="currentColor"/>
//                         </svg>
//                         <span className="fp-badge-text">
//                           {product.discountPercent}% OFF
//                         </span>
//                       </div>
//                     )}

//                     {/* Featured Badge - Only shown when featured AND no discount */}
//                     {product.featured && !hasDiscount && (
//                       <div className="fp-card-badge fp-card-badge-featured">
//                         <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="fp-badge-icon">
//                           <path d="M6 0L7.5 4.5L12 4.5L8.25 7.5L9.75 12L6 9L2.25 12L3.75 7.5L0 4.5L4.5 4.5L6 0Z" fill="currentColor"/>
//                         </svg>
//                         <span className="fp-badge-text">Featured</span>
//                       </div>
//                     )}
//                   </div>

//                   {/* Details */}
//                   <div className="fp-card-details">
//                     <div
//                       className="fp-card-category"
//                       onClick={() => handleViewProduct(product.id)}
//                     >
//                       <span className="fp-category-line" />
//                       {product.category}
//                     </div>

//                     <h3
//                       className="fp-card-title"
//                       onClick={() => handleViewProduct(product.id)}
//                     >
//                       {product.title}
//                     </h3>

//                     <p className="fp-card-description">
//                       {product.description}
//                     </p>

//                     <div className="fp-card-pricing">
//                       {hasDiscount ? (
//                         <>
//                           <span className="fp-price-current">
//                             €{Math.round(discountedPrice)}
//                           </span>
//                           <span className="fp-price-original">
//                             €{product.price}
//                           </span>
//                           <span className="fp-price-save">
//                             Save {product.discountPercent}%
//                           </span>
//                         </>
//                       ) : (
//                         <span className="fp-price-current">
//                           €{product.price}
//                         </span>
//                       )}
//                     </div>

//                     <button
//                       className="fp-card-action"
//                       onClick={() => handleViewProduct(product.id)}
//                     >
//                       <span>Discover</span>
//                       <span className="fp-action-arrow">→</span>
//                     </button>
//                   </div>

//                   {/* Card Edge Glow */}
//                   <div className="fp-card-edge" aria-hidden="true" />
//                 </div>
//               );
//             })}
//           </div>

//           {/* Fade Edges */}
//           <div className="fp-marquee-fade fp-marquee-fade-left" />
//           <div className="fp-marquee-fade fp-marquee-fade-right" />
//         </div>

//         {/* Footer */}
//         <div className="fp-footer">
//           <Link to="/products" className="fp-footer-link">
//             <span>Explore the complete collection</span>
//             <span className="fp-footer-arrow">→</span>
//           </Link>
//         </div>

//         {/* Essence Strip */}
//         <div className="fp-essence">
//           <div className="fp-essence-thread" />
//           <div className="fp-essence-items">
//             <div className="fp-essence-item">
//               <span className="fp-essence-word">Organic</span>
//               <span className="fp-essence-subtle">Certified purity</span>
//             </div>
//             <div className="fp-essence-separator" />
//             <div className="fp-essence-item">
//               <span className="fp-essence-word">Pure</span>
//               <span className="fp-essence-subtle">Chemical free</span>
//             </div>
//             <div className="fp-essence-separator" />
//             <div className="fp-essence-item">
//               <span className="fp-essence-word">Tested</span>
//               <span className="fp-essence-subtle">Lab verified</span>
//             </div>
//             <div className="fp-essence-separator" />
//             <div className="fp-essence-item">
//               <span className="fp-essence-word">Fresh</span>
//               <span className="fp-essence-subtle">Direct from farm</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FeaturedProducts;

// import { useEffect, useState, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import api from "../../services/api";
// import "./FeaturedProducts.css";

// function FeaturedProducts() {
//   const [products, setProducts] = useState([]);
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
//   const [isVisible, setIsVisible] = useState(false);
//   const navigate = useNavigate();
//   const sectionRef = useRef(null);
//   const marqueeRef = useRef(null);

//   useEffect(() => {
//     loadProducts();
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.15 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       if (sectionRef.current) {
//         const rect = sectionRef.current.getBoundingClientRect();
//         setMousePosition({
//           x: (e.clientX - rect.left) / rect.width,
//           y: (e.clientY - rect.top) / rect.height,
//         });
//       }
//     };

//     window.addEventListener("mousemove", handleMouseMove, { passive: true });
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const loadProducts = async () => {
//     try {
//       const { data } = await api.get("/products/featured");
//       setProducts(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const calculateDiscountedPrice = (price, discountPercent) => {
//     if (discountPercent && discountPercent > 0) {
//       return price - (price * discountPercent) / 100;
//     }
//     return null;
//   };

//   const handleViewProduct = (productId) => {
//     navigate(`/products/${productId}`);
//   };

//   const marqueeProducts = products.length > 0 ? [...products, ...products] : [];

//   return (
//     <section
//       ref={sectionRef}
//       className={`fp-premium ${isVisible ? "fp-visible" : ""}`}
//       style={{
//         "--mouse-x": mousePosition.x,
//         "--mouse-y": mousePosition.y,
//       }}
//     >
//       {/* Ambient Atmosphere */}
//       <div className="fp-atmosphere" aria-hidden="true">
//         <div className="fp-glow fp-glow--teal" />
//         <div className="fp-glow fp-glow--blue" />
//         <div className="fp-glow fp-glow--emerald" />
//         <div className="fp-mesh" />
//         <div className="fp-grain" />
//         <div className="fp-vignette" />
//       </div>

//       <div className="fp-container">
//         {/* Header - Compact */}
//         <div className="fp-header">
//           <div className="fp-header-content">
//             <div className="fp-whisper">
//               <span className="fp-whisper-pulse" />
//               <span>Curated Collection</span>
//             </div>
//             <h2 className="fp-headline">
//               Naturally sourced, delivered with care.
//             </h2>
//             <p className="fp-prose">
//               Handpicked organic provisions from trusted farms — curated for your wellness journey.
//             </p>
//           </div>
//         </div>

//         {/* Marquee Carousel - Compact Image-Overlay Cards */}
//         <div
//           className="fp-marquee-stage"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           <div
//             ref={marqueeRef}
//             className={`fp-marquee-track ${isPaused ? "fp-marquee-paused" : ""}`}
//           >
//             {marqueeProducts.map((product, index) => {
//               const discountedPrice = calculateDiscountedPrice(
//                 product.price,
//                 product.discountPercent
//               );
//               const hasDiscount = product.discountPercent && product.discountPercent > 0;

//               return (
//                 <div
//                   key={`${product.id}-${index}`}
//                   className={`fp-card ${
//                     hoveredProduct === `${product.id}-${index}` ? "fp-card-hovered" : ""
//                   }`}
//                   onMouseEnter={() => setHoveredProduct(`${product.id}-${index}`)}
//                   onMouseLeave={() => setHoveredProduct(null)}
//                   onClick={() => handleViewProduct(product.id)}
//                 >
//                   {/* Image Container */}
//                   <div className="fp-card-image-wrap">
//                     <img
//                       src={`https://a4agroup.eu${product.image}`}
//                       alt={product.title}
//                       className="fp-card-image"
//                       loading="lazy"
//                     />
                    
//                     {/* Gradient Overlay - Bottom to Top */}
//                     <div className="fp-card-gradient" />
                    
//                     {/* Content Overlay */}
//                     <div className="fp-card-content">
//                       {/* Top Badges */}
//                       <div className="fp-card-badges">
//                         {hasDiscount && (
//                           <div className="fp-badge fp-badge-discount">
//                             <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="fp-badge-icon">
//                               <path d="M7 1L9 5.5L13.5 6.5L10 10L11 14.5L7 12L3 14.5L4 10L0.5 6.5L5 5.5L7 1Z" fill="currentColor"/>
//                             </svg>
//                             <span>{product.discountPercent}% OFF</span>
//                           </div>
//                         )}
//                         {product.featured && !hasDiscount && (
//                           <div className="fp-badge fp-badge-featured">
//                             <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="fp-badge-icon">
//                               <path d="M6 0L7.5 4.5L12 4.5L8.25 7.5L9.75 12L6 9L2.25 12L3.75 7.5L0 4.5L4.5 4.5L6 0Z" fill="currentColor"/>
//                             </svg>
//                             <span>Featured</span>
//                           </div>
//                         )}
//                       </div>

//                       {/* Bottom Info */}
//                       <div className="fp-card-info">
//                         <div className="fp-card-category">
//                           {product.category}
//                         </div>
//                         <h3 className="fp-card-title">
//                           {product.title}
//                         </h3>
//                         <div className="fp-card-pricing">
//                           {hasDiscount ? (
//                             <>
//                               <span className="fp-price-current">€{Math.round(discountedPrice)}</span>
//                               <span className="fp-price-original">€{product.price}</span>
//                             </>
//                           ) : (
//                             <span className="fp-price-current">€{product.price}</span>
//                           )}
//                         </div>
//                       </div>
//                     </div>

//                     {/* Hover Overlay */}
//                     <div className="fp-card-hover-overlay">
//                       <span className="fp-hover-text">Discover Product</span>
//                       <span className="fp-hover-arrow">→</span>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Fade Edges */}
//           <div className="fp-marquee-fade fp-marquee-fade-left" />
//           <div className="fp-marquee-fade fp-marquee-fade-right" />
//         </div>

//         {/* Footer - Compact */}
//         <div className="fp-footer">
//           <Link to="/products" className="fp-footer-link">
//             <span>Explore complete collection</span>
//             <span className="fp-footer-arrow">→</span>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FeaturedProducts;

import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./FeaturedProducts.css";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const loadProducts = async () => {
    try {
      const { data } = await api.get("/products/featured");
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const calculateDiscountedPrice = (price, discountPercent) => {
    if (discountPercent && discountPercent > 0) {
      return price - (price * discountPercent) / 100;
    }
    return null;
  };

  const handleViewProduct = (productId) => {
    navigate(`/products/${productId}`);
  };

  const marqueeProducts = products.length > 0 ? [...products, ...products] : [];

  return (
    <section
      ref={sectionRef}
      className={`fp-compact ${isVisible ? "fp-visible" : ""}`}
    >
      {/* Background */}
      <div className="fp-bg-compact" aria-hidden="true">
        <div className="fp-glow-compact fp-glow-compact--teal" />
        <div className="fp-glow-compact fp-glow-compact--blue" />
        <div className="fp-grain-compact" />
      </div>

      <div className="fp-container-compact">
        {/* Header - Minimal */}
        <div className="fp-header-compact">
          <div className="fp-tag-compact">
            <span className="fp-tag-dot" />
            <span>Curated Collection</span>
          </div>
          <h2 className="fp-title-compact">
            Naturally sourced, <span className="fp-title-highlight">delivered with care</span>
          </h2>
        </div>

        {/* Marquee */}
        <div
          className="fp-marquee-compact"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`fp-track-compact ${isPaused ? "fp-paused" : ""}`}>
            {marqueeProducts.map((product, index) => {
              const discountedPrice = calculateDiscountedPrice(
                product.price,
                product.discountPercent
              );
              const hasDiscount = product.discountPercent && product.discountPercent > 0;

              return (
                <div
                  key={`${product.id}-${index}`}
                  className={`fp-card-compact ${
                    hoveredProduct === `${product.id}-${index}` ? "fp-card-hovered" : ""
                  }`}
                  onMouseEnter={() => setHoveredProduct(`${product.id}-${index}`)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  onClick={() => handleViewProduct(product.id)}
                >
                  <div className="fp-card-image-compact">
                    <img
                      src={`https://a4agroup.eu${product.image}`}
                      alt={product.title}
                      loading="lazy"
                    />
                    
                    {/* Discount Badge - Small */}
                    {hasDiscount && (
                      <div className="fp-discount-badge">-{product.discountPercent}%</div>
                    )}
                    
                    {/* Featured Badge */}
                    {product.featured && !hasDiscount && (
                      <div className="fp-featured-badge">✦</div>
                    )}
                  </div>

                  <div className="fp-card-body-compact">
                    <div className="fp-card-category-compact">
                      {product.category || "Organic"}
                    </div>
                    <h3 className="fp-card-title-compact">{product.title}</h3>
                    
                    <div className="fp-card-footer-compact">
                      <div className="fp-pricing-compact">
                        {hasDiscount ? (
                          <>
                            <span className="fp-price-compact fp-price-sale">
                              €{Math.round(discountedPrice)}
                            </span>
                            <span className="fp-price-compact fp-price-old">
                              €{product.price}
                            </span>
                          </>
                        ) : (
                          <span className="fp-price-compact">€{product.price}</span>
                        )}
                      </div>
                      
                      <button className="fp-view-btn" aria-label="View product">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Fade edges */}
          <div className="fp-fade-compact fp-fade-left" />
          <div className="fp-fade-compact fp-fade-right" />
        </div>

        {/* Footer */}
        <div className="fp-footer-compact">
          <Link to="/products" className="fp-link-compact">
            <span>View All Products</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;