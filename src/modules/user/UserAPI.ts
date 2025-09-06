import axios from 'axios';
import { User } from './UserTypes';

export const fetchUser = async (id: string): Promise<User> => {
  const response = await axios.get(`/api/users/${id}`);
  return response.data;
};
