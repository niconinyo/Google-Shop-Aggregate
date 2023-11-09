const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, maxLength: 50 },
    body: { type: String, required: true },
    listingsId: { type: String }
    },
);

module.exports = mongoose.model('Review', reviewSchema);