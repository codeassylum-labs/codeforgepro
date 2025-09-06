import { z } from 'zod';

export const WalletSchema = z.object({
  userId: z.string(),
  credits: z.number().min(0),
  earnings: z.number().min(0),
  lastPayout: z.string().optional(),
});
