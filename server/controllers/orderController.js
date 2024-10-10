const Order = require('../models/orderModel');
const Food = require('../models/foodModel');

exports.createOrder = async (req, res) => {
  try {
    const { items } = req.body;
    const userId = req.user._id;

    // Calcular el total
    let total = 0;
    for (const item of items) {
      const food = await Food.findById(item.foodId);
      if (!food) {
        return res.status(404).json({ message: `Food with id ${item.foodId} not found` });
      }
      total += food.price * item.quantity;
    }

    const order = await Order.create({
      userId,
      items,
      total
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user._id })
      .populate('items.foodId', 'name price');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};