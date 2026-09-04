import express from "express";

import {
  uploadDocument,
  getDocuments,
  getDocumentById,
  deleteDocument,
} from "../controllers/documentController.js";

import documentUpload from "../middleware/documentUpload.js";

const router = express.Router();

router.post(
  "/upload",
  documentUpload.single("document"),
  uploadDocument
);

router.get("/", getDocuments);

router.get("/:id", getDocumentById);

router.delete("/:id", deleteDocument);

export default router;