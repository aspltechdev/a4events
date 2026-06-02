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


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import AdminLayout from "./AdminLayout";
import "./ProductsList.css";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await api.get("/products");
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (id) => {
    const token = localStorage.getItem("token");

    if (!window.confirm("Delete Product?")) {
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

  const filteredProducts = products.filter(
    (product) =>
      product.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <AdminLayout>

      <div className="a4-products-admin">

        <div className="a4-products-header">

          <div>
            <h1>Products</h1>
            <p>
              Manage all food, snacks and beverages.
            </p>
          </div>

          <Link
            to="/admin/products/add"
            className="a4-add-product-btn"
          >
            + Add Product
          </Link>

        </div>

        <div className="a4-products-toolbar">

          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="a4-product-search"
          />

        </div>

        <div className="a4-products-grid">

          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="a4-product-card"
            >

              <div className="a4-product-image-wrapper">

                <img
                  src={`http://localhost:5000${product.image}`}
                  alt={product.title}
                  className="a4-product-image"
                />

              </div>

              <div className="a4-product-content">

                <h3>{product.title}</h3>

                <div className="a4-product-price">
                  ₹{product.price}
                </div>

                <div className="a4-product-actions">

                  <Link
                    to={`/admin/products/edit/${product.id}`}
                    className="a4-edit-btn"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      deleteProduct(product.id)
                    }
                    className="a4-delete-btn"
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </AdminLayout>
  );
}

export default ProductsList;