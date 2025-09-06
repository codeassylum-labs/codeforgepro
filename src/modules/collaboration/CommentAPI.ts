import axios from 'axios';

export const postComment = async (agentId: string, text: string): Promise<void> => {
  await axios.post(`/api/comments/${agentId}`, { text });
};

export const fetchComments = async (agentId: string): Promise<any[]> => {
  const response = await axios.get(`/api/comments/${agentId}`);
  return response.data;
};
