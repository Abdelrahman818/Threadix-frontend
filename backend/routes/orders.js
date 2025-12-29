const express = require('express');
const router = express.Router();

const orderValidation = require('../middleware/orderValidation');
const { verifyAdmin } = require('../middleware/verifyUser');
const {
  createOrder,
  getAllOrders,
  updateOrder,
} = require('../controllers/orderController.js');

// Create new order
router.post('/', orderValidation, createOrder);

// Get all orders (Admin only)
router.get('/', verifyAdmin, getAllOrders);

// Update order status (Admin only)
router.patch('/:id', verifyAdmin, updateOrder);

module.exports = router;
