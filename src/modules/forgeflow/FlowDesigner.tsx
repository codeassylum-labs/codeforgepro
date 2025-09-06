import React from 'react';

const containerStyle = "p-8 bg-[#F5F7FA] min-h-screen";
const titleStyle = "text-3xl font-bold text-[#1E88E5] mb-6";
const gridStyle = "grid grid-cols-1 md:grid-cols-3 gap-6";
const blockStyle = "bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105 cursor-pointer";
const triggerStyle = "border-l-4 border-[#D81B60] pl-4 mb-4";
const actionStyle = "border-l-4 border-[#1E88E5] pl-4 mb-4";

const FlowDesigner: React.FC = () => (
  <div className={containerStyle}>
    <h2 className={titleStyle}>ForgeFlow Builder</h2>
    <div className={gridStyle}>
      <div className={blockStyle}>
        <div className={triggerStyle}>
          <h4 className="text-lg font-semibold">Trigger</h4>
          <p className="text-sm text-gray-600">On Message Received</p>
        </div>
        <div className={actionStyle}>
          <h4 className="text-lg font-semibold">Action</h4>
          <p className="text-sm text-gray-600">Send Email Response</p>
        </div>
      </div>
    </div>
  </div>
);

export default FlowDesigner;
