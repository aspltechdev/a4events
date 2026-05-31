const prisma = require('../config/db');

const createInquiry = async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      message,
      productId,
      eventId
    } = req.body;

    const inquiry = await prisma.inquiry.create({
      data: {
        name,
        phone,
        email,
        message,
        productId: productId
          ? Number(productId)
          : null,
        eventId: eventId
          ? Number(eventId)
          : null
      }
    });

    res.status(201).json(inquiry);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to create inquiry'
    });
  }
};

const getInquiries = async (req, res) => {
  try {
    const inquiries = await prisma.inquiry.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json(inquiries);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to fetch inquiries'
    });
  }
};

const getInquiryById = async (req, res) => {
  try {
    const inquiry = await prisma.inquiry.findUnique({
      where: {
        id: Number(req.params.id)
      }
    });

    if (!inquiry) {
      return res.status(404).json({
        message: 'Inquiry not found'
      });
    }

    res.json(inquiry);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to fetch inquiry'
    });
  }
};

const deleteInquiry = async (req, res) => {
  try {
    await prisma.inquiry.delete({
      where: {
        id: Number(req.params.id)
      }
    });

    res.json({
      message: 'Inquiry deleted'
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to delete inquiry'
    });
  }
};

module.exports = {
  createInquiry,
  getInquiries,
  getInquiryById,
  deleteInquiry
};