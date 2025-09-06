import React, { useState } from 'react';
import { executeFlow } from './engine/FlowEngine';
import { ForgeFlow } from './FlowTypesExtended';
import FlowLog from './FlowLog';

const FlowRunner: React.FC<{ flow: ForgeFlow }> = ({ flow }) => {
  const [logs, setLogs] = useState<string[]>([]);

  const handleRun = async () => {
    const result = await executeFlow(flow);
    setLogs(result);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">Run Flow</h3>
      <button className="btn-primary mb-4" onClick={handleRun}>Execute</button>
      <FlowLog logs={logs} />
    </div>
  );
};

export default FlowRunner;
