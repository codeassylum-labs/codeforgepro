import React, { useState, useEffect } from 'react';
import Toast from './Toast';

const ToastManager: React.FC = () => {
  const [toasts, setToasts] = useState<{ id: number; message: string; type: string }[]>([]);

  useEffect(() => {
    const handler = (e: CustomEvent) => {
      setToasts((prev) => [...prev, { id: Date.now(), ...e.detail }]);
    };
    window.addEventListener('toast', handler as EventListener);
    return () => window.removeEventListener('toast', handler as EventListener);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setToasts((prev) => prev.slice(1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-4 right-4 space-y-2 z-50">
      {toasts.map((toast) => (
        <Toast key={toast.id} message={toast.message} type={toast.type as any} />
      ))}
    </div>
  );
};

export default ToastManager;
