import { z } from 'zod';

export const AgentListingSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  description: z.string().min(10),
  price: z.number().min(0),
  category: z.string(),
  creator: z.string(),
  createdAt: z.string(),
});
