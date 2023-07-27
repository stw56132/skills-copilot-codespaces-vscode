// Create web server with Node.js

const express = require('express');
const router = express.Router();
const comments = require('../controllers/comments.controller');

// Retrieve all comments
router.get('/', comments.findAll);

// Create a new comment
router.post('/', comments.create);

// Retrieve a single comment with id
router.get('/:id', comments.findOne);

// Update a comment with id
router.put('/:id', comments.update);

// Delete a comment with id
router.delete('/:id', comments.delete);

// Delete all comments
router.delete('/', comments.deleteAll);

module.exports = router;