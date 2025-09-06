import React from 'react';
import ThemeManager from './ThemeManager';
import LanguageSelector from './LanguageSelector';
import MotionSettings from './MotionSettings';

const GlobalSettings: React.FC = () => (
  <div className="p-8 bg-[#F5F7FA] min-h-screen">
    <h2 className="text-2xl font-bold text-[#1E88E5] mb-6">⚙️ Global Settings</h2>
    <ThemeManager />
    <LanguageSelector />
    <MotionSettings />
  </div>
);

export default GlobalSettings;
