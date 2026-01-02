const express = require("express");
const router = express.Router();
const LetterF = require("../models/letterF");

router.post("/", async (req, res) => {
  try {
    const { email, letter, delivery, audience, createdAt } = req.body;

    const newLetter = new LetterF({
      email,
      letter,
      delivery,
      audience,
      createdAt,
      status: "scheduled",
    });

    await newLetter.save();

    res.status(200).json({
      success: true,
      message: "Letter saved to DB",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Error saving letter",
    });
  }
});

module.exports = router;
