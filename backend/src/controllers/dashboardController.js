// const prisma = require('../config/db');

// const getStats = async (req, res) => {
//   try {
//     const products = await prisma.product.count();

//     const events = await prisma.event.count();

//     const inquiries = await prisma.inquiry.count();

//     const contacts = await prisma.contact.count();

//     res.json({
//       products,
//       events,
//       inquiries,
//       contacts
//     });

//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       message: 'Failed to fetch dashboard stats'
//     });
//   }
// };

// module.exports = {
//   getStats
// };
const prisma = require('../config/db');

const getStats = async (req, res) => {
  try {
    const products = await prisma.product.count();
    const events = await prisma.event.count();
    const inquiries = await prisma.inquiry.count();
    const contacts = await prisma.contact.count();

    const latestProducts =
      await prisma.product.findMany({
        orderBy: {
          createdAt: 'desc'
        },
        take: 5
      });

    const latestEvents =
      await prisma.event.findMany({
        orderBy: {
          createdAt: 'desc'
        },
        take: 5
      });

    const latestInquiries =
      await prisma.inquiry.findMany({
        orderBy: {
          createdAt: 'desc'
        },
        take: 5
      });

    const latestContacts =
      await prisma.contact.findMany({
        orderBy: {
          createdAt: 'desc'
        },
        take: 5
      });

    res.json({
      products,
      events,
      inquiries,
      contacts,
      latestProducts,
      latestEvents,
      latestInquiries,
      latestContacts
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to fetch dashboard stats'
    });
  }
};

module.exports = {
  getStats
};