const express = require('express');
const { getAllProperties, getPropertyById, createProperty } = require('../controllers/propertyController');

const router = express.Router();

// Get all properties
router.get('/', getAllProperties);

// Get a single property by ID
router.get('/:id', getPropertyById);

// Create a new property
router.post('/', createProperty);

module.exports = router;
