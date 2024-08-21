// helpers/cloudinary.js
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dzl8xve8s',
  api_key: '467178468662279',
  api_secret: 'JiEFYHHpWLoJoBtOabvl4fftgWw'
});

module.exports = cloudinary;
