// app.js
const express = require('express');
const app = express();
const videoRoutes = require('./routes/uploadRoutes');

app.use('/videos', videoRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
