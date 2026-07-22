"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  FolderKanban,
  CheckCircle2,
  AlertTriangle,
  Bell,
  Trash2,
} from "lucide-react";

import { formatDistanceToNow } from "date-fns";

import {
  markNotificationAsRead,
  deleteNotification,
} from "@/services/notificationService";

export default function NotificationItem({
  notification,
  refreshNotifications,
}) {

  const getIcon = () => {
    switch (notification.type) {
      case "project":
        return (
          <FolderKanban
            size={22}
            className="text-blue-400"
          />
        );

      case "task":
        return (
          <CheckCircle2
            size={22}
            className="text-green-400"
          />
        );

      case "ai":
        return (
          <BrainCircuit
            size={22}
            className="text-cyan-400"
          />
        );

      case "warning":
        return (
          <AlertTriangle
            size={22}
            className="text-yellow-400"
          />
        );

      default:
        return (
          <Bell
            size={22}
            className="text-purple-400"
          />
        );
    }
  };

  // Mark as Read
  const handleMarkAsRead = async () => {
    try {
      if (notification.isRead) return;

      await markNotificationAsRead(notification._id);

      refreshNotifications();

    } catch (err) {
      console.error("Mark Read Error:", err);
    }
  };

  // Delete Notification
  const handleDelete = async (e) => {
    try {
      e.stopPropagation();

      await deleteNotification(notification._id);

      refreshNotifications();

    } catch (err) {
      console.error("Delete Error:", err);
    }
  };

  return (
    <motion.div
      whileHover={{
        x: 4,
      }}
      onClick={handleMarkAsRead}
      className={`group flex cursor-pointer items-start gap-4 border-b border-white/5 p-5 transition hover:bg-white/5 ${
        !notification.isRead
          ? "bg-cyan-500/5"
          : ""
      }`}
    >

      {/* Icon */}

      <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
        {getIcon()}
      </div>

      {/* Content */}

      <div className="flex-1">

        <div className="flex items-center justify-between">

          <h3 className="font-semibold text-white">
            {notification.title}
          </h3>

          {!notification.isRead && (
            <span className="h-3 w-3 rounded-full bg-cyan-400"></span>
          )}

        </div>

        <p className="mt-2 text-sm leading-6 text-gray-400">
          {notification.message}
        </p>

        <div className="mt-4 flex items-center justify-between">

          <span className="text-xs text-gray-500">

            {formatDistanceToNow(
              new Date(notification.createdAt),
              {
                addSuffix: true,
              }
            )}

          </span>

          <button
            onClick={handleDelete}
            className="rounded-lg p-2 text-red-400 transition hover:bg-red-500/10"
            title="Delete Notification"
          >
            <Trash2 size={16} />
          </button>

        </div>

      </div>

    </motion.div>
  );
}