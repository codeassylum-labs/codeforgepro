import axios from 'axios';

export const logFeedback = async (message: string, type: 'success' | 'error'): Promise<void> => {
  await axios.post('/api/feedback/log', { message, type, timestamp: new Date().toISOString() });
};

export const fetchFeedbackLogs = async (): Promise<{ message: string; type: string; timestamp: string }[]> => {
  const response = await axios.get('/api/feedback/logs');
  return response.data;
};
