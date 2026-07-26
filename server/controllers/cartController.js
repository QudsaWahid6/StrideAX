const Cart = require("../models/cart");

// Add To Cart
const addToCart = async (req, res) => {
  try {
    const cart = await Cart.create(req.body);

    res.status(201).json({
      success: true,
      message: "Product Added To Cart",
      cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Cart
const getCart = async (req, res) => {
  try {
    const cart = await Cart.find();

    res.status(200).json({
      success: true,
      count: cart.length,
      cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Cart Item
const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Cart Item Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
// Clear Cart
const clearCart = async (req, res) => {
  try {
    await Cart.deleteMany({});

    res.status(200).json({
      success: true,
      message: "Cart Cleared Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addToCart,
  getCart,
  deleteCart,
  clearCart,
};
