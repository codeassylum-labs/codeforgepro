import React, { useEffect, useState } from 'react';
import { fetchUser } from './UserAPI';

const UserProfile: React.FC<{ userId: string }> = ({ userId }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-2">Profile</h3>
      <p className="text-sm text-gray-600">Email: {user.email}</p>
      <p className="text-sm text-gray-600">Created: {new Date(user.createdAt).toLocaleDateString()}</p>
    </div>
  );
};

export default UserProfile;
