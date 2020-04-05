const express = require('express');
const router = express.Router();

// GET route for api/auth
// Get logged in user
// Private access
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// POST route for api/auth
// Authenticate user and generate token
// Public access
router.post('/', (req, res) => {
  res.send('log in user');
});

module.exports = router;
