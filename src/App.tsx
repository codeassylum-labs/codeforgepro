import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Academy from './pages/Academy';
import WalletDashboard from './modules/wallet/WalletDashboard';
import FlowDesigner from './modules/forgeflow/FlowDesigner';
import './design/styles.css';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/academy" element={<Academy />} />
      <Route path="/wallet" element={<WalletDashboard />} />
      <Route path="/flow" element={<FlowDesigner />} />
    </Routes>
  </Router>
);

export default App;
