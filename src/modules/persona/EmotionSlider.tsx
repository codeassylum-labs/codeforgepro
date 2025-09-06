import React from 'react';

const EmotionSlider: React.FC = () => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-2">Emotional Expressiveness</label>
    <input type="range" min="0" max="100" className="w-full" />
  </div>
);

export default EmotionSlider;
