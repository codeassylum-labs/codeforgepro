import React, { useState } from 'react';

const BugReport: React.FC = () => {
  const [details, setDetails] = useState('');

  const handleReport = () => {
    alert(`Bug reported: ${details}`);
    setDetails('');
  };

  return (
    <form className="bg-white rounded-lg shadow-md p-6 mt-6" onSubmit={(e) => { e.preventDefault(); handleReport(); }}>
      <h3 className="text-lg font-semibold mb-4">🐞 Bug Report</h3>
      <textarea
        value={details}
        onChange={(e) => setDetails(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-full mb-4"
        placeholder="Describe the issue..."
      />
      <button className="btn-secondary" type="submit">Report</button>
    </form>
  );
};

export default BugReport;
