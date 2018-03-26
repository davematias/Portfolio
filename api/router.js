/**
 * Backend routes definition
 */
const express = require('express');
const router = express.Router();
const histories = require('./histories');
const portfolios = require('./portfolios');
const profiles = require('./profiles');
const contacts = require('./contacts');

router.get('/', (req, res) => {
  res.send('api started');
});

// Set our api router
router.use('/contacts', contacts);
router.use('/histories', histories);
router.use('/portfolios', portfolios);
router.use('/profiles', profiles);

module.exports = router;
