require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// connect DB
require("./db");

// routes
const lettersRoute = require("./routes/lettersR");

const app = express();
const PORT = 2745;

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/letters", lettersRoute);

app.get("/", (req, res) => {
  res.send("Server is running");
});

// start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
