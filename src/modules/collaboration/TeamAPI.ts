import axios from 'axios';

export const inviteMember = async (email: string): Promise<void> => {
  await axios.post('/api/team/invite', { email });
};

export const fetchTeamMembers = async (): Promise<any[]> => {
  const response = await axios.get('/api/team/members');
  return response.data;
};
