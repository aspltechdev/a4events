

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



import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import PublicLayout from "../layouts/PublicLayout";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

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

  const categories = [...new Set(products.map((product) => product.category))];

  const calculateDiscountedPrice = (price, discountPercent) => {
    if (discountPercent && discountPercent > 0) {
      return price - (price * discountPercent / 100);
    }
    return price;
  };

  if (loading) {
    return (
      <PublicLayout>
        <div className="prd__loading">
          <div className="prd__loadingContent">
            <div className="prd__loadingSpinner"></div>
            <p>Loading products...</p>
          </div>
        </div>
      </PublicLayout>
    );
  }

  return (
    <PublicLayout>
      <section className="prd__wrapper">
        <div className="prd__bgSubtle"></div>
        <div className="prd__bgGradient"></div>

        <div className="prd__container">
          {/* Hero Header */}
          <div className="prd__hero">
            <div className="prd__heroBadge">
              <span className="prd__heroLine"></span>
              <span className="prd__heroText">ETA FOODS</span>
            </div>
            
            <h1 className="prd__heroTitle">
              Healthy & Organic
              <br />
              <span className="prd__heroAccent">products for everyday wellness</span>
            </h1>
            
            <p className="prd__heroDescription">
              Explore our collection of millet mixes, rice, snacks, organics, oils, 
              and seasonal products — all sourced directly from trusted farms.
            </p>
          </div>

          {/* Categories Sections */}
          {categories.map((category, categoryIndex) => {
            const categoryProducts = products.filter(
              (product) => product.category === category
            );

            return (
              <div key={category} className="prd__categorySection">
                <div className="prd__categoryHeader">
                  <div className="prd__categoryMarker">
                    <span className="prd__categoryLine"></span>
                    <span className="prd__categoryLabel">CATEGORY</span>
                  </div>
                  <h2 className="prd__categoryTitle">{category}</h2>
                  <div className="prd__categoryCount">
                    {categoryProducts.length} products
                  </div>
                </div>

                <div className="prd__grid">
                  {categoryProducts.map((product, productIndex) => {
                    const discountedPrice = calculateDiscountedPrice(
                      product.price,
                      product.discountPercent
                    );
                    const hasDiscount = product.discountPercent && product.discountPercent > 0;

                    return (
                      <Link
                        key={product.id}
                        to={`/products/${product.id}`}
                        className="prd__cardLink"
                        style={{ animationDelay: `${productIndex * 0.05}s` }}
                      >
                        <div className="prd__card">
                          <div className="prd__cardImage">
                            {product.image && (
                              <img
                                src={`https://a4agroup.eu${product.image}`}
                                alt={product.title}
                                className="prd__image"
                              />
                            )}
                            <div className="prd__imageOverlay"></div>
                            
                            {/* Badges */}
                            <div className="prd__badges">
                              {product.featured && (
                                <span className="prd__featuredBadge">
                                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M5 0L6.5 3.5L10 4L7.5 6.5L8.5 10L5 8L1.5 10L2.5 6.5L0 4L3.5 3.5L5 0Z" fill="currentColor"/>
                                  </svg>
                                  Featured
                                </span>
                              )}
                              {hasDiscount && (
                                <span className="prd__discountBadge">
                                  {product.discountPercent}% OFF
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="prd__cardContent">
                            <h3 className="prd__title">{product.title}</h3>
                            
                            <p className="prd__description">
                              {product.description || "Premium quality product sourced from trusted farms."}
                            </p>
                            
                            <div className="prd__pricing">
                              <span className="prd__priceCurrent">€{Math.round(discountedPrice)}</span>
                              {hasDiscount && (
                                <span className="prd__priceOriginal">€{product.price}</span>
                              )}
                            </div>
                            
                            <div className="prd__cardFooter">
                              <span className="prd__viewLink">
                                View Details
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                  <path d="M3 7h8M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Empty State */}
          {products.length === 0 && (
            <div className="prd__empty">
              <div className="prd__emptyContent">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M6 12l6-6 6 6M18 42l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 6v30M24 42V12M36 6v30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <h3>No Products Available</h3>
                <p>Check back later for our premium collection.</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </PublicLayout>
  );
}

export default Products;
