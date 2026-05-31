// import { useEffect, useState } from 'react';
// import api from '../services/api';
// import { Link } from 'react-router-dom';
// function Products() {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         fetchProducts();
//     }, []);

//     const fetchProducts = async () => {
//         try {
//             const { data } = await api.get('/products');
//             setProducts(data);
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <div>
//             <h1>Products</h1>

//             {products.map((product) => (
//                 <div key={product.id}>
//                     {product.image && (
//                         <img
//                             src={`http://localhost:5000${product.image}`}
//                             alt={product.title}
//                             width="200"
//                         />
//                     )}
//                     {/* <h3>{product.title}</h3> */}
//                     <Link to={`/products/${product.id}`}>
//                         <h3>{product.title}</h3>
//                     </Link>
//                     <p>{product.description}</p>
//                     <p>₹{product.price}</p>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default Products;







import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await api.get('/products');
      setProducts(data);
        console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

//   return (
//     <div>
//       <h1>Products</h1>

//       {products.map((product) => (
//         <div
//           key={product.id}
//           style={{
//             border: '1px solid #ddd',
//             padding: '15px',
//             marginBottom: '15px'
//           }}
//         >
//           {product.image ? (
//             <img
//               src={`http://localhost:5000${product.image}`}
//               alt={product.title}
//               width="200"
//             />
//           ) : (
//             <p>No Image</p>
//           )}

//           <Link to={`/products/${product.id}`}>
//             <h3>{product.title}</h3>
//           </Link>

//           <p>{product.description}</p>
//           <p>₹{product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
return (
  <div style={{ padding: '20px' }}>
    <h1>Products</h1>

    <div
      style={{
        display: 'grid',
        gridTemplateColumns:
          'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px'
      }}
    >
      {products.map((product) => (
        
        <div
          key={product.id}
          style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '15px'
          }}
        >
          {product.image && (
            <img
              src={`http://localhost:5000${product.image}`}
              alt={product.title}
              style={{
                width: '100%',
                height: '220px',
                objectFit: 'cover'
              }}
            />
          )}

          <h3>{product.title}</h3>

          <p>₹{product.price}</p>

          <Link to={`/products/${product.id}`}>
            View Details
          </Link>
        </div>
      ))}
    </div>
  </div>
);
}

export default Products;