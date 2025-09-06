import { ForgeFlow } from './FlowTypesExtended';

export const validateFlow = (flow: ForgeFlow): boolean => {
  return flow.name.length > 0 && flow.actions.length > 0;
};
