import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex min-h-screen">
    <Sidebar />
    <div className="flex-1">
      <Navbar />
      <main className="p-8">{children}</main>
    </div>
  </div>
);

export default LayoutWrapper;
