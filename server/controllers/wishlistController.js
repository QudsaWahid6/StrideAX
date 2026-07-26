const Wishlist = require("../models/wishlist");

// Add Wishlist
const addWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.create(req.body);

    res.status(201).json({
      success: true,
      message: "Product Added To Wishlist",
      wishlist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Wishlist
const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.find();

    res.status(200).json({
      success: true,
      count: wishlist.length,
      wishlist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Wishlist
const deleteWishlist = async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Wishlist Item Deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addWishlist,
  getWishlist,
  deleteWishlist,
};
