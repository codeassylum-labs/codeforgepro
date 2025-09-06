import axios from 'axios';

export const createStripeSession = async (userId: string, amount: number): Promise<string> => {
  const response = await axios.post('/api/payments/checkout', { userId, amount });
  return response.data.sessionUrl;
};

export const fetchTransactions = async (userId: string): Promise<any[]> => {
  const response = await axios.get(`/api/payments/${userId}/transactions`);
  return response.data;
};
