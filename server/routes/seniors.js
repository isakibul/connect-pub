const express = require("express");
const { body } = require("express-validator");
const seniorsController = require("../controllers/seniorsController");

const router = express.Router();

/**
 * route to post the successors
 */
router.post(
  "/",
  [
    body("fullName").trim().notEmpty().isLength({ max: 50 }),
    body("avatar").trim().notEmpty().isURL(),
    body("address").trim().notEmpty().isLength({ max: 100 }),
    body("position").trim().notEmpty().isLength({ max: 50 }),
    body("industry").trim().notEmpty().isLength({ max: 50 }),
    body("mobileNumber")
      .trim()
      .notEmpty()
      .matches(/^(\+?\d{1,4}[-\s]?)?(\(?\d{1,3}\)?[-\s]?)?\d{7,14}$/)
      .isLength({ max: 15 }),
    body("email").trim().notEmpty().isEmail(),
    body("linkedin").trim().notEmpty().isURL(),
  ],
  seniorsController.createSeniors
);

/**
 * route to get all the successors
 */
router.get("/", seniorsController.getAllSeniors);

module.exports = router;
