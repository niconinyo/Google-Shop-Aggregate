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

// Express app
// ----------------------------------------------------------------
const app = express();

// Middleware (app.use)
// ----------------------------------------------------------------
app.use(cors())
app.use(express.urlencoded({ entended: true}));
app.use(express.json())

// Mount routes
// ----------------------------------------------------------------
app.use('/api/reviews', reviewsCtrl)

// Tell the app to listen on specified port
// ----------------------------------------------------------------
app.listen(process.env.PORT, function () {
    console.log('Express is listening to port', process.env.PORT);
});