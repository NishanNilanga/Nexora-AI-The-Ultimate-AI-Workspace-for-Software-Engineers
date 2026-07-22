const express = require("express");

const router = express.Router();

const {
  getNotifications,
  createNotification,
  markAsRead,
  markAllAsRead,
  deleteNotification,
  clearNotifications,
} = require("../controllers/notificationController");

// Update this path if your auth middleware has a different filename
const { protect } = require("../middleware/authMiddleware");

// Routes
router.get("/", protect, getNotifications);

router.post("/", protect, createNotification);

router.patch("/read-all", protect, markAllAsRead);

router.patch("/:id/read", protect, markAsRead);

router.delete("/:id", protect, deleteNotification);

router.delete("/", protect, clearNotifications);

module.exports = router;