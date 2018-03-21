/**
 * Endpoints for language data
 */
const express = require('express');
const router = express.Router();
const db = require('../mongo/db');

/* GET all languages. */
router.get('/', (req, res) => {
  db.Language.find({}, (err, languages) => {
    if (err) {
      res.status(500).send(error);
      return;
    }

    res.status(200).json(languages);
  });
});

module.exports = router;