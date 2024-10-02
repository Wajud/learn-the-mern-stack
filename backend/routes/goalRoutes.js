const express = require("express");
const goalRoutes = express.Router();
const {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalsControllers");
const { protect } = require("../middleware/authMiddleware");

goalRoutes.route("/").get(protect, getGoals).post(protect, createGoal);

goalRoutes.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);

module.exports = goalRoutes;
