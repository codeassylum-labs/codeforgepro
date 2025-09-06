import React from 'react';
import BoosterCard from './BoosterCard';

const tips = [
  { title: 'Add fallback responses', description: 'Improve reliability during unexpected inputs.' },
  { title: 'Shorten response time', description: 'Optimize logic blocks for faster replies.' }
];

const BoosterTips: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {tips.map((tip, idx) => (
      <BoosterCard key={idx} title={tip.title} description={tip.description} />
    ))}
  </div>
);

export default BoosterTips;
