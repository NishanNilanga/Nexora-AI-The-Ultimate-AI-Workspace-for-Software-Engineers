"use client";

import { useEffect, useState } from "react";
import { Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NotificationDropdown from "./NotificationDropdown";
import { getNotifications } from "@/services/notificationService";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);

  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchNotifications = async () => {
    try {
      setLoading(true);

      const data = await getNotifications();

      setNotifications(data.notifications || []);
      setError("");
    } catch (err) {
      console.error("Notification Error:", err);
      setError("Failed to load notifications.");
    } finally {
      setLoading(false);
    }
  };

  // Initial Load
  useEffect(() => {
    fetchNotifications();
  }, []);

  // Auto Refresh Every 30 Seconds
  useEffect(() => {
    const interval = setInterval(() => {
      fetchNotifications();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  // Refresh Immediately When Dropdown Opens
  useEffect(() => {
    if (open) {
      fetchNotifications();
    }
  }, [open]);

  const unreadCount = notifications.filter(
    (item) => !item.isRead
  ).length;

  return (
    <div className="relative">

      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ rotate: -8 }}
        onClick={() => setOpen(!open)}
        className="relative rounded-xl bg-white/5 p-3 transition hover:bg-white/10"
      >
        <Bell className="h-6 w-6 text-white" />

        {unreadCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            {unreadCount}
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <NotificationDropdown
            notifications={notifications}
            loading={loading}
            error={error}
            refreshNotifications={fetchNotifications}
            onClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}