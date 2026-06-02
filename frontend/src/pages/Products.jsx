

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

//           <p>₹{product.price}</p>

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


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import PublicLayout from "../layouts/PublicLayout";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

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

  return (
    <PublicLayout>

      <section className="a4-products-page">

        <div className="a4-products-page-header">

          <span className="a4-products-page-tag">
            FOOD & BEVERAGES
          </span>

          <h1 className="a4-products-page-title">
            Delicious Flavours For Every Occasion
          </h1>

          <p className="a4-products-page-description">
            Explore our range of snacks, beverages,
            desserts and signature favourites crafted
            with quality ingredients and unforgettable taste.
          </p>

        </div>

        <div className="a4-products-page-grid">

          {products.map((product) => (
            <div
              key={product.id}
              className="a4-products-page-card"
            >

              <div className="a4-products-page-image-wrapper">

                {product.image && (
                  <img
                    src={`http://localhost:5000${product.image}`}
                    alt={product.title}
                    className="a4-products-page-image"
                  />
                )}

              </div>

              <div className="a4-products-page-content">

                <span className="a4-products-page-badge">
                  Best Seller
                </span>

                <h3 className="a4-products-page-product-title">
                  {product.title}
                </h3>

                <div className="a4-products-page-footer">

                  <span className="a4-products-page-price">
                    ₹{product.price}
                  </span>

                  <Link
                    to={`/products/${product.id}`}
                    className="a4-products-page-btn"
                  >
                    View Details
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

    </PublicLayout>
  );
}

export default Products;