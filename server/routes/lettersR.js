const express = require("express");
const router = express.Router();
const LetterF = require("../models/letterF");

router.post("/", async (req, res) => {
  try {
    const { email, letter, delivery, audience, createdAt } = req.body;

    const now = new Date();
    // let deliverAt = new Date(now);

    // if (delivery == "6 months") {
    //   deliverAt.setMonth(deliverAt.getMonth() + 6);
    // } else if (delivery == "1 year") {
    //   deliverAt.setFullYear(deliverAt.getFullYear() + 1);
    // } else if (delivery == "3 year") {
    //   deliverAt.setFullYear(deliverAt.getFullYear() + 3);
    // } else if (delivery == "5 year") {
    //   deliverAt.setFullYear(deliverAt.getFullYear() + 5);
    // } else if (delivery == "10 year") {
    //   deliverAt.setFullYear(deliverAt.getFullYear() + 10);
    // }

    let deliverAt = new Date(now);
    deliverAt.setMinutes(deliverAt.getMinutes() + 1);

    const newLetter = new LetterF({
      email,
      letter,
      audience,
      deliverAt,
      createdAt: new Date(),
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
