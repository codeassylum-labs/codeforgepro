import React, { useState } from 'react';

const InviteMember: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleInvite = () => {
    alert(`Invitation sent to ${email}`);
    setEmail('');
  };

  return (
    <div className="mb-6">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 w-full mb-2"
        placeholder="Invite by email"
      />
      <button className="btn-primary" onClick={handleInvite}>Send Invite</button>
    </div>
  );
};

export default InviteMember;
