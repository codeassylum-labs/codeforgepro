import React from 'react';

const avatars = ['🤖', '🧠', '🦾', '🧙‍♂️', '🕵️‍♀️'];

const AvatarPicker: React.FC = () => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-2">Avatar</label>
    <div className="flex space-x-4">
      {avatars.map((avatar, idx) => (
        <button key={idx} className="text-2xl hover:scale-125 transition">{avatar}</button>
      ))}
    </div>
  </div>
);

export default AvatarPicker;
