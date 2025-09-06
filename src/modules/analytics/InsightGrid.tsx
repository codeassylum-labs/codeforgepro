import React from 'react';
import MetricCard from './MetricCard';

const metrics = [
  { label: 'Total Earnings', value: '₦45,000', trend: 'up' },
  { label: 'Active Agents', value: '12', trend: 'up' },
  { label: 'Avg Response Time', value: '1.2s', trend: 'down' }
];

const InsightGrid: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {metrics.map((m, idx) => (
      <MetricCard key={idx} label={m.label} value={m.value} trend={m.trend as any} />
    ))}
  </div>
);

export default InsightGrid;
