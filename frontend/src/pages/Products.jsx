

// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import api from '../services/api';
// import PublicLayout from '../layouts/PublicLayout';

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const { data } = await api.get('/products');
//       setProducts(data);
//         console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };


// return (
//     <PublicLayout>
//   <div style={{ padding: '20px' }}>
//     <h1>Products</h1>

//     <div
//       style={{
//         display: 'grid',
//         gridTemplateColumns:
//           'repeat(auto-fill, minmax(250px, 1fr))',
//         gap: '20px'
//       }}
//     >
//       {products.map((product) => (
        
//         <div
//           key={product.id}
//           style={{
//             border: '1px solid #ddd',
//             borderRadius: '10px',
//             padding: '15px'
//           }}
//         >
//           {product.image && (
//             <img
//               src={`http://localhost:5000${product.image}`}
//               alt={product.title}
//               style={{
//                 width: '100%',
//                 height: '220px',
//                 objectFit: 'cover'
//               }}
//             />
//           )}

//           <h3>{product.title}</h3>

//           <p>€{product.price}</p>

//           <Link to={`/products/${product.id}`}>
//             View Details
//           </Link>
//         </div>
//       ))}
//     </div>
//   </div>
//   </PublicLayout>
// );
// }

// export default Products;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../services/api";
// import PublicLayout from "../layouts/PublicLayout";
// import "./Products.css";

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const { data } = await api.get("/products");
//       setProducts(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <PublicLayout>

//       <section className="a4-products-page">

//         <div className="a4-products-page-header">

//           <span className="a4-products-page-tag">
//             FOOD & BEVERAGES
//           </span>

//           <h1 className="a4-products-page-title">
//             Delicious Flavours For Every Occasion
//           </h1>

//           <p className="a4-products-page-description">
//             Explore our range of snacks, beverages,
//             desserts and signature favourites crafted
//             with quality ingredients and unforgettable taste.
//           </p>

//         </div>

//         <div className="a4-products-page-grid">

//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="a4-products-page-card"
//             >

//               <div className="a4-products-page-image-wrapper">

//                 {product.image && (
//                   <img
//                     src={`http://localhost:5000${product.image}`}
//                     alt={product.title}
//                     className="a4-products-page-image"
//                   />
//                 )}

//               </div>

//               <div className="a4-products-page-content">

//                 <span className="a4-products-page-badge">
//                   Best Seller
//                 </span>

//                 <h3 className="a4-products-page-product-title">
//                   {product.title}
//                 </h3>

//                 <div className="a4-products-page-footer">

//                   <span className="a4-products-page-price">
//                     €{product.price}
//                   </span>

//                   <Link
//                     to={`/products/${product.id}`}
//                     className="a4-products-page-btn"
//                   >
//                     View Details
//                   </Link>

//                 </div>

//               </div>

//             </div>
//           ))}

//         </div>

//       </section>

//     </PublicLayout>
//   );
// }

// export default Products;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../services/api";
// import PublicLayout from "../layouts/PublicLayout";
// import "./Products.css";

// function Products() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const { data } = await api.get("/products");
//       setProducts(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const categories = [
//     ...new Set(
//       products.map(
//         (product) => product.category
//       )
//     ),
//   ];

//   return (
//     <PublicLayout>
//       <section className="a4-products-page">

//         <div className="a4-products-page-header">

//           <span className="a4-products-page-tag">
//             ETA FOODS
//           </span>

//           <h1 className="a4-products-page-title">
//             Healthy & Organic Products
//           </h1>

//           <p className="a4-products-page-description">
//             Explore our collection of millet mixes,
//             rice, snacks, organics, oils and
//             seasonal products.
//           </p>

//         </div>

//         {categories.map((category) => {

//           const categoryProducts =
//             products.filter(
//               (product) =>
//                 product.category === category
//             );

//           return (
//             <div
//               key={category}
//               className="a4-category-section"
//             >

//               <h2 className="a4-category-title">
//                 {category}
//               </h2>

//               <div className="a4-products-page-grid">

//                 {categoryProducts.map(
//                   (product) => {

//                     const discountedPrice =
//                       product.price -
//                       (
//                         product.price *
//                         (product.discountPercent || 0)
//                       ) /
//                         100;

//                     return (
//                       <div
//                         key={product.id}
//                         className="a4-products-page-card"
//                       >

//                         <div className="a4-products-page-image-wrapper">

//                           {product.image && (
//                             <img
//                               src={`http://localhost:5000${product.image}`}
//                               alt={product.title}
//                               className="a4-products-page-image"
//                             />
//                           )}

//                           {product.featured && (
//                             <span className="featured-badge">
//                               Featured
//                             </span>
//                           )}

//                           {product.discountPercent >
//                             0 && (
//                             <span className="discount-badge">
//                               {
//                                 product.discountPercent
//                               }
//                               % OFF
//                             </span>
//                           )}

//                         </div>

//                         <div className="a4-products-page-content">

//                           <span className="category-badge">
//                             {product.category}
//                           </span>

//                           <h3 className="a4-products-page-product-title">
//                             {product.title}
//                           </h3>

//                           <div className="product-price-box">

//                             <span className="discounted-price">
//                               €
//                               {discountedPrice.toFixed(
//                                 0
//                               )}
//                             </span>

//                             {product.discountPercent >
//                               0 && (
//                               <span className="original-price">
//                                 €
//                                 {
//                                   product.price
//                                 }
//                               </span>
//                             )}

//                           </div>

//                           <Link
//                             to={`/products/${product.id}`}
//                             className="a4-products-page-btn"
//                           >
//                             View Details
//                           </Link>

//                         </div>

//                       </div>
//                     );
//                   }
//                 )}

//               </div>

//             </div>
//           );
//         })}

//       </section>
//     </PublicLayout>
//   );
// }

// export default Products;





// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../services/api";
// import PublicLayout from "../layouts/PublicLayout";
// import "./Products.css";

// function Products() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const { data } = await api.get("/products");
//       setProducts(data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const categories = [...new Set(products.map((product) => product.category))];

//   const calculateDiscountedPrice = (price, discountPercent) => {
//     if (discountPercent && discountPercent > 0) {
//       return price - (price * discountPercent / 100);
//     }
//     return price;
//   };

//   if (loading) {
//     return (
//       <PublicLayout>
//         <div className="prd__loading">
//           <div className="prd__loadingContent">
//             <div className="prd__loadingSpinner"></div>
//             <p>Loading products...</p>
//           </div>
//         </div>
//       </PublicLayout>
//     );
//   }

//   return (
//     <PublicLayout>
//       <section className="prd__wrapper">
//         <div className="prd__bgSubtle"></div>
//         <div className="prd__bgGradient"></div>

//         <div className="prd__container">
//           {/* Hero Header */}
//           <div className="prd__hero">
//             <div className="prd__heroBadge">
//               <span className="prd__heroLine"></span>
//               <span className="prd__heroText">ETA FOODS</span>
//             </div>
            
//             <h1 className="prd__heroTitle">
//               Healthy & Organic
//               <br />
//               <span className="prd__heroAccent">products for everyday wellness</span>
//             </h1>
            
//             <p className="prd__heroDescription">
//               Explore our collection of millet mixes, rice, snacks, organics, oils, 
//               and seasonal products — all sourced directly from trusted farms.
//             </p>
//           </div>

//           {/* Categories Sections */}
//           {categories.map((category, categoryIndex) => {
//             const categoryProducts = products.filter(
//               (product) => product.category === category
//             );

//             return (
//               <div key={category} className="prd__categorySection">
//                 <div className="prd__categoryHeader">
//                   <div className="prd__categoryMarker">
//                     <span className="prd__categoryLine"></span>
//                     <span className="prd__categoryLabel">CATEGORY</span>
//                   </div>
//                   <h2 className="prd__categoryTitle">{category}</h2>
//                   <div className="prd__categoryCount">
//                     {categoryProducts.length} products
//                   </div>
//                 </div>

//                 <div className="prd__grid">
//                   {categoryProducts.map((product, productIndex) => {
//                     const discountedPrice = calculateDiscountedPrice(
//                       product.price,
//                       product.discountPercent
//                     );
//                     const hasDiscount = product.discountPercent && product.discountPercent > 0;

//                     return (
//                       <Link
//                         key={product.id}
//                         to={`/products/${product.id}`}
//                         className="prd__cardLink"
//                         style={{ animationDelay: `${productIndex * 0.05}s` }}
//                       >
//                         <div className="prd__card">
//                           <div className="prd__cardImage">
//                             {product.image && (
//                               <img
//                                 src={`http://localhost:5000${product.image}`}
//                                 alt={product.title}
//                                 className="prd__image"
//                               />
//                             )}
//                             <div className="prd__imageOverlay"></div>
                            
//                             {/* Badges */}
//                             <div className="prd__badges">
//                               {product.featured && (
//                                 <span className="prd__featuredBadge">Featured</span>
//                               )}
//                               {hasDiscount && (
//                                 <span className="prd__discountBadge">
//                                   {product.discountPercent}% OFF
//                                 </span>
//                               )}
//                             </div>
//                           </div>

//                           <div className="prd__cardContent">
//                             <h3 className="prd__title">{product.title}</h3>
                            
//                             <p className="prd__description">
//                               {product.description || "Premium quality product sourced from trusted farms."}
//                             </p>
                            
//                             <div className="prd__pricing">
//                               <span className="prd__priceCurrent">€{Math.round(discountedPrice)}</span>
//                               {hasDiscount && (
//                                 <span className="prd__priceOriginal">€{product.price}</span>
//                               )}
//                             </div>
                            
//                             <div className="prd__cardFooter">
//                               <span className="prd__viewLink">View Details →</span>
//                             </div>
//                           </div>
//                         </div>
//                       </Link>
//                     );
//                   })}
//                 </div>
//               </div>
//             );
//           })}

//           {/* Empty State */}
//           {products.length === 0 && (
//             <div className="prd__empty">
//               <div className="prd__emptyContent">
//                 <h3>No Products Available</h3>
//                 <p>Check back later for our premium collection.</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </PublicLayout>
//   );
// }

// export default Products;





// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../services/api";
// import PublicLayout from "../layouts/PublicLayout";
// import "./Products.css";

// function Products() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const { data } = await api.get("/products");
//       setProducts(data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const categories = [...new Set(products.map((product) => product.category))];

//   const calculateDiscountedPrice = (price, discountPercent) => {
//     if (discountPercent && discountPercent > 0) {
//       return price - (price * discountPercent / 100);
//     }
//     return price;
//   };

//   if (loading) {
//     return (
//       <PublicLayout>
//         <div className="prd__loading">
//           <div className="prd__loadingContent">
//             <div className="prd__loadingSpinner"></div>
//             <p>Loading products...</p>
//           </div>
//         </div>
//       </PublicLayout>
//     );
//   }

//   return (
//     <PublicLayout>
//       <section className="prd__wrapper">
//         <div className="prd__bgSubtle"></div>
//         <div className="prd__bgGradient"></div>

//         <div className="prd__container">
//           {/* Hero Header */}
//           <div className="prd__hero">
//             <div className="prd__heroBadge">
//               <span className="prd__heroLine"></span>
//               <span className="prd__heroText">ETA FOODS</span>
//             </div>
            
//             <h1 className="prd__heroTitle">
//               Healthy & Organic
//               <br />
//               <span className="prd__heroAccent">products for everyday wellness</span>
//             </h1>
            
//             <p className="prd__heroDescription">
//               Explore our collection of millet mixes, rice, snacks, organics, oils, 
//               and seasonal products — all sourced directly from trusted farms.
//             </p>
//           </div>

//           {/* Categories Sections */}
//           {categories.map((category, categoryIndex) => {
//             const categoryProducts = products.filter(
//               (product) => product.category === category
//             );

//             return (
//               <div key={category} className="prd__categorySection">
//                 <div className="prd__categoryHeader">
//                   <div className="prd__categoryMarker">
//                     <span className="prd__categoryLine"></span>
//                     <span className="prd__categoryLabel">CATEGORY</span>
//                   </div>
//                   <h2 className="prd__categoryTitle">{category}</h2>
//                   <div className="prd__categoryCount">
//                     {categoryProducts.length} products
//                   </div>
//                 </div>

//                 <div className="prd__grid">
//                   {categoryProducts.map((product, productIndex) => {
//                     const discountedPrice = calculateDiscountedPrice(
//                       product.price,
//                       product.discountPercent
//                     );
//                     const hasDiscount = product.discountPercent && product.discountPercent > 0;

//                     return (
//                       <Link
//                         key={product.id}
//                         to={`/products/${product.id}`}
//                         className="prd__cardLink"
//                         style={{ animationDelay: `${productIndex * 0.05}s` }}
//                       >
//                         <div className="prd__card">
//                           <div className="prd__cardImage">
//                             {product.image && (
//                               <img
//                                 src={`http://localhost:5000${product.image}`}
//                                 alt={product.title}
//                                 className="prd__image"
//                               />
//                             )}
//                             <div className="prd__imageOverlay"></div>
                            
//                             {/* Badges */}
//                             <div className="prd__badges">
//                               {product.featured && (
//                                 <span className="prd__featuredBadge">Featured</span>
//                               )}
//                               {hasDiscount && (
//                                 <span className="prd__discountBadge">
//                                   {product.discountPercent}% OFF
//                                 </span>
//                               )}
//                             </div>
//                           </div>

//                           <div className="prd__cardContent">
//                             <h3 className="prd__title">{product.title}</h3>
                            
//                             <p className="prd__description">
//                               {product.description || "Premium quality product sourced from trusted farms."}
//                             </p>
                            
//                             <div className="prd__pricing">
//                               <span className="prd__priceCurrent">€{Math.round(discountedPrice)}</span>
//                               {hasDiscount && (
//                                 <span className="prd__priceOriginal">€{product.price}</span>
//                               )}
//                             </div>
                            
//                             <div className="prd__cardFooter">
//                               <span className="prd__viewLink">View Details →</span>
//                             </div>
//                           </div>
//                         </div>
//                       </Link>
//                     );
//                   })}
//                 </div>
//               </div>
//             );
//           })}

//           {/* Empty State */}
//           {products.length === 0 && (
//             <div className="prd__empty">
//               <div className="prd__emptyContent">
//                 <h3>No Products Available</h3>
//                 <p>Check back later for our premium collection.</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </PublicLayout>
//   );
// }

// export default Products;



// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../services/api";
// import PublicLayout from "../layouts/PublicLayout";
// import "./Products.css";

// function Products() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const { data } = await api.get("/products");
//       setProducts(data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const categories = [...new Set(products.map((product) => product.category))];

//   const calculateDiscountedPrice = (price, discountPercent) => {
//     if (discountPercent && discountPercent > 0) {
//       return price - (price * discountPercent / 100);
//     }
//     return price;
//   };

//   if (loading) {
//     return (
//       <PublicLayout>
//         <div className="prd__loading">
//           <div className="prd__loadingContent">
//             <div className="prd__loadingSpinner"></div>
//             <p>Loading products...</p>
//           </div>
//         </div>
//       </PublicLayout>
//     );
//   }

//   return (
//     <PublicLayout>
//       <section className="prd__wrapper">
//         <div className="prd__bgSubtle"></div>
//         <div className="prd__bgGradient"></div>

//         <div className="prd__container">
//           {/* Hero Header */}
//           <div className="prd__hero">
//             <div className="prd__heroBadge">
//               <span className="prd__heroLine"></span>
//               <span className="prd__heroText">ETA FOODS</span>
//             </div>
            
//             <h1 className="prd__heroTitle">
//               Healthy & Organic
//               <br />
//               <span className="prd__heroAccent">products for everyday wellness</span>
//             </h1>
            
//             <p className="prd__heroDescription">
//               Explore our collection of millet mixes, rice, snacks, organics, oils, 
//               and seasonal products — all sourced directly from trusted farms.
//             </p>
//           </div>

//           {/* Categories Sections */}
//           {categories.map((category, categoryIndex) => {
//             const categoryProducts = products.filter(
//               (product) => product.category === category
//             );

//             return (
//               <div key={category} className="prd__categorySection">
//                 <div className="prd__categoryHeader">
//                   <div className="prd__categoryMarker">
//                     <span className="prd__categoryLine"></span>
//                     <span className="prd__categoryLabel">CATEGORY</span>
//                   </div>
//                   <h2 className="prd__categoryTitle">{category}</h2>
//                   <div className="prd__categoryCount">
//                     {categoryProducts.length} products
//                   </div>
//                 </div>

//                 <div className="prd__grid">
//                   {categoryProducts.map((product, productIndex) => {
//                     const discountedPrice = calculateDiscountedPrice(
//                       product.price,
//                       product.discountPercent
//                     );
//                     const hasDiscount = product.discountPercent && product.discountPercent > 0;

//                     return (
//                       <Link
//                         key={product.id}
//                         to={`/products/${product.id}`}
//                         className="prd__cardLink"
//                         style={{ animationDelay: `${productIndex * 0.05}s` }}
//                       >
//                         <div className="prd__card">
//                           <div className="prd__cardImage">
//                             {product.image && (
//                               <img
//                                 src={`https://a4agroup.eu${product.image}`}
//                                 alt={product.title}
//                                 className="prd__image"
//                               />
//                             )}
//                             <div className="prd__imageOverlay"></div>
                            
//                             {/* Badges */}
//                             <div className="prd__badges">
//                               {product.featured && (
//                                 <span className="prd__featuredBadge">
//                                   <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
//                                     <path d="M5 0L6.5 3.5L10 4L7.5 6.5L8.5 10L5 8L1.5 10L2.5 6.5L0 4L3.5 3.5L5 0Z" fill="currentColor"/>
//                                   </svg>
//                                   Featured
//                                 </span>
//                               )}
//                               {hasDiscount && (
//                                 <span className="prd__discountBadge">
//                                   {product.discountPercent}% OFF
//                                 </span>
//                               )}
//                             </div>
//                           </div>

//                           <div className="prd__cardContent">
//                             <h3 className="prd__title">{product.title}</h3>
                            
//                             <p className="prd__description">
//                               {product.description || "Premium quality product sourced from trusted farms."}
//                             </p>
                            
//                             <div className="prd__pricing">
//                               <span className="prd__priceCurrent">€{Math.round(discountedPrice)}</span>
//                               {hasDiscount && (
//                                 <span className="prd__priceOriginal">€{product.price}</span>
//                               )}
//                             </div>
                            
//                             <div className="prd__cardFooter">
//                               <span className="prd__viewLink">
//                                 View Details
//                                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                                   <path d="M3 7h8M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                                 </svg>
//                               </span>
//                             </div>
//                           </div>
//                         </div>
//                       </Link>
//                     );
//                   })}
//                 </div>
//               </div>
//             );
//           })}

//           {/* Empty State */}
//           {products.length === 0 && (
//             <div className="prd__empty">
//               <div className="prd__emptyContent">
//                 <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
//                   <path d="M6 12l6-6 6 6M18 42l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   <path d="M12 6v30M24 42V12M36 6v30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//                 </svg>
//                 <h3>No Products Available</h3>
//                 <p>Check back later for our premium collection.</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </PublicLayout>
//   );
// }

// export default Products;


// import { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import api from "../services/api";
// import PublicLayout from "../layouts/PublicLayout";
// import "./Products.css";

// function Products() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.05 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, [products]);

//   const fetchProducts = async () => {
//     setLoading(true);
//     try {
//       const { data } = await api.get("/products");
//       setProducts(data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const categories = ["all", ...new Set(products.map((product) => product.category))];

//   const filteredProducts =
//     activeCategory === "all"
//       ? products
//       : products.filter((product) => product.category === activeCategory);

//   const calculateDiscountedPrice = (price, discountPercent) => {
//     if (discountPercent && discountPercent > 0) {
//       return price - (price * discountPercent) / 100;
//     }
//     return price;
//   };

//   if (loading) {
//     return (
//       <PublicLayout>
//         <div className="prd-loading">
//           <div className="prd-loading-spinner" />
//           <p>Loading products...</p>
//         </div>
//       </PublicLayout>
//     );
//   }

//   return (
//     <PublicLayout>
//       <section
//         ref={sectionRef}
//         className={`prd-premium ${isVisible ? "prd-visible" : ""}`}
//       >
//         {/* Atmospheric Depth */}
//         <div className="prd-atmosphere" aria-hidden="true">
//           <div className="prd-glow prd-glow--teal" />
//           <div className="prd-glow prd-glow--blue" />
//           <div className="prd-glow prd-glow--emerald" />
//           <div className="prd-mesh" />
//           <div className="prd-grain" />
//           <div className="prd-vignette" />
//         </div>

//         {/* Floating Orbs */}
//         <div className="prd-orbs" aria-hidden="true">
//           <div className="prd-orb prd-orb--primary" />
//           <div className="prd-orb prd-orb--secondary" />
//         </div>

//         <div className="prd-container">
//           {/* Hero Header */}
//           <div className="prd-hero">
//             <div className="prd-hero-content">
//               <div className="prd-whisper">
//                 <span className="prd-whisper-pulse" />
//                 <span>ETA Foods</span>
//               </div>

//               <h1 className="prd-headline">
//                 <span className="prd-headline-line">Healthy & Organic</span>
//                 <span className="prd-headline-line prd-headline-radiance">
//                   products for everyday wellness
//                 </span>
//               </h1>

//               <p className="prd-prose">
//                 Explore our collection of millet mixes, rice, snacks, organics, 
//                 oils, and seasonal products — all sourced directly from trusted farms.
//               </p>
//             </div>
//           </div>

//           {/* Category Toggle Tabs */}
//           <div className="prd-categories">
//             <div className="prd-categories-tabs">
//               {categories.map((category) => (
//                 <button
//                   key={category}
//                   className={`prd-category-tab ${
//                     activeCategory === category ? "prd-category-active" : ""
//                   }`}
//                   onClick={() => setActiveCategory(category)}
//                 >
//                   <span>{category === "all" ? "All Products" : category}</span>
//                   <span className="prd-category-count">
//                     {category === "all"
//                       ? products.length
//                       : products.filter((p) => p.category === category).length}
//                   </span>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Products Grid */}
//           <div className="prd-grid">
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map((product, index) => {
//                 const discountedPrice = calculateDiscountedPrice(
//                   product.price,
//                   product.discountPercent
//                 );
//                 const hasDiscount =
//                   product.discountPercent && product.discountPercent > 0;

//                 return (
//                   <Link
//                     key={product.id}
//                     to={`/products/${product.id}`}
//                     className="prd-card-link"
//                     style={{ "--card-index": index }}
//                   >
//                     <div className="prd-card">
//                       <div className="prd-card-shine" aria-hidden="true" />

//                       <div className="prd-card-media">
//                         <div className="prd-card-image-wrap">
//                           {product.image && (
//                             <img
//                               src={`https://a4agroup.eu${product.image}`}
//                               alt={product.title}
//                               className="prd-card-image"
//                               loading="lazy"
//                             />
//                           )}
//                           <div className="prd-card-image-veil" />
//                         </div>

//                         <div className="prd-card-badges">
//                           {product.featured && (
//                             <span className="prd-badge prd-badge-featured">
//                               Featured
//                             </span>
//                           )}
//                           {hasDiscount && (
//                             <span className="prd-badge prd-badge-discount">
//                               {product.discountPercent}% OFF
//                             </span>
//                           )}
//                         </div>
//                       </div>

//                       <div className="prd-card-details">
//                         <div className="prd-card-category">
//                           <span className="prd-card-category-dot" />
//                           {product.category}
//                         </div>

//                         <h3 className="prd-card-title">{product.title}</h3>

//                         <p className="prd-card-description">
//                           {product.description ||
//                             "Premium quality product sourced from trusted farms."}
//                         </p>

//                         <div className="prd-card-pricing">
//                           <span className="prd-card-price">
//                             €{Math.round(discountedPrice)}
//                           </span>
//                           {hasDiscount && (
//                             <span className="prd-card-price-original">
//                               €{product.price}
//                             </span>
//                           )}
//                         </div>

//                         <div className="prd-card-action">
//                           <span>View Details</span>
//                           <span className="prd-card-arrow">→</span>
//                         </div>
//                       </div>

//                       <div className="prd-card-edge" aria-hidden="true" />
//                     </div>
//                   </Link>
//                 );
//               })
//             ) : (
//               <div className="prd-empty">
//                 <div className="prd-empty-content">
//                   <div className="prd-empty-thread" />
//                   <h3 className="prd-empty-title">No products in this category</h3>
//                   <p className="prd-empty-text">
//                     Select another category to explore our collection.
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Global Empty State */}
//           {products.length === 0 && (
//             <div className="prd-empty">
//               <div className="prd-empty-content">
//                 <div className="prd-empty-thread" />
//                 <h3 className="prd-empty-title">No Products Available</h3>
//                 <p className="prd-empty-text">
//                   Check back later for our premium collection.
//                 </p>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </PublicLayout>
//   );
// }

// export default Products;

import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import PublicLayout from "../layouts/PublicLayout";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.03 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [products]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data } = await api.get("/products");
      setProducts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const featuredProducts = products.filter((p) => p.featured);
  const marqueeProducts = [...featuredProducts, ...featuredProducts];

  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const calculateDiscountedPrice = (price, discountPercent) => {
    if (discountPercent && discountPercent > 0) {
      return price - (price * discountPercent) / 100;
    }
    return price;
  };

  const renderProductCard = (product, index) => {
    const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercent);
    const hasDiscount = product.discountPercent && product.discountPercent > 0;

    return (
      <Link
        key={`${product.id}-${index}`}
        to={`/products/${product.id}`}
        className="prd-card-link"
        style={{ "--card-index": index }}
      >
        <div className="prd-card">
          <div className="prd-card-shine" aria-hidden="true" />
          <div className="prd-card-media">
            <div className="prd-card-image-wrap">
              {product.image && (
                <img
                  src={`https://a4agroup.eu${product.image}`}
                  alt={product.title}
                  className="prd-card-image"
                  loading="lazy"
                />
              )}
              <div className="prd-card-image-veil" />
            </div>
            <div className="prd-card-badges">
              {product.featured && (
                <span className="prd-badge prd-badge-featured">Featured</span>
              )}
              {hasDiscount && (
                <span className="prd-badge prd-badge-discount">
                  {product.discountPercent}% OFF
                </span>
              )}
            </div>
          </div>
          <div className="prd-card-details">
            <div className="prd-card-category">
              <span className="prd-card-category-dot" />
              {product.category}
            </div>
            <h3 className="prd-card-title">{product.title}</h3>
            <p className="prd-card-description">
              {product.description || "Premium quality product sourced from trusted farms."}
            </p>
            <div className="prd-card-pricing">
              <span className="prd-card-price">€{Math.round(discountedPrice)}</span>
              {hasDiscount && (
                <span className="prd-card-price-original">€{product.price}</span>
              )}
            </div>
            <div className="prd-card-action">
              <span>View Details</span>
              <span className="prd-card-arrow">→</span>
            </div>
          </div>
          <div className="prd-card-edge" aria-hidden="true" />
        </div>
      </Link>
    );
  };

  if (loading) {
    return (
      <PublicLayout>
        <div className="prd-loading">
          <div className="prd-loading-spinner" />
          <p>Loading products...</p>
        </div>
      </PublicLayout>
    );
  }

  return (
    <PublicLayout>
      <section
        ref={sectionRef}
        className={`prd-premium ${isVisible ? "prd-visible" : ""}`}
      >
        {/* Atmospheric Depth */}
        <div className="prd-atmosphere" aria-hidden="true">
          <div className="prd-glow prd-glow--emerald" />
          <div className="prd-glow prd-glow--teal" />
          <div className="prd-glow prd-glow--blue" />
          <div className="prd-mesh" />
          <div className="prd-grain" />
          <div className="prd-vignette" />
        </div>

        {/* Floating Orbs */}
        <div className="prd-orbs" aria-hidden="true">
          <div className="prd-orb prd-orb--primary" />
          <div className="prd-orb prd-orb--secondary" />
        </div>

        <div className="prd-container">
          {/* Hero Header */}
          <div className="prd-hero">
            <div className="prd-hero-content">
              <div className="prd-whisper">
                <span className="prd-whisper-pulse" />
                <span>ETA Foods</span>
              </div>
              <h1 className="prd-headline">
                <span className="prd-headline-line">Healthy & Organic</span>
                <span className="prd-headline-line prd-headline-radiance">
                  products for everyday wellness
                </span>
              </h1>
              <p className="prd-prose">
                Explore our collection of millet mixes, rice, snacks, organics,
                oils, and seasonal products — all sourced directly from trusted farms.
              </p>
            </div>
          </div>

          {/* Featured Products Marquee */}
          {featuredProducts.length > 0 && (
            <div className="prd-featured">
              <div className="prd-featured-header">
                <div className="prd-featured-thread" />
                <span className="prd-featured-label">Featured Products</span>
              </div>
              <div
                className="prd-marquee-stage"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className={`prd-marquee-track ${isPaused ? "prd-marquee-paused" : ""}`}>
                  {marqueeProducts.map((product, index) =>
                    renderProductCard(product, index)
                  )}
                </div>
                <div className="prd-marquee-fade prd-marquee-fade-left" />
                <div className="prd-marquee-fade prd-marquee-fade-right" />
              </div>
            </div>
          )}

          {/* Category Toggle + All Products */}
          <div className="prd-catalog">
            <div className="prd-catalog-header">
              <div className="prd-catalog-thread" />
              <span className="prd-catalog-label">Our Collection</span>
            </div>

            {/* Category Tabs */}
            <div className="prd-categories">
              <div className="prd-categories-tabs">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`prd-category-tab ${
                      activeCategory === category ? "prd-category-active" : ""
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    <span>{category === "all" ? "All Products" : category}</span>
                    <span className="prd-category-count">
                      {category === "all"
                        ? products.length
                        : products.filter((p) => p.category === category).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Products Grid */}
            <div className="prd-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product, index) =>
                  renderProductCard(product, index)
                )
              ) : (
                <div className="prd-empty">
                  <div className="prd-empty-content">
                    <div className="prd-empty-thread" />
                    <h3 className="prd-empty-title">No products in this category</h3>
                    <p className="prd-empty-text">
                      Select another category to explore our collection.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Global Empty State */}
          {products.length === 0 && (
            <div className="prd-empty">
              <div className="prd-empty-content">
                <div className="prd-empty-thread" />
                <h3 className="prd-empty-title">No Products Available</h3>
                <p className="prd-empty-text">
                  Check back later for our premium collection.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </PublicLayout>
  );
}

export default Products;