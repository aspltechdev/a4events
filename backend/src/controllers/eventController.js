const prisma = require('../config/db');

// GET ALL EVENTS
const getEvents = async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      orderBy: {
        eventDate: 'desc'
      }
    });

    res.json(events);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to fetch events'
    });
  }
};

// GET EVENT BY ID
const getEventById = async (req, res) => {
  try {
    const event = await prisma.event.findUnique({
      where: {
        id: Number(req.params.id)
      }
    });

    if (!event) {
      return res.status(404).json({
        message: 'Event not found'
      });
    }

    res.json(event);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to fetch event'
    });
  }
};

// CREATE EVENT
const createEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      location,
      eventDate,
      bannerImage
    } = req.body;

    const event = await prisma.event.create({
      data: {
        title,
        description,
        location,
        eventDate: new Date(eventDate),
        bannerImage
      }
    });

    res.status(201).json(event);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to create event'
    });
  }
};

// UPDATE EVENT
const updateEvent = async (req, res) => {
  try {
    const {
      title,
      description,
      location,
      eventDate,
      bannerImage
    } = req.body;

    const event = await prisma.event.update({
      where: {
        id: Number(req.params.id)
      },
      data: {
        title,
        description,
        location,
        eventDate: new Date(eventDate),
        bannerImage
      }
    });

    res.json(event);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to update event'
    });
  }
};

// DELETE EVENT
const deleteEvent = async (req, res) => {
  try {
    await prisma.event.delete({
      where: {
        id: Number(req.params.id)
      }
    });

    res.json({
      message: 'Event deleted successfully'
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to delete event'
    });
  }
};

module.exports = {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent
};