const express = require('express');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const eventRoutes = require('./routes/eventRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const inquiryRoutes =
  require('./routes/inquiryRoutes');
const contactRoutes =
  require('./routes/contactRoutes');

  const dashboardRoutes =
  require('./routes/dashboardRoutes');

const homeContentRoutes =
  require('./routes/homeContentRoutes');

  const heroSlideRoutes =
  require('./routes/heroSlideRoutes');



const galleryRoutes =
  require('./routes/galleryRoutes');


const testimonialRoutes =
  require('./routes/testimonialRoutes');





const app = express();

// app.use(cors());

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://a4agroup.eu'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));


app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/upload', uploadRoutes);

app.use(
  '/api/dashboard',
  dashboardRoutes
);

// app.use(
//   '/uploads',
//   express.static(path.join(__dirname, 'uploads'))
// );

app.use(
  '/uploads',
  express.static(path.join(__dirname, '../uploads'))
);

app.use(
  '/api/inquiries',
  inquiryRoutes
);

app.use(
  '/api/contact',
  contactRoutes
);

app.use(
  '/api/home-content',
  homeContentRoutes
);

app.use(
  '/api/testimonials',
  testimonialRoutes
);

app.use(
  '/api/hero-slides',
  heroSlideRoutes
);



app.use(
  '/api/gallery',
  galleryRoutes
);










app.get('/', (req, res) => {
  res.json({
    message: 'A4 Events API Running'
  });
});

module.exports = app;