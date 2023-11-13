// Require Models
// ----------------------------------------------------------------
require('dotenv').config()
const express = require('express');
const cors = require('cors')
const path = require('path')

// Require db Connection, models, and seed data
// ----------------------------------------------------------------
const db = require('./models');

// Reuire controller routes
// ----------------------------------------------------------------
const reviewsCtrl = require('./controllers/reviews')
const offersCtrl = require('./controllers/offers')
const usersCtrl = require('./controllers/users')


// Express app
// ----------------------------------------------------------------
const app = express();

// Middleware (app.use)
// ----------------------------------------------------------------
app.use(cors())
app.use(express.urlencoded({ entended: true}));
app.use(express.json())
app.use(express.static(path.join(path.dirname(__dirname), 'Frontend', 'dist')))

// Mount routes
// ----------------------------------------------------------------
app.use('/api/reviews', reviewsCtrl)
app.use('/api/offers', offersCtrl)
app.use('/api/users', usersCtrl)

app.get('*', (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname), 'Frontend', 'dist', 'index.html'));
});


// Tell the app to listen on specified port
// ----------------------------------------------------------------
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});