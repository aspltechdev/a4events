const express = require('express');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const eventRoutes = require('./routes/eventRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const inquiryRoutes =
  require('./routes/inquiryRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/upload', uploadRoutes);

app.use(
  '/uploads',
  express.static(path.join(__dirname, 'uploads'))
);
app.use(
  '/api/inquiries',
  inquiryRoutes
);
app.get('/', (req, res) => {
  res.json({
    message: 'A4 Events API Running'
  });
});

module.exports = app;