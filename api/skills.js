/**
 * Endpoint for skills data
 */
const express = require('express');
const router = express.Router();
const db = require('../mongo/db');

/* GET all skills. */
router.get('/', (req, res) => {
  db.Skill.find({}, (err, skills) => {
    if (err) {
      res.status(500).send(error);
      return;
    }

    res.status(200).json(skills);
  });
});

module.exports = router;