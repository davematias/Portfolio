/**
 * Endpoints for profile data
 */
const express = require('express');
const router = express.Router();
const db = require('../mongo/db');

/* GET all profiles. */
router.get('/', (req, res) => {
  db.Profile.find({}, (err, profile) => {
    if (err) {
      res.status(500).send(error);
      return;
    }

    res.status(200).json(profile);
  });
});

module.exports = router;