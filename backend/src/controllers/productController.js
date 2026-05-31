// const prisma = require('../config/db');

// const getProducts = async (req, res) => {
//   const products = await prisma.product.findMany({
//     orderBy: {
//       createdAt: 'desc'
//     }
//   });

//   res.json(products);
// };

// const createProduct = async (req, res) => {
//   const { title, description, price } = req.body;

//   const product = await prisma.product.create({
//     data: {
//       title,
//       description,
//       price
//     }
//   });

//   res.status(201).json(product);
// };





// const getProductById = async (req, res) => {
//   const product = await prisma.product.findUnique({
//     where: {
//       id: Number(req.params.id)
//     }
//   });

//   if (!product) {
//     return res.status(404).json({
//       message: 'Product not found'
//     });
//   }

//   res.json(product);
// };


// const updateProduct = async (req, res) => {
//   const { title, description, price } = req.body;

//   const product = await prisma.product.update({
//     where: {
//       id: Number(req.params.id)
//     },
//     data: {
//       title,
//       description,
//       price
//     }
//   });

//   res.json(product);
// };


// const deleteProduct = async (req, res) => {
//   await prisma.product.delete({
//     where: {
//       id: Number(req.params.id)
//     }
//   });

//   res.json({
//     message: 'Product deleted'
//   });
// };

// module.exports = {
//   getProducts,
//   createProduct,
//   getProductById,
//   updateProduct,
//   deleteProduct
// };



const prisma = require('../config/db');

const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json(products);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to fetch products'
    });
  }
};

const createProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      image
    } = req.body;

    const product = await prisma.product.create({
      data: {
        title,
        description,
        price,
        image
      }
    });

    res.status(201).json(product);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to create product'
    });
  }
};

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

    res.json(product);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to fetch product'
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      image
    } = req.body;

    const product = await prisma.product.update({
      where: {
        id: Number(req.params.id)
      },
      data: {
        title,
        description,
        price,
        image
      }
    });

    res.json(product);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to update product'
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await prisma.product.delete({
      where: {
        id: Number(req.params.id)
      }
    });

    res.json({
      message: 'Product deleted'
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to delete product'
    });
  }
};

module.exports = {
  getProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct
};