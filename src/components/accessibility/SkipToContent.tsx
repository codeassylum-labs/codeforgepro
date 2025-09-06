import React from 'react';

const SkipToContent: React.FC = () => (
  <a
    href="#main"
    className="absolute top-0 left-0 bg-[#1E88E5] text-white px-4 py-2 z-50 focus:translate-y-0 -translate-y-full transition-transform"
  >
    Skip to main content
  </a>
);

export default SkipToContent;
