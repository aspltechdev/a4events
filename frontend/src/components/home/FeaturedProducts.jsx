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
// //             <p>₹{product.price}</p>
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
// //                     ₹{product.price}
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
// //                     ₹{product.price}
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
// //                   <span className="price-current">₹{product.price}</span>
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
// //                         <span className="price-current">₹{Math.round(discountedPrice)}</span>
// //                         <span className="price-original">₹{product.price}</span>
// //                         <span className="price-save">Save {product.discountPercent}%</span>
// //                       </>
// //                     ) : (
// //                       <span className="price-current">₹{product.price}</span>
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
//                         <span className="fp__priceCurrent">₹{Math.round(discountedPrice)}</span>
//                         <span className="fp__priceOriginal">₹{product.price}</span>
//                         <span className="fp__priceSave">Save {product.discountPercent}%</span>
//                       </>
//                     ) : (
//                       <span className="fp__priceCurrent">₹{product.price}</span>
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




import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./FeaturedProducts.css";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const navigate = useNavigate();

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

  const calculateDiscountedPrice = (price, discountPercent) => {
    if (discountPercent && discountPercent > 0) {
      return price - (price * discountPercent / 100);
    }
    return null;
  };

  const handleAddToCart = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <section className="fp__wrapper">
      <div className="fp__bgSubtle"></div>
      <div className="fp__bgGradient"></div>

      <div className="fp__container">
        {/* Header Section */}
        <div className="fp__header">
          <div className="fp__headerMarker">
            <span className="fp__markerLine"></span>
            <span className="fp__markerText">PREMIUM COLLECTION</span>
          </div>
          
          <h2 className="fp__headline">
            Naturally sourced,
            <br />
            <span className="fp__headlineAccent">delivered with care</span>
          </h2>
          
          <p className="fp__subhead">
            Discover our handpicked selection of organic, chemical-free products 
            sourced directly from trusted farms. Each item is carefully curated 
            for your wellness journey.
          </p>
        </div>

        {/* Products Grid */}
        <div className="fp__grid">
          {products.map((product, index) => {
            const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercent);
            const hasDiscount = product.discountPercent && product.discountPercent > 0;
            
            return (
              <div
                key={product.id}
                className={`fp__card ${hoveredProduct === product.id ? 'fp__cardHovered' : ''}`}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Image Section - Clickable */}
                <div 
                  className="fp__media"
                  onClick={() => handleAddToCart(product.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="fp__imageWrapper">
                    <img
                      // src={`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}${product.image}`}
                       src={`http://localhost:5000${product.image}`}
                      // alt={product.title}
                      className="fp__image"
                      loading="lazy"
                    />
                    <div className="fp__imageBackdrop"></div>
                  </div>
                  
                  {hasDiscount && (
                    <div className="fp__discountBadge">
                      <span>{product.discountPercent}% OFF</span>
                    </div>
                  )}
                  
                  {product.featured && !hasDiscount && (
                    <div className="fp__featuredBadge">
                      <span>Featured</span>
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="fp__details">
                  <div 
                    className="fp__category"
                    onClick={() => handleAddToCart(product.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {product.category}
                  </div>
                  
                  <h3 
                    className="fp__title"
                    onClick={() => handleAddToCart(product.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {product.title}
                  </h3>
                  
                  <p className="fp__description">{product.description}</p>
                  
                  <div className="fp__pricing">
                    {hasDiscount ? (
                      <>
                        <span className="fp__priceCurrent">₹{Math.round(discountedPrice)}</span>
                        <span className="fp__priceOriginal">₹{product.price}</span>
                        <span className="fp__priceSave">Save {product.discountPercent}%</span>
                      </>
                    ) : (
                      <span className="fp__priceCurrent">₹{product.price}</span>
                    )}
                  </div>
                  
                  <button 
                    className="fp__actionBtn"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    View Product
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Actions */}
        <div className="fp__footer">
          <Link to="/products" className="fp__viewAllBtn">
            Explore Complete Collection
            <span className="fp__arrowIcon">→</span>
          </Link>
        </div>

        {/* Quality Assurance */}
        <div className="fp__qualitySection">
          <div className="fp__qualityLine"></div>
          <div className="fp__qualityBadges">
            <div className="fp__qualityBadge">Certified Organic</div>
            <div className="fp__qualitySeparator"></div>
            <div className="fp__qualityBadge">Chemical Free</div>
            <div className="fp__qualitySeparator"></div>
            <div className="fp__qualityBadge">Lab Tested</div>
            <div className="fp__qualitySeparator"></div>
            <div className="fp__qualityBadge">Fresh Stock</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;