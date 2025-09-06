import axios from 'axios';
import { ForgeFlow } from './FlowTypes';

export const saveFlow = async (flow: ForgeFlow): Promise<void> => {
  await axios.post('/api/flows', flow);
};

export const fetchFlow = async (id: string): Promise<ForgeFlow> => {
  const response = await axios.get(`/api/flows/${id}`);
  return response.data;
};
