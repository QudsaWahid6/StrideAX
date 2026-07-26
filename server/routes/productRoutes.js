const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
} = require("../controllers/productController");

router.post("/", addProduct);

router.get("/", getProducts);
router.get("/search", searchProducts);

router.get("/:id", getSingleProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;
