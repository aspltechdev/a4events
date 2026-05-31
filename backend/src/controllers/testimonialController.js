const prisma = require('../config/db');

// GET ALL TESTIMONIALS
const getTestimonials = async (req, res) => {
  try {
    const testimonials =
      await prisma.testimonial.findMany({
        orderBy: {
          createdAt: 'desc'
        }
      });

    res.json(testimonials);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to fetch testimonials'
    });
  }
};

// GET TESTIMONIAL BY ID
const getTestimonialById = async (req, res) => {
  try {
    const testimonial =
      await prisma.testimonial.findUnique({
        where: {
          id: Number(req.params.id)
        }
      });

    if (!testimonial) {
      return res.status(404).json({
        message: 'Testimonial not found'
      });
    }

    res.json(testimonial);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to fetch testimonial'
    });
  }
};

// CREATE TESTIMONIAL
const createTestimonial = async (req, res) => {
  try {
    const {
      name,
      company,
      review,
      rating,
      image
    } = req.body;

    const testimonial =
      await prisma.testimonial.create({
        data: {
          name,
          company,
          review,
          rating: Number(rating),
          image
        }
      });

    res.status(201).json(testimonial);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to create testimonial'
    });
  }
};

// UPDATE TESTIMONIAL
const updateTestimonial = async (req, res) => {
  try {
    const {
      name,
      company,
      review,
      rating,
      image
    } = req.body;

    const testimonial =
      await prisma.testimonial.update({
        where: {
          id: Number(req.params.id)
        },
        data: {
          name,
          company,
          review,
          rating: Number(rating),
          image
        }
      });

    res.json(testimonial);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to update testimonial'
    });
  }
};

// DELETE TESTIMONIAL
const deleteTestimonial = async (req, res) => {
  try {
    await prisma.testimonial.delete({
      where: {
        id: Number(req.params.id)
      }
    });

    res.json({
      message: 'Testimonial deleted'
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to delete testimonial'
    });
  }
};

module.exports = {
  getTestimonials,
  getTestimonialById,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial
};