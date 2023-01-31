import express from "express";
import photoGallery from "../middleware/photoGallery.js";
import { singleFileUpload, multipleFileUpload, getallSingleFiles, getallMultipleFiles, deletePhoto, deleteGallery } from "../controllers/photoGallery.js";

import auth from '../middleware/auth.js'

const router = express.Router();

router.post('/singleFile', [auth, photoGallery.single('file')], singleFileUpload);
router.post('/multipleFiles', photoGallery.array('files'), multipleFileUpload);
router.get('/getSingleFiles', auth, getallSingleFiles);
router.get('/getMultipleFiles', getallMultipleFiles);
router.delete('/single/:id', deletePhoto);
router.delete('/gallery/:id', deleteGallery);

export default router;


