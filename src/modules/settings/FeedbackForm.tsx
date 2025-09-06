import React, { useState } from 'react';

const FeedbackForm: React.FC = () => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    alert(`Feedback submitted: ${text}`);
    setText('');
  };

  return (
    <form className="bg-white rounded-lg shadow-md p-6 mt-6" onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
      <h3 className="text-lg font-semibold mb-4">💬 Feedback</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full mb-4"
        placeholder="Share your thoughts..."
      />
      <button className="btn-primary" type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
