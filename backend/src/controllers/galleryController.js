const prisma = require('../config/db');

// GET ALL
const getGalleryImages = async (req, res) => {
  try {
    const images = await prisma.gallery.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json(images);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to fetch gallery'
    });
  }
};

// GET ONE
const getGalleryImageById = async (req, res) => {
  try {
    const image = await prisma.gallery.findUnique({
      where: {
        id: Number(req.params.id)
      }
    });

    if (!image) {
      return res.status(404).json({
        message: 'Image not found'
      });
    }

    res.json(image);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to fetch image'
    });
  }
};

// CREATE
const createGalleryImage = async (req, res) => {
  try {
    const {
      title,
      category,
      image
    } = req.body;

    const gallery =
      await prisma.gallery.create({
        data: {
          title,
          category,
          image
        }
      });

    res.status(201).json(gallery);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to create image'
    });
  }
};

// UPDATE
const updateGalleryImage = async (req, res) => {
  try {
    const {
      title,
      category,
      image
    } = req.body;

    const gallery =
      await prisma.gallery.update({
        where: {
          id: Number(req.params.id)
        },
        data: {
          title,
          category,
          image
        }
      });

    res.json(gallery);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to update image'
    });
  }
};

// DELETE
const deleteGalleryImage = async (req, res) => {
  try {
    await prisma.gallery.delete({
      where: {
        id: Number(req.params.id)
      }
    });

    res.json({
      message: 'Gallery image deleted'
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to delete image'
    });
  }
};

module.exports = {
  getGalleryImages,
  getGalleryImageById,
  createGalleryImage,
  updateGalleryImage,
  deleteGalleryImage
};