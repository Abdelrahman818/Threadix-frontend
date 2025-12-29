const mongoose = require('mongoose');

const schema = mongoose.Schema({
  userId: String,
  name: String,
  email: String,
  phone: String,
  items: [{
    productId: String,
    quantity: String,
    color: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: null,
    },
  }],
  totalPrice: Number,
  paymentMethod: String,
  paymentStatus: {
    type: String,
    default: 'unpaid',
    enum: ['paid', 'unpaid', 'refunded'],
  },
  orderStatus: {
    type: String,
    default: 'pending',
    enum: ['pending', 'in delivery', 'completed', 'cancelled'],
  },
  address: String,
}, {
  timestamps: true,
});

const OrdersModel = mongoose.model('order', schema);

module.exports = OrdersModel;
