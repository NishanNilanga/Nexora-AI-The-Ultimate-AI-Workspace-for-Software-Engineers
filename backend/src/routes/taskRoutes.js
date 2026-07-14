const express = require("express");

const router = express.Router();

const {
  createTask,
  getTasks,
} = require("../controllers/taskController");

const { protect } = require("../middleware/authMiddleware");

// Create Task
router.post("/", protect, createTask);

// Get My Tasks
router.get("/", protect, getTasks);

module.exports = router;