// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import api from '../services/api';

// function ProductDetails() {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     loadProduct();
//   }, []);

//   const loadProduct = async () => {
//     const { data } = await api.get(`/products/${id}`);
//     setProduct(data);
//   };

//   if (!product) return <h2>Loading...</h2>;

// //   return (
// //     <div>
// //       <h1>{product.title}</h1>
// //       <p>{product.description}</p>
// //       <p>₹{product.price}</p>

// //       {product.image && (
// //         <img
// //           src={`http://localhost:5000${product.image}`}
// //           alt={product.title}
// //           width="300"
// //         />
// //       )}
// //     </div>
// //   );
// return (
//   <div style={{ padding: '20px' }}>
//     <Link to="/products">
//       ← Back
//     </Link>

//     <h1>{product.title}</h1>

//     {product.image && (
//       <img
//         src={`http://localhost:5000${product.image}`}
//         alt={product.title}
//         style={{
//           width: '500px',
//           maxWidth: '100%'
//         }}
//       />
//     )}

//     <p>{product.description}</p>

//     <h2>₹{product.price}</h2>

//     <button>
//       Enquire Now
//     </button>
//   </div>
// );
// }

// export default ProductDetails;


import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';
import InquiryForm from '../components/InquiryForm';
function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      const { data } = await api.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!product) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/products">
        ← Back
      </Link>

      <h1>{product.title}</h1>

      {product.image && (
        <img
          src={`http://localhost:5000${product.image}`}
          alt={product.title}
          style={{
            width: '500px',
            maxWidth: '100%'
          }}
        />
      )}

      <p>{product.description}</p>

      <h2>₹{product.price}</h2>
{/* 
      <button>
        Enquire Now
      </button> */}
      <InquiryForm productId={product.id} />
    </div>
  );
}

export default ProductDetails;