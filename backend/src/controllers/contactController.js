// const prisma = require('../config/db');

// const createContact = async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       phone,
//       subject,
//       message
//     } = req.body;

//     const contact = await prisma.contact.create({
//       data: {
//         name,
//         email,
//         phone,
//         subject,
//         message
//       }
//     });

//     res.status(201).json(contact);

//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       message: 'Failed to submit contact form'
//     });
//   }
// };

// const getContacts = async (req, res) => {
//   try {
//     const contacts = await prisma.contact.findMany({
//       orderBy: {
//         createdAt: 'desc'
//       }
//     });

//     res.json(contacts);

//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       message: 'Failed to fetch contacts'
//     });
//   }
// };

// const deleteContact = async (req, res) => {
//   try {
//     await prisma.contact.delete({
//       where: {
//         id: Number(req.params.id)
//       }
//     });

//     res.json({
//       message: 'Contact deleted'
//     });

//   } catch (error) {
//     console.error(error);

//     res.status(500).json({
//       message: 'Failed to delete contact'
//     });
//   }
// };

// module.exports = {
//   createContact,
//   getContacts,
//   deleteContact
// };

const prisma = require('../config/db');
const transporter = require('../services/emailService');

const createContact = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      subject,
      message
    } = req.body;

    // Save to DB
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        subject,
        message
      }
    });

    // Email to Admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form: ${subject || 'Website Inquiry'}`,
      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject || 'N/A'}</p>

        <h3>Message</h3>
        <p>${message}</p>
      `
    });

    // Confirmation Email to Visitor
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your message - A4 Events',
      html: `
        <h2>Thank You for Contacting A4 Events</h2>

        <p>Hi ${name},</p>

        <p>
          We have received your message and our team
          will get back to you shortly.
        </p>

        <p>
          Thank you for choosing A4 Events.
        </p>

        <br>

        <p>
          Regards,<br>
          A4 Events Team
        </p>
      `
    });

    res.status(201).json({
      message: 'Contact form submitted successfully'
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to submit contact form'
    });
  }
};

const getContacts = async (req, res) => {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    res.json(contacts);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to fetch contacts'
    });
  }
};

const deleteContact = async (req, res) => {
  try {
    await prisma.contact.delete({
      where: {
        id: Number(req.params.id)
      }
    });

    res.json({
      message: 'Contact deleted'
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Failed to delete contact'
    });
  }
};

module.exports = {
  createContact,
  getContacts,
  deleteContact
};