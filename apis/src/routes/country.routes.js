var express = require('express');
var router = express.Router();
const country = require('../controllers/country.controller.js');

// Create a new Note
router.post('/countries', country.create);

// Retrieve all Notes
router.get('/countries', country.findAll);

// Retrieve a single Note with noteId
router.get('/countries/:country', country.findOne);

// Update a Note with noteId
router.put('/countries/:country', country.update);

// Delete a Note with noteId
router.delete('/countries/:country', country.delete);

module.exports = router;