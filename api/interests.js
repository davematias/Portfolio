/**
 * Endpoints for interests data
 */
const express = require('express');
const router = express.Router();
const db = require('../mongo/db');

/* GET all interests. */
router.get('/', (req, res) => {
  db.Interest.find({}, (err, interests) => {
    if (err) {
      res.status(500).send(error);
      return;
    }

    res.status(200).json(interests);
  });
});

module.exports = router;