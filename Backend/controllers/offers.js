// Require modules
// ----------------------------------------------------------------
const express = require('express')
const router = express.Router()
const jwt = require('jwt-simple')

// require db connection/models
// ----------------------------------------------------------------
const db = require('../models')


/* Require the JWT config
--------------------------------------------------------------- */
const config = require('../../jwt.config.js')


// Middleware ----------------------------------------------------------------
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        try {
            const decodedToken = jwt.decode(token, config.jwtSecret);
            req.user = decodedToken;
            next();
        } catch (err) {
            res.status(401).json({ message: 'Invalid token' });
        }
    } else {
        res.status(401).json({ message: 'Missing or invalid Authorization header' });
    }
};

// Routes
// ----------------------------------------------------------------
// index route
router.get('/', function (req, res) {
    db.Offer.find({})
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
    db.Offer.findByIdAndDelete(req.params.id)
        .then(() => res.json({ deletedOfferId: req.params.id }))
})


// Export Routes
module.exports = router