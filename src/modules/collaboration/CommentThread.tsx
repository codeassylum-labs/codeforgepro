import React from 'react';

const comments = [
  { user: 'Lon', text: 'Let’s add a fallback response here.' },
  { user: 'Amina', text: 'Good idea! I’ll handle it.' }
];

const CommentThread: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md p-6 mt-6">
    <h3 className="text-lg font-semibold mb-4">Comments</h3>
    <ul className="space-y-2 text-sm text-gray-700">
      {comments.map((c, idx) => (
        <li key={idx}><strong>{c.user}:</strong> {c.text}</li>
      ))}
    </ul>
  </div>
);

export default CommentThread;
