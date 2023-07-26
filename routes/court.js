const express = require('express');
const router = express.Router();
const Court = require("../models/court")

// create a court
router.post('/', async (req, res)=>{
    const court = new Court ({
        _club: req.body._club,
        _type: req.body._type,
        name: req.body.name,
        address: req.body.address,
        country: req.body.country,
        state: req.body.state,
        image: req.body.image,
        thumbnail: req.body.thumbnail,
        privateMode: req.body.privateMode,
        paniedi: req.body.paniedi
    });
    try {
        const newCourt = await court.save();
        res.status(201).json(newCourt);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


module.exports = router;
