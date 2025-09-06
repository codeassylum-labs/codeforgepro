import React from 'react';
import InsightGrid from './InsightGrid';
import InsightSidebar from './InsightSidebar';
import InsightToolbar from './InsightToolbar';

const AnalyticsDashboard: React.FC = () => (
  <div className="flex min-h-screen bg-[#F5F7FA]">
    <InsightSidebar />
    <main className="flex-1 p-8">
      <InsightToolbar />
      <InsightGrid />
    </main>
  </div>
);

export default AnalyticsDashboard;
