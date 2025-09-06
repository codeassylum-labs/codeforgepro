export interface ForgeAgent {
  id: string;
  name: string;
  prompt: string;
  tone: 'neutral' | 'friendly' | 'professional' | 'sarcastic';
  createdAt: string;
  updatedAt: string;
}
