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
router.post(
  '/',
  [auth, [check('name', 'Name is required.').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }
    const { name, email, phone, type } = req.body;
    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });
      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

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
