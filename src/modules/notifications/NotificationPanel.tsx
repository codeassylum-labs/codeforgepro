import React from 'react';

const NotificationPanel: React.FC<{ messages: string[] }> = ({ messages }) => (
  <div className="fixed right-0 top-16 w-80 bg-white shadow-lg p-4 z-40">
    <h3 className="text-lg font-semibold mb-2">Notifications</h3>
    <ul className="text-sm text-gray-700 space-y-2">
      {messages.map((msg, idx) => (
        <li key={idx}>{msg}</li>
      ))}
    </ul>
  </div>
);

export default NotificationPanel;
