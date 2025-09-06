import React from 'react';

const ModalOverlay: React.FC<{ children: React.ReactNode; onClose: () => void }> = ({ children, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg p-6 w-[500px]">
      {children}
      <button className="mt-4 text-sm text-[#1E88E5]" onClick={onClose}>Close</button>
    </div>
  </div>
);

export default ModalOverlay;
