const express = require('express');
const router = express.Router();
const { protect } = require('../../middlewares/auth');
const { createFood, getFoods, getFoodById } = require('../../controllers/foodController');

router.post('/', protect, createFood);
router.get('/', getFoods);
router.get('/:id', getFoodById);

module.exports = router;