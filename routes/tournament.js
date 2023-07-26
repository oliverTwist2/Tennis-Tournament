const express = require("express");
const router = express.Router();
const Tournament = require("../models/tournament");

//get all tournaments
router.get("/", async (req, res) => {
  try {
    const tournaments = await Tournament.find()
      .populate("challenger")
      .populate("challenged")
      .populate("court");
    res.json(tournaments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// create one tournament
router.post("/", async (req, res) => {
  const tournament = new Tournament({
    _tournament: req.body._tournament,
    _club: req.body._club,
    challenger: req.body.challenger,
    challenged: req.body.challenged,
    court: req.body.court,
  });

  try {
    const newTournament = await tournament.save();
    res.status(201).json(newTournament);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
