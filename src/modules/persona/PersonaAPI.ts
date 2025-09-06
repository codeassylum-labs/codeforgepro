import axios from 'axios';

export const savePersona = async (persona: any): Promise<void> => {
  await axios.post('/api/persona/save', persona);
};

export const fetchPersona = async (id: string): Promise<any> => {
  const response = await axios.get(`/api/persona/${id}`);
  return response.data;
};
