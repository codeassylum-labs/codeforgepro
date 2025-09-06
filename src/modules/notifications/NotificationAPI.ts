import axios from 'axios';
import { Notification } from './NotificationTypes';

export const fetchNotifications = async (): Promise<Notification[]> => {
  const response = await axios.get('/api/notifications');
  return response.data;
};

export const markAsRead = async (id: string): Promise<void> => {
  await axios.post(`/api/notifications/${id}/read`);
};
