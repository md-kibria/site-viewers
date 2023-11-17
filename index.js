const express = require('express');

const PORT = process.env.PORT || 8080;
const app = express()
const cors = require('cors')
const device = require('express-device')
const routes = require('./routes/index');


app.use(device.capture());
app.use(cors());
app.use('/', routes);

app.get('/er', (req, res) => {
    throw new Error('An error occured!');
    res.send('Hey, error')
})

app.get('/', (_req, res) => {
    res.send('hello')
})

app.use('/', (err, req, res, next) => {
    res.status(400).json({
        "error": err.message
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})


// Bcrypt
// EJS
// JWT