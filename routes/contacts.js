const express = require('express');
const router = express.Router();

// GET route for api/contacts
// Get all users contacts
// Private access
router.get('/', (req, res) => {
  res.send('Get all contacts');
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
