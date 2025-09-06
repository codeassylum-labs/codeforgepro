import axios from 'axios';

export const fetchHeatmapData = async (): Promise<any[]> => {
  const response = await axios.get('/api/heatmap');
  return response.data;
};
