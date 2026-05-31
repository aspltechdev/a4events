// import { useEffect, useState } from 'react';
// import api from '../../services/api';

// function FeaturedProducts() {
//   const [products, setProducts] =
//     useState([]);

//   useEffect(() => {
//     loadProducts();
//   }, []);

//   const loadProducts = async () => {
//     const { data } =
//       await api.get('/products');

//     setProducts(data.slice(0, 6));
//   };

//   return (
//     <section
//       style={{
//         padding: '80px 20px'
//       }}
//     >
//       <h2>Featured Products</h2>

//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns:
//             'repeat(3,1fr)',
//           gap: '20px'
//         }}
//       >
//         {products.map((product) => (
//           <div key={product.id}>
//             {product.image && (
//               <img
//                 src={`http://localhost:5000${product.image}`}
//                 alt={product.title}
//                 width="100%"
//               />
//             )}

//             <h3>{product.title}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default FeaturedProducts;

// import { useEffect, useState } from 'react';
// import api from '../../services/api';

// function FeaturedProducts() {
//   const [products, setProducts] =
//     useState([]);

//   useEffect(() => {
//     loadProducts();
//   }, []);

//   const loadProducts = async () => {
//     const { data } =
//       await api.get('/products');

//     setProducts(data.slice(0, 6));
//   };

//   return (
//     <section
//       style={{
//         padding: '80px 20px'
//       }}
//     >
//       <h2>Featured Products</h2>

//       <div
//         style={{
//           display: 'grid',
//           gridTemplateColumns:
//             'repeat(3,1fr)',
//           gap: '20px'
//         }}
//       >
//         {products.map((product) => (
//           <div key={product.id}>
//             {product.image && (
//               <img
//                 src={`http://localhost:5000${product.image}`}
//                 alt={product.title}
//                 width="100%"
//               />
//             )}

//             <h3>{product.title}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default FeaturedProducts;


import { useEffect, useState } from 'react';
import api from '../../services/api';

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const { data } = await api.get('/products/featured');

      console.log('Featured Products:', data);

      setProducts(data);
    } catch (error) {
      console.error('Featured products error:', error);
    }
  };

  return (
    <section
      style={{
        padding: '80px 20px'
      }}
    >
      <h2>Featured Products</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: '20px'
        }}
      >
        {products.map((product) => (
          <div key={product.id}>
            {product.image && (
              <img
                src={`http://localhost:5000${product.image}`}
                alt={product.title}
                width="100%"
              />
            )}

            <h3>{product.title}</h3>
            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;