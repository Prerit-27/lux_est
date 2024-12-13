const express = require('express');
const { getRecommendations } = require('../controllers/recommendationsController');

const router = express.Router();

// Get recommended properties
router.get('/:userId', getRecommendations);

module.exports = router;
