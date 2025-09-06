import axios from 'axios';

export const login = async (email: string, password: string): Promise<string> => {
  const response = await axios.post('/api/auth/login', { email, password });
  return response.data.token;
};

export const register = async (email: string, password: string): Promise<void> => {
  await axios.post('/api/auth/register', { email, password });
};

export const fetchProfile = async (): Promise<any> => {
  const token = localStorage.getItem('token');
  const response = await axios.get('/api/auth/profile', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return response.data;
};
