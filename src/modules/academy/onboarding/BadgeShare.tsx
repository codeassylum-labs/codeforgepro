import React from 'react';

const BadgeShare: React.FC<{ name: string }> = ({ name }) => (
  <div className="text-center mt-6">
    <p className="text-sm text-gray-600 mb-2">🎉 {name}, you're officially certified!</p>
    <button
      className="bg-[#D81B60] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#C2185B]"
      onClick={() => alert('Shared to social!')}
    >
      Share Your Badge
    </button>
  </div>
);

export default BadgeShare;
