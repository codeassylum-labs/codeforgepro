import React from 'react';
import Sidebar from '../components/Sidebar';

const layoutStyle = "flex min-h-screen bg-[#F5F7FA]";
const contentStyle = "flex-1 p-8 overflow-y-auto";
const headerStyle = "text-2xl font-bold text-[#1E88E5] mb-6";
const gridStyle = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
const cardStyle = "bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition";

const topCreators = [
  { name: "Lon 🇳🇬", earnings: "₦45,000", badge: "Forge Architect" },
  { name: "Amina 🇰🇪", earnings: "₦32,000", badge: "Workflow Queen" },
  { name: "Kwame 🇬🇭", earnings: "₦28,500", badge: "Marketplace Pro" }
];

const Dashboard: React.FC = () => (
  <div className={layoutStyle}>
    <Sidebar />
    <main className={contentStyle}>
      <h1 className={headerStyle}>Welcome back, Lon 👋</h1>
      <div className={gridStyle}>
        {topCreators.map((creator, idx) => (
          <div key={idx} className={cardStyle}>
            <h3 className="text-lg font-semibold">{creator.name}</h3>
            <p className="text-sm text-[#D81B60] font-bold">Earnings: {creator.earnings}</p>
            <span className="inline-block bg-[#1E88E5] text-white text-xs px-3 py-1 rounded-full mt-2">{creator.badge}</span>
          </div>
        ))}
      </div>
    </main>
  </div>
);

export default Dashboard;
