import React from 'react';
import VoiceSelector from './VoiceSelector';
import AvatarPicker from './AvatarPicker';
import EmotionSlider from './EmotionSlider';
import InteractionStyle from './InteractionStyle';
import PersonaPreview from './PersonaPreview';
import PersonaSaveButton from './PersonaSaveButton';
import PersonaShareButton from './PersonaShareButton';

const PersonaDashboard: React.FC = () => (
  <div className="p-8 bg-[#F5F7FA] min-h-screen">
    <h2 className="text-2xl font-bold text-[#1E88E5] mb-6">🎭 Agent Persona</h2>
    <VoiceSelector />
    <AvatarPicker />
    <EmotionSlider />
    <InteractionStyle />
    <PersonaPreview />
    <div className="flex space-x-4 mt-6">
      <PersonaSaveButton />
      <PersonaShareButton />
    </div>
  </div>
);

export default PersonaDashboard;
