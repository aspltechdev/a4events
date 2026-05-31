const prisma = require('../config/db');

// GET ALL SLIDES
const getHeroSlides = async (req, res) => {
  try {
    const slides = await prisma.heroSlide.findMany({
      orderBy: {
        order: 'asc'
      }
    });

    res.json(slides);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to fetch hero slides'
    });
  }
};

// GET SINGLE SLIDE
const getHeroSlideById = async (req, res) => {
  try {
    const slide = await prisma.heroSlide.findUnique({
      where: {
        id: Number(req.params.id)
      }
    });

    if (!slide) {
      return res.status(404).json({
        message: 'Slide not found'
      });
    }

    res.json(slide);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to fetch slide'
    });
  }
};

// CREATE
const createHeroSlide = async (req, res) => {
  try {
    const {
      title,
      subtitle,
      buttonText,
      buttonLink,
      image,
      order,
      isActive
    } = req.body;

    const slide =
      await prisma.heroSlide.create({
        data: {
          title,
          subtitle,
          buttonText,
          buttonLink,
          image,
          order: Number(order || 0),
          isActive
        }
      });

    res.status(201).json(slide);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to create slide'
    });
  }
};

// UPDATE
const updateHeroSlide = async (req, res) => {
  try {
    const {
      title,
      subtitle,
      buttonText,
      buttonLink,
      image,
      order,
      isActive
    } = req.body;

    const slide =
      await prisma.heroSlide.update({
        where: {
          id: Number(req.params.id)
        },
        data: {
          title,
          subtitle,
          buttonText,
          buttonLink,
          image,
          order: Number(order || 0),
          isActive
        }
      });

    res.json(slide);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to update slide'
    });
  }
};

// DELETE
const deleteHeroSlide = async (req, res) => {
  try {
    await prisma.heroSlide.delete({
      where: {
        id: Number(req.params.id)
      }
    });

    res.json({
      message: 'Slide deleted'
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to delete slide'
    });
  }
};

module.exports = {
  getHeroSlides,
  getHeroSlideById,
  createHeroSlide,
  updateHeroSlide,
  deleteHeroSlide
};