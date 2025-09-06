import { ForgeFlow } from './FlowTypesExtended';

export const formatFlowName = (name: string): string => name.trim().replace(/\s+/g, '-').toLowerCase();

export const sortFlowsByDate = (flows: ForgeFlow[]): ForgeFlow[] =>
  flows.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
