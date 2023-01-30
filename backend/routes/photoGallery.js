import express from "express";
import photoGallery from "../middleware/photoGallery.js";
import { singleFileUpload, multipleFileUpload, getallSingleFiles, getallMultipleFiles, deletePhoto, deleteGallery } from "../controllers/photoGallery.js";

const router = express.Router();

router.post('/singleFile', photoGallery.single('file'), singleFileUpload);
router.post('/multipleFiles', photoGallery.array('files'), multipleFileUpload);
router.get('/getSingleFiles', getallSingleFiles);
router.get('/getMultipleFiles', getallMultipleFiles);
router.delete('/single/:id', deletePhoto);
router.delete('/gallery/:id', deleteGallery);

export default router;
