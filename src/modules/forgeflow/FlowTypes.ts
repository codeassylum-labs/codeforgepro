export type TriggerType = 'On Message' | 'On Form Submit' | 'On Schedule' | 'On API Call';

export interface ActionConfig {
  type: string;
  config: Record<string, any>;
}

export interface ForgeFlow {
  id: string;
  name: string;
  trigger: TriggerType;
  actions: ActionConfig[];
  createdAt: string;
  updatedAt: string;
}
