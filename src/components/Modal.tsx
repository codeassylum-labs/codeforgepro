import React from 'react';

interface Props {
  isOpen: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ isOpen, title, children, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white shadow-lg rounded-lg p-6 w-[600px]">
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
        <div>{children}</div>
        <button className="mt-6 text-sm text-[#1E88E5]" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
