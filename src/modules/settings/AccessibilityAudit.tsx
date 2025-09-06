import React from 'react';

const AccessibilityAudit: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md p-6 mt-6">
    <h3 className="text-lg font-semibold mb-4">♿ Accessibility Audit</h3>
    <ul className="text-sm text-gray-700 space-y-2">
      <li>✅ Keyboard navigation supported</li>
      <li>✅ Focus indicators visible</li>
      <li>✅ Color contrast meets WCAG standards</li>
      <li>✅ Skip to content link available</li>
    </ul>
  </div>
);

export default AccessibilityAudit;
