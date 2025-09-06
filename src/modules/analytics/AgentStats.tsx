import React from 'react';
import MetricCard from './MetricCard';

const AgentStats: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <MetricCard label="Active Agents" value="12" />
    <MetricCard label="Avg Response Time" value="1.2s" />
    <MetricCard label="Conversion Rate" value="8.4%" />
  </div>
);

export default AgentStats;
