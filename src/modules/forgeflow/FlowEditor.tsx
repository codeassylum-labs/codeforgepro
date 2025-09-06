import React from 'react';
import TriggerSelector from './TriggerSelector';
import ActionBlocks from './ActionBlocks';
import FlowSaveButton from './FlowSaveButton';
import FlowRunButton from './FlowRunButton';

const FlowEditor: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-lg font-semibold mb-4">ForgeFlow Editor</h3>
    <TriggerSelector />
    <ActionBlocks />
    <div className="flex space-x-4 mt-6">
      <FlowSaveButton />
      <FlowRunButton />
    </div>
  </div>
);

export default FlowEditor;
