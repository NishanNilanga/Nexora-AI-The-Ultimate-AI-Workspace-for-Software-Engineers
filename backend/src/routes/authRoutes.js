const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");

const {
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");

const {
  registerValidation,
  loginValidation,
} = require("../validators/authValidator");

// Register
router.post("/register", registerValidation, registerUser);

// Login
router.post("/login", loginValidation, loginUser);

module.exports = router;

// Current User Profile
router.get("/profile", protect, getProfile);