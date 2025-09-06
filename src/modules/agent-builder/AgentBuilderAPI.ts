import axios from 'axios';
import { ForgeAgent } from './AgentTypes';

export const saveAgent = async (agent: ForgeAgent): Promise<void> => {
  await axios.post('/api/agents', agent);
};

export const fetchAgent = async (id: string): Promise<ForgeAgent> => {
  const response = await axios.get(`/api/agents/${id}`);
  return response.data;
};
