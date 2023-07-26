const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const challengerSchema = new mongoose.Schema(
  {
    _club: { type: String, required: true, default: () => uuidv4() },
    state: { type: String, required: true, default: "accepted", enum: ["accepted", "pending", "rejected"] },
    email: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    account_verify: { type: Boolean, required: true, default: true },
    image: {
      type: String,
      required: true,
      default: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
    },
    dateOfBirth: { type: Date, required: true },
    thumbnail: {
      type: String,
      required: true,
      default: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
    },
    notifcations: { type: Array, required: true, default: [] },
    emailNotifcations: { type: Boolean, required: true, default: true },
    inAppNotifcations: { type: Boolean, required: true, default: true },
    Token: { type: String, required: true },
    TokenExpire: { type: Date, required: true },
  },
  { timestamps: true }
);

const Challenger = mongoose.model("Challenger", challengerSchema);

module.exports = Challenger;
