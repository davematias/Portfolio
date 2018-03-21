const express = require('express');
const router = express.Router();
const skills = require('./skills');
const certifications = require('./certifications');

router.get('/', (req, res) => {
  res.send('api started');
});

// Set our api router
router.use('/skills', skills);
router.use('/certifications', certifications);

module.exports = router;