const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name: { type: String, required: true },
    title: { type: String, maxLength: 50 },
    body: { type: String, required: true },
    listingsId: { type: String },
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: 'User'
    }
    },
);

module.exports = mongoose.model('Review', reviewSchema);