import { ForgeFlow } from '../FlowTypesExtended';
import { runTrigger } from './TriggerEngine';
import { runActions } from './ActionEngine';

export const executeFlow = async (flow: ForgeFlow): Promise<string[]> => {
  const logs: string[] = [];
  logs.push(`Trigger: ${flow.trigger}`);
  const triggerResult = await runTrigger(flow.trigger);
  logs.push(`Trigger Result: ${triggerResult}`);
  const actionLogs = await runActions(flow.actions);
  return [...logs, ...actionLogs];
};
