// backend/src/routes/hotelRoutes.js

const express = require('express');
const { createBooking, getBookings } = require('../controllers/HotelController');

const router = express.Router();

router.post('/register', createBooking); // Register user and create booking
router.get('/bookings', getBookings); // Get all bookings

module.exports = router;
