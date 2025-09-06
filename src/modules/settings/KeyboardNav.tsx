import React, { useEffect } from 'react';

const KeyboardNav: React.FC = () => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') alert('Escape pressed: closing modal');
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return null;
};

export default KeyboardNav;
