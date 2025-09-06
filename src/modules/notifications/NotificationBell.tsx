import React from 'react';

const NotificationBell: React.FC<{ unreadCount: number }> = ({ unreadCount }) => (
  <div className="relative">
    <button className="text-[#1E88E5] text-xl">🔔</button>
    {unreadCount > 0 && (
      <span className="absolute top-0 right-0 bg-[#D81B60] text-white text-xs px-2 py-1 rounded-full">
        {unreadCount}
      </span>
    )}
  </div>
);

export default NotificationBell;
