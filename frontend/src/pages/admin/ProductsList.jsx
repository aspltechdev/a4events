// import { useEffect, useState } from 'react';
// import api from '../../services/api';
// import AdminLayout from './AdminLayout';
// import { Link } from 'react-router-dom';
// function ProductsList() {
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

//     const deleteProduct = async (id) => {
//         const token = localStorage.getItem('token');

//         if (!window.confirm('Delete Product?')) {
//             return;
//         }

//         try {
//             await api.delete(`/products/${id}`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });

//             fetchProducts();

//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <AdminLayout>
//             <div>
//                 <h1>Products</h1>

 
//                     <div key={product.id}>
//                                        {products.map((product) => (
//                     {product.image && (
//   <img
//     src={`http://localhost:5000${product.image}`}
//     alt={product.title}
//     width="120"
//   />
// )}
//                         <h3>{product.title}</h3>

//                         <Link to={`/admin/products/edit/${product.id}`}>
//                             Edit
//                         </Link>

//                         {' | '}

//                         <button
//                             onClick={() => deleteProduct(product.id)}
//                         >
//                             Delete
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </AdminLayout>
//     );
// }

// export default ProductsList;


import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import AdminLayout from './AdminLayout';

function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await api.get('/products');
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (id) => {
    const token = localStorage.getItem('token');

    if (!window.confirm('Delete Product?')) {
      return;
    }

    try {
      await api.delete(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      fetchProducts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AdminLayout>
      <div>
        <h1>Products</h1>

        {products.map((product) => (
          <div key={product.id}>
            {product.image && (
              <img
                src={`http://localhost:5000${product.image}`}
                alt={product.title}
                width="120"
              />
            )}

            <h3>{product.title}</h3>

            <Link to={`/admin/products/edit/${product.id}`}>
              Edit
            </Link>

            {' | '}

            <button
              onClick={() => deleteProduct(product.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
}

export default ProductsList;