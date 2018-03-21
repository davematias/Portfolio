/**
 * Backend routes definition
 */
const express = require('express');
const router = express.Router();
const skills = require('./skills');
const certifications = require('./certifications');
const histories = require('./histories');
const interests = require('./interests');
const languages = require('./languages');
const portfolios = require('./portfolios');
const profiles = require('./profiles');

router.get('/', (req, res) => {
  res.send('api started');
});

// Set our api router
router.use('/skills', skills);
router.use('/certifications', certifications);
router.use('/histories', histories);
router.use('/interests', interests);
router.use('/languages', languages);
router.use('/portfolios', portfolios);
router.use('/profiles', profiles);

module.exports = router;
