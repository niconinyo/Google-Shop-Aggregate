/* Require modules
--------------------------------------------------------------- */
const jwt = require('jwt-simple')
const express = require('express')
// Router allows us to handle routing outisde of server.js
const router = express.Router()


/* Require the db connection and models
--------------------------------------------------------------- */
const db = require('../models')


/* Require the JWT config
--------------------------------------------------------------- */
const config = require('../../jwt.config.js')


/* Routes
--------------------------------------------------------------- */
// sign up 
router.post('/signup', (req, res) => {
    db.User.create(req.body)
    .then(user => {
        const token = jwt.encode({ id: user.id}, config.jwtSecret)
        res.json({token:token})
    })
    .catch(() => {
        res.sendStatus(401).json({data: 'Could not create a new user, try again'})
    })
})

// log in
router.post('/login', async (req, res) => {
    const foundUser = await db.User.findOne({ email: req.body.email })
    if (foundUser && foundUser.password === req.body.password) {
        const payload = { id: foundUser.id }
        const token = jwt.encode(payload, config.jwtSecret)
        res.json({
            token: token,
            email: foundUser.email
        })
    } else {
        res.sendStatus(401)
    }
})


/* Export these routes so that they are accessible in `server.js`
--------------------------------------------------------------- */
module.exports = router