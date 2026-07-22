"use client";

import { motion } from "framer-motion";
import {
  CheckCheck,
  Trash2,
  X,
  BellRing,
} from "lucide-react";

import toast from "react-hot-toast";

import {
  markAllNotificationsAsRead,
  clearNotifications,
} from "@/services/notificationService";

import NotificationItem from "./NotificationItem";

export default function NotificationDropdown({
  notifications,
  loading,
  error,
  refreshNotifications,
  onClose,
}) {

  const unread = notifications.filter(
    (item) => !item.isRead
  ).length;

  // Mark All Read
  const handleMarkAllRead = async () => {
    try {

      await markAllNotificationsAsRead();

      toast.success("All notifications marked as read.");

      refreshNotifications();

    } catch (err) {

      console.error(err);

      toast.error("Failed to mark all notifications.");

    }
  };

  // Clear All
  const handleClearAll = async () => {
    try {

      await clearNotifications();

      toast.success("All notifications cleared.");

      refreshNotifications();

    } catch (err) {

      console.error(err);

      toast.error("Failed to clear notifications.");

    }
  };

  return (

    <motion.div
      initial={{
        opacity: 0,
        y: -12,
        scale: 0.97,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -10,
        scale: 0.97,
      }}
      transition={{
        duration: .25,
      }}
      className="
      absolute
      right-0
      mt-4
      w-[420px]
      overflow-hidden
      rounded-3xl
      border
      border-slate-700
      bg-slate-900/95
      shadow-2xl
      backdrop-blur-3xl
      "
    >

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-700 px-6 py-5">

        <div>

          <h2 className="text-lg font-bold text-white">

            Notifications

          </h2>

          <p className="mt-1 text-sm text-slate-400">

            {unread} unread notification
            {unread !== 1 && "s"}

          </p>

        </div>

        <button
          onClick={onClose}
          className="rounded-xl p-2 transition hover:bg-slate-800"
        >

          <X
            size={18}
            className="text-slate-400"
          />

        </button>

      </div>

      {/* Actions */}

      <div className="flex items-center justify-between border-b border-slate-700 px-6 py-4">

        <button
          onClick={handleMarkAllRead}
          className="flex items-center gap-2 rounded-xl bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-500/20"
        >

          <CheckCheck size={16} />

          Mark All Read

        </button>

        <button
          onClick={handleClearAll}
          className="flex items-center gap-2 rounded-xl bg-red-500/10 px-4 py-2 text-sm font-medium text-red-300 transition hover:bg-red-500/20"
        >

          <Trash2 size={16} />

          Clear All

        </button>

      </div>

      {/* Loading */}

      {loading && (

        <div className="space-y-4 p-6">

          {[1,2,3].map((item)=>(

            <div
              key={item}
              className="animate-pulse rounded-2xl bg-slate-800 p-5"
            >

              <div className="mb-4 h-4 w-32 rounded bg-slate-700"></div>

              <div className="h-3 w-full rounded bg-slate-700"></div>

              <div className="mt-2 h-3 w-2/3 rounded bg-slate-700"></div>

            </div>

          ))}

        </div>

      )}
            {/* Error */}

      {!loading && error && (

        <div className="flex flex-col items-center justify-center py-12 px-6">

          <div className="mb-4 rounded-full bg-red-500/10 p-4">

            <BellRing
              size={34}
              className="text-red-400"
            />

          </div>

          <h3 className="text-lg font-semibold text-white">
            Something went wrong
          </h3>

          <p className="mt-2 text-center text-sm text-slate-400">
            {error}
          </p>

        </div>

      )}

      {/* Empty State */}

      {!loading &&
        !error &&
        notifications.length === 0 && (

          <div className="flex flex-col items-center justify-center py-14 px-6">

            <div className="mb-5 rounded-full bg-slate-800 p-5">

              <BellRing
                size={38}
                className="text-cyan-400"
              />

            </div>

            <h3 className="text-xl font-bold text-white">

              You're all caught up!

            </h3>

            <p className="mt-2 text-center text-sm leading-6 text-slate-400">

              No new notifications yet.
              <br />
              We'll notify you whenever something important happens.

            </p>

          </div>

      )}

      {/* Notification List */}

      {!loading &&
        !error &&
        notifications.length > 0 && (

          <div
            className="
              max-h-[450px]
              overflow-y-auto
              scroll-smooth
            "
          >

            {notifications.map((notification) => (

              <NotificationItem
                key={notification._id}
                notification={notification}
                refreshNotifications={refreshNotifications}
              />

            ))}

          </div>

      )}

      {/* Footer */}

      <div className="border-t border-slate-700 bg-slate-900/80 px-6 py-4">

        <div className="flex items-center justify-center">

          <p className="text-xs text-slate-500">

            Nexora AI • Notifications

          </p>

        </div>

      </div>

    </motion.div>

  );
}