const prisma = require('../config/db');

// GET
const getHomeContent = async (req, res) => {
  try {
    let content =
      await prisma.homeContent.findFirst();

    if (!content) {
      content =
        await prisma.homeContent.create({
          data: {}
        });
    }

    res.json(content);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to fetch content'
    });
  }
};

// UPDATE
const updateHomeContent = async (
  req,
  res
) => {
  try {
    const {
      aboutTitle,
      aboutContent,
      ctaTitle,
      ctaSubtitle
    } = req.body;

    const content =
      await prisma.homeContent.upsert({
        where: {
          id: 1
        },
        update: {
          aboutTitle,
          aboutContent,
          ctaTitle,
          ctaSubtitle
        },
        create: {
          id: 1,
          aboutTitle,
          aboutContent,
          ctaTitle,
          ctaSubtitle
        }
      });

    res.json(content);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to update'
    });
  }
};

module.exports = {
  getHomeContent,
  updateHomeContent
};