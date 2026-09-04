// import express from "express";

// import {
//   uploadDocument,
//   getDocuments,
//   getDocumentById,
//   deleteDocument,
// } from "../controllers/documentController.js";

// import documentUpload from "../middleware/documentUpload.js";

// const router = express.Router();

// router.post(
//   "/upload",
//   documentUpload.single("document"),
//   uploadDocument
// );

// router.get("/", getDocuments);

// router.get("/:id", getDocumentById);

// router.delete("/:id", deleteDocument);

// export default router;

const express = require("express");

const {
  uploadDocument,
  getDocuments,
  getDocumentById,
  deleteDocument,
} = require("../controllers/documentController");

const documentUpload = require("../middleware/documentUpload");

const router = express.Router();

router.post(
  "/upload",
  documentUpload.single("document"),
  uploadDocument
);

router.get("/", getDocuments);

router.get("/:id", getDocumentById);

router.delete("/:id", deleteDocument);

module.exports = router;