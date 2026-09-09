

// // // const prisma = require('../config/db');

// // // // GET ALL PRODUCTS
// // // const getProducts = async (req, res) => {
// // // try {
// // // const products = await prisma.product.findMany({
// // // orderBy: {
// // // createdAt: 'desc'
// // // }
// // // });

// // // ```
// // // res.json(products);
// // // ```

// // // } catch (error) {
// // // console.error(error);

// // // ```
// // // res.status(500).json({
// // //   message: 'Failed to fetch products'
// // // });
// // // ```

// // // }
// // // };

// // // // GET FEATURED PRODUCTS
// // // const getFeaturedProducts = async (req, res) => {
// // // try {
// // // const products = await prisma.product.findMany({
// // // where: {
// // // featured: true
// // // },
// // // orderBy: {
// // // createdAt: 'desc'
// // // },
// // // take: 6
// // // });

// // // ```
// // // res.json(products);
// // // ```

// // // } catch (error) {
// // // console.error(error);

// // // ```
// // // res.status(500).json({
// // //   message: 'Failed to fetch featured products'
// // // });
// // // ```

// // // }
// // // };

// // // // CREATE PRODUCT
// // // const createProduct = async (req, res) => {
// // // try {
// // // const {
// // // title,
// // // description,
// // // price,
// // // image,
// // // featured
// // // } = req.body;

// // // ```
// // // const product = await prisma.product.create({
// // //   data: {
// // //     title,
// // //     description,
// // //     price: Number(price),
// // //     image,
// // //     featured
// // //   }
// // // });

// // // res.status(201).json(product);
// // // ```

// // // } catch (error) {
// // // console.error(error);

// // // ```
// // // res.status(500).json({
// // //   message: 'Failed to create product'
// // // });
// // // ```

// // // }
// // // };

// // // // GET PRODUCT BY ID
// // // const getProductById = async (req, res) => {
// // // try {
// // // const product = await prisma.product.findUnique({
// // // where: {
// // // id: Number(req.params.id)
// // // }
// // // });

// // // ```
// // // if (!product) {
// // //   return res.status(404).json({
// // //     message: 'Product not found'
// // //   });
// // // }

// // // res.json(product);
// // // ```

// // // } catch (error) {
// // // console.error(error);

// // // ```
// // // res.status(500).json({
// // //   message: 'Failed to fetch product'
// // // });
// // // ```

// // // }
// // // };

// // // // UPDATE PRODUCT
// // // const updateProduct = async (req, res) => {
// // // try {
// // // const {
// // // title,
// // // description,
// // // price,
// // // image,
// // // featured
// // // } = req.body;

// // // ```
// // // const product = await prisma.product.update({
// // //   where: {
// // //     id: Number(req.params.id)
// // //   },
// // //   data: {
// // //     title,
// // //     description,
// // //     price: Number(price),
// // //     image,
// // //     featured
// // //   }
// // // });

// // // res.json(product);
// // // ```

// // // } catch (error) {
// // // console.error(error);

// // // ```
// // // res.status(500).json({
// // //   message: 'Failed to update product'
// // // });
// // // ```

// // // }
// // // };

// // // // DELETE PRODUCT
// // // const deleteProduct = async (req, res) => {
// // // try {
// // // await prisma.product.delete({
// // // where: {
// // // id: Number(req.params.id)
// // // }
// // // });

// // // ```
// // // res.json({
// // //   message: 'Product deleted'
// // // });
// // // ```

// // // } catch (error) {
// // // console.error(error);

// // // ```
// // // res.status(500).json({
// // //   message: 'Failed to delete product'
// // // });
// // // ```

// // // }
// // // };

// // // module.exports = {
// // // getProducts,
// // // getFeaturedProducts,
// // // createProduct,
// // // getProductById,
// // // updateProduct,
// // // deleteProduct
// // // };



// // // const prisma = require('../config/db');

// // // // GET ALL PRODUCTS
// // // const getProducts = async (req, res) => {
// // // try {
// // // const products = await prisma.product.findMany({
// // // orderBy: {
// // // createdAt: 'desc'
// // // }
// // // });

// // // ```
// // // res.json(products);
// // // ```

// // // } catch (error) {
// // // console.error('GET PRODUCTS ERROR:', error);

// // // ```
// // // res.status(500).json({
// // //   message: 'Failed to fetch products'
// // // });
// // // ```

// // // }
// // // };

// // // // GET FEATURED PRODUCTS
// // // const getFeaturedProducts = async (req, res) => {
// // // try {
// // // const products = await prisma.product.findMany({
// // // where: {
// // // featured: true
// // // },
// // // orderBy: {
// // // createdAt: 'desc'
// // // },
// // // take: 6
// // // });

// // // ```
// // // res.json(products);
// // // ```

// // // } catch (error) {
// // // console.error('GET FEATURED PRODUCTS ERROR:', error);

// // // ```
// // // res.status(500).json({
// // //   message: 'Failed to fetch featured products'
// // // });
// // // ```

// // // }
// // // };

// // // // CREATE PRODUCT
// // // const createProduct = async (req, res) => {
// // // try {
// // // const {
// // // title,
// // // description,
// // // price,
// // // image,
// // // featured
// // // } = req.body;

// // // ```
// // // const product = await prisma.product.create({
// // //   data: {
// // //     title,
// // //     description,
// // //     price: Number(price),
// // //     image,
// // //     featured: featured || false
// // //   }
// // // });

// // // res.status(201).json(product);
// // // ```

// // // } catch (error) {
// // // console.error('CREATE PRODUCT ERROR:', error);

// // // ```
// // // res.status(500).json({
// // //   message: 'Failed to create product'
// // // });
// // // ```

// // // }
// // // };

// // // // GET PRODUCT BY ID
// // // const getProductById = async (req, res) => {
// // // try {
// // // const product = await prisma.product.findUnique({
// // // where: {
// // // id: Number(req.params.id)
// // // }
// // // });

// // // ```
// // // if (!product) {
// // //   return res.status(404).json({
// // //     message: 'Product not found'
// // //   });
// // // }

// // // res.json(product);
// // // ```

// // // } catch (error) {
// // // console.error('GET PRODUCT ERROR:', error);

// // // ```
// // // res.status(500).json({
// // //   message: 'Failed to fetch product'
// // // });
// // // ```

// // // }
// // // };

// // // // UPDATE PRODUCT
// // // const updateProduct = async (req, res) => {
// // // try {
// // // const {
// // // title,
// // // description,
// // // price,
// // // image,
// // // featured
// // // } = req.body;

// // // ```
// // // const product = await prisma.product.update({
// // //   where: {
// // //     id: Number(req.params.id)
// // //   },
// // //   data: {
// // //     title,
// // //     description,
// // //     price: Number(price),
// // //     image,
// // //     featured
// // //   }
// // // });

// // // res.json(product);
// // // ```

// // // } catch (error) {
// // // console.error('UPDATE PRODUCT ERROR:', error);

// // // ```
// // // res.status(500).json({
// // //   message: 'Failed to update product'
// // // });
// // // ```

// // // }
// // // };

// // // // DELETE PRODUCT
// // // const deleteProduct = async (req, res) => {
// // // try {
// // // await prisma.product.delete({
// // // where: {
// // // id: Number(req.params.id)
// // // }
// // // });

// // // ```
// // // res.json({
// // //   message: 'Product deleted'
// // // });
// // // ```

// // // } catch (error) {
// // // console.error('DELETE PRODUCT ERROR:', error);

// // // ```
// // // res.status(500).json({
// // //   message: 'Failed to delete product'
// // // });
// // // ```

// // // }
// // // };

// // // module.exports = {
// // // getProducts,
// // // getFeaturedProducts,
// // // createProduct,
// // // getProductById,
// // // updateProduct,
// // // deleteProduct
// // // };

// // // const prisma = require('../config/db');

// // // // GET ALL PRODUCTS
// // // const getProducts = async (req, res) => {
// // // try {
// // // const products = await prisma.product.findMany({
// // // orderBy: {
// // // createdAt: 'desc'
// // // }
// // // });


// // // return res.json(products);


// // // } catch (error) {
// // // console.error('GET PRODUCTS ERROR:', error);


// // // return res.status(500).json({
// // //   message: 'Failed to fetch products',
// // //   error: error.message
// // // });

// // // }
// // // };

// // // // GET FEATURED PRODUCTS
// // // const getFeaturedProducts = async (req, res) => {
// // // try {
// // // const products = await prisma.product.findMany({
// // // where: {
// // // featured: true
// // // },
// // // orderBy: {
// // // createdAt: 'desc'
// // // },
// // // take: 6
// // // });


// // // return res.json(products);


// // // } catch (error) {
// // // console.error('GET FEATURED PRODUCTS ERROR:', error);


// // // return res.status(500).json({
// // //   message: 'Failed to fetch featured products',
// // //   error: error.message
// // // });


// // // }
// // // };

// // // // CREATE PRODUCT
// // // const createProduct = async (req, res) => {
// // // try {
// // // const {
// // // title,
// // // description,
// // // price,
// // // image,
// // // featured
// // // } = req.body;


// // // const product = await prisma.product.create({
// // //   data: {
// // //     title,
// // //     description,
// // //     price: Number(price),
// // //     image,
// // //     featured: featured || false
// // //   }
// // // });

// // // return res.status(201).json(product);


// // // } catch (error) {
// // // console.error('CREATE PRODUCT ERROR:', error);


// // // return res.status(500).json({
// // //   message: 'Failed to create product',
// // //   error: error.message
// // // });


// // // }
// // // };

// // // // GET PRODUCT BY ID
// // // const getProductById = async (req, res) => {
// // // try {
// // // const product = await prisma.product.findUnique({
// // // where: {
// // // id: Number(req.params.id)
// // // }
// // // });


// // // if (!product) {
// // //   return res.status(404).json({
// // //     message: 'Product not found'
// // //   });
// // // }

// // // return res.json(product);


// // // } catch (error) {
// // // console.error('GET PRODUCT ERROR:', error);


// // // return res.status(500).json({
// // //   message: 'Failed to fetch product',
// // //   error: error.message
// // // });


// // // }
// // // };

// // // // UPDATE PRODUCT
// // // const updateProduct = async (req, res) => {
// // // try {
// // // const {
// // // title,
// // // description,
// // // price,
// // // image,
// // // featured
// // // } = req.body;


// // // const product = await prisma.product.update({
// // //   where: {
// // //     id: Number(req.params.id)
// // //   },
// // //   data: {
// // //     title,
// // //     description,
// // //     price: Number(price),
// // //     image,
// // //     featured
// // //   }
// // // });

// // // return res.json(product);


// // // } catch (error) {
// // // console.error('UPDATE PRODUCT ERROR:', error);


// // // return res.status(500).json({
// // //   message: 'Failed to update product',
// // //   error: error.message
// // // });


// // // }
// // // };

// // // // DELETE PRODUCT
// // // const deleteProduct = async (req, res) => {
// // // try {
// // // await prisma.product.delete({
// // // where: {
// // // id: Number(req.params.id)
// // // }
// // // });


// // // return res.json({
// // //   message: 'Product deleted successfully'
// // // });


// // // } catch (error) {
// // // console.error('DELETE PRODUCT ERROR:', error);


// // // return res.status(500).json({
// // //   message: 'Failed to delete product',
// // //   error: error.message
// // // });


// // // }
// // // };

// // // module.exports = {
// // // getProducts,
// // // getFeaturedProducts,
// // // createProduct,
// // // getProductById,
// // // updateProduct,
// // // deleteProduct
// // // };


// // // const prisma = require('../config/db');

// // // // GET ALL PRODUCTS
// // // const getProducts = async (req, res) => {
// // //   try {

// // //     const products = await prisma.product.findMany({
// // //       orderBy: {
// // //         createdAt: 'desc'
// // //       }
// // //     });

// // //     return res.json(products);

// // //   } catch (error) {

// // //     console.error('GET PRODUCTS ERROR:', error);

// // //     return res.status(500).json({
// // //       message: 'Failed to fetch products',
// // //       error: error.message
// // //     });

// // //   }
// // // };

// // // // GET FEATURED PRODUCTS
// // // const getFeaturedProducts = async (req, res) => {
// // //   try {

// // //     const products = await prisma.product.findMany({
// // //       where: {
// // //         featured: true
// // //       },
// // //       orderBy: {
// // //         createdAt: 'desc'
// // //       },
// // //       take: 6
// // //     });

// // //     return res.json(products);

// // //   } catch (error) {

// // //     console.error('GET FEATURED PRODUCTS ERROR:', error);

// // //     return res.status(500).json({
// // //       message: 'Failed to fetch featured products',
// // //       error: error.message
// // //     });

// // //   }
// // // };

// // // // GET PRODUCT BY ID
// // // const getProductById = async (req, res) => {
// // //   try {

// // //     const product = await prisma.product.findUnique({
// // //       where: {
// // //         id: Number(req.params.id)
// // //       }
// // //     });

// // //     if (!product) {
// // //       return res.status(404).json({
// // //         message: 'Product not found'
// // //       });
// // //     }

// // //     return res.json(product);

// // //   } catch (error) {

// // //     console.error('GET PRODUCT ERROR:', error);

// // //     return res.status(500).json({
// // //       message: 'Failed to fetch product',
// // //       error: error.message
// // //     });

// // //   }
// // // };

// // // // CREATE PRODUCT
// // // const createProduct = async (req, res) => {
// // //   try {

// // //     const {
// // //       title,
// // //       description,
// // //       price,
// // //       image,
// // //       category,
// // //       discountPercent,
// // //       featured
// // //     } = req.body;

// // //     const product = await prisma.product.create({
// // //       data: {
// // //         title,
// // //         description,
// // //         price: Number(price),
// // //         image,
// // //         category,
// // //         discountPercent: Number(discountPercent) || 0,
// // //         featured: featured || false
// // //       }
// // //     });

// // //     return res.status(201).json(product);

// // //   } catch (error) {

// // //     console.error('CREATE PRODUCT ERROR:', error);

// // //     return res.status(500).json({
// // //       message: 'Failed to create product',
// // //       error: error.message
// // //     });

// // //   }
// // // };

// // // // UPDATE PRODUCT
// // // const updateProduct = async (req, res) => {
// // //   try {

// // //     const {
// // //       title,
// // //       description,
// // //       price,
// // //       image,
// // //       category,
// // //       discountPercent,
// // //       featured
// // //     } = req.body;

// // //     const product = await prisma.product.update({
// // //       where: {
// // //         id: Number(req.params.id)
// // //       },
// // //       data: {
// // //         title,
// // //         description,
// // //         price: Number(price),
// // //         image,
// // //         category,
// // //         discountPercent: Number(discountPercent) || 0,
// // //         featured
// // //       }
// // //     });

// // //     return res.json(product);

// // //   } catch (error) {

// // //     console.error('UPDATE PRODUCT ERROR:', error);

// // //     return res.status(500).json({
// // //       message: 'Failed to update product',
// // //       error: error.message
// // //     });

// // //   }
// // // };

// // // // DELETE PRODUCT
// // // const deleteProduct = async (req, res) => {
// // //   try {

// // //     await prisma.product.delete({
// // //       where: {
// // //         id: Number(req.params.id)
// // //       }
// // //     });

// // //     return res.json({
// // //       message: 'Product deleted successfully'
// // //     });

// // //   } catch (error) {

// // //     console.error('DELETE PRODUCT ERROR:', error);

// // //     return res.status(500).json({
// // //       message: 'Failed to delete product',
// // //       error: error.message
// // //     });

// // //   }
// // // };

// // // module.exports = {
// // //   getProducts,
// // //   getFeaturedProducts,
// // //   getProductById,
// // //   createProduct,
// // //   updateProduct,
// // //   deleteProduct
// // // };

// // // const prisma = require('../config/db');

// // // // GET ALL PRODUCTS
// // // const getProducts = async (req, res) => {
// // // try {

// // // ```
// // // const products = await prisma.product.findMany({
// // //   include: {
// // //     ingredients: true
// // //   },
// // //   orderBy: {
// // //     createdAt: 'desc'
// // //   }
// // // });

// // // return res.json(products);
// // // ```

// // // } catch (error) {

// // // ```
// // // console.error('GET PRODUCTS ERROR:', error);

// // // return res.status(500).json({
// // //   message: 'Failed to fetch products',
// // //   error: error.message
// // // });
// // // ```

// // // }
// // // };

// // // // GET FEATURED PRODUCTS
// // // const getFeaturedProducts = async (req, res) => {
// // // try {

// // // ```
// // // const products = await prisma.product.findMany({
// // //   where: {
// // //     featured: true
// // //   },
// // //   include: {
// // //     ingredients: true
// // //   },
// // //   orderBy: {
// // //     createdAt: 'desc'
// // //   },
// // //   take: 6
// // // });

// // // return res.json(products);
// // // ```

// // // } catch (error) {

// // // ```
// // // console.error('GET FEATURED PRODUCTS ERROR:', error);

// // // return res.status(500).json({
// // //   message: 'Failed to fetch featured products',
// // //   error: error.message
// // // });
// // // ```

// // // }
// // // };

// // // // GET PRODUCT BY ID
// // // const getProductById = async (req, res) => {
// // // try {

// // // ```
// // // const product = await prisma.product.findUnique({
// // //   where: {
// // //     id: Number(req.params.id)
// // //   },
// // //   include: {
// // //     ingredients: true
// // //   }
// // // });

// // // if (!product) {
// // //   return res.status(404).json({
// // //     message: 'Product not found'
// // //   });
// // // }

// // // return res.json(product);
// // // ```

// // // } catch (error) {

// // // ```
// // // console.error('GET PRODUCT ERROR:', error);

// // // return res.status(500).json({
// // //   message: 'Failed to fetch product',
// // //   error: error.message
// // // });
// // // ```

// // // }
// // // };

// // // // CREATE PRODUCT
// // // const createProduct = async (req, res) => {
// // // try {

// // // ```
// // // const {
// // //   title,
// // //   description,
// // //   price,
// // //   image,
// // //   category,
// // //   discountPercent,
// // //   featured,
// // //   ingredients
// // // } = req.body;

// // // const product = await prisma.product.create({
// // //   data: {
// // //     title,
// // //     description,
// // //     price: Number(price),
// // //     image,
// // //     category,
// // //     discountPercent: Number(discountPercent) || 0,
// // //     featured: featured || false,

// // //     ingredients: {
// // //       create: ingredients || []
// // //     }
// // //   },
// // //   include: {
// // //     ingredients: true
// // //   }
// // // });

// // // return res.status(201).json(product);
// // // ```

// // // } catch (error) {

// // // ```
// // // console.error('CREATE PRODUCT ERROR:', error);

// // // return res.status(500).json({
// // //   message: 'Failed to create product',
// // //   error: error.message
// // // });
// // // ```

// // // }
// // // };

// // // // UPDATE PRODUCT
// // // const updateProduct = async (req, res) => {
// // // try {

// // // ```
// // // const {
// // //   title,
// // //   description,
// // //   price,
// // //   image,
// // //   category,
// // //   discountPercent,
// // //   featured,
// // //   ingredients
// // // } = req.body;

// // // const productId = Number(req.params.id);

// // // await prisma.productIngredient.deleteMany({
// // //   where: {
// // //     productId
// // //   }
// // // });

// // // const product = await prisma.product.update({
// // //   where: {
// // //     id: productId
// // //   },
// // //   data: {
// // //     title,
// // //     description,
// // //     price: Number(price),
// // //     image,
// // //     category,
// // //     discountPercent: Number(discountPercent) || 0,
// // //     featured,

// // //     ingredients: {
// // //       create: ingredients || []
// // //     }
// // //   },
// // //   include: {
// // //     ingredients: true
// // //   }
// // // });

// // // return res.json(product);
// // // ```

// // // } catch (error) {

// // // ```
// // // console.error('UPDATE PRODUCT ERROR:', error);

// // // return res.status(500).json({
// // //   message: 'Failed to update product',
// // //   error: error.message
// // // });
// // // ```

// // // }
// // // };

// // // // DELETE PRODUCT
// // // const deleteProduct = async (req, res) => {
// // // try {

// // // ```
// // // await prisma.product.delete({
// // //   where: {
// // //     id: Number(req.params.id)
// // //   }
// // // });

// // // return res.json({
// // //   message: 'Product deleted successfully'
// // // });
// // // ```

// // // } catch (error) {

// // // ```
// // // console.error('DELETE PRODUCT ERROR:', error);

// // // return res.status(500).json({
// // //   message: 'Failed to delete product',
// // //   error: error.message
// // // });
// // // ```

// // // }
// // // };

// // // module.exports = {
// // // getProducts,
// // // getFeaturedProducts,
// // // getProductById,
// // // createProduct,
// // // updateProduct,
// // // deleteProduct
// // // };


// // // const prisma = require('../config/db');

// // // // GET ALL PRODUCTS
// // // const getProducts = async (req, res) => {
// // //   try {

// // //     const products = await prisma.product.findMany({
// // //       include: {
// // //         ingredients: true
// // //       },
// // //       orderBy: {
// // //         createdAt: 'desc'
// // //       }
// // //     });

// // //     return res.json(products);

// // //   } catch (error) {

// // //     console.error('GET PRODUCTS ERROR:', error);

// // //     return res.status(500).json({
// // //       message: 'Failed to fetch products',
// // //       error: error.message
// // //     });

// // //   }
// // // };

// // // // GET FEATURED PRODUCTS
// // // const getFeaturedProducts = async (req, res) => {
// // //   try {

// // //     const products = await prisma.product.findMany({
// // //       where: {
// // //         featured: true
// // //       },
// // //       include: {
// // //         ingredients: true
// // //       },
// // //       orderBy: {
// // //         createdAt: 'desc'
// // //       },
// // //       take: 6
// // //     });

// // //     return res.json(products);

// // //   } catch (error) {

// // //     console.error('GET FEATURED PRODUCTS ERROR:', error);

// // //     return res.status(500).json({
// // //       message: 'Failed to fetch featured products',
// // //       error: error.message
// // //     });

// // //   }
// // // };

// // // // GET PRODUCT BY ID
// // // const getProductById = async (req, res) => {
// // //   try {

// // //     const product = await prisma.product.findUnique({
// // //       where: {
// // //         id: Number(req.params.id)
// // //       },
// // //       include: {
// // //         ingredients: true
// // //       }
// // //     });

// // //     if (!product) {
// // //       return res.status(404).json({
// // //         message: 'Product not found'
// // //       });
// // //     }

// // //     return res.json(product);

// // //   } catch (error) {

// // //     console.error('GET PRODUCT ERROR:', error);

// // //     return res.status(500).json({
// // //       message: 'Failed to fetch product',
// // //       error: error.message
// // //     });

// // //   }
// // // };

// // // // CREATE PRODUCT
// // // const createProduct = async (req, res) => {
// // //   try {

// // //     const {
// // //       title,
// // //       description,
// // //       price,
// // //       image,
// // //       category,
// // //       discountPercent,
// // //       featured,
// // //       ingredients
// // //     } = req.body;

// // //     const product = await prisma.product.create({
// // //       data: {
// // //         title,
// // //         description,
// // //         price: Number(price),
// // //         image,
// // //         category,
// // //         discountPercent: Number(discountPercent) || 0,
// // //         featured: featured || false,

// // //         ingredients: {
// // //           create: Array.isArray(ingredients)
// // //             ? ingredients.map(item => ({
// // //                 title: item.title,
// // //                 description: item.description || '',
// // //                 image: item.image || ''
// // //               }))
// // //             : []
// // //         }
// // //       },
// // //       include: {
// // //         ingredients: true
// // //       }
// // //     });

// // //     return res.status(201).json(product);

// // //   } catch (error) {

// // //     console.error('CREATE PRODUCT ERROR:', error);

// // //     return res.status(500).json({
// // //       message: 'Failed to create product',
// // //       error: error.message
// // //     });

// // //   }
// // // };

// // // // UPDATE PRODUCT
// // // const updateProduct = async (req, res) => {
// // //   try {

// // //     const {
// // //       title,
// // //       description,
// // //       price,
// // //       image,
// // //       category,
// // //       discountPercent,
// // //       featured,
// // //       ingredients
// // //     } = req.body;

// // //     const productId = Number(req.params.id);

// // //     // Delete old ingredients
// // //     await prisma.productIngredient.deleteMany({
// // //       where: {
// // //         productId
// // //       }
// // //     });

// // //     const product = await prisma.product.update({
// // //       where: {
// // //         id: productId
// // //       },
// // //       data: {
// // //         title,
// // //         description,
// // //         price: Number(price),
// // //         image,
// // //         category,
// // //         discountPercent: Number(discountPercent) || 0,
// // //         featured,

// // //         ingredients: {
// // //           create: Array.isArray(ingredients)
// // //             ? ingredients.map(item => ({
// // //                 title: item.title,
// // //                 description: item.description || '',
// // //                 image: item.image || ''
// // //               }))
// // //             : []
// // //         }
// // //       },
// // //       include: {
// // //         ingredients: true
// // //       }
// // //     });

// // //     return res.json(product);

// // //   } catch (error) {

// // //     console.error('UPDATE PRODUCT ERROR:', error);

// // //     return res.status(500).json({
// // //       message: 'Failed to update product',
// // //       error: error.message
// // //     });

// // //   }
// // // };

// // // // DELETE PRODUCT
// // // const deleteProduct = async (req, res) => {
// // //   try {

// // //     await prisma.product.delete({
// // //       where: {
// // //         id: Number(req.params.id)
// // //       }
// // //     });

// // //     return res.json({
// // //       message: 'Product deleted successfully'
// // //     });

// // //   } catch (error) {

// // //     console.error('DELETE PRODUCT ERROR:', error);

// // //     return res.status(500).json({
// // //       message: 'Failed to delete product',
// // //       error: error.message
// // //     });

// // //   }
// // // };

// // // module.exports = {
// // //   getProducts,
// // //   getFeaturedProducts,
// // //   getProductById,
// // //   createProduct,
// // //   updateProduct,
// // //   deleteProduct
// // // };

// // // const prisma = require('../config/db');

// // // // GET ALL PRODUCTS
// // // const getProducts = async (req, res) => {
// // //   try {

// // //     const products = await prisma.product.findMany({
// // //       include: {
// // //         ingredients: true
// // //       },
// // //       orderBy: {
// // //         createdAt: 'desc'
// // //       }
// // //     });

// // //     return res.json(products);

// // //   } catch (error) {

// // //     console.error('GET PRODUCTS ERROR:', error);

// // //     return res.status(500).json({
// // //       message: 'Failed to fetch products',
// // //       error: error.message
// // //     });

// // //   }
// // // };


// // // // GET FEATURED PRODUCTS
// // // const getFeaturedProducts = async (req, res) => {
// // //   try {

// // //     const products = await prisma.product.findMany({
// // //       where: {
// // //         featured: true
// // //       },
// // //       include: {
// // //         ingredients: true
// // //       },
// // //       orderBy: {
// // //         createdAt: 'desc'
// // //       },
// // //       take: 6
// // //     });

// // //     return res.json(products);

// // //   } catch (error) {

// // //     console.error('GET FEATURED PRODUCTS ERROR:', error);

// // //     return res.status(500).json({
// // //       message: 'Failed to fetch featured products',
// // //       error: error.message
// // //     });

// // //   }
// // // };


// // // // GET PRODUCT BY ID
// // // const getProductById = async (req, res) => {
// // //   try {

// // //     const product = await prisma.product.findUnique({
// // //       where: {
// // //         id: Number(req.params.id)
// // //       },
// // //       include: {
// // //         ingredients: true
// // //       }
// // //     });

// // //     if (!product) {
// // //       return res.status(404).json({
// // //         message: 'Product not found'
// // //       });
// // //     }

// // //     return res.json(product);

// // //   } catch (error) {

// // //     console.error('GET PRODUCT ERROR:', error);

// // //     return res.status(500).json({
// // //       message: 'Failed to fetch product',
// // //       error: error.message
// // //     });

// // //   }
// // // };


// // // // CREATE PRODUCT
// // // const createProduct = async (req, res) => {
// // //   try {

// // //     const {
// // //       title,
// // //       description,
// // //       price,
// // //       image,
// // //       category,
// // //       discountPercent,
// // //       featured,
// // //       isActive,
// // //       ingredients
// // //     } = req.body;

// // //     const product = await prisma.product.create({
// // //       data: {
// // //         title,
// // //         description,
// // //         price: Number(price),
// // //         image,
// // //         category,
// // //         discountPercent: Number(discountPercent) || 0,
// // //         featured: featured || false,
// // //         isActive: isActive !== undefined ? Boolean(isActive) : true,

// // //         ingredients: {
// // //           create: Array.isArray(ingredients)
// // //             ? ingredients.map(item => ({
// // //                 title: item.title,
// // //                 description: item.description || '',
// // //                 image: item.image || ''
// // //               }))
// // //             : []
// // //         }
// // //       },
// // //       include: {
// // //         ingredients: true
// // //       }
// // //     });

// // //     return res.status(201).json(product);

// // //   } catch (error) {

// // //     console.error('CREATE PRODUCT ERROR:', error);

// // //     return res.status(500).json({
// // //       message: 'Failed to create product',
// // //       error: error.message
// // //     });

// // //   }
// // // };


// // // // UPDATE PRODUCT
// // // const updateProduct = async (req, res) => {
// // //   try {

// // //     const {
// // //       title,
// // //       description,
// // //       price,
// // //       image,
// // //       category,
// // //       discountPercent,
// // //       featured,
// // //       isActive,
// // //       ingredients
// // //     } = req.body;

// // //     const productId = Number(req.params.id);

// // //     // Delete old ingredients
// // //     await prisma.productIngredient.deleteMany({
// // //       where: {
// // //         productId
// // //       }
// // //     });

// // //     const product = await prisma.product.update({
// // //       where: {
// // //         id: productId
// // //       },
// // //       data: {
// // //         title,
// // //         description,
// // //         price: Number(price),
// // //         image,
// // //         category,
// // //         discountPercent: Number(discountPercent) || 0,
// // //         featured,
// // //         isActive: isActive !== undefined ? Boolean(isActive) : true,

// // //         ingredients: {
// // //           create: Array.isArray(ingredients)
// // //             ? ingredients.map(item => ({
// // //                 title: item.title,
// // //                 description: item.description || '',
// // //                 image: item.image || ''
// // //               }))
// // //             : []
// // //         }
// // //       },
// // //       include: {
// // //         ingredients: true
// // //       }
// // //     });

// // //     return res.json(product);

// // //   } catch (error) {

// // //     console.error('UPDATE PRODUCT ERROR:', error);

// // //     return res.status(500).json({
// // //       message: 'Failed to update product',
// // //       error: error.message
// // //     });

// // //   }
// // // };


// // // // TOGGLE PRODUCT ACTIVE / INACTIVE
// // // const toggleProductStatus = async (req, res) => {
// // //   try {

// // //     const productId = Number(req.params.id);

// // //     const product = await prisma.product.findUnique({
// // //       where: {
// // //         id: productId
// // //       }
// // //     });

// // //     if (!product) {
// // //       return res.status(404).json({
// // //         message: 'Product not found'
// // //       });
// // //     }

// // //     const updatedProduct = await prisma.product.update({
// // //       where: {
// // //         id: productId
// // //       },
// // //       data: {
// // //         isActive: !product.isActive
// // //       },
// // //       include: {
// // //         ingredients: true
// // //       }
// // //     });

// // //     return res.json({
// // //       message: updatedProduct.isActive
// // //         ? 'Product is now active'
// // //         : 'Product is now out of stock',

// // //       product: updatedProduct
// // //     });

// // //   } catch (error) {

// // //     console.error('TOGGLE PRODUCT STATUS ERROR:', error);

// // //     return res.status(500).json({
// // //       message: 'Failed to update product status',
// // //       error: error.message
// // //     });

// // //   }
// // // };


// // // // DELETE PRODUCT
// // // const deleteProduct = async (req, res) => {
// // //   try {

// // //     await prisma.product.delete({
// // //       where: {
// // //         id: Number(req.params.id)
// // //       }
// // //     });

// // //     return res.json({
// // //       message: 'Product deleted successfully'
// // //     });

// // //   } catch (error) {

// // //     console.error('DELETE PRODUCT ERROR:', error);

// // //     return res.status(500).json({
// // //       message: 'Failed to delete product',
// // //       error: error.message
// // //     });

// // //   }
// // // };


// // // module.exports = {
// // //   getProducts,
// // //   getFeaturedProducts,
// // //   getProductById,
// // //   createProduct,
// // //   updateProduct,
// // //   toggleProductStatus,
// // //   deleteProduct
// // // };


// // const prisma = require('../config/db');

// // // GET ALL PRODUCTS
// // const getProducts = async (req, res) => {
// //   try {

// //     const products = await prisma.product.findMany({
// //       include: {
// //         ingredients: true
// //       },
// //       orderBy: [
// //         {
// //           sortOrder: 'asc'
// //         },
// //         {
// //           createdAt: 'desc'
// //         }
// //       ]
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
// //       orderBy: [
// //         {
// //           sortOrder: 'asc'
// //         },
// //         {
// //           createdAt: 'desc'
// //         }
// //       ],
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

// //     // Get the current highest product order
// //     const lastProduct = await prisma.product.findFirst({
// //       orderBy: {
// //         sortOrder: 'desc'
// //       }
// //     });

// //     const nextSortOrder = lastProduct
// //       ? lastProduct.sortOrder + 1
// //       : 1;

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

// //         // Automatically place new product at the end
// //         sortOrder: nextSortOrder,

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
// //       sortOrder,
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

// //         // Do not automatically activate an inactive product
// //         ...(isActive !== undefined && {
// //           isActive: Boolean(isActive)
// //         }),

// //         // Update order only when provided
// //         ...(sortOrder !== undefined && {
// //           sortOrder: Number(sortOrder)
// //         }),

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


// // // UPDATE PRODUCT ORDER
// // const updateProductOrder = async (req, res) => {
// //   try {

// //     const { productId, sortOrder } = req.body;

// //     const id = Number(productId);
// //     const order = Number(sortOrder);

// //     if (!id || Number.isNaN(order)) {
// //       return res.status(400).json({
// //         message: 'Product ID and sort order are required'
// //       });
// //     }

// //     const product = await prisma.product.findUnique({
// //       where: {
// //         id
// //       }
// //     });

// //     if (!product) {
// //       return res.status(404).json({
// //         message: 'Product not found'
// //       });
// //     }

// //     const updatedProduct = await prisma.product.update({
// //       where: {
// //         id
// //       },
// //       data: {
// //         sortOrder: order
// //       },
// //       include: {
// //         ingredients: true
// //       }
// //     });

// //     return res.json({
// //       message: 'Product order updated successfully',
// //       product: updatedProduct
// //     });

// //   } catch (error) {

// //     console.error('UPDATE PRODUCT ORDER ERROR:', error);

// //     return res.status(500).json({
// //       message: 'Failed to update product order',
// //       error: error.message
// //     });

// //   }
// // };


// // // UPDATE MULTIPLE PRODUCT ORDERS
// // const updateProductOrders = async (req, res) => {
// //   try {

// //     const { products } = req.body;

// //     if (!Array.isArray(products)) {
// //       return res.status(400).json({
// //         message: 'Products array is required'
// //       });
// //     }

// //     await prisma.$transaction(
// //       products.map((product, index) =>
// //         prisma.product.update({
// //           where: {
// //             id: Number(product.id)
// //           },
// //           data: {
// //             sortOrder: index + 1
// //           }
// //         })
// //       )
// //     );

// //     const updatedProducts = await prisma.product.findMany({
// //       include: {
// //         ingredients: true
// //       },
// //       orderBy: [
// //         {
// //           sortOrder: 'asc'
// //         },
// //         {
// //           createdAt: 'desc'
// //         }
// //       ]
// //     });

// //     return res.json({
// //       message: 'Product order updated successfully',
// //       products: updatedProducts
// //     });

// //   } catch (error) {

// //     console.error('UPDATE PRODUCT ORDERS ERROR:', error);

// //     return res.status(500).json({
// //       message: 'Failed to update product orders',
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
// //   updateProductOrder,
// //   updateProductOrders,
// //   toggleProductStatus,
// //   deleteProduct
// // };


// const prisma = require('../config/db');


// // =====================================================
// // GET ALL PRODUCTS
// // =====================================================

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


// // =====================================================
// // GET FEATURED PRODUCTS
// // =====================================================

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
//     console.error(
//       'GET FEATURED PRODUCTS ERROR:',
//       error
//     );

//     return res.status(500).json({
//       message: 'Failed to fetch featured products',
//       error: error.message
//     });
//   }
// };


// // =====================================================
// // GET PRODUCT BY ID
// // =====================================================

// const getProductById = async (req, res) => {
//   try {
//     const productId = Number(req.params.id);

//     if (!Number.isInteger(productId)) {
//       return res.status(400).json({
//         message: 'Invalid product ID'
//       });
//     }

//     const product = await prisma.product.findUnique({
//       where: {
//         id: productId
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
//     console.error(
//       'GET PRODUCT ERROR:',
//       error
//     );

//     return res.status(500).json({
//       message: 'Failed to fetch product',
//       error: error.message
//     });
//   }
// };


// // =====================================================
// // CREATE PRODUCT
// // =====================================================

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


//     // -------------------------------------------------
//     // VALIDATION
//     // -------------------------------------------------

//     if (!title || !title.trim()) {
//       return res.status(400).json({
//         message: 'Product title is required'
//       });
//     }

//     if (
//       price === undefined ||
//       price === null ||
//       Number.isNaN(Number(price))
//     ) {
//       return res.status(400).json({
//         message: 'Valid product price is required'
//       });
//     }


//     // -------------------------------------------------
//     // GET LAST SORT ORDER
//     // -------------------------------------------------

//     const lastProduct =
//       await prisma.product.findFirst({
//         orderBy: {
//           sortOrder: 'desc'
//         }
//       });


//     const nextSortOrder = lastProduct
//       ? Number(lastProduct.sortOrder || 0) + 1
//       : 1;


//     // -------------------------------------------------
//     // CREATE PRODUCT
//     // -------------------------------------------------

//     const product =
//       await prisma.product.create({
//         data: {
//           title: title.trim(),

//           description:
//             description || '',

//           price: Number(price),

//           image:
//             image || null,

//           category:
//             category || null,

//           discountPercent:
//             Number(discountPercent) || 0,

//           featured:
//             featured !== undefined
//               ? Boolean(featured)
//               : false,

//           isActive:
//             isActive !== undefined
//               ? Boolean(isActive)
//               : true,

//           // New products are automatically
//           // placed at the end.
//           sortOrder:
//             nextSortOrder,


//           // -------------------------------------------------
//           // INGREDIENTS
//           // -------------------------------------------------

//           ingredients: {
//             create:
//               Array.isArray(ingredients)
//                 ? ingredients.map(
//                     (item) => ({
//                       title:
//                         item.title || '',

//                       description:
//                         item.description ||
//                         '',

//                       image:
//                         item.image || ''
//                     })
//                   )
//                 : []
//           }
//         },

//         include: {
//           ingredients: true
//         }
//       });


//     return res.status(201).json(product);

//   } catch (error) {
//     console.error(
//       'CREATE PRODUCT ERROR:',
//       error
//     );

//     return res.status(500).json({
//       message: 'Failed to create product',
//       error: error.message
//     });
//   }
// };


// // =====================================================
// // UPDATE PRODUCT
// // =====================================================

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


//     const productId =
//       Number(req.params.id);


//     // -------------------------------------------------
//     // VALIDATE ID
//     // -------------------------------------------------

//     if (!Number.isInteger(productId)) {
//       return res.status(400).json({
//         message: 'Invalid product ID'
//       });
//     }


//     // -------------------------------------------------
//     // CHECK PRODUCT
//     // -------------------------------------------------

//     const existingProduct =
//       await prisma.product.findUnique({
//         where: {
//           id: productId
//         }
//       });


//     if (!existingProduct) {
//       return res.status(404).json({
//         message: 'Product not found'
//       });
//     }


//     // -------------------------------------------------
//     // DELETE OLD INGREDIENTS
//     // -------------------------------------------------

//     await prisma.productIngredient.deleteMany({
//       where: {
//         productId
//       }
//     });


//     // -------------------------------------------------
//     // BUILD UPDATE DATA
//     // -------------------------------------------------

//     const updateData = {
//       title:
//         title !== undefined
//           ? title.trim()
//           : existingProduct.title,

//       description:
//         description !== undefined
//           ? description
//           : existingProduct.description,

//       price:
//         price !== undefined
//           ? Number(price)
//           : existingProduct.price,

//       image:
//         image !== undefined
//           ? image
//           : existingProduct.image,

//       category:
//         category !== undefined
//           ? category
//           : existingProduct.category,

//       discountPercent:
//         discountPercent !== undefined
//           ? Number(discountPercent) || 0
//           : existingProduct.discountPercent,

//       featured:
//         featured !== undefined
//           ? Boolean(featured)
//           : existingProduct.featured
//     };


//     // -------------------------------------------------
//     // IMPORTANT:
//     // Preserve existing active/inactive status
//     // unless explicitly provided.
//     // -------------------------------------------------

//     if (
//       isActive !== undefined
//     ) {
//       updateData.isActive =
//         Boolean(isActive);
//     }


//     // -------------------------------------------------
//     // IMPORTANT:
//     // Only update sortOrder when supplied.
//     // -------------------------------------------------

//     if (
//       sortOrder !== undefined &&
//       !Number.isNaN(Number(sortOrder))
//     ) {
//       updateData.sortOrder =
//         Number(sortOrder);
//     }


//     // -------------------------------------------------
//     // INGREDIENTS
//     // -------------------------------------------------

//     updateData.ingredients = {
//       create:
//         Array.isArray(ingredients)
//           ? ingredients.map(
//               (item) => ({
//                 title:
//                   item.title || '',

//                 description:
//                   item.description ||
//                   '',

//                 image:
//                   item.image || ''
//               })
//             )
//           : []
//     };


//     // -------------------------------------------------
//     // UPDATE
//     // -------------------------------------------------

//     const product =
//       await prisma.product.update({
//         where: {
//           id: productId
//         },

//         data: updateData,

//         include: {
//           ingredients: true
//         }
//       });


//     return res.json(product);

//   } catch (error) {
//     console.error(
//       'UPDATE PRODUCT ERROR:',
//       error
//     );

//     return res.status(500).json({
//       message: 'Failed to update product',
//       error: error.message
//     });
//   }
// };


// // =====================================================
// // UPDATE SINGLE PRODUCT ORDER
// // =====================================================

// const updateProductOrder = async (
//   req,
//   res
// ) => {
//   try {
//     const {
//       productId,
//       sortOrder
//     } = req.body;


//     const id =
//       Number(productId);

//     const order =
//       Number(sortOrder);


//     // -------------------------------------------------
//     // VALIDATION
//     // -------------------------------------------------

//     if (
//       !Number.isInteger(id) ||
//       Number.isNaN(order)
//     ) {
//       return res.status(400).json({
//         message:
//           'Product ID and sort order are required'
//       });
//     }


//     // -------------------------------------------------
//     // CHECK PRODUCT
//     // -------------------------------------------------

//     const product =
//       await prisma.product.findUnique({
//         where: {
//           id
//         }
//       });


//     if (!product) {
//       return res.status(404).json({
//         message: 'Product not found'
//       });
//     }


//     // -------------------------------------------------
//     // UPDATE ORDER
//     // -------------------------------------------------

//     const updatedProduct =
//       await prisma.product.update({
//         where: {
//           id
//         },

//         data: {
//           sortOrder: order
//         },

//         include: {
//           ingredients: true
//         }
//       });


//     return res.json({
//       message:
//         'Product order updated successfully',

//       product:
//         updatedProduct
//     });

//   } catch (error) {
//     console.error(
//       'UPDATE PRODUCT ORDER ERROR:',
//       error
//     );

//     return res.status(500).json({
//       message:
//         'Failed to update product order',

//       error:
//         error.message
//     });
//   }
// };


// // =====================================================
// // UPDATE MULTIPLE PRODUCT ORDERS
// // =====================================================

// const updateProductOrders = async (
//   req,
//   res
// ) => {
//   try {
//     const {
//       products
//     } = req.body;


//     // -------------------------------------------------
//     // VALIDATION
//     // -------------------------------------------------

//     if (!Array.isArray(products)) {
//       return res.status(400).json({
//         message:
//           'Products array is required'
//       });
//     }


//     if (products.length === 0) {
//       return res.status(400).json({
//         message:
//           'Products array cannot be empty'
//       });
//     }


//     // -------------------------------------------------
//     // NORMALIZE IDS
//     // -------------------------------------------------

//     const productIds =
//       products.map(
//         (product) =>
//           Number(product.id)
//       );


//     // -------------------------------------------------
//     // CHECK INVALID IDS
//     // -------------------------------------------------

//     if (
//       productIds.some(
//         (id) =>
//           !Number.isInteger(id)
//       )
//     ) {
//       return res.status(400).json({
//         message:
//           'Invalid product ID found'
//       });
//     }


//     // -------------------------------------------------
//     // CHECK DUPLICATE IDS
//     // -------------------------------------------------

//     const uniqueIds =
//       new Set(productIds);


//     if (
//       uniqueIds.size !==
//       productIds.length
//     ) {
//       return res.status(400).json({
//         message:
//           'Duplicate product IDs are not allowed'
//       });
//     }


//     // -------------------------------------------------
//     // UPDATE ALL ORDERS IN ONE TRANSACTION
//     // -------------------------------------------------

//     await prisma.$transaction(
//       products.map(
//         (product, index) =>
//           prisma.product.update({
//             where: {
//               id:
//                 Number(
//                   product.id
//                 )
//             },

//             data: {
//               sortOrder:
//                 index + 1
//             }
//           })
//       )
//     );


//     // -------------------------------------------------
//     // GET UPDATED PRODUCTS
//     // -------------------------------------------------

//     const updatedProducts =
//       await prisma.product.findMany({
//         include: {
//           ingredients: true
//         },

//         orderBy: [
//           {
//             sortOrder: 'asc'
//           },
//           {
//             createdAt: 'desc'
//           }
//         ]
//       });


//     return res.json({
//       message:
//         'Product order updated successfully',

//       products:
//         updatedProducts
//     });

//   } catch (error) {
//     console.error(
//       'UPDATE PRODUCT ORDERS ERROR:',
//       error
//     );

//     return res.status(500).json({
//       message:
//         'Failed to update product orders',

//       error:
//         error.message
//     });
//   }
// };


// // =====================================================
// // TOGGLE PRODUCT ACTIVE / INACTIVE
// // =====================================================

// const toggleProductStatus = async (
//   req,
//   res
// ) => {
//   try {
//     const productId =
//       Number(req.params.id);


//     // -------------------------------------------------
//     // VALIDATE ID
//     // -------------------------------------------------

//     if (
//       !Number.isInteger(productId)
//     ) {
//       return res.status(400).json({
//         message:
//           'Invalid product ID'
//       });
//     }


//     // -------------------------------------------------
//     // FIND PRODUCT
//     // -------------------------------------------------

//     const product =
//       await prisma.product.findUnique({
//         where: {
//           id: productId
//         }
//       });


//     if (!product) {
//       return res.status(404).json({
//         message:
//           'Product not found'
//       });
//     }


//     // -------------------------------------------------
//     // TOGGLE STATUS
//     // -------------------------------------------------

//     const updatedProduct =
//       await prisma.product.update({
//         where: {
//           id: productId
//         },

//         data: {
//           isActive:
//             !product.isActive
//         },

//         include: {
//           ingredients: true
//         }
//       });


//     return res.json({
//       message:
//         updatedProduct.isActive
//           ? 'Product is now active'
//           : 'Product is now out of stock',

//       product:
//         updatedProduct
//     });

//   } catch (error) {
//     console.error(
//       'TOGGLE PRODUCT STATUS ERROR:',
//       error
//     );

//     return res.status(500).json({
//       message:
//         'Failed to update product status',

//       error:
//         error.message
//     });
//   }
// };


// // =====================================================
// // DELETE PRODUCT
// // =====================================================

// const deleteProduct = async (
//   req,
//   res
// ) => {
//   try {
//     const productId =
//       Number(req.params.id);


//     // -------------------------------------------------
//     // VALIDATE ID
//     // -------------------------------------------------

//     if (
//       !Number.isInteger(productId)
//     ) {
//       return res.status(400).json({
//         message:
//           'Invalid product ID'
//       });
//     }


//     // -------------------------------------------------
//     // CHECK PRODUCT
//     // -------------------------------------------------

//     const product =
//       await prisma.product.findUnique({
//         where: {
//           id: productId
//         }
//       });


//     if (!product) {
//       return res.status(404).json({
//         message:
//           'Product not found'
//       });
//     }


//     // -------------------------------------------------
//     // DELETE PRODUCT
//     // -------------------------------------------------

//     await prisma.product.delete({
//       where: {
//         id: productId
//       }
//     });


//     return res.json({
//       message:
//         'Product deleted successfully'
//     });

//   } catch (error) {
//     console.error(
//       'DELETE PRODUCT ERROR:',
//       error
//     );

//     return res.status(500).json({
//       message:
//         'Failed to delete product',

//       error:
//         error.message
//     });
//   }
// };


// // =====================================================
// // EXPORTS
// // =====================================================

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






















const prisma = require("../config/db");

/* =========================================================
   GET ALL PRODUCTS
========================================================= */
const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: [
        { sortOrder: "asc" },
        { createdAt: "desc" },
      ],
      include: {
        ingredients: true,
      },
    });

    res.json(products);
  } catch (error) {
    console.error("GET PRODUCTS ERROR:", error);

    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
};

/* =========================================================
   GET FEATURED PRODUCTS
========================================================= */
const getFeaturedProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        featured: true,
        isActive: true,
      },
      orderBy: [
        { sortOrder: "asc" },
        { createdAt: "desc" },
      ],
      include: {
        ingredients: true,
      },
    });

    res.json(products);
  } catch (error) {
    console.error("GET FEATURED PRODUCTS ERROR:", error);

    res.status(500).json({
      message: "Failed to fetch featured products",
      error: error.message,
    });
  }
};

/* =========================================================
   GET PRODUCT BY ID
========================================================= */
const getProductById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
      return res.status(400).json({
        message: "Invalid product ID",
      });
    }

    const product = await prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        ingredients: true,
      },
    });

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.json(product);
  } catch (error) {
    console.error("GET PRODUCT BY ID ERROR:", error);

    res.status(500).json({
      message: "Failed to fetch product",
      error: error.message,
    });
  }
};

/* =========================================================
   CREATE PRODUCT
========================================================= */
const createProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      image,
      featured,
      category,
      discountPercent,
      isActive,
      sortOrder,
      ingredients,
    } = req.body;

    if (!title || !description || price === undefined) {
      return res.status(400).json({
        message: "Title, description and price are required",
      });
    }

    /* -----------------------------------------------------
       Automatically put new product at the END
    ----------------------------------------------------- */
    let finalSortOrder = sortOrder;

    if (finalSortOrder === undefined || finalSortOrder === null) {
      const lastProduct = await prisma.product.findFirst({
        orderBy: {
          sortOrder: "desc",
        },
        select: {
          sortOrder: true,
        },
      });

      finalSortOrder = lastProduct
        ? Number(lastProduct.sortOrder) + 1
        : 1;
    }

    const product = await prisma.product.create({
      data: {
        title,
        description,
        price: Number(price),
        image: image || null,

        featured:
          featured !== undefined
            ? Boolean(featured)
            : false,

        category: category || null,

        discountPercent:
          discountPercent !== undefined &&
          discountPercent !== null
            ? Number(discountPercent)
            : 0,

        isActive:
          isActive !== undefined
            ? Boolean(isActive)
            : true,

        sortOrder: Number(finalSortOrder),

        ...(Array.isArray(ingredients) &&
          ingredients.length > 0 && {
            ingredients: {
              create: ingredients.map((ingredient) => ({
                name:
                  typeof ingredient === "string"
                    ? ingredient
                    : ingredient.name,
              })),
            },
          }),
      },

      include: {
        ingredients: true,
      },
    });

    res.status(201).json(product);
  } catch (error) {
    console.error("CREATE PRODUCT ERROR:", error);

    res.status(500).json({
      message: "Failed to create product",
      error: error.message,
    });
  }
};

/* =========================================================
   UPDATE PRODUCT
========================================================= */
const updateProduct = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
      return res.status(400).json({
        message: "Invalid product ID",
      });
    }

    const {
      title,
      description,
      price,
      image,
      featured,
      category,
      discountPercent,
      isActive,
      sortOrder,
      ingredients,
    } = req.body;

    /* -----------------------------------------------------
       Check product exists
    ----------------------------------------------------- */
    const existingProduct = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!existingProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    /* -----------------------------------------------------
       Update basic product fields
       
       IMPORTANT:
       isActive is only changed when explicitly supplied.
       This prevents an inactive/out-of-stock product from
       accidentally becoming active during another update.
    ----------------------------------------------------- */
    const updateData = {
      ...(title !== undefined && {
        title,
      }),

      ...(description !== undefined && {
        description,
      }),

      ...(price !== undefined && {
        price: Number(price),
      }),

      ...(image !== undefined && {
        image: image || null,
      }),

      ...(featured !== undefined && {
        featured: Boolean(featured),
      }),

      ...(category !== undefined && {
        category: category || null,
      }),

      ...(discountPercent !== undefined &&
        discountPercent !== null && {
          discountPercent: Number(discountPercent),
        }),

      ...(isActive !== undefined && {
        isActive: Boolean(isActive),
      }),

      ...(sortOrder !== undefined &&
        sortOrder !== null && {
          sortOrder: Number(sortOrder),
        }),
    };

    /* -----------------------------------------------------
       Ingredients
       
       If ingredients are supplied, replace existing
       ingredients with the new list.
    ----------------------------------------------------- */
    if (Array.isArray(ingredients)) {
      await prisma.productIngredient.deleteMany({
        where: {
          productId: id,
        },
      });

      if (ingredients.length > 0) {
        await prisma.productIngredient.createMany({
          data: ingredients.map((ingredient) => ({
            productId: id,

            name:
              typeof ingredient === "string"
                ? ingredient
                : ingredient.name,
          })),
        });
      }
    }

    const product = await prisma.product.update({
      where: {
        id,
      },

      data: updateData,

      include: {
        ingredients: true,
      },
    });

    res.json(product);
  } catch (error) {
    console.error("UPDATE PRODUCT ERROR:", error);

    res.status(500).json({
      message: "Failed to update product",
      error: error.message,
    });
  }
};

/* =========================================================
   TOGGLE PRODUCT STATUS
========================================================= */
const toggleProductStatus = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
      return res.status(400).json({
        message: "Invalid product ID",
      });
    }

    const existingProduct = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!existingProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const product = await prisma.product.update({
      where: {
        id,
      },

      data: {
        isActive: !existingProduct.isActive,
      },

      include: {
        ingredients: true,
      },
    });

    res.json(product);
  } catch (error) {
    console.error("TOGGLE PRODUCT STATUS ERROR:", error);

    res.status(500).json({
      message: "Failed to update product status",
      error: error.message,
    });
  }
};

/* =========================================================
   UPDATE SINGLE PRODUCT ORDER
========================================================= */
const updateProductOrder = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const newSortOrder = Number(
      req.body.sortOrder
    );

    if (!Number.isInteger(id)) {
      return res.status(400).json({
        message: "Invalid product ID",
      });
    }

    if (!Number.isInteger(newSortOrder)) {
      return res.status(400).json({
        message: "sortOrder must be an integer",
      });
    }

    const product = await prisma.product.findUnique({
      where: {
        id,
      },

      select: {
        id: true,
      },
    });

    if (!product) {
      return res.status(404).json({
        message: `Product ${id} not found`,
      });
    }

    const updatedProduct = await prisma.product.update({
      where: {
        id,
      },

      data: {
        sortOrder: newSortOrder,
      },
    });

    res.json({
      message: "Product order updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.error("UPDATE PRODUCT ORDER ERROR:", error);

    res.status(500).json({
      message: "Failed to update product order",
      error: error.message,
    });
  }
};

/* =========================================================
   UPDATE ALL PRODUCT ORDERS
========================================================= */
const updateProductOrders = async (req, res) => {
  try {
    console.log(
      "=============================================="
    );

    console.log(
      "UPDATE PRODUCT ORDERS REQUEST"
    );

    console.log(
      "BODY:",
      JSON.stringify(req.body, null, 2)
    );

    /* -----------------------------------------------------
       Validate request body
       
       Expected:
       {
         products: [
           { id: 233, sortOrder: 1 },
           { id: 234, sortOrder: 2 }
         ]
       }
    ----------------------------------------------------- */
    if (!req.body || !Array.isArray(req.body.products)) {
      console.error(
        "Invalid product order payload:",
        req.body
      );

      return res.status(400).json({
        message:
          "Invalid request. Expected products array.",
      });
    }

    const products = req.body.products;

    if (products.length === 0) {
      return res.status(400).json({
        message: "Products array cannot be empty",
      });
    }

    /* -----------------------------------------------------
       Normalize + validate
    ----------------------------------------------------- */
    const normalizedProducts = products.map(
      (product, index) => {
        const id = Number(product.id);
        const sortOrder = Number(
          product.sortOrder
        );

        if (!Number.isInteger(id)) {
          throw new Error(
            `Invalid product ID at index ${index}: ${product.id}`
          );
        }

        if (!Number.isInteger(sortOrder)) {
          throw new Error(
            `Invalid sortOrder for product ${id}: ${product.sortOrder}`
          );
        }

        return {
          id,
          sortOrder,
        };
      }
    );

    /* -----------------------------------------------------
       Detect duplicate product IDs
    ----------------------------------------------------- */
    const ids = normalizedProducts.map(
      (product) => product.id
    );

    const duplicateIds = ids.filter(
      (id, index) =>
        ids.indexOf(id) !== index
    );

    if (duplicateIds.length > 0) {
      const uniqueDuplicateIds = [
        ...new Set(duplicateIds),
      ];

      return res.status(400).json({
        message:
          "Duplicate product IDs found in order payload",
        duplicateIds: uniqueDuplicateIds,
      });
    }

    /* -----------------------------------------------------
       Check that every product actually exists
       
       This prevents Prisma P2025 errors when the frontend
       sends an ID that no longer exists.
    ----------------------------------------------------- */
    const existingProducts =
      await prisma.product.findMany({
        where: {
          id: {
            in: ids,
          },
        },

        select: {
          id: true,
        },
      });

    const existingIds = new Set(
      existingProducts.map(
        (product) => product.id
      )
    );

    const missingIds = ids.filter(
      (id) => !existingIds.has(id)
    );

    if (missingIds.length > 0) {
      console.error(
        "Missing product IDs:",
        missingIds
      );

      return res.status(404).json({
        message:
          "One or more products do not exist",
        missingIds,
      });
    }

    /* -----------------------------------------------------
       Update all products in ONE transaction
    ----------------------------------------------------- */
    await prisma.$transaction(
      normalizedProducts.map(
        ({ id, sortOrder }) =>
          prisma.product.update({
            where: {
              id,
            },

            data: {
              sortOrder,
            },
          })
      )
    );

    /* -----------------------------------------------------
       Return updated order
    ----------------------------------------------------- */
    const updatedProducts =
      await prisma.product.findMany({
        where: {
          id: {
            in: ids,
          },
        },

        orderBy: {
          sortOrder: "asc",
        },

        select: {
          id: true,
          sortOrder: true,
        },
      });

    console.log(
      "PRODUCT ORDER SAVED SUCCESSFULLY"
    );

    console.log(
      "UPDATED:",
      updatedProducts
    );

    console.log(
      "=============================================="
    );

    res.json({
      message:
        "Product order updated successfully",
      products: updatedProducts,
    });
  } catch (error) {
    console.error(
      "=============================================="
    );

    console.error(
      "UPDATE PRODUCT ORDERS ERROR"
    );

    console.error(
      "NAME:",
      error.name
    );

    console.error(
      "MESSAGE:",
      error.message
    );

    console.error(
      "CODE:",
      error.code
    );

    console.error(
      "META:",
      error.meta
    );

    console.error(
      "STACK:",
      error.stack
    );

    console.error(
      "=============================================="
    );

    res.status(500).json({
      message:
        "Failed to save product order",
      error: error.message,
      code: error.code || null,
    });
  }
};

/* =========================================================
   DELETE PRODUCT
========================================================= */
const deleteProduct = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
      return res.status(400).json({
        message: "Invalid product ID",
      });
    }

    const existingProduct = await prisma.product.findUnique({
      where: {
        id,
      },
    });

    if (!existingProduct) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    await prisma.product.delete({
      where: {
        id,
      },
    });

    res.json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("DELETE PRODUCT ERROR:", error);

    res.status(500).json({
      message: "Failed to delete product",
      error: error.message,
    });
  }
};

/* =========================================================
   EXPORTS
========================================================= */
module.exports = {
  getProducts,
  getFeaturedProducts,
  getProductById,
  createProduct,
  updateProduct,
  toggleProductStatus,
  updateProductOrder,
  updateProductOrders,
  deleteProduct,
};