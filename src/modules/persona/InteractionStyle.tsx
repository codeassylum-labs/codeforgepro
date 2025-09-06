import React from 'react';

const styles = ['Formal', 'Casual', 'Witty', 'Empathetic'];

const InteractionStyle: React.FC = () => (
  <div className="mb-6">
    <label className="block text-sm font-medium text-gray-700 mb-2">Interaction Style</label>
    <select className="border border-gray-300 rounded-md p-2 w-full">
      {styles.map((style, idx) => (
        <option key={idx} value={style}>{style}</option>
      ))}
    </select>
  </div>
);

export default InteractionStyle;
