export interface ForgeFlow {
  id: string;
  name: string;
  trigger: string;
  actions: { type: string; config: any }[];
  createdAt: string;
  updatedAt: string;
}
