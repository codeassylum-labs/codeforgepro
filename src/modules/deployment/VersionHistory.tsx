import React from 'react';
import VersionTag from './VersionTag';

const versions = [
  { id: 'v1.0.0', date: '2025-08-01', status: 'Stable' },
  { id: 'v1.1.0', date: '2025-08-15', status: 'Beta' },
  { id: 'v2.0.0', date: '2025-09-01', status: 'Live' }
];

const VersionHistory: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-lg font-semibold mb-4">Version History</h3>
    <ul className="space-y-2 text-sm text-gray-700">
      {versions.map((v) => (
        <li key={v.id}>
          <VersionTag id={v.id} status={v.status} /> — {v.date}
        </li>
      ))}
    </ul>
  </div>
);

export default VersionHistory;
