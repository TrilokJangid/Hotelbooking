// backend/src/controllers/hotelController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Register user and create booking
async function createBooking(req, res) {
    const { email, password, firstName, lastName, aadhaar, familySize } = req.body;

    try {
        const newUser = await prisma.user.create({
            data: {
                email,
                password,
                firstName,
                lastName,
                aadhaar,
                familySize,
            },
        });

        const newBooking = await prisma.hotelBooking.create({
            data: {
                userId: newUser.id,
                familySize,
            },
        });

        res.status(201).json(newBooking);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create booking.' });
    }
}

// Get all bookings
async function getBookings(req, res) {
    try {
        const bookings = await prisma.hotelBooking.findMany({
            include: {
                user: true,
            },
        });

        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch bookings.' });
    }
}

module.exports = { createBooking, getBookings };
