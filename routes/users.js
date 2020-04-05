const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const User = require('../models/UserModel');

// POST route for api/users
// Registers a user
// Public access
router.post(
  '/',
  [
    check('name', 'Please enter your name.').not().isEmpty(),
    check('email', 'Please enter a valid email address.').isEmail(),
    check('password', 'Passwords must be 6 characters or longer.').isLength({
      min: 6,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }
    res.send('passed');
  }
);

module.exports = router;
