const express = require('express');
const router = express.Router();

// POST route for api/users
// Registers a user
// Public access
router.post('/', (req, res) => {
  res.send('Register user');
});

module.exports = router;
