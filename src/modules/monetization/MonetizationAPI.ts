import axios from 'axios';

export const fetchEarnings = async (): Promise<number> => {
  const response = await axios.get('/api/monetization/earnings');
  return response.data.total;
};

export const requestPayout = async (amount: number): Promise<void> => {
  await axios.post('/api/monetization/payout', { amount });
};

export const fetchAffiliateStats = async (): Promise<any> => {
  const response = await axios.get('/api/monetization/affiliate');
  return response.data;
};
