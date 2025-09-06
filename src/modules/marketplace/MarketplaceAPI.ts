import axios from 'axios';
import { AgentListing } from './AgentStore';

export const listAgent = async (agent: AgentListing): Promise<void> => {
  await axios.post('/api/marketplace/list', agent);
};

export const fetchMarketplace = async (): Promise<AgentListing[]> => {
  const response = await axios.get('/api/marketplace');
  return response.data;
};
