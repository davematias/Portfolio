/**
 * Endpoints for portfolio data
 */
const express = require('express');
const router = express.Router();
const db = require('../mongo/db');

/* GET all portfolio. */
router.get('/', (req, res) => {
  db.Portfolio.find({}, (err, portfolio) => {
    if (err) {
      res.status(500).send(error);
      return;
    }

    res.status(200).json(portfolio);
  });
});

module.exports = router;