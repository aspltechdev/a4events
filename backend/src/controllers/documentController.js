// import prisma from "../config/prisma.js";

// export const uploadDocument = async (req, res) => {
//   try {
//     if (!req.file) {
//       return res.status(400).json({
//         success: false,
//         message: "PDF file is required.",
//       });
//     }

//     const { title } = req.body;

//     if (!title || !title.trim()) {
//       return res.status(400).json({
//         success: false,
//         message: "Document title is required.",
//       });
//     }

//     const fileUrl = `/uploads/documents/${req.file.filename}`;

//     const document = await prisma.document.create({
//       data: {
//         title: title.trim(),
//         fileName: req.file.originalname,
//         fileUrl,
//       },
//     });

//     return res.status(201).json({
//       success: true,
//       message: "PDF uploaded successfully.",
//       document,
//     });
//   } catch (error) {
//     console.error("Upload document error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to upload PDF.",
//       error: error.message,
//     });
//   }
// };

// export const getDocuments = async (req, res) => {
//   try {
//     const documents = await prisma.document.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//     });

//     return res.json({
//       success: true,
//       documents,
//     });
//   } catch (error) {
//     console.error("Get documents error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch documents.",
//       error: error.message,
//     });
//   }
// };

// export const getDocumentById = async (req, res) => {
//   try {
//     const id = Number(req.params.id);

//     const document = await prisma.document.findUnique({
//       where: { id },
//     });

//     if (!document) {
//       return res.status(404).json({
//         success: false,
//         message: "Document not found.",
//       });
//     }

//     return res.json({
//       success: true,
//       document,
//     });
//   } catch (error) {
//     console.error("Get document error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to fetch document.",
//       error: error.message,
//     });
//   }
// };

// export const deleteDocument = async (req, res) => {
//   try {
//     const id = Number(req.params.id);

//     const document = await prisma.document.findUnique({
//       where: { id },
//     });

//     if (!document) {
//       return res.status(404).json({
//         success: false,
//         message: "Document not found.",
//       });
//     }

//     await prisma.document.delete({
//       where: { id },
//     });

//     return res.json({
//       success: true,
//       message: "Document deleted successfully.",
//     });
//   } catch (error) {
//     console.error("Delete document error:", error);

//     return res.status(500).json({
//       success: false,
//       message: "Failed to delete document.",
//       error: error.message,
//     });
//   }
// };

const prisma = require("../config/prisma");

const uploadDocument = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "PDF file is required.",
      });
    }

    const { title } = req.body;

    if (!title || !title.trim()) {
      return res.status(400).json({
        success: false,
        message: "Document title is required.",
      });
    }

    const fileUrl = `/uploads/documents/${req.file.filename}`;

    const document = await prisma.document.create({
      data: {
        title: title.trim(),
        fileName: req.file.originalname,
        fileUrl,
      },
    });

    return res.status(201).json({
      success: true,
      message: "PDF uploaded successfully.",
      document,
    });
  } catch (error) {
    console.error("Upload document error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to upload PDF.",
      error: error.message,
    });
  }
};

const getDocuments = async (req, res) => {
  try {
    const documents = await prisma.document.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.json({
      success: true,
      documents,
    });
  } catch (error) {
    console.error("Get documents error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch documents.",
      error: error.message,
    });
  }
};

const getDocumentById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const document = await prisma.document.findUnique({
      where: { id },
    });

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found.",
      });
    }

    return res.json({
      success: true,
      document,
    });
  } catch (error) {
    console.error("Get document error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch document.",
      error: error.message,
    });
  }
};

const deleteDocument = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const document = await prisma.document.findUnique({
      where: { id },
    });

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found.",
      });
    }

    await prisma.document.delete({
      where: { id },
    });

    return res.json({
      success: true,
      message: "Document deleted successfully.",
    });
  } catch (error) {
    console.error("Delete document error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete document.",
      error: error.message,
    });
  }
};

module.exports = {
  uploadDocument,
  getDocuments,
  getDocumentById,
  deleteDocument,
};