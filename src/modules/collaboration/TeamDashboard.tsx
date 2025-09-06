import React from 'react';
import SharedAgents from './SharedAgents';
import MemberList from './MemberList';
import InviteMember from './InviteMember';

const TeamDashboard: React.FC = () => (
  <div className="p-8 bg-[#F5F7FA] min-h-screen">
    <h2 className="text-2xl font-bold text-[#1E88E5] mb-6">👥 Team Collaboration</h2>
    <InviteMember />
    <MemberList />
    <SharedAgents />
  </div>
);

export default TeamDashboard;
