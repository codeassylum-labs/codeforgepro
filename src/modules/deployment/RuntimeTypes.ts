export interface AgentRuntimeStatus {
  version: string;
  uptime: string;
  status: 'Live' | 'Paused' | 'Error';
}
