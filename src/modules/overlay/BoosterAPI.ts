import axios from 'axios';

export const fetchBoosterTips = async (): Promise<any[]> => {
  const response = await axios.get('/api/boosters');
  return response.data;
};
