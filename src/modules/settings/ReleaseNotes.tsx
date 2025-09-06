import React from 'react';

const ReleaseNotes: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md p-6 mt-6">
    <h3 className="text-lg font-semibold mb-4">📦 Release Notes</h3>
    <ul className="text-sm text-gray-700 space-y-2">
      <li>✨ Added analytics overlays and heatmaps</li>
      <li>🧠 Introduced emotion tuning and avatars</li>
      <li>🛠️ Improved accessibility and keyboard nav</li>
    </ul>
  </div>
);

export default ReleaseNotes;
