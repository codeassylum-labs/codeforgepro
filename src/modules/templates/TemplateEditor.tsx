import React from 'react';
import TemplatePreview from './TemplatePreview';
import TemplateSaveButton from './TemplateSaveButton';
import TemplateShareButton from './TemplateShareButton';

const TemplateEditor: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-lg font-semibold mb-4">Edit Template</h3>
    <TemplatePreview />
    <div className="flex space-x-4 mt-6">
      <TemplateSaveButton />
      <TemplateShareButton />
    </div>
  </div>
);

export default TemplateEditor;
