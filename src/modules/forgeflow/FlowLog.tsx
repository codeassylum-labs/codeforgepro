import React from 'react';

const FlowLog: React.FC<{ logs: string[] }> = ({ logs }) => (
  <div className="bg-[#F5F7FA] rounded-md p-4 text-sm text-gray-700">
    {logs.map((log, idx) => (
      <div key={idx} className="mb-1">• {log}</div>
    ))}
  </div>
);

export default FlowLog;
