const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());


const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


module.exports = app;