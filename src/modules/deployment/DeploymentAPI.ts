import axios from 'axios';

export const deployAgent = async (id: string): Promise<void> => {
  await axios.post(`/api/deploy/${id}`);
};

export const rollbackAgent = async (id: string): Promise<void> => {
  await axios.post(`/api/deploy/${id}/rollback`);
};

export const fetchRuntimeStatus = async (id: string): Promise<any> => {
  const response = await axios.get(`/api/deploy/${id}/status`);
  return response.data;
};
