import React, { useState } from 'react';

const CommentInput: React.FC = () => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    alert(`Comment submitted: ${text}`);
    setText('');
  };

  return (
    <div className="mt-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full mb-2"
        placeholder="Add a comment..."
      />
      <button className="btn-primary" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CommentInput;
