export const runActions = async (actions: any[]): Promise<string[]> => {
  return actions.map((action, idx) => `Action ${idx + 1}: ${action.type} executed`);
};
