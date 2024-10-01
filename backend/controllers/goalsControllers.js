const asyncHandler = require("express-async-handler");
// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get goals" });
});

// @desc Create goal
// @route POST /api/goals
// @access Private
const createGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status = 400;
    throw new Error("Please provide a text");
  }
  res.status(200).json({ message: "Successfully created a goal" });
});

// @desc Update goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update a goal" });
});

// @desc Delete goal
// @route GET /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Delete a goal" });
});

module.exports = { getGoals, createGoal, updateGoal, deleteGoal };
