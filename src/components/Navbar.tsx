import React from 'react';

const Navbar: React.FC = () => (
  <nav className="bg-[#1E88E5] text-white h-16 flex items-center px-6 shadow-md">
    <a href="/" className="mr-6 hover:underline">Home</a>
    <a href="/dashboard" className="mr-6 hover:underline">Dashboard</a>
    <a href="/academy" className="mr-6 hover:underline">Academy</a>
    <a href="/wallet" className="hover:underline">Wallet</a>
  </nav>
);

export default Navbar;
