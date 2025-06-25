import React from 'react';

// Define Prop Types for SkillPill component
interface SkillPillProps {
  icon: React.ReactNode;
  text: string;
}

const SkillPill: React.FC<SkillPillProps> = ({ icon, text }) => (
  <div className="flex items-center space-x-2 bg-gray-800 border border-gray-700 px-4 py-2 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-gray-200">
    {icon}
    <span>{text}</span>
  </div>
);

export default SkillPill;

