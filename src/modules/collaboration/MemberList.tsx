import React from 'react';

const members = [
  { name: 'Lon', role: 'Admin' },
  { name: 'Amina', role: 'Editor' },
  { name: 'Kwame', role: 'Viewer' }
];

const MemberList: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
    <h3 className="text-lg font-semibold mb-4">Team Members</h3>
    <ul className="space-y-2 text-sm text-gray-700">
      {members.map((m, idx) => (
        <li key={idx}>{m.name} — {m.role}</li>
      ))}
    </ul>
  </div>
);

export default MemberList;
