const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const tournamentRoute = require("./routes/tournament");
const challengerRoute = require("./routes/Challenger");
const challengedRoute = require("./routes/Challenged");
const courtRoute = require("./routes/court");

dotenv.config();
const app = express();

// Display a message in home page
app.get("/", (req, res) => {
  res.send("Tennis API is working");
});

//middleware for handling json, raw, text and url encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/tournament", tournamentRoute); 
app.use("/api/challenger", challengerRoute);
app.use("/api/challenged", challengedRoute);
app.use("/api/court", courtRoute);


const PORT = process.env.PORT || 9000;



//connect to mongodb
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
