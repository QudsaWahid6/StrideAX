const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart,
  deleteCart,
  clearCart,
} = require("../controllers/cartController");

router.post("/", addToCart);

router.get("/", getCart);

router.delete("/:id", deleteCart);
router.delete("/", clearCart);

module.exports = router;
