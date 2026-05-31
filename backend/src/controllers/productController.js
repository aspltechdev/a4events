

// const prisma = require('../config/db');

// // GET ALL PRODUCTS
// const getProducts = async (req, res) => {
// try {
// const products = await prisma.product.findMany({
// orderBy: {
// createdAt: 'desc'
// }
// });

// ```
// res.json(products);
// ```

// } catch (error) {
// console.error(error);

// ```
// res.status(500).json({
//   message: 'Failed to fetch products'
// });
// ```

// }
// };

// // GET FEATURED PRODUCTS
// const getFeaturedProducts = async (req, res) => {
// try {
// const products = await prisma.product.findMany({
// where: {
// featured: true
// },
// orderBy: {
// createdAt: 'desc'
// },
// take: 6
// });

// ```
// res.json(products);
// ```

// } catch (error) {
// console.error(error);

// ```
// res.status(500).json({
//   message: 'Failed to fetch featured products'
// });
// ```

// }
// };

// // CREATE PRODUCT
// const createProduct = async (req, res) => {
// try {
// const {
// title,
// description,
// price,
// image,
// featured
// } = req.body;

// ```
// const product = await prisma.product.create({
//   data: {
//     title,
//     description,
//     price: Number(price),
//     image,
//     featured
//   }
// });

// res.status(201).json(product);
// ```

// } catch (error) {
// console.error(error);

// ```
// res.status(500).json({
//   message: 'Failed to create product'
// });
// ```

// }
// };

// // GET PRODUCT BY ID
// const getProductById = async (req, res) => {
// try {
// const product = await prisma.product.findUnique({
// where: {
// id: Number(req.params.id)
// }
// });

// ```
// if (!product) {
//   return res.status(404).json({
//     message: 'Product not found'
//   });
// }

// res.json(product);
// ```

// } catch (error) {
// console.error(error);

// ```
// res.status(500).json({
//   message: 'Failed to fetch product'
// });
// ```

// }
// };

// // UPDATE PRODUCT
// const updateProduct = async (req, res) => {
// try {
// const {
// title,
// description,
// price,
// image,
// featured
// } = req.body;

// ```
// const product = await prisma.product.update({
//   where: {
//     id: Number(req.params.id)
//   },
//   data: {
//     title,
//     description,
//     price: Number(price),
//     image,
//     featured
//   }
// });

// res.json(product);
// ```

// } catch (error) {
// console.error(error);

// ```
// res.status(500).json({
//   message: 'Failed to update product'
// });
// ```

// }
// };

// // DELETE PRODUCT
// const deleteProduct = async (req, res) => {
// try {
// await prisma.product.delete({
// where: {
// id: Number(req.params.id)
// }
// });

// ```
// res.json({
//   message: 'Product deleted'
// });
// ```

// } catch (error) {
// console.error(error);

// ```
// res.status(500).json({
//   message: 'Failed to delete product'
// });
// ```

// }
// };

// module.exports = {
// getProducts,
// getFeaturedProducts,
// createProduct,
// getProductById,
// updateProduct,
// deleteProduct
// };



// const prisma = require('../config/db');

// // GET ALL PRODUCTS
// const getProducts = async (req, res) => {
// try {
// const products = await prisma.product.findMany({
// orderBy: {
// createdAt: 'desc'
// }
// });

// ```
// res.json(products);
// ```

// } catch (error) {
// console.error('GET PRODUCTS ERROR:', error);

// ```
// res.status(500).json({
//   message: 'Failed to fetch products'
// });
// ```

// }
// };

// // GET FEATURED PRODUCTS
// const getFeaturedProducts = async (req, res) => {
// try {
// const products = await prisma.product.findMany({
// where: {
// featured: true
// },
// orderBy: {
// createdAt: 'desc'
// },
// take: 6
// });

// ```
// res.json(products);
// ```

// } catch (error) {
// console.error('GET FEATURED PRODUCTS ERROR:', error);

// ```
// res.status(500).json({
//   message: 'Failed to fetch featured products'
// });
// ```

// }
// };

// // CREATE PRODUCT
// const createProduct = async (req, res) => {
// try {
// const {
// title,
// description,
// price,
// image,
// featured
// } = req.body;

// ```
// const product = await prisma.product.create({
//   data: {
//     title,
//     description,
//     price: Number(price),
//     image,
//     featured: featured || false
//   }
// });

// res.status(201).json(product);
// ```

// } catch (error) {
// console.error('CREATE PRODUCT ERROR:', error);

// ```
// res.status(500).json({
//   message: 'Failed to create product'
// });
// ```

// }
// };

// // GET PRODUCT BY ID
// const getProductById = async (req, res) => {
// try {
// const product = await prisma.product.findUnique({
// where: {
// id: Number(req.params.id)
// }
// });

// ```
// if (!product) {
//   return res.status(404).json({
//     message: 'Product not found'
//   });
// }

// res.json(product);
// ```

// } catch (error) {
// console.error('GET PRODUCT ERROR:', error);

// ```
// res.status(500).json({
//   message: 'Failed to fetch product'
// });
// ```

// }
// };

// // UPDATE PRODUCT
// const updateProduct = async (req, res) => {
// try {
// const {
// title,
// description,
// price,
// image,
// featured
// } = req.body;

// ```
// const product = await prisma.product.update({
//   where: {
//     id: Number(req.params.id)
//   },
//   data: {
//     title,
//     description,
//     price: Number(price),
//     image,
//     featured
//   }
// });

// res.json(product);
// ```

// } catch (error) {
// console.error('UPDATE PRODUCT ERROR:', error);

// ```
// res.status(500).json({
//   message: 'Failed to update product'
// });
// ```

// }
// };

// // DELETE PRODUCT
// const deleteProduct = async (req, res) => {
// try {
// await prisma.product.delete({
// where: {
// id: Number(req.params.id)
// }
// });

// ```
// res.json({
//   message: 'Product deleted'
// });
// ```

// } catch (error) {
// console.error('DELETE PRODUCT ERROR:', error);

// ```
// res.status(500).json({
//   message: 'Failed to delete product'
// });
// ```

// }
// };

// module.exports = {
// getProducts,
// getFeaturedProducts,
// createProduct,
// getProductById,
// updateProduct,
// deleteProduct
// };

const prisma = require('../config/db');

// GET ALL PRODUCTS
const getProducts = async (req, res) => {
try {
const products = await prisma.product.findMany({
orderBy: {
createdAt: 'desc'
}
});


return res.json(products);


} catch (error) {
console.error('GET PRODUCTS ERROR:', error);


return res.status(500).json({
  message: 'Failed to fetch products',
  error: error.message
});

}
};

// GET FEATURED PRODUCTS
const getFeaturedProducts = async (req, res) => {
try {
const products = await prisma.product.findMany({
where: {
featured: true
},
orderBy: {
createdAt: 'desc'
},
take: 6
});


return res.json(products);


} catch (error) {
console.error('GET FEATURED PRODUCTS ERROR:', error);


return res.status(500).json({
  message: 'Failed to fetch featured products',
  error: error.message
});


}
};

// CREATE PRODUCT
const createProduct = async (req, res) => {
try {
const {
title,
description,
price,
image,
featured
} = req.body;


const product = await prisma.product.create({
  data: {
    title,
    description,
    price: Number(price),
    image,
    featured: featured || false
  }
});

return res.status(201).json(product);


} catch (error) {
console.error('CREATE PRODUCT ERROR:', error);


return res.status(500).json({
  message: 'Failed to create product',
  error: error.message
});


}
};

// GET PRODUCT BY ID
const getProductById = async (req, res) => {
try {
const product = await prisma.product.findUnique({
where: {
id: Number(req.params.id)
}
});


if (!product) {
  return res.status(404).json({
    message: 'Product not found'
  });
}

return res.json(product);


} catch (error) {
console.error('GET PRODUCT ERROR:', error);


return res.status(500).json({
  message: 'Failed to fetch product',
  error: error.message
});


}
};

// UPDATE PRODUCT
const updateProduct = async (req, res) => {
try {
const {
title,
description,
price,
image,
featured
} = req.body;


const product = await prisma.product.update({
  where: {
    id: Number(req.params.id)
  },
  data: {
    title,
    description,
    price: Number(price),
    image,
    featured
  }
});

return res.json(product);


} catch (error) {
console.error('UPDATE PRODUCT ERROR:', error);


return res.status(500).json({
  message: 'Failed to update product',
  error: error.message
});


}
};

// DELETE PRODUCT
const deleteProduct = async (req, res) => {
try {
await prisma.product.delete({
where: {
id: Number(req.params.id)
}
});


return res.json({
  message: 'Product deleted successfully'
});


} catch (error) {
console.error('DELETE PRODUCT ERROR:', error);


return res.status(500).json({
  message: 'Failed to delete product',
  error: error.message
});


}
};

module.exports = {
getProducts,
getFeaturedProducts,
createProduct,
getProductById,
updateProduct,
deleteProduct
};
