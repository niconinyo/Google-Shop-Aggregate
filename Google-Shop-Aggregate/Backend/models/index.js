// Require Mongoose Package and ENV config
// ----------------------------------------------------------------
require('dotenv').config()
const mongoose = require('mongoose');

// Connect MongoDB Atlas
// ----------------------------------------------------------------
mongoose.connect(process.env.MONGODBURI);
const db = mongoose.connection

db.on('connected', function () {
    console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

// export models & seed data to server.js
// ----------------------------------------------------------------

module.exports = {
    Review: require('./review')
}