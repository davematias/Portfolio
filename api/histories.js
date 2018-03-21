/**
 * Endpoint for history data
 */
const express = require('express');
const router = express.Router();
const db = require('../mongo/db');

/* GET all history data */
router.get('/', (req, res) => {
  db.History.find({}, (err, histories) => {
    if (err) {
      res.status(500).send(error);
      return;
    }

    res.status(200).json(histories);
  });
});

module.exports = router;