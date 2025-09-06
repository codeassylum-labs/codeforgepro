import axios from 'axios';
import { SpotlightCreator } from './SpotlightTypes';

export const fetchSpotlight = async (): Promise<SpotlightCreator[]> => {
  const response = await axios.get('/api/spotlight');
  return response.data;
};
