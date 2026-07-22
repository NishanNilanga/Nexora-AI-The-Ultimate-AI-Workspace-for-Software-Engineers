import api from "./api";

// Get all notifications
export const getNotifications = async () => {
  const response = await api.get("/notifications");
  return response.data;
};

// Create notification
export const createNotification = async (data) => {
  const response = await api.post("/notifications", data);
  return response.data;
};

// Mark one as read
export const markNotificationAsRead = async (id) => {
  const response = await api.patch(`/notifications/${id}/read`);
  return response.data;
};

// Mark all as read
export const markAllNotificationsAsRead = async () => {
  const response = await api.patch("/notifications/read-all");
  return response.data;
};

// Delete one
export const deleteNotification = async (id) => {
  const response = await api.delete(`/notifications/${id}`);
  return response.data;
};

// Clear all
export const clearNotifications = async () => {
  const response = await api.delete("/notifications");
  return response.data;
};