import axios from 'axios';
import { InsightMetric } from './InsightTypes';

export const fetchMetrics = async (): Promise<InsightMetric[]> => {
  const response = await axios.get('/api/analytics/metrics');
  return response.data;
};
