import React, { useEffect } from 'react';

const KeyboardShortcuts: React.FC = () => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k') {
        alert('Shortcut triggered: Open command palette');
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return null;
};

export default KeyboardShortcuts;
