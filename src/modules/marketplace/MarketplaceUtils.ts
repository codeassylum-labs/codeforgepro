import { AgentListing } from './AgentStore';

export const formatPrice = (price: number): string => `₦${price.toFixed(2)}`;

export const sortByCategory = (agents: AgentListing[], category: string): AgentListing[] =>
  agents.filter((agent) => agent.category === category);
