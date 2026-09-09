

// // const prisma = require('../config/db');

// // // GET ALL PRODUCTS
// // const getProducts = async (req, res) => {
// // try {
// // const products = await prisma.product.findMany({
// // orderBy: {
// // createdAt: 'desc'
// // }
// // });

// // ```
// // res.json(products);
// // ```

// // } catch (error) {
// // console.error(error);

// // ```
// // res.status(500).json({
// //   message: 'Failed to fetch products'
// // });
// // ```

// // }
// // };

// // // GET FEATURED PRODUCTS
// // const getFeaturedProducts = async (req, res) => {
// // try {
// // const products = await prisma.product.findMany({
// // where: {
// // featured: true
// // },
// // orderBy: {
// // createdAt: 'desc'
// // },
// // take: 6
// // });

// // ```
// // res.json(products);
// // ```

// // } catch (error) {
// // console.error(error);

// // ```
// // res.status(500).json({
// //   message: 'Failed to fetch featured products'
// // });
// // ```

// // }
// // };

// // // CREATE PRODUCT
// // const createProduct = async (req, res) => {
// // try {
// // const {
// // title,
// // description,
// // price,
// // image,
// // featured
// // } = req.body;

// // ```
// // const product = await prisma.product.create({
// //   data: {
// //     title,
// //     description,
// //     price: Number(price),
// //     image,
// //     featured
// //   }
// // });

// // res.status(201).json(product);
// // ```

// // } catch (error) {
// // console.error(error);

// // ```
// // res.status(500).json({
// //   message: 'Failed to create product'
// // });
// // ```

// // }
// // };

// // // GET PRODUCT BY ID
// // const getProductById = async (req, res) => {
// // try {
// // const product = await prisma.product.findUnique({
// // where: {
// // id: Number(req.params.id)
// // }
// // });

// // ```
// // if (!product) {
// //   return res.status(404).json({
// //     message: 'Product not found'
// //   });
// // }

// // res.json(product);
// // ```

// // } catch (error) {
// // console.error(error);

// // ```
// // res.status(500).json({
// //   message: 'Failed to fetch product'
// // });
// // ```

// // }
// // };

// // // UPDATE PRODUCT
// // const updateProduct = async (req, res) => {
// // try {
// // const {
// // title,
// // description,
// // price,
// // image,
// // featured
// // } = req.body;

// // ```
// // const product = await prisma.product.update({
// //   where: {
// //     id: Number(req.params.id)
// //   },
// //   data: {
// //     title,
// //     description,
// //     price: Number(price),
// //     image,
// //     featured
// //   }
// // });

// // res.json(product);
// // ```

// // } catch (error) {
// // console.error(error);

// // ```
// // res.status(500).json({
// //   message: 'Failed to update product'
// // });
// // ```

// // }
// // };

// // // DELETE PRODUCT
// // const deleteProduct = async (req, res) => {
// // try {
// // await prisma.product.delete({
// // where: {
// // id: Number(req.params.id)
// // }
// // });

// // ```
// // res.json({
// //   message: 'Product deleted'
// // });
// // ```

// // } catch (error) {
// // console.error(error);

// // ```
// // res.status(500).json({
// //   message: 'Failed to delete product'
// // });
// // ```

// // }
// // };

// // module.exports = {
// // getProducts,
// // getFeaturedProducts,
// // createProduct,
// // getProductById,
// // updateProduct,
// // deleteProduct
// // };



// // const prisma = require('../config/db');

// // // GET ALL PRODUCTS
// // const getProducts = async (req, res) => {
// // try {
// // const products = await prisma.product.findMany({
// // orderBy: {
// // createdAt: 'desc'
// // }
// // });

// // ```
// // res.json(products);
// // ```

// // } catch (error) {
// // console.error('GET PRODUCTS ERROR:', error);

// // ```
// // res.status(500).json({
// //   message: 'Failed to fetch products'
// // });
// // ```

// // }
// // };

// // // GET FEATURED PRODUCTS
// // const getFeaturedProducts = async (req, res) => {
// // try {
// // const products = await prisma.product.findMany({
// // where: {
// // featured: true
// // },
// // orderBy: {
// // createdAt: 'desc'
// // },
// // take: 6
// // });

// // ```
// // res.json(products);
// // ```

// // } catch (error) {
// // console.error('GET FEATURED PRODUCTS ERROR:', error);

// // ```
// // res.status(500).json({
// //   message: 'Failed to fetch featured products'
// // });
// // ```

// // }
// // };

// // // CREATE PRODUCT
// // const createProduct = async (req, res) => {
// // try {
// // const {
// // title,
// // description,
// // price,
// // image,
// // featured
// // } = req.body;

// // ```
// // const product = await prisma.product.create({
// //   data: {
// //     title,
// //     description,
// //     price: Number(price),
// //     image,
// //     featured: featured || false
// //   }
// // });

// // res.status(201).json(product);
// // ```

// // } catch (error) {
// // console.error('CREATE PRODUCT ERROR:', error);

// // ```
// // res.status(500).json({
// //   message: 'Failed to create product'
// // });
// // ```

// // }
// // };

// // // GET PRODUCT BY ID
// // const getProductById = async (req, res) => {
// // try {
// // const product = await prisma.product.findUnique({
// // where: {
// // id: Number(req.params.id)
// // }
// // });

// // ```
// // if (!product) {
// //   return res.status(404).json({
// //     message: 'Product not found'
// //   });
// // }

// // res.json(product);
// // ```

// // } catch (error) {
// // console.error('GET PRODUCT ERROR:', error);

// // ```
// // res.status(500).json({
// //   message: 'Failed to fetch product'
// // });
// // ```

// // }
// // };

// // // UPDATE PRODUCT
// // const updateProduct = async (req, res) => {
// // try {
// // const {
// // title,
// // description,
// // price,
// // image,
// // featured
// // } = req.body;

// // ```
// // const product = await prisma.product.update({
// //   where: {
// //     id: Number(req.params.id)
// //   },
// //   data: {
// //     title,
// //     description,
// //     price: Number(price),
// //     image,
// //     featured
// //   }
// // });

// // res.json(product);
// // ```

// // } catch (error) {
// // console.error('UPDATE PRODUCT ERROR:', error);

// // ```
// // res.status(500).json({
// //   message: 'Failed to update product'
// // });
// // ```

// // }
// // };

// // // DELETE PRODUCT
// // const deleteProduct = async (req, res) => {
// // try {
// // await prisma.product.delete({
// // where: {
// // id: Number(req.params.id)
// // }
// // });

// // ```
// // res.json({
// //   message: 'Product deleted'
// // });
// // ```

// // } catch (error) {
// // console.error('DELETE PRODUCT ERROR:', error);

// // ```
// // res.status(500).json({
// //   message: 'Failed to delete product'
// // });
// // ```

// // }
// // };

// // module.exports = {
// // getProducts,
// // getFeaturedProducts,
// // createProduct,
// // getProductById,
// // updateProduct,
// // deleteProduct
// // };

// // const prisma = require('../config/db');

// // // GET ALL PRODUCTS
// // const getProducts = async (req, res) => {
// // try {
// // const products = await prisma.product.findMany({
// // orderBy: {
// // createdAt: 'desc'
// // }
// // });


// // return res.json(products);


// // } catch (error) {
// // console.error('GET PRODUCTS ERROR:', error);


// // return res.status(500).json({
// //   message: 'Failed to fetch products',
// //   error: error.message
// // });

// // }
// // };

// // // GET FEATURED PRODUCTS
// // const getFeaturedProducts = async (req, res) => {
// // try {
// // const products = await prisma.product.findMany({
// // where: {
// // featured: true
// // },
// // orderBy: {
// // createdAt: 'desc'
// // },
// // take: 6
// // });


// // return res.json(products);


// // } catch (error) {
// // console.error('GET FEATURED PRODUCTS ERROR:', error);


// // return res.status(500).json({
// //   message: 'Failed to fetch featured products',
// //   error: error.message
// // });


// // }
// // };

// // // CREATE PRODUCT
// // const createProduct = async (req, res) => {
// // try {
// // const {
// // title,
// // description,
// // price,
// // image,
// // featured
// // } = req.body;


// // const product = await prisma.product.create({
// //   data: {
// //     title,
// //     description,
// //     price: Number(price),
// //     image,
// //     featured: featured || false
// //   }
// // });

// // return res.status(201).json(product);


// // } catch (error) {
// // console.error('CREATE PRODUCT ERROR:', error);


// // return res.status(500).json({
// //   message: 'Failed to create product',
// //   error: error.message
// // });


// // }
// // };

// // // GET PRODUCT BY ID
// // const getProductById = async (req, res) => {
// // try {
// // const product = await prisma.product.findUnique({
// // where: {
// // id: Number(req.params.id)
// // }
// // });


// // if (!product) {
// //   return res.status(404).json({
// //     message: 'Product not found'
// //   });
// // }

// // return res.json(product);


// // } catch (error) {
// // console.error('GET PRODUCT ERROR:', error);


// // return res.status(500).json({
// //   message: 'Failed to fetch product',
// //   error: error.message
// // });


// // }
// // };

// // // UPDATE PRODUCT
// // const updateProduct = async (req, res) => {
// // try {
// // const {
// // title,
// // description,
// // price,
// // image,
// // featured
// // } = req.body;


// // const product = await prisma.product.update({
// //   where: {
// //     id: Number(req.params.id)
// //   },
// //   data: {
// //     title,
// //     description,
// //     price: Number(price),
// //     image,
// //     featured
// //   }
// // });

// // return res.json(product);


// // } catch (error) {
// // console.error('UPDATE PRODUCT ERROR:', error);


// // return res.status(500).json({
// //   message: 'Failed to update product',
// //   error: error.message
// // });


// // }
// // };

// // // DELETE PRODUCT
// // const deleteProduct = async (req, res) => {
// // try {
// // await prisma.product.delete({
// // where: {
// // id: Number(req.params.id)
// // }
// // });


// // return res.json({
// //   message: 'Product deleted successfully'
// // });


// // } catch (error) {
// // console.error('DELETE PRODUCT ERROR:', error);


// // return res.status(500).json({
// //   message: 'Failed to delete product',
// //   error: error.message
// // });


// // }
// // };

// // module.exports = {
// // getProducts,
// // getFeaturedProducts,
// // createProduct,
// // getProductById,
// // updateProduct,
// // deleteProduct
// // };


// // const prisma = require('../config/db');

// // // GET ALL PRODUCTS
// // const getProducts = async (req, res) => {
// //   try {

// //     const products = await prisma.product.findMany({
// //       orderBy: {
// //         createdAt: 'desc'
// //       }
// //     });

// //     return res.json(products);

// //   } catch (error) {

// //     console.error('GET PRODUCTS ERROR:', error);

// //     return res.status(500).json({
// //       message: 'Failed to fetch products',
// //       error: error.message
// //     });

// //   }
// // };

// // // GET FEATURED PRODUCTS
// // const getFeaturedProducts = async (req, res) => {
// //   try {

// //     const products = await prisma.product.findMany({
// //       where: {
// //         featured: true
// //       },
// //       orderBy: {
// //         createdAt: 'desc'
// //       },
// //       take: 6
// //     });

// //     return res.json(products);

// //   } catch (error) {

// //     console.error('GET FEATURED PRODUCTS ERROR:', error);

// //     return res.status(500).json({
// //       message: 'Failed to fetch featured products',
// //       error: error.message
// //     });

// //   }
// // };

// // // GET PRODUCT BY ID
// // const getProductById = async (req, res) => {
// //   try {

// //     const product = await prisma.product.findUnique({
// //       where: {
// //         id: Number(req.params.id)
// //       }
// //     });

// //     if (!product) {
// //       return res.status(404).json({
// //         message: 'Product not found'
// //       });
// //     }

// //     return res.json(product);

// //   } catch (error) {

// //     console.error('GET PRODUCT ERROR:', error);

// //     return res.status(500).json({
// //       message: 'Failed to fetch product',
// //       error: error.message
// //     });

// //   }
// // };

// // // CREATE PRODUCT
// // const createProduct = async (req, res) => {
// //   try {

// //     const {
// //       title,
// //       description,
// //       price,
// //       image,
// //       category,
// //       discountPercent,
// //       featured
// //     } = req.body;

// //     const product = await prisma.product.create({
// //       data: {
// //         title,
// //         description,
// //         price: Number(price),
// //         image,
// //         category,
// //         discountPercent: Number(discountPercent) || 0,
// //         featured: featured || false
// //       }
// //     });

// //     return res.status(201).json(product);

// //   } catch (error) {

// //     console.error('CREATE PRODUCT ERROR:', error);

// //     return res.status(500).json({
// //       message: 'Failed to create product',
// //       error: error.message
// //     });

// //   }
// // };

// // // UPDATE PRODUCT
// // const updateProduct = async (req, res) => {
// //   try {

// //     const {
// //       title,
// //       description,
// //       price,
// //       image,
// //       category,
// //       discountPercent,
// //       featured
// //     } = req.body;

// //     const product = await prisma.product.update({
// //       where: {
// //         id: Number(req.params.id)
// //       },
// //       data: {
// //         title,
// //         description,
// //         price: Number(price),
// //         image,
// //         category,
// //         discountPercent: Number(discountPercent) || 0,
// //         featured
// //       }
// //     });

// //     return res.json(product);

// //   } catch (error) {

// //     console.error('UPDATE PRODUCT ERROR:', error);

// //     return res.status(500).json({
// //       message: 'Failed to update product',
// //       error: error.message
// //     });

// //   }
// // };

// // // DELETE PRODUCT
// // const deleteProduct = async (req, res) => {
// //   try {

// //     await prisma.product.delete({
// //       where: {
// //         id: Number(req.params.id)
// //       }
// //     });

// //     return res.json({
// //       message: 'Product deleted successfully'
// //     });

// //   } catch (error) {

// //     console.error('DELETE PRODUCT ERROR:', error);

// //     return res.status(500).json({
// //       message: 'Failed to delete product',
// //       error: error.message
// //     });

// //   }
// // };

// // module.exports = {
// //   getProducts,
// //   getFeaturedProducts,
// //   getProductById,
// //   createProduct,
// //   updateProduct,
// //   deleteProduct
// // };

// // const prisma = require('../config/db');

// // // GET ALL PRODUCTS
// // const getProducts = async (req, res) => {
// // try {

// // ```
// // const products = await prisma.product.findMany({
// //   include: {
// //     ingredients: true
// //   },
// //   orderBy: {
// //     createdAt: 'desc'
// //   }
// // });

// // return res.json(products);
// // ```

// // } catch (error) {

// // ```
// // console.error('GET PRODUCTS ERROR:', error);

// // return res.status(500).json({
// //   message: 'Failed to fetch products',
// //   error: error.message
// // });
// // ```

// // }
// // };

// // // GET FEATURED PRODUCTS
// // const getFeaturedProducts = async (req, res) => {
// // try {

// // ```
// // const products = await prisma.product.findMany({
// //   where: {
// //     featured: true
// //   },
// //   include: {
// //     ingredients: true
// //   },
// //   orderBy: {
// //     createdAt: 'desc'
// //   },
// //   take: 6
// // });

// // return res.json(products);
// // ```

// // } catch (error) {

// // ```
// // console.error('GET FEATURED PRODUCTS ERROR:', error);

// // return res.status(500).json({
// //   message: 'Failed to fetch featured products',
// //   error: error.message
// // });
// // ```

// // }
// // };

// // // GET PRODUCT BY ID
// // const getProductById = async (req, res) => {
// // try {

// // ```
// // const product = await prisma.product.findUnique({
// //   where: {
// //     id: Number(req.params.id)
// //   },
// //   include: {
// //     ingredients: true
// //   }
// // });

// // if (!product) {
// //   return res.status(404).json({
// //     message: 'Product not found'
// //   });
// // }

// // return res.json(product);
// // ```

// // } catch (error) {

// // ```
// // console.error('GET PRODUCT ERROR:', error);

// // return res.status(500).json({
// //   message: 'Failed to fetch product',
// //   error: error.message
// // });
// // ```

// // }
// // };

// // // CREATE PRODUCT
// // const createProduct = async (req, res) => {
// // try {

// // ```
// // const {
// //   title,
// //   description,
// //   price,
// //   image,
// //   category,
// //   discountPercent,
// //   featured,
// //   ingredients
// // } = req.body;

// // const product = await prisma.product.create({
// //   data: {
// //     title,
// //     description,
// //     price: Number(price),
// //     image,
// //     category,
// //     discountPercent: Number(discountPercent) || 0,
// //     featured: featured || false,

// //     ingredients: {
// //       create: ingredients || []
// //     }
// //   },
// //   include: {
// //     ingredients: true
// //   }
// // });

// // return res.status(201).json(product);
// // ```

// // } catch (error) {

// // ```
// // console.error('CREATE PRODUCT ERROR:', error);

// // return res.status(500).json({
// //   message: 'Failed to create product',
// //   error: error.message
// // });
// // ```

// // }
// // };

// // // UPDATE PRODUCT
// // const updateProduct = async (req, res) => {
// // try {

// // ```
// // const {
// //   title,
// //   description,
// //   price,
// //   image,
// //   category,
// //   discountPercent,
// //   featured,
// //   ingredients
// // } = req.body;

// // const productId = Number(req.params.id);

// // await prisma.productIngredient.deleteMany({
// //   where: {
// //     productId
// //   }
// // });

// // const product = await prisma.product.update({
// //   where: {
// //     id: productId
// //   },
// //   data: {
// //     title,
// //     description,
// //     price: Number(price),
// //     image,
// //     category,
// //     discountPercent: Number(discountPercent) || 0,
// //     featured,

// //     ingredients: {
// //       create: ingredients || []
// //     }
// //   },
// //   include: {
// //     ingredients: true
// //   }
// // });

// // return res.json(product);
// // ```

// // } catch (error) {

// // ```
// // console.error('UPDATE PRODUCT ERROR:', error);

// // return res.status(500).json({
// //   message: 'Failed to update product',
// //   error: error.message
// // });
// // ```

// // }
// // };

// // // DELETE PRODUCT
// // const deleteProduct = async (req, res) => {
// // try {

// // ```
// // await prisma.product.delete({
// //   where: {
// //     id: Number(req.params.id)
// //   }
// // });

// // return res.json({
// //   message: 'Product deleted successfully'
// // });
// // ```

// // } catch (error) {

// // ```
// // console.error('DELETE PRODUCT ERROR:', error);

// // return res.status(500).json({
// //   message: 'Failed to delete product',
// //   error: error.message
// // });
// // ```

// // }
// // };

// // module.exports = {
// // getProducts,
// // getFeaturedProducts,
// // getProductById,
// // createProduct,
// // updateProduct,
// // deleteProduct
// // };


// // const prisma = require('../config/db');

// // // GET ALL PRODUCTS
// // const getProducts = async (req, res) => {
// //   try {

// //     const products = await prisma.product.findMany({
// //       include: {
// //         ingredients: true
// //       },
// //       orderBy: {
// //         createdAt: 'desc'
// //       }
// //     });

// //     return res.json(products);

// //   } catch (error) {

// //     console.error('GET PRODUCTS ERROR:', error);

// //     return res.status(500).json({
// //       message: 'Failed to fetch products',
// //       error: error.message
// //     });

// //   }
// // };

// // // GET FEATURED PRODUCTS
// // const getFeaturedProducts = async (req, res) => {
// //   try {

// //     const products = await prisma.product.findMany({
// //       where: {
// //         featured: true
// //       },
// //       include: {
// //         ingredients: true
// //       },
// //       orderBy: {
// //         createdAt: 'desc'
// //       },
// //       take: 6
// //     });

// //     return res.json(products);

// //   } catch (error) {

// //     console.error('GET FEATURED PRODUCTS ERROR:', error);

// //     return res.status(500).json({
// //       message: 'Failed to fetch featured products',
// //       error: error.message
// //     });

// //   }
// // };

// // // GET PRODUCT BY ID
// // const getProductById = async (req, res) => {
// //   try {

// //     const product = await prisma.product.findUnique({
// //       where: {
// //         id: Number(req.params.id)
// //       },
// //       include: {
// //         ingredients: true
// //       }
// //     });

// //     if (!product) {
// //       return res.status(404).json({
// //         message: 'Product not found'
// //       });
// //     }

// //     return res.json(product);

// //   } catch (error) {

// //     console.error('GET PRODUCT ERROR:', error);

// //     return res.status(500).json({
// //       message: 'Failed to fetch product',
// //       error: error.message
// //     });

// //   }
// // };

// // // CREATE PRODUCT
// // const createProduct = async (req, res) => {
// //   try {

// //     const {
// //       title,
// //       description,
// //       price,
// //       image,
// //       category,
// //       discountPercent,
// //       featured,
// //       ingredients
// //     } = req.body;

// //     const product = await prisma.product.create({
// //       data: {
// //         title,
// //         description,
// //         price: Number(price),
// //         image,
// //         category,
// //         discountPercent: Number(discountPercent) || 0,
// //         featured: featured || false,

// //         ingredients: {
// //           create: Array.isArray(ingredients)
// //             ? ingredients.map(item => ({
// //                 title: item.title,
// //                 description: item.description || '',
// //                 image: item.image || ''
// //               }))
// //             : []
// //         }
// //       },
// //       include: {
// //         ingredients: true
// //       }
// //     });

// //     return res.status(201).json(product);

// //   } catch (error) {

// //     console.error('CREATE PRODUCT ERROR:', error);

// //     return res.status(500).json({
// //       message: 'Failed to create product',
// //       error: error.message
// //     });

// //   }
// // };

// // // UPDATE PRODUCT
// // const updateProduct = async (req, res) => {
// //   try {

// //     const {
// //       title,
// //       description,
// //       price,
// //       image,
// //       category,
// //       discountPercent,
// //       featured,
// //       ingredients
// //     } = req.body;

// //     const productId = Number(req.params.id);

// //     // Delete old ingredients
// //     await prisma.productIngredient.deleteMany({
// //       where: {
// //         productId
// //       }
// //     });

// //     const product = await prisma.product.update({
// //       where: {
// //         id: productId
// //       },
// //       data: {
// //         title,
// //         description,
// //         price: Number(price),
// //         image,
// //         category,
// //         discountPercent: Number(discountPercent) || 0,
// //         featured,

// //         ingredients: {
// //           create: Array.isArray(ingredients)
// //             ? ingredients.map(item => ({
// //                 title: item.title,
// //                 description: item.description || '',
// //                 image: item.image || ''
// //               }))
// //             : []
// //         }
// //       },
// //       include: {
// //         ingredients: true
// //       }
// //     });

// //     return res.json(product);

// //   } catch (error) {

// //     console.error('UPDATE PRODUCT ERROR:', error);

// //     return res.status(500).json({
// //       message: 'Failed to update product',
// //       error: error.message
// //     });

// //   }
// // };

// // // DELETE PRODUCT
// // const deleteProduct = async (req, res) => {
// //   try {

// //     await prisma.product.delete({
// //       where: {
// //         id: Number(req.params.id)
// //       }
// //     });

// //     return res.json({
// //       message: 'Product deleted successfully'
// //     });

// //   } catch (error) {

// //     console.error('DELETE PRODUCT ERROR:', error);

// //     return res.status(500).json({
// //       message: 'Failed to delete product',
// //       error: error.message
// //     });

// //   }
// // };

// // module.exports = {
// //   getProducts,
// //   getFeaturedProducts,
// //   getProductById,
// //   createProduct,
// //   updateProduct,
// //   deleteProduct
// // };

// // const prisma = require('../config/db');

// // // GET ALL PRODUCTS
// // const getProducts = async (req, res) => {
// //   try {

// //     const products = await prisma.product.findMany({
// //       include: {
// //         ingredients: true
// //       },
// //       orderBy: {
// //         createdAt: 'desc'
// //       }
// //     });

// //     return res.json(products);

// //   } catch (error) {

// //     console.error('GET PRODUCTS ERROR:', error);

// //     return res.status(500).json({
// //       message: 'Failed to fetch products',
// //       error: error.message
// //     });

// //   }
// // };


// // // GET FEATURED PRODUCTS
// // const getFeaturedProducts = async (req, res) => {
// //   try {

// //     const products = await prisma.product.findMany({
// //       where: {
// //         featured: true
// //       },
// //       include: {
// //         ingredients: true
// //       },
// //       orderBy: {
// //         createdAt: 'desc'
// //       },
// //       take: 6
// //     });

// //     return res.json(products);

// //   } catch (error) {

// //     console.error('GET FEATURED PRODUCTS ERROR:', error);

// //     return res.status(500).json({
// //       message: 'Failed to fetch featured products',
// //       error: error.message
// //     });

// //   }
// // };


// // // GET PRODUCT BY ID
// // const getProductById = async (req, res) => {
// //   try {

// //     const product = await prisma.product.findUnique({
// //       where: {
// //         id: Number(req.params.id)
// //       },
// //       include: {
// //         ingredients: true
// //       }
// //     });

// //     if (!product) {
// //       return res.status(404).json({
// //         message: 'Product not found'
// //       });
// //     }

// //     return res.json(product);

// //   } catch (error) {

// //     console.error('GET PRODUCT ERROR:', error);

// //     return res.status(500).json({
// //       message: 'Failed to fetch product',
// //       error: error.message
// //     });

// //   }
// // };


// // // CREATE PRODUCT
// // const createProduct = async (req, res) => {
// //   try {

// //     const {
// //       title,
// //       description,
// //       price,
// //       image,
// //       category,
// //       discountPercent,
// //       featured,
// //       isActive,
// //       ingredients
// //     } = req.body;

// //     const product = await prisma.product.create({
// //       data: {
// //         title,
// //         description,
// //         price: Number(price),
// //         image,
// //         category,
// //         discountPercent: Number(discountPercent) || 0,
// //         featured: featured || false,
// //         isActive: isActive !== undefined ? Boolean(isActive) : true,

// //         ingredients: {
// //           create: Array.isArray(ingredients)
// //             ? ingredients.map(item => ({
// //                 title: item.title,
// //                 description: item.description || '',
// //                 image: item.image || ''
// //               }))
// //             : []
// //         }
// //       },
// //       include: {
// //         ingredients: true
// //       }
// //     });

// //     return res.status(201).json(product);

// //   } catch (error) {

// //     console.error('CREATE PRODUCT ERROR:', error);

// //     return res.status(500).json({
// //       message: 'Failed to create product',
// //       error: error.message
// //     });

// //   }
// // };


// // // UPDATE PRODUCT
// // const updateProduct = async (req, res) => {
// //   try {

// //     const {
// //       title,
// //       description,
// //       price,
// //       image,
// //       category,
// //       discountPercent,
// //       featured,
// //       isActive,
// //       ingredients
// //     } = req.body;

// //     const productId = Number(req.params.id);

// //     // Delete old ingredients
// //     await prisma.productIngredient.deleteMany({
// //       where: {
// //         productId
// //       }
// //     });

// //     const product = await prisma.product.update({
// //       where: {
// //         id: productId
// //       },
// //       data: {
// //         title,
// //         description,
// //         price: Number(price),
// //         image,
// //         category,
// //         discountPercent: Number(discountPercent) || 0,
// //         featured,
// //         isActive: isActive !== undefined ? Boolean(isActive) : true,

// //         ingredients: {
// //           create: Array.isArray(ingredients)
// //             ? ingredients.map(item => ({
// //                 title: item.title,
// //                 description: item.description || '',
// //                 image: item.image || ''
// //               }))
// //             : []
// //         }
// //       },
// //       include: {
// //         ingredients: true
// //       }
// //     });

// //     return res.json(product);

// //   } catch (error) {

// //     console.error('UPDATE PRODUCT ERROR:', error);

// //     return res.status(500).json({
// //       message: 'Failed to update product',
// //       error: error.message
// //     });

// //   }
// // };


// // // TOGGLE PRODUCT ACTIVE / INACTIVE
// // const toggleProductStatus = async (req, res) => {
// //   try {

// //     const productId = Number(req.params.id);

// //     const product = await prisma.product.findUnique({
// //       where: {
// //         id: productId
// //       }
// //     });

// //     if (!product) {
// //       return res.status(404).json({
// //         message: 'Product not found'
// //       });
// //     }

// //     const updatedProduct = await prisma.product.update({
// //       where: {
// //         id: productId
// //       },
// //       data: {
// //         isActive: !product.isActive
// //       },
// //       include: {
// //         ingredients: true
// //       }
// //     });

// //     return res.json({
// //       message: updatedProduct.isActive
// //         ? 'Product is now active'
// //         : 'Product is now out of stock',

// //       product: updatedProduct
// //     });

// //   } catch (error) {

// //     console.error('TOGGLE PRODUCT STATUS ERROR:', error);

// //     return res.status(500).json({
// //       message: 'Failed to update product status',
// //       error: error.message
// //     });

// //   }
// // };


// // // DELETE PRODUCT
// // const deleteProduct = async (req, res) => {
// //   try {

// //     await prisma.product.delete({
// //       where: {
// //         id: Number(req.params.id)
// //       }
// //     });

// //     return res.json({
// //       message: 'Product deleted successfully'
// //     });

// //   } catch (error) {

// //     console.error('DELETE PRODUCT ERROR:', error);

// //     return res.status(500).json({
// //       message: 'Failed to delete product',
// //       error: error.message
// //     });

// //   }
// // };


// // module.exports = {
// //   getProducts,
// //   getFeaturedProducts,
// //   getProductById,
// //   createProduct,
// //   updateProduct,
// //   toggleProductStatus,
// //   deleteProduct
// // };


// const prisma = require('../config/db');

// // GET ALL PRODUCTS
// const getProducts = async (req, res) => {
//   try {

//     const products = await prisma.product.findMany({
//       include: {
//         ingredients: true
//       },
//       orderBy: [
//         {
//           sortOrder: 'asc'
//         },
//         {
//           createdAt: 'desc'
//         }
//       ]
//     });

//     return res.json(products);

//   } catch (error) {

//     console.error('GET PRODUCTS ERROR:', error);

//     return res.status(500).json({
//       message: 'Failed to fetch products',
//       error: error.message
//     });

//   }
// };


// // GET FEATURED PRODUCTS
// const getFeaturedProducts = async (req, res) => {
//   try {

//     const products = await prisma.product.findMany({
//       where: {
//         featured: true
//       },
//       include: {
//         ingredients: true
//       },
//       orderBy: [
//         {
//           sortOrder: 'asc'
//         },
//         {
//           createdAt: 'desc'
//         }
//       ],
//       take: 6
//     });

//     return res.json(products);

//   } catch (error) {

//     console.error('GET FEATURED PRODUCTS ERROR:', error);

//     return res.status(500).json({
//       message: 'Failed to fetch featured products',
//       error: error.message
//     });

//   }
// };


// // GET PRODUCT BY ID
// const getProductById = async (req, res) => {
//   try {

//     const product = await prisma.product.findUnique({
//       where: {
//         id: Number(req.params.id)
//       },
//       include: {
//         ingredients: true
//       }
//     });

//     if (!product) {
//       return res.status(404).json({
//         message: 'Product not found'
//       });
//     }

//     return res.json(product);

//   } catch (error) {

//     console.error('GET PRODUCT ERROR:', error);

//     return res.status(500).json({
//       message: 'Failed to fetch product',
//       error: error.message
//     });

//   }
// };


// // CREATE PRODUCT
// const createProduct = async (req, res) => {
//   try {

//     const {
//       title,
//       description,
//       price,
//       image,
//       category,
//       discountPercent,
//       featured,
//       isActive,
//       ingredients
//     } = req.body;

//     // Get the current highest product order
//     const lastProduct = await prisma.product.findFirst({
//       orderBy: {
//         sortOrder: 'desc'
//       }
//     });

//     const nextSortOrder = lastProduct
//       ? lastProduct.sortOrder + 1
//       : 1;

//     const product = await prisma.product.create({
//       data: {
//         title,
//         description,
//         price: Number(price),
//         image,
//         category,
//         discountPercent: Number(discountPercent) || 0,
//         featured: featured || false,
//         isActive: isActive !== undefined ? Boolean(isActive) : true,

//         // Automatically place new product at the end
//         sortOrder: nextSortOrder,

//         ingredients: {
//           create: Array.isArray(ingredients)
//             ? ingredients.map(item => ({
//                 title: item.title,
//                 description: item.description || '',
//                 image: item.image || ''
//               }))
//             : []
//         }
//       },
//       include: {
//         ingredients: true
//       }
//     });

//     return res.status(201).json(product);

//   } catch (error) {

//     console.error('CREATE PRODUCT ERROR:', error);

//     return res.status(500).json({
//       message: 'Failed to create product',
//       error: error.message
//     });

//   }
// };


// // UPDATE PRODUCT
// const updateProduct = async (req, res) => {
//   try {

//     const {
//       title,
//       description,
//       price,
//       image,
//       category,
//       discountPercent,
//       featured,
//       isActive,
//       sortOrder,
//       ingredients
//     } = req.body;

//     const productId = Number(req.params.id);

//     // Delete old ingredients
//     await prisma.productIngredient.deleteMany({
//       where: {
//         productId
//       }
//     });

//     const product = await prisma.product.update({
//       where: {
//         id: productId
//       },
//       data: {
//         title,
//         description,
//         price: Number(price),
//         image,
//         category,
//         discountPercent: Number(discountPercent) || 0,
//         featured,

//         // Do not automatically activate an inactive product
//         ...(isActive !== undefined && {
//           isActive: Boolean(isActive)
//         }),

//         // Update order only when provided
//         ...(sortOrder !== undefined && {
//           sortOrder: Number(sortOrder)
//         }),

//         ingredients: {
//           create: Array.isArray(ingredients)
//             ? ingredients.map(item => ({
//                 title: item.title,
//                 description: item.description || '',
//                 image: item.image || ''
//               }))
//             : []
//         }
//       },
//       include: {
//         ingredients: true
//       }
//     });

//     return res.json(product);

//   } catch (error) {

//     console.error('UPDATE PRODUCT ERROR:', error);

//     return res.status(500).json({
//       message: 'Failed to update product',
//       error: error.message
//     });

//   }
// };


// // UPDATE PRODUCT ORDER
// const updateProductOrder = async (req, res) => {
//   try {

//     const { productId, sortOrder } = req.body;

//     const id = Number(productId);
//     const order = Number(sortOrder);

//     if (!id || Number.isNaN(order)) {
//       return res.status(400).json({
//         message: 'Product ID and sort order are required'
//       });
//     }

//     const product = await prisma.product.findUnique({
//       where: {
//         id
//       }
//     });

//     if (!product) {
//       return res.status(404).json({
//         message: 'Product not found'
//       });
//     }

//     const updatedProduct = await prisma.product.update({
//       where: {
//         id
//       },
//       data: {
//         sortOrder: order
//       },
//       include: {
//         ingredients: true
//       }
//     });

//     return res.json({
//       message: 'Product order updated successfully',
//       product: updatedProduct
//     });

//   } catch (error) {

//     console.error('UPDATE PRODUCT ORDER ERROR:', error);

//     return res.status(500).json({
//       message: 'Failed to update product order',
//       error: error.message
//     });

//   }
// };


// // UPDATE MULTIPLE PRODUCT ORDERS
// const updateProductOrders = async (req, res) => {
//   try {

//     const { products } = req.body;

//     if (!Array.isArray(products)) {
//       return res.status(400).json({
//         message: 'Products array is required'
//       });
//     }

//     await prisma.$transaction(
//       products.map((product, index) =>
//         prisma.product.update({
//           where: {
//             id: Number(product.id)
//           },
//           data: {
//             sortOrder: index + 1
//           }
//         })
//       )
//     );

//     const updatedProducts = await prisma.product.findMany({
//       include: {
//         ingredients: true
//       },
//       orderBy: [
//         {
//           sortOrder: 'asc'
//         },
//         {
//           createdAt: 'desc'
//         }
//       ]
//     });

//     return res.json({
//       message: 'Product order updated successfully',
//       products: updatedProducts
//     });

//   } catch (error) {

//     console.error('UPDATE PRODUCT ORDERS ERROR:', error);

//     return res.status(500).json({
//       message: 'Failed to update product orders',
//       error: error.message
//     });

//   }
// };


// // TOGGLE PRODUCT ACTIVE / INACTIVE
// const toggleProductStatus = async (req, res) => {
//   try {

//     const productId = Number(req.params.id);

//     const product = await prisma.product.findUnique({
//       where: {
//         id: productId
//       }
//     });

//     if (!product) {
//       return res.status(404).json({
//         message: 'Product not found'
//       });
//     }

//     const updatedProduct = await prisma.product.update({
//       where: {
//         id: productId
//       },
//       data: {
//         isActive: !product.isActive
//       },
//       include: {
//         ingredients: true
//       }
//     });

//     return res.json({
//       message: updatedProduct.isActive
//         ? 'Product is now active'
//         : 'Product is now out of stock',

//       product: updatedProduct
//     });

//   } catch (error) {

//     console.error('TOGGLE PRODUCT STATUS ERROR:', error);

//     return res.status(500).json({
//       message: 'Failed to update product status',
//       error: error.message
//     });

//   }
// };


// // DELETE PRODUCT
// const deleteProduct = async (req, res) => {
//   try {

//     await prisma.product.delete({
//       where: {
//         id: Number(req.params.id)
//       }
//     });

//     return res.json({
//       message: 'Product deleted successfully'
//     });

//   } catch (error) {

//     console.error('DELETE PRODUCT ERROR:', error);

//     return res.status(500).json({
//       message: 'Failed to delete product',
//       error: error.message
//     });

//   }
// };


// module.exports = {
//   getProducts,
//   getFeaturedProducts,
//   getProductById,
//   createProduct,
//   updateProduct,
//   updateProductOrder,
//   updateProductOrders,
//   toggleProductStatus,
//   deleteProduct
// };


const prisma = require('../config/db');


// =====================================================
// GET ALL PRODUCTS
// =====================================================

const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      include: {
        ingredients: true
      },
      orderBy: [
        {
          sortOrder: 'asc'
        },
        {
          createdAt: 'desc'
        }
      ]
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


// =====================================================
// GET FEATURED PRODUCTS
// =====================================================

const getFeaturedProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        featured: true
      },

      include: {
        ingredients: true
      },

      orderBy: [
        {
          sortOrder: 'asc'
        },
        {
          createdAt: 'desc'
        }
      ],

      take: 6
    });

    return res.json(products);

  } catch (error) {
    console.error(
      'GET FEATURED PRODUCTS ERROR:',
      error
    );

    return res.status(500).json({
      message: 'Failed to fetch featured products',
      error: error.message
    });
  }
};


// =====================================================
// GET PRODUCT BY ID
// =====================================================

const getProductById = async (req, res) => {
  try {
    const productId = Number(req.params.id);

    if (!Number.isInteger(productId)) {
      return res.status(400).json({
        message: 'Invalid product ID'
      });
    }

    const product = await prisma.product.findUnique({
      where: {
        id: productId
      },

      include: {
        ingredients: true
      }
    });

    if (!product) {
      return res.status(404).json({
        message: 'Product not found'
      });
    }

    return res.json(product);

  } catch (error) {
    console.error(
      'GET PRODUCT ERROR:',
      error
    );

    return res.status(500).json({
      message: 'Failed to fetch product',
      error: error.message
    });
  }
};


// =====================================================
// CREATE PRODUCT
// =====================================================

const createProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      image,
      category,
      discountPercent,
      featured,
      isActive,
      ingredients
    } = req.body;


    // -------------------------------------------------
    // VALIDATION
    // -------------------------------------------------

    if (!title || !title.trim()) {
      return res.status(400).json({
        message: 'Product title is required'
      });
    }

    if (
      price === undefined ||
      price === null ||
      Number.isNaN(Number(price))
    ) {
      return res.status(400).json({
        message: 'Valid product price is required'
      });
    }


    // -------------------------------------------------
    // GET LAST SORT ORDER
    // -------------------------------------------------

    const lastProduct =
      await prisma.product.findFirst({
        orderBy: {
          sortOrder: 'desc'
        }
      });


    const nextSortOrder = lastProduct
      ? Number(lastProduct.sortOrder || 0) + 1
      : 1;


    // -------------------------------------------------
    // CREATE PRODUCT
    // -------------------------------------------------

    const product =
      await prisma.product.create({
        data: {
          title: title.trim(),

          description:
            description || '',

          price: Number(price),

          image:
            image || null,

          category:
            category || null,

          discountPercent:
            Number(discountPercent) || 0,

          featured:
            featured !== undefined
              ? Boolean(featured)
              : false,

          isActive:
            isActive !== undefined
              ? Boolean(isActive)
              : true,

          // New products are automatically
          // placed at the end.
          sortOrder:
            nextSortOrder,


          // -------------------------------------------------
          // INGREDIENTS
          // -------------------------------------------------

          ingredients: {
            create:
              Array.isArray(ingredients)
                ? ingredients.map(
                    (item) => ({
                      title:
                        item.title || '',

                      description:
                        item.description ||
                        '',

                      image:
                        item.image || ''
                    })
                  )
                : []
          }
        },

        include: {
          ingredients: true
        }
      });


    return res.status(201).json(product);

  } catch (error) {
    console.error(
      'CREATE PRODUCT ERROR:',
      error
    );

    return res.status(500).json({
      message: 'Failed to create product',
      error: error.message
    });
  }
};


// =====================================================
// UPDATE PRODUCT
// =====================================================

const updateProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      image,
      category,
      discountPercent,
      featured,
      isActive,
      sortOrder,
      ingredients
    } = req.body;


    const productId =
      Number(req.params.id);


    // -------------------------------------------------
    // VALIDATE ID
    // -------------------------------------------------

    if (!Number.isInteger(productId)) {
      return res.status(400).json({
        message: 'Invalid product ID'
      });
    }


    // -------------------------------------------------
    // CHECK PRODUCT
    // -------------------------------------------------

    const existingProduct =
      await prisma.product.findUnique({
        where: {
          id: productId
        }
      });


    if (!existingProduct) {
      return res.status(404).json({
        message: 'Product not found'
      });
    }


    // -------------------------------------------------
    // DELETE OLD INGREDIENTS
    // -------------------------------------------------

    await prisma.productIngredient.deleteMany({
      where: {
        productId
      }
    });


    // -------------------------------------------------
    // BUILD UPDATE DATA
    // -------------------------------------------------

    const updateData = {
      title:
        title !== undefined
          ? title.trim()
          : existingProduct.title,

      description:
        description !== undefined
          ? description
          : existingProduct.description,

      price:
        price !== undefined
          ? Number(price)
          : existingProduct.price,

      image:
        image !== undefined
          ? image
          : existingProduct.image,

      category:
        category !== undefined
          ? category
          : existingProduct.category,

      discountPercent:
        discountPercent !== undefined
          ? Number(discountPercent) || 0
          : existingProduct.discountPercent,

      featured:
        featured !== undefined
          ? Boolean(featured)
          : existingProduct.featured
    };


    // -------------------------------------------------
    // IMPORTANT:
    // Preserve existing active/inactive status
    // unless explicitly provided.
    // -------------------------------------------------

    if (
      isActive !== undefined
    ) {
      updateData.isActive =
        Boolean(isActive);
    }


    // -------------------------------------------------
    // IMPORTANT:
    // Only update sortOrder when supplied.
    // -------------------------------------------------

    if (
      sortOrder !== undefined &&
      !Number.isNaN(Number(sortOrder))
    ) {
      updateData.sortOrder =
        Number(sortOrder);
    }


    // -------------------------------------------------
    // INGREDIENTS
    // -------------------------------------------------

    updateData.ingredients = {
      create:
        Array.isArray(ingredients)
          ? ingredients.map(
              (item) => ({
                title:
                  item.title || '',

                description:
                  item.description ||
                  '',

                image:
                  item.image || ''
              })
            )
          : []
    };


    // -------------------------------------------------
    // UPDATE
    // -------------------------------------------------

    const product =
      await prisma.product.update({
        where: {
          id: productId
        },

        data: updateData,

        include: {
          ingredients: true
        }
      });


    return res.json(product);

  } catch (error) {
    console.error(
      'UPDATE PRODUCT ERROR:',
      error
    );

    return res.status(500).json({
      message: 'Failed to update product',
      error: error.message
    });
  }
};


// =====================================================
// UPDATE SINGLE PRODUCT ORDER
// =====================================================

const updateProductOrder = async (
  req,
  res
) => {
  try {
    const {
      productId,
      sortOrder
    } = req.body;


    const id =
      Number(productId);

    const order =
      Number(sortOrder);


    // -------------------------------------------------
    // VALIDATION
    // -------------------------------------------------

    if (
      !Number.isInteger(id) ||
      Number.isNaN(order)
    ) {
      return res.status(400).json({
        message:
          'Product ID and sort order are required'
      });
    }


    // -------------------------------------------------
    // CHECK PRODUCT
    // -------------------------------------------------

    const product =
      await prisma.product.findUnique({
        where: {
          id
        }
      });


    if (!product) {
      return res.status(404).json({
        message: 'Product not found'
      });
    }


    // -------------------------------------------------
    // UPDATE ORDER
    // -------------------------------------------------

    const updatedProduct =
      await prisma.product.update({
        where: {
          id
        },

        data: {
          sortOrder: order
        },

        include: {
          ingredients: true
        }
      });


    return res.json({
      message:
        'Product order updated successfully',

      product:
        updatedProduct
    });

  } catch (error) {
    console.error(
      'UPDATE PRODUCT ORDER ERROR:',
      error
    );

    return res.status(500).json({
      message:
        'Failed to update product order',

      error:
        error.message
    });
  }
};


// =====================================================
// UPDATE MULTIPLE PRODUCT ORDERS
// =====================================================

const updateProductOrders = async (
  req,
  res
) => {
  try {
    const {
      products
    } = req.body;


    // -------------------------------------------------
    // VALIDATION
    // -------------------------------------------------

    if (!Array.isArray(products)) {
      return res.status(400).json({
        message:
          'Products array is required'
      });
    }


    if (products.length === 0) {
      return res.status(400).json({
        message:
          'Products array cannot be empty'
      });
    }


    // -------------------------------------------------
    // NORMALIZE IDS
    // -------------------------------------------------

    const productIds =
      products.map(
        (product) =>
          Number(product.id)
      );


    // -------------------------------------------------
    // CHECK INVALID IDS
    // -------------------------------------------------

    if (
      productIds.some(
        (id) =>
          !Number.isInteger(id)
      )
    ) {
      return res.status(400).json({
        message:
          'Invalid product ID found'
      });
    }


    // -------------------------------------------------
    // CHECK DUPLICATE IDS
    // -------------------------------------------------

    const uniqueIds =
      new Set(productIds);


    if (
      uniqueIds.size !==
      productIds.length
    ) {
      return res.status(400).json({
        message:
          'Duplicate product IDs are not allowed'
      });
    }


    // -------------------------------------------------
    // UPDATE ALL ORDERS IN ONE TRANSACTION
    // -------------------------------------------------

    await prisma.$transaction(
      products.map(
        (product, index) =>
          prisma.product.update({
            where: {
              id:
                Number(
                  product.id
                )
            },

            data: {
              sortOrder:
                index + 1
            }
          })
      )
    );


    // -------------------------------------------------
    // GET UPDATED PRODUCTS
    // -------------------------------------------------

    const updatedProducts =
      await prisma.product.findMany({
        include: {
          ingredients: true
        },

        orderBy: [
          {
            sortOrder: 'asc'
          },
          {
            createdAt: 'desc'
          }
        ]
      });


    return res.json({
      message:
        'Product order updated successfully',

      products:
        updatedProducts
    });

  } catch (error) {
    console.error(
      'UPDATE PRODUCT ORDERS ERROR:',
      error
    );

    return res.status(500).json({
      message:
        'Failed to update product orders',

      error:
        error.message
    });
  }
};


// =====================================================
// TOGGLE PRODUCT ACTIVE / INACTIVE
// =====================================================

const toggleProductStatus = async (
  req,
  res
) => {
  try {
    const productId =
      Number(req.params.id);


    // -------------------------------------------------
    // VALIDATE ID
    // -------------------------------------------------

    if (
      !Number.isInteger(productId)
    ) {
      return res.status(400).json({
        message:
          'Invalid product ID'
      });
    }


    // -------------------------------------------------
    // FIND PRODUCT
    // -------------------------------------------------

    const product =
      await prisma.product.findUnique({
        where: {
          id: productId
        }
      });


    if (!product) {
      return res.status(404).json({
        message:
          'Product not found'
      });
    }


    // -------------------------------------------------
    // TOGGLE STATUS
    // -------------------------------------------------

    const updatedProduct =
      await prisma.product.update({
        where: {
          id: productId
        },

        data: {
          isActive:
            !product.isActive
        },

        include: {
          ingredients: true
        }
      });


    return res.json({
      message:
        updatedProduct.isActive
          ? 'Product is now active'
          : 'Product is now out of stock',

      product:
        updatedProduct
    });

  } catch (error) {
    console.error(
      'TOGGLE PRODUCT STATUS ERROR:',
      error
    );

    return res.status(500).json({
      message:
        'Failed to update product status',

      error:
        error.message
    });
  }
};


// =====================================================
// DELETE PRODUCT
// =====================================================

const deleteProduct = async (
  req,
  res
) => {
  try {
    const productId =
      Number(req.params.id);


    // -------------------------------------------------
    // VALIDATE ID
    // -------------------------------------------------

    if (
      !Number.isInteger(productId)
    ) {
      return res.status(400).json({
        message:
          'Invalid product ID'
      });
    }


    // -------------------------------------------------
    // CHECK PRODUCT
    // -------------------------------------------------

    const product =
      await prisma.product.findUnique({
        where: {
          id: productId
        }
      });


    if (!product) {
      return res.status(404).json({
        message:
          'Product not found'
      });
    }


    // -------------------------------------------------
    // DELETE PRODUCT
    // -------------------------------------------------

    await prisma.product.delete({
      where: {
        id: productId
      }
    });


    return res.json({
      message:
        'Product deleted successfully'
    });

  } catch (error) {
    console.error(
      'DELETE PRODUCT ERROR:',
      error
    );

    return res.status(500).json({
      message:
        'Failed to delete product',

      error:
        error.message
    });
  }
};


// =====================================================
// EXPORTS
// =====================================================

module.exports = {
  getProducts,
  getFeaturedProducts,
  getProductById,
  createProduct,
  updateProduct,
  updateProductOrder,
  updateProductOrders,
  toggleProductStatus,
  deleteProduct
};