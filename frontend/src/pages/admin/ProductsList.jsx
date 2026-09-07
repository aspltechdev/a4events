// // import { useEffect, useState } from 'react';
// // import api from '../../services/api';
// // import AdminLayout from './AdminLayout';
// // import { Link } from 'react-router-dom';
// // function ProductsList() {
// //     const [products, setProducts] = useState([]);

// //     useEffect(() => {
// //         fetchProducts();
// //     }, []);

// //     const fetchProducts = async () => {
// //         try {
// //             const { data } = await api.get('/products');
// //             setProducts(data);
// //         } catch (error) {
// //             console.error(error);
// //         }
// //     };

// //     const deleteProduct = async (id) => {
// //         const token = localStorage.getItem('token');

// //         if (!window.confirm('Delete Product?')) {
// //             return;
// //         }

// //         try {
// //             await api.delete(`/products/${id}`, {
// //                 headers: {
// //                     Authorization: `Bearer ${token}`
// //                 }
// //             });

// //             fetchProducts();

// //         } catch (error) {
// //             console.error(error);
// //         }
// //     };

// //     return (
// //         <AdminLayout>
// //             <div>
// //                 <h1>Products</h1>

 
// //                     <div key={product.id}>
// //                                        {products.map((product) => (
// //                     {product.image && (
// //   <img
// //     src={`http://localhost:5000${product.image}`}
// //     alt={product.title}
// //     width="120"
// //   />
// // )}
// //                         <h3>{product.title}</h3>

// //                         <Link to={`/admin/products/edit/${product.id}`}>
// //                             Edit
// //                         </Link>

// //                         {' | '}

// //                         <button
// //                             onClick={() => deleteProduct(product.id)}
// //                         >
// //                             Delete
// //                         </button>
// //                     </div>
// //                 ))}
// //             </div>
// //         </AdminLayout>
// //     );
// // }

// // export default ProductsList;


// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';

// function ProductsList() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const { data } = await api.get('/products');
//       setProducts(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteProduct = async (id) => {
//     const token = localStorage.getItem('token');

//     if (!window.confirm('Delete Product?')) {
//       return;
//     }

//     try {
//       await api.delete(`/products/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });

//       fetchProducts();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <AdminLayout>
//       <div>
//         <h1>Products</h1>

//         {products.map((product) => (
//           <div key={product.id}>
//             {product.image && (
//               <img
//                 src={`http://localhost:5000${product.image}`}
//                 alt={product.title}
//                 width="120"
//               />
//             )}

//             <h3>{product.title}</h3>

//             <Link to={`/admin/products/edit/${product.id}`}>
//               Edit
//             </Link>

//             {' | '}

//             <button
//               onClick={() => deleteProduct(product.id)}
//             >
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </AdminLayout>
//   );
// }

// export default ProductsList;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./ProductsList.css";

// function ProductsList() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");

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

//   const deleteProduct = async (id) => {
//     const token = localStorage.getItem("token");

//     if (!window.confirm("Delete Product?")) {
//       return;
//     }

//     try {
//       await api.delete(`/products/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       fetchProducts();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const filteredProducts = products.filter(
//     (product) =>
//       product.title
//         .toLowerCase()
//         .includes(search.toLowerCase())
//   );

//   return (
//     <AdminLayout>

//       <div className="a4-products-admin">

//         <div className="a4-products-header">

//           <div>
//             <h1>Products</h1>
//             <p>
//               Manage all food, snacks and beverages.
//             </p>
//           </div>

//           <Link
//             to="/admin/products/add"
//             className="a4-add-product-btn"
//           >
//             + Add Product
//           </Link>

//         </div>

//         <div className="a4-products-toolbar">

//           <input
//             type="text"
//             placeholder="Search products..."
//             value={search}
//             onChange={(e) =>
//               setSearch(e.target.value)
//             }
//             className="a4-product-search"
//           />

//         </div>

//         <div className="a4-products-grid">

//           {filteredProducts.map((product) => (
//             <div
//               key={product.id}
//               className="a4-product-card"
//             >

//               <div className="a4-product-image-wrapper">

//                 <img
//                   src={`http://localhost:5000${product.image}`}
//                   alt={product.title}
//                   className="a4-product-image"
//                 />

//               </div>

//               <div className="a4-product-content">

//                 <h3>{product.title}</h3>

//                 <div className="a4-product-price">
//                   €{product.price}
//                 </div>

//                 <div className="a4-product-actions">

//                   <Link
//                     to={`/admin/products/edit/${product.id}`}
//                     className="a4-edit-btn"
//                   >
//                     Edit
//                   </Link>

//                   <button
//                     onClick={() =>
//                       deleteProduct(product.id)
//                     }
//                     className="a4-delete-btn"
//                   >
//                     Delete
//                   </button>

//                 </div>

//               </div>

//             </div>
//           ))}

//         </div>

//       </div>

//     </AdminLayout>
//   );
// }

// export default ProductsList;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./ProductsList.css";

// function ProductsList() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");

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

//   const deleteProduct = async (id) => {
//     const token = localStorage.getItem("token");

//     if (!window.confirm("Delete Product?")) {
//       return;
//     }

//     try {
//       await api.delete(`/products/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       fetchProducts();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const filteredProducts = products.filter(
//     (product) =>
//       product.title
//         .toLowerCase()
//         .includes(search.toLowerCase())
//   );

//   return (
//     <AdminLayout>
//       <div className="a4-products-admin">

//         <div className="a4-products-header">

//           <div>
//             <h1>Products</h1>

//             <p>
//               Manage all products and categories.
//             </p>
//           </div>

//           <Link
//             to="/admin/products/add"
//             className="a4-add-product-btn"
//           >
//             + Add Product
//           </Link>

//         </div>

//         <div className="a4-products-toolbar">

//           <input
//             type="text"
//             placeholder="Search products..."
//             value={search}
//             onChange={(e) =>
//               setSearch(e.target.value)
//             }
//             className="a4-product-search"
//           />

//         </div>

//         <div className="a4-products-grid">

//           {filteredProducts.map((product) => {

//             const discountedPrice =
//               product.price -
//               (product.price *
//                 (product.discountPercent || 0)) /
//                 100;

//             return (
//               <div
//                 key={product.id}
//                 className="a4-product-card"
//               >

//                 <div className="a4-product-image-wrapper">

//                   <img
//                     src={`http://localhost:5000${product.image}`}
//                     alt={product.title}
//                     className="a4-product-image"
//                   />

//                   {product.featured && (
//                     <span className="a4-featured-badge">
//                       Featured
//                     </span>
//                   )}

//                   {product.discountPercent > 0 && (
//                     <span className="a4-discount-badge">
//                       {product.discountPercent}% OFF
//                     </span>
//                   )}

//                 </div>

//                 <div className="a4-product-content">

//                   <h3>
//                     {product.title}
//                   </h3>

//                   <div className="a4-product-category">
//                     {product.category}
//                   </div>

//                   <div className="a4-product-pricing">

//                     <span className="a4-final-price">
//                       €{discountedPrice.toFixed(2)}
//                     </span>

//                     {product.discountPercent >
//                       0 && (
//                       <span className="a4-old-price">
//                         €{product.price}
//                       </span>
//                     )}

//                   </div>

//                   <div className="a4-product-actions">

//                     <Link
//                       to={`/admin/products/edit/${product.id}`}
//                       className="a4-edit-btn"
//                     >
//                       Edit
//                     </Link>

//                     <button
//                       onClick={() =>
//                         deleteProduct(product.id)
//                       }
//                       className="a4-delete-btn"
//                     >
//                       Delete
//                     </button>

//                   </div>

//                 </div>

//               </div>
//             );
//           })}

//         </div>

//       </div>
//     </AdminLayout>
//   );
// }

// export default ProductsList; 

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./ProductsList.css";

// function ProductsList() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const { data } = await api.get("/products");
//       setProducts(data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteProduct = async (id) => {
//     const token = localStorage.getItem("token");

//     if (!window.confirm("Are you sure you want to delete this product?")) {
//       return;
//     }

//     try {
//       await api.delete(`/products/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       fetchProducts();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const filteredProducts = products.filter(
//     (product) =>
//       product.title
//         .toLowerCase()
//         .includes(search.toLowerCase())
//   );

//   if (loading) {
//     return (
//       <AdminLayout>
//         <div className="apl-loading">
//           <div className="apl-loading-spinner"></div>
//           <p>Loading products...</p>
//         </div>
//       </AdminLayout>
//     );
//   }

//   return (
//     <AdminLayout>
//       <div className="apl-admin">
//         {/* Header */}
//         <div className="apl-header">
//           <div className="apl-header-left">
//             <h1>Products</h1>
//             <p>Manage all products and categories</p>
//           </div>
//           <Link to="/admin/products/add" className="apl-btn-primary">
//             <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
//               <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
//             </svg>
//             Add Product
//           </Link>
//         </div>

//         {/* Toolbar */}
//         <div className="apl-toolbar">
//           <div className="apl-search-wrapper">
//             <svg className="apl-search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
//               <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
//               <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//             </svg>
//             <input
//               type="text"
//               placeholder="Search products..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="apl-search-input"
//             />
//           </div>
//           <div className="apl-toolbar-info">
//             <span className="apl-count-badge">
//               {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
//             </span>
//           </div>
//         </div>

//         {/* Products Grid */}
//         {filteredProducts.length === 0 ? (
//           <div className="apl-empty">
//             <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
//               <path d="M12 12l8-4 20 10-8 4-20-10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
//               <path d="M12 24l8 4 20-10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
//               <path d="M12 36l8 4 20-10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
//             </svg>
//             <h3>No products found</h3>
//             <p>{search ? 'Try adjusting your search terms' : 'Add your first product to get started'}</p>
//           </div>
//         ) : (
//           <div className="apl-grid">
//             {filteredProducts.map((product) => {
//               const discountedPrice =
//                 product.price -
//                 (product.price * (product.discountPercent || 0)) / 100;

//               return (
//                 <div key={product.id} className="apl-card">
//                   {/* Image */}
//                   <div className="apl-card-image">
//                     <img
//                       src={`https://a4agroup.eu${product.image}`}
//                       alt={product.title}
//                       className="apl-image"
//                     />
//                     <div className="apl-card-badges">
//                       {product.featured && (
//                         <span className="apl-badge-featured">
//                           <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
//                             <path d="M5 0L6.5 3.5L10 4L7.5 6.5L8.5 10L5 8L1.5 10L2.5 6.5L0 4L3.5 3.5L5 0Z" fill="currentColor"/>
//                           </svg>
//                           Featured
//                         </span>
//                       )}
//                       {product.discountPercent > 0 && (
//                         <span className="apl-badge-discount">
//                           {product.discountPercent}% OFF
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   {/* Content */}
//                   <div className="apl-card-content">
//                     <span className="apl-category">{product.category}</span>
//                     <h3 className="apl-title">{product.title}</h3>
                    
//                     <div className="apl-pricing">
//                       <span className="apl-price-current">€{discountedPrice.toFixed(0)}</span>
//                       {product.discountPercent > 0 && (
//                         <span className="apl-price-original">€{product.price}</span>
//                       )}
//                     </div>

//                     <div className="apl-actions">
//                       <Link
//                         to={`/admin/products/edit/${product.id}`}
//                         className="apl-btn-edit"
//                       >
//                         <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                           <path d="M10 2l2 2-8 8H2v-2l8-8z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//                         Edit
//                       </Link>
//                       <button
//                         onClick={() => deleteProduct(product.id)}
//                         className="apl-btn-delete"
//                       >
//                         <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                           <path d="M2 4h10M5 4V2h4v2M4 4v7a1 1 0 001 1h4a1 1 0 001-1V4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
//                         </svg>
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </AdminLayout>
//   );
// }

// export default ProductsList;

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./ProductsList.css";

// function ProductsList() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const { data } = await api.get("/products");
//       setProducts(data);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteProduct = async (id) => {
//     const token = localStorage.getItem("token");

//     if (!window.confirm("Are you sure you want to delete this product?")) {
//       return;
//     }

//     try {
//       await api.delete(`/products/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       fetchProducts();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const filteredProducts = products.filter((product) =>
//     product.title.toLowerCase().includes(search.toLowerCase())
//   );

//   if (loading) {
//     return (
//       <AdminLayout>
//         <div className="apl-loading">
//           <div className="apl-loading-spinner"></div>
//           <p>Loading products...</p>
//         </div>
//       </AdminLayout>
//     );
//   }

//   return (
//     <AdminLayout>
//       <div className="apl-admin">

//         {/* Header */}
//         <div className="apl-header">
//           <div className="apl-header-left">
//             <h1>Products</h1>
//             <p>Manage all products and categories</p>
//           </div>

//           <Link
//             to="/admin/products/add"
//             className="apl-btn-primary"
//           >
//             <svg
//               width="18"
//               height="18"
//               viewBox="0 0 18 18"
//               fill="none"
//             >
//               <path
//                 d="M9 3v12M3 9h12"
//                 stroke="currentColor"
//                 strokeWidth="1.8"
//                 strokeLinecap="round"
//               />
//             </svg>

//             Add Product
//           </Link>
//         </div>

//         {/* Toolbar */}
//         <div className="apl-toolbar">

//           <div className="apl-search-wrapper">
//             <svg
//               className="apl-search-icon"
//               width="18"
//               height="18"
//               viewBox="0 0 18 18"
//               fill="none"
//             >
//               <circle
//                 cx="8"
//                 cy="8"
//                 r="6"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//               />

//               <path
//                 d="M12.5 12.5L16 16"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 strokeLinecap="round"
//               />
//             </svg>

//             <input
//               type="text"
//               placeholder="Search products..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="apl-search-input"
//             />
//           </div>

//           <div className="apl-toolbar-info">
//             <span className="apl-count-badge">
//               {filteredProducts.length} product
//               {filteredProducts.length !== 1 ? "s" : ""}
//             </span>
//           </div>

//         </div>

//         {/* Products Grid */}
//         {filteredProducts.length === 0 ? (
//           <div className="apl-empty">

//             <svg
//               width="48"
//               height="48"
//               viewBox="0 0 48 48"
//               fill="none"
//             >
//               <path
//                 d="M12 12l8-4 20 10-8 4-20-10z"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 strokeLinejoin="round"
//               />

//               <path
//                 d="M12 24l8 4 20-10"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 strokeLinejoin="round"
//               />

//               <path
//                 d="M12 36l8 4 20-10"
//                 stroke="currentColor"
//                 strokeWidth="1.5"
//                 strokeLinejoin="round"
//               />
//             </svg>

//             <h3>No products found</h3>

//             <p>
//               {search
//                 ? "Try adjusting your search terms"
//                 : "Add your first product to get started"}
//             </p>

//           </div>
//         ) : (

//           <div className="apl-grid">

//             {filteredProducts.map((product) => {

//               const discountedPrice =
//                 product.price -
//                 (product.price *
//                   (product.discountPercent || 0)) /
//                   100;

//               return (

//                 <div
//                   key={product.id}
//                   className={`apl-card ${
//                     product.isActive === false
//                       ? "apl-card-out-of-stock"
//                       : ""
//                   }`}
//                 >

//                   {/* Image */}
//                   <div className="apl-card-image">

//                     <img
//                       src={`https://a4agroup.eu${product.image}`}
//                       alt={product.title}
//                       className="apl-image"
//                     />

//                     {/* Badges */}
//                     <div className="apl-card-badges">

//                       {/* ACTIVE / OUT OF STOCK */}
//                       {product.isActive === false ? (
//                         <span className="apl-badge-stock apl-badge-out">
//                           <span className="apl-stock-dot"></span>
//                           Out of Stock
//                         </span>
//                       ) : (
//                         <span className="apl-badge-stock apl-badge-active">
//                           <span className="apl-stock-dot"></span>
//                           Active
//                         </span>
//                       )}

//                       {/* FEATURED */}
//                       {product.featured && (
//                         <span className="apl-badge-featured">

//                           <svg
//                             width="10"
//                             height="10"
//                             viewBox="0 0 10 10"
//                             fill="none"
//                           >
//                             <path
//                               d="M5 0L6.5 3.5L10 4L7.5 6.5L8.5 10L5 8L1.5 10L2.5 6.5L0 4L3.5 3.5L5 0Z"
//                               fill="currentColor"
//                             />
//                           </svg>

//                           Featured
//                         </span>
//                       )}

//                       {/* DISCOUNT */}
//                       {product.discountPercent > 0 && (
//                         <span className="apl-badge-discount">
//                           {product.discountPercent}% OFF
//                         </span>
//                       )}

//                     </div>

//                   </div>

//                   {/* Content */}
//                   <div className="apl-card-content">

//                     <span className="apl-category">
//                       {product.category}
//                     </span>

//                     <h3 className="apl-title">
//                       {product.title}
//                     </h3>

//                     <div className="apl-pricing">

//                       <span className="apl-price-current">
//                         €{discountedPrice.toFixed(0)}
//                       </span>

//                       {product.discountPercent > 0 && (
//                         <span className="apl-price-original">
//                           €{product.price}
//                         </span>
//                       )}

//                     </div>

//                     {/* Actions */}
//                     <div className="apl-actions">

//                       <Link
//                         to={`/admin/products/edit/${product.id}`}
//                         className="apl-btn-edit"
//                       >
//                         <svg
//                           width="14"
//                           height="14"
//                           viewBox="0 0 14 14"
//                           fill="none"
//                         >
//                           <path
//                             d="M10 2l2 2-8 8H2v-2l8-8z"
//                             stroke="currentColor"
//                             strokeWidth="1.3"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>

//                         Edit
//                       </Link>

//                       <button
//                         onClick={() =>
//                           deleteProduct(product.id)
//                         }
//                         className="apl-btn-delete"
//                       >
//                         <svg
//                           width="14"
//                           height="14"
//                           viewBox="0 0 14 14"
//                           fill="none"
//                         >
//                           <path
//                             d="M2 4h10M5 4V2h4v2M4 4v7a1 1 0 001 1h4a1 1 0 001-1V4"
//                             stroke="currentColor"
//                             strokeWidth="1.3"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                           />
//                         </svg>

//                         Delete
//                       </button>

//                     </div>

//                   </div>

//                 </div>

//               );
//             })}

//           </div>

//         )}

//       </div>
//     </AdminLayout>
//   );
// }

// export default ProductsList;



























import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./ProductsList.css";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // =====================================================
  // FILTERS
  // =====================================================

  const [stockFilter, setStockFilter] = useState("all");
  const [featuredFilter, setFeaturedFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortOption, setSortOption] = useState("newest");

  // =====================================================
  // FETCH PRODUCTS
  // =====================================================

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await api.get("/products");

      if (Array.isArray(data)) {
        setProducts(data);
      } else if (Array.isArray(data?.products)) {
        setProducts(data.products);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // DELETE PRODUCT
  // =====================================================

  const deleteProduct = async (id) => {
    const token = localStorage.getItem("token");

    if (
      !window.confirm(
        "Are you sure you want to delete this product?"
      )
    ) {
      return;
    }

    try {
      await api.delete(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  // =====================================================
  // CATEGORIES
  // =====================================================

  const categories = useMemo(() => {
    return [
      ...new Set(
        products
          .map((product) => product.category)
          .filter(Boolean)
      ),
    ].sort((a, b) =>
      String(a).localeCompare(String(b))
    );
  }, [products]);

  // =====================================================
  // FILTER + SORT PRODUCTS
  // =====================================================

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // -------------------------------------------------
    // SEARCH
    // -------------------------------------------------

    const searchValue = search
      .trim()
      .toLowerCase();

    if (searchValue) {
      result = result.filter((product) => {
        const searchableText = [
          product.title,
          product.category,
          product.description,
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return searchableText.includes(
          searchValue
        );
      });
    }

    // -------------------------------------------------
    // STOCK
    // -------------------------------------------------

    if (stockFilter === "active") {
      result = result.filter(
        (product) =>
          product.isActive !== false
      );
    }

    if (stockFilter === "out_of_stock") {
      result = result.filter(
        (product) =>
          product.isActive === false
      );
    }

    // -------------------------------------------------
    // FEATURED
    // -------------------------------------------------

    if (featuredFilter === "featured") {
      result = result.filter(
        (product) =>
          product.featured === true
      );
    }

    // -------------------------------------------------
    // CATEGORY
    // -------------------------------------------------

    if (categoryFilter !== "all") {
      result = result.filter(
        (product) =>
          product.category ===
          categoryFilter
      );
    }

    // -------------------------------------------------
    // SORT
    // -------------------------------------------------

    result.sort((a, b) => {
      switch (sortOption) {
        case "newest":
          return (
            new Date(
              b.createdAt || 0
            ).getTime() -
            new Date(
              a.createdAt || 0
            ).getTime()
          );

        case "oldest":
          return (
            new Date(
              a.createdAt || 0
            ).getTime() -
            new Date(
              b.createdAt || 0
            ).getTime()
          );

        case "price_low":
          return (
            Number(a.price || 0) -
            Number(b.price || 0)
          );

        case "price_high":
          return (
            Number(b.price || 0) -
            Number(a.price || 0)
          );

        case "name_az":
          return String(
            a.title || ""
          ).localeCompare(
            String(b.title || "")
          );

        case "name_za":
          return String(
            b.title || ""
          ).localeCompare(
            String(a.title || "")
          );

        default:
          return 0;
      }
    });

    return result;
  }, [
    products,
    search,
    stockFilter,
    featuredFilter,
    categoryFilter,
    sortOption,
  ]);

  // =====================================================
  // CLEAR FILTERS
  // =====================================================

  const clearFilters = () => {
    setSearch("");
    setStockFilter("all");
    setFeaturedFilter("all");
    setCategoryFilter("all");
    setSortOption("newest");
  };

  const hasActiveFilters =
    search.trim() !== "" ||
    stockFilter !== "all" ||
    featuredFilter !== "all" ||
    categoryFilter !== "all";

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <AdminLayout>
        <div className="apl-loading">
          <div className="apl-loading-spinner"></div>
          <p>Loading products...</p>
        </div>
      </AdminLayout>
    );
  }

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <AdminLayout>
      <div className="apl-admin">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="apl-header">

          <div className="apl-header-left">
            <h1>Products</h1>

            <p>
              Manage all products and categories
            </p>
          </div>

          <Link
            to="/admin/products/add"
            className="apl-btn-primary"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M9 3v12M3 9h12"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>

            Add Product
          </Link>

        </div>


        {/* =================================================
            TOOLBAR
        ================================================= */}

        <div className="apl-toolbar">

          {/* SEARCH */}

          <div className="apl-search-wrapper">

            <svg
              className="apl-search-icon"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <circle
                cx="8"
                cy="8"
                r="6"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              <path
                d="M12.5 12.5L16 16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>

            <input
              type="text"
              placeholder="Search products, category..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="apl-search-input"
            />

            {search && (
              <button
                type="button"
                className="apl-search-clear"
                onClick={() =>
                  setSearch("")
                }
                aria-label="Clear search"
              >
                ×
              </button>
            )}

          </div>


          {/* STOCK */}

          <select
            value={stockFilter}
            onChange={(e) =>
              setStockFilter(
                e.target.value
              )
            }
            className="apl-filter-select"
          >
            <option value="all">
              All Stock
            </option>

            <option value="active">
              Active
            </option>

            <option value="out_of_stock">
              Out of Stock
            </option>
          </select>


          {/* FEATURED */}

          <select
            value={featuredFilter}
            onChange={(e) =>
              setFeaturedFilter(
                e.target.value
              )
            }
            className="apl-filter-select"
          >
            <option value="all">
              All Products
            </option>

            <option value="featured">
              Featured Only
            </option>
          </select>


          {/* CATEGORY */}

          <select
            value={categoryFilter}
            onChange={(e) =>
              setCategoryFilter(
                e.target.value
              )
            }
            className="apl-filter-select"
          >
            <option value="all">
              All Categories
            </option>

            {categories.map(
              (category) => (
                <option
                  key={category}
                  value={category}
                >
                  {category}
                </option>
              )
            )}
          </select>


          {/* SORT */}

          <select
            value={sortOption}
            onChange={(e) =>
              setSortOption(
                e.target.value
              )
            }
            className="apl-filter-select apl-sort-select"
          >
            <option value="newest">
              Newest First
            </option>

            <option value="oldest">
              Oldest First
            </option>

            <option value="price_low">
              Price: Low to High
            </option>

            <option value="price_high">
              Price: High to Low
            </option>

            <option value="name_az">
              Name: A to Z
            </option>

            <option value="name_za">
              Name: Z to A
            </option>
          </select>


          {/* CLEAR */}

          {hasActiveFilters && (
            <button
              type="button"
              className="apl-clear-filters"
              onClick={clearFilters}
            >
              Clear
            </button>
          )}

        </div>


        {/* =================================================
            RESULTS INFO
        ================================================= */}

        <div className="apl-results-bar">

          <span>
            Showing{" "}
            <strong>
              {filteredProducts.length}
            </strong>{" "}
            of{" "}
            <strong>
              {products.length}
            </strong>{" "}
            products
          </span>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="apl-reset-link"
            >
              Reset filters
            </button>
          )}

        </div>


        {/* =================================================
            PRODUCTS GRID
        ================================================= */}

        {filteredProducts.length === 0 ? (

          <div className="apl-empty">

            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <path
                d="M12 12l8-4 20 10-8 4-20-10z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              <path
                d="M12 24l8 4 20-10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              <path
                d="M12 36l8 4 20-10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>

            <h3>
              No products found
            </h3>

            <p>
              {search ||
              stockFilter !== "all" ||
              featuredFilter !== "all" ||
              categoryFilter !== "all"
                ? "Try adjusting your search or filter options"
                : "Add your first product to get started"}
            </p>

            {hasActiveFilters && (
              <button
                type="button"
                className="apl-empty-reset"
                onClick={
                  clearFilters
                }
              >
                Clear Filters
              </button>
            )}

          </div>

        ) : (

          <div className="apl-grid">

            {filteredProducts.map(
              (product) => {

                const discountedPrice =
                  product.price -
                  (
                    product.price *
                    (
                      product.discountPercent ||
                      0
                    )
                  ) /
                    100;

                return (

                  <div
                    key={product.id}
                    className={`apl-card ${
                      product.isActive === false
                        ? "apl-card-out-of-stock"
                        : ""
                    }`}
                  >

                    {/* =================================================
                        IMAGE
                    ================================================= */}

                    <div className="apl-card-image">

                      <img
                        src={`https://a4agroup.eu${product.image}`}
                        alt={product.title}
                        className="apl-image"
                      />

                      <div className="apl-card-badges">

                        {/* STOCK */}

                        {product.isActive === false ? (

                          <span className="apl-badge-stock apl-badge-out">
                            <span className="apl-stock-dot"></span>
                            Out of Stock
                          </span>

                        ) : (

                          <span className="apl-badge-stock apl-badge-active">
                            <span className="apl-stock-dot"></span>
                            Active
                          </span>

                        )}


                        {/* FEATURED */}

                        {product.featured && (

                          <span className="apl-badge-featured">

                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 10 10"
                              fill="none"
                            >
                              <path
                                d="M5 0L6.5 3.5L10 4L7.5 6.5L8.5 10L5 8L1.5 10L2.5 6.5L0 4L3.5 3.5L5 0Z"
                                fill="currentColor"
                              />
                            </svg>

                            Featured

                          </span>

                        )}


                        {/* DISCOUNT */}

                        {product.discountPercent > 0 && (

                          <span className="apl-badge-discount">
                            {product.discountPercent}% OFF
                          </span>

                        )}

                      </div>

                    </div>


                    {/* =================================================
                        CONTENT
                    ================================================= */}

                    <div className="apl-card-content">

                      <span className="apl-category">
                        {product.category}
                      </span>

                      <h3 className="apl-title">
                        {product.title}
                      </h3>


                      <div className="apl-pricing">

                        <span className="apl-price-current">
                          €{discountedPrice.toFixed(0)}
                        </span>

                        {product.discountPercent > 0 && (

                          <span className="apl-price-original">
                            €{product.price}
                          </span>

                        )}

                      </div>


                      {/* ACTIONS */}

                      <div className="apl-actions">

                        <Link
                          to={`/admin/products/edit/${product.id}`}
                          className="apl-btn-edit"
                        >

                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M10 2l2 2-8 8H2v-2l8-8z"
                              stroke="currentColor"
                              strokeWidth="1.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          Edit

                        </Link>


                        <button
                          onClick={() =>
                            deleteProduct(
                              product.id
                            )
                          }
                          className="apl-btn-delete"
                        >

                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M2 4h10M5 4V2h4v2M4 4v7a1 1 0 001 1h4a1 1 0 001-1V4"
                              stroke="currentColor"
                              strokeWidth="1.3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>

                          Delete

                        </button>

                      </div>

                    </div>

                  </div>

                );
              }
            )}

          </div>

        )}

      </div>
    </AdminLayout>
  );
}

export default ProductsList;