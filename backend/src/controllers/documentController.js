// // import prisma from "../config/prisma.js";

// // export const uploadDocument = async (req, res) => {
// //   try {
// //     if (!req.file) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "PDF file is required.",
// //       });
// //     }

// //     const { title } = req.body;

// //     if (!title || !title.trim()) {
// //       return res.status(400).json({
// //         success: false,
// //         message: "Document title is required.",
// //       });
// //     }

// //     const fileUrl = `/uploads/documents/${req.file.filename}`;

// //     const document = await prisma.document.create({
// //       data: {
// //         title: title.trim(),
// //         fileName: req.file.originalname,
// //         fileUrl,
// //       },
// //     });

// //     return res.status(201).json({
// //       success: true,
// //       message: "PDF uploaded successfully.",
// //       document,
// //     });
// //   } catch (error) {
// //     console.error("Upload document error:", error);

// //     return res.status(500).json({
// //       success: false,
// //       message: "Failed to upload PDF.",
// //       error: error.message,
// //     });
// //   }
// // };

// // export const getDocuments = async (req, res) => {
// //   try {
// //     const documents = await prisma.document.findMany({
// //       orderBy: {
// //         createdAt: "desc",
// //       },
// //     });

// //     return res.json({
// //       success: true,
// //       documents,
// //     });
// //   } catch (error) {
// //     console.error("Get documents error:", error);

// //     return res.status(500).json({
// //       success: false,
// //       message: "Failed to fetch documents.",
// //       error: error.message,
// //     });
// //   }
// // };

// // export const getDocumentById = async (req, res) => {
// //   try {
// //     const id = Number(req.params.id);

// //     const document = await prisma.document.findUnique({
// //       where: { id },
// //     });

// //     if (!document) {
// //       return res.status(404).json({
// //         success: false,
// //         message: "Document not found.",
// //       });
// //     }

// //     return res.json({
// //       success: true,
// //       document,
// //     });
// //   } catch (error) {
// //     console.error("Get document error:", error);

// //     return res.status(500).json({
// //       success: false,
// //       message: "Failed to fetch document.",
// //       error: error.message,
// //     });
// //   }
// // };

// // export const deleteDocument = async (req, res) => {
// //   try {
// //     const id = Number(req.params.id);

// //     const document = await prisma.document.findUnique({
// //       where: { id },
// //     });

// //     if (!document) {
// //       return res.status(404).json({
// //         success: false,
// //         message: "Document not found.",
// //       });
// //     }

// //     await prisma.document.delete({
// //       where: { id },
// //     });

// //     return res.json({
// //       success: true,
// //       message: "Document deleted successfully.",
// //     });
// //   } catch (error) {
// //     console.error("Delete document error:", error);

// //     return res.status(500).json({
// //       success: false,
// //       message: "Failed to delete document.",
// //       error: error.message,
// //     });
// //   }
// // };

// const prisma = require("../config/db");

// const uploadDocument = async (req, res) => {
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

// const getDocuments = async (req, res) => {
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

// const getDocumentById = async (req, res) => {
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

// const deleteDocument = async (req, res) => {
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

// module.exports = {
//   uploadDocument,
//   getDocuments,
//   getDocumentById,
//   deleteDocument,
// };


const fs = require("fs");
const path = require("path");

const prisma = require("../config/db");

// =====================================================
// UPLOAD / REPLACE PDF
// =====================================================

const uploadDocument = async (req, res) => {
  try {
    // Check file
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "PDF file is required.",
      });
    }

    // Check title
    const { title } = req.body;

    if (!title || !title.trim()) {
      // Remove uploaded file if title is missing
      if (req.file.path && fs.existsSync(req.file.path)) {
        fs.unlinkSync(req.file.path);
      }

      return res.status(400).json({
        success: false,
        message: "Document title is required.",
      });
    }

    // New PDF URL
    const fileUrl = `/uploads/documents/${req.file.filename}`;

    // Check if an existing PDF already exists
    const existingDocument = await prisma.document.findFirst({
      orderBy: {
        createdAt: "desc",
      },
    });

    // =================================================
    // REPLACE EXISTING PDF
    // =================================================

    if (existingDocument) {
      // Build old physical file path
      const oldFilePath = path.join(
        process.cwd(),
        existingDocument.fileUrl.replace(/^\/+/, "")
      );

      // Delete old physical PDF
      if (fs.existsSync(oldFilePath)) {
        fs.unlinkSync(oldFilePath);
      }

      // Delete old database record
      await prisma.document.delete({
        where: {
          id: existingDocument.id,
        },
      });
    }

    // =================================================
    // CREATE NEW PDF RECORD
    // =================================================

    const document = await prisma.document.create({
      data: {
        title: title.trim(),
        fileName: req.file.originalname,
        fileUrl,
      },
    });

    return res.status(201).json({
      success: true,
      message: existingDocument
        ? "PDF replaced successfully."
        : "PDF uploaded successfully.",
      document,
    });
  } catch (error) {
    console.error("Upload document error:", error);

    // If database operation fails, remove newly uploaded file
    if (req.file && req.file.path && fs.existsSync(req.file.path)) {
      try {
        fs.unlinkSync(req.file.path);
      } catch (fileError) {
        console.error(
          "Failed to remove uploaded file:",
          fileError
        );
      }
    }

    return res.status(500).json({
      success: false,
      message: "Failed to upload PDF.",
      error: error.message,
    });
  }
};

// =====================================================
// GET ALL DOCUMENTS
// =====================================================

const getDocuments = async (req, res) => {
  try {
    const documents = await prisma.document.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json({
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

// =====================================================
// GET DOCUMENT BY ID
// =====================================================

const getDocumentById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid document ID.",
      });
    }

    const document = await prisma.document.findUnique({
      where: {
        id,
      },
    });

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found.",
      });
    }

    return res.status(200).json({
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

// =====================================================
// DELETE DOCUMENT
// =====================================================

const deleteDocument = async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid document ID.",
      });
    }

    const document = await prisma.document.findUnique({
      where: {
        id,
      },
    });

    if (!document) {
      return res.status(404).json({
        success: false,
        message: "Document not found.",
      });
    }

    // Delete physical PDF
    const filePath = path.join(
      process.cwd(),
      document.fileUrl.replace(/^\/+/, "")
    );

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Delete database record
    await prisma.document.delete({
      where: {
        id,
      },
    });

    return res.status(200).json({
      success: true,
      message: "PDF deleted successfully.",
    });
  } catch (error) {
    console.error("Delete document error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete PDF.",
      error: error.message,
    });
  }
};

// =====================================================
// EXPORTS
// =====================================================

module.exports = {
  uploadDocument,
  getDocuments,
  getDocumentById,
  deleteDocument,
};