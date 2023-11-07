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
    db.Offer.find({offerId: req.params.offerId})
        .then(offers => res.json(offers))
})

// Route to create Offer
router.post('/new', (req, res) => {
    db.Offer.create(req.body)
        .then(offer => res.json(offer))
})

// update route
router.put('/:id', (req, res) => {
    db.Offer.findByIdAndUpdate(
        req.params.id, req.body,
        {new: true}
    )
        .then(offer => res.json(offer))
})

// Destroy route

router.delete('/:id', (req, res) => {
    db.Offer.findByIdAndRemove(req.params.id)
        .then(() => res.json({ deletedOfferId: req.params.id }))
})


// Export Routes
module.exports = router