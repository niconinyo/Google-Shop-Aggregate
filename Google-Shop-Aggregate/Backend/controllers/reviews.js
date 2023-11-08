// Require modules
// ----------------------------------------------------------------
const express = require('express')
const router = express.Router()

// require db connection/models
// ----------------------------------------------------------------
const db = require('../models')

// Routes
// ----------------------------------------------------------------
// index route
router.get('/:offerId', function (req, res) {
    db.Review.find({productId: req.params.productId})
        .then(reviews => res.json(reviews))
})

// Route to create Review
router.post('/', (req, res) => {
    db.Review.create(req.body)
        .then(review => res.json(review))
})

// update route
router.put('/:id', (req, res) => {
    db.Review.findByIdAndUpdate(
        req.params.id, req.body,
        {new: true}
    )
        .then(review => res.json(review))
})

// Destroy route

router.delete('/:id', (req, res) => {
    db.Review.findByIdAndDelete(req.params.id)
        .then(() => res.json({ deletedReviewId: req.params.id }))
})


// Export Routes
module.exports = router