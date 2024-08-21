// routes/videoRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const Controller = require('../controllers/UploadController');

const storage = multer.diskStorage({});
const upload = multer({ storage });

router.post('/upload', upload.single('video'), Controller.uploadVideo);
router.post('/upload/pic', upload.single('image'), Controller.uploadImage);


module.exports = router;
