
// backend/src/controllers/cartController.js

const prisma = require('../config/db');


// =====================================================
// GET CART
// =====================================================

const getCart = async (req, res) => {
  try {
    const { sessionId } = req.params;

    if (!sessionId) {
      return res.status(400).json({
        success: false,
        message: 'Session ID is required',
      });
    }

    const cart = await prisma.cart.findUnique({
      where: {
        sessionId,
      },
      include: {
        items: {
          include: {
            product: true,
          },
          orderBy: {
            createdAt: 'asc',
          },
        },
      },
    });

    // Cart doesn't exist yet
    if (!cart) {
      return res.status(200).json({
        success: true,
        cart: {
          id: null,
          sessionId,
          items: [],
          subtotal: 0,
          totalItems: 0,
        },
      });
    }

    const items = cart.items.map((item) => {
      const price = Number(item.product.price) || 0;

      const discountPercent =
        Number(item.product.discountPercent) || 0;

      const discountedPrice =
        discountPercent > 0
          ? price - (price * discountPercent) / 100
          : price;

      return {
        id: item.id,

        productId: item.productId,

        title: item.product.title,

        description: item.product.description,

        image: item.product.image,

        category: item.product.category,

        quantity: item.quantity,

        price: price,

        discountPercent: discountPercent,

        discountedPrice: Number(
          discountedPrice.toFixed(2)
        ),

        itemTotal: Number(
          (discountedPrice * item.quantity).toFixed(2)
        ),
      };
    });

    const subtotal = items.reduce(
      (total, item) => total + item.itemTotal,
      0
    );

    const totalItems = items.reduce(
      (total, item) => total + item.quantity,
      0
    );

    return res.status(200).json({
      success: true,

      cart: {
        id: cart.id,

        sessionId: cart.sessionId,

        items,

        subtotal: Number(subtotal.toFixed(2)),

        totalItems,
      },
    });

  } catch (error) {
    console.error('GET CART ERROR:', error);

    return res.status(500).json({
      success: false,
      message: 'Failed to get cart',
      error:
        process.env.NODE_ENV === 'development'
          ? error.message
          : undefined,
    });
  }
};


// =====================================================
// ADD PRODUCT TO CART
// =====================================================

const addToCart = async (req, res) => {
  try {
    const {
      sessionId,
      productId,
      quantity = 1,
    } = req.body;

    // -----------------------------
    // Validation
    // -----------------------------

    if (!sessionId) {
      return res.status(400).json({
        success: false,
        message: 'Session ID is required',
      });
    }

    if (!productId) {
      return res.status(400).json({
        success: false,
        message: 'Product ID is required',
      });
    }

    const parsedProductId = Number(productId);
    const parsedQuantity = Number(quantity);

    if (
      !Number.isInteger(parsedProductId) ||
      parsedProductId <= 0
    ) {
      return res.status(400).json({
        success: false,
        message: 'Invalid product ID',
      });
    }

    if (
      !Number.isInteger(parsedQuantity) ||
      parsedQuantity < 1
    ) {
      return res.status(400).json({
        success: false,
        message: 'Quantity must be at least 1',
      });
    }

    // -----------------------------
    // Check Product
    // -----------------------------

    const product = await prisma.product.findUnique({
      where: {
        id: parsedProductId,
      },
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    // -----------------------------
    // Find or Create Cart
    // -----------------------------

    const cart = await prisma.cart.upsert({
      where: {
        sessionId,
      },

      update: {},

      create: {
        sessionId,
      },
    });

    // -----------------------------
    // Add / Update Cart Item
    // -----------------------------

    const cartItem = await prisma.cartItem.upsert({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId: parsedProductId,
        },
      },

      update: {
        quantity: {
          increment: parsedQuantity,
        },
      },

      create: {
        cartId: cart.id,

        productId: parsedProductId,

        quantity: parsedQuantity,
      },

      include: {
        product: true,
      },
    });

    // -----------------------------
    // Return
    // -----------------------------

    return res.status(201).json({
      success: true,

      message: 'Product added to cart',

      item: {
        id: cartItem.id,

        productId: cartItem.productId,

        title: cartItem.product.title,

        image: cartItem.product.image,

        quantity: cartItem.quantity,

        price: Number(cartItem.product.price),

        discountPercent:
          Number(cartItem.product.discountPercent) || 0,
      },
    });

  } catch (error) {
    console.error('ADD TO CART ERROR:', error);

    return res.status(500).json({
      success: false,
      message: 'Failed to add product to cart',
      error:
        process.env.NODE_ENV === 'development'
          ? error.message
          : undefined,
    });
  }
};


// =====================================================
// UPDATE CART ITEM QUANTITY
// =====================================================

const updateCartItem = async (req, res) => {
  try {
    const {
      sessionId,
      productId,
    } = req.params;

    const { quantity } = req.body;

    const parsedProductId = Number(productId);
    const parsedQuantity = Number(quantity);

    // -----------------------------
    // Validation
    // -----------------------------

    if (
      !Number.isInteger(parsedProductId) ||
      parsedProductId <= 0
    ) {
      return res.status(400).json({
        success: false,
        message: 'Invalid product ID',
      });
    }

    if (
      !Number.isInteger(parsedQuantity) ||
      parsedQuantity < 1
    ) {
      return res.status(400).json({
        success: false,
        message: 'Quantity must be at least 1',
      });
    }

    // -----------------------------
    // Find Cart
    // -----------------------------

    const cart = await prisma.cart.findUnique({
      where: {
        sessionId,
      },
    });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: 'Cart not found',
      });
    }

    // -----------------------------
    // Find Cart Item
    // -----------------------------

    const cartItem = await prisma.cartItem.findUnique({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId: parsedProductId,
        },
      },
    });

    if (!cartItem) {
      return res.status(404).json({
        success: false,
        message: 'Cart item not found',
      });
    }

    // -----------------------------
    // Update Quantity
    // -----------------------------

    const updatedItem =
      await prisma.cartItem.update({
        where: {
          id: cartItem.id,
        },

        data: {
          quantity: parsedQuantity,
        },

        include: {
          product: true,
        },
      });

    return res.status(200).json({
      success: true,

      message: 'Cart quantity updated',

      item: {
        id: updatedItem.id,

        productId: updatedItem.productId,

        title: updatedItem.product.title,

        image: updatedItem.product.image,

        quantity: updatedItem.quantity,

        price: Number(updatedItem.product.price),

        discountPercent:
          Number(
            updatedItem.product.discountPercent
          ) || 0,
      },
    });

  } catch (error) {
    console.error(
      'UPDATE CART ITEM ERROR:',
      error
    );

    return res.status(500).json({
      success: false,
      message: 'Failed to update cart',
      error:
        process.env.NODE_ENV === 'development'
          ? error.message
          : undefined,
    });
  }
};


// =====================================================
// REMOVE PRODUCT FROM CART
// =====================================================

const removeFromCart = async (req, res) => {
  try {
    const {
      sessionId,
      productId,
    } = req.params;

    const parsedProductId = Number(productId);

    if (
      !Number.isInteger(parsedProductId) ||
      parsedProductId <= 0
    ) {
      return res.status(400).json({
        success: false,
        message: 'Invalid product ID',
      });
    }

    // -----------------------------
    // Find Cart
    // -----------------------------

    const cart = await prisma.cart.findUnique({
      where: {
        sessionId,
      },
    });

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: 'Cart not found',
      });
    }

    // -----------------------------
    // Find Item
    // -----------------------------

    const cartItem = await prisma.cartItem.findUnique({
      where: {
        cartId_productId: {
          cartId: cart.id,
          productId: parsedProductId,
        },
      },
    });

    if (!cartItem) {
      return res.status(404).json({
        success: false,
        message: 'Cart item not found',
      });
    }

    // -----------------------------
    // Delete Item
    // -----------------------------

    await prisma.cartItem.delete({
      where: {
        id: cartItem.id,
      },
    });

    return res.status(200).json({
      success: true,
      message: 'Product removed from cart',
    });

  } catch (error) {
    console.error(
      'REMOVE FROM CART ERROR:',
      error
    );

    return res.status(500).json({
      success: false,
      message: 'Failed to remove product from cart',
      error:
        process.env.NODE_ENV === 'development'
          ? error.message
          : undefined,
    });
  }
};


// =====================================================
// CLEAR CART
// =====================================================

const clearCart = async (req, res) => {
  try {
    const { sessionId } = req.params;

    if (!sessionId) {
      return res.status(400).json({
        success: false,
        message: 'Session ID is required',
      });
    }

    // -----------------------------
    // Find Cart
    // -----------------------------

    const cart = await prisma.cart.findUnique({
      where: {
        sessionId,
      },
    });

    if (!cart) {
      return res.status(200).json({
        success: true,
        message: 'Cart is already empty',
      });
    }

    // -----------------------------
    // Delete All Items
    // -----------------------------

    await prisma.cartItem.deleteMany({
      where: {
        cartId: cart.id,
      },
    });

    return res.status(200).json({
      success: true,
      message: 'Cart cleared successfully',
    });

  } catch (error) {
    console.error(
      'CLEAR CART ERROR:',
      error
    );

    return res.status(500).json({
      success: false,
      message: 'Failed to clear cart',
      error:
        process.env.NODE_ENV === 'development'
          ? error.message
          : undefined,
    });
  }
};


// =====================================================
// EXPORT
// =====================================================

module.exports = {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart,
};

