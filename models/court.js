const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const courtSchema = new mongoose.Schema(
  {
    _club: {
      type: String,
      required: true,
      default: () => uuidv4(),
    },
    _type: { type: String, required: true, default: "private", enum: ["private", "public"] },
    name: { type: String, required: true, default: "cyril court" },
    address: { type: String, required: true, default: "cyril Second house" },
    country: { type: String, required: true, default: "Nigeria" },
    state: { type: String, required: true, default: "Lagos" },
    paniedi: {
      type: Number,
      required: true,
      default: 1,
    },
    image: {
      type: String,
      required: true,
      default: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
    },
    thumbnail: {
      type: String,
      required: true,
      default: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
    },
    privateMode: { type: Boolean, required: true, default: true },
  },
  { timestamps: true }
);

const Court = mongoose.model("Court", courtSchema);

module.exports = Court;
