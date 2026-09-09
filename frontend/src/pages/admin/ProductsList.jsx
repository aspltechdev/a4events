// // // // // import { useEffect, useState } from 'react';
// // // // // import api from '../../services/api';
// // // // // import AdminLayout from './AdminLayout';
// // // // // import { Link } from 'react-router-dom';
// // // // // function ProductsList() {
// // // // //     const [products, setProducts] = useState([]);

// // // // //     useEffect(() => {
// // // // //         fetchProducts();
// // // // //     }, []);

// // // // //     const fetchProducts = async () => {
// // // // //         try {
// // // // //             const { data } = await api.get('/products');
// // // // //             setProducts(data);
// // // // //         } catch (error) {
// // // // //             console.error(error);
// // // // //         }
// // // // //     };

// // // // //     const deleteProduct = async (id) => {
// // // // //         const token = localStorage.getItem('token');

// // // // //         if (!window.confirm('Delete Product?')) {
// // // // //             return;
// // // // //         }

// // // // //         try {
// // // // //             await api.delete(`/products/${id}`, {
// // // // //                 headers: {
// // // // //                     Authorization: `Bearer ${token}`
// // // // //                 }
// // // // //             });

// // // // //             fetchProducts();

// // // // //         } catch (error) {
// // // // //             console.error(error);
// // // // //         }
// // // // //     };

// // // // //     return (
// // // // //         <AdminLayout>
// // // // //             <div>
// // // // //                 <h1>Products</h1>

 
// // // // //                     <div key={product.id}>
// // // // //                                        {products.map((product) => (
// // // // //                     {product.image && (
// // // // //   <img
// // // // //     src={`http://localhost:5000${product.image}`}
// // // // //     alt={product.title}
// // // // //     width="120"
// // // // //   />
// // // // // )}
// // // // //                         <h3>{product.title}</h3>

// // // // //                         <Link to={`/admin/products/edit/${product.id}`}>
// // // // //                             Edit
// // // // //                         </Link>

// // // // //                         {' | '}

// // // // //                         <button
// // // // //                             onClick={() => deleteProduct(product.id)}
// // // // //                         >
// // // // //                             Delete
// // // // //                         </button>
// // // // //                     </div>
// // // // //                 ))}
// // // // //             </div>
// // // // //         </AdminLayout>
// // // // //     );
// // // // // }

// // // // // export default ProductsList;


// // // // import { useEffect, useState } from 'react';
// // // // import { Link } from 'react-router-dom';
// // // // import api from '../../services/api';
// // // // import AdminLayout from './AdminLayout';

// // // // function ProductsList() {
// // // //   const [products, setProducts] = useState([]);

// // // //   useEffect(() => {
// // // //     fetchProducts();
// // // //   }, []);

// // // //   const fetchProducts = async () => {
// // // //     try {
// // // //       const { data } = await api.get('/products');
// // // //       setProducts(data);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     }
// // // //   };

// // // //   const deleteProduct = async (id) => {
// // // //     const token = localStorage.getItem('token');

// // // //     if (!window.confirm('Delete Product?')) {
// // // //       return;
// // // //     }

// // // //     try {
// // // //       await api.delete(`/products/${id}`, {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`
// // // //         }
// // // //       });

// // // //       fetchProducts();
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <AdminLayout>
// // // //       <div>
// // // //         <h1>Products</h1>

// // // //         {products.map((product) => (
// // // //           <div key={product.id}>
// // // //             {product.image && (
// // // //               <img
// // // //                 src={`http://localhost:5000${product.image}`}
// // // //                 alt={product.title}
// // // //                 width="120"
// // // //               />
// // // //             )}

// // // //             <h3>{product.title}</h3>

// // // //             <Link to={`/admin/products/edit/${product.id}`}>
// // // //               Edit
// // // //             </Link>

// // // //             {' | '}

// // // //             <button
// // // //               onClick={() => deleteProduct(product.id)}
// // // //             >
// // // //               Delete
// // // //             </button>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </AdminLayout>
// // // //   );
// // // // }

// // // // export default ProductsList;


// // // // import { useEffect, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import api from "../../services/api";
// // // // import AdminLayout from "./AdminLayout";
// // // // import "./ProductsList.css";

// // // // function ProductsList() {
// // // //   const [products, setProducts] = useState([]);
// // // //   const [search, setSearch] = useState("");

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

// // // //   const deleteProduct = async (id) => {
// // // //     const token = localStorage.getItem("token");

// // // //     if (!window.confirm("Delete Product?")) {
// // // //       return;
// // // //     }

// // // //     try {
// // // //       await api.delete(`/products/${id}`, {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       });

// // // //       fetchProducts();
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     }
// // // //   };

// // // //   const filteredProducts = products.filter(
// // // //     (product) =>
// // // //       product.title
// // // //         .toLowerCase()
// // // //         .includes(search.toLowerCase())
// // // //   );

// // // //   return (
// // // //     <AdminLayout>

// // // //       <div className="a4-products-admin">

// // // //         <div className="a4-products-header">

// // // //           <div>
// // // //             <h1>Products</h1>
// // // //             <p>
// // // //               Manage all food, snacks and beverages.
// // // //             </p>
// // // //           </div>

// // // //           <Link
// // // //             to="/admin/products/add"
// // // //             className="a4-add-product-btn"
// // // //           >
// // // //             + Add Product
// // // //           </Link>

// // // //         </div>

// // // //         <div className="a4-products-toolbar">

// // // //           <input
// // // //             type="text"
// // // //             placeholder="Search products..."
// // // //             value={search}
// // // //             onChange={(e) =>
// // // //               setSearch(e.target.value)
// // // //             }
// // // //             className="a4-product-search"
// // // //           />

// // // //         </div>

// // // //         <div className="a4-products-grid">

// // // //           {filteredProducts.map((product) => (
// // // //             <div
// // // //               key={product.id}
// // // //               className="a4-product-card"
// // // //             >

// // // //               <div className="a4-product-image-wrapper">

// // // //                 <img
// // // //                   src={`http://localhost:5000${product.image}`}
// // // //                   alt={product.title}
// // // //                   className="a4-product-image"
// // // //                 />

// // // //               </div>

// // // //               <div className="a4-product-content">

// // // //                 <h3>{product.title}</h3>

// // // //                 <div className="a4-product-price">
// // // //                   €{product.price}
// // // //                 </div>

// // // //                 <div className="a4-product-actions">

// // // //                   <Link
// // // //                     to={`/admin/products/edit/${product.id}`}
// // // //                     className="a4-edit-btn"
// // // //                   >
// // // //                     Edit
// // // //                   </Link>

// // // //                   <button
// // // //                     onClick={() =>
// // // //                       deleteProduct(product.id)
// // // //                     }
// // // //                     className="a4-delete-btn"
// // // //                   >
// // // //                     Delete
// // // //                   </button>

// // // //                 </div>

// // // //               </div>

// // // //             </div>
// // // //           ))}

// // // //         </div>

// // // //       </div>

// // // //     </AdminLayout>
// // // //   );
// // // // }

// // // // export default ProductsList;


// // // // import { useEffect, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import api from "../../services/api";
// // // // import AdminLayout from "./AdminLayout";
// // // // import "./ProductsList.css";

// // // // function ProductsList() {
// // // //   const [products, setProducts] = useState([]);
// // // //   const [search, setSearch] = useState("");

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

// // // //   const deleteProduct = async (id) => {
// // // //     const token = localStorage.getItem("token");

// // // //     if (!window.confirm("Delete Product?")) {
// // // //       return;
// // // //     }

// // // //     try {
// // // //       await api.delete(`/products/${id}`, {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       });

// // // //       fetchProducts();
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     }
// // // //   };

// // // //   const filteredProducts = products.filter(
// // // //     (product) =>
// // // //       product.title
// // // //         .toLowerCase()
// // // //         .includes(search.toLowerCase())
// // // //   );

// // // //   return (
// // // //     <AdminLayout>
// // // //       <div className="a4-products-admin">

// // // //         <div className="a4-products-header">

// // // //           <div>
// // // //             <h1>Products</h1>

// // // //             <p>
// // // //               Manage all products and categories.
// // // //             </p>
// // // //           </div>

// // // //           <Link
// // // //             to="/admin/products/add"
// // // //             className="a4-add-product-btn"
// // // //           >
// // // //             + Add Product
// // // //           </Link>

// // // //         </div>

// // // //         <div className="a4-products-toolbar">

// // // //           <input
// // // //             type="text"
// // // //             placeholder="Search products..."
// // // //             value={search}
// // // //             onChange={(e) =>
// // // //               setSearch(e.target.value)
// // // //             }
// // // //             className="a4-product-search"
// // // //           />

// // // //         </div>

// // // //         <div className="a4-products-grid">

// // // //           {filteredProducts.map((product) => {

// // // //             const discountedPrice =
// // // //               product.price -
// // // //               (product.price *
// // // //                 (product.discountPercent || 0)) /
// // // //                 100;

// // // //             return (
// // // //               <div
// // // //                 key={product.id}
// // // //                 className="a4-product-card"
// // // //               >

// // // //                 <div className="a4-product-image-wrapper">

// // // //                   <img
// // // //                     src={`http://localhost:5000${product.image}`}
// // // //                     alt={product.title}
// // // //                     className="a4-product-image"
// // // //                   />

// // // //                   {product.featured && (
// // // //                     <span className="a4-featured-badge">
// // // //                       Featured
// // // //                     </span>
// // // //                   )}

// // // //                   {product.discountPercent > 0 && (
// // // //                     <span className="a4-discount-badge">
// // // //                       {product.discountPercent}% OFF
// // // //                     </span>
// // // //                   )}

// // // //                 </div>

// // // //                 <div className="a4-product-content">

// // // //                   <h3>
// // // //                     {product.title}
// // // //                   </h3>

// // // //                   <div className="a4-product-category">
// // // //                     {product.category}
// // // //                   </div>

// // // //                   <div className="a4-product-pricing">

// // // //                     <span className="a4-final-price">
// // // //                       €{discountedPrice.toFixed(2)}
// // // //                     </span>

// // // //                     {product.discountPercent >
// // // //                       0 && (
// // // //                       <span className="a4-old-price">
// // // //                         €{product.price}
// // // //                       </span>
// // // //                     )}

// // // //                   </div>

// // // //                   <div className="a4-product-actions">

// // // //                     <Link
// // // //                       to={`/admin/products/edit/${product.id}`}
// // // //                       className="a4-edit-btn"
// // // //                     >
// // // //                       Edit
// // // //                     </Link>

// // // //                     <button
// // // //                       onClick={() =>
// // // //                         deleteProduct(product.id)
// // // //                       }
// // // //                       className="a4-delete-btn"
// // // //                     >
// // // //                       Delete
// // // //                     </button>

// // // //                   </div>

// // // //                 </div>

// // // //               </div>
// // // //             );
// // // //           })}

// // // //         </div>

// // // //       </div>
// // // //     </AdminLayout>
// // // //   );
// // // // }

// // // // export default ProductsList; 

// // // // import { useEffect, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import api from "../../services/api";
// // // // import AdminLayout from "./AdminLayout";
// // // // import "./ProductsList.css";

// // // // function ProductsList() {
// // // //   const [products, setProducts] = useState([]);
// // // //   const [search, setSearch] = useState("");
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     fetchProducts();
// // // //   }, []);

// // // //   const fetchProducts = async () => {
// // // //     try {
// // // //       const { data } = await api.get("/products");
// // // //       setProducts(data);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const deleteProduct = async (id) => {
// // // //     const token = localStorage.getItem("token");

// // // //     if (!window.confirm("Are you sure you want to delete this product?")) {
// // // //       return;
// // // //     }

// // // //     try {
// // // //       await api.delete(`/products/${id}`, {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       });

// // // //       fetchProducts();
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     }
// // // //   };

// // // //   const filteredProducts = products.filter(
// // // //     (product) =>
// // // //       product.title
// // // //         .toLowerCase()
// // // //         .includes(search.toLowerCase())
// // // //   );

// // // //   if (loading) {
// // // //     return (
// // // //       <AdminLayout>
// // // //         <div className="apl-loading">
// // // //           <div className="apl-loading-spinner"></div>
// // // //           <p>Loading products...</p>
// // // //         </div>
// // // //       </AdminLayout>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <AdminLayout>
// // // //       <div className="apl-admin">
// // // //         {/* Header */}
// // // //         <div className="apl-header">
// // // //           <div className="apl-header-left">
// // // //             <h1>Products</h1>
// // // //             <p>Manage all products and categories</p>
// // // //           </div>
// // // //           <Link to="/admin/products/add" className="apl-btn-primary">
// // // //             <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
// // // //               <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
// // // //             </svg>
// // // //             Add Product
// // // //           </Link>
// // // //         </div>

// // // //         {/* Toolbar */}
// // // //         <div className="apl-toolbar">
// // // //           <div className="apl-search-wrapper">
// // // //             <svg className="apl-search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none">
// // // //               <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
// // // //               <path d="M12.5 12.5L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
// // // //             </svg>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Search products..."
// // // //               value={search}
// // // //               onChange={(e) => setSearch(e.target.value)}
// // // //               className="apl-search-input"
// // // //             />
// // // //           </div>
// // // //           <div className="apl-toolbar-info">
// // // //             <span className="apl-count-badge">
// // // //               {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
// // // //             </span>
// // // //           </div>
// // // //         </div>

// // // //         {/* Products Grid */}
// // // //         {filteredProducts.length === 0 ? (
// // // //           <div className="apl-empty">
// // // //             <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
// // // //               <path d="M12 12l8-4 20 10-8 4-20-10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
// // // //               <path d="M12 24l8 4 20-10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
// // // //               <path d="M12 36l8 4 20-10" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
// // // //             </svg>
// // // //             <h3>No products found</h3>
// // // //             <p>{search ? 'Try adjusting your search terms' : 'Add your first product to get started'}</p>
// // // //           </div>
// // // //         ) : (
// // // //           <div className="apl-grid">
// // // //             {filteredProducts.map((product) => {
// // // //               const discountedPrice =
// // // //                 product.price -
// // // //                 (product.price * (product.discountPercent || 0)) / 100;

// // // //               return (
// // // //                 <div key={product.id} className="apl-card">
// // // //                   {/* Image */}
// // // //                   <div className="apl-card-image">
// // // //                     <img
// // // //                       src={`https://a4agroup.eu${product.image}`}
// // // //                       alt={product.title}
// // // //                       className="apl-image"
// // // //                     />
// // // //                     <div className="apl-card-badges">
// // // //                       {product.featured && (
// // // //                         <span className="apl-badge-featured">
// // // //                           <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
// // // //                             <path d="M5 0L6.5 3.5L10 4L7.5 6.5L8.5 10L5 8L1.5 10L2.5 6.5L0 4L3.5 3.5L5 0Z" fill="currentColor"/>
// // // //                           </svg>
// // // //                           Featured
// // // //                         </span>
// // // //                       )}
// // // //                       {product.discountPercent > 0 && (
// // // //                         <span className="apl-badge-discount">
// // // //                           {product.discountPercent}% OFF
// // // //                         </span>
// // // //                       )}
// // // //                     </div>
// // // //                   </div>

// // // //                   {/* Content */}
// // // //                   <div className="apl-card-content">
// // // //                     <span className="apl-category">{product.category}</span>
// // // //                     <h3 className="apl-title">{product.title}</h3>
                    
// // // //                     <div className="apl-pricing">
// // // //                       <span className="apl-price-current">€{discountedPrice.toFixed(0)}</span>
// // // //                       {product.discountPercent > 0 && (
// // // //                         <span className="apl-price-original">€{product.price}</span>
// // // //                       )}
// // // //                     </div>

// // // //                     <div className="apl-actions">
// // // //                       <Link
// // // //                         to={`/admin/products/edit/${product.id}`}
// // // //                         className="apl-btn-edit"
// // // //                       >
// // // //                         <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// // // //                           <path d="M10 2l2 2-8 8H2v-2l8-8z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
// // // //                         </svg>
// // // //                         Edit
// // // //                       </Link>
// // // //                       <button
// // // //                         onClick={() => deleteProduct(product.id)}
// // // //                         className="apl-btn-delete"
// // // //                       >
// // // //                         <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// // // //                           <path d="M2 4h10M5 4V2h4v2M4 4v7a1 1 0 001 1h4a1 1 0 001-1V4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
// // // //                         </svg>
// // // //                         Delete
// // // //                       </button>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               );
// // // //             })}
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </AdminLayout>
// // // //   );
// // // // }

// // // // export default ProductsList;

// // // // import { useEffect, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import api from "../../services/api";
// // // // import AdminLayout from "./AdminLayout";
// // // // import "./ProductsList.css";

// // // // function ProductsList() {
// // // //   const [products, setProducts] = useState([]);
// // // //   const [search, setSearch] = useState("");
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     fetchProducts();
// // // //   }, []);

// // // //   const fetchProducts = async () => {
// // // //     try {
// // // //       const { data } = await api.get("/products");
// // // //       setProducts(data);
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     } finally {
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const deleteProduct = async (id) => {
// // // //     const token = localStorage.getItem("token");

// // // //     if (!window.confirm("Are you sure you want to delete this product?")) {
// // // //       return;
// // // //     }

// // // //     try {
// // // //       await api.delete(`/products/${id}`, {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       });

// // // //       fetchProducts();
// // // //     } catch (error) {
// // // //       console.error(error);
// // // //     }
// // // //   };

// // // //   const filteredProducts = products.filter((product) =>
// // // //     product.title.toLowerCase().includes(search.toLowerCase())
// // // //   );

// // // //   if (loading) {
// // // //     return (
// // // //       <AdminLayout>
// // // //         <div className="apl-loading">
// // // //           <div className="apl-loading-spinner"></div>
// // // //           <p>Loading products...</p>
// // // //         </div>
// // // //       </AdminLayout>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <AdminLayout>
// // // //       <div className="apl-admin">

// // // //         {/* Header */}
// // // //         <div className="apl-header">
// // // //           <div className="apl-header-left">
// // // //             <h1>Products</h1>
// // // //             <p>Manage all products and categories</p>
// // // //           </div>

// // // //           <Link
// // // //             to="/admin/products/add"
// // // //             className="apl-btn-primary"
// // // //           >
// // // //             <svg
// // // //               width="18"
// // // //               height="18"
// // // //               viewBox="0 0 18 18"
// // // //               fill="none"
// // // //             >
// // // //               <path
// // // //                 d="M9 3v12M3 9h12"
// // // //                 stroke="currentColor"
// // // //                 strokeWidth="1.8"
// // // //                 strokeLinecap="round"
// // // //               />
// // // //             </svg>

// // // //             Add Product
// // // //           </Link>
// // // //         </div>

// // // //         {/* Toolbar */}
// // // //         <div className="apl-toolbar">

// // // //           <div className="apl-search-wrapper">
// // // //             <svg
// // // //               className="apl-search-icon"
// // // //               width="18"
// // // //               height="18"
// // // //               viewBox="0 0 18 18"
// // // //               fill="none"
// // // //             >
// // // //               <circle
// // // //                 cx="8"
// // // //                 cy="8"
// // // //                 r="6"
// // // //                 stroke="currentColor"
// // // //                 strokeWidth="1.5"
// // // //               />

// // // //               <path
// // // //                 d="M12.5 12.5L16 16"
// // // //                 stroke="currentColor"
// // // //                 strokeWidth="1.5"
// // // //                 strokeLinecap="round"
// // // //               />
// // // //             </svg>

// // // //             <input
// // // //               type="text"
// // // //               placeholder="Search products..."
// // // //               value={search}
// // // //               onChange={(e) => setSearch(e.target.value)}
// // // //               className="apl-search-input"
// // // //             />
// // // //           </div>

// // // //           <div className="apl-toolbar-info">
// // // //             <span className="apl-count-badge">
// // // //               {filteredProducts.length} product
// // // //               {filteredProducts.length !== 1 ? "s" : ""}
// // // //             </span>
// // // //           </div>

// // // //         </div>

// // // //         {/* Products Grid */}
// // // //         {filteredProducts.length === 0 ? (
// // // //           <div className="apl-empty">

// // // //             <svg
// // // //               width="48"
// // // //               height="48"
// // // //               viewBox="0 0 48 48"
// // // //               fill="none"
// // // //             >
// // // //               <path
// // // //                 d="M12 12l8-4 20 10-8 4-20-10z"
// // // //                 stroke="currentColor"
// // // //                 strokeWidth="1.5"
// // // //                 strokeLinejoin="round"
// // // //               />

// // // //               <path
// // // //                 d="M12 24l8 4 20-10"
// // // //                 stroke="currentColor"
// // // //                 strokeWidth="1.5"
// // // //                 strokeLinejoin="round"
// // // //               />

// // // //               <path
// // // //                 d="M12 36l8 4 20-10"
// // // //                 stroke="currentColor"
// // // //                 strokeWidth="1.5"
// // // //                 strokeLinejoin="round"
// // // //               />
// // // //             </svg>

// // // //             <h3>No products found</h3>

// // // //             <p>
// // // //               {search
// // // //                 ? "Try adjusting your search terms"
// // // //                 : "Add your first product to get started"}
// // // //             </p>

// // // //           </div>
// // // //         ) : (

// // // //           <div className="apl-grid">

// // // //             {filteredProducts.map((product) => {

// // // //               const discountedPrice =
// // // //                 product.price -
// // // //                 (product.price *
// // // //                   (product.discountPercent || 0)) /
// // // //                   100;

// // // //               return (

// // // //                 <div
// // // //                   key={product.id}
// // // //                   className={`apl-card ${
// // // //                     product.isActive === false
// // // //                       ? "apl-card-out-of-stock"
// // // //                       : ""
// // // //                   }`}
// // // //                 >

// // // //                   {/* Image */}
// // // //                   <div className="apl-card-image">

// // // //                     <img
// // // //                       src={`https://a4agroup.eu${product.image}`}
// // // //                       alt={product.title}
// // // //                       className="apl-image"
// // // //                     />

// // // //                     {/* Badges */}
// // // //                     <div className="apl-card-badges">

// // // //                       {/* ACTIVE / OUT OF STOCK */}
// // // //                       {product.isActive === false ? (
// // // //                         <span className="apl-badge-stock apl-badge-out">
// // // //                           <span className="apl-stock-dot"></span>
// // // //                           Out of Stock
// // // //                         </span>
// // // //                       ) : (
// // // //                         <span className="apl-badge-stock apl-badge-active">
// // // //                           <span className="apl-stock-dot"></span>
// // // //                           Active
// // // //                         </span>
// // // //                       )}

// // // //                       {/* FEATURED */}
// // // //                       {product.featured && (
// // // //                         <span className="apl-badge-featured">

// // // //                           <svg
// // // //                             width="10"
// // // //                             height="10"
// // // //                             viewBox="0 0 10 10"
// // // //                             fill="none"
// // // //                           >
// // // //                             <path
// // // //                               d="M5 0L6.5 3.5L10 4L7.5 6.5L8.5 10L5 8L1.5 10L2.5 6.5L0 4L3.5 3.5L5 0Z"
// // // //                               fill="currentColor"
// // // //                             />
// // // //                           </svg>

// // // //                           Featured
// // // //                         </span>
// // // //                       )}

// // // //                       {/* DISCOUNT */}
// // // //                       {product.discountPercent > 0 && (
// // // //                         <span className="apl-badge-discount">
// // // //                           {product.discountPercent}% OFF
// // // //                         </span>
// // // //                       )}

// // // //                     </div>

// // // //                   </div>

// // // //                   {/* Content */}
// // // //                   <div className="apl-card-content">

// // // //                     <span className="apl-category">
// // // //                       {product.category}
// // // //                     </span>

// // // //                     <h3 className="apl-title">
// // // //                       {product.title}
// // // //                     </h3>

// // // //                     <div className="apl-pricing">

// // // //                       <span className="apl-price-current">
// // // //                         €{discountedPrice.toFixed(0)}
// // // //                       </span>

// // // //                       {product.discountPercent > 0 && (
// // // //                         <span className="apl-price-original">
// // // //                           €{product.price}
// // // //                         </span>
// // // //                       )}

// // // //                     </div>

// // // //                     {/* Actions */}
// // // //                     <div className="apl-actions">

// // // //                       <Link
// // // //                         to={`/admin/products/edit/${product.id}`}
// // // //                         className="apl-btn-edit"
// // // //                       >
// // // //                         <svg
// // // //                           width="14"
// // // //                           height="14"
// // // //                           viewBox="0 0 14 14"
// // // //                           fill="none"
// // // //                         >
// // // //                           <path
// // // //                             d="M10 2l2 2-8 8H2v-2l8-8z"
// // // //                             stroke="currentColor"
// // // //                             strokeWidth="1.3"
// // // //                             strokeLinecap="round"
// // // //                             strokeLinejoin="round"
// // // //                           />
// // // //                         </svg>

// // // //                         Edit
// // // //                       </Link>

// // // //                       <button
// // // //                         onClick={() =>
// // // //                           deleteProduct(product.id)
// // // //                         }
// // // //                         className="apl-btn-delete"
// // // //                       >
// // // //                         <svg
// // // //                           width="14"
// // // //                           height="14"
// // // //                           viewBox="0 0 14 14"
// // // //                           fill="none"
// // // //                         >
// // // //                           <path
// // // //                             d="M2 4h10M5 4V2h4v2M4 4v7a1 1 0 001 1h4a1 1 0 001-1V4"
// // // //                             stroke="currentColor"
// // // //                             strokeWidth="1.3"
// // // //                             strokeLinecap="round"
// // // //                             strokeLinejoin="round"
// // // //                           />
// // // //                         </svg>

// // // //                         Delete
// // // //                       </button>

// // // //                     </div>

// // // //                   </div>

// // // //                 </div>

// // // //               );
// // // //             })}

// // // //           </div>

// // // //         )}

// // // //       </div>
// // // //     </AdminLayout>
// // // //   );
// // // // }

// // // // export default ProductsList;



























// // // import { useEffect, useMemo, useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import api from "../../services/api";
// // // import AdminLayout from "./AdminLayout";
// // // import "./ProductsList.css";

// // // function ProductsList() {
// // //   const [products, setProducts] = useState([]);
// // //   const [search, setSearch] = useState("");
// // //   const [loading, setLoading] = useState(true);

// // //   // =====================================================
// // //   // FILTERS
// // //   // =====================================================

// // //   const [stockFilter, setStockFilter] = useState("all");
// // //   const [featuredFilter, setFeaturedFilter] = useState("all");
// // //   const [categoryFilter, setCategoryFilter] = useState("all");
// // //   const [sortOption, setSortOption] = useState("newest");

// // //   // =====================================================
// // //   // FETCH PRODUCTS
// // //   // =====================================================

// // //   useEffect(() => {
// // //     fetchProducts();
// // //   }, []);

// // //   const fetchProducts = async () => {
// // //     try {
// // //       const { data } = await api.get("/products");

// // //       if (Array.isArray(data)) {
// // //         setProducts(data);
// // //       } else if (Array.isArray(data?.products)) {
// // //         setProducts(data.products);
// // //       } else {
// // //         setProducts([]);
// // //       }
// // //     } catch (error) {
// // //       console.error(error);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // =====================================================
// // //   // DELETE PRODUCT
// // //   // =====================================================

// // //   const deleteProduct = async (id) => {
// // //     const token = localStorage.getItem("token");

// // //     if (
// // //       !window.confirm(
// // //         "Are you sure you want to delete this product?"
// // //       )
// // //     ) {
// // //       return;
// // //     }

// // //     try {
// // //       await api.delete(`/products/${id}`, {
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //       });

// // //       fetchProducts();
// // //     } catch (error) {
// // //       console.error(error);
// // //     }
// // //   };

// // //   // =====================================================
// // //   // CATEGORIES
// // //   // =====================================================

// // //   const categories = useMemo(() => {
// // //     return [
// // //       ...new Set(
// // //         products
// // //           .map((product) => product.category)
// // //           .filter(Boolean)
// // //       ),
// // //     ].sort((a, b) =>
// // //       String(a).localeCompare(String(b))
// // //     );
// // //   }, [products]);

// // //   // =====================================================
// // //   // FILTER + SORT PRODUCTS
// // //   // =====================================================

// // //   const filteredProducts = useMemo(() => {
// // //     let result = [...products];

// // //     // -------------------------------------------------
// // //     // SEARCH
// // //     // -------------------------------------------------

// // //     const searchValue = search
// // //       .trim()
// // //       .toLowerCase();

// // //     if (searchValue) {
// // //       result = result.filter((product) => {
// // //         const searchableText = [
// // //           product.title,
// // //           product.category,
// // //           product.description,
// // //         ]
// // //           .filter(Boolean)
// // //           .join(" ")
// // //           .toLowerCase();

// // //         return searchableText.includes(
// // //           searchValue
// // //         );
// // //       });
// // //     }

// // //     // -------------------------------------------------
// // //     // STOCK
// // //     // -------------------------------------------------

// // //     if (stockFilter === "active") {
// // //       result = result.filter(
// // //         (product) =>
// // //           product.isActive !== false
// // //       );
// // //     }

// // //     if (stockFilter === "out_of_stock") {
// // //       result = result.filter(
// // //         (product) =>
// // //           product.isActive === false
// // //       );
// // //     }

// // //     // -------------------------------------------------
// // //     // FEATURED
// // //     // -------------------------------------------------

// // //     if (featuredFilter === "featured") {
// // //       result = result.filter(
// // //         (product) =>
// // //           product.featured === true
// // //       );
// // //     }

// // //     // -------------------------------------------------
// // //     // CATEGORY
// // //     // -------------------------------------------------

// // //     if (categoryFilter !== "all") {
// // //       result = result.filter(
// // //         (product) =>
// // //           product.category ===
// // //           categoryFilter
// // //       );
// // //     }

// // //     // -------------------------------------------------
// // //     // SORT
// // //     // -------------------------------------------------

// // //     result.sort((a, b) => {
// // //       switch (sortOption) {
// // //         case "newest":
// // //           return (
// // //             new Date(
// // //               b.createdAt || 0
// // //             ).getTime() -
// // //             new Date(
// // //               a.createdAt || 0
// // //             ).getTime()
// // //           );

// // //         case "oldest":
// // //           return (
// // //             new Date(
// // //               a.createdAt || 0
// // //             ).getTime() -
// // //             new Date(
// // //               b.createdAt || 0
// // //             ).getTime()
// // //           );

// // //         case "price_low":
// // //           return (
// // //             Number(a.price || 0) -
// // //             Number(b.price || 0)
// // //           );

// // //         case "price_high":
// // //           return (
// // //             Number(b.price || 0) -
// // //             Number(a.price || 0)
// // //           );

// // //         case "name_az":
// // //           return String(
// // //             a.title || ""
// // //           ).localeCompare(
// // //             String(b.title || "")
// // //           );

// // //         case "name_za":
// // //           return String(
// // //             b.title || ""
// // //           ).localeCompare(
// // //             String(a.title || "")
// // //           );

// // //         default:
// // //           return 0;
// // //       }
// // //     });

// // //     return result;
// // //   }, [
// // //     products,
// // //     search,
// // //     stockFilter,
// // //     featuredFilter,
// // //     categoryFilter,
// // //     sortOption,
// // //   ]);

// // //   // =====================================================
// // //   // CLEAR FILTERS
// // //   // =====================================================

// // //   const clearFilters = () => {
// // //     setSearch("");
// // //     setStockFilter("all");
// // //     setFeaturedFilter("all");
// // //     setCategoryFilter("all");
// // //     setSortOption("newest");
// // //   };

// // //   const hasActiveFilters =
// // //     search.trim() !== "" ||
// // //     stockFilter !== "all" ||
// // //     featuredFilter !== "all" ||
// // //     categoryFilter !== "all";

// // //   // =====================================================
// // //   // LOADING
// // //   // =====================================================

// // //   if (loading) {
// // //     return (
// // //       <AdminLayout>
// // //         <div className="apl-loading">
// // //           <div className="apl-loading-spinner"></div>
// // //           <p>Loading products...</p>
// // //         </div>
// // //       </AdminLayout>
// // //     );
// // //   }

// // //   // =====================================================
// // //   // PAGE
// // //   // =====================================================

// // //   return (
// // //     <AdminLayout>
// // //       <div className="apl-admin">

// // //         {/* =================================================
// // //             HEADER
// // //         ================================================= */}

// // //         <div className="apl-header">

// // //           <div className="apl-header-left">
// // //             <h1>Products</h1>

// // //             <p>
// // //               Manage all products and categories
// // //             </p>
// // //           </div>

// // //           <Link
// // //             to="/admin/products/add"
// // //             className="apl-btn-primary"
// // //           >
// // //             <svg
// // //               width="18"
// // //               height="18"
// // //               viewBox="0 0 18 18"
// // //               fill="none"
// // //             >
// // //               <path
// // //                 d="M9 3v12M3 9h12"
// // //                 stroke="currentColor"
// // //                 strokeWidth="1.8"
// // //                 strokeLinecap="round"
// // //               />
// // //             </svg>

// // //             Add Product
// // //           </Link>

// // //         </div>


// // //         {/* =================================================
// // //             TOOLBAR
// // //         ================================================= */}

// // //         <div className="apl-toolbar">

// // //           {/* SEARCH */}

// // //           <div className="apl-search-wrapper">

// // //             <svg
// // //               className="apl-search-icon"
// // //               width="18"
// // //               height="18"
// // //               viewBox="0 0 18 18"
// // //               fill="none"
// // //             >
// // //               <circle
// // //                 cx="8"
// // //                 cy="8"
// // //                 r="6"
// // //                 stroke="currentColor"
// // //                 strokeWidth="1.5"
// // //               />

// // //               <path
// // //                 d="M12.5 12.5L16 16"
// // //                 stroke="currentColor"
// // //                 strokeWidth="1.5"
// // //                 strokeLinecap="round"
// // //               />
// // //             </svg>

// // //             <input
// // //               type="text"
// // //               placeholder="Search products, category..."
// // //               value={search}
// // //               onChange={(e) =>
// // //                 setSearch(e.target.value)
// // //               }
// // //               className="apl-search-input"
// // //             />

// // //             {search && (
// // //               <button
// // //                 type="button"
// // //                 className="apl-search-clear"
// // //                 onClick={() =>
// // //                   setSearch("")
// // //                 }
// // //                 aria-label="Clear search"
// // //               >
// // //                 ×
// // //               </button>
// // //             )}

// // //           </div>


// // //           {/* STOCK */}

// // //           <select
// // //             value={stockFilter}
// // //             onChange={(e) =>
// // //               setStockFilter(
// // //                 e.target.value
// // //               )
// // //             }
// // //             className="apl-filter-select"
// // //           >
// // //             <option value="all">
// // //               All Stock
// // //             </option>

// // //             <option value="active">
// // //               Active
// // //             </option>

// // //             <option value="out_of_stock">
// // //               Out of Stock
// // //             </option>
// // //           </select>


// // //           {/* FEATURED */}

// // //           <select
// // //             value={featuredFilter}
// // //             onChange={(e) =>
// // //               setFeaturedFilter(
// // //                 e.target.value
// // //               )
// // //             }
// // //             className="apl-filter-select"
// // //           >
// // //             <option value="all">
// // //               All Products
// // //             </option>

// // //             <option value="featured">
// // //               Featured Only
// // //             </option>
// // //           </select>


// // //           {/* CATEGORY */}

// // //           <select
// // //             value={categoryFilter}
// // //             onChange={(e) =>
// // //               setCategoryFilter(
// // //                 e.target.value
// // //               )
// // //             }
// // //             className="apl-filter-select"
// // //           >
// // //             <option value="all">
// // //               All Categories
// // //             </option>

// // //             {categories.map(
// // //               (category) => (
// // //                 <option
// // //                   key={category}
// // //                   value={category}
// // //                 >
// // //                   {category}
// // //                 </option>
// // //               )
// // //             )}
// // //           </select>


// // //           {/* SORT */}

// // //           <select
// // //             value={sortOption}
// // //             onChange={(e) =>
// // //               setSortOption(
// // //                 e.target.value
// // //               )
// // //             }
// // //             className="apl-filter-select apl-sort-select"
// // //           >
// // //             <option value="newest">
// // //               Newest First
// // //             </option>

// // //             <option value="oldest">
// // //               Oldest First
// // //             </option>

// // //             <option value="price_low">
// // //               Price: Low to High
// // //             </option>

// // //             <option value="price_high">
// // //               Price: High to Low
// // //             </option>

// // //             <option value="name_az">
// // //               Name: A to Z
// // //             </option>

// // //             <option value="name_za">
// // //               Name: Z to A
// // //             </option>
// // //           </select>


// // //           {/* CLEAR */}

// // //           {hasActiveFilters && (
// // //             <button
// // //               type="button"
// // //               className="apl-clear-filters"
// // //               onClick={clearFilters}
// // //             >
// // //               Clear
// // //             </button>
// // //           )}

// // //         </div>


// // //         {/* =================================================
// // //             RESULTS INFO
// // //         ================================================= */}

// // //         <div className="apl-results-bar">

// // //           <span>
// // //             Showing{" "}
// // //             <strong>
// // //               {filteredProducts.length}
// // //             </strong>{" "}
// // //             of{" "}
// // //             <strong>
// // //               {products.length}
// // //             </strong>{" "}
// // //             products
// // //           </span>

// // //           {hasActiveFilters && (
// // //             <button
// // //               type="button"
// // //               onClick={clearFilters}
// // //               className="apl-reset-link"
// // //             >
// // //               Reset filters
// // //             </button>
// // //           )}

// // //         </div>


// // //         {/* =================================================
// // //             PRODUCTS GRID
// // //         ================================================= */}

// // //         {filteredProducts.length === 0 ? (

// // //           <div className="apl-empty">

// // //             <svg
// // //               width="48"
// // //               height="48"
// // //               viewBox="0 0 48 48"
// // //               fill="none"
// // //             >
// // //               <path
// // //                 d="M12 12l8-4 20 10-8 4-20-10z"
// // //                 stroke="currentColor"
// // //                 strokeWidth="1.5"
// // //                 strokeLinejoin="round"
// // //               />

// // //               <path
// // //                 d="M12 24l8 4 20-10"
// // //                 stroke="currentColor"
// // //                 strokeWidth="1.5"
// // //                 strokeLinejoin="round"
// // //               />

// // //               <path
// // //                 d="M12 36l8 4 20-10"
// // //                 stroke="currentColor"
// // //                 strokeWidth="1.5"
// // //                 strokeLinejoin="round"
// // //               />
// // //             </svg>

// // //             <h3>
// // //               No products found
// // //             </h3>

// // //             <p>
// // //               {search ||
// // //               stockFilter !== "all" ||
// // //               featuredFilter !== "all" ||
// // //               categoryFilter !== "all"
// // //                 ? "Try adjusting your search or filter options"
// // //                 : "Add your first product to get started"}
// // //             </p>

// // //             {hasActiveFilters && (
// // //               <button
// // //                 type="button"
// // //                 className="apl-empty-reset"
// // //                 onClick={
// // //                   clearFilters
// // //                 }
// // //               >
// // //                 Clear Filters
// // //               </button>
// // //             )}

// // //           </div>

// // //         ) : (

// // //           <div className="apl-grid">

// // //             {filteredProducts.map(
// // //               (product) => {

// // //                 const discountedPrice =
// // //                   product.price -
// // //                   (
// // //                     product.price *
// // //                     (
// // //                       product.discountPercent ||
// // //                       0
// // //                     )
// // //                   ) /
// // //                     100;

// // //                 return (

// // //                   <div
// // //                     key={product.id}
// // //                     className={`apl-card ${
// // //                       product.isActive === false
// // //                         ? "apl-card-out-of-stock"
// // //                         : ""
// // //                     }`}
// // //                   >

// // //                     {/* =================================================
// // //                         IMAGE
// // //                     ================================================= */}

// // //                     <div className="apl-card-image">

// // //                       <img
// // //                         src={`https://a4agroup.eu${product.image}`}
// // //                         alt={product.title}
// // //                         className="apl-image"
// // //                       />

// // //                       <div className="apl-card-badges">

// // //                         {/* STOCK */}

// // //                         {product.isActive === false ? (

// // //                           <span className="apl-badge-stock apl-badge-out">
// // //                             <span className="apl-stock-dot"></span>
// // //                             Out of Stock
// // //                           </span>

// // //                         ) : (

// // //                           <span className="apl-badge-stock apl-badge-active">
// // //                             <span className="apl-stock-dot"></span>
// // //                             Active
// // //                           </span>

// // //                         )}


// // //                         {/* FEATURED */}

// // //                         {product.featured && (

// // //                           <span className="apl-badge-featured">

// // //                             <svg
// // //                               width="10"
// // //                               height="10"
// // //                               viewBox="0 0 10 10"
// // //                               fill="none"
// // //                             >
// // //                               <path
// // //                                 d="M5 0L6.5 3.5L10 4L7.5 6.5L8.5 10L5 8L1.5 10L2.5 6.5L0 4L3.5 3.5L5 0Z"
// // //                                 fill="currentColor"
// // //                               />
// // //                             </svg>

// // //                             Featured

// // //                           </span>

// // //                         )}


// // //                         {/* DISCOUNT */}

// // //                         {product.discountPercent > 0 && (

// // //                           <span className="apl-badge-discount">
// // //                             {product.discountPercent}% OFF
// // //                           </span>

// // //                         )}

// // //                       </div>

// // //                     </div>


// // //                     {/* =================================================
// // //                         CONTENT
// // //                     ================================================= */}

// // //                     <div className="apl-card-content">

// // //                       <span className="apl-category">
// // //                         {product.category}
// // //                       </span>

// // //                       <h3 className="apl-title">
// // //                         {product.title}
// // //                       </h3>


// // //                       <div className="apl-pricing">

// // //                         <span className="apl-price-current">
// // //                           €{discountedPrice.toFixed(0)}
// // //                         </span>

// // //                         {product.discountPercent > 0 && (

// // //                           <span className="apl-price-original">
// // //                             €{product.price}
// // //                           </span>

// // //                         )}

// // //                       </div>


// // //                       {/* ACTIONS */}

// // //                       <div className="apl-actions">

// // //                         <Link
// // //                           to={`/admin/products/edit/${product.id}`}
// // //                           className="apl-btn-edit"
// // //                         >

// // //                           <svg
// // //                             width="14"
// // //                             height="14"
// // //                             viewBox="0 0 14 14"
// // //                             fill="none"
// // //                           >
// // //                             <path
// // //                               d="M10 2l2 2-8 8H2v-2l8-8z"
// // //                               stroke="currentColor"
// // //                               strokeWidth="1.3"
// // //                               strokeLinecap="round"
// // //                               strokeLinejoin="round"
// // //                             />
// // //                           </svg>

// // //                           Edit

// // //                         </Link>


// // //                         <button
// // //                           onClick={() =>
// // //                             deleteProduct(
// // //                               product.id
// // //                             )
// // //                           }
// // //                           className="apl-btn-delete"
// // //                         >

// // //                           <svg
// // //                             width="14"
// // //                             height="14"
// // //                             viewBox="0 0 14 14"
// // //                             fill="none"
// // //                           >
// // //                             <path
// // //                               d="M2 4h10M5 4V2h4v2M4 4v7a1 1 0 001 1h4a1 1 0 001-1V4"
// // //                               stroke="currentColor"
// // //                               strokeWidth="1.3"
// // //                               strokeLinecap="round"
// // //                               strokeLinejoin="round"
// // //                             />
// // //                           </svg>

// // //                           Delete

// // //                         </button>

// // //                       </div>

// // //                     </div>

// // //                   </div>

// // //                 );
// // //               }
// // //             )}

// // //           </div>

// // //         )}

// // //       </div>
// // //     </AdminLayout>
// // //   );
// // // }

// // // export default ProductsList;


// // import { useEffect, useMemo, useState } from "react";
// // import { Link } from "react-router-dom";
// // import api from "../../services/api";
// // import AdminLayout from "./AdminLayout";
// // import "./ProductsList.css";

// // function ProductsList() {
// //   const [products, setProducts] = useState([]);
// //   const [search, setSearch] = useState("");
// //   const [loading, setLoading] = useState(true);

// //   // =====================================================
// //   // FILTERS
// //   // =====================================================

// //   const [stockFilter, setStockFilter] = useState("all");
// //   const [featuredFilter, setFeaturedFilter] = useState("all");
// //   const [categoryFilter, setCategoryFilter] = useState("all");

// //   // Custom Order is now the default
// //   const [sortOption, setSortOption] = useState("custom");

// //   // =====================================================
// //   // DRAG & DROP
// //   // =====================================================

// //   const [draggedProductId, setDraggedProductId] =
// //     useState(null);

// //   const [dragOverProductId, setDragOverProductId] =
// //     useState(null);

// //   const [savingOrder, setSavingOrder] =
// //     useState(false);

// //   // =====================================================
// //   // FETCH PRODUCTS
// //   // =====================================================

// //   useEffect(() => {
// //     fetchProducts();
// //   }, []);

// //   const fetchProducts = async () => {
// //     try {
// //       const { data } = await api.get("/products");

// //       if (Array.isArray(data)) {
// //         setProducts(data);
// //       } else if (Array.isArray(data?.products)) {
// //         setProducts(data.products);
// //       } else {
// //         setProducts([]);
// //       }
// //     } catch (error) {
// //       console.error("FETCH PRODUCTS ERROR:", error);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // =====================================================
// //   // DELETE PRODUCT
// //   // =====================================================

// //   const deleteProduct = async (id) => {
// //     const token = localStorage.getItem("token");

// //     if (
// //       !window.confirm(
// //         "Are you sure you want to delete this product?"
// //       )
// //     ) {
// //       return;
// //     }

// //     try {
// //       await api.delete(`/products/${id}`, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });

// //       await fetchProducts();
// //     } catch (error) {
// //       console.error("DELETE PRODUCT ERROR:", error);
// //     }
// //   };

// //   // =====================================================
// //   // CATEGORIES
// //   // =====================================================

// //   const categories = useMemo(() => {
// //     return [
// //       ...new Set(
// //         products
// //           .map((product) => product.category)
// //           .filter(Boolean)
// //       ),
// //     ].sort((a, b) =>
// //       String(a).localeCompare(String(b))
// //     );
// //   }, [products]);

// //   // =====================================================
// //   // FILTER + SORT PRODUCTS
// //   // =====================================================

// //   const filteredProducts = useMemo(() => {
// //     let result = [...products];

// //     // -------------------------------------------------
// //     // SEARCH
// //     // -------------------------------------------------

// //     const searchValue = search
// //       .trim()
// //       .toLowerCase();

// //     if (searchValue) {
// //       result = result.filter((product) => {
// //         const searchableText = [
// //           product.title,
// //           product.category,
// //           product.description,
// //         ]
// //           .filter(Boolean)
// //           .join(" ")
// //           .toLowerCase();

// //         return searchableText.includes(searchValue);
// //       });
// //     }

// //     // -------------------------------------------------
// //     // STOCK
// //     // -------------------------------------------------

// //     if (stockFilter === "active") {
// //       result = result.filter(
// //         (product) =>
// //           product.isActive !== false
// //       );
// //     }

// //     if (stockFilter === "out_of_stock") {
// //       result = result.filter(
// //         (product) =>
// //           product.isActive === false
// //       );
// //     }

// //     // -------------------------------------------------
// //     // FEATURED
// //     // -------------------------------------------------

// //     if (featuredFilter === "featured") {
// //       result = result.filter(
// //         (product) =>
// //           product.featured === true
// //       );
// //     }

// //     // -------------------------------------------------
// //     // CATEGORY
// //     // -------------------------------------------------

// //     if (categoryFilter !== "all") {
// //       result = result.filter(
// //         (product) =>
// //           product.category === categoryFilter
// //       );
// //     }

// //     // -------------------------------------------------
// //     // SORT
// //     // -------------------------------------------------

// //     result.sort((a, b) => {
// //       switch (sortOption) {

// //         // ⭐ CUSTOM ADMIN ORDER
// //         case "custom":
// //           return (
// //             Number(a.sortOrder ?? 0) -
// //             Number(b.sortOrder ?? 0)
// //           );

// //         // NEWEST
// //         case "newest":
// //           return (
// //             new Date(
// //               b.createdAt || 0
// //             ).getTime() -
// //             new Date(
// //               a.createdAt || 0
// //             ).getTime()
// //           );

// //         // OLDEST
// //         case "oldest":
// //           return (
// //             new Date(
// //               a.createdAt || 0
// //             ).getTime() -
// //             new Date(
// //               b.createdAt || 0
// //             ).getTime()
// //           );

// //         // PRICE LOW
// //         case "price_low":
// //           return (
// //             Number(a.price || 0) -
// //             Number(b.price || 0)
// //           );

// //         // PRICE HIGH
// //         case "price_high":
// //           return (
// //             Number(b.price || 0) -
// //             Number(a.price || 0)
// //           );

// //         // NAME A-Z
// //         case "name_az":
// //           return String(
// //             a.title || ""
// //           ).localeCompare(
// //             String(b.title || "")
// //           );

// //         // NAME Z-A
// //         case "name_za":
// //           return String(
// //             b.title || ""
// //           ).localeCompare(
// //             String(a.title || "")
// //           );

// //         default:
// //           return 0;
// //       }
// //     });

// //     return result;
// //   }, [
// //     products,
// //     search,
// //     stockFilter,
// //     featuredFilter,
// //     categoryFilter,
// //     sortOption,
// //   ]);

// //   // =====================================================
// //   // CAN DRAG PRODUCTS?
// //   // =====================================================

// //   const canDragProducts =
// //     sortOption === "custom" &&
// //     search.trim() === "" &&
// //     stockFilter === "all" &&
// //     featuredFilter === "all" &&
// //     categoryFilter === "all";

// //   // =====================================================
// //   // SAVE PRODUCT ORDER
// //   // =====================================================

// //   const saveProductOrder = async (
// //     reorderedProducts
// //   ) => {
// //     try {
// //       setSavingOrder(true);

// //       const token =
// //         localStorage.getItem("token");

// //       await api.patch(
// //         "/products/orders",
// //         {
// //           products:
// //             reorderedProducts.map(
// //               (product) => ({
// //                 id: product.id,
// //               })
// //             ),
// //         },
// //         {
// //           headers: {
// //             Authorization:
// //               `Bearer ${token}`,
// //           },
// //         }
// //       );

// //     } catch (error) {
// //       console.error(
// //         "SAVE PRODUCT ORDER ERROR:",
// //         error
// //       );

// //       // Restore server order if saving failed
// //       await fetchProducts();

// //       alert(
// //         error?.response?.data?.message ||
// //         "Failed to save product order."
// //       );

// //     } finally {
// //       setSavingOrder(false);
// //     }
// //   };

// //   // =====================================================
// //   // DRAG START
// //   // =====================================================

// //   const handleDragStart = (
// //     event,
// //     productId
// //   ) => {
// //     if (!canDragProducts) {
// //       return;
// //     }

// //     setDraggedProductId(productId);

// //     event.dataTransfer.effectAllowed =
// //       "move";

// //     event.dataTransfer.setData(
// //       "text/plain",
// //       String(productId)
// //     );
// //   };

// //   // =====================================================
// //   // DRAG OVER
// //   // =====================================================

// //   const handleDragOver = (
// //     event,
// //     productId
// //   ) => {
// //     if (!canDragProducts) {
// //       return;
// //     }

// //     event.preventDefault();

// //     event.dataTransfer.dropEffect =
// //       "move";

// //     if (
// //       draggedProductId !== null &&
// //       draggedProductId !== productId
// //     ) {
// //       setDragOverProductId(productId);
// //     }
// //   };

// //   // =====================================================
// //   // DRAG LEAVE
// //   // =====================================================

// //   const handleDragLeave = () => {
// //     setDragOverProductId(null);
// //   };

// //   // =====================================================
// //   // DRAG END
// //   // =====================================================

// //   const handleDragEnd = () => {
// //     setDraggedProductId(null);
// //     setDragOverProductId(null);
// //   };

// //   // =====================================================
// //   // DROP
// //   // =====================================================

// //   const handleDrop = async (
// //     event,
// //     targetProductId
// //   ) => {
// //     event.preventDefault();

// //     if (!canDragProducts) {
// //       return;
// //     }

// //     const draggedId = Number(
// //       event.dataTransfer.getData(
// //         "text/plain"
// //       )
// //     );

// //     setDragOverProductId(null);

// //     if (
// //       !draggedId ||
// //       draggedId === targetProductId
// //     ) {
// //       setDraggedProductId(null);
// //       return;
// //     }

// //     // -----------------------------------------------
// //     // Work from the complete product list
// //     // -----------------------------------------------

// //     const currentList = [...products];

// //     const draggedIndex =
// //       currentList.findIndex(
// //         (product) =>
// //           product.id === draggedId
// //       );

// //     const targetIndex =
// //       currentList.findIndex(
// //         (product) =>
// //           product.id === targetProductId
// //       );

// //     if (
// //       draggedIndex === -1 ||
// //       targetIndex === -1
// //     ) {
// //       setDraggedProductId(null);
// //       return;
// //     }

// //     // -----------------------------------------------
// //     // Reorder
// //     // -----------------------------------------------

// //     const reorderedList = [
// //       ...currentList,
// //     ];

// //     const [draggedProduct] =
// //       reorderedList.splice(
// //         draggedIndex,
// //         1
// //       );

// //     reorderedList.splice(
// //       targetIndex,
// //       0,
// //       draggedProduct
// //     );

// //     // -----------------------------------------------
// //     // Assign new sortOrder
// //     // -----------------------------------------------

// //     const updatedProducts =
// //       reorderedList.map(
// //         (product, index) => ({
// //           ...product,
// //           sortOrder: index + 1,
// //         })
// //       );

// //     // -----------------------------------------------
// //     // Update UI immediately
// //     // -----------------------------------------------

// //     setProducts(
// //       updatedProducts
// //     );

// //     setDraggedProductId(null);

// //     // -----------------------------------------------
// //     // Save database
// //     // -----------------------------------------------

// //     await saveProductOrder(
// //       updatedProducts
// //     );
// //   };

// //   // =====================================================
// //   // CLEAR FILTERS
// //   // =====================================================

// //   const clearFilters = () => {
// //     setSearch("");
// //     setStockFilter("all");
// //     setFeaturedFilter("all");
// //     setCategoryFilter("all");
// //     setSortOption("custom");
// //   };

// //   const hasActiveFilters =
// //     search.trim() !== "" ||
// //     stockFilter !== "all" ||
// //     featuredFilter !== "all" ||
// //     categoryFilter !== "all" ||
// //     sortOption !== "custom";

// //   // =====================================================
// //   // LOADING
// //   // =====================================================

// //   if (loading) {
// //     return (
// //       <AdminLayout>
// //         <div className="apl-loading">
// //           <div className="apl-loading-spinner"></div>

// //           <p>
// //             Loading products...
// //           </p>
// //         </div>
// //       </AdminLayout>
// //     );
// //   }

// //   // =====================================================
// //   // PAGE
// //   // =====================================================

// //   return (
// //     <AdminLayout>
// //       <div className="apl-admin">

// //         {/* =================================================
// //             HEADER
// //         ================================================= */}

// //         <div className="apl-header">

// //           <div className="apl-header-left">

// //             <h1>
// //               Products
// //             </h1>

// //             <p>
// //               Manage all products and categories
// //             </p>

// //           </div>

// //           <Link
// //             to="/admin/products/add"
// //             className="apl-btn-primary"
// //           >

// //             <svg
// //               width="18"
// //               height="18"
// //               viewBox="0 0 18 18"
// //               fill="none"
// //             >

// //               <path
// //                 d="M9 3v12M3 9h12"
// //                 stroke="currentColor"
// //                 strokeWidth="1.8"
// //                 strokeLinecap="round"
// //               />

// //             </svg>

// //             Add Product

// //           </Link>

// //         </div>


// //         {/* =================================================
// //             TOOLBAR
// //         ================================================= */}

// //         <div className="apl-toolbar">

// //           {/* SEARCH */}

// //           <div className="apl-search-wrapper">

// //             <svg
// //               className="apl-search-icon"
// //               width="18"
// //               height="18"
// //               viewBox="0 0 18 18"
// //               fill="none"
// //             >

// //               <circle
// //                 cx="8"
// //                 cy="8"
// //                 r="6"
// //                 stroke="currentColor"
// //                 strokeWidth="1.5"
// //               />

// //               <path
// //                 d="M12.5 12.5L16 16"
// //                 stroke="currentColor"
// //                 strokeWidth="1.5"
// //                 strokeLinecap="round"
// //               />

// //             </svg>

// //             <input
// //               type="text"
// //               placeholder="Search products, category..."
// //               value={search}
// //               onChange={(e) =>
// //                 setSearch(e.target.value)
// //               }
// //               className="apl-search-input"
// //             />

// //           </div>


// //           {/* STOCK */}

// //           <select
// //             value={stockFilter}
// //             onChange={(e) =>
// //               setStockFilter(
// //                 e.target.value
// //               )
// //             }
// //             className="apl-filter-select"
// //           >

// //             <option value="all">
// //               All Stock
// //             </option>

// //             <option value="active">
// //               Active
// //             </option>

// //             <option value="out_of_stock">
// //               Out of Stock
// //             </option>

// //           </select>


// //           {/* FEATURED */}

// //           <select
// //             value={featuredFilter}
// //             onChange={(e) =>
// //               setFeaturedFilter(
// //                 e.target.value
// //               )
// //             }
// //             className="apl-filter-select"
// //           >

// //             <option value="all">
// //               All Products
// //             </option>

// //             <option value="featured">
// //               Featured Only
// //             </option>

// //           </select>


// //           {/* CATEGORY */}

// //           <select
// //             value={categoryFilter}
// //             onChange={(e) =>
// //               setCategoryFilter(
// //                 e.target.value
// //               )
// //             }
// //             className="apl-filter-select"
// //           >

// //             <option value="all">
// //               All Categories
// //             </option>

// //             {categories.map(
// //               (category) => (
// //                 <option
// //                   key={category}
// //                   value={category}
// //                 >
// //                   {category}
// //                 </option>
// //               )
// //             )}

// //           </select>


// //           {/* SORT */}

// //           <select
// //             value={sortOption}
// //             onChange={(e) =>
// //               setSortOption(
// //                 e.target.value
// //               )
// //             }
// //             className="apl-filter-select apl-sort-select"
// //           >

// //             <option value="custom">
// //               Custom Order
// //             </option>

// //             <option value="newest">
// //               Newest First
// //             </option>

// //             <option value="oldest">
// //               Oldest First
// //             </option>

// //             <option value="price_low">
// //               Price: Low to High
// //             </option>

// //             <option value="price_high">
// //               Price: High to Low
// //             </option>

// //             <option value="name_az">
// //               Name: A to Z
// //             </option>

// //             <option value="name_za">
// //               Name: Z to A
// //             </option>

// //           </select>


// //           {/* CLEAR */}

// //           {hasActiveFilters && (
// //             <button
// //               type="button"
// //               className="apl-clear-filters"
// //               onClick={clearFilters}
// //             >
// //               Clear
// //             </button>
// //           )}

// //         </div>


// //         {/* =================================================
// //             CUSTOM ORDER NOTICE
// //         ================================================= */}

// //         {canDragProducts && (
// //           <div className="apl-order-notice">

// //             <div className="apl-order-notice-icon">
// //               ⋮⋮
// //             </div>

// //             <div>
// //               <strong>
// //                 Custom Order
// //               </strong>

// //               <span>
// //                 Drag and drop products to arrange
// //                 their display order.
// //               </span>
// //             </div>

// //             {savingOrder && (
// //               <span className="apl-saving-order">
// //                 Saving...
// //               </span>
// //             )}

// //           </div>
// //         )}


// //         {/* =================================================
// //             RESULTS INFO
// //         ================================================= */}

// //         <div className="apl-results-bar">

// //           <span>
// //             Showing{" "}

// //             <strong>
// //               {filteredProducts.length}
// //             </strong>{" "}

// //             of{" "}

// //             <strong>
// //               {products.length}
// //             </strong>{" "}

// //             products
// //           </span>


// //           {hasActiveFilters && (
// //             <button
// //               type="button"
// //               onClick={clearFilters}
// //               className="apl-reset-link"
// //             >
// //               Reset filters
// //             </button>
// //           )}

// //         </div>


// //         {/* =================================================
// //             PRODUCTS GRID
// //         ================================================= */}

// //         {filteredProducts.length === 0 ? (

// //           <div className="apl-empty">

// //             <svg
// //               width="48"
// //               height="48"
// //               viewBox="0 0 48 48"
// //               fill="none"
// //             >

// //               <path
// //                 d="M12 12l8-4 20 10-8 4-20-10z"
// //                 stroke="currentColor"
// //                 strokeWidth="1.5"
// //                 strokeLinejoin="round"
// //               />

// //               <path
// //                 d="M12 24l8 4 20-10"
// //                 stroke="currentColor"
// //                 strokeWidth="1.5"
// //                 strokeLinejoin="round"
// //               />

// //               <path
// //                 d="M12 36l8 4 20-10"
// //                 stroke="currentColor"
// //                 strokeWidth="1.5"
// //                 strokeLinejoin="round"
// //               />

// //             </svg>

// //             <h3>
// //               No products found
// //             </h3>

// //             <p>
// //               {search ||
// //               stockFilter !== "all" ||
// //               featuredFilter !== "all" ||
// //               categoryFilter !== "all"
// //                 ? "Try adjusting your search or filter options"
// //                 : "Add your first product to get started"}
// //             </p>

// //             {hasActiveFilters && (
// //               <button
// //                 type="button"
// //                 className="apl-empty-reset"
// //                 onClick={
// //                   clearFilters
// //                 }
// //               >
// //                 Clear Filters
// //               </button>
// //             )}

// //           </div>

// //         ) : (

// //           <div className="apl-grid">

// //             {filteredProducts.map(
// //               (product, index) => {

// //                 const discountedPrice =
// //                   Number(product.price || 0) -
// //                   (
// //                     Number(product.price || 0) *
// //                     Number(
// //                       product.discountPercent || 0
// //                     )
// //                   ) /
// //                     100;

// //                 const isDragging =
// //                   draggedProductId ===
// //                   product.id;

// //                 const isDragOver =
// //                   dragOverProductId ===
// //                   product.id;

// //                 return (

// //                   <div
// //                     key={product.id}
// //                     className={`apl-card ${
// //                       product.isActive === false
// //                         ? "apl-card-out-of-stock"
// //                         : ""
// //                     } ${
// //                       canDragProducts
// //                         ? "apl-card-draggable"
// //                         : ""
// //                     } ${
// //                       isDragging
// //                         ? "apl-card-dragging"
// //                         : ""
// //                     } ${
// //                       isDragOver
// //                         ? "apl-card-drag-over"
// //                         : ""
// //                     }`}
// //                     draggable={
// //                       canDragProducts
// //                     }
// //                     onDragStart={(event) =>
// //                       handleDragStart(
// //                         event,
// //                         product.id
// //                       )
// //                     }
// //                     onDragOver={(event) =>
// //                       handleDragOver(
// //                         event,
// //                         product.id
// //                       )
// //                     }
// //                     onDragLeave={
// //                       handleDragLeave
// //                     }
// //                     onDrop={(event) =>
// //                       handleDrop(
// //                         event,
// //                         product.id
// //                       )
// //                     }
// //                     onDragEnd={
// //                       handleDragEnd
// //                     }
// //                   >

// //                     {/* =================================================
// //                         DRAG HANDLE
// //                     ================================================= */}

// //                     {canDragProducts && (
// //                       <div
// //                         className="apl-drag-handle"
// //                         title="Drag to reorder"
// //                       >
// //                         <span>
// //                           ⋮⋮
// //                         </span>
// //                       </div>
// //                     )}


// //                     {/* =================================================
// //                         SORT NUMBER
// //                     ================================================= */}

// //                     {canDragProducts && (
// //                       <div className="apl-sort-number">
// //                         #
// //                         {index + 1}
// //                       </div>
// //                     )}


// //                     {/* =================================================
// //                         IMAGE
// //                     ================================================= */}

// //                     <div className="apl-card-image">

// //                       {product.image ? (

// //                         <img
// //                           src={`https://a4agroup.eu${product.image}`}
// //                           alt={product.title}
// //                           className="apl-image"
// //                         />

// //                       ) : (

// //                         <div className="apl-image-placeholder">
// //                           No image
// //                         </div>

// //                       )}


// //                       <div className="apl-card-badges">

// //                         {/* STOCK */}

// //                         {product.isActive === false ? (

// //                           <span className="apl-badge-stock apl-badge-out">

// //                             <span className="apl-stock-dot"></span>

// //                             Out of Stock

// //                           </span>

// //                         ) : (

// //                           <span className="apl-badge-stock apl-badge-active">

// //                             <span className="apl-stock-dot"></span>

// //                             Active

// //                           </span>

// //                         )}


// //                         {/* FEATURED */}

// //                         {product.featured && (

// //                           <span className="apl-badge-featured">

// //                             <svg
// //                               width="10"
// //                               height="10"
// //                               viewBox="0 0 10 10"
// //                               fill="none"
// //                             >

// //                               <path
// //                                 d="M5 0L6.5 3.5L10 4L7.5 6.5L8.5 10L5 8L1.5 10L2.5 6.5L0 4L3.5 3.5L5 0Z"
// //                                 fill="currentColor"
// //                               />

// //                             </svg>

// //                             Featured

// //                           </span>

// //                         )}


// //                         {/* DISCOUNT */}

// //                         {Number(
// //                           product.discountPercent || 0
// //                         ) > 0 && (

// //                           <span className="apl-badge-discount">

// //                             {product.discountPercent}
// //                             % OFF

// //                           </span>

// //                         )}

// //                       </div>

// //                     </div>


// //                     {/* =================================================
// //                         CONTENT
// //                     ================================================= */}

// //                     <div className="apl-card-content">

// //                       <span className="apl-category">
// //                         {product.category ||
// //                           "Uncategorized"}
// //                       </span>


// //                       <h3 className="apl-title">
// //                         {product.title}
// //                       </h3>


// //                       <div className="apl-pricing">

// //                         <span className="apl-price-current">
// //                           €
// //                           {discountedPrice.toFixed(
// //                             0
// //                           )}
// //                         </span>


// //                         {Number(
// //                           product.discountPercent || 0
// //                         ) > 0 && (

// //                           <span className="apl-price-original">
// //                             €
// //                             {product.price}
// //                           </span>

// //                         )}

// //                       </div>


// //                       {/* =================================================
// //                           ACTIONS
// //                       ================================================= */}

// //                       <div className="apl-actions">

// //                         <Link
// //                           to={`/admin/products/edit/${product.id}`}
// //                           className="apl-btn-edit"
// //                           onClick={(event) => {
// //                             event.stopPropagation();
// //                           }}
// //                         >

// //                           <svg
// //                             width="14"
// //                             height="14"
// //                             viewBox="0 0 14 14"
// //                             fill="none"
// //                           >

// //                             <path
// //                               d="M10 2l2 2-8 8H2v-2l8-8z"
// //                               stroke="currentColor"
// //                               strokeWidth="1.3"
// //                               strokeLinecap="round"
// //                               strokeLinejoin="round"
// //                             />

// //                           </svg>

// //                           Edit

// //                         </Link>


// //                         <button
// //                           type="button"
// //                           onClick={(event) => {
// //                             event.stopPropagation();

// //                             deleteProduct(
// //                               product.id
// //                             );
// //                           }}
// //                           className="apl-btn-delete"
// //                         >

// //                           <svg
// //                             width="14"
// //                             height="14"
// //                             viewBox="0 0 14 14"
// //                             fill="none"
// //                           >

// //                             <path
// //                               d="M2 4h10M5 4V2h4v2M4 4v7a1 1 0 001 1h4a1 1 0 001-1V4"
// //                               stroke="currentColor"
// //                               strokeWidth="1.3"
// //                               strokeLinecap="round"
// //                               strokeLinejoin="round"
// //                             />

// //                           </svg>

// //                           Delete

// //                         </button>

// //                       </div>

// //                     </div>

// //                   </div>

// //                 );
// //               }
// //             )}

// //           </div>

// //         )}

// //       </div>
// //     </AdminLayout>
// //   );
// // }

// // export default ProductsList;









// import {
//   useCallback,
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";
// import { Link } from "react-router-dom";
// import api from "../../services/api";
// import AdminLayout from "./AdminLayout";
// import "./ProductsList.css";

// function ProductsList() {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);

//   // =====================================================
//   // FILTERS
//   // =====================================================

//   const [stockFilter, setStockFilter] =
//     useState("all");

//   const [featuredFilter, setFeaturedFilter] =
//     useState("all");

//   const [categoryFilter, setCategoryFilter] =
//     useState("all");

//   const [sortOption, setSortOption] =
//     useState("custom");

//   // =====================================================
//   // DRAG & DROP
//   // =====================================================

//   const [draggedProductId, setDraggedProductId] =
//     useState(null);

//   const [dragOverProductId, setDragOverProductId] =
//     useState(null);

//   const [savingOrder, setSavingOrder] =
//     useState(false);

//   const dragScrollAnimationRef =
//     useRef(null);

//   const dragPointerYRef =
//     useRef(null);

//   // =====================================================
//   // FETCH PRODUCTS
//   // =====================================================

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const { data } =
//         await api.get("/products");

//       if (Array.isArray(data)) {
//         setProducts(data);
//       } else if (
//         Array.isArray(data?.products)
//       ) {
//         setProducts(data.products);
//       } else {
//         setProducts([]);
//       }
//     } catch (error) {
//       console.error(
//         "FETCH PRODUCTS ERROR:",
//         error
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   // =====================================================
//   // DELETE PRODUCT
//   // =====================================================

//   const deleteProduct = async (id) => {
//     const token =
//       localStorage.getItem("token");

//     if (
//       !window.confirm(
//         "Are you sure you want to delete this product?"
//       )
//     ) {
//       return;
//     }

//     try {
//       await api.delete(
//         `/products/${id}`,
//         {
//           headers: {
//             Authorization:
//               `Bearer ${token}`,
//           },
//         }
//       );

//       await fetchProducts();

//     } catch (error) {
//       console.error(
//         "DELETE PRODUCT ERROR:",
//         error
//       );
//     }
//   };

//   // =====================================================
//   // CATEGORIES
//   // =====================================================

//   const categories = useMemo(() => {
//     return [
//       ...new Set(
//         products
//           .map(
//             (product) =>
//               product.category
//           )
//           .filter(Boolean)
//       ),
//     ].sort((a, b) =>
//       String(a).localeCompare(
//         String(b)
//       )
//     );
//   }, [products]);

//   // =====================================================
//   // FILTER + SORT
//   // =====================================================

//   const filteredProducts = useMemo(() => {
//     let result = [...products];

//     // -------------------------------------------------
//     // SEARCH
//     // -------------------------------------------------

//     const searchValue =
//       search.trim().toLowerCase();

//     if (searchValue) {
//       result = result.filter(
//         (product) => {
//           const searchableText = [
//             product.title,
//             product.category,
//             product.description,
//           ]
//             .filter(Boolean)
//             .join(" ")
//             .toLowerCase();

//           return searchableText.includes(
//             searchValue
//           );
//         }
//       );
//     }

//     // -------------------------------------------------
//     // STOCK
//     // -------------------------------------------------

//     if (
//       stockFilter === "active"
//     ) {
//       result = result.filter(
//         (product) =>
//           product.isActive !== false
//       );
//     }

//     if (
//       stockFilter ===
//       "out_of_stock"
//     ) {
//       result = result.filter(
//         (product) =>
//           product.isActive === false
//       );
//     }

//     // -------------------------------------------------
//     // FEATURED
//     // -------------------------------------------------

//     if (
//       featuredFilter ===
//       "featured"
//     ) {
//       result = result.filter(
//         (product) =>
//           product.featured === true
//       );
//     }

//     // -------------------------------------------------
//     // CATEGORY
//     // -------------------------------------------------

//     if (
//       categoryFilter !== "all"
//     ) {
//       result = result.filter(
//         (product) =>
//           product.category ===
//           categoryFilter
//       );
//     }

//     // -------------------------------------------------
//     // SORT
//     // -------------------------------------------------

//     result.sort((a, b) => {
//       switch (sortOption) {

//         case "custom":
//           return (
//             Number(
//               a.sortOrder ?? 0
//             ) -
//             Number(
//               b.sortOrder ?? 0
//             )
//           );

//         case "newest":
//           return (
//             new Date(
//               b.createdAt || 0
//             ).getTime() -
//             new Date(
//               a.createdAt || 0
//             ).getTime()
//           );

//         case "oldest":
//           return (
//             new Date(
//               a.createdAt || 0
//             ).getTime() -
//             new Date(
//               b.createdAt || 0
//             ).getTime()
//           );

//         case "price_low":
//           return (
//             Number(a.price || 0) -
//             Number(b.price || 0)
//           );

//         case "price_high":
//           return (
//             Number(b.price || 0) -
//             Number(a.price || 0)
//           );

//         case "name_az":
//           return String(
//             a.title || ""
//           ).localeCompare(
//             String(b.title || "")
//           );

//         case "name_za":
//           return String(
//             b.title || ""
//           ).localeCompare(
//             String(a.title || "")
//           );

//         default:
//           return 0;
//       }
//     });

//     return result;

//   }, [
//     products,
//     search,
//     stockFilter,
//     featuredFilter,
//     categoryFilter,
//     sortOption,
//   ]);

//   // =====================================================
//   // DRAGGING ALLOWED ONLY IN TRUE CUSTOM ORDER
//   // =====================================================

//   const canDragProducts =
//     sortOption === "custom" &&
//     search.trim() === "" &&
//     stockFilter === "all" &&
//     featuredFilter === "all" &&
//     categoryFilter === "all";

//   // =====================================================
//   // STOP AUTO SCROLL
//   // =====================================================

//   const stopAutoScroll = useCallback(() => {
//     if (
//       dragScrollAnimationRef.current
//     ) {
//       cancelAnimationFrame(
//         dragScrollAnimationRef.current
//       );

//       dragScrollAnimationRef.current =
//         null;
//     }
//   }, []);

//   // =====================================================
//   // AUTO SCROLL DURING DRAG
//   // =====================================================

//   const runAutoScroll = useCallback(() => {
//     if (!canDragProducts) {
//       stopAutoScroll();
//       return;
//     }

//     if (
//       draggedProductId === null ||
//       dragPointerYRef.current === null
//     ) {
//       stopAutoScroll();
//       return;
//     }

//     const pointerY =
//       dragPointerYRef.current;

//     const viewportHeight =
//       window.innerHeight;

//     /*
//      * Larger zones make it much easier to
//      * scroll while holding a product.
//      */

//     const edgeSize = 150;

//     let scrollAmount = 0;

//     // -----------------------------------------------
//     // TOP EDGE
//     // -----------------------------------------------

//     if (pointerY < edgeSize) {
//       const distanceFromEdge =
//         edgeSize - pointerY;

//       const strength =
//         Math.min(
//           distanceFromEdge /
//             edgeSize,
//           1
//         );

//       scrollAmount =
//         -(
//           4 +
//           strength * 16
//         );
//     }

//     // -----------------------------------------------
//     // BOTTOM EDGE
//     // -----------------------------------------------

//     else if (
//       pointerY >
//       viewportHeight - edgeSize
//     ) {
//       const distanceFromEdge =
//         pointerY -
//         (viewportHeight - edgeSize);

//       const strength =
//         Math.min(
//           distanceFromEdge /
//             edgeSize,
//           1
//         );

//       scrollAmount =
//         4 +
//         strength * 16;
//     }

//     // -----------------------------------------------
//     // SCROLL
//     // -----------------------------------------------

//     if (scrollAmount !== 0) {
//       window.scrollBy(
//         0,
//         scrollAmount
//       );
//     }

//     dragScrollAnimationRef.current =
//       requestAnimationFrame(
//         runAutoScroll
//       );

//   }, [
//     canDragProducts,
//     draggedProductId,
//     stopAutoScroll,
//   ]);

//   // =====================================================
//   // START AUTO SCROLL
//   // =====================================================

//   const startAutoScroll = useCallback(
//     (clientY) => {
//       dragPointerYRef.current =
//         clientY;

//       if (
//         !dragScrollAnimationRef.current
//       ) {
//         dragScrollAnimationRef.current =
//           requestAnimationFrame(
//             runAutoScroll
//           );
//       }
//     },
//     [runAutoScroll]
//   );

//   // =====================================================
//   // GLOBAL POINTER POSITION
//   //
//   // This is what allows the page to keep
//   // scrolling even while the native drag
//   // event isn't firing frequently.
//   // =====================================================

//   useEffect(() => {
//     if (
//       draggedProductId === null
//     ) {
//       return;
//     }

//     const handlePointerMove =
//       (event) => {
//         dragPointerYRef.current =
//           event.clientY;
//       };

//     window.addEventListener(
//       "dragover",
//       handlePointerMove
//     );

//     window.addEventListener(
//       "mousemove",
//       handlePointerMove
//     );

//     return () => {
//       window.removeEventListener(
//         "dragover",
//         handlePointerMove
//       );

//       window.removeEventListener(
//         "mousemove",
//         handlePointerMove
//       );
//     };
//   }, [draggedProductId]);

//   // =====================================================
//   // CLEANUP AUTO SCROLL
//   // =====================================================

//   useEffect(() => {
//     return () => {
//       stopAutoScroll();
//     };
//   }, [stopAutoScroll]);

//   // =====================================================
//   // SAVE PRODUCT ORDER
//   // =====================================================

//   const saveProductOrder =
//     async (reorderedProducts) => {
//       try {
//         setSavingOrder(true);

//         const token =
//           localStorage.getItem(
//             "token"
//           );

//         await api.patch(
//           "/products/orders",
//           {
//             products:
//               reorderedProducts.map(
//                 (product) => ({
//                   id: product.id,
//                 })
//               ),
//           },
//           {
//             headers: {
//               Authorization:
//                 `Bearer ${token}`,
//             },
//           }
//         );

//       } catch (error) {

//         console.error(
//           "SAVE PRODUCT ORDER ERROR:",
//           error
//         );

//         /*
//          * If saving fails, restore
//          * the actual server order.
//          */

//         await fetchProducts();

//         alert(
//           error?.response?.data
//             ?.message ||
//           "Failed to save product order."
//         );

//       } finally {
//         setSavingOrder(false);
//       }
//     };

//   // =====================================================
//   // DRAG START
//   // =====================================================

//   const handleDragStart = (
//     event,
//     productId
//   ) => {
//     if (!canDragProducts) {
//       return;
//     }

//     setDraggedProductId(
//       productId
//     );

//     setDragOverProductId(null);

//     dragPointerYRef.current =
//       event.clientY;

//     event.dataTransfer.effectAllowed =
//       "move";

//     event.dataTransfer.setData(
//       "text/plain",
//       String(productId)
//     );

//     /*
//      * Start scrolling immediately
//      * if the pointer is near an edge.
//      */

//     startAutoScroll(
//       event.clientY
//     );
//   };

//   // =====================================================
//   // DRAG OVER
//   // =====================================================

//   const handleDragOver = (
//     event,
//     productId
//   ) => {
//     if (!canDragProducts) {
//       return;
//     }

//     event.preventDefault();

//     event.dataTransfer.dropEffect =
//       "move";

//     dragPointerYRef.current =
//       event.clientY;

//     if (
//       draggedProductId !==
//       productId
//     ) {
//       setDragOverProductId(
//         productId
//       );
//     }

//     startAutoScroll(
//       event.clientY
//     );
//   };

//   // =====================================================
//   // DRAG ENTER
//   // =====================================================

//   const handleDragEnter = (
//     event,
//     productId
//   ) => {
//     if (!canDragProducts) {
//       return;
//     }

//     event.preventDefault();

//     dragPointerYRef.current =
//       event.clientY;

//     if (
//       draggedProductId !==
//       productId
//     ) {
//       setDragOverProductId(
//         productId
//       );
//     }

//     startAutoScroll(
//       event.clientY
//     );
//   };

//   // =====================================================
//   // DRAG LEAVE
//   // =====================================================

//   const handleDragLeave = (
//     event
//   ) => {
//     /*
//      * Don't immediately clear everything
//      * when moving between children inside
//      * the same card.
//      */

//     if (
//       event.currentTarget.contains(
//         event.relatedTarget
//       )
//     ) {
//       return;
//     }

//     setDragOverProductId(null);
//   };

//   // =====================================================
//   // DROP
//   // =====================================================

//   const handleDrop = async (
//     event,
//     targetProductId
//   ) => {
//     event.preventDefault();

//     if (!canDragProducts) {
//       return;
//     }

//     stopAutoScroll();

//     dragPointerYRef.current =
//       null;

//     const draggedId = Number(
//       event.dataTransfer.getData(
//         "text/plain"
//       )
//     );

//     setDragOverProductId(null);

//     if (
//       !draggedId ||
//       draggedId === targetProductId
//     ) {
//       setDraggedProductId(null);
//       return;
//     }

//     // -----------------------------------------------
//     // COMPLETE PRODUCT LIST
//     // -----------------------------------------------

//     const currentList = [
//       ...products,
//     ];

//     const draggedIndex =
//       currentList.findIndex(
//         (product) =>
//           product.id === draggedId
//       );

//     const targetIndex =
//       currentList.findIndex(
//         (product) =>
//           product.id ===
//           targetProductId
//       );

//     if (
//       draggedIndex === -1 ||
//       targetIndex === -1
//     ) {
//       setDraggedProductId(null);
//       return;
//     }

//     // -----------------------------------------------
//     // REORDER
//     // -----------------------------------------------

//     const reorderedList = [
//       ...currentList,
//     ];

//     const [
//       draggedProduct,
//     ] =
//       reorderedList.splice(
//         draggedIndex,
//         1
//       );

//     reorderedList.splice(
//       targetIndex,
//       0,
//       draggedProduct
//     );

//     // -----------------------------------------------
//     // NEW SORT ORDER
//     // -----------------------------------------------

//     const updatedProducts =
//       reorderedList.map(
//         (product, index) => ({
//           ...product,
//           sortOrder:
//             index + 1,
//         })
//       );

//     // -----------------------------------------------
//     // UPDATE UI IMMEDIATELY
//     // -----------------------------------------------

//     setProducts(
//       updatedProducts
//     );

//     setDraggedProductId(null);

//     // -----------------------------------------------
//     // SAVE DATABASE
//     // -----------------------------------------------

//     await saveProductOrder(
//       updatedProducts
//     );
//   };

//   // =====================================================
//   // DRAG END
//   // =====================================================

//   const handleDragEnd = () => {
//     stopAutoScroll();

//     dragPointerYRef.current =
//       null;

//     setDraggedProductId(null);
//     setDragOverProductId(null);
//   };

//   // =====================================================
//   // CLEAR FILTERS
//   // =====================================================

//   const clearFilters = () => {
//     setSearch("");
//     setStockFilter("all");
//     setFeaturedFilter("all");
//     setCategoryFilter("all");
//     setSortOption("custom");
//   };

//   const hasActiveFilters =
//     search.trim() !== "" ||
//     stockFilter !== "all" ||
//     featuredFilter !== "all" ||
//     categoryFilter !== "all" ||
//     sortOption !== "custom";

//   // =====================================================
//   // LOADING
//   // =====================================================

//   if (loading) {
//     return (
//       <AdminLayout>
//         <div className="apl-loading">

//           <div className="apl-loading-spinner"></div>

//           <p>
//             Loading products...
//           </p>

//         </div>
//       </AdminLayout>
//     );
//   }

//   // =====================================================
//   // PAGE
//   // =====================================================

//   return (
//     <AdminLayout>

//       <div className="apl-admin">

//         {/* =================================================
//             HEADER
//         ================================================= */}

//         <div className="apl-header">

//           <div className="apl-header-left">

//             <h1>
//               Products
//             </h1>

//             <p>
//               Manage all products and categories
//             </p>

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


//         {/* =================================================
//             TOOLBAR
//         ================================================= */}

//         <div className="apl-toolbar">

//           {/* SEARCH */}

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
//               placeholder="Search products, category..."
//               value={search}
//               onChange={(event) =>
//                 setSearch(
//                   event.target.value
//                 )
//               }
//               className="apl-search-input"
//             />

//           </div>


//           {/* STOCK */}

//           <select
//             value={stockFilter}
//             onChange={(event) =>
//               setStockFilter(
//                 event.target.value
//               )
//             }
//             className="apl-filter-select"
//           >

//             <option value="all">
//               All Stock
//             </option>

//             <option value="active">
//               Active
//             </option>

//             <option value="out_of_stock">
//               Out of Stock
//             </option>

//           </select>


//           {/* FEATURED */}

//           <select
//             value={featuredFilter}
//             onChange={(event) =>
//               setFeaturedFilter(
//                 event.target.value
//               )
//             }
//             className="apl-filter-select"
//           >

//             <option value="all">
//               All Products
//             </option>

//             <option value="featured">
//               Featured Only
//             </option>

//           </select>


//           {/* CATEGORY */}

//           <select
//             value={categoryFilter}
//             onChange={(event) =>
//               setCategoryFilter(
//                 event.target.value
//               )
//             }
//             className="apl-filter-select"
//           >

//             <option value="all">
//               All Categories
//             </option>

//             {categories.map(
//               (category) => (
//                 <option
//                   key={category}
//                   value={category}
//                 >
//                   {category}
//                 </option>
//               )
//             )}

//           </select>


//           {/* SORT */}

//           <select
//             value={sortOption}
//             onChange={(event) =>
//               setSortOption(
//                 event.target.value
//               )
//             }
//             className="apl-filter-select"
//           >

//             <option value="custom">
//               Custom Order
//             </option>

//             <option value="newest">
//               Newest First
//             </option>

//             <option value="oldest">
//               Oldest First
//             </option>

//             <option value="price_low">
//               Price: Low to High
//             </option>

//             <option value="price_high">
//               Price: High to Low
//             </option>

//             <option value="name_az">
//               Name: A to Z
//             </option>

//             <option value="name_za">
//               Name: Z to A
//             </option>

//           </select>


//           {/* CLEAR */}

//           {hasActiveFilters && (
//             <button
//               type="button"
//               className="apl-clear-filters"
//               onClick={clearFilters}
//             >
//               Clear
//             </button>
//           )}

//         </div>


//         {/* =================================================
//             CUSTOM ORDER INFORMATION
//         ================================================= */}

//         {canDragProducts && (
//           <div className="apl-order-notice">

//             <div className="apl-order-notice-icon">
//               ⋮⋮
//             </div>

//             <div className="apl-order-notice-content">

//               <strong>
//                 Custom Order
//               </strong>

//               <span>
//                 Drag and drop products to arrange
//                 their display order.
//               </span>

//             </div>

//             {savingOrder && (
//               <span className="apl-saving-order">
//                 Saving order...
//               </span>
//             )}

//           </div>
//         )}


//         {/* =================================================
//             RESULTS BAR
//         ================================================= */}

//         <div className="apl-results-bar">

//           <span>

//             Showing{" "}

//             <strong>
//               {filteredProducts.length}
//             </strong>{" "}

//             of{" "}

//             <strong>
//               {products.length}
//             </strong>{" "}

//             products

//           </span>

//           {hasActiveFilters && (
//             <button
//               type="button"
//               onClick={clearFilters}
//               className="apl-reset-link"
//             >
//               Reset filters
//             </button>
//           )}

//         </div>


//         {/* =================================================
//             PRODUCTS
//         ================================================= */}

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

//             <h3>
//               No products found
//             </h3>

//             <p>
//               {search ||
//               stockFilter !== "all" ||
//               featuredFilter !== "all" ||
//               categoryFilter !== "all"
//                 ? "Try adjusting your search or filter options"
//                 : "Add your first product to get started"}
//             </p>

//             {hasActiveFilters && (
//               <button
//                 type="button"
//                 className="apl-empty-reset"
//                 onClick={clearFilters}
//               >
//                 Clear Filters
//               </button>
//             )}

//           </div>

//         ) : (

//           <div className="apl-grid">

//             {filteredProducts.map(
//               (product, index) => {

//                 const discountedPrice =
//                   Number(product.price || 0) -
//                   (
//                     Number(product.price || 0) *
//                     Number(
//                       product.discountPercent || 0
//                     )
//                   ) /
//                     100;

//                 const isDragging =
//                   draggedProductId ===
//                   product.id;

//                 const isDragOver =
//                   dragOverProductId ===
//                   product.id;

//                 return (

//                   <div
//                     key={product.id}
//                     className={`
//                       apl-card
//                       ${
//                         product.isActive === false
//                           ? "apl-card-out-of-stock"
//                           : ""
//                       }
//                       ${
//                         canDragProducts
//                           ? "apl-card-draggable"
//                           : ""
//                       }
//                       ${
//                         isDragging
//                           ? "apl-card-dragging"
//                           : ""
//                       }
//                       ${
//                         isDragOver
//                           ? "apl-card-drag-over"
//                           : ""
//                       }
//                     `}
//                     draggable={
//                       canDragProducts
//                     }
//                     onDragStart={(event) =>
//                       handleDragStart(
//                         event,
//                         product.id
//                       )
//                     }
//                     onDragEnter={(event) =>
//                       handleDragEnter(
//                         event,
//                         product.id
//                       )
//                     }
//                     onDragOver={(event) =>
//                       handleDragOver(
//                         event,
//                         product.id
//                       )
//                     }
//                     onDragLeave={
//                       handleDragLeave
//                     }
//                     onDrop={(event) =>
//                       handleDrop(
//                         event,
//                         product.id
//                       )
//                     }
//                     onDragEnd={
//                       handleDragEnd
//                     }
//                   >

//                     {/* =================================================
//                         DRAG HANDLE
//                     ================================================= */}

//                     {canDragProducts && (
//                       <div
//                         className="apl-drag-handle"
//                         title="Drag to reorder"
//                         onMouseDown={(event) =>
//                           event.stopPropagation()
//                         }
//                       >

//                         <span>
//                           ⋮⋮
//                         </span>

//                       </div>
//                     )}


//                     {/* =================================================
//                         ORDER NUMBER
//                     ================================================= */}

//                     {canDragProducts && (
//                       <div className="apl-sort-number">
//                         #{index + 1}
//                       </div>
//                     )}


//                     {/* =================================================
//                         IMAGE
//                     ================================================= */}

//                     <div className="apl-card-image">

//                       {product.image ? (

//                         <img
//                           src={`https://a4agroup.eu${product.image}`}
//                           alt={product.title}
//                           className="apl-image"
//                           draggable="false"
//                         />

//                       ) : (

//                         <div className="apl-image-placeholder">
//                           No image
//                         </div>

//                       )}


//                       {/* BADGES */}

//                       <div className="apl-card-badges">

//                         {/* STOCK */}

//                         {product.isActive === false ? (

//                           <span className="apl-badge-stock apl-badge-out">

//                             <span className="apl-stock-dot"></span>

//                             Out of Stock

//                           </span>

//                         ) : (

//                           <span className="apl-badge-stock apl-badge-active">

//                             <span className="apl-stock-dot"></span>

//                             Active

//                           </span>

//                         )}


//                         {/* FEATURED */}

//                         {product.featured && (

//                           <span className="apl-badge-featured">

//                             <svg
//                               width="10"
//                               height="10"
//                               viewBox="0 0 10 10"
//                               fill="none"
//                             >

//                               <path
//                                 d="M5 0L6.5 3.5L10 4L7.5 6.5L8.5 10L5 8L1.5 10L2.5 6.5L0 4L3.5 3.5L5 0Z"
//                                 fill="currentColor"
//                               />

//                             </svg>

//                             Featured

//                           </span>

//                         )}


//                         {/* DISCOUNT */}

//                         {Number(
//                           product.discountPercent || 0
//                         ) > 0 && (

//                           <span className="apl-badge-discount">

//                             {product.discountPercent}
//                             % OFF

//                           </span>

//                         )}

//                       </div>

//                     </div>


//                     {/* =================================================
//                         CONTENT
//                     ================================================= */}

//                     <div className="apl-card-content">

//                       <span className="apl-category">
//                         {product.category ||
//                           "Uncategorized"}
//                       </span>


//                       <h3 className="apl-title">
//                         {product.title}
//                       </h3>


//                       <div className="apl-pricing">

//                         <span className="apl-price-current">

//                           €
//                           {discountedPrice.toFixed(
//                             0
//                           )}

//                         </span>


//                         {Number(
//                           product.discountPercent || 0
//                         ) > 0 && (

//                           <span className="apl-price-original">

//                             €
//                             {product.price}

//                           </span>

//                         )}

//                       </div>


//                       {/* ACTIONS */}

//                       <div className="apl-actions">

//                         <Link
//                           to={`/admin/products/edit/${product.id}`}
//                           className="apl-btn-edit"
//                           onClick={(event) =>
//                             event.stopPropagation()
//                           }
//                         >

//                           <svg
//                             width="14"
//                             height="14"
//                             viewBox="0 0 14 14"
//                             fill="none"
//                           >

//                             <path
//                               d="M10 2l2 2-8 8H2v-2l8-8z"
//                               stroke="currentColor"
//                               strokeWidth="1.3"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />

//                           </svg>

//                           Edit

//                         </Link>


//                         <button
//                           type="button"
//                           onClick={(event) => {
//                             event.stopPropagation();

//                             deleteProduct(
//                               product.id
//                             );
//                           }}
//                           className="apl-btn-delete"
//                         >

//                           <svg
//                             width="14"
//                             height="14"
//                             viewBox="0 0 14 14"
//                             fill="none"
//                           >

//                             <path
//                               d="M2 4h10M5 4V2h4v2M4 4v7a1 1 0 001 1h4a1 1 0 001-1V4"
//                               stroke="currentColor"
//                               strokeWidth="1.3"
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />

//                           </svg>

//                           Delete

//                         </button>

//                       </div>

//                     </div>

//                   </div>
//                 );
//               }
//             )}

//           </div>

//         )}

//       </div>

//     </AdminLayout>
//   );
// }

// export default ProductsList;


import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./ProductsList.css";

function ProductsList() {
  // =====================================================
  // PRODUCTS
  // =====================================================

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // =====================================================
  // FILTERS
  // =====================================================

  const [stockFilter, setStockFilter] = useState("all");
  const [featuredFilter, setFeaturedFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  // IMPORTANT:
  // custom = database sortOrder
  const [sortOption, setSortOption] = useState("custom");

  // =====================================================
  // DRAG STATE
  // =====================================================

  const [draggedProductId, setDraggedProductId] = useState(null);
  const [dragOverProductId, setDragOverProductId] = useState(null);
  const [savingOrder, setSavingOrder] = useState(false);

  const gridRef = useRef(null);

  const dragStateRef = useRef({
    active: false,
    productId: null,
    pointerId: null,
    x: 0,
    y: 0,
  });

  const scrollAnimationRef = useRef(null);

  // =====================================================
  // FETCH PRODUCTS
  // =====================================================

  const fetchProducts = useCallback(async () => {
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
      console.error("Failed to fetch products:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

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

      await fetchProducts();
    } catch (error) {
      console.error("Delete product error:", error);
      alert(
        error?.response?.data?.message ||
          "Failed to delete product."
      );
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
  // FILTER + SORT
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

        return searchableText.includes(searchValue);
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
          product.category === categoryFilter
      );
    }

    // -------------------------------------------------
    // SORT
    // -------------------------------------------------

    result.sort((a, b) => {
      switch (sortOption) {
        case "newest":
          return (
            new Date(b.createdAt || 0).getTime() -
            new Date(a.createdAt || 0).getTime()
          );

        case "oldest":
          return (
            new Date(a.createdAt || 0).getTime() -
            new Date(b.createdAt || 0).getTime()
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

        case "custom":
        default:
          return (
            Number(a.sortOrder ?? 999999) -
            Number(b.sortOrder ?? 999999)
          );
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
  // FILTER STATE
  // =====================================================

  const hasActiveFilters =
    search.trim() !== "" ||
    stockFilter !== "all" ||
    featuredFilter !== "all" ||
    categoryFilter !== "all";

  const clearFilters = () => {
    setSearch("");
    setStockFilter("all");
    setFeaturedFilter("all");
    setCategoryFilter("all");
    setSortOption("custom");
  };

  // =====================================================
  // CAN DRAG?
  // =====================================================

  /*
    IMPORTANT:
    Dragging is enabled only in Custom Order mode
    and when no search/filter is active.

    This prevents accidentally changing the global
    order while looking at a filtered subset.
  */

  const canDrag =
    sortOption === "custom" &&
    !hasActiveFilters;

  // =====================================================
  // GET ACTUAL SCROLL CONTAINER
  // =====================================================

  const getScrollParent = (element) => {
    if (!element) {
      return document.scrollingElement;
    }

    let parent = element.parentElement;

    while (
      parent &&
      parent !== document.body &&
      parent !== document.documentElement
    ) {
      const style = window.getComputedStyle(parent);

      const overflowY = style.overflowY;

      const canScroll =
        (overflowY === "auto" ||
          overflowY === "scroll" ||
          overflowY === "overlay") &&
        parent.scrollHeight > parent.clientHeight;

      if (canScroll) {
        return parent;
      }

      parent = parent.parentElement;
    }

    return document.scrollingElement || document.documentElement;
  };

  // =====================================================
  // AUTO SCROLL
  // =====================================================

  const stopAutoScroll = useCallback(() => {
    if (scrollAnimationRef.current) {
      cancelAnimationFrame(
        scrollAnimationRef.current
      );

      scrollAnimationRef.current = null;
    }
  }, []);

  const autoScroll = useCallback(() => {
    if (!dragStateRef.current.active) {
      stopAutoScroll();
      return;
    }

    const grid = gridRef.current;

    if (!grid) {
      stopAutoScroll();
      return;
    }

    const pointerY =
      dragStateRef.current.y;

    const scrollParent =
      getScrollParent(grid);

    const isDocument =
      scrollParent ===
        document.documentElement ||
      scrollParent ===
        document.body ||
      scrollParent ===
        document.scrollingElement;

    let top;
    let bottom;

    if (isDocument) {
      top = 0;
      bottom = window.innerHeight;
    } else {
      const rect =
        scrollParent.getBoundingClientRect();

      top = rect.top;
      bottom = rect.bottom;
    }

    const edgeSize = 110;
    const maxSpeed = 18;

    let speed = 0;

    // Scroll UP
    if (pointerY < top + edgeSize) {
      const distance =
        Math.max(
          0,
          pointerY - top
        );

      const intensity =
        1 -
        distance / edgeSize;

      speed =
        -Math.ceil(
          maxSpeed * intensity
        );
    }

    // Scroll DOWN
    if (pointerY > bottom - edgeSize) {
      const distance =
        Math.max(
          0,
          bottom - pointerY
        );

      const intensity =
        1 -
        distance / edgeSize;

      speed =
        Math.ceil(
          maxSpeed * intensity
        );
    }

    if (speed !== 0) {
      if (isDocument) {
        window.scrollBy({
          top: speed,
          behavior: "auto",
        });
      } else {
        scrollParent.scrollTop += speed;
      }
    }

    scrollAnimationRef.current =
      requestAnimationFrame(autoScroll);
  }, [stopAutoScroll]);

  const startAutoScroll = useCallback(() => {
    if (
      scrollAnimationRef.current
    ) {
      return;
    }

    scrollAnimationRef.current =
      requestAnimationFrame(autoScroll);
  }, [autoScroll]);

  // =====================================================
  // FIND PRODUCT UNDER POINTER
  // =====================================================

  const findProductAtPoint = (
    x,
    y
  ) => {
    const element =
      document.elementFromPoint(
        x,
        y
      );

    if (!element) {
      return null;
    }

    const card =
      element.closest(
        "[data-product-id]"
      );

    if (!card) {
      return null;
    }

    const id = Number(
      card.getAttribute(
        "data-product-id"
      )
    );

    return Number.isFinite(id)
      ? id
      : null;
  };

  // =====================================================
  // POINTER MOVE
  // =====================================================

  useEffect(() => {
    if (!draggedProductId) {
      return undefined;
    }

    const handlePointerMove = (event) => {
      if (
        !dragStateRef.current.active
      ) {
        return;
      }

      dragStateRef.current.x =
        event.clientX;

      dragStateRef.current.y =
        event.clientY;

      const targetId =
        findProductAtPoint(
          event.clientX,
          event.clientY
        );

      if (
        targetId &&
        targetId !==
          draggedProductId
      ) {
        setDragOverProductId(
          targetId
        );
      } else if (
        targetId ===
        draggedProductId
      ) {
        setDragOverProductId(
          null
        );
      }

      startAutoScroll();

      event.preventDefault();
    };

    const handlePointerUp = () => {
      finishDrag();
    };

    document.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: false,
      }
    );

    document.addEventListener(
      "pointerup",
      handlePointerUp
    );

    document.addEventListener(
      "pointercancel",
      handlePointerUp
    );

    return () => {
      document.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      document.removeEventListener(
        "pointerup",
        handlePointerUp
      );

      document.removeEventListener(
        "pointercancel",
        handlePointerUp
      );
    };
  }, [
    draggedProductId,
    startAutoScroll,
  ]);

  // =====================================================
  // FINISH DRAG
  // =====================================================

  const finishDrag = async () => {
    const state =
      dragStateRef.current;

    if (!state.active) {
      return;
    }

    const sourceId =
      state.productId;

    const targetId =
      dragOverProductId;

    state.active = false;
    state.productId = null;
    state.pointerId = null;

    stopAutoScroll();

    setDraggedProductId(null);
    setDragOverProductId(null);

    document.body.style.userSelect =
      "";
    document.body.style.cursor = "";

    if (
      !sourceId ||
      !targetId ||
      sourceId === targetId
    ) {
      return;
    }

    const sourceIndex =
      products.findIndex(
        (product) =>
          Number(product.id) ===
          Number(sourceId)
      );

    const targetIndex =
      products.findIndex(
        (product) =>
          Number(product.id) ===
          Number(targetId)
      );

    if (
      sourceIndex === -1 ||
      targetIndex === -1
    ) {
      return;
    }

    // -------------------------------------------------
    // CREATE NEW ORDER
    // -------------------------------------------------

    const reordered = [
      ...products,
    ];

    const [
      movedProduct,
    ] = reordered.splice(
      sourceIndex,
      1
    );

    reordered.splice(
      targetIndex,
      0,
      movedProduct
    );

    // -------------------------------------------------
    // ASSIGN SORT ORDER
    // -------------------------------------------------

    const updatedProducts =
      reordered.map(
        (product, index) => ({
          ...product,
          sortOrder: index + 1,
        })
      );

    // -------------------------------------------------
    // OPTIMISTIC UPDATE
    // -------------------------------------------------

    setProducts(
      updatedProducts
    );

    // -------------------------------------------------
    // SAVE TO DATABASE
    // -------------------------------------------------

    await saveProductOrder(
      updatedProducts
    );
  };

  // =====================================================
  // SAVE PRODUCT ORDER
  // =====================================================

  const saveProductOrder =
    async (orderedProducts) => {
      setSavingOrder(true);

      const token =
        localStorage.getItem(
          "token"
        );

      try {
        await api.patch(
          "/products/orders",
          {
            products:
              orderedProducts.map(
                (
                  product,
                  index
                ) => ({
                  id: Number(
                    product.id
                  ),
                  sortOrder:
                    index + 1,
                })
              ),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (error) {
        console.error(
          "Failed to save product order:",
          error
        );

        alert(
          error?.response?.data?.message ||
            "Failed to save product order."
        );

        // Restore server order
        await fetchProducts();
      } finally {
        setSavingOrder(false);
      }
    };

  // =====================================================
  // START DRAG
  // =====================================================

  const handleDragStart = (
    event,
    productId
  ) => {
    if (!canDrag) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    dragStateRef.current = {
      active: true,
      productId: Number(productId),
      pointerId:
        event.pointerId,
      x: event.clientX,
      y: event.clientY,
    };

    setDraggedProductId(
      Number(productId)
    );

    setDragOverProductId(
      null
    );

    document.body.style.userSelect =
      "none";

    document.body.style.cursor =
      "grabbing";

    startAutoScroll();
  };

  // =====================================================
  // CLEANUP DRAG ON UNMOUNT
  // =====================================================

  useEffect(() => {
    return () => {
      stopAutoScroll();

      document.body.style.userSelect =
        "";
      document.body.style.cursor =
        "";
    };
  }, [stopAutoScroll]);

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <AdminLayout>
        <div className="apl-loading">
          <div className="apl-loading-spinner" />
          <p>
            Loading products...
          </p>
        </div>
      </AdminLayout>
    );
  }

  // =====================================================
  // PAGE
  // =====================================================

  return (
    <AdminLayout>
      <div
        className={`apl-admin ${
          draggedProductId
            ? "apl-is-dragging"
            : ""
        }`}
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="apl-header">
          <div className="apl-header-left">
            <h1>
              Products
            </h1>

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
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="apl-search-input"
            />
          </div>

          {/* STOCK */}

          <select
            className="apl-filter-select"
            value={stockFilter}
            onChange={(e) =>
              setStockFilter(
                e.target.value
              )
            }
          >
            <option value="all">
              All Stock
            </option>

            <option value="active">
              In Stock
            </option>

            <option value="out_of_stock">
              Out of Stock
            </option>
          </select>

          {/* FEATURED */}

          <select
            className="apl-filter-select"
            value={featuredFilter}
            onChange={(e) =>
              setFeaturedFilter(
                e.target.value
              )
            }
          >
            <option value="all">
              All Products
            </option>

            <option value="featured">
              Featured
            </option>
          </select>

          {/* CATEGORY */}

          <select
            className="apl-filter-select"
            value={categoryFilter}
            onChange={(e) =>
              setCategoryFilter(
                e.target.value
              )
            }
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
            className={`apl-filter-select ${
              sortOption === "custom"
                ? "apl-custom-sort-active"
                : ""
            }`}
            value={sortOption}
            onChange={(e) =>
              setSortOption(
                e.target.value
              )
            }
          >
            <option value="custom">
              Custom Order
            </option>

            <option value="newest">
              Newest
            </option>

            <option value="oldest">
              Oldest
            </option>

            <option value="price_low">
              Price: Low → High
            </option>

            <option value="price_high">
              Price: High → Low
            </option>

            <option value="name_az">
              Name: A → Z
            </option>

            <option value="name_za">
              Name: Z → A
            </option>
          </select>

          {/* CLEAR */}

          {hasActiveFilters && (
            <button
              type="button"
              className="apl-clear-filters"
              onClick={
                clearFilters
              }
            >
              Clear
            </button>
          )}
        </div>

        {/* =================================================
            CUSTOM ORDER NOTICE
        ================================================= */}

        {sortOption ===
          "custom" && (
          <div className="apl-order-notice">
            <div className="apl-order-notice-icon">
              ⋮⋮
            </div>

            <div className="apl-order-notice-content">
              <strong>
                Custom product order
              </strong>

              <span>
                {canDrag
                  ? "Press and hold the handle on a product, then drag it to a new position."
                  : "Clear search and filters to rearrange products."}
              </span>
            </div>

            {savingOrder && (
              <span className="apl-saving-order">
                Saving order...
              </span>
            )}
          </div>
        )}

        {/* =================================================
            RESULTS
        ================================================= */}

        <div className="apl-results-bar">
          <span>
            Showing{" "}
            <strong>
              {
                filteredProducts.length
              }
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
              onClick={
                clearFilters
              }
              className="apl-reset-link"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* =================================================
            PRODUCTS
        ================================================= */}

        {filteredProducts.length ===
        0 ? (
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
              {hasActiveFilters
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
          <div
            ref={gridRef}
            className={`apl-grid ${
              draggedProductId
                ? "apl-grid-dragging"
                : ""
            }`}
          >
            {filteredProducts.map(
              (product, index) => {
                const discountedPrice =
                  Number(
                    product.price || 0
                  ) -
                  (Number(
                    product.price || 0
                  ) *
                    Number(
                      product.discountPercent ||
                        0
                    )) /
                    100;

                const isDragging =
                  Number(
                    draggedProductId
                  ) ===
                  Number(product.id);

                const isDropTarget =
                  Number(
                    dragOverProductId
                  ) ===
                  Number(product.id);

                return (
                  <div
                    key={product.id}
                    data-product-id={
                      product.id
                    }
                    className={[
                      "apl-card",
                      "apl-card-drop-target",
                      product.isActive ===
                      false
                        ? "apl-card-out-of-stock"
                        : "",
                      isDragging
                        ? "apl-card-dragging"
                        : "",
                      isDropTarget
                        ? "apl-card-drag-over"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                  >
                    {/* =================================================
                        DRAG HANDLE
                    ================================================= */}

                    {sortOption ===
                      "custom" && (
                      <button
                        type="button"
                        className="apl-drag-handle"
                        disabled={!canDrag}
                        aria-label={`Drag ${product.title}`}
                        title={
                          canDrag
                            ? "Drag to reorder"
                            : "Clear filters to reorder"
                        }
                        onPointerDown={(
                          event
                        ) =>
                          handleDragStart(
                            event,
                            product.id
                          )
                        }
                      >
                        <span className="apl-drag-dots">
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </span>
                      </button>
                    )}

                    {/* =================================================
                        ORDER NUMBER
                    ================================================= */}

                    {sortOption ===
                      "custom" && (
                      <span className="apl-sort-number">
                        {index + 1}
                      </span>
                    )}

                    {/* =================================================
                        IMAGE
                    ================================================= */}

                    <div className="apl-card-image">
                      {product.image ? (
                        <img
                          src={`https://a4agroup.eu${product.image}`}
                          alt={
                            product.title
                          }
                          className="apl-image"
                          draggable="false"
                        />
                      ) : (
                        <div className="apl-image-placeholder">
                          No Image
                        </div>
                      )}

                      {/* BADGES */}

                      <div className="apl-card-badges">
                        {product.isActive ===
                        false ? (
                          <span className="apl-badge-stock apl-badge-out">
                            <span className="apl-stock-dot" />
                            Out of Stock
                          </span>
                        ) : (
                          <span className="apl-badge-stock apl-badge-active">
                            <span className="apl-stock-dot" />
                            Active
                          </span>
                        )}

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

                        {Number(
                          product.discountPercent
                        ) > 0 && (
                          <span className="apl-badge-discount">
                            {
                              product.discountPercent
                            }
                            % OFF
                          </span>
                        )}
                      </div>
                    </div>

                    {/* =================================================
                        CONTENT
                    ================================================= */}

                    <div className="apl-card-content">
                      <span className="apl-category">
                        {product.category ||
                          "Uncategorized"}
                      </span>

                      <h3 className="apl-title">
                        {product.title}
                      </h3>

                      <div className="apl-pricing">
                        <span className="apl-price-current">
                          €
                          {discountedPrice.toFixed(
                            0
                          )}
                        </span>

                        {Number(
                          product.discountPercent
                        ) > 0 && (
                          <span className="apl-price-original">
                            €
                            {Number(
                              product.price ||
                                0
                            ).toFixed(0)}
                          </span>
                        )}
                      </div>

                      {/* =================================================
                          ACTIONS
                      ================================================= */}

                      <div className="apl-actions">
                        <Link
                          to={`/admin/products/edit/${product.id}`}
                          className="apl-btn-edit"
                          onPointerDown={(e) =>
                            e.stopPropagation()
                          }
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
                          type="button"
                          onPointerDown={(e) =>
                            e.stopPropagation()
                          }
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