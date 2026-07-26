const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const {
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");

router.get("/protected", protect, (req, res) => {
  res.json({
    success: true,
    message: "Protected Route Accessed",
    user: req.user,
  });
});
router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/profile/:id", getProfile);

module.exports = router;
