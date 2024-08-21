// app.js
const express = require('express');
const app = express();
const videoRoutes = require('./routes/uploadRoutes');
const Email = require('./routes/emailRouter');
const bodyParser = require('body-parser');

require('dotenv').config();

// Use body-parser middleware to parse JSON bodies
app.use(bodyParser.json());
app.use('/videos', videoRoutes);
app.use('/email', Email);

app.use(express.json()); 

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
