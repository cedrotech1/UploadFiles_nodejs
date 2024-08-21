// controllers/mediaController.js
const cloudinary = require('../helpers/cloudinary');
const sendEmailService = require('../services/emailService');

// Function to upload a video
exports.uploadVideo = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'video'  // Specify the resource type as 'video'
    });
    
    // If you need to store the Cloudinary video ID in your database, you can do it here.

    res.status(200).json({ url: result.secure_url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Function to upload an image
exports.uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'image',
    });

    // If you need to store the Cloudinary image ID in your database, you can do it here.
let url=result.secure_url
    res.status(200).json({ url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// controllers/emailController.js

exports.sendEmail = async (req, res) => {
  const { to, subject, text,from } = req.body;

  if (!to || !subject || !text ) {
    return res.status(400).json({ message: 'All fields are required: to, subject, text' });
  }

  try {
    await sendEmailService(to, subject, text,from);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to send email' });
  }
};

