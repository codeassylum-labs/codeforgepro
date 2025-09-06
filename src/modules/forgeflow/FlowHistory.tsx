import React from 'react';

const mockHistory = [
  { id: 'run_001', status: 'Success', timestamp: '2025-09-01 10:00' },
  { id: 'run_002', status: 'Failed', timestamp: '2025-09-02 14:30' }
];

const FlowHistory: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-lg font-semibold mb-4">Flow History</h3>
    <ul className="text-sm text-gray-700">
      {mockHistory.map((run) => (
        <li key={run.id} className="mb-2">
          <strong>{run.id}</strong> — {run.status} at {run.timestamp}
        </li>
      ))}
    </ul>
  </div>
);

export default FlowHistory;
