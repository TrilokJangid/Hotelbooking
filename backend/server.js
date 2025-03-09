const express = require('express');
const bodyParser = require('body-parser');
const hotelRoutes = require('./routes/HotelRoutes');

const app = express();
app.use(bodyParser.json());


const port = 5000;


app.use('/api', hotelRoutes);


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


module.exports = app;