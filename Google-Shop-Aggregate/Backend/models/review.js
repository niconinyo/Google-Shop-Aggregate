const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, maxLength: 50 },
    body: { type: String, required: true },
    offerID: { type: mongoose.ObjectId
        , reference: 'offer' }
    },
);

module.exports = mongoose.model('Review', reviewSchema);