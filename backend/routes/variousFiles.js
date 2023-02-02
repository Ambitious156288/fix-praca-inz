import express from "express";
import {
  createDir,
  uploadFiles,
  downloadFile,
  deleteFile,
  searchFile,
  getFiles
} from "../controllers/variousFiles.js";

import auth from '../middleware/auth.js'

const router = express.Router();

router.post("", auth, createDir);
router.get("", auth, getFiles);
router.post("/upload", auth, uploadFiles);
router.get("/download", downloadFile);
router.get("/search", searchFile);
router.delete("", deleteFile);

export default router;
