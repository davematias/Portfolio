/**
 * Endpoints for contact data
 */
const express = require('express');
const router = express.Router();

/* Post contact data */
router.post('/', (req, res) => {
  console.log(req.body);

  res.status(204).send();
});

module.exports = router;