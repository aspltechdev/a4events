// const prisma = require('../config/db');

// // GET ALL SLIDES
// const getHeroSlides = async (req, res) => {
//   try {
//     const slides = await prisma.heroSlide.findMany({
//       orderBy: {
//         order: 'asc'
//       }
//     });

//     res.json(slides);

//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       message: 'Failed to fetch hero slides'
//     });
//   }
// };

// // GET SINGLE SLIDE
// const getHeroSlideById = async (req, res) => {
//   try {
//     const slide = await prisma.heroSlide.findUnique({
//       where: {
//         id: Number(req.params.id)
//       }
//     });

//     if (!slide) {
//       return res.status(404).json({
//         message: 'Slide not found'
//       });
//     }

//     res.json(slide);

//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       message: 'Failed to fetch slide'
//     });
//   }
// };

// // CREATE
// const createHeroSlide = async (req, res) => {
//   try {
//     const {
//       title,
//       subtitle,
//       buttonText,
//       buttonLink,
//       image,
//       order,
//       isActive
//     } = req.body;

//     const slide =
//       await prisma.heroSlide.create({
//         data: {
//           title,
//           subtitle,
//           buttonText,
//           buttonLink,
//           image,
//           order: Number(order || 0),
//           isActive
//         }
//       });

//     res.status(201).json(slide);

//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       message: 'Failed to create slide'
//     });
//   }
// };

// // UPDATE
// const updateHeroSlide = async (req, res) => {
//   try {
//     const {
//       title,
//       subtitle,
//       buttonText,
//       buttonLink,
//       image,
//       order,
//       isActive
//     } = req.body;

//     const slide =
//       await prisma.heroSlide.update({
//         where: {
//           id: Number(req.params.id)
//         },
//         data: {
//           title,
//           subtitle,
//           buttonText,
//           buttonLink,
//           image,
//           order: Number(order || 0),
//           isActive
//         }
//       });

//     res.json(slide);

//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       message: 'Failed to update slide'
//     });
//   }
// };

// // DELETE
// const deleteHeroSlide = async (req, res) => {
//   try {
//     await prisma.heroSlide.delete({
//       where: {
//         id: Number(req.params.id)
//       }
//     });

//     res.json({
//       message: 'Slide deleted'
//     });

//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       message: 'Failed to delete slide'
//     });
//   }
// };

// module.exports = {
//   getHeroSlides,
//   getHeroSlideById,
//   createHeroSlide,
//   updateHeroSlide,
//   deleteHeroSlide
// };


// const prisma = require('../config/db');

// // GET ALL SLIDES
// const getHeroSlides = async (req, res) => {
//   try {

//     const slides = await prisma.heroSlide.findMany({
//       orderBy: {
//         order: 'asc'
//       }
//     });

//     res.json(slides);

//   } catch (error) {

//     console.error(error);

//     res.status(500).json({
//       message: 'Failed to fetch hero slides'
//     });

//   }
// };

// // GET SINGLE SLIDE
// const getHeroSlideById = async (req, res) => {
//   try {

//     const slide = await prisma.heroSlide.findUnique({
//       where: {
//         id: Number(req.params.id)
//       }
//     });

//     if (!slide) {
//       return res.status(404).json({
//         message: 'Slide not found'
//       });
//     }

//     res.json(slide);

//   } catch (error) {

//     console.error(error);

//     res.status(500).json({
//       message: 'Failed to fetch slide'
//     });

//   }
// };

// // CREATE HERO SLIDE
// const createHeroSlide = async (req, res) => {
//   try {

//     const {
//       title,
//       subtitle,
//       buttonText,
//       buttonLink,
//       image,
//       order,
//       isActive,
//       slideType,
//       productId,
//       eventId
//     } = req.body;

//     const slide =
//       await prisma.heroSlide.create({
//         data: {
//           title,
//           subtitle,
//           buttonText,
//           buttonLink,
//           image,
//           order: Number(order || 1),
//           isActive,

//           slideType: slideType || "custom",

//           productId: productId
//             ? Number(productId)
//             : null,

//           eventId: eventId
//             ? Number(eventId)
//             : null
//         }
//       });

//     res.status(201).json(slide);

//   } catch (error) {

//     console.error(error);

//     res.status(500).json({
//       message: 'Failed to create slide',
//       error: error.message
//     });

//   }
// };

// // UPDATE HERO SLIDE
// const updateHeroSlide = async (req, res) => {
//   try {

//     const {
//       title,
//       subtitle,
//       buttonText,
//       buttonLink,
//       image,
//       order,
//       isActive,
//       slideType,
//       productId,
//       eventId
//     } = req.body;

//     const slide =
//       await prisma.heroSlide.update({
//         where: {
//           id: Number(req.params.id)
//         },
//         data: {
//           title,
//           subtitle,
//           buttonText,
//           buttonLink,
//           image,
//           order: Number(order || 1),
//           isActive,

//           slideType: slideType || "custom",

//           productId: productId
//             ? Number(productId)
//             : null,

//           eventId: eventId
//             ? Number(eventId)
//             : null
//         }
//       });

//     res.json(slide);

//   } catch (error) {

//     console.error(error);

//     res.status(500).json({
//       message: 'Failed to update slide',
//       error: error.message
//     });

//   }
// };

// // DELETE HERO SLIDE
// const deleteHeroSlide = async (req, res) => {
//   try {

//     await prisma.heroSlide.delete({
//       where: {
//         id: Number(req.params.id)
//       }
//     });

//     res.json({
//       message: 'Slide deleted'
//     });

//   } catch (error) {

//     console.error(error);

//     res.status(500).json({
//       message: 'Failed to delete slide'
//     });

//   }
// };

// module.exports = {
//   getHeroSlides,
//   getHeroSlideById,
//   createHeroSlide,
//   updateHeroSlide,
//   deleteHeroSlide
// };


const prisma = require("../config/db");

// GET ALL SLIDES
const getHeroSlides = async (req, res) => {
  try {
    const slides = await prisma.heroSlide.findMany({
      orderBy: {
        order: "asc",
      },
    });

    res.json(slides);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch hero slides",
    });
  }
};

// GET SINGLE SLIDE
const getHeroSlideById = async (req, res) => {
  try {
    const slide = await prisma.heroSlide.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    if (!slide) {
      return res.status(404).json({
        message: "Slide not found",
      });
    }

    res.json(slide);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch slide",
    });
  }
};

// CREATE HERO SLIDE
const createHeroSlide = async (req, res) => {
  try {
    let {
      title,
      subtitle,
      buttonText,
      buttonLink,
      image,
      order,
      isActive,
      slideType,
      productId,
      eventId,
    } = req.body;

    // EVENT SLIDE
    if (slideType === "event" && eventId) {
      const event = await prisma.event.findUnique({
        where: {
          id: Number(eventId),
        },
      });

      if (!event) {
        return res.status(404).json({
          message: "Event not found",
        });
      }

      title = event.title;
      subtitle = event.description;
      image = event.bannerImage;
      buttonText = "View Event";
      buttonLink = `/events/${event.id}`;
    }

    // PRODUCT SLIDE
    if (slideType === "product" && productId) {
      const product = await prisma.product.findUnique({
        where: {
          id: Number(productId),
        },
      });

      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      title = product.title;
      subtitle = product.description;
      image = product.image;
      buttonText = "View Product";
      buttonLink = `/products/${product.id}`;
    }

    const slide = await prisma.heroSlide.create({
      data: {
        title,
        subtitle,
        image,
        buttonText,
        buttonLink,

        slideType: slideType || "custom",

        productId: productId
          ? Number(productId)
          : null,

        eventId: eventId
          ? Number(eventId)
          : null,

        order: Number(order || 1),
        isActive,
      },
    });

    res.status(201).json(slide);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create slide",
      error: error.message,
    });
  }
};

// UPDATE HERO SLIDE
const updateHeroSlide = async (req, res) => {
  try {
    let {
      title,
      subtitle,
      buttonText,
      buttonLink,
      image,
      order,
      isActive,
      slideType,
      productId,
      eventId,
    } = req.body;

    // EVENT SLIDE
    if (slideType === "event" && eventId) {
      const event = await prisma.event.findUnique({
        where: {
          id: Number(eventId),
        },
      });

      if (!event) {
        return res.status(404).json({
          message: "Event not found",
        });
      }

      title = event.title;
      subtitle = event.description;
      image = event.bannerImage;
      buttonText = "View Event";
      buttonLink = `/events/${event.id}`;
    }

    // PRODUCT SLIDE
    if (slideType === "product" && productId) {
      const product = await prisma.product.findUnique({
        where: {
          id: Number(productId),
        },
      });

      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }

      title = product.title;
      subtitle = product.description;
      image = product.image;
      buttonText = "View Product";
      buttonLink = `/products/${product.id}`;
    }

    const slide = await prisma.heroSlide.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        title,
        subtitle,
        image,
        buttonText,
        buttonLink,

        slideType: slideType || "custom",

        productId: productId
          ? Number(productId)
          : null,

        eventId: eventId
          ? Number(eventId)
          : null,

        order: Number(order || 1),
        isActive,
      },
    });

    res.json(slide);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update slide",
      error: error.message,
    });
  }
};

// DELETE HERO SLIDE
const deleteHeroSlide = async (req, res) => {
  try {
    await prisma.heroSlide.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json({
      message: "Slide deleted successfully",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to delete slide",
      error: error.message,
    });
  }
};

module.exports = {
  getHeroSlides,
  getHeroSlideById,
  createHeroSlide,
  updateHeroSlide,
  deleteHeroSlide,
};