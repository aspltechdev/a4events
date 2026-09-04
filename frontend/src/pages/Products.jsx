

// // // // import { useEffect, useState } from 'react';
// // // // import { Link } from 'react-router-dom';
// // // // import api from '../services/api';
// // // // import PublicLayout from '../layouts/PublicLayout';

// // // // function Products() {
// // // //   const [products, setProducts] = useState([]);

// // // //   useEffect(() => {
// // // //     fetchProducts();
// // // //   }, []);

// // // //   const fetchProducts = async () => {
// // // //     try {
// // // //       const { data } = await api.get('/products');
// // // //       setProducts(data);
// // // //         console.log(data);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     }
// // // //   };


// // // // return (
// // // //     <PublicLayout>
// // // //   <div style={{ padding: '20px' }}>
// // // //     <h1>Products</h1>

// // // //     <div
// // // //       style={{
// // // //         display: 'grid',
// // // //         gridTemplateColumns:
// // // //           'repeat(auto-fill, minmax(250px, 1fr))',
// // // //         gap: '20px'
// // // //       }}
// // // //     >
// // // //       {products.map((product) => (

// // // //         <div
// // // //           key={product.id}
// // // //           style={{
// // // //             border: '1px solid #ddd',
// // // //             borderRadius: '10px',
// // // //             padding: '15px'
// // // //           }}
// // // //         >
// // // //           {product.image && (
// // // //             <img
// // // //               src={`http://localhost:5000${product.image}`}
// // // //               alt={product.title}
// // // //               style={{
// // // //                 width: '100%',
// // // //                 height: '220px',
// // // //                 objectFit: 'cover'
// // // //               }}
// // // //             />
// // // //           )}

// // // //           <h3>{product.title}</h3>

// // // //           <p>€{product.price}</p>

// // // //           <Link to={`/products/${product.id}`}>
// // // //             View Details
// // // //           </Link>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   </div>
// // // //   </PublicLayout>
// // // // );
// // // // }

// // // // export default Products;


// // // // import { useEffect, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import api from "../services/api";
// // // // import PublicLayout from "../layouts/PublicLayout";
// // // // import "./Products.css";

// // // // function Products() {
// // // //   const [products, setProducts] = useState([]);

// // // //   useEffect(() => {
// // // //     fetchProducts();
// // // //   }, []);

// // // //   const fetchProducts = async () => {
// // // //     try {
// // // //       const { data } = await api.get("/products");
// // // //       setProducts(data);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <PublicLayout>

// // // //       <section className="a4-products-page">

// // // //         <div className="a4-products-page-header">

// // // //           <span className="a4-products-page-tag">
// // // //             FOOD & BEVERAGES
// // // //           </span>

// // // //           <h1 className="a4-products-page-title">
// // // //             Delicious Flavours For Every Occasion
// // // //           </h1>

// // // //           <p className="a4-products-page-description">
// // // //             Explore our range of snacks, beverages,
// // // //             desserts and signature favourites crafted
// // // //             with quality ingredients and unforgettable taste.
// // // //           </p>

// // // //         </div>

// // // //         <div className="a4-products-page-grid">

// // // //           {products.map((product) => (
// // // //             <div
// // // //               key={product.id}
// // // //               className="a4-products-page-card"
// // // //             >

// // // //               <div className="a4-products-page-image-wrapper">

// // // //                 {product.image && (
// // // //                   <img
// // // //                     src={`http://localhost:5000${product.image}`}
// // // //                     alt={product.title}
// // // //                     className="a4-products-page-image"
// // // //                   />
// // // //                 )}

// // // //               </div>

// // // //               <div className="a4-products-page-content">

// // // //                 <span className="a4-products-page-badge">
// // // //                   Best Seller
// // // //                 </span>

// // // //                 <h3 className="a4-products-page-product-title">
// // // //                   {product.title}
// // // //                 </h3>

// // // //                 <div className="a4-products-page-footer">

// // // //                   <span className="a4-products-page-price">
// // // //                     €{product.price}
// // // //                   </span>

// // // //                   <Link
// // // //                     to={`/products/${product.id}`}
// // // //                     className="a4-products-page-btn"
// // // //                   >
// // // //                     View Details
// // // //                   </Link>

// // // //                 </div>

// // // //               </div>

// // // //             </div>
// // // //           ))}

// // // //         </div>

// // // //       </section>

// // // //     </PublicLayout>
// // // //   );
// // // // }

// // // // export default Products;

// // // // import { useEffect, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import api from "../services/api";
// // // // import PublicLayout from "../layouts/PublicLayout";
// // // // import "./Products.css";

// // // // function Products() {
// // // //   const [products, setProducts] = useState([]);

// // // //   useEffect(() => {
// // // //     fetchProducts();
// // // //   }, []);

// // // //   const fetchProducts = async () => {
// // // //     try {
// // // //       const { data } = await api.get("/products");
// // // //       setProducts(data);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     }
// // // //   };

// // // //   const categories = [
// // // //     ...new Set(
// // // //       products.map(
// // // //         (product) => product.category
// // // //       )
// // // //     ),
// // // //   ];

// // // //   return (
// // // //     <PublicLayout>
// // // //       <section className="a4-products-page">

// // // //         <div className="a4-products-page-header">

// // // //           <span className="a4-products-page-tag">
// // // //             ETA FOODS
// // // //           </span>

// // // //           <h1 className="a4-products-page-title">
// // // //             Healthy & Organic Products
// // // //           </h1>

// // // //           <p className="a4-products-page-description">
// // // //             Explore our collection of millet mixes,
// // // //             rice, snacks, organics, oils and
// // // //             seasonal products.
// // // //           </p>

// // // //         </div>

// // // //         {categories.map((category) => {

// // // //           const categoryProducts =
// // // //             products.filter(
// // // //               (product) =>
// // // //                 product.category === category
// // // //             );

// // // //           return (
// // // //             <div
// // // //               key={category}
// // // //               className="a4-category-section"
// // // //             >

// // // //               <h2 className="a4-category-title">
// // // //                 {category}
// // // //               </h2>

// // // //               <div className="a4-products-page-grid">

// // // //                 {categoryProducts.map(
// // // //                   (product) => {

// // // //                     const discountedPrice =
// // // //                       product.price -
// // // //                       (
// // // //                         product.price *
// // // //                         (product.discountPercent || 0)
// // // //                       ) /
// // // //                         100;

// // // //                     return (
// // // //                       <div
// // // //                         key={product.id}
// // // //                         className="a4-products-page-card"
// // // //                       >

// // // //                         <div className="a4-products-page-image-wrapper">

// // // //                           {product.image && (
// // // //                             <img
// // // //                               src={`http://localhost:5000${product.image}`}
// // // //                               alt={product.title}
// // // //                               className="a4-products-page-image"
// // // //                             />
// // // //                           )}

// // // //                           {product.featured && (
// // // //                             <span className="featured-badge">
// // // //                               Featured
// // // //                             </span>
// // // //                           )}

// // // //                           {product.discountPercent >
// // // //                             0 && (
// // // //                             <span className="discount-badge">
// // // //                               {
// // // //                                 product.discountPercent
// // // //                               }
// // // //                               % OFF
// // // //                             </span>
// // // //                           )}

// // // //                         </div>

// // // //                         <div className="a4-products-page-content">

// // // //                           <span className="category-badge">
// // // //                             {product.category}
// // // //                           </span>

// // // //                           <h3 className="a4-products-page-product-title">
// // // //                             {product.title}
// // // //                           </h3>

// // // //                           <div className="product-price-box">

// // // //                             <span className="discounted-price">
// // // //                               €
// // // //                               {discountedPrice.toFixed(
// // // //                                 0
// // // //                               )}
// // // //                             </span>

// // // //                             {product.discountPercent >
// // // //                               0 && (
// // // //                               <span className="original-price">
// // // //                                 €
// // // //                                 {
// // // //                                   product.price
// // // //                                 }
// // // //                               </span>
// // // //                             )}

// // // //                           </div>

// // // //                           <Link
// // // //                             to={`/products/${product.id}`}
// // // //                             className="a4-products-page-btn"
// // // //                           >
// // // //                             View Details
// // // //                           </Link>

// // // //                         </div>

// // // //                       </div>
// // // //                     );
// // // //                   }
// // // //                 )}

// // // //               </div>

// // // //             </div>
// // // //           );
// // // //         })}

// // // //       </section>
// // // //     </PublicLayout>
// // // //   );
// // // // }

// // // // export default Products;





// // // // import { useEffect, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import api from "../services/api";
// // // // import PublicLayout from "../layouts/PublicLayout";
// // // // import "./Products.css";

// // // // function Products() {
// // // //   const [products, setProducts] = useState([]);
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     fetchProducts();
// // // //   }, []);

// // // //   const fetchProducts = async () => {
// // // //     setLoading(true);
// // // //     try {
// // // //       const { data } = await api.get("/products");
// // // //       setProducts(data);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const categories = [...new Set(products.map((product) => product.category))];

// // // //   const calculateDiscountedPrice = (price, discountPercent) => {
// // // //     if (discountPercent && discountPercent > 0) {
// // // //       return price - (price * discountPercent / 100);
// // // //     }
// // // //     return price;
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <PublicLayout>
// // // //         <div className="prd__loading">
// // // //           <div className="prd__loadingContent">
// // // //             <div className="prd__loadingSpinner"></div>
// // // //             <p>Loading products...</p>
// // // //           </div>
// // // //         </div>
// // // //       </PublicLayout>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <PublicLayout>
// // // //       <section className="prd__wrapper">
// // // //         <div className="prd__bgSubtle"></div>
// // // //         <div className="prd__bgGradient"></div>

// // // //         <div className="prd__container">
// // // //           {/* Hero Header */}
// // // //           <div className="prd__hero">
// // // //             <div className="prd__heroBadge">
// // // //               <span className="prd__heroLine"></span>
// // // //               <span className="prd__heroText">ETA FOODS</span>
// // // //             </div>

// // // //             <h1 className="prd__heroTitle">
// // // //               Healthy & Organic
// // // //               <br />
// // // //               <span className="prd__heroAccent">products for everyday wellness</span>
// // // //             </h1>

// // // //             <p className="prd__heroDescription">
// // // //               Explore our collection of millet mixes, rice, snacks, organics, oils, 
// // // //               and seasonal products — all sourced directly from trusted farms.
// // // //             </p>
// // // //           </div>

// // // //           {/* Categories Sections */}
// // // //           {categories.map((category, categoryIndex) => {
// // // //             const categoryProducts = products.filter(
// // // //               (product) => product.category === category
// // // //             );

// // // //             return (
// // // //               <div key={category} className="prd__categorySection">
// // // //                 <div className="prd__categoryHeader">
// // // //                   <div className="prd__categoryMarker">
// // // //                     <span className="prd__categoryLine"></span>
// // // //                     <span className="prd__categoryLabel">CATEGORY</span>
// // // //                   </div>
// // // //                   <h2 className="prd__categoryTitle">{category}</h2>
// // // //                   <div className="prd__categoryCount">
// // // //                     {categoryProducts.length} products
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="prd__grid">
// // // //                   {categoryProducts.map((product, productIndex) => {
// // // //                     const discountedPrice = calculateDiscountedPrice(
// // // //                       product.price,
// // // //                       product.discountPercent
// // // //                     );
// // // //                     const hasDiscount = product.discountPercent && product.discountPercent > 0;

// // // //                     return (
// // // //                       <Link
// // // //                         key={product.id}
// // // //                         to={`/products/${product.id}`}
// // // //                         className="prd__cardLink"
// // // //                         style={{ animationDelay: `${productIndex * 0.05}s` }}
// // // //                       >
// // // //                         <div className="prd__card">
// // // //                           <div className="prd__cardImage">
// // // //                             {product.image && (
// // // //                               <img
// // // //                                 src={`http://localhost:5000${product.image}`}
// // // //                                 alt={product.title}
// // // //                                 className="prd__image"
// // // //                               />
// // // //                             )}
// // // //                             <div className="prd__imageOverlay"></div>

// // // //                             {/* Badges */}
// // // //                             <div className="prd__badges">
// // // //                               {product.featured && (
// // // //                                 <span className="prd__featuredBadge">Featured</span>
// // // //                               )}
// // // //                               {hasDiscount && (
// // // //                                 <span className="prd__discountBadge">
// // // //                                   {product.discountPercent}% OFF
// // // //                                 </span>
// // // //                               )}
// // // //                             </div>
// // // //                           </div>

// // // //                           <div className="prd__cardContent">
// // // //                             <h3 className="prd__title">{product.title}</h3>

// // // //                             <p className="prd__description">
// // // //                               {product.description || "Premium quality product sourced from trusted farms."}
// // // //                             </p>

// // // //                             <div className="prd__pricing">
// // // //                               <span className="prd__priceCurrent">€{Math.round(discountedPrice)}</span>
// // // //                               {hasDiscount && (
// // // //                                 <span className="prd__priceOriginal">€{product.price}</span>
// // // //                               )}
// // // //                             </div>

// // // //                             <div className="prd__cardFooter">
// // // //                               <span className="prd__viewLink">View Details →</span>
// // // //                             </div>
// // // //                           </div>
// // // //                         </div>
// // // //                       </Link>
// // // //                     );
// // // //                   })}
// // // //                 </div>
// // // //               </div>
// // // //             );
// // // //           })}

// // // //           {/* Empty State */}
// // // //           {products.length === 0 && (
// // // //             <div className="prd__empty">
// // // //               <div className="prd__emptyContent">
// // // //                 <h3>No Products Available</h3>
// // // //                 <p>Check back later for our premium collection.</p>
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </section>
// // // //     </PublicLayout>
// // // //   );
// // // // }

// // // // export default Products;





// // // // import { useEffect, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import api from "../services/api";
// // // // import PublicLayout from "../layouts/PublicLayout";
// // // // import "./Products.css";

// // // // function Products() {
// // // //   const [products, setProducts] = useState([]);
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     fetchProducts();
// // // //   }, []);

// // // //   const fetchProducts = async () => {
// // // //     setLoading(true);
// // // //     try {
// // // //       const { data } = await api.get("/products");
// // // //       setProducts(data);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const categories = [...new Set(products.map((product) => product.category))];

// // // //   const calculateDiscountedPrice = (price, discountPercent) => {
// // // //     if (discountPercent && discountPercent > 0) {
// // // //       return price - (price * discountPercent / 100);
// // // //     }
// // // //     return price;
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <PublicLayout>
// // // //         <div className="prd__loading">
// // // //           <div className="prd__loadingContent">
// // // //             <div className="prd__loadingSpinner"></div>
// // // //             <p>Loading products...</p>
// // // //           </div>
// // // //         </div>
// // // //       </PublicLayout>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <PublicLayout>
// // // //       <section className="prd__wrapper">
// // // //         <div className="prd__bgSubtle"></div>
// // // //         <div className="prd__bgGradient"></div>

// // // //         <div className="prd__container">
// // // //           {/* Hero Header */}
// // // //           <div className="prd__hero">
// // // //             <div className="prd__heroBadge">
// // // //               <span className="prd__heroLine"></span>
// // // //               <span className="prd__heroText">ETA FOODS</span>
// // // //             </div>

// // // //             <h1 className="prd__heroTitle">
// // // //               Healthy & Organic
// // // //               <br />
// // // //               <span className="prd__heroAccent">products for everyday wellness</span>
// // // //             </h1>

// // // //             <p className="prd__heroDescription">
// // // //               Explore our collection of millet mixes, rice, snacks, organics, oils, 
// // // //               and seasonal products — all sourced directly from trusted farms.
// // // //             </p>
// // // //           </div>

// // // //           {/* Categories Sections */}
// // // //           {categories.map((category, categoryIndex) => {
// // // //             const categoryProducts = products.filter(
// // // //               (product) => product.category === category
// // // //             );

// // // //             return (
// // // //               <div key={category} className="prd__categorySection">
// // // //                 <div className="prd__categoryHeader">
// // // //                   <div className="prd__categoryMarker">
// // // //                     <span className="prd__categoryLine"></span>
// // // //                     <span className="prd__categoryLabel">CATEGORY</span>
// // // //                   </div>
// // // //                   <h2 className="prd__categoryTitle">{category}</h2>
// // // //                   <div className="prd__categoryCount">
// // // //                     {categoryProducts.length} products
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="prd__grid">
// // // //                   {categoryProducts.map((product, productIndex) => {
// // // //                     const discountedPrice = calculateDiscountedPrice(
// // // //                       product.price,
// // // //                       product.discountPercent
// // // //                     );
// // // //                     const hasDiscount = product.discountPercent && product.discountPercent > 0;

// // // //                     return (
// // // //                       <Link
// // // //                         key={product.id}
// // // //                         to={`/products/${product.id}`}
// // // //                         className="prd__cardLink"
// // // //                         style={{ animationDelay: `${productIndex * 0.05}s` }}
// // // //                       >
// // // //                         <div className="prd__card">
// // // //                           <div className="prd__cardImage">
// // // //                             {product.image && (
// // // //                               <img
// // // //                                 src={`http://localhost:5000${product.image}`}
// // // //                                 alt={product.title}
// // // //                                 className="prd__image"
// // // //                               />
// // // //                             )}
// // // //                             <div className="prd__imageOverlay"></div>

// // // //                             {/* Badges */}
// // // //                             <div className="prd__badges">
// // // //                               {product.featured && (
// // // //                                 <span className="prd__featuredBadge">Featured</span>
// // // //                               )}
// // // //                               {hasDiscount && (
// // // //                                 <span className="prd__discountBadge">
// // // //                                   {product.discountPercent}% OFF
// // // //                                 </span>
// // // //                               )}
// // // //                             </div>
// // // //                           </div>

// // // //                           <div className="prd__cardContent">
// // // //                             <h3 className="prd__title">{product.title}</h3>

// // // //                             <p className="prd__description">
// // // //                               {product.description || "Premium quality product sourced from trusted farms."}
// // // //                             </p>

// // // //                             <div className="prd__pricing">
// // // //                               <span className="prd__priceCurrent">€{Math.round(discountedPrice)}</span>
// // // //                               {hasDiscount && (
// // // //                                 <span className="prd__priceOriginal">€{product.price}</span>
// // // //                               )}
// // // //                             </div>

// // // //                             <div className="prd__cardFooter">
// // // //                               <span className="prd__viewLink">View Details →</span>
// // // //                             </div>
// // // //                           </div>
// // // //                         </div>
// // // //                       </Link>
// // // //                     );
// // // //                   })}
// // // //                 </div>
// // // //               </div>
// // // //             );
// // // //           })}

// // // //           {/* Empty State */}
// // // //           {products.length === 0 && (
// // // //             <div className="prd__empty">
// // // //               <div className="prd__emptyContent">
// // // //                 <h3>No Products Available</h3>
// // // //                 <p>Check back later for our premium collection.</p>
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </section>
// // // //     </PublicLayout>
// // // //   );
// // // // }

// // // // export default Products;



// // // // import { useEffect, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import api from "../services/api";
// // // // import PublicLayout from "../layouts/PublicLayout";
// // // // import "./Products.css";

// // // // function Products() {
// // // //   const [products, setProducts] = useState([]);
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     fetchProducts();
// // // //   }, []);

// // // //   const fetchProducts = async () => {
// // // //     setLoading(true);
// // // //     try {
// // // //       const { data } = await api.get("/products");
// // // //       setProducts(data);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const categories = [...new Set(products.map((product) => product.category))];

// // // //   const calculateDiscountedPrice = (price, discountPercent) => {
// // // //     if (discountPercent && discountPercent > 0) {
// // // //       return price - (price * discountPercent / 100);
// // // //     }
// // // //     return price;
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <PublicLayout>
// // // //         <div className="prd__loading">
// // // //           <div className="prd__loadingContent">
// // // //             <div className="prd__loadingSpinner"></div>
// // // //             <p>Loading products...</p>
// // // //           </div>
// // // //         </div>
// // // //       </PublicLayout>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <PublicLayout>
// // // //       <section className="prd__wrapper">
// // // //         <div className="prd__bgSubtle"></div>
// // // //         <div className="prd__bgGradient"></div>

// // // //         <div className="prd__container">
// // // //           {/* Hero Header */}
// // // //           <div className="prd__hero">
// // // //             <div className="prd__heroBadge">
// // // //               <span className="prd__heroLine"></span>
// // // //               <span className="prd__heroText">ETA FOODS</span>
// // // //             </div>

// // // //             <h1 className="prd__heroTitle">
// // // //               Healthy & Organic
// // // //               <br />
// // // //               <span className="prd__heroAccent">products for everyday wellness</span>
// // // //             </h1>

// // // //             <p className="prd__heroDescription">
// // // //               Explore our collection of millet mixes, rice, snacks, organics, oils, 
// // // //               and seasonal products — all sourced directly from trusted farms.
// // // //             </p>
// // // //           </div>

// // // //           {/* Categories Sections */}
// // // //           {categories.map((category, categoryIndex) => {
// // // //             const categoryProducts = products.filter(
// // // //               (product) => product.category === category
// // // //             );

// // // //             return (
// // // //               <div key={category} className="prd__categorySection">
// // // //                 <div className="prd__categoryHeader">
// // // //                   <div className="prd__categoryMarker">
// // // //                     <span className="prd__categoryLine"></span>
// // // //                     <span className="prd__categoryLabel">CATEGORY</span>
// // // //                   </div>
// // // //                   <h2 className="prd__categoryTitle">{category}</h2>
// // // //                   <div className="prd__categoryCount">
// // // //                     {categoryProducts.length} products
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="prd__grid">
// // // //                   {categoryProducts.map((product, productIndex) => {
// // // //                     const discountedPrice = calculateDiscountedPrice(
// // // //                       product.price,
// // // //                       product.discountPercent
// // // //                     );
// // // //                     const hasDiscount = product.discountPercent && product.discountPercent > 0;

// // // //                     return (
// // // //                       <Link
// // // //                         key={product.id}
// // // //                         to={`/products/${product.id}`}
// // // //                         className="prd__cardLink"
// // // //                         style={{ animationDelay: `${productIndex * 0.05}s` }}
// // // //                       >
// // // //                         <div className="prd__card">
// // // //                           <div className="prd__cardImage">
// // // //                             {product.image && (
// // // //                               <img
// // // //                                 src={`https://a4agroup.eu${product.image}`}
// // // //                                 alt={product.title}
// // // //                                 className="prd__image"
// // // //                               />
// // // //                             )}
// // // //                             <div className="prd__imageOverlay"></div>

// // // //                             {/* Badges */}
// // // //                             <div className="prd__badges">
// // // //                               {product.featured && (
// // // //                                 <span className="prd__featuredBadge">
// // // //                                   <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
// // // //                                     <path d="M5 0L6.5 3.5L10 4L7.5 6.5L8.5 10L5 8L1.5 10L2.5 6.5L0 4L3.5 3.5L5 0Z" fill="currentColor"/>
// // // //                                   </svg>
// // // //                                   Featured
// // // //                                 </span>
// // // //                               )}
// // // //                               {hasDiscount && (
// // // //                                 <span className="prd__discountBadge">
// // // //                                   {product.discountPercent}% OFF
// // // //                                 </span>
// // // //                               )}
// // // //                             </div>
// // // //                           </div>

// // // //                           <div className="prd__cardContent">
// // // //                             <h3 className="prd__title">{product.title}</h3>

// // // //                             <p className="prd__description">
// // // //                               {product.description || "Premium quality product sourced from trusted farms."}
// // // //                             </p>

// // // //                             <div className="prd__pricing">
// // // //                               <span className="prd__priceCurrent">€{Math.round(discountedPrice)}</span>
// // // //                               {hasDiscount && (
// // // //                                 <span className="prd__priceOriginal">€{product.price}</span>
// // // //                               )}
// // // //                             </div>

// // // //                             <div className="prd__cardFooter">
// // // //                               <span className="prd__viewLink">
// // // //                                 View Details
// // // //                                 <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// // // //                                   <path d="M3 7h8M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// // // //                                 </svg>
// // // //                               </span>
// // // //                             </div>
// // // //                           </div>
// // // //                         </div>
// // // //                       </Link>
// // // //                     );
// // // //                   })}
// // // //                 </div>
// // // //               </div>
// // // //             );
// // // //           })}

// // // //           {/* Empty State */}
// // // //           {products.length === 0 && (
// // // //             <div className="prd__empty">
// // // //               <div className="prd__emptyContent">
// // // //                 <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
// // // //                   <path d="M6 12l6-6 6 6M18 42l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// // // //                   <path d="M12 6v30M24 42V12M36 6v30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
// // // //                 </svg>
// // // //                 <h3>No Products Available</h3>
// // // //                 <p>Check back later for our premium collection.</p>
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </section>
// // // //     </PublicLayout>
// // // //   );
// // // // }

// // // // export default Products;


// // // // import { useEffect, useState, useRef } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import api from "../services/api";
// // // // import PublicLayout from "../layouts/PublicLayout";
// // // // import "./Products.css";

// // // // function Products() {
// // // //   const [products, setProducts] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [activeCategory, setActiveCategory] = useState("all");
// // // //   const [isVisible, setIsVisible] = useState(false);
// // // //   const sectionRef = useRef(null);

// // // //   useEffect(() => {
// // // //     fetchProducts();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const observer = new IntersectionObserver(
// // // //       ([entry]) => {
// // // //         if (entry.isIntersecting) setIsVisible(true);
// // // //       },
// // // //       { threshold: 0.05 }
// // // //     );

// // // //     if (sectionRef.current) observer.observe(sectionRef.current);
// // // //     return () => observer.disconnect();
// // // //   }, [products]);

// // // //   const fetchProducts = async () => {
// // // //     setLoading(true);
// // // //     try {
// // // //       const { data } = await api.get("/products");
// // // //       setProducts(data);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const categories = ["all", ...new Set(products.map((product) => product.category))];

// // // //   const filteredProducts =
// // // //     activeCategory === "all"
// // // //       ? products
// // // //       : products.filter((product) => product.category === activeCategory);

// // // //   const calculateDiscountedPrice = (price, discountPercent) => {
// // // //     if (discountPercent && discountPercent > 0) {
// // // //       return price - (price * discountPercent) / 100;
// // // //     }
// // // //     return price;
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <PublicLayout>
// // // //         <div className="prd-loading">
// // // //           <div className="prd-loading-spinner" />
// // // //           <p>Loading products...</p>
// // // //         </div>
// // // //       </PublicLayout>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <PublicLayout>
// // // //       <section
// // // //         ref={sectionRef}
// // // //         className={`prd-premium ${isVisible ? "prd-visible" : ""}`}
// // // //       >
// // // //         {/* Atmospheric Depth */}
// // // //         <div className="prd-atmosphere" aria-hidden="true">
// // // //           <div className="prd-glow prd-glow--teal" />
// // // //           <div className="prd-glow prd-glow--blue" />
// // // //           <div className="prd-glow prd-glow--emerald" />
// // // //           <div className="prd-mesh" />
// // // //           <div className="prd-grain" />
// // // //           <div className="prd-vignette" />
// // // //         </div>

// // // //         {/* Floating Orbs */}
// // // //         <div className="prd-orbs" aria-hidden="true">
// // // //           <div className="prd-orb prd-orb--primary" />
// // // //           <div className="prd-orb prd-orb--secondary" />
// // // //         </div>

// // // //         <div className="prd-container">
// // // //           {/* Hero Header */}
// // // //           <div className="prd-hero">
// // // //             <div className="prd-hero-content">
// // // //               <div className="prd-whisper">
// // // //                 <span className="prd-whisper-pulse" />
// // // //                 <span>ETA Foods</span>
// // // //               </div>

// // // //               <h1 className="prd-headline">
// // // //                 <span className="prd-headline-line">Healthy & Organic</span>
// // // //                 <span className="prd-headline-line prd-headline-radiance">
// // // //                   products for everyday wellness
// // // //                 </span>
// // // //               </h1>

// // // //               <p className="prd-prose">
// // // //                 Explore our collection of millet mixes, rice, snacks, organics, 
// // // //                 oils, and seasonal products — all sourced directly from trusted farms.
// // // //               </p>
// // // //             </div>
// // // //           </div>

// // // //           {/* Category Toggle Tabs */}
// // // //           <div className="prd-categories">
// // // //             <div className="prd-categories-tabs">
// // // //               {categories.map((category) => (
// // // //                 <button
// // // //                   key={category}
// // // //                   className={`prd-category-tab ${
// // // //                     activeCategory === category ? "prd-category-active" : ""
// // // //                   }`}
// // // //                   onClick={() => setActiveCategory(category)}
// // // //                 >
// // // //                   <span>{category === "all" ? "All Products" : category}</span>
// // // //                   <span className="prd-category-count">
// // // //                     {category === "all"
// // // //                       ? products.length
// // // //                       : products.filter((p) => p.category === category).length}
// // // //                   </span>
// // // //                 </button>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           {/* Products Grid */}
// // // //           <div className="prd-grid">
// // // //             {filteredProducts.length > 0 ? (
// // // //               filteredProducts.map((product, index) => {
// // // //                 const discountedPrice = calculateDiscountedPrice(
// // // //                   product.price,
// // // //                   product.discountPercent
// // // //                 );
// // // //                 const hasDiscount =
// // // //                   product.discountPercent && product.discountPercent > 0;

// // // //                 return (
// // // //                   <Link
// // // //                     key={product.id}
// // // //                     to={`/products/${product.id}`}
// // // //                     className="prd-card-link"
// // // //                     style={{ "--card-index": index }}
// // // //                   >
// // // //                     <div className="prd-card">
// // // //                       <div className="prd-card-shine" aria-hidden="true" />

// // // //                       <div className="prd-card-media">
// // // //                         <div className="prd-card-image-wrap">
// // // //                           {product.image && (
// // // //                             <img
// // // //                               src={`https://a4agroup.eu${product.image}`}
// // // //                               alt={product.title}
// // // //                               className="prd-card-image"
// // // //                               loading="lazy"
// // // //                             />
// // // //                           )}
// // // //                           <div className="prd-card-image-veil" />
// // // //                         </div>

// // // //                         <div className="prd-card-badges">
// // // //                           {product.featured && (
// // // //                             <span className="prd-badge prd-badge-featured">
// // // //                               Featured
// // // //                             </span>
// // // //                           )}
// // // //                           {hasDiscount && (
// // // //                             <span className="prd-badge prd-badge-discount">
// // // //                               {product.discountPercent}% OFF
// // // //                             </span>
// // // //                           )}
// // // //                         </div>
// // // //                       </div>

// // // //                       <div className="prd-card-details">
// // // //                         <div className="prd-card-category">
// // // //                           <span className="prd-card-category-dot" />
// // // //                           {product.category}
// // // //                         </div>

// // // //                         <h3 className="prd-card-title">{product.title}</h3>

// // // //                         <p className="prd-card-description">
// // // //                           {product.description ||
// // // //                             "Premium quality product sourced from trusted farms."}
// // // //                         </p>

// // // //                         <div className="prd-card-pricing">
// // // //                           <span className="prd-card-price">
// // // //                             €{Math.round(discountedPrice)}
// // // //                           </span>
// // // //                           {hasDiscount && (
// // // //                             <span className="prd-card-price-original">
// // // //                               €{product.price}
// // // //                             </span>
// // // //                           )}
// // // //                         </div>

// // // //                         <div className="prd-card-action">
// // // //                           <span>View Details</span>
// // // //                           <span className="prd-card-arrow">→</span>
// // // //                         </div>
// // // //                       </div>

// // // //                       <div className="prd-card-edge" aria-hidden="true" />
// // // //                     </div>
// // // //                   </Link>
// // // //                 );
// // // //               })
// // // //             ) : (
// // // //               <div className="prd-empty">
// // // //                 <div className="prd-empty-content">
// // // //                   <div className="prd-empty-thread" />
// // // //                   <h3 className="prd-empty-title">No products in this category</h3>
// // // //                   <p className="prd-empty-text">
// // // //                     Select another category to explore our collection.
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             )}
// // // //           </div>

// // // //           {/* Global Empty State */}
// // // //           {products.length === 0 && (
// // // //             <div className="prd-empty">
// // // //               <div className="prd-empty-content">
// // // //                 <div className="prd-empty-thread" />
// // // //                 <h3 className="prd-empty-title">No Products Available</h3>
// // // //                 <p className="prd-empty-text">
// // // //                   Check back later for our premium collection.
// // // //                 </p>
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </section>
// // // //     </PublicLayout>
// // // //   );
// // // // }

// // // // export default Products;

// // // // import { useEffect, useState, useRef } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import api from "../services/api";
// // // // import PublicLayout from "../layouts/PublicLayout";
// // // // import "./Products.css";

// // // // function Products() {
// // // //   const [products, setProducts] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [activeCategory, setActiveCategory] = useState("all");
// // // //   const [isPaused, setIsPaused] = useState(false);
// // // //   const [isVisible, setIsVisible] = useState(false);
// // // //   const sectionRef = useRef(null);

// // // //   useEffect(() => {
// // // //     fetchProducts();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const observer = new IntersectionObserver(
// // // //       ([entry]) => {
// // // //         if (entry.isIntersecting) setIsVisible(true);
// // // //       },
// // // //       { threshold: 0.03 }
// // // //     );

// // // //     if (sectionRef.current) observer.observe(sectionRef.current);
// // // //     return () => observer.disconnect();
// // // //   }, [products]);

// // // //   const fetchProducts = async () => {
// // // //     setLoading(true);
// // // //     try {
// // // //       const { data } = await api.get("/products");
// // // //       setProducts(data);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const featuredProducts = products.filter((p) => p.featured);
// // // //   const marqueeProducts = [...featuredProducts, ...featuredProducts];

// // // //   const categories = ["all", ...new Set(products.map((p) => p.category))];

// // // //   const filteredProducts =
// // // //     activeCategory === "all"
// // // //       ? products
// // // //       : products.filter((p) => p.category === activeCategory);

// // // //   const calculateDiscountedPrice = (price, discountPercent) => {
// // // //     if (discountPercent && discountPercent > 0) {
// // // //       return price - (price * discountPercent) / 100;
// // // //     }
// // // //     return price;
// // // //   };

// // // //   const renderProductCard = (product, index) => {
// // // //     const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercent);
// // // //     const hasDiscount = product.discountPercent && product.discountPercent > 0;

// // // //     return (
// // // //       <Link
// // // //         key={`${product.id}-${index}`}
// // // //         to={`/products/${product.id}`}
// // // //         className="prd-card-link"
// // // //         style={{ "--card-index": index }}
// // // //       >
// // // //         <div className="prd-card">
// // // //           <div className="prd-card-shine" aria-hidden="true" />
// // // //           <div className="prd-card-media">
// // // //             <div className="prd-card-image-wrap">
// // // //               {product.image && (
// // // //                 <img
// // // //                   src={`https://a4agroup.eu${product.image}`}
// // // //                   alt={product.title}
// // // //                   className="prd-card-image"
// // // //                   loading="lazy"
// // // //                 />
// // // //               )}
// // // //               <div className="prd-card-image-veil" />
// // // //             </div>
// // // //             <div className="prd-card-badges">
// // // //               {product.featured && (
// // // //                 <span className="prd-badge prd-badge-featured">Featured</span>
// // // //               )}
// // // //               {hasDiscount && (
// // // //                 <span className="prd-badge prd-badge-discount">
// // // //                   {product.discountPercent}% OFF
// // // //                 </span>
// // // //               )}
// // // //             </div>
// // // //           </div>
// // // //           <div className="prd-card-details">
// // // //             <div className="prd-card-category">
// // // //               <span className="prd-card-category-dot" />
// // // //               {product.category}
// // // //             </div>
// // // //             <h3 className="prd-card-title">{product.title}</h3>
// // // //             <p className="prd-card-description">
// // // //               {product.description || "Premium quality product sourced from trusted farms."}
// // // //             </p>
// // // //             <div className="prd-card-pricing">
// // // //               <span className="prd-card-price">€{Math.round(discountedPrice)}</span>
// // // //               {hasDiscount && (
// // // //                 <span className="prd-card-price-original">€{product.price}</span>
// // // //               )}
// // // //             </div>
// // // //             <div className="prd-card-action">
// // // //               <span>View Details</span>
// // // //               <span className="prd-card-arrow">→</span>
// // // //             </div>
// // // //           </div>
// // // //           <div className="prd-card-edge" aria-hidden="true" />
// // // //         </div>
// // // //       </Link>
// // // //     );
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <PublicLayout>
// // // //         <div className="prd-loading">
// // // //           <div className="prd-loading-spinner" />
// // // //           <p>Loading products...</p>
// // // //         </div>
// // // //       </PublicLayout>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <PublicLayout>
// // // //       <section
// // // //         ref={sectionRef}
// // // //         className={`prd-premium ${isVisible ? "prd-visible" : ""}`}
// // // //       >
// // // //         {/* Atmospheric Depth */}
// // // //         <div className="prd-atmosphere" aria-hidden="true">
// // // //           <div className="prd-glow prd-glow--emerald" />
// // // //           <div className="prd-glow prd-glow--teal" />
// // // //           <div className="prd-glow prd-glow--blue" />
// // // //           <div className="prd-mesh" />
// // // //           <div className="prd-grain" />
// // // //           <div className="prd-vignette" />
// // // //         </div>

// // // //         {/* Floating Orbs */}
// // // //         <div className="prd-orbs" aria-hidden="true">
// // // //           <div className="prd-orb prd-orb--primary" />
// // // //           <div className="prd-orb prd-orb--secondary" />
// // // //         </div>

// // // //         <div className="prd-container">
// // // //           {/* Hero Header */}
// // // //           <div className="prd-hero">
// // // //             <div className="prd-hero-content">
// // // //               <div className="prd-whisper">
// // // //                 <span className="prd-whisper-pulse" />
// // // //                 <span>ETA Foods</span>
// // // //               </div>
// // // //               <h1 className="prd-headline">
// // // //                 <span className="prd-headline-line">Healthy & Organic</span>
// // // //                 <span className="prd-headline-line prd-headline-radiance">
// // // //                   products for everyday wellness
// // // //                 </span>
// // // //               </h1>
// // // //               <p className="prd-prose">
// // // //                 Explore our collection of millet mixes, rice, snacks, organics,
// // // //                 oils, and seasonal products — all sourced directly from trusted farms.
// // // //               </p>
// // // //             </div>
// // // //           </div>

// // // //           {/* Featured Products Marquee */}
// // // //           {featuredProducts.length > 0 && (
// // // //             <div className="prd-featured">
// // // //               <div className="prd-featured-header">
// // // //                 <div className="prd-featured-thread" />
// // // //                 <span className="prd-featured-label">Featured Products</span>
// // // //               </div>
// // // //               <div
// // // //                 className="prd-marquee-stage"
// // // //                 onMouseEnter={() => setIsPaused(true)}
// // // //                 onMouseLeave={() => setIsPaused(false)}
// // // //               >
// // // //                 <div className={`prd-marquee-track ${isPaused ? "prd-marquee-paused" : ""}`}>
// // // //                   {marqueeProducts.map((product, index) =>
// // // //                     renderProductCard(product, index)
// // // //                   )}
// // // //                 </div>
// // // //                 <div className="prd-marquee-fade prd-marquee-fade-left" />
// // // //                 <div className="prd-marquee-fade prd-marquee-fade-right" />
// // // //               </div>
// // // //             </div>
// // // //           )}

// // // //           {/* Category Toggle + All Products */}
// // // //           <div className="prd-catalog">
// // // //             <div className="prd-catalog-header">
// // // //               <div className="prd-catalog-thread" />
// // // //               <span className="prd-catalog-label">Our Collection</span>
// // // //             </div>

// // // //             {/* Category Tabs */}
// // // //             <div className="prd-categories">
// // // //               <div className="prd-categories-tabs">
// // // //                 {categories.map((category) => (
// // // //                   <button
// // // //                     key={category}
// // // //                     className={`prd-category-tab ${
// // // //                       activeCategory === category ? "prd-category-active" : ""
// // // //                     }`}
// // // //                     onClick={() => setActiveCategory(category)}
// // // //                   >
// // // //                     <span>{category === "all" ? "All Products" : category}</span>
// // // //                     <span className="prd-category-count">
// // // //                       {category === "all"
// // // //                         ? products.length
// // // //                         : products.filter((p) => p.category === category).length}
// // // //                     </span>
// // // //                   </button>
// // // //                 ))}
// // // //               </div>
// // // //             </div>

// // // //             {/* Products Grid */}
// // // //             <div className="prd-grid">
// // // //               {filteredProducts.length > 0 ? (
// // // //                 filteredProducts.map((product, index) =>
// // // //                   renderProductCard(product, index)
// // // //                 )
// // // //               ) : (
// // // //                 <div className="prd-empty">
// // // //                   <div className="prd-empty-content">
// // // //                     <div className="prd-empty-thread" />
// // // //                     <h3 className="prd-empty-title">No products in this category</h3>
// // // //                     <p className="prd-empty-text">
// // // //                       Select another category to explore our collection.
// // // //                     </p>
// // // //                   </div>
// // // //                 </div>
// // // //               )}
// // // //             </div>
// // // //           </div>

// // // //           {/* Global Empty State */}
// // // //           {products.length === 0 && (
// // // //             <div className="prd-empty">
// // // //               <div className="prd-empty-content">
// // // //                 <div className="prd-empty-thread" />
// // // //                 <h3 className="prd-empty-title">No Products Available</h3>
// // // //                 <p className="prd-empty-text">
// // // //                   Check back later for our premium collection.
// // // //                 </p>
// // // //               </div>
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //       </section>
// // // //     </PublicLayout>
// // // //   );
// // // // }

// // // // export default Products;


// // // import { useEffect, useState, useRef } from "react";
// // // import { Link } from "react-router-dom";
// // // import api from "../services/api";
// // // import PublicLayout from "../layouts/PublicLayout";
// // // import "./Products.css";

// // // function Products() {
// // //   const [products, setProducts] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [activeCategory, setActiveCategory] = useState("all");
// // //   const [isPaused, setIsPaused] = useState(false);
// // //   const [isVisible, setIsVisible] = useState(false);
// // //   const sectionRef = useRef(null);

// // //   useEffect(() => {
// // //     fetchProducts();
// // //   }, []);

// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       ([entry]) => {
// // //         if (entry.isIntersecting) setIsVisible(true);
// // //       },
// // //       { threshold: 0.03 }
// // //     );

// // //     if (sectionRef.current) observer.observe(sectionRef.current);
// // //     return () => observer.disconnect();
// // //   }, [products]);

// // //   const fetchProducts = async () => {
// // //     setLoading(true);
// // //     try {
// // //       const { data } = await api.get("/products");
// // //       setProducts(data);
// // //     } catch (error) {
// // //       console.error(error);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const featuredProducts = products.filter((p) => p.featured);
// // //   const marqueeProducts = [...featuredProducts, ...featuredProducts];

// // //   const categories = ["all", ...new Set(products.map((p) => p.category))];

// // //   const filteredProducts =
// // //     activeCategory === "all"
// // //       ? products
// // //       : products.filter((p) => p.category === activeCategory);

// // //   const calculateDiscountedPrice = (price, discountPercent) => {
// // //     if (discountPercent && discountPercent > 0) {
// // //       return price - (price * discountPercent) / 100;
// // //     }
// // //     return price;
// // //   };

// // //   const renderProductCard = (product, index) => {
// // //     const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercent);
// // //     // Only show discount if discountPercent exists AND is greater than 0
// // //     const hasDiscount = product.discountPercent && product.discountPercent > 0;

// // //     return (
// // //       <Link
// // //         key={`${product.id}-${index}`}
// // //         to={`/products/${product.id}`}
// // //         className="prd-card-link"
// // //         style={{ "--card-index": index }}
// // //       >
// // //         <div className="prd-card">
// // //           <div className="prd-card-shine" aria-hidden="true" />
// // //           <div className="prd-card-media">
// // //             <div className="prd-card-image-wrap">
// // //               {product.image && (
// // //                 <img
// // //                   src={`https://a4agroup.eu${product.image}`}
// // //                   alt={product.title}
// // //                   className="prd-card-image"
// // //                   loading="lazy"
// // //                 />
// // //               )}
// // //               <div className="prd-card-image-veil" />
// // //             </div>
// // //             <div className="prd-card-badges">
// // //               {product.featured && !hasDiscount && (
// // //                 <span className="prd-badge prd-badge-featured">Featured</span>
// // //               )}
// // //               {hasDiscount && (
// // //                 <span className="prd-badge prd-badge-discount">
// // //                   {product.discountPercent}% OFF
// // //                 </span>
// // //               )}
// // //             </div>
// // //           </div>
// // //           <div className="prd-card-details">
// // //             <div className="prd-card-category">
// // //               <span className="prd-card-category-dot" />
// // //               {product.category}
// // //             </div>
// // //             <h3 className="prd-card-title">{product.title}</h3>
// // //             <p className="prd-card-description">
// // //               {product.description || "Premium quality product sourced from trusted farms."}
// // //             </p>
// // //             <div className="prd-card-pricing">
// // //               <span className="prd-card-price">€{Math.round(discountedPrice)}</span>
// // //               {hasDiscount && (
// // //                 <span className="prd-card-price-original">€{product.price}</span>
// // //               )}
// // //             </div>
// // //             <div className="prd-card-action">
// // //               <span>View Details</span>
// // //               <span className="prd-card-arrow">→</span>
// // //             </div>
// // //           </div>
// // //           <div className="prd-card-edge" aria-hidden="true" />
// // //         </div>
// // //       </Link>
// // //     );
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <PublicLayout>
// // //         <div className="prd-loading">
// // //           <div className="prd-loading-spinner" />
// // //           <p>Loading products...</p>
// // //         </div>
// // //       </PublicLayout>
// // //     );
// // //   }

// // //   return (
// // //     <PublicLayout>
// // //       <section
// // //         ref={sectionRef}
// // //         className={`prd-premium ${isVisible ? "prd-visible" : ""}`}
// // //       >
// // //         {/* Atmospheric Depth */}
// // //         <div className="prd-atmosphere" aria-hidden="true">
// // //           <div className="prd-glow prd-glow--emerald" />
// // //           <div className="prd-glow prd-glow--teal" />
// // //           <div className="prd-glow prd-glow--blue" />
// // //           <div className="prd-mesh" />
// // //           <div className="prd-grain" />
// // //           <div className="prd-vignette" />
// // //         </div>

// // //         {/* Floating Orbs */}
// // //         <div className="prd-orbs" aria-hidden="true">
// // //           <div className="prd-orb prd-orb--primary" />
// // //           <div className="prd-orb prd-orb--secondary" />
// // //         </div>

// // //         <div className="prd-container">
// // //           {/* Hero Header */}
// // //           <div className="prd-hero">
// // //             <div className="prd-hero-content">
// // //               <div className="prd-whisper">
// // //                 <span className="prd-whisper-pulse" />
// // //                 <span>ETA Foods</span>
// // //               </div>
// // //               <h1 className="prd-headline">
// // //                 <span className="prd-headline-line">Healthy & Organic</span>
// // //                 <span className="prd-headline-line prd-headline-radiance">
// // //                   products for everyday wellness
// // //                 </span>
// // //               </h1>
// // //               <p className="prd-prose">
// // //                 Explore our collection of millet mixes, rice, snacks, organics,
// // //                 oils, and seasonal products — all sourced directly from trusted farms.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           {/* Featured Products Marquee */}
// // //           {featuredProducts.length > 0 && (
// // //             <div className="prd-featured">
// // //               <div className="prd-featured-header">
// // //                 <div className="prd-featured-thread" />
// // //                 <span className="prd-featured-label">Featured Products</span>
// // //               </div>
// // //               <div
// // //                 className="prd-marquee-stage"
// // //                 onMouseEnter={() => setIsPaused(true)}
// // //                 onMouseLeave={() => setIsPaused(false)}
// // //               >
// // //                 <div className={`prd-marquee-track ${isPaused ? "prd-marquee-paused" : ""}`}>
// // //                   {marqueeProducts.map((product, index) =>
// // //                     renderProductCard(product, index)
// // //                   )}
// // //                 </div>
// // //                 <div className="prd-marquee-fade prd-marquee-fade-left" />
// // //                 <div className="prd-marquee-fade prd-marquee-fade-right" />
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* Category Toggle + All Products */}
// // //           <div className="prd-catalog">
// // //             <div className="prd-catalog-header">
// // //               <div className="prd-catalog-thread" />
// // //               <span className="prd-catalog-label">Our Collection</span>
// // //             </div>

// // //             {/* Category Tabs */}
// // //             <div className="prd-categories">
// // //               <div className="prd-categories-tabs">
// // //                 {categories.map((category) => (
// // //                   <button
// // //                     key={category}
// // //                     className={`prd-category-tab ${
// // //                       activeCategory === category ? "prd-category-active" : ""
// // //                     }`}
// // //                     onClick={() => setActiveCategory(category)}
// // //                   >
// // //                     <span>{category === "all" ? "All Products" : category}</span>
// // //                     <span className="prd-category-count">
// // //                       {category === "all"
// // //                         ? products.length
// // //                         : products.filter((p) => p.category === category).length}
// // //                     </span>
// // //                   </button>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* Products Grid */}
// // //             <div className="prd-grid">
// // //               {filteredProducts.length > 0 ? (
// // //                 filteredProducts.map((product, index) =>
// // //                   renderProductCard(product, index)
// // //                 )
// // //               ) : (
// // //                 <div className="prd-empty">
// // //                   <div className="prd-empty-content">
// // //                     <div className="prd-empty-thread" />
// // //                     <h3 className="prd-empty-title">No products in this category</h3>
// // //                     <p className="prd-empty-text">
// // //                       Select another category to explore our collection.
// // //                     </p>
// // //                   </div>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>

// // //           {/* Global Empty State */}
// // //           {products.length === 0 && (
// // //             <div className="prd-empty">
// // //               <div className="prd-empty-content">
// // //                 <div className="prd-empty-thread" />
// // //                 <h3 className="prd-empty-title">No Products Available</h3>
// // //                 <p className="prd-empty-text">
// // //                   Check back later for our premium collection.
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </section>
// // //     </PublicLayout>
// // //   );
// // // }

// // // export default Products;

// // // import { useEffect, useState, useRef } from "react";
// // // import { Link } from "react-router-dom";
// // // import api from "../services/api";
// // // import PublicLayout from "../layouts/PublicLayout";
// // // import "./Products.css";

// // // function Products() {
// // //   const [products, setProducts] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [activeCategory, setActiveCategory] = useState("all");
// // //   const [isPaused, setIsPaused] = useState(false);
// // //   const [isVisible, setIsVisible] = useState(false);
// // //   const sectionRef = useRef(null);

// // //   useEffect(() => {
// // //     fetchProducts();
// // //   }, []);

// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       ([entry]) => {
// // //         if (entry.isIntersecting) setIsVisible(true);
// // //       },
// // //       { threshold: 0.03 }
// // //     );

// // //     if (sectionRef.current) observer.observe(sectionRef.current);
// // //     return () => observer.disconnect();
// // //   }, [products]);

// // //   const fetchProducts = async () => {
// // //     setLoading(true);
// // //     try {
// // //       const { data } = await api.get("/products");
// // //       setProducts(data);
// // //     } catch (error) {
// // //       console.error(error);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const featuredProducts = products.filter((p) => p.featured);
// // //   const marqueeProducts = [...featuredProducts, ...featuredProducts];

// // //   const categories = ["all", ...new Set(products.map((p) => p.category))];

// // //   const filteredProducts =
// // //     activeCategory === "all"
// // //       ? products
// // //       : products.filter((p) => p.category === activeCategory);

// // //   // Only apply discount if discountPercent is a positive number
// // //   const getDisplayPrice = (price, discountPercent) => {
// // //     if (discountPercent && Number(discountPercent) > 0) {
// // //       return Math.round(price - (price * Number(discountPercent)) / 100);
// // //     }
// // //     return Math.round(price);
// // //   };

// // //   // Check if discount is valid (exists and greater than 0)
// // //   const hasValidDiscount = (discountPercent) => {
// // //     return discountPercent && Number(discountPercent) > 0;
// // //   };

// // //   const renderProductCard = (product, index) => {
// // //     const discountPercent = Number(product.discountPercent) || 0;
// // //     const hasDiscount = discountPercent > 0;
// // //     const displayPrice = hasDiscount
// // //       ? Math.round(product.price - (product.price * discountPercent) / 100)
// // //       : Math.round(product.price);

// // //     return (
// // //       <Link
// // //         key={`${product.id}-${index}`}
// // //         to={`/products/${product.id}`}
// // //         className="prd-card-link"
// // //         style={{ "--card-index": index }}
// // //       >
// // //         <div className="prd-card">
// // //           <div className="prd-card-shine" aria-hidden="true" />
// // //           <div className="prd-card-media">
// // //             <div className="prd-card-image-wrap">
// // //               {product.image && (
// // //                 <img
// // //                   src={`https://a4agroup.eu${product.image}`}
// // //                   alt={product.title}
// // //                   className="prd-card-image"
// // //                   loading="lazy"
// // //                 />
// // //               )}
// // //               <div className="prd-card-image-veil" />
// // //             </div>
// // //             <div className="prd-card-badges">
// // //               {/* Only show Featured badge if there's NO discount */}
// // //               {product.featured && !hasDiscount && (
// // //                 <span className="prd-badge prd-badge-featured">Featured</span>
// // //               )}
// // //               {/* Only show Discount badge if discount > 0 */}
// // //               {hasDiscount && (
// // //                 <span className="prd-badge prd-badge-discount">
// // //                   {discountPercent}% OFF
// // //                 </span>
// // //               )}
// // //             </div>
// // //           </div>
// // //           <div className="prd-card-details">
// // //             <div className="prd-card-category">
// // //               <span className="prd-card-category-dot" />
// // //               {product.category}
// // //             </div>
// // //             <h3 className="prd-card-title">{product.title}</h3>
// // //             <p className="prd-card-description">
// // //               {product.description || "Premium quality product sourced from trusted farms."}
// // //             </p>
// // //             <div className="prd-card-pricing">
// // //               <span className="prd-card-price">€{displayPrice}</span>
// // //               {/* Only show original price if discount > 0 */}
// // //               {hasDiscount && (
// // //                 <span className="prd-card-price-original">€{product.price}</span>
// // //               )}
// // //             </div>
// // //             <div className="prd-card-action">
// // //               <span>View Details</span>
// // //               <span className="prd-card-arrow">→</span>
// // //             </div>
// // //           </div>
// // //           <div className="prd-card-edge" aria-hidden="true" />
// // //         </div>
// // //       </Link>
// // //     );
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <PublicLayout>
// // //         <div className="prd-loading">
// // //           <div className="prd-loading-spinner" />
// // //           <p>Loading products...</p>
// // //         </div>
// // //       </PublicLayout>
// // //     );
// // //   }

// // //   return (
// // //     <PublicLayout>
// // //       <section
// // //         ref={sectionRef}
// // //         className={`prd-premium ${isVisible ? "prd-visible" : ""}`}
// // //       >
// // //         {/* Atmospheric Depth */}
// // //         <div className="prd-atmosphere" aria-hidden="true">
// // //           <div className="prd-glow prd-glow--emerald" />
// // //           <div className="prd-glow prd-glow--teal" />
// // //           <div className="prd-glow prd-glow--blue" />
// // //           <div className="prd-mesh" />
// // //           <div className="prd-grain" />
// // //           <div className="prd-vignette" />
// // //         </div>

// // //         {/* Floating Orbs */}
// // //         <div className="prd-orbs" aria-hidden="true">
// // //           <div className="prd-orb prd-orb--primary" />
// // //           <div className="prd-orb prd-orb--secondary" />
// // //         </div>

// // //         <div className="prd-container">
// // //           {/* Hero Header */}
// // //           <div className="prd-hero">
// // //             <div className="prd-hero-content">
// // //               <div className="prd-whisper">
// // //                 <span className="prd-whisper-pulse" />
// // //                 <span>Farm Fresh, Direct to You

// // //                 </span>
// // //               </div>
// // //               <h1 className="prd-headline">
// // //                 <span className="prd-headline-line">Healthy & Organic</span>
// // //                 <span className="prd-headline-line prd-headline-radiance">
// // //                   products for everyday wellness
// // //                 </span>
// // //               </h1>
// // //               <p className="prd-prose">
// // //                 Explore our collection of millet mixes, rice, snacks, organics,
// // //                 oils, and seasonal products — all sourced directly from trusted farms.
// // //               </p>
// // //             </div>
// // //           </div>

// // //           {/* Featured Products Marquee */}
// // //           {featuredProducts.length > 0 && (
// // //             <div className="prd-featured">
// // //               <div className="prd-featured-header">
// // //                 <div className="prd-featured-thread" />
// // //                 <span className="prd-featured-label">Featured Products</span>
// // //               </div>
// // //               <div
// // //                 className="prd-marquee-stage"
// // //                 onMouseEnter={() => setIsPaused(true)}
// // //                 onMouseLeave={() => setIsPaused(false)}
// // //               >
// // //                 <div className={`prd-marquee-track ${isPaused ? "prd-marquee-paused" : ""}`}>
// // //                   {marqueeProducts.map((product, index) =>
// // //                     renderProductCard(product, index)
// // //                   )}
// // //                 </div>
// // //                 <div className="prd-marquee-fade prd-marquee-fade-left" />
// // //                 <div className="prd-marquee-fade prd-marquee-fade-right" />
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* Category Toggle + All Products */}
// // //           <div className="prd-catalog">
// // //             <div className="prd-catalog-header">
// // //               <div className="prd-catalog-thread" />
// // //               <span className="prd-catalog-label">Our Collection</span>
// // //             </div>

// // //             {/* Category Tabs */}
// // //             <div className="prd-categories">
// // //               <div className="prd-categories-tabs">
// // //                 {categories.map((category) => (
// // //                   <button
// // //                     key={category}
// // //                     className={`prd-category-tab ${activeCategory === category ? "prd-category-active" : ""
// // //                       }`}
// // //                     onClick={() => setActiveCategory(category)}
// // //                   >
// // //                     <span>{category === "all" ? "All Products" : category}</span>
// // //                     <span className="prd-category-count">
// // //                       {category === "all"
// // //                         ? products.length
// // //                         : products.filter((p) => p.category === category).length}
// // //                     </span>
// // //                   </button>
// // //                 ))}
// // //               </div>
// // //             </div>

// // //             {/* Products Grid */}
// // //             <div className="prd-grid">
// // //               {filteredProducts.length > 0 ? (
// // //                 filteredProducts.map((product, index) =>
// // //                   renderProductCard(product, index)
// // //                 )
// // //               ) : (
// // //                 <div className="prd-empty">
// // //                   <div className="prd-empty-content">
// // //                     <div className="prd-empty-thread" />
// // //                     <h3 className="prd-empty-title">No products in this category</h3>
// // //                     <p className="prd-empty-text">
// // //                       Select another category to explore our collection.
// // //                     </p>
// // //                   </div>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>

// // //           {/* Global Empty State */}
// // //           {products.length === 0 && (
// // //             <div className="prd-empty">
// // //               <div className="prd-empty-content">
// // //                 <div className="prd-empty-thread" />
// // //                 <h3 className="prd-empty-title">No Products Available</h3>
// // //                 <p className="prd-empty-text">
// // //                   Check back later for our premium collection.
// // //                 </p>
// // //               </div>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </section>
// // //     </PublicLayout>
// // //   );
// // // }

// // // export default Products;


// // import { useEffect, useState, useRef, useCallback } from "react";
// // import { Link } from "react-router-dom";
// // import api from "../services/api";
// // import PublicLayout from "../layouts/PublicLayout";
// // import "./Products.css";

// // function Products() {
// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [activeCategory, setActiveCategory] = useState("all");
// //   const [isPaused, setIsPaused] = useState(false);
// //   const [isVisible, setIsVisible] = useState(false);
// //   const sectionRef = useRef(null);
  
// //   // Cart states
// //   const [cartItems, setCartItems] = useState({});
// //   const [cartLoading, setCartLoading] = useState({});

// //   // Session helper
// //   const getSessionId = useCallback(() => {
// //     let sessionId = localStorage.getItem("cartSessionId");

// //     if (!sessionId) {
// //       sessionId =
// //         "cart-" +
// //         Date.now() +
// //         "-" +
// //         Math.random().toString(36).substring(2, 10);

// //       localStorage.setItem("cartSessionId", sessionId);
// //     }

// //     return sessionId;
// //   }, []);

// //   // Fetch cart items when page loads
// //   const fetchCartItems = useCallback(async () => {
// //     try {
// //       const sessionId = getSessionId();
// //       const { data } = await api.get(`/cart/${sessionId}`);

// //       const quantities = {};
// //       data.items?.forEach((item) => {
// //         quantities[item.productId] = item.quantity;
// //       });

// //       setCartItems(quantities);
// //     } catch (error) {
// //       console.error("Failed to load cart:", error);
// //     }
// //   }, [getSessionId]);

// //   useEffect(() => {
// //     fetchCartItems();
// //   }, [fetchCartItems]);

// //   useEffect(() => {
// //     fetchProducts();
// //   }, []);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) setIsVisible(true);
// //       },
// //       { threshold: 0.03 }
// //     );

// //     if (sectionRef.current) observer.observe(sectionRef.current);
// //     return () => observer.disconnect();
// //   }, [products]);

// //   const fetchProducts = async () => {
// //     setLoading(true);
// //     try {
// //       const { data } = await api.get("/products");
// //       setProducts(data);
// //     } catch (error) {
// //       console.error(error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Cart functions
// //   const addToCart = async (productId) => {
// //     try {
// //       setCartLoading((prev) => ({
// //         ...prev,
// //         [productId]: true,
// //       }));

// //       const sessionId = getSessionId();

// //       const response = await api.post("/cart/add", {
// //         sessionId,
// //         productId,
// //         quantity: 1,
// //       });

// //       if (response.status === 201) {
// //         setCartItems((prev) => ({
// //           ...prev,
// //           [productId]: (prev[productId] || 0) + 1,
// //         }));

// //         window.dispatchEvent(new Event("cartUpdated"));
// //       }
// //     } catch (error) {
// //       console.error("Add to cart error:", error);
// //     } finally {
// //       setCartLoading((prev) => ({
// //         ...prev,
// //         [productId]: false,
// //       }));
// //     }
// //   };

// //   const updateCartQuantity = async (productId, quantity) => {
// //     if (quantity < 1) {
// //       removeFromCart(productId);
// //       return;
// //     }

// //     try {
// //       setCartLoading((prev) => ({
// //         ...prev,
// //         [productId]: true,
// //       }));

// //       const sessionId = getSessionId();

// //       await api.put(`/cart/${sessionId}/${productId}`, {
// //         quantity,
// //       });

// //       setCartItems((prev) => ({
// //         ...prev,
// //         [productId]: quantity,
// //       }));

// //       window.dispatchEvent(new Event("cartUpdated"));
// //     } catch (error) {
// //       console.error("Update cart error:", error);
// //     } finally {
// //       setCartLoading((prev) => ({
// //         ...prev,
// //         [productId]: false,
// //       }));
// //     }
// //   };

// //   const removeFromCart = async (productId) => {
// //     try {
// //       setCartLoading((prev) => ({
// //         ...prev,
// //         [productId]: true,
// //       }));

// //       const sessionId = getSessionId();

// //       await api.delete(`/cart/${sessionId}/${productId}`);

// //       setCartItems((prev) => {
// //         const updated = { ...prev };
// //         delete updated[productId];
// //         return updated;
// //       });

// //       window.dispatchEvent(new Event("cartUpdated"));
// //     } catch (error) {
// //       console.error("Remove cart error:", error);
// //     } finally {
// //       setCartLoading((prev) => ({
// //         ...prev,
// //         [productId]: false,
// //       }));
// //     }
// //   };

// //   const featuredProducts = products.filter((p) => p.featured);
// //   const marqueeProducts = [...featuredProducts, ...featuredProducts];

// //   const categories = ["all", ...new Set(products.map((p) => p.category))];

// //   const filteredProducts =
// //     activeCategory === "all"
// //       ? products
// //       : products.filter((p) => p.category === activeCategory);

// //   const getDisplayPrice = (price, discountPercent) => {
// //     if (discountPercent && Number(discountPercent) > 0) {
// //       return Math.round(price - (price * Number(discountPercent)) / 100);
// //     }
// //     return Math.round(price);
// //   };

// //   const hasValidDiscount = (discountPercent) => {
// //     return discountPercent && Number(discountPercent) > 0;
// //   };

// //   const renderProductCard = (product, index) => {
// //     const discountPercent = Number(product.discountPercent) || 0;
// //     const hasDiscount = discountPercent > 0;
// //     const displayPrice = hasDiscount
// //       ? Math.round(product.price - (product.price * discountPercent) / 100)
// //       : Math.round(product.price);

// //     const quantityInCart = cartItems[product.id] || 0;
// //     const isLoading = cartLoading[product.id] || false;

// //     return (
// //       <div
// //         key={`${product.id}-${index}`}
// //         className="prd-card-link"
// //         style={{ "--card-index": index }}
// //       >
// //         <div className="prd-card">
// //           <div className="prd-card-shine" aria-hidden="true" />
          
// //           {/* Product Image - Clickable */}
// //           <Link to={`/products/${product.id}`} className="prd-card-image-link">
// //             <div className="prd-card-media">
// //               <div className="prd-card-image-wrap">
// //                 {product.image && (
// //                   <img
// //                     src={`https://a4agroup.eu${product.image}`}
// //                     alt={product.title}
// //                     className="prd-card-image"
// //                     loading="lazy"
// //                   />
// //                 )}
// //                 <div className="prd-card-image-veil" />
// //               </div>
// //               <div className="prd-card-badges">
// //                 {product.featured && !hasDiscount && (
// //                   <span className="prd-badge prd-badge-featured">Featured</span>
// //                 )}
// //                 {hasDiscount && (
// //                   <span className="prd-badge prd-badge-discount">
// //                     {discountPercent}% OFF
// //                   </span>
// //                 )}
// //               </div>
// //             </div>
// //           </Link>
          
// //           {/* Product Details - Clickable */}
// //           <Link to={`/products/${product.id}`} className="prd-card-details-link">
// //             <div className="prd-card-details">
// //               <div className="prd-card-category">
// //                 <span className="prd-card-category-dot" />
// //                 {product.category}
// //               </div>
// //               <h3 className="prd-card-title">{product.title}</h3>
// //               <p className="prd-card-description">
// //                 {product.description || "Premium quality product sourced from trusted farms."}
// //               </p>
// //               <div className="prd-card-pricing">
// //                 <span className="prd-card-price">€{displayPrice}</span>
// //                 {hasDiscount && (
// //                   <span className="prd-card-price-original">€{product.price}</span>
// //                 )}
// //               </div>
// //             </div>
// //           </Link>
          
// //           {/* Action Section - Contains View Details and Cart Actions */}
// //           <div className="prd-card-action">
// //             <Link
// //               to={`/products/${product.id}`}
// //               className="prd-view-details"
// //             >
// //               <span>View Details</span>
// //               <span className="prd-card-arrow">→</span>
// //             </Link>

// //             {!cartItems[product.id] ? (
// //               <button
// //                 type="button"
// //                 className="prd-add-cart"
// //                 disabled={isLoading}
// //                 onClick={(e) => {
// //                   e.preventDefault();
// //                   e.stopPropagation();
// //                   addToCart(product.id);
// //                 }}
// //               >
// //                 {isLoading ? "Adding..." : "Add to Cart"}
// //               </button>
// //             ) : (
// //               <div
// //                 className="prd-cart-quantity"
// //                 onClick={(e) => {
// //                   e.preventDefault();
// //                   e.stopPropagation();
// //                 }}
// //               >
// //                 <button
// //                   type="button"
// //                   onClick={() =>
// //                     updateCartQuantity(
// //                       product.id,
// //                       cartItems[product.id] - 1
// //                     )
// //                   }
// //                   disabled={isLoading}
// //                   aria-label="Decrease quantity"
// //                 >
// //                   −
// //                 </button>

// //                 <span>{cartItems[product.id]}</span>

// //                 <button
// //                   type="button"
// //                   onClick={() =>
// //                     updateCartQuantity(
// //                       product.id,
// //                       cartItems[product.id] + 1
// //                     )
// //                   }
// //                   disabled={isLoading}
// //                   aria-label="Increase quantity"
// //                 >
// //                   +
// //                 </button>
// //               </div>
// //             )}
// //           </div>
          
// //           <div className="prd-card-edge" aria-hidden="true" />
// //         </div>
// //       </div>
// //     );
// //   };

// //   if (loading) {
// //     return (
// //       <PublicLayout>
// //         <div className="prd-loading">
// //           <div className="prd-loading-spinner" />
// //           <p>Loading products...</p>
// //         </div>
// //       </PublicLayout>
// //     );
// //   }

// //   return (
// //     <PublicLayout>
// //       <section
// //         ref={sectionRef}
// //         className={`prd-premium ${isVisible ? "prd-visible" : ""}`}
// //       >
// //         {/* Atmospheric Depth */}
// //         <div className="prd-atmosphere" aria-hidden="true">
// //           <div className="prd-glow prd-glow--emerald" />
// //           <div className="prd-glow prd-glow--teal" />
// //           <div className="prd-glow prd-glow--blue" />
// //           <div className="prd-mesh" />
// //           <div className="prd-grain" />
// //           <div className="prd-vignette" />
// //         </div>

// //         {/* Floating Orbs */}
// //         <div className="prd-orbs" aria-hidden="true">
// //           <div className="prd-orb prd-orb--primary" />
// //           <div className="prd-orb prd-orb--secondary" />
// //         </div>

// //         <div className="prd-container">
// //           {/* Hero Header */}
// //           <div className="prd-hero">
// //             <div className="prd-hero-content">
// //               <div className="prd-whisper">
// //                 <span className="prd-whisper-pulse" />
// //                 <span>Farm Fresh, Direct to You</span>
// //               </div>
// //               <h1 className="prd-headline">
// //                 <span className="prd-headline-line">Healthy & Organic</span>
// //                 <span className="prd-headline-line prd-headline-radiance">
// //                   products for everyday wellness
// //                 </span>
// //               </h1>
// //               <p className="prd-prose">
// //                 Explore our collection of millet mixes, rice, snacks, organics,
// //                 oils, and seasonal products — all sourced directly from trusted farms.
// //               </p>
// //             </div>
// //           </div>

// //           {/* Featured Products Marquee */}
// //           {featuredProducts.length > 0 && (
// //             <div className="prd-featured">
// //               <div className="prd-featured-header">
// //                 <div className="prd-featured-thread" />
// //                 <span className="prd-featured-label">Featured Products</span>
// //               </div>
// //               <div
// //                 className="prd-marquee-stage"
// //                 onMouseEnter={() => setIsPaused(true)}
// //                 onMouseLeave={() => setIsPaused(false)}
// //               >
// //                 <div className={`prd-marquee-track ${isPaused ? "prd-marquee-paused" : ""}`}>
// //                   {marqueeProducts.map((product, index) =>
// //                     renderProductCard(product, index)
// //                   )}
// //                 </div>
// //                 <div className="prd-marquee-fade prd-marquee-fade-left" />
// //                 <div className="prd-marquee-fade prd-marquee-fade-right" />
// //               </div>
// //             </div>
// //           )}

// //           {/* Category Toggle + All Products */}
// //           <div className="prd-catalog">
// //             <div className="prd-catalog-header">
// //               <div className="prd-catalog-thread" />
// //               <span className="prd-catalog-label">Our Collection</span>
// //             </div>

// //             {/* Category Tabs */}
// //             <div className="prd-categories">
// //               <div className="prd-categories-tabs">
// //                 {categories.map((category) => (
// //                   <button
// //                     key={category}
// //                     className={`prd-category-tab ${activeCategory === category ? "prd-category-active" : ""
// //                       }`}
// //                     onClick={() => setActiveCategory(category)}
// //                   >
// //                     <span>{category === "all" ? "All Products" : category}</span>
// //                     <span className="prd-category-count">
// //                       {category === "all"
// //                         ? products.length
// //                         : products.filter((p) => p.category === category).length}
// //                     </span>
// //                   </button>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Products Grid */}
// //             <div className="prd-grid">
// //               {filteredProducts.length > 0 ? (
// //                 filteredProducts.map((product, index) =>
// //                   renderProductCard(product, index)
// //                 )
// //               ) : (
// //                 <div className="prd-empty">
// //                   <div className="prd-empty-content">
// //                     <div className="prd-empty-thread" />
// //                     <h3 className="prd-empty-title">No products in this category</h3>
// //                     <p className="prd-empty-text">
// //                       Select another category to explore our collection.
// //                     </p>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>
// //           </div>

// //           {/* Global Empty State */}
// //           {products.length === 0 && (
// //             <div className="prd-empty">
// //               <div className="prd-empty-content">
// //                 <div className="prd-empty-thread" />
// //                 <h3 className="prd-empty-title">No Products Available</h3>
// //                 <p className="prd-empty-text">
// //                   Check back later for our premium collection.
// //                 </p>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </section>
// //     </PublicLayout>
// //   );
// // }

// // export default Products;


// import { useEffect, useState, useRef, useCallback } from "react";
// import { Link } from "react-router-dom";
// import api from "../services/api";
// import PublicLayout from "../layouts/PublicLayout";
// import "./Products.css";

// function Products() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [isPaused, setIsPaused] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);
  
//   // Cart states
//   const [cartItems, setCartItems] = useState({});
//   const [cartLoading, setCartLoading] = useState({});

//   // Session helper
//   const getSessionId = useCallback(() => {
//     let sessionId = localStorage.getItem("cartSessionId");

//     if (!sessionId) {
//       sessionId =
//         "cart-" +
//         Date.now() +
//         "-" +
//         Math.random().toString(36).substring(2, 10);

//       localStorage.setItem("cartSessionId", sessionId);
//     }

//     return sessionId;
//   }, []);

//   // Fetch cart items when page loads
//   const fetchCartItems = useCallback(async () => {
//     try {
//       const sessionId = getSessionId();
//       const { data } = await api.get(`/cart/${sessionId}`);

//       const quantities = {};
//       data.items?.forEach((item) => {
//         quantities[item.productId] = item.quantity;
//       });

//       setCartItems(quantities);
//     } catch (error) {
//       // If cart is not found (404), it's empty - that's fine
//       if (error.response?.status === 404) {
//         setCartItems({});
//         return;
//       }
//       console.error("Failed to load cart:", error);
//     }
//   }, [getSessionId]);

//   useEffect(() => {
//     fetchCartItems();
//   }, [fetchCartItems]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.03 }
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

//   // Cart functions
//   const addToCart = async (productId) => {
//     try {
//       setCartLoading((prev) => ({
//         ...prev,
//         [productId]: true,
//       }));

//       const sessionId = getSessionId();

//       // Using the correct endpoint from your routes
//       const response = await api.post("/cart/add", {
//         sessionId,
//         productId,
//         quantity: 1,
//       });

//       if (response.status === 200 || response.status === 201) {
//         setCartItems((prev) => ({
//           ...prev,
//           [productId]: (prev[productId] || 0) + 1,
//         }));

//         // Dispatch event to update navbar
//         window.dispatchEvent(new Event("cartUpdated"));
//       }
//     } catch (error) {
//       console.error("Add to cart error:", error.response?.data || error.message);
//     } finally {
//       setCartLoading((prev) => ({
//         ...prev,
//         [productId]: false,
//       }));
//     }
//   };

//   const updateCartQuantity = async (productId, quantity) => {
//     if (quantity < 1) {
//       await removeFromCart(productId);
//       return;
//     }

//     try {
//       setCartLoading((prev) => ({
//         ...prev,
//         [productId]: true,
//       }));

//       const sessionId = getSessionId();

//       // Using the correct endpoint from your routes
//       await api.put(`/cart/${sessionId}/${productId}`, {
//         quantity,
//       });

//       setCartItems((prev) => ({
//         ...prev,
//         [productId]: quantity,
//       }));

//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (error) {
//       console.error("Update cart error:", error.response?.data || error.message);
//     } finally {
//       setCartLoading((prev) => ({
//         ...prev,
//         [productId]: false,
//       }));
//     }
//   };

//   const removeFromCart = async (productId) => {
//     try {
//       setCartLoading((prev) => ({
//         ...prev,
//         [productId]: true,
//       }));

//       const sessionId = getSessionId();

//       // Using the correct endpoint from your routes
//       await api.delete(`/cart/${sessionId}/${productId}`);

//       setCartItems((prev) => {
//         const updated = { ...prev };
//         delete updated[productId];
//         return updated;
//       });

//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (error) {
//       console.error("Remove cart error:", error.response?.data || error.message);
//     } finally {
//       setCartLoading((prev) => ({
//         ...prev,
//         [productId]: false,
//       }));
//     }
//   };

//   const featuredProducts = products.filter((p) => p.featured);
//   const marqueeProducts = [...featuredProducts, ...featuredProducts];

//   const categories = ["all", ...new Set(products.map((p) => p.category))];

//   const filteredProducts =
//     activeCategory === "all"
//       ? products
//       : products.filter((p) => p.category === activeCategory);

//   const getDisplayPrice = (price, discountPercent) => {
//     if (discountPercent && Number(discountPercent) > 0) {
//       return Math.round(price - (price * Number(discountPercent)) / 100);
//     }
//     return Math.round(price);
//   };

//   const hasValidDiscount = (discountPercent) => {
//     return discountPercent && Number(discountPercent) > 0;
//   };

//   const renderProductCard = (product, index) => {
//     const discountPercent = Number(product.discountPercent) || 0;
//     const hasDiscount = discountPercent > 0;
//     const displayPrice = hasDiscount
//       ? Math.round(product.price - (product.price * discountPercent) / 100)
//       : Math.round(product.price);

//     const quantityInCart = cartItems[product.id] || 0;
//     const isLoading = cartLoading[product.id] || false;

//     return (
//       <div
//         key={`${product.id}-${index}`}
//         className="prd-card-link"
//         style={{ "--card-index": index }}
//       >
//         <div className="prd-card">
//           <div className="prd-card-shine" aria-hidden="true" />
          
//           {/* Product Image - Clickable */}
//           <Link to={`/products/${product.id}`} className="prd-card-image-link">
//             <div className="prd-card-media">
//               <div className="prd-card-image-wrap">
//                 {product.image && (
//                   <img
//                     src={`https://a4agroup.eu${product.image}`}
//                     alt={product.title}
//                     className="prd-card-image"
//                     loading="lazy"
//                   />
//                 )}
//                 <div className="prd-card-image-veil" />
//               </div>
//               <div className="prd-card-badges">
//                 {product.featured && !hasDiscount && (
//                   <span className="prd-badge prd-badge-featured">Featured</span>
//                 )}
//                 {hasDiscount && (
//                   <span className="prd-badge prd-badge-discount">
//                     {discountPercent}% OFF
//                   </span>
//                 )}
//               </div>
//             </div>
//           </Link>
          
//           {/* Product Details - Clickable */}
//           <Link to={`/products/${product.id}`} className="prd-card-details-link">
//             <div className="prd-card-details">
//               <div className="prd-card-category">
//                 <span className="prd-card-category-dot" />
//                 {product.category}
//               </div>
//               <h3 className="prd-card-title">{product.title}</h3>
//               <p className="prd-card-description">
//                 {product.description || "Premium quality product sourced from trusted farms."}
//               </p>
//               <div className="prd-card-pricing">
//                 <span className="prd-card-price">€{displayPrice}</span>
//                 {hasDiscount && (
//                   <span className="prd-card-price-original">€{product.price}</span>
//                 )}
//               </div>
//             </div>
//           </Link>
          
//           {/* Action Section - Contains View Details and Cart Actions */}
//           <div className="prd-card-action">
//             <Link
//               to={`/products/${product.id}`}
//               className="prd-view-details"
//             >
//               <span>View Details</span>
//               <span className="prd-card-arrow">→</span>
//             </Link>

//             {!cartItems[product.id] ? (
//               <button
//                 type="button"
//                 className="prd-add-cart"
//                 disabled={isLoading}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   e.stopPropagation();
//                   addToCart(product.id);
//                 }}
//               >
//                 {isLoading ? (
//                   <>
//                     <span className="prd-spinner-small"></span>
//                     Adding...
//                   </>
//                 ) : (
//                   "Add to Cart"
//                 )}
//               </button>
//             ) : (
//               <div
//                 className="prd-cart-quantity"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   e.stopPropagation();
//                 }}
//               >
//                 <button
//                   type="button"
//                   onClick={() =>
//                     updateCartQuantity(
//                       product.id,
//                       cartItems[product.id] - 1
//                     )
//                   }
//                   disabled={isLoading}
//                   aria-label="Decrease quantity"
//                 >
//                   −
//                 </button>

//                 <span>{cartItems[product.id]}</span>

//                 <button
//                   type="button"
//                   onClick={() =>
//                     updateCartQuantity(
//                       product.id,
//                       cartItems[product.id] + 1
//                     )
//                   }
//                   disabled={isLoading}
//                   aria-label="Increase quantity"
//                 >
//                   +
//                 </button>
//               </div>
//             )}
//           </div>
          
//           <div className="prd-card-edge" aria-hidden="true" />
//         </div>
//       </div>
//     );
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
//           <div className="prd-glow prd-glow--emerald" />
//           <div className="prd-glow prd-glow--teal" />
//           <div className="prd-glow prd-glow--blue" />
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
//                 <span>Farm Fresh, Direct to You</span>
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

//           {/* Featured Products Marquee */}
//           {featuredProducts.length > 0 && (
//             <div className="prd-featured">
//               <div className="prd-featured-header">
//                 <div className="prd-featured-thread" />
//                 <span className="prd-featured-label">Featured Products</span>
//               </div>
//               <div
//                 className="prd-marquee-stage"
//                 onMouseEnter={() => setIsPaused(true)}
//                 onMouseLeave={() => setIsPaused(false)}
//               >
//                 <div className={`prd-marquee-track ${isPaused ? "prd-marquee-paused" : ""}`}>
//                   {marqueeProducts.map((product, index) =>
//                     renderProductCard(product, index)
//                   )}
//                 </div>
//                 <div className="prd-marquee-fade prd-marquee-fade-left" />
//                 <div className="prd-marquee-fade prd-marquee-fade-right" />
//               </div>
//             </div>
//           )}

//           {/* Category Toggle + All Products */}
//           <div className="prd-catalog">
//             <div className="prd-catalog-header">
//               <div className="prd-catalog-thread" />
//               <span className="prd-catalog-label">Our Collection</span>
//             </div>

//             {/* Category Tabs */}
//             <div className="prd-categories">
//               <div className="prd-categories-tabs">
//                 {categories.map((category) => (
//                   <button
//                     key={category}
//                     className={`prd-category-tab ${activeCategory === category ? "prd-category-active" : ""
//                       }`}
//                     onClick={() => setActiveCategory(category)}
//                   >
//                     <span>{category === "all" ? "All Products" : category}</span>
//                     <span className="prd-category-count">
//                       {category === "all"
//                         ? products.length
//                         : products.filter((p) => p.category === category).length}
//                     </span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Products Grid */}
//             <div className="prd-grid">
//               {filteredProducts.length > 0 ? (
//                 filteredProducts.map((product, index) =>
//                   renderProductCard(product, index)
//                 )
//               ) : (
//                 <div className="prd-empty">
//                   <div className="prd-empty-content">
//                     <div className="prd-empty-thread" />
//                     <h3 className="prd-empty-title">No products in this category</h3>
//                     <p className="prd-empty-text">
//                       Select another category to explore our collection.
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>
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

// import { useEffect, useState, useRef, useCallback } from "react";
// import { Link } from "react-router-dom";
// import api from "../services/api";
// import PublicLayout from "../layouts/PublicLayout";
// import "./Products.css";

// function Products() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [isPaused, setIsPaused] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);
  
//   // Cart states
//   const [cartItems, setCartItems] = useState({});
//   const [cartLoading, setCartLoading] = useState({});

//   // Session helper
//   const getSessionId = useCallback(() => {
//     let sessionId = localStorage.getItem("cartSessionId");

//     if (!sessionId) {
//       sessionId =
//         "cart-" +
//         Date.now() +
//         "-" +
//         Math.random().toString(36).substring(2, 10);

//       localStorage.setItem("cartSessionId", sessionId);
//     }

//     return sessionId;
//   }, []);

//   // Fetch cart items when page loads
//   const fetchCartItems = useCallback(async () => {
//     try {
//       const sessionId = getSessionId();
//       const { data } = await api.get(`/cart/${sessionId}`);

//       const quantities = {};
//       data.items?.forEach((item) => {
//         quantities[item.productId] = item.quantity;
//       });

//       setCartItems(quantities);
//     } catch (error) {
//       // If cart is not found (404), it's empty - that's fine
//       if (error.response?.status === 404) {
//         setCartItems({});
//         return;
//       }
//       console.error("Failed to load cart:", error);
//     }
//   }, [getSessionId]);

//   useEffect(() => {
//     fetchCartItems();
//   }, [fetchCartItems]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.03 }
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

//   // Cart functions - UPDATED WITH CORRECT ENDPOINTS
//   const addToCart = async (productId) => {
//     try {
//       setCartLoading((prev) => ({
//         ...prev,
//         [productId]: true,
//       }));

//       const sessionId = getSessionId();

//       // The endpoint should be /api/cart/add based on your routes
//       const response = await api.post("/cart/add", {
//         sessionId,
//         productId,
//         quantity: 1,
//       });

//       if (response.status === 200 || response.status === 201) {
//         setCartItems((prev) => ({
//           ...prev,
//           [productId]: (prev[productId] || 0) + 1,
//         }));

//         window.dispatchEvent(new Event("cartUpdated"));
//       }
//     } catch (error) {
//       console.error("Add to cart error:", error);
//       console.error("Response:", error.response?.data);
//       console.error("Status:", error.response?.status);
//       // You might want to show a user-friendly error message
//       // alert("Failed to add item to cart. Please try again.");
//     } finally {
//       setCartLoading((prev) => ({
//         ...prev,
//         [productId]: false,
//       }));
//     }
//   };

//   const updateCartQuantity = async (productId, quantity) => {
//     if (quantity < 1) {
//       await removeFromCart(productId);
//       return;
//     }

//     try {
//       setCartLoading((prev) => ({
//         ...prev,
//         [productId]: true,
//       }));

//       const sessionId = getSessionId();

//       await api.put(`/cart/${sessionId}/${productId}`, {
//         quantity,
//       });

//       setCartItems((prev) => ({
//         ...prev,
//         [productId]: quantity,
//       }));

//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (error) {
//       console.error("Update cart error:", error);
//     } finally {
//       setCartLoading((prev) => ({
//         ...prev,
//         [productId]: false,
//       }));
//     }
//   };

//   const removeFromCart = async (productId) => {
//     try {
//       setCartLoading((prev) => ({
//         ...prev,
//         [productId]: true,
//       }));

//       const sessionId = getSessionId();

//       await api.delete(`/cart/${sessionId}/${productId}`);

//       setCartItems((prev) => {
//         const updated = { ...prev };
//         delete updated[productId];
//         return updated;
//       });

//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (error) {
//       console.error("Remove cart error:", error);
//     } finally {
//       setCartLoading((prev) => ({
//         ...prev,
//         [productId]: false,
//       }));
//     }
//   };

//   const featuredProducts = products.filter((p) => p.featured);
//   const marqueeProducts = [...featuredProducts, ...featuredProducts];

//   const categories = ["all", ...new Set(products.map((p) => p.category))];

//   const filteredProducts =
//     activeCategory === "all"
//       ? products
//       : products.filter((p) => p.category === activeCategory);

//   const getDisplayPrice = (price, discountPercent) => {
//     if (discountPercent && Number(discountPercent) > 0) {
//       return Math.round(price - (price * Number(discountPercent)) / 100);
//     }
//     return Math.round(price);
//   };

//   const renderProductCard = (product, index) => {
//     const discountPercent = Number(product.discountPercent) || 0;
//     const hasDiscount = discountPercent > 0;
//     const displayPrice = hasDiscount
//       ? Math.round(product.price - (product.price * discountPercent) / 100)
//       : Math.round(product.price);

//     const isLoading = cartLoading[product.id] || false;

//     return (
//       <div
//         key={`${product.id}-${index}`}
//         className="prd-card-link"
//         style={{ "--card-index": index }}
//       >
//         <div className="prd-card">
//           <div className="prd-card-shine" aria-hidden="true" />
          
//           {/* Product Image - Clickable */}
//           <Link to={`/products/${product.id}`} className="prd-card-image-link">
//             <div className="prd-card-media">
//               <div className="prd-card-image-wrap">
//                 {product.image && (
//                   <img
//                     src={`https://a4agroup.eu${product.image}`}
//                     alt={product.title}
//                     className="prd-card-image"
//                     loading="lazy"
//                   />
//                 )}
//                 <div className="prd-card-image-veil" />
//               </div>
//               <div className="prd-card-badges">
//                 {product.featured && !hasDiscount && (
//                   <span className="prd-badge prd-badge-featured">Featured</span>
//                 )}
//                 {hasDiscount && (
//                   <span className="prd-badge prd-badge-discount">
//                     {discountPercent}% OFF
//                   </span>
//                 )}
//               </div>
//             </div>
//           </Link>
          
//           {/* Product Details - Clickable */}
//           <Link to={`/products/${product.id}`} className="prd-card-details-link">
//             <div className="prd-card-details">
//               <div className="prd-card-category">
//                 <span className="prd-card-category-dot" />
//                 {product.category}
//               </div>
//               <h3 className="prd-card-title">{product.title}</h3>
//               <p className="prd-card-description">
//                 {product.description || "Premium quality product sourced from trusted farms."}
//               </p>
//               <div className="prd-card-pricing">
//                 <span className="prd-card-price">€{displayPrice}</span>
//                 {hasDiscount && (
//                   <span className="prd-card-price-original">€{product.price}</span>
//                 )}
//               </div>
//             </div>
//           </Link>
          
//           {/* Action Section */}
//           <div className="prd-card-action">
//             <Link
//               to={`/products/${product.id}`}
//               className="prd-view-details"
//             >
//               <span>View Details</span>
//               <span className="prd-card-arrow">→</span>
//             </Link>

//             {!cartItems[product.id] ? (
//               <button
//                 type="button"
//                 className="prd-add-cart"
//                 disabled={isLoading}
//                 onClick={(e) => {
//                   e.preventDefault();
//                   e.stopPropagation();
//                   addToCart(product.id);
//                 }}
//               >
//                 {isLoading ? "Adding..." : "Add to Cart"}
//               </button>
//             ) : (
//               <div
//                 className="prd-cart-quantity"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   e.stopPropagation();
//                 }}
//               >
//                 <button
//                   type="button"
//                   onClick={() =>
//                     updateCartQuantity(
//                       product.id,
//                       cartItems[product.id] - 1
//                     )
//                   }
//                   disabled={isLoading}
//                   aria-label="Decrease quantity"
//                 >
//                   −
//                 </button>

//                 <span>{cartItems[product.id]}</span>

//                 <button
//                   type="button"
//                   onClick={() =>
//                     updateCartQuantity(
//                       product.id,
//                       cartItems[product.id] + 1
//                     )
//                   }
//                   disabled={isLoading}
//                   aria-label="Increase quantity"
//                 >
//                   +
//                 </button>
//               </div>
//             )}
//           </div>
          
//           <div className="prd-card-edge" aria-hidden="true" />
//         </div>
//       </div>
//     );
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
//           <div className="prd-glow prd-glow--emerald" />
//           <div className="prd-glow prd-glow--teal" />
//           <div className="prd-glow prd-glow--blue" />
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
//                 <span>Farm Fresh, Direct to You</span>
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

//           {/* Featured Products Marquee */}
//           {featuredProducts.length > 0 && (
//             <div className="prd-featured">
//               <div className="prd-featured-header">
//                 <div className="prd-featured-thread" />
//                 <span className="prd-featured-label">Featured Products</span>
//               </div>
//               <div
//                 className="prd-marquee-stage"
//                 onMouseEnter={() => setIsPaused(true)}
//                 onMouseLeave={() => setIsPaused(false)}
//               >
//                 <div className={`prd-marquee-track ${isPaused ? "prd-marquee-paused" : ""}`}>
//                   {marqueeProducts.map((product, index) =>
//                     renderProductCard(product, index)
//                   )}
//                 </div>
//                 <div className="prd-marquee-fade prd-marquee-fade-left" />
//                 <div className="prd-marquee-fade prd-marquee-fade-right" />
//               </div>
//             </div>
//           )}

//           {/* Category Toggle + All Products */}
//           <div className="prd-catalog">
//             <div className="prd-catalog-header">
//               <div className="prd-catalog-thread" />
//               <span className="prd-catalog-label">Our Collection</span>
//             </div>

//             {/* Category Tabs */}
//             <div className="prd-categories">
//               <div className="prd-categories-tabs">
//                 {categories.map((category) => (
//                   <button
//                     key={category}
//                     className={`prd-category-tab ${activeCategory === category ? "prd-category-active" : ""
//                       }`}
//                     onClick={() => setActiveCategory(category)}
//                   >
//                     <span>{category === "all" ? "All Products" : category}</span>
//                     <span className="prd-category-count">
//                       {category === "all"
//                         ? products.length
//                         : products.filter((p) => p.category === category).length}
//                     </span>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Products Grid */}
//             <div className="prd-grid">
//               {filteredProducts.length > 0 ? (
//                 filteredProducts.map((product, index) =>
//                   renderProductCard(product, index)
//                 )
//               ) : (
//                 <div className="prd-empty">
//                   <div className="prd-empty-content">
//                     <div className="prd-empty-thread" />
//                     <h3 className="prd-empty-title">No products in this category</h3>
//                     <p className="prd-empty-text">
//                       Select another category to explore our collection.
//                     </p>
//                   </div>
//                 </div>
//               )}
//             </div>
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



// import { useEffect, useState, useRef, useCallback } from "react";
// import { Link } from "react-router-dom";
// import api from "../services/api";
// import PublicLayout from "../layouts/PublicLayout";
// import "./Products.css";

// function Products() {
//   // =====================================================
//   // PRODUCTS
//   // =====================================================

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [isPaused, setIsPaused] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   // =====================================================
//   // FLOWER POPUP - SET TO TRUE BY DEFAULT FOR TESTING
//   // =====================================================

//   const [showFlowerPopup, setShowFlowerPopup] = useState(false);

//   // =====================================================
//   // CART
//   // =====================================================

//   const [cartItems, setCartItems] = useState({});
//   const [cartLoading, setCartLoading] = useState({});

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
//   // SHOW FLOWER POPUP
//   // =====================================================

//   useEffect(() => {
//     // FORCE SHOW FOR TESTING - Remove this line after testing
//     // setShowFlowerPopup(true);
//     // return;

//     // Check if popup was already shown in this session
//     const popupShown = sessionStorage.getItem("flowerPopupShown");

//     if (popupShown) {
//       return;
//     }

//     // Show popup after 500ms
//     const timer = setTimeout(() => {
//       setShowFlowerPopup(true);
//       sessionStorage.setItem("flowerPopupShown", "true");
//     }, 500);

//     return () => {
//       clearTimeout(timer);
//     };
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
//     } catch (error) {
//       if (error.response?.status === 404) {
//         setCartItems({});
//         return;
//       }
//       console.error("Failed to load cart:", error);
//     }
//   }, [getSessionId]);

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
//   // FETCH PRODUCTS
//   // =====================================================

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     setLoading(true);

//     try {
//       const { data } = await api.get("/products");
//       setProducts(data);
//     } catch (error) {
//       console.error("Failed to fetch products:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =====================================================
//   // VISIBILITY OBSERVER
//   // =====================================================

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       {
//         threshold: 0.03,
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       observer.disconnect();
//     };
//   }, [products]);

//   // =====================================================
//   // ADD TO CART
//   // =====================================================

//   const addToCart = async (productId) => {
//     try {
//       setCartLoading((prev) => ({
//         ...prev,
//         [productId]: true,
//       }));

//       const sessionId = getSessionId();

//       const response = await api.post("/cart/add", {
//         sessionId,
//         productId,
//         quantity: 1,
//       });

//       if (response.status === 200 || response.status === 201) {
//         setCartItems((prev) => ({
//           ...prev,
//           [productId]: (prev[productId] || 0) + 1,
//         }));

//         window.dispatchEvent(new Event("cartUpdated"));
//       }
//     } catch (error) {
//       console.error("Add to cart error:", error);
//     } finally {
//       setCartLoading((prev) => ({
//         ...prev,
//         [productId]: false,
//       }));
//     }
//   };

//   // =====================================================
//   // UPDATE CART QUANTITY
//   // =====================================================

//   const updateCartQuantity = async (productId, quantity) => {
//     if (quantity < 1) {
//       await removeFromCart(productId);
//       return;
//     }

//     try {
//       setCartLoading((prev) => ({
//         ...prev,
//         [productId]: true,
//       }));

//       const sessionId = getSessionId();

//       await api.put(`/cart/${sessionId}/${productId}`, {
//         quantity,
//       });

//       setCartItems((prev) => ({
//         ...prev,
//         [productId]: quantity,
//       }));

//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (error) {
//       console.error("Update cart error:", error);
//     } finally {
//       setCartLoading((prev) => ({
//         ...prev,
//         [productId]: false,
//       }));
//     }
//   };

//   // =====================================================
//   // REMOVE FROM CART
//   // =====================================================

//   const removeFromCart = async (productId) => {
//     try {
//       setCartLoading((prev) => ({
//         ...prev,
//         [productId]: true,
//       }));

//       const sessionId = getSessionId();

//       await api.delete(`/cart/${sessionId}/${productId}`);

//       setCartItems((prev) => {
//         const updated = { ...prev };
//         delete updated[productId];
//         return updated;
//       });

//       window.dispatchEvent(new Event("cartUpdated"));
//     } catch (error) {
//       console.error("Remove cart error:", error);
//     } finally {
//       setCartLoading((prev) => ({
//         ...prev,
//         [productId]: false,
//       }));
//     }
//   };

//   // =====================================================
//   // CATEGORIES
//   // =====================================================

//   const FLOWER_CATEGORY = "Fresh Items - Seasonal Fruits & Flowers";

//   const featuredProducts = products.filter((product) => product.featured);
//   const marqueeProducts = [...featuredProducts, ...featuredProducts];

//   const categories = [
//     "all",
//     ...new Set(
//       products
//         .map((product) => product.category)
//         .filter(Boolean)
//     ),
//   ];

//   // =====================================================
//   // CHECK IF PRODUCT IS FLOWER
//   // =====================================================

//   const isFlowerProduct = (product) => {
//     const category = String(product.category || "").trim().toLowerCase();
//     return category.includes("flower") || 
//            category.includes("fresh items - seasonal fruits & flowers");
//   };

//   const filteredProducts = activeCategory === "all"
//     ? products
//     : products.filter((product) => product.category === activeCategory);

//   // =====================================================
//   // PRICE
//   // =====================================================

//   const getDisplayPrice = (price, discountPercent) => {
//     if (discountPercent && Number(discountPercent) > 0) {
//       return Math.round(price - (price * Number(discountPercent)) / 100);
//     }
//     return Math.round(price);
//   };

//   // =====================================================
//   // PRODUCT CARD
//   // =====================================================

//   const renderProductCard = (product, index) => {
//     const discountPercent = Number(product.discountPercent) || 0;
//     const hasDiscount = discountPercent > 0;
//     const displayPrice = hasDiscount
//       ? Math.round(product.price - (product.price * discountPercent) / 100)
//       : Math.round(product.price);

//     const isLoading = cartLoading[product.id] || false;
//     const isFlower = isFlowerProduct(product);

//     return (
//       <div
//         key={`${product.id}-${index}`}
//         className="prd-card-link"
//         style={{
//           "--card-index": index,
//         }}
//       >
//         <div className="prd-card">
//           <div className="prd-card-shine" aria-hidden="true" />

//           {/* =========================================
//               PRODUCT IMAGE
//           ========================================= */}

//           <Link
//             to={`/products/${product.id}`}
//             className="prd-card-image-link"
//           >
//             <div className="prd-card-media">
//               <div className="prd-card-image-wrap">
//                 {product.image && (
//                   <img
//                     src={`https://a4agroup.eu${product.image}`}
//                     alt={product.title}
//                     className="prd-card-image"
//                     loading="lazy"
//                   />
//                 )}
//                 <div className="prd-card-image-veil" />
//               </div>

//               <div className="prd-card-badges">
//                 {product.featured && !hasDiscount && (
//                   <span className="prd-badge prd-badge-featured">
//                     Featured
//                   </span>
//                 )}

//                 {hasDiscount && (
//                   <span className="prd-badge prd-badge-discount">
//                     {discountPercent}% OFF
//                   </span>
//                 )}

//                 {isFlower && (
//                   <span className="prd-badge prd-badge-flower">
//                     🌸 Flower
//                   </span>
//                 )}
//               </div>
//             </div>
//           </Link>

//           {/* =========================================
//               PRODUCT DETAILS
//           ========================================= */}

//           <Link
//             to={`/products/${product.id}`}
//             className="prd-card-details-link"
//           >
//             <div className="prd-card-details">
//               <div className="prd-card-category">
//                 <span className="prd-card-category-dot" />
//                 {product.category}
//               </div>

//               <h3 className="prd-card-title">{product.title}</h3>

//               <p className="prd-card-description">
//                 {product.description ||
//                   "Premium quality product sourced from trusted farms."}
//               </p>

//               <div className="prd-card-pricing">
//                 <span className="prd-card-price">€{displayPrice}</span>

//                 {hasDiscount && (
//                   <span className="prd-card-price-original">
//                     €{product.price}
//                   </span>
//                 )}
//               </div>
//             </div>
//           </Link>

//           {/* =========================================
//               ACTION SECTION
//           ========================================= */}

//           <div className="prd-card-action">
//             <Link
//               to={`/products/${product.id}`}
//               className="prd-view-details"
//             >
//               <span>View Details</span>
//               <span className="prd-card-arrow">→</span>
//             </Link>

//             {/* =====================================
//                 CART ONLY FOR FLOWERS
//             ===================================== */}

//             {isFlower && (
//               <>
//                 {!cartItems[product.id] ? (
//                   <button
//                     type="button"
//                     className="prd-add-cart"
//                     disabled={isLoading}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       e.stopPropagation();
//                       addToCart(product.id);
//                     }}
//                   >
//                     {isLoading ? "Adding..." : "Add to Cart"}
//                   </button>
//                 ) : (
//                   <div
//                     className="prd-cart-quantity"
//                     onClick={(e) => {
//                       e.preventDefault();
//                       e.stopPropagation();
//                     }}
//                   >
//                     <button
//                       type="button"
//                       onClick={() =>
//                         updateCartQuantity(
//                           product.id,
//                           cartItems[product.id] - 1
//                         )
//                       }
//                       disabled={isLoading}
//                       aria-label="Decrease quantity"
//                     >
//                       −
//                     </button>

//                     <span>{cartItems[product.id]}</span>

//                     <button
//                       type="button"
//                       onClick={() =>
//                         updateCartQuantity(
//                           product.id,
//                           cartItems[product.id] + 1
//                         )
//                       }
//                       disabled={isLoading}
//                       aria-label="Increase quantity"
//                     >
//                       +
//                     </button>
//                   </div>
//                 )}
//               </>
//             )}
//           </div>

//           <div className="prd-card-edge" aria-hidden="true" />
//         </div>
//       </div>
//     );
//   };

//   // =====================================================
//   // LOADING
//   // =====================================================

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

//   // =====================================================
//   // PAGE
//   // =====================================================

//   return (
//     <>
//       {/* =================================================
//           FLOWER POPUP
//       ================================================= */}

//       {showFlowerPopup && (
//         <div
//           className="flower-popup-overlay"
//           role="dialog"
//           aria-modal="true"
//           aria-labelledby="flower-popup-title"
//         >
//           <div className="flower-popup">
//             <button
//               type="button"
//               className="flower-popup-close"
//               onClick={() => setShowFlowerPopup(false)}
//               aria-label="Close"
//             >
//               ×
//             </button>

//             <div className="flower-popup-icon">✿</div>

//             <span className="flower-popup-eyebrow">A QUICK QUESTION</span>

//             <h2 id="flower-popup-title">Are you looking for flowers?</h2>

//             <p>
//               Looking for something beautiful? Explore our
//               fresh flower collection.
//             </p>

//             <div className="flower-popup-actions">
//               {/* YES - Show Flowers */}
//               <button
//                 type="button"
//                 className="flower-popup-yes"
//                 onClick={() => {
//                   setActiveCategory(FLOWER_CATEGORY);
//                   setShowFlowerPopup(false);
//                   setTimeout(() => {
//                     document
//                       .querySelector(".prd-catalog")
//                       ?.scrollIntoView({
//                         behavior: "smooth",
//                         block: "start",
//                       });
//                   }, 100);
//                 }}
//               >
//                 <span>Yes, show me flowers</span>
//                 <span>→</span>
//               </button>

//               {/* NO - Show Everything */}
//               <button
//                 type="button"
//                 className="flower-popup-no"
//                 onClick={() => {
//                   setActiveCategory("all");
//                   setShowFlowerPopup(false);
//                 }}
//               >
//                 No, I'll browse everything
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* =================================================
//           PRODUCTS SECTION
//       ================================================= */}

//       <PublicLayout>
//         <section
//           ref={sectionRef}
//           className={`prd-premium ${isVisible ? "prd-visible" : ""}`}
//         >
//           {/* ===============================================
//               ATMOSPHERIC DEPTH
//           =============================================== */}

//           <div className="prd-atmosphere" aria-hidden="true">
//             <div className="prd-glow prd-glow--emerald" />
//             <div className="prd-glow prd-glow--teal" />
//             <div className="prd-glow prd-glow--blue" />
//             <div className="prd-mesh" />
//             <div className="prd-grain" />
//             <div className="prd-vignette" />
//           </div>

//           {/* ===============================================
//               FLOATING ORBS
//           =============================================== */}

//           <div className="prd-orbs" aria-hidden="true">
//             <div className="prd-orb prd-orb--primary" />
//             <div className="prd-orb prd-orb--secondary" />
//           </div>

//           <div className="prd-container">
//             {/* =============================================
//                 HERO
//             ============================================= */}

//             <div className="prd-hero">
//               <div className="prd-hero-content">
//                 <div className="prd-whisper">
//                   <span className="prd-whisper-pulse" />
//                   <span>Farm Fresh, Direct to You</span>
//                 </div>

//                 <h1 className="prd-headline">
//                   <span className="prd-headline-line">
//                     Healthy & Organic
//                   </span>
//                   <span className="prd-headline-line prd-headline-radiance">
//                     products for everyday wellness
//                   </span>
//                 </h1>

//                 <p className="prd-prose">
//                   Explore our collection of millet mixes, rice,
//                   snacks, organics, oils, and seasonal products —
//                   all sourced directly from trusted farms.
//                 </p>
//               </div>
//             </div>

//             {/* =============================================
//                 FEATURED PRODUCTS
//             ============================================= */}

//             {featuredProducts.length > 0 && (
//               <div className="prd-featured">
//                 <div className="prd-featured-header">
//                   <div className="prd-featured-thread" />
//                   <span className="prd-featured-label">
//                     Featured Products
//                   </span>
//                 </div>

//                 <div
//                   className="prd-marquee-stage"
//                   onMouseEnter={() => setIsPaused(true)}
//                   onMouseLeave={() => setIsPaused(false)}
//                 >
//                   <div
//                     className={`prd-marquee-track ${
//                       isPaused ? "prd-marquee-paused" : ""
//                     }`}
//                   >
//                     {marqueeProducts.map((product, index) =>
//                       renderProductCard(product, index)
//                     )}
//                   </div>

//                   <div className="prd-marquee-fade prd-marquee-fade-left" />
//                   <div className="prd-marquee-fade prd-marquee-fade-right" />
//                 </div>
//               </div>
//             )}

//             {/* =============================================
//                 CATALOG
//             ============================================= */}

//             <div className="prd-catalog">
//               <div className="prd-catalog-header">
//                 <div className="prd-catalog-thread" />
//                 <span className="prd-catalog-label">
//                   Our Collection
//                 </span>
//               </div>

//               {/* =========================================
//                   CATEGORY TABS
//               ========================================= */}

//               <div className="prd-categories">
//                 <div className="prd-categories-tabs">
//                   {categories.map((category) => (
//                     <button
//                       key={category}
//                       className={`prd-category-tab ${
//                         activeCategory === category ? "prd-category-active" : ""
//                       }`}
//                       onClick={() => setActiveCategory(category)}
//                     >
//                       <span>
//                         {category === "all" ? "All Products" : category}
//                       </span>
//                       <span className="prd-category-count">
//                         {category === "all"
//                           ? products.length
//                           : products.filter((p) => p.category === category).length}
//                       </span>
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* =========================================
//                   PRODUCTS GRID
//               ========================================= */}

//               <div className="prd-grid">
//                 {filteredProducts.length > 0 ? (
//                   filteredProducts.map((product, index) =>
//                     renderProductCard(product, index)
//                   )
//                 ) : (
//                   <div className="prd-empty">
//                     <div className="prd-empty-content">
//                       <div className="prd-empty-thread" />
//                       <h3 className="prd-empty-title">
//                         No products in this category
//                       </h3>
//                       <p className="prd-empty-text">
//                         Select another category to explore our collection.
//                       </p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* =============================================
//                 GLOBAL EMPTY STATE
//             ============================================= */}

//             {products.length === 0 && (
//               <div className="prd-empty">
//                 <div className="prd-empty-content">
//                   <div className="prd-empty-thread" />
//                   <h3 className="prd-empty-title">No Products Available</h3>
//                   <p className="prd-empty-text">
//                     Check back later for our premium collection.
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </section>
//       </PublicLayout>
//     </>
//   );
// }

// export default Products;


import { useEffect, useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import PublicLayout from "../layouts/PublicLayout";
import "./Products.css";

function Products() {
  // =====================================================
  // PRODUCTS
  // =====================================================

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // =====================================================
  // FLOWER POPUP
  // =====================================================

  const [showFlowerPopup, setShowFlowerPopup] = useState(false);

  // =====================================================
  // CART
  // =====================================================

  const [cartItems, setCartItems] = useState({});
  const [cartLoading, setCartLoading] = useState({});

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
  // SHOW FLOWER POPUP
  // =====================================================

  useEffect(() => {
    const popupShown = sessionStorage.getItem("flowerPopupShown");

    if (popupShown) {
      return;
    }

    const timer = setTimeout(() => {
      setShowFlowerPopup(true);
      sessionStorage.setItem("flowerPopupShown", "true");
    }, 500);

    return () => {
      clearTimeout(timer);
    };
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
    } catch (error) {
      if (error.response?.status === 404) {
        setCartItems({});
        return;
      }
      console.error("Failed to load cart:", error);
    }
  }, [getSessionId]);

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
  // FETCH PRODUCTS
  // =====================================================

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);

    try {
      const { data } = await api.get("/products");
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // VISIBILITY OBSERVER
  // =====================================================

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.03,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [products]);

  // =====================================================
  // ADD TO CART
  // =====================================================

  const addToCart = async (productId) => {
    try {
      setCartLoading((prev) => ({
        ...prev,
        [productId]: true,
      }));

      const sessionId = getSessionId();

      const response = await api.post("/cart/add", {
        sessionId,
        productId,
        quantity: 1,
      });

      if (response.status === 200 || response.status === 201) {
        setCartItems((prev) => ({
          ...prev,
          [productId]: (prev[productId] || 0) + 1,
        }));

        window.dispatchEvent(new Event("cartUpdated"));
      }
    } catch (error) {
      console.error("Add to cart error:", error);
    } finally {
      setCartLoading((prev) => ({
        ...prev,
        [productId]: false,
      }));
    }
  };

  // =====================================================
  // UPDATE CART QUANTITY
  // =====================================================

  const updateCartQuantity = async (productId, quantity) => {
    if (quantity < 1) {
      await removeFromCart(productId);
      return;
    }

    try {
      setCartLoading((prev) => ({
        ...prev,
        [productId]: true,
      }));

      const sessionId = getSessionId();

      await api.put(`/cart/${sessionId}/${productId}`, {
        quantity,
      });

      setCartItems((prev) => ({
        ...prev,
        [productId]: quantity,
      }));

      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      console.error("Update cart error:", error);
    } finally {
      setCartLoading((prev) => ({
        ...prev,
        [productId]: false,
      }));
    }
  };

  // =====================================================
  // REMOVE FROM CART
  // =====================================================

  const removeFromCart = async (productId) => {
    try {
      setCartLoading((prev) => ({
        ...prev,
        [productId]: true,
      }));

      const sessionId = getSessionId();

      await api.delete(`/cart/${sessionId}/${productId}`);

      setCartItems((prev) => {
        const updated = { ...prev };
        delete updated[productId];
        return updated;
      });

      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      console.error("Remove cart error:", error);
    } finally {
      setCartLoading((prev) => ({
        ...prev,
        [productId]: false,
      }));
    }
  };

  // =====================================================
  // CATEGORIES - CUSTOM ORDER WITH MERGED CATEGORIES
  // =====================================================

  // Define category display names and their filter values
  const categoryConfig = [
    {
      display: "Fresh Flowers & Seasonal",
      filter: ["Fresh Items - Seasonal Fruits & Flowers", "Flowers", "fresh flowers", "seasonal"],
    },
    {
      display: "Organic & Millets",
      filter: ["Organic", "Millets", "Millet", "Organic Millets", "Organic & Millets"],
    },
    {
      display: "All Products",
      filter: "all",
    },
  ];

  // Get all unique categories from products
  const allCategories = [...new Set(
    products
      .map((product) => product.category)
      .filter(Boolean)
  )];

  // Helper to check if a product belongs to a category group
  const isInCategoryGroup = (product, filterValues) => {
    if (filterValues === "all") return true;
    if (Array.isArray(filterValues)) {
      const productCategory = String(product.category || "").trim().toLowerCase();
      return filterValues.some((val) => {
        const filter = String(val).trim().toLowerCase();
        return productCategory.includes(filter) || filter.includes(productCategory);
      });
    }
    return product.category === filterValues;
  };

  // Get products for a specific category group
  const getProductsForCategory = (filterValues) => {
    if (filterValues === "all") return products;
    if (Array.isArray(filterValues)) {
      return products.filter((product) => isInCategoryGroup(product, filterValues));
    }
    return products.filter((product) => product.category === filterValues);
  };

  // Build the final category list with counts
  const categories = categoryConfig.map((config) => {
    const count = getProductsForCategory(config.filter).length;
    return {
      display: config.display,
      filter: config.filter,
      count: count,
    };
  }).filter((cat) => cat.count > 0);

  // Add any remaining categories that aren't in the config
  const usedFilters = categoryConfig.flatMap(c => 
    Array.isArray(c.filter) ? c.filter : [c.filter]
  );

  const remainingCategories = allCategories.filter(
    (cat) => !usedFilters.some((filter) => 
      typeof filter === "string" && 
      cat.toLowerCase().includes(filter.toLowerCase())
    )
  );

  remainingCategories.forEach((cat) => {
    const count = products.filter((p) => p.category === cat).length;
    if (count > 0) {
      categories.push({
        display: cat,
        filter: cat,
        count: count,
      });
    }
  });

  // =====================================================
  // GET FILTERED PRODUCTS FOR ACTIVE CATEGORY
  // =====================================================

  const getFilteredProducts = () => {
    if (activeCategory === "all") return products;
    
    // Find the category config
    const config = categoryConfig.find((c) => 
      JSON.stringify(c.filter) === activeCategory || 
      c.display === activeCategory ||
      (Array.isArray(c.filter) && c.filter.includes(activeCategory))
    );

    if (config) {
      return getProductsForCategory(config.filter);
    }

    // Fallback: direct category match
    return products.filter((product) => product.category === activeCategory);
  };

  const filteredProducts = getFilteredProducts();

  // =====================================================
  // FEATURED PRODUCTS
  // =====================================================

  const featuredProducts = products.filter((product) => product.featured);
  const marqueeProducts = [...featuredProducts, ...featuredProducts];

  // =====================================================
  // CHECK IF PRODUCT IS FLOWER
  // =====================================================

  const isFlowerProduct = (product) => {
    const category = String(product.category || "").trim().toLowerCase();
    return category.includes("flower") || 
           category.includes("fresh items - seasonal fruits & flowers") ||
           category.includes("seasonal");
  };

  // =====================================================
  // PRICE
  // =====================================================

  const getDisplayPrice = (price, discountPercent) => {
    if (discountPercent && Number(discountPercent) > 0) {
      return Math.round(price - (price * Number(discountPercent)) / 100);
    }
    return Math.round(price);
  };

  // =====================================================
  // PRODUCT CARD
  // =====================================================

  const renderProductCard = (product, index) => {
    const discountPercent = Number(product.discountPercent) || 0;
    const hasDiscount = discountPercent > 0;
    const displayPrice = hasDiscount
      ? Math.round(product.price - (product.price * discountPercent) / 100)
      : Math.round(product.price);

    const isLoading = cartLoading[product.id] || false;
    const isFlower = isFlowerProduct(product);

    return (
      <div
        key={`${product.id}-${index}`}
        className="prd-card-link"
        style={{
          "--card-index": index,
        }}
      >
        <div className="prd-card">
          <div className="prd-card-shine" aria-hidden="true" />

          {/* =========================================
              PRODUCT IMAGE
          ========================================= */}

          <Link
            to={`/products/${product.id}`}
            className="prd-card-image-link"
          >
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
                {product.featured && !hasDiscount && (
                  <span className="prd-badge prd-badge-featured">
                    Featured
                  </span>
                )}

                {hasDiscount && (
                  <span className="prd-badge prd-badge-discount">
                    {discountPercent}% OFF
                  </span>
                )}

                {isFlower && (
                  <span className="prd-badge prd-badge-flower">
                    🌸 Flower
                  </span>
                )}
              </div>
            </div>
          </Link>

          {/* =========================================
              PRODUCT DETAILS
          ========================================= */}

          <Link
            to={`/products/${product.id}`}
            className="prd-card-details-link"
          >
            <div className="prd-card-details">
              <div className="prd-card-category">
                <span className="prd-card-category-dot" />
                {product.category}
              </div>

              <h3 className="prd-card-title">{product.title}</h3>

              <p className="prd-card-description">
                {product.description ||
                  "Premium quality product sourced from trusted farms."}
              </p>

              <div className="prd-card-pricing">
                <span className="prd-card-price">€{displayPrice}</span>

                {hasDiscount && (
                  <span className="prd-card-price-original">
                    €{product.price}
                  </span>
                )}
              </div>
            </div>
          </Link>

          {/* =========================================
              ACTION SECTION
          ========================================= */}

          <div className="prd-card-action">
            <Link
              to={`/products/${product.id}`}
              className="prd-view-details"
            >
              <span>View Details</span>
              <span className="prd-card-arrow">→</span>
            </Link>

            {/* =====================================
                CART ONLY FOR FLOWERS
            ===================================== */}

            {isFlower && (
              <>
                {!cartItems[product.id] ? (
                  <button
                    type="button"
                    className="prd-add-cart"
                    disabled={isLoading}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCart(product.id);
                    }}
                  >
                    {isLoading ? "Adding..." : "Add to Cart"}
                  </button>
                ) : (
                  <div
                    className="prd-cart-quantity"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        updateCartQuantity(
                          product.id,
                          cartItems[product.id] - 1
                        )
                      }
                      disabled={isLoading}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>

                    <span>{cartItems[product.id]}</span>

                    <button
                      type="button"
                      onClick={() =>
                        updateCartQuantity(
                          product.id,
                          cartItems[product.id] + 1
                        )
                      }
                      disabled={isLoading}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="prd-card-edge" aria-hidden="true" />
        </div>
      </div>
    );
  };

  // =====================================================
  // LOADING
  // =====================================================

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

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <>
      {/* =================================================
          FLOWER POPUP
      ================================================= */}

      {showFlowerPopup && (
        <div
          className="flower-popup-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="flower-popup-title"
        >
          <div className="flower-popup">
            <button
              type="button"
              className="flower-popup-close"
              onClick={() => setShowFlowerPopup(false)}
              aria-label="Close"
            >
              ×
            </button>

            <div className="flower-popup-icon">✿</div>

            <span className="flower-popup-eyebrow">A QUICK QUESTION</span>

            <h2 id="flower-popup-title">Are you looking for flowers?</h2>

            <p>
              Looking for something beautiful? Explore our
              fresh flower collection.
            </p>

            <div className="flower-popup-actions">
              {/* YES - Show Flowers */}
              <button
                type="button"
                className="flower-popup-yes"
                onClick={() => {
                  // Find the Fresh Flowers category display name
                  const flowerCategory = categories.find(
                    (c) => c.display === "Fresh Flowers & Seasonal"
                  );
                  if (flowerCategory) {
                    setActiveCategory(flowerCategory.display);
                  } else {
                    // Fallback: try to find by filter
                    const flowerConfig = categoryConfig.find(
                      (c) => c.display === "Fresh Flowers & Seasonal"
                    );
                    if (flowerConfig) {
                      setActiveCategory(JSON.stringify(flowerConfig.filter));
                    }
                  }
                  setShowFlowerPopup(false);
                  setTimeout(() => {
                    document
                      .querySelector(".prd-catalog")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                  }, 100);
                }}
              >
                <span>Yes, show me flowers</span>
                <span>→</span>
              </button>

              {/* NO - Show Everything */}
              <button
                type="button"
                className="flower-popup-no"
                onClick={() => {
                  setActiveCategory("all");
                  setShowFlowerPopup(false);
                }}
              >
                No, I'll browse everything
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =================================================
          PRODUCTS SECTION
      ================================================= */}

      <PublicLayout>
        <section
          ref={sectionRef}
          className={`prd-premium ${isVisible ? "prd-visible" : ""}`}
        >
          {/* ===============================================
              ATMOSPHERIC DEPTH
          =============================================== */}

          <div className="prd-atmosphere" aria-hidden="true">
            <div className="prd-glow prd-glow--emerald" />
            <div className="prd-glow prd-glow--teal" />
            <div className="prd-glow prd-glow--blue" />
            <div className="prd-mesh" />
            <div className="prd-grain" />
            <div className="prd-vignette" />
          </div>

          {/* ===============================================
              FLOATING ORBS
          =============================================== */}

          <div className="prd-orbs" aria-hidden="true">
            <div className="prd-orb prd-orb--primary" />
            <div className="prd-orb prd-orb--secondary" />
          </div>

          <div className="prd-container">
            {/* =============================================
                HERO
            ============================================= */}

            <div className="prd-hero">
              <div className="prd-hero-content">
                <div className="prd-whisper">
                  <span className="prd-whisper-pulse" />
                  <span>Farm Fresh, Direct to You</span>
                </div>

                <h1 className="prd-headline">
                  <span className="prd-headline-line">
                    Healthy & Organic
                  </span>
                  <span className="prd-headline-line prd-headline-radiance">
                    products for everyday wellness
                  </span>
                </h1>

                <p className="prd-prose">
                  Explore our collection of millet mixes, rice,
                  snacks, organics, oils, and seasonal products —
                  all sourced directly from trusted farms.
                </p>
              </div>
            </div>

            {/* =============================================
                FEATURED PRODUCTS
            ============================================= */}

            {featuredProducts.length > 0 && (
              <div className="prd-featured">
                <div className="prd-featured-header">
                  <div className="prd-featured-thread" />
                  <span className="prd-featured-label">
                    Featured Products
                  </span>
                </div>

                <div
                  className="prd-marquee-stage"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <div
                    className={`prd-marquee-track ${
                      isPaused ? "prd-marquee-paused" : ""
                    }`}
                  >
                    {marqueeProducts.map((product, index) =>
                      renderProductCard(product, index)
                    )}
                  </div>

                  <div className="prd-marquee-fade prd-marquee-fade-left" />
                  <div className="prd-marquee-fade prd-marquee-fade-right" />
                </div>
              </div>
            )}

            {/* =============================================
                CATALOG
            ============================================= */}

            <div className="prd-catalog">
              <div className="prd-catalog-header">
                <div className="prd-catalog-thread" />
                <span className="prd-catalog-label">
                  Our Collection
                </span>
              </div>

              {/* =========================================
                  CATEGORY TABS - CUSTOM ORDER
              ========================================= */}

              <div className="prd-categories">
                <div className="prd-categories-tabs">
                  {categories.map((category) => (
                    <button
                      key={category.display}
                      className={`prd-category-tab ${
                        activeCategory === category.display || 
                        activeCategory === JSON.stringify(category.filter) ||
                        (Array.isArray(category.filter) && category.filter.includes(activeCategory))
                          ? "prd-category-active"
                          : ""
                      }`}
                      onClick={() => {
                        // Store the display name as the active category for easier matching
                        setActiveCategory(category.display);
                      }}
                    >
                      <span>{category.display}</span>
                      <span className="prd-category-count">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* =========================================
                  PRODUCTS GRID
              ========================================= */}

              <div className="prd-grid">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, index) =>
                    renderProductCard(product, index)
                  )
                ) : (
                  <div className="prd-empty">
                    <div className="prd-empty-content">
                      <div className="prd-empty-thread" />
                      <h3 className="prd-empty-title">
                        No products in this category
                      </h3>
                      <p className="prd-empty-text">
                        Select another category to explore our collection.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* =============================================
                GLOBAL EMPTY STATE
            ============================================= */}

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
    </>
  );
}

export default Products;