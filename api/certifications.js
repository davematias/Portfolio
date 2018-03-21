const express = require('express');
const router = express.Router();
const db = require('../mongo/db');

/* GET all certifications. */
router.get('/', (req, res) => {
  db.Certification.find({}, (err, certifications) => {
    if (err) {
      res.status(500).send(error);
      return;
    }

    res.status(200).json(certifications);
  });
});

module.exports = router;