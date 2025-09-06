import axios from 'axios';
import { Wallet } from './WalletTypes';

export const fetchWallet = async (userId: string): Promise<Wallet> => {
  const response = await axios.get(`/api/wallet/${userId}`);
  return response.data;
};

export const updateCredits = async (userId: string, amount: number): Promise<void> => {
  await axios.post(`/api/wallet/${userId}/credits`, { amount });
};
