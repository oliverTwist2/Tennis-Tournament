const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');


const tournamentSchema = new mongoose.Schema(
  {
    _club: {
      type: String,
      required: true,
      default: () => uuidv4(),
    },
    _tournament: {
      type: String,
      required: true,
      unique: true,
      default: () => uuidv4(),
    },
    challenger: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Challenger",
      required: true
    },
    challenged: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Challenged",
      required: true
    },
    court: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Court",
      required: true
    },
  },
  { timestamps: true }
);

const Tournament = mongoose.model("Tournament", tournamentSchema);
module.exports = Tournament;