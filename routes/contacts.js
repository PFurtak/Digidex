const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');
const User = require('../models/UserModel');
const Contact = require('../models/ContactModel');

// GET route for api/contacts
// Get all users contacts
// Private access
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// POST route for api/contacts
// Add contact
// Private access
router.post('/', (req, res) => {
  res.send('add contact');
});

// PUT route for api/contacts/:id
// update contact
// Private access
router.put('/:id', (req, res) => {
  res.send('update contacts');
});

// PUT route for api/contacts/:id
// update contact
// Private access
router.delete('/:id', (req, res) => {
  res.send('delete contact');
});

module.exports = router;
