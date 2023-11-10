// Require modules
// ----------------------------------------------------------------
const express = require('express')
const jwt = require('jwt-simple')
const router = express.Router()

// require db connection/models
// ----------------------------------------------------------------
const db = require('../models')

/* Require the JWT config
--------------------------------------------------------------- */
const config = require('../../jwt.config.js')
const { debuglog } = require('util')


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
router.get('/:listingsId', function (req, res) {
    db.Review.find({listingsId: req.params.listingsId})
        .then(reviews => res.json(reviews))
})

// Route to create Review
router.post('/', authMiddleware, (req, res) => {
    // console.log(req.body)
    db.Review.create({
        ...req.body,
        userId: req.user.id
    })
        .then(review => res.json(review))
})

// update route
router.put('/:id',authMiddleware, async (req, res) => {
    const userReview = await db.Review.findById(req.params.id)
    if (userReview.userId.toString() === req.user.id) {
        const newReview = await db.Review.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        res.json(newReview)
    } else {
        res.status(401).json({ message: 'Invalid user to token'});
    }
   
})

// Destroy route

router.delete('/:id',authMiddleware, async (req, res) => {
    const userReview = await db.Review.findById(req.params.id)
    console.log(userReview, req.user.id)
    if (userReview.userId.toString() === req.user.id) {
        const deletedReview = await db.Review.findByIdAndDelete(req.params.id)
        res.send('You deleted the review ' + deletedReview._id)
    } else {
        res.status(401).json({ message: 'invalid user or token'});
    }
})


// Export Routes
module.exports = router