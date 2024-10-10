const express = require('express');
const router = express.Router();
const { protect } = require('../../middlewares/auth');
const { createOrder, getUserOrders } = require('../../controllers/orderController');

router.post('/', protect, createOrder);
router.get('/my-orders', protect, getUserOrders);

module.exports = router;