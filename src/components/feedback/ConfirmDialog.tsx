import React from 'react';
import ModalOverlay from './ModalOverlay';

const ConfirmDialog: React.FC<{ message: string; onConfirm: () => void; onCancel: () => void }> = ({
  message,
  onConfirm,
  onCancel
}) => (
  <ModalOverlay onClose={onCancel}>
    <p className="text-sm text-gray-700 mb-4">{message}</p>
    <div className="flex justify-end space-x-4">
      <button className="btn-secondary" onClick={onCancel}>Cancel</button>
      <button className="btn-primary" onClick={onConfirm}>Confirm</button>
    </div>
  </ModalOverlay>
);

export default ConfirmDialog;
