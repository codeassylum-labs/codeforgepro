import axios from 'axios';
import { ForgeTemplate } from './TemplateTypes';

export const fetchTemplates = async (): Promise<ForgeTemplate[]> => {
  const response = await axios.get('/api/templates');
  return response.data;
};

export const saveTemplate = async (template: ForgeTemplate): Promise<void> => {
  await axios.post('/api/templates/save', template);
};
