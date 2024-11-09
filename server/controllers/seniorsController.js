const { validationResult } = require("express-validator");
const seniorsModel = require("../models/seniors");

/**
 * route for register a new
 */
exports.createSeniors = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    fullName,
    avatar,
    address,
    position,
    industry,
    mobileNumber,
    email,
    linkedin,
  } = req.body;
  const data = [
    fullName,
    avatar,
    address,
    position,
    industry,
    mobileNumber,
    email,
    linkedin,
  ];

  seniorsModel.insertSeniors(data, (err) => {
    if (err) {
      console.error("Error inserting data into MySQL", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.status(200).json({ message: "Registration successful" });
  });
};

/**
 * route for get all
 */
exports.getAllSeniors = (_req, res) => {
  seniorsModel.getAllSeniors((err, results) => {
    if (err) {
      console.error("Error fetching data from MySQL", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.status(200).json(results);
  });
};
