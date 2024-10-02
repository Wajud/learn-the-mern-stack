const express = require("express");
const userRoutes = express.Router();
const {
  registerUser,
  loginUser,
  getMe,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

userRoutes.post("/", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.get("/me", protect, getMe);

module.exports = userRoutes;
