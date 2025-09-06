import React from 'react';

const logs = [
  'Agent started at 10:00 AM',
  'Received 120 messages',
  'Sent 110 responses',
  'Paused at 2:00 PM'
];

const RuntimeLog: React.FC = () => (
  <div className="bg-[#F5F7FA] rounded-md p-4 text-sm text-gray-700">
    <h4 className="font-semibold mb-2">Runtime Log</h4>
    <ul className="space-y-1">
      {logs.map((log, idx) => (
        <li key={idx}>• {log}</li>
      ))}
    </ul>
  </div>
);

export default RuntimeLog;
