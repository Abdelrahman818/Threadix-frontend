const Orders = require('../models/Orders');
const jwt = require('jsonwebtoken');

/**
 * @method POST
 * @description This method creates a new order
 * @access Public
 */
async function createOrder(req, res) {
  try {
    const token = req.cookies?.token;
    let userId = null;

    if (token) {
      try {
        const payload = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
        userId = payload.id;
      } catch (err) {
        return res.status(401).json({
          successful: false,
          msg: 'Unauthorized',
        });
      }
    }

    const orderData = { ...req.body };
    if (userId) orderData.userId = userId;

    const newOrder = new Orders(orderData);
    await newOrder.save();
    return res.status(201).json({
      successful: true,
      msg: 'Order created successfully',
      data: newOrder,
    });
  } catch (error) {
    return res.status(500).json({
      successful: false,
      msg: error.message,
    });
  }
}

/**
 * @method GET
 * @description This method gets all orders
 * @access Private (Admin only)
 */
async function getAllOrders(req, res) {
  try {
    const orders = await Orders.find().sort({ createdAt: -1 });
    return res.status(200).json({
      successful: true,
      data: orders,
    });
  } catch (error) {
    return res.status(500).json({
      successful: false,
      msg: error.message,
    });
  }
}

/**
 * @method PATCH
 * @description This method updates an order's status
 * @access Private (Admin only)
 */
async function updateOrder(req, res) {
  try {
    const { id } = req.params;
    const { orderStatus, paymentStatus } = req.body;

    const updateData = {};
    if (orderStatus) updateData.orderStatus = orderStatus;
    if (paymentStatus) updateData.paymentStatus = paymentStatus;

    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({
        successful: false,
        msg: 'No valid fields to update',
      });
    }

    const order = await Orders.findByIdAndUpdate(id, updateData, { new: true });

    if (!order) {
      return res.status(404).json({
        successful: false,
        msg: 'Order not found',
      });
    }

    return res.status(200).json({
      successful: true,
      msg: 'Order updated successfully',
      data: order,
    });
  } catch (error) {
    return res.status(500).json({
      successful: false,
      msg: error.message,
    });
  }
}

module.exports = {
  createOrder,
  getAllOrders,
  updateOrder,
};
