import React from 'react';

const VersionDiff: React.FC = () => (
  <div className="bg-[#F5F7FA] rounded-md p-4 text-sm text-gray-700">
    <p><strong>v1.0.0 → v1.1.0:</strong> Added fallback response block.</p>
    <p><strong>v1.1.0 → v2.0.0:</strong> Integrated emotion slider and avatar picker.</p>
  </div>
);

export default VersionDiff;
