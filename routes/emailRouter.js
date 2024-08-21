// routes/videoRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const Controller = require('../controllers/UploadController');

const storage = multer.diskStorage({});
const upload = multer({ storage });


router.post('/send-email', Controller.sendEmail);


module.exports = router;
