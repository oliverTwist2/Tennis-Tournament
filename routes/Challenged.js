const express = require('express');
const router = express.Router();
const Challenged = require('../models/challenged');

// create one challenged
router.post('/', async (req, res) => {
    const challenged = new Challenged({
        _challenged: req.body._challenged,
        _club: req.body._club,
        state: req.body.state,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        account_verify: req.body.account_verify,
        image: req.body.image,
        dateOfBirth: req.body.dateOfBirth,
        thumbnail: req.body.thumbnail,
        notifcations: req.body.notifcations,
        emailNotifcations: req.body.emailNotifcations,
        inAppNotifcations: req.body.inAppNotifcations,
        Token: req.body.Token,
        TokenExpire: req.body.TokenExpire
    });
    try {
        const newChallenged = await challenged.save();
        res.status(201).json(newChallenged);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;