import axios from 'axios';
import { ForgePreset } from './PresetTypes';

export const fetchPresets = async (): Promise<ForgePreset[]> => {
  const response = await axios.get('/api/presets');
  return response.data;
};
