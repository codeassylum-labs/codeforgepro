import React from 'react';

const BoosterModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
      <h3 className="text-lg font-semibold mb-2">🚀 Boost Your Agent</h3>
      <p className="text-sm text-gray-600 mb-4">Try shortening response time and adding fallback logic.</p>
      <button className="btn-primary" onClick={onClose}>Got it</button>
    </div>
  </div>
);

export default BoosterModal;
